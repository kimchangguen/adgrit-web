"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function SloganWithEffects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative flex flex-col items-center gap-10 sm:gap-14">
      {/* 파란 오브 - 중앙, 움직이는 효과, 한쪽 비바램 그라데이션 */}
      <div className="relative h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 overflow-visible">
        {/* 비바램 - 한쪽 페이드 그라데이션 */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, transparent 30%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0.9) 100%)",
            borderRadius: "50%",
          }}
        />
        {/* 외곽 링 + 오브 */}
        <div className="absolute inset-0 flex items-center justify-center overflow-visible">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-[#3b82f6]/40"
              style={{
                width: 50 + i * 22,
                height: 50 + i * 22,
              }}
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2.5,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
          {/* 중앙 오브 - 글로우 */}
          <motion.div
            className="absolute rounded-full bg-gradient-to-br from-blue-300 via-blue-500 to-blue-800 shadow-[0_0_60px_rgba(59,130,246,0.6)]"
            style={{ width: 80, height: 80 }}
            animate={{
              scale: [1, 1.08, 1],
              boxShadow: [
                "0 0 60px rgba(59,130,246,0.5)",
                "0 0 80px rgba(59,130,246,0.7)",
                "0 0 60px rgba(59,130,246,0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* 주변 점들 */}
          {[
            { angle: 45, r: 55 },
            { angle: 135, r: 55 },
            { angle: 225, r: 55 },
            { angle: 315, r: 55 },
          ].map(({ angle, r }, i) => {
            const rad = (angle * Math.PI) / 180;
            const size = 96; // h-48 = 96px
            const x = size / 2 + r * Math.cos(rad) - 4;
            const y = size / 2 + r * Math.sin(rad) - 4;
            return (
              <motion.span
                key={i}
                className="absolute w-2 h-2 rounded-full bg-blue-500"
                style={{ left: x, top: y }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* 슬로건 텍스트 - 3줄, 더 두꺼운 폰트 */}
      <div className="relative mx-auto inline-block max-w-full text-center">
        <p className="relative z-10 font-[family-name:var(--font-ibm-plex-kr)] text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.2] tracking-tight text-[#111111]">
          이제 마케팅
          <br />
          집어 치우고
          <br />
          광고{" "}
          <motion.span
            className="relative inline-flex items-center justify-center"
            initial={{ scale: 0.5 }}
            animate={
              isInView
                ? {
                    scale: [0.5, 1.15, 1],
                    transition: {
                      duration: 0.6,
                      delay: 1,
                      ease: [0.34, 1.56, 0.64, 1],
                    },
                  }
                : { scale: 0.5 }
            }
          >
            <span className="relative z-10 mx-1 inline-flex h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-[#1e40af]/20 text-[#1e40af] ring-4 ring-[#1e40af]/30">
              양
            </span>
          </motion.span>{" "}
          으로 승부 하세요
        </p>
      </div>
    </div>
  );
}
