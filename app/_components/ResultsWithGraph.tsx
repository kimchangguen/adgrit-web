"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { label: "광고주 평균 ROAS", value: 500, suffix: "%", desc: "업계 평균 대비 3.5배 높은 성과" },
  { label: "누적 광고 집행 금액", value: 470, suffix: "억+", desc: "데이터로 검증된 집행 노하우" },
  { label: "월 구글 애즈 집행 예산", value: 30, suffix: "억", desc: "대규모 예산 운영 최적화" },
];

const CLIENTS = [
  ["SAMSUNG", "LG U+", "SK broadband", "HYUNDAI", "Google"],
  ["NAVER", "kakao", "YouTube", "당근마켓", "KCB"],
];

const POINT_COLOR = "#f59e0b";

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

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (hasTriggered.current) return;
      if (latest > 0.2) {
        hasTriggered.current = true;
        setRevealed(true);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section
      ref={sectionRef}
      id="results"
      className="relative z-10 min-h-screen w-full overflow-hidden bg-white py-20 sm:py-24"
    >
      {/* 배경 장식: 곡선 화살표 + 막대 그래프 느낌 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.12]">
        <svg className="absolute -left-20 bottom-0 w-[80%] max-w-[600px] text-slate-400" viewBox="0 0 400 200" fill="none" aria-hidden>
          <path d="M 0 180 Q 120 160, 200 100 T 380 20" stroke="currentColor" strokeWidth="24" strokeLinecap="round" />
        </svg>
        <div className="absolute right-[10%] bottom-[15%] flex gap-2 items-end">
          {[40, 65, 45, 80, 55, 70].map((h, i) => (
            <div key={i} className="w-3 sm:w-4 bg-slate-300 rounded-t" style={{ height: `${h}px` }} />
          ))}
        </div>
        <div className="absolute left-[15%] top-[25%] flex gap-2 items-end">
          {[50, 70, 55, 60, 75].map((h, i) => (
            <div key={i} className="w-3 sm:w-4 bg-slate-300 rounded-t" style={{ height: `${h}px` }} />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* 메인 타이틀 */}
        <motion.h2
          className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          수치로 증명합니다.
        </motion.h2>
        {/* 서브타이틀 */}
        <motion.p
          className="mt-3 text-base text-slate-600 sm:text-lg"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.08 }}
        >
          데이터 기반 마케팅, 애드그릿이 앞장섭니다.
        </motion.p>

        {/* 3개 수치 블록 (표 내용 유지, 포인트 색상 유지) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
            >
              <p className="text-sm font-medium text-slate-600">{s.label}</p>
              <p
                className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3rem]"
                style={{ color: POINT_COLOR }}
              >
                <AnimatedNumber
                  value={s.value}
                  suffix={s.suffix}
                  trigger={revealed}
                  duration={1.6}
                />
              </p>
              <p className="mt-1 text-sm text-slate-500">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 제휴사 (표 내용 유지) */}
        <motion.div
          className="mt-16 sm:mt-20 pt-12 border-t border-slate-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p className="mb-6 text-sm font-semibold uppercase tracking-wider" style={{ color: POINT_COLOR }}>
            제휴사
          </p>
          <div className="flex flex-col gap-4">
            {CLIENTS.map((row, ri) => (
              <div
                key={ri}
                className="flex flex-wrap items-center justify-center gap-6 sm:gap-10"
              >
                {row.map((name) => (
                  <span
                    key={name}
                    className="text-sm font-medium text-slate-600 sm:text-base"
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
