import Link from "next/link";
import { Container } from "./Container";

const nav = [
  { href: "#about", label: "회사소개" },
  { href: "#services", label: "서비스" },
  { href: "#insights", label: "인사이트" },
  { href: "#contact", label: "문의하기" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-lg font-black tracking-wider text-white select-none"
          aria-label="홈으로 이동"
        >
          AD<span className="text-indigo-400">GRIT</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-200 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200 transition-colors"
        >
          무료 상담 시작하기
        </a>
      </Container>
    </header>
  );
}

