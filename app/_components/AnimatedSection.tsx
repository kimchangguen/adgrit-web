"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  /** 자식 stagger 딜레이 (초) */
  stagger?: number;
};

/** 스크롤 시 뷰포트에 들어오면 fade-in-up */
export function AnimatedSection({
  children,
  className = "",
  stagger = 0.05,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type FadeInItemProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** 개별 fade-in-up 아이템 (AnimatedSection의 자식으로 사용) */
export function FadeInItem({
  children,
  className = "",
  delay = 0,
}: FadeInItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
