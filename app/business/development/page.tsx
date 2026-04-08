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
    icon: "🚀",
    title: "랜딩페이지 제작",
    desc: "광고 유입 → 전환까지 최적화된 단일 목적의 고전환율 랜딩페이지를 제작합니다.",
  },
  {
    icon: "🏢",
    title: "기업 웹사이트",
    desc: "브랜드 신뢰도와 전환율을 동시에 높이는 기업형 웹사이트를 설계·개발합니다.",
  },
  {
    icon: "🛒",
    title: "커머스·쇼핑몰",
    desc: "구매 전환에 집중한 UX 설계로 장바구니 이탈률을 줄이고 객단가를 높입니다.",
  },
  {
    icon: "📱",
    title: "모바일 최적화",
    desc: "전체 트래픽의 70% 이상이 모바일 — 완벽한 반응형으로 어떤 기기에서도 이탈 없이.",
  },
  {
    icon: "🔎",
    title: "기술 SEO 구현",
    desc: "Core Web Vitals·구조화 데이터·메타 최적화로 구글 검색 상위 노출 기반을 만듭니다.",
  },
  {
    icon: "📈",
    title: "GA4 · GTM 연동",
    desc: "데이터 수집 체계를 완벽하게 구성해 마케팅 의사결정의 정확도를 높입니다.",
  },
];

const PROCESS = [
  {
    num: "01",
    title: "기획 · 분석",
    desc: "목표 KPI, 타깃 사용자, 경쟁사 벤치마킹을 바탕으로 프로젝트 방향을 설정합니다.",
  },
  {
    num: "02",
    title: "UI/UX 설계",
    desc: "전환 중심의 와이어프레임과 고품질 시각 디자인으로 사용자 여정을 최적화합니다.",
  },
  {
    num: "03",
    title: "개발 · 연동",
    desc: "최신 기술 스택으로 빠르고 안전하게 개발하고, 필요한 서드파티 툴을 연동합니다.",
  },
  {
    num: "04",
    title: "런칭 · 운영",
    desc: "QA 완료 후 안정적으로 배포하고, 성과 기반의 지속적인 최적화를 진행합니다.",
  },
];

const RESULTS = [
  { num: "3.8×", label: "평균 전환율 향상" },
  { num: "0.9초", label: "평균 LCP 로딩 속도" },
  { num: "98점", label: "Lighthouse 성능 점수" },
  { num: "60%↓", label: "이탈률 감소" },
];

export default function DevelopmentPage() {
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
              Business · Development
            </span>

            <h1
              className="font-black leading-none tracking-tighter"
              style={{ fontSize: "clamp(2.6rem, 9vw, 8rem)" }}
            >
              <span className="text-[#2563EB]">DEVEL</span>
              <span className="text-white">OPMENT</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              className="mt-6 text-lg sm:text-2xl text-white/60 font-medium max-w-xl mx-auto leading-relaxed"
            >
              예쁜 사이트가 아닌
              <br />
              매출을 만드는 사이트.
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
                개발 상담 신청 →
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
              웹사이트는 24시간 쉬지 않는 세일즈 팀입니다.
            </p>
            <p className="text-lg text-white/45 leading-[1.9]">
              ADGRIT의 개발 서비스는 디자인보다 전환율을 먼저 생각합니다.
              빠른 로딩 속도, SEO 최적화, 데이터 추적 체계까지 — 마케팅 성과와 직결된
              기술 기반 위에 귀사의 웹사이트를 구축합니다.
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
            <span className="text-[#2563EB] text-sm font-semibold tracking-[0.2em] uppercase">
              What We Build
            </span>
            <h2
              className="mt-3 font-extrabold text-white leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
            >
              마케팅 최적화 개발 6가지
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
              개발 프로젝트 4단계
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
              Build With Us
            </p>
            <h2
              className="font-extrabold text-white leading-[1.2]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              지금 사이트를 바꾸면
              <br />
              내일의 매출이 달라집니다.
            </h2>
            <p className="mt-6 text-white/45 text-lg leading-relaxed">
              현재 사이트의 전환율 문제를 무료로 진단해드립니다.
              어디서 이탈이 발생하는지, 어떻게 개선할 수 있는지 구체적으로 안내드립니다.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-10 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold px-10 py-5 rounded-xl text-lg transition-colors"
            >
              개발 상담 신청하기 →
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
