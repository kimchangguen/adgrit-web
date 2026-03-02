"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CLIENTS = [
  { name: "아트웨이브", desc: "전국 예체능 입시 전문학원", logo: "아트웨이브스튜디오" },
  { name: "법무법인 로앤그레이", desc: "형사·기업 전문 로펌", logo: "로앤그레이" },
  { name: "루미아핏", desc: "애슬레저 의류 브랜드", logo: "LUMIAFIT" },
  { name: "에이펙스몰", desc: "전자제품 온라인 공식 파트너", logo: "에이펙스몰" },
  { name: "스피크라운", desc: "성인 영어 회화 교육", logo: "스피크라운" },
  { name: "넥스트홈쇼핑", desc: "라이브 커머스 플랫폼", logo: "넥스트홈쇼핑" },
  { name: "바이오헬릭스", desc: "건강기능식품 기업", logo: "바이오헬릭스" },
  { name: "카브릿지", desc: "프리미엄 중고차 플랫폼", logo: "카브릿지" },
  { name: "어반코어짐", desc: "피트니스 프랜차이즈", logo: "URBAN CORE GYM" },
  { name: "리전 아레나", desc: "온라인 전략 게임", logo: "LEGION ARENA" },
  { name: "해담마켓", desc: "수산물·신선식품 브랜드", logo: "해담마켓" },
  { name: "메종 벨로르", desc: "컨템포러리 패션 브랜드", logo: "MAISON VELOR" },
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
