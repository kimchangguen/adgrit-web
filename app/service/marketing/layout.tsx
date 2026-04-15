import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "마케팅 전략",
  description: "데이터 기반 마케팅 전략 수립부터 실행까지 — ADGRIT이 브랜드 성장을 설계합니다.",
  alternates: { canonical: "/service/marketing" },
  openGraph: {
    title: "마케팅 전략 | ADGRIT",
    description: "데이터 기반 마케팅 전략 수립부터 실행까지 — ADGRIT이 브랜드 성장을 설계합니다.",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
