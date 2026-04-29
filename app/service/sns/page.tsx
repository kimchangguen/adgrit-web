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

const CHANNELS = [
  { name: "Instagram", icon: "📸", desc: "피드·릴스·스토리를 전략적으로 운영해 팔로워를 잠재 고객으로 전환합니다." },
  { name: "YouTube", icon: "▶️", desc: "롱폼 영상과 쇼츠로 브랜드 전문성을 쌓고 구독자 기반 팬덤을 구축합니다." },
  { name: "TikTok", icon: "🎵", desc: "트렌드 기반 숏폼 콘텐츠로 바이럴 확산과 신규 고객 유입을 가속합니다." },
  { name: "Naver Blog", icon: "📝", desc: "SEO 최적화된 블로그 포스팅으로 네이버 검색 유입과 브랜드 신뢰도를 높입니다." },
  { name: "KakaoTalk", icon: "💬", desc: "카카오 채널 운영으로 기존 고객과의 관계를 유지하고 재구매율을 높입니다." },
  { name: "Facebook", icon: "👥", desc: "광고와 오가닉 콘텐츠를 통합 운영해 타깃 세그먼트에 정확히 도달합니다." },
];

const FEATURES = [
  {
    icon: "📅",
    title: "콘텐츠 캘린더",
    desc: "월별 콘텐츠 계획을 사전에 수립해 일관된 브랜드 보이스를 유지합니다.",
  },
  {
    icon: "🤝",
    title: "인플루언서 협업",
    desc: "브랜드 핏에 맞는 인플루언서를 발굴·섭외하고 협업 성과를 관리합니다.",
  },
  {
    icon: "💬",
    title: "커뮤니티 관리",
    desc: "댓글·DM 대응을 통해 팬과의 관계를 강화하고 부정 이슈를 신속히 대응합니다.",
  },
  {
    icon: "📊",
    title: "데이터 분석",
    desc: "도달률·참여율·전환율을 주간 단위로 분석하고 콘텐츠 전략을 즉시 개선합니다.",
  },
];

const OUTCOMES = [
  { title: "팔로워 · 구독자 성장", desc: "타깃 팬덤을 꾸준히 키워 브랜드의 유기적 확산 채널을 만듭니다." },
  { title: "브랜드 인지도 향상", desc: "일관된 콘텐츠로 잠재 고객의 머릿속에 브랜드를 각인시킵니다." },
  { title: "인게이지먼트 증대", desc: "좋아요·댓글·저장·공유 — 알고리즘이 좋아하는 활성 채널로 성장합니다." },
];

const PROCESS = [
  { num: "01", title: "채널 진단", desc: "현재 채널 현황, 팔로워 분석, 경쟁사 벤치마킹으로 기회를 발굴합니다." },
  { num: "02", title: "전략 수립", desc: "채널별 목표와 콘텐츠 방향, 운영 주기를 담은 마스터플랜을 수립합니다." },
  { num: "03", title: "콘텐츠 제작", desc: "기획부터 촬영·편집·카피라이팅까지 원스톱으로 제작합니다." },
  { num: "04", title: "운영 · 최적화", desc: "게시·모니터링·데이터 분석·개선을 반복하며 성과를 극대화합니다." },
];

export default function SnsPage() {
  const intro = useReveal();
  const channelsSection = useReveal();
  const featuresSection = useReveal();
  const outcomesSection = useReveal();
  const processSection = useReveal();
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
              Service · SNS채널관리
            </span>

            <h1
              className="font-black leading-none tracking-tighter"
              style={{ fontSize: "clamp(2.6rem, 10vw, 9rem)" }}
            >
              <span className="text-slate-200">SNS</span>
              <span className="text-white"> 채널관리</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              className="mt-6 text-lg sm:text-2xl text-white/60 font-medium max-w-xl mx-auto leading-relaxed"
            >
              팔로워가 고객이 되는 SNS 채널.
              <br />
              전략 없이 올리면 알고리즘이 외면합니다.
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
                SNS 운영 상담 →
              </Link>
              <a
                href="#channels"
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
              SNS는 브랜드의 첫인상이자 마지막 설득입니다.
            </p>
            <p className="text-lg text-white/45 leading-[1.9]">
              ADGRIT의 SNS 채널관리 서비스는 인스타그램·유튜브·틱톡·블로그를 통합 전략으로 운영합니다.
              알고리즘 변화에 선제적으로 대응하고, 브랜드 팬덤을 꾸준히 키워
              광고 없이도 전환되는 채널을 만들어드립니다.
            </p>
          </motion.div>
        </section>

        {/* ── 채널 ─────────────────────────────────────── */}
        <section
          id="channels"
          className="px-6 sm:px-14 lg:px-24 py-24 border-t border-white/[0.07]"
          ref={channelsSection.ref}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={channelsSection.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-12 text-center"
          >
            <span className="text-slate-200 text-sm font-semibold tracking-[0.2em] uppercase">
              Channels We Manage
            </span>
            <h2
              className="mt-3 font-extrabold text-white leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
            >
              운영 채널 전 범위 커버
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {CHANNELS.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 28 }}
                animate={channelsSection.inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className="border border-white/[0.08] rounded-2xl p-6 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{c.icon}</span>
                  <h3 className="text-lg font-bold text-white">{c.name}</h3>
                </div>
                <p className="text-white/45 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── 운영 서비스 ──────────────────────────────── */}
        <section
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
              What We Do
            </span>
            <h2
              className="mt-3 font-extrabold text-white leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
            >
              SNS 채널관리 서비스 구성
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 28 }}
                animate={featuresSection.inView ? { opacity: 1, y: 0 } : {}}
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
          ref={outcomesSection.ref}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={outcomesSection.inView ? { opacity: 1, y: 0 } : {}}
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
              SNS 채널 운영 후 달라지는 것들
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {OUTCOMES.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 28 }}
                animate={outcomesSection.inView ? { opacity: 1, y: 0 } : {}}
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
              SNS 채널 운영 4단계
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
              Grow Your Audience
            </p>
            <h2
              className="font-extrabold text-white leading-[1.2]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              SNS가 영업사원이 되면
              <br />
              광고비가 줄어듭니다.
            </h2>
            <p className="mt-6 text-white/45 text-lg leading-relaxed">
              지금 귀사의 SNS 채널을 무료로 진단해드립니다.
              어디가 문제인지, 어떻게 바꾸면 되는지 명확하게 알려드립니다.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-10 bg-white hover:bg-slate-200 text-[#222222] font-black px-10 py-5 rounded-xl text-lg transition-colors"
            >
              SNS 운영 상담 신청 →
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
