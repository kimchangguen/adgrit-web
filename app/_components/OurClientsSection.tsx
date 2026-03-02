"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CLIENTS = [
  { name: "창조의 아침", desc: "전국 미대입시 전문학원", logo: "창조의아침미술학원" },
  { name: "법무법인 태림", desc: "교정 변호사", logo: "태림" },
  { name: "어커버", desc: "스파 의류브랜드", logo: "ACOVER" },
  { name: "평강프라자", desc: "삼성전자 온라인 공식 파트너", logo: "평강프라자" },
  { name: "야나두", desc: "영어전문 회화 교육", logo: "야나두" },
  { name: "롯데홈쇼핑", desc: "홈 커머스", logo: "롯데홈쇼핑" },
  { name: "네이처뉴트리션", desc: "건강식품 기업", logo: "네이처뉴트리션" },
  { name: "리드카", desc: "중고차", logo: "리드카" },
  { name: "고두 피트니스", desc: "피트니스 프랜차이즈", logo: "GOT FITNESS" },
  { name: "월드오브워쉽", desc: "온라인 게임", logo: "월드오브워쉽" },
  { name: "청춘농가", desc: "식품(수산물, 해산물 등)", logo: "청춘농가" },
  { name: "코치", desc: "의류쇼", logo: "COACH" },
];

export function OurClientsSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { amount: 0.1, once: true });

  return (
    <section className="relative z-10 w-full overflow-hidden border-t border-slate-200 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1e40af]">
            OUR CLIENTS
          </p>
          <h2 className="mt-4 text-2xl font-bold leading-tight text-[#1e40af] sm:text-3xl lg:text-4xl">
            약 20+ 대형 브랜드와,
            <br />
            150+ 소상공인 브랜드와 함께 성장중입니다
          </h2>
        </div>

        {/* 클라이언트 그리드 6x2 - 왼쪽에서 오른쪽으로 천천히 등장 */}
        <div ref={gridRef} className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {CLIENTS.map((client, i) => (
            <motion.div
              key={i}
              className="flex flex-col rounded-xl border border-slate-100 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-slate-200 transition-all"
              initial={{ opacity: 0, x: -48 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -48 }}
              transition={{
                duration: 0.7,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* 로고 영역 (플레이스홀더) */}
              <div className="flex h-14 sm:h-16 items-center justify-center rounded-lg bg-slate-50 text-slate-400 text-xs sm:text-sm font-semibold truncate px-2">
                {client.logo}
              </div>
              <p className="mt-3 text-sm font-semibold text-slate-800 truncate" title={client.name}>
                {client.name}
              </p>
              <p className="mt-1 text-xs text-slate-500 line-clamp-2" title={client.desc}>
                {client.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
