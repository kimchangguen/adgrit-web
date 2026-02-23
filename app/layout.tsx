import type { Metadata } from "next";
import "./globals.css";
import { FloatingActions } from "./_components/FloatingActions";

export const metadata: Metadata = {
  title: "ADGRIT | 성과로 증명하는 광고대행",
  description:
    "Google Ads, SEO & GEO, 워드프레스, 퍼포먼스 마케팅을 하나의 성장 엔진으로 설계합니다.",
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
