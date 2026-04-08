import type { Metadata } from "next";
import { SubPageLayout } from "../../_components/SubPageLayout";

export const metadata: Metadata = {
  title: "통합솔루션",
  description: "광고·SEO·콘텐츠·개발을 하나로 묶은 ADGRIT 통합 마케팅 솔루션.",
};

export default function IntegratedPage() {
  return (
    <SubPageLayout
      title="통합솔루션"
      description="통합 마케팅 솔루션을 소개합니다."
    >
      <div className="prose prose-slate max-w-none [&_p]:text-slate-600 [&_p]:leading-relaxed">
        <p>콘텐츠를 추가해 주세요.</p>
      </div>
    </SubPageLayout>
  );
}
