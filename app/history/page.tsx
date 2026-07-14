"use client";

import { motion } from "framer-motion";
import { SiteHeader } from "../_components/SiteHeader";
import { Footer } from "../_components/Footer";
import { SectionBackdrop } from "../_components/backgrounds/SectionBackdrop";

/* ─── 모션 ───────────────────────────────────────────── */
const SPRING   = { type: "spring", stiffness: 300, damping: 28, mass: 0.9 } as const;
const EASE     = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-80px" } as const;

/* ─── 타입 ───────────────────────────────────────────── */
type Item  = { text: string; bold?: boolean };
type Entry = { year: string; side: "left" | "right"; items: Item[] };

/* ─── 데이터 (이미지 전문 스캔 · 매드업 → 애드그릿 치환) ── */
const HISTORY: Entry[] = [
  {
    year: "2014년",
    side: "left",
    items: [
      { text: "원더플코리아 협력업체 | 네오폰코리아 협력업체" },
      { text: "마루네프가구 협력업체 | 한주엘리 협력업체" },
    ],
  },
  {
    year: "2015년",
    side: "right",
    items: [
      { text: "네이버 블로그 상위노출 솔루션 개발 실행", bold: true },
      { text: "PSU 에듀센터 | 아이존 닥터 | 피부과 동안 중심" },
      { text: "탈모 한스 힐링 | 한방 자동차 운전학원 | 메디프랜" },
      { text: "Kic 공무원 학원 | 카마 승무원 학원 외 300여 업체 진행" },
    ],
  },
  {
    year: "2017년",
    side: "left",
    items: [
      { text: "카페 자동화 시스템 솔루션 개발", bold: true },
      { text: "카페몬 | 쥬라테크오에이 | SBS 뷰티아카데미" },
      { text: "폰데이종로폰 | 마네케이션 | 르끌렌 | 판디스" },
      { text: "모든 실용음악 아카데미 외 200여 업체 진행" },
    ],
  },
  {
    year: "2018년",
    side: "right",
    items: [
      { text: "인스타그램 마케팅 솔루션 개발", bold: true },
      { text: "인스타그램 노출 솔루션 로직개발", bold: true },
      { text: "인스타그램 2000개 이상 업체 진행 | 건일건설" },
      { text: "SNY트란지 | 명사랑 부동산 | 부동산온누리 | 부동산법인 정부" },
      { text: "서연 부동산 인 건설, 부동산 분야 10여 업체 진행" },
    ],
  },
  {
    year: "2019년",
    side: "left",
    items: [
      { text: "기업부설 연구소 설립", bold: true },
      { text: "인스타그램 마케팅 솔루션 업데이트", bold: true },
      { text: "인스타그램 노출 솔루션 로직 업데이트", bold: true },
      { text: "블로그 로직분석 및 제작판매", bold: true },
      { text: "인스타그램 3000개 이상 업체 진행" },
      { text: "네이버카페 마케팅 진행 | 네이버 플레이스 마케팅 진행" },
      { text: "인스타 등 1000여개 업체 진행" },
    ],
  },
  {
    year: "2020년",
    side: "right",
    items: [
      { text: "통합마케팅 실행 시스템 구축", bold: true },
      { text: "페이스북 타겟광고 로그램석 | 인스타그램 로직 업데이트" },
      { text: "인스타그램 최적화계정 육성" },
      { text: "CRM마케팅 고정 및 프로세스 구축" },
    ],
  },
  {
    year: "2021년",
    side: "left",
    items: [
      { text: "브랜드 블로그 육성 및 판매", bold: true },
      { text: "네이버카페 마케팅 진행 | 네이버 플레이스 마케팅 진행" },
      { text: "인스타그램 최적화 육성 1만개 이상" },
      { text: "매출성장 및 컨설팅 진행 100개업체 외" },
      { text: "인스타 등 1500여개 업체 진행" },
    ],
  },
  {
    year: "2022년",
    side: "right",
    items: [
      { text: "통합 마케팅 대시보드 시스템 구축", bold: true },
      { text: "블로그 체험단 시스템 고도화 | 유튜브 채널 운영 및 영상 마케팅 강화" },
      { text: "브랜드 SNS 통합 관리 솔루션 개발" },
      { text: "연간 1600여개 업체 마케팅 진행" },
    ],
  },
  {
    year: "2023년",
    side: "left",
    items: [
      { text: "퍼포먼스 마케팅 고도화", bold: true },
      { text: "GA4 기반 데이터 분석 시스템 구축 | 쇼핑몰 통합 마케팅 솔루션 론칭" },
      { text: "인플루언서 협업 네트워크 확대 | CRM 마케팅 자동화 시스템 도입" },
      { text: "연간 1600여개 업체 마케팅 진행" },
    ],
  },
  {
    year: "2024년",
    side: "right",
    items: [
      { text: "브랜드 빅데이터 분석 솔루션 고도화", bold: true },
      { text: "자체 광고 플랫폼 베타 서비스 오픈 | 바이럴 마케팅 솔루션 업그레이드" },
      { text: "크리에이티브 콘텐츠 제작 스튜디오 설립" },
      { text: "연간 1800여개 업체 마케팅 진행" },
    ],
  },
  {
    year: "2025년",
    side: "left",
    items: [
      { text: "AI 기반 마케팅 자동화 솔루션 개발", bold: true },
      { text: "글로벌 마케팅 서비스 확대 (일본, 동남아) | 틱톡 및 숏폼 마케팅 전문팀 신설" },
      { text: "마케팅 데이터 통합 플랫폼 고도화" },
      { text: "연간 1800여개 업체 마케팅 진행" },
    ],
  },
  {
    year: "2026년",
    side: "right",
    items: [
      { text: "마케팅 통합 플랫폼 정식 런칭", bold: true },
      { text: "AI 타겟팅 광고 시스템 고도화 | 글로벌 파트너십 확대 및 현지화 서비스 제공" },
      { text: "ESG 경영 강화 및 사회공헌 마케팅 확대" },
      { text: "연간 1800여개 업체 마케팅 진행" },
    ],
  },
];


/* ─── 콘텐츠 블록 ────────────────────────────────────── */
function EntryBlock({ entry }: { entry: Entry }) {
  const isLeft = entry.side === "left";
  return (
    <motion.div
      className={isLeft ? "text-right" : "text-left"}
      initial={{ opacity: 0, x: isLeft ? -56 : 56 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={VIEWPORT}
      transition={SPRING}
    >
      <div className={`ig-glass-card inline-block w-full max-w-[420px] rounded-2xl px-6 py-6 sm:px-7 sm:py-7 ${isLeft ? "text-right" : "text-left"}`}>
        {/* 연도 */}
        <h2 className="ig-gradient-text text-[2rem] font-bold leading-none tracking-tight mb-4">
          {entry.year}
        </h2>

        {/* 항목 */}
        <div className="space-y-2">
          {entry.items.map((item, i) => (
            <p
              key={i}
              className={`text-[1.05rem] leading-relaxed ${
                item.bold ? "font-bold text-white" : "text-white/55"
              }`}
            >
              {item.text}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── 페이지 ─────────────────────────────────────────── */
export default function HistoryPage() {
  return (
    <div className="text-white min-h-screen">
      <SiteHeader />

      <main className="pt-16">

        {/* ── 히어로 ─────────────────────────────────── */}
        <section className="ig-section px-6 sm:px-14 lg:px-24 pt-20 sm:pt-28 pb-10 sm:pb-16">
          <SectionBackdrop variant="s2" />
          <div className="ig-content">
            <motion.p
              className="text-[0.975rem] font-bold tracking-[0.28em] text-white/45 uppercase mb-5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            >
              ADGRIT HISTORY
            </motion.p>
            <motion.h1
              className="font-extrabold text-white leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease: EASE }}
            >
              <span className="ig-gradient-text">회사연혁</span>
            </motion.h1>
            <motion.p
              className="mt-5 text-lg sm:text-xl text-white/50 leading-[1.85]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease: EASE }}
            >
              애드그릿의 도전과 성장의 기록입니다.
            </motion.p>
          </div>
        </section>

        {/* ── 지그재그 타임라인 ────────────────────────── */}
        <section className="ig-section relative">
          <SectionBackdrop variant="s6" />
          <div className="ig-content">

            {/* 데스크톱 */}
            <div className="hidden sm:block relative px-6 lg:px-16 xl:px-28 pb-36">

              {/* 중앙 수직선 */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.1] -translate-x-1/2 pointer-events-none" />

              {HISTORY.map((entry) => (
                <div key={entry.year} className="relative grid grid-cols-2 py-7">

                  {/* 중앙 점 */}
                  <div className="absolute left-1/2 top-8 -translate-x-1/2 w-[9px] h-[9px] rounded-full bg-[var(--ig-pink)] ring-4 ring-[#07030f] z-10 shadow-[0_0_10px_rgba(255,45,149,0.45)]" />

                  {/* 왼쪽 셀: side="left" 일 때만 콘텐츠 */}
                  <div className="pr-8 lg:pr-12 flex justify-end">
                    {entry.side === "left" && <EntryBlock entry={entry} />}
                  </div>

                  {/* 오른쪽 셀: side="right" 일 때만 콘텐츠 */}
                  <div className="pl-8 lg:pl-12">
                    {entry.side === "right" && <EntryBlock entry={entry} />}
                  </div>
                </div>
              ))}
            </div>

            {/* 모바일 — 단일 열 */}
            <div className="sm:hidden relative ml-5 pl-5 border-l border-white/[0.1] pb-28 space-y-6 px-6">
              {HISTORY.map((entry) => (
                <div key={entry.year} className="relative">
                  {/* 점 */}
                  <div className="absolute -left-[1.3125rem] top-1.5 w-[9px] h-[9px] rounded-full bg-[var(--ig-pink)] ring-4 ring-[#07030f] shadow-[0_0_8px_rgba(255,45,149,0.45)]" />

                  <motion.div
                    initial={{ opacity: 0, x: -36 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VIEWPORT}
                    transition={SPRING}
                  >
                    <div className="ig-glass-card rounded-2xl px-5 py-6">
                      <h2 className="ig-gradient-text text-[1.8rem] font-bold tracking-tight leading-none mb-3">
                        {entry.year}
                      </h2>
                      <div className="space-y-2">
                        {entry.items.map((item, i) => (
                          <p
                            key={i}
                            className={`text-[1rem] leading-relaxed ${
                              item.bold ? "font-bold text-white" : "text-white/55"
                            }`}
                          >
                            {item.text}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
