"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Eye,
  Briefcase,
  Lightbulb,
  TrendingUp,
  Award,
  Link2,
  FileText,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ─── 카테고리별 아이콘 매핑 (사장님이 원하시면 아이콘 교체 가능) ─── */
const ICONS: Record<string, LucideIcon> = {
  "industry-secrets": Eye,
  "service-guide":     Briefcase,
  "marketing-tips":    Lightbulb,
  "marketing-guide":   TrendingUp,
  "expert-column":     Award,
  "affiliate-marketing": Link2,
};

export type CategoryPostItem = {
  id: number;
  slug: string;
  title: string;
  imageUrl: string | null;
};

type Props = {
  category: { id: number; name: string; slug: string };
  posts: CategoryPostItem[];
  index: number;  // stagger 딜레이용
};

/* ease-out-expo */
const EASE = [0.22, 1, 0.36, 1] as const;

/* 스프링 설정 (쫀득하고 부드럽게) */
const SPRING = { type: "spring", stiffness: 320, damping: 26 } as const;

export function BlogCategorySection({ category, posts, index }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  const Icon = ICONS[category.slug] ?? FileText;

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.72, delay: index * 0.09, ease: EASE }}
    >
      {/* ── 섹션 헤더 ────────────────────────────────── */}
      <div className="flex items-center justify-between pb-3 border-b-2 border-[#1A237E]">
        <h2 className="flex items-center gap-2 text-base sm:text-[1.0625rem] font-bold text-[#1a1a2e]">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF7F00] shrink-0" />
          {category.name}
        </h2>
        <motion.div whileHover={{ x: 3 }} transition={SPRING}>
          <Link
            href={`/blog/category/${category.slug}`}
            className="text-xs sm:text-sm text-slate-400 hover:text-[#1A237E] transition-colors flex items-center gap-0.5 font-medium"
          >
            더보기 <span aria-hidden className="text-base leading-none">›</span>
          </Link>
        </motion.div>
      </div>

      {/* ── 데스크톱: 세로 리스트 ────────────────────── */}
      <ul className="hidden sm:block mt-4 space-y-4">
        {posts.map((post, i) => (
          <motion.li
            key={post.id}
            initial={{ opacity: 0, x: -14 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: index * 0.09 + i * 0.07 + 0.18, ease: EASE }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="flex items-center gap-4 group"
            >
              {/* 썸네일 / 아이콘 */}
              <motion.div
                whileHover={{ scale: 1.07, rotate: -1 }}
                transition={SPRING}
                className="shrink-0 w-[88px] h-[62px] rounded-xl overflow-hidden bg-slate-50 border border-slate-100"
              >
                {post.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1A237E]/8 to-slate-100">
                    <Icon
                      size={24}
                      className="text-[#1A237E]/40"
                      strokeWidth={1.5}
                    />
                  </div>
                )}
              </motion.div>

              {/* 제목 */}
              <p className="flex-1 text-[0.875rem] font-medium text-[#1a1a2e] group-hover:text-[#1A237E] transition-colors line-clamp-2 leading-[1.55]">
                {post.title}
              </p>
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* ── 모바일: 가로 스와이프 카드 ──────────────── */}
      <div
        className="sm:hidden mt-4 flex gap-3 overflow-x-auto pb-3 -mx-4 px-4"
        style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
      >
        {posts.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, scale: 0.93 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.09 + i * 0.07 + 0.15, ease: EASE }}
            style={{ scrollSnapAlign: "start" }}
            className="shrink-0 w-[200px]"
          >
            <motion.div
              whileTap={{ scale: 0.97 }}
              transition={SPRING}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="flex flex-col rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm active:shadow-none transition-shadow"
              >
                {/* 카드 이미지 영역 */}
                <div className="w-full aspect-[16/10] bg-slate-50">
                  {post.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.imageUrl}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1A237E]/8 to-slate-100">
                      <Icon size={28} className="text-[#1A237E]/35" strokeWidth={1.5} />
                    </div>
                  )}
                </div>

                {/* 카드 텍스트 */}
                <div className="p-3">
                  <p className="text-[0.8125rem] font-semibold text-[#1a1a2e] line-clamp-2 leading-snug">
                    {post.title}
                  </p>
                  <span className="mt-2 inline-block text-[0.75rem] font-medium text-[#1A237E]">
                    읽기 →
                  </span>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        ))}

        {/* 더보기 카드 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          style={{ scrollSnapAlign: "start" }}
          className="shrink-0 w-[120px] flex items-center justify-center"
        >
          <Link
            href={`/blog/category/${category.slug}`}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-[#1A237E] transition-colors"
          >
            <div className="w-10 h-10 rounded-full border-2 border-slate-200 flex items-center justify-center text-lg">
              ›
            </div>
            <span className="text-xs font-medium">더보기</span>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
