import type { Metadata } from "next";
import { SubPageLayout } from "../../_components/SubPageLayout";

export const metadata: Metadata = {
  title: "Consulting",
  description: "비즈니스 목표에 맞는 전략 컨설팅으로 성장의 방향을 설계합니다.",
};

export default function ConsultingPage() {
  return (
    <SubPageLayout
      title="Consulting"
      description="맞춤형 컨설팅 서비스를 소개합니다."
    >
      <div className="prose prose-slate max-w-none [&_p]:text-slate-600 [&_p]:leading-relaxed">
        <p>콘텐츠를 추가해 주세요.</p>
      </div>
    </SubPageLayout>
  );
}
