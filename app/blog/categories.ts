export const BLOG_CATEGORIES = [
  { name: "인스타그램 대행", slug: "instagram-daehaeng" },
  { name: "인스타그램 마케팅", slug: "instagram-marketing" },
  { name: "인스타그램 사용 가이드", slug: "instagram-marketing-guide" },
  { name: "인스타그램 알고리즘", slug: "instagram-seo-tips" },
  { name: "인스타그램 육성 노출", slug: "instagram-growth" },
  { name: "인스타그램 팁", slug: "instagram-tips" },
] as const;

export type BlogCategorySlug = (typeof BLOG_CATEGORIES)[number]["slug"];

export const BLOG_CATEGORY_SLUGS = BLOG_CATEGORIES.map(({ slug }) => slug);

const BLOG_CATEGORY_SLUG_SET = new Set<string>(BLOG_CATEGORY_SLUGS);

export function isBlogCategorySlug(slug: string): slug is BlogCategorySlug {
  return BLOG_CATEGORY_SLUG_SET.has(slug);
}

export function sortBlogCategories<T extends { slug: string }>(categories: T[]): T[] {
  const bySlug = new Map(categories.map((category) => [category.slug, category]));
  return BLOG_CATEGORY_SLUGS.flatMap((slug) => {
    const category = bySlug.get(slug);
    return category ? [category] : [];
  });
}
