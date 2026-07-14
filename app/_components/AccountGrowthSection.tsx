import { BookOpen, Check, Smartphone, TrendingUp } from "lucide-react";

const PRINCIPLES = [
  { title: "콘텐츠 제작은 내부에서", description: "촬영부터 간단한 콘텐츠 제작까지 사장님이 직접 실행합니다.", note: "외부 대행사 제작 절대 불가", Icon: Smartphone },
  { title: "가이드 & 전략 지원", description: "콘텐츠 제작 가이딩, 기획 방향, 운영 전략을 체계적으로 제공합니다.", note: "실무적인 가이드 제공", Icon: BookOpen, guide: true },
  { title: "배포 · 성장 · 매출 연결", description: "제작된 콘텐츠를 최적화하여 배포, 팔로워 증가와 고객 유입을 통해 실질적인 매출로 연결합니다.", note: "성과 중심의 계정육성", Icon: TrendingUp },
] as const;

export function AccountGrowthSection() {
  return (
    <section id="account-growth" className="relative z-10 scroll-mt-20 px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
      <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-[24px] border border-violet-100/80 bg-[linear-gradient(145deg,#fbfaff_0%,#f5f2fc_52%,#faf9fd_100%)] px-5 py-12 text-slate-950 shadow-[0_24px_70px_rgba(78,61,130,0.12)] sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <header className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-[#6b4fe8] px-5 py-2 text-sm font-bold text-white shadow-[0_8px_20px_rgba(107,79,232,0.25)] sm:text-base">ADGRIT 계정육성 서비스</span>
          <h2 className="mt-7 text-[2rem] font-black leading-[1.14] tracking-[-0.045em] sm:text-[2.65rem] lg:text-5xl">
            팔로워를 고객으로,<br />계정을 <span className="text-[#6b4fe8]">매출로 연결</span>합니다.
          </h2>
          <p className="mt-6 text-[15px] font-medium leading-7 text-slate-500 sm:text-lg sm:leading-8">
            콘텐츠 제작은 사장님이, 전략과 성장은 저희가 함께합니다.<br className="hidden sm:block" />
            최적화된 계정으로 성장 <span className="font-bold text-[#6b4fe8]">→</span> 고객 유입 <span className="font-bold text-[#6b4fe8]">→</span> 실질적 매출 연결
          </p>
        </header>

        <div className="mt-10 rounded-[24px] border border-violet-200/80 bg-violet-50/75 px-5 py-8 shadow-[0_14px_40px_rgba(91,65,161,0.08)] sm:px-8 sm:py-10 lg:mt-14 lg:px-10">
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <span className="h-px w-8 bg-violet-300 sm:w-20" aria-hidden />
            <h3 className="whitespace-nowrap text-lg font-extrabold tracking-[-0.025em] text-slate-900 sm:text-xl">계정육성 핵심 원칙</h3>
            <span className="h-px w-8 bg-violet-300 sm:w-20" aria-hidden />
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3 lg:gap-7">
            {PRINCIPLES.map(({ title, description, note, Icon, ...item }) => (
              <article key={title} className="flex min-h-[300px] flex-col items-center rounded-[20px] border border-white bg-white/75 px-5 py-7 text-center shadow-[0_10px_30px_rgba(89,67,145,0.07)] sm:px-6">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-[22px] border border-violet-200 bg-gradient-to-br from-white to-violet-100 text-[#6b4fe8] shadow-[0_10px_25px_rgba(107,79,232,0.12)]">
                  <Icon className="h-10 w-10" strokeWidth={1.7} aria-hidden />
                  {"guide" in item && item.guide && <span className="absolute bottom-2 text-[8px] font-black tracking-widest">GUIDE</span>}
                </div>
                <h4 className="mt-5 text-lg font-extrabold tracking-[-0.025em] text-slate-900">{title}</h4>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">{description}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#6b4fe8]">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#6b4fe8] text-white"><Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden /></span>
                  {note}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
