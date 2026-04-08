import type { Metadata } from "next";
import { SubPageLayout } from "../../_components/SubPageLayout";

export const metadata: Metadata = {
  title: "마케팅전략",
  description: "매출 성장을 위한 맞춤형 마케팅 전략을 수립합니다. ADGRIT과 함께 성과로 증명하세요.",
};

export default function MarketingPage() {
  return (
    <SubPageLayout
      title="마케팅전략"
      description="맞춤형 마케팅 전략 수립 서비스를 소개합니다."
    >
      <div className="prose prose-slate max-w-none [&_p]:text-slate-600 [&_p]:leading-relaxed">
        <p>콘텐츠를 추가해 주세요.</p>
      </div>
    </SubPageLayout>
  );
}
