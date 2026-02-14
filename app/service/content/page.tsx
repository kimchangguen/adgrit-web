import { SubPageLayout } from "../../_components/SubPageLayout";

export default function ContentPage() {
  return (
    <SubPageLayout
      title="콘텐츠제작"
      description="콘텐츠 제작 서비스를 소개합니다."
    >
      <div className="prose prose-slate max-w-none [&_p]:text-slate-600 [&_p]:leading-relaxed">
        <p>콘텐츠를 추가해 주세요.</p>
      </div>
    </SubPageLayout>
  );
}
