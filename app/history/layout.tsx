import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회사연혁",
  description: "2014년부터 이어온 ADGRIT의 성장 역사. 도전과 성과의 발자취를 확인하세요.",
  openGraph: {
    title: "회사연혁 | ADGRIT",
    description: "2014년부터 이어온 ADGRIT의 성장 역사. 도전과 성과의 발자취를 확인하세요.",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
