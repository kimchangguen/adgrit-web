import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4">
      <p className="text-sm font-bold tracking-[0.2em] text-[#222222] uppercase">404</p>
      <h1 className="mt-4 text-3xl sm:text-4xl font-black text-[#1f1f1f] leading-tight">
        페이지를 찾을 수 없습니다
      </h1>
      <p className="mt-4 text-slate-500 max-w-sm leading-relaxed">
        요청하신 페이지가 존재하지 않거나 이동되었습니다.
        <br />
        주소를 다시 확인해 주세요.
      </p>
      <div className="mt-10 flex gap-4 flex-wrap justify-center">
        <Link
          href="/"
          className="rounded-full bg-[#222222] px-8 py-3 text-sm font-semibold text-white hover:bg-[#3a3a3a] transition-colors"
        >
          홈으로
        </Link>
        <Link
          href="/blog"
          className="rounded-full border border-slate-300 px-8 py-3 text-sm font-semibold text-slate-600 hover:border-[#222222] hover:text-[#222222] transition-colors"
        >
          블로그
        </Link>
      </div>
      <p className="mt-12 text-xs text-slate-300 tracking-widest font-semibold">ADGRIT</p>
    </div>
  );
}
