"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4">
      <p className="text-sm font-bold tracking-[0.2em] text-[#e53e3e] uppercase">500</p>
      <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-[#1a1a2e] leading-tight">
        오류가 발생했습니다
      </h1>
      <p className="mt-4 text-slate-500 max-w-sm leading-relaxed">
        일시적인 오류입니다.
        <br />
        잠시 후 다시 시도해 주세요.
      </p>
      <div className="mt-10 flex gap-4 flex-wrap justify-center">
        <button
          onClick={reset}
          className="rounded-full bg-[#1A237E] px-8 py-3 text-sm font-semibold text-white hover:bg-[#283593] transition-colors"
        >
          다시 시도
        </button>
        <Link
          href="/"
          className="rounded-full border border-slate-300 px-8 py-3 text-sm font-semibold text-slate-600 hover:border-[#1A237E] hover:text-[#1A237E] transition-colors"
        >
          홈으로
        </Link>
      </div>
      <p className="mt-12 text-xs text-slate-300 tracking-widest font-semibold">ADGRIT</p>
    </div>
  );
}
