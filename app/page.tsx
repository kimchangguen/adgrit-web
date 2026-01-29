import Link from "next/link";
import { Container } from "./_components/Container";
import { Footer } from "./_components/Footer";
import { SiteHeader } from "./_components/SiteHeader";
import {
  SectionKicker,
  SectionLead,
  SectionTitle,
} from "./_components/SectionTitle";

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
    next: { revalidate: 60 }, // Cache for 1 minute, optional
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
  } catch (e) {
    error = "최근 게시글을 불러올 수 없습니다.";
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteChrome posts={posts} error={error} stripHTML={stripHTML} />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-3xl font-extrabold tracking-tight text-white">
        {value}
      </div>
      <div className="mt-2 text-sm text-zinc-300">{label}</div>
    </div>
  );
}

function FeatureCard({
  index,
  title,
  subtitle,
  desc,
}: {
  index: string;
  title: string;
  subtitle: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/6 to-white/2 p-6">
      <div className="text-xs font-semibold tracking-[0.25em] text-zinc-400">
        {index}
      </div>
      <div className="mt-3 text-lg font-bold text-white">{title}</div>
      <div className="mt-1 text-sm text-zinc-400">{subtitle}</div>
      <p className="mt-4 text-sm leading-relaxed text-zinc-300">{desc}</p>
    </div>
  );
}

function ServiceCard({
  eyebrow,
  title,
  desc,
  bullets,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/7 transition-colors">
      <div className="text-xs font-semibold tracking-[0.25em] text-zinc-400">
        {eyebrow}
      </div>
      <div className="mt-3 text-xl font-extrabold">{title}</div>
      <p className="mt-3 text-sm leading-relaxed text-zinc-300">{desc}</p>
      <ul className="mt-5 space-y-2 text-sm text-zinc-300">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-indigo-400" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Phase({
  title,
  desc,
  items,
}: {
  title: string;
  desc: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-sm font-semibold tracking-[0.25em] text-zinc-400">
        PHASE
      </div>
      <div className="mt-2 text-xl font-extrabold text-white">{title}</div>
      <p className="mt-3 text-sm leading-relaxed text-zinc-300">{desc}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((it) => (
          <span
            key={it}
            className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-semibold text-zinc-200"
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
      <summary className="cursor-pointer list-none text-base font-semibold text-white flex items-start justify-between gap-6">
        <span>{q}</span>
        <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/10 text-zinc-300 group-open:rotate-45 transition-transform">
          +
        </span>
      </summary>
      <p className="mt-4 text-sm leading-relaxed text-zinc-300">{a}</p>
    </details>
  );
}

function InsightCard({
  id,
  title,
  excerptHtml,
  thumbnail,
  alt,
}: {
  id: number;
  title: string;
  excerptHtml: string;
  thumbnail: string | null;
  alt: string;
}) {
  return (
    <Link
      href={`/posts/${id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/7 transition-colors"
    >
      {thumbnail ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={thumbnail}
          alt={alt}
          className="h-44 w-full object-cover bg-white/5"
          loading="lazy"
        />
      ) : (
        <div className="h-44 w-full bg-gradient-to-br from-white/8 to-white/2" />
      )}
      <div className="flex-1 p-6">
        <div className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
          {title}
        </div>
        <div
          className="mt-3 text-sm leading-relaxed text-zinc-300 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: excerptHtml || "" }}
        />
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
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 opacity-80">
          <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/30 blur-3xl" />
          <div className="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-fuchsia-500/20 blur-3xl" />
        </div>
        <Container className="relative py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-200">
              Data-Driven Growth Partner
              <span className="h-1 w-1 rounded-full bg-zinc-400" />
              Google Ads • SEO &amp; GEO • WordPress
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
              구글 광고 대행사
              <br />
              <span className="text-indigo-300">애드그릿</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-zinc-300">
              Google Ads, SEO &amp; GEO, 워드프레스, 퍼포먼스 마케팅을 하나의 유기적인 성장
              엔진으로 통합 설계합니다.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200 transition-colors"
              >
                무료 상담 시작하기
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
              >
                서비스 둘러보기
              </a>
            </div>

            <div className="mt-12">
              <div className="text-xs font-semibold tracking-[0.25em] text-zinc-400">
                Trusted by
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
                {["Samsung", "LG", "SK", "Hyundai", "Google", "Naver"].map((x) => (
                  <div
                    key={x}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center text-xs font-semibold text-zinc-200"
                  >
                    {x}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Structural Problem */}
      <section id="about" className="border-b border-white/10 bg-black">
        <Container className="py-16 sm:py-20">
          <SectionKicker>THE STRUCTURAL PROBLEM</SectionKicker>
          <SectionTitle className="mt-3">
            구글 광고를 운영해도
            <br />
            성과가 나지 않는 구조적 이유
          </SectionTitle>
          <SectionLead>
            마케팅 예산을 늘려도 효율은 제자리걸음입니다. 단순 운영의 문제가 아니라,
            비즈니스를 지탱하는 ‘구조’의 결함입니다.
          </SectionLead>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              index="01"
              title="비효율적 예산 집행"
              subtitle="ROAS Stagnation"
              desc="예산만 늘리면 매출이 따라올 것 같지만, ‘성과 한계선’을 돌파할 구조가 없으면 밑 빠진 독에 물 붓기입니다."
            />
            <FeatureCard
              index="02"
              title="AI 검색 시대의 고립"
              subtitle="Invisible in AI Search (GEO)"
              desc="검색의 패러다임이 생성형 AI로 이동했습니다. 기존 키워드 SEO만으로는 고객의 질문에 답하기 어렵습니다."
            />
            <FeatureCard
              index="03"
              title="전환이 없는 웹사이트"
              subtitle="Broken Conversion Funnel"
              desc="유입은 있는데 구매가 없습니다. 심미성보다 설득과 전환을 위한 UX/UI 설계가 필요합니다."
            />
            <FeatureCard
              index="04"
              title="데이터 결정 장애"
              subtitle="Data Paralysis"
              desc="데이터는 쌓이지만 ‘다음 행동’을 정하지 못합니다. 인사이트를 행동으로 바꾸는 의사결정 시스템이 필요합니다."
            />
          </div>
        </Container>
      </section>

      {/* Verified Authority */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <Container className="py-16 sm:py-20">
          <SectionKicker>VERIFIED AUTHORITY</SectionKicker>
          <SectionTitle className="mt-3">
            Google Korea 우수 캠페인
            <br />
            TOP 100 (예시)
          </SectionTitle>
          <SectionLead>
            단순한 노출/클릭이 아닌, 실제 비즈니스 성장과 ROI 개선이라는 명확한 성과로
            전문성을 증명합니다.
          </SectionLead>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Stat label="광고주 평균 ROAS" value="500%" />
            <Stat label="누적 광고 집행 금액" value="470억+" />
            <Stat label="월 집행 예산" value="30억" />
          </div>
        </Container>
      </section>

      {/* Services */}
      <section id="services" className="border-b border-white/10 bg-black">
        <Container className="py-16 sm:py-20">
          <SectionKicker>서비스</SectionKicker>
          <SectionTitle className="mt-3">핵심 마케팅 서비스</SectionTitle>
          <SectionLead>
            구글 애즈, SEO &amp; GEO, 워드프레스, 퍼포먼스 마케팅까지 데이터 기반의 통합
            솔루션을 제공합니다.
          </SectionLead>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              eyebrow="GOOGLE ADS"
              title="구글 애즈"
              desc="AI 스마트 입찰과 정밀 타겟팅으로 광고 효율을 극대화합니다."
              bullets={["스마트 입찰 최적화", "정밀 타겟팅", "실시간 모니터링"]}
            />
            <ServiceCard
              eyebrow="SEO & GEO"
              title="SEO & GEO"
              desc="키워드 중심을 넘어, AI 검색에서 ‘답변되는 브랜드’로 설계합니다."
              bullets={["콘텐츠 구조화", "질문 기반 페이지 설계", "기술 SEO 개선"]}
            />
            <ServiceCard
              eyebrow="WORDPRESS"
              title="워드프레스"
              desc="전환 중심 UX/UI로 랜딩과 퍼널을 최적화합니다."
              bullets={["전환 퍼널 설계", "속도/성능 개선", "헤드리스 확장"]}
            />
            <ServiceCard
              eyebrow="PERFORMANCE"
              title="퍼포먼스 마케팅"
              desc="측정 가능한 지표로 성장 실험을 설계하고 반복 개선합니다."
              bullets={["GA4/이벤트 설계", "크리에이티브 테스트", "리포트/인사이트"]}
            />
          </div>
        </Container>
      </section>

      {/* How we work */}
      <section className="border-b border-white/10 bg-zinc-950">
        <Container className="py-16 sm:py-20">
          <SectionKicker>우리의 일하는 방식</SectionKicker>
          <SectionTitle className="mt-3">함께 만드는 성공</SectionTitle>
          <SectionLead>
            직관이 아니라 데이터로 판단하고, 단기 성과가 아니라 지속 가능한 성장 구조를
            만듭니다.
          </SectionLead>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Phase
              title="Data-Driven"
              desc="측정 가능한 지표로 모든 전략을 수립합니다."
              items={[
                "DATA ANALYSIS",
                "METRIC TRACKING",
                "STRATEGIC PLANNING",
                "PERFORMANCE MEASUREMENT",
              ]}
            />
            <Phase
              title="Sustainable"
              desc="장기적 관점의 비즈니스 성장에 초점을 맞춥니다."
              items={[
                "LONG-TERM GROWTH",
                "SCALABLE STRATEGY",
                "BUSINESS EXPANSION",
                "SUSTAINABLE ROI",
              ]}
            />
            <Phase
              title="Transparent"
              desc="실시간 리포트와 명확한 커뮤니케이션을 제공합니다."
              items={[
                "REAL-TIME REPORTING",
                "DEDICATED MANAGER",
                "CLEAR COMMUNICATION",
                "FULL TRANSPARENCY",
              ]}
            />
            <Phase
              title="Optimization"
              desc="빠른 실험과 개선으로 효율을 극대화합니다."
              items={[
                "24/7 MONITORING",
                "QUICK RESPONSE",
                "CONTINUOUS IMPROVEMENT",
                "EFFICIENCY BOOST",
              ]}
            />
          </div>
        </Container>
      </section>

      {/* Expert */}
      <section className="border-b border-white/10 bg-black">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionKicker>EXPERT</SectionKicker>
              <SectionTitle className="mt-3">
                실무 전문가의 직접 관리가
                <br />
                만드는 압도적인 차이
              </SectionTitle>
              <SectionLead>
                “영업 사원에게 귀사의 운명을 맡기지 마세요. 실전 데이터로 무장한 전문가가
                비즈니스의 본질에 집중한 전략을 직접 리딩합니다.”
              </SectionLead>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold text-white">
                  대표 / 구글 광고 전문가
                </div>
                <div className="mt-2 text-2xl font-extrabold">
                  (이름 입력)
                </div>
                <div className="mt-4 text-sm text-zinc-300">
                  경력 15년+ • Google Ads • Growth Strategy
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-8">
              <div className="text-sm font-semibold tracking-[0.25em] text-zinc-400">
                INSIGHTS
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                “마케팅의 본질은 고객의 결핍을 발견하고, 그 결핍을 채우는 구조를 만드는
                것입니다.”
              </p>
              <div className="mt-8 grid gap-3">
                {[
                  "전환 퍼널(랜딩/카피/UX) 진단",
                  "광고 계정 구조화 & 테스트 설계",
                  "리포트 → 액션으로 이어지는 의사결정 체계",
                ].map((x) => (
                  <div
                    key={x}
                    className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-sm text-zinc-200"
                  >
                    {x}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Insights (WP posts) */}
      <section id="insights" className="border-b border-white/10 bg-black">
        <Container className="py-16 sm:py-20">
          <SectionKicker>INSIGHTS</SectionKicker>
          <SectionTitle className="mt-3">성과를 만드는 데이터와 전략 인사이트</SectionTitle>
          <SectionLead>최신 인사이트를 확인하세요.</SectionLead>

          <div className="mt-10">
            {error ? (
              <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6 text-red-200">
                {error}
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => {
                  const thumbnail =
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null;
                  const alt =
                    post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ??
                    stripHTML(post.title.rendered);
                  return (
                    <InsightCard
                      key={post.id}
                      id={post.id}
                      title={stripHTML(post.title.rendered)}
                      excerptHtml={post.excerpt.rendered || ""}
                      thumbnail={thumbnail}
                      alt={alt}
                    />
                  );
                })}
              </div>
            )}
          </div>

          <div className="mt-10">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
            >
              모든 인사이트 보기
            </a>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-b border-white/10 bg-zinc-950">
        <Container className="py-16 sm:py-20">
          <SectionKicker>FAQ</SectionKicker>
          <SectionTitle className="mt-3">자주 묻는 질문</SectionTitle>
          <SectionLead>궁금하신 점을 빠르게 확인하세요.</SectionLead>

          <div className="mt-10 grid gap-4">
            <FAQItem
              q="차별점은 무엇인가요?"
              a="광고 운영만이 아니라, SEO/GEO/사이트 전환까지 한 구조로 통합 설계해 ‘성과가 나는 시스템’을 만듭니다."
            />
            <FAQItem
              q="SEO와 GEO 전략은 어떻게 진행되나요?"
              a="질문 기반 키워드/콘텐츠 구조화, 기술 SEO 점검, AI 검색에서 인용 가능한 페이지 구조로 단계별로 진행합니다."
            />
            <FAQItem
              q="대행 비용과 계약 방식이 궁금합니다."
              a="업종/목표/예산/현 상태에 따라 설계가 달라집니다. 무료 상담에서 목표와 KPI를 정리한 뒤 제안드립니다."
            />
            <FAQItem
              q="효율 개선은 언제부터 체감되나요?"
              a="일반적으로 2~4주 내 테스트/데이터 축적 후 개선이 가속화됩니다. 단, 계정/랜딩/트래킹 상태에 따라 달라질 수 있습니다."
            />
            <FAQItem
              q="성과 분석 리포트는 어떻게 제공되나요?"
              a="핵심 KPI 중심의 요약 + 원인/가설 + 다음 액션까지 포함해 제공합니다. 필요 시 실시간 대시보드도 구성합니다."
            />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-black">
        <Container className="py-16 sm:py-20">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/4 p-10 sm:p-12">
            <SectionKicker>CTA</SectionKicker>
            <SectionTitle className="mt-3">
              이제, 성과가 나는 구조를
              <br />
              설계할 차례입니다.
            </SectionTitle>
            <SectionLead>
              단순한 광고 운영이 아닌, 비즈니스 성장을 위한 그로스 시스템을 경험해보세요.
            </SectionLead>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200 transition-colors"
              >
                무료 상담 시작하기
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
              >
                서비스 다시 보기
              </a>
            </div>

            <div className="mt-10 text-xs font-semibold tracking-[0.25em] text-zinc-400">
              GOOGLE ADS • SEO &amp; GEO • WORDPRESS • PERFORMANCE MARKETING
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
