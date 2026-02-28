"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Container } from "./Container";

/* 노트북 화면 안 광고 카드 그리드용 데이터 (마켓플레이스 스타일) */
const AD_CARDS = [
  { label: "하이오더", bg: "bg-slate-100", accent: "text-slate-700" },
  { label: "기본서 무료배포", bg: "bg-violet-500", accent: "text-white" },
  { label: "가전 특가", bg: "bg-white", accent: "text-slate-800", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=80" },
  { label: "영화/게임", bg: "bg-slate-800", accent: "text-white", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=200&q=80" },
  { label: "50% 할인!", bg: "bg-lime-400", accent: "text-slate-900", sticker: "50% 할인" },
  { label: "아웃도어", bg: "bg-white", accent: "text-slate-800", img: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=200&q=80" },
  { label: "지식마켓", bg: "bg-red-500", accent: "text-white" },
  { label: "왕위크", bg: "bg-amber-100", accent: "text-amber-900" },
];

export function SloganWithEffects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <div ref={sectionRef} className="relative z-10 w-full flex items-center justify-center min-h-[1080px] py-16">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-14 xl:gap-20 w-full">
          {/* 왼쪽: 슬로건 3줄 + CTA 버튼 2개 */}
          <div className="lg:max-w-[50%] flex-shrink-0 text-left">
            <motion.p
              className="text-white/70 text-sm sm:text-base tracking-wide mb-4"
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
            >
              믿을 수 있는 성과형 바이럴 마케팅
            </motion.p>
            <motion.h2
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold leading-tight tracking-tight"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              이제 마케팅
              <br />
              집어 치우고
              <br />
              광고{" "}
              <span className="text-white bg-white/10 rounded-md px-1.5 py-0.5">양</span>{" "}
              으로 승부 하세요
            </motion.h2>
            <motion.div
              className="flex flex-wrap gap-3 mt-8 sm:mt-10"
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Link
                href="tel:1661-0646"
                className="inline-flex items-center justify-center rounded-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium px-6 py-3.5 text-sm sm:text-base transition-colors"
              >
                문의하기
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-slate-500 text-slate-300 hover:border-slate-400 hover:text-white font-medium px-6 py-3.5 text-sm sm:text-base transition-colors"
              >
                상품소개서 보기
              </Link>
            </motion.div>
          </div>

          {/* 오른쪽: 노트북 목업 + 화면 안 광고 그리드 */}
          <motion.div
            className="lg:flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="relative w-full max-w-[580px]">
              {/* 노트북 베젤 + 본체 */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl" style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.5)" }}>
                <div className="aspect-[16/10] bg-slate-900 rounded-t-lg flex flex-col">
                  {/* 상단 카메라 영역 */}
                  <div className="h-5 sm:h-6 flex-shrink-0 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  </div>
                  {/* 화면: 흰 배경 웹페이지 */}
                  <div className="flex-1 overflow-hidden bg-white rounded-b border-t-4 border-slate-800">
                    {/* 헤더 바 */}
                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-800 text-white text-[10px] sm:text-xs">
                      <span className="font-bold tracking-wider">ADGRIT</span>
                      <div className="flex-1 max-w-[120px] sm:max-w-[160px] h-5 bg-slate-600 rounded flex items-center px-2 text-white/70">
                        캠페인 검색...
                      </div>
                    </div>
                    {/* 광고 카드 그리드 */}
                    <div className="p-2 sm:p-3 grid grid-cols-4 gap-1.5 sm:gap-2">
                      {AD_CARDS.map((card, i) => (
                        <div
                          key={i}
                          className={`${card.bg} rounded-md overflow-hidden min-h-[48px] sm:min-h-[56px] flex flex-col justify-end p-1.5 sm:p-2 relative`}
                        >
                          {card.sticker && (
                            <span className="absolute top-0.5 right-0.5 bg-red-500 text-white text-[8px] sm:text-[10px] font-bold px-1 rounded">
                              {card.sticker}
                            </span>
                          )}
                          {card.img ? (
                            <>
                              <img src={card.img} alt="" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                              <span className={`relative text-[9px] sm:text-[10px] font-semibold ${card.accent} drop-shadow`}>{card.label}</span>
                            </>
                          ) : (
                            <span className={`text-[9px] sm:text-[10px] font-semibold ${card.accent}`}>{card.label}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* 노트북 하단 패널 */}
                <div className="h-3 sm:h-4 bg-slate-800 rounded-b-lg" />
              </div>
              {/* 바닥 그림자 */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-6 rounded-full bg-slate-900/50 blur-xl"
                aria-hidden
              />
            </div>
          </motion.div>
        </div>
        {/* 하단 스크롤 인디케이터 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50">
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </Container>
    </div>
  );
}
