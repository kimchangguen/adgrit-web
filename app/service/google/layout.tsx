import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "구글 노출 · SEO",
  description: "구글 검색 상위 노출을 위한 SEO·GEO·Google Ads 통합 운영 — ADGRIT이 클릭을 매출로 만듭니다.",
  alternates: { canonical: "/service/google" },
  openGraph: {
    title: "구글 노출 · SEO | ADGRIT",
    description: "구글 검색 상위 노출을 위한 SEO·GEO·Google Ads 통합 운영 — ADGRIT이 클릭을 매출로 만듭니다.",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
