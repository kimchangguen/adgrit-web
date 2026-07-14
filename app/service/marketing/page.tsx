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
    icon: "🔭",
    title: "시장 조사 · 분석",
    desc: "경쟁 환경, 시장 트렌드, 고객 심리를 데이터로 파악하여 전략의 토대를 만듭니다.",
  },
  {
    icon: "🎨",
    title: "브랜드 전략",
    desc: "차별화된 브랜드 아이덴티티와 메시지를 설계해 기억에 남는 브랜드를 만듭니다.",
  },
  {
    icon: "📡",
    title: "채널 믹스 설계",
    desc: "구글·메타·네이버·카카오·유튜브 — 예산 대비 효과가 가장 높은 채널 조합을 도출합니다.",
  },
  {
    icon: "💡",
    title: "크리에이티브 전략",
    desc: "클릭하고 싶은 소재, 읽히는 카피 — 고객의 구매 심리를 자극하는 전략을 수립합니다.",
  },
  {
    icon: "💰",
    title: "예산 배분 최적화",
    desc: "매출 기여도 분석을 기반으로 채널별 예산을 최적 배분하여 낭비를 없앱니다.",
  },
  {
    icon: "📋",
    title: "90일 실행 로드맵",
    desc: "전략을 즉시 실행 가능한 단계별 계획으로 분해하여 빠른 성과를 만듭니다.",
  },
];

const OUTCOMES = [
  {
    title: "명확한 타깃 페르소나",
    desc: "누구에게 무엇을 말해야 하는지 — 전략의 첫 단추를 정확하게 꿰맵니다.",
  },
  {
    title: "채널별 KPI 체계",
    desc: "각 채널의 목표 지표와 측정 방법을 명확히 설정하여 성과를 눈으로 확인합니다.",
  },
  {
    title: "예산 효율 극대화",
    desc: "같은 예산으로 더 많은 전환 — 낭비 없는 집행 구조를 설계합니다.",
  },
];

const PROCESS = [
  { num: "01", title: "데이터 수집", desc: "광고 계정, 웹 분석, 고객 인터뷰를 통해 현황 데이터를 확보합니다." },
  { num: "02", title: "현황 분석", desc: "수집된 데이터에서 성장 기회와 병목 지점을 도출합니다." },
  { num: "03", title: "전략 설계", desc: "분석 결과를 바탕으로 브랜드·채널·예산 전략을 종합합니다." },
  { num: "04", title: "실행 · 측정", desc: "전략을 실행하고 KPI 기반으로 지속 최적화합니다." },
];

export default function MarketingPage() {
  const { ref: introRef, inView: introInView } = useReveal();
  const { ref: featuresSectionRef, inView: featuresSectionInView } = useReveal();
  const { ref: outcomesSectionRef, inView: outcomesSectionInView } = useReveal();
  const { ref: processSectionRef, inView: processSectionInView } = useReveal();
  const { ref: ctaSectionRef, inView: ctaSectionInView } = useReveal();

  return (
    <div className="bg-[#2E4033] text-white min-h-screen">
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
              Service · 마케팅전략
            </span>

            <h1
              className="font-black leading-none tracking-tighter"
              style={{ fontSize: "clamp(2.6rem, 9vw, 8rem)" }}
            >
              <span className="text-slate-200">마케팅</span>
              <span className="text-white"> 전략</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              className="mt-6 text-lg sm:text-2xl text-white/60 font-medium max-w-xl mx-auto leading-relaxed"
            >
              방향 없는 광고는 돈을 태웁니다.
              <br />
              데이터가 이끄는 전략으로 성과를 만드세요.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="https://open.kakao.com/o/s2RtMSei"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white hover:bg-slate-200 text-[#222222] font-black px-8 py-4 rounded-xl text-base transition-colors"
              >
                전략 수립 상담 →
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
            ref={introRef}
            initial={{ opacity: 0, y: 40 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <p
              className="font-extrabold text-white leading-[1.5]"
              style={{ fontSize: "clamp(1.4rem, 2.8vw, 2rem)" }}
            >
              전략 없는 실행은 반드시 낭비로 끝납니다.
            </p>
            <p className="text-lg text-white/45 leading-[1.9]">
              ADGRIT 마케팅전략 서비스는 귀사 브랜드의 현재 위치를 정밀하게 파악하고,
              가장 짧은 경로로 목표 성과에 도달하는 전략을 수립합니다.
              업종·예산·경쟁 환경에 맞춘 완전 맞춤형 전략, 그리고 실행까지 함께합니다.
            </p>
          </motion.div>
        </section>

        {/* ── 서비스 항목 ──────────────────────────────── */}
        <section
          id="features"
          className="px-6 sm:px-14 lg:px-24 py-24 border-t border-white/[0.07]"
          ref={featuresSectionRef}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={featuresSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-12 text-center"
          >
            <span className="text-slate-200 text-sm font-semibold tracking-[0.2em] uppercase">
              Service Details
            </span>
            <h2
              className="mt-3 font-extrabold text-white leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
            >
              마케팅전략 서비스 구성
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 28 }}
                animate={featuresSectionInView ? { opacity: 1, y: 0 } : {}}
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

        {/* ── 기대 효과 ────────────────────────────────── */}
        <section
          className="px-6 sm:px-14 lg:px-24 py-24 border-t border-white/[0.07]"
          ref={outcomesSectionRef}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={outcomesSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-12 text-center"
          >
            <span className="text-slate-200 text-sm font-semibold tracking-[0.2em] uppercase">
              Expected Outcomes
            </span>
            <h2
              className="mt-3 font-extrabold text-white leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
            >
              전략 수립 후 달라지는 것들
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {OUTCOMES.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 28 }}
                animate={outcomesSectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className="border-l-2 border-white/35 pl-5"
              >
                <h3 className="text-base font-bold text-white mb-2">{o.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{o.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── 프로세스 ─────────────────────────────────── */}
        <section
          className="px-6 sm:px-14 lg:px-24 py-24 border-t border-white/[0.07]"
          ref={processSectionRef}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={processSectionInView ? { opacity: 1, y: 0 } : {}}
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
              전략 수립 4단계
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 28 }}
                animate={processSectionInView ? { opacity: 1, y: 0 } : {}}
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
          ref={ctaSectionRef}
        >
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={ctaSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-slate-200 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Let&apos;s Strategize
            </p>
            <h2
              className="font-extrabold text-white leading-[1.2]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              지금 전략이 없다면
              <br />
              경쟁사가 먼저 치고 나갑니다.
            </h2>
            <p className="mt-6 text-white/45 text-lg leading-relaxed">
              ADGRIT 전문가와 단 30분의 상담으로 귀사 마케팅의 숨겨진 기회를 발견하세요.
            </p>
            <Link
              href="https://open.kakao.com/o/s2RtMSei"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 bg-white hover:bg-slate-200 text-[#222222] font-black px-10 py-5 rounded-xl text-lg transition-colors"
            >
              전략 수립 상담 신청 →
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
