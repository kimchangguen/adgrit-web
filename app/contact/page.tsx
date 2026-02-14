import { SubPageLayout } from "../_components/SubPageLayout";

export default function ContactPage() {
  return (
    <SubPageLayout
      title="오시는길"
      description="ADGRIT으로 문의하세요."
    >
      <div className="prose prose-slate max-w-none [&_p]:text-slate-600 [&_p]:leading-relaxed">
        <p>주소, 연락처, 지도 등을 추가해 주세요.</p>
        <p>
          <a href="tel:1661-0646" className="text-[#1e40af] hover:underline">
            1661-0646
          </a>
        </p>
      </div>
    </SubPageLayout>
  );
}
