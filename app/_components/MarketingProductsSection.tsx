"use client";

import { Container } from "./Container";

const ICON_CLASS = "w-8 h-8 stroke-[1.5]";

const ITEMS = [
  {
    label: "홈페이지 제작",
    icon: (
      <svg className={ICON_CLASS} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    bg: "bg-slate-100",
    color: "text-slate-700",
  },
  {
    label: "플레이스 광고",
    icon: (
      <svg className={ICON_CLASS} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    bg: "bg-blue-50",
    color: "text-blue-600",
  },
  {
    label: "블로그 상위노출",
    icon: (
      <svg className={ICON_CLASS} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    bg: "bg-emerald-50",
    color: "text-emerald-600",
  },
  {
    label: "카페 바이럴",
    icon: (
      <svg className={ICON_CLASS} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    bg: "bg-amber-50",
    color: "text-amber-700",
  },
  {
    label: "네이버 검색광고",
    icon: (
      <svg className={ICON_CLASS} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    bg: "bg-green-50",
    color: "text-green-600",
  },
  {
    label: "검색어 자동완성",
    icon: (
      <svg className={ICON_CLASS} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h10" />
      </svg>
    ),
    bg: "bg-teal-50",
    color: "text-teal-600",
  },
  {
    label: "인스타그램 관리 및 운영",
    icon: (
      <svg className={ICON_CLASS} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 13v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7" />
      </svg>
    ),
    bg: "bg-pink-50",
    color: "text-pink-600",
  },
  {
    label: "유튜브 광고",
    icon: (
      <svg className={ICON_CLASS} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    bg: "bg-red-50",
    color: "text-red-600",
  },
  {
    label: "홍보 영상 제작",
    icon: (
      <svg className={ICON_CLASS} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    bg: "bg-slate-100",
    color: "text-slate-700",
  },
  {
    label: "구글 디스플레이 광고",
    icon: (
      <svg className={ICON_CLASS} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    bg: "bg-sky-50",
    color: "text-sky-600",
  },
  {
    label: "체험단 운영",
    icon: (
      <svg className={ICON_CLASS} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    bg: "bg-violet-50",
    color: "text-violet-600",
  },
  {
    label: "리플렛 및 홍보용 카탈로그 제작",
    icon: (
      <svg className={ICON_CLASS} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    bg: "bg-cyan-50",
    color: "text-cyan-600",
  },
];

export function MarketingProductsSection() {
  return (
    <section id="services" className="relative z-10 border-t border-slate-100 bg-white py-16 sm:py-20">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16">
          <div className="flex-shrink-0 lg:w-[32%] lg:max-w-[380px]">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
              <span className="text-[#1a1a2e]">애드그릿의</span>
              <br />
              <span className="text-orange-500">다양한 마케팅 상품</span>
            </h2>
          </div>
          <div className="flex-1 min-w-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {ITEMS.map((item, i) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center text-center group"
                >
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center ${item.bg} ${item.color} group-hover:scale-105 transition-transform`}
                  >
                    {item.icon}
                  </div>
                  <p className="mt-3 text-xs sm:text-sm font-medium text-slate-700 leading-tight">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
