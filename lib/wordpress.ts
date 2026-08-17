import { cache } from "react";

/**
 * WordPress REST API 데이터 레이어 (공통).
 *
 * - React cache()로 동일 렌더 패스 내 중복 fetch를 제거한다
 *   (예: generateMetadata와 page가 같은 slug를 조회해도 실제 요청은 1회).
 * - 데이터 종류별로 revalidate 시간을 분리해 캐시 신선도와 속도를 함께 맞춘다.
 * - 목록성 조회는 `_fields`로 필요한 필드만 받아 payload를 줄인다.
 */

export const WP_BASE =
  process.env.WP_BASE ?? "https://wordpress-1580849-6168519.cloudwaysapps.com/wp-json/wp/v2";

/** 데이터 종류별 캐시 시간(초). */
export const REVALIDATE = {
  post: 300,
  postList: 300,
  related: 600,
  categories: 1800,
} as const;

/** 목록/카드용 조회에서 요청할 필드. content(본문)는 제외해 payload를 줄인다. */
const LIST_FIELDS = "id,slug,title,excerpt,date,categories,_links,_embedded";

export type WPMedia = { source_url: string; alt_text: string };
export type WPTerm = { id: number; name: string; slug: string };

type WPEmbedded = {
  "wp:featuredmedia"?: WPMedia[];
  "wp:term"?: WPTerm[][];
};

/** 목록/카드/관련글에서 쓰는 요약 포스트 (본문 미포함). */
export type WPPostSummary = {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  categories: number[];
  _embedded?: WPEmbedded;
};

/** 상세페이지용 포스트 (본문 포함). */
export type WPPostDetail = WPPostSummary & {
  content: { rendered: string };
  modified: string;
};

export type WPCategory = {
  id: number;
  name: string;
  slug: string;
  count: number;
  description?: string;
};

/** slug로 게시글 단건 조회(본문 포함). */
export const getPostBySlug = cache(async (slug: string): Promise<WPPostDetail | null> => {
  try {
    const res = await fetch(`${WP_BASE}/posts?_embed&slug=${encodeURIComponent(slug)}`, {
      next: { revalidate: REVALIDATE.post },
    });
    if (!res.ok) return null;
    const posts: WPPostDetail[] = await res.json();
    return posts[0] ?? null;
  } catch {
    return null;
  }
});

/**
 * 연관 포스팅 조회.
 * 1차: 동일 카테고리 최신순 (현재 글 제외)
 * 2차: 부족하면 최신 전체글로 보충
 */
export const getRelatedPosts = cache(
  async (currentPostId: number, categoryIds: number[], count = 3): Promise<WPPostSummary[]> => {
    const collected: WPPostSummary[] = [];
    const seenIds = new Set<number>([currentPostId]);

    if (categoryIds.length > 0) {
      try {
        const res = await fetch(
          `${WP_BASE}/posts?_embed&categories=${categoryIds[0]}&exclude=${currentPostId}&per_page=${count}&orderby=date&order=desc&_fields=${LIST_FIELDS}`,
          { next: { revalidate: REVALIDATE.related } }
        );
        if (res.ok) {
          const posts: WPPostSummary[] = await res.json();
          for (const p of posts) {
            if (!seenIds.has(p.id)) {
              seenIds.add(p.id);
              collected.push(p);
            }
          }
        }
      } catch {
        /* 폴백으로 이어짐 */
      }
    }

    if (collected.length < count) {
      const needed = count - collected.length;
      const excludeQuery = Array.from(seenIds)
        .map((id) => `exclude[]=${id}`)
        .join("&");
      try {
        const res = await fetch(
          `${WP_BASE}/posts?_embed&${excludeQuery}&per_page=${needed}&orderby=date&order=desc&_fields=${LIST_FIELDS}`,
          { next: { revalidate: REVALIDATE.related } }
        );
        if (res.ok) {
          const posts: WPPostSummary[] = await res.json();
          for (const p of posts) {
            if (!seenIds.has(p.id)) collected.push(p);
          }
        }
      } catch {
        /* ignore */
      }
    }

    return collected.slice(0, count);
  }
);

/** 전체 카테고리 목록. 자주 바뀌지 않으므로 길게 캐시한다. */
export const getAllCategories = cache(async (): Promise<WPCategory[]> => {
  try {
    const res = await fetch(`${WP_BASE}/categories?per_page=100&hide_empty=false`, {
      next: { revalidate: REVALIDATE.categories },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
});

export const getCategoryBySlug = cache(async (slug: string): Promise<WPCategory | null> => {
  try {
    const res = await fetch(`${WP_BASE}/categories?slug=${encodeURIComponent(slug)}`, {
      next: { revalidate: REVALIDATE.categories },
    });
    if (!res.ok) return null;
    const cats: WPCategory[] = await res.json();
    return cats[0] ?? null;
  } catch {
    return null;
  }
});

export const getPostsByCategory = cache(
  async (categoryId: number, perPage = 20): Promise<WPPostSummary[]> => {
    try {
      const res = await fetch(
        `${WP_BASE}/posts?_embed&per_page=${perPage}&orderby=date&categories=${categoryId}&_fields=${LIST_FIELDS}`,
        { next: { revalidate: REVALIDATE.postList } }
      );
      if (!res.ok) return [];
      return res.json();
    } catch {
      return [];
    }
  }
);

export const getRecentPosts = cache(async (count = 5): Promise<WPPostSummary[]> => {
  try {
    const res = await fetch(
      `${WP_BASE}/posts?_embed&per_page=${count}&orderby=date&_fields=${LIST_FIELDS}`,
      { next: { revalidate: REVALIDATE.postList } }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
});

export const getAllPostsForList = cache(async (perPage = 100): Promise<WPPostSummary[]> => {
  try {
    const res = await fetch(
      `${WP_BASE}/posts?_embed&per_page=${perPage}&orderby=date&_fields=${LIST_FIELDS}`,
      { next: { revalidate: REVALIDATE.postList } }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
});
