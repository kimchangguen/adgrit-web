import { SubPageLayout } from "../_components/SubPageLayout";

export default function AboutPage() {
  return (
    <SubPageLayout
      title="회사소개"
      description="ADGRIT은 성과로 증명하는 광고대행사입니다. Google Ads, SEO & GEO, 워드프레스, 퍼포먼스 마케팅을 하나의 성장 엔진으로 설계합니다."
    >
      <div className="prose prose-slate max-w-none [&_p]:text-slate-600 [&_p]:leading-relaxed">
        <p>콘텐츠를 추가해 주세요.</p>
      </div>
    </SubPageLayout>
  );
}
