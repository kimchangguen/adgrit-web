import { SubPageLayout } from "../_components/SubPageLayout";

export default function OrganizationPage() {
  return (
    <SubPageLayout
      title="조직도"
      description="ADGRIT의 조직 구조를 소개합니다."
    >
      <div className="prose prose-slate max-w-none [&_p]:text-slate-600 [&_p]:leading-relaxed">
        <p>콘텐츠를 추가해 주세요.</p>
      </div>
    </SubPageLayout>
  );
}
