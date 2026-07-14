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
import { SectionBackdrop, type SectionVariant } from "../_components/backgrounds/SectionBackdrop";

/* ─── 공통 설정 ──────────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1] as const;

function useReveal(margin: UseInViewOptions["margin"] = "-60px") {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin });
  return { ref, inView };
}

/* ─── 번호 섹션 데이터 ───────────────────────────────── */
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

/* ─── 번호 섹션 컴포넌트 ─────────────────────────────── */
function NumberedSection({
  item,
  reverse = false,
  variant,
}: {
  item: typeof SECTIONS[number];
  reverse?: boolean;
  variant: SectionVariant;
}) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const numXRaw   = useTransform(scrollYProgress, [0, 1], [reverse ? 500 : -500, 0]);
  const textXRaw  = useTransform(scrollYProgress, [0, 1], [reverse ? -500 : 500, 0]);
  const opacityRaw = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  const SP = { stiffness: 70, damping: 20, mass: 1.2 } as const;
  const numX    = useSpring(numXRaw,    SP);
  const textX   = useSpring(textXRaw,   SP);
  const opacity = useSpring(opacityRaw, { stiffness: 70, damping: 20 });

  return (
    <section
      ref={ref}
      className="ig-section overflow-hidden"
    >
      <SectionBackdrop variant={variant} />
      <div
        className={`ig-content flex flex-col ${reverse ? "sm:flex-row-reverse" : "sm:flex-row"} sm:justify-center sm:items-start gap-6 sm:gap-20 lg:gap-28 px-6 sm:px-14 lg:px-24 py-24 sm:py-32`}
      >
        <motion.div style={{ x: numX, opacity }} className="shrink-0 flex items-start sm:pt-2">
          <span
            className="ig-gradient-text font-black leading-none"
            style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
          >
            {item.num}
          </span>
        </motion.div>

        <motion.div style={{ x: textX, opacity }} className="min-w-0 sm:max-w-[420px] space-y-6 sm:pt-2">
          <p className="text-[1rem] font-semibold tracking-[0.22em] text-white/40 uppercase">
            {item.en}
          </p>

          <h2>
            {item.headline.split("\n").map((line, i) => (
              <span
                key={i}
                className="block font-extrabold text-white leading-[1.15] tracking-tight"
                style={{ fontSize: "clamp(2.1rem, 3.9vw, 3.3rem)" }}
              >
                {line}
              </span>
            ))}
          </h2>

          {item.body ? (
            <p className="text-lg text-white/60 leading-[1.9] max-w-xl">
              {item.body}
            </p>
          ) : (
            <ul className="space-y-3">
              {item.bullets?.map((b, i) => (
                <li key={i} className="text-lg text-white/60 leading-[1.8]">
                  — {b}
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── 페이지 ─────────────────────────────────────────── */
export default function AboutPage() {
  const { ref: introRef, inView: introInView } = useReveal("-40px");

  const NUMBERED_VARIANTS: SectionVariant[] = ["s3", "s6", "s8"];

  return (
    <div className="text-white min-h-screen">
      <SiteHeader />

      <main>

        {/* ══ 히어로: 거대 ADGRIT 텍스트 ════════════════════ */}
        <section className="ig-section relative min-h-screen flex flex-col items-center justify-center px-6">
          <SectionBackdrop variant="s2" />
          <motion.div
            className="ig-content text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: EASE }}
          >
            <h1
              className="font-black leading-none tracking-tighter select-none"
              style={{ fontSize: "clamp(3.5rem, 14vw, 12rem)" }}
            >
              <span className="text-white">AD</span>
              <span className="ig-gradient-text">GRIT</span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
              className="mt-10"
            >
              <span className="ig-btn-glass inline-block text-sm sm:text-base px-6 py-3 rounded-full tracking-widest uppercase">
                AD(성과, 광고, 도전) + GRIT(투지, 불굴의 의지)
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="ig-content absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4, ease: EASE }}
          >
            <span className="text-[0.975rem] tracking-[0.22em] text-white/40 uppercase">scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
            />
          </motion.div>
        </section>

        {/* ══ 소개 문단 ════════════════════════════════════ */}
        <section className="ig-section px-6 sm:px-14 lg:px-24 py-28 sm:py-36">
          <SectionBackdrop variant="s7b" />
          <motion.div
            ref={introRef}
            initial={{ opacity: 0, y: 52 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease: EASE }}
            className="ig-content max-w-3xl mx-auto text-center space-y-5"
          >
            <p
              className="font-bold text-white leading-[1.6]"
              style={{ fontSize: "clamp(1.5rem, 2.85vw, 2rem)" }}
            >
              ADGRIT은 혁신적인 성과를 만드는 <span className="ig-gradient-text">AI 마케팅 컴퍼니</span>입니다.
            </p>
            <p className="text-lg sm:text-xl text-white/60 leading-[1.9]">
              분석, 전략, 운영, 크리에이티브, 브랜딩, 기술 등 각 분야에 전문화된 구성원을 중심으로
              <br className="hidden sm:block" />
              디지털 마케팅에 특화된 고객 맞춤형 퍼포먼스를 제공합니다.
            </p>
          </motion.div>
        </section>

        {/* ══ 01 / 02 / 03 번호 섹션 ══════════════════════ */}
        {SECTIONS.map((item, i) => (
          <NumberedSection
            key={item.num}
            item={item}
            reverse={item.num === "02"}
            variant={NUMBERED_VARIANTS[i]}
          />
        ))}

      </main>

      <Footer />
    </div>
  );
}
