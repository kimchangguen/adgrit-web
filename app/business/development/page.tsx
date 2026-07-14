"use client";

import {
  ArrowRight,
  BarChart3,
  Coins,
  Crown,
  Gauge,
  Gem,
  MessageCircle,
  Sparkles,
  UserRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiteHeader } from "../../_components/SiteHeader";

const differenceCards: Array<{
  icon: LucideIcon;
  number: string;
  title: string;
  body: string;
  tone: "primary" | "secondary" | "dark";
}> = [
  {
    icon: MessageCircle,
    number: "01",
    title: "고객을 설득하는\n스토리텔링 기획",
    body:
      "아무리 기술이 좋아도 메시지가 없으면 안 팔립니다. 고객의 페인포인트를 정확히 짚고 매력을 제시하는 구조로, 방문자가 스크롤을 내릴수록 설득되는 흐름을 기획합니다.",
    tone: "primary",
  },
  {
    icon: Gem,
    number: "02",
    title: "브랜드의 격을 높이는\n압도적 디자인",
    body:
      "뻔한 템플릿에 기업을 억지로 끼워 맞추지 않습니다. 브랜드의 철학과 가치가 시각적으로 완벽하게 전달되는 독보적인 UI/UX 디자인을 구현합니다.",
    tone: "secondary",
  },
  {
    icon: Gauge,
    number: "03",
    title: "기술력 기반의\n마케팅 최적화",
    body:
      "화려하기만 하고 무거운 사이트는 위험합니다. 이탈률을 방지하는 극강의 로딩 속도와, 검색 엔진이 사랑하는 최적화된 코드로 보이지 않는 곳까지 완벽하게 세팅합니다.",
    tone: "dark",
  },
];

const targetCustomers: Array<{
  icon: LucideIcon;
  text: string;
}> = [
  {
    icon: BarChart3,
    text: "기존 홈페이지의 전환율\n(DB 수집, 구매 등)이\n처참해 리뉴얼이\n시급한 기업",
  },
  {
    icon: Crown,
    text:
      "단순 웹사이트를 넘어,\n브랜드의 가치를\n고급스럽게 표현하고 싶은\n하이엔드 비즈니스\n(병원, 로펌, 전문 컨설팅,\n고급 프랜차이즈 등)",
  },
  {
    icon: UserRound,
    text:
      "제품과 서비스에는 자신 있지만,\n이를 웹상에서 매력적으로\n풀어낼 기획력이 부족한\n대표님",
  },
];

export default function DevelopmentPage() {
  return (
    <div className="min-h-screen bg-neutral text-primary break-keep">
      <SiteHeader />
      <main className="pt-16">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <DifferenceSection />
        <TargetSection />
        <BottomCtaSection />
      </main>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="overflow-hidden bg-primary text-neutral">
      <div className="mx-auto grid min-h-[620px] w-full max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[0.48fr_0.52fr] lg:items-center lg:py-20">
        <div>
          <SectionNumber>01</SectionNumber>
          <h1 className="mt-7 text-4xl font-black leading-[1.22] sm:text-5xl lg:text-[54px]">
            AI 시대, 수백만 원짜리
            <br />
            ‘명함용 홈페이지’는
            <br />
            더 이상 필요 없습니다.
          </h1>
          <p className="mt-8 max-w-xl text-base font-semibold leading-8 text-neutral/80 sm:text-lg">
            단순한 정보 전달이나 상세페이지 수준이라면
            <br />
            무료 툴로도 충분합니다. 하지만, 방문자의 지갑을 열고
            <br />
            확실한 ‘매출’을 만드는 디자인과 기획이 필요하다면
            <br />
            애드그릿이 정답입니다.
          </p>
          <a
            href="https://open.kakao.com/o/s2RtMSei"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex min-h-14 items-center justify-center rounded-sm bg-secondary px-8 text-base font-black text-neutral shadow-xl shadow-secondary/20 transition hover:bg-secondary/90"
          >
            매출을 만드는 홈페이지 제작 상담하기
            <ArrowRight className="ml-4 h-5 w-5" aria-hidden />
          </a>
        </div>
        <LaptopMockup />
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="border-b border-tertiary bg-neutral py-14 sm:py-16">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
        <div className="grid gap-8 md:grid-cols-[0.5fr_0.5fr] lg:block">
          <div>
            <SectionNumber>02</SectionNumber>
            <h2 className="mt-7 text-3xl font-black leading-[1.24] text-primary sm:text-4xl lg:text-[42px]">
              그저 예쁘기만한
              <br />
              공장형 홈페이지에
              <br />
              또 속으실 건가요?
            </h2>
          </div>
          <CoinsPlaceholder />
        </div>
        <div className="space-y-8 text-base font-semibold leading-8 text-primary/75 sm:text-lg">
          <p>
            최근 AI와 노코드 툴의 발전으로, 단순한 웹페이지는 누구나 쉽고
            저렴하게 만들 수 있는 시대가 되었습니다. 그저 ‘우리 회사가
            존재한다’는 사실만 알리는 용도라면 비싼 개발비를 들일 이유가 전혀
            없습니다.
          </p>
          <div className="h-px bg-tertiary" />
          <p>
            하지만 진짜 문제는 전환율입니다. 저렴하게 찍어낸 템플릿 사이트나
            목적 없이 만들어진 웹페이지는 방문자의 시선을 끌지 못합니다. 애써
            마케팅 비용을 태워 고객을 유입시켜도, 신뢰감을 주지 못하는
            홈페이지는 결국 고객을 뒤로가기 버튼으로 내몰 뿐입니다.
          </p>
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section className="overflow-hidden bg-primary text-neutral">
      <div className="mx-auto grid min-h-[460px] w-full max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[0.52fr_0.48fr] lg:items-center lg:py-18">
        <div>
          <SectionNumber>03</SectionNumber>
          <h2 className="mt-7 text-3xl font-black leading-[1.25] sm:text-4xl lg:text-[44px]">
            애드그릿은 홈페이지를 만들지 않습니다.
            <br />
            <span className="text-secondary">‘비즈니스 무기’를 설계합니다.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-base font-semibold leading-8 text-neutral/78 sm:text-lg">
            애드그릿은 단순한 코딩과 레이아웃 배치에 머물지 않습니다.
            <br />
            타깃 고객의 심리를 관통하는 메시지, 시선을 압도하는 수려한 디자인,
            <br />
            그리고 구매 버튼을 누를 수밖에 없게 만드는 치밀한 마케팅 기획을 결합하여
            <br />
            매출에 직결되는 하이엔드 웹사이트를 제작합니다.
          </p>
        </div>
        <DashboardMockup />
      </div>
    </section>
  );
}

function DifferenceSection() {
  return (
    <section className="border-b border-tertiary bg-neutral py-14 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.28fr_0.72fr] lg:items-start">
          <div>
            <SectionNumber>04</SectionNumber>
          </div>
          <h2 className="text-center text-3xl font-black leading-[1.25] text-primary sm:text-4xl lg:text-[42px]">
            애드그릿, 무엇이 다를까요?
          </h2>
        </div>
        <div className="mt-11 grid gap-8 lg:grid-cols-3">
          {differenceCards.map((card, index) => (
            <article
              key={card.number}
              className={`grid gap-7 border-tertiary lg:grid-cols-[86px_1fr] ${
                index > 0 ? "lg:border-l lg:pl-9" : ""
              }`}
            >
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-full shadow-lg ${
                  card.tone === "secondary"
                    ? "bg-secondary text-neutral shadow-secondary/20"
                    : card.tone === "dark"
                      ? "bg-primary/75 text-neutral shadow-primary/15"
                      : "bg-primary text-neutral shadow-primary/15"
                }`}
              >
                <card.icon className="h-10 w-10" strokeWidth={1.7} aria-hidden />
              </div>
              <div>
                <p className="text-base font-black text-primary">{card.number}</p>
                <h3 className="mt-4 whitespace-pre-line text-xl font-black leading-7 text-primary">
                  {card.title}
                </h3>
                <p className="mt-5 text-sm font-semibold leading-7 text-primary/65">
                  {card.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TargetSection() {
  return (
    <section className="border-b border-tertiary bg-neutral py-14 sm:py-16">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.28fr_0.72fr] lg:items-center">
        <div>
          <SectionNumber>05</SectionNumber>
          <h2 className="mt-7 text-3xl font-black leading-[1.28] text-primary sm:text-4xl lg:text-[40px]">
            이런 분들께
            <br />
            애드그릿을 추천합니다
          </h2>
        </div>
        <div className="grid gap-0 rounded-sm border border-tertiary bg-neutral lg:grid-cols-3">
          {targetCustomers.map((item, index) => (
            <article
              key={item.text}
              className={`flex min-h-[260px] flex-col justify-center px-9 py-8 ${
                index > 0 ? "border-t border-tertiary lg:border-l lg:border-t-0" : ""
              }`}
            >
              <item.icon
                className={`h-14 w-14 ${index === 1 ? "text-secondary" : "text-primary"}`}
                strokeWidth={1.7}
                aria-hidden
              />
              <p className="mt-7 whitespace-pre-line text-lg font-black leading-8 text-primary">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BottomCtaSection() {
  return (
    <section className="overflow-hidden bg-primary text-neutral">
      <div className="mx-auto grid min-h-[230px] w-full max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[0.55fr_0.45fr] lg:items-center">
        <div>
          <SectionNumber>06</SectionNumber>
          <p className="mt-5 text-xl font-black leading-8 text-neutral sm:text-2xl">
            단순한 웹사이트 제작 비용이 아닙니다.
          </p>
          <h2 className="mt-3 text-3xl font-black leading-[1.25] text-secondary sm:text-4xl lg:text-[44px]">
            비즈니스 성장을 위한
            <br />
            가장 확실한 투자입니다.
          </h2>
          <p className="mt-5 text-base font-semibold text-neutral/80 sm:text-lg">
            고객의 마음을 훔치고 매출을 끌어올릴 준비가 되셨나요?
          </p>
        </div>
        <div className="flex lg:justify-end">
          <a
            href="https://open.kakao.com/o/s2RtMSei"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-16 w-full max-w-md items-center justify-center rounded-sm bg-secondary px-8 text-lg font-black text-neutral shadow-xl shadow-secondary/20 transition hover:bg-secondary/90"
          >
            애드그릿에 프로젝트 문의하기
            <ArrowRight className="ml-4 h-6 w-6" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}

function LaptopMockup() {
  return (
    <div className="relative min-h-[360px] lg:min-h-[450px]">
      <div className="absolute inset-x-0 bottom-2 h-28 rounded-t-lg bg-tertiary/15" />
      <div className="absolute left-1/2 top-6 w-[92%] max-w-[640px] -translate-x-1/2 rounded-xl border border-tertiary/30 bg-primary/60 p-3 shadow-2xl shadow-primary">
        <div className="rounded-lg border border-tertiary/20 bg-neutral p-4">
          <div className="rounded-md bg-primary p-7 text-neutral">
            <div className="flex items-center justify-between text-xs font-black text-neutral/70">
              <span>ADGRIT</span>
              <span>About&nbsp;&nbsp;Services&nbsp;&nbsp;Portfolio&nbsp;&nbsp;Contact</span>
            </div>
            <div className="mt-12 max-w-xs">
              <p className="text-2xl font-black leading-8">
                More Than Design,
                <br />
                We Build Growth.
              </p>
              <div className="mt-6 h-2 w-48 rounded-full bg-tertiary/30" />
              <div className="mt-3 h-2 w-36 rounded-full bg-tertiary/20" />
              <div className="mt-8 inline-flex rounded-sm bg-secondary px-4 py-2 text-xs font-black">
                START
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 bg-neutral p-5">
            {["BRANDING", "MARKETING", "PERFORMANCE"].map((item) => (
              <div key={item} className="rounded-sm border border-tertiary p-4">
                <p className="text-xs font-black text-primary">{item}</p>
                <div className="mt-3 h-2 rounded-full bg-tertiary" />
                <div className="mt-2 h-2 w-2/3 rounded-full bg-tertiary" />
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto h-4 w-[92%] rounded-b-xl bg-tertiary/60" />
      </div>
    </div>
  );
}

function CoinsPlaceholder() {
  return (
    <div className="relative mx-auto mt-10 h-56 w-full max-w-sm lg:mt-8" aria-label="동전 이미지 영역">
      <Coins className="absolute left-10 top-16 h-32 w-32 text-secondary/65" strokeWidth={1.4} />
      <div className="absolute bottom-4 left-0 right-0 h-12 rounded-full bg-tertiary/60 blur-sm" />
      {[28, 44, 62, 82, 102].map((height, index) => (
        <div
          key={height}
          className="absolute bottom-10 w-16 rounded-t-md border border-secondary/35 bg-tertiary shadow-sm"
          style={{ height, left: `${30 + index * 42}px` }}
        >
          <div className="h-3 border-b border-secondary/35" />
          <div className="h-3 border-b border-secondary/35" />
          <div className="h-3 border-b border-secondary/35" />
        </div>
      ))}
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="relative min-h-[340px]">
      <div className="absolute left-0 top-16 hidden w-52 rounded-lg border border-tertiary/20 bg-primary/80 p-5 shadow-xl lg:block">
        {["Strategy", "Strength", "Design", "Development"].map((item) => (
          <div key={item} className="mb-4 rounded-sm border border-tertiary/15 p-3">
            <p className="text-xs font-black text-neutral">{item}</p>
            <div className="mt-2 h-1.5 rounded-full bg-tertiary/25" />
          </div>
        ))}
      </div>
      <div className="ml-auto w-full max-w-[520px] rounded-xl border border-tertiary/25 bg-primary/80 p-4 shadow-2xl shadow-primary">
        <div className="rounded-lg border border-tertiary/20 bg-neutral p-5">
          <div className="rounded-md bg-primary p-8 text-neutral">
            <p className="text-sm font-black text-secondary">Strategy</p>
            <h3 className="mt-7 text-3xl font-black leading-9">
              Elevate Your Brand
              <br />
              Beyond Expectations
            </h3>
            <div className="mt-8 grid grid-cols-[90px_1fr] gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-secondary text-xl font-black">
                98
              </div>
              <div className="space-y-3">
                <div className="h-3 rounded-full bg-tertiary/35" />
                <div className="h-3 w-4/5 rounded-full bg-tertiary/25" />
                <div className="h-3 w-2/3 rounded-full bg-tertiary/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 hidden w-36 rounded-xl border border-tertiary/25 bg-primary p-4 text-neutral shadow-xl sm:block">
        <Sparkles className="h-7 w-7 text-secondary" aria-hidden />
        <p className="mt-5 text-sm font-black leading-5">
          Premium
          <br />
          Experience
        </p>
      </div>
    </div>
  );
}

function SectionNumber({ children }: { children: React.ReactNode }) {
  return <p className="text-xl font-black text-secondary">{children}</p>;
}
