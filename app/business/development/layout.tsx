import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "웹 개발",
  description: "랜딩페이지·기업 웹사이트·커머스 쇼핑몰까지 전환 최적화 중심의 웹 개발 서비스입니다.",
  alternates: { canonical: "/business/development" },
  openGraph: {
    title: "웹 개발 | ADGRIT",
    description: "랜딩페이지·기업 웹사이트·커머스 쇼핑몰까지 전환 최적화 중심의 웹 개발 서비스입니다.",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
