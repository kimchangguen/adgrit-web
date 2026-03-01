"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type VisionItem = {
  iconKey: string;
  titleEn: string;
  desc: string;
  imageUrl: string;
};

const CARD_WIDTH = 300;
const GAP = 24;
const CARDS_PER_VIEW = 2;
const VISIBLE_WIDTH = CARDS_PER_VIEW * CARD_WIDTH + GAP * (CARDS_PER_VIEW - 1);

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
    <div
      className="flex shrink-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:border-slate-300 transition-all"
      style={{ width: CARD_WIDTH }}
    >
      <div
        className="h-44 sm:h-52 w-full flex-shrink-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-sm sm:text-base font-black uppercase tracking-wider text-slate-800">{titleEn}</h3>
        <p className="mt-2 text-[14px] sm:text-[15px] font-bold leading-relaxed text-slate-700">{desc}</p>
      </div>
    </div>
  );
}

export function VisionCarousel({
  items,
  title,
}: {
  items: VisionItem[];
  title: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const totalPages = Math.ceil(items.length / CARDS_PER_VIEW);
  const maxPageIndex = Math.max(0, totalPages - 1);
  const [currentPage, setCurrentPage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollStep = CARD_WIDTH * CARDS_PER_VIEW + GAP * (CARDS_PER_VIEW - 1);

  const goToPage = useCallback(
    (pageIndex: number) => {
      const idx = Math.max(0, Math.min(pageIndex, maxPageIndex));
      setCurrentPage(idx);
      const el = scrollRef.current;
      if (el) {
        el.scrollTo({ left: idx * scrollStep, behavior: "smooth" });
      }
    },
    [maxPageIndex, scrollStep]
  );

  const next = useCallback(() => {
    goToPage(currentPage + 1);
  }, [currentPage, goToPage]);

  const prev = useCallback(() => {
    goToPage(currentPage - 1);
  }, [currentPage, goToPage]);

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentPage((p) => {
        const nextPage = p >= maxPageIndex ? 0 : p + 1;
        const el = scrollRef.current;
        if (el) el.scrollTo({ left: nextPage * scrollStep, behavior: "smooth" });
        return nextPage;
      });
    }, 3000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [maxPageIndex, scrollStep]);

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
    const el = scrollRef.current;
    const scrollLeft = el.scrollLeft;
    const page = Math.round(scrollLeft / scrollStep);
    const clamped = Math.max(0, Math.min(page, maxPageIndex));
    setCurrentPage(clamped);
    el.scrollTo({ left: clamped * scrollStep, behavior: "smooth" });

    autoPlayRef.current = setInterval(() => {
      setCurrentPage((p) => {
        const nextPage = p >= maxPageIndex ? 0 : p + 1;
        const el = scrollRef.current;
        if (el) el.scrollTo({ left: nextPage * scrollStep, behavior: "smooth" });
        return nextPage;
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
      const page = Math.round(el.scrollLeft / scrollStep);
      setCurrentPage(Math.max(0, Math.min(page, maxPageIndex)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [maxPageIndex, scrollStep]);

  const pageNum = (currentPage + 1).toString().padStart(2, "0");
  const totalNum = totalPages.toString().padStart(2, "0");

  return (
    <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-12">
      {/* 왼쪽 패널: 타이틀 + 네비게이션 (폭 확대 유지) */}
      <div className="shrink-0 lg:w-[48%] xl:w-[50%]">
        <SectionKicker>Vision</SectionKicker>
        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-800 sm:text-3xl lg:text-[1.75rem] xl:text-[2rem]">
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

      {/* 오른쪽 패널: 2장씩 보이는 가로 슬라이드 캐러셀 */}
      <div
        className="min-w-0 overflow-hidden"
        style={{ width: "100%", maxWidth: VISIBLE_WIDTH }}
      >
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
