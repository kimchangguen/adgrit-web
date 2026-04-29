"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Section2LeftColumn } from "./Section2LeftColumn";

type Section2WrapperProps = {
  leftContent: ReactNode;
  rightContent: ReactNode;
};

export function Section2Wrapper({ leftContent, rightContent }: Section2WrapperProps) {
  return (
    <div className="w-full bg-white px-4 sm:px-6 mt-12">
      <motion.section
        id="section2"
        className="section2 section-two relative z-10 mx-auto w-full max-w-[1200px] rounded-[2rem] sm:rounded-[3rem] bg-[#222222] py-20 sm:py-24 lg:py-28"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mx-auto w-full px-6 md:px-10 lg:px-14">
          <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16">
            <Section2LeftColumn>
              {leftContent}
            </Section2LeftColumn>
            {rightContent}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
