"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "./SiteHeader";

type HeroWithScrollEffectProps = {
  children: React.ReactNode;
  /** 배경이 이미지/어두운 배경일 때 텍스트 가독성용 오버레이 */
  darkOverlay?: boolean;
  /** 콘텐츠 정렬 방향 (기본: 왼쪽) */
  align?: "start" | "center";
};

export function HeroWithScrollEffect({
  children,
  darkOverlay = false,
  align = "start",
}: HeroWithScrollEffectProps) {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 히어로 구간을 스크롤하는 동안 중앙 문구를 위로 이동 + 페이드아웃시키기 위한 진행도(0~1).
  // heroRef는 hero 전체(약 200vh: 본문 100vh + 하단 스크롤 여백 100vh)를 감싸므로
  // progress 0~0.5 구간(≈ 뷰포트 1개 높이만큼 스크롤)에서 완전히 사라지도록 잡아
  // 두 번째 섹션이 나타날 때는 히어로 텍스트가 남아있지 않게 한다.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -160]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentPointerEvents = useTransform(scrollYProgress, (v) =>
    v > 0.4 ? "none" : "auto"
  );

  const alignClass = align === "center" ? "items-center" : "items-start";
  const justifyClass = align === "center" ? "justify-center" : "justify-start";

  return (
    <div ref={heroRef} className="hero min-h-screen w-full">
      <div className="hero__inner">
        {/* 배경 이미지는 layout.tsx의 site-fixed-background(공통 레이어) 하나만 사용한다.
            히어로에서 중복으로 렌더링하지 않음 - 텍스트 가독성용 옅은 오버레이만 유지. */}
        {darkOverlay && (
          <div
            className="fixed inset-0 z-[2] pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(7,3,15,0.12) 0%, rgba(7,3,15,0.02) 40%, rgba(7,3,15,0.02) 60%, rgba(7,3,15,0.12) 100%)",
            }}
            aria-hidden
          />
        )}
        <SiteHeader transparent={!scrolled} lightText={!scrolled && darkOverlay} />

        {/* 고정된 첫번째 섹션 - 정렬 방향은 align prop으로 제어.
            스크롤 시 opacity가 0에 닿으면 pointer-events도 함께 꺼서
            아래 섹션 클릭을 가로채지 않게 한다. */}
        <motion.div
          className={`fixed inset-0 z-[5] flex flex-col ${alignClass} justify-center`}
          style={{ opacity: contentOpacity, pointerEvents: contentPointerEvents }}
        >
        <div className={`relative w-full flex-1 flex flex-col ${alignClass} justify-between min-h-screen pt-16`}>
          <motion.div
            className={`flex-1 flex items-center ${justifyClass} w-full px-6 sm:px-10 lg:px-12`}
            style={{ y: contentY }}
          >
            {children}
          </motion.div>
          {/* SCROLL 인디케이터 - absolute 기준을 위해 부모에 relative */}
          <button
            type="button"
            onClick={() => document.getElementById("section2")?.scrollIntoView({ behavior: "smooth" })}
            className="scroll-indicator absolute left-1/2 bottom-7 z-10 transition-colors"
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
        </motion.div>

        {/* 스크롤 영역 확보용 빈 공간 */}
        <div className="min-h-screen" aria-hidden />
      </div>
    </div>
  );
}
