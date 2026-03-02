"use client";

import { Container } from "./Container";

const MESSAGES = [
  "기회비용 상실: 마케팅 헤매는 동안 경쟁사가 우리 잠재 고객을 다 채가서 생기는 매출 손실.",
  "솔루션 중복 결제: 불필요한 마케팅 툴이나 프로그램 결제로 고정비 상승.",
  "대표님의 번아웃: 낮에는 장사하고 밤에는 블로그 쓰느라 건강과 멘탈 붕괴.",
  "학습 곡선의 함정: 마케팅 공부하다가 트렌드가 바뀌어 다시 공부해야 하는 무한 루프.",
  "직원 교육 부담: 알바생에게 마케팅 가르쳐놨더니 그만두고 나가는 허무함.",
  "홈페이지 이탈률 급증: 모바일 최적화 안 된 사이트로 3초 만에 고객 90% 이탈.",
  "신뢰성 지표 부재: 전문가다운 포트폴리오나 후기가 없어 의심만 삼.",
  "계정 비활성화(밴): 규정 모르고 무리하게 홍보하다 인스타/네이버 계정 영구 정지.",
  "멘토의 부재: 사업 방향이 흔들릴 때 조언해 줄 러닝메이트가 없음.",
];

const BOTTOM_MESSAGE =
  "애드그릿은 광고 솔루션을 직접개발하여 소유하고 있는 온라인광고 업계 개발 실행사 입니다. 이래도 광고상품을 유통하고만 있으면서 마케팅이라는 대행도 아닌 유통하는 회사와 업무를 하실껀가요?";

const BUBBLE_BLUE = "#2B6CB0";

export function WithoutAdgritSection() {
  return (
    <section
      id="without-adgrit"
      className="relative z-10 border-t border-slate-800 bg-[#1A253A] py-16 sm:py-20 overflow-hidden"
    >
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
          {/* 왼쪽: 파란 말풍선들 - 위로 끊임없이 올라가는 애니메이션 */}
          <div className="flex-shrink-0 lg:w-[38%] lg:max-w-[420px] h-[320px] sm:h-[380px] overflow-hidden rounded-xl">
            <div className="flex flex-col gap-3 animate-bubbles-up w-max max-w-full" style={{ width: "100%" }}>
              {[...MESSAGES, ...MESSAGES].map((text, i) => (
                <div
                  key={`bubble-${i}`}
                  className="flex items-center gap-2 rounded-full px-4 py-3 w-max max-w-full text-white text-sm shadow-lg"
                  style={{ backgroundColor: BUBBLE_BLUE }}
                >
                  <span className="flex-shrink-0 text-white/90" aria-hidden>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
                    </svg>
                  </span>
                  <span className="line-clamp-2">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 오른쪽: 제목 + 부제 */}
          <div className="flex-1 min-w-0 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white text-left">
              애드그릿과 하지 않는다면
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-white/95 text-left leading-relaxed">
              다음의 상태가 당신의 상태가 될 수 있습니다.
            </p>
          </div>
        </div>

        {/* 하단 큰 글씨 */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-slate-600/50">
          <p className="text-lg sm:text-xl lg:text-2xl font-bold leading-relaxed text-white text-center max-w-4xl mx-auto">
            {BOTTOM_MESSAGE}
          </p>
        </div>
      </Container>
    </section>
  );
}
