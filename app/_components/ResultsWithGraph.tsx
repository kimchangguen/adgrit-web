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

const ACCENT = "#0ea5e9"; // sky-500

export function ResultsWithGraph() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.1, once: true });

  return (
    <section
      ref={sectionRef}
      id="results"
      className="relative w-full bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr,1fr] lg:gap-16 lg:items-start">
          {/* 왼쪽: 텍스트 */}
          <div className="space-y-6">
            <motion.p
              className="text-xs font-medium uppercase tracking-widest text-slate-400"
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
            >
              About Us
            </motion.p>
            <motion.h2
              className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-[1.75rem] lg:leading-tight"
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              데이터 기반 마케팅,
              <br />
              애드그릿이 앞장섭니다.
            </motion.h2>
            <motion.p
              className="text-[15px] leading-relaxed text-slate-600"
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              산업의 마케팅을 넘어, 데이터 기반 혁신으로 나아갑니다.
            </motion.p>
            <motion.p
              className="text-[15px] leading-relaxed text-slate-600"
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              첨단 AI 기술과 검증된 전략이 만드는 새로운 성장 패러다임, 애드그릿이 앞장섭니다.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-3 pt-2"
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                전체 서비스
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                컨설팅 문의
              </Link>
            </motion.div>
          </div>

          {/* 오른쪽: 타임라인 + ROAS 카드 */}
          <motion.div
            className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* ROAS 강조 */}
            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-sm font-medium text-slate-500">광고주 평균 ROAS</span>
              <span
                className="text-3xl font-bold tabular-nums sm:text-4xl"
                style={{ color: ACCENT }}
              >
                500%
              </span>
            </div>

            {/* 연도별 마일스톤 - 미니멀 리스트 */}
            <ul className="space-y-4">
              {MILESTONES.map((item, i) => (
                <motion.li
                  key={item.year}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.35, delay: 0.15 + i * 0.05 }}
                >
                  <span className="text-sm font-semibold text-slate-400 w-10 shrink-0">
                    {item.year}
                  </span>
                  <span className="text-sm text-slate-700">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
