import Link from "next/link";
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
  const heroBgImage =
    "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')";

  return (
    <>
      {/* 헤더 + 첫번째 섹션: 스크롤 시 헤더 변경, 아래 섹션 위로 올라오는 효과 */}
      <HeroWithScrollEffect backgroundImage={heroBgImage}>
        <Container className="relative w-full py-12">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedHero>
              <AnimatedHeroItem>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#1e40af]/30 bg-white px-4 py-2 text-xs font-semibold text-[#1e40af] shadow-sm">
                  <span>4.9/5</span>
                  <span className="text-slate-400">|</span>
                  <span>고객 만족도</span>
                </div>
              </AnimatedHeroItem>
              <AnimatedHeroItem>
                <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1a1a2e] leading-[1.2]">
                  신뢰와 전문성으로 이끄는
                  <br />
                  <span className="text-[#1e40af]">기업 성장의 파트너</span>
                </h1>
              </AnimatedHeroItem>
              <AnimatedHeroItem>
                <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600">
                  성과 중심의 마케팅 컨설팅으로 기업의 지속 가능한 성장을 지원합니다.
                  Google Ads, SEO & GEO, 워드프레스, 퍼포먼스 마케팅을 하나의 유기적인 성장
                  엔진으로 통합 설계합니다.
                </p>
              </AnimatedHeroItem>
            </AnimatedHero>
          </div>
        </Container>
      </HeroWithScrollEffect>

      {/* Vision - 곡선으로 위로 올라오는 섹션 */}
      <section
        id="about"
        className="relative z-10 -mt-16 rounded-t-[2.5rem] bg-white pt-20 pb-16 sm:pt-24 sm:pb-20 shadow-[0_-4px_30px_rgba(0,0,0,0.08)]"
      >
        <Container>
          <SectionKicker>Vision</SectionKicker>
          <SectionTitle className="mt-3">
            귀사의 목표 달성을 위한 최고의
            <br />
            마케팅 컨설팅을 제공하겠습니다
          </SectionTitle>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "맞춤형 전략 수립", desc: "귀사의 비즈니스를 분석하여 목표와 상황에 최적화된 마케팅 전략을 정교하게 설계해드립니다." },
              { title: "전문가 인사이트 제공", desc: "데이터 기반 분석을 통해 보다 전문적이고 신뢰할 수 있는 컨설팅을 제공합니다." },
              { title: "현장 밀착형 컨설팅 체계", desc: "솔루션 제공에서 끝나지 않고, 현장 밀착형 컨설팅으로 실질적인 문제 해결에 끝까지 함께합니다." },
              { title: "실행 중심 솔루션", desc: "성과가 검증된 실행 전략으로 지속 가능하고 구체적인 결과를 끝까지 이끌어냅니다." },
            ].map((v, i) => (
              <AnimatedCard key={v.title} index={i}>
                <VisionCard title={v.title} desc={v.desc} />
              </AnimatedCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Results */}
      <section className="relative z-10 border-t border-slate-100 bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionKicker>Results</SectionKicker>
          <SectionTitle className="mt-3">
            수치로 입증된
            <br />
            눈에 보이는 성과
          </SectionTitle>

          <div className="mt-10 grid gap-6 grid-cols-2 md:grid-cols-4">
            {[
              { label: "광고주 평균 ROAS", value: "500%" },
              { label: "고객 유지율", value: "95%" },
              { label: "팀 생산성 향상률", value: "120%" },
              { label: "수익 개선", value: "5X+" },
            ].map((s, i) => (
              <AnimatedCard key={s.label} index={i}>
                <Stat label={s.label} value={s.value} />
              </AnimatedCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
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
