"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import {
  Lightbulb, ShieldCheck, TrendingUp, Users,
  BarChart3, Palette, Zap, Heart, Rocket, Handshake,
  ChevronLeft, ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ─── 카드 데이터 (10장 · 애드그릿 핵심 가치) ──────── */
const CARDS = [
  {
    id: 1,
    num: "01",
    icon: Lightbulb,
    keyword: "혁신",
    en: "Innovation",
    desc: "고정된 방식에 머물지 않습니다. 새로운 기술과 접근법으로 마케팅의 경계를 계속 넓혀나갑니다.",
    gradient: "from-[#1A237E] to-[#3949AB]",
    accent: "#3949AB",
  },
  {
    id: 2,
    num: "02",
    icon: ShieldCheck,
    keyword: "신뢰",
    en: "Trust",
    desc: "약속을 지키고 결과로 보여줍니다. 파트너와 쌓아온 신뢰가 애드그릿의 가장 큰 자산입니다.",
    gradient: "from-[#0f4c75] to-[#1b6ca8]",
    accent: "#1b6ca8",
  },
  {
    id: 3,
    num: "03",
    icon: TrendingUp,
    keyword: "성장",
    en: "Growth",
    desc: "클라이언트의 성장이 곧 우리의 성장입니다. 매출 그래프가 오르는 순간을 함께 만들어갑니다.",
    gradient: "from-[#065f46] to-[#059669]",
    accent: "#059669",
  },
  {
    id: 4,
    num: "04",
    icon: Users,
    keyword: "파트너십",
    en: "Partnership",
    desc: "대행사가 아닌 함께 뛰는 팀입니다. 목표를 공유하고 전략을 함께 설계하는 진짜 파트너.",
    gradient: "from-[#4C1D95] to-[#7C3AED]",
    accent: "#7C3AED",
  },
  {
    id: 5,
    num: "05",
    icon: BarChart3,
    keyword: "데이터 기반",
    en: "Data-Driven",
    desc: "감이 아닌 숫자로 판단합니다. 모든 광고와 콘텐츠를 지표로 추적하고 끊임없이 개선합니다.",
    gradient: "from-[#1e3a5f] to-[#1A237E]",
    accent: "#1A237E",
  },
  {
    id: 6,
    num: "06",
    icon: Palette,
    keyword: "창의성",
    en: "Creativity",
    desc: "알고리즘을 이기는 건 결국 좋은 콘텐츠입니다. 클릭을 부르는 창의적 기획으로 차별화를 만듭니다.",
    gradient: "from-[#9D174D] to-[#E11D48]",
    accent: "#E11D48",
  },
  {
    id: 7,
    num: "07",
    icon: Zap,
    keyword: "속도",
    en: "Speed",
    desc: "마케팅은 타이밍입니다. 트렌드를 가장 빠르게 파악하고 실행에 옮기는 속도가 성과를 결정합니다.",
    gradient: "from-[#92400E] to-[#FF7F00]",
    accent: "#FF7F00",
  },
  {
    id: 8,
    num: "08",
    icon: Heart,
    keyword: "진정성",
    en: "Authenticity",
    desc: "과장 없이 솔직하게. 안 되는 건 안 된다고 말하고, 된다고 하면 반드시 해냅니다.",
    gradient: "from-[#7F1D1D] to-[#DC2626]",
    accent: "#DC2626",
  },
  {
    id: 9,
    num: "09",
    icon: Rocket,
    keyword: "도전",
    en: "Challenge",
    desc: "아무도 가지 않은 길도 두렵지 않습니다. 새로운 채널과 전략에 끊임없이 도전해 가능성을 증명합니다.",
    gradient: "from-[#1A237E] to-[#0369a1]",
    accent: "#0369a1",
  },
  {
    id: 10,
    num: "10",
    icon: Handshake,
    keyword: "상생",
    en: "Coexistence",
    desc: "클라이언트, 팀원, 파트너 모두가 함께 성장하는 생태계를 만듭니다. 혼자 크는 성공은 없습니다.",
    gradient: "from-[#134e4a] to-[#0D9488]",
    accent: "#0D9488",
  },
] as const;

/* ─── 상수 ─────────────────────────────────────────── */
const CARD_W_DESKTOP = 380; // px  (데스크톱 카드 너비)
const CARD_W_MOBILE  = 300; // px  (모바일 카드 너비)
const GAP            = 24;  // px  (카드 간격 gap-6)
const SPRING = { type: "spring", stiffness: 260, damping: 30 } as const;
const EASE   = [0.22, 1, 0.36, 1] as const;

type CardData = typeof CARDS[number];

/* ─── 단일 카드 ─────────────────────────────────────── */
function ValueCard({ card, rank }: { card: CardData; rank: number }) {
  const Icon = card.icon as LucideIcon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: rank * 0.05, ease: EASE }}
      whileHover={{ y: -12, transition: { type: "spring", stiffness: 340, damping: 22 } }}
      className="group h-full"
    >
      <div className="flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm group-hover:shadow-2xl transition-shadow duration-500 border border-slate-100/80">

        {/* 아이콘 헤더 — 넉넉한 여백 */}
        <div className={`relative bg-gradient-to-br ${card.gradient} px-10 pt-10 pb-9 overflow-hidden`}>
          {/* 배경 원형 장식 */}
          <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-white/[0.07]" />
          <div className="absolute right-6 bottom-0 w-20 h-20 rounded-full bg-white/[0.05]" />

          {/* 번호 */}
          <span className="block text-[11px] font-bold tracking-[0.22em] text-white/50 uppercase mb-5">
            {card.en}
          </span>

          {/* 아이콘 */}
          <motion.div
            whileHover={{ rotate: -6, scale: 1.12 }}
            transition={{ type: "spring", stiffness: 380, damping: 20 }}
            className="w-[68px] h-[68px] rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
          >
            <Icon size={32} className="text-white" strokeWidth={1.6} />
          </motion.div>
        </div>

        {/* 텍스트 — 여유로운 패딩 */}
        <div className="flex flex-col flex-1 px-10 py-8">
          <div className="flex items-baseline gap-3 mb-4">
            <h3 className="text-[1.5rem] font-extrabold text-[#1a1a2e] leading-tight tracking-tight">
              {card.keyword}
            </h3>
            <span className="text-xs font-bold text-slate-300 tracking-widest">
              {card.num}
            </span>
          </div>

          <p className="text-[0.9375rem] text-slate-500 leading-[1.85] flex-1">
            {card.desc}
          </p>

          {/* 하단 강조선 */}
          <div
            className="mt-8 h-[3px] w-10 rounded-full transition-all duration-300 group-hover:w-16"
            style={{ backgroundColor: card.accent }}
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── 메인 슬라이더 ─────────────────────────────────── */
export function AboutSliderCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef     = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const x = useMotionValue(0);

  /* 반응형 카드 너비 */
  const getCardW = useCallback((): number => {
    if (typeof window === "undefined") return CARD_W_DESKTOP;
    return window.innerWidth >= 640 ? CARD_W_DESKTOP : CARD_W_MOBILE;
  }, []);

  /* 현재 화면에 보이는 카드 수 */
  const getVisible = useCallback((): number => {
    const w = containerRef.current?.offsetWidth ??
      (typeof window !== "undefined" ? window.innerWidth : 1280);
    const cardW = getCardW();
    return Math.max(1, Math.floor((w + GAP) / (cardW + GAP)));
  }, [getCardW]);

  const maxIdx = useCallback(
    () => Math.max(0, CARDS.length - getVisible()),
    [getVisible],
  );

  /* 지정 인덱스로 스프링 이동 */
  const go = useCallback((newIdx: number) => {
    const clamped = Math.max(0, Math.min(newIdx, maxIdx()));
    animate(x, -(clamped * (getCardW() + GAP)), SPRING);
    setIdx(clamped);
  }, [maxIdx, getCardW, x]);

  /* 드래그 끝 → 스냅 */
  const onDragEnd = useCallback(
    (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
      const { offset, velocity } = info;
      if (offset.x < -40 || velocity.x < -300) go(idx + 1);
      else if (offset.x > 40 || velocity.x > 300) go(idx - 1);
      else go(idx);
    },
    [idx, go],
  );

  /* 마우스 휠 → 가로 이동 */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let accum = 0;
    let timer: ReturnType<typeof setTimeout>;
    const idxRef = { current: idx };
    idxRef.current = idx;

    const handleWheel = (e: WheelEvent) => {
      /* 수직 스크롤만 가로로 전환 */
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      e.preventDefault();
      accum += e.deltaY;
      clearTimeout(timer);
      timer = setTimeout(() => {
        if      (accum >  60) go(idxRef.current + 1);
        else if (accum < -60) go(idxRef.current - 1);
        accum = 0;
      }, 40);
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", handleWheel);
      clearTimeout(timer);
    };
  }, [idx, go]);

  const atStart = idx === 0;
  const atEnd   = idx >= maxIdx();
  const totalDots = maxIdx() + 1;

  return (
    <div>
      {/* 슬라이더 트랙 */}
      <div ref={containerRef} className="overflow-hidden">
        <motion.div
          ref={trackRef}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.07}
          onDragEnd={onDragEnd}
          className="flex gap-6 cursor-grab active:cursor-grabbing will-change-transform"
          style={{ x, touchAction: "pan-y" }}
        >
          {CARDS.map((card, i) => (
            <div
              key={card.id}
              style={{ width: `${CARD_W_MOBILE}px`, minWidth: `${CARD_W_MOBILE}px` }}
              className="sm:!w-[380px] sm:!min-w-[380px] shrink-0"
            >
              <ValueCard card={card} rank={i} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* 컨트롤 바 */}
      <div className="mt-10 flex items-center justify-between">
        {/* 도트 */}
        <div className="flex items-center gap-2">
          {Array.from({ length: totalDots }).map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`슬라이드 ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === idx
                  ? "w-7 h-2.5 bg-[#1A237E]"
                  : "w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300"
              }`}
            />
          ))}
        </div>

        {/* 화살표 */}
        <div className="flex items-center gap-3">
          <motion.button
            onClick={() => go(idx - 1)}
            disabled={atStart}
            whileHover={atStart ? {} : { scale: 1.1 }}
            whileTap={atStart ? {} : { scale: 0.92 }}
            transition={SPRING}
            aria-label="이전"
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
            whileTap={atEnd ? {} : { scale: 0.92 }}
            transition={SPRING}
            aria-label="다음"
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
