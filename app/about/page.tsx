"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { SiteHeader } from "../_components/SiteHeader";
import { Footer } from "../_components/Footer";
import { AboutSliderCards } from "../_components/AboutSliderCards";
import {
  Zap, ShieldCheck, Users, BarChart3,
  ArrowRight,
} from "lucide-react";

/* ─── 상수 ─────────────────────────────────────────── */
const EASE   = [0.22, 1, 0.36, 1] as const;
const SPRING = { type: "spring", stiffness: 300, damping: 28 } as const;

/* ─── 애니메이션 프리셋 ─────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.72, delay, ease: EASE },
});

/* ─── 수치 통계 ─────────────────────────────────────── */
const STATS = [
  { value: "200+", label: "누적 클라이언트" },
  { value: "98%",  label: "계약 갱신율"     },
  { value: "3x",   label: "평균 ROAS 상승"  },
  { value: "5년+", label: "마케팅 실행 경력" },
];

/* ─── 핵심 가치 ─────────────────────────────────────── */
const VALUES = [
  {
    icon: Zap,
    title: "실행 중심",
    desc: "전략 보고서에 그치지 않습니다. 설계한 전략을 직접 실행하고 결과로 증명합니다.",
    color: "#FF7F00",
  },
  {
    icon: BarChart3,
    title: "데이터 기반",
    desc: "감이 아닌 숫자로 판단합니다. 모든 광고·콘텐츠·SEO 활동을 지표로 추적하고 개선합니다.",
    color: "#1A237E",
  },
  {
    icon: ShieldCheck,
    title: "투명한 소통",
    desc: "안 되는 건 안 된다고 말합니다. 과장된 제안 대신 솔직한 진단과 현실적인 목표를 제시합니다.",
    color: "#0f4c75",
  },
  {
    icon: Users,
    title: "파트너십",
    desc: "우리는 대행사가 아닌 파트너입니다. 사장님의 매출 성장이 곧 우리의 성과입니다.",
    color: "#1e3a5f",
  },
];

/* ─── 통계 카드 ─────────────────────────────────────── */
function StatCard({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: EASE }}
      className="text-center"
    >
      <p className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
        {value}
      </p>
      <p className="mt-2 text-sm text-blue-200 font-medium">{label}</p>
    </motion.div>
  );
}

/* ─── 가치 카드 ─────────────────────────────────────── */
function ValueCard({ icon: Icon, title, desc, color, index }: (typeof VALUES)[0] & { index: number }) {
  return (
    <motion.div
      {...fadeUp(index * 0.09)}
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 360, damping: 22 } }}
      className="group rounded-2xl bg-white border border-slate-100 p-7 shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
        style={{ backgroundColor: `${color}18` }}
      >
        <Icon size={22} style={{ color }} strokeWidth={1.75} />
      </div>
      <h3 className="text-base font-bold text-[#1a1a2e]">{title}</h3>
      <p className="mt-3 text-sm text-slate-500 leading-[1.75]">{desc}</p>
    </motion.div>
  );
}

/* ─── 메인 페이지 ────────────────────────────────────── */
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a2e]">
      <SiteHeader />

      {/* ══ 1. 히어로 ════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#1A237E] pt-28 pb-20 sm:pt-36 sm:pb-28">
        {/* 배경 원형 장식 */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-white/[0.04]" />
          <div className="absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full bg-white/[0.03]" />
          <div className="absolute top-1/2 left-1/3 w-1 h-32 bg-white/10 rotate-45 translate-y-[-50%]" />
          <div className="absolute top-1/3 right-1/4 w-1 h-20 bg-white/10 -rotate-45" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            {...fadeUp(0.05)}
            className="text-[10px] sm:text-xs font-bold tracking-[0.22em] text-[#FFBD4F] uppercase mb-4"
          >
            ADGRIT · ABOUT US
          </motion.p>

          <motion.h1
            {...fadeUp(0.15)}
            className="text-3xl sm:text-4xl lg:text-[3.5rem] font-extrabold text-white leading-[1.15] tracking-tight max-w-3xl"
          >
            성과로 증명하는
            <br />
            <span className="text-[#FFBD4F]">광고대행사, 애드그릿</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.25)}
            className="mt-6 text-blue-100 text-base sm:text-lg max-w-xl leading-[1.8]"
          >
            Google Ads · SEO & GEO · 워드프레스 · 퍼포먼스 마케팅까지
            <br className="hidden sm:block" />
            하나의 성장 엔진으로 설계하고 직접 실행합니다.
          </motion.p>

          <motion.div
            {...fadeUp(0.35)}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} transition={SPRING}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#FF7F00] text-white text-sm font-bold px-7 py-3.5 rounded-full shadow-lg shadow-orange-500/30 hover:bg-orange-500 transition-colors"
              >
                무료 상담 신청 <ArrowRight size={15} strokeWidth={2.5} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} transition={SPRING}>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 border border-white/25 text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:border-white/60 transition-colors"
              >
                블로그 보기
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ 2. 수치 통계 ══════════════════════════════════ */}
      <section className="bg-[#1e2f6e] py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {STATS.map((s, i) => (
              <StatCard key={s.label} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. 서비스 슬라이더 ════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* 섹션 헤더 */}
          <motion.div {...fadeUp(0)} className="mb-12">
            <p className="text-[10px] sm:text-xs font-bold tracking-[0.22em] text-[#FF7F00] uppercase mb-3">
              WHAT WE DO
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a1a2e] leading-tight">
              애드그릿이 하는 일
            </h2>
            <p className="mt-4 text-slate-500 text-base max-w-lg leading-[1.75]">
              광고 기획부터 개발 실행까지, 마케팅의 전 영역을 직접 실행합니다.
              <br className="hidden sm:block" />
              카드를 드래그하거나 화살표로 탐색해보세요.
            </p>
          </motion.div>

          {/* NHN AD 스타일 슬라이딩 카드 */}
          <AboutSliderCards />
        </div>
      </section>

      {/* ══ 4. 핵심 가치 ══════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div {...fadeUp(0)} className="mb-12">
            <p className="text-[10px] sm:text-xs font-bold tracking-[0.22em] text-[#FF7F00] uppercase mb-3">
              OUR VALUES
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a1a2e]">
              애드그릿이 일하는 방식
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <ValueCard key={v.title} {...v} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. 미션 / 비전 ════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* 미션 */}
            <motion.div
              {...fadeUp(0)}
              className="rounded-2xl bg-[#1A237E] p-8 sm:p-10 relative overflow-hidden"
            >
              <div className="absolute -right-12 -bottom-12 w-52 h-52 rounded-full bg-white/5" />
              <p className="text-xs font-bold tracking-widest text-blue-300 uppercase mb-4">MISSION</p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                사장님의 마케팅 비용을
                <br />
                <span className="text-[#FFBD4F]">&apos;투자&apos;로 바꿔드립니다</span>
              </h3>
              <p className="mt-5 text-blue-100 text-sm leading-[1.85]">
                단순 집행사가 아닌 &apos;실행 파트너&apos;로서 결과에 책임집니다.
                광고비가 비용이 아닌 연료가 되는 경험, 애드그릿과 함께하세요.
              </p>
            </motion.div>

            {/* 비전 */}
            <motion.div
              {...fadeUp(0.1)}
              className="rounded-2xl bg-white border border-slate-100 p-8 sm:p-10 relative overflow-hidden shadow-sm"
            >
              <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-[#1A237E]/4" />
              <p className="text-xs font-bold tracking-widest text-[#FF7F00] uppercase mb-4">VISION</p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#1a1a2e] leading-snug">
                AI 시대,
                <br />
                가장 앞선 마케팅 팀이 됩니다
              </h3>
              <p className="mt-5 text-slate-500 text-sm leading-[1.85]">
                GPT, GEO, AI 자동화를 마케팅에 가장 빠르게 적용하는 실행사.
                기술이 바뀌어도 &apos;성과&apos;라는 본질은 변하지 않습니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ 6. CTA ════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp(0)}>
            <p className="text-[10px] sm:text-xs font-bold tracking-[0.22em] text-[#FF7F00] uppercase mb-4">
              GET STARTED
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a1a2e] leading-tight">
              지금 바로 무료 상담을
              <br />
              신청해보세요
            </h2>
            <p className="mt-5 text-slate-500 text-base leading-[1.8]">
              24시간 내 담당자가 연락드립니다.
              <br />
              부담 없이 문의주세요.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} transition={SPRING}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#1A237E] text-white text-sm font-bold px-8 py-4 rounded-full shadow-lg shadow-[#1A237E]/20 hover:bg-[#283593] transition-colors"
                >
                  무료 상담 신청 <ArrowRight size={15} strokeWidth={2.5} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} transition={SPRING}>
                <a
                  href="tel:1661-0646"
                  className="inline-flex items-center gap-2 border-2 border-slate-200 text-slate-600 text-sm font-bold px-8 py-4 rounded-full hover:border-[#1A237E] hover:text-[#1A237E] transition-colors"
                >
                  📞 전화 상담
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
