import type { Metadata } from "next";
import { SubPageLayout } from "../../_components/SubPageLayout";

export const metadata: Metadata = {
  title: "Development",
  description: "마케팅에 최적화된 웹사이트·랜딩페이지를 개발합니다. ADGRIT 개발 서비스.",
};

export default function DevelopmentPage() {
  return (
    <SubPageLayout
      title="Development"
      description="개발 서비스를 소개합니다."
    >
      <div className="prose prose-slate max-w-none [&_p]:text-slate-600 [&_p]:leading-relaxed">
        <p>콘텐츠를 추가해 주세요.</p>
      </div>
    </SubPageLayout>
  );
}
