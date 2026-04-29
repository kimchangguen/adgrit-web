"use client";

import Link from "next/link";
import { Container } from "./Container";

const CARD_BLUE = "#222222";
const CARD_BLUE_DARK = "#3a3a3a";
const CARD_BLUE_LAYER = "#2f2f2f";

export function WhyAdgritSection() {
  return (
    <section
      id="why-adgrit"
      className="relative z-10 border-t border-slate-100 bg-white py-16 sm:py-20"
    >
      <Container>
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1f1f1f]">
            애드그릿의 다양한 마케팅 상품
          </h2>
          <Link
            href="#why-adgrit"
            className="mt-4 inline-flex items-center justify-center rounded-full border-2 border-[#222222] px-5 py-2.5 text-sm font-medium text-[#222222] hover:bg-[#222222] hover:text-white transition-colors"
          >
            펼쳐서 보기
          </Link>
        </div>

        {/* 큰 파란 카드 - 레이어드 하단 + 좌 텍스트 / 우 일러스트 */}
        <div className="mt-10 sm:mt-14 max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden" style={{ backgroundColor: CARD_BLUE }}>
            {/* 하단 레이어드 스트립 (2줄) */}
            <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-1">
              <div className="h-2 w-full rounded-b" style={{ backgroundColor: CARD_BLUE_DARK }} aria-hidden />
              <div className="h-2 w-full rounded-b" style={{ backgroundColor: CARD_BLUE_LAYER }} aria-hidden />
            </div>

            <div className="relative flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 p-8 sm:p-10 lg:p-12 pb-12">
              {/* 왼쪽: 홈페이지제작 */}
              <div className="flex-shrink-0 lg:min-w-[280px]">
                <p className="text-white text-2xl sm:text-3xl font-bold">
                  홈페이지제작
                </p>
              </div>

              {/* 오른쪽: 모니터 + 아이콘 일러스트 */}
              <div className="flex-1 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[320px] aspect-[4/3] flex items-center justify-center">
                  {/* 모니터 */}
                  <div className="relative w-32 h-24 sm:w-40 sm:h-28 rounded-lg bg-slate-100 border-2 border-white/50 shadow-lg flex items-center justify-center">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#222222]" aria-hidden>
                      <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 5l7 7-7 7V5z M5 5l7 7-7 7V5z" />
                      </svg>
                    </span>
                  </div>
                  {/* 주변 아이콘 버블 */}
                  <span className="absolute top-2 left-4 w-8 h-8 rounded-full bg-slate-700/90 flex items-center justify-center text-white" aria-hidden>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  </span>
                  <span className="absolute top-2 right-6 w-9 h-9 rounded-full bg-[#222222] flex items-center justify-center text-white font-bold text-sm" aria-hidden>
                    $
                  </span>
                  <span className="absolute bottom-4 right-2 w-8 h-8 rounded-full bg-slate-700/90 flex items-center justify-center text-white" aria-hidden>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                  </span>
                  <span className="absolute bottom-6 left-6 w-8 h-8 rounded-full bg-slate-700/90 flex items-center justify-center text-white" aria-hidden>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
