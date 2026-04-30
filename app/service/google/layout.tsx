import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "구글 노출 | Headless SEO",
  description:
    "구글 검색 노출을 위한 헤드리스 웹사이트 서비스. 무위험 6개월 샌드박스 플랜으로 결과를 확인한 뒤 결정하세요.",
  alternates: { canonical: "/service/google" },
  openGraph: {
    title: "구글 노출 | Headless SEO",
    description:
      "구글 검색 노출을 위한 헤드리스 웹사이트 서비스. 무위험 6개월 샌드박스 플랜으로 결과를 확인한 뒤 결정하세요.",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
