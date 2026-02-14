"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function SloganWithEffects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="overflow-hidden"
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      animate={
        isInView
          ? { clipPath: "inset(0 0% 0 0)" }
          : { clipPath: "inset(0 100% 0 0)" }
      }
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <p className="font-tech text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed tracking-tight text-[#1a1a2e]">
        이제{" "}
        <motion.span
          className="inline-block origin-center"
          initial={{ scale: 0.5 }}
          animate={
            isInView
              ? {
                  scale: [0.5, 1.25, 1],
                  transition: {
                    duration: 0.7,
                    delay: 0.9,
                    ease: [0.34, 1.56, 0.64, 1],
                  },
                }
              : { scale: 0.5 }
          }
        >
          마케팅
        </motion.span>{" "}
        이라는 어려운 이야기는 집어 치우고
        <br />
        광고의 &ldquo;
        <motion.span
          className="inline-block origin-center"
          initial={{ scale: 0.5 }}
          animate={
            isInView
              ? {
                  scale: [0.5, 1.25, 1],
                  transition: {
                    duration: 0.7,
                    delay: 1.3,
                    ease: [0.34, 1.56, 0.64, 1],
                  },
                }
              : { scale: 0.5 }
          }
        >
          양
        </motion.span>
        &rdquo; 으로 승부 하세요
      </p>
    </motion.div>
  );
}
