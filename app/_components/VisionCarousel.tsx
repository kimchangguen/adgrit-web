"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const ACCENT_ORANGE = "#ea580c";

export type VisionItem = {
  iconKey: string;
  titleEn: string;
  desc: string;
  imageUrl: string;
};

const CARD_WIDTH = 380;
const CARDS_PER_VIEW = 2;
const GAP_VERTICAL = 20;

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
    <div className="flex w-full flex-shrink-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:border-slate-300 transition-all">
      <div
        className="h-40 sm:h-44 w-full flex-shrink-0 bg-cover bg-center bg-no-repeat"
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
  subtitle,
  accentLine,
}: {
  items: VisionItem[];
  title: string;
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

  const line1 = subtitle ?? "Vision";
  const line2 = title;
  const line3 = accentLine ?? title;

  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-14">
      {/* 왼쪽: 참고 이미지 레이아웃 - 3줄 (작은 회색 / 큰 볼드 / 가장 큰 오렌지) */}
      <div className="shrink-0 lg:w-[58%] xl:w-[60%] flex flex-col justify-center">
        <p className="text-slate-500 text-sm sm:text-base font-normal tracking-wide">
          {line1}
        </p>
        <h2 className="mt-2 text-xl sm:text-2xl lg:text-[1.75rem] font-bold tracking-tight text-slate-800">
          {line2}
        </h2>
        <p
          className="mt-2 text-2xl sm:text-3xl lg:text-[2rem] xl:text-[2.25rem] font-bold tracking-tight"
          style={{ color: ACCENT_ORANGE }}
        >
          {line3}
        </p>
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

      {/* 오른쪽: 2장 세로로 쌓인 슬라이드 (슬라이드·자동재생·이전/다음 동일) */}
      <div
        className="min-w-0 flex-1 overflow-hidden"
        style={{ maxWidth: CARD_WIDTH }}
      >
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentPage * 100}%)`,
          }}
        >
          {Array.from({ length: totalPages }).map((_, page) => (
            <div
              key={page}
              className="flex flex-shrink-0 flex-col gap-4 sm:gap-5"
              style={{ width: CARD_WIDTH }}
            >
              <VisionCard
                imageUrl={items[page * 2].imageUrl}
                titleEn={items[page * 2].titleEn}
                desc={items[page * 2].desc}
              />
              {items[page * 2 + 1] && (
                <VisionCard
                  imageUrl={items[page * 2 + 1].imageUrl}
                  titleEn={items[page * 2 + 1].titleEn}
                  desc={items[page * 2 + 1].desc}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
