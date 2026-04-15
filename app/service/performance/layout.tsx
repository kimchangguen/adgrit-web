import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "퍼포먼스 광고",
  description: "ROAS·CPA·전환율을 지속 개선하는 데이터 기반 퍼포먼스 광고 운영 서비스입니다.",
  alternates: { canonical: "/service/performance" },
  openGraph: {
    title: "퍼포먼스 광고 | ADGRIT",
    description: "ROAS·CPA·전환율을 지속 개선하는 데이터 기반 퍼포먼스 광고 운영 서비스입니다.",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
