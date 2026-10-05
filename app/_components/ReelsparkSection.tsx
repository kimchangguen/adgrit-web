"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { Clapperboard, Rocket } from "lucide-react";
import styles from "./ReelsparkSection.module.css";

const STEPS = [
  { title: "숏폼 콘텐츠 제작", description: ["최신 트렌드에 맞는 영상 숏폼을", "기획제작하여 오래볼 계정에", "업로드합니다."], tone: "pink", icon: "clapper" },
  { title: "니즈 & 알고리즘 최적화", description: ["타겟 니즈와 알고리즘을 분석해", "최적의 시점과 전략으로", "콘텐츠를 송출합니다."], tone: "blue", icon: "target" },
  { title: "폭발적인 콘텐츠 도달", description: ["릴스파크 전용 육성 전략으로", "더 많은 사용자에게", "콘텐츠가 확산됩니다."], tone: "orange", icon: "play" },
  { title: "확실한 결과", description: ["팔로워 상승과 함께", "수반적인 조회수의 폭발적 증가로", "매출 유입을 극대화합니다."], tone: "purple", icon: "bars" },
] as const;

type IconKind = (typeof STEPS)[number]["icon"];

/** Solid faces, extruded sides, edge reflections and an orbital light platform. */
function ProcessIcon({ kind }: { kind: IconKind }) {
  const id = `reelspark-${kind}`;
  const blue = kind === "target" || kind === "bars";
  return <div className={styles.iconStage} aria-hidden="true">
    <span className={styles.iconAura} />
    <div className={styles.iconObject}>
      <svg viewBox="0 0 240 174" fill="none">
        <defs>
          <linearGradient id={`${id}-face`} x1="60" y1="35" x2="176" y2="132" gradientUnits="userSpaceOnUse">
            <stop stopColor={kind === "play" ? "#ffe1a2" : blue ? "#beb5ff" : "#ffb4ef"} />
            <stop offset=".3" stopColor={blue ? "#7460ff" : "#ff49be"} />
            <stop offset=".72" stopColor={blue ? "#8133ff" : "#fa1297"} />
            <stop offset="1" stopColor={blue ? "#ec40ff" : "#a617e5"} />
          </linearGradient>
          <linearGradient id={`${id}-rim`} x1="68" y1="30" x2="175" y2="139" gradientUnits="userSpaceOnUse"><stop stopColor="#fff2fd" /><stop offset=".45" stopColor="#fa8dff" /><stop offset="1" stopColor={blue ? "#5736ff" : "#ff409d"} /></linearGradient>
          <linearGradient id={`${id}-orbit`} x1="21" y1="119" x2="224" y2="124" gradientUnits="userSpaceOnUse"><stop stopColor={blue ? "#2c6bff" : "#ff9d4d"} /><stop offset=".36" stopColor={blue ? "#734aff" : "#ff2f92"} /><stop offset="1" stopColor="#e935ff" /></linearGradient>
          <linearGradient id={`${id}-white`} x2="1" y2="1"><stop stopColor="#ffffff" /><stop offset="1" stopColor="#ffa2ec" /></linearGradient>
          <linearGradient id={`${id}-bar`} x2="1" y2="0"><stop stopColor="#473cff" /><stop offset=".5" stopColor="#a243ff" /><stop offset="1" stopColor="#f45bff" /></linearGradient>
          <radialGradient id={`${id}-warm`} cx=".08" cy=".9" r="1.08"><stop stopColor="#ffe2a0" /><stop offset=".27" stopColor="#ff9b70" /><stop offset=".59" stopColor="#ff359f" /><stop offset="1" stopColor="#e014b2" /></radialGradient>
          <filter id={`${id}-glow`} x="-60%" y="-90%" width="220%" height="280%"><feGaussianBlur stdDeviation="4" /></filter>
          <filter id={`${id}-shadow`} x="-40%" y="-40%" width="200%" height="200%"><feDropShadow dx="3" dy="9" stdDeviation="5" floodColor="#02000c" floodOpacity=".65" /></filter>
        </defs>
        <g className={styles.iconOrbit} transform="rotate(-10 120 130)" stroke={`url(#${id}-orbit)`}>
          <ellipse cx="120" cy="130" rx="95" ry="23" strokeWidth="8" opacity=".75" filter={`url(#${id}-glow)`} />
          <ellipse cx="120" cy="130" rx="98" ry="24" strokeWidth="2" />
          <ellipse cx="120" cy="130" rx="88" ry="20" strokeWidth="1.2" />
          <ellipse cx="120" cy="130" rx="106" ry="30" strokeWidth=".8" opacity=".6" />
          <ellipse cx="120" cy="130" rx="75" ry="16" strokeWidth=".8" opacity=".5" />
        </g>
        {kind === "clapper" && <g transform="rotate(-12 120 88)" filter={`url(#${id}-shadow)`}>
          <rect x="77" y="65" width="99" height="75" rx="12" fill="#901185" stroke="#e650d9" />
          <rect x="69" y="58" width="100" height="77" rx="12" fill={`url(#${id}-face)`} stroke={`url(#${id}-rim)`} strokeWidth="2" />
          <path d="M72 88H167" stroke="#ffbcf5" strokeWidth="1.4" />
          <path d="M76 63h87v19H76Z" fill="#741278" />
          <path d="m83 63-8 19h12l9-19m14 0-9 19h12l9-19m14 0-9 19h12l9-19m14 0-9 19h10" fill="#ffc9ee" />
          <g transform="rotate(-12 73 62)"><rect x="72" y="40" width="100" height="22" rx="5" fill="#d21b99" stroke="#ffa9ed" strokeWidth="1.7" /><path d="m83 41-8 19h13l9-19m14 0-9 19h13l9-19m14 0-9 19h13l9-19m14 0-9 19h9" fill={`url(#${id}-white)`} /></g>
          <circle cx="77" cy="70" r="3" fill="#fff0ff" />
          <path d="m111 94 23 13-23 14Z" fill="#bd0e92" transform="translate(2 3)" />
          <path d="m111 92 23 13-23 14Z" fill={`url(#${id}-white)`} stroke="#fff1fd" strokeWidth="2" strokeLinejoin="round" />
          <path d="M75 96v26q0 7 8 7h68" stroke="#ffd2fb" strokeWidth="1.5" opacity=".85" />
          <path d="M75 88h87v10q-42-12-87 9Z" fill="#fff0ff" opacity=".15" />
        </g>}
        {kind === "target" && <g filter={`url(#${id}-shadow)`}>
          <ellipse cx="126" cy="85" rx="47" ry="48" stroke="#5c159c" strokeWidth="10" />
          <circle cx="118" cy="80" r="47" fill="#27105688" stroke={`url(#${id}-face)`} strokeWidth="9" />
          <circle cx="118" cy="80" r="47" stroke={`url(#${id}-rim)`} strokeWidth="1.4" />
          <circle cx="118" cy="80" r="32" fill="#2a115799" stroke={`url(#${id}-face)`} strokeWidth="6" />
          <path d="M118 27v22m0 63v22M65 80h22m64 0h22" stroke={`url(#${id}-rim)`} strokeWidth="6" strokeLinecap="round" />
          <circle cx="118" cy="70" r="9" fill={`url(#${id}-white)`} />
          <path d="M103 96c0-20 30-20 30 0Z" fill={`url(#${id}-white)`} />
          <path d="M78 68a42 42 0 0 1 30-29" stroke="#e6deff" strokeWidth="3" strokeLinecap="round" />
          <path d="M134 43a42 42 0 0 1 25 36" stroke="#ffbaff" strokeWidth="2" strokeLinecap="round" opacity=".65" />
          <circle cx="118" cy="80" r="58" stroke="#6a39ff" strokeWidth=".7" opacity=".5" />
        </g>}
        {kind === "play" && <g transform="rotate(-10 121 85)" filter={`url(#${id}-shadow)`}>
          <rect x="79" y="42" width="99" height="99" rx="29" fill="#a22285" stroke="#ff688d" strokeWidth="2" />
          <rect x="69" y="34" width="101" height="101" rx="29" fill={`url(#${id}-warm)`} stroke="#ffb6da" strokeWidth="2" />
          <path d="M75 63q0-23 27-23h37q24 0 24 21v9q-45-16-88 12Z" fill="#fff2fa" opacity=".13" />
          <path d="M77 100v6q0 22 24 22h33" stroke="#ffdda8" strokeWidth="4" strokeLinecap="round" />
          <path d="M87 45q8-6 26-6h17" stroke="#ffe6e7" strokeWidth="2" strokeLinecap="round" opacity=".85" />
          <path d="m112 67 30 22-32 17q-3 2-3-2V70q0-6 5-3Z" fill="#bc146e" />
          <path d="m109 62 30 22-32 17q-3 2-3-2V65q0-6 5-3Z" fill={`url(#${id}-white)`} stroke="#fff3ec" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="151" cy="48" r="3" fill="#fff0fc" />
        </g>}
        {kind === "bars" && <g filter={`url(#${id}-shadow)`}>
          <path d="m78 99 11-5v43l-11 5Zm34-21 12-6v61l-12 5Zm36-37 12-6v95l-12 7Z" fill="#6f22bb" stroke="#ca53ff" />
          <rect x="63" y="101" width="24" height="39" rx="4" fill={`url(#${id}-bar)`} stroke="#aba0ff" strokeWidth="1.5" />
          <rect x="98" y="79" width="24" height="59" rx="4" fill={`url(#${id}-bar)`} stroke="#c2a0ff" strokeWidth="1.5" />
          <rect x="134" y="42" width="25" height="93" rx="4" fill={`url(#${id}-face)`} stroke="#f9b5ff" strokeWidth="1.5" />
          <path d="m63 101 7-5h18l-1 5m11-22 7-5h17v5m12-37 7-5h18v5" fill="#d891ff" stroke="#d6b8ff" />
          <path d="M68 105v31m35-52v49m36-86v83" stroke="#e2c4ff" strokeWidth="1.5" opacity=".7" />
          <path d="m59 87 20-15 9 3 16-21 10 2 11-12m-9 1 10-2-1 10" stroke="#a94cff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </g>}
        <g fill="#ffe2fb">
          <path d="m181 91 2 6 6 2-6 2-2 6-2-6-6-2 6-2Z" />
          <path d="m61 89 1 4 4 1-4 1-1 4-1-4-4-1 4-1Z" />
          <circle cx="162" cy="25" r="2" /><circle cx="192" cy="113" r="1.5" /><circle cx="54" cy="120" r="1" />
        </g>
      </svg>
    </div>
  </div>;
}

function LightTrails() {
  return <div className={styles.trailScene} aria-hidden="true">
    <svg className={styles.trails} viewBox="0 0 1280 480" fill="none" preserveAspectRatio="none">
      <defs>
        <linearGradient id="reelspark-wave" x1="0" y1="200" x2="1280" y2="280" gradientUnits="userSpaceOnUse"><stop stopColor="#ff7345" /><stop offset=".13" stopColor="#ff2f92" /><stop offset=".36" stopColor="#a737ff" /><stop offset=".55" stopColor="#3767ff" /><stop offset=".79" stopColor="#c034ff" /><stop offset="1" stopColor="#ff3fb4" /></linearGradient>
        <filter id="reelspark-wave-blur" x="-10%" y="-70%" width="120%" height="240%"><feGaussianBlur stdDeviation="7" /></filter>
      </defs>
      <g stroke="url(#reelspark-wave)">
        <path d="M-70 298C130 65 255 163 459 244S789 350 971 211s284-52 384 57" strokeWidth="24" opacity=".55" filter="url(#reelspark-wave-blur)" />
        <path d="M-70 298C130 65 255 163 459 244S789 350 971 211s284-52 384 57" strokeWidth="2.6" opacity=".9" />
        <path d="M-50 280C160 101 237 176 463 260S799 328 968 225s283-89 373 3" strokeWidth="1.5" opacity=".8" />
        <path d="M-30 307C136 167 245 114 460 241s339 91 523-48 273 34 369 36" strokeWidth="1" opacity=".5" />
        <path d="M-50 260C130 200 219 115 468 228s338 168 532 0 247 1 355-70" strokeWidth="1" opacity=".6" />
        <path d="M-25 236C175 48 278 206 494 250s284 136 488-9 271-7 350-57" strokeWidth=".8" opacity=".4" />
        <path d="M-50 212C159 137 248 190 459 271s299 43 491-9 278-154 379-129" strokeWidth=".8" opacity=".35" />
        <path d="M-50 188C104 83 310 212 477 294s341-49 490-61 256-109 352-51" strokeWidth=".7" opacity=".35" />
        <path d="M-30 322C187 171 298 240 484 282s261 53 475 11 285-95 365-62" strokeWidth="1" opacity=".45" />
      </g>
    </svg>
    <div className={styles.particles}>{Array.from({ length: 13 }, (_, i) => <i key={i} />)}</div>
  </div>;
}

function NeonChevron({ index }: { index: number }) {
  return <svg viewBox="0 0 48 52" fill="none" aria-hidden="true"><defs><linearGradient id={`reelspark-chevron-${index}`} x2="1" y2="1"><stop stopColor="#ffacef" /><stop offset=".5" stopColor="#ff3bb7" /><stop offset="1" stopColor="#aa36ff" /></linearGradient></defs><path d="m5 8 17 18L5 44h10l17-18L15 8Zm16 0 17 18-17 18h9l17-18L30 8Z" fill={`url(#reelspark-chevron-${index})`} stroke="#ffb9f2" strokeWidth="1.2" strokeLinejoin="round" /></svg>;
}

export function ReelsparkSection() {
  const campaignRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = campaignRef.current;
    if (!root || !("IntersectionObserver" in window)) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;
    // HTML is visible without JS. Only the enhanced section opts into reveal states.
    root.dataset.motionReady = "true";
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target === root) {
          root.dataset.active = String(entry.isIntersecting);
          return;
        }
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.revealed = "true";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .16 });
    observer.observe(root);
    root.querySelectorAll<HTMLElement>("[data-reveal]").forEach(el => observer.observe(el));
    const disableMotion = () => {
      if (reducedMotion.matches) {
        delete root.dataset.motionReady;
        observer.disconnect();
      }
    };
    reducedMotion.addEventListener("change", disableMotion);
    return () => { observer.disconnect(); reducedMotion.removeEventListener("change", disableMotion); delete root.dataset.motionReady; };
  }, []);

  return (
    <section className="relative z-10 px-4 py-10 sm:px-6 sm:py-14 lg:py-20" aria-labelledby="reelspark-title">
      <div ref={campaignRef}
        className={`shortform-section-container relative mx-auto w-full max-w-7xl overflow-hidden rounded-[24px] border border-white/[0.08] bg-[rgba(20,20,30,0.45)] px-5 py-12 text-white shadow-[0_24px_80px_rgba(10,8,24,0.28)] sm:px-8 sm:py-16 lg:px-12 lg:py-20 ${styles.campaign}`}
        style={{ backdropFilter: "blur(20px) saturate(120%)", WebkitBackdropFilter: "blur(20px) saturate(120%)" }}>
        <header id="reelspark" data-reveal="header" className={`relative mx-auto max-w-5xl scroll-mt-32 text-center lg:scroll-mt-36 ${styles.header}`}>
          <div className={styles.badgeRow}><i /><div className={styles.badge}><Clapperboard aria-hidden="true" /><span>ADGRIT <strong>릴스파크</strong> 서비스</span></div><i /></div>
          <h2 id="reelspark-title" className={styles.title}>영상 숏폼으로 니즈와 알고리즘에 맞춰,<br className={styles.titleBreak} /> 콘텐츠를 <span className={styles.emphasis}>폭발적으로<svg viewBox="0 0 320 29" preserveAspectRatio="none" fill="none" aria-hidden="true"><defs><linearGradient id="reelspark-swoosh"><stop stopColor="#ffac43" /><stop offset=".4" stopColor="#ff329f" /><stop offset="1" stopColor="#9b42ff" stopOpacity=".2" /></linearGradient></defs><path d="M3 19Q152-11 313 17M37 24Q143 5 254 22" stroke="url(#reelspark-swoosh)" strokeWidth="3" strokeLinecap="round" /><path d="M39 25Q122 6 223 15" stroke="url(#reelspark-swoosh)" strokeWidth="5" strokeLinecap="round" opacity=".75" /></svg></span> 전달합니다.</h2>
          <p className={styles.description}>릴스파크는 최근 트렌드에 맞는 영상 숏폼을 제작하여<br /> 오래볼 계정에 업데이트하고, 니즈와 알고리즘에 최적화된 방식으로<br /> 수많은 사용자에게 콘텐츠가 도달하도록 설계된 서비스입니다.<br /> 최적화 계정 육성을 넘어, <strong>릴스파크 전용 육성</strong>으로 더 큰 파급력을 만듭니다.</p>
        </header>

        <div className={styles.processScene}>
          <LightTrails />
          <ol className={styles.steps}>
            {STEPS.map(({ title, description, tone, icon }, index) => <li key={title} data-reveal="step" className={`${styles.step} ${styles[tone]}`} style={{ "--step-delay": `${180 + index * 140}ms`, "--icon-delay": `${340 + index * 140}ms`, "--arrow-delay": `${880 + index * 140}ms` } as CSSProperties}>
              <article className={styles.card}>
                <span className={styles.cardNumber} aria-hidden="true">0{index + 1}</span>
                <ProcessIcon kind={icon} />
                <h3>{title}</h3>
                <p>{description.map((line, lineIndex) => <span key={line}>{lineIndex > 0 && <br />}{line}</span>)}</p>
              </article>
              {index < STEPS.length - 1 && <span className={styles.connector}><NeonChevron index={index} /></span>}
              {index === 1 && <svg className={styles.tabletBridge} viewBox="0 0 300 32" preserveAspectRatio="none" fill="none" aria-hidden="true"><path d="M300 0v5q0 7-10 7H12Q0 12 0 22v10" stroke="#e756ef" strokeWidth="1.5" opacity=".75" /></svg>}
            </li>)}
          </ol>
        </div>
        <div className={styles.bottomMessage} data-reveal="footer"><Rocket aria-hidden="true" /><p><strong>릴스파크 전용 최적화</strong>로 콘텐츠의 파급력을 극대화합니다.</p></div>
      </div>
    </section>
  );
}
