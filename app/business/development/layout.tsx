import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "홈페이지 제작 | ADGRIT",
  description:
    "단순한 명함용 홈페이지가 아닌, 고객을 설득하고 매출을 만드는 비즈니스 성장형 웹사이트 제작 서비스입니다.",
  alternates: { canonical: "/business/development" },
  openGraph: {
    title: "홈페이지 제작 | ADGRIT",
    description:
      "단순한 명함용 홈페이지가 아닌, 고객을 설득하고 매출을 만드는 비즈니스 성장형 웹사이트 제작 서비스입니다.",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
