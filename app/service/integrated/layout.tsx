import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "통합 마케팅",
  description: "전략·구글·SNS·퍼포먼스·콘텐츠를 하나의 엔진으로 운영하는 ADGRIT 통합 마케팅 서비스입니다.",
  alternates: { canonical: "/service/integrated" },
  openGraph: {
    title: "통합 마케팅 | ADGRIT",
    description: "전략·구글·SNS·퍼포먼스·콘텐츠를 하나의 엔진으로 운영하는 ADGRIT 통합 마케팅 서비스입니다.",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
