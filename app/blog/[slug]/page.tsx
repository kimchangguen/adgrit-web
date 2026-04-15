import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../_components/SiteHeader";
import { Footer } from "../../_components/Footer";
import { BlogSidebar } from "../../_components/BlogSidebar";

const WP_BASE   = process.env.WP_BASE ?? "https://wordpress-1580849-6168519.cloudwaysapps.com/wp-json/wp/v2";
const SITE_URL  = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.adgritcore.com";
const LOGO_URL  = `${SITE_URL}/adgrit-logo-v2.png`;

type Post = {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  modified: string;
  slug: string;
  categories: number[];
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>;
    "wp:term"?: Array<Array<{ id: number; name: string; slug: string }>>;
  };
};

async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const res = await fetch(
      `${WP_BASE}/posts?_embed&slug=${encodeURIComponent(slug)}`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return null;
    const posts: Post[] = await res.json();
    return posts[0] ?? null;
  } catch {
    return null;
  }
}

function stripHTML(html: string) {
  return html.replace(/<[^>]+>/g, "").trim();
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "포스트 없음" };

  const title = stripHTML(post.title.rendered);
  const description = stripHTML(post.excerpt.rendered).slice(0, 160);
  const imageUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      ...(imageUrl ? { images: [{ url: imageUrl, width: 1200, height: 630, alt: title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function PostDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const imageUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const imageAlt = post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || post.title.rendered;
  const catTerms = post._embedded?.["wp:term"]?.[0] ?? [];
  const firstCat = catTerms[0];

  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: stripHTML(post.title.rendered),
    description: stripHTML(post.excerpt.rendered).slice(0, 160),
    datePublished: post.date,
    dateModified: post.modified ?? post.date,
    url: postUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    author: {
      "@type": "Person",
      name: "애드그릿",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "애드그릿",
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
    ...(imageUrl
      ? { image: { "@type": "ImageObject", url: imageUrl, alt: imageAlt } }
      : {}),
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc] text-[#1a1a2e]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      {/* 히어로 */}
      <section className="bg-[#1A237E] pt-28 pb-10 sm:pt-32 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 브레드크럼 */}
          <nav className="flex items-center gap-2 text-xs text-blue-200 mb-4 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">홈</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">블로그</Link>
            {firstCat && (
              <>
                <span>/</span>
                <Link
                  href={`/blog/category/${firstCat.slug}`}
                  className="hover:text-white transition-colors"
                >
                  {firstCat.name}
                </Link>
              </>
            )}
          </nav>

          {/* 카테고리 뱃지 */}
          {firstCat && (
            <Link
              href={`/blog/category/${firstCat.slug}`}
              className="inline-block mb-3 bg-[#FF7F00] text-white text-xs font-bold px-3 py-1 rounded-full hover:bg-orange-500 transition-colors"
            >
              {firstCat.name}
            </Link>
          )}

          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight max-w-4xl"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <time className="mt-3 block text-sm text-blue-200">{formatDate(post.date)}</time>
        </div>
      </section>

      {/* 본문 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* 왼쪽: 아티클 */}
          <article className="flex-1 min-w-0">

            {/* 대표 이미지 */}
            {imageUrl ? (
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 mb-8">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <div className="w-full aspect-[16/9] rounded-2xl bg-gradient-to-br from-[#1A237E]/10 to-slate-100 mb-8 flex items-center justify-center">
                <span className="text-6xl opacity-20">📝</span>
              </div>
            )}

            {/* 본문 콘텐츠 */}
            <div
              className="
                bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10
                prose prose-slate max-w-none
                [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[#1a1a2e] [&_h2]:mt-8 [&_h2]:mb-4
                [&_h2]:pl-3 [&_h2]:border-l-4 [&_h2]:border-[#1A237E]
                [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-[#1a1a2e] [&_h3]:mt-6 [&_h3]:mb-3
                [&_h3]:pl-3 [&_h3]:border-l-2 [&_h3]:border-[#FF7F00]
                [&_p]:text-slate-700 [&_p]:leading-relaxed [&_p]:mb-4
                [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul>li]:text-slate-700 [&_ul>li]:mb-1
                [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol>li]:text-slate-700 [&_ol>li]:mb-1
                [&_a]:text-[#1A237E] [&_a:hover]:underline
                [&_strong]:font-bold [&_strong]:text-[#1a1a2e]
                [&_blockquote]:border-l-4 [&_blockquote]:border-[#1A237E] [&_blockquote]:bg-slate-50
                [&_blockquote]:pl-4 [&_blockquote]:py-3 [&_blockquote]:my-4 [&_blockquote]:rounded-r-lg
                [&_blockquote]:text-slate-600 [&_blockquote]:italic
                [&_table]:w-full [&_table]:border-collapse [&_table]:my-4
                [&_th]:bg-[#1A237E] [&_th]:text-white [&_th]:px-3 [&_th]:py-2 [&_th]:text-sm [&_th]:font-semibold
                [&_td]:border [&_td]:border-slate-200 [&_td]:px-3 [&_td]:py-2 [&_td]:text-sm [&_td]:text-slate-700
                [&_tr:nth-child(even)_td]:bg-slate-50
                [&_img]:rounded-xl [&_img]:w-full [&_img]:my-4
                [&_hr]:border-slate-200 [&_hr]:my-6
              "
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />

            {/* 하단 내비게이션 */}
            <div className="mt-8 flex items-center justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#1A237E] transition-colors"
              >
                ← 목록으로
              </Link>
              {firstCat && (
                <Link
                  href={`/blog/category/${firstCat.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A237E] hover:underline"
                >
                  {firstCat.name} 글 더보기 →
                </Link>
              )}
            </div>
          </article>

          {/* 우측: 사이드바 */}
          <BlogSidebar />
        </div>
      </main>

      <Footer />
    </div>
  );
}
