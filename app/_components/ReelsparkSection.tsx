import {
  ChevronDown,
  ChevronRight,
  Clapperboard,
  Crosshair,
  PlaySquare,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const STEPS = [
  {
    title: "숏폼 콘텐츠 제작",
    description: "최신 트렌드에 맞는 영상 숏폼을 기획·제작하여 오피셜 계정에 업로드",
    Icon: Clapperboard,
  },
  {
    title: "니즈 & 알고리즘 최적화",
    description: "타겟 니즈와 알고리즘을 분석해 최적의 시간과 방식으로 콘텐츠를 송출",
    Icon: Crosshair,
  },
  {
    title: "폭발적인 콘텐츠 도달",
    description: "릴스파크 전용 육성 전략으로 더 많은 사용자에게 콘텐츠가 확산",
    Icon: PlaySquare,
  },
  {
    title: "확실한 결과",
    description: "팔로워 상승과 함께 수만~수십만 조회수의 폭발적인 릴스 성과",
    Icon: TrendingUp,
  },
] as const;

export function ReelsparkSection() {
  return (
    <section className="relative z-10 px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
      <div
        className="shortform-section-container relative mx-auto w-full max-w-7xl overflow-hidden rounded-[24px] border border-white/[0.08] bg-[rgba(20,20,30,0.45)] px-5 py-12 text-white shadow-[0_24px_80px_rgba(10,8,24,0.28)] sm:px-8 sm:py-16 lg:px-12 lg:py-20"
        style={{ backdropFilter: "blur(20px) saturate(120%)", WebkitBackdropFilter: "blur(20px) saturate(120%)" }}
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-fuchsia-500/45 to-transparent shadow-[0_0_28px_rgba(192,38,211,0.7)]" />
          <div className="absolute left-1/2 top-[14%] h-80 w-80 -translate-x-1/2 rounded-full bg-violet-700/15 blur-[100px]" />
          <div className="absolute bottom-0 left-1/2 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent shadow-[0_0_22px_rgba(217,70,239,0.9)]" />
        </div>

        <header id="reelspark" className="relative mx-auto max-w-5xl scroll-mt-32 text-center lg:scroll-mt-36">
          <div className="inline-flex items-center gap-3 rounded-full border border-fuchsia-400/80 bg-white/[0.02] px-5 py-2.5 text-sm font-bold text-white/90 shadow-[0_0_24px_rgba(192,38,211,0.12)] sm:px-7 sm:text-lg">
            <PlaySquare className="h-5 w-5 text-fuchsia-400 sm:h-6 sm:w-6" strokeWidth={1.8} aria-hidden />
            <span>ADGRIT <span className="bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">릴스파크</span> 서비스</span>
          </div>

          <h2 className="mt-9 text-[2rem] font-black leading-[1.22] tracking-[-0.045em] text-white sm:text-[2.8rem] lg:text-[3.5rem]">
            영상 숏폼으로 니즈와 알고리즘에 맞춰,
            <br className="hidden md:block" />
            콘텐츠를 <span className="bg-gradient-to-r from-fuchsia-500 to-violet-500 bg-clip-text text-transparent">폭발적으로 전달</span>합니다.
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-[15px] font-normal leading-7 text-white/70 sm:text-lg sm:leading-8">
            릴스파크는 최근 트렌드에 맞는 영상 숏폼을 제작하여
            <br className="hidden sm:block" />
            오피셜 계정에 업데이트하고, 니즈와 알고리즘에 최적화된 방식으로
            <br className="hidden sm:block" />
            수많은 사용자에게 콘텐츠가 도달하도록 설계된 서비스입니다.
            <br className="hidden sm:block" />
            최적화 계정 육성을 넘어, <strong className="font-bold text-fuchsia-400">릴스파크 전용 육성</strong>으로 더 큰 파급력을 만듭니다.
          </p>
        </header>

        <div className="relative mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {STEPS.map(({ title, description, Icon }, index) => (
            <div key={title} className="contents">
              <article className="relative flex min-h-[330px] flex-col items-center rounded-[24px] border border-fuchsia-400/55 bg-[linear-gradient(145deg,rgba(24,10,55,0.72),rgba(7,6,24,0.76))] px-5 py-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_16px_40px_rgba(20,4,50,0.32)] backdrop-blur-xl">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-fuchsia-400/75 bg-[radial-gradient(circle_at_35%_25%,rgba(217,70,239,0.28),rgba(76,29,149,0.16)_55%,rgba(8,8,26,0.85))] text-fuchsia-400 shadow-[0_0_28px_rgba(192,38,211,0.35),inset_0_0_22px_rgba(168,85,247,0.12)]">
                  <Icon className="h-14 w-14" strokeWidth={1.6} aria-hidden />
                </div>
                <h3 className="mt-6 text-xl font-extrabold tracking-[-0.025em] text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/68">{description}</p>
              </article>
              {index < STEPS.length - 1 && (
                <span className="z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-fuchsia-400/70 bg-[#160a35] text-white shadow-[0_0_18px_rgba(192,38,211,0.4)] md:hidden lg:absolute lg:left-[calc((25%*(var(--step-index,1)))-24px)] lg:hidden" aria-hidden>
                  <ChevronDown className="h-5 w-5" />
                </span>
              )}
            </div>
          ))}
          {[25, 50, 75].map((position) => (
            <span key={position} className="absolute top-1/2 z-20 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-fuchsia-400/70 bg-[#160a35] text-white shadow-[0_0_18px_rgba(192,38,211,0.4)] lg:flex" style={{ left: `${position}%` }} aria-hidden>
              <ChevronRight className="h-5 w-5" />
            </span>
          ))}
        </div>

        <div className="relative mt-10 flex items-center justify-center gap-2 text-sm font-semibold text-fuchsia-300 sm:text-base">
          <Sparkles className="h-5 w-5" aria-hidden />
          <span>릴스파크 전용 최적화로 콘텐츠의 파급력을 극대화합니다.</span>
        </div>
      </div>
    </section>
  );
}
