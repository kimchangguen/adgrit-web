"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BadgeDollarSign,
  Banknote,
  Building2,
  Camera,
  CarFront,
  CircleDot,
  Coffee,
  CreditCard,
  Factory,
  Film,
  Gem,
  Landmark,
  Music2,
  Play,
  Search,
  Shirt,
  ShoppingBag,
  Sparkles,
  Store,
  Trophy,
  Utensils,
} from "lucide-react";
import { SectionBackdrop } from "./backgrounds/SectionBackdrop";

type BrandLogo = {
  name: string;
  logoUrl?: string;
  Icon?: LucideIcon;
  wordmarkStyle?: CSSProperties;
};

// logoUrl에 공식 SVG/PNG 경로를 추가하면 워드마크가 자동으로 이미지로 교체됩니다.
const LOGOS: BrandLogo[] = [
  { name: "SAMSUNG", wordmarkStyle: { letterSpacing: "0.08em", fontWeight: 900 } },
  { name: "HYUNDAI", Icon: CarFront, wordmarkStyle: { letterSpacing: "-0.03em", fontStyle: "italic", fontWeight: 800 } },
  { name: "LG", Icon: CircleDot, wordmarkStyle: { fontSize: "1.12em", fontWeight: 900 } },
  { name: "SK", Icon: Sparkles, wordmarkStyle: { fontSize: "1.08em", fontStyle: "italic", fontWeight: 900 } },
  { name: "LOTTE", Icon: Gem, wordmarkStyle: { letterSpacing: "0.05em", fontWeight: 900 } },
  { name: "POSCO", Icon: Factory, wordmarkStyle: { letterSpacing: "0.02em", fontWeight: 600 } },
  { name: "NAVER", wordmarkStyle: { letterSpacing: "-0.04em", fontWeight: 900 } },
  { name: "kakao", wordmarkStyle: { letterSpacing: "-0.05em", fontWeight: 500 } },
  { name: "Google", Icon: Search, wordmarkStyle: { letterSpacing: "-0.05em", fontWeight: 600 } },
  { name: "YouTube", Icon: Play, wordmarkStyle: { letterSpacing: "-0.05em", fontWeight: 800 } },
  { name: "Instagram", Icon: Camera, wordmarkStyle: { fontStyle: "italic", fontWeight: 700 } },
  { name: "TikTok", Icon: Music2, wordmarkStyle: { letterSpacing: "-0.05em", fontWeight: 800 } },
  { name: "신세계", Icon: Sparkles, wordmarkStyle: { fontWeight: 800 } },
  { name: "이마트", Icon: ShoppingBag, wordmarkStyle: { fontWeight: 900 } },
  { name: "GS", Icon: CircleDot, wordmarkStyle: { fontSize: "1.08em", fontWeight: 900 } },
  { name: "현대백화점", Icon: Building2, wordmarkStyle: { fontWeight: 700 } },
  { name: "KB국민은행", Icon: Landmark, wordmarkStyle: { letterSpacing: "-0.05em", fontWeight: 700 } },
  { name: "신한은행", Icon: Banknote, wordmarkStyle: { letterSpacing: "-0.05em", fontWeight: 700 } },
  { name: "하나은행", Icon: Landmark, wordmarkStyle: { letterSpacing: "-0.05em", fontWeight: 700 } },
  { name: "우리은행", Icon: CreditCard, wordmarkStyle: { letterSpacing: "-0.05em", fontWeight: 700 } },
  { name: "NH농협은행", Icon: BadgeDollarSign, wordmarkStyle: { letterSpacing: "-0.05em", fontWeight: 700 } },
  { name: "NIKE", Icon: Trophy, wordmarkStyle: { letterSpacing: "-0.06em", fontStyle: "italic", fontWeight: 900 } },
  { name: "adidas", Icon: Shirt, wordmarkStyle: { letterSpacing: "-0.06em", fontWeight: 900 } },
  { name: "MUSINSA", wordmarkStyle: { letterSpacing: "0.04em", fontWeight: 700 } },
  { name: "배달의민족", Icon: Utensils, wordmarkStyle: { letterSpacing: "-0.08em", fontWeight: 900 } },
  { name: "야놀자", Icon: Store, wordmarkStyle: { letterSpacing: "-0.07em", fontWeight: 900 } },
  { name: "SOCAR", Icon: CarFront, wordmarkStyle: { letterSpacing: "0.06em", fontWeight: 800 } },
  { name: "GS25", Icon: Store, wordmarkStyle: { letterSpacing: "-0.04em", fontWeight: 900 } },
  { name: "7-ELEVEN", Icon: Store, wordmarkStyle: { letterSpacing: "-0.04em", fontStyle: "italic", fontWeight: 900 } },
  { name: "EDIYA", Icon: Coffee, wordmarkStyle: { letterSpacing: "0.02em", fontWeight: 900 } },
  { name: "STARBUCKS", Icon: Coffee, wordmarkStyle: { fontSize: "0.9em", letterSpacing: "0.03em", fontWeight: 800 } },
  { name: "CGV", Icon: Film, wordmarkStyle: { fontStyle: "italic", fontWeight: 900 } },
];

const ROWS = [
  LOGOS.slice(0, 8),
  LOGOS.slice(8, 16),
  LOGOS.slice(16, 24),
  LOGOS.slice(24, 32),
];

const DURATIONS = ["28s", "32s", "26s", "30s"];

function LogoCard({ logo }: { logo: BrandLogo }) {
  const Icon = logo.Icon;

  return (
    <div className="flex h-[50px] min-w-[132px] shrink-0 items-center justify-center rounded-[9px] border border-violet-400/15 bg-[rgba(20,15,30,0.6)] px-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] sm:h-[56px] sm:min-w-[158px] sm:px-6">
      {logo.logoUrl ? (
        <Image
          src={logo.logoUrl}
          alt={`${logo.name} 로고`}
          width={120}
          height={34}
          className="max-h-7 w-auto max-w-[118px] object-contain brightness-0 invert sm:max-h-8 sm:max-w-[138px]"
        />
      ) : (
        <div className="flex min-w-0 items-center justify-center gap-2.5 text-white/95">
          {Icon && <Icon className="h-[21px] w-[21px] shrink-0 sm:h-6 sm:w-6" strokeWidth={1.9} aria-hidden />}
          <span
            className="whitespace-nowrap text-[13px] leading-none sm:text-[15px]"
            style={logo.wordmarkStyle}
          >
            {logo.name}
          </span>
        </div>
      )}
    </div>
  );
}

function MarqueeRow({ logos, row }: { logos: BrandLogo[]; row: number }) {
  const reverse = row % 2 === 1;

  return (
    <div className="brand-marquee-row overflow-hidden" aria-label={`브랜드 로고 ${row + 1}번째 줄`}>
      <div
        className={`brand-marquee-track ${reverse ? "brand-marquee-reverse" : "brand-marquee-forward"}`}
        style={{ animationDuration: DURATIONS[row] }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 gap-2.5 pr-2.5 sm:gap-3 sm:pr-3" aria-hidden={copy === 1}>
            {logos.map((logo, index) => <LogoCard key={`${copy}-${logo.name}-${index}`} logo={logo} />)}
          </div>
        ))}
      </div>
    </div>
  );
}

export function OurClientsSection() {
  return (
    <section className="ig-section relative z-10 w-full py-16 sm:py-20 lg:py-24">
      <SectionBackdrop variant="s5b" />
      <div className="ig-content mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-[1.14rem] font-semibold uppercase tracking-widest text-white">OUR CLIENTS</p>
          <h2 className="mt-4 text-[1.96rem] font-bold leading-tight text-white sm:text-[2.44rem] lg:text-[2.92rem]">
            약 <span className="ig-gradient-text">100+ 대형 브랜드</span>와,
            <br />
            <span className="ig-gradient-text">2000+ 소상공인 브랜드</span>와 함께 성장중입니다
          </h2>
        </div>

        <div className="brand-marquee mt-10 h-[238px] max-h-[300px] space-y-2.5 overflow-hidden rounded-2xl border border-violet-400/15 bg-[rgba(7,5,16,0.42)] py-2.5 shadow-[0_0_28px_rgba(139,92,246,0.12)] sm:mt-14 sm:h-[272px] sm:space-y-3 sm:py-3">
          {ROWS.map((logos, row) => <MarqueeRow key={row} logos={logos} row={row} />)}
        </div>
      </div>

      <style jsx global>{`
        @keyframes brand-marquee-forward {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes brand-marquee-reverse {
          from { transform: translate3d(-50%, 0, 0); }
          to { transform: translate3d(0, 0, 0); }
        }
        .brand-marquee-track {
          display: flex;
          width: max-content;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
        .brand-marquee-forward { animation-name: brand-marquee-forward; }
        .brand-marquee-reverse { animation-name: brand-marquee-reverse; }
        .brand-marquee:hover .brand-marquee-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .brand-marquee-track { animation-duration: 80s !important; }
        }
      `}</style>
    </section>
  );
}
