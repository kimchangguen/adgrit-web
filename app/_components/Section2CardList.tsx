import type { ReactNode } from "react";

export function Section2CardList({ children }: { children: ReactNode }) {
  return (
    <div className="flex-1 w-[81.32%] max-w-[81.32%] flex flex-col">
      <div className="flex flex-col">
        {children}
      </div>
    </div>
  );
}
