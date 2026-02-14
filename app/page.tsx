import Link from "next/link";
import type { ReactNode } from "react";
import { AnimatedCard } from "./_components/AnimatedCard";
import { HeroWithScrollEffect } from "./_components/HeroWithScrollEffect";
import { AnimatedFAQ } from "./_components/AnimatedFAQ";
import {
  AnimatedHero,
  AnimatedHeroItem,
} from "./_components/AnimatedHero";
import { AnimatedSection, FadeInItem } from "./_components/AnimatedSection";
import { Container } from "./_components/Container";
import { Footer } from "./_components/Footer";
import { SiteHeader } from "./_components/SiteHeader";
import {
  SectionKicker,
  SectionLead,
  SectionTitle,
} from "./_components/SectionTitle";
import { SloganWithEffects } from "./_components/SloganWithEffects";
import { VisionCarousel } from "./_components/VisionCarousel";
import { ResultsWithGraph } from "./_components/ResultsWithGraph";

const WP_REST_ENDPOINT =
  "https://wordpress-1580849-6168519.cloudwaysapps.com/wp-json/wp/v2/posts?_embed&per_page=5";

type Post = {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
};

async function getRecentPosts(): Promise<Post[]> {
  const res = await fetch(WP_REST_ENDPOINT, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("글을 불러올 수 없습니다.");
  return res.json();
}

function stripHTML(html: string) {
  return html.replace(/<[^>]+>/g, "");
}

export default async function Home() {
  let posts: Post[] = [];
  let error: string | null = null;

  try {
    posts = await getRecentPosts();
  } catch {
    error = "최근 게시글을 불러올 수 없습니다.";
  }

  return (
    <div className="min-h-screen bg-white text-[#1a1a2e]">
      <SiteChrome posts={posts} error={error} stripHTML={stripHTML} />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow">
      <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1e40af]">
        {value}
      </div>
      <div className="mt-2 text-sm text-slate-600">{label}</div>
    </div>
  );
}

function VisionCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-[#1e40af]/30 transition-all">
      <h3 className="text-lg font-bold text-[#1a1a2e]">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">{desc}</p>
    </div>
  );
}

const WORRY_ICONS: Record<number, ReactNode> = {
  1: (
    <svg className="w-12 h-12 sm:w-14 sm:h-14 text-[#1e40af]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  2: (
    <svg className="w-12 h-12 sm:w-14 sm:h-14 text-[#1e40af]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  3: (
    <svg className="w-12 h-12 sm:w-14 sm:h-14 text-[#1e40af]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  4: (
    <svg className="w-12 h-12 sm:w-14 sm:h-14 text-[#1e40af]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  5: (
    <svg className="w-12 h-12 sm:w-14 sm:h-14 text-[#1e40af]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  6: (
    <svg className="w-12 h-12 sm:w-14 sm:h-14 text-[#1e40af]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
};

function WorryBlock({
  num,
  title,
  subtitle,
  desc,
  iconId,
}: {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  iconId: number;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
      <div className="flex-1 min-w-0">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#1e40af]/20 text-sm font-black tabular-nums text-[#1e40af] font-worry-num-cute shadow-sm">
          {num}
        </span>
        <h3 className="font-worry-title mt-3">{title}</h3>
        <p className="font-worry-tag mt-1">{subtitle}</p>
        <p className="font-worry-desc mt-4">&ldquo;{desc}&rdquo;</p>
      </div>
      <div className="relative flex-shrink-0 w-full sm:w-36 sm:h-36 rounded-xl bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center shadow-sm border border-slate-100">
        {WORRY_ICONS[iconId]}
      </div>
    </div>
  );
}

function ServiceCard({
  eyebrow,
  title,
  desc,
  href = "#",
  imageUrl,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  href?: string;
  imageUrl?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-[#1e40af]/30 transition-all"
    >
      <div
        className="h-40 w-full bg-cover bg-center bg-no-repeat"
        style={
          imageUrl
            ? { backgroundImage: `url('${imageUrl}')` }
            : { background: "linear-gradient(to bottom right, rgb(30 64 175 / 0.1), rgb(30 58 95 / 0.05))" }
        }
      />
      <div className="flex-1 p-6">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1e40af]">
          {eyebrow}
        </div>
        <div className="mt-3 text-xl font-bold text-[#1a1a2e] group-hover:text-[#1e40af] transition-colors">
          {title}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{desc}</p>
        <span className="mt-4 inline-block text-sm font-semibold text-[#1e40af]">
          자세히 보기 →
        </span>
      </div>
    </Link>
  );
}

function ProcessStep({
  step,
  title,
  desc,
}: {
  step: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex-shrink-0 h-20 w-20 rounded-xl bg-[#1e40af] flex items-center justify-center">
        <span className="text-2xl font-black text-white">{step}</span>
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1e40af]">
          {step} 단계
        </div>
        <div className="mt-2 text-lg font-bold text-[#1a1a2e]">{title}</div>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{desc}</p>
      </div>
    </div>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm leading-relaxed text-slate-600">&ldquo;{quote}&rdquo;</p>
      <div className="mt-4">
        <div className="font-semibold text-[#1a1a2e]">{name}</div>
        <div className="text-xs text-slate-500">{role}</div>
      </div>
    </div>
  );
}

function InsightCard({
  id,
  title,
  excerptHtml,
  thumbnail,
  alt,
  type = "Article",
  date,
}: {
  id: number;
  title: string;
  excerptHtml: string;
  thumbnail: string | null;
  alt: string;
  type?: string;
  date?: string;
}) {
  return (
    <Link
      href={`/posts/${id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-[#1e40af]/30 transition-all"
    >
      {thumbnail ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={thumbnail}
          alt={alt}
          className="h-44 w-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="h-44 w-full bg-gradient-to-br from-[#1e40af]/10 to-slate-100" />
      )}
      <div className="flex-1 p-6">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span>{type}</span>
          {date && <span>{date}</span>}
        </div>
        <div className="mt-3 text-sm font-semibold text-[#1a1a2e] group-hover:text-[#1e40af] transition-colors line-clamp-2">
          {title}
        </div>
        <div
          className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: excerptHtml || "" }}
        />
        <span className="mt-3 inline-block text-sm font-semibold text-[#1e40af]">
          자세히 보기 →
        </span>
      </div>
    </Link>
  );
}

function SiteChrome({
  posts,
  error,
  stripHTML,
}: {
  posts: Post[];
  error: string | null;
  stripHTML: (html: string) => string;
}) {
  const heroBg =
    "linear-gradient(160deg, #0f172a 0%, #1e3a8a 20%, #1e40af 45%, #2563eb 70%, #3b82f6 95%)";

  return (
    <>
      {/* 헤더 + 첫번째 섹션: 스크롤 시 헤더 변경, 아래 섹션 위로 올라오는 효과 */}
      <HeroWithScrollEffect backgroundImage={heroBg} darkOverlay>
        <Container className="relative w-full py-12">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedHero>
              <AnimatedHeroItem>
                <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed">
                  성공한 사장님들은 마케팅을 &apos;비용&apos;이라 부르지 않습니다.
                </p>
              </AnimatedHeroItem>
              <AnimatedHeroItem>
                <p className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] drop-shadow-lg">
                  그들은 &apos;연료&apos;라고 부릅니다.
                </p>
              </AnimatedHeroItem>
              <AnimatedHeroItem>
                <p className="mt-8 text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed">
                  실패했던 건 사장님 탓이 아닙니다.
                  <br />
                  &apos;방법&apos;이 틀렸고 파트너를 잘못 만나서 입니다.
                </p>
              </AnimatedHeroItem>
              <AnimatedHeroItem>
                <p className="mt-8 text-lg sm:text-xl lg:text-2xl font-semibold text-white/95">
                  이제는 개발실행사와 직접 제대로된 AI CORE Marketing 하세요
                </p>
              </AnimatedHeroItem>
              <AnimatedHeroItem>
                <p className="mt-4 text-base sm:text-lg text-slate-300 italic">
                  상담버튼 클릭으로 부터 그 역사가 시작 됩니다.
                </p>
              </AnimatedHeroItem>
              <AnimatedHeroItem>
                <a
                  href="tel:1661-0646"
                  className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-[#1e40af] shadow-xl hover:bg-slate-100 transition-colors"
                >
                  상담하기
                </a>
              </AnimatedHeroItem>
            </AnimatedHero>
          </div>
        </Container>
      </HeroWithScrollEffect>

      {/* 사장님 고민 - 두번째 섹션: 왼쪽 스티키, 오른쪽 스크롤 */}
      <section
        className="relative z-10 mt-12 rounded-t-[2.5rem] bg-white pt-20 pb-16 sm:pt-24 sm:pb-20 shadow-[0_-4px_30px_rgba(0,0,0,0.08)]"
      >
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16">
            {/* 왼쪽: 스티키 타이틀 - 스크롤 시 따라감 */}
            <div className="lg:sticky lg:top-24 lg:w-[38%] lg:flex-shrink-0 text-left space-y-8">
              {/* 영문 태그 */}
              <p className="font-worry-tag">The Cost of Inefficiency</p>

              {/* 메인 카피 */}
              <h2 className="font-worry-headline">
                사장님들이 겪는
                <br />
                <span className="text-[#4050ff]">대표적 고민</span>
              </h2>

              {/* 설명글 */}
              <p className="font-worry-desc mt-2">
                매달 광고비는 지출되는데, 실제 순수익은 제자리걸음입니다. 이는 단순한 노출 부족이 아니라,
                고객을 구매로 전환시키지 못하는 &apos;마케팅 누수&apos;가 발생하고 있다는 신호입니다.
              </p>
            </div>

            {/* 오른쪽: 블록들 - 스크롤 시 내려감 */}
            <div className="flex-1 flex flex-col gap-12 sm:gap-16">
              {[
                { num: "01", title: "구조적 성장의 한계", subtitle: "Structural Growth Stagnation", desc: "어느 순간부터 매출이 딱 멈췄습니다. 밤새 고민해봐도 이 벽을 넘을 방법이 보이지 않습니다.", iconId: 1 },
                { num: "02", title: "자생력 없는 마케팅", subtitle: "Lack of Owned Media", desc: "네이버 | 인스타 | 구글 로직이 바뀌면 내 매출도 출렁입니다. 내 사업의 운전대를 남에게 맡긴 불안한 상태.", iconId: 2 },
                { num: "03", title: "위임 실패의 딜레마", subtitle: "The Delegation Dilemma", desc: "큰맘 먹고 직원을 뽑았지만 성과는 없고, 교육시키다 보니 내가 더 바빠지는 아이러니.", iconId: 3 },
                { num: "04", title: "실행 없는 분석의 늪", subtitle: "Analysis Paralysis", desc: "이게 좋다, 저게 좋다 말은 많은데 정작 우리 가게엔 뭐부터 해야 할지 몰라 아무것도 못 하는 상태.", iconId: 4 },
                { num: "05", title: "절대적 시간 빈곤", subtitle: "Operational Time Poverty", desc: "장사 준비하기도 바쁜데 영상 편집에 글쓰기까지? 사장님의 24시간을 갈아 넣어야 돌아가는 구조.", iconId: 5 },
                { num: "06", title: "노동 집약적 마케팅", subtitle: "Labor-Intensive Marketing", desc: "한번 온 손님을 다시 오게 만드는 시스템이 없습니다. 밑 빠진 독처럼 계속 신규 고객만 찾아 헤매는 중.", iconId: 6 },
              ].map((item, i) => (
                <AnimatedCard key={item.num} index={i}>
                  <WorryBlock num={item.num} title={item.title} subtitle={item.subtitle} desc={item.desc} iconId={item.iconId} />
                </AnimatedCard>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 슬로건 - 세번째 섹션 1920 x 1080 */}
      <section className="relative z-10 flex min-h-[1080px] w-full items-center justify-center border-t border-slate-100 bg-white">
        <Container>
          <SloganWithEffects />
        </Container>
      </section>

      {/* Vision - 네번째 섹션 (1920x1080) */}
      <section
        id="about"
        className="relative z-10 flex min-h-[1080px] w-full max-w-[1920px] mx-auto items-center border-t border-slate-100 bg-slate-50 px-6 py-12 sm:px-10"
      >
        <div className="mx-auto w-full max-w-[1920px]">
          <VisionCarousel
            title="낮은 견적 빠르고 정확하고 신뢰할 만한 계획"
            items={[
              { iconKey: "badge", titleEn: "No Hidden Fees", desc: "영업사원 수수료 견적에 없습니다. 많은 양의 배포를 할 수 있는 강력한 이점이 있습니다.", imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80" },
              { iconKey: "document", titleEn: "Massive Distribution", desc: "많은 양의 배포를 할 수 있는 강력한 이점이 있습니다.", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" },
              { iconKey: "sparkles", titleEn: "Quality Content", desc: "예쁜 기만인 쓰레기 콘텐츠는 만들지 않습니다.", imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80" },
              { iconKey: "cpu", titleEn: "Algorithm Expertise", desc: "알고리즘 문제시 최전선에서 빠르게 대처가 가능합니다.", imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80" },
              { iconKey: "chat", titleEn: "Honest & Direct", desc: "안 되는 건 안 된다고 솔직히 말하며 수정 요청에 반영합니다.", imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" },
              { iconKey: "chart", titleEn: "Marketing Success", desc: "마케팅에 적합한 콘텐츠로 성공을 만들어 드려요.", imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" },
            ]}
          />
        </div>
      </section>

      {/* Results - 다섯번째 섹션 */}
      <ResultsWithGraph />

      {/* Services - 여섯번째 섹션 */}
      <section id="services" className="relative z-10 border-t border-slate-100 bg-white py-16 sm:py-20">
        <Container>
          <SectionKicker>Services</SectionKicker>
          <SectionTitle className="mt-3">
            지속 가능한 성과를 위한 맞춤형
            <br />
            마케팅 서비스
          </SectionTitle>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                eyebrow: "Google Ads",
                title: "구글 애즈",
                desc: "AI 스마트 입찰과 정밀 타겟팅으로 광고 효율을 극대화합니다. 성장을 이끄는 광고 전략을 체계적으로 설계합니다.",
                imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
              },
              {
                eyebrow: "SEO & GEO",
                title: "SEO & GEO",
                desc: "키워드 중심을 넘어, AI 검색에서 답변되는 브랜드로 설계합니다. 데이터 기반 인사이트로 의사결정을 지원합니다.",
                imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
              },
              {
                eyebrow: "WordPress",
                title: "워드프레스 & 전환 최적화",
                desc: "전환 중심 UX/UI로 랜딩과 퍼널을 최적화합니다. 수익성과 안정성을 높이는 전문가 중심 솔루션을 제공합니다.",
                imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
              },
            ].map((s, i) => (
              <AnimatedCard key={s.title} index={i}>
                <ServiceCard eyebrow={s.eyebrow} title={s.title} desc={s.desc} imageUrl={s.imageUrl} />
              </AnimatedCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Solutions */}
      <section className="relative z-10 border-t border-slate-100 bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionKicker>Solutions</SectionKicker>
          <SectionTitle className="mt-3">
            탁월한 성과를 위한
            <br />
            당신의 비즈니스 파트너
          </SectionTitle>
          <SectionLead>전체 서비스</SectionLead>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "명확한 실행 계획으로 목표를 실현합니다.",
              "성장 기회를 발굴하고 연결합니다.",
              "효율성을 높이고 비용을 절감합니다.",
              "성과 중심의 조직 역량을 강화합니다.",
              "지속 가능한 성공을 위한 솔루션을 제공합니다.",
            ].map((item, i) => (
              <AnimatedCard key={item} index={i}>
                <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-5 py-4 shadow-sm">
                  <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[#1e40af]" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="relative z-10 border-t border-slate-100 bg-white py-16 sm:py-20">
        <Container>
          <SectionKicker>Services</SectionKicker>
          <SectionTitle className="mt-3">
            단 세 단계로 완성하는
            <br />
            성공적인 컨설팅 프로세스
          </SectionTitle>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { step: "01", title: "Discovery 진단단계", desc: "고객사의 비즈니스 환경과 과제를 깊이 이해하는 것에서 시작됩니다. 맞춤형 상담을 통해 목표, 문제점, 기회 요소를 면밀히 파악합니다." },
              { step: "02", title: "Development 전략단계", desc: "수집된 인사이트를 바탕으로 맞춤형 전략을 수립합니다. 데이터 기반으로 목표에 최적화된 실행 계획을 설계합니다." },
              { step: "03", title: "Implementation 실행단계", desc: "설계된 전략을 현장에 적용하고 지속적으로 모니터링합니다. 빠른 실험과 개선으로 성과를 극대화합니다." },
            ].map((p, i) => (
              <AnimatedCard key={p.step} index={i}>
                <ProcessStep step={p.step} title={p.title} desc={p.desc} />
              </AnimatedCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 border-t border-slate-100 bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionKicker>Testimonials</SectionKicker>
          <SectionTitle className="mt-3">
            고객이 증명한
            <br />
            컨설팅 성과 사례
          </SectionTitle>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { quote: "체계적인 서비스와 명확한 커뮤니케이션 덕분에 기대 이상의 결과를 얻을 수 있었어요.", name: "김다은", role: "콘텐츠 크리에이터" },
              { quote: "전문성과 효율성 모두 갖춘 결과 중심의 접근 방식이 정말 인상 깊었습니다. 최고의 파트너예요.", name: "이서진", role: "마케팅 팀장" },
              { quote: "빠르고 효과적인 가이드 덕분에 정해진 기간 내에 목표를 달성할 수 있었습니다.", name: "정우진", role: "중소기업 대표" },
              { quote: "우리 비즈니스에 꼭 맞는 전략을 새롭게 설계해주셔서 꾸준한 성장을 이어갈 수 있었어요.", name: "박주영", role: "브랜드 기획자" },
              { quote: "컨설팅을 통해 우리 팀에 큰 변화가 생겼습니다. 진심으로 추천드려요.", name: "윤소연", role: "스타트업 창업자" },
              { quote: "믿고 의지할 수 있는 조언과 깊이 있는 지원 덕분에 우리의 목표를 현실로 만들 수 있었습니다.", name: "최민석", role: "PM" },
            ].map((t, i) => (
              <AnimatedCard key={t.name} index={i}>
                <TestimonialCard quote={t.quote} name={t.name} role={t.role} />
              </AnimatedCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Experience */}
      <section className="relative z-10 border-t border-slate-100 bg-white py-16 sm:py-20">
        <Container>
          <SectionKicker>Experience</SectionKicker>
          <SectionTitle className="mt-3">
            성과를 이끄는 컨설팅
            <br />
            솔루션의 정수를 담다
          </SectionTitle>

          <div className="mt-10 flex flex-wrap gap-6">
            {[
              { label: "신뢰도", desc: "검증된 성과로 쌓아온 신뢰" },
              { label: "실행력", desc: "목표를 현실로 만드는 실행" },
              { label: "전문성", desc: "데이터 기반의 전문 인사이트" },
            ].map((e, i) => (
              <AnimatedCard key={e.label} index={i} className="flex-1 min-w-[200px]">
                <div className="rounded-xl border border-slate-200 bg-white px-8 py-6 text-center shadow-sm">
                  <div className="text-xl font-bold text-[#1e40af]">{e.label}</div>
                  <p className="mt-2 text-sm text-slate-600">{e.desc}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#1e40af] px-8 py-3.5 text-sm font-semibold text-white hover:bg-[#1e3a8a] transition-colors shadow-md"
            >
              컨설팅 문의하기
            </a>
          </div>
        </Container>
      </section>

      {/* Blogs */}
      <section id="insights" className="relative z-10 border-t border-slate-100 bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionKicker>Blogs</SectionKicker>
          <SectionTitle className="mt-3">
            비즈니스 인사이트의 모든 것,
            <br />
            애드그릿 블로그
          </SectionTitle>

          <div className="mt-10">
            {error ? (
              <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-red-700">
                {error}
              </div>
            ) : (
              <div className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.slice(0, 3).map((post, i) => {
                  const thumbnail =
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null;
                  const alt =
                    post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ??
                    stripHTML(post.title.rendered);
                  return (
                    <AnimatedCard key={post.id} index={i}>
                      <InsightCard
                        id={post.id}
                        title={stripHTML(post.title.rendered)}
                        excerptHtml={post.excerpt.rendered || ""}
                        thumbnail={thumbnail}
                        alt={alt}
                        type="Article"
                        date="25년 06월 09일"
                      />
                    </AnimatedCard>
                  );
                })}
              </div>
                <div className="text-center">
                  <Link
                    href="/blog"
                    className="inline-flex items-center justify-center rounded-full border-2 border-[#1e40af] px-8 py-3 text-sm font-semibold text-[#1e40af] hover:bg-[#1e40af] hover:text-white transition-colors"
                  >
                    블로그 전체보기 →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10 border-t border-slate-100 bg-white py-16 sm:py-20">
        <Container>
          <SectionKicker>FAQ</SectionKicker>
          <SectionTitle className="mt-3">자주 묻는 질문</SectionTitle>

          <div className="mt-10 grid gap-4">
            <AnimatedFAQ
              q="어떤 기업이 애드그릿의 컨설팅을 받을 수 있나요?"
              a="B2B, B2C, 스타트업, 중소기업 등 다양한 업종의 고객사와 함께하고 있습니다. 마케팅 성과 개선이 필요한 모든 기업을 환영합니다."
            />
            <AnimatedFAQ
              q="컨설팅 프로젝트는 얼마나 걸리나요?"
              a="프로젝트 규모와 목표에 따라 2주~3개월 정도 소요됩니다. 무료 상담에서 구체적인 일정을 안내해 드립니다."
            />
            <AnimatedFAQ
              q="애드그릿는 어떻게 성과를 보장하나요?"
              a="데이터 기반의 전략 수립과 지속적인 모니터링으로 성과를 추적합니다. 단계별 미팅을 통해 진행 상황을 투명하게 공유합니다."
            />
            <AnimatedFAQ
              q="차별점은 무엇인가요?"
              a="광고 운영만이 아니라, SEO/GEO/사이트 전환까지 한 구조로 통합 설계해 성과가 나는 시스템을 만듭니다."
            />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section id="contact" className="relative z-10 border-t border-slate-100 bg-slate-50 py-16 sm:py-20">
        <Container>
          <AnimatedSection>
            <FadeInItem>
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-[#1e40af]/10 to-white p-10 sm:p-12 text-center shadow-sm">
                <SectionTitle>
                  지금, 애드그릿 전문가와 함께
                  <br />
                  컨설팅을 시작해보세요
                </SectionTitle>
                <div className="mt-8">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-[#1e40af] px-10 py-3.5 text-sm font-semibold text-white hover:bg-[#1e3a8a] transition-colors shadow-md"
                  >
                    문의하기
                  </a>
                </div>
              </div>
            </FadeInItem>
          </AnimatedSection>
        </Container>
      </section>

      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}
