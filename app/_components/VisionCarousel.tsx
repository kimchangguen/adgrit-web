"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type VisionItem = {
  iconKey: string;
  titleEn: string;
  desc: string;
  imageUrl: string;
};

const CARDS_PER_VIEW = 3;
const CARD_GAP = 24;

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
    <div className="relative flex w-full flex-shrink-0 flex-col overflow-hidden rounded-xl">
      <div
        className="aspect-[4/3] w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
      <div
        className="absolute inset-x-0 bottom-0 flex flex-col justify-end bg-gradient-to-t from-black/75 via-black/40 to-transparent p-4 sm:p-5 min-h-[72px]"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-center">
        <p className="text-white text-sm sm:text-base font-bold leading-snug">
          {titleEn}
        </p>
        <p className="text-white/95 text-xs sm:text-sm font-medium leading-snug mt-0.5 line-clamp-2">
          {desc}
        </p>
      </div>
    </div>
  );
}

export function VisionCarousel({
  items,
  title,
  sectionTitle,
  subtitle,
  accentLine,
}: {
  items: VisionItem[];
  title: string;
  sectionTitle?: string;
  subtitle?: string;
  accentLine?: string;
}) {
  const totalPages = Math.ceil(items.length / CARDS_PER_VIEW);
  const maxPageIndex = Math.max(0, totalPages - 1);
  const [currentPage, setCurrentPage] = useState(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const goToPage = useCallback(
    (pageIndex: number) => {
      const idx = Math.max(0, Math.min(pageIndex, maxPageIndex));
      setCurrentPage(idx);
    },
    [maxPageIndex]
  );

  const next = useCallback(() => {
    goToPage(currentPage + 1);
  }, [currentPage, goToPage]);

  const prev = useCallback(() => {
    goToPage(currentPage - 1);
  }, [currentPage, goToPage]);

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentPage((p) => (p >= maxPageIndex ? 0 : p + 1));
    }, 3000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [maxPageIndex]);

  const pageNum = (currentPage + 1).toString().padStart(2, "0");
  const totalNum = totalPages.toString().padStart(2, "0");

  const heading = sectionTitle ?? title;

  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      {/* 상단: Why? 스타일 제목 + 네비 (참고 이미지 레이아웃) */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black">
          {heading}
        </h2>
        <div className="flex items-center gap-3 text-slate-600">
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

      {/* 3장 가로 배치 슬라이드 (내용·슬라이드 효과 동일) */}
      <div className="w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-out"
          style={{
            width: `${totalPages * 100}%`,
            transform: `translateX(-${(currentPage * 100) / totalPages}%)`,
          }}
        >
          {Array.from({ length: totalPages }).map((_, page) => (
            <div
              key={page}
              className="flex flex-shrink-0 gap-4 sm:gap-6"
              style={{
                width: `${100 / totalPages}%`,
              }}
            >
              {items
                .slice(page * CARDS_PER_VIEW, page * CARDS_PER_VIEW + CARDS_PER_VIEW)
                .map((item) => (
                  <div key={item.titleEn} className="flex-1 min-w-0">
                    <VisionCard
                      imageUrl={item.imageUrl}
                      titleEn={item.titleEn}
                      desc={item.desc}
                    />
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
