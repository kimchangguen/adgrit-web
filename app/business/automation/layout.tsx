import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "업무 자동화 | ADGRIT",
  description:
    "반복 업무를 구조화하고 맞춤형 자동화 프로그램으로 업무 효율을 높이는 애드그릿 코어 자동화 서비스입니다.",
  alternates: { canonical: "/business/automation" },
  openGraph: {
    title: "업무 자동화 | ADGRIT",
    description:
      "반복 업무를 구조화하고 맞춤형 자동화 프로그램으로 업무 효율을 높이는 애드그릿 코어 자동화 서비스입니다.",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
