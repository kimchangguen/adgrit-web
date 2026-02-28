"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";

const CARD_COUNT = 6;

export function Section2CardList({ children }: { children: ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const maxScroll = scrollHeight - clientHeight;
      if (maxScroll <= 0) {
        setActiveIndex(0);
        return;
      }
      const progress = scrollTop / maxScroll;
      const index = Math.min(
        Math.round(progress * (CARD_COUNT - 1)),
        CARD_COUNT - 1
      );
      setActiveIndex(index);
    };

    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex-1 w-[76%] max-w-[76%] flex flex-col">
      <div
        ref={scrollRef}
        className="max-h-[520px] overflow-y-auto overflow-x-hidden scroll-smooth"
      >
        {children}
      </div>
      {/* 점 형태 인디케이터 */}
      <div className="flex items-center justify-center gap-2 mt-5 flex-shrink-0">
        {Array.from({ length: CARD_COUNT }).map((_, i) => (
          <span
            key={i}
            aria-hidden
            className={`inline-block rounded-full transition-all duration-200 ${
              i === activeIndex
                ? "w-2.5 h-2.5 bg-white opacity-100"
                : "w-2 h-2 bg-white/50 opacity-70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
