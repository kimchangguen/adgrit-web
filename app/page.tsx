import type { Metadata } from "next";
import Image from "next/image";

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
import { ShortformReachSection } from "./_components/ShortformReachSection";
import { AccountGrowthSection } from "./_components/AccountGrowthSection";
import { RankingExposureSection } from "./_components/RankingExposureSection";
import { ReelsparkSection } from "./_components/ReelsparkSection";
import { TargetAdsSection } from "./_components/TargetAdsSection";
import { ResultsWithGraph } from "./_components/ResultsWithGraph";
import { OurClientsSection } from "./_components/OurClientsSection";
import { ClientGrowthSection } from "./_components/ClientGrowthSection";
import { ContactSection } from "./_components/ContactSection";
import { WithoutAdgritSection } from "./_components/WithoutAdgritSection";
import { KakaoTestimonialsSection } from "./_components/KakaoTestimonialsSection";
import { Section2CardList } from "./_components/Section2CardList";
import { Section2Wrapper } from "./_components/Section2Wrapper";
import { SectionBackdrop } from "./_components/backgrounds/SectionBackdrop";

export default async function Home() {
  return (
    <main className="relative z-[1] min-h-screen text-white">
      <SiteChrome />
    </main>
  );
}

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
    <div
      className="ig-glass-card relative overflow-hidden rounded-[24px] px-6 sm:px-8 py-7 sm:py-10 backdrop-blur-[20px] backdrop-saturate-[120%]"
      style={{
        backdropFilter: "blur(20px) saturate(120%)",
        WebkitBackdropFilter: "blur(20px) saturate(120%)",
      }}
    >
      <span className="ig-gradient-text text-lg font-bold tabular-nums">
        {num}
      </span>
      <h3 className="mt-2 text-xl font-black text-white">{title}</h3>
      <p className="mt-1 text-sm text-white/60">{subtitle}</p>
      <p className="mt-4 text-[15px] leading-relaxed text-white/80">
        {desc.split("\n").map((line, i) => (
          <span key={i}>{i > 0 && <br />}{line}</span>
        ))}
      </p>
      {showArrow && (
        <div className="absolute bottom-5 right-5 text-[var(--ig-orange)]" aria-hidden>
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
    <div className="ig-glass-card flex h-full flex-col rounded-xl p-6 text-center">
      <span className="ig-gradient-text text-sm font-bold uppercase tracking-wide">STEP {step}</span>
      <div className="mt-4 mx-auto flex h-14 w-14 items-center justify-center">
        <Image
          src={iconSrc}
          alt=""
          width={56}
          height={56}
          className="ig-icon-glow h-14 w-14 object-contain"
          aria-hidden
        />
      </div>
      <h3 className="mt-4 text-lg font-black text-white">{title}</h3>
      <p className="mt-3 flex-1 text-center text-sm leading-relaxed text-white/70 whitespace-pre-line">{desc}</p>
      {buttonText && (
        <div className="ig-btn-glass mt-6 rounded-lg py-3 px-4 text-sm font-semibold text-white">
          {buttonText}
        </div>
      )}
    </div>
  );
}

function SiteChrome() {
  return (
    <>
      {/* 헤더 + 첫번째 섹션: 배경은 .hero 클래스(globals.css)에서 public/image/000.png를 직접 고정 배경으로 사용, 중앙 정렬 카피 */}
      <HeroWithScrollEffect
        darkOverlay
        align="center"
      >
        <Container className="relative w-full py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl text-center font-worry">
            <AnimatedHero>
              <AnimatedHeroItem>
                <p className="text-sm sm:text-base font-semibold tracking-widest text-neutral/90">
                  대한민국 No.1 인스타그램 마케팅 전문기업
                </p>
              </AnimatedHeroItem>
              <AnimatedHeroItem>
                <p className="mt-6 text-[1.9rem] sm:text-[2.6rem] md:text-[3.2rem] font-black tracking-tight text-neutral leading-[1.3]">
                  국내 인스타그램 솔루션을 만드는 회사
                  <br />
                  국내 인스타 솔루션 70%를 점유 한 회사
                </p>
              </AnimatedHeroItem>
              <AnimatedHeroItem>
                <p className="mt-8 text-[1.05rem] sm:text-[1.15rem] text-neutral/85 leading-relaxed">
                  전략부터 개발 실행 분석 운영까지
                  <br />
                  국내 인스타그램 1등 대표 애드그릿에 문의하세요
                </p>
              </AnimatedHeroItem>
              <AnimatedHeroItem>
                <a
                  href="tel:1661-0646"
                  className="mt-11 inline-flex items-center justify-center rounded-full bg-neutral px-11 py-[1.1rem] text-[1.1rem] font-semibold text-primary hover:bg-neutral/90 transition-colors"
                >
                  상담하기
                </a>
              </AnimatedHeroItem>
            </AnimatedHero>
          </div>
        </Container>
      </HeroWithScrollEffect>

      {/* 사장님 고민 - 두번째 섹션: 네이비 배경, 좌 텍스트(스크롤 따라오는 애니메이션) / 우 흰색 카드 */}
      <Section2Wrapper
        leftContent={
          <>
            <p className="text-white/64 text-sm font-normal tracking-wide">The Cost of Inefficiency</p>
            <h2 className="mt-4 text-[2rem] sm:text-[2.375rem] lg:text-[3.125rem] font-black leading-tight text-white">
              사장님들이 겪는
              <br />
              <span className="ig-gradient-text">대표적 고민</span>
            </h2>
            <p className="mt-6 text-white/82 text-base leading-relaxed">
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

      {/* 슬로건 - 세번째 섹션 */}
      <ShortformReachSection />

      <AccountGrowthSection />

      <RankingExposureSection />

      <ReelsparkSection />

      <TargetAdsSection />


      {/* 헤더 메뉴 앵커: 계정육성 */}

      {/* Results - 다섯번째 섹션 */}
      <ResultsWithGraph />

      {/* 헤더 메뉴 앵커: 상위노출 */}

      {/* OUR CLIENTS - 05 섹션 밑 */}
      <OurClientsSection />

      {/* 애드그릿과 하지 않는다면 - 여섯번째 섹션 */}
      <WithoutAdgritSection />

      {/* 헤더 메뉴 앵커: 타겟광고 */}

      {/* 클라이언트 만족후기 (카카오톡) - 일곱번째 섹션 */}
      <KakaoTestimonialsSection />

      {/* 헤더 메뉴 앵커: 기획·컨설팅 */}
      <div id="consulting" aria-hidden />

      {/* Process - 아홉번째 섹션 (참고 이미지 레이아웃, 내용 유지) */}
      <section className="ig-section relative z-10 py-16 sm:py-20">
        <SectionBackdrop variant="s7b" />
        <Container className="ig-content">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              프로세스
            </h2>
            <p className="mt-3 text-[1.04rem] sm:text-[1.17rem] text-white/70">
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
