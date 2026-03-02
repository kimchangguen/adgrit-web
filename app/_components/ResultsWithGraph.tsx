"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const STATS = [
  { label: "광고주 평균 ROAS", value: 500, suffix: "%", desc: "업계 평균 대비 3.5배 높은 성과" },
  { label: "누적 광고 집행 금액", value: 470, suffix: "억+", desc: "데이터로 검증된 집행 노하우" },
  { label: "월 구글 애즈 집행 예산", value: 30, suffix: "억", desc: "대규모 예산 운영 최적화" },
];

const CLIENTS = [
  ["SAMSUNG", "LG U+", "SK broadband", "HYUNDAI", "Google"],
  ["NAVER", "kakao", "YouTube", "당근마켓", "KCB"],
];

// 막대 그래프용 높이 비율 (성장 느낌)
const BAR_HEIGHTS = [0.5, 0.7, 0.85, 1];
const BAR_COLORS = [
  "rgb(30, 58, 138)",   // 짙은 파랑
  "rgb(59, 130, 246)",   // 중간 파랑
  "rgb(96, 165, 250)",   // 밝은 파랑
  "rgb(147, 197, 253)",  // 더 밝은 파랑
];

function AnimatedNumber({
  value,
  suffix,
  trigger,
  duration = 1.5,
}: {
  value: number;
  suffix: string;
  trigger: boolean;
  duration?: number;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    const update = (now: number) => {
      const elapsed = (now - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(value * eased));
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, [trigger, value, duration]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export function ResultsWithGraph() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });
  const [barAnimated, setBarAnimated] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const t = setTimeout(() => setBarAnimated(true), 200);
    return () => clearTimeout(t);
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      id="results"
      className="relative z-10 w-full overflow-hidden bg-[#0f172a] py-16 sm:py-20 lg:py-24"
    >
      {/* 배경 패턴: 대각선 파도/곡선 느낌 */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <svg className="h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <path
            d="M0 200 Q300 100 600 150 T1200 100 L1200 800 L0 800 Z"
            fill="url(#wave-grad)"
          />
          <path
            d="M0 500 Q400 400 800 450 T1200 400 L1200 800 L0 800 Z"
            fill="url(#wave-grad)"
            opacity="0.6"
          />
          <path
            d="M1200 0 Q900 80 500 50 T0 120 L0 0 Z"
            fill="url(#wave-grad)"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* 상단: 2단 레이아웃 - 왼쪽 텍스트, 오른쪽 막대 그래프 */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* 왼쪽: 텍스트 블록 */}
          <div className="flex-1 max-w-xl">
            <motion.span
              className="text-xs font-medium uppercase tracking-[0.2em] text-white/90"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.4 }}
            >
              About Us
            </motion.span>
            <motion.h2
              className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              데이터 기반 마케팅,
              <br />
              애드그릿이 앞장섭니다.
            </motion.h2>
            <motion.p
              className="mt-5 text-base leading-relaxed text-white/95 sm:text-lg"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              산업의 마케팅을 넘어,{" "}
              <span className="font-semibold text-sky-300">데이터 기반 혁신</span>으로 나아갑니다.
              첨단 AI 기술과 검증된 전략이 만드는 새로운 성장 패러다임, 애드그릿이 앞장섭니다.
            </motion.p>
            <motion.p
              className="mt-4 flex items-start gap-2 text-sm text-white/85"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <span className="mt-0.5 text-slate-900">●</span>
              <span>모든 광고 집행 내역은 정기 보고서에서 투명하게 확인하실 수 있습니다.</span>
            </motion.p>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-white hover:text-white/90 transition-colors"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white/80 hover:border-white transition-colors">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <span className="text-sm font-semibold">마케팅 소개 바로가기</span>
              </Link>
            </motion.div>
          </div>

          {/* 오른쪽: 막대 그래프 */}
          <motion.div
            className="flex flex-1 flex-col items-center justify-center min-h-[280px] lg:min-h-[320px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="flex items-end justify-center gap-4 sm:gap-6 h-56 sm:h-64">
              {BAR_HEIGHTS.map((ratio, i) => (
                <motion.div
                  key={i}
                  className="w-12 sm:w-14 rounded-t-lg min-h-[8px]"
                  style={{
                    backgroundColor: BAR_COLORS[i],
                    height: barAnimated ? `${ratio * 100}%` : "8px",
                  }}
                  initial={{ height: "8px" }}
                  animate={barAnimated ? { height: `${ratio * 100}%` } : { height: "8px" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              ))}
            </div>
            <motion.div
              className="mt-6 rounded-lg bg-white px-8 py-3 shadow-lg"
              initial={{ opacity: 0, y: 4 }}
              animate={barAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <span className="text-sm font-bold text-slate-800">ROAS</span>
            </motion.div>
          </motion.div>
        </div>

        {/* 가운데: 3개 통계 */}
        <motion.div
          className="mt-16 sm:mt-20 pt-12 border-t border-white/10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
            {STATS.map((s, i) => (
              <div key={s.label} className="text-center">
                <p className="text-sm text-sky-300/90">{s.label}</p>
                <p className="mt-2 text-3xl font-black text-white sm:text-4xl">
                  <AnimatedNumber
                    value={s.value}
                    suffix={s.suffix}
                    trigger={isInView}
                    duration={1.8}
                  />
                </p>
                <p className="mt-1 text-xs text-white/80">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 하단: 제휴사 */}
        <motion.div
          className="mt-16 sm:mt-20 pt-12 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p className="mb-6 text-center text-base font-semibold text-sky-400">제휴사</p>
          <div className="flex flex-col gap-6">
            {CLIENTS.map((row, ri) => (
              <div
                key={ri}
                className="flex flex-wrap items-center justify-center gap-8 sm:gap-12"
              >
                {row.map((name) => (
                  <span
                    key={name}
                    className="text-sm font-medium text-white/80 sm:text-base"
                  >
                    {name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
