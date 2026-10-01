import { Sparkles } from "lucide-react";
import { ShortformVisual } from "./ShortformVisual";
import styles from "./ShortformReachSection.module.css";

export function ShortformReachSection() {
  return (
    <section id="shortform" className="relative z-10 scroll-mt-20 px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
      <div
        className="shortform-section-container relative mx-auto w-full max-w-7xl overflow-hidden rounded-[28px] border border-white/[0.08] bg-[rgba(20,20,30,0.45)] px-5 py-10 text-white shadow-[0_24px_80px_rgba(10,8,24,0.28)] sm:px-8 sm:py-14 lg:px-12 lg:py-16"
        style={{
          backdropFilter: "blur(20px) saturate(120%)",
          WebkitBackdropFilter: "blur(20px) saturate(120%)",
        }}
      >
        <div className={styles.content}>
          <div className={styles.copy}>
            <div className={styles.badge}><Sparkles size={14} aria-hidden="true" /><span>32개 채널</span><i aria-hidden="true" /><span>240만명 도달</span></div>
            <h2 className={styles.headline}>
              <span className={styles.firstLine}>숏폼 하나가</span>
              <span className={styles.secondLine}>손님을 <span className={styles.explosion}>폭발적으로</span>{" "}<span className={styles.increase}>증가시키는</span> 시대</span>
            </h2>
            <p className={styles.subcopy}>기획부터 업로드, 채널 확산까지<br /><strong>사장님은 음식만 만드세요!</strong></p>
          </div>
          <ShortformVisual />
        </div>
      </div>
    </section>
  );
}
