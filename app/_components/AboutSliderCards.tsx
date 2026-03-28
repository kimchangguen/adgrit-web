"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import {
  TrendingUp, Target, Search, FileText,
  Share2, Code2, ChevronLeft, ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ─── 슬라이더 카드 데이터 ─────────────────────────── */
export type SliderCardData = {
  id: number;
  icon: LucideIcon;
  tag: string;
  title: string;
  desc: string;
  href?: string;
  accent: string; // tailwind bg color class
};

export const SERVICE_CARDS: SliderCardData[] = [
  {
    id: 1,
    icon: Target,
    tag: "PAID AD",
    title: "퍼포먼스 마케팅",
    desc: "클릭 한 번, 전환 한 번까지 측정하고 최적화합니다. ROAS 기반의 데이터 드리븐 광고 운영으로 예산 낭비를 원천 차단합니다.",
    href: "/business/consulting",
    accent: "from-[#1A237E] to-[#283593]",
  },
  {
    id: 2,
    icon: Search,
    tag: "SEO / GEO",
    title: "검색엔진 최적화",
    desc: "네이버·구글 알고리즘을 꿰뚫는 SEO 전략과, AI 검색 시대를 대비한 GEO(Generative Engine Optimization)를 동시에 실행합니다.",
    href: "/service/google",
    accent: "from-[#FF7F00] to-[#e86e00]",
  },
  {
    id: 3,
    icon: TrendingUp,
    tag: "GROWTH",
    title: "온라인 마케팅 실무",
    desc: "광고 집행부터 리타겟팅, CRM 연동까지 전 퍼널을 설계합니다. 단순 노출이 아닌 '매출로 이어지는 트래픽'을 만듭니다.",
    href: "/service/marketing",
    accent: "from-[#1e3a5f] to-[#1A237E]",
  },
  {
    id: 4,
    icon: FileText,
    tag: "CONTENT",
    title: "콘텐츠 마케팅",
    desc: "블로그·유튜브·인스타그램 채널별 맞춤 콘텐츠를 기획·제작합니다. 알고리즘에 최적화된 '읽히는 콘텐츠'로 자생적 유입을 만듭니다.",
    href: "/service/content",
    accent: "from-[#0f4c75] to-[#1b6ca8]",
  },
  {
    id: 5,
    icon: Share2,
    tag: "SNS",
    title: "SNS 마케팅",
    desc: "인스타그램·유튜브·틱톡 숏폼 콘텐츠 제작 및 운영 대행. 팔로워를 고객으로 전환하는 퍼널 설계까지 원스톱으로 진행합니다.",
    href: "/service/sns",
    accent: "from-[#b5451b] to-[#FF7F00]",
  },
  {
    id: 6,
    icon: Code2,
    tag: "DEV",
    title: "워드프레스 개발",
    desc: "마케팅에 최적화된 랜딩페이지·기업 홈페이지를 구축합니다. SEO 구조를 설계 단계부터 적용해 개설 즉시 검색 유입이 시작됩니다.",
    href: "/business/development",
    accent: "from-[#1a3a4a] to-[#1A237E]",
  },
];

/* ─── 스프링 설정 ───────────────────────────────────── */
const SPRING = { type: "spring", stiffness: 280, damping: 30 } as const;
const EASE   = [0.22, 1, 0.36, 1] as const;

/* ─── 카드 단일 컴포넌트 ────────────────────────────── */
function ServiceCard({ card, idx }: { card: SliderCardData; idx: number }) {
  const Icon = card.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: idx * 0.08, ease: EASE }}
      whileHover={{ y: -10, transition: { type: "spring", stiffness: 360, damping: 22 } }}
      className="group h-full"
    >
      <a
        href={card.href ?? "#"}
        className="flex flex-col h-full rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm group-hover:shadow-xl group-hover:border-slate-200 transition-shadow duration-300 cursor-pointer"
      >
        {/* 아이콘 헤더 */}
        <div className={`relative bg-gradient-to-br ${card.accent} px-7 pt-8 pb-6`}>
          <span className="inline-block text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase mb-3">
            {card.tag}
          </span>
          <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
            <Icon size={24} className="text-white" strokeWidth={1.75} />
          </div>
          {/* 배경 장식 */}
          <div className="absolute right-6 top-6 w-20 h-20 rounded-full bg-white/5 -mr-4 -mt-4" />
          <div className="absolute right-12 bottom-2 w-10 h-10 rounded-full bg-white/5" />
        </div>

        {/* 텍스트 */}
        <div className="flex flex-col flex-1 px-7 py-6">
          <h3 className="text-[1.0625rem] font-bold text-[#1a1a2e] leading-tight">
            {card.title}
          </h3>
          <p className="mt-3 text-[0.875rem] text-slate-500 leading-[1.75] flex-1">
            {card.desc}
          </p>
          <div className="mt-5 flex items-center gap-1 text-[0.8125rem] font-semibold text-[#1A237E] group-hover:gap-2 transition-all">
            자세히 보기
            <ChevronRight size={14} strokeWidth={2.5} />
          </div>
        </div>
      </a>
    </motion.div>
  );
}

/* ─── 메인 슬라이더 ─────────────────────────────────── */
export function AboutSliderCards({ cards = SERVICE_CARDS }: { cards?: SliderCardData[] }) {
  const trackRef    = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const x = useMotionValue(0);

  /* 현재 화면 기준 보이는 카드 수 */
  const getVisible = useCallback((): number => {
    const w =
      containerRef.current?.offsetWidth ??
      (typeof window !== "undefined" ? window.innerWidth : 1280);
    if (w >= 1024) return 3;
    if (w >= 640)  return 2;
    return 1;
  }, []);

  /* 카드 1장 이동 거리 (px) */
  const getStep = useCallback((): number => {
    const card = trackRef.current?.children[0] as HTMLElement | undefined;
    if (!card) return 360;
    // gap-6 = 24px
    return card.offsetWidth + 24;
  }, []);

  const maxIdx = useCallback(() => Math.max(0, cards.length - getVisible()), [cards.length, getVisible]);

  const go = useCallback((newIdx: number) => {
    const clamped = Math.max(0, Math.min(newIdx, maxIdx()));
    animate(x, -(clamped * getStep()), SPRING);
    setIdx(clamped);
  }, [maxIdx, getStep, x]);

  /* 드래그 끝날 때 스냅 */
  const onDragEnd = useCallback((_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    const threshold = 40;
    const { offset, velocity } = info;
    if (offset.x < -threshold || velocity.x < -300) {
      go(idx + 1);
    } else if (offset.x > threshold || velocity.x > 300) {
      go(idx - 1);
    } else {
      go(idx); // 제자리 스냅
    }
  }, [idx, go]);

  const atStart = idx === 0;
  const atEnd   = idx >= maxIdx();

  return (
    <div>
      {/* 컨테이너 */}
      <div ref={containerRef} className="overflow-hidden">
        <motion.div
          ref={trackRef}
          style={{ x }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.08}
          onDragEnd={onDragEnd}
          className="flex gap-6 cursor-grab active:cursor-grabbing"
        >
          {cards.map((card, i) => (
            <div
              key={card.id}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0"
            >
              <ServiceCard card={card} idx={i} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* 컨트롤 바 */}
      <div className="mt-8 flex items-center justify-between">
        {/* 도트 인디케이터 */}
        <div className="flex items-center gap-2">
          {Array.from({ length: maxIdx() + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`슬라이드 ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === idx
                  ? "w-6 h-2 bg-[#1A237E]"
                  : "w-2 h-2 bg-slate-200 hover:bg-slate-300"
              }`}
            />
          ))}
        </div>

        {/* 화살표 버튼 */}
        <div className="flex items-center gap-2">
          <motion.button
            onClick={() => go(idx - 1)}
            disabled={atStart}
            whileHover={atStart ? {} : { scale: 1.08 }}
            whileTap={atStart ? {} : { scale: 0.94 }}
            transition={SPRING}
            className={`w-11 h-11 rounded-full border flex items-center justify-center transition-colors ${
              atStart
                ? "border-slate-100 text-slate-300 cursor-not-allowed"
                : "border-slate-200 text-slate-600 hover:border-[#1A237E] hover:text-[#1A237E]"
            }`}
          >
            <ChevronLeft size={18} strokeWidth={2} />
          </motion.button>
          <motion.button
            onClick={() => go(idx + 1)}
            disabled={atEnd}
            whileHover={atEnd ? {} : { scale: 1.08 }}
            whileTap={atEnd ? {} : { scale: 0.94 }}
            transition={SPRING}
            className={`w-11 h-11 rounded-full border flex items-center justify-center transition-colors ${
              atEnd
                ? "border-slate-100 text-slate-300 cursor-not-allowed"
                : "border-slate-200 text-slate-600 hover:border-[#1A237E] hover:text-[#1A237E]"
            }`}
          >
            <ChevronRight size={18} strokeWidth={2} />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
