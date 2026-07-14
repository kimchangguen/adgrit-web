import {
  BadgeCheck,
  Check,
  ChevronRight,
  CircleCheck,
  Code2,
  Database,
  Gift,
  Globe2,
  Infinity,
  PhoneCall,
  Puzzle,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiteHeader } from "../../_components/SiteHeader";

type IconCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  tone?: "primary" | "secondary";
};

const problemCards: IconCard[] = [
  {
    icon: Globe2,
    title: "네이버 밖의 거대한 시장,\n구글을 놓치고 계신가요?",
    description:
      "대한민국 검색 시장의 절반 이상을 차지하는\n구글. 하지만 대부분의 사업장이\n여전히 네이버에만 의존하고 있습니다.",
  },
  {
    icon: Code2,
    title: "홈페이지에 블로그를 붙이려니\n치솟는 개발비",
    description:
      "게시물 하나 발행하려고 코딩을 해야 하거나,\n무거운 시스템을 달아야 했던 과거.\n결국 리소스가 필요하다는 뜻입니다.",
  },
  {
    icon: Puzzle,
    title: "티스토리나 기존 워드프레스의\n한계와 복잡성",
    description:
      "제한적인 커스터마이징, 느린 속도,\n불편한 관리 시스템으로 인해\nSEO 최적화에 한계가 있습니다.",
  },
];

const solutionCards: IconCard[] = [
  {
    icon: Zap,
    title: "헤드리스(Headless)\n기술 도입",
    description:
      "프론트엔드와 백엔드를 분리해\n압도적으로 빠르고 가벼운 환경\n구현",
    tone: "secondary",
  },
  {
    icon: Database,
    title: "비용 절감",
    description:
      "기존 무거운 홈페이지 제작\n비용 대비 70%의 비용으로\n완벽한 퍼포먼스 구현",
  },
  {
    icon: Search,
    title: "미래 검색엔진\n선제 대응",
    description:
      "GEO(생성형 AI 검색)와\nAEO(답변 엔진)에 가장\n친화적인 구조로 설계",
  },
  {
    icon: TrendingUp,
    title: "완벽한 SEO 최적화",
    description:
      "구글 알고리즘에 최적화된\n구조로 상위 노출 가능성\n극대화",
    tone: "secondary",
  },
];

const offerSteps: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
  highlighted?: boolean;
}> = [
  {
    icon: Database,
    title: "초기 부팅 제로",
    description: "무거운 설계 없이,\n월 서버 비용(10만원대)으로\n제작 시작",
  },
  {
    icon: Gift,
    title: "6개월 샌드박스\n무상 지원",
    description:
      "구글에 맞춰 개발하며\n첫 6개월 동안 글을 올리고\n방향성이 10개 키워드, 3단계 성장\n무상 지원",
  },
  {
    icon: CircleCheck,
    title: "결과 중심 (후불형 인수)",
    description:
      "6개월 후 실제 구글 검색\n노출 결과를 확인 후\n소유권 인수/약정 만료일\n300~500만원 및\n유지보수 비용 결정",
    highlighted: true,
  },
  {
    icon: ShieldCheck,
    title: "Risk-Free\n환불/중도 보장",
    description:
      "3개월~6개월 사이\n노출 결과가 불만족스럽거나\n사용을 원치 않으시면\n추가금 없이 언제든\n계약 종료/변경 가능",
  },
];

const contactFeatures: Array<{ icon: LucideIcon; title: string; description: string }> = [
  {
    icon: PhoneCall,
    title: "전화 상담",
    description: "전문가가 1:1 맞춤 상담",
  },
  {
    icon: BadgeCheck,
    title: "맞춤형 페이지",
    description: "상황별 최적화 전략 수립",
  },
  {
    icon: ShieldCheck,
    title: "무위험 시작",
    description: "리스크 없이 결과 검증",
  },
];

export default function GoogleExposurePage() {
  return (
    <div className="min-h-screen bg-neutral text-primary">
      <SiteHeader />
      <main className="pt-16">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <StrategySection />
        <OfferSection />
        <ProofSection />
        <ContactSection />
      </main>
      <LandingFooter />
    </div>
  );
}

function HeroSection() {
  return (
    <section id="service" className="border-b border-tertiary bg-neutral">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-16">
        <div>
          <SectionBadge>01 배경 히어로</SectionBadge>
          <p className="mt-5 text-base font-bold text-primary/75">
            구글 검색 노출 헤드리스 웹사이트 서비스
          </p>
          <h1 className="mt-7 break-keep text-4xl font-black leading-[1.18] text-primary sm:text-5xl lg:text-6xl">
            네이버 블로그만으로는
            <br />
            끝났습니다.
            <br />
            이제 결론은{" "}
            <span className="whitespace-nowrap text-secondary">&apos;구글 노출&apos;</span>
            입니다.
          </h1>
          <p className="mt-8 max-w-lg text-lg font-semibold leading-8 text-primary/70">
            실리콘밸리 트렌드 ‘헤드리스’ 웹사이트 구축,
            <br />
            결과 확인 후 마케팅 비용을 지불하는
            <br />
            가장 확실하고 안전한 구글 최적화 솔루션.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:max-w-md">
            <a
              href="https://open.kakao.com/o/s2RtMSei"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-between rounded-md bg-primary px-7 text-base font-black text-neutral shadow-lg shadow-primary/10 transition hover:bg-primary/90"
            >
              구글 노출 프로젝트 대기열 탑승하기
              <ChevronRight className="h-5 w-5" aria-hidden />
            </a>
            <a
              href="https://open.kakao.com/o/s2RtMSei"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-between rounded-md bg-secondary px-7 text-base font-black text-neutral shadow-lg shadow-secondary/20 transition hover:bg-secondary/90"
            >
              무위험 6개월 플랜 상담하기
              <ChevronRight className="h-5 w-5" aria-hidden />
            </a>
          </div>
        </div>
        <GoogleSearchMock />
      </div>
    </section>
  );
}

function GoogleSearchMock() {
  return (
    <div className="rounded-lg border border-tertiary bg-neutral p-6 shadow-2xl shadow-primary/10">
      <div className="flex items-center gap-5">
        <div className="text-3xl font-black text-primary">
          <span>G</span>
          <span className="text-secondary">o</span>
          <span>o</span>
          <span className="text-secondary">g</span>
          <span>l</span>
          <span className="text-secondary">e</span>
        </div>
        <div className="flex h-11 flex-1 items-center justify-between rounded-full border border-tertiary bg-neutral px-5 text-sm font-semibold text-primary/65">
          <span>OO 지역 통증 치료</span>
          <X className="h-4 w-4 text-primary/45" aria-hidden />
        </div>
      </div>
      <div className="mt-7 flex gap-8 border-b border-tertiary text-sm font-semibold text-primary/45">
        {["전체", "이미지", "뉴스", "지도", "동영상", "더보기"].map((item, index) => (
          <span
            key={item}
            className={`pb-3 ${index === 0 ? "border-b-2 border-primary text-primary" : ""}`}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-6 space-y-4">
        <div className="h-4 w-3/4 rounded-full bg-tertiary/70 blur-[1px]" />
        <div className="h-4 w-full rounded-full bg-tertiary/70 blur-[2px]" />
        <div className="h-4 w-11/12 rounded-full bg-tertiary/70 blur-[2px]" />
      </div>
      <div className="mt-7 rounded-lg border border-tertiary bg-neutral p-5 shadow-sm">
        <p className="text-xs font-semibold text-primary/60">https://your-business.com</p>
        <h2 className="mt-2 break-keep text-lg font-black text-primary">
          OO 지역 통증 치료 전문 - 20년 경력의 맞춤 치료
        </h2>
        <p className="mt-3 text-sm font-medium leading-6 text-primary/65">
          개인별 맞춤 치료로 통증의 근본 원인을 해결합니다. 비수술적 치료부터 재활까지
          토탈 케어 시스템을 경험하세요.
        </p>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {["빠른 로딩", "SEO 최적화", "모바일 최적화", "AI 검색 대응"].map((item) => (
          <div
            key={item}
            className="flex h-11 items-center justify-center rounded-md bg-tertiary text-xs font-black text-primary"
          >
            <span className="mr-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProblemSection() {
  return (
    <section className="relative overflow-hidden border-b border-tertiary bg-neutral py-14 sm:py-18">
      <DotPattern />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionBadge>02 문제 제기</SectionBadge>
        <h2 className="mt-6 break-keep text-3xl font-black leading-[1.2] text-primary sm:text-5xl lg:text-[44px]">
          기존 방식의 한계,
          <br />
          답답하지 않으셨나요?
        </h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {problemCards.map((card, index) => (
            <FeatureCard key={card.title} card={card} number={`0${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section
      id="features"
      className="relative overflow-hidden border-b border-tertiary bg-tertiary/45 py-14 sm:py-18"
    >
      <div className="absolute inset-y-0 right-0 w-1/2 bg-neutral/70" aria-hidden />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionBadge>03 해결책</SectionBadge>
        <h2 className="mt-6 break-keep text-3xl font-black leading-[1.2] text-primary sm:text-5xl lg:text-[44px]">
          헤드리스 기반
          <br />
          구글 노출형 웹사이트
        </h2>
        <p className="mt-6 max-w-2xl text-base font-semibold leading-7 text-primary/70">
          25년도부터 실리콘밸리에서 유명한 최신 기술 스택으로
          <br />
          오직 ‘구글 SEO 노출’에만 극대화된 홈페이지형 블로그
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutionCards.map((card) => (
            <SolutionCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StrategySection() {
  return (
    <section id="strategy" className="border-b border-tertiary bg-neutral py-14 sm:py-18">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionBadge>04 타겟 맞춤 활용 전략</SectionBadge>
        <h2 className="mt-6 break-keep text-3xl font-black leading-[1.2] text-primary sm:text-5xl lg:text-[44px]">
          규모에 상관없이
          <br />
          모든 사업장에 필요합니다
        </h2>
        <div className="mt-10 grid gap-7 lg:grid-cols-2">
          <StrategyCard
            eyebrow="소규모 사업장 (생활밀착형 서비스 등)"
            quote="“이 사이트 하나로 끝납니다.”"
            bullets={[
              "별도의 값비싼 홈페이지 없이",
              "메인 홈페이지의 역할과",
              "구글 노출 블로그 역할을",
              "동시에 수행합니다.",
            ]}
            tone="primary"
          />
          <StrategyCard
            eyebrow="대규모 사업장 (병원, 로펌 등)"
            quote={"“메인 홈페이지가 있어도,\n서브 홈페이지가 필요한 이유.”"}
            bullets={[
              "디자인이나 무거운 기능이 담긴",
              "기존 홈페이지는 그대로 두고,",
              "오직 구글 알고리즘 최적화 노출(GEO/AEO)을",
              "타겟팅하기 위한 퍼널형 마케팅 무기로",
              "활용합니다.",
            ]}
            tone="secondary"
          />
        </div>
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section id="pricing" className="border-b border-tertiary bg-tertiary/40 py-14 sm:py-18">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
        <div>
          <SectionBadge>05 핵심 오퍼</SectionBadge>
          <h2 className="mt-6 break-keep text-3xl font-black leading-[1.2] text-primary sm:text-5xl lg:text-[44px]">
            압도적 선순환 구조의
            <br />
            요금제 시스템
          </h2>
          <p className="mt-6 text-base font-semibold leading-7 text-primary/70">
            결과를 본 후 지불하는 무위험 구조로
            <br />
            리스크 없이 시작하세요
          </p>
        </div>
        <div className="rounded-lg border border-tertiary bg-neutral p-5 shadow-xl shadow-primary/10 sm:p-7">
          <div className="grid gap-5 lg:grid-cols-4">
            {offerSteps.map((step, index) => (
              <OfferStep key={step.title} step={step} showArrow={index < offerSteps.length - 1} />
            ))}
          </div>
          <div className="mt-7 flex min-h-12 items-center justify-center rounded-md bg-primary px-5 text-center text-sm font-black text-neutral sm:text-base">
            <Infinity className="mr-2 h-6 w-6" aria-hidden />
            무위험 6개월 샌드박스로 결과를 검증한 후 결정하세요!
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofSection() {
  return (
    <section id="cases" className="border-b border-tertiary bg-neutral py-14 sm:py-18">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.55fr_0.45fr] lg:items-start">
        <div>
          <SectionBadge>06 긴급성 및 사회적 증거</SectionBadge>
          <h2 className="mt-6 break-keep text-3xl font-black leading-[1.2] text-primary sm:text-5xl lg:text-[44px]">
            이미 자금력 있는 병원과 로펌들은
            <br />
            앞다투어 선점하고 있습니다
          </h2>
          <p className="mt-7 max-w-xl text-base font-semibold leading-8 text-primary/70">
            새로운 검색의 흐름(GEO/AEO)을 읽은 똑똑한 플레이어들은
            <br />
            네이버 유입에 대비 구글 유입을 장착하기 위해 이미
            <br />
            서브 홈페이지 구축에 나섰습니다.
            <br />
            현재 프로젝트 투입 대기열이 발생할 정도로
            <br />
            시장 반응이 뜨겁습니다.
            <br />
            더 늦기 전에 미래 마케팅 시스템을 도입하세요.
          </p>
        </div>
        <div className="space-y-6">
          <div className="rounded-lg bg-primary p-7 text-neutral shadow-xl shadow-primary/15">
            <p className="text-center text-sm font-bold text-tertiary">현재 프로젝트 현황</p>
            <div className="mt-7 grid grid-cols-3 divide-x divide-tertiary/25 text-center">
              <Metric value="127+" label="진행 중 프로젝트" />
              <Metric value="89+" label="대기 중 프로젝트" />
              <Metric value="98%" label="고객 만족도" />
            </div>
          </div>
          <div>
            <h3 className="text-base font-black text-primary">실제 검색 결과 사례</h3>
            <SearchCasesMock />
            <p className="mt-3 text-center text-xs font-semibold text-primary/45">
              ※ 실제 고객사 검색 결과 (개인정보 보호를 위해 블러 처리)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-tertiary/45 py-14 sm:py-18">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.5fr_0.5fr] lg:items-center">
        <div>
          <SectionBadge>07 하단 톡톡섹션 및 문의</SectionBadge>
          <h2 className="mt-6 break-keep text-3xl font-black leading-[1.2] text-primary sm:text-5xl lg:text-[44px]">
            구글의 선택을 받는 홈페이지,
            <br />
            리스크 없이 시작할 마지막 기회입니다
          </h2>
          <p className="mt-5 text-base font-semibold text-primary/65">
            지금 바로 상담받고 무위험 6개월 플랜을 신청하세요
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {contactFeatures.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-tertiary bg-neutral text-primary shadow-sm">
                  <item.icon className="h-7 w-7" aria-hidden />
                </div>
                <h3 className="mt-4 text-sm font-black text-primary">{item.title}</h3>
                <p className="mt-2 text-xs font-semibold leading-5 text-primary/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <ConsultationForm />
      </div>
    </section>
  );
}

function ConsultationForm() {
  return (
    <form
      action="mailto:hello@headless-seo.com"
      method="post"
      encType="text/plain"
      className="rounded-lg border border-tertiary bg-neutral p-6 shadow-xl shadow-primary/10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="업체명 *" name="name" placeholder="업체명을 입력해주세요" required />
        <Field label="연락처 *" name="phone" placeholder="010-1234-5678" required />
      </div>
      <div className="mt-5">
        <Field label="홈페이지 URL" name="homepageUrl" placeholder="https://example.com" />
      </div>
      <div className="mt-5">
        <label className="text-sm font-black text-primary" htmlFor="homepageStatus">
          현재 홈페이지 유무
        </label>
        <select
          id="homepageStatus"
          name="homepageStatus"
          className="mt-2 h-12 w-full rounded-md border border-tertiary bg-neutral px-4 text-sm font-semibold text-primary/65 outline-none transition focus:border-primary"
          defaultValue=""
        >
          <option value="" disabled>
            -선택해주세요
          </option>
          <option value="있음">있음</option>
          <option value="없음">없음</option>
          <option value="리뉴얼 필요">리뉴얼 필요</option>
        </select>
      </div>
      <div className="mt-5">
        <label className="text-sm font-black text-primary" htmlFor="message">
          간단한 문의사항
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="문의사항을 간단히 작성해주세요"
          className="mt-2 w-full resize-none rounded-md border border-tertiary bg-neutral px-4 py-3 text-sm font-semibold text-primary outline-none transition placeholder:text-primary/35 focus:border-primary"
        />
      </div>
      <button
        type="submit"
        className="mt-5 inline-flex h-14 w-full items-center justify-center rounded-md bg-primary px-6 text-base font-black text-neutral transition hover:bg-primary/90"
      >
        무료 컨설팅 및 샌드박스 플랜 신청하기
        <ChevronRight className="ml-2 h-5 w-5" aria-hidden />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-black text-primary">
      {label}
      <input
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 h-12 w-full rounded-md border border-tertiary bg-neutral px-4 text-sm font-semibold text-primary outline-none transition placeholder:text-primary/35 focus:border-primary"
      />
    </label>
  );
}

function FeatureCard({
  card,
  number,
}: {
  card: IconCard;
  number: string;
}) {
  return (
    <article className="relative min-h-[230px] rounded-lg border border-tertiary bg-neutral p-7 shadow-sm">
      <span className="text-sm font-black text-primary/60">{number}</span>
      <h3 className="mt-5 whitespace-pre-line break-keep text-xl font-black leading-8 text-primary">
        {card.title}
      </h3>
      <p className="mt-5 whitespace-pre-line text-sm font-semibold leading-6 text-primary/55">
        {card.description}
      </p>
      <card.icon
        className="absolute bottom-7 right-7 h-14 w-14 text-primary/45"
        strokeWidth={1.8}
        aria-hidden
      />
    </article>
  );
}

function SolutionCard({ card }: { card: IconCard }) {
  return (
    <article className="min-h-[245px] rounded-lg border border-tertiary bg-neutral p-7 shadow-sm">
      <card.icon
        className={`h-11 w-11 ${card.tone === "secondary" ? "text-secondary" : "text-primary"}`}
        strokeWidth={2}
        aria-hidden
      />
      <h3 className="mt-7 whitespace-pre-line break-keep text-lg font-black leading-7 text-primary">
        {card.title}
      </h3>
      <p className="mt-5 whitespace-pre-line text-sm font-semibold leading-6 text-primary/65">
        {card.description}
      </p>
    </article>
  );
}

function StrategyCard({
  eyebrow,
  quote,
  bullets,
  tone,
}: {
  eyebrow: string;
  quote: string;
  bullets: string[];
  tone: "primary" | "secondary";
}) {
  return (
    <article
      className={`grid min-h-[260px] overflow-hidden rounded-lg border bg-neutral shadow-sm sm:grid-cols-[0.58fr_0.42fr] ${
        tone === "secondary" ? "border-secondary/60" : "border-primary/25"
      }`}
    >
      <div className="p-7">
        <div className="flex items-center gap-2 text-sm font-black text-primary/70">
          <Target className={`h-5 w-5 ${tone === "secondary" ? "text-secondary" : "text-primary"}`} />
          {eyebrow}
        </div>
        <h3 className="mt-5 whitespace-pre-line break-keep text-2xl font-black leading-9 text-primary">
          {quote}
        </h3>
        <ul className="mt-6 space-y-2 text-sm font-semibold leading-6 text-primary/65">
          {bullets.map((item) => (
            <li key={item} className="flex gap-2">
              <Check className={`mt-1 h-4 w-4 shrink-0 ${tone === "secondary" ? "text-secondary" : "text-primary"}`} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <BrowserPlaceholder tone={tone} />
    </article>
  );
}

function BrowserPlaceholder({ tone }: { tone: "primary" | "secondary" }) {
  return (
    <div className={`flex items-end ${tone === "secondary" ? "bg-tertiary" : "bg-tertiary/55"}`}>
      <div className="ml-auto w-full max-w-[250px] rounded-tl-lg border-l border-t border-tertiary bg-neutral p-3 shadow-lg">
        <div className="flex h-5 items-center gap-1.5 border-b border-tertiary">
          <span className="h-2 w-2 rounded-full bg-primary/30" />
          <span className="h-2 w-2 rounded-full bg-secondary/70" />
          <span className="h-2 w-2 rounded-full bg-primary/20" />
        </div>
        <div className="mt-4 space-y-3">
          <div className="h-8 rounded-md bg-tertiary/80" />
          <div className="h-8 rounded-md bg-tertiary/60" />
          <div className="grid grid-cols-2 gap-3">
            <div className="h-20 rounded-md bg-primary/10" />
            <div className="h-20 rounded-md bg-tertiary" />
          </div>
        </div>
      </div>
    </div>
  );
}

function OfferStep({
  step,
  showArrow,
}: {
  step: {
    icon: LucideIcon;
    title: string;
    description: string;
    highlighted?: boolean;
  };
  showArrow: boolean;
}) {
  return (
    <div className="relative flex flex-col items-center text-center">
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-md border ${
          step.highlighted
            ? "border-secondary bg-secondary text-neutral"
            : "border-tertiary bg-neutral text-primary/65"
        }`}
      >
        <step.icon className="h-9 w-9" aria-hidden />
      </div>
      {showArrow && (
        <ChevronRight
          className="absolute -right-4 top-5 hidden h-7 w-7 text-primary/25 lg:block"
          aria-hidden
        />
      )}
      <h3
        className={`mt-4 whitespace-pre-line break-keep text-sm font-black leading-6 ${
          step.highlighted ? "text-secondary" : "text-primary"
        }`}
      >
        {step.title}
      </h3>
      <p className="mt-3 whitespace-pre-line text-xs font-semibold leading-5 text-primary/60">
        {step.description}
      </p>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-4">
      <div className="text-4xl font-black leading-none text-neutral">{value}</div>
      <div className="mt-4 text-xs font-bold text-tertiary">{label}</div>
    </div>
  );
}

function SearchCasesMock() {
  return (
    <div className="mt-4 rounded-lg border border-tertiary bg-neutral p-5 shadow-sm">
      <div className="grid gap-5 sm:grid-cols-2">
        {[0, 1].map((column) => (
          <div key={column} className="space-y-4">
            {[0, 1, 2].map((row) => (
              <div key={row} className="space-y-2">
                <div className="h-3 w-2/3 rounded-full bg-secondary/40 blur-[1px]" />
                <div className="h-3 w-full rounded-full bg-tertiary blur-[1px]" />
                <div className="h-3 w-4/5 rounded-full bg-tertiary/80 blur-[1px]" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-primary/15 bg-tertiary px-3 py-1.5 text-sm font-black text-primary">
      {children}
    </span>
  );
}

function DotPattern() {
  return (
    <div
      className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-70"
      style={{
        backgroundImage:
          "radial-gradient(var(--adgrit-primary) 1px, transparent 1px)",
        backgroundSize: "13px 13px",
        maskImage: "linear-gradient(to left, black, transparent)",
      }}
      aria-hidden
    />
  );
}

function LandingFooter() {
  return (
    <footer className="border-t border-tertiary bg-neutral">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-6 text-sm font-semibold text-primary/60 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-xs font-black text-neutral">
            H
          </span>
          <div>
            <p className="font-black text-primary">HEADLESS SEO</p>
            <p className="mt-1">구글 웹 노출 헤드리스 웹사이트 서비스</p>
          </div>
        </div>
        <p>© 2024 Headless SEO. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
          <span>이메일: hello@headless-seo.com</span>
          <span>전화: <a href="tel:070-1234-5678" className="transition-colors hover:text-white">070-1234-5678</a></span>
          <span className="flex gap-2">
            <span className="h-7 w-7 rounded-full bg-primary" />
            <span className="h-7 w-7 rounded-full bg-primary" />
            <span className="h-7 w-7 rounded-full bg-primary" />
          </span>
        </div>
      </div>
    </footer>
  );
}
