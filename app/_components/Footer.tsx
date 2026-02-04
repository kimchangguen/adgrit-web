import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="text-lg font-black tracking-wider text-white">
              AD<span className="text-indigo-400">GRIT</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300">
              혁신적인 마케팅 컨설팅 솔루션,
              <br />
              검증된 성공과 성장
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
            >
              문의하기
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <div className="text-sm font-semibold text-white">Address</div>
              <ul className="mt-3 space-y-1 text-sm text-zinc-400 leading-relaxed">
                <li>(여기에 회사 주소 입력)</li>
                <li>상호 : ADGRIT</li>
                <li>대표 : (대표이름)</li>
                <li>사업자 번호 : (사업자번호)</li>
                <li>대표번호 : (전화번호)</li>
                <li>팩스 : (팩스번호)</li>
                <li>이메일 : (이메일)</li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Contact</div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                <li>T. (전화번호)</li>
                <li>F. (팩스번호)</li>
              </ul>

              <nav className="mt-6">
                <div className="text-sm font-semibold text-white">빠른 링크</div>
                <ul className="mt-3 flex flex-wrap gap-4 text-sm text-zinc-400">
                  <li>
                    <a className="hover:text-white transition-colors" href="#about">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white transition-colors" href="#services">
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white transition-colors" href="#insights">
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white transition-colors" href="#contact">
                      Contact us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} ADGRIT. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="hover:text-zinc-200 transition-colors" href="#">
              개인정보처리방침
            </a>
            <a className="hover:text-zinc-200 transition-colors" href="#">
              이용약관
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
