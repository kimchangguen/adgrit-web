"use client";

import { useState } from "react";
import { Container } from "./Container";

const INPUT_STYLE =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-[#2362ff] focus:outline-none focus:ring-2 focus:ring-[#2362ff]/20";

export function ContactSection() {
  const [agree, setAgree] = useState(false);

  return (
    <section
      id="contact"
      className="relative z-10 border-t border-slate-700 bg-[#1A253A] py-16 sm:py-20 lg:py-24"
    >
      <Container className="relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* 왼쪽: Contact 타이틀 + 안내 문구 */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Contact
              <br />
              ADGRIT
            </h2>
            <div className="mt-8 flex items-start gap-3">
              <span className="flex-shrink-0 text-white/90 mt-0.5">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 01.99-.27 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.27 1l-2.2 2.2z" />
                </svg>
              </span>
              <div>
                <p className="text-lg font-semibold text-white">왜 전화 번호가 없죠?</p>
                <p className="mt-3 text-sm sm:text-base text-white/85 leading-relaxed">
                  애드그릿은 클라이언트 확인 및 검증이 완료된 경우에만 상담 및 컨설팅이 가능하기 때문에
                  내용 기입 후 &apos;상담신청&apos;을 클릭해주시면 영업일 기준 1일 이내로 연락을 드립니다.
                </p>
              </div>
            </div>
          </div>

          {/* 오른쪽: 문의 폼 */}
          <form
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <span className="flex-shrink-0 text-slate-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h2v2h2v2h-2v2h2v2zm-2-8h-2V7h2v2z" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="필수 상호명"
                  className={INPUT_STYLE}
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="flex-shrink-0 text-slate-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="필수 담당자님 성함"
                  className={INPUT_STYLE}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <span className="flex-shrink-0 text-slate-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 01.99-.27 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.27 1l-2.2 2.2z" />
                  </svg>
                </span>
                <input
                  type="tel"
                  placeholder="필수 휴대폰 번호"
                  className={INPUT_STYLE}
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="flex-shrink-0 text-slate-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="선택 이메일 주소"
                  className={INPUT_STYLE}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <span className="flex-shrink-0 text-slate-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="선택 희망 기간 및 예산"
                  className={INPUT_STYLE}
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="flex-shrink-0 text-slate-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="선택 보유 채널 or 업체 정보"
                  className={INPUT_STYLE}
                />
              </div>
            </div>

            <div>
              <textarea
                placeholder="문의 및 희망 내용"
                rows={5}
                className={`${INPUT_STYLE} resize-none`}
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-400 text-[#2362ff] focus:ring-[#2362ff]"
                />
                <span className="text-sm text-white">개인정보 수집 및 이용 동의 CLICK</span>
              </label>
              <a
                href="/privacy"
                className="text-sm text-slate-400 hover:text-white underline"
              >
                개인정보처리방침
              </a>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#2362ff] py-4 text-base font-bold text-white shadow-lg transition-opacity hover:opacity-95 disabled:opacity-50"
              disabled={!agree}
            >
              작성완료 CLICK
            </button>

            <p className="text-xs text-slate-400 text-right">
              ※ 여러 차례 클릭 시 실패 팝업이 뜨며, 새로고침 후 재작성이 필요합니다.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
