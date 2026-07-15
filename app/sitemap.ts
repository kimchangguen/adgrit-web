import type { MetadataRoute } from "next";
import { sortBlogCategories } from "./blog/categories";

const BASE_URL = "https://www.adgritcore.com";
/* WP_BASE 는 서버 전용 환경변수. 빈 문자열 폴백 대신 실제 엔드포인트를 명시해
   프로덕션에서 WP_BASE 미설정 시 상대경로 fetch 실패를 방지한다. */
const WP_BASE  =
  process.env.WP_BASE ??
  "https://wordpress-1580849-6168519.cloudwaysapps.com/wp-json/wp/v2";

/* ─── WordPress 타입 (필요한 필드만) ──────────────────── */
type WPPost     = { slug: string; date: string; modified: string };
type WPCategory = { slug: string; count: number };

/** 100개 초과 포스트를 처리하기 위해 페이지네이션으로 전체 목록을 수집한다. */
async function fetchAllPosts(): Promise<WPPost[]> {
  const allPosts: WPPost[] = [];
  let page = 1;

  while (true) {
    try {
      const res = await fetch(
        `${WP_BASE}/posts?per_page=100&page=${page}&orderby=date&_fields=slug,date,modified`,
        { next: { revalidate: 3600 } }
      );
      if (!res.ok) break;
      const batch: WPPost[] = await res.json();
      if (batch.length === 0) break;
      allPosts.push(...batch);
      if (batch.length < 100) break; // 마지막 페이지
      page++;
    } catch {
      break;
    }
  }

  return allPosts;
}

async function fetchCategories(): Promise<WPCategory[]> {
  try {
    const res = await fetch(
      `${WP_BASE}/categories?per_page=20&hide_empty=true&_fields=slug,count`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const cats: WPCategory[] = await res.json();
    return sortBlogCategories(cats);
  } catch {
    return [];
  }
}

/* ─── 정적 페이지 목록 ────────────────────────────────── */
const STATIC_PAGES: MetadataRoute.Sitemap = [
  { url: BASE_URL,                              changeFrequency: "weekly",  priority: 1.0 },
  { url: `${BASE_URL}/blog`,                    changeFrequency: "daily",   priority: 0.9 },
  { url: `${BASE_URL}/service/marketing`,       changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/service/google`,          changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/service/sns`,             changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/service/performance`,     changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/service/content`,         changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/service/integrated`,      changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/business/automation`,     changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/business/consulting`,     changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/business/development`,    changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/about`,                   changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE_URL}/history`,                 changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE_URL}/organization`,            changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE_URL}/contact`,                 changeFrequency: "monthly", priority: 0.6 },
];

/* ─── sitemap 메인 ───────────────────────────────────── */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, categories] = await Promise.all([fetchAllPosts(), fetchCategories()]);

  const postPages: MetadataRoute.Sitemap = posts.map((post: WPPost) => ({
    url:             `${BASE_URL}/blog/${post.slug}`,
    lastModified:    new Date(post.modified ?? post.date),
    changeFrequency: "weekly",
    priority:        0.8,
  }));

  const categoryPages: MetadataRoute.Sitemap = categories.map((cat: WPCategory) => ({
    url:             `${BASE_URL}/blog/category/${cat.slug}`,
    lastModified:    new Date(),
    changeFrequency: "weekly",
    priority:        0.7,
  }));

  return [...STATIC_PAGES, ...postPages, ...categoryPages];
}
