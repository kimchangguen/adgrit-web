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

const INCLUDES = [
  {
    icon: "🎯",
    title: "마케팅전략",
    desc: "브랜드 포지셔닝, 타깃 설정, 채널 전략, 예산 배분까지 종합 전략을 수립합니다.",
  },
  {
    icon: "🔍",
    title: "구글 노출",
    desc: "SEO 최적화와 구글 광고 통합 운영으로 검색 유입을 극대화합니다.",
  },
  {
    icon: "📱",
    title: "SNS 채널관리",
    desc: "인스타·유튜브·틱톡·블로그를 통합 전략으로 운영해 팬덤을 구축합니다.",
  },
  {
    icon: "📊",
    title: "퍼포먼스 광고",
    desc: "메타·구글·네이버·카카오 전 플랫폼 광고를 데이터 기반으로 운영합니다.",
  },
  {
    icon: "🎬",
    title: "콘텐츠 제작",
    desc: "영상·이미지·카피라이팅까지 모든 소재를 원스톱으로 제작합니다.",
  },
  {
    icon: "⚙️",
    title: "기술 · 자동화",
    desc: "리포팅 자동화, GA4 연동, 마케팅 스택 구축으로 운영 효율을 높입니다.",
  },
];

const ADVANTAGES = [
  {
    num: "01",
    title: "일관된 브랜드 메시지",
    desc: "모든 채널에서 동일한 브랜드 보이스와 비주얼이 유지되어 신뢰도가 배가됩니다.",
  },
  {
    num: "02",
    title: "채널 간 시너지",
    desc: "SEO·SNS·퍼포먼스·콘텐츠가 서로를 강화하는 선순환 구조를 만듭니다.",
  },
  {
    num: "03",
    title: "비용 효율 극대화",
    desc: "개별 에이전시를 여러 개 쓰는 것보다 통합 운영이 비용과 커뮤니케이션 모두 효율적입니다.",
  },
  {
    num: "04",
    title: "전담 PM 배정",
    desc: "전담 프로젝트 매니저가 모든 영역을 조율하여 파편화 없는 실행을 보장합니다.",
  },
];

const PROCESS = [
  {
    num: "01",
    title: "통합 진단",
    desc: "전 채널·광고 계정·웹사이트를 종합 진단하여 우선순위를 설정합니다.",
  },
  {
    num: "02",
    title: "솔루션 설계",
    desc: "예산·목표·타임라인에 맞는 맞춤형 통합 마케팅 플랜을 수립합니다.",
  },
  {
    num: "03",
    title: "팀 구성 · 실행",
    desc: "전담 PM을 중심으로 전략·운영·크리에이티브 팀이 일사불란하게 실행합니다.",
  },
  {
    num: "04",
    title: "월간 리뷰",
    desc: "매월 성과를 리뷰하고, 다음 달 전략을 함께 설계합니다.",
  },
];

const STATS = [
  { num: "1팀", label: "통합 전담 운영팀" },
  { num: "전채널", label: "마케팅 커버리지" },
  { num: "월간", label: "통합 성과 리포팅" },
  { num: "94%", label: "고객 재계약률" },
];

export default function IntegratedPage() {
  const { ref: introRef, inView: introInView } = useReveal();
  const { ref: includesSectionRef, inView: includesSectionInView } = useReveal();
  const { ref: advantagesSectionRef, inView: advantagesSectionInView } = useReveal();
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
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.1) 0%, transparent 70%)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative z-10"
          >
            <span className="inline-block border border-white/15 text-white/40 text-xs sm:text-sm px-5 py-2 rounded-full tracking-[0.22em] uppercase mb-8">
              Service · 통합솔루션
            </span>

            <h1
              className="font-black leading-none tracking-tighter"
              style={{ fontSize: "clamp(2.4rem, 9vw, 8.5rem)" }}
            >
              <span className="text-slate-200">통합</span>
              <span className="text-white"> 솔루션</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              className="mt-6 text-lg sm:text-2xl text-white/60 font-medium max-w-xl mx-auto leading-relaxed"
            >
              마케팅의 모든 것을 ADGRIT 하나로.
              <br />
              전략부터 실행까지, 원스톱으로.
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
                통합 솔루션 상담 →
              </Link>
              <a
                href="#includes"
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
              여러 에이전시를 관리하느라 정작 사업에 집중 못 하고 계시나요?
            </p>
            <p className="text-lg text-white/45 leading-[1.9]">
              ADGRIT 통합솔루션은 마케팅전략·구글노출·SNS·퍼포먼스·콘텐츠를
              단 하나의 팀이 통합 운영합니다. 파편화된 채널 관리에서 벗어나
              일관된 브랜드 메시지와 시너지 효과를 동시에 누리세요.
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

        {/* ── 포함 서비스 ──────────────────────────────── */}
        <section
          id="includes"
          className="px-6 sm:px-14 lg:px-24 py-24 border-t border-white/[0.07]"
          ref={includesSectionRef}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={includesSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-12 text-center"
          >
            <span className="text-slate-200 text-sm font-semibold tracking-[0.2em] uppercase">
              All In One
            </span>
            <h2
              className="mt-3 font-extrabold text-white leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
            >
              통합솔루션에 포함된 서비스
            </h2>
            <p className="mt-3 text-white/40 text-base max-w-lg mx-auto">
              6가지 핵심 마케팅 영역을 하나의 팀이 일관된 전략으로 운영합니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {INCLUDES.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                animate={includesSectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className="border border-white/[0.08] rounded-2xl p-6 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/40 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#f1f5f9] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── 통합의 이점 ──────────────────────────────── */}
        <section
          className="px-6 sm:px-14 lg:px-24 py-24 border-t border-white/[0.07]"
          ref={advantagesSectionRef}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={advantagesSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-14 text-center"
          >
            <span className="text-slate-200 text-sm font-semibold tracking-[0.2em] uppercase">
              Why Integrated
            </span>
            <h2
              className="mt-3 font-extrabold text-white leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
            >
              통합 운영이 개별 운영보다 강한 이유
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {ADVANTAGES.map((a, i) => (
              <motion.div
                key={a.num}
                initial={{ opacity: 0, y: 28 }}
                animate={advantagesSectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className="flex gap-5"
              >
                <div className="text-slate-200 font-black text-3xl leading-none shrink-0 pt-1">
                  {a.num}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{a.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{a.desc}</p>
                </div>
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
              통합솔루션 운영 4단계
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

        {/* ── 비교 섹션 ────────────────────────────────── */}
        <section className="px-6 sm:px-14 lg:px-24 py-20 border-t border-white/[0.07]">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* 기존 방식 */}
              <div className="rounded-2xl border border-white/[0.07] p-6 bg-white/[0.02]">
                <h3 className="text-base font-bold text-white/40 mb-4">기존 방식</h3>
                <ul className="space-y-3">
                  {[
                    "에이전시 A (퍼포먼스)",
                    "에이전시 B (콘텐츠)",
                    "에이전시 C (SNS)",
                    "에이전시 D (SEO)",
                    "파편화된 보고 & 회의",
                    "채널 간 메시지 불일치",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm text-white/30">
                      <span className="text-slate-400">✕</span> {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ADGRIT 통합 */}
              <div className="rounded-2xl border border-white/30 p-6 bg-white/[0.04]">
                <h3 className="text-base font-bold text-[#f1f5f9] mb-4">ADGRIT 통합솔루션</h3>
                <ul className="space-y-3">
                  {[
                    "전담 PM 1명이 전체 조율",
                    "전략·운영·크리에이티브 통합",
                    "채널 간 시너지 극대화",
                    "일관된 브랜드 메시지",
                    "월 1회 통합 성과 리뷰",
                    "빠른 의사결정 · 유연한 대응",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm text-white/70">
                      <span className="text-slate-200">✓</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
              All-in-One Solution
            </p>
            <h2
              className="font-extrabold text-white leading-[1.2]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              마케팅, 이제
              <br />
              한 곳에서 해결하세요.
            </h2>
            <p className="mt-6 text-white/45 text-lg leading-relaxed">
              현재 마케팅 현황을 무료로 진단하고, 귀사에 맞는 통합 솔루션 플랜을 제안드립니다.
              영업일 기준 1일 이내로 연락드립니다.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-10 bg-white hover:bg-slate-200 text-[#222222] font-black px-10 py-5 rounded-xl text-lg transition-colors"
            >
              통합 솔루션 상담 신청 →
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
