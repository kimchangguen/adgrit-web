import type { Metadata } from "next";
import "./globals.css";
import { FloatingActions } from "./_components/FloatingActions";

const BASE_URL = "https://www.adgritcore.com";
const DEFAULT_TITLE = "ADGRIT | 성과로 증명하는 광고대행";
const DEFAULT_DESC =
  "Google Ads, SEO & GEO, 워드프레스, 퍼포먼스 마케팅을 하나의 성장 엔진으로 설계합니다.";
const DEFAULT_OG_IMAGE = `${BASE_URL}/image/000.png`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: BASE_URL,
  },
  title: {
    default: DEFAULT_TITLE,
    template: "%s | ADGRIT",
  },
  description: DEFAULT_DESC,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    siteName: "ADGRIT",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    type: "website",
    locale: "ko_KR",
    url: BASE_URL,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1672, height: 941, alt: DEFAULT_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "g9cObkAVZsfrEANnVmncrLD8H5wxsqXf5C5bm8JOsY4",
    other: {
      "naver-site-verification": "6e99eaac1998825216f72843f96437bcd59d85fb",
    },
  },
};

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ADGRIT",
  alternateName: "애드그릿",
  url: BASE_URL,
  logo: `${BASE_URL}/adgrit-logo-v2.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+82-1661-0646",
    contactType: "customer service",
    areaServed: "KR",
    availableLanguage: "Korean",
  },
};

const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ADGRIT",
  url: BASE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Pretendard 폰트: CSS @import 대신 <link>로 이동 → CDN 연결과 globals.css를 병렬 로드 */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSON_LD) }}
        />
      </head>
      <body className="antialiased">
        {/* 사이트 공통 고정 배경: 히어로에서 쓰는 이미지 하나를 모든 섹션이 공유.
            position:fixed라 스크롤/페이지 전환과 무관하게 항상 뒤에 고정된다. */}
        <div
          className="site-fixed-background"
          style={{ backgroundImage: "url(/image/000.png)" }}
          aria-hidden
        />
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
