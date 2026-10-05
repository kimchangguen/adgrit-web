import Image from "next/image";
import {
  ArrowRight, BadgeCheck, BarChart3, Bookmark, Check, ChevronDown,
  Clapperboard, Crown, Handshake, Hash, Heart, ImageIcon,
  ListVideo, MessageCircle, MoreHorizontal, Play, Search, Send,
  Signal, TrendingUp, UserPlus, UserRound, Wifi,
} from "lucide-react";
import styles from "./RankingExposureSection.module.css";

function Instagram() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.3" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>;
}

const EXPOSURE_CARDS = [
  {
    number: "01.", title: "추천탭 노출", suffix: "(콘텐츠 노출)",
    description: "릴스, 이미지, 카드뉴스 등 콘텐츠가 추천탭에 노출되어 더 많은 사용자에게 도달합니다.",
    caption: ["콘텐츠 노출", "도달", "관심", "방문"], tone: "warm",
    items: [{ label: "Reels", Icon: Play }, { label: "Image", Icon: ImageIcon }, { label: "Card News", Icon: ListVideo }],
  },
  {
    number: "02.", title: "계정탭 노출", suffix: "(계정 노출)",
    description: "대표 해시태그, 서비스 등 타겟 검색어에 상위 노출되어 선택받는 계정으로 만들어집니다.",
    caption: ["계정 노출", "방문", "선택", "매출"], tone: "cool",
    items: [{ label: "검색", Icon: Search }, { label: "계정탭", Icon: UserRound }, { label: "선택", Icon: Crown }, { label: "매출", Icon: BarChart3 }],
  },
] as const;

const SERVICES = [
  {
    badge: "01. 신규 계정 최적화 육성",
    title: "0부터 시작하는 파급력 있는 계정 만들기",
    description: "신규 계정도 최적화된 세팅과 체계적인 운영으로 영향력 있는 계정으로 빠르게 성장시킵니다.",
    tags: ["프로필 최적화", "콘텐츠 전략", "초기 세팅", "성장 운영", "성과 분석"],
    Icon: UserPlus, tone: "warm",
  },
  {
    badge: "02. 기존 계정 인수인계 육성",
    title: "이미 육성된 계정으로 빠르게 최적화 운영",
    description: "이미 육성된 계정을 인수인계하여 빠른 시간 안에 최적화된 운영이 가능합니다.",
    tags: ["계정 인수인계", "계정 진단", "최적화 개선", "운영 전략", "성과 극대화"],
    Icon: Handshake, tone: "cool",
  },
] as const;

const FEED_IMAGES = ["card-02.webp", "main.webp", "card-04.webp", "card-01.webp", "card-02.webp", "main.webp"];

function FeedGrid() {
  return <div className={styles.feedGrid}>{FEED_IMAGES.map((file, index) => (
    <div key={`${file}-${index}`}>
      <Image src={`/images/shortform/${file}`} alt="" fill sizes="90px" />
      <Clapperboard size={12} />
      <span><Play size={8} fill="currentColor" />{["12.8만", "8.4만", "21.6만", "6.2만", "9.7만", "15.3만"][index]}</span>
    </div>
  ))}</div>;
}

function PhoneVisual() {
  return (
    <figure className={styles.visual} aria-label="인스타그램 콘텐츠, 노출 상승 화살표와 네온 링으로 구성한 상위노출 서비스 시각화. 화면과 반응 수치는 연출된 예시입니다.">
      <div className={styles.scene} aria-hidden="true">
        <div className={styles.ambient} />
        <div className={styles.energyRing}><i /><i /><i /></div>
        <div className={styles.growthBars}><i /><i /><i /><i /><i /></div>
        <svg className={styles.growthArrow} viewBox="0 0 560 520" fill="none">
          <defs>
            <linearGradient id="ranking-arrow" x1="120" y1="420" x2="498" y2="85" gradientUnits="userSpaceOnUse">
              <stop stopColor="#763bff" /><stop offset=".45" stopColor="#ff2f92" /><stop offset="1" stopColor="#ff985d" />
            </linearGradient>
            <filter id="ranking-arrow-glow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="9" /></filter>
          </defs>
          <path d="M112 394C294 404 415 297 466 159L442 155 507 94 504 183 484 170C436 315 299 431 112 412Z" fill="url(#ranking-arrow)" filter="url(#ranking-arrow-glow)" opacity=".8" />
          <path d="M112 394C294 404 415 297 466 159L442 155 507 94 504 183 484 170C436 315 299 431 112 412Z" fill="url(#ranking-arrow)" stroke="#ffbdde" strokeWidth="1.4" />
        </svg>
        <div className={styles.phonePosition}>
          <div className={styles.phone}>
            <span className={styles.sideButton} />
            <div className={styles.phoneScreen}>
              <div className={styles.status}><span>9:41</span><span><Signal /><Wifi /><i /></span></div>
              <div className={styles.island}><i /></div>
              <div className={styles.instagramHeader}><b>Instagram</b><ChevronDown /><Heart /><Send /></div>
              <div className={styles.stories}>{["card-02.webp", "card-04.webp", "card-01.webp", "main.webp"].map((file, i) => <div key={file}><span><Image src={`/images/shortform/${file}`} width={36} height={36} alt="" /></span><small>{["adgrit", "daily.reels", "local.spot", "for.you"][i]}</small></div>)}</div>
              <div className={styles.postAccount}><span className={styles.avatar}>a.</span><span><b>adgrit.marketing <BadgeCheck /></b><small>회원님을 위한 추천</small></span><MoreHorizontal /></div>
              <div className={styles.reelPhoto}>
                <Image src="/images/shortform/card-02.webp" alt="" fill sizes="250px" />
                <span className={styles.reelBadge}><Clapperboard size={11} /> Reels</span>
                <div className={styles.reelCopy}>발견의 순간,<br /><strong>취향이 되다.</strong></div>
                <div className={styles.reelActions}><Heart fill="currentColor" /><small>10K</small><MessageCircle /><small>128</small><Send /></div>
                <span className={styles.reelSound}>adgrit.marketing · Original audio</span>
              </div>
              <div className={styles.postActions}><Heart /><MessageCircle /><Send /><Bookmark /></div>
              <div className={styles.postCaption}><b>좋아요 10,284개</b><span>adgrit.marketing <em>#오늘의발견 #추천</em></span></div>
              <FeedGrid />
              <div className={styles.phoneNav}><span><Clapperboard />추천</span><span><Search />검색</span><span><UserRound />계정</span></div>
              <div className={styles.homeIndicator} />
            </div>
          </div>
        </div>
        <div className={`${styles.floatObject} ${styles.likeBubble}`}><Heart fill="currentColor" /><b>10K</b></div>
        <div className={`${styles.floatObject} ${styles.hashBubble}`}><Hash /></div>
        <div className={`${styles.floatObject} ${styles.profileBubble}`}><UserRound fill="currentColor" /></div>
        <div className={`${styles.floatObject} ${styles.heartBubble}`}><Heart fill="currentColor" /></div>
        <div className={`${styles.floatObject} ${styles.instagramObject}`}><Instagram /></div>
        <div className={styles.notification}><span><BadgeCheck /></span><div><b>adgrit.marketing</b><small>회원님을 위한 추천</small></div></div>
        <div className={styles.sparkles}><i /><i /><i /><i /><i /><i /></div>
      </div>
    </figure>
  );
}

function ContentPanel({ search = false }: { search?: boolean }) {
  return <div className={`${styles.contentPanel} ${search ? styles.searchPanel : styles.recommendPanel}`} aria-hidden="true">
    <div className={styles.panelTop}><span>9:41</span><span>•••</span></div>
    {search ? <>
      <div className={styles.searchInput}><Search size={13} /><span>마케팅</span></div>
      <div className={styles.searchTabs}><span>인기</span><b>계정</b><span>릴스</span></div>
      <div className={styles.searchResult}><span className={styles.miniInstagram}><Instagram /></span><div><b>adgrit.marketing <BadgeCheck /></b><small>마케팅 전문 기업</small></div></div>
      {[0, 1, 2].map(i => <div key={i} className={styles.placeholderResult}><i /><span><b /><b /></span></div>)}
    </> : <>
      <div className={styles.panelHeading}><b>Instagram</b><Search size={13} /></div>
      <FeedGrid />
      <div className={styles.panelBottom}><Heart /><MessageCircle /><Send /></div>
    </>}
  </div>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <div className={styles.sectionHeading}><span /><h3>{children}</h3><span /></div>;
}

export function RankingExposureSection() {
  return (
    <section className="relative z-10 px-4 py-10 sm:px-6 sm:py-14 lg:py-20" aria-labelledby="ranking-title">
      <div className={`shortform-section-container relative mx-auto w-full max-w-7xl overflow-hidden rounded-[24px] border border-white/[0.08] bg-[rgba(20,20,30,0.45)] px-5 py-12 text-white shadow-[0_24px_80px_rgba(10,8,24,0.28)] sm:px-8 sm:py-16 lg:px-12 lg:py-20 ${styles.campaign}`}
        style={{ backdropFilter: "blur(20px) saturate(120%)", WebkitBackdropFilter: "blur(20px) saturate(120%)" }}>
        <header id="ranking" className={styles.hero}>
          <div className={styles.heroCopy}>
            <div className={styles.eyebrow}><i />ADGRIT <span>상위노출</span> 서비스</div>
            <h2 id="ranking-title">인스타그램 상위노출,<br /><span>최적화 계정</span>만이<br className={styles.titleBreak} /> 노출됩니다.</h2>
            <p>검색부터 추천탭, 계정탭까지 최적 위치에 노출되어<br className={styles.desktopBreak} /> 더 많은 고객이 찾아오고, 매출로 연결됩니다.</p>
          </div>
          <PhoneVisual />
        </header>

        <div className={styles.exposureSection}>
          <SectionHeading>상위노출은 어디에서 이루어질까요?</SectionHeading>
          <div className={styles.cardGrid}>
            {EXPOSURE_CARDS.map(({ number, title, suffix, description, caption, tone, items }) => (
              <article key={title} className={`${styles.exposureCard} ${styles[tone]}`}>
                <div className={styles.cardCopy}><h4><span className={styles.number}>{number}</span><strong>{title}</strong><small>{suffix}</small></h4><p>{description}</p></div>
                <ContentPanel search={tone === "cool"} />
                {tone === "warm" && <div className={styles.contentOrbit} aria-hidden="true"><span><Clapperboard /></span><span><Heart fill="currentColor" /></span></div>}
                <div className={styles.orbRow}>{items.map(({ label, Icon }) => <div className={styles.orbItem} key={label}><span className={styles.orb}><Icon aria-hidden="true" strokeWidth={1.9} /></span><b>{label}</b></div>)}</div>
                <div className={styles.flowBar}><span>{caption.map((step, i) => <span key={step}>{i > 0 && <ArrowRight aria-hidden="true" />}{step}</span>)}</span><i><ArrowRight aria-hidden="true" /></i></div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.servicesSection}>
          <SectionHeading>두 가지 상위노출 서비스</SectionHeading>
          <div className={styles.cardGrid}>{SERVICES.map(({ badge, title, description, tags, Icon, tone }) => (
            <article key={badge} className={`${styles.serviceCard} ${styles[tone]}`}>
              <span className={styles.serviceBadge}>{badge}</span>
              <div className={styles.serviceBody}><span className={styles.serviceOrb}><Icon aria-hidden="true" strokeWidth={1.6} /></span><div><h4>{title}</h4><p>{description}</p></div></div>
              <ul className={styles.tags}>{tags.map(tag => <li key={tag}><Check aria-hidden="true" />{tag}</li>)}</ul>
            </article>
          ))}</div>
        </div>

        <div className={styles.cta}>
          <span className={styles.ctaIcon}><TrendingUp aria-hidden="true" /></span>
          <div><h3>상위노출은 전략이 다르면 결과도 다릅니다.</h3><p>ADGRIT가 함께 분석하는 &apos;계정에서 선택받는 계정&apos;으로 성장하세요.</p></div>
          <a href="#contact">지금 상위노출 상담받기 <ArrowRight aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
