import { AccountGrowthEffects } from "./AccountGrowthEffects";
import { AccountGrowthProcess } from "./AccountGrowthProcess";
import { AccountGrowthIntro } from "./AccountGrowthIntro";
import {
  Check,
  CircleUserRound,
  Handshake,
  Megaphone,
  Paperclip,
} from "lucide-react";

const SERVICES = [
  {
    badge: "신규 계정 최적화 육성",
    title: "0부터 시작하는 파급력 있는 계정 만들기",
    description: "신규 계정도 최적화된 세팅과 체계적인 운영으로 영향력 있는 계정으로 빠르게 성장시킵니다.",
    Icon: CircleUserRound,
    tags: ["프로필 최적화", "콘텐츠 전략", "초기 세팅", "성장 운영", "성과 분석"],
  },
  {
    badge: "기존 계정 인수인계 육성",
    title: "이미 육성된 계정으로 빠르게 최적화 운영",
    description: "이미 육성된 계정을 인수인계하여 빠른 시간 안에 최적화된 운영이 가능합니다.",
    Icon: Handshake,
    tags: ["계정 인수인계", "계정 진단", "최적화 개선", "운영 전략", "성과 극대화"],
  },
] as const;

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-4 sm:gap-6">
      <span className="h-px w-8 bg-violet-300 sm:w-20" aria-hidden />
      <h3 className="whitespace-nowrap text-lg font-extrabold tracking-[-0.025em] text-white sm:text-xl">{children}</h3>
      <span className="h-px w-8 bg-violet-300 sm:w-20" aria-hidden />
    </div>
  );
}

export function AccountGrowthSection() {
  return (
    <section className="relative z-10 px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
      <div
        className="shortform-section-container relative mx-auto w-full max-w-7xl overflow-hidden rounded-[24px] border border-white/[0.08] bg-[rgba(20,20,30,0.45)] px-5 py-12 text-white shadow-[0_24px_80px_rgba(10,8,24,0.28)] sm:px-8 sm:py-16 lg:px-12 lg:py-20"
        style={{
          backdropFilter: "blur(20px) saturate(120%)",
          WebkitBackdropFilter: "blur(20px) saturate(120%)",
        }}
      >
        <AccountGrowthIntro />

        <div className="middle-box mt-8 px-5 py-9 shadow-[0_14px_40px_rgba(0,0,0,0.08)] sm:px-8 sm:py-11 lg:min-h-[500px] lg:px-10 lg:py-16">
          <AccountGrowthProcess />
        </div>

        <div className="middle-box mt-8 px-5 py-9 shadow-[0_14px_40px_rgba(0,0,0,0.08)] sm:px-8 sm:py-11 lg:mt-[100px] lg:min-h-[800px] lg:px-10">
          <AccountGrowthEffects />
        </div>

        <div className="middle-box mt-8 px-5 py-9 shadow-[0_14px_40px_rgba(0,0,0,0.08)] sm:px-8 sm:py-11 lg:px-10">
          <SectionTitle>두 가지 계정육성 서비스</SectionTitle>
          <div className="mt-9 grid gap-6 lg:grid-cols-2">
            {SERVICES.map(({ badge, title, description, Icon, tags }, index) => (
              <article key={badge} className="flex flex-col items-center rounded-[22px] border border-violet-100 bg-white px-5 py-8 text-center shadow-[0_12px_35px_rgba(91,65,161,0.08)] sm:px-8">
                <span className="rounded-full bg-violet-100 px-4 py-2 text-xs font-extrabold text-[#6b4fe8] sm:text-sm">{badge}</span>
                <div className="relative mt-6 flex h-20 w-20 items-center justify-center rounded-full bg-violet-100 text-[#6b4fe8]">
                  <Icon className="h-10 w-10" strokeWidth={1.7} aria-hidden />
                  {index === 0 ? <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#6b4fe8] text-lg font-bold text-white">+</span> : <Paperclip className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-[#6b4fe8] p-1.5 text-white" aria-hidden />}
                </div>
                <h4 className="mt-5 max-w-md text-xl font-black leading-7 tracking-[-0.03em] text-slate-900 sm:text-2xl">{title}</h4>
                <p className="mt-4 max-w-lg text-sm leading-6 text-slate-500">{description}</p>
                <div className="mt-7 flex flex-wrap justify-center gap-2">
                  {tags.map((tag) => <span key={tag} className="inline-flex items-center gap-1.5 rounded-full border border-violet-100 bg-violet-50 px-3 py-1.5 text-xs font-bold text-violet-700"><Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-[24px] bg-gradient-to-r from-[#7048e8] to-[#4263eb] px-6 py-10 text-center text-white shadow-[0_18px_40px_rgba(82,65,200,0.28)] sm:px-10 sm:py-12">
          <Megaphone className="mx-auto h-8 w-8 text-white/90" strokeWidth={1.8} aria-hidden />
          <p className="mt-4 text-xl font-black leading-8 tracking-[-0.03em] sm:text-2xl lg:text-3xl">계정은 자산입니다. 잘 키운 계정 하나가 매장을 바꿉니다.</p>
          <p className="mt-3 text-sm font-medium text-white/80 sm:text-base">ADGRIT가 전략과 성장을 함께하겠습니다.</p>
        </div>
      </div>
    </section>
  );
}
