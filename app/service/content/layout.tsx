import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "콘텐츠 제작",
  description: "영상·사진·카피라이팅·인포그래픽까지 브랜드 스토리를 완성하는 콘텐츠 제작 서비스입니다.",
  alternates: { canonical: "/service/content" },
  openGraph: {
    title: "콘텐츠 제작 | ADGRIT",
    description: "영상·사진·카피라이팅·인포그래픽까지 브랜드 스토리를 완성하는 콘텐츠 제작 서비스입니다.",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
