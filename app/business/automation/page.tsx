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
    icon: "⚡",
    title: "마케팅 자동화",
    desc: "이메일·SMS·카카오 알림톡 등 고객 접점 전체를 자동화하여 이탈 없는 전환 여정을 만듭니다.",
  },
  {
    icon: "🔗",
    title: "CRM 연동",
    desc: "영업·고객관리 시스템과 자동 연동해 데이터 사일로를 없애고 360° 고객 뷰를 확보합니다.",
  },
  {
    icon: "📊",
    title: "리포팅 자동화",
    desc: "광고 성과·매출·KPI를 자동 집계하고 실시간 대시보드와 정기 리포트를 자동 발송합니다.",
  },
  {
    icon: "🤖",
    title: "AI 챗봇 도입",
    desc: "고객 상담의 80%를 AI가 처리하여 응답 속도를 높이고 운영 비용을 대폭 절감합니다.",
  },
  {
    icon: "🔄",
    title: "광고 자동 최적화",
    desc: "캠페인 입찰·예산 배분·A/B 테스트를 자동화하여 ROAS를 극대화합니다.",
  },
  {
    icon: "📦",
    title: "데이터 파이프라인",
    desc: "전사 데이터를 하나의 대시보드에서 실시간 확인 — 의사결정 속도를 10배 높입니다.",
  },
];

const PROCESS = [
  {
    num: "01",
    title: "현황 진단",
    desc: "현재 업무 프로세스와 데이터 흐름을 분석하여 자동화 가능 영역을 도출합니다.",
  },
  {
    num: "02",
    title: "자동화 설계",
    desc: "비즈니스 목표에 최적화된 자동화 아키텍처와 툴 스택을 설계합니다.",
  },
  {
    num: "03",
    title: "시스템 구축",
    desc: "검증된 SaaS 툴과 커스텀 개발을 결합해 빠르고 안정적으로 구축합니다.",
  },
  {
    num: "04",
    title: "최적화 운영",
    desc: "안정화 이후 지속적인 모니터링과 개선으로 ROI를 극대화합니다.",
  },
];

const RESULTS = [
  { num: "73%", label: "반복 업무 감소율" },
  { num: "3.2×", label: "마케팅 생산성 향상" },
  { num: "40%↓", label: "운영 비용 절감" },
  { num: "2배", label: "전환율 개선" },
];

export default function AutomationPage() {
  const intro = useReveal();
  const featuresSection = useReveal();
  const processSection = useReveal();
  const resultsSection = useReveal();
  const ctaSection = useReveal();

  return (
    <div className="bg-[#1e3052] text-white min-h-screen">
      <SiteHeader />

      <main className="pt-16">
        {/* ── 히어로 ──────────────────────────────────── */}
        <section className="relative flex flex-col items-center justify-center min-h-[70vh] overflow-hidden px-6 text-center">
          {/* 배경 그라디언트 */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(37,99,235,0.18) 0%, transparent 70%)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative z-10"
          >
            <span className="inline-block border border-white/15 text-white/40 text-xs sm:text-sm px-5 py-2 rounded-full tracking-[0.22em] uppercase mb-8">
              Business · Automation
            </span>

            <h1
              className="font-black leading-none tracking-tighter"
              style={{ fontSize: "clamp(3.2rem, 11vw, 9rem)" }}
            >
              <span className="text-[#2563EB]">AUTO</span>
              <span className="text-white">MATION</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              className="mt-6 text-lg sm:text-2xl text-white/60 font-medium max-w-xl mx-auto leading-relaxed"
            >
              반복 업무에서 해방되어
              <br />
              핵심 비즈니스에 집중하세요.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-block bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold px-8 py-4 rounded-xl text-base transition-colors"
              >
                자동화 상담 신청 →
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

        {/* ── 소개 문단 ────────────────────────────────── */}
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
              시간을 아끼면 성과가 쌓입니다.
            </p>
            <p className="text-lg text-white/45 leading-[1.9]">
              ADGRIT의 자동화 솔루션은 마케팅·영업·운영의 반복 업무를 시스템이 대신 처리하도록 설계합니다.
              사람은 창의적이고 전략적인 일에만 집중하고, 나머지는 기술이 쉬지 않고 처리합니다.
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
                  className="font-black text-[#2563EB] leading-none"
                  style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
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
            <span className="text-[#2563EB] text-sm font-semibold tracking-[0.2em] uppercase">
              What We Automate
            </span>
            <h2
              className="mt-3 font-extrabold text-white leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
            >
              자동화로 해결되는 6가지 핵심 영역
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 28 }}
                animate={featuresSection.inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className="border border-white/[0.08] rounded-2xl p-6 bg-white/[0.03] hover:bg-white/[0.06] hover:border-[#2563EB]/30 transition-all"
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
            <span className="text-[#2563EB] text-sm font-semibold tracking-[0.2em] uppercase">
              Our Process
            </span>
            <h2
              className="mt-3 font-extrabold text-white leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
            >
              자동화 구축 4단계
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
                <div className="text-[#2563EB] font-black text-4xl leading-none mb-4">{p.num}</div>
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
            <p className="text-[#2563EB] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Start Today
            </p>
            <h2
              className="font-extrabold text-white leading-[1.2]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              지금 바로 자동화를 시작하면
              <br />
              내일의 비용이 달라집니다.
            </h2>
            <p className="mt-6 text-white/45 text-lg leading-relaxed">
              무료 현황 진단 상담을 통해 귀사에 딱 맞는 자동화 방향을 제시해드립니다.
              영업일 기준 1일 이내로 연락드립니다.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-10 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold px-10 py-5 rounded-xl text-lg transition-colors"
            >
              무료 상담 신청하기 →
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
