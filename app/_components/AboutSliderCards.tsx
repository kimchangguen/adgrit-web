"use client";

import { useRef, type RefObject } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Lightbulb, ShieldCheck, TrendingUp, Users,
  BarChart3, Palette, Zap, Heart, Rocket, Handshake,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ─── 10장 핵심가치 카드 데이터 ─────────────────────── */
const CARDS = [
  { id:1,  num:"01", icon:Lightbulb,  keyword:"혁신",      en:"Innovation",    desc:"고정된 방식에 머물지 않습니다. 새로운 기술과 접근법으로 마케팅의 경계를 끊임없이 넓혀나갑니다." },
  { id:2,  num:"02", icon:ShieldCheck, keyword:"신뢰",      en:"Trust",         desc:"약속을 지키고 결과로 보여줍니다. 파트너와 쌓아온 신뢰가 애드그릿의 가장 큰 자산입니다." },
  { id:3,  num:"03", icon:TrendingUp,  keyword:"성장",      en:"Growth",        desc:"클라이언트의 성장이 곧 우리의 성장입니다. 매출 그래프가 오르는 순간을 함께 만들어갑니다." },
  { id:4,  num:"04", icon:Users,       keyword:"파트너십",  en:"Partnership",   desc:"대행사가 아닌 함께 뛰는 팀입니다. 목표를 공유하고 전략을 함께 설계하는 진짜 파트너." },
  { id:5,  num:"05", icon:BarChart3,   keyword:"데이터 기반",en:"Data-Driven",  desc:"감이 아닌 숫자로 판단합니다. 모든 광고와 콘텐츠를 지표로 추적하고 끊임없이 개선합니다." },
  { id:6,  num:"06", icon:Palette,     keyword:"창의성",    en:"Creativity",    desc:"알고리즘을 이기는 건 결국 좋은 콘텐츠입니다. 클릭을 부르는 창의적 기획으로 차별화를 만듭니다." },
  { id:7,  num:"07", icon:Zap,         keyword:"속도",      en:"Speed",         desc:"마케팅은 타이밍입니다. 트렌드를 가장 빠르게 파악하고 실행에 옮기는 속도가 성과를 결정합니다." },
  { id:8,  num:"08", icon:Heart,       keyword:"진정성",    en:"Authenticity",  desc:"과장 없이 솔직하게. 안 되는 건 안 된다고 말하고, 된다고 하면 반드시 해냅니다." },
  { id:9,  num:"09", icon:Rocket,      keyword:"도전",      en:"Challenge",     desc:"아무도 가지 않은 길도 두렵지 않습니다. 새로운 채널과 전략에 끊임없이 도전합니다." },
  { id:10, num:"10", icon:Handshake,   keyword:"상생",      en:"Coexistence",   desc:"클라이언트, 팀원, 파트너 모두가 함께 성장하는 생태계를 만듭니다. 혼자 크는 성공은 없습니다." },
] as const;

/* ─── 카드 콘텐츠 ───────────────────────────────────── */
function CardContent({ card }: { card: typeof CARDS[number] }) {
  const Icon = card.icon as LucideIcon;
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 sm:px-16 lg:px-24 overflow-hidden select-none">

      {/* 배경 장식 숫자 */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-[-0.1em] bottom-[-0.2em] font-extrabold leading-none text-white/[0.055]"
        style={{ fontSize: "clamp(8rem, 28vw, 20rem)" }}
      >
        {card.num}
      </span>

      {/* 원형 배경 장식 */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/[0.04]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/[0.04]" />

      {/* 중앙 콘텐츠 */}
      <div className="relative z-10 text-center max-w-2xl">
        {/* 아이콘 */}
        <div className="mx-auto mb-8 sm:mb-10 w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white/[0.18] backdrop-blur-sm flex items-center justify-center ring-1 ring-white/25 shadow-2xl">
          <Icon size={48} className="text-white" strokeWidth={1.4} />
        </div>

        {/* 영문 레이블 */}
        <p className="text-xs sm:text-sm font-bold tracking-[0.28em] text-white/50 uppercase mb-3">
          {card.en}
        </p>

        {/* 한글 키워드 */}
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-none tracking-tight mb-6 sm:mb-8">
          {card.keyword}
        </h2>

        {/* 설명 */}
        <p className="text-base sm:text-lg text-white/70 leading-[1.9] max-w-md mx-auto">
          {card.desc}
        </p>
      </div>

      {/* 카드 번호 (좌상단) */}
      <span className="absolute top-8 left-8 sm:top-10 sm:left-10 text-[11px] font-bold tracking-[0.2em] text-white/25 uppercase">
        {card.num} / 10
      </span>
    </div>
  );
}

/* ─── 스택 카드 (scroll-driven 애니메이션) ────────────── */
function StackCard({
  card,
  index,
  containerRef,
}: {
  card: typeof CARDS[number];
  index: number;
  containerRef: RefObject<HTMLDivElement | null>;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  /*
   * scrollYProgress:
   *   0 = 이 섹션의 상단이 컨테이너 뷰포트 상단에 닿은 순간 (카드 진입 완료)
   *   1 = 이 섹션이 완전히 스크롤되어 다음 섹션에 자리를 넘긴 순간
   */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: containerRef,
    offset: ["start start", "end start"],
  });

  /* ── 3D 원근감 + 스케일 축소 ── */
  const scale = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    [1, 0.88, 0.82],
  );

  /* ── 투명도 감소 ── */
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    [1, 0.9, 0.65],
  );

  /* ── 카드 상단이 둥글어지며 '쌓인 카드' 느낌 ── */
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.12],
    ["0px", "28px"],
  );

  /* ── 뒤로 살짝 당겨지는 Y 이동 (원근감 강조) ── */
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-4%"],
  );

  /* ── 3D X축 회전 (상단이 멀어지는 원근감) ── */
  const rotateX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 5],
  );

  return (
    <div
      ref={sectionRef}
      className="relative"
      style={{
        height: "100%",                /* 컨테이너 높이와 동일 */
        scrollSnapAlign: "start",
        scrollSnapStop: "always",      /* 반드시 한 장씩 스냅 */
      }}
    >
      <motion.div
        style={{
          scale,
          opacity,
          borderRadius,
          y,
          rotateX,
          transformPerspective: 1200, /* Framer Motion 3D 원근감 */
          transformOrigin: "top center",
          position: "sticky",
          top: 0,
          height: "100%",
          zIndex: index + 1,
        }}
        className="overflow-hidden bg-blue-600"
      >
        {/* 카드별 미세한 그라데이션 변형 (블루 계열만) */}
        <div
          className="absolute inset-0"
          style={{
            background: [
              "linear-gradient(135deg,#2563eb,#1d4ed8)",
              "linear-gradient(135deg,#1d4ed8,#1e40af)",
              "linear-gradient(135deg,#3b82f6,#2563eb)",
              "linear-gradient(135deg,#1e40af,#1d4ed8)",
              "linear-gradient(135deg,#2563eb,#1e3a8a)",
              "linear-gradient(135deg,#3b82f6,#1d4ed8)",
              "linear-gradient(135deg,#1d4ed8,#1e40af)",
              "linear-gradient(135deg,#2563eb,#1e3a8a)",
              "linear-gradient(135deg,#3b82f6,#2563eb)",
              "linear-gradient(135deg,#1e40af,#1e3a8a)",
            ][index],
          }}
        />
        <CardContent card={card} />
      </motion.div>
    </div>
  );
}

/* ─── 외부로 공개하는 컴포넌트 ──────────────────────── */
export function AboutSliderCards({
  containerRef,
}: {
  containerRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <>
      {CARDS.map((card, i) => (
        <StackCard
          key={card.id}
          card={card}
          index={i}
          containerRef={containerRef}
        />
      ))}
    </>
  );
}
