import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "마케팅 컨설팅",
  description: "브랜드 포지셔닝·타깃 분석·채널 전략·KPI 설계까지 성장을 위한 전문 마케팅 컨설팅입니다.",
  alternates: { canonical: "/business/consulting" },
  openGraph: {
    title: "마케팅 컨설팅 | ADGRIT",
    description: "브랜드 포지셔닝·타깃 분석·채널 전략·KPI 설계까지 성장을 위한 전문 마케팅 컨설팅입니다.",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
