import {
  ArrowDown,
  ArrowRight,
  Check,
  CircleGauge,
  Settings as Gear,
  Hash,
  Lightbulb,
  MapPin,
  Play,
  RefreshCw,
  Search,
  Tag,
  Target,
  TrendingUp,
  UserPlus,
} from "lucide-react";

const OPTIMIZATION = [
  { title: "계정 상태", description: "정상적인 계정 상태와 활동 이력이 필수", Icon: Tag },
  { title: "태그 & 키워드", description: "적절한 태그, 키워드 최적화가 중요", Icon: Hash },
  { title: "지역 최적화", description: "지역 기반 검색 노출은 지역 최적화가 핵심", Icon: MapPin },
  { title: "콘텐츠 품질", description: "콘텐츠의 주제, 품질, 반응이 노출에 큰 영향을 미침", Icon: UserPlus },
  { title: "활동 & 신뢰도", description: "꾸준한 활동과 팔로워, 신뢰도가 노출을 결정", Icon: TrendingUp },
] as const;

const FACTORS = ["계정 연령 및 신뢰도", "팔로워 수 및 반응률", "콘텐츠 발행 주기", "경쟁 계정 존재 여부", "인스타그램 알고리즘 변화", "시즌/이벤트/트렌드 요소"];

const KNOWLEDGE = [
  { title: "알고리즘 이해", description: "인스타그램 검색/추천 알고리즘 구조와 작동 원리 분석", Icon: Lightbulb },
  { title: "타겟 분석", description: "고객 검색 패턴, 니즈, 행동 흐름을 기반으로 전략 설계", Icon: Target },
  { title: "경쟁 분석", description: "경쟁 계정의 강점, 약점, 노출 구조를 파악하여 차별화 전략 수립", Icon: TrendingUp },
  { title: "최적화 전략", description: "계정 세팅, 콘텐츠, 태그, 키워드 등 최적화 진행", Icon: Gear },
  { title: "지속적 관리", description: "데이터 분석 기반으로 지속적인 개선과 성과 관리", Icon: RefreshCw },
] as const;

const DIFFERENCE = ["최적화 계정 구축", "검색 & 추천 탭 동시 공략", "데이터 기반 전략 실행", "지속적인 모니터링 & 관리"];

const PROCESS = [
  { title: "분석 & 진단", description: "계정 및 시장 분석, 경쟁 & 키워드 분석", Icon: Search },
  { title: "전략 수립", description: "노출 목표 설정, 맞춤 전략 설계", Icon: Target },
  { title: "최적화 실행", description: "계정/콘텐츠/태그 최적화 진행", Icon: Gear },
  { title: "노출 & 유입", description: "검색/추천/계정탭 상위 노출 시작", Icon: Play },
  { title: "성과 분석 & 개선", description: "데이터 분석 및 전략 지속 개선", Icon: TrendingUp },
] as const;

function Title({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return <div className="text-center"><div className="flex items-center justify-center gap-4 sm:gap-6"><span className="h-px w-8 bg-violet-300 sm:w-20" /><h3 className="text-lg font-extrabold tracking-[-0.025em] text-slate-900 sm:text-xl">{children}</h3><span className="h-px w-8 bg-violet-300 sm:w-20" /></div>{subtitle && <p className="mt-2 text-sm font-semibold text-[#6b4fe8] sm:text-base">{subtitle}</p>}</div>;
}

function IconItem({ title, description, Icon }: { title: string; description: string; Icon: React.ComponentType<{ className?: string; strokeWidth?: number }> }) {
  return <article className="flex flex-col items-center text-center"><div className="flex h-16 w-16 items-center justify-center rounded-full border border-violet-200 bg-violet-100 text-[#6b4fe8]"><Icon className="h-8 w-8" strokeWidth={1.7} /></div><h4 className="mt-4 text-[15px] font-extrabold text-slate-900">{title}</h4><p className="mt-2 text-[13px] leading-5 text-slate-500">{description}</p></article>;
}

export function RankingExposureDetails() {
  return <section className="relative z-10 -mt-10 px-4 pb-10 sm:px-6 sm:pb-14 lg:pb-20">
    <div className="mx-auto w-full max-w-7xl space-y-8 rounded-[24px] border border-violet-100/80 bg-[linear-gradient(145deg,#fbfaff_0%,#f5f2fc_52%,#faf9fd_100%)] p-5 shadow-[0_24px_70px_rgba(78,61,130,0.12)] sm:p-8 lg:p-12">
      <div className="rounded-[24px] border border-violet-100 bg-white/80 px-5 py-9 shadow-[0_14px_40px_rgba(91,65,161,0.07)] sm:px-8 sm:py-11">
        <Title>상위노출은 최적화 계정만 가능합니다.</Title>
        <div className="mt-9 grid gap-7 xl:grid-cols-[minmax(0,5fr)_minmax(280px,1.7fr)]">
          <div className="grid grid-cols-2 gap-7 sm:grid-cols-3 lg:grid-cols-5">{OPTIMIZATION.map(item => <IconItem key={item.title} {...item} />)}</div>
          <aside className="relative overflow-hidden rounded-[20px] border border-violet-200 bg-violet-100/80 p-6">
            <CircleGauge className="absolute -bottom-7 -right-5 h-28 w-28 text-violet-300/60" strokeWidth={1.3} />
            <h4 className="relative text-lg font-black text-slate-900">노출 양과 상황은 다양합니다.</h4>
            <div className="relative mt-4 space-y-2">{FACTORS.map(item => <p key={item} className="flex items-center gap-2 text-sm text-slate-600"><Check className="h-4 w-4 flex-none text-[#6b4fe8]" strokeWidth={3} />{item}</p>)}</div>
            <div className="relative mt-5 flex h-16 items-end gap-2 border-b border-violet-300 pb-1">{[22,38,30,49,60].map((height,i)=><span key={height} className="w-5 rounded-t bg-violet-500/70" style={{height}}><span className="sr-only">그래프 {i+1}</span></span>)}</div>
            <p className="relative mt-4 text-xs leading-5 text-slate-500">여러 요인에 따라 노출 양과 순위는 달라질 수 있습니다.</p>
          </aside>
        </div>
      </div>

      <div className="rounded-[24px] border border-violet-100 bg-violet-50/70 px-5 py-9 shadow-[0_14px_40px_rgba(91,65,161,0.07)] sm:px-8 sm:py-11">
        <Title subtitle="로직 마케팅에 대한 이해와 배경지식">올바른 상위노출을 위해<br className="sm:hidden" /> 꼭 필요한 것</Title>
        <div className="mt-9 grid gap-7 xl:grid-cols-[minmax(0,5fr)_minmax(280px,1.7fr)]">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">{KNOWLEDGE.map(({title,description,Icon})=><article key={title} className="rounded-[18px] border border-violet-100 bg-white px-4 py-6 text-center shadow-sm"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet-100 text-[#6b4fe8]"><Icon className="h-7 w-7" strokeWidth={1.7} /></div><h4 className="mt-4 text-sm font-extrabold text-slate-900">{title}</h4><p className="mt-2 text-xs leading-5 text-slate-500">{description}</p></article>)}</div>
          <aside className="rounded-[20px] bg-[#6044d8] p-6 text-white shadow-[0_16px_35px_rgba(96,68,216,0.25)]"><h4 className="text-2xl font-black">ADGRIT는 다릅니다.</h4><p className="mt-3 text-sm font-semibold leading-6 text-white/85">단순 노출이 아닌, 매출로 연결되는 상위노출 마케팅</p><div className="mt-5 space-y-3">{DIFFERENCE.map(item=><p key={item} className="flex items-center gap-2 text-sm"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20"><Check className="h-3.5 w-3.5" strokeWidth={3} /></span>{item}</p>)}</div><p className="mt-6 border-t border-white/20 pt-5 text-center text-xs leading-5 text-white/75">결과로 증명하는 상위노출 마케팅을 약속드립니다.</p></aside>
        </div>
      </div>

      <div className="rounded-[24px] border border-violet-100 bg-white/80 px-5 py-9 shadow-[0_14px_40px_rgba(91,65,161,0.07)] sm:px-8 sm:py-11">
        <Title>상위노출 마케팅 진행 프로세스</Title>
        <div className="mt-10 flex flex-col md:flex-row md:items-start">{PROCESS.map(({title,description,Icon},index)=><div key={title} className="contents"><article className="flex flex-1 flex-col items-center px-2 text-center"><div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full border border-violet-200 bg-violet-100 text-[#6b4fe8]"><span className="absolute -right-1 -top-2 flex h-7 min-w-7 items-center justify-center rounded-full bg-[#6b4fe8] px-1 text-[11px] font-extrabold text-white">{String(index+1).padStart(2,"0")}</span><Icon className="h-9 w-9" strokeWidth={1.7} /></div><h4 className="mt-4 text-[15px] font-extrabold text-slate-900">{title}</h4><p className="mt-2 max-w-[180px] text-[13px] leading-5 text-slate-500">{description}</p></article>{index<PROCESS.length-1&&<div className="flex h-12 items-center justify-center text-violet-300 md:h-[72px] md:w-7"><ArrowDown className="h-5 w-5 md:hidden" /><ArrowRight className="hidden h-5 w-5 md:block" /></div>}</div>)}</div>
      </div>

      <div className="flex flex-col items-center justify-between gap-6 rounded-[24px] bg-gradient-to-r from-[#6847e8] to-pink-500 px-6 py-9 text-center text-white shadow-[0_18px_40px_rgba(113,64,205,0.28)] md:flex-row md:px-10 md:text-left"><div><h3 className="text-xl font-black leading-8 sm:text-2xl">상위노출은 전략이 다르면 결과도 다릅니다.</h3><p className="mt-2 text-sm leading-6 text-white/85">ADGRIT와 함께 검색되는 계정에서, 선택받는 계정으로 성장하세요.</p></div><a href="#contact" className="inline-flex flex-none items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-[#6b4fe8] shadow-lg transition-transform hover:-translate-y-0.5">무료 진단 상담 신청하기 <ArrowRight className="h-4 w-4" /></a></div>
    </div>
  </section>;
}
