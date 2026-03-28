"use client";

import { useRef } from "react";
import { SiteHeader } from "../_components/SiteHeader";
import { Footer } from "../_components/Footer";
import { AboutSliderCards } from "../_components/AboutSliderCards";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1a1a2e]">
      <SiteHeader />

      {/* 스크롤 스냅 컨테이너 — fixed 포지션으로 헤더 아래부터 꽉 채움 */}
      <div
        ref={containerRef}
        className="fixed left-0 right-0 bottom-0 overflow-y-scroll"
        style={{ top: "4rem", scrollSnapType: "y mandatory" }}
      >
        <AboutSliderCards containerRef={containerRef} />

        {/* 푸터도 스냅 슬롯에 포함 */}
        <div style={{ scrollSnapAlign: "start" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
