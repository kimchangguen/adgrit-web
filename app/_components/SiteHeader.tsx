"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Container } from "./Container";

const navItems: Array<{
  label: string;
  href?: string;
  children?: Array<{ href: string; label: string }>;
}> = [
  {
    label: "About Us",
    children: [
      { href: "#about", label: "회사소개" },
      { href: "#about", label: "회사연혁" },
      { href: "#about", label: "조직도" },
      { href: "#contact", label: "오시는길" },
    ],
  },
  {
    label: "Business",
    children: [
      { href: "#services", label: "Automation" },
      { href: "#services", label: "Consulting" },
      { href: "#services", label: "Development" },
    ],
  },
  {
    label: "Service",
    children: [
      { href: "#services", label: "마케팅전략" },
      { href: "#services", label: "구글노출" },
      { href: "#services", label: "SNS채널관리" },
      { href: "#services", label: "퍼포먼스" },
      { href: "#services", label: "콘텐츠제작" },
      { href: "#services", label: "통합솔루션" },
    ],
  },
  {
    label: "Grit View",
    href: "#insights",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm shadow-sm">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-lg font-black tracking-wider text-[#1a1a2e] select-none"
          aria-label="홈으로 이동"
        >
          AD<span className="text-[#1e40af]">GRIT</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() =>
                item.children ? setOpenMenu(item.label) : setOpenMenu(null)
              }
              onMouseLeave={() => setOpenMenu(null)}
            >
              {item.href ? (
                <a
                  href={item.href}
                  className="block px-2 py-2 text-base font-bold text-slate-600 hover:text-[#1a1a2e] transition-colors tracking-wide"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  className="block px-2 py-2 text-base font-bold text-slate-600 hover:text-[#1a1a2e] transition-colors tracking-wide text-left w-full"
                  aria-expanded={openMenu === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                </button>
              )}
              {item.children && (
                <AnimatePresence>
                  {openMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full pt-1 min-w-[200px]"
                    >
                      <div className="rounded-lg border border-slate-200 bg-white py-2 shadow-lg">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#1e40af] transition-colors"
                            onClick={() => setOpenMenu(null)}
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-[#1e40af] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#1e3a8a] transition-colors shadow-sm"
        >
          1시간 컨설팅하기
        </a>
      </Container>
    </header>
  );
}
