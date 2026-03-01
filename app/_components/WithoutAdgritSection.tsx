"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const DISPLAY_COUNT = 5;

export function WithoutAdgritSection() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const visibleMessages = Array.from({ length: DISPLAY_COUNT }, (_, i) => {
    const idx = (startIndex + i) % MESSAGES.length;
    return { idx, text: MESSAGES[idx], order: i, key: `msg-${startIndex + i}` };
  });

  return (
    <section
      id="without-adgrit"
      className="relative z-10 border-t border-slate-800 bg-[#0f172a] py-16 sm:py-20"
    >
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-14">
          {/* 왼쪽: 인트로 메시지 */}
          <div className="flex-shrink-0 lg:w-[38%] lg:max-w-[420px]">
            <h2 className="text-xl sm:text-2xl font-bold leading-relaxed text-white">
              <span className="relative inline-block">
                애드그릿과 하지 않는다면
                <span className="absolute left-0 bottom-0.5 w-full h-0.5 bg-orange-500 rounded" />
              </span>
              <br />
              <span className="mt-2 block">다음의 상태가 당신의 상태가 될 수 있습니다.</span>
            </h2>
          </div>

          {/* 오른쪽: 핸드폰 목업 + 안에서 메시지가 올라가는 채팅 */}
          <div className="flex-1 min-w-0 flex justify-center lg:justify-end">
            <div className="relative w-[280px] sm:w-[320px] flex-shrink-0">
              {/* 폰 프레임 */}
              <div className="rounded-[2.5rem] border-[10px] sm:border-[12px] border-slate-700 bg-slate-800 shadow-2xl overflow-hidden">
                {/* 상단 노치/상태바 */}
                <div className="h-6 sm:h-7 bg-slate-800 flex items-center justify-center">
                  <div className="w-20 h-5 rounded-full bg-slate-900" aria-hidden />
                </div>
                {/* 채팅 화면: 메시지가 아래에서 올라오는 영역 */}
                <div className="bg-slate-900/80 min-h-[380px] sm:min-h-[420px] flex flex-col justify-end overflow-hidden">
                  <div className="px-3 sm:px-4 pb-4 pt-2 flex flex-col justify-end gap-3 min-h-0">
                    <AnimatePresence initial={false} mode="popLayout">
                      {visibleMessages.map(({ idx, text, key: msgKey }) => (
                        <motion.div
                          key={msgKey}
                          layout
                          initial={{ opacity: 0, y: 32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -24, transition: { duration: 0.3 } }}
                          transition={{ duration: 0.45, ease: "easeOut" }}
                          className={`flex ${idx % 2 === 0 ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[90%] rounded-2xl px-4 py-3 shadow-md ${
                              idx % 2 === 0
                                ? "bg-slate-600 text-white rounded-br-md"
                                : "bg-slate-700 text-white rounded-bl-md"
                            }`}
                          >
                            <p className="text-xs sm:text-sm leading-relaxed">{text}</p>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
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
