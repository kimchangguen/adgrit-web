import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../../_components/SiteHeader";
import { Footer } from "../../../_components/Footer";
import { BlogSidebar } from "../../../_components/BlogSidebar";
import { SectionBackdrop } from "../../../_components/backgrounds/SectionBackdrop";

const WP_BASE = process.env.WP_BASE ?? "";

type Category = {
  id: number;
  name: string;
  slug: string;
  count: number;
  description: string;
};

type Post = {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  slug: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>;
    "wp:term"?: Array<Array<{ id: number; name: string; slug: string }>>;
  };
};

async function getCategoryBySlug(slug: string): Promise<Category | null> {
  try {
    const res = await fetch(`${WP_BASE}/categories?slug=${encodeURIComponent(slug)}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const cats: Category[] = await res.json();
    return cats[0] ?? null;
  } catch {
    return null;
  }
}

async function getPostsByCategory(categoryId: number): Promise<Post[]> {
  try {
    const res = await fetch(
      `${WP_BASE}/posts?_embed&per_page=20&orderby=date&categories=${categoryId}`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
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
  const category = await getCategoryBySlug(slug);
  if (!category) return { title: "카테고리" };

  return {
    title: `${category.name} — 블로그`,
    description:
      category.description ||
      `ADGRIT 블로그 ${category.name} 카테고리 — 총 ${category.count}개 글`,
    alternates: { canonical: `/blog/category/${slug}` },
    openGraph: {
      title: `${category.name} | ADGRIT 블로그`,
      type: "website",
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) notFound();

  const posts = await getPostsByCategory(category.id);

  return (
    <div className="min-h-screen text-white">
      <SiteHeader />

      {/* 히어로 */}
      <section className="ig-section pt-28 pb-10 sm:pt-32 sm:pb-12">
        <SectionBackdrop variant="s3" />
        <div className="ig-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 브레드크럼 */}
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-4">
            <Link href="/" className="hover:text-white transition-colors">홈</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">블로그</Link>
            <span>/</span>
            <span className="text-white">{category.name}</span>
          </nav>

          <p className="text-white/50 text-sm font-semibold tracking-widest uppercase mb-2">
            CATEGORY
          </p>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            <span className="ig-gradient-text">{category.name}</span>
          </h1>
          {category.description && (
            <p className="mt-3 text-white/70 text-base max-w-2xl">{category.description}</p>
          )}
          <p className="mt-2 text-white/50 text-sm">총 {category.count}개의 글</p>
        </div>
      </section>

      {/* 본문 */}
      <section className="ig-section">
        <SectionBackdrop variant="s7b" />
        <main className="ig-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* 왼쪽: 포스트 그리드 */}
          <div className="flex-1 min-w-0">
            {posts.length === 0 ? (
              <div className="ig-glass-card rounded-2xl p-12 text-center text-white/60">
                이 카테고리에 등록된 글이 없습니다.
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2">
                {posts.map((post) => {
                  const thumb = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
                  const alt = post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || stripHTML(post.title.rendered);
                  const excerpt = stripHTML(post.excerpt.rendered);

                  return (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="ig-glass-card group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/35"
                    >
                      {/* 썸네일 */}
                      <div className="relative w-full aspect-[16/9] bg-white/5 overflow-hidden">
                        {thumb ? (
                          <Image
                            src={thumb}
                            alt={alt}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-[var(--ig-pink)]/15 via-[var(--ig-orange)]/10 to-transparent flex items-center justify-center">
                            <span className="text-4xl opacity-30">📝</span>
                          </div>
                        )}
                        <span className="ig-btn-gradient absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full">
                          {category.name}
                        </span>
                      </div>

                      {/* 카드 본문 */}
                      <div className="flex flex-col flex-1 p-5">
                        <time className="text-xs text-white/40">{formatDate(post.date)}</time>
                        <h2
                          className="mt-2 text-base font-black text-white group-hover:text-[var(--ig-pink)] transition-colors line-clamp-2 leading-snug"
                          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />
                        {excerpt && (
                          <p className="mt-2 text-sm text-white/55 line-clamp-2 leading-relaxed flex-1">
                            {excerpt}
                          </p>
                        )}
                        <span className="ig-gradient-text mt-4 text-sm font-semibold group-hover:underline">
                          자세히 보기 →
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* 우측: 사이드바 */}
          <BlogSidebar activeCategorySlug={slug} />
        </div>
        </main>
      </section>

      <Footer />
    </div>
  );
}
