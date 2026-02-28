"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container } from "./Container";

const GRID_ITEMS = [
  {
    titleEn: "Commerce / Brand",
    titleKo: "커머스/브랜드",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
  },
  {
    titleEn: "Place",
    titleKo: "플레이스",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    titleEn: "Service",
    titleKo: "서비스",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80",
  },
  {
    titleEn: "Design team",
    titleKo: "디자인팀",
    image: "https://images.unsplash.com/photo-1561070791-2526d31094b5?w=600&q=80",
  },
];

export function SloganWithEffects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <div ref={sectionRef} className="relative z-10 w-full flex items-center justify-center min-h-[1080px] py-16">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16 w-full">
          {/* 왼쪽: 슬로건 텍스트 3줄 */}
          <div className="lg:w-[48%] flex-shrink-0 text-left">
            <motion.p
              className="text-white/90 text-base sm:text-lg font-medium tracking-wide flex items-center gap-2 mb-6"
              initial={{ opacity: 0, x: -12 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4 }}
            >
              Just follow me.
              <svg
                className="w-4 h-4 text-white/80"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.p>
            <motion.p
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              이제 마케팅
              <br />
              집어 치우고
              <br />
              광고{" "}
              <span className="inline-flex items-center justify-center rounded-full bg-white/15 text-white px-2 py-0.5 mx-0.5">
                양
              </span>{" "}
              으로 승부 하세요
            </motion.p>
          </div>

          {/* 오른쪽: 2x2 그리드 */}
          <div className="lg:flex-1 grid grid-cols-2 gap-4 sm:gap-5">
            {GRID_ITEMS.map((item, i) => (
              <motion.div
                key={item.titleEn}
                className="group relative aspect-[4/3] sm:aspect-[5/4] rounded-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              >
                <img
                  src={item.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                  aria-hidden
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                  <span className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white/80 border border-white/40 rounded-full">
                    <span className="text-lg leading-none">+</span>
                  </span>
                  <p className="text-white text-sm font-medium opacity-90">{item.titleEn}</p>
                  <p className="text-white/95 text-lg sm:text-xl font-bold mt-0.5">{item.titleKo}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
