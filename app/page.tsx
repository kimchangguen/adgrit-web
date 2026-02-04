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
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
      <div className="text-4xl font-extrabold tracking-tight text-white">
        {value}
      </div>
      <div className="mt-2 text-sm text-zinc-300">{label}</div>
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
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/6 to-white/2 p-6 hover:border-white/20 transition-colors">
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-zinc-300">{desc}</p>
    </div>
  );
}

function ServiceCard({
  eyebrow,
  title,
  desc,
  href = "#",
}: {
  eyebrow: string;
  title: string;
  desc: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/7 transition-colors"
    >
      <div className="h-40 w-full bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/10" />
      <div className="flex-1 p-6">
        <div className="text-xs font-semibold tracking-[0.25em] text-zinc-400">
          {eyebrow}
        </div>
        <div className="mt-3 text-xl font-extrabold text-white group-hover:text-indigo-300 transition-colors">
          {title}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300">{desc}</p>
        <span className="mt-4 inline-block text-sm font-semibold text-indigo-300">
          자세히 보기
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
    <div className="flex gap-6 rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex-shrink-0 h-24 w-24 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/20 flex items-center justify-center">
        <span className="text-2xl font-black text-white">{step}</span>
      </div>
      <div>
        <div className="text-xs font-semibold tracking-[0.25em] text-zinc-400">
          {step} 단계
        </div>
        <div className="mt-2 text-lg font-extrabold text-white">{title}</div>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300">{desc}</p>
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
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-sm leading-relaxed text-zinc-300">&ldquo;{quote}&rdquo;</p>
      <div className="mt-4">
        <div className="font-semibold text-white">{name}</div>
        <div className="text-xs text-zinc-400">{role}</div>
      </div>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
      <summary className="cursor-pointer list-none text-base font-semibold text-white flex items-start justify-between gap-6">
        <span>{q}</span>
        <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-300 group-open:rotate-45 transition-transform">
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
        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <span>{type}</span>
          {date && <span>{date}</span>}
        </div>
        <div className="mt-3 text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors line-clamp-2">
          {title}
        </div>
        <div
          className="mt-3 text-sm leading-relaxed text-zinc-300 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: excerptHtml || "" }}
        />
        <span className="mt-3 inline-block text-sm font-semibold text-indigo-300">
          자세히 보기
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
              컨설팅 문의
              <span className="h-1 w-1 rounded-full bg-zinc-400" />
              4.9/5 고객 만족도
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
              신뢰와 전문성으로 이끄는
              <br />
              <span className="text-indigo-300">기업 성장의 파트너</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-zinc-300">
              성과 중심의 마케팅 컨설팅으로 기업의 지속 가능한 성장을 지원합니다.
              Google Ads, SEO & GEO, 워드프레스, 퍼포먼스 마케팅을 하나의 유기적인 성장
              엔진으로 통합 설계합니다.
            </p>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200 transition-colors"
              >
                컨설팅 문의
              </a>
            </div>

            <div className="mt-12">
              <div className="text-xs font-semibold tracking-[0.25em] text-zinc-400">
                국내외 다양한 기업들과 함께합니다
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

      {/* Vision */}
      <section id="about" className="border-b border-white/10 bg-black">
        <Container className="py-16 sm:py-20">
          <SectionKicker>Vision</SectionKicker>
          <SectionTitle className="mt-3">
            귀사의 목표 달성을 위한 최고의
            <br />
            마케팅 컨설팅을 제공하겠습니다
          </SectionTitle>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <VisionCard
              title="맞춤형 전략 수립"
              desc="귀사의 비즈니스를 분석하여 목표와 상황에 최적화된 마케팅 전략을 정교하게 설계해드립니다."
            />
            <VisionCard
              title="전문가 인사이트 제공"
              desc="데이터 기반 분석을 통해 보다 전문적이고 신뢰할 수 있는 컨설팅을 제공합니다."
            />
            <VisionCard
              title="현장 밀착형 컨설팅 체계"
              desc="솔루션 제공에서 끝나지 않고, 현장 밀착형 컨설팅으로 실질적인 문제 해결에 끝까지 함께합니다."
            />
            <VisionCard
              title="실행 중심 솔루션"
              desc="성과가 검증된 실행 전략으로 지속 가능하고 구체적인 결과를 끝까지 이끌어냅니다."
            />
          </div>
        </Container>
      </section>

      {/* Results */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <Container className="py-16 sm:py-20">
          <SectionKicker>Results</SectionKicker>
          <SectionTitle className="mt-3">
            수치로 입증된
            <br />
            눈에 보이는 성과
          </SectionTitle>

          <div className="mt-10 grid gap-6 grid-cols-2 md:grid-cols-4">
            <Stat label="광고주 평균 ROAS" value="500%" />
            <Stat label="고객 유지율" value="95%" />
            <Stat label="팀 생산성 향상률" value="120%" />
            <Stat label="수익 개선" value="5X+" />
          </div>
        </Container>
      </section>

      {/* Services */}
      <section id="services" className="border-b border-white/10 bg-black">
        <Container className="py-16 sm:py-20">
          <SectionKicker>Services</SectionKicker>
          <SectionTitle className="mt-3">
            지속 가능한 성과를 위한 맞춤형
            <br />
            마케팅 서비스
          </SectionTitle>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <ServiceCard
              eyebrow="Google Ads"
              title="구글 애즈"
              desc="AI 스마트 입찰과 정밀 타겟팅으로 광고 효율을 극대화합니다. 성장을 이끄는 광고 전략을 체계적으로 설계합니다."
            />
            <ServiceCard
              eyebrow="SEO & GEO"
              title="SEO & GEO"
              desc="키워드 중심을 넘어, AI 검색에서 답변되는 브랜드로 설계합니다. 데이터 기반 인사이트로 의사결정을 지원합니다."
            />
            <ServiceCard
              eyebrow="WordPress"
              title="워드프레스 & 전환 최적화"
              desc="전환 중심 UX/UI로 랜딩과 퍼널을 최적화합니다. 수익성과 안정성을 높이는 전문가 중심 솔루션을 제공합니다."
            />
          </div>
        </Container>
      </section>

      {/* Solutions */}
      <section className="border-b border-white/10 bg-zinc-950">
        <Container className="py-16 sm:py-20">
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
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4"
              >
                <span className="h-2 w-2 flex-shrink-0 rounded-full bg-indigo-400" />
                <span className="text-sm text-zinc-200">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="border-b border-white/10 bg-black">
        <Container className="py-16 sm:py-20">
          <SectionKicker>Services</SectionKicker>
          <SectionTitle className="mt-3">
            단 세 단계로 완성하는
            <br />
            성공적인 컨설팅 프로세스
          </SectionTitle>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <ProcessStep
              step="01"
              title="Discovery 진단단계"
              desc="고객사의 비즈니스 환경과 과제를 깊이 이해하는 것에서 시작됩니다. 맞춤형 상담을 통해 목표, 문제점, 기회 요소를 면밀히 파악합니다."
            />
            <ProcessStep
              step="02"
              title="Development 전략단계"
              desc="수집된 인사이트를 바탕으로 맞춤형 전략을 수립합니다. 데이터 기반으로 목표에 최적화된 실행 계획을 설계합니다."
            />
            <ProcessStep
              step="03"
              title="Implementation 실행단계"
              desc="설계된 전략을 현장에 적용하고 지속적으로 모니터링합니다. 빠른 실험과 개선으로 성과를 극대화합니다."
            />
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="border-b border-white/10 bg-zinc-950">
        <Container className="py-16 sm:py-20">
          <SectionKicker>Testimonials</SectionKicker>
          <SectionTitle className="mt-3">
            고객이 증명한
            <br />
            컨설팅 성과 사례
          </SectionTitle>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="체계적인 서비스와 명확한 커뮤니케이션 덕분에 기대 이상의 결과를 얻을 수 있었어요."
              name="김다은"
              role="콘텐츠 크리에이터"
            />
            <TestimonialCard
              quote="전문성과 효율성 모두 갖춘 결과 중심의 접근 방식이 정말 인상 깊었습니다. 최고의 파트너예요."
              name="이서진"
              role="마케팅 팀장"
            />
            <TestimonialCard
              quote="빠르고 효과적인 가이드 덕분에 정해진 기간 내에 목표를 달성할 수 있었습니다."
              name="정우진"
              role="중소기업 대표"
            />
            <TestimonialCard
              quote="우리 비즈니스에 꼭 맞는 전략을 새롭게 설계해주셔서 꾸준한 성장을 이어갈 수 있었어요."
              name="박주영"
              role="브랜드 기획자"
            />
            <TestimonialCard
              quote="컨설팅을 통해 우리 팀에 큰 변화가 생겼습니다. 진심으로 추천드려요."
              name="윤소연"
              role="스타트업 창업자"
            />
            <TestimonialCard
              quote="믿고 의지할 수 있는 조언과 깊이 있는 지원 덕분에 우리의 목표를 현실로 만들 수 있었습니다."
              name="최민석"
              role="PM"
            />
          </div>
        </Container>
      </section>

      {/* Experience */}
      <section className="border-b border-white/10 bg-black">
        <Container className="py-16 sm:py-20">
          <SectionKicker>Experience</SectionKicker>
          <SectionTitle className="mt-3">
            성과를 이끄는 컨설팅
            <br />
            솔루션의 정수를 담다
          </SectionTitle>

          <div className="mt-10 flex flex-wrap gap-6">
            <div className="flex-1 min-w-[200px] rounded-2xl border border-white/10 bg-white/5 px-8 py-6 text-center">
              <div className="text-2xl font-extrabold text-indigo-300">신뢰도</div>
              <p className="mt-2 text-sm text-zinc-300">
                검증된 성과로 쌓아온 신뢰
              </p>
            </div>
            <div className="flex-1 min-w-[200px] rounded-2xl border border-white/10 bg-white/5 px-8 py-6 text-center">
              <div className="text-2xl font-extrabold text-indigo-300">실행력</div>
              <p className="mt-2 text-sm text-zinc-300">
                목표를 현실로 만드는 실행
              </p>
            </div>
            <div className="flex-1 min-w-[200px] rounded-2xl border border-white/10 bg-white/5 px-8 py-6 text-center">
              <div className="text-2xl font-extrabold text-indigo-300">전문성</div>
              <p className="mt-2 text-sm text-zinc-300">
                데이터 기반의 전문 인사이트
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200 transition-colors"
            >
              컨설팅 문의하기
            </a>
          </div>
        </Container>
      </section>

      {/* Blogs */}
      <section id="insights" className="border-b border-white/10 bg-zinc-950">
        <Container className="py-16 sm:py-20">
          <SectionKicker>Blogs</SectionKicker>
          <SectionTitle className="mt-3">
            비즈니스 인사이트의 모든 것,
            <br />
            애드그릿 블로그
          </SectionTitle>

          <div className="mt-10">
            {error ? (
              <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6 text-red-200">
                {error}
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.slice(0, 3).map((post) => {
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
                      type="Article"
                      date="25년 06월 09일"
                    />
                  );
                })}
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b border-white/10 bg-black">
        <Container className="py-16 sm:py-20">
          <SectionKicker>FAQ</SectionKicker>
          <SectionTitle className="mt-3">자주 묻는 질문</SectionTitle>

          <div className="mt-10 grid gap-4">
            <FAQItem
              q="어떤 기업이 애드그릿의 컨설팅을 받을 수 있나요?"
              a="B2B, B2C, 스타트업, 중소기업 등 다양한 업종의 고객사와 함께하고 있습니다. 마케팅 성과 개선이 필요한 모든 기업을 환영합니다."
            />
            <FAQItem
              q="컨설팅 프로젝트는 얼마나 걸리나요?"
              a="프로젝트 규모와 목표에 따라 2주~3개월 정도 소요됩니다. 무료 상담에서 구체적인 일정을 안내해 드립니다."
            />
            <FAQItem
              q="애드그릿는 어떻게 성과를 보장하나요?"
              a="데이터 기반의 전략 수립과 지속적인 모니터링으로 성과를 추적합니다. 단계별 미팅을 통해 진행 상황을 투명하게 공유합니다."
            />
            <FAQItem
              q="차별점은 무엇인가요?"
              a="광고 운영만이 아니라, SEO/GEO/사이트 전환까지 한 구조로 통합 설계해 성과가 나는 시스템을 만듭니다."
            />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-zinc-950">
        <Container className="py-16 sm:py-20">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/4 p-10 sm:p-12 text-center">
            <SectionTitle>
              지금, 애드그릿 전문가와 함께
              <br />
              컨설팅을 시작해보세요
            </SectionTitle>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black hover:bg-zinc-200 transition-colors"
              >
                문의하기
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
