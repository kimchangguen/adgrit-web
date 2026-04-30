import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  CircleAlert,
  CloudOff,
  Code2,
  Database,
  FileSpreadsheet,
  GraduationCap,
  HardHat,
  Landmark,
  Monitor,
  Search,
  ShieldCheck,
  Target,
  Truck,
  UserRound,
  UsersRound,
  Workflow,
  Factory,
  Clock3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiteHeader } from "../../_components/SiteHeader";

const choiceReasons: Array<{
  icon: LucideIcon;
  description: string;
}> = [
  {
    icon: FileSpreadsheet,
    description: "매일 똑같이 반복되는\n업무에 인력과 시간을\n낭비하고 있다.",
  },
  {
    icon: UserRound,
    description: "업무를 자동화하고 싶어도\n내부에 시스템을 구축할\n개발 인력이 없다.",
  },
  {
    icon: CloudOff,
    description:
      "시중 자동화 솔루션(SaaS)을\n써봤지만, 우리 회사의 업무\n방식과는 맞지 않아 방치됐다.",
  },
  {
    icon: CircleAlert,
    description:
      "실무자가 핵심 업무보다\n‘단순 작업’에 치여\n생산성이 떨어진다.",
  },
];

const solutionCards: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Workflow,
    title: "철저한 업무 프로세스 구조화",
    description:
      "비효율적인 업무 동선을 파악하고,\n시스템화할 수 있도록 꼼꼼하게\n재설계합니다.",
  },
  {
    icon: Code2,
    title: "100% 맞춤형 직접 코딩",
    description:
      "템플릿이 아닌, 우리 회사의 실제\n워크플로우에 완벽히 맞는\n전용 프로그램을 직접 개발합니다.",
  },
  {
    icon: UsersRound,
    title: "내부 개발자 대체 효과",
    description:
      "고액 연봉의 개발자 채용과 관리 없이,\n애드그릿 코어가 든든한 외부 IT\n파트너가 되어 드립니다.",
  },
];

const effectTiles: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Database,
    title: "비용 절감",
    description: "단순 업무를 위한\n추가 인력 채용 불필요",
  },
  {
    icon: ShieldCheck,
    title: "인적 오류 제로",
    description: "꼼꼼한 시스템 처리로\n누락 및 실수 원천 차단",
  },
  {
    icon: Target,
    title: "핵심 역량 집중",
    description: "기계적인 일에서 벗어나,\n진짜 매출을 만드는 일에 집중",
  },
  {
    icon: Clock3,
    title: "업무 효율 극대화",
    description: "반복 업무 시간 단축으로\n전체 업무 사이클 속도 향상",
  },
];

const timelineSteps: Array<{
  step: string;
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    step: "STEP 01",
    icon: Search,
    title: "업무 진단 및 컨설팅",
    description: "현재 실무자들의 업무 프로세스\n인터뷰 및 비효율 구간 파악",
  },
  {
    step: "STEP 02",
    icon: Workflow,
    title: "구조화 및 기획",
    description: "자동화가 가능한 영역을 선별하고,\n시스템 로직 설계",
  },
  {
    step: "STEP 03",
    icon: Code2,
    title: "맞춤형 코딩 및 개발",
    description: "설계된 로직을 바탕으로\n우리 회사만의 전용 프로그램 제작",
  },
  {
    step: "STEP 04",
    icon: Monitor,
    title: "사내 도입 및 안정화",
    description: "실무자 대상 사용법 안내 및\n실제 업무 적용 후 최적화",
  },
  {
    step: "STEP 05",
    icon: Check,
    title: "운영 관리 및 고도화",
    description: "운영 데이터를 바탕으로\n자동화 범위 확장 및 개선",
  },
];

const industryTiles: Array<{
  icon: LucideIcon;
  label: string;
}> = [
  { icon: Factory, label: "제조" },
  { icon: Truck, label: "유통/물류" },
  { icon: Monitor, label: "IT/서비스" },
  { icon: HardHat, label: "건설" },
  { icon: GraduationCap, label: "교육" },
  { icon: Landmark, label: "금융" },
];

export default function AutomationPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-neutral text-primary break-keep pt-16">
        <HeroSection />
        <ChoiceSection />
        <SolutionSection />
        <EffectSection />
        <TimelineSection />
        <IndustrySection />
        <ClosingSection />
      </main>
    </>
  );
}

function HeroSection() {
  return (
    <section className="overflow-hidden border-b border-tertiary bg-primary">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-16">
        <div className="text-neutral">
          <SectionNumber>01</SectionNumber>
          <h1 className="mt-7 text-3xl font-black leading-[1.25] sm:text-5xl lg:text-[52px]">
            남들은 AI로 업무를 끝낼 때,
            <br />
            <span className="text-secondary">아직도 직원이</span>
            <br />
            <span className="text-secondary">
              복사·붙여넣기를 하고 계신가요?
            </span>
          </h1>
          <p className="mt-8 text-base font-semibold leading-8 text-neutral/80 sm:text-lg">
            시중의 툴에 회사를 맞추지 마세요.
            <br />
            내부에 개발 인력이 없어도, 오직 우리 회사만의
            <br />
            업무 프로세스에 딱 맞는 맞춤형 자동화 프로그램을
            <br />
            직접 코딩하여 구축해 드립니다.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex min-h-14 items-center justify-center rounded-md bg-secondary px-8 text-base font-black text-neutral shadow-xl shadow-secondary/20 transition hover:bg-secondary/90"
          >
            우리 회사 업무 자동화 가능성 진단하기
            <ArrowRight className="ml-3 h-5 w-5" aria-hidden />
          </a>
        </div>
        <AutomationHeroVisual />
      </div>
    </section>
  );
}

function AutomationHeroVisual() {
  return (
    <div className="grid min-h-[360px] gap-2 sm:grid-cols-[1fr_auto_1.15fr] sm:items-stretch">
      <div className="relative rounded-lg border border-tertiary/30 bg-neutral/20 p-6 shadow-2xl shadow-primary/25">
        <StatusPill>자동화 전</StatusPill>
        <div className="mt-16 flex items-end justify-center">
          <div className="relative h-32 w-28 rounded-t-full bg-tertiary" aria-hidden>
            <div className="absolute left-1/2 top-7 h-10 w-10 -translate-x-1/2 rounded-full bg-secondary/70" />
            <div className="absolute bottom-0 left-1/2 h-20 w-20 -translate-x-1/2 rounded-t-[30px] bg-neutral" />
          </div>
        </div>
        <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-3">
          <div className="h-8 rounded-sm bg-neutral/70" />
          <div className="h-8 rounded-sm bg-neutral/70" />
          <div className="h-8 rounded-sm bg-neutral/70" />
          <div className="h-8 rounded-sm bg-neutral/70" />
        </div>
        {["XLS", "CSV", "PDF"].map((file, index) => (
          <span
            key={file}
            className={`absolute rounded-sm bg-neutral px-2 py-1 text-xs font-black text-primary shadow ${
              index === 0
                ? "left-16 top-20 rotate-[-10deg]"
                : index === 1
                  ? "right-16 top-24 rotate-[8deg]"
                  : "right-10 top-40 rotate-[-4deg]"
            }`}
          >
            {file}
          </span>
        ))}
      </div>
      <div className="z-10 mx-auto flex h-14 w-14 items-center justify-center self-center rounded-full bg-primary text-neutral shadow-xl sm:-mx-8 sm:h-20 sm:w-20">
        <ArrowRight className="h-7 w-7" aria-hidden />
      </div>
      <div className="relative rounded-lg border border-tertiary bg-neutral p-6 shadow-2xl shadow-primary/15">
        <StatusPill dark>자동화 후</StatusPill>
        <div className="mt-16 rounded-md border border-tertiary bg-neutral shadow-lg">
          <div className="flex h-8 items-center gap-1.5 rounded-t-md bg-primary px-3">
            <span className="h-2 w-2 rounded-full bg-neutral" />
            <span className="h-2 w-2 rounded-full bg-secondary" />
            <span className="h-2 w-2 rounded-full bg-neutral/70" />
          </div>
          <div className="grid gap-4 p-5 sm:grid-cols-2">
            <DashboardCard rising />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard rising />
          </div>
        </div>
        <div className="absolute right-8 top-40 flex items-center gap-3 rounded-md bg-neutral px-4 py-3 text-sm font-black text-primary shadow-xl">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-neutral">
            <Check className="h-6 w-6" aria-hidden />
          </span>
          업무 완료!
        </div>
        <div className="mt-5 grid grid-cols-3 gap-4">
          {[Database, CloudOff, BriefcaseBusiness].map((Icon, index) => (
            <div
              key={index}
              className="flex h-14 items-center justify-center rounded-md border border-tertiary bg-neutral shadow-sm"
            >
              <Icon className="h-6 w-6 text-primary" aria-hidden />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ChoiceSection() {
  return (
    <section className="border-b border-tertiary bg-neutral py-12 sm:py-14">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.24fr_0.76fr] lg:items-center">
        <div>
          <SectionNumber>02</SectionNumber>
          <h2 className="mt-6 text-2xl font-black leading-[1.35] text-primary sm:text-3xl lg:text-[34px]">
            AI 시대라는데,
            <br />
            왜 우리 직원의
            <br />
            야근은 줄어들지
            <br />
            않을까요?
          </h2>
        </div>
        <div className="grid gap-0 rounded-lg border border-tertiary bg-neutral md:grid-cols-4">
          {choiceReasons.map((item, index) => (
            <article
              key={item.description}
              className={`flex min-h-[190px] flex-col items-center justify-center px-6 py-8 text-center ${
                index > 0 ? "border-t border-tertiary md:border-l md:border-t-0" : ""
              }`}
            >
              <item.icon className="h-14 w-14 text-primary" strokeWidth={1.7} aria-hidden />
              <p className="mt-7 whitespace-pre-line text-base font-semibold leading-8 text-primary/80">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section className="border-b border-tertiary bg-neutral py-12 sm:py-14">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionNumber>03</SectionNumber>
        <h2 className="mt-6 text-2xl font-black leading-[1.35] text-primary sm:text-3xl lg:text-[34px]">
          흩어진 업무를 구조화하고,
          <br />
          반복 업무는 시스템으로 대체합니다.
        </h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {solutionCards.map((card) => (
            <article
              key={card.title}
              className="grid min-h-[150px] grid-cols-[88px_1fr] items-center gap-5 rounded-lg border border-tertiary bg-neutral p-6 shadow-sm"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-neutral shadow-lg shadow-primary/15">
                <card.icon className="h-11 w-11" strokeWidth={1.8} aria-hidden />
              </div>
              <div>
                <h3 className="text-xl font-black leading-7 text-primary">{card.title}</h3>
                <p className="mt-3 whitespace-pre-line text-sm font-semibold leading-7 text-primary/70">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EffectSection() {
  return (
    <section className="border-b border-tertiary bg-neutral py-12 sm:py-14">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.28fr_0.72fr] lg:items-center">
        <div>
          <SectionNumber>04</SectionNumber>
          <h2 className="mt-6 text-2xl font-black leading-[1.35] text-primary sm:text-3xl lg:text-[34px]">
            애드그릿 코어의 자동화로
            <br />
            이런 효과를 기대할 수 있습니다.
          </h2>
        </div>
        <div className="grid gap-0 rounded-lg border border-tertiary bg-neutral md:grid-cols-4">
          {effectTiles.map((item, index) => (
            <article
              key={item.title}
              className={`flex min-h-[190px] flex-col items-center justify-center px-6 py-8 text-center ${
                index > 0 ? "border-t border-tertiary md:border-l md:border-t-0" : ""
              }`}
            >
              <item.icon className="h-14 w-14 text-primary" strokeWidth={1.7} aria-hidden />
              <h3 className="mt-6 text-lg font-black text-primary">{item.title}</h3>
              <p className="mt-4 whitespace-pre-line text-sm font-semibold leading-7 text-primary/65">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="border-b border-tertiary bg-neutral py-12 sm:py-14">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.2fr_0.8fr]">
        <div>
          <SectionNumber>05</SectionNumber>
          <h2 className="mt-6 text-2xl font-black leading-[1.35] text-primary sm:text-3xl lg:text-[34px]">
            어떤 과정으로
            <br />
            도입되나요?
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {timelineSteps.map((item, index) => (
            <div key={item.step} className="relative">
              {index < timelineSteps.length - 1 && (
                <ArrowRight
                  className="absolute -right-4 top-1/2 z-10 hidden h-7 w-7 -translate-y-1/2 text-primary xl:block"
                  aria-hidden
                />
              )}
              <article className="flex min-h-[245px] flex-col items-center rounded-lg border border-tertiary bg-neutral p-5 text-center shadow-sm">
                <span className="inline-flex rounded-md bg-primary px-4 py-1 text-sm font-black text-neutral">
                  {item.step}
                </span>
                <item.icon
                  className="mt-7 h-12 w-12 text-primary"
                  strokeWidth={1.7}
                  aria-hidden
                />
                <h3 className="mt-5 text-base font-black text-primary">{item.title}</h3>
                <p className="mt-3 whitespace-pre-line text-sm font-semibold leading-6 text-primary/65">
                  {item.description}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustrySection() {
  return (
    <section className="border-b border-tertiary bg-neutral py-12 sm:py-14">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.25fr_0.75fr] lg:items-center">
        <div>
          <SectionNumber>06</SectionNumber>
          <h2 className="mt-6 text-2xl font-black leading-[1.35] text-primary sm:text-3xl lg:text-[34px]">
            다양한 업종의 기업들이
            <br />
            애드그릿 코어와 함께
            <br />
            성장하고 있습니다.
          </h2>
        </div>
        <div>
          <div className="grid gap-0 rounded-lg border border-tertiary bg-neutral sm:grid-cols-2 lg:grid-cols-6">
            {industryTiles.map((item, index) => (
              <article
                key={item.label}
                className={`flex min-h-[120px] flex-col items-center justify-center px-5 py-6 text-center ${
                  index > 0 ? "border-t border-tertiary sm:border-l sm:border-t-0" : ""
                } ${index === 2 || index === 4 ? "sm:border-l-0 lg:border-l" : ""}`}
              >
                <item.icon className="h-10 w-10 text-primary" strokeWidth={1.6} aria-hidden />
                <p className="mt-4 text-sm font-semibold text-primary/75">{item.label}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-center text-sm font-semibold text-primary/55">
            ※ 실제 고객사의 동의 하에 게재된 사례입니다.
          </p>
        </div>
      </div>
    </section>
  );
}

function ClosingSection() {
  return (
    <section className="overflow-hidden bg-primary">
      <div className="mx-auto grid min-h-[245px] w-full max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[0.6fr_0.4fr] lg:items-center">
        <div className="text-neutral">
          <SectionNumber>07</SectionNumber>
          <h2 className="mt-5 text-3xl font-black leading-[1.3] sm:text-4xl lg:text-[42px]">
            반복 업무는 프로그램에 맡기고,
            <br />
            대표님은 비즈니스 성장에만 집중하세요.
          </h2>
          <a
            href="/contact"
            className="mt-8 inline-flex min-h-14 items-center justify-center rounded-md bg-secondary px-8 text-base font-black text-neutral shadow-xl shadow-secondary/20 transition hover:bg-secondary/90"
          >
            지금 바로 맞춤형 업무 자동화 컨설팅 신청하기
            <ArrowRight className="ml-3 h-5 w-5" aria-hidden />
          </a>
        </div>
        <div className="relative hidden h-full min-h-[210px] lg:block">
          <div className="absolute inset-0 rounded-tl-[80px] bg-tertiary" />
          <div className="absolute bottom-0 right-12 h-44 w-32 rounded-t-full bg-neutral shadow-xl" />
          <div className="absolute bottom-16 right-24 h-16 w-16 rounded-full bg-secondary" />
          <div className="absolute bottom-0 left-10 h-28 w-44 rounded-t-lg bg-neutral/80 shadow-xl" />
          <div className="absolute left-16 top-16 h-2 w-28 rounded-full bg-primary/30" />
          <div className="absolute left-16 top-24 h-2 w-36 rounded-full bg-primary/20" />
        </div>
      </div>
    </section>
  );
}

function DashboardCard({ rising = false }: { rising?: boolean }) {
  return (
    <div className="h-20 rounded-md bg-tertiary/80 p-3">
      <div className="h-2 w-2/3 rounded-full bg-neutral" />
      <div className="mt-4 flex h-9 items-end gap-1.5">
        {[35, 50, rising ? 72 : 42, rising ? 88 : 58].map((height, index) => (
          <span
            key={index}
            className="w-full rounded-sm bg-primary"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function StatusPill({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      className={`absolute left-1/2 top-8 -translate-x-1/2 rounded-full px-5 py-2 text-sm font-black ${
        dark ? "bg-primary text-neutral" : "bg-primary/70 text-neutral"
      }`}
    >
      {children}
    </span>
  );
}

function SectionNumber({ children }: { children: React.ReactNode }) {
  return <p className="text-2xl font-black text-secondary">{children}</p>;
}
