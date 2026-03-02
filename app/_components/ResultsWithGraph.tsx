"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const MILESTONES_TABLE = [
  { year: "2019", text: "디지털 마케팅 전문팀 구성" },
  { year: "2020", text: "데이터 기반 광고 시스템 구축" },
  { year: "2022", text: "AI 마케팅 전략 상용화" },
  { year: "2023", text: "주요 광고주 전략 파트너십 체결" },
  { year: "2025", text: "글로벌 마케팅 확대" },
];

const BAR_HEIGHTS = [0.5, 0.7, 0.85, 1];
const BAR_COLORS = [
  "rgb(30, 58, 138)",
  "rgb(59, 130, 246)",
  "rgb(96, 165, 250)",
  "rgb(147, 197, 253)",
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
      {/* 배경: 은은한 곡선 패턴 (흰 배경용) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <svg className="h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="results-bg-wave" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
          </defs>
          <path
            d="M0 200 Q300 100 600 150 T1200 100 L1200 800 L0 800 Z"
            fill="url(#results-bg-wave)"
          />
          <path
            d="M0 500 Q400 400 800 450 T1200 400 L1200 800 L0 800 Z"
            fill="url(#results-bg-wave)"
            opacity="0.6"
          />
          <path
            d="M1200 0 Q900 80 500 50 T0 120 L0 0 Z"
            fill="url(#results-bg-wave)"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* 2단: 왼쪽 텍스트, 오른쪽 막대 그래프 + 표 */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* 왼쪽: 텍스트 (검정색) */}
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

          {/* 오른쪽: 막대 그래프 + ROAS 라벨 + 표 */}
          <motion.div
            className="flex flex-1 flex-col items-center lg:items-end min-w-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* 막대 그래프 */}
            <div className="flex items-end justify-center gap-4 sm:gap-6 h-44 sm:h-52 w-full max-w-md">
              {BAR_HEIGHTS.map((ratio, i) => (
                <motion.div
                  key={i}
                  className="flex-1 max-w-[4rem] rounded-t-lg min-h-[8px]"
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
              className="mt-4 rounded-lg border border-slate-200 bg-slate-50 px-6 py-2.5"
              initial={{ opacity: 0, y: 4 }}
              animate={barAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
              transition={{ duration: 0.4, delay: 0.65 }}
            >
              <span className="text-sm font-bold text-slate-800">ROAS</span>
            </motion.div>

            {/* 표: 연도별 마일스톤 + 광고주 평균 ROAS 500% */}
            <div className="mt-8 w-full max-w-md">
              <table className="w-full border-collapse text-left">
                <tbody className="text-black">
                  {MILESTONES_TABLE.map((row, i) => (
                    <motion.tr
                      key={row.year}
                      className="border-b border-slate-200"
                      initial={{ opacity: 0, x: 8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ amount: 0.3, once: true }}
                      transition={{ duration: 0.35, delay: 0.1 + i * 0.05 }}
                    >
                      <td className="py-3 pr-4 text-sm font-semibold text-slate-600 w-16 sm:w-20">
                        {row.year}
                      </td>
                      <td className="py-3 text-sm text-slate-800">{row.text}</td>
                    </motion.tr>
                  ))}
                  <motion.tr
                    className="border-b border-slate-200"
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.3, once: true }}
                    transition={{ duration: 0.35, delay: 0.35 }}
                  >
                    <td className="py-3 pr-4 text-sm font-semibold text-slate-600">
                      광고주 평균 ROAS
                    </td>
                    <td className="py-3 text-lg font-bold text-slate-900">500%</td>
                  </motion.tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* 하단 우측: CTA 버튼 (검정 배경 + 흰 글씨) */}
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
