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
const AUTO_PLAY_MS = 3000;

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
    <div className="flex w-full flex-shrink-0 flex-col overflow-hidden rounded-xl bg-white border border-slate-100 shadow-sm">
      {/* 이미지: 컬러 + 연한 파란 오버레이 */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-xl">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        />
        <div
          className="absolute top-2 right-2 w-24 h-24 rounded-full bg-blue-400/25 blur-2xl"
          aria-hidden
        />
        <div
          className="absolute bottom-4 left-4 w-20 h-20 rounded-full bg-blue-300/20 blur-xl"
          aria-hidden
        />
      </div>
      {/* 텍스트: 이미지 아래, 왼쪽 정렬 */}
      <div className="flex flex-1 flex-col p-4 sm:p-5 text-left">
        <h3 className="text-base sm:text-lg font-bold text-black leading-snug">
          {titleEn}
        </h3>
        <p className="mt-2 text-sm sm:text-[15px] text-slate-700 leading-relaxed line-clamp-3">
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
  sectionKicker,
  titleLine1,
  titleLine2,
  subtitle,
  accentLine,
}: {
  items: VisionItem[];
  title: string;
  sectionTitle?: string;
  sectionKicker?: string;
  titleLine1?: string;
  titleLine2?: string;
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
    }, AUTO_PLAY_MS);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [maxPageIndex]);

  const line1 = titleLine1 ?? sectionTitle ?? title;
  const line2 = titleLine2;

  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      {/* 상단: 2줄 제목 가운데 정렬, 이전/다음만 (POINT 라벨 없음) */}
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black leading-tight">
          {line1}
          {line2 != null && (
            <>
              <br />
              {line2}
            </>
          )}
        </h2>
        <div className="flex items-center gap-3 text-slate-600 mt-2">
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

      {/* 3장 가로 슬라이드 - 박스 30% 축소, 배경 너비 유지 */}
      <div className="w-full overflow-hidden flex justify-center">
        <div className="w-[70%] min-w-0 overflow-hidden">
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
    </div>
  );
}
