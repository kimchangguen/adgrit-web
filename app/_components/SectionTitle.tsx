import type { ReactNode } from "react";

export function SectionKicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#222222]">
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#1f1f1f] ${className}`.trim()}
    >
      {children}
    </h2>
  );
}

export function SectionLead({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
      {children}
    </p>
  );
}
