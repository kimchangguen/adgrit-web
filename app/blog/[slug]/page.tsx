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

const BRAND_SUFFIX = " | 애드그릿(ADGRIT)";
/** 포스트 제목 최대 길이 (브랜드 suffix 포함 약 56자 이내로 유지) */
const TITLE_POST_MAX = 42;

function stripHTML(html: string) {
  return html.replace(/<[^>]+>/g, "").trim();
}

/** &amp; &nbsp; 같은 HTML 엔티티를 평문으로 변환 */
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

/** SEO 제목: 포스트 제목 + 브랜드 suffix (총 56자 이내) */
function buildSeoTitle(rawTitle: string): string {
  const text = stripHTML(rawTitle);
  const truncated =
    text.length > TITLE_POST_MAX ? text.slice(0, TITLE_POST_MAX - 1) + "…" : text;
  return truncated + BRAND_SUFFIX;
}

/**
 * SEO 설명: excerpt(요약)가 있으면 사용, 없으면 본문 앞부분 ~150자 추출.
 * HTML 태그 제거 + 엔티티 디코드 + 공백 정규화 처리.
 */
function buildSeoDescription(post: Post): string {
  const excerpt = decodeEntities(stripHTML(post.excerpt.rendered))
    .replace(/\s+/g, " ")
    .trim();
  if (excerpt.length > 20) {
    return excerpt.length > 155 ? excerpt.slice(0, 154) + "…" : excerpt;
  }
  const content = decodeEntities(stripHTML(post.content.rendered))
    .replace(/\s+/g, " ")
    .trim();
  return content.length > 150 ? content.slice(0, 149) + "…" : content;
}

function extractTextBlocks(html: string): string[] {
  const blockRe =
    /<(?:p|h[1-6]|li|div|dt|dd|blockquote)(?:\s[^>]*)?>([\s\S]*?)<\/(?:p|h[1-6]|li|div|dt|dd|blockquote)>/gi;
  const blocks: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = blockRe.exec(html)) !== null) {
    const text = decodeEntities(stripHTML(m[1])).replace(/\s+/g, " ").trim();
    if (text) blocks.push(text);
  }
  return blocks;
}

function parseFaqFromHtml(html: string): Array<{ question: string; answer: string }> {
  const Q_RE = /^(Q\s*[.．。]\s*|질문\s*[:：]\s*)/i;
  const A_RE = /^(A\s*[.．。]\s*|답변\s*[:：]\s*)/i;
  const blocks = extractTextBlocks(html);
  const faqs: Array<{ question: string; answer: string }> = [];
  let currentQ: string | null = null;
  let answerParts: string[] = [];
  const flush = () => {
    if (currentQ !== null && answerParts.length > 0) {
      faqs.push({ question: currentQ, answer: answerParts.join(" ").trim() });
    }
    currentQ = null;
    answerParts = [];
  };
  for (const block of blocks) {
    if (Q_RE.test(block)) {
      flush();
      currentQ = block.replace(Q_RE, "").trim();
    } else if (currentQ !== null) {
      const text = A_RE.test(block) ? block.replace(A_RE, "").trim() : block;
      if (text) answerParts.push(text);
    }
  }
  flush();
  return faqs;
}

type RelatedPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string | null;
  imageAlt: string;
  date: string;
  categoryName: string;
  categorySlug: string;
};

function toRelatedPost(p: Post): RelatedPost {
  const media = p._embedded?.["wp:featuredmedia"]?.[0];
  const cat = (p._embedded?.["wp:term"]?.[0] ?? [])[0];
  const excerpt = decodeEntities(stripHTML(p.excerpt.rendered))
    .replace(/\s+/g, " ")
    .trim();
  return {
    id: p.id,
    slug: p.slug,
    title: stripHTML(p.title.rendered),
    excerpt: excerpt.length > 80 ? excerpt.slice(0, 79) + "…" : excerpt,
    imageUrl: media?.source_url ?? null,
    imageAlt: media?.alt_text || stripHTML(p.title.rendered),
    date: new Date(p.date).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    categoryName: cat?.name ?? "",
    categorySlug: cat?.slug ?? "",
  };
}

/**
 * 연관 포스팅 최대 count개 반환.
 * 1차: 동일 카테고리 최신순 (현재 글 제외)
 * 2차: 부족하면 최신 전체글로 보충
 */
async function getRelatedPosts(
  currentPostId: number,
  categoryIds: number[],
  count = 3
): Promise<RelatedPost[]> {
  const collected: RelatedPost[] = [];
  const seenIds = new Set<number>([currentPostId]);

  if (categoryIds.length > 0) {
    try {
      const res = await fetch(
        `${WP_BASE}/posts?_embed&categories=${categoryIds[0]}&exclude=${currentPostId}&per_page=${count}&orderby=date&order=desc`,
        { next: { revalidate: 60 } }
      );
      if (res.ok) {
        const posts: Post[] = await res.json();
        for (const p of posts) {
          if (!seenIds.has(p.id)) {
            seenIds.add(p.id);
            collected.push(toRelatedPost(p));
          }
        }
      }
    } catch { /* 폴백으로 이어짐 */ }
  }

  if (collected.length < count) {
    const needed = count - collected.length;
    const excludeQuery = Array.from(seenIds)
      .map((id) => `exclude[]=${id}`)
      .join("&");
    try {
      const res = await fetch(
        `${WP_BASE}/posts?_embed&${excludeQuery}&per_page=${needed}&orderby=date&order=desc`,
        { next: { revalidate: 60 } }
      );
      if (res.ok) {
        const posts: Post[] = await res.json();
        for (const p of posts) {
          if (!seenIds.has(p.id)) {
            collected.push(toRelatedPost(p));
          }
        }
      }
    } catch { /* ignore */ }
  }

  return collected.slice(0, count);
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

  const seoTitle    = buildSeoTitle(post.title.rendered);
  const description = buildSeoDescription(post);
  const postUrl     = `${SITE_URL}/blog/${slug}`;
  const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
  const imageUrl    = featuredMedia?.source_url;
  const imageAlt    = featuredMedia?.alt_text || stripHTML(post.title.rendered);

  return {
    // absolute 사용: root layout template("%s | ADGRIT")을 무시하고 직접 제목 제어
    title: { absolute: seoTitle },
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: seoTitle,
      description,
      type: "article",
      url: postUrl,
      siteName: "애드그릿(ADGRIT)",
      locale: "ko_KR",
      publishedTime: post.date,
      modifiedTime: post.modified ?? post.date,
      ...(imageUrl
        ? { images: [{ url: imageUrl, width: 1200, height: 630, alt: imageAlt }] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
  };
}

/**
 * WordPress 본문 HTML을 가독성 있게 정규화한다.
 * 1. <li> 안에 중첩된 <ul>/<ol> 태그를 제거하고 내용만 보존
 * 2. "2. 2." 같은 중복 수동 번호 패턴을 단일 번호로 치환
 * 3. <li> 내부에 뭉쳐 있는 " 2. ", " 3. " 패턴을 <br /><br />로 강제 분리
 */
function formatContent(html: string): string {
  let result = html;

  // 1. <li> 안에 중첩된 <ul>/<ol> 제거 — 내부 텍스트는 보존
  result = result.replace(/<li([^>]*)>([\s\S]*?)<\/li>/gi, (_match, attrs, content) => {
    const cleaned = content
      .replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (_m: string, inner: string) => inner)
      .replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (_m: string, inner: string) => inner);
    return `<li${attrs}>${cleaned}</li>`;
  });

  // 2. "2. 2." 처럼 같은 번호가 연속 중복되는 패턴 제거
  result = result.replace(/(\d+)\. \1\. /g, '$1. ');

  // 3. <li> 내부에서 " 2. " 이상 수동 번호 패턴 → <br /><br />로 분리
  result = result.replace(/<li([^>]*)>([\s\S]*?)<\/li>/gi, (_match, attrs, content) => {
    if (!/ \d+\. /.test(content)) return _match;
    const processed = content.replace(/ (\d+)\. /g, (_m: string, num: string) => {
      return parseInt(num, 10) <= 1 ? _m : `<br /><br />${num}. `;
    });
    return `<li${attrs}>${processed}</li>`;
  });

  return result;
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

  const relatedPosts = await getRelatedPosts(post.id, post.categories);

  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const faqItems = parseFaqFromHtml(post.content.rendered);
  const faqJsonLd =
    faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map(({ question, answer }) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        }
      : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: stripHTML(post.title.rendered),
    description: buildSeoDescription(post),
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

  const dynamicStyles = `
<style>
  .adgrit-content ol { list-style-type: decimal !important; margin-left: 2rem !important; display: block !important; }
  .adgrit-content ul { list-style-type: disc !important; margin-left: 2rem !important; display: block !important; }
  .adgrit-content li {
    display: list-item !important;
    list-style-position: outside !important;
    margin-bottom: 1.2rem !important;
    line-height: 1.8 !important;
    white-space: pre-line !important;
    clear: both !important;
  }
  .adgrit-content li > p { display: inline !important; }
  .adgrit-content div, .adgrit-content section { display: block !important; }
</style>
`;

  return (
    <div className="min-h-screen bg-[#f8f9fc] text-[#1a1a2e]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
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
                blog-content adgrit-content adgrit-prose
                bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10
                prose prose-lg prose-slate max-w-none !block prose-li:my-2
                [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[#1a1a2e] [&_h2]:mt-8 [&_h2]:mb-4
                [&_h2]:pl-3 [&_h2]:border-l-4 [&_h2]:border-[#1A237E]
                [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-[#1a1a2e] [&_h3]:mt-6 [&_h3]:mb-3
                [&_h3]:pl-3 [&_h3]:border-l-2 [&_h3]:border-[#FF7F00]
                [&_p]:text-slate-700 [&_p]:leading-relaxed [&_p]:mb-4
                [&_ul]:![list-style-type:disc] [&_ul]:![list-style-position:outside] [&_ul]:pl-8 [&_ul]:mb-5
                [&_ol]:![list-style-type:decimal] [&_ol]:![list-style-position:outside] [&_ol]:pl-8 [&_ol]:mb-5
                [&_li]:![display:list-item] [&_li]:![list-style-position:outside] [&_li]:text-slate-700 [&_li]:mb-4 [&_li]:leading-[1.8] [&_li]:pl-1
                [&_li>p]:mb-0 [&_li>p]:![display:block] [&_li>p]:leading-[1.8]
                [&_ul_ul]:mt-2 [&_ul_ul]:mb-2 [&_ol_ol]:mt-2 [&_ol_ol]:mb-2
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
              dangerouslySetInnerHTML={{ __html: dynamicStyles + formatContent(post.content.rendered) }}
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

        {/* 연관 포스팅 섹션 */}
        {relatedPosts.length > 0 && (
          <section className="mt-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-[#1A237E] rounded-full" />
              <h2 className="text-xl font-bold text-[#1a1a2e]">함께 읽으면 좋은 글</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedPosts.map((p) => (
                <Link
                  key={p.id}
                  href={`/blog/${p.slug}`}
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
                >
                  {/* 썸네일 */}
                  <div className="relative aspect-[16/9] bg-slate-100 overflow-hidden">
                    {p.imageUrl ? (
                      <Image
                        src={p.imageUrl}
                        alt={p.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#1A237E]/10 to-slate-200 flex items-center justify-center">
                        <span className="text-4xl opacity-25">📝</span>
                      </div>
                    )}
                    {p.categoryName && (
                      <span className="absolute top-2 left-2 bg-[#FF7F00] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {p.categoryName}
                      </span>
                    )}
                  </div>
                  {/* 텍스트 */}
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-sm font-bold text-[#1a1a2e] leading-snug mb-2 line-clamp-2 group-hover:text-[#1A237E] transition-colors">
                      {p.title}
                    </h3>
                    {p.excerpt && (
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-3">
                        {p.excerpt}
                      </p>
                    )}
                    <time className="mt-auto text-[10px] text-slate-400">{p.date}</time>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
