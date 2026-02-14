"use client";

import { motion, useInView, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const MILESTONES = [
  { year: "2019", text: "디지털 마케팅 전문팀 구성", x: 20, y: 275, highlight: false },
  { year: "2021", text: "데이터 기반 광고 전략 체계화", x: 120, y: 200, highlight: false },
  { year: "2022", text: "광고주 평균 ROAS 500% 달성", x: 200, y: 100, highlight: true },
  { year: "2023", text: "고객 유지율 95% 돌파", x: 280, y: 65, highlight: false },
  { year: "2024", text: "통합 마케팅 솔루션 확대", x: 350, y: 25, highlight: false },
];

const PATH_D =
  "M 20 275 C 80 260, 120 200, 160 150 C 200 100, 260 80, 320 50 C 350 35, 370 25, 380 15";

export function ResultsWithGraph() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const hasTriggered = useRef(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (hasTriggered.current) return;
    if (latest > 0.18) {
      hasTriggered.current = true;
      setRevealed(true);
    }
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (hasTriggered.current) return;
      if (scrollYProgress.get() > 0.18) {
        hasTriggered.current = true;
        setRevealed(true);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [scrollYProgress]);

  const isInView = useInView(graphRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      id="results"
      className="relative z-10 min-h-[200vh] w-full"
      style={{
        background:
          "linear-gradient(180deg, #0f172a 0%, #1e3a8a 20%, #1e40af 40%, #1e3a5f 100%)",
      }}
    >
      {/* 알록달록 오버레이 */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 30%, rgba(139,92,246,0.3) 0%, transparent 50%), radial-gradient(ellipse 60% 50% at 80% 60%, rgba(6,182,212,0.25) 0%, transparent 45%)",
        }}
      />

      {/* 스크롤 시 고정되는 콘텐츠 영역 */}
      <div className="sticky top-0 flex min-h-screen items-center justify-center px-4 py-16">
        <div className="relative w-full max-w-[1300px] aspect-[13/15] min-h-[400px] max-h-[90vh]">
        {/* 흰색 블록 (초기 상태) */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-white shadow-2xl w-full h-full"
          initial={false}
          animate={{
            opacity: revealed ? 0 : 1,
            scale: revealed ? 0.98 : 1,
          }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* 파란 블록 + 콘텐츠 (쨘 등장) */}
        <motion.div
          className="absolute inset-0 overflow-hidden rounded-2xl shadow-2xl"
          style={{
            background:
              "linear-gradient(165deg, #1e40af 0%, #1e3a8a 25%, #1e40af 50%, #2563eb 75%, #3b82f6 100%)",
          }}
          initial={false}
          animate={{
            opacity: revealed ? 1 : 0,
            scale: revealed ? 1 : 0.96,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {revealed && (
            <motion.div
              className="flex h-full flex-col p-8 sm:p-12 lg:p-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              <div className="flex flex-1 flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
                {/* 왼쪽: VERIFIED AUTHORITY + 타이틀 + 본문 */}
                <div className="shrink-0 lg:w-[48%]">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-sky-400" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
                      Verified Authority
                    </span>
                  </div>
                  <h2 className="mt-4 text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
                    2023 Google Korea
                    <br />
                    우수 캠페인 TOP 100
                  </h2>
                  <p className="mt-5 text-sm leading-relaxed text-white/90 sm:text-base">
                    Google Korea가 직접 선정한 우수 캠페인 TOP 100에 이름을 올렸습니다. 단순한 광고 노출이나 클릭수가 아닌, 실제 비즈니스 성장과 ROI 개선이라는 명확한 성과를 인정받았습니다. 이는 데이터 기반의 정밀한 전략과 지속적인 최적화가 만들어낸 결과입니다.
                  </p>
                </div>

                {/* 오른쪽: 그래프 + Verified by Google Korea 영역 */}
                <div className="relative flex flex-1 flex-col min-h-[320px] lg:min-h-[400px]">
                  <div ref={graphRef} className="flex-1 min-h-[240px]">
                  <svg
                    viewBox="0 0 400 300"
                    className="h-full w-full max-w-[480px] lg:max-w-[560px]"
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
                        isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0.6 }
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
                            fill={m.highlight ? "#fbbf24" : "white"}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                            transition={{ delay, duration: 0.35, ease: "easeOut" }}
                          />
                          {m.highlight && (
                            <motion.circle
                              cx={x}
                              cy={y}
                              r={14}
                              fill="none"
                              stroke="#fbbf24"
                              strokeWidth="1.5"
                              opacity="0.6"
                              initial={{ scale: 0, opacity: 0 }}
                              animate={isInView ? { scale: 1, opacity: 0.6 } : { scale: 0, opacity: 0 }}
                              transition={{ delay: delay + 0.15, duration: 0.4, ease: "easeOut" }}
                            />
                          )}
                          <motion.text
                            x={x}
                            y={y + 22}
                            textAnchor="middle"
                            fill="rgba(255,255,255,0.95)"
                            fontSize={10}
                            fontWeight={600}
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: delay + 0.08, duration: 0.3 }}
                          >
                            {m.year}
                          </motion.text>
                          <motion.text
                            x={x}
                            y={y + 36}
                            textAnchor="middle"
                            fill={m.highlight ? "#fbbf24" : "rgba(255,255,255,0.85)"}
                            fontSize={9}
                            fontWeight={500}
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: delay + 0.12, duration: 0.3 }}
                          >
                            {m.text}
                          </motion.text>
                        </g>
                      );
                    })}
                    <motion.g
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ delay: 1.2, duration: 0.45 }}
                    >
                      <text
                        x={370}
                        y={35}
                        textAnchor="end"
                        fill="rgba(255,255,255,0.95)"
                        fontSize={12}
                        fontWeight={600}
                      >
                        광고주 평균 ROAS
                      </text>
                      <text
                        x={370}
                        y={62}
                        textAnchor="end"
                        fill="#fbbf24"
                        fontSize={24}
                        fontWeight={900}
                      >
                        500%
                      </text>
                      <circle cx={358} cy={48} r={12} fill="#fbbf24" opacity="0.3" />
                      <circle cx={358} cy={48} r={6} fill="#fbbf24" />
                    </motion.g>
                  </svg>
                  </div>
                  <div className="mt-4 flex flex-col items-center gap-2 lg:items-end">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/80">Campaign Performance</p>
                    <p className="text-sm font-bold text-white">Verified by Google Korea</p>
                    <span className="mt-2 inline-block rounded-lg bg-blue-500 px-5 py-2 text-sm font-bold text-white">
                      OFFICIAL PARTNER
                    </span>
                  </div>
                </div>
              </div>

              {/* 하단 KPI 3개 */}
              <motion.div
                className="mt-8 grid grid-cols-1 gap-6 border-t border-white/20 pt-8 sm:grid-cols-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="text-center">
                  <p className="text-xs text-white/70">광고주 평균 ROAS</p>
                  <p className="mt-1 text-2xl font-black text-white sm:text-3xl">500%</p>
                  <p className="mt-1 text-xs text-white/80">업계 평균 대비 3.5배 높은 성과</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-white/70">누적 광고 집행 금액</p>
                  <p className="mt-1 text-2xl font-black text-white sm:text-3xl">470억+</p>
                  <p className="mt-1 text-xs text-white/80">데이터로 검증된 집행 노하우</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-white/70">월 구글 애즈 집행 예산</p>
                  <p className="mt-1 text-2xl font-black text-white sm:text-3xl">30억</p>
                  <p className="mt-1 text-xs text-white/80">대규모 예산 운영 최적화</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
        </div>
      </div>
    </section>
  );
}
