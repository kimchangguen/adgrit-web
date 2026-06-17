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

function stripHTML(html: string) {
  return html.replace(/<[^>]+>/g, "").trim();
}

function decodeEntities(str: string): string {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#\d+;/g, "")
    .replace(/&[a-z]+;/g, "");
}

function cleanText(html: string): string {
  if (!html) return "";
  const stripped = stripHTML(html);
  const decoded = decodeEntities(stripped);
  return decoded.replace(/\s+/g, " ").trim();
}

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
      .map((post) => {
        // 네이버 서치어드바이저 가독성 및 호환성을 위해 한글 슬러그 디코딩
        const decodedSlug = decodeURIComponent(post.slug);
        const postUrl = `${BASE_URL}/blog/${decodedSlug}`;
        
        const cleanTitle = cleanText(post.title.rendered);
        const cleanDesc = cleanText(post.excerpt?.rendered || "");

        return `
    <item>
      <title><![CDATA[${cleanTitle}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${cleanDesc}]]></description>
    </item>`;
      })
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
