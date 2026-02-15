"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "./Container";

const KAKAO_IMAGES = Array.from({ length: 15 }, (_, i) => `/kakao-screens/kakao-${i + 1}.png`);

const CARD_WIDTH = 320;
const GAP = 24;
const AUTO_PLAY_INTERVAL = 1000; // 1초마다

export function KakaoTestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isProgrammaticScrollRef = useRef(false);

  const maxIndex = KAKAO_IMAGES.length - 1;

  const scrollToIndex = useCallback((idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    isProgrammaticScrollRef.current = true;
    el.scrollTo({ left: idx * (CARD_WIDTH + GAP), behavior: "smooth" });
    setTimeout(() => { isProgrammaticScrollRef.current = false; }, 400);
  }, []);

  const goTo = useCallback((index: number) => {
    const idx = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(idx);
    scrollToIndex(idx);
  }, [maxIndex, scrollToIndex]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    startX.current = e.pageX;
    scrollLeftStart.current = scrollRef.current.scrollLeft;
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const walk = e.pageX - startX.current;
    scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUp = () => {
    if (!isDragging || !scrollRef.current) return;
    setIsDragging(false);
    const scrollLeft = scrollRef.current.scrollLeft;
    const idx = Math.round(scrollLeft / (CARD_WIDTH + GAP));
    const clamped = Math.max(0, Math.min(idx, maxIndex));
    setCurrentIndex(clamped);
    scrollToIndex(clamped);
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % KAKAO_IMAGES.length);
    }, AUTO_PLAY_INTERVAL);
  };

  const handleMouseLeave = () => {
    if (isDragging) handleMouseUp();
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % KAKAO_IMAGES.length);
    }, AUTO_PLAY_INTERVAL);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  useEffect(() => {
    if (!scrollRef.current || isDragging) return;
    scrollToIndex(currentIndex);
  }, [currentIndex, isDragging, scrollToIndex]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      if (isProgrammaticScrollRef.current) return;
      const idx = Math.round(el.scrollLeft / (CARD_WIDTH + GAP));
      setCurrentIndex(Math.max(0, Math.min(idx, maxIndex)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [maxIndex]);

  return (
    <section
      id="kakao-testimonials"
      className="relative z-10 border-t border-slate-100 bg-white py-16 sm:py-20"
    >
      <Container>
        {/* 상단 헤더 */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
            <span className="text-[#1a1a2e]">클라이언트</span>
            <span className="text-orange-500"> 만족후기</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            애드그릿은 사장님과 꾸준한소통으로
            <br />
            매장의 안정화된 매출성장을 위해 소통과 개발을 합니다.
          </p>
        </div>

        {/* 카카오톡 화면 가로 캐러셀 */}
        <div className="mt-12 sm:mt-14 relative">
          {/* 좌측 화살표 */}
          <button
            type="button"
            onClick={() => goTo(currentIndex - 1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-[#1e40af] hover:bg-slate-50 transition-colors"
            aria-label="이전"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* 우측 화살표 */}
          <button
            type="button"
            onClick={() => goTo(currentIndex + 1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-[#1e40af] hover:bg-slate-50 transition-colors"
            aria-label="다음"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* 스크롤 영역 - 마우스 드래그로 좌우 이동 가능 */}
          <div
            ref={scrollRef}
            className={`flex gap-6 overflow-x-auto scroll-smooth py-4 px-2 cursor-grab active:cursor-grabbing select-none [&::-webkit-scrollbar]:hidden ${
              isDragging ? "cursor-grabbing" : ""
            }`}
            style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {KAKAO_IMAGES.map((src, i) => (
              <div
                key={src}
                className="flex-shrink-0 rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white"
                style={{
                  width: CARD_WIDTH,
                  scrollSnapAlign: "center",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                }}
              >
                <div className="relative w-full aspect-[9/16] max-h-[520px] select-none">
                  <Image
                    src={src}
                    alt={`클라이언트 만족후기 ${i + 1}`}
                    fill
                    className="object-cover object-top pointer-events-none"
                    sizes="320px"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* 페이지네이션 */}
          <div className="flex justify-center gap-1.5 mt-6 flex-wrap max-w-full">
            {KAKAO_IMAGES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className={`w-2 h-2 rounded-full transition-colors flex-shrink-0 ${
                  i === currentIndex ? "bg-[#1e40af] scale-110" : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`${i + 1}번째로 이동`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
