"use client";

import { useRef } from "react";
import { motion, useInView, type UseInViewOptions } from "framer-motion";
import { SiteHeader } from "../_components/SiteHeader";
import { Footer } from "../_components/Footer";

/* ─── 이징 / 공통 설정 ─────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1] as const;

/* ─── Reveal 훅 ─────────────────────────────────────── */
function useReveal(margin: UseInViewOptions["margin"] = "-80px") {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin });
  return { ref, inView };
}

/* ─── 기본 FadeUp 래퍼 ──────────────────────────────── */
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
      initial={{ opacity: 0, y: 52 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.92, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ─── 번호 섹션 컴포넌트 ────────────────────────────── */
interface SectionItem {
  num: string;
  label: string;
  headline: string;
  body: string;
}

function NumberedSection({ item, reverse }: { item: SectionItem; reverse?: boolean }) {
  const { ref, inView } = useReveal("-100px");

  const makeMotion = (delay: number) => ({
    initial: { opacity: 0, y: 64 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 1.0, delay, ease: EASE },
  });

  return (
    <section
      ref={ref}
      className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-start lg:items-center gap-12 lg:gap-20 px-6 sm:px-14 lg:px-28 py-24 sm:py-36 border-t border-white/[0.06]`}
    >
      {/* 왼쪽(또는 오른쪽): 섹션 번호 */}
      <motion.div
        {...makeMotion(0.06)}
        className="shrink-0 w-full lg:w-56 xl:w-64"
      >
        <p className="text-[0.65rem] font-bold tracking-[0.28em] text-white/30 uppercase mb-4">
          {item.label}
        </p>
        <span
          className="font-black text-white/[0.06] leading-none select-none"
          style={{ fontSize: "clamp(7rem, 16vw, 12rem)" }}
        >
          {item.num}
        </span>
      </motion.div>

      {/* 오른쪽(또는 왼쪽): 텍스트 */}
      <div className="flex-1 space-y-8">
        {/* 구분선 */}
        <motion.div
          {...makeMotion(0.14)}
          className="h-px bg-white/[0.12] w-full"
        />

        {/* 헤드라인 */}
        <motion.h2
          {...makeMotion(0.22)}
          className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-[1.2] tracking-tight"
        >
          {item.headline}
        </motion.h2>

        {/* 본문 */}
        <motion.p
          {...makeMotion(0.32)}
          className="text-[0.9375rem] sm:text-base text-white/45 leading-[1.95] max-w-xl"
        >
          {item.body}
        </motion.p>
      </div>
    </section>
  );
}

/* ─── 섹션 데이터 ─────────────────────────────────────── */
const SECTIONS: SectionItem[] = [
  {
    num: "01",
    label: "AI Marketing Company",
    headline: "애드그릿은 AI를 마케팅에 더합니다",
    body: "애드그릿은 자동화 및 빅데이터 분석이 가능한 AE뿐 아니라, 최고 수준의 데이터·개발 조직을 갖추고 있습니다. AI 기술을 활용한 차별화, 시각화된 데이터 분석 결과와 축적된 노하우를 바탕으로 최고의 성과를 보장할 수 있는 최적의 성장 환경을 제공합니다.",
  },
  {
    num: "02",
    label: "Global",
    headline: "세계로 뻗어 나갑니다",
    body: "한국을 넘어 글로벌 시장까지 비즈니스 영역을 확장하고 있는 애드그릿! 해외 시장에 진출하는 국내 브랜드부터 한국 시장에 진입하는 글로벌 브랜드까지, 별도 글로벌팀을 구축하여 폭넓은 영역의 글로벌 캠페인을 전문적으로 담당하고 있습니다.",
  },
  {
    num: "03",
    label: "Growth",
    headline: "매년 혁신적 성장을 달성합니다",
    body: "애드그릿은 각 분야의 뛰어난 전문가들과 함께 매년 폭발적인 성장을 이루어내고 있습니다. 매년 놀라운 성장을 이루어내는 애드그릿과 함께 새로운 성공을 시작해보세요.",
  },
];

/* ─── DATA / GLOBAL / GROWTH 그리드 데이터 ────────────── */
const GRID_ITEMS = [
  {
    key: "DATA",
    subtitle: "AI 마케팅 전문 기업",
    body: "애드그릿은 자동화 및 빅데이터 분석이 가능한 AE뿐 아니라 국내 대행사 중 최고 수준의 데이터, 개발 조직을 갖고 있습니다. AI 기술을 활용한 차별화, 시각화된 데이터 분석 결과와 축적된 데이터 노하우를 바탕으로 최고의 성과를 보장할 수 있는 최적의 성장 환경을 제공합니다.",
  },
  {
    key: "GLOBAL",
    subtitle: "세계로 뻗어 나갑니다",
    body: "한국을 넘어 글로벌 시장까지 비즈니스 영역을 확장하고 있는 애드그릿! 해외 시장에 진출하는 국내 브랜드부터 한국 시장에 진입하는 글로벌 브랜드까지, 별도 글로벌팀을 구축하여 폭넓은 영역의 글로벌 캠페인을 전문적으로 담당하고 있습니다.",
  },
  {
    key: "GROWTH",
    subtitle: "매년 2배 이상의 성장을 달성",
    body: "애드그릿은 각 분야의 뛰어난 전문가들과 함께 매년 약 2배씩 취급고가 성장하는 성과를 이루어내고 있습니다. 매년 폭발적인 성장을 이루어내는 애드그릿과 함께 새로운 성공을 시작해보세요.",
  },
] as const;

/* ─── 페이지 ─────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <SiteHeader />

      <main className="pt-16">

        {/* ══ 히어로 ══════════════════════════════════════════ */}
        <section className="relative min-h-[88vh] flex items-center px-6 sm:px-14 lg:px-28 overflow-hidden">

          {/* 배경 블루 글로우 */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-48 -right-48 w-[720px] h-[720px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, #1d4ed8 0%, transparent 65%)",
            }}
          />

          <div className="relative z-10 max-w-5xl py-40 sm:py-52">
            <FadeUp delay={0.08}>
              <p className="text-[0.65rem] font-bold tracking-[0.28em] text-white/35 uppercase mb-12">
                ABOUT ADGRIT
              </p>
            </FadeUp>

            {/* 라인별 스태거 */}
            {[
              { text: "애드그릿은", delay: 0.18 },
              { text: "기술과 데이터 기반으로", delay: 0.30 },
              { text: "디지털 마케팅 시장을", delay: 0.42, blue: false },
              { text: "선도하고 있습니다.", delay: 0.54, blue: true },
            ].map(({ text, delay, blue }) => (
              <FadeUp key={text} delay={delay}>
                <h1
                  className={`font-extrabold leading-[1.1] tracking-tight ${
                    blue ? "text-[#2563EB]" : "text-white"
                  }`}
                  style={{ fontSize: "clamp(2.4rem, 6vw, 5.25rem)" }}
                >
                  {text}
                </h1>
              </FadeUp>
            ))}

            <FadeUp delay={0.72}>
              <p className="mt-12 sm:mt-16 text-base sm:text-[1.0625rem] text-white/38 max-w-lg leading-[1.9]">
                데이터로 검증하고, 창의력으로 차별화합니다.
                <br />
                퍼포먼스와 브랜드를 함께 성장시키는 마케팅 파트너.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ══ 01 / 02 / 03 번호 섹션 ══════════════════════════ */}
        {SECTIONS.map((item, i) => (
          <NumberedSection key={item.num} item={item} reverse={i % 2 === 1} />
        ))}

        {/* ══ DATA / GLOBAL / GROWTH 그리드 ══════════════════ */}
        <section className="px-6 sm:px-14 lg:px-28 py-28 sm:py-40 border-t border-white/[0.06]">
          <FadeUp delay={0.05}>
            <p className="text-[0.65rem] font-bold tracking-[0.28em] text-white/30 uppercase mb-16 sm:mb-20">
              Core Values
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {GRID_ITEMS.map(({ key, subtitle, body }, i) => (
              <FadeUp key={key} delay={i * 0.13}>
                <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-10 flex flex-col gap-7 hover:border-white/[0.16] transition-colors duration-300">

                  {/* 파란 사각 점 + 레이블 */}
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#2563EB] shrink-0" />
                    <h3 className="text-xl sm:text-2xl font-black tracking-[0.1em] text-white">
                      {key}
                    </h3>
                  </div>

                  {/* 구분선 */}
                  <div className="h-px bg-white/[0.1]" />

                  {/* 파란 서브타이틀 */}
                  <p className="text-[0.9375rem] font-bold text-[#2563EB] leading-snug">
                    {subtitle}
                  </p>

                  {/* 본문 */}
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
