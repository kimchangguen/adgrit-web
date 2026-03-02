"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const MILESTONES = [
  { year: "2019", text: "디지털 마케팅 전문팀 구성", x: 30, y: 265, highlight: false },
  { year: "2020", text: "데이터 기반 광고 시스템 구축", x: 110, y: 210, highlight: false },
  { year: "2022", text: "AI 마케팅 전략 상용화", x: 190, y: 130, highlight: true },
  { year: "2023", text: "주요 광고주 전략 파트너십 체결", x: 270, y: 70, highlight: false },
  { year: "2024", text: "글로벌 마케팅 확대", x: 355, y: 25, highlight: false },
];

const PATH_D =
  "M 30 265 C 90 250, 130 220, 170 180 C 210 140, 250 100, 300 60 C 330 40, 355 30, 375 20";

const STATS = [
  { label: "광고주 평균 ROAS", value: 500, suffix: "%", desc: "업계 평균 대비 3.5배 높은 성과" },
  { label: "누적 광고 집행 금액", value: 470, suffix: "억+", desc: "데이터로 검증된 집행 노하우" },
  { label: "월 구글 애즈 집행 예산", value: 30, suffix: "억", desc: "대규모 예산 운영 최적화" },
];

const CLIENTS = [
  ["SAMSUNG", "LG U+", "SK broadband", "HYUNDAI", "Google"],
  ["NAVER", "kakao", "YouTube", "당근마켓", "KCB"],
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
  const [revealed, setRevealed] = useState(false);
  const hasTriggered = useRef(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (hasTriggered.current) return;
    if (latest > 0.22) {
      hasTriggered.current = true;
      setRevealed(true);
    }
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (hasTriggered.current) return;
      if (scrollYProgress.get() > 0.22) {
        hasTriggered.current = true;
        setRevealed(true);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [scrollYProgress]);

  const graphAnimate = revealed;

  return (
    <section
      ref={sectionRef}
      id="results"
      className="relative z-10 min-h-[220vh] w-full bg-white"
    >
      <div className="sticky top-0 flex min-h-screen items-center justify-center px-4 py-16">
        <motion.div
          className="absolute inset-0 z-10 bg-white"
          style={{ pointerEvents: revealed ? "none" : "auto" }}
          initial={false}
          animate={{ opacity: revealed ? 0 : 1 }}
          transition={{ duration: 0.25 }}
        />

        <motion.div
          className="relative z-0 overflow-hidden rounded-2xl shadow-2xl w-[1300px] max-w-[95vw] aspect-[13/15]"
          style={{
            background: "linear-gradient(165deg, #0f172a 0%, #1e3a8a 25%, #1e293b 60%, #0f172a 100%)",
          }}
          initial={false}
          animate={{
            opacity: revealed ? 1 : 0,
            scale: revealed ? 1 : 0.92,
          }}
          transition={{
            duration: 0.45,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          {revealed && (
            <div className="flex h-full flex-col">
              {/* 상단: 그래프 + About Us */}
              <div className="flex shrink-0 flex-col gap-6 p-8 sm:p-10 lg:flex-row lg:items-center lg:gap-12 lg:px-12 lg:pt-10">
                <div className="shrink-0 lg:w-[42%]">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500">
                    About Us
                  </span>
                  <h2 className="mt-3 text-xl font-extrabold leading-tight text-white sm:text-2xl lg:text-3xl">
                    데이터 기반 마케팅,
                    <br />
                    애드그릿이 앞장섭니다.
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/90">
                    산업의 마케팅을 넘어, 데이터 기반 혁신으로 나아갑니다.
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">
                    첨단 AI 기술과 검증된 전략이 만드는 새로운 성장 패러다임, 애드그릿이 앞장섭니다.
                  </p>
                  <Link
                    href="/about"
                    className="mt-6 inline-flex items-center gap-3 text-white hover:text-white/90 transition-colors"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white/80 hover:border-white transition-colors">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <span className="text-sm font-semibold">마케팅 소개 바로가기</span>
                  </Link>
                </div>
                <div className="relative flex min-h-[280px] flex-1 items-center justify-center lg:min-h-[320px]">
                  <svg
                    viewBox="0 0 400 300"
                    className="h-full min-h-[220px] w-full"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <motion.path
                      d={PATH_D}
                      fill="none"
                      stroke="rgba(255,255,255,0.9)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0, opacity: 0.6 }}
                      animate={
                        graphAnimate ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0.6 }
                      }
                      transition={{
                        pathLength: { duration: 1.6, ease: [0.22, 1, 0.36, 1] },
                        opacity: { duration: 0.4 },
                      }}
                    />
                    {MILESTONES.map((m, i) => {
                      const x = m.x;
                      const y = m.y;
                      const delay = 0.12 * i + 0.4;
                      return (
                        <g key={m.year}>
                          <motion.circle
                            cx={x}
                            cy={y}
                            r={m.highlight ? 8 : 5}
                            fill={m.highlight ? "#f59e0b" : "white"}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={graphAnimate ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                            transition={{ delay, duration: 0.35, ease: "easeOut" }}
                          />
                          {m.highlight && (
                            <>
                              <motion.circle
                                cx={x}
                                cy={y}
                                r={14}
                                fill="none"
                                stroke="#f59e0b"
                                strokeWidth="1.5"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={graphAnimate ? { scale: 1, opacity: 0.5 } : { scale: 0, opacity: 0 }}
                                transition={{ delay: delay + 0.15, duration: 0.4, ease: "easeOut" }}
                              />
                              <motion.circle
                                cx={x}
                                cy={y}
                                fill="none"
                                stroke="#f59e0b"
                                strokeWidth="1"
                                initial={{ r: 14, opacity: 0 }}
                                animate={
                                  graphAnimate
                                    ? { r: [14, 28, 14], opacity: [0.3, 0, 0.3] }
                                    : { r: 14, opacity: 0 }
                                }
                                transition={{
                                  delay: delay + 0.5,
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeOut",
                                }}
                              />
                            </>
                          )}
                          <motion.text
                            x={x}
                            y={y + 22}
                            textAnchor="middle"
                            fill="rgba(200,200,200,0.95)"
                            fontSize={10}
                            fontWeight={600}
                            initial={{ opacity: 0 }}
                            animate={graphAnimate ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: delay + 0.08, duration: 0.3 }}
                          >
                            {m.year}
                          </motion.text>
                          <motion.text
                            x={x}
                            y={y + 38}
                            textAnchor="middle"
                            fill={m.highlight ? "#f59e0b" : "rgba(255,255,255,0.9)"}
                            fontSize={10}
                            fontWeight={500}
                            initial={{ opacity: 0 }}
                            animate={graphAnimate ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: delay + 0.12, duration: 0.3 }}
                          >
                            {m.text}
                          </motion.text>
                        </g>
                      );
                    })}
                    <motion.g
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={graphAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ delay: 1.2, duration: 0.45 }}
                    >
                      <motion.circle
                        cx={365}
                        cy={40}
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="1"
                        initial={{ r: 18, opacity: 0 }}
                        animate={
                          graphAnimate
                            ? { r: [18, 32, 18], opacity: [0.3, 0, 0.3] }
                            : { r: 18, opacity: 0 }
                        }
                        transition={{
                          delay: 1.8,
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                      />
                      <circle cx={365} cy={40} r={18} fill="#f59e0b" opacity="0.25" />
                      <circle cx={365} cy={40} r={8} fill="#f59e0b" />
                      <text
                        x={342}
                        y={36}
                        textAnchor="end"
                        fill="rgba(200,200,200,0.95)"
                        fontSize={11}
                        fontWeight={600}
                      >
                        광고주 평균 ROAS
                      </text>
                      <text
                        x={342}
                        y={58}
                        textAnchor="end"
                        fill="#f59e0b"
                        fontSize={24}
                        fontWeight={900}
                      >
                        500%
                      </text>
                    </motion.g>
                  </svg>
                </div>
              </div>

              {/* 가운데: 3개 통계 + 숫자 카운팅 */}
              <div className="flex h-[400px] shrink-0 items-center justify-center border-t border-white/10 px-8">
                <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3">
                  {STATS.map((s, i) => (
                    <motion.div
                      key={s.label}
                      className="text-center"
                      initial={{ opacity: 0, y: 16 }}
                      animate={graphAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                      transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
                    >
                      <p className="text-sm text-sky-300/90">{s.label}</p>
                      <p className="mt-2 text-3xl font-black text-white sm:text-4xl">
                        <AnimatedNumber
                          value={s.value}
                          suffix={s.suffix}
                          trigger={graphAnimate}
                          duration={1.8}
                        />
                      </p>
                      <p className="mt-1 text-xs text-white/80">{s.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 하단: 제휴사 */}
              <div className="shrink-0 border-t border-white/10 px-8 py-8 lg:py-10">
                <p className="mb-6 text-center text-base font-semibold text-sky-400">
                  제휴사
                </p>
                <div className="flex flex-col gap-6">
                  {CLIENTS.map((row, ri) => (
                    <motion.div
                      key={ri}
                      className="flex flex-wrap items-center justify-center gap-8 sm:gap-12"
                      initial={{ opacity: 0 }}
                      animate={graphAnimate ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 1.2 + ri * 0.1, duration: 0.4 }}
                    >
                      {row.map((name) => (
                        <span
                          key={name}
                          className="text-sm font-medium text-white/80 sm:text-base"
                        >
                          {name}
                        </span>
                      ))}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
