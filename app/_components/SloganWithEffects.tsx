"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container } from "./Container";

const LAPTOP_IMAGE =
  "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80";

export function SloganWithEffects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <div
      ref={sectionRef}
      className="relative w-full flex items-center justify-center min-h-[918px] py-20 overflow-hidden"
    >
      {/* 다크 네이비 베이스 */}
      <div
        className="absolute inset-0 bg-[#0f1729]"
        aria-hidden
      />
      <Container className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-12">
        {/* 왼쪽: 텍스트 */}
        <div className="max-w-2xl">
          {/* 메인 헤드라인 - 3줄 */}
          <motion.h2
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold leading-[1.35] tracking-tight text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            이제 마케팅
            <br />
            집어 치우고
            <br />
            광고 양으로 승부 하세요
          </motion.h2>

          {/* 서브 텍스트 */}
          <motion.p
            className="mt-6 text-white/80 text-base sm:text-lg font-normal tracking-wide text-left"
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            광고비 부담 없이, 양으로 승부하는 시대.
          </motion.p>
        </div>

        {/* 오른쪽: 마케팅 노트북 이미지 */}
        <motion.div
          className="flex-shrink-0 w-full max-w-[480px] lg:max-w-[520px]"
          initial={{ opacity: 0, x: 24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <img
            src={LAPTOP_IMAGE}
            alt=""
            className="w-full h-auto rounded-lg shadow-2xl object-cover"
          />
        </motion.div>
      </Container>

      {/* 하단 스크롤 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 z-10">
        <svg
          className="w-6 h-6 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}
