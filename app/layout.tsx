import type { Metadata } from "next";
import { IBM_Plex_Sans_KR } from "next/font/google";
import "./globals.css";
import { FloatingActions } from "./_components/FloatingActions";

const ibmPlexSansKr = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-kr",
});

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
    <html lang="ko" className={ibmPlexSansKr.variable}>
      <body className="antialiased">
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
