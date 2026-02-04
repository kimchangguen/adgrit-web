"use client";

import { useEffect, useState } from "react";
import { SiteHeader } from "./SiteHeader";

type HeroWithScrollEffectProps = {
  children: React.ReactNode;
  backgroundImage: string;
};

export function HeroWithScrollEffect({
  children,
  backgroundImage,
}: HeroWithScrollEffectProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen w-full relative">
      {/* 고정 배경 - 스크롤해도 움직이지 않음 */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage }}
        aria-hidden
      />
      <div className="fixed inset-0 z-0 bg-white/70" aria-hidden />

      <SiteHeader transparent={!scrolled} />

      {/* 고정된 첫번째 섹션 폰트/콘텐츠 - 스크롤해도 움직이지 않음 */}
      <div className="fixed inset-0 z-[5] pointer-events-none flex flex-col items-center justify-center">
        <div className="pointer-events-auto w-full flex-1 flex flex-col items-center justify-between min-h-screen pt-16">
          <div className="flex-1 flex items-center justify-center w-full px-4">
            {children}
          </div>
          {/* SCROLL 표시 - 첫번째 섹션 맨 아래 */}
          <a
            href="#about"
            className="pointer-events-auto flex flex-col items-center gap-2 pb-8 text-slate-500 hover:text-slate-700 transition-colors animate-bounce"
            aria-label="아래로 스크롤"
          >
            <span className="text-xs font-medium tracking-widest">SCROLL</span>
            <span className="w-8 h-8 rounded-full border-2 border-slate-400 flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* 스크롤 영역 확보용 빈 공간 */}
      <div className="min-h-screen" aria-hidden />
    </div>
  );
}
