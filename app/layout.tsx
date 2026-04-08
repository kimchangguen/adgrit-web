import type { Metadata } from "next";
import "./globals.css";
import { FloatingActions } from "./_components/FloatingActions";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://adgrit.co.kr";
const DEFAULT_TITLE = "ADGRIT | 성과로 증명하는 광고대행";
const DEFAULT_DESC =
  "Google Ads, SEO & GEO, 워드프레스, 퍼포먼스 마케팅을 하나의 성장 엔진으로 설계합니다.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | ADGRIT",
  },
  description: DEFAULT_DESC,
  openGraph: {
    siteName: "ADGRIT",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    type: "website",
    locale: "ko_KR",
    url: BASE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
