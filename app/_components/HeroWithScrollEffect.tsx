"use client";

import { useEffect, useState } from "react";
import { SiteHeader } from "./SiteHeader";

type HeroWithScrollEffectProps = {
  children: React.ReactNode;
  /** CSS background-image (url(...) 또는 linear-gradient(...)) */
  backgroundImage?: string;
  /** 배경이 그라데이션일 때 오버레이 조정 (기본: 어두운 배경용) */
  darkOverlay?: boolean;
};

export function HeroWithScrollEffect({
  children,
  backgroundImage,
  darkOverlay = false,
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

  const useSolidDark = darkOverlay && !backgroundImage;

  return (
    <div className="hero min-h-[80vh] min-h-screen w-full relative">
      {/* 고정 배경: 실사 이미지 (cover, center) */}
      <div
        className="fixed inset-0 z-0 bg-no-repeat"
        style={
          useSolidDark
            ? undefined
            : backgroundImage
              ? {
                  backgroundImage: backgroundImage,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "80vh",
                }
              : undefined
        }
        aria-hidden
      />
      {useSolidDark && (
        <div className="fixed inset-0 z-0 bg-[#0f172a]" aria-hidden />
      )}
      {/* 이미지 배경 시 다크 오버레이 rgba(0,0,0,0.45) */}
      {backgroundImage && (
        <div
          className="fixed inset-0 z-0"
          style={
            darkOverlay
              ? { backgroundColor: "rgba(0,0,0,0.45)" }
              : { backgroundColor: "rgba(255,255,255,0.7)" }
          }
          aria-hidden
        />
      )}

      <SiteHeader transparent={!scrolled} lightText={(darkOverlay || useSolidDark) && !scrolled} />

      {/* 고정된 첫번째 섹션 - 왼쪽 정렬, 여백 강화 */}
      <div className="fixed inset-0 z-[5] pointer-events-none flex flex-col items-start justify-center">
        <div className="relative pointer-events-auto w-full flex-1 flex flex-col items-start justify-between min-h-screen pt-16">
          <div className="flex-1 flex items-center justify-start w-full px-6 sm:px-10 lg:px-12">
            {children}
          </div>
          {/* SCROLL 인디케이터 - absolute 기준을 위해 부모에 relative */}
          <button
            type="button"
            onClick={() => document.getElementById("section2")?.scrollIntoView({ behavior: "smooth" })}
            className="scroll-indicator absolute left-1/2 bottom-7 -translate-x-1/2 z-10 pointer-events-auto transition-colors"
            aria-label="다음 섹션으로 스크롤"
          >
            <span className="scroll-indicator__text text-xs font-medium tracking-widest">SCROLL</span>
            <svg
              className="scroll-indicator__icon w-5 h-5"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                d="M6 9l6 6 6-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* 하단 곡선 디바이더 - 첫 섹션만 (다음 섹션과 부드럽게 연결) */}
      <div className="fixed bottom-0 left-0 right-0 z-[4] pointer-events-none" aria-hidden>
        <svg
          className="w-full h-auto block"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120V70C360 20 1080 20 1440 70v50H0z"
            fill="white"
          />
        </svg>
      </div>

      {/* 스크롤 영역 확보용 빈 공간 */}
      <div className="min-h-screen" aria-hidden />
    </div>
  );
}
