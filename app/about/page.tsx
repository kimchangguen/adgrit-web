"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
  type UseInViewOptions,
} from "framer-motion";
import { SiteHeader } from "../_components/SiteHeader";
import { Footer } from "../_components/Footer";

/* ─── 공통 설정 ──────────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1] as const;

function useReveal(margin: UseInViewOptions["margin"] = "-60px") {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin });
  return { ref, inView };
}

/* ─── 번호 섹션 데이터 (영상 기반, ADGRIT으로 대체) ────── */
const SECTIONS = [
  {
    num: "01",
    en: "For your innovative growth",
    headline: "ADGRIT에게 가장 중요한 성장은\n고객의 성장입니다.",
    body: "ADGRIT은 구성원과 회사, 클라이언트의 동반 성장을 지향하며, 여러 가지 방식으로 성장을 실현하고 있습니다. 매년 2배씩 성장하는 경고 취급고와 다양한 산업군별 탑 티어 클라이언트 레퍼런스는 ADGRIT과 구성원들이 만들어낸 성장의 결과라 할 수 있습니다.",
    bullets: null,
  },
  {
    num: "02",
    en: "For your infinite challenge",
    headline: "ADGRIT은 기술을 기반으로\n디지털 마케팅 시장을 이끌어갑니다.",
    body: "앞으로도 폭발적으로 확대될 디지털 마케팅 시장의 핵심은 바로 기술과 데이터에 있습니다. ADGRIT은 디지털 마케팅 시장을 혁신하고 고객을 성공으로 이끈다는 미션 아래, 기술과 데이터 기반의 마케팅 솔루션을 제공하여 여러 성공 사례를 만들어가고 있습니다.",
    bullets: null,
  },
  {
    num: "03",
    en: "For your certain performance",
    headline: "ADGRIT은 꾸준히 그리고\n폭발적으로 성장합니다.",
    body: null,
    bullets: [
      "누적투자유치금액 310억원",
      "중소기업벤처부 선정 예비유니콘",
      "연 광고 취급고 3500억 이상",
      "ADGRIT의 잠재력과 혁신적인 성장은 대외적으로도 인정받고 있습니다.",
    ],
  },
] as const;

/* ─── DATA / GLOBAL / GROWTH ────────────────────────── */
const GRID_ITEMS = [
  {
    key: "DATA",
    subtitle: "AI Marketing Company",
    body: "ADGRIT은 자동화 및 빅데이터 분석이 가능한 AE뿐 아니라 국내 대행사 중 최고 수준의 데이터·개발 조직을 갖고 있습니다. AI 기술을 활용한 차별화, 시각화된 데이터 분석 결과와 축적된 노하우를 바탕으로 최고의 성과를 보장할 수 있는 최적의 성장 환경을 제공합니다.",
  },
  {
    key: "GLOBAL",
    subtitle: "세계로 뻗어 나갑니다",
    body: "한국을 넘어 글로벌 시장까지 비즈니스 영역을 확장하고 있는 ADGRIT! 해외 시장에 진출하는 국내 브랜드부터 한국 시장에 진입하는 글로벌 브랜드까지, 별도 글로벌팀을 구축하여 폭넓은 영역의 글로벌 캠페인을 전문적으로 담당하고 있습니다.",
  },
  {
    key: "GROWTH",
    subtitle: "매년 2배 이상의 성장를 달성",
    body: "ADGRIT은 각 분야의 뛰어난 전문가들과 함께 매년 약 2배씩 취급고가 성장하는 성과를 이루어내고 있습니다. 매년 폭발적인 성장을 이루어내는 ADGRIT과 함께 새로운 성공을 시작해보세요.",
  },
] as const;

/* ─── 번호 섹션 컴포넌트 ─────────────────────────────── */
function NumberedSection({ item, reverse = false }: { item: typeof SECTIONS[number]; reverse?: boolean }) {
  const ref = useRef<HTMLElement>(null);

  /* 섹션이 뷰포트 하단에 진입(start end) → 중앙 정렬(center center) 구간을 0→1로 매핑 */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  /* 숫자: reverse면 오른쪽 끝, 아니면 왼쪽 끝에서 출발 */
  const numXRaw  = useTransform(scrollYProgress, [0, 1], [reverse ? 500 : -500, 0]);
  /* 글: 숫자 반대편에서 출발 */
  const textXRaw = useTransform(scrollYProgress, [0, 1], [reverse ? -500 : 500, 0]);
  /* 페이드인: 진입 직후 0 → 0.4 구간에서 불투명 */
  const opacityRaw = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  /* 쫀득한 스프링 — stiffness 낮을수록 느리고 말랑, damping 낮을수록 통통 */
  const SP = { stiffness: 70, damping: 20, mass: 1.2 } as const;
  const numX   = useSpring(numXRaw,   SP);
  const textX  = useSpring(textXRaw,  SP);
  const opacity = useSpring(opacityRaw, { stiffness: 70, damping: 20 });

  return (
    <section
      ref={ref}
      className={`overflow-hidden flex flex-col ${reverse ? "sm:flex-row-reverse" : "sm:flex-row"} gap-6 sm:gap-10 lg:gap-16 px-6 sm:px-14 lg:px-24 py-24 sm:py-32 border-t border-white/[0.07]`}
    >
      {/* 숫자: 한쪽 끝에서 중앙으로 */}
      <motion.div style={{ x: numX, opacity }} className="shrink-0 flex items-start sm:pt-2">
        <span
          className="font-black text-[#2563EB] leading-none"
          style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
        >
          {item.num}
        </span>
      </motion.div>

      {/* 구분 블루 점 (데스크톱만) — 중앙에서 페이드인 */}
      <motion.div style={{ opacity }} className="hidden sm:flex items-start pt-7">
        <span className="w-3 h-3 rounded-sm bg-[#2563EB] shrink-0 mt-2" />
      </motion.div>

      {/* 글: 반대편 끝에서 중앙으로 */}
      <motion.div style={{ x: textX, opacity }} className="flex-1 space-y-6 sm:pt-2">
        <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-white/30 uppercase">
          {item.en}
        </p>

        <h2>
          {item.headline.split("\n").map((line, i) => (
            <span
              key={i}
              className="block font-extrabold text-white leading-[1.15] tracking-tight"
              style={{ fontSize: "clamp(1.4rem, 2.6vw, 2.2rem)" }}
            >
              {line}
            </span>
          ))}
        </h2>

        {item.body ? (
          <p className="text-sm text-white/45 leading-[1.9] max-w-xl">
            {item.body}
          </p>
        ) : (
          <ul className="space-y-2.5">
            {item.bullets?.map((b, i) => (
              <li key={i} className="text-sm text-white/45 leading-[1.8]">
                — {b}
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </section>
  );
}

/* ─── 페이지 ─────────────────────────────────────────── */
export default function AboutPage() {
  const { ref: introRef, inView: introInView } = useReveal("-40px");
  const { ref: closingRef, inView: closingInView } = useReveal("-60px");

  return (
    <div className="bg-black text-white min-h-screen">
      <SiteHeader />

      <main className="pt-16">

        {/* ══ 히어로: 거대 ADGRIT 텍스트 ════════════════════ */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: EASE }}
          >
            {/* 거대 브랜드명 */}
            <h1
              className="font-black leading-none tracking-tighter select-none"
              style={{ fontSize: "clamp(3.5rem, 14vw, 12rem)" }}
            >
              <span className="text-[#2563EB]">AD</span>
              <span className="text-white">GRIT</span>
            </h1>

            {/* 태그라인 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
              className="mt-10"
            >
              <span className="inline-block border border-white/15 text-white/40 text-xs sm:text-sm px-6 py-3 rounded-full tracking-widest uppercase">
                AD(성과, 광고, 도전) + GRIT(투지, 불굴의 의지)
              </span>
            </motion.div>
          </motion.div>

          {/* 스크롤 유도 화살표 */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4, ease: EASE }}
          >
            <span className="text-[0.65rem] tracking-[0.22em] text-white/25 uppercase">scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent"
            />
          </motion.div>
        </section>

        {/* ══ 소개 문단 ════════════════════════════════════ */}
        <section className="px-6 sm:px-14 lg:px-24 py-28 sm:py-36 border-t border-white/[0.07]">
          <motion.div
            ref={introRef}
            initial={{ opacity: 0, y: 52 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease: EASE }}
            className="max-w-3xl mx-auto text-center space-y-5"
          >
            <p
              className="font-bold text-white leading-[1.6]"
              style={{ fontSize: "clamp(1rem, 1.9vw, 1.35rem)" }}
            >
              ADGRIT은 혁신적인 성과를 만드는 AI 마케팅 컴퍼니입니다.
            </p>
            <p className="text-sm sm:text-base text-white/45 leading-[1.9]">
              분석, 전략, 운영, 크리에이티브, 브랜딩, 기술 등 각 분야에 전문화된 구성원을 중심으로
              <br className="hidden sm:block" />
              디지털 마케팅에 특화된 고객 맞춤형 퍼포먼스를 제공합니다.
            </p>
          </motion.div>
        </section>

        {/* ══ 01 / 02 / 03 번호 섹션 ══════════════════════ */}
        {SECTIONS.map((item) => (
          <NumberedSection key={item.num} item={item} reverse={item.num === "02"} />
        ))}

        {/* ══ 클로징 문장 (영상의 재등장 문구) ══════════════ */}
        <section
          ref={closingRef}
          className="px-6 sm:px-14 lg:px-24 py-32 sm:py-44 border-t border-white/[0.07]"
        >
          {[
            { text: "ADGRIT은", delay: 0 },
            { text: "기술과 데이터 기반으로", delay: 0.14 },
            { text: "디지털 마케팅 시장을 선도하고 있습니다.", delay: 0.28 },
          ].map(({ text, delay }) => (
            <motion.p
              key={text}
              initial={{ opacity: 0, y: 52 }}
              animate={closingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, delay, ease: EASE }}
              className="font-extrabold text-white leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 3rem)" }}
            >
              {text}
            </motion.p>
          ))}
        </section>

        {/* ══ DATA / GLOBAL / GROWTH 그리드 ══════════════ */}
        <section className="px-6 sm:px-14 lg:px-24 pb-32 sm:pb-44 border-t border-white/[0.07] pt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
            {GRID_ITEMS.map(({ key, subtitle, body }, i) => {
              const { ref, inView } = useReveal(); // eslint-disable-line react-hooks/rules-of-hooks
              return (
                <motion.div
                  key={key}
                  ref={ref}
                  initial={{ opacity: 0, y: 56 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.92, delay: i * 0.13, ease: EASE }}
                  className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-10 flex flex-col gap-7 hover:border-[#2563EB]/25 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#2563EB] shrink-0" />
                    <h3 className="text-xl font-black tracking-[0.08em] text-white">
                      {key}
                    </h3>
                  </div>
                  <div className="h-px bg-white/[0.1]" />
                  <p className="text-sm font-semibold text-[#2563EB] leading-snug">
                    {subtitle}
                  </p>
                  <p className="text-sm text-white/45 leading-[1.9] flex-1">
                    {body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
