"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { RefObject } from "react";
import type { ReactNode } from "react";

type Section2LeftColumnProps = {
  sectionRef: RefObject<HTMLElement | null>;
  children: ReactNode;
};

export function Section2LeftColumn({ sectionRef, children }: Section2LeftColumnProps) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  // 섹션 진입 ~ 뷰포트 중앙까지(중간): 휠 내리면 왼쪽 문구가 따라오는 이동
  const y = useTransform(scrollYProgress, [0, 0.5], [32, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.75, 1]);

  return (
    <motion.div
      className="lg:sticky lg:top-24 lg:w-[54%] lg:flex-shrink-0 text-left"
      style={{ y, opacity }}
    >
      {children}
    </motion.div>
  );
}
