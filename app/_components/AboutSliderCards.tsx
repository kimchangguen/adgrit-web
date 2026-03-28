"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Lightbulb, ShieldCheck, TrendingUp, Users,
  BarChart3, Palette, Zap, Heart, Rocket, Handshake,
  ChevronLeft, ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ─── 카드 데이터 (10장 핵심가치) ──────────────────── */
const CARDS = [
  { id: 1,  num: "01", icon: Lightbulb,   keyword: "혁신",      en: "Innovation",   desc: "고정된 방식에 머물지 않습니다. 새로운 기술과 접근법으로 마케팅의 경계를 끊임없이 넓혀나갑니다." },
  { id: 2,  num: "02", icon: ShieldCheck,  keyword: "신뢰",      en: "Trust",        desc: "약속을 지키고 결과로 보여줍니다. 파트너와 쌓아온 신뢰가 애드그릿의 가장 큰 자산입니다." },
  { id: 3,  num: "03", icon: TrendingUp,   keyword: "성장",      en: "Growth",       desc: "클라이언트의 성장이 곧 우리의 성장입니다. 매출 그래프가 오르는 순간을 함께 만들어갑니다." },
  { id: 4,  num: "04", icon: Users,        keyword: "파트너십",  en: "Partnership",  desc: "대행사가 아닌 함께 뛰는 팀입니다. 목표를 공유하고 전략을 함께 설계하는 진짜 파트너." },
  { id: 5,  num: "05", icon: BarChart3,    keyword: "데이터 기반", en: "Data-Driven", desc: "감이 아닌 숫자로 판단합니다. 모든 광고와 콘텐츠를 지표로 추적하고 끊임없이 개선합니다." },
  { id: 6,  num: "06", icon: Palette,      keyword: "창의성",    en: "Creativity",   desc: "알고리즘을 이기는 건 결국 좋은 콘텐츠입니다. 클릭을 부르는 창의적 기획으로 차별화를 만듭니다." },
  { id: 7,  num: "07", icon: Zap,          keyword: "속도",      en: "Speed",        desc: "마케팅은 타이밍입니다. 트렌드를 가장 빠르게 파악하고 실행에 옮기는 속도가 성과를 결정합니다." },
  { id: 8,  num: "08", icon: Heart,        keyword: "진정성",    en: "Authenticity", desc: "과장 없이 솔직하게. 안 되는 건 안 된다고 말하고, 된다고 하면 반드시 해냅니다." },
  { id: 9,  num: "09", icon: Rocket,       keyword: "도전",      en: "Challenge",    desc: "아무도 가지 않은 길도 두렵지 않습니다. 새로운 채널과 전략에 끊임없이 도전해 가능성을 증명합니다." },
  { id: 10, num: "10", icon: Handshake,    keyword: "상생",      en: "Coexistence",  desc: "클라이언트, 팀원, 파트너 모두가 함께 성장하는 생태계를 만듭니다. 혼자 크는 성공은 없습니다." },
] as const;

/* ─── 스프링 설정 ────────────────────────────────────── */
const SPRING = { type: "spring", stiffness: 260, damping: 28, mass: 0.9 } as const;

/* ─── 카드 오프셋별 시각 상태 ───────────────────────── */
//   offset  0 = 현재(앞), 1 = 다음, 2 = 그다음, <0 = 나간 카드, >2 = 아직 대기
function getStackState(offset: number) {
  if (offset < 0)  return { y: "0%",  scale: 0.88, opacity: 0, zIndex: 0,  x: "-115%" };
  if (offset === 0) return { y: "0px", scale: 1,    opacity: 1, zIndex: 30, x: "0%" };
  if (offset === 1) return { y: "28px", scale: 0.96, opacity: 1, zIndex: 20, x: "0%" };
  if (offset === 2) return { y: "52px", scale: 0.92, opacity: 0.7, zIndex: 10, x: "0%" };
  return                    { y: "68px", scale: 0.88, opacity: 0, zIndex: 5,  x: "0%" };
}

/* ─── 단일 카드 콘텐츠 ───────────────────────────────── */
function CardContent({ card }: { card: typeof CARDS[number] }) {
  const Icon = card.icon as LucideIcon;
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-8 sm:px-16 lg:px-24 select-none overflow-hidden">

      {/* 배경 장식 숫자 */}
      <span
        aria-hidden
        className="absolute right-[-0.15em] bottom-[-0.25em] font-extrabold leading-none text-white/[0.06] pointer-events-none"
        style={{ fontSize: "clamp(10rem, 30vw, 22rem)" }}
      >
        {card.num}
      </span>

      {/* 배경 원형 장식 */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/[0.04] pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-white/[0.04] pointer-events-none" />

      {/* 중앙 콘텐츠 */}
      <div className="relative z-10 text-center max-w-xl">
        {/* 아이콘 */}
        <div className="mx-auto mb-8 w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white/[0.15] backdrop-blur-sm flex items-center justify-center ring-1 ring-white/20">
          <Icon size={48} className="text-white" strokeWidth={1.4} />
        </div>

        {/* 영문 레이블 */}
        <p className="text-xs sm:text-sm font-bold tracking-[0.25em] text-white/50 uppercase mb-3">
          {card.en}
        </p>

        {/* 한글 키워드 */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
          {card.keyword}
        </h2>

        {/* 설명 */}
        <p className="text-base sm:text-lg text-white/75 leading-[1.85] max-w-md mx-auto">
          {card.desc}
        </p>
      </div>

      {/* 카드 번호 (좌상단) */}
      <span className="absolute top-8 left-8 sm:top-10 sm:left-10 text-xs font-bold tracking-widest text-white/30 uppercase">
        {card.num} / 10
      </span>
    </div>
  );
}

/* ─── 메인 슬라이더 ─────────────────────────────────── */
export function AboutSliderCards() {
  const [idx, setIdx] = useState(0);

  const go = useCallback((newIdx: number) => {
    setIdx(Math.max(0, Math.min(newIdx, CARDS.length - 1)));
  }, []);

  const atStart = idx === 0;
  const atEnd   = idx === CARDS.length - 1;

  return (
    <div className="flex flex-col">

      {/* 카드 스택 영역 */}
      <div
        className="relative w-full"
        style={{ height: "calc(100vh - 4rem)" }}   /* 헤더 높이(4rem) 제외 */
      >
        {CARDS.map((card, i) => {
          const offset = i - idx;
          const state  = getStackState(offset);
          // offset > 3이면 렌더 생략 (성능)
          if (offset > 3 || offset < -1) return null;

          return (
            <motion.div
              key={card.id}
              initial={false}
              animate={{
                x:       state.x,
                y:       state.y,
                scale:   state.scale,
                opacity: state.opacity,
                zIndex:  state.zIndex,
              }}
              transition={SPRING}
              className="absolute inset-0 rounded-none sm:rounded-3xl overflow-hidden bg-[#1A237E] cursor-pointer"
              style={{ transformOrigin: "bottom center" }}
              onClick={() => offset === 0 && !atEnd && go(idx + 1)}
              aria-hidden={offset !== 0}
            >
              {/* 미세한 카드별 그라데이션 변형 */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, #1A237E 0%, #${
                    ["1e3a8a","1d4ed8","1e40af","1d4ed8","1e3a8a","2563eb","1e40af","1d4ed8","1e3a8a","2563eb"][i % 10]
                  } 100%)`,
                }}
              />
              <CardContent card={card} />
            </motion.div>
          );
        })}
      </div>

      {/* ── 컨트롤 바 (도트 + 화살표) ─────────────────── */}
      <div className="flex items-center justify-between px-4 sm:px-8 lg:px-12 py-6 bg-white border-t border-slate-100">

        {/* 도트 인디케이터 */}
        <div className="flex items-center gap-2">
          {CARDS.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`${i + 1}번 카드`}
              className={`rounded-full transition-all duration-300 ${
                i === idx
                  ? "w-7 h-2.5 bg-[#1A237E]"
                  : "w-2.5 h-2.5 bg-slate-200 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        {/* 화살표 버튼 */}
        <div className="flex items-center gap-3">
          <motion.button
            onClick={() => go(idx - 1)}
            disabled={atStart}
            whileHover={atStart ? {} : { scale: 1.1 }}
            whileTap={atStart  ? {} : { scale: 0.92 }}
            transition={SPRING}
            aria-label="이전 카드"
            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors ${
              atStart
                ? "border-slate-100 text-slate-300 cursor-not-allowed"
                : "border-slate-200 text-slate-600 hover:border-[#1A237E] hover:text-[#1A237E] hover:bg-[#1A237E]/5"
            }`}
          >
            <ChevronLeft size={20} strokeWidth={2} />
          </motion.button>

          <motion.button
            onClick={() => go(idx + 1)}
            disabled={atEnd}
            whileHover={atEnd ? {} : { scale: 1.1 }}
            whileTap={atEnd   ? {} : { scale: 0.92 }}
            transition={SPRING}
            aria-label="다음 카드"
            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors ${
              atEnd
                ? "border-slate-100 text-slate-300 cursor-not-allowed"
                : "border-slate-200 text-slate-600 hover:border-[#1A237E] hover:text-[#1A237E] hover:bg-[#1A237E]/5"
            }`}
          >
            <ChevronRight size={20} strokeWidth={2} />
          </motion.button>
        </div>
      </div>

    </div>
  );
}
