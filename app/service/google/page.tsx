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
    icon: "🔑",
    title: "키워드 전략",
    desc: "고객이 실제로 검색하는 키워드를 발굴하고, 전환 가능성이 높은 키워드에 집중 투자합니다.",
  },
  {
    icon: "📄",
    title: "온페이지 SEO",
    desc: "타이틀·메타·헤딩·내부링크까지 구글이 사랑하는 페이지 구조를 완성합니다.",
  },
  {
    icon: "⚙️",
    title: "기술 SEO",
    desc: "Core Web Vitals, 크롤러 접근성, 구조화 데이터로 검색 엔진 신뢰도를 높입니다.",
  },
  {
    icon: "🌐",
    title: "구글 광고 (GFA/GDN)",
    desc: "검색광고·디스플레이·유튜브를 통합 운영해 구매 여정 전 단계를 커버합니다.",
  },
  {
    icon: "📍",
    title: "로컬 SEO",
    desc: "구글 비즈니스 프로필 최적화로 지역 검색에서 경쟁사보다 먼저 노출됩니다.",
  },
  {
    icon: "📊",
    title: "성과 리포팅",
    desc: "순위·클릭·전환·ROAS를 한눈에 파악할 수 있는 맞춤 대시보드를 제공합니다.",
  },
];

const OUTCOMES = [
  {
    title: "오가닉 트래픽 증가",
    desc: "검색 상위 노출로 광고비 없이도 꾸준히 유입되는 무료 트래픽을 확보합니다.",
  },
  {
    title: "광고비 효율 개선",
    desc: "정확한 타깃팅과 품질점수 최적화로 CPC를 낮추고 ROAS를 높입니다.",
  },
  {
    title: "브랜드 신뢰도 상승",
    desc: "구글 검색 1페이지 = 업계 전문성의 증거. 고객이 먼저 연락해옵니다.",
  },
];

const PROCESS = [
  { num: "01", title: "키워드 분석", desc: "검색량·경쟁도·전환 가능성을 분석해 최적 키워드를 선정합니다." },
  { num: "02", title: "사이트 최적화", desc: "온페이지·기술 SEO를 적용해 구글이 읽기 좋은 구조로 개선합니다." },
  { num: "03", title: "광고 운영", desc: "캠페인 구조 설계부터 입찰 최적화까지 성과 중심으로 운영합니다." },
  { num: "04", title: "지속 개선", desc: "주간 데이터 분석으로 순위와 ROAS를 지속적으로 끌어올립니다." },
];

const STATS = [
  { num: "1위", label: "목표 검색 순위" },
  { num: "40%↑", label: "오가닉 트래픽 증가" },
  { num: "30%↓", label: "CPC 절감" },
  { num: "3개월", label: "평균 가시적 성과 기간" },
];

export default function GooglePage() {
  const intro = useReveal();
  const featuresSection = useReveal();
  const outcomesSection = useReveal();
  const processSection = useReveal();
  const statsSection = useReveal();
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
              Service · 구글노출
            </span>

            <h1
              className="font-black leading-none tracking-tighter"
              style={{ fontSize: "clamp(2.6rem, 10vw, 9rem)" }}
            >
              <span className="text-[#2563EB]">구글</span>
              <span className="text-white"> 노출</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              className="mt-6 text-lg sm:text-2xl text-white/60 font-medium max-w-xl mx-auto leading-relaxed"
            >
              고객이 검색할 때 가장 먼저 보이는 브랜드.
              <br />
              그 자리를 ADGRIT이 만들어드립니다.
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
                구글 노출 상담 →
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
              하루 수억 건의 구글 검색, 그 안에 귀사가 있어야 합니다.
            </p>
            <p className="text-lg text-white/45 leading-[1.9]">
              SEO와 구글 광고를 통합 운영하는 ADGRIT의 구글 노출 서비스는
              오가닉 검색 순위 상승과 광고 효율 개선을 동시에 달성합니다.
              단기 성과와 장기 자산을 모두 쌓는 전략입니다.
            </p>
          </motion.div>
        </section>

        {/* ── 성과 수치 ────────────────────────────────── */}
        <section
          ref={statsSection.ref}
          className="px-6 sm:px-14 lg:px-24 py-16 border-t border-white/[0.07]"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {STATS.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 24 }}
                animate={statsSection.inView ? { opacity: 1, y: 0 } : {}}
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

        {/* ── 서비스 항목 ──────────────────────────────── */}
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
              Service Details
            </span>
            <h2
              className="mt-3 font-extrabold text-white leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
            >
              구글 노출 서비스 구성
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

        {/* ── 기대 효과 ────────────────────────────────── */}
        <section
          className="px-6 sm:px-14 lg:px-24 py-24 border-t border-white/[0.07]"
          ref={outcomesSection.ref}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={outcomesSection.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-12 text-center"
          >
            <span className="text-[#2563EB] text-sm font-semibold tracking-[0.2em] uppercase">
              Expected Outcomes
            </span>
            <h2
              className="mt-3 font-extrabold text-white leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
            >
              구글 노출 최적화 후 달라지는 것들
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {OUTCOMES.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 28 }}
                animate={outcomesSection.inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className="border-l-2 border-[#2563EB] pl-5"
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
              구글 노출 최적화 4단계
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
              Get Found on Google
            </p>
            <h2
              className="font-extrabold text-white leading-[1.2]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              지금 내 브랜드가
              <br />
              구글에서 보이지 않는다면?
            </h2>
            <p className="mt-6 text-white/45 text-lg leading-relaxed">
              경쟁사는 이미 구글 1페이지에서 고객을 가져가고 있습니다.
              지금 바로 현황을 진단하고 대응 전략을 받아보세요.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-10 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold px-10 py-5 rounded-xl text-lg transition-colors"
            >
              구글 노출 상담 신청 →
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
