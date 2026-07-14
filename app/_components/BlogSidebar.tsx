import Image from "next/image";
import Link from "next/link";

const WP_BASE = process.env.WP_BASE ?? "";

type Category = {
  id: number;
  name: string;
  slug: string;
  count: number;
};

type RecentPost = {
  id: number;
  title: { rendered: string };
  slug: string;
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string }>;
  };
};

async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetch(`${WP_BASE}/categories?per_page=20&hide_empty=true`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const all: Category[] = await res.json();
    return all.filter((c) => c.slug !== "uncategorized");
  } catch {
    return [];
  }
}

async function getRecentPosts(): Promise<RecentPost[]> {
  try {
    const res = await fetch(`${WP_BASE}/posts?_embed&per_page=5&orderby=date`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

function stripHTML(html: string) {
  return html.replace(/<[^>]+>/g, "").trim();
}

export async function BlogSidebar({ activeCategorySlug }: { activeCategorySlug?: string }) {
  const [categories, recentPosts] = await Promise.all([getCategories(), getRecentPosts()]);

  return (
    <aside className="blog-sidebar w-full shrink-0 space-y-6">

      {/* CTA 배너 */}
      <div className="ig-btn-gradient rounded-2xl p-6 text-center">
        <p className="text-xs font-semibold tracking-widest text-white/80 uppercase mb-2">
          FREE CONSULTING
        </p>
        <h3 className="text-lg font-bold leading-snug mb-3 text-white">
          마케팅 고민,<br />
          지금 바로 해결하세요
        </h3>
        <p className="text-sm text-white/85 mb-5 leading-relaxed">
          매출 성장을 위한 맞춤 전략을<br />
          무료로 상담해 드립니다.
        </p>
        <a
          href="https://open.kakao.com/o/s2RtMSei"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-xl bg-black/25 py-3 text-sm font-bold text-white hover:bg-black/35 transition-colors"
        >
          무료 상담 신청 →
        </a>
      </div>

      {/* 카테고리 위젯 */}
      <div className="ig-glass-card rounded-2xl p-5">
        <h4 className="text-sm font-black text-white mb-4 pb-3 flex items-center gap-2">
          <span className="inline-block w-1 h-4 rounded bg-[var(--ig-pink)]" />
          카테고리
        </h4>
        <ul className="space-y-1">
          <li>
            <Link
              href="/blog"
              className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                !activeCategorySlug
                  ? "ig-btn-gradient font-semibold"
                  : "text-white/65 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span>전체</span>
              <span className={`text-xs ${!activeCategorySlug ? "text-white/80" : "text-white/40"}`}>
                {categories.reduce((acc, c) => acc + c.count, 0)}
              </span>
            </Link>
          </li>
          {categories.map((cat) => (
            <li key={cat.id}>
              <Link
                href={`/blog/category/${cat.slug}`}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                  activeCategorySlug === cat.slug
                    ? "ig-btn-gradient font-semibold"
                    : "text-white/65 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-xs ${activeCategorySlug === cat.slug ? "text-white/80" : "text-white/40"}`}>
                  {cat.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 최근 글 위젯 */}
      <div className="ig-glass-card rounded-2xl p-5">
        <h4 className="text-sm font-black text-white mb-4 pb-3 flex items-center gap-2">
          <span className="inline-block w-1 h-4 rounded bg-[var(--ig-orange)]" />
          최근 글
        </h4>
        <ul className="space-y-4">
          {recentPosts.map((post) => {
            const thumb = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
            return (
              <li key={post.id}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex gap-3 group items-start"
                >
                  {/* 썸네일 */}
                  <div className="shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-white/5">
                    {thumb ? (
                      <Image
                        src={thumb}
                        alt=""
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[var(--ig-pink)]/15 to-[var(--ig-orange)]/10" />
                    )}
                  </div>
                  {/* 텍스트 */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white/85 group-hover:text-white transition-colors line-clamp-2 leading-snug">
                      {stripHTML(post.title.rendered)}
                    </p>
                    <time className="mt-1 text-xs text-white/40">
                      {new Date(post.date).toLocaleDateString("ko-KR")}
                    </time>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

    </aside>
  );
}
