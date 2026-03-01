"use client";

import { useRef, type ReactNode } from "react";
import { Section2LeftColumn } from "./Section2LeftColumn";

type Section2WrapperProps = {
  leftContent: ReactNode;
  rightContent: ReactNode;
};

export function Section2Wrapper({ leftContent, rightContent }: Section2WrapperProps) {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="section2"
      className="section2 section-two relative z-10 mt-12 bg-[#1e3a5f] py-20 sm:py-24 lg:py-28"
    >
      <div className="wave-top" aria-hidden="true" />
      <div className="mx-auto w-full max-w-[1080px] px-6">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16">
          <Section2LeftColumn sectionRef={sectionRef}>
            {leftContent}
          </Section2LeftColumn>
          {rightContent}
        </div>
      </div>
    </section>
  );
}
