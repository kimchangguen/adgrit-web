import { Container } from "./Container";
import { SectionBackdrop } from "./backgrounds/SectionBackdrop";

export function Footer() {
  return (
    <footer className="ig-section relative">
      <SectionBackdrop variant="footer" />
      <Container className="ig-content py-12 sm:py-16">
        <div className="ig-glass-panel-lg rounded-[28px] p-6 sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="text-lg font-black tracking-wider text-white">
              AD<span className="ig-gradient-text">GRIT</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              혁신적인 마케팅 컨설팅 솔루션,
              <br />
              검증된 성공과 성장
            </p>
            <a
              href="https://open.kakao.com/o/s2RtMSei"
              target="_blank"
              rel="noopener noreferrer"
              className="ig-btn-glass mt-4 inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-white hover:bg-white/15 transition-colors"
            >
              문의하기
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <div className="text-sm font-semibold text-white">Address</div>
              <ul className="mt-3 space-y-1 text-sm text-white/55 leading-relaxed">
                <li>서울 송파구 문정동 634 405호 업무지점</li>
                <li>경기도성남시 분당구 여수동 189 805호 연구지점</li>
                <li>상호 : ADGRIT</li>
                <li>대표 : 김창근</li>
                <li>사업자 번호 : 263-23-00560</li>
                <li>대표번호 : <a href="tel:1661-0646" className="transition-colors hover:text-white">1661-0646</a></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Contact</div>
              <ul className="mt-3 space-y-2 text-sm text-white/55">
                <li>T. <a href="tel:010-3316-7663" className="transition-colors hover:text-white">010-3316-7663</a></li>
                <li>T. <a href="tel:010-6663-2336" className="transition-colors hover:text-white">010-6663-2336</a></li>
                <li>T. <a href="tel:010-3300-7088" className="transition-colors hover:text-white">010-3300-7088</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} ADGRIT. All rights reserved.</p>
          <div className="flex gap-4">
            <span>개인정보처리방침</span>
            <span>이용약관</span>
          </div>
        </div>
        </div>
      </Container>
    </footer>
  );
}
