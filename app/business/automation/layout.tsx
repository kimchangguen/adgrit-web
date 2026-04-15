import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "업무 자동화",
  description: "마케팅 자동화·CRM 연동·AI 챗봇·데이터 파이프라인으로 비즈니스 운영 효율을 극대화합니다.",
  alternates: { canonical: "/business/automation" },
  openGraph: {
    title: "업무 자동화 | ADGRIT",
    description: "마케팅 자동화·CRM 연동·AI 챗봇·데이터 파이프라인으로 비즈니스 운영 효율을 극대화합니다.",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
