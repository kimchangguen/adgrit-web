"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* ease-out-expo — 고급스럽고 여유로운 감속 */
const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: EASE },
});

export function BlogAnimatedHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-12 sm:pt-32 sm:pb-16">
      {/* 우측 배경 그래픽 */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-[55%]"
        aria-hidden
      >
        <svg
          viewBox="0 0 600 440"
          className="absolute right-0 top-0 h-full w-full opacity-[0.055]"
          preserveAspectRatio="xMaxYMid slice"
        >
          <ellipse cx="490" cy="210" rx="360" ry="290" fill="#222222" />
          <ellipse cx="410" cy="70"  rx="200" ry="155" fill="#222222" />
          <ellipse cx="550" cy="370" rx="170" ry="130" fill="#222222" />
        </svg>
        <svg
          viewBox="0 0 600 440"
          className="absolute right-0 top-0 h-full w-full opacity-[0.05]"
          preserveAspectRatio="xMaxYMid slice"
        >
          {[0, 44, 88, 132, 176, 220].map((offset) => (
            <path
              key={offset}
              d={`M -60 ${210 + offset} Q 150 ${135 + offset} 310 ${210 + offset} T 660 ${210 + offset}`}
              stroke="#222222"
              strokeWidth="1.5"
              fill="none"
            />
          ))}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          {...fadeUp(0.05)}
          className="text-xs font-bold tracking-[0.18em] text-[#222222] uppercase mb-4"
        >
          ADGRIT BLOG
        </motion.p>

        <motion.h1
          {...fadeUp(0.15)}
          className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold text-[#1f1f1f] leading-[1.15] tracking-tight"
        >
          마케팅의 모든 것,
          <br />
          <span className="text-[#222222]">애드그릿 블로그</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.25)}
          className="mt-5 text-slate-500 text-base sm:text-[1.0625rem] max-w-lg leading-[1.75]"
        >
          실전 마케팅 노하우부터 최신 트렌드까지,
          <br className="hidden sm:block" />
          전문가의 인사이트를 지금 확인하세요.
        </motion.p>

        <motion.div
          {...fadeUp(0.35)}
          className="mt-7 flex flex-wrap items-center gap-3"
        >
          <motion.a
            href="#categories"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
            className="inline-flex items-center gap-2 bg-[#222222] text-white text-sm font-semibold px-6 py-3 rounded-full shadow-md shadow-[#222222]/20 hover:bg-[#3a3a3a] transition-colors"
          >
            글 둘러보기
          </motion.a>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-slate-200 text-slate-600 text-sm font-semibold px-6 py-3 rounded-full hover:border-[#222222] hover:text-[#222222] transition-colors"
            >
              무료 상담
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
