import type { Metadata } from "next";
import { SubPageLayout } from "../../_components/SubPageLayout";

export const metadata: Metadata = {
  title: "Automation",
  description: "반복 업무를 자동화하여 시간과 비용을 절감합니다. ADGRIT 비즈니스 자동화 솔루션.",
};

export default function AutomationPage() {
  return (
    <SubPageLayout
      title="Automation"
      description="비즈니스 자동화 솔루션을 소개합니다."
    >
      <div className="prose prose-slate max-w-none [&_p]:text-slate-600 [&_p]:leading-relaxed">
        <p>콘텐츠를 추가해 주세요.</p>
      </div>
    </SubPageLayout>
  );
}
