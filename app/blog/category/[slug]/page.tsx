import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../../_components/SiteHeader";
import { Footer } from "../../../_components/Footer";
import { BlogSidebar } from "../../../_components/BlogSidebar";

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
    <div className="min-h-screen bg-[#f8f9fc] text-[#1a1a2e]">
      <SiteHeader />

      {/* 히어로 */}
      <section className="bg-[#1A237E] pt-28 pb-10 sm:pt-32 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 브레드크럼 */}
          <nav className="flex items-center gap-2 text-xs text-blue-200 mb-4">
            <Link href="/" className="hover:text-white transition-colors">홈</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">블로그</Link>
            <span>/</span>
            <span className="text-white">{category.name}</span>
          </nav>

          <p className="text-blue-200 text-sm font-semibold tracking-widest uppercase mb-2">
            CATEGORY
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            {category.name}
          </h1>
          {category.description && (
            <p className="mt-3 text-blue-100 text-base max-w-2xl">{category.description}</p>
          )}
          <p className="mt-2 text-blue-200 text-sm">총 {category.count}개의 글</p>
        </div>
      </section>

      {/* 본문 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* 왼쪽: 포스트 그리드 */}
          <div className="flex-1 min-w-0">
            {posts.length === 0 ? (
              <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center text-slate-500">
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
                      className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      {/* 썸네일 */}
                      <div className="relative w-full aspect-[16/9] bg-slate-100 overflow-hidden">
                        {thumb ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={thumb}
                            alt={alt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-[#1A237E]/10 via-slate-100 to-slate-50 flex items-center justify-center">
                            <span className="text-4xl opacity-20">📝</span>
                          </div>
                        )}
                        <span className="absolute top-3 left-3 bg-[#1A237E] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                          {category.name}
                        </span>
                      </div>

                      {/* 카드 본문 */}
                      <div className="flex flex-col flex-1 p-5">
                        <time className="text-xs text-slate-400">{formatDate(post.date)}</time>
                        <h2
                          className="mt-2 text-base font-bold text-[#1a1a2e] group-hover:text-[#1A237E] transition-colors line-clamp-2 leading-snug"
                          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />
                        {excerpt && (
                          <p className="mt-2 text-sm text-slate-500 line-clamp-2 leading-relaxed flex-1">
                            {excerpt}
                          </p>
                        )}
                        <span className="mt-4 text-sm font-semibold text-[#1A237E] group-hover:underline">
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

      <Footer />
    </div>
  );
}
