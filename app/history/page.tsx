import { SubPageLayout } from "../_components/SubPageLayout";

export default function HistoryPage() {
  return (
    <SubPageLayout
      title="회사연혁"
      description="ADGRIT의 성장 과정을 소개합니다."
    >
      <div className="prose prose-slate max-w-none [&_p]:text-slate-600 [&_p]:leading-relaxed">
        <p>콘텐츠를 추가해 주세요.</p>
      </div>
    </SubPageLayout>
  );
}
