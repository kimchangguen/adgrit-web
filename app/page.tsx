import Link from "next/link";
import type { ReactNode } from "react";
import { AnimatedCard } from "./_components/AnimatedCard";
import { HeroWithScrollEffect } from "./_components/HeroWithScrollEffect";
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
  SectionTitle,
} from "./_components/SectionTitle";
import { SloganWithEffects } from "./_components/SloganWithEffects";
import { VisionCarousel } from "./_components/VisionCarousel";
import { ResultsWithGraph } from "./_components/ResultsWithGraph";
import { WithoutAdgritSection } from "./_components/WithoutAdgritSection";
import { KakaoTestimonialsSection } from "./_components/KakaoTestimonialsSection";
import { MarketingProductsSection } from "./_components/MarketingProductsSection";
import { Section2CardList } from "./_components/Section2CardList";

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

const ACCENT_ORANGE = "#FFBD4F";

function WorryCard({
  num,
  title,
  subtitle,
  desc,
  showArrow,
}: {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  showArrow?: boolean;
}) {
  return (
    <div className="relative rounded-[24px] bg-white px-6 sm:px-8 py-7 sm:py-10 shadow-sm">
      <span className="text-lg font-bold tabular-nums" style={{ color: ACCENT_ORANGE }}>
        {num}
      </span>
      <h3 className="mt-2 text-xl font-bold text-[#111827]">{title}</h3>
      <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
      <p className="mt-4 text-[15px] leading-relaxed text-[#374151]">
        {desc.split("\n").map((line, i) => (
          <span key={i}>{i > 0 && <br />}{line}</span>
        ))}
      </p>
      {showArrow && (
        <div className="absolute bottom-5 right-5" style={{ color: ACCENT_ORANGE }} aria-hidden>
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
      )}
    </div>
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
  return (
    <>
      {/* 헤더 + 첫번째 섹션: 흰 배경, 좌우 2단(텍스트+CTA / 2x2 그리드) */}
      <HeroWithScrollEffect>
        <Container className="relative w-full py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
            {/* 왼쪽: 카피 + CTA */}
            <div className="text-left font-worry order-2 lg:order-1">
              <AnimatedHero>
                <AnimatedHeroItem>
                  <p className="text-base text-[#374151] leading-relaxed">
                    성공한 사장님들은 마케팅을 &apos;비용&apos;이라 부르지 않습니다.
                  </p>
                </AnimatedHeroItem>
                <AnimatedHeroItem>
                  <p className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111827] leading-[1.25]">
                    그들은 <span className="text-[#FF7F00]">&apos;연료&apos;</span>라고 부릅니다.
                  </p>
                </AnimatedHeroItem>
                <AnimatedHeroItem>
                  <p className="mt-6 text-base text-[#374151] leading-relaxed">
                    실패했던 건 사장님 탓이 아닙니다.
                    <br />
                    &apos;방법&apos;이 틀렸고 파트너를 잘못 만나서 입니다.
                  </p>
                </AnimatedHeroItem>
                <AnimatedHeroItem>
                  <p className="mt-6 text-base text-[#374151] leading-relaxed">
                    이제는 개발실행사와 직접 제대로된 <span className="font-semibold">AI CORE Marketing</span> 하세요
                  </p>
                </AnimatedHeroItem>
                <AnimatedHeroItem>
                  <a
                    href="tel:1661-0646"
                    className="mt-10 inline-flex items-center justify-center rounded-full bg-[#1A237E] px-10 py-4 text-base font-semibold text-white hover:bg-[#283593] transition-colors"
                  >
                    상담하기
                  </a>
                </AnimatedHeroItem>
              </AnimatedHero>
            </div>

            {/* 오른쪽: 2x2 이미지 그리드 */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden bg-[#1e3a5f] flex items-center justify-center min-h-[140px] sm:min-h-[180px] aspect-square max-h-[200px] sm:max-h-[240px]">
                <div className="text-center px-4">
                  <p className="text-white font-bold text-lg sm:text-xl tracking-wider">ADGRIT</p>
                  <p className="text-white/90 text-xs sm:text-sm tracking-widest mt-1">DEVELOPMENT & MARKETING</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square min-h-[140px] sm:min-h-[180px] max-h-[200px] sm:max-h-[240px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square min-h-[140px] sm:min-h-[180px] max-h-[200px] sm:max-h-[240px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&q=80" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square min-h-[140px] sm:min-h-[180px] max-h-[200px] sm:max-h-[240px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600&q=80" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </HeroWithScrollEffect>

      {/* 사장님 고민 - 두번째 섹션: 네이비 배경, 좌 텍스트 / 우 흰색 카드 */}
      <section
        id="section2"
        className="section2 section-two relative z-10 mt-12 bg-[#1e3a5f] py-20 sm:py-24 lg:py-28"
      >
        <div className="wave-top" aria-hidden="true" />
        <div className="mx-auto w-full max-w-[1080px] px-6">
          <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16">
            {/* 왼쪽: 타이틀 + 설명 */}
            <div className="lg:sticky lg:top-24 lg:w-[54%] lg:flex-shrink-0 text-left">
              <p className="text-white text-sm font-normal tracking-wide">The Cost of Inefficiency</p>
              <h2 className="mt-4 text-[2rem] sm:text-[2.375rem] lg:text-[3.125rem] font-bold leading-tight text-white">
                사장님들이 겪는
                <br />
                <span style={{ color: ACCENT_ORANGE }}>대표적 고민</span>
              </h2>
              <p className="mt-6 text-white/95 text-base leading-relaxed">
                매달 광고비는 지출되는데, 실제 순수익은 제자리걸음이다?
                <br />
                이건 노출 부족이 아니라, 고객을 구매로 전환시키지 못하는
                <br />
                &apos;마케팅 누수&apos;가 발생하고 있다는 신호입니다.
              </p>
            </div>

            {/* 오른쪽: 흰색 카드 - 2개만 보이고 나머지는 휠로 스크롤, 점 인디케이터 */}
            <Section2CardList>
              <div className="flex flex-col gap-6 pr-1">
              {[
                { num: "01", title: "구조적 성장의 한계", subtitle: "Structural Growth Stagnation", desc: "어느 순간부터 매출이 딱 멈춰서 밤새 고민해봐도\n이 벽을 넘을 방법이 보이지 않을 때", showArrow: false },
                { num: "02", title: "자생력 없는 마케팅", subtitle: "Lack of Owned Media", desc: "네이버 | 인스타 | 구글 로직이 바뀌면 내 매출도 출렁입니다.\n내 사업의 운전대를 남에게 맡긴 불안한 상태.", showArrow: false },
                { num: "03", title: "위임 실패의 딜레마", subtitle: "The Delegation Dilemma", desc: "큰맘 먹고 직원을 뽑았지만 성과는 없고,\n교육시키다 보니 내가 더 바빠지는 아이러니.", showArrow: false },
                { num: "04", title: "실행 없는 분석의 늪", subtitle: "Analysis Paralysis", desc: "이게 좋다, 저게 좋다 말은 많은데 정작 우리 가게엔\n뭐부터 해야 할지 몰라 아무것도 못 하는 상태.", showArrow: false },
                { num: "05", title: "절대적 시간 빈곤", subtitle: "Operational Time Poverty", desc: "장사 준비하기도 바쁜데 영상 편집에 글쓰기까지?\n사장님의 24시간을 갈아 넣어야 돌아가는 구조.", showArrow: false },
                { num: "06", title: "노동 집약적 마케팅", subtitle: "Labor-Intensive Marketing", desc: "한번 온 손님을 다시 오게 만드는 시스템이 없습니다.\n밑 빠진 독처럼 계속 신규 고객만 찾아 헤매는 중.", showArrow: false },
              ].map((item, i) => (
                <AnimatedCard key={item.num} index={i}>
                  <WorryCard num={item.num} title={item.title} subtitle={item.subtitle} desc={item.desc} showArrow={item.showArrow} />
                </AnimatedCard>
              ))}
              </div>
            </Section2CardList>
          </div>
        </div>
      </section>

      {/* 슬로건 - 세번째 섹션 1920 x 1080 */}
      <section className="relative z-10 flex min-h-[1080px] w-full items-center justify-center border-t border-slate-100 bg-white overflow-hidden">
        <SloganWithEffects />
      </section>

      {/* Vision - 네번째 섹션 */}
      <section
        id="about"
        className="relative z-10 flex w-full max-w-[1920px] mx-auto items-center border-t border-slate-100 bg-slate-50 px-6 py-8 sm:px-10 sm:py-10"
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

      {/* 애드그릿과 하지 않는다면 - 여섯번째 섹션 */}
      <WithoutAdgritSection />

      {/* 클라이언트 만족후기 (카카오톡) - 일곱번째 섹션 */}
      <KakaoTestimonialsSection />

      {/* 애드그릿의 다양한 마케팅 상품 - 여덟번째 섹션 */}
      <MarketingProductsSection />

      {/* Process - 아홉번째 섹션 */}
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

      {/* Blogs - 열번째 섹션 */}
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

      {/* CTA - 열한번째 섹션 */}
      <section
        id="contact"
        className="relative z-10 overflow-hidden border-t border-slate-200 py-20 sm:py-28"
      >
        {/* 배경 이미지: 여러 명이 사무실에서 일하는 모습 */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1920&q=80')`,
          }}
        />
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-slate-900/75" />

        <Container className="relative">
          <AnimatedSection>
            <FadeInItem>
              <div className="flex flex-col items-center gap-12 text-center lg:flex-row lg:justify-center lg:gap-20">
                {/* 좌측: 메인 텍스트 - 흰색으로 눈에 띄게 */}
                <div className="flex-1 max-w-2xl">
                  <p className="text-sm font-bold uppercase tracking-widest text-[#93c5fd]">
                    무료 상담
                  </p>
                  <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl drop-shadow-lg">
                    지금, 애드그릿 전문가와
                    <br />
                    함께 컨설팅을 시작해보세요
                  </h2>
                  <p className="mt-6 text-lg text-slate-200 sm:text-xl">
                    전화 한 통으로 시작하는
                    <br />
                    성장의 첫 걸음
                  </p>
                  <a
                    href="tel:1661-0646"
                    className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#1e40af] shadow-xl transition-all hover:bg-slate-100 hover:scale-105 active:scale-100"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 01.99-.27 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.27 1l-2.2 2.2z" />
                    </svg>
                    전화 상담하기
                  </a>
                </div>

                {/* 우측: 전화번호가 보이는 폰 모형 */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-[3rem] bg-white/10 blur-2xl" />
                    <div className="relative rounded-[2.5rem] border-[14px] border-slate-700 bg-slate-800 p-3 shadow-2xl">
                      <div className="overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-slate-700 to-slate-800">
                        <div className="h-6 w-24 mx-auto rounded-b-2xl bg-slate-800" />
                        <div className="px-6 pb-8 pt-2 text-center">
                          <div className="rounded-xl bg-slate-600/50 px-4 py-3">
                            <p className="text-xs font-medium text-slate-400">애드그릿 상담센터</p>
                            <a
                              href="tel:1661-0646"
                              className="mt-2 block text-2xl font-black tracking-wider text-white transition-opacity hover:text-[#60a5fa]"
                            >
                              1661-0646
                            </a>
                          </div>
                          <a
                            href="tel:1661-0646"
                            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#22c55e] py-3.5 font-bold text-white shadow-lg"
                          >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 01.99-.27 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.27 1l-2.2 2.2z" />
                            </svg>
                            통화하기
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
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
