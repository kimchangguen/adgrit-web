"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Container } from "./Container";

const navItems = [
  {
    label: "About Us",
    children: [
      { href: "/about",        label: "회사소개" },
      { href: "/history",      label: "회사연혁" },
      { href: "/organization", label: "조직도"   },
      { href: "/contact",      label: "오시는길" },
    ],
  },
  {
    label: "Business",
    children: [
      { href: "/business/automation",  label: "Automation"  },
      { href: "/business/consulting",  label: "Consulting"  },
      { href: "/business/development", label: "Development" },
    ],
  },
  {
    label: "Service",
    children: [
      { href: "/service/marketing",   label: "마케팅전략"   },
      { href: "/service/google",      label: "구글노출"     },
      { href: "/service/sns",         label: "SNS채널관리"  },
      { href: "/service/performance", label: "퍼포먼스"     },
      { href: "/service/content",     label: "콘텐츠제작"   },
      { href: "/service/integrated",  label: "통합솔루션"   },
    ],
  },
  {
    label: "Grit View",
    children: [{ href: "/blog", label: "블로그" }],
  },
] as const;

type SiteHeaderProps = {
  /** 히어로 위에서 사용 — 스크롤 전 배경 숨김 */
  transparent?: boolean;
  /** @deprecated — 다크 테마 통합으로 더 이상 필요 없음 */
  lightText?: boolean;
};

export function SiteHeader({ transparent = false }: SiteHeaderProps) {
  const [isMegaOpen,     setIsMegaOpen]     = useState(false);
  const [hoveredColumn,  setHoveredColumn]  = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-black/85 backdrop-blur-md border-b border-white/[0.08]"
      }`}
    >
      <Container className="relative grid h-14 sm:h-16 grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4">

        {/* 로고 */}
        <Link
          href="/"
          className="flex-shrink-0 justify-self-start select-none ml-[90px]"
          aria-label="홈으로 이동"
        >
          <img src="/logo.png" alt="ADGRIT" height="40" className="w-auto" />
        </Link>

        {/* ── 모바일 메뉴 ──────────────────────────────── */}
        <div className="flex md:hidden col-start-2 flex-col min-w-0 relative justify-self-center">
          <nav className="flex items-center justify-center gap-4 sm:gap-6 overflow-x-auto">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() =>
                  setOpenMobileMenu((prev) => (prev === item.label ? null : item.label))
                }
                className={`flex-shrink-0 text-sm sm:text-base font-bold whitespace-nowrap py-2 transition-colors ${
                  openMobileMenu === item.label
                    ? "text-[#2563EB]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* 바깥 클릭 닫기 */}
          {openMobileMenu && (
            <button
              type="button"
              aria-label="메뉴 닫기"
              className="fixed inset-0 z-40"
              onClick={() => setOpenMobileMenu(null)}
            />
          )}

          {/* 모바일 드롭다운 */}
          <AnimatePresence initial={false}>
            {openMobileMenu && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="absolute right-0 left-0 top-full pt-2 z-50"
              >
                <div className="rounded-lg border border-white/[0.1] bg-zinc-950 py-2 shadow-2xl backdrop-blur-sm">
                  {navItems
                    .filter((item) => item.label === openMobileMenu)
                    .map((item) => (
                      <div key={item.label} className="flex flex-col">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-5 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors"
                            onClick={() => setOpenMobileMenu(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── 데스크톱 메가 메뉴 ───────────────────────── */}
        <nav
          className="hidden md:flex col-start-2 col-end-3 justify-center items-center gap-10 lg:gap-14 xl:gap-16 relative justify-self-center"
          onMouseEnter={() => setIsMegaOpen(true)}
          onMouseLeave={() => { setIsMegaOpen(false); setHoveredColumn(null); }}
        >
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setHoveredColumn(item.label)}
            >
              <button
                className={`block px-2 py-2 text-lg lg:text-xl font-bold tracking-wide transition-colors ${
                  hoveredColumn === item.label && isMegaOpen
                    ? "text-[#2563EB]"
                    : "text-white/80 hover:text-white"
                }`}
                aria-expanded={isMegaOpen}
                aria-haspopup="true"
              >
                {item.label}
              </button>
            </div>
          ))}

          {/* 메가 드롭다운 */}
          <AnimatePresence>
            {isMegaOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
                className="absolute left-1/2 -translate-x-1/2 top-full pt-1"
              >
                <div className="flex rounded-lg border border-white/[0.1] bg-zinc-950/95 backdrop-blur-md shadow-2xl overflow-hidden gap-10 lg:gap-14 xl:gap-16 py-5 px-5">
                  {navItems.map((item) => (
                    <div
                      key={item.label}
                      className={`min-w-[120px] px-2 py-1 rounded-md transition-colors ${
                        hoveredColumn === item.label ? "bg-white/[0.06]" : ""
                      }`}
                      onMouseEnter={() => setHoveredColumn(item.label)}
                    >
                      <p
                        className={`font-bold text-sm mb-3 tracking-wide transition-colors ${
                          hoveredColumn === item.label ? "text-[#2563EB]" : "text-white/35"
                        }`}
                      >
                        {item.label}
                      </p>
                      <div className="space-y-0.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block py-1.5 text-sm text-white/65 hover:text-white transition-colors"
                            onClick={() => { setIsMegaOpen(false); setHoveredColumn(null); }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

      </Container>
    </header>
  );
}
