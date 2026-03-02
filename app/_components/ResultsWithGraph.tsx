"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const MILESTONES = [
  { year: "2019", text: "디지털 마케팅 전문팀 구성" },
  { year: "2020", text: "데이터 기반 광고 시스템 구축" },
  { year: "2022", text: "AI 마케팅 전략 상용화" },
  { year: "2023", text: "주요 광고주 전략 파트너십 체결" },
  { year: "2025", text: "글로벌 마케팅 확대" },
];

const BAR_HEIGHTS = [0.55, 0.7, 0.82, 0.92, 1];
const BAR_COLORS = [
  "rgb(30, 58, 138)",
  "rgb(59, 130, 246)",
  "rgb(96, 165, 250)",
  "rgb(147, 197, 253)",
  "rgb(186, 230, 253)",
];

export function ResultsWithGraph() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.15, once: true });
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
      className="relative z-10 w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
          {/* 왼쪽: 텍스트 */}
          <div className="flex-1 max-w-xl">
            <motion.span
              className="text-xs font-medium uppercase tracking-[0.2em] text-black/70"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.4 }}
            >
              About Us
            </motion.span>
            <motion.h2
              className="mt-3 text-2xl font-extrabold leading-tight text-black sm:text-3xl lg:text-4xl"
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
              className="mt-5 text-base leading-relaxed text-black sm:text-lg"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              산업의 마케팅을 넘어, 데이터 기반 혁신으로 나아갑니다.
            </motion.p>
            <motion.p
              className="mt-3 text-base leading-relaxed text-black sm:text-lg"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              첨단 AI 기술과 검증된 전략이 만드는 새로운 성장 패러다임, 애드그릿이 앞장섭니다.
            </motion.p>
          </div>

          {/* 오른쪽: 큰 그래프 (막대 + 막대마다 연도·설명 + ROAS 500% 표시) */}
          <motion.div
            className="flex-1 min-w-0 rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8 lg:p-10"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* 그래프 상단: 광고주 평균 ROAS 500% */}
            <div className="mb-6 flex flex-wrap items-baseline justify-between gap-4">
              <span className="text-sm font-medium text-slate-600">광고주 평균 ROAS</span>
              <span className="text-2xl font-bold tabular-nums text-sky-600 sm:text-3xl">
                500%
              </span>
            </div>

            {/* 막대 그래프 (크게) + 각 막대 아래 연도·설명 */}
            <div className="flex gap-3 sm:gap-4 lg:gap-5">
              {MILESTONES.map((item, i) => (
                <motion.div
                  key={item.year}
                  className="flex flex-1 min-w-0 flex-col items-center"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3, once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
                >
                  {/* 막대 영역: 고정 높이, 막대가 아래에서 올라옴 */}
                  <div className="flex h-56 sm:h-64 lg:h-72 w-full flex-col justify-end">
                    <motion.div
                      className="w-full max-w-[4rem] sm:max-w-[4.5rem] mx-auto rounded-t-lg"
                      style={{ backgroundColor: BAR_COLORS[i] }}
                      initial={{ height: "0%" }}
                      animate={
                        barAnimated
                          ? { height: `${BAR_HEIGHTS[i] * 100}%` }
                          : { height: "0%" }
                      }
                      transition={{
                        duration: 0.8,
                        delay: 0.2 + i * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </div>
                  <div className="mt-4 w-full min-w-0 text-center">
                    <p className="text-sm font-semibold text-slate-700">{item.year}</p>
                    <p className="mt-1 text-xs leading-snug text-slate-600 line-clamp-2 sm:line-clamp-3">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="rounded-lg border border-slate-200 bg-white mt-6 py-2.5 text-center">
              <span className="text-sm font-bold text-slate-800">ROAS</span>
            </div>
          </motion.div>
        </div>

        {/* 하단: CTA 버튼 */}
        <motion.div
          className="mt-12 flex flex-col items-end gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Link
            href="/about"
            className="w-full sm:w-auto rounded-lg bg-black px-6 py-3 text-center text-sm font-semibold text-white shadow-md transition hover:bg-slate-800"
          >
            전체 서비스
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto rounded-lg bg-black px-6 py-3 text-center text-sm font-semibold text-white shadow-md transition hover:bg-slate-800"
          >
            컨설팅 문의
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
