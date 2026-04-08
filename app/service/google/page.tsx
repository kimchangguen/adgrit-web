import type { Metadata } from "next";
import { SubPageLayout } from "../../_components/SubPageLayout";

export const metadata: Metadata = {
  title: "구글노출",
  description: "Google 광고 및 SEO로 검색 상위 노출을 실현합니다. ADGRIT의 구글 노출 최적화 서비스.",
};

export default function GooglePage() {
  return (
    <SubPageLayout
      title="구글노출"
      description="Google 광고 및 노출 최적화 서비스를 소개합니다."
    >
      <div className="prose prose-slate max-w-none [&_p]:text-slate-600 [&_p]:leading-relaxed">
        <p>콘텐츠를 추가해 주세요.</p>
      </div>
    </SubPageLayout>
  );
}
