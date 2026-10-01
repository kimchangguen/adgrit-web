import { Check, ChevronRight, Clapperboard, ImageIcon, Lightbulb, MousePointer2, Play, UserRound } from "lucide-react";
import styles from "./AccountGrowthSection.module.css";

const principles = [
  { number: "01", tone: "creation", title: "콘텐츠 제작은 내부에서", description: "촬영부터 간단한 콘텐츠 제작까지 사장님이 직접 실행합니다.", note: "외부 대행사 제작 절대 불가", label: "CONTENT", Graphic: ContentGraphic },
  { number: "02", tone: "strategy", title: "가이드 & 전략 지원", description: "콘텐츠 제작 가이드, 기획 방향, 운영 전략을 체계적으로 제공합니다.", note: "실무적인 가이드 제공", label: "STRATEGY", Graphic: StrategyGraphic },
  { number: "03", tone: "growth", title: "배포 · 성장 · 매출 연결", description: "제작된 콘텐츠를 최적화하여 배포, 팔로워 증가와 고객 유입을 통해 실질적인 매출로 연결합니다.", note: "성과 중심의 계정육성", label: "GROWTH", Graphic: GrowthGraphic },
] as const;

function ContentGraphic() {
  return (
    <div className={styles.graphic} aria-hidden="true">
      <div className={styles.graphicGround} />
      <div className={styles.mediaBack}><ImageIcon size={33} strokeWidth={1.3} /></div>
      <div className={styles.film}><div className={styles.filmTop} /><div className={styles.filmScreen}><Play size={36} fill="currentColor" strokeWidth={1} /></div><div className={styles.filmProgress}><i /></div></div>
      <div className={styles.mediaTag}><Clapperboard size={12} /><span>CREATE</span></div>
      <span className={styles.glint} /><span className={styles.smallGlint} />
    </div>
  );
}

function StrategyGraphic() {
  return (
    <div className={styles.graphic} aria-hidden="true">
      <div className={styles.graphicGround} />
      <div className={styles.sheetBack}><i /><i /><i /></div>
      <div className={styles.book}><div className={styles.bookPage}><b>GUIDE</b><i /><i /><i /></div><div className={styles.bookPage}><span /><i /><i /><i /></div></div>
      <div className={styles.idea}><Lightbulb size={32} strokeWidth={1.5} /></div>
      <MousePointer2 className={styles.cursor} size={36} fill="currentColor" strokeWidth={1.2} />
      <svg className={styles.route} viewBox="0 0 230 146"><path d="M35 114 C10 47 155 20 191 65" fill="none" stroke="currentColor" strokeDasharray="3 5" /></svg>
    </div>
  );
}

function GrowthGraphic() {
  return (
    <div className={styles.graphic} aria-hidden="true">
      <div className={styles.graphicGround} />
      <div className={styles.chartGrid} />
      <div className={styles.bars}><i /><i /><i /></div>
      <svg className={styles.chartLine} viewBox="0 0 210 135" fill="none"><defs><linearGradient id="account-growth-line" x1="30" y1="100" x2="177" y2="20" gradientUnits="userSpaceOnUse"><stop stopColor="#ffc96d" /><stop offset="1" stopColor="#ff53b4" /></linearGradient></defs><path d="m38 86 34-30 29 13 56-48" stroke="url(#account-growth-line)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" /><path d="m139 21 24-7-5 25" fill="#ff77b4" stroke="#ffd0c5" strokeWidth="1" /></svg>
      <span className={styles.customer}><UserRound size={22} fill="currentColor" strokeWidth={1.5} /></span>
      <span className={styles.glint} />
    </div>
  );
}

function AccountPreview() {
  return (
    <div className={styles.phone} aria-hidden="true">
      <div className={styles.phoneScreen}>
        <div className={styles.island} />
        <div className={styles.profileName}>adgrit.marketing <Check size={10} /></div>
        <div className={styles.profileOverview}><div className={styles.profileAvatar}>A</div><span>게시물</span><span>팔로워</span><span>팔로잉</span></div>
        <strong className={styles.profileTitle}>ADGRIT Marketing</strong>
        <p className={styles.profileCopy}>콘텐츠에서 고객으로.<br />성장을 디자인합니다.</p>
        <div className={styles.profileStatus}><i /> 계정 성장 플랜</div>
        <div className={styles.highlights}><i /><i /><i /></div>
        <div className={styles.feed}><span /><span /><span /><span /><span /><span /></div>
        <span className={styles.homeIndicator} />
      </div>
    </div>
  );
}

export function AccountGrowthIntro() {
  return (
    <div className={styles.intro}>
      <header id="account-growth" className={styles.hero + " scroll-mt-32 lg:scroll-mt-36"}>
        <span className={styles.badge}>ADGRIT 계정육성 서비스</span>
        <h2 className={styles.headline}>팔로워를 고객으로,<br />계정을 <span>매출로 연결</span>합니다.</h2>
        <p className={styles.subcopy}>콘텐츠 제작은 사장님이, 전략과 성장은 저희가 함께합니다.</p>
        <p className={styles.journey}><span>최적화된 계정으로 <b>성장</b></span><ChevronRight aria-hidden="true" /><span>고객 유입</span><ChevronRight aria-hidden="true" /><span>실질적 매출 연결</span></p>
      </header>
      <AccountPreview />
      <div className={styles.principles}>
        <h3 className={styles.sectionTitle}>계정육성 핵심 원칙</h3>
        <div className={styles.cards}>
          {principles.map(({ number, tone, title, description, note, label, Graphic }) => (
            <article key={number} className={styles.card + " " + styles[tone]}>
              <div className={styles.cardTop}><span className={styles.number}>{number}</span><span className={styles.eyebrow}>{label}</span></div>
              <Graphic />
              <h4>{title}</h4>
              <p>{description}</p>
              <div className={styles.note}><Check size={13} strokeWidth={3} aria-hidden="true" /><span>{note}</span></div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
