import type { Metadata } from "next";
import { SubPageLayout } from "../../_components/SubPageLayout";

export const metadata: Metadata = {
  title: "콘텐츠제작",
  description: "전환을 만드는 콘텐츠를 제작합니다. 영상·이미지·카피라이팅까지 원스톱으로.",
};

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
