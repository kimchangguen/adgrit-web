import {
  BarChart3,
  Camera,
  Infinity as InfinityIcon,
  Phone,
  Play,
  Target,
} from "lucide-react";

const FEATURES = [
  { label: "Meta 관리자 페이지서 타겟 설정", Icon: Target },
  { label: "릴스·이미지·스토리 등 콘텐츠 전달", Icon: Play },
  { label: "전화번호 수집 및 문의 유도", Icon: Phone },
  { label: "데이터 기반 성과 분석 및 최적화", Icon: BarChart3 },
] as const;

function Highlight({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-fuchsia-400">{children}</strong>;
}

export function TargetAdsSection() {
  return (
    <section className="relative z-10 px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[28px] border border-violet-400/25 bg-[linear-gradient(145deg,rgba(5,4,15,0.97)_0%,rgba(11,6,27,0.96)_55%,rgba(17,5,35,0.97)_100%)] px-5 py-12 text-white shadow-[0_24px_80px_rgba(30,8,65,0.38)] sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute left-1/2 top-[32%] h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-violet-700/15 blur-[110px]" />
          <div className="absolute left-[16%] top-[10%] h-48 w-48 rounded-full bg-fuchsia-600/8 blur-[85px]" />
          <div className="absolute right-[12%] top-[42%] h-52 w-52 rounded-full bg-violet-600/8 blur-[90px]" />
        </div>

        <header id="target-ads" className="relative mx-auto max-w-5xl scroll-mt-32 text-center lg:scroll-mt-36">
          <div className="inline-flex items-center rounded-full border border-violet-400/60 bg-white/[0.02] px-5 py-2.5 text-sm font-bold shadow-[0_0_24px_rgba(168,85,247,0.16)] sm:px-7 sm:text-lg">
            <span>ADGRIT <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">타겟광고 서비스</span></span>
          </div>
          <h2 className="mt-8 text-[2rem] font-black leading-[1.2] tracking-[-0.045em] sm:text-[2.75rem] lg:text-[3.25rem]">
            인스타그램 타겟광고로
            <br />
            원하는 고객에게 <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">정확히 도달합니다.</span>
          </h2>
        </header>

        <div className="relative mx-auto mt-10 flex h-[400px] max-w-2xl items-center justify-center sm:h-[460px]">
          <div className="absolute h-[170px] w-[360px] rounded-[50%] border border-violet-400/60 shadow-[0_0_22px_rgba(168,85,247,0.22)] sm:h-[210px] sm:w-[560px]" aria-hidden />
          <div className="absolute h-[115px] w-[310px] -rotate-6 rounded-[50%] border border-fuchsia-500/35 sm:h-[150px] sm:w-[500px]" aria-hidden />
          <div className="absolute h-[240px] w-[290px] rotate-6 rounded-[50%] border border-violet-500/25 sm:h-[290px] sm:w-[470px]" aria-hidden />
          {["left-[14%] top-[45%]", "right-[14%] top-[51%]", "left-[26%] top-[66%]", "right-[24%] top-[39%]"].map((position) => <span key={position} className={`absolute hidden h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_14px_4px_rgba(192,132,252,0.9)] sm:block ${position}`} aria-hidden />)}

          <div className="absolute bottom-7 left-1/2 h-10 w-64 -translate-x-1/2 rounded-[50%] bg-violet-500/45 blur-2xl" aria-hidden />
          <div className="relative z-10 h-[340px] w-[176px] rounded-[34px] border-[4px] border-violet-300/85 bg-[#090517] p-2 shadow-[0_0_16px_rgba(216,180,254,0.9),0_0_42px_rgba(168,85,247,0.45)] sm:h-[400px] sm:w-[204px]">
            <div className="absolute left-1/2 top-2 h-5 w-[72px] -translate-x-1/2 rounded-full bg-black" />
            <div className="flex h-full flex-col items-center justify-center rounded-[26px] border border-white/[0.04] bg-[radial-gradient(circle_at_50%_35%,rgba(76,29,149,0.18),rgba(5,3,18,0.95)_65%)]">
              <InfinityIcon className="h-14 w-14 text-blue-500" strokeWidth={1.7} aria-hidden />
              <span className="mt-1 text-2xl font-bold">Meta</span>
              <span className="my-6 text-xl font-light text-white/45">×</span>
              <span className="flex h-16 w-16 items-center justify-center rounded-[18px] bg-gradient-to-br from-violet-600 via-fuchsia-500 to-orange-400 text-white shadow-[0_0_20px_rgba(217,70,239,0.5)]">
                <Camera className="h-9 w-9" strokeWidth={1.8} aria-hidden />
              </span>
              <span className="mt-3 text-xl font-semibold italic tracking-tight">Instagram</span>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-2 max-w-4xl text-center">
          <h3 className="text-2xl font-black sm:text-3xl">타켓광고란?</h3>
          <span className="mx-auto mt-3 block h-0.5 w-16 bg-gradient-to-r from-violet-500 to-fuchsia-500" aria-hidden />
          <div className="mt-7 space-y-1 text-sm leading-7 text-[#b7b2c4] sm:text-base sm:leading-8">
            <p>타켓광고는 <Highlight>Meta(메타)</Highlight>에서 제공하는 인스타그램 퍼포먼스 광고 서비스입니다.</p>
            <p>Meta 비즈니스 관리자 페이지에서 고객 데이터와 목표에 맞춰 <Highlight>타켓을 설정</Highlight>하고,</p>
            <p>설정된 릴스, 이미지, 스토리 등 <Highlight>콘텐츠</Highlight>를 인스타그램 사용자에게 <Highlight>효율적으로 전달</Highlight>합니다.</p>
            <p>관심사, 행동, 지역, 연령 등 정교한 <Highlight>타겟팅</Highlight>으로 잠재 고객에게 도달하여</p>
            <p><Highlight>전화번호 수집, 문의 유도, 구매 전환</Highlight> 등 실질적인 성과를 만들어냅니다.</p>
          </div>
        </div>

        <div className="relative mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ label, Icon }) => (
            <div key={label} className="flex min-h-14 items-center justify-center gap-3 rounded-full border border-violet-400/35 bg-violet-950/25 px-4 py-3 text-center text-xs font-semibold text-fuchsia-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_0_18px_rgba(126,34,206,0.1)] sm:text-sm">
              <Icon className="h-5 w-5 flex-none text-violet-400" strokeWidth={1.8} aria-hidden />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
