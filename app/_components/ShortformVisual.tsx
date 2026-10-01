import { access } from "node:fs/promises";
import path from "node:path";
import { Clapperboard, Heart, Infinity as InfinityIcon, MessageCircle, Play, Send } from "lucide-react";
import { ShortformImage } from "./ShortformImage";
import styles from "./ShortformReachSection.module.css";

const clips = [
  { label: "우리 동네 맛집", category: "LOCAL DINING", views: "180만", position: "farLeft", file: "card-01.webp", scene: "음식점 내부" },
  { label: "한번 보면 저장", category: "A MOMENT TO TASTE", views: "320만", position: "nearLeft", file: "card-02.webp", scene: "음식을 즐기는 순간" },
  { label: "불맛 제대로", category: "BEHIND THE TASTE", views: "250만", position: "nearRight", file: "card-04.webp", scene: "요리사의 조리 장면" },
] as const;

// Resolve only these local assets. Missing files never issue broken image requests.
// Add the photos to public/images/shortform and refresh dev (rebuild for production).
async function localImage(file: string) {
  const url = "/images/shortform/" + file;
  try {
    await access(path.join(process.cwd(), "public", "images", "shortform", file));
    return url;
  } catch {
    return undefined;
  }
}

export async function ShortformVisual() {
  const [main, ...images] = await Promise.all([
    localImage("main.webp"),
    ...clips.map((clip) => localImage(clip.file)),
  ]);

  return (
    <figure className={styles.visual} aria-label="하나의 음식점 숏폼이 여러 SNS로 확산되는 콘텐츠 시연. 화면 속 반응 수치는 예시입니다.">
      <div className={styles.scene} aria-hidden="true">
        <div className={styles.ambient} />
        <div className={styles.floorGlow} />
        <svg className={styles.lightTrails} viewBox="0 0 920 560" fill="none">
          <defs>
            <linearGradient id="shortform-trail" x1="140" y1="480" x2="780" y2="330" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ff8955" /><stop offset=".25" stopColor="#ff3ba8" /><stop offset=".7" stopColor="#a16bff" /><stop offset="1" stopColor="#ffb45d" />
            </linearGradient>
            <filter id="shortform-glow" x="-30%" y="-100%" width="160%" height="300%"><feGaussianBlur stdDeviation="5" /></filter>
          </defs>
          <g stroke="url(#shortform-trail)">
            <path d="M735 302 C912 330 792 389 493 422 C126 462 43 398 193 347" strokeWidth="8" opacity=".26" filter="url(#shortform-glow)" />
            <path d="M735 302 C912 330 792 389 493 422 C126 462 43 398 193 347" strokeWidth="1.5" opacity=".8" />
            <path d="M776 319 C896 375 703 414 410 442 C76 473 108 409 181 376" strokeWidth="1" opacity=".4" />
          </g>
        </svg>
        {clips.map((clip, index) => (
          <div key={clip.file} className={styles.clipPosition + " " + styles[clip.position]}>
            <div className={styles.clip}>
              <ShortformImage key={images[index] ?? clip.file} src={images[index]} scene={clip.scene} sizes="(max-width: 767px) 140px, 200px" />
              <div className={styles.clipShade} />
              <span className={styles.clipCategory}>{clip.category}</span>

              <div className={styles.clipCaption}><strong>{clip.label}</strong><span><Play size={9} fill="currentColor" /> {clip.views}</span></div>
            </div>
          </div>
        ))}
        <div className={styles.phonePosition}>
          <div className={styles.phoneShell}>
            <span className={styles.sideButton} />
            <div className={styles.phoneScreen}>
              <ShortformImage key={main ?? "main"} src={main} scene="음식 클로즈업" sizes="(max-width: 389px) 220px, (max-width: 767px) 260px, 320px" />
              <div className={styles.screenShade} />
              <div className={styles.statusBar}><span>9:41</span><span className={styles.statusIcons}><i /><i /><b /></span></div>
              <div className={styles.island}><i /></div>
              <div className={styles.account}><span className={styles.avatar}>A</span><strong>ADGRIT</strong><span className={styles.follow}>Follow</span></div>
              <div className={styles.screenCopy}><strong>이런 맛집이<br /><em>있었다고?</em></strong><i /></div>
              <div className={styles.engagement}>
                <span><Heart size={22} fill="currentColor" /><b>12.4만</b></span>
                <span><MessageCircle size={21} /><small>댓글</small><b>3,892</b></span>
                <span><Send size={20} /><small>공유</small><b>1.2만</b></span>
              </div>
              <div className={styles.screenFooter}><strong>한 번 오면 단골 되는<br />진짜 맛집</strong><span>@adgrit.official · Original sound</span></div>
              <div className={styles.progress}><i /></div>
              <div className={styles.homeIndicator} />
            </div>
          </div>
        </div>
        <div className={styles.platform + " " + styles.youtube} title="YouTube"><span className={styles.youtubeIcon}><Play size={22} fill="currentColor" /></span></div>
        <div className={styles.platform + " " + styles.instagram} title="Instagram"><span className={styles.instagramIcon}><i /></span></div>
        <div className={styles.platform + " " + styles.tiktok} title="TikTok"><span className={styles.tiktokIcon}>♪</span></div>
        <div className={styles.platform + " " + styles.naver} title="Naver"><b>N</b></div>
        <div className={styles.platform + " " + styles.kakao} title="Kakao"><span className={styles.kakaoIcon}><MessageCircle size={33} fill="currentColor" /><b>TALK</b></span></div>
        <div className={styles.platform + " " + styles.reels} title="Reels"><Clapperboard size={32} /></div>
        <div className={styles.platform + " " + styles.meta} title="Meta"><InfinityIcon size={35} /></div>
        <svg className={styles.frontTrails} viewBox="0 0 920 560" fill="none">
          <g stroke="url(#shortform-trail)">
            <path d="M150 389 C54 450 169 484 404 498 C561 508 686 505 815 525" strokeWidth="8" opacity=".3" filter="url(#shortform-glow)" />
            <path d="M150 389 C54 450 169 484 404 498 C561 508 686 505 815 525" strokeWidth="2" opacity=".95" />
            <path d="M164 403 C83 455 217 477 453 490 C622 499 733 511 844 529" strokeWidth="1" opacity=".6" />
          </g>
        </svg>
      </div>
      <figcaption className={styles.visualCaption}>AI 생성 장면 · 화면 속 반응 수치는 연출된 예시입니다.</figcaption>
    </figure>
  );
}
