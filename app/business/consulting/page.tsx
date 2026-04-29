"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SiteHeader } from "../../_components/SiteHeader";
import { Footer } from "../../_components/Footer";

const EASE = [0.22, 1, 0.36, 1] as const;

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return { ref, inView };
}

const FEATURES = [
  {
    icon: "🎯",
    title: "브랜드 포지셔닝",
    desc: "시장 내 경쟁 우위를 분석하고, 브랜드가 점유해야 할 고유한 포지션을 설계합니다.",
  },
  {
    icon: "🔍",
    title: "타깃 분석",
    desc: "데이터 기반으로 핵심 고객 페르소나를 정의하고 구매 여정 전체를 매핑합니다.",
  },
  {
    icon: "📐",
    title: "채널 전략",
    desc: "타깃이 가장 많이 머무는 채널을 선별하고 예산 효율을 극대화하는 믹스를 설계합니다.",
  },
  {
    icon: "💹",
    title: "예산 최적화",
    desc: "낭비 없는 예산 배분으로 같은 비용으로 더 큰 성과를 만드는 구조를 제안합니다.",
  },
  {
    icon: "📌",
    title: "KPI 설계",
    desc: "성장 단계에 맞는 핵심 지표를 정의하고 측정 체계와 리포팅 구조를 구축합니다.",
  },
  {
    icon: "🗺",
    title: "실행 로드맵",
    desc: "90일 단위 실행 계획으로 전략을 실제 성과로 연결하는 구체적 로드맵을 제공합니다.",
  },
];

const PROCESS = [
  {
    num: "01",
    title: "비즈니스 진단",
    desc: "현황 데이터, 광고 계정, 경쟁사 분석을 통해 성장 기회와 병목 지점을 파악합니다.",
  },
  {
    num: "02",
    title: "전략 수립",
    desc: "진단 결과를 바탕으로 브랜드·타깃·채널·예산 전략을 종합한 마스터플랜을 수립합니다.",
  },
  {
    num: "03",
    title: "실행 지원",
    desc: "전략을 실제 운영에 녹여내도록 ADGRIT 전문가가 실행 전 과정을 함께합니다.",
  },
  {
    num: "04",
    title: "성과 점검",
    desc: "KPI 달성도를 주기적으로 리뷰하고 시장 변화에 맞춰 전략을 즉시 보정합니다.",
  },
];

const RESULTS = [
  { num: "2.7×", label: "평균 ROAS 향상" },
  { num: "94%", label: "고객 재계약률" },
  { num: "3500억+", label: "연 광고 취급고" },
  { num: "310억", label: "누적 투자 유치" },
];

export default function ConsultingPage() {
  const intro = useReveal();
  const featuresSection = useReveal();
  const processSection = useReveal();
  const resultsSection = useReveal();
  const ctaSection = useReveal();

  return (
    <div className="bg-[#222222] text-white min-h-screen">
      <SiteHeader />

      <main className="pt-16">
        {/* ── 히어로 ──────────────────────────────────── */}
        <section className="relative flex flex-col items-center justify-center min-h-[70vh] overflow-hidden px-6 text-center">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.08) 0%, transparent 70%)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative z-10"
          >
            <span className="inline-block border border-white/15 text-white/40 text-xs sm:text-sm px-5 py-2 rounded-full tracking-[0.22em] uppercase mb-8">
              Business · Consulting
            </span>

            <h1
              className="font-black leading-none tracking-tighter"
              style={{ fontSize: "clamp(2.8rem, 10vw, 8.5rem)" }}
            >
              <span className="text-slate-200">CON</span>
              <span className="text-white">SULTING</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              className="mt-6 text-lg sm:text-2xl text-white/60 font-medium max-w-xl mx-auto leading-relaxed"
            >
              데이터와 경험으로 설계한
              <br />
              귀사만의 성장 방정식.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-block bg-white hover:bg-slate-200 text-[#222222] font-black px-8 py-4 rounded-xl text-base transition-colors"
              >
                무료 컨설팅 신청 →
              </Link>
              <a
                href="#features"
                className="inline-block border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors"
              >
                서비스 살펴보기
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <span className="text-xs tracking-[0.22em] text-white/20 uppercase">scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
            />
          </motion.div>
        </section>

        {/* ── 소개 ─────────────────────────────────────── */}
        <section className="px-6 sm:px-14 lg:px-24 py-24 border-t border-white/[0.07]">
          <motion.div
            ref={intro.ref}
            initial={{ opacity: 0, y: 40 }}
            animate={intro.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <p
              className="font-extrabold text-white leading-[1.5]"
              style={{ fontSize: "clamp(1.4rem, 2.8vw, 2rem)" }}
            >
              성장은 운이 아니라 설계입니다.
            </p>
            <p className="text-lg text-white/45 leading-[1.9]">
              ADGRIT 컨설팅은 수백 개 브랜드의 성장을 직접 실행한 경험을 바탕으로,
              귀사의 현황을 정밀 진단하고 최단 경로의 성장 전략을 설계합니다.
              막연한 방향 제시가 아닌, 실행까지 책임지는 컨설팅입니다.
            </p>
          </motion.div>
        </section>

        {/* ── 성과 수치 ────────────────────────────────── */}
        <section
          ref={resultsSection.ref}
          className="px-6 sm:px-14 lg:px-24 py-16 border-t border-white/[0.07]"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {RESULTS.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 24 }}
                animate={resultsSection.inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className="text-center"
              >
                <div
                  className="font-black text-slate-200 leading-none"
                  style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
                >
                  {r.num}
                </div>
                <div className="mt-2 text-sm text-white/40 font-medium">{r.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── 기능 그리드 ──────────────────────────────── */}
        <section
          id="features"
          className="px-6 sm:px-14 lg:px-24 py-24 border-t border-white/[0.07]"
          ref={featuresSection.ref}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={featuresSection.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-12 text-center"
          >
            <span className="text-slate-200 text-sm font-semibold tracking-[0.2em] uppercase">
              Consulting Areas
            </span>
            <h2
              className="mt-3 font-extrabold text-white leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
            >
              전략 컨설팅 6대 영역
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 28 }}
                animate={featuresSection.inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className="border border-white/[0.08] rounded-2xl p-6 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/30 transition-all"
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── 프로세스 ─────────────────────────────────── */}
        <section
          className="px-6 sm:px-14 lg:px-24 py-24 border-t border-white/[0.07]"
          ref={processSection.ref}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={processSection.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-14 text-center"
          >
            <span className="text-slate-200 text-sm font-semibold tracking-[0.2em] uppercase">
              Our Process
            </span>
            <h2
              className="mt-3 font-extrabold text-white leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
            >
              컨설팅 4단계 프로세스
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 28 }}
                animate={processSection.inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className="relative"
              >
                {i < PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-white/10 -translate-x-4" />
                )}
                <div className="text-slate-200 font-black text-4xl leading-none mb-4">{p.num}</div>
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────── */}
        <section
          className="px-6 sm:px-14 lg:px-24 py-28 border-t border-white/[0.07]"
          ref={ctaSection.ref}
        >
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={ctaSection.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-slate-200 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Free Consulting
            </p>
            <h2
              className="font-extrabold text-white leading-[1.2]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              지금 신청하면
              <br />첫 진단은 무료입니다.
            </h2>
            <p className="mt-6 text-white/45 text-lg leading-relaxed">
              현황 진단부터 전략 방향 제시까지 — 비용 부담 없이 ADGRIT 전문가의 시각을 먼저 경험해보세요.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-10 bg-white hover:bg-slate-200 text-[#222222] font-black px-10 py-5 rounded-xl text-lg transition-colors"
            >
              무료 컨설팅 신청하기 →
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
