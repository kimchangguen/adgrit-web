import { SiteHeader } from "../_components/SiteHeader";
import { Footer } from "../_components/Footer";
import { AboutSliderCards } from "../_components/AboutSliderCards";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fc] text-[#1a1a2e]">
      <SiteHeader />

      <main className="pt-28 pb-24 sm:pt-36 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* 섹션 헤더 */}
          <div className="mb-14">
            <p className="text-[11px] font-bold tracking-[0.22em] text-[#FF7F00] uppercase mb-3">
              WHAT WE DO
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#1a1a2e] leading-tight tracking-tight">
              애드그릿이 하는 일
            </h1>
            <p className="mt-4 text-slate-500 text-base sm:text-lg max-w-lg leading-[1.8]">
              광고 기획부터 개발 실행까지, 마케팅의 전 영역을 직접 실행합니다.
              <br className="hidden sm:block" />
              카드를 드래그하거나 화살표로 탐색해보세요.
            </p>
          </div>

          {/* 슬라이딩 카드 + 도트 · 화살표 */}
          <AboutSliderCards />

        </div>
      </main>

      <Footer />
    </div>
  );
}
