"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "./Container";

const navItems = [
  {
    label: "About",
    children: [
      { href: "#about", label: "회사소개" },
      { href: "#about", label: "회사연혁" },
      { href: "#about", label: "조직도" },
      { href: "#contact", label: "오시는 길" },
    ],
  },
  {
    label: "Services",
    children: [
      { href: "#services", label: "구글 애즈" },
      { href: "#services", label: "SEO & GEO" },
      { href: "#services", label: "워드프레스" },
      { href: "#services", label: "퍼포먼스 마케팅" },
    ],
  },
  {
    label: "Blogs",
    children: [
      { href: "#insights", label: "인사이트" },
    ],
  },
  {
    label: "Contact us",
    children: [
      { href: "#contact", label: "공지사항" },
      { href: "#contact", label: "문의사항" },
      { href: "#contact", label: "견적 문의" },
      { href: "#faq", label: "자주 묻는 질문" },
    ],
  },
];

export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

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

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-zinc-200 hover:text-white transition-colors"
                aria-expanded={openMenu === item.label}
                aria-haspopup="true"
              >
                {item.label}
                <span className="text-xs">▼</span>
              </button>
              {openMenu === item.label && (
                <div className="absolute left-0 top-full pt-1 min-w-[180px]">
                  <div className="rounded-lg border border-white/10 bg-black/95 py-2 shadow-xl backdrop-blur">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-zinc-200 hover:bg-white/5 hover:text-white transition-colors"
                        onClick={() => setOpenMenu(null)}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
