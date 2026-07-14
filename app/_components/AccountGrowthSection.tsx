import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  Check,
  CircleUserRound,
  ClipboardCheck,
  Coins,
  Eye,
  Handshake,
  HeartHandshake,
  Megaphone,
  Paperclip,
  Send,
  Smartphone,
  Store,
  Target,
  TrendingUp,
  UserPlus,
  Video,
} from "lucide-react";

const PRINCIPLES = [
  { title: "콘텐츠 제작은 내부에서", description: "촬영부터 간단한 콘텐츠 제작까지 사장님이 직접 실행합니다.", note: "외부 대행사 제작 절대 불가", Icon: Smartphone },
  { title: "가이드 & 전략 지원", description: "콘텐츠 제작 가이딩, 기획 방향, 운영 전략을 체계적으로 제공합니다.", note: "실무적인 가이드 제공", Icon: BookOpenCheck, guide: true },
  { title: "배포 · 성장 · 매출 연결", description: "제작된 콘텐츠를 최적화하여 배포, 팔로워 증가와 고객 유입을 통해 실질적인 매출로 연결합니다.", note: "성과 중심의 계정육성", Icon: TrendingUp },
] as const;

const PROCESS = [
  { title: "계정 진단 & 전략 수립", description: "계정 상태 분석 및 타겟 맞춤 전략 설계", Icon: Target },
  { title: "콘텐츠 가이드 제공", description: "콘텐츠 주제, 구성, 촬영 팁, 편집 가이드 제공", Icon: ClipboardCheck },
  { title: "사장님 직접 제작", description: "촬영 및 간단한 콘텐츠 제작을 내부에서 직접 실행", Icon: Video },
  { title: "최적화 배포 & 확산", description: "알고리즘 최적화 배포로 노출 극대화 및 팔로워 성장", Icon: Send },
  { title: "고객 유입 & 매출 연결", description: "매장 방문, 문의, 구매 등 실질적인 매출로 연결", Icon: BarChart3, coins: true },
] as const;

const EFFECTS = [
  { title: "팔로워 상승", description: "꾸준한 콘텐츠 배포로 실제 팔로워 증가", Icon: UserPlus },
  { title: "노출 & 인지도 향상", description: "최적화된 운영으로 도달률과 인지도 확대", Icon: Eye },
  { title: "신뢰도 & 브랜드 구축", description: "디자인스러운 계정으로 브랜드 가치 상승", Icon: HeartHandshake },
  { title: "고객 유입 증가", description: "프로필 방문 → 매장 방문, 실제 고객으로 전환", Icon: Store },
  { title: "실질적 매출 성장", description: "유입된 고객이 매출로 연결, 지속적인 성장 구조 확립", Icon: TrendingUp },
] as const;

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
      <h3 className="whitespace-nowrap text-lg font-extrabold tracking-[-0.025em] text-slate-900 sm:text-xl">{children}</h3>
      <span className="h-px w-8 bg-violet-300 sm:w-20" aria-hidden />
    </div>
  );
}

export function AccountGrowthSection() {
  return (
    <section className="relative z-10 px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
      <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-[24px] border border-violet-100/80 bg-[linear-gradient(145deg,#fbfaff_0%,#f5f2fc_52%,#faf9fd_100%)] px-5 py-12 text-slate-950 shadow-[0_24px_70px_rgba(78,61,130,0.12)] sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <header id="account-growth" className="mx-auto max-w-4xl scroll-mt-32 text-center lg:scroll-mt-36">
          <span className="inline-flex rounded-full bg-[#6b4fe8] px-5 py-2 text-sm font-bold text-white shadow-[0_8px_20px_rgba(107,79,232,0.25)] sm:text-base">ADGRIT 계정육성 서비스</span>
          <h2 className="mt-7 text-[2rem] font-black leading-[1.14] tracking-[-0.045em] sm:text-[2.65rem] lg:text-5xl">팔로워를 고객으로,<br />계정을 <span className="text-[#6b4fe8]">매출로 연결</span>합니다.</h2>
          <p className="mt-6 text-[15px] font-medium leading-7 text-slate-500 sm:text-lg sm:leading-8">콘텐츠 제작은 사장님이, 전략과 성장은 저희가 함께합니다.<br className="hidden sm:block" />최적화된 계정으로 성장 <span className="font-bold text-[#6b4fe8]">→</span> 고객 유입 <span className="font-bold text-[#6b4fe8]">→</span> 실질적 매출 연결</p>
        </header>

        <div className="mt-10 rounded-[24px] border border-violet-200/80 bg-violet-50/75 px-5 py-8 shadow-[0_14px_40px_rgba(91,65,161,0.08)] sm:px-8 sm:py-10 lg:mt-14 lg:px-10">
          <SectionTitle>계정육성 핵심 원칙</SectionTitle>
          <div className="mt-8 grid gap-5 md:grid-cols-3 lg:gap-7">
            {PRINCIPLES.map(({ title, description, note, Icon, ...item }) => (
              <article key={title} className="flex min-h-[300px] flex-col items-center rounded-[20px] border border-white bg-white/75 px-5 py-7 text-center shadow-[0_10px_30px_rgba(89,67,145,0.07)] sm:px-6">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-[22px] border border-violet-200 bg-gradient-to-br from-white to-violet-100 text-[#6b4fe8] shadow-[0_10px_25px_rgba(107,79,232,0.12)]"><Icon className="h-10 w-10" strokeWidth={1.7} aria-hidden />{"guide" in item && item.guide && <span className="absolute bottom-1.5 text-[7px] font-black tracking-widest">GUIDE</span>}</div>
                <h4 className="mt-5 text-lg font-extrabold tracking-[-0.025em] text-slate-900">{title}</h4>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">{description}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#6b4fe8]"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#6b4fe8] text-white"><Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden /></span>{note}</div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-[24px] border border-violet-100 bg-white/80 px-5 py-9 shadow-[0_14px_40px_rgba(91,65,161,0.07)] sm:px-8 sm:py-11 lg:px-10">
          <SectionTitle>계정육성 프로세스</SectionTitle>
          <div className="mt-10 flex flex-col items-stretch md:flex-row md:items-start md:justify-between">
            {PROCESS.map(({ title, description, Icon, ...item }, index) => (
              <div key={title} className="contents">
                <article className="flex flex-1 flex-col items-center px-2 text-center">
                  <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full border border-violet-200 bg-violet-100 text-[#6b4fe8]">
                    <span className="absolute -right-1 -top-2 flex h-7 min-w-7 items-center justify-center rounded-full bg-[#6b4fe8] px-1 text-[11px] font-extrabold text-white shadow-md">{String(index + 1).padStart(2, "0")}</span>
                    <Icon className="h-9 w-9" strokeWidth={1.7} aria-hidden />
                    {"coins" in item && item.coins && <Coins className="absolute bottom-2 right-2 h-4 w-4" strokeWidth={2} aria-hidden />}
                  </div>
                  <h4 className="mt-4 text-[15px] font-extrabold leading-5 text-slate-900">{title}</h4>
                  <p className="mt-2 max-w-[190px] text-[13px] leading-5 text-slate-500">{description}</p>
                </article>
                {index < PROCESS.length - 1 && <div className="flex h-12 items-center justify-center text-violet-300 md:h-[72px] md:w-7"><ArrowDown className="h-5 w-5 md:hidden" aria-hidden /><ArrowRight className="hidden h-5 w-5 md:block" aria-hidden /></div>}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-[24px] border border-violet-100 bg-white/80 px-5 py-9 shadow-[0_14px_40px_rgba(91,65,161,0.07)] sm:px-8 sm:py-11 lg:px-10">
          <SectionTitle>계정육성의 효과</SectionTitle>
          <div className="mt-9 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5 lg:gap-7">
            {EFFECTS.map(({ title, description, Icon }) => (
              <article key={title} className="flex flex-col items-center text-center last:col-span-2 md:last:col-span-1">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 text-[#6b4fe8]"><Icon className="h-8 w-8" strokeWidth={1.65} aria-hidden /></div>
                <h4 className="mt-4 text-[15px] font-extrabold text-slate-900">{title}</h4>
                <p className="mt-2 text-[13px] leading-5 text-slate-500">{description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-[24px] border border-violet-200/80 bg-violet-50/75 px-5 py-9 shadow-[0_14px_40px_rgba(91,65,161,0.08)] sm:px-8 sm:py-11 lg:px-10">
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
