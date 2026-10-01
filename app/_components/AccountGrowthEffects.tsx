import Image from "next/image";
import { BadgeCheck, BatteryFull, Clapperboard, Crown, Grid3X3, Hash, Heart, Megaphone, Play, Settings, Signal, Sparkles, Users, Wifi } from "lucide-react";
import styles from "./AccountGrowthEffects.module.css";

function Instagram({ size = 24, strokeWidth = 2 }: { size?: number; strokeWidth?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>;
}
function PeopleIcon() {
  return <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
    <circle cx="24" cy="14" r="7" fill="currentColor" />
    <circle cx="10" cy="17" r="5.5" fill="currentColor" opacity=".8" />
    <circle cx="38" cy="17" r="5.5" fill="currentColor" opacity=".8" />
    <path d="M3 35v-3c0-6 4-10 9-10 3 0 5 1 7 3l-4 14-12-2Z" fill="currentColor" opacity=".75" />
    <path d="M45 35v-3c0-6-4-10-9-10-3 0-5 1-7 3l4 14 12-2Z" fill="currentColor" opacity=".75" />
    <path d="M12 40V34c0-8 5-13 12-13s12 5 12 13v6c-8 3-16 3-24 0Z" fill="currentColor" stroke="#ffe9ff" />
  </svg>;
}
function RevenueIcon() {
  return <svg viewBox="0 0 48 48" fill="none" stroke="#ffd3f8" strokeWidth="1.4">
    <defs><linearGradient id="effects-revenue-bars" x1="5" y1="42" x2="38" y2="5" gradientUnits="userSpaceOnUse"><stop stopColor="#a652ff" /><stop offset=".5" stopColor="#ff45ce" /><stop offset="1" stopColor="#ffb1e4" /></linearGradient></defs>
    <rect x="5" y="27" width="9" height="15" rx="1.5" fill="url(#effects-revenue-bars)" />
    <rect x="20" y="17" width="9" height="25" rx="1.5" fill="url(#effects-revenue-bars)" />
    <rect x="35" y="5" width="9" height="37" rx="1.5" fill="url(#effects-revenue-bars)" />
  </svg>;
}
const effects = [
  { title: "팔로워 상승", tone: "followers", Icon: PeopleIcon },
  { title: "조회수 펌핑", tone: "views", Icon: Play },
  { title: "브랜딩 구축", tone: "branding", Icon: Megaphone },
  { title: "최적화 승격", tone: "optimization", Icon: Settings },
  { title: "고객유입 증가", tone: "customers", Icon: PeopleIcon },
  { title: "매출성장", tone: "revenue", Icon: RevenueIcon },
] as const;

const highlights = [
  { label: "성과사례", Icon: Hash },
  { label: "인사이트", Icon: Instagram },
  { label: "릴스파크", Icon: Clapperboard },
  { label: "성장전략", Icon: Crown },
] as const;

function ProfilePhone() {
  return (
    <div className={styles.phoneAnchor} aria-hidden="true">
      <div className={styles.phone}>
        <i className={styles.sideKey} />
        <div className={styles.screen}>
          <div className={styles.status}><span>9:41</span><span><Signal size={12} /><Wifi size={12} /><BatteryFull size={17} /></span></div>
          <div className={styles.island}><i /><b /></div>
          <div className={styles.accountName}>adgrit.marketing <BadgeCheck size={17} fill="#00a5ff" stroke="#071225" /><span>⌄</span></div>
          <div className={styles.profileStats}>
            <div className={styles.avatar}>A<span>ADGRIT</span></div>
            <div><strong>1,234</strong><span>게시물</span></div>
            <div><strong>56.7K</strong><span>팔로워</span></div>
            <div><strong>198</strong><span>팔로잉</span></div>
          </div>
          <div className={styles.bio}>
            <strong>애드그릿 마케팅</strong>
            <p>인스타그램 마케팅 전문 기업</p>
            <p>✨ 숏폼 제작 · 계정육성 · 상위노출<br />🔥 릴스파크 · 타겟광고 · 기획/컨설팅<br />🚀 성장을 디자인합니다.</p>
          </div>
          <div className={styles.profileActions}><span>팔로우</span><span>메시지</span><span>⌄</span></div>
          <div className={styles.highlights}>{highlights.map(({ label, Icon }) => <div key={label}><span><Icon size={23} strokeWidth={1.8} /></span><small>{label}</small></div>)}</div>
          <div className={styles.tabs}><Grid3X3 size={17} /><Clapperboard size={18} /><Users size={18} /></div>
          <div className={styles.feed}>
            {["card-02.webp", "main.webp", "card-04.webp"].map((file, i) => <div key={file} className={styles.thumbnail}>
              <Image src={"/images/shortform/" + file} alt="" fill sizes="110px" />
              <Clapperboard className={styles.reelMark} size={13} />
              <span><Play size={9} fill="currentColor" />{["12.4K", "85.7K", "32.1K"][i]}</span>
            </div>)}
          </div>
          <div className={styles.phoneNav}><Grid3X3 size={15} /><Play size={15} /><Heart size={15} /><span>A</span></div>
          <i className={styles.homeBar} />
        </div>
      </div>
    </div>
  );
}

export function AccountGrowthEffects() {
  return (
    <div className={styles.effects}>
      <header className={styles.header}>
        <h3>계정육성의 <span>효과</span></h3>
        <p>단순한 팔로워 증가를 넘어, 사장님의 <strong>비즈니스에 실질적인 변화</strong>를 만들어냅니다.</p>
      </header>
      <div className={styles.scene}>
        <div className={styles.aura} aria-hidden="true" />
        <div className={styles.rays} aria-hidden="true" />
        <div className={styles.orbit} aria-hidden="true"><i /><i /><i /><i /></div>
        <svg className={styles.growthArrow} viewBox="0 0 380 430" fill="none" aria-hidden="true">
          <defs><linearGradient id="effects-growth-arrow" x1="45" y1="370" x2="330" y2="75" gradientUnits="userSpaceOnUse"><stop stopColor="#ac24ff" /><stop offset=".5" stopColor="#ff228e" /><stop offset=".8" stopColor="#ff60a9" /><stop offset="1" stopColor="#ffeaa5" /></linearGradient></defs>
          <path d="M40 374C147 338 240 242 295 115L269 113L343 50L334 155L313 133C245 286 146 354 40 374Z" fill="url(#effects-growth-arrow)" stroke="#ffb7da" strokeWidth="1.5" />
        </svg>
        <ProfilePhone />
        <div className={styles.instagramObject} aria-hidden="true"><Instagram strokeWidth={1.65} /></div>
        <div className={styles.bubbles} aria-hidden="true">
          <span className={styles.followerBubble}><Users size={23} fill="currentColor" /><b>5K</b></span>
          <span className={styles.heartBubble}><Heart size={31} fill="currentColor" /></span>
          <span className={styles.reelBubble}><Clapperboard size={31} fill="#ffffff25" /></span>
          <span className={styles.sparkBubble}><Sparkles size={27} fill="#ffffff35" /></span>
        </div>
        <ul className={styles.plates}>
          {effects.map(({ title, tone, Icon }) => <li key={tone} className={styles.platePosition + " " + styles[tone]}>
            <div className={styles.plate}>
              <span className={styles.icon}><Icon strokeWidth={1.65} /></span>
              <h4>{title}</h4>
              <i className={styles.underline} aria-hidden="true" />
            </div>
            <span className={styles.plateOrbit} aria-hidden="true"><i /><i /></span>
          </li>)}
        </ul>
        <div className={styles.stars} aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
      </div>
    </div>
  );
}
