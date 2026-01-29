import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-lg font-black tracking-wider text-white">
              AD<span className="text-indigo-400">GRIT</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              데이터 기반 성과 마케팅으로 비즈니스 성장을 만듭니다.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-sm font-semibold text-white">빠른 링크</div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                <li>
                  <a className="hover:text-white" href="#about">
                    회사소개
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#services">
                    서비스
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#insights">
                    인사이트
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#contact">
                    문의하기
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">서비스</div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                <li>구글 애즈</li>
                <li>SEO &amp; GEO</li>
                <li>워드프레스</li>
                <li>퍼포먼스 마케팅</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">문의</div>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              <li>주소: (여기에 회사 주소 입력)</li>
              <li>Tel: (전화번호)</li>
              <li>Email: (이메일)</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} ADGRIT. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="hover:text-zinc-200" href="#">
              개인정보처리방침
            </a>
            <a className="hover:text-zinc-200" href="#">
              이용약관
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

