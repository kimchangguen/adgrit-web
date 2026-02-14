"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type VisionItem = {
  iconKey: string;
  titleEn: string;
  desc: string;
  imageUrl: string;
};

function VisionCard({
  imageUrl,
  titleEn,
  desc,
}: {
  imageUrl: string;
  titleEn: string;
  desc: string;
}) {
  return (
    <div className="flex shrink-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:border-slate-300 transition-all w-[420px] sm:w-[480px]">
      <div
        className="h-52 sm:h-64 w-full flex-shrink-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-base font-black uppercase tracking-wider text-slate-800">{titleEn}</h3>
        <p className="mt-3 text-[15px] font-bold leading-relaxed text-slate-700">{desc}</p>
      </div>
    </div>
  );
}

const CARD_WIDTH = 480;
const GAP = 28;

export function VisionCarousel({
  items,
  title,
}: {
  items: VisionItem[];
  title: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const maxIndex = Math.max(0, items.length - 2);

  const goTo = useCallback(
    (index: number) => {
      const idx = Math.max(0, Math.min(index, maxIndex));
      setCurrentIndex(idx);
      const el = scrollRef.current;
      if (el) {
        const target = idx * (CARD_WIDTH + GAP);
        el.scrollTo({ left: target, behavior: "smooth" });
      }
    },
    [maxIndex]
  );

  const next = useCallback(() => {
    goTo(currentIndex + 1);
  }, [currentIndex, goTo]);

  const prev = useCallback(() => {
    goTo(currentIndex - 1);
  }, [currentIndex, goTo]);

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((i) => {
        const nextIdx = i >= maxIndex ? 0 : i + 1;
        const el = scrollRef.current;
        if (el) {
          const target = nextIdx * (CARD_WIDTH + GAP);
          el.scrollTo({ left: target, behavior: "smooth" });
        }
        return nextIdx;
      });
    }, 3000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [maxIndex]);

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
    scrollRef.current.scrollTo({ left: clamped * (CARD_WIDTH + GAP), behavior: "smooth" });

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((i) => {
        const nextIdx = i >= maxIndex ? 0 : i + 1;
        const el = scrollRef.current;
        if (el) el.scrollTo({ left: nextIdx * (CARD_WIDTH + GAP), behavior: "smooth" });
        return nextIdx;
      });
    }, 3000);
  };

  const handleMouseLeave = () => {
    if (isDragging) handleMouseUp();
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / (CARD_WIDTH + GAP));
      setCurrentIndex(Math.max(0, Math.min(idx, maxIndex)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [maxIndex]);

  const totalPages = maxIndex + 1;
  const pageNum = (currentIndex + 1).toString().padStart(2, "0");
  const totalNum = totalPages.toString().padStart(2, "0");

  return (
    <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-12">
      {/* 왼쪽 패널: 타이틀 + 네비게이션 */}
      <div className="shrink-0 lg:w-[320px] xl:w-[380px]">
        <SectionKicker>Vision</SectionKicker>
        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-800 sm:text-3xl">
          {title}
        </h2>
        <div className="mt-8 flex items-center gap-3 text-slate-600">
          <button
            type="button"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-colors"
            aria-label="이전"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="tabular-nums font-medium">
            {pageNum} <span className="mx-1 text-slate-300">|</span> {totalNum}
          </span>
          <button
            type="button"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-colors"
            aria-label="다음"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* 오른쪽 패널: 가로 스크롤 캐러셀 */}
      <div className="min-w-0 flex-1 overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth py-2 pb-4 cursor-grab active:cursor-grabbing select-none [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {items.map((item) => (
          <VisionCard
            key={item.titleEn}
            imageUrl={item.imageUrl}
            titleEn={item.titleEn}
            desc={item.desc}
          />
        ))}
      </div>
      </div>
    </div>
  );
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1e40af]">
      {children}
    </span>
  );
}
