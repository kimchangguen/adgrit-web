import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회사소개",
  description: "ADGRIT은 개발과 마케팅을 하나의 엔진으로 설계하는 성과 중심 광고대행사입니다.",
  openGraph: {
    title: "회사소개 | ADGRIT",
    description: "ADGRIT은 개발과 마케팅을 하나의 엔진으로 설계하는 성과 중심 광고대행사입니다.",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
