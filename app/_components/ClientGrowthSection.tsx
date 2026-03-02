"use client";

export function ClientGrowthSection() {
  return (
    <section className="relative z-10 w-full min-h-[420px] sm:min-h-[480px] flex items-center justify-center overflow-hidden">
      {/* 배경 이미지 (오피스/데이터센터 느낌) + 어두운 오버레이 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-slate-900/80" aria-hidden />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
        {/* 첫 줄: 오렌지 별 아이콘 + 작은 흰 글씨 */}
        <p className="flex items-center justify-center gap-2 text-white/95 text-base sm:text-lg">
          <span className="text-[#ff9e14]" aria-hidden>
            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6L12 2z" />
            </svg>
          </span>
          클라이언트의 성장이 곧 우리의 성장이자 성공입니다.
        </p>

        {/* 두 번째 줄: 큰 굵은 흰 글씨 */}
        <h2 className="mt-6 sm:mt-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          우리의 자랑이 되어주시겠습니까?
        </h2>

        {/* 하단: 흰색 아래 화살표 */}
        <div className="mt-10 sm:mt-14 flex justify-center">
          <span className="text-white/90" aria-hidden>
            <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
}
