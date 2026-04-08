import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "조직도",
  description: "컨설팅·마케팅·개발·콘텐츠 전문 팀으로 구성된 ADGRIT 조직을 소개합니다.",
  openGraph: {
    title: "조직도 | ADGRIT",
    description: "컨설팅·마케팅·개발·콘텐츠 전문 팀으로 구성된 ADGRIT 조직을 소개합니다.",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
