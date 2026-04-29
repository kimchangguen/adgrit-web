"use client";

import { useRef } from "react";
import { motion, useInView, type UseInViewOptions } from "framer-motion";
import { SiteHeader } from "../_components/SiteHeader";
import { Footer } from "../_components/Footer";

const EASE = [0.22, 1, 0.36, 1] as const;

function useReveal(margin: UseInViewOptions["margin"] = "-40px") {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin });
  return { ref, inView };
}

/* ─── 지점 데이터 ─────────────────────────────────── */
const LOCATIONS = [
  {
    label: "ADGRIT 지점",
    sublabel: "지점 작업실",
    address: "서울 송파구 문정동 634 405호",
    mapSrc:
      "https://maps.google.com/maps?q=서울+송파구+문정동+634&t=&z=17&ie=UTF8&iwloc=&output=embed",
  },
  {
    label: "ADGRIT 본점",
    sublabel: "본점 연구소",
    address: "경기도 성남시 분당구 여수동 189 805호",
    mapSrc:
      "https://maps.google.com/maps?q=경기도+성남시+분당구+여수동+189&t=&z=17&ie=UTF8&iwloc=&output=embed",
  },
] as const;

/* ─── 페이지 ─────────────────────────────────────── */
export default function ContactPage() {
  const { ref: heroRef, inView: heroInView } = useReveal("-20px");

  return (
    <div className="bg-[#222222] text-white min-h-screen">
      <SiteHeader />

      <main className="pt-16">

        {/* ── 히어로 ──────────────────────────────── */}
        <section className="px-6 sm:px-14 lg:px-24 pt-20 sm:pt-28 pb-16 sm:pb-20">
          <motion.p
            className="text-[0.65rem] font-bold tracking-[0.28em] text-slate-200 uppercase mb-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            ADGRIT Location
          </motion.p>
          <motion.h1
            className="font-extrabold text-white leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: EASE }}
          >
            오시는길
          </motion.h1>
          <motion.p
            className="mt-5 text-sm sm:text-base text-white/38 leading-[1.85]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: EASE }}
          >
            애드그릿의 지점과 본점으로 찾아오세요.
          </motion.p>
        </section>

        {/* ── 지도 섹션 ───────────────────────────── */}
        <section
          ref={heroRef}
          className="bg-[#222222] border-t border-white/[0.07] px-6 sm:px-14 lg:px-24 pt-16 pb-32 sm:pb-44"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {LOCATIONS.map(({ label, sublabel, address, mapSrc }, i) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const { ref: cardRef, inView: cardInView } = useReveal("-30px");
              return (
                <motion.div
                  key={label}
                  ref={cardRef}
                  initial={{ opacity: 0, y: 48 }}
                  animate={cardInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: i * 0.15, ease: EASE }}
                  className="flex flex-col gap-5"
                >
                  {/* 지점 정보 */}
                  <div className="space-y-1">
                    <p className="text-[0.65rem] font-bold tracking-[0.22em] text-slate-200 uppercase">
                      {sublabel}
                    </p>
                    <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      {label}
                    </h2>
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed pt-1">
                      {address}
                    </p>
                  </div>

                  {/* 지도 iframe */}
                  <div className="rounded-2xl overflow-hidden border-2 border-white/20 shadow-[0_0_24px_rgba(255,255,255,0.16)]">
                    <iframe
                      src={mapSrc}
                      width="100%"
                      height="360"
                      style={{ border: 0, display: "block" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={label}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
