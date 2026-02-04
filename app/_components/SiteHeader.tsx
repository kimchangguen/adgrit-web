"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Container } from "./Container";

const navItems: Array<{
  label: string;
  children: Array<{ href: string; label: string }>;
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
    children: [{ href: "#insights", label: "블로그" }],
  },
];

type SiteHeaderProps = {
  /** Hero 영역용 - 배경 투명 (같은 배경 노출) */
  transparent?: boolean;
};

export function SiteHeader({ transparent = false }: SiteHeaderProps) {
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [hoveredColumn, setHoveredColumn] = useState<string | null>(null);

  return (
    <header
      className={`sticky top-0 z-50 ${
        transparent
          ? "border-b border-white/30 bg-transparent backdrop-blur-[2px]"
          : "border-b border-slate-200 bg-white/95 backdrop-blur-sm shadow-sm"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-8">
        <Link
          href="/"
          className="flex-shrink-0 text-lg font-black tracking-wider text-[#1a1a2e] select-none"
          aria-label="홈으로 이동"
        >
          AD<span className="text-[#1e40af]">GRIT</span>
        </Link>

        <nav
          className="hidden md:flex items-center justify-center gap-8 relative flex-1"
          onMouseEnter={() => setIsMegaOpen(true)}
          onMouseLeave={() => {
            setIsMegaOpen(false);
            setHoveredColumn(null);
          }}
        >
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setHoveredColumn(item.label)}
            >
              <button
                className={`block px-2 py-2 text-base font-bold transition-colors tracking-wide text-left w-full ${
                  hoveredColumn === item.label && isMegaOpen
                    ? "text-[#1e40af]"
                    : "text-slate-600 hover:text-[#1a1a2e]"
                }`}
                aria-expanded={isMegaOpen}
                aria-haspopup="true"
              >
                {item.label}
              </button>
            </div>
          ))}

          {/* 메가 메뉴 - 전체가 한번에 열림 */}
          <AnimatePresence>
            {isMegaOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 right-0 top-full pt-1"
              >
                <div className="rounded-lg border border-slate-200 bg-white shadow-lg overflow-hidden flex">
                  {navItems.map((item) => (
                    <div
                      key={item.label}
                      className={`flex-1 min-w-[180px] py-4 transition-colors ${
                        hoveredColumn === item.label
                          ? "bg-[#1e40af] text-white"
                          : "bg-white"
                      }`}
                      onMouseEnter={() => setHoveredColumn(item.label)}
                    >
                      <div
                        className={`px-5 font-bold text-base mb-3 ${
                          hoveredColumn === item.label
                            ? "text-white"
                            : "text-[#1a1a2e]"
                        }`}
                      >
                        {item.label}
                      </div>
                      <div className="space-y-1">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className={`block px-5 py-2 text-sm transition-colors ${
                              hoveredColumn === item.label
                                ? "text-white/90 hover:text-white hover:bg-white/10"
                                : "text-slate-600 hover:bg-slate-50 hover:text-[#1e40af]"
                            }`}
                            onClick={() => {
                              setIsMegaOpen(false);
                              setHoveredColumn(null);
                            }}
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        <a
          href="#contact"
          className="flex-shrink-0 inline-flex items-center justify-center rounded-full bg-[#1e40af] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#1e3a8a] transition-colors shadow-sm"
        >
          1시간 컨설팅하기
        </a>
      </Container>
    </header>
  );
}
