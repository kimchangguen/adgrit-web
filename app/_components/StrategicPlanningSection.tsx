import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Camera,
  Clapperboard,
  Heart,
  Search,
  Share2,
  ShieldCheck,
  Target,
  UserRound,
  Users,
  X,
} from "lucide-react";

const JOURNEY = [
  { letter: "N", title: "Need", ko: "욕구", description: "고객이 문제나 필요를 느낍니다.", Icon: Heart, tone: "from-fuchsia-500 to-violet-500" },
  { letter: "S", title: "Search", ko: "검색", description: "해결 방법을 찾기 위해 검색합니다.", Icon: Search, tone: "from-blue-500 to-violet-500" },
  { letter: "P", title: "Proof", ko: "증거", description: "여러 정보와 후기를 통해 증거를 수집합니다.", Icon: ShieldCheck, tone: "from-fuchsia-500 to-violet-500" },
  { letter: "S", title: "Skip", ko: "건너뜀", description: "후보 업체 중 신뢰가 낮은 옵션은 탈락시킵니다.", Icon: X, tone: "from-fuchsia-500 to-violet-500" },
  { letter: "A", title: "Action", ko: "행동", description: "선정된 업체를 재검색 후 구매 또는 방문합니다.", Icon: X, tone: "from-fuchsia-500 to-violet-500" },
  { letter: "S", title: "Share", ko: "공유", description: "경험을 공유하여 추가적인 마케팅이 시작됩니다.", Icon: Share2, tone: "from-violet-500 to-blue-500" },
] as const;

export function StrategicPlanningSection() {
  return (
    <section className="relative z-10 px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
      <div
        id="consulting"
        className="shortform-section-container relative mx-auto w-full max-w-7xl scroll-mt-32 overflow-hidden rounded-[24px] border border-white/[0.08] bg-[rgba(20,20,30,0.45)] px-5 py-12 text-white shadow-[0_24px_80px_rgba(10,8,24,0.28)] sm:px-8 sm:py-16 lg:scroll-mt-36 lg:px-12 lg:py-20"
        style={{ backdropFilter: "blur(20px) saturate(120%)", WebkitBackdropFilter: "blur(20px) saturate(120%)" }}
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden><div className="absolute left-1/2 top-[35%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-700/12 blur-[120px]" /></div>

        <header className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex rounded-full border border-violet-400/55 bg-gradient-to-r from-violet-700/75 to-fuchsia-600/70 px-5 py-2.5 text-sm font-bold shadow-[0_0_24px_rgba(168,85,247,0.24)] sm:px-7 sm:text-lg">ADGRIT <span className="ml-1 text-fuchsia-200">전략기획 서비스</span></div>
          <h2 className="mt-8 text-[2.1rem] font-black leading-[1.18] tracking-[-0.045em] sm:text-[2.9rem] lg:text-[3.5rem]">구매여정 분석으로<br />고객을 <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">이해합니다</span></h2>
          <p className="mt-7 text-[15px] leading-7 text-[#b7b2c4] sm:text-lg sm:leading-8">고객이 구매를 결정하기까지의 여정을 분석하여,<br className="hidden sm:block" />탈락이 아닌 선택을 받는 전략을 설계합니다.</p>
        </header>

        <div className="scrollbar-hide relative mt-12 overflow-x-auto pb-4 lg:overflow-visible">
          <div className="mx-auto flex min-w-[1040px] items-start justify-between gap-4 lg:min-w-0">
            {JOURNEY.map(({ letter, title, ko, description, Icon, tone }, index) => (
              <div key={`${letter}-${title}`} className="contents">
                <article className="flex w-[145px] flex-none flex-col items-center text-center lg:w-auto lg:flex-1">
                  <Icon className="mb-3 h-7 w-7 text-fuchsia-300" strokeWidth={1.7} aria-hidden />
                  <div className={`flex h-24 w-24 items-center justify-center rounded-full border border-fuchsia-300/80 bg-[radial-gradient(circle_at_35%_25%,rgba(217,70,239,0.24),rgba(10,5,30,0.92)_68%)] text-4xl font-black shadow-[0_0_25px_rgba(192,38,211,0.3)] sm:h-28 sm:w-28 bg-gradient-to-br ${tone}`}>
                    <span className="drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]">{letter}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-extrabold">{title}<span className="mt-1 block text-base">({ko})</span></h3>
                  <p className="mt-4 text-sm leading-6 text-white/65">{description}</p>
                </article>
                {index < JOURNEY.length - 1 && <ArrowRight className="mt-[72px] h-6 w-6 flex-none text-fuchsia-400" aria-hidden />}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto mt-3 h-[210px] max-w-6xl sm:h-[270px]">
          <svg className="absolute inset-x-0 top-0 h-full w-full overflow-visible" viewBox="0 0 1000 260" preserveAspectRatio="none" aria-hidden>
            <path d="M45 35 C140 220 860 220 955 35" fill="none" stroke="url(#journeyGradient)" strokeWidth="2" strokeDasharray="7 7" />
            <defs><linearGradient id="journeyGradient" x1="0" x2="1"><stop stopColor="#d946ef" /><stop offset=".5" stopColor="#a855f7" /><stop offset="1" stopColor="#c084fc" /></linearGradient></defs>
            {[45,190,340,500,660,810,955].map((x,i)=><circle key={x} cx={x} cy={i===0||i===6?35: i===1||i===5?145:i===2||i===4?185:195} r="5" fill="#d946ef" />)}
          </svg>
          <div className="absolute bottom-5 left-1/2 flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-full border border-fuchsia-300/80 bg-violet-950/85 text-fuchsia-300 shadow-[0_0_20px_rgba(217,70,239,0.7),0_0_50px_rgba(126,34,206,0.5)] sm:h-28 sm:w-28">
            <span className="absolute inset-[-15px] rounded-full border border-violet-500/25" /><span className="absolute inset-[-28px] rounded-full border border-violet-500/15" />
            <UserRound className="h-12 w-12 fill-fuchsia-300/25" strokeWidth={1.7} aria-hidden />
          </div>
          <div className="absolute bottom-0 left-1/2 h-7 w-64 -translate-x-1/2 rounded-[50%] bg-violet-500/45 blur-xl" aria-hidden />
        </div>

        <div className="relative mx-auto mt-4 flex max-w-5xl flex-col items-center gap-5 rounded-[22px] border border-violet-400/45 bg-violet-950/20 px-6 py-6 text-center shadow-[0_0_22px_rgba(126,34,206,0.12)] sm:flex-row sm:px-9 sm:text-left">
          <span className="flex h-20 w-20 flex-none items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(217,70,239,0.5),rgba(76,29,149,0.75))] text-white shadow-[0_0_24px_rgba(217,70,239,0.55)]"><Target className="h-11 w-11" strokeWidth={1.8} aria-hidden /></span>
          <p className="text-xl font-bold leading-8 sm:text-2xl">구매여정 전체를 설계해야,<br /><span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">선택되는 브랜드가</span> 됩니다.</p>
        </div>

        <div className="relative my-14 h-px bg-white/[0.08] sm:my-20" aria-hidden />

        <section className="relative">
          <header className="mx-auto max-w-5xl text-center">
            <div className="inline-flex rounded-full border border-violet-400/55 bg-gradient-to-r from-violet-700/75 to-fuchsia-600/70 px-5 py-2.5 text-sm font-bold shadow-[0_0_24px_rgba(168,85,247,0.24)] sm:px-7 sm:text-lg">
              ADGRIT <span className="ml-1 text-fuchsia-200">전략기획 서비스</span>
            </div>
            <h2 className="mt-8 text-[2.05rem] font-black leading-[1.2] tracking-[-0.045em] sm:text-[2.8rem] lg:text-[3.35rem]">
              인스타그램 전략기획으로<br />
              지속 가능한 <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">매출 구조</span>를 만듭니다
            </h2>
            <p className="mt-7 text-[15px] leading-7 text-[#b7b2c4] sm:text-lg sm:leading-8">
              인스타그램은 강력한 파급력을 가진 채널입니다.<br />
              단순히 숏폼 제작, 타겟 광고, 노출만으로는 일시적인 효과에 그칩니다.<br className="hidden sm:block" />
              전략기획을 통해 고객의 유입부터 재방문, 공유까지 이어지는<br className="hidden sm:block" />
              지속 가능한 매출 구조와 브랜드 파급력을 설계합니다.
            </p>
          </header>

          <div className="mx-auto mt-14 grid max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <div className="relative mx-auto w-full max-w-[590px] pb-10">
              <div className="relative z-10 flex h-[116px] items-center justify-center gap-7 bg-gradient-to-r from-violet-700 via-violet-600 to-fuchsia-600 px-[13%] shadow-[0_0_28px_rgba(139,92,246,0.35)] [clip-path:polygon(0_0,100%_0,91%_100%,9%_100%)] sm:h-[132px]">
                {[Clapperboard, Camera, Target].map((Icon, index) => (
                  <div key={index} className="flex flex-col items-center gap-2 text-white">
                    <Icon className="h-9 w-9 sm:h-11 sm:w-11" strokeWidth={1.7} aria-hidden />
                    <ArrowRight className="h-4 w-4 rotate-90 text-fuchsia-200" aria-hidden />
                  </div>
                ))}
              </div>
              <div className="relative z-10 -mt-px flex h-[104px] items-center justify-center bg-gradient-to-r from-violet-700 via-fuchsia-600 to-pink-500 shadow-[0_0_25px_rgba(217,70,239,0.34)] [clip-path:polygon(9%_0,91%_0,81%_100%,19%_100%)] sm:h-[118px]">
                <Users className="h-12 w-12 text-white sm:h-14 sm:w-14" strokeWidth={1.7} aria-hidden />
              </div>
              <div className="relative z-10 -mt-px flex h-[92px] items-center justify-center bg-gradient-to-r from-pink-600 via-rose-500 to-orange-500 shadow-[0_0_25px_rgba(249,115,22,0.3)] [clip-path:polygon(19%_0,81%_0,70%_100%,30%_100%)] sm:h-[106px]">
                <BadgeCheck className="h-11 w-11 text-white sm:h-13 sm:w-13" strokeWidth={1.8} aria-hidden />
              </div>
              <div className="relative z-10 -mt-px flex h-[82px] items-center justify-center bg-gradient-to-r from-orange-500 to-amber-400 shadow-[0_10px_34px_rgba(251,146,60,0.5)] [clip-path:polygon(30%_0,70%_0,59%_100%,41%_100%)] sm:h-[94px]">
                <Heart className="h-10 w-10 fill-white/20 text-white sm:h-12 sm:w-12" strokeWidth={1.8} aria-hidden />
              </div>
              <div className="absolute bottom-3 left-1/2 h-8 w-1/2 -translate-x-1/2 rounded-[50%] bg-orange-400/45 blur-2xl" aria-hidden />
            </div>

            <div className="space-y-7 sm:space-y-9">
              {[
                { title: "기회 창출", body: "숏폼 콘텐츠 · 타겟 광고 · 노출 최적화", color: "bg-violet-400", text: "text-violet-400" },
                { title: "관심 & 신뢰 구축", body: "콘텐츠 전략 · 증거 수집 · 브랜드 신뢰도 강화", color: "bg-fuchsia-400", text: "text-fuchsia-400" },
                { title: "전환 극대화", body: "구매/방문 유도 · 전환 캠페인 · 데이터 최적화", color: "bg-orange-400", text: "text-orange-400" },
                { title: "공유 & 충성 고객 확보", body: "경험 공유 유도 · 재방문 · 팬덤 구축", color: "bg-amber-300", text: "text-amber-300" },
              ].map((item) => (
                <article key={item.title} className="relative border-l border-white/10 pl-7 sm:pl-9">
                  <span className={`absolute -left-2 top-2 h-3.5 w-3.5 rounded-full ${item.color} shadow-[0_0_14px_currentColor]`} />
                  <h3 className={`text-xl font-extrabold sm:text-2xl ${item.text}`}>{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65 sm:text-base">{item.body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative mx-auto mt-14 flex max-w-5xl flex-col items-center gap-5 rounded-[22px] border border-violet-400/45 bg-violet-950/20 px-6 py-6 text-center shadow-[0_0_22px_rgba(126,34,206,0.12)] sm:flex-row sm:px-9 sm:text-left">
            <span className="flex h-20 w-20 flex-none items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(217,70,239,0.5),rgba(76,29,149,0.75))] text-white shadow-[0_0_24px_rgba(217,70,239,0.55)]">
              <BarChart3 className="h-11 w-11" strokeWidth={1.8} aria-hidden />
            </span>
            <p className="text-lg font-bold leading-8 sm:text-2xl">
              안정적인 매출 구조와 파급력 있는 선두 기업으로<br />
              도약할 수 있도록, <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">애드그릿이 설계해 드립니다.</span>
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
