"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Section2LeftColumnProps = {
  children: ReactNode;
};

export function Section2LeftColumn({ children }: Section2LeftColumnProps) {
  return (
    <div className="lg:sticky lg:top-[calc(var(--header-height)+60px)] lg:self-start lg:pt-8 lg:w-[54%] lg:flex-shrink-0 h-fit text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
