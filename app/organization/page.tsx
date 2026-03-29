"use client";

import { useRef } from "react";
import { motion, useInView, type UseInViewOptions } from "framer-motion";
import { SiteHeader } from "../_components/SiteHeader";
import { Footer } from "../_components/Footer";

const EASE = [0.22, 1, 0.36, 1] as const;

function useReveal(margin: UseInViewOptions["margin"] = "-40px") {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin });
  return { ref, inView };
}

/* ─── 조직도 데이터 ──────────────────────────────────── */
const DEPARTMENTS = [
  {
    key: "CONSULTING",
    items: [
      "프로젝트 제안 기획",
      "브랜드 분석",
      "타겟 설정",
      "매체 및 방식 전략",
      "문제 수정",
      "미스터리쇼퍼",
    ],
  },
  {
    key: "DIGITAL IMC",
    items: [
      "IMC 통합 마케팅",
      "인스타그램 통합 마케팅",
      "페이스북 타겟 광고",
      "블로그 통합 마케팅",
      "카페 마케팅 및 바이럴",
      "SNS 마케팅",
      "플레이스 설계 및 관리",
      "언론홍보",
      "유튜브",
      "당근, 카카오, 밴드",
    ],
  },
  {
    key: "CREATIVE",
    items: [
      "슬로건 아이덴티티 구축",
      "CRM 앤트 설계",
      "동영상 촬영 및 편집",
      "블로그 원고",
      "블로그 이미지",
      "디스플레이 배너",
      "카드 뉴스",
      "인스타그램용 이미지",
    ],
  },
  {
    key: "DEVELOPMENT",
    items: [
      "준 최적화 블로그",
      "인스타 노출 솔루션",
      "플레이스 리뷰 솔루션",
      "블로거 서칭 및 개발",
      "블로그 로직 연구",
      "인스타그램 로직 연구",
    ],
  },
  {
    key: "REPUBLISHING",
    items: [
      "HTML",
      "JAVA",
      "PHP",
      "UI UX 컨설팅",
      "웹 표준화 컨설팅",
      "···",
    ],
  },
] as const;

/* ─── 페이지 ─────────────────────────────────────────── */
export default function OrganizationPage() {
  const { ref: heroRef, inView: heroInView } = useReveal("-20px");
  const { ref: ceoRef,  inView: ceoInView  } = useReveal("-40px");

  return (
    <div className="bg-[#1e3052] text-white min-h-screen">
      <SiteHeader />

      <main className="pt-16">

        {/* ── 히어로 ─────────────────────────────────── */}
        <section className="px-6 sm:px-14 lg:px-24 pt-20 sm:pt-28 pb-16 sm:pb-20">
          <motion.p
            className="text-[0.65rem] font-bold tracking-[0.28em] text-[#2563EB] uppercase mb-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            ADGRIT Organization
          </motion.p>
          <motion.h1
            className="font-extrabold text-white leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: EASE }}
          >
            조직도
          </motion.h1>
          <motion.p
            className="mt-5 text-sm sm:text-base text-white/38 leading-[1.85]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: EASE }}
          >
            애드그릿의 조직 구조를 소개합니다.
          </motion.p>
        </section>

        {/* ── 조직도 본문 ─────────────────────────────── */}
        <section
          ref={heroRef}
          className="bg-[#1e3052] px-6 sm:px-14 lg:px-24 pt-20 pb-32 sm:pb-44 border-t border-white/[0.07]"
        >
          {/* CEO + 지원 조직 */}
          <motion.div
            ref={ceoRef}
            initial={{ opacity: 0, y: 36 }}
            animate={ceoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: EASE }}
            className="flex flex-col items-center gap-4 mb-0"
          >
            <div className="w-24 h-24 rounded-full bg-[#2563EB] border-2 border-blue-400 flex items-center justify-center shadow-[0_0_36px_rgba(37,99,235,0.5)]">
              <span className="text-white font-black text-xl tracking-wide">CEO</span>
            </div>

            <div className="flex gap-3 flex-wrap justify-center">
              {["R&D 센터", "경영지원부서"].map((label) => (
                <span
                  key={label}
                  className="px-4 py-2 rounded-lg border border-blue-600 bg-[#0d1b35] text-white text-xs font-semibold tracking-wide"
                >
                  {label}
                </span>
              ))}
            </div>

            {/* 수직선 → 분기 노드 → 수평 바 */}
            <div className="flex flex-col items-center w-full">
              <div className="w-px h-8 bg-blue-600/50" />
              <div className="w-3 h-3 rounded-full bg-blue-500 border-2 border-blue-300 shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
              <div className="w-full h-px bg-blue-600/40 mt-0" />
            </div>
          </motion.div>

          {/* 부서 카드 그리드 — 각 열에 수직 드롭 + 카드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5">
            {DEPARTMENTS.map(({ key, items }, i) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const { ref: cardRef, inView: cardInView } = useReveal("-30px");
              return (
                <div key={key} className="flex flex-col items-center">
                  {/* 수직 드롭 — 모바일에서는 숨김 */}
                  <div className="hidden xl:block w-px h-6 bg-blue-600/40 shrink-0" />

                  <motion.div
                    ref={cardRef}
                    initial={{ opacity: 0, y: 48 }}
                    animate={cardInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: i * 0.09, ease: EASE }}
                    className="w-full rounded-xl border border-blue-600 bg-[#0d1b35] overflow-hidden hover:border-blue-400 hover:shadow-[0_0_18px_rgba(37,99,235,0.25)] transition-all duration-300"
                  >
                    {/* 부서 헤더 — 그라데이션으로 강조 */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-3.5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
                      <span className="text-white font-black text-[0.7rem] tracking-[0.18em] uppercase drop-shadow-sm">
                        {key}
                      </span>
                    </div>

                    <div className="px-4 py-4 flex flex-col gap-3">
                      {items.map((item) => (
                        <div
                          key={item}
                          className="rounded-md border border-blue-500/30 bg-white/5 px-4 py-3 text-[0.75rem] text-white/90 leading-snug"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
