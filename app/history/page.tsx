"use client";

import { motion } from "framer-motion";
import { SiteHeader } from "../_components/SiteHeader";
import { Footer } from "../_components/Footer";

/* ─── 모션 설정 ──────────────────────────────────────── */
const SPRING_L = { type: "spring", stiffness: 300, damping: 28, mass: 0.9 } as const;
const SPRING_R = { type: "spring", stiffness: 300, damping: 28, mass: 0.9 } as const;
const EASE     = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-80px" } as const;

/* ─── 타입 ───────────────────────────────────────────── */
type Item  = { text: string; bold?: boolean };
type Entry = { yearLabel: string; yearSub?: string; items: Item[] };

/* ─── 연혁 데이터 ────────────────────────────────────── */
const HISTORY: Entry[] = [
  {
    yearLabel: "2014",
    items: [
      { text: "원더폰코리아 협력업체 | 네오폰코리아 협력업체" },
      { text: "마루네프가구 협력업체 | 한주얼리 협력업체" },
    ],
  },
  {
    yearLabel: "2015",
    items: [
      { text: "네이버 블로그 상위노출 솔루션 개발 실행", bold: true },
      { text: "PSU 에듀센터 | 아이폰 닥터 | 피부과 동안 중심" },
      { text: "탈모 회사 웰킨 | 한백 자동차 운전학원 | 메디프랩" },
      { text: "Kic 공무원 학원 | 카마 승무원 학원 외 30여 업체 진행" },
    ],
  },
  {
    yearLabel: "2017",
    items: [
      { text: "카페 자동화 시스템 솔루션 개발", bold: true },
      { text: "카피몬 | 칼라테크오에이 | SBS 뷰티아카데미" },
      { text: "폰데이중고폰 | 머니게이션 | 폰플랜 | 판디스" },
      { text: "모드 실용음악 아카데미 외 200여 업체 진행" },
    ],
  },
  {
    yearLabel: "2018",
    items: [
      { text: "인스타그램 마케팅 솔루션 개발", bold: true },
      { text: "인스타그램 솔루션 로직개발", bold: true },
      { text: "인스타그램 2000여개 이상 업체 진행 | 전일건설" },
      { text: "SNY트렌지 | 땅사랑 부동산 | 부동산노른자 | 부동산법인 정무" },
      { text: "서인 부동산 외 건설, 부동산 분야 10여 업체 진행" },
    ],
  },
  {
    yearLabel: "2019",
    items: [
      { text: "기업부설 연구소 설립", bold: true },
      { text: "인스타그램 마케팅 솔루션 업데이트", bold: true },
      { text: "인스타그램 노출 솔루션 로직 업데이트", bold: true },
      { text: "블로그 로직분석 및 재작판매", bold: true },
      { text: "인스타그램 3000여개 이상 업체 진행" },
      { text: "네이버카페 마케팅 진행" },
      { text: "네이버 플레이스 마케팅 진행 외" },
      { text: "인스타 등 300여개 업체 진행…" },
    ],
  },
  {
    yearLabel: "2020",
    items: [
      { text: "통합마케팅 실행 시스템 구축" },
      { text: "페이스북 타켓광고 로그분석" },
      { text: "인스타그램 로직 업데이트" },
      { text: "인스타그램 최적화계정 육성" },
      { text: "CRM마케팅 고칭 및 프로세스 구축" },
    ],
  },
  {
    yearLabel: "2021",
    yearSub: "~ 2023",
    items: [
      { text: "메타 광고 진행 | 브랜드 블로그 육성 및 판매", bold: true },
      { text: "네이버카페 마케팅 진행 | 네이버 플레이스 마케팅 진행", bold: true },
      { text: "인스타그램 최적화 육성 1만개 이상" },
      { text: "인스타그램 노출 발행 10개 이상" },
      { text: "매출성장 및 컨설팅 진행 100개업체 외" },
      { text: "인스타 등 500여개 업체 진행…" },
    ],
  },
];

/* ─── 연도 섹션 ──────────────────────────────────────── */
function YearSection({ entry }: { entry: Entry }) {
  return (
    <div className="relative">

      {/* ── 데스크톱 (sm 이상): 좌우 랑데부 레이아웃 ─── */}
      <div className="hidden sm:grid grid-cols-2 relative">

        {/* 중앙 수직선 */}
        <div className="absolute inset-y-0 left-1/2 w-px bg-white/[0.08] -translate-x-1/2 pointer-events-none" />

        {/* 중앙 점 (블루) */}
        <div className="absolute top-10 left-1/2 w-3 h-3 rounded-full bg-[#2563EB] -translate-x-1/2 z-10 ring-4 ring-black shadow-[0_0_12px_rgba(37,99,235,0.6)]" />

        {/* 왼쪽: 연도 — 왼쪽에서 중앙선으로 랑데부 */}
        <motion.div
          className="pr-12 xl:pr-20 text-right pt-8 pb-14"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEWPORT}
          transition={SPRING_L}
        >
          <span
            className="font-black text-white leading-none tracking-tighter block"
            style={{ fontSize: "clamp(4.5rem, 7vw, 6.5rem)" }}
          >
            {entry.yearLabel}
          </span>
          {entry.yearSub && (
            <span className="text-[#2563EB] font-bold text-lg sm:text-xl tracking-tight block mt-1">
              {entry.yearSub}
            </span>
          )}
          <span className="text-white/20 text-sm font-medium tracking-widest block mt-2">년</span>
        </motion.div>

        {/* 오른쪽: 내용 — 오른쪽에서 중앙선으로 랑데부 */}
        <motion.div
          className="pl-12 xl:pl-20 pt-8 pb-14"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEWPORT}
          transition={SPRING_R}
        >
          <ul className="space-y-3">
            {entry.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                {/* 블루 인디케이터 (볼드 항목만) */}
                {item.bold && (
                  <span className="mt-[0.35em] shrink-0 w-1 h-1 rounded-full bg-[#2563EB]" />
                )}
                <p
                  className={`text-sm sm:text-[0.9rem] leading-relaxed ${
                    item.bold
                      ? "font-bold text-white"
                      : "text-white/45 font-normal"
                  } ${!item.bold ? "pl-4" : ""}`}
                >
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* ── 모바일: 단일 열 ──────────────────────────────── */}
      <div className="sm:hidden relative pl-6 border-l border-white/[0.08] py-10">

        {/* 블루 점 */}
        <div className="absolute top-10 -left-[7px] w-3 h-3 rounded-full bg-[#2563EB] ring-4 ring-black shadow-[0_0_10px_rgba(37,99,235,0.5)]" />

        {/* 연도 — 왼쪽에서 슬라이드 */}
        <motion.div
          className="mb-5"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEWPORT}
          transition={SPRING_L}
        >
          <span className="text-[3rem] font-black text-white leading-none tracking-tighter block">
            {entry.yearLabel}
          </span>
          {entry.yearSub && (
            <span className="text-[#2563EB] font-bold text-base block mt-0.5">
              {entry.yearSub}
            </span>
          )}
        </motion.div>

        {/* 내용 — 오른쪽에서 슬라이드 */}
        <motion.ul
          className="space-y-3"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEWPORT}
          transition={SPRING_R}
        >
          {entry.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              {item.bold && (
                <span className="mt-[0.35em] shrink-0 w-1 h-1 rounded-full bg-[#2563EB]" />
              )}
              <p
                className={`text-sm leading-relaxed ${
                  item.bold ? "font-bold text-white" : "text-white/45 font-normal"
                } ${!item.bold ? "pl-3.5" : ""}`}
              >
                {item.text}
              </p>
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

/* ─── 페이지 ─────────────────────────────────────────── */
export default function HistoryPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <SiteHeader />

      <main className="pt-16">

        {/* ── 히어로 ─────────────────────────────────── */}
        <section className="px-6 sm:px-14 lg:px-24 pt-28 sm:pt-36 pb-16 sm:pb-24">
          <motion.p
            className="text-[0.65rem] font-bold tracking-[0.28em] text-[#2563EB] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          >
            ADGRIT HISTORY
          </motion.p>

          <motion.h1
            className="font-extrabold text-white leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          >
            회사연혁
          </motion.h1>

          <motion.p
            className="mt-5 text-base sm:text-[1.0625rem] text-white/38 max-w-sm leading-[1.85]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34, ease: EASE }}
          >
            ADGRIT의 도전과 성장의 기록입니다.
          </motion.p>
        </section>

        {/* ── 타임라인 ─────────────────────────────────── */}
        <section className="px-6 sm:px-14 lg:px-24 pb-40 sm:pb-56 divide-y divide-white/[0.06]">
          {HISTORY.map((entry) => (
            <YearSection key={entry.yearLabel} entry={entry} />
          ))}
        </section>

      </main>

      <Footer />
    </div>
  );
}
