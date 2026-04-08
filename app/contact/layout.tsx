import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "오시는길",
  description: "서울 송파구 문정동 및 경기 성남 분당 두 지점으로 방문해 주세요. 대표번호: 1661-0646",
  openGraph: {
    title: "오시는길 | ADGRIT",
    description: "서울 송파구 문정동 및 경기 성남 분당 두 지점으로 방문해 주세요. 대표번호: 1661-0646",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
