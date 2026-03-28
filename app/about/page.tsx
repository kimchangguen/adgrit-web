"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiteHeader } from "../_components/SiteHeader";
import { Footer } from "../_components/Footer";

/* ─── 공통 이징 ─────────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1] as const;

/* ─── 스크롤 Reveal 래퍼 ─────────────────────────────── */
function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

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

/* ─── 히어로 텍스트 라인 단위 Reveal ──────────────────── */
function HeroLine({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.0, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ─── DATA / GLOBAL / GROWTH 카드 데이터 ──────────────── */
const GRID_ITEMS = [
  {
    key: "DATA",
    subtitle: "AI 마케팅 전문 기업",
    body: "애드그릿은 자동화 및 빅데이터 분석이 가능한 데이터 중심 광고 대행사입니다. AI 기술을 활용한 차별화, 시각화된 데이터 분석 결과와 축적된 데이터 노하우를 바탕으로 최고의 성과를 보장할 수 있는 최적의 성장 환경을 제공합니다.",
  },
  {
    key: "GLOBAL",
    subtitle: "세계로 뻗어 나갑니다",
    body: "한국을 넘어 글로벌 시장까지 비즈니스 영역을 확장하고 있는 애드그릿! 해외 시장에 진출하는 국내 브랜드부터 한국 시장에 진입하는 글로벌 브랜드까지, 전문 글로벌팀을 구축하여 폭넓은 영역의 글로벌 캠페인을 전문적으로 담당하고 있습니다.",
  },
  {
    key: "GROWTH",
    subtitle: "매년 혁신적 성장을 달성",
    body: "애드그릿은 각 분야의 뛰어난 전문가들과 함께 매년 폭발적인 성장을 이루어내고 있습니다. 매년 놀라운 성장을 이루어내는 애드그릿과 함께 새로운 비즈니스 성공을 시작해보세요.",
  },
] as const;

/* ─── 페이지 ─────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <div className="bg-[#08080f] text-white min-h-screen">
      <SiteHeader />

      <main className="pt-16">

        {/* ══ 히어로 섹션 ══════════════════════════════════ */}
        <section className="relative min-h-[75vh] flex items-center overflow-hidden px-6 sm:px-14 lg:px-28 py-32 sm:py-44">

          {/* 배경 원형 그래픽 */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-1/3 w-[480px] h-[480px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,127,0,0.06) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 max-w-5xl">
            <FadeUp delay={0.08}>
              <p className="text-xs font-bold tracking-[0.26em] text-[#FF7F00] uppercase mb-10 sm:mb-12">
                ABOUT ADGRIT
              </p>
            </FadeUp>

            <div className="space-y-1 sm:space-y-2">
              <HeroLine delay={0.18}>
                <h1 className="text-[2.6rem] sm:text-[3.5rem] lg:text-[5rem] font-extrabold leading-[1.12] tracking-tight">
                  애드그릿은
                </h1>
              </HeroLine>
              <HeroLine delay={0.30}>
                <h1 className="text-[2.6rem] sm:text-[3.5rem] lg:text-[5rem] font-extrabold leading-[1.12] tracking-tight">
                  기술과 데이터 기반으로
                </h1>
              </HeroLine>
              <HeroLine delay={0.42}>
                <h1 className="text-[2.6rem] sm:text-[3.5rem] lg:text-[5rem] font-extrabold leading-[1.12] tracking-tight">
                  디지털 마케팅 시장을{" "}
                  <span className="text-[#2563EB]">선도하고 있습니다.</span>
                </h1>
              </HeroLine>
            </div>

            <FadeUp delay={0.6}>
              <p className="mt-10 sm:mt-14 text-base sm:text-[1.0625rem] text-white/45 max-w-xl leading-[1.85]">
                데이터로 검증하고, 창의력으로 차별화합니다.
                <br />
                퍼포먼스와 브랜드를 함께 성장시키는 마케팅 파트너.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ══ DATA / GLOBAL / GROWTH 그리드 ══════════════════ */}
        <section className="px-6 sm:px-14 lg:px-28 pb-36 sm:pb-52">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
            {GRID_ITEMS.map(({ key, subtitle, body }, i) => (
              <FadeUp key={key} delay={i * 0.13}>
                <div className="h-full rounded-2xl border border-white/[0.07] bg-white/[0.025] p-8 sm:p-10 flex flex-col gap-7 hover:border-white/[0.14] transition-colors duration-300">

                  {/* 파란 점 + 레이블 */}
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#2563EB] shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-black tracking-[0.1em] text-white">
                      {key}
                    </h2>
                  </div>

                  {/* 구분선 */}
                  <div className="h-px bg-white/[0.1]" />

                  {/* 파란 서브타이틀 */}
                  <p className="text-[0.9375rem] sm:text-base font-bold text-[#2563EB] leading-snug">
                    {subtitle}
                  </p>

                  {/* 본문 */}
                  <p className="text-sm sm:text-[0.9375rem] text-white/50 leading-[1.9] flex-1">
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
