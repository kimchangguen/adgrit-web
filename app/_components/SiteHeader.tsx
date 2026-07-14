"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Building2,
  ChevronDown,
  Clapperboard,
  Lightbulb,
  Menu,
  Newspaper,
  Sparkles,
  SquarePlay,
  Target,
  UserRoundPlus,
  X,
  ChartNoAxesCombined,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const ICON_PROPS = {
  size: 26,
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function AboutIcon({ className }: { className?: string }) {
  return <Building2 {...ICON_PROPS} className={className} />;
}
function ShortformIcon({ className }: { className?: string }) {
  return <Clapperboard {...ICON_PROPS} className={className} />;
}
function GrowthIcon({ className }: { className?: string }) {
  return <UserRoundPlus {...ICON_PROPS} className={className} />;
}
function RankingIcon({ className }: { className?: string }) {
  return <ChartNoAxesCombined {...ICON_PROPS} className={className} />;
}
function ReelsSparkIcon({ className }: { className?: string }) {
  return (
    <span className={`relative inline-flex ${className ?? ""}`}>
      <SquarePlay {...ICON_PROPS} />
      <Sparkles
        size={13}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute -top-1 -right-1.5"
      />
    </span>
  );
}
function TargetAdIcon({ className }: { className?: string }) {
  return <Target {...ICON_PROPS} className={className} />;
}
function ConsultingIcon({ className }: { className?: string }) {
  return <Lightbulb {...ICON_PROPS} className={className} />;
}
function BlogIcon({ className }: { className?: string }) {
  return <Newspaper {...ICON_PROPS} className={className} />;
}

type NavChild = { href: string; label: string };
type NavItem = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
  children?: NavChild[];
};

const ABOUT_CHILDREN: NavChild[] = [
  { href: "/about", label: "회사소개" },
  { href: "/history", label: "회사연혁" },
  { href: "/organization", label: "조직도" },
  { href: "/contact", label: "오시는길" },
];

const navItems: NavItem[] = [
  { label: "About Us", icon: AboutIcon, children: ABOUT_CHILDREN },
  { label: "숏폼제작", icon: ShortformIcon, href: "/#shortform" },
  { label: "계정육성", icon: GrowthIcon, href: "/#account-growth" },
  { label: "상위노출", icon: RankingIcon, href: "/#ranking" },
  { label: "릴스파크", icon: ReelsSparkIcon, href: "/#reelspark" },
  { label: "타겟광고", icon: TargetAdIcon, href: "/#target-ads" },
  { label: "전략기획", icon: ConsultingIcon, href: "/#consulting" },
  { label: "꿀팁비법", icon: BlogIcon, href: "/blog" },
];

type SiteHeaderProps = {
  /** true: 히어로 최상단(투명), false: 스크롤 이후/기본 페이지(약한 그라데이션) */
  transparent?: boolean;
  /** 기존 호출부(HeroWithScrollEffect) 호환을 위해 타입만 유지, 현재 미사용 */
  lightText?: boolean;
};

export function SiteHeader({ transparent = false }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const isItemActive = (item: NavItem) =>
    item.href
      ? pathname === item.href
      : (item.children?.some((child) => pathname === child.href) ?? false);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileAboutOpen(false);
  };

  return (
    <header className="gnav-header">
      <div
        className={`header-background ${transparent ? "is-over-hero" : "is-over-content"}`}
        aria-hidden
      />

      <div className="header-content">
        <div className="mx-auto grid h-full w-full max-w-[1800px] grid-cols-[auto_1fr_auto] lg:grid-cols-[220px_1fr_220px] items-center gap-4 px-6 lg:px-10">
          <Link
            href="/"
            className="flex-shrink-0 select-none flex items-center"
            aria-label="홈으로 이동"
          >
            <span className="adgrit-brand-logo" role="img" aria-label="ADGRIT 로고" />
          </Link>

          {/* 데스크톱 내비게이션 */}
          <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-3 2xl:gap-5">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setIsAboutOpen(true)}
                  onMouseLeave={() => setIsAboutOpen(false)}
                  onFocus={() => setIsAboutOpen(true)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                      setIsAboutOpen(false);
                    }
                  }}
                >
                  <button
                    type="button"
                    className={`gnav-item ${isAboutOpen ? "gnav-item--active" : ""}`}
                    aria-haspopup="true"
                    aria-expanded={isAboutOpen}
                  >
                    <item.icon className="gnav-item__icon" />
                    <span className="gnav-item__label">{item.label}</span>
                    <span className="gnav-item__underline" aria-hidden />
                  </button>
                  <AnimatePresence>
                    {isAboutOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="gnav-dropdown absolute left-1/2 top-full min-w-[190px] -translate-x-1/2 p-2 pt-2"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="gnav-dropdown__link"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className={`gnav-item ${isItemActive(item) ? "gnav-item--active" : ""}`}
                >
                  <item.icon className="gnav-item__icon" />
                  <span className="gnav-item__label">{item.label}</span>
                  <span className="gnav-item__underline" aria-hidden />
                </Link>
              )
            )}
          </nav>

          {/* 모바일 햄버거 버튼 */}
          <button
            type="button"
            className="lg:hidden col-start-3 justify-self-end text-white p-2"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* 모바일 메뉴 패널 */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden gnav-dropdown mx-4 mt-2 overflow-hidden"
            >
              <div className="max-h-[70vh] overflow-y-auto p-2">
                {navItems.map((item) =>
                  item.children ? (
                    <div key={item.label}>
                      <button
                        type="button"
                        className="gnav-mobile-item justify-between"
                        onClick={() => setMobileAboutOpen((prev) => !prev)}
                        aria-expanded={mobileAboutOpen}
                      >
                        <span className="flex items-center gap-3">
                          <item.icon className="gnav-item__icon" />
                          {item.label}
                        </span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileAboutOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-10"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="gnav-dropdown__link block"
                                onClick={closeMobile}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href!}
                      className="gnav-mobile-item"
                      onClick={closeMobile}
                    >
                      <item.icon className="gnav-item__icon" />
                      {item.label}
                    </Link>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
