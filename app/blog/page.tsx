import Link from "next/link";
import { SiteHeader } from "../_components/SiteHeader";
import { Footer } from "../_components/Footer";
import { BlogFeaturedSlider, type SliderPost } from "../_components/BlogFeaturedSlider";

const WP_BASE = "https://wordpress-1580849-6168519.cloudwaysapps.com/wp-json/wp/v2";

/* ─── 타입 ─────────────────────────────────────────── */
type WPPost = {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  categories: number[];
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>;
    "wp:term"?: Array<Array<{ id: number; name: string; slug: string }>>;
  };
};

type WPCategory = {
  id: number;
  name: string;
  slug: string;
  count: number;
};

/* ─── 데이터 패칭 ───────────────────────────────────── */
async function fetchAll(): Promise<{ posts: WPPost[]; categories: WPCategory[] }> {
  const [postsRes, catsRes] = await Promise.all([
    fetch(`${WP_BASE}/posts?_embed&per_page=20&orderby=date`, { next: { revalidate: 60 } }),
    fetch(`${WP_BASE}/categories?per_page=20&hide_empty=true`, { next: { revalidate: 3600 } }),
  ]);

  const posts: WPPost[] = postsRes.ok ? await postsRes.json() : [];
  const categories: WPCategory[] = catsRes.ok ? await catsRes.json() : [];

  return {
    posts,
    categories: categories.filter((c) => c.slug !== "uncategorized"),
  };
}

/* ─── 유틸 ─────────────────────────────────────────── */
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

/* ─── 카테고리 섹션 컴포넌트 ────────────────────────── */
function CategorySection({
  category,
  posts,
}: {
  category: WPCategory;
  posts: WPPost[];
}) {
  if (posts.length === 0) return null;

  return (
    <section>
      {/* 섹션 헤더 */}
      <div className="flex items-center justify-between pb-3 border-b-2 border-[#1A237E]">
        <h2 className="flex items-center gap-2 text-base sm:text-lg font-bold text-[#1a1a2e]">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF7F00]" />
          {category.name}
        </h2>
        <Link
          href={`/blog/category/${category.slug}`}
          className="text-xs sm:text-sm text-slate-500 hover:text-[#1A237E] transition-colors flex items-center gap-1"
        >
          더보기 <span aria-hidden>›</span>
        </Link>
      </div>

      {/* 포스트 리스트 */}
      <ul className="mt-3 space-y-3">
        {posts.slice(0, 3).map((post) => {
          const thumb = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
          const title = stripHTML(post.title.rendered);

          return (
            <li key={post.id}>
              <Link
                href={`/blog/${post.slug}`}
                className="flex items-center gap-3 group"
              >
                {/* 썸네일 */}
                <div className="shrink-0 w-[80px] h-[58px] rounded-lg overflow-hidden bg-slate-100">
                  {thumb ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={thumb}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#1A237E]/10 to-slate-200 flex items-center justify-center text-xl opacity-30">
                      📝
                    </div>
                  )}
                </div>
                {/* 제목 */}
                <p className="flex-1 text-sm font-medium text-[#1a1a2e] group-hover:text-[#1A237E] transition-colors line-clamp-2 leading-snug">
                  {title}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/* ─── 메인 페이지 ────────────────────────────────────── */
export default async function BlogPage() {
  const { posts, categories } = await fetchAll();

  /* 슬라이더용 최신 5개 포스트 */
  const sliderPosts: SliderPost[] = posts.slice(0, 5).map((p) => {
    const catTerms = p._embedded?.["wp:term"]?.[0] ?? [];
    const cat = catTerms[0];
    return {
      slug: p.slug,
      title: stripHTML(p.title.rendered),
      excerpt: stripHTML(p.excerpt.rendered),
      categoryName: cat?.name ?? "블로그",
      categorySlug: cat?.slug ?? "",
      imageUrl: p._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null,
      date: formatDate(p.date),
    };
  });

  /* 카테고리 노출 순서 고정 */
  const CATEGORY_ORDER = [
    "industry-secrets",
    "service-guide",
    "marketing-tips",
    "marketing-guide",
    "expert-column",
    "affiliate-marketing",
  ];

  const catMap = new Map(categories.map((c) => [c.slug, c]));

  const postsByCategory = CATEGORY_ORDER
    .map((slug) => {
      const cat = catMap.get(slug);
      if (!cat) return null;
      return {
        category: cat,
        posts: posts.filter((p) => p.categories.includes(cat.id)),
      };
    })
    .filter((g): g is { category: WPCategory; posts: WPPost[] } => g !== null && g.posts.length > 0);

  return (
    <div className="min-h-screen bg-white text-[#1a1a2e]">
      <SiteHeader />

      {/* ── 히어로 섹션 ──────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-24 pb-10 sm:pt-28 sm:pb-12">
        {/* 우측 추상 그래픽 배경 */}
        <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none" aria-hidden>
          <svg
            viewBox="0 0 600 400"
            className="absolute right-0 top-0 w-full h-full opacity-[0.07]"
            preserveAspectRatio="xMaxYMid slice"
          >
            <ellipse cx="500" cy="200" rx="380" ry="300" fill="#1A237E" />
            <ellipse cx="420" cy="80" rx="200" ry="160" fill="#FF7F00" />
            <ellipse cx="560" cy="340" rx="180" ry="140" fill="#1A237E" />
          </svg>
          {/* 웨이브 라인 */}
          <svg
            viewBox="0 0 600 400"
            className="absolute right-0 top-0 w-full h-full opacity-[0.06]"
            preserveAspectRatio="xMaxYMid slice"
          >
            {[0, 40, 80, 120, 160, 200].map((offset) => (
              <path
                key={offset}
                d={`M -50 ${200 + offset} Q 150 ${130 + offset} 300 ${200 + offset} T 650 ${200 + offset}`}
                stroke="#1A237E"
                strokeWidth="1.5"
                fill="none"
              />
            ))}
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest text-[#FF7F00] uppercase mb-3">
            ADGRIT BLOG
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1a2e] leading-tight">
            마케팅의 모든 것,<br />
            <span className="text-[#1A237E]">애드그릿 블로그</span>
          </h1>
          <p className="mt-4 text-slate-500 text-base sm:text-lg max-w-xl leading-relaxed">
            실전 마케팅 노하우부터 최신 트렌드까지,<br className="hidden sm:block" />
            전문가의 인사이트를 지금 확인하세요.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Link
              href="#categories"
              className="inline-flex items-center gap-2 bg-[#1A237E] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#283593] transition-colors"
            >
              글 둘러보기
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-slate-200 text-slate-600 text-sm font-semibold px-5 py-2.5 rounded-full hover:border-[#1A237E] hover:text-[#1A237E] transition-colors"
            >
              무료 상담
            </Link>
          </div>
        </div>
      </section>

      {/* ── 슬라이더 ─────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
        <BlogFeaturedSlider posts={sliderPosts} />
      </div>

      {/* ── 카테고리별 포스트 그리드 ─────────────────── */}
      <div id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">

        {/* 2열 그리드로 카테고리 섹션 배치 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {postsByCategory.map(({ category, posts: catPosts }) => (
            <CategorySection
              key={category.id}
              category={category}
              posts={catPosts}
            />
          ))}
        </div>

        {/* 전체 보기 버튼 */}
        {posts.length > 0 && (
          <div className="mt-14 text-center">
            <div className="inline-block w-24 h-px bg-slate-200 align-middle mr-4" />
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border border-slate-300 text-slate-600 text-sm font-semibold px-8 py-3 rounded-full hover:border-[#1A237E] hover:text-[#1A237E] transition-colors"
            >
              전체 글 보기
            </Link>
            <div className="inline-block w-24 h-px bg-slate-200 align-middle ml-4" />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
