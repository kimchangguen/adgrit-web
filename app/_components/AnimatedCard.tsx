"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type AnimatedCardProps = {
  children: ReactNode;
  className?: string;
  /** stagger 인덱스 (스크롤 애니메이션용) */
  index?: number;
};

/** 스크롤 등장 + 호버 시 살짝 올라가는 카드 래퍼 */
export function AnimatedCard({
  children,
  className = "",
  index = 0,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
