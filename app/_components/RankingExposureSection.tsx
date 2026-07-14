import {
  ArrowRight,
  BarChart3,
  Crown,
  Handshake,
  ImageIcon,
  ListVideo,
  Play,
  Search,
  TrendingUp,
  UserPlus,
  UserRound,
} from "lucide-react";

const GRADIENT = "bg-gradient-to-r from-[#ff7a3d] via-[#ec4899] to-[#7c3aed]";

const EXPOSURE_CARDS = [
  {
    number: "01.",
    title: "추천탭 노출",
    suffix: "(콘텐츠 노출)",
    description: "릴스, 이미지, 카드뉴스 등 콘텐츠가 추천탭에 노출되어 더 많은 사람에게 도달합니다.",
    caption: "콘텐츠 노출 → 도달 → 관심 → 방문",
    captionClass: "from-[#ff7a3d] to-[#ec4899]",
    items: [
      { label: "릴스", Icon: Play, tone: "from-orange-50 to-pink-100 text-[#ff7a3d]" },
      { label: "이미지", Icon: ImageIcon, tone: "from-pink-50 to-rose-100 text-[#ec4899]" },
      { label: "카드뉴스", Icon: ListVideo, tone: "from-orange-50 to-pink-100 text-[#ec4899]" },
    ],
  },
  {
    number: "02.",
    title: "계정탭 노출",
    suffix: "(계정 노출)",
    description: "매장, 전문가, 서비스 등 비주얼 상품이 아닌 경우 계정탭 상위에 노출되어 선택받는 계정으로 만듭니다.",
    caption: "계정 노출 → 방문 → 선택 → 매출",
    captionClass: "from-[#ec4899] to-[#7c3aed]",
    items: [
      { label: "검색", Icon: Search, tone: "from-orange-50 to-pink-100 text-[#ff7a3d]" },
      { label: "계정탭", Icon: UserRound, tone: "from-pink-50 to-rose-100 text-[#ec4899]" },
      { label: "선택", Icon: Crown, tone: "from-pink-50 to-purple-100 text-[#ec4899]" },
      { label: "매출", Icon: BarChart3, tone: "from-pink-50 to-purple-100 text-[#7c3aed]" },
    ],
  },
] as const;

const SERVICES = [
  {
    badge: "01. 신규 계정 최적화 육성",
    title: "0부터 시작하는 파급력 있는 계정 만들기",
    description: "신규 계정도 최적화된 세팅과 체계적인 운영으로 영향력 있는 계정으로 빠르게 성장시킵니다.",
    tags: ["프로필 최적화", "콘텐츠 전략", "초기 세팅", "성장 운영", "성과 분석"],
    Icon: UserPlus,
    iconClass: "from-[#ff7a3d] to-[#ec4899]",
  },
  {
    badge: "02. 기존 계정 인수인계 육성",
    title: "이미 육성된 계정으로 빠르게 최적화 운영",
    description: "이미 육성된 계정을 인수인계하여 빠른 시간 안에 최적화된 운영이 가능합니다.",
    tags: ["계정 인수인계", "계정 진단", "최적화 개선", "운영 전략", "성과 극대화"],
    Icon: Handshake,
    iconClass: "from-[#ec4899] to-[#7c3aed]",
  },
] as const;

function SectionHeading({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return <div className="flex items-center justify-center gap-4 sm:gap-6"><span className="h-px w-8 bg-pink-200 sm:w-20" /><h3 className={`text-center text-xl font-extrabold tracking-[-0.025em] sm:text-2xl ${onDark ? "text-white" : "text-slate-900"}`}>{children}</h3><span className="h-px w-8 bg-pink-200 sm:w-20" /></div>;
}

export function RankingExposureSection() {
  return (
    <section className="relative z-10 px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
      <div
        className="shortform-section-container relative mx-auto w-full max-w-7xl overflow-hidden rounded-[24px] border border-white/[0.08] bg-[rgba(20,20,30,0.45)] px-5 py-12 text-white shadow-[0_24px_80px_rgba(10,8,24,0.28)] sm:px-8 sm:py-16 lg:px-12 lg:py-20"
        style={{
          backdropFilter: "blur(20px) saturate(120%)",
          WebkitBackdropFilter: "blur(20px) saturate(120%)",
        }}
      >
        <header id="ranking" className="mx-auto max-w-4xl scroll-mt-32 text-center lg:scroll-mt-36">
          <div className="flex items-center justify-center gap-3 text-sm font-bold text-white/80 sm:text-base"><span className="h-px w-8 bg-pink-300" /><span>ADGRIT <span className="bg-gradient-to-r from-[#ff7a3d] via-[#ec4899] to-[#7c3aed] bg-clip-text text-transparent">상위노출</span> 서비스</span><span className="h-px w-8 bg-pink-300" /></div>
          <h2 className="mt-7 text-[2rem] font-black leading-[1.14] tracking-[-0.045em] text-white sm:text-[2.75rem] lg:text-[3.25rem]">인스타그램 상위노출,<br /><span className="bg-gradient-to-r from-[#ff7a3d] via-[#ec4899] to-[#7c3aed] bg-clip-text text-transparent">최적화 계정</span>만이 노출됩니다.</h2>
          <p className="mt-6 text-[15px] font-normal leading-7 text-white/75 sm:text-lg sm:leading-8">검색부터 추천탭, 계정탭까지 최적 위치에 노출되어<br className="hidden sm:block" />더 많은 고객이 찾아오고, 매출로 연결됩니다.</p>
        </header>

        <div className="mt-12">
          <SectionHeading onDark>상위노출은 어디에서 이루어질까요?</SectionHeading>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {EXPOSURE_CARDS.map(({ number, title, suffix, description, caption, captionClass, items }) => (
              <article key={title} className="flex min-h-[390px] flex-col overflow-hidden rounded-[22px] border border-pink-100 bg-white shadow-[0_14px_35px_rgba(167,72,121,0.09)]">
                <div className="flex flex-1 flex-col px-5 py-8 sm:px-8">
                  <h4 className="text-xl font-black tracking-[-0.025em] text-slate-900"><span className="mr-1.5 text-slate-400">{number}</span><span className="bg-gradient-to-r from-[#ff7a3d] to-[#ec4899] bg-clip-text text-transparent">{title}</span> <span className="text-base text-slate-700">{suffix}</span></h4>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-[#6b6b78]">{description}</p>
                  <div className={`mt-8 grid flex-1 items-center gap-4 ${items.length === 3 ? "grid-cols-3" : "grid-cols-2 sm:grid-cols-4"}`}>
                    {items.map(({ label, Icon, tone }) => <div key={label} className="flex flex-col items-center text-center"><span className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${tone}`}><Icon className="h-8 w-8" strokeWidth={1.7} /></span><span className="mt-3 text-sm font-bold text-slate-700">{label}</span></div>)}
                  </div>
                </div>
                <div className={`bg-gradient-to-r ${captionClass} px-5 py-4 text-center text-sm font-extrabold text-white sm:text-base`}>{caption}</div>
              </article>
            ))}
          </div>
        </div>

        <div className="middle-box mt-12 px-5 py-9 sm:px-8 sm:py-11">
          <SectionHeading onDark>두 가지 상위노출 서비스</SectionHeading>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {SERVICES.map(({ badge, title, description, tags, Icon, iconClass }) => (
              <article key={badge} className="rounded-[22px] border border-pink-100 bg-white p-6 shadow-[0_12px_30px_rgba(167,72,121,0.08)] sm:p-8">
                <span className="inline-flex rounded-full bg-pink-50 px-4 py-2 text-xs font-extrabold text-[#ec4899] sm:text-sm">{badge}</span>
                <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-start"><span className={`flex h-20 w-20 flex-none items-center justify-center rounded-full bg-gradient-to-br ${iconClass} text-white shadow-lg`}><Icon className="h-10 w-10" strokeWidth={1.7} /></span><div><h4 className="text-xl font-black leading-7 tracking-[-0.03em] text-slate-900 sm:text-2xl">{title}</h4><p className="mt-3 text-sm leading-6 text-[#6b6b78]">{description}</p></div></div>
                <div className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs font-semibold text-slate-600 sm:text-sm">{tags.map((tag,index)=><span key={tag} className="inline-flex items-center gap-2">{index>0&&<ArrowRight className="h-3.5 w-3.5 text-[#ec4899]" />}{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </div>

        <div className={`mt-8 flex flex-col items-center gap-5 rounded-[24px] ${GRADIENT} px-6 py-9 text-center text-white shadow-[0_18px_40px_rgba(221,66,122,0.25)] sm:px-10 md:flex-row md:text-left`}>
          <span className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-white text-[#ec4899] shadow-lg"><TrendingUp className="h-8 w-8" strokeWidth={1.8} /></span>
          <div><h3 className="text-xl font-black leading-8 sm:text-2xl">상위노출은 전략이 다르면 결과도 다릅니다.</h3><p className="mt-2 text-sm leading-6 text-white/90">ADGRIT와 함께 검색되는 계정에서, 선택받는 계정으로 성장하세요.</p></div>
        </div>
      </div>
    </section>
  );
}
