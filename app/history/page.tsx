"use client";

import { motion } from "framer-motion";
import { SiteHeader } from "../_components/SiteHeader";
import { Footer } from "../_components/Footer";

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
      { text: "원더폰코리아 협력업체 | 네오폰코리아 협력업체" },
      { text: "마루네프가구 협력업체 | 한주얼리 협력업체" },
    ],
  },
  {
    year: "2015년",
    side: "right",
    items: [
      { text: "네이버 블로그 상위노출 솔루션 개발 실행", bold: true },
      { text: "PSU 에듀센터 | 아이폰 닥터 | 피부과 동안 중심" },
      { text: "탈모 회사 웰킨 | 한백 자동차 운전학원 | 메디프랩" },
      { text: "Kic 공무원 학원 | 카마 승무원 학원 외 30여 업체 진행" },
    ],
  },
  {
    year: "2017년",
    side: "left",
    items: [
      { text: "카페 자동화 시스템 솔루션 개발", bold: true },
      { text: "카피몬 | 칼라테크오에이 | SBS 뷰티아카데미" },
      { text: "폰데이중고폰 | 머니게이션 | 폰플랜 | 판디스" },
      { text: "모드 실용음악 아카데미 외 200여 업체 진행" },
    ],
  },
  {
    year: "2018년",
    side: "right",
    items: [
      { text: "인스타그램 마케팅 솔루션 개발", bold: true },
      { text: "인스타그램 솔루션 로직개발", bold: true },
      { text: "인스타그램 2000여개 이상 업체 진행 | 전일건설" },
      { text: "SNY트렌지 | 땅사랑 부동산 | 부동산노른자 | 부동산법인 정무" },
      { text: "서인 부동산 외 건설, 부동산 분야 10여 업체 진행" },
    ],
  },
  {
    year: "2019년",
    side: "left",
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
    year: "2020년",
    side: "right",
    items: [
      { text: "통합마케팅 실행 시스템 구축" },
      { text: "페이스북 타켓광고 로그분석" },
      { text: "인스타그램 로직 업데이트" },
      { text: "인스타그램 최적화계정 육성" },
      { text: "CRM마케팅 고칭 및 프로세스 구축" },
    ],
  },
  {
    year: "2021년~2023년",
    side: "left",
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
      {/* 연도 */}
      <h2 className="text-[2rem] font-bold text-white leading-none tracking-tight mb-4">
        {entry.year}
      </h2>

      {/* 항목 */}
      <div className="space-y-2">
        {entry.items.map((item, i) => (
          <p
            key={i}
            className={`text-[1.17rem] leading-relaxed ${
              item.bold ? "font-bold text-white" : "text-white/50"
            }`}
          >
            {item.text}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── 페이지 ─────────────────────────────────────────── */
export default function HistoryPage() {
  return (
    <div className="bg-[#2E4033] text-white min-h-screen">
      <SiteHeader />

      <main className="pt-16">

        {/* ── 히어로 ─────────────────────────────────── */}
        <section className="px-6 sm:px-14 lg:px-24 pt-20 sm:pt-28 pb-10 sm:pb-16">
          <motion.p
            className="text-[0.975rem] font-bold tracking-[0.28em] text-slate-200 uppercase mb-5"
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
            회사연혁
          </motion.h1>
          <motion.p
            className="mt-5 text-lg sm:text-xl text-white/38 leading-[1.85]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: EASE }}
          >
            애드그릿의 도전과 성장의 기록입니다.
          </motion.p>
        </section>

        {/* ── 지그재그 타임라인 (데스크톱) ────────────── */}
        <section className="hidden sm:block relative px-6 lg:px-16 xl:px-28 pb-36">

          {/* 중앙 수직선 */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.08] -translate-x-1/2 pointer-events-none" />

          {HISTORY.map((entry) => (
            <div key={entry.year} className="relative grid grid-cols-2 py-7">

              {/* 중앙 블루 점 */}
              <div className="absolute left-1/2 top-8 -translate-x-1/2 w-[9px] h-[9px] rounded-full bg-white ring-4 ring-black z-10 shadow-[0_0_10px_rgba(255,255,255,0.24)]" />

              {/* 왼쪽 셀: side="left" 일 때만 콘텐츠 */}
              <div className="pr-8 lg:pr-12">
                {entry.side === "left" && <EntryBlock entry={entry} />}
              </div>

              {/* 오른쪽 셀: side="right" 일 때만 콘텐츠 */}
              <div className="pl-8 lg:pl-12">
                {entry.side === "right" && <EntryBlock entry={entry} />}
              </div>
            </div>
          ))}
        </section>

        {/* ── 지그재그 타임라인 (모바일 — 단일 열) ───── */}
        <section className="sm:hidden relative ml-5 pl-5 border-l border-white/[0.08] pb-28 space-y-8">
          {HISTORY.map((entry) => (
            <div key={entry.year} className="relative">
              {/* 블루 점 */}
              <div className="absolute -left-[1.3125rem] top-1.5 w-[9px] h-[9px] rounded-full bg-white ring-4 ring-black shadow-[0_0_8px_rgba(255,255,255,0.24)]" />

              <motion.div
                initial={{ opacity: 0, x: -36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VIEWPORT}
                transition={SPRING}
              >
                <h2 className="text-[1.8rem] font-bold text-white tracking-tight leading-none mb-3">
                  {entry.year}
                </h2>
                <div className="space-y-2">
                  {entry.items.map((item, i) => (
                    <p
                      key={i}
                      className={`text-[1.125rem] leading-relaxed ${
                        item.bold ? "font-bold text-white" : "text-white/50"
                      }`}
                    >
                      {item.text}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </section>

      </main>

      <Footer />
    </div>
  );
}
