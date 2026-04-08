import type { Metadata } from "next";
import { SubPageLayout } from "../../_components/SubPageLayout";

export const metadata: Metadata = {
  title: "SNS채널관리",
  description: "인스타그램·유튜브·블로그 등 SNS 채널을 통합 관리하여 브랜드 팬덤을 구축합니다.",
};

export default function SnsPage() {
  return (
    <SubPageLayout
      title="SNS채널관리"
      description="SNS 채널 통합 관리 서비스를 소개합니다."
    >
      <div className="prose prose-slate max-w-none [&_p]:text-slate-600 [&_p]:leading-relaxed">
        <p>콘텐츠를 추가해 주세요.</p>
      </div>
    </SubPageLayout>
  );
}
