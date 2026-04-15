import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};
import { AnimatedCard } from "./_components/AnimatedCard";
import { HeroWithScrollEffect } from "./_components/HeroWithScrollEffect";
import {
  AnimatedHero,
  AnimatedHeroItem,
} from "./_components/AnimatedHero";
import { Container } from "./_components/Container";
import { Footer } from "./_components/Footer";
import { SloganWithEffects } from "./_components/SloganWithEffects";
import { VisionCarousel } from "./_components/VisionCarousel";
import { ResultsWithGraph } from "./_components/ResultsWithGraph";
import { OurClientsSection } from "./_components/OurClientsSection";
import { ClientGrowthSection } from "./_components/ClientGrowthSection";
import { ContactSection } from "./_components/ContactSection";
import { WithoutAdgritSection } from "./_components/WithoutAdgritSection";
import { KakaoTestimonialsSection } from "./_components/KakaoTestimonialsSection";
import { MarketingProductsSection } from "./_components/MarketingProductsSection";
import { Section2CardList } from "./_components/Section2CardList";
import { Section2Wrapper } from "./_components/Section2Wrapper";

export default async function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a2e]">
      <SiteChrome />
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
  buttonText,
}: {
  step: string;
  title: string;
  desc: string;
  buttonText?: string;
}) {
  const stepNum = parseInt(step, 10);
  const iconSrc = `/process-iocons/step-${stepNum}.png`;

  return (
    <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm text-center">
      <span className="text-sm font-bold uppercase tracking-wide text-[#1e40af]">STEP {step}</span>
      <div className="mt-4 mx-auto flex h-14 w-14 items-center justify-center">
        <Image
          src={iconSrc}
          alt=""
          width={56}
          height={56}
          className="h-14 w-14 object-contain"
          aria-hidden
        />
      </div>
      <h3 className="mt-4 text-lg font-bold text-black">{title}</h3>
      <p className="mt-3 flex-1 text-center text-sm leading-relaxed text-slate-700 whitespace-pre-line">{desc}</p>
      {buttonText && (
        <div className="mt-6 rounded-lg py-3 px-4 text-sm font-semibold bg-blue-100 text-[#1e40af]">
          {buttonText}
        </div>
      )}
    </div>
  );
}

function SiteChrome() {
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
                  {/* PC: 한 줄 */}
                  <p className="hidden md:block text-[1.1rem] text-[#374151] leading-relaxed">
                    성공한 사장님들은 마케팅을 &apos;비용&apos;이라 부르지 않습니다.
                  </p>
                  {/* 모바일: 2줄 */}
                  <p className="md:hidden text-[1.1rem] text-[#374151] leading-relaxed">
                    성공한 사장님들은 마케팅을 &apos;비용&apos;이라
                    <br />
                    부르지 않습니다.
                  </p>
                </AnimatedHeroItem>
                <AnimatedHeroItem>
                  {/* PC: 한 줄 */}
                  <p className="hidden md:block mt-6 text-[2.06rem] sm:text-[2.48rem] md:text-[3.3rem] font-bold tracking-tight text-[#111827] leading-[1.25]">
                    그들은 <span className="text-[#FF7F00]">&apos;연료&apos;</span>라고 부릅니다.
                  </p>
                  {/* 모바일: 2줄 */}
                  <p className="md:hidden mt-6 text-[2.06rem] sm:text-[2.48rem] font-bold tracking-tight text-[#111827] leading-[1.25]">
                    그들은 <span className="text-[#FF7F00]">&apos;연료&apos;</span>라고
                    <br />
                    부릅니다.
                  </p>
                </AnimatedHeroItem>
                <AnimatedHeroItem>
                  <p className="mt-6 text-[1.1rem] text-[#374151] leading-relaxed">
                    실패했던 건 사장님 탓이 아닙니다.
                    <br />
                    &apos;방법&apos;이 틀렸고 파트너를 잘못 만나서 입니다.
                  </p>
                </AnimatedHeroItem>
                <AnimatedHeroItem>
                  {/* PC: 한 줄 */}
                  <p className="hidden md:block mt-6 text-[1.1rem] text-[#374151] leading-relaxed">
                    이제는 개발실행사와 직접 제대로된 <span className="font-semibold">AI CORE Marketing</span> 하세요
                  </p>
                  {/* 모바일: 2줄 */}
                  <p className="md:hidden mt-6 text-[1.1rem] text-[#374151] leading-relaxed">
                    이제는 개발실행사와 직접 제대로된
                    <br />
                    <span className="font-semibold">AI CORE Marketing</span> 하세요
                  </p>
                </AnimatedHeroItem>
                <AnimatedHeroItem>
                  <a
                    href="tel:1661-0646"
                    className="mt-11 inline-flex items-center justify-center rounded-full bg-[#1A237E] px-11 py-[1.1rem] text-[1.1rem] font-semibold text-white hover:bg-[#283593] transition-colors"
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
              <div className="relative rounded-2xl overflow-hidden aspect-square min-h-[140px] sm:min-h-[180px] max-h-[200px] sm:max-h-[240px]">
                <Image src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" fill alt="" className="object-cover" sizes="(max-width: 1024px) 50vw, 240px" priority />
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-square min-h-[140px] sm:min-h-[180px] max-h-[200px] sm:max-h-[240px]">
                <Image src="https://images.unsplash.com/photo-1556656793-08538906a9f8" fill alt="" className="object-cover" sizes="(max-width: 1024px) 50vw, 240px" priority />
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-square min-h-[140px] sm:min-h-[180px] max-h-[200px] sm:max-h-[240px]">
                <Image src="https://images.unsplash.com/photo-1557672172-298e090bd0f1" fill alt="" className="object-cover" sizes="(max-width: 1024px) 50vw, 240px" priority />
              </div>
            </div>
          </div>
        </Container>
      </HeroWithScrollEffect>

      {/* 사장님 고민 - 두번째 섹션: 네이비 배경, 좌 텍스트(스크롤 따라오는 애니메이션) / 우 흰색 카드 */}
      <Section2Wrapper
        leftContent={
          <>
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
          </>
        }
        rightContent={
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
        }
      />

      {/* 슬로건 - 세번째 섹션: 흰 배경, 좌 텍스트(검정), 우 노트북 이미지(오른쪽 반 블러) */}
      <section
        id="section3"
        className="relative z-10 flex h-[800px] w-full items-center justify-center overflow-hidden bg-white"
      >
        <SloganWithEffects />
      </section>

      {/* Vision - 네번째 섹션 */}
      <section
        id="about"
        className="relative z-10 flex w-full max-w-[1920px] mx-auto items-center border-t border-slate-100 bg-white px-6 py-8 sm:px-10 sm:py-10"
      >
        <div className="mx-auto w-full max-w-[1920px]">
          <VisionCarousel
            titleLine1="애드그릿과 함께"
            titleLine2="낮은 견적 · 빠르고 정확한 계획"
            title="낮은 견적 · 빠르고 정확한 계획"
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

      {/* OUR CLIENTS - 05 섹션 밑 */}
      <OurClientsSection />

      {/* 애드그릿과 하지 않는다면 - 여섯번째 섹션 */}
      <WithoutAdgritSection />

      {/* 클라이언트 만족후기 (카카오톡) - 일곱번째 섹션 */}
      <KakaoTestimonialsSection />

      {/* 애드그릿의 다양한 마케팅 상품 - 여덟번째 섹션 */}
      <MarketingProductsSection />

      {/* Process - 아홉번째 섹션 (참고 이미지 레이아웃, 내용 유지) */}
      <section className="relative z-10 border-t border-slate-100 bg-white py-16 sm:py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black">
              프로세스
            </h2>
            <p className="mt-3 text-[1.04rem] sm:text-[1.17rem] text-slate-600">
              단 세 단계로 완성하는 성공적인 컨설팅 프로세스
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3 md:items-stretch">
            {[
              {
                step: "01",
                title: "Discovery 진단단계",
                desc: "고객사의 비즈니스 환경과 과제를 이해합니다.\n맞춤 상담을 통해 목표와 문제, 기회를 파악합니다.",
                buttonText: "상담 접수 24시간 내",
              },
              {
                step: "02",
                title: "Development 전략단계",
                desc: "수집된 인사이트를 바탕으로 맞춤형 전략을 수립합니다.\n데이터 기반으로 목표에 최적화된 실행 계획을 설계합니다.",
                buttonText: "상담 후 2주 소요",
              },
              {
                step: "03",
                title: "Implementation 실행단계",
                desc: "설계된 전략을 현장에 적용하고 지속적으로 모니터링합니다.\n빠른 실험과 개선으로 성과를 극대화합니다.",
                buttonText: "지속적으로 모니터링",
              },
            ].map((p, i) => (
              <AnimatedCard key={p.step} index={i}>
                <ProcessStep step={p.step} title={p.title} desc={p.desc} buttonText={p.buttonText} />
              </AnimatedCard>
            ))}
          </div>
        </Container>
      </section>

      {/* 클라이언트 성장 + 무료 상담 CTA - 마지막 섹션 바로 위 */}
      <ClientGrowthSection />

      {/* Contact - 마지막 섹션 */}
      <ContactSection />

      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}
