"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Container } from "./Container";

const ICON_CLASS = "w-8 h-8 stroke-[1.5]";

const ITEMS = [
  {
    label: "홈페이지 제작",
    subtitle: "맞춤 웹사이트 제작",
    icon: (
      <svg className={ICON_CLASS} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    iconBg: "bg-sky-100",
    iconColor: "text-slate-600",
    btnColor: "bg-[#1e40af] hover:bg-[#163a9e]",
  },
  {
    label: "플레이스 광고",
    subtitle: "네이버 매장 노출 솔루션",
    icon: (
      <svg className={ICON_CLASS} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    iconBg: "bg-sky-100",
    iconColor: "text-slate-600",
    btnColor: "bg-sky-500 hover:bg-sky-600",
  },
  {
    label: "블로그 상위노출",
    subtitle: "네이버 검색노출 마케팅",
    icon: (
      <svg className={ICON_CLASS} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    iconBg: "bg-emerald-100",
    iconColor: "text-slate-600",
    btnColor: "bg-emerald-600 hover:bg-emerald-700",
  },
  {
    label: "카페 바이럴",
    subtitle: "카페노출 관리",
    icon: (
      <svg className={ICON_CLASS} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    iconBg: "bg-amber-100",
    iconColor: "text-amber-800",
    btnColor: "bg-amber-600 hover:bg-amber-700",
  },
  {
    label: "네이버 검색광고",
    subtitle: "네이버 검색광고 운영",
    icon: (
      <svg className={ICON_CLASS} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    iconBg: "bg-emerald-100",
    iconColor: "text-slate-600",
    btnColor: "bg-emerald-600 hover:bg-emerald-700",
  },
  {
    label: "검색어 자동완성",
    subtitle: "브랜드 검색유도",
    icon: (
      <svg className={ICON_CLASS} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h10" />
      </svg>
    ),
    iconBg: "bg-emerald-100",
    iconColor: "text-slate-600",
    btnColor: "bg-emerald-600 hover:bg-emerald-700",
  },
  {
    label: "인스타 운영",
    subtitle: "인스타그램 계정운영 관리",
    icon: (
      <svg className={ICON_CLASS} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    iconBg: "bg-pink-100",
    iconColor: "text-pink-700",
    btnColor: "bg-pink-500 hover:bg-pink-600",
  },
  {
    label: "유튜브 광고",
    subtitle: "유튜브 광고운영",
    icon: (
      <svg className={ICON_CLASS} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    btnColor: "bg-red-500 hover:bg-red-600",
  },
  {
    label: "홍보 영상 제작",
    subtitle: "영상콘텐츠 제작",
    icon: (
      <svg className={ICON_CLASS} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    iconBg: "bg-slate-200",
    iconColor: "text-slate-700",
    btnColor: "bg-slate-600 hover:bg-slate-700",
  },
  {
    label: "디스플레이 광고",
    subtitle: "글로벌 광고노출",
    icon: (
      <svg className={ICON_CLASS} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    iconBg: "bg-sky-100",
    iconColor: "text-slate-600",
    btnColor: "bg-sky-500 hover:bg-sky-600",
  },
  {
    label: "체험단 운영",
    subtitle: "체험단 마케팅",
    icon: (
      <svg className={ICON_CLASS} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    iconBg: "bg-violet-100",
    iconColor: "text-slate-600",
    btnColor: "bg-violet-600 hover:bg-violet-700",
  },
  {
    label: "리플렛 및 홍보용 카탈로그 제작",
    subtitle: "리플렛·카탈로그 제작",
    icon: (
      <svg className={ICON_CLASS} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    iconBg: "bg-sky-100",
    iconColor: "text-slate-600",
    btnColor: "bg-sky-500 hover:bg-sky-600",
  },
];

const AUTO_SCROLL_SPEED = 0.8; // px per frame
const AUTO_SCROLL_INTERVAL_MS = 30;

export function MarketingProductsSection() {
  const [expanded, setExpanded] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 접힌 상태일 때만 자동으로 아래로 스크롤
  useEffect(() => {
    if (expanded) return;
    const el = scrollRef.current;
    if (!el) return;

    const tick = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const maxScroll = scrollHeight - clientHeight;
      if (maxScroll <= 0) return;

      if (scrollTop >= maxScroll - 2) {
        el.scrollTo({ top: 0, behavior: "auto" });
        return;
      }
      el.scrollTop += AUTO_SCROLL_SPEED;
    };

    const id = setInterval(tick, AUTO_SCROLL_INTERVAL_MS);
    return () => clearInterval(id);
  }, [expanded]);

  return (
    <section id="services" className="relative z-10 border-t border-slate-100 bg-white py-16 sm:py-20">
      <Container>
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
            애드그릿의 다양한 <span className="text-orange-500">마케팅 상품</span>
          </h2>
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="mt-4 inline-flex items-center justify-center rounded-full border-2 border-orange-500 bg-white px-6 py-2.5 text-sm font-medium text-orange-500 hover:bg-orange-50 transition-colors"
          >
            {expanded ? "접기" : "펼쳐서 보기"}
          </button>
        </div>

        <div
          ref={scrollRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 overflow-x-hidden ${
            expanded ? "" : "max-h-[420px] overflow-y-auto scrollbar-hide"
          }`}
        >
          {ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow flex-shrink-0"
            >
              <div className="flex items-start justify-between gap-3 flex-1 min-h-0">
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 leading-tight">
                    {item.label}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-500 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
                <span
                  className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${item.iconBg} ${item.iconColor}`}
                  aria-hidden
                >
                  {item.icon}
                </span>
              </div>
              <Link
                href="#contact"
                className={`mt-4 w-full rounded-lg py-3 text-center text-sm font-semibold text-white transition-colors ${item.btnColor}`}
              >
                문의하기
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
