import type { Metadata } from "next";
import { SubPageLayout } from "../../_components/SubPageLayout";

export const metadata: Metadata = {
  title: "퍼포먼스",
  description: "데이터 기반 퍼포먼스 마케팅으로 광고비 효율을 극대화하고 실질 매출을 올립니다.",
};

export default function PerformancePage() {
  return (
    <SubPageLayout
      title="퍼포먼스"
      description="퍼포먼스 마케팅 서비스를 소개합니다."
    >
      <div className="prose prose-slate max-w-none [&_p]:text-slate-600 [&_p]:leading-relaxed">
        <p>콘텐츠를 추가해 주세요.</p>
      </div>
    </SubPageLayout>
  );
}
