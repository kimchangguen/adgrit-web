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

const CONTENT_TYPES = [
  {
    icon: "🎬",
    title: "영상 제작",
    desc: "브랜드 영상·광고 영상·숏폼 릴스까지 — 스크롤을 멈추게 만드는 영상을 제작합니다.",
  },
  {
    icon: "📸",
    title: "사진 · 그래픽",
    desc: "제품 사진, 카드뉴스, 배너, SNS 템플릿 등 브랜드 비주얼 아이덴티티를 구현합니다.",
  },
  {
    icon: "✍️",
    title: "카피라이팅",
    desc: "클릭하고 싶게, 읽히게, 행동하게 만드는 카피 — 구매 심리를 자극하는 문장을 씁니다.",
  },
  {
    icon: "📊",
    title: "인포그래픽",
    desc: "복잡한 정보를 시각적으로 풀어내어 고객이 즉시 이해하고 공유하게 만듭니다.",
  },
  {
    icon: "🎙",
    title: "브랜드 스토리",
    desc: "브랜드의 철학과 가치를 감동적인 스토리로 담아 팬덤을 만드는 콘텐츠를 제작합니다.",
  },
  {
    icon: "📣",
    title: "광고 소재",
    desc: "메타·구글·네이버 광고에 최적화된 고CTR 소재를 A/B 테스트 구조로 제작합니다.",
  },
];

const OUTCOMES = [
  {
    title: "브랜드 인지도 강화",
    desc: "일관된 비주얼·보이스로 브랜드를 잠재 고객의 머릿속에 각인시킵니다.",
  },
  {
    title: "CTR · 전환율 향상",
    desc: "클릭을 유도하는 소재와 카피로 광고 효율을 직접적으로 끌어올립니다.",
  },
  {
    title: "바이럴 확산",
    desc: "공유하고 싶게 만드는 콘텐츠로 유기적인 도달과 팔로워 성장을 이끕니다.",
  },
];

const PROCESS = [
  {
    num: "01",
    title: "브리핑",
    desc: "브랜드 가이드, 목표, 타깃, 레퍼런스를 수집하여 제작 방향을 확정합니다.",
  },
  {
    num: "02",
    title: "기획 · 스크립트",
    desc: "콘텐츠 구조와 메시지를 설계하고, 영상은 스토리보드·스크립트를 작성합니다.",
  },
  {
    num: "03",
    title: "제작 · 편집",
    desc: "촬영·편집·디자인·카피라이팅 등 실제 제작을 진행합니다.",
  },
  {
    num: "04",
    title: "검수 · 납품",
    desc: "피드백을 반영한 최종 검수 후 채널별 최적화 포맷으로 납품합니다.",
  },
];

const STATS = [
  { num: "3.4×", label: "평균 CTR 향상" },
  { num: "2일", label: "평균 납품 기간" },
  { num: "무제한", label: "수정 횟수" },
  { num: "전채널", label: "포맷 최적화 제공" },
];

export default function ContentPage() {
  const intro = useReveal();
  const typesSection = useReveal();
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
              Service · 콘텐츠제작
            </span>

            <h1
              className="font-black leading-none tracking-tighter"
              style={{ fontSize: "clamp(2.6rem, 10vw, 9rem)" }}
            >
              <span className="text-[#2563EB]">콘텐츠</span>
              <span className="text-white"> 제작</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              className="mt-6 text-lg sm:text-2xl text-white/60 font-medium max-w-xl mx-auto leading-relaxed"
            >
              보는 순간 멈추게 만드는 콘텐츠.
              <br />
              읽는 순간 사고 싶게 만드는 카피.
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
                콘텐츠 제작 상담 →
              </Link>
              <a
                href="#types"
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
              좋은 콘텐츠 하나가 광고 100개를 이깁니다.
            </p>
            <p className="text-lg text-white/45 leading-[1.9]">
              ADGRIT의 콘텐츠 제작은 단순히 예쁜 것을 만드는 게 아닙니다.
              클릭율·전환율·공유율 — 숫자로 검증된 크리에이티브를 만듭니다.
              기획부터 납품까지 브랜드의 핵심 메시지를 가장 효과적인 형태로 구현합니다.
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

        {/* ── 콘텐츠 유형 ──────────────────────────────── */}
        <section
          id="types"
          className="px-6 sm:px-14 lg:px-24 py-24 border-t border-white/[0.07]"
          ref={typesSection.ref}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={typesSection.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-12 text-center"
          >
            <span className="text-[#2563EB] text-sm font-semibold tracking-[0.2em] uppercase">
              What We Create
            </span>
            <h2
              className="mt-3 font-extrabold text-white leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
            >
              제작 가능한 콘텐츠 유형
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {CONTENT_TYPES.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 28 }}
                animate={typesSection.inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className="border border-white/[0.08] rounded-2xl p-6 bg-white/[0.03] hover:bg-white/[0.06] hover:border-[#2563EB]/30 transition-all"
              >
                <div className="text-3xl mb-4">{c.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{c.desc}</p>
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
              콘텐츠 제작 후 달라지는 것들
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
              콘텐츠 제작 4단계
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
              Create With Us
            </p>
            <h2
              className="font-extrabold text-white leading-[1.2]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              브랜드 이야기를 담을
              <br />
              콘텐츠가 필요하신가요?
            </h2>
            <p className="mt-6 text-white/45 text-lg leading-relaxed">
              레퍼런스 하나만 보내주세요. 원하는 방향과 예산에 맞는
              최적의 제작 플랜을 바로 제안해드립니다.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-10 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold px-10 py-5 rounded-xl text-lg transition-colors"
            >
              콘텐츠 제작 상담 신청 →
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
