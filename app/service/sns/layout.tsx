import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SNS 채널 관리",
  description: "인스타그램·유튜브·블로그 등 SNS 채널 운영과 콘텐츠 제작을 전문적으로 지원합니다.",
  alternates: { canonical: "/service/sns" },
  openGraph: {
    title: "SNS 채널 관리 | ADGRIT",
    description: "인스타그램·유튜브·블로그 등 SNS 채널 운영과 콘텐츠 제작을 전문적으로 지원합니다.",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
