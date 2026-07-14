"use client";

import Link from "next/link";
import { SectionBackdrop } from "./backgrounds/SectionBackdrop";

export function ClientGrowthSection() {
  return (
    <section
      id="section-10"
      className="ig-section relative z-10 w-full min-h-[520px] sm:min-h-[600px] flex items-center justify-center"
    >
      <SectionBackdrop variant="s8" />

      <div className="ig-content relative w-full max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
        <div className="ig-glass-panel-lg rounded-[28px] px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          {/* 섹션 10 메인: 우리의 자랑이 되어주시겠습니까? */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            우리의 자랑이 되어주시겠습니까?
          </h2>

          {/* 보조 문구: 오렌지 별 + 클라이언트 성장 */}
          <p className="mt-6 sm:mt-8 flex items-center justify-center gap-2 text-white/85 text-base sm:text-lg">
            <span className="text-[var(--ig-orange)]" aria-hidden>
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6L12 2z" />
              </svg>
            </span>
            클라이언트의 성장이 곧 우리의 성장이자 성공입니다.
          </p>

          {/* CTA 블록 */}
          <div className="mt-14 sm:mt-20">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
              지금, 애드그릿 전문가와
              <br />
              함께 컨설팅을 시작해보세요
            </p>
            <p className="mt-2 text-lg sm:text-xl text-white/85">
              전화 한 통으로 시작하는 성장의 첫 걸음
            </p>
            <Link
              href="tel:1661-0646"
              className="ig-btn-gradient mt-8 inline-flex items-center justify-center gap-2 rounded-full px-[2.2rem] py-[1.1rem] text-[1.1rem] font-semibold transition-transform hover:scale-[1.02]"
            >
              전화 1661-0646
            </Link>
          </div>

          {/* 하단: 흰색 아래 화살표 */}
          <div className="mt-10 sm:mt-14 flex justify-center">
            <span className="text-white/90" aria-hidden>
              <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
