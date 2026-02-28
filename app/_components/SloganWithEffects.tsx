"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Container } from "./Container";

const BG_IMAGE =
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80";

export function SloganWithEffects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <div
      ref={sectionRef}
      className="relative w-full flex items-center justify-center min-h-[1080px] py-24 overflow-hidden"
    >
      {/* 다크 네이비 베이스 */}
      <div
        className="absolute inset-0 bg-[#0f1729]"
        aria-hidden
      />
      {/* 블러 배경 이미지 (오른쪽·중앙) */}
      <div className="absolute inset-0" aria-hidden>
        <img
          src={BG_IMAGE}
          alt=""
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[70%] max-w-[900px] h-[140%] min-h-[100%] object-cover object-left opacity-50 blur-[2px] sm:blur-[4px]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0f1729] via-[#0f1729]/95 to-transparent"
          aria-hidden
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-2xl">
          {/* 메인 헤드라인 - 3줄, 큰 볼드, 넉넉한 행간 */}
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

          {/* 서브 텍스트 - 작은 크기 */}
          <motion.p
            className="mt-6 text-white/80 text-base sm:text-lg font-normal tracking-wide text-left"
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            광고비 부담 없이, 양으로 승부하는 시대.
          </motion.p>

          {/* CTA: 흰색 아웃라인 버튼 + 화살표 */}
          <motion.div
            className="mt-8 sm:mt-10"
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Link
              href="tel:1661-0646"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white text-white font-medium px-6 py-3.5 text-sm sm:text-base hover:bg-white/10 transition-colors"
            >
              문의하기
              <span className="text-white" aria-hidden>→</span>
            </Link>
          </motion.div>
        </div>
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
