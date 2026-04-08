import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://adgrit.co.kr";
const WP_BASE  = process.env.WP_BASE ?? "";

/* ─── WordPress 타입 (필요한 필드만) ──────────────────── */
type WPPost     = { slug: string; date: string; modified: string };
type WPCategory = { slug: string; count: number };

async function fetchPosts(): Promise<WPPost[]> {
  try {
    const res = await fetch(
      `${WP_BASE}/posts?per_page=100&orderby=date&_fields=slug,date,modified`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

async function fetchCategories(): Promise<WPCategory[]> {
  try {
    const res = await fetch(
      `${WP_BASE}/categories?per_page=20&hide_empty=true&_fields=slug,count`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const cats: WPCategory[] = await res.json();
    return cats.filter((c) => c.slug !== "uncategorized" && c.count > 0);
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
  const [posts, categories] = await Promise.all([fetchPosts(), fetchCategories()]);

  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url:             `${BASE_URL}/blog/${post.slug}`,
    lastModified:    new Date(post.modified ?? post.date),
    changeFrequency: "weekly",
    priority:        0.8,
  }));

  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url:             `${BASE_URL}/blog/category/${cat.slug}`,
    lastModified:    new Date(),
    changeFrequency: "weekly",
    priority:        0.7,
  }));

  return [...STATIC_PAGES, ...postPages, ...categoryPages];
}
