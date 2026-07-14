"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BarChart3,
  Camera,
  Globe,
  Map,
  MapPin,
  Menu,
  Newspaper,
  PlayCircle,
  Search,
  Smile,
  Users,
  Video,
} from "lucide-react";
import { Container } from "./Container";

type Product = {
  title: string;
  description: string;
  icon: LucideIcon;
  className: string;
  visual?: "phone" | "chart" | "map" | "video";
  eyebrow?: string;
};

const PRODUCTS: Product[] = [
  {
    title: "구글노출 홈페이지 제작",
    description: "맞춤 웹사이트 제작",
    icon: Globe,
    className: "lg:col-span-3 lg:row-span-2",
    visual: "phone",
    eyebrow: "PREMIUM SERVICE 01",
  },
  {
    title: "플레이스 광고",
    description: "네이버 매장 노출 솔루션",
    icon: MapPin,
    className: "lg:col-span-1",
  },
  {
    title: "블로그 상위노출",
    description: "네이버 검색노출 마케팅",
    icon: Newspaper,
    className: "lg:col-span-1",
  },
  {
    title: "카페 바이럴",
    description: "카페노출 관리",
    icon: Users,
    className: "lg:col-span-1",
  },
  {
    title: "네이버 검색광고",
    description: "네이버 검색광고 운영",
    icon: Search,
    className: "lg:col-span-1 lg:row-span-2",
    visual: "chart",
  },
  {
    title: "검색어 자동완성",
    description: "브랜드 검색유도",
    icon: Menu,
    className: "lg:col-span-2",
  },
  {
    title: "인스타 운영",
    description: "인스타그램 계정운영 관리",
    icon: Camera,
    className: "lg:col-span-1",
  },
  {
    title: "유튜브 광고",
    description: "유튜브 광고운영",
    icon: PlayCircle,
    className: "lg:col-span-1",
  },
  {
    title: "홍보 영상 제작",
    description: "영상콘텐츠 제작",
    icon: Video,
    className: "lg:col-span-2",
    visual: "video",
    eyebrow: "CREATIVE CONTENT",
  },
  {
    title: "디스플레이 광고",
    description: "글로벌 광고노출",
    icon: BarChart3,
    className: "lg:col-span-2",
    visual: "map",
  },
  {
    title: "체험단 운영",
    description: "체험단 마케팅",
    icon: Smile,
    className: "lg:col-span-1",
  },
];

function PhoneMockup() {
  return (
    <div className="pointer-events-none absolute bottom-8 right-8 hidden h-44 w-28 rotate-6 rounded-[2rem] border border-primary/10 bg-tertiary p-2 shadow-2xl transition-all duration-500 group-hover:border-neutral/15 group-hover:bg-neutral/10 lg:block">
      <div className="h-full rounded-[1.45rem] border border-tertiary bg-neutral p-3 transition-all duration-500 group-hover:border-neutral/10 group-hover:bg-primary">
        <div className="mb-4 h-2 w-12 rounded-full bg-tertiary transition-colors duration-500 group-hover:bg-neutral/30" />
        <div className="space-y-2">
          <div className="h-14 rounded-2xl bg-tertiary transition-colors duration-500 group-hover:bg-neutral/15" />
          <div className="h-3 w-16 rounded-full bg-secondary transition-colors duration-500 group-hover:bg-neutral/50" />
          <div className="h-3 w-12 rounded-full bg-tertiary transition-colors duration-500 group-hover:bg-neutral/25" />
          <div className="mt-5 grid grid-cols-2 gap-2">
            <span className="h-8 rounded-xl bg-tertiary transition-colors duration-500 group-hover:bg-neutral/15" />
            <span className="h-8 rounded-xl bg-tertiary transition-colors duration-500 group-hover:bg-neutral/15" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ChartGraphic() {
  return (
    <div className="pointer-events-none absolute bottom-6 right-5 hidden h-[8.5rem] w-24 items-end gap-2 rounded-[1.65rem] border border-primary/10 bg-tertiary p-3.5 transition-all duration-500 group-hover:border-neutral/15 group-hover:bg-neutral/10 lg:flex">
      {[50, 82, 64, 102, 124].map((height) => (
        <span key={height} className="flex flex-1 items-end">
          <span
            className="w-full rounded-full bg-primary/80 transition-colors duration-500 group-hover:bg-neutral"
            style={{ height }}
          />
        </span>
      ))}
    </div>
  );
}

function MapGraphic() {
  return (
    <div className="pointer-events-none absolute bottom-7 right-7 hidden h-28 w-44 overflow-hidden rounded-[1.75rem] border border-primary/10 bg-tertiary transition-all duration-500 group-hover:border-neutral/15 group-hover:bg-neutral/10 lg:block">
      <Map className="absolute left-4 top-4 h-12 w-12 opacity-20 transition-colors duration-500 group-hover:text-neutral group-hover:opacity-50" />
      <span className="absolute left-20 top-6 h-2 w-16 rounded-full bg-secondary transition-colors duration-500 group-hover:bg-neutral/40" />
      <span className="absolute left-14 top-14 h-2 w-24 rounded-full bg-tertiary transition-colors duration-500 group-hover:bg-neutral/25" />
      <span className="absolute bottom-5 right-6 h-8 w-8 rounded-full border-4 border-primary transition-colors duration-500 group-hover:border-neutral" />
    </div>
  );
}

function VideoGraphic() {
  return (
    <div className="pointer-events-none absolute bottom-8 right-8 hidden w-56 rounded-[1.75rem] border border-primary/10 bg-tertiary p-4 transition-all duration-500 group-hover:border-neutral/15 group-hover:bg-neutral/10 lg:block">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-neutral transition-colors duration-500 group-hover:bg-neutral group-hover:text-primary">
          <PlayCircle className="h-5 w-5" />
        </span>
        <div className="flex-1 space-y-2">
          <div className="h-2 rounded-full bg-secondary transition-colors duration-500 group-hover:bg-neutral/50" />
          <div className="h-2 w-2/3 rounded-full bg-tertiary transition-colors duration-500 group-hover:bg-neutral/25" />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-1.5">
        {[0, 1, 2, 3].map((item) => (
          <span key={item} className="h-9 rounded-xl bg-tertiary transition-colors duration-500 group-hover:bg-neutral/15" />
        ))}
      </div>
    </div>
  );
}

function CardVisual({ type }: { type?: Product["visual"] }) {
  if (type === "phone") return <PhoneMockup />;
  if (type === "chart") return <ChartGraphic />;
  if (type === "map") return <MapGraphic />;
  if (type === "video") return <VideoGraphic />;
  return null;
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const Icon = product.icon;
  const isLarge = product.className.includes("row-span") || product.className.includes("col-span-3");
  const isChartCard = product.visual === "chart";
  const isHeroCard = product.visual === "phone";

  return (
    <Link
      href="https://open.kakao.com/o/s2RtMSei"
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex min-h-[220px] overflow-hidden rounded-[2.5rem] border border-tertiary bg-neutral ${isChartCard ? "p-8" : "p-10"} text-primary shadow-[0_18px_60px_rgba(15,23,42,0.05)] transition-all duration-500 ease-in-out hover:scale-[1.02] hover:border-primary hover:bg-primary hover:text-neutral hover:shadow-[0_24px_80px_rgba(0,0,0,0.18)] ${product.className}`}
    >
      <div className={`relative z-10 flex h-full min-h-[140px] w-full flex-col ${isChartCard ? "justify-start gap-8 lg:pb-36" : "justify-between gap-8"}`}>
        <div className="flex items-start justify-between gap-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-tertiary text-primary transition-all duration-500 group-hover:bg-neutral/10 group-hover:text-neutral">
            <Icon className="h-6 w-6" strokeWidth={1.9} />
          </div>
          <div className="flex items-center gap-3">
            {product.eyebrow && (
              <span className="hidden text-[10px] font-bold uppercase tracking-[0.28em] text-primary/35 transition-colors duration-500 group-hover:text-neutral/40 sm:inline">
                {product.eyebrow}
              </span>
            )}
            <ArrowUpRight className="h-5 w-5 opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
          </div>
        </div>

        <div className={isLarge ? "max-w-[420px]" : "max-w-[260px]"}>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-primary/35 transition-colors duration-500 group-hover:text-neutral/35">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className={`${isHeroCard ? "text-2xl sm:text-[1.8rem]" : isLarge ? "text-2xl sm:text-3xl" : "text-xl"} font-bold tracking-tighter text-primary transition-colors duration-500 group-hover:text-neutral ${isChartCard || isHeroCard ? "leading-tight" : ""}`}>
            {isChartCard ? (
              <>
                네이버
                <br />
                검색광고
              </>
            ) : (
              product.title
            )}
          </h3>
          <p className={`${isLarge ? "text-base" : "text-sm"} mt-4 leading-relaxed text-primary/70 transition-colors duration-500 group-hover:text-neutral/70`}>
            {product.description}
          </p>
        </div>
      </div>

      <CardVisual type={product.visual} />
    </Link>
  );
}

export function MarketingProductsSection() {
  return (
    <section id="services" className="relative z-10 border-t border-tertiary bg-tertiary py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mb-12 text-center sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary/45">
            Marketing Products
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
            애드그릿의 다양한 마케팅 상품
          </h2>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.title} product={product} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
