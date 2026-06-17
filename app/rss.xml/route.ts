import { NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.adgritcore.com";
const WP_BASE =
  process.env.WP_BASE ??
  "https://wordpress-1580849-6168519.cloudwaysapps.com/wp-json/wp/v2";

export const revalidate = 3600; // Cache for 1 hour

type WPPost = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
};

export async function GET() {
  try {
    const res = await fetch(
      `${WP_BASE}/posts?per_page=20&orderby=date&_fields=id,slug,date,title,excerpt`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.status}`);
    }

    const posts: WPPost[] = await res.json();

    const items = posts
      .map((post) => `
    <item>
      <title><![CDATA[${post.title.rendered}]]></title>
      <link>${BASE_URL}/blog/${post.slug}</link>
      <guid>${BASE_URL}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.excerpt?.rendered || ""}]]></description>
    </item>`)
      .join("");

    const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>ADGRIT</title>
    <link>${BASE_URL}</link>
    <description>성과로 증명하는 광고대행 ADGRIT</description>
    ${items}
  </channel>
</rss>`;

    return new NextResponse(rss, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "s-maxage=3600, stale-while-revalidate",
      },
    });
  } catch (error) {
    console.error("RSS generation error:", error);
    return new NextResponse("Error generating RSS feed", { status: 500 });
  }
}
