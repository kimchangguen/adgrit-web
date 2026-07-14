import type { Metadata } from "next";
import { SiteHeader } from "../_components/SiteHeader";
import { Footer } from "../_components/Footer";
import { BlogFeaturedSlider, type SliderPost } from "../_components/BlogFeaturedSlider";
import { BlogAnimatedHero } from "../_components/BlogAnimatedHero";
import { BlogCategorySection, type CategoryPostItem } from "../_components/BlogCategorySection";
import { SectionBackdrop } from "../_components/backgrounds/SectionBackdrop";

export const metadata: Metadata = {
  title: "Grit View 블로그",
  description:
    "마케팅 인사이트, 업계 비밀, 전문가 칼럼 등 ADGRIT이 직접 쓰는 성장 콘텐츠를 만나보세요.",
  openGraph: {
    title: "Grit View 블로그 | ADGRIT",
    description:
      "마케팅 인사이트, 업계 비밀, 전문가 칼럼 등 ADGRIT이 직접 쓰는 성장 콘텐츠를 만나보세요.",
    type: "website",
  },
  alternates: { canonical: "/blog" },
};

const WP_BASE = process.env.WP_BASE ?? "";

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
    fetch(`${WP_BASE}/posts?_embed&per_page=100&orderby=date`, { next: { revalidate: 60 } }),
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

  /* 카테고리별 포스트를 클라이언트 컴포넌트용으로 직렬화 */
  const categorySections = postsByCategory.map(({ category, posts: catPosts }) => ({
    category: { id: category.id, name: category.name, slug: category.slug },
    posts: catPosts.slice(0, 6).map((p): CategoryPostItem => ({
      id: p.id,
      slug: p.slug,
      title: stripHTML(p.title.rendered),
      imageUrl: p._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null,
    })),
  }));

  return (
    <div className="min-h-screen text-white">
      <SiteHeader />

      {/* ── 히어로 (클라이언트, Framer Motion 스태거) ─── */}
      <BlogAnimatedHero />

      {/* ── 슬라이더 + 카테고리 그리드 ───────────────── */}
      <section className="ig-section pt-4">
        <SectionBackdrop variant="s7b" />
        <div className="ig-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
          <BlogFeaturedSlider posts={sliderPosts} />
        </div>

        <div
          id="categories"
          className="ig-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-14">
            {categorySections.map(({ category, posts: catPosts }, i) => (
              <BlogCategorySection
                key={category.id}
                category={category}
                posts={catPosts}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
