import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#1a1a2e] text-white">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="text-lg font-black tracking-wider">
              AD<span className="text-[#60a5fa]">GRIT</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              혁신적인 마케팅 컨설팅 솔루션,
              <br />
              검증된 성공과 성장
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center justify-center rounded-full border border-slate-500 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              문의하기
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <div className="text-sm font-semibold text-white">Address</div>
              <ul className="mt-3 space-y-1 text-sm text-slate-400 leading-relaxed">
                <li>서울 송파구 문정동 634 405호 업무지점</li>
                <li>경기도성남시 분당구 여수동 189 805호 연구지점</li>
                <li>상호 : ADGRIT</li>
                <li>대표 : 김창근</li>
                <li>사업자 번호 : 263-23-00560</li>
                <li>대표번호 : 1661-0646</li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Contact</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li>T. 010-3316-7663</li>
                <li>T. 010-6663-2336</li>
                <li>T. 010-3300-7088</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-700 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} ADGRIT. All rights reserved.</p>
          <div className="flex gap-4">
            <span>개인정보처리방침</span>
            <span>이용약관</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
