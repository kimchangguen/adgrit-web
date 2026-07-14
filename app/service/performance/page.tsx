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

const PLATFORMS = [
  { name: "Meta 광고", icon: "📘", desc: "페이스북·인스타그램 광고로 정밀 타깃팅과 리타겟팅을 통해 ROAS를 극대화합니다." },
  { name: "구글 광고", icon: "🔍", desc: "검색·디스플레이·쇼핑·유튜브 광고를 통합 운영해 구매 의도 높은 고객을 포착합니다." },
  { name: "네이버 광고", icon: "🟢", desc: "파워링크·쇼핑검색·브랜드 검색으로 국내 최대 검색 플랫폼에서 상위 노출을 확보합니다." },
  { name: "카카오 광고", icon: "💛", desc: "카카오모먼트·비즈보드로 4,500만 국내 이용자에게 브랜드 메시지를 전달합니다." },
  { name: "틱톡 광고", icon: "🎵", desc: "숏폼 영상 광고로 Z세대 및 MZ세대에게 바이럴 효과와 전환을 동시에 달성합니다." },
  { name: "리타겟팅", icon: "🎯", desc: "방문자·장바구니 이탈·기존 고객을 세그먼트별로 재접근해 전환율을 높입니다." },
];

const FEATURES = [
  {
    icon: "🧪",
    title: "A/B 테스트",
    desc: "소재·카피·랜딩페이지를 지속적으로 테스트해 최고 성과 조합을 찾아냅니다.",
  },
  {
    icon: "📉",
    title: "CPA 최적화",
    desc: "전환당 비용을 최소화하는 입찰 전략과 타깃팅 조합을 데이터로 최적화합니다.",
  },
  {
    icon: "🔄",
    title: "퍼널 최적화",
    desc: "인지 → 관심 → 전환 각 단계의 이탈을 데이터로 진단하고 즉시 개선합니다.",
  },
  {
    icon: "📋",
    title: "주간 성과 리포트",
    desc: "ROAS·CPC·CTR·전환율을 담은 명확한 리포트로 광고비 집행의 근거를 제공합니다.",
  },
];

const OUTCOMES = [
  { title: "ROAS 향상", desc: "데이터 기반 입찰 최적화와 소재 테스트로 광고 수익률을 지속적으로 높입니다." },
  { title: "CPA 감소", desc: "낭비 예산을 제거하고 전환 가능성이 높은 고객에만 집중 투자합니다." },
  { title: "전환율 개선", desc: "광고 소재부터 랜딩페이지까지 전환 여정 전체를 최적화합니다." },
];

const PROCESS = [
  { num: "01", title: "목표 설정", desc: "KPI(ROAS/CPA/전환수)와 예산을 명확히 설정합니다." },
  { num: "02", title: "캠페인 설계", desc: "타깃·소재·랜딩페이지·입찰 전략을 구조적으로 설계합니다." },
  { num: "03", title: "론칭 · 모니터링", desc: "캠페인을 론칭하고 실시간 데이터를 모니터링합니다." },
  { num: "04", title: "최적화 · 리포팅", desc: "데이터 기반으로 지속 최적화하고 성과를 투명하게 공유합니다." },
];

const STATS = [
  { num: "2.8×", label: "평균 ROAS 개선" },
  { num: "35%↓", label: "CPA 감소" },
  { num: "주간", label: "성과 리포팅 주기" },
  { num: "실시간", label: "캠페인 모니터링" },
];

export default function PerformancePage() {
  const { ref: introRef, inView: introInView } = useReveal();
  const { ref: platformsSectionRef, inView: platformsSectionInView } = useReveal();
  const { ref: featuresSectionRef, inView: featuresSectionInView } = useReveal();
  const { ref: outcomesSectionRef, inView: outcomesSectionInView } = useReveal();
  const { ref: processSectionRef, inView: processSectionInView } = useReveal();
  const { ref: statsSectionRef, inView: statsSectionInView } = useReveal();
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
              Service · 퍼포먼스마케팅
            </span>

            <h1
              className="font-black leading-none tracking-tighter"
              style={{ fontSize: "clamp(2.4rem, 9vw, 8rem)" }}
            >
              <span className="text-slate-200">퍼포먼스</span>
              <span className="text-white"> 마케팅</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              className="mt-6 text-lg sm:text-2xl text-white/60 font-medium max-w-xl mx-auto leading-relaxed"
            >
              광고비는 비용이 아닌 투자입니다.
              <br />
              ROAS로 증명하는 성과 중심 광고.
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
                퍼포먼스 상담 →
              </Link>
              <a
                href="#platforms"
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
              광고비 1원도 낭비 없이 성과로 연결합니다.
            </p>
            <p className="text-lg text-white/45 leading-[1.9]">
              ADGRIT의 퍼포먼스 마케팅은 메타·구글·네이버·카카오 전 플랫폼을 데이터로 통합 운영합니다.
              감이 아닌 숫자로 의사결정하고, 매주 투명한 성과 리포트로 진행 상황을 공유합니다.
            </p>
          </motion.div>
        </section>

        {/* ── 성과 수치 ────────────────────────────────── */}
        <section
          ref={statsSectionRef}
          className="px-6 sm:px-14 lg:px-24 py-16 border-t border-white/[0.07]"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {STATS.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 24 }}
                animate={statsSectionInView ? { opacity: 1, y: 0 } : {}}
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

        {/* ── 운영 플랫폼 ──────────────────────────────── */}
        <section
          id="platforms"
          className="px-6 sm:px-14 lg:px-24 py-24 border-t border-white/[0.07]"
          ref={platformsSectionRef}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={platformsSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-12 text-center"
          >
            <span className="text-slate-200 text-sm font-semibold tracking-[0.2em] uppercase">
              Platforms We Run
            </span>
            <h2
              className="mt-3 font-extrabold text-white leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
            >
              전 플랫폼 통합 운영
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {PLATFORMS.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 28 }}
                animate={platformsSectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className="border border-white/[0.08] rounded-2xl p-6 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{p.icon}</span>
                  <h3 className="text-lg font-bold text-white">{p.name}</h3>
                </div>
                <p className="text-white/45 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── 서비스 항목 ──────────────────────────────── */}
        <section
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
              퍼포먼스 서비스 구성
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 28 }}
                animate={featuresSectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className="border border-white/[0.08] rounded-2xl p-6 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/30 transition-all"
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
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
              퍼포먼스 마케팅으로 달라지는 것들
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
              퍼포먼스 광고 4단계
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
              Maximize Your ROAS
            </p>
            <h2
              className="font-extrabold text-white leading-[1.2]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              광고를 집행하는데
              <br />
              ROAS가 안 나온다면?
            </h2>
            <p className="mt-6 text-white/45 text-lg leading-relaxed">
              지금 광고 계정을 무료로 진단해드립니다.
              낭비되는 예산과 개선 가능한 포인트를 구체적으로 짚어드립니다.
            </p>
            <Link
              href="https://open.kakao.com/o/s2RtMSei"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 bg-white hover:bg-slate-200 text-[#222222] font-black px-10 py-5 rounded-xl text-lg transition-colors"
            >
              광고 계정 무료 진단 →
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
