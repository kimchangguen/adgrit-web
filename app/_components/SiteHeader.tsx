"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
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
      { href: "/about", label: "회사소개" },
      { href: "/history", label: "회사연혁" },
      { href: "/organization", label: "조직도" },
      { href: "/contact", label: "오시는길" },
    ],
  },
  {
    label: "Business",
    children: [
      { href: "/business/automation", label: "Automation" },
      { href: "/business/consulting", label: "Consulting" },
      { href: "/business/development", label: "Development" },
    ],
  },
  {
    label: "Service",
    children: [
      { href: "/service/marketing", label: "마케팅전략" },
      { href: "/service/google", label: "구글노출" },
      { href: "/service/sns", label: "SNS채널관리" },
      { href: "/service/performance", label: "퍼포먼스" },
      { href: "/service/content", label: "콘텐츠제작" },
      { href: "/service/integrated", label: "통합솔루션" },
    ],
  },
  {
    label: "Grit View",
    children: [{ href: "/blog", label: "블로그" }],
  },
];

type SiteHeaderProps = {
  /** Hero 영역용 - 배경 투명 (같은 배경 노출) */
  transparent?: boolean;
  /** 어두운 배경 시 라이트 텍스트 */
  lightText?: boolean;
};

export function SiteHeader({ transparent = false, lightText = false }: SiteHeaderProps) {
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [hoveredColumn, setHoveredColumn] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[9999] w-full ${
        transparent
          ? "bg-transparent backdrop-blur-[2px]"
          : "border-b border-slate-200 bg-white/95 backdrop-blur-sm shadow-sm"
      }`}
    >
      <Container className="relative grid h-14 sm:h-16 grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4">
        <Link
          href="/"
          className="flex-shrink-0 justify-self-start select-none flex items-center"
          aria-label="홈으로 이동"
        >
          <Image src="/adgrit-logo-v2.png" alt="ADGRIT 로고" height={22} width={81} className="h-6 w-auto object-contain" priority />
        </Link>

        {/* 모바일: 메인 메뉴 + 탭 시 서브메뉴 드롭다운 */}
        <div className="flex md:hidden col-start-2 flex-col min-w-0 relative justify-self-center">
          <nav className="flex items-center justify-center gap-4 sm:gap-6 overflow-x-auto">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() =>
                  setOpenMobileMenu((prev) => (prev === item.label ? null : item.label))
                }
                className={`flex-shrink-0 text-sm sm:text-base font-bold whitespace-nowrap py-2 ${
                  openMobileMenu === item.label
                    ? lightText ? "text-slate-300" : "text-[#222222]"
                    : lightText ? "text-white/90 hover:text-white" : "text-[#222222] hover:text-[#222222]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          {/* 모바일: 드롭다운 바깥 클릭 시 닫기 */}
          {openMobileMenu && (
            <button
              type="button"
              aria-label="메뉴 닫기"
              className="fixed inset-0 z-40"
              onClick={() => setOpenMobileMenu(null)}
            />
          )}
          {/* 모바일 서브메뉴 드롭다운 */}
          <AnimatePresence initial={false}>
            {openMobileMenu && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 left-0 top-full pt-2 z-50"
              >
                <div className="rounded-lg border border-slate-200 bg-white py-3 shadow-lg">
                  {navItems
                    .filter((item) => item.label === openMobileMenu)
                    .map((item) => (
                      <div key={item.label} className="flex flex-col">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-5 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#222222]"
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

        {/* 데스크톱: 메가 메뉴 - 센터 정렬 */}
        <nav
          className="hidden md:flex col-start-2 col-end-3 justify-center items-center gap-10 lg:gap-14 xl:gap-16 relative justify-self-center"
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
                className={`block px-2 py-2 text-lg lg:text-xl font-bold transition-colors tracking-wide text-left w-full ${
                  hoveredColumn === item.label && isMegaOpen
                    ? lightText ? "text-slate-300" : "text-[#222222]"
                    : lightText ? "text-white/90 hover:text-white" : "text-[#222222] hover:text-[#222222]"
                }`}
                aria-expanded={isMegaOpen}
                aria-haspopup="true"
              >
                {item.label}
              </button>
            </div>
          ))}

          {/* 메가 메뉴 - 메인 메뉴와 동일한 gap/센터 정렬 */}
          <AnimatePresence>
            {isMegaOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="absolute left-1/2 -translate-x-1/2 top-full pt-1"
              >
                <div className="flex rounded-lg border border-slate-200 bg-white shadow-lg overflow-hidden gap-10 lg:gap-14 xl:gap-16 py-4 px-4">
                  {navItems.map((item) => (
                      <div
                        key={item.label}
                        className={`min-w-[140px] px-2 transition-colors ${
                          hoveredColumn === item.label
                            ? "bg-[#222222] text-white rounded"
                            : "bg-white"
                        }`}
                        onMouseEnter={() => setHoveredColumn(item.label)}
                      >
                        <div
                          className={`font-bold text-base mb-3 ${
                            hoveredColumn === item.label
                              ? "text-white"
                              : "text-[#1f1f1f]"
                          }`}
                        >
                          {item.label}
                        </div>
                        <div className="space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className={`block py-2 px-0 text-sm transition-colors ${
                                hoveredColumn === item.label
                                  ? "text-white/90 hover:text-white hover:bg-white/10 rounded"
                                  : "text-slate-600 hover:bg-slate-50 hover:text-[#222222]"
                              }`}
                              onClick={() => {
                                setIsMegaOpen(false);
                                setHoveredColumn(null);
                              }}
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
