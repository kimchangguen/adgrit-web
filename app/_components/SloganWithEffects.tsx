"use client";

import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";
import { Container } from "./Container";

const DOT_COUNT = 300;
const BATCH_SIZES = [2, 3, 5];
const CENTER_SIZE = 160;

// 알록달록 + 찐한 파란 계열 색상 (질감을 위한 다양한 톤)
const DOT_COLORS = [
  "#0c4a6e",
  "#0369a1",
  "#0284c7",
  "#0ea5e9",
  "#1e40af",
  "#2563eb",
  "#3b82f6",
  "#60a5fa",
  "#1e3a8a",
  "#1d4ed8",
  "#3730a3",
  "#4f46e5",
  "#6366f1",
  "#06b6d4",
  "#0891b2",
];

function generateDots() {
  const dots: {
    x: number;
    y: number;
    batchIndex: number;
    colorIdx: number;
    blinkDur: number;
    blinkPhase: number;
    size: number;
  }[] = [];
  const centerX = 0.5;
  const centerY = 0.5;

  const innerCount = Math.floor(DOT_COUNT * 0.5);
  for (let i = 0; i < DOT_COUNT; i++) {
    const angle = Math.random() * 2 * Math.PI;
    let r: number;
    if (i < innerCount) {
      r = 0.2 * Math.sqrt(Math.random());
    } else {
      r = 0.2 + 0.5 * Math.sqrt(Math.random());
    }
    const x = centerX + r * Math.cos(angle);
    const y = centerY + r * Math.sin(angle);
    dots.push({
      x: Math.max(0, Math.min(1, x)) * 100,
      y: Math.max(0, Math.min(1, y)) * 100,
      batchIndex: i,
      colorIdx: Math.floor(Math.random() * DOT_COLORS.length),
      blinkDur: 2.5 + Math.random() * 2.5,
      blinkPhase: Math.random() * 3,
      size: 5 + Math.random() * 3,
    });
  }
  return dots;
}

function getBatchOrder(): number[] {
  const order: number[] = [];
  let idx = 0;
  let batchIdx = 0;
  while (idx < DOT_COUNT) {
    const size = BATCH_SIZES[batchIdx % BATCH_SIZES.length];
    const count = Math.min(size, DOT_COUNT - idx);
    for (let i = 0; i < count; i++) {
      order.push(batchIdx);
    }
    idx += count;
    batchIdx++;
  }
  return order;
}

export function SloganWithEffects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: false,
    margin: "-20px",
    amount: 0.1,
  });

  const dots = useMemo(generateDots, []);
  const batchOrder = useMemo(getBatchOrder, []);

  return (
    <>
      {/* 전체 섹션 덮는 점 레이어 - 2→3 섹션 스크롤 시 등장 */}
      <div
        ref={sectionRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden
      />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, i) => {
          const batch = batchOrder[i];
          const color = DOT_COLORS[dot.colorIdx];
          const appearDelay = batch * 0.05;

          return (
            <motion.span
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${dot.x}%`,
                top: `${dot.y}%`,
                width: dot.size,
                height: dot.size,
                backgroundColor: color,
                boxShadow: `0 0 ${dot.size}px ${color}66, inset 0 1px 0 rgba(255,255,255,0.3)`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView
                  ? {
                      opacity: [0, 1, 1, 0.15, 1],
                      scale: [0, 1, 1, 1, 1],
                      transition: {
                        times: [0, 0.15, 0.35, 0.6, 1],
                        duration: dot.blinkDur,
                        delay: appearDelay + dot.blinkPhase * 0.3,
                        repeat: Infinity,
                        repeatDelay: 0.5 + Math.random() * 1,
                      },
                    }
                  : { opacity: 0, scale: 0 }
              }
            />
          );
        })}
      </div>

      {/* 콘텐츠: 오브 + 텍스트 */}
      <div className="relative z-10 w-full flex items-center justify-center min-h-[1080px]">
        <Container>
          <div className="relative flex flex-col items-center gap-10 sm:gap-14">
            {/* 파란 오브 - 중앙 */}
            <div className="relative h-[400px] w-[400px] overflow-visible">
              <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to right, transparent 30%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0.9) 100%)",
                  borderRadius: "50%",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center overflow-visible">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full border border-[#2563eb]/50"
                    style={{
                      width: 100 + i * 44,
                      height: 100 + i * 44,
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
                {/* 중앙 오브 - 더 찐한 파란 그라데이션 + 질감 */}
                <motion.div
                  className="absolute rounded-full"
                  style={{
                    width: CENTER_SIZE,
                    height: CENTER_SIZE,
                    background:
                      "linear-gradient(135deg, #1e40af 0%, #2563eb 35%, #3b82f6 65%, #1e3a8a 100%)",
                    boxShadow:
                      "0 0 60px rgba(30,64,175,0.5), inset 0 2px 20px rgba(255,255,255,0.2)",
                  }}
                  animate={{
                    scale: [1, 1.08, 1],
                    boxShadow: [
                      "0 0 60px rgba(30,64,175,0.5), inset 0 2px 20px rgba(255,255,255,0.2)",
                      "0 0 90px rgba(30,64,175,0.7), inset 0 2px 20px rgba(255,255,255,0.25)",
                      "0 0 60px rgba(30,64,175,0.5), inset 0 2px 20px rgba(255,255,255,0.2)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>

            {/* 슬로건 텍스트 - 3줄 */}
            <div className="relative mx-auto inline-block max-w-full text-center">
              <p className="relative z-10 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.2] tracking-tight text-[#111111]">
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
        </Container>
      </div>
    </>
  );
}
