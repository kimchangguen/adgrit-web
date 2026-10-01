import { Check, Lightbulb, Music2 } from "lucide-react";
import styles from "./AccountGrowthProcess.module.css";

const steps = [
  { title: "계정 진단 & 전략 수립", lines: ["계정 상태 분석 및 타깃 맞춤", "전략 설계"], label: "맞춤형 성장 전략 수립", tone: "pink", Scene: AnalysisScene },
  { title: "콘텐츠 가이드 제공", lines: ["콘텐츠 주제, 구성, 촬영 팁,", "편집 가이드 제공"], label: "실무형 가이드 & 자료 제공", tone: "blue", Scene: GuideScene },
  { title: "사장님 직접 제작", lines: ["촬영 및 간단한 콘텐츠 제작을", "내부에서 직접 실행"], label: "쉽고 따라하는 콘텐츠 제작", tone: "violet", Scene: CreationScene },
  { title: "최적화 배포 & 확산", lines: ["알고리즘 최적화 배포로 노출 극대화", "및 팔로워 성장"], label: "최적화 배포 전략", tone: "orange", Scene: ReachScene },
  { title: "고객 유입 & 매출 연결", lines: ["매장 방문, 문의, 구매 등", "실질적인 매출로 연결"], label: "지속적인 성과 관리", tone: "revenue", Scene: RevenueScene },
] as const;

function AnalysisScene() {
  return <svg viewBox="0 0 180 112" fill="none">
    <defs>
      <linearGradient id="process-dashboard" x2="1" y2="1"><stop stopColor="#b853df" /><stop offset=".45" stopColor="#5f286f" /><stop offset="1" stopColor="#29183d" /></linearGradient>
      <linearGradient id="process-lens" x2="1" y2="1"><stop stopColor="#fbbcff" /><stop offset=".45" stopColor="#d75cff" /><stop offset="1" stopColor="#6335d2" /></linearGradient>
    </defs>
    <g transform="translate(25 16) rotate(-8 60 38)">
      <rect x="3" y="4" width="111" height="70" rx="7" fill="#51194e" />
      <rect width="111" height="70" rx="7" fill="url(#process-dashboard)" stroke="#fca3e8" />
      <path d="M1 13H110" stroke="#edb6ff" strokeOpacity=".6" />
      <circle cx="7" cy="7" r="1.5" fill="#ffb7e1" /><circle cx="13" cy="7" r="1.5" fill="#ffb7e1" />
      <path d="M79 7h22" stroke="#e0b7ff" strokeWidth="2" />
      <circle cx="21" cy="31" r="11" fill="#ce72ed" /><circle cx="21" cy="27" r="4" fill="#fff0ff" />
      <path d="M14 38c0-10 14-10 14 0" fill="#fff0ff" />
      <path d="M10 50h33m-33 6h49m-49 6h25" stroke="#bf82cb" strokeWidth="2" />
      <path d="M45 42h53M45 29h53M54 19v28m19-28v28m19-28v28" stroke="#ba70c5" strokeOpacity=".3" />
      <path d="m47 40 12-10 10 5 14-14 7 3 11-10" stroke="#ff98b4" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="69" cy="35" r="2" fill="#ffe0f3" /><circle cx="83" cy="21" r="2" fill="#ffe0f3" />
    </g>
    <path d="m126 70 17 19" stroke="#58225f" strokeWidth="12" strokeLinecap="round" />
    <path d="m125 67 17 19" stroke="url(#process-lens)" strokeWidth="9" strokeLinecap="round" />
    <circle cx="116" cy="56" r="17" fill="#40205acc" stroke="url(#process-lens)" strokeWidth="5" />
    <circle cx="116" cy="56" r="12" fill="#c65eff22" stroke="#f7b9ff" strokeOpacity=".7" />
    <path d="M107 54a10 10 0 0 1 9-8" stroke="#ffe8ff" strokeWidth="2" strokeLinecap="round" />
  </svg>;
}

function GuideScene() {
  return <>
    <svg viewBox="0 0 180 112" fill="none">
      <defs><linearGradient id="process-guide" x2="1" y2="1"><stop stopColor="#c2dfff" /><stop offset=".5" stopColor="#869dff" /><stop offset="1" stopColor="#6268da" /></linearGradient></defs>
      <g transform="rotate(9 100 55)"><rect x="65" y="20" width="58" height="70" rx="5" fill="#3c5db0" stroke="#7ecfff" /><path d="M78 32h32m-32 8h27m-27 8h32" stroke="#94bbff" strokeWidth="2" /></g>
      <g transform="rotate(-7 80 55)">
        <rect x="49" y="16" width="59" height="77" rx="6" fill="#243d89" stroke="#536bc9" strokeWidth="4" />
        <rect x="47" y="12" width="59" height="77" rx="6" fill="url(#process-guide)" stroke="#c5eaff" strokeWidth="1.5" />
        <path d="M68 12v-5h17v5h5v9H63v-9z" fill="#a8adff" stroke="#e1e1ff" />
        <circle cx="76" cy="9" r="2.5" fill="#5f5bb9" />
        {[35, 52, 69].map(y => <g key={y}><rect x="56" y={y - 5} width="9" height="9" rx="2" fill="#5d64d5" /><path d={`m58 ${y-1} 2 2 5-6`} stroke="#f3f4ff" strokeWidth="1.7" strokeLinecap="round" /><path d={`M72 ${y-2}h24m-24 5h18`} stroke="#5369b7" strokeWidth="2" /></g>)}
      </g>
    </svg>
    <div className={styles.bulb}><Lightbulb size={33} strokeWidth={1.4} /><i /><i /><i /></div>
  </>;
}

function CreationScene() {
  return <svg viewBox="0 0 180 112" fill="none">
    <defs><linearGradient id="process-camera" x2="1" y2="1"><stop stopColor="#bc8eff" /><stop offset=".4" stopColor="#9b59e5" /><stop offset="1" stopColor="#dd3cb9" /></linearGradient><linearGradient id="process-play" x2="1" y2="1"><stop stopColor="#ff90de" /><stop offset="1" stopColor="#ff258d" /></linearGradient></defs>
    <g transform="rotate(-9 68 30)"><rect x="51" y="4" width="31" height="39" rx="3" fill="#5746b4" stroke="#bfaaff" /><circle cx="60" cy="14" r="4" fill="#b3a4ff" /><path d="m54 35 9-12 6 6 5-6 5 12" fill="#bb8eff" /></g>
    <g transform="rotate(10 115 30)"><rect x="97" y="6" width="31" height="40" rx="3" fill="#663cb2" stroke="#d1a1ff" /><path d="m108 17 10 7-10 7z" fill="#e1b8ff" /></g>
    <g transform="rotate(12 137 62)"><rect x="122" y="40" width="28" height="37" rx="3" fill="#552873" stroke="#de85e9" /><path d="m132 50 10 7-10 7z" fill="#f0b5ed" /></g>
    <path d="M42 45v-5h26l6-9h24l7 9h11v5" fill="#9770e7" stroke="#d1b6ff" />
    <rect x="37" y="45" width="87" height="48" rx="8" fill="#64339c" />
    <rect x="34" y="39" width="87" height="48" rx="8" fill="url(#process-camera)" stroke="#ecb8ff" strokeWidth="1.2" />
    <rect x="42" y="44" width="13" height="6" rx="2" fill="#d2b4ff" /><circle cx="109" cy="46" r="2" fill="#ffe3fc" />
    <circle cx="80" cy="63" r="22" fill="#693099" stroke="#dfbaff" />
    <circle cx="80" cy="63" r="18" fill="url(#process-play)" stroke="#ffc7f0" strokeWidth="2" />
    <path d="m75 52 16 11-16 11z" fill="white" />
  </svg>;
}

function ReachScene() {
  return <>
    <svg viewBox="0 0 180 112" fill="none">
      <defs><linearGradient id="process-plane" x2="1" y2="1"><stop stopColor="#e1d4ff" /><stop offset=".55" stopColor="#9474ff" /><stop offset="1" stopColor="#614af2" /></linearGradient></defs>
      <path d="M32 79C-6 22 123 101 154 36M26 94C64 107 170 35 146 20" stroke="#ff86637a" strokeWidth="1.3" strokeDasharray="2 4" />
      <path d="m42 40 92-33-27 63-20-21-15 10 2-18z" fill="#4b337a" transform="translate(2 4)" />
      <path d="m42 40 92-33-27 63-20-21-15 10 2-18z" fill="url(#process-plane)" stroke="#d8bfff" />
      <path d="m42 40 35 2 57-35-47 42 20 21" stroke="#f7e8ff" strokeWidth="1.3" />
      <path d="m77 42-5 17 15-10 47-42z" fill="#7250de" stroke="#cab4ff" strokeWidth=".6" />
    </svg>
    <span className={styles.instagram}><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg></span>
    <span className={styles.music}><Music2 size={19} fill="currentColor" /></span>
    <span className={styles.youtube}><svg width="23" height="23" viewBox="0 0 24 24" fill="none"><rect x="2" y="5" width="20" height="14" rx="4" fill="white" /><path d="m10 8 6 4-6 4z" fill="#ff285d" /></svg></span>
  </>;
}

function RevenueScene() {
  return <svg viewBox="0 0 180 112" fill="none">
    <defs>
      <linearGradient id="process-bar-one" x2="0" y2="1"><stop stopColor="#c295ff" /><stop offset="1" stopColor="#793adb" /></linearGradient>
      <linearGradient id="process-bar-two" x2="0" y2="1"><stop stopColor="#ff8dd8" /><stop offset="1" stopColor="#f33aa4" /></linearGradient>
      <linearGradient id="process-bar-three" x2="0" y2="1"><stop stopColor="#ffca79" /><stop offset="1" stopColor="#ff737c" /></linearGradient>
      <linearGradient id="process-growth-arrow" x2="1" y2="0"><stop stopColor="#ffb56f" /><stop offset="1" stopColor="#ff63cf" /></linearGradient>
    </defs>
    <path d="m34 51 22-19 18 7 41-28-3 13 15-20-25 5 13 2" stroke="url(#process-growth-arrow)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m31 89 112 0" stroke="#ff8eae" strokeOpacity=".5" />
    <g transform="skewY(-3)">
      <path d="m49 59 6 4v28l-6-3zm33-19 6 4v48l-6-3zm33-19 6 4v67l-6-3z" fill="#87307e" />
      <rect x="31" y="59" width="19" height="31" rx="2" fill="url(#process-bar-one)" stroke="#d4b4ff" />
      <rect x="64" y="40" width="19" height="50" rx="2" fill="url(#process-bar-two)" stroke="#ffbaeb" />
      <rect x="97" y="21" width="19" height="69" rx="2" fill="url(#process-bar-three)" stroke="#ffe1bc" />
    </g>
    <ellipse cx="133" cy="75" rx="16" ry="17" fill="#b96c34" />
    <circle cx="130" cy="73" r="16" fill="#ffbf52" stroke="#ffe2a0" strokeWidth="2" />
    <circle cx="130" cy="73" r="12" stroke="#f28c31" />
    <path d="M134 67c-8-5-13 4-4 6s5 10-3 5m3-15v19" stroke="#fff2b9" strokeWidth="2.2" strokeLinecap="round" />
  </svg>;
}

export function AccountGrowthProcess() {
  return (
    <div className={styles.process}>
      <header className={styles.header}>
        <h3>계정육성 <span>프로세스</span></h3>
        <p>체계적인 5단계 프로세스로, 사장님의 <em>인스타그램</em>이 <strong>매출로 이어지도록</strong> 함께합니다.</p>
      </header>
      <ol className={styles.stages}>
        {steps.map(({ title, lines, label, tone, Scene }, index) => (
          <li key={title} className={styles.stage + " " + styles[tone]}>
            <div className={styles.visual} aria-hidden="true">
              <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
              <div className={styles.platform}><i /><i /><i /></div>
              <div className={styles.object}><Scene /><span className={styles.sparkle} /><span className={styles.particle} /></div>
            </div>
            <h4>{title}</h4>
            <p>{lines[0]}<br />{lines[1]}</p>
            <span className={styles.pill}><Check size={11} strokeWidth={2.5} aria-hidden="true" />{label}</span>
            {index < steps.length - 1 && <span className={styles.connector} aria-hidden="true"><i /><i /></span>}
          </li>
        ))}
      </ol>
    </div>
  );
}