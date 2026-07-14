"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionBackdrop } from "./backgrounds/SectionBackdrop";

/* ease-out-expo — 고급스럽고 여유로운 감속 */
const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: EASE },
});

export function BlogAnimatedHero() {
  return (
    <section className="ig-section pt-24 pb-12 sm:pt-32 sm:pb-16">
      <SectionBackdrop variant="s2" />

      <div className="ig-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          {...fadeUp(0.05)}
          className="text-xs font-bold tracking-[0.18em] text-white/60 uppercase mb-4"
        >
          ADGRIT BLOG
        </motion.p>

        <motion.h1
          {...fadeUp(0.15)}
          className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold text-white leading-[1.15] tracking-tight"
        >
          마케팅의 모든 것,
          <br />
          <span className="ig-gradient-text">애드그릿 블로그</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.25)}
          className="mt-5 text-white/60 text-base sm:text-[1.0625rem] max-w-lg leading-[1.75]"
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
            className="ig-btn-gradient inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full"
          >
            글 둘러보기
          </motion.a>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
          >
            <Link
              href="https://open.kakao.com/o/s2RtMSei"
              target="_blank"
              rel="noopener noreferrer"
              className="ig-btn-glass inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full hover:bg-white/15 transition-colors"
            >
              무료 상담
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
