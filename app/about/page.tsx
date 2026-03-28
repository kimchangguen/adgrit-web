"use client";

import { useRef } from "react";
import { motion, useInView, type UseInViewOptions } from "framer-motion";
import { SiteHeader } from "../_components/SiteHeader";
import { Footer } from "../_components/Footer";

/* ─── 공통 이징 ─────────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1] as const;

/* ─── useInView 훅 ──────────────────────────────────── */
function useReveal(margin: UseInViewOptions["margin"] = "-80px") {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin });
  return { ref, inView };
}

/* ─── FadeUp 래퍼 ───────────────────────────────────── */
function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useReveal();
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 56 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.92, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ─── 번호 섹션 데이터 ──────────────────────────────── */
const SECTIONS = [
  {
    num: "01",
    en: "Innovative Growth",
    headline: "핵심 기술 기반의\n혁신적 성장",
    body: "ADGRIT은 AI와 빅데이터 분석을 마케팅의 중심에 놓습니다. 기술 기반의 정교한 타겟팅과 자동화된 퍼포먼스 최적화로 클라이언트의 비즈니스를 혁신적으로 성장시킵니다.",
  },
  {
    num: "02",
    en: "Infinite Challenge",
    headline: "글로벌 시장을 향한\n무한한 도전",
    body: "한국을 넘어 세계 시장까지 비즈니스 영역을 넓혀가는 ADGRIT. 해외 진출 국내 브랜드부터 한국 시장에 진입하는 글로벌 브랜드까지, 경계 없는 글로벌 마케팅을 실행합니다.",
  },
  {
    num: "03",
    en: "Certain Performance",
    headline: "데이터로 증명하는\n확실한 성과",
    body: "감이 아닌 숫자로 판단합니다. ADGRIT은 모든 광고와 콘텐츠를 지표로 추적하고 끊임없이 개선하며, 시각화된 데이터 분석으로 클라이언트가 납득할 수 있는 확실한 성과를 만들어냅니다.",
  },
] as const;

/* ─── 번호 섹션 컴포넌트 ────────────────────────────── */
function NumberedSection({
  item,
  index,
}: {
  item: (typeof SECTIONS)[number];
  index: number;
}) {
  const { ref, inView } = useReveal("-60px");

  const motionProps = (delay: number) => ({
    initial: { opacity: 0, y: 64 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 1.05, delay, ease: EASE },
  });

  const isEven = index % 2 === 0;

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-t border-white/[0.06] min-h-[80vh] flex items-center"
    >
      {/* 배경 거대 숫자 */}
      <span
        aria-hidden
        className="pointer-events-none absolute font-black text-white select-none leading-none"
        style={{
          fontSize: "clamp(14rem, 32vw, 28rem)",
          opacity: 0.032,
          right: isEven ? "-0.05em" : "auto",
          left: isEven ? "auto" : "-0.05em",
          bottom: "-0.15em",
          letterSpacing: "-0.04em",
        }}
      >
        {item.num}
      </span>

      {/* 블루 글로우 */}
      <div
        aria-hidden
        className="pointer-events-none absolute w-[500px] h-[500px] rounded-full opacity-[0.09]"
        style={{
          background: "radial-gradient(circle, #2563EB 0%, transparent 70%)",
          [isEven ? "right" : "left"]: "-10%",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />

      <div className="relative z-10 w-full px-6 sm:px-14 lg:px-28 py-24 sm:py-32">
        <div className="max-w-4xl">

          {/* EN 레이블 */}
          <motion.p
            {...motionProps(0.06)}
            className="text-[0.65rem] font-bold tracking-[0.3em] text-[#2563EB] uppercase mb-6"
          >
            {item.en}
          </motion.p>

          {/* 섹션 번호 (인라인) */}
          <motion.p
            {...motionProps(0.14)}
            className="text-[0.75rem] font-bold tracking-[0.22em] text-white/20 uppercase mb-5"
          >
            {item.num} — ADGRIT
          </motion.p>

          {/* 헤드라인 */}
          <motion.h2 {...motionProps(0.22)}>
            {item.headline.split("\n").map((line, i) => (
              <span key={i} className="block font-extrabold text-white tracking-tight leading-[1.1]"
                style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)" }}>
                {i === 0 ? line : (
                  <span>
                    {line.slice(0, -2)}
                    <span className="text-[#2563EB]">{line.slice(-2)}</span>
                  </span>
                )}
              </span>
            ))}
          </motion.h2>

          {/* 구분선 */}
          <motion.div
            {...motionProps(0.32)}
            className="mt-10 mb-10 h-px bg-white/[0.1] max-w-xs"
          />

          {/* 본문 */}
          <motion.p
            {...motionProps(0.40)}
            className="text-base sm:text-[1.0625rem] text-white/45 leading-[1.95] max-w-lg"
          >
            {item.body}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

/* ─── DATA / GLOBAL / GROWTH 그리드 ────────────────── */
const GRID_ITEMS = [
  {
    key: "DATA",
    subtitle: "AI 마케팅 전문 기업",
    body: "ADGRIT은 자동화 및 빅데이터 분석이 가능한 AE뿐 아니라 국내 대행사 중 최고 수준의 데이터·개발 조직을 갖추고 있습니다. AI 기술을 활용한 차별화와 축적된 데이터 노하우를 바탕으로 최고의 성과 환경을 제공합니다.",
  },
  {
    key: "GLOBAL",
    subtitle: "세계로 뻗어 나갑니다",
    body: "한국을 넘어 글로벌 시장까지 비즈니스 영역을 확장하고 있는 ADGRIT! 해외 시장에 진출하는 국내 브랜드부터 한국 시장에 진입하는 글로벌 브랜드까지 폭넓은 글로벌 캠페인을 전문적으로 담당합니다.",
  },
  {
    key: "GROWTH",
    subtitle: "매년 혁신적 성장을 달성",
    body: "ADGRIT은 각 분야의 뛰어난 전문가들과 함께 매년 폭발적인 성장을 이루어내고 있습니다. 매년 놀라운 성장을 만들어내는 ADGRIT과 함께 새로운 비즈니스 성공을 시작해보세요.",
  },
] as const;

/* ─── 페이지 ─────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <SiteHeader />

      <main className="pt-16">

        {/* ══ 히어로 ═══════════════════════════════════════ */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden px-6 sm:px-14 lg:px-28">

          {/* 배경 블루 글로우 */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-[0.14]"
            style={{ background: "radial-gradient(circle, #1d4ed8 0%, transparent 65%)" }}
          />

          {/* 배경 'ADGRIT' 워터마크 */}
          <span
            aria-hidden
            className="pointer-events-none absolute right-[-0.05em] bottom-[-0.1em] font-black text-white leading-none select-none tracking-tighter"
            style={{ fontSize: "clamp(8rem, 22vw, 20rem)", opacity: 0.025 }}
          >
            ADGRIT
          </span>

          <div className="relative z-10 max-w-5xl py-44 sm:py-56">
            <FadeUp delay={0.08}>
              <p className="text-[0.65rem] font-bold tracking-[0.28em] text-[#2563EB] uppercase mb-10">
                ABOUT ADGRIT
              </p>
            </FadeUp>

            {[
              { text: "ADGRIT은", delay: 0.18, blue: false },
              { text: "기술과 데이터 기반으로", delay: 0.30, blue: false },
              { text: "디지털 마케팅 시장을", delay: 0.42, blue: false },
              { text: "선도하고 있습니다.", delay: 0.54, blue: true },
            ].map(({ text, delay, blue }) => (
              <FadeUp key={text} delay={delay}>
                <h1
                  className={`font-extrabold leading-[1.1] tracking-tight ${blue ? "text-[#2563EB]" : "text-white"}`}
                  style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
                >
                  {text}
                </h1>
              </FadeUp>
            ))}

            <FadeUp delay={0.72}>
              <p className="mt-14 text-base sm:text-[1.0625rem] text-white/38 max-w-lg leading-[1.9]">
                데이터로 검증하고, 창의력으로 차별화합니다.
                <br />
                퍼포먼스와 브랜드를 함께 성장시키는 마케팅 파트너.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ══ 01 / 02 / 03 번호 섹션 ══════════════════════ */}
        {SECTIONS.map((item, i) => (
          <NumberedSection key={item.num} item={item} index={i} />
        ))}

        {/* ══ DATA / GLOBAL / GROWTH 그리드 ══════════════ */}
        <section className="px-6 sm:px-14 lg:px-28 py-28 sm:py-40 border-t border-white/[0.06]">
          <FadeUp delay={0.05}>
            <p className="text-[0.65rem] font-bold tracking-[0.28em] text-white/25 uppercase mb-16 sm:mb-20">
              Core Values
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {GRID_ITEMS.map(({ key, subtitle, body }, i) => (
              <FadeUp key={key} delay={i * 0.13}>
                <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-10 flex flex-col gap-7 hover:border-[#2563EB]/30 transition-colors duration-300">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#2563EB] shrink-0" />
                    <h3 className="text-xl sm:text-2xl font-black tracking-[0.1em] text-white">
                      {key}
                    </h3>
                  </div>
                  <div className="h-px bg-white/[0.1]" />
                  <p className="text-[0.9375rem] font-bold text-[#2563EB] leading-snug">
                    {subtitle}
                  </p>
                  <p className="text-sm sm:text-[0.9375rem] text-white/45 leading-[1.9] flex-1">
                    {body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
