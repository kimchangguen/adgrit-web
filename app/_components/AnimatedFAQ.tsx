"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type AnimatedFAQProps = {
  q: string;
  a: string;
};

/** FAQ 아코디언 - 열림/닫힘 애니메이션 */
export function AnimatedFAQ({ q, a }: AnimatedFAQProps) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-sm overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-left list-none text-base font-semibold text-[#1f1f1f] flex items-start justify-between gap-6 cursor-pointer"
      >
        <span>{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-500"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-sm leading-relaxed text-slate-600">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
