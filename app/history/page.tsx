"use client";

import { motion } from "framer-motion";
import { SiteHeader } from "../_components/SiteHeader";
import { Footer } from "../_components/Footer";

/* ─── 공통 이징 ─────────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-80px" } as const;

/* ─── 연혁 데이터 ────────────────────────────────────── */
const HISTORY = [
  {
    year: "2019",
    items: [
      { month: "03", title: "ADGRIT 창업", desc: "디지털 마케팅 전문 에이전시로 출발, 퍼포먼스 광고 서비스 개시" },
      { month: "08", title: "첫 주요 클라이언트 확보", desc: "국내 이커머스 TOP 브랜드와의 파트너십 체결 및 광고 운영 시작" },
    ],
  },
  {
    year: "2020",
    items: [
      { month: "02", title: "팀 구성 확대", desc: "데이터 분석팀·크리에이티브팀 신설, 전문 인력 15명 규모로 성장" },
      { month: "09", title: "연 취급고 100억 돌파", desc: "창업 2년차 연간 광고 취급고 100억원 달성" },
    ],
  },
  {
    year: "2021",
    items: [
      { month: "04", title: "AI 마케팅 솔루션 도입", desc: "자체 개발 AI 기반 광고 최적화 툴 론칭, 머신러닝 기반 입찰 자동화 서비스 제공" },
      { month: "11", title: "중소기업벤처부 선정 예비유니콘", desc: "혁신적 성장성을 인정받아 정부 주관 예비유니콘 기업 선정" },
    ],
  },
  {
    year: "2022",
    items: [
      { month: "01", title: "누적 투자유치 310억 달성", desc: "시리즈 B 투자 유치 완료, 누적 투자유치금액 310억원 달성" },
      { month: "06", title: "글로벌팀 신설", desc: "해외 진출 국내 브랜드 및 글로벌 브랜드 대상 글로벌 캠페인 전담팀 구성" },
      { month: "12", title: "연 취급고 1,000억 돌파", desc: "4년 만에 연간 광고 취급고 1,000억원 달성, 폭발적 성장 입증" },
    ],
  },
  {
    year: "2023",
    items: [
      { month: "03", title: "아시아 시장 진출", desc: "일본·동남아 시장 진출 본격화, 해외 클라이언트 광고 집행 시작" },
      { month: "09", title: "구성원 100명 돌파", desc: "분석·전략·운영·크리에이티브·기술 전 분야 전문가 100인 체제 완성" },
    ],
  },
  {
    year: "2024",
    items: [
      { month: "01", title: "연 취급고 3,500억 달성", desc: "국내 독립 디지털 마케팅 에이전시 최고 수준의 광고 취급고 달성" },
      { month: "06", title: "AI 통합 마케팅 플랫폼 론칭", desc: "빅데이터 분석·AI 광고 최적화·자동 리포팅을 결합한 원스톱 마케팅 플랫폼 출시" },
    ],
  },
] as const;

/* ─── 연혁 아이템 컴포넌트 ───────────────────────────── */
function HistoryItem({
  item,
  isLast,
}: {
  item: { month: string; title: string; desc: string };
  isLast: boolean;
}) {
  return (
    <div className={`flex gap-6 sm:gap-10 ${isLast ? "" : "pb-10"}`}>
      {/* 월 */}
      <div className="shrink-0 w-10 text-right">
        <span className="text-xs font-bold text-[#2563EB] tracking-widest">{item.month}</span>
      </div>

      {/* 점 + 선 */}
      <div className="flex flex-col items-center shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-[#2563EB] mt-0.5 shrink-0" />
        {!isLast && <div className="w-px flex-1 bg-white/[0.08] mt-2" />}
      </div>

      {/* 내용 */}
      <div className="flex-1 pb-2">
        <h3 className="text-base sm:text-[1.0625rem] font-bold text-white mb-1.5 leading-snug">
          {item.title}
        </h3>
        <p className="text-sm text-white/45 leading-[1.85]">{item.desc}</p>
      </div>
    </div>
  );
}

/* ─── 연도 섹션 컴포넌트 ─────────────────────────────── */
function YearSection({ entry }: { entry: typeof HISTORY[number] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-0 sm:gap-16 border-t border-white/[0.07] pt-12 pb-4">

      {/* 왼쪽: 연도 — 왼쪽에서 슬라이드 인 */}
      <motion.div
        className="mb-8 sm:mb-0 shrink-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.75, ease: EASE }}
      >
        <span
          className="font-black text-white leading-none tracking-tighter"
          style={{ fontSize: "clamp(4rem, 8vw, 6.5rem)" }}
        >
          {entry.year}
        </span>
      </motion.div>

      {/* 오른쪽: 항목 목록 — 오른쪽에서 슬라이드 인 */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.75, ease: EASE }}
      >
        {entry.items.map((item, i) => (
          <HistoryItem
            key={item.title}
            item={item}
            isLast={i === entry.items.length - 1}
          />
        ))}
      </motion.div>
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
        <section className="px-6 sm:px-14 lg:px-24 pt-28 sm:pt-36 pb-20 sm:pb-28">
          <motion.p
            className="text-[0.65rem] font-bold tracking-[0.28em] text-[#2563EB] uppercase mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          >
            ADGRIT HISTORY
          </motion.p>

          <motion.h1
            className="font-extrabold text-white leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          >
            회사연혁
          </motion.h1>

          <motion.p
            className="mt-6 text-base sm:text-[1.0625rem] text-white/40 max-w-md leading-[1.85]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
          >
            ADGRIT의 도전과 성장의 기록입니다.
          </motion.p>
        </section>

        {/* ── 연혁 타임라인 ───────────────────────────── */}
        <section className="px-6 sm:px-14 lg:px-24 pb-36 sm:pb-52 space-y-14 sm:space-y-20">
          {HISTORY.map((entry) => (
            <YearSection key={entry.year} entry={entry} />
          ))}
        </section>

      </main>

      <Footer />
    </div>
  );
}
