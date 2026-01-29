import type { ReactNode } from "react";

export function SectionKicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-[0.25em] text-zinc-400">
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
      className={`text-3xl sm:text-4xl font-extrabold tracking-tight text-white ${className}`.trim()}
    >
      {children}
    </h2>
  );
}

export function SectionLead({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-300">
      {children}
    </p>
  );
}

