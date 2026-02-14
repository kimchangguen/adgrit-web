"use client";

import { useEffect, useState } from "react";
import { SiteHeader } from "./SiteHeader";

type HeroWithScrollEffectProps = {
  children: React.ReactNode;
  /** CSS background-image (url(...) 또는 linear-gradient(...)) */
  backgroundImage?: string;
  /** 배경이 그라데이션일 때 오버레이 조정 (기본: 어두운 배경용) */
  darkOverlay?: boolean;
};

export function HeroWithScrollEffect({
  children,
  backgroundImage,
  darkOverlay = false,
}: HeroWithScrollEffectProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen w-full relative">
      {/* 고정 배경 - 스크롤해도 움직이지 않음 */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={backgroundImage ? { backgroundImage } : undefined}
        aria-hidden
      />
      {/* 물결 패턴 레이어 - 알록달록 파란 계열, 문약한 움직임 */}
      {darkOverlay && backgroundImage && (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden>
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.7" />
                <stop offset="33%" stopColor="#0ea5e9" stopOpacity="0.65" />
                <stop offset="66%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.55" />
              </linearGradient>
              <linearGradient id="wave-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0891b2" stopOpacity="0.65" />
                <stop offset="50%" stopColor="#1e40af" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.55" />
              </linearGradient>
              <linearGradient id="wave-grad-3" x1="50%" y1="100%" x2="50%" y2="0%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.55" />
              </linearGradient>
              <linearGradient id="wave-grad-4" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.55" />
                <stop offset="50%" stopColor="#6366f1" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="wave-grad-5" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#0c4a6e" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#0369a1" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <path fill="url(#wave-grad-1)" d="M0,80 Q400,40 800,80 T1600,80 L1920,80 L1920,1080 L0,1080 Z" style={{ transformOrigin: "50% 50%", animation: "hero-wave-1 8s ease-in-out infinite" }} />
            <path fill="url(#wave-grad-2)" d="M0,180 Q320,120 640,180 T1280,180 T1920,180 L1920,1080 L0,1080 Z" style={{ transformOrigin: "50% 50%", animation: "hero-wave-2 10s ease-in-out infinite" }} />
            <path fill="url(#wave-grad-3)" d="M0,260 Q360,200 720,260 T1440,260 L1920,260 L1920,1080 L0,1080 Z" style={{ transformOrigin: "50% 50%", animation: "hero-wave-3 12s ease-in-out infinite" }} />
            <path fill="url(#wave-grad-4)" d="M0,340 Q280,280 560,340 T1120,340 T1680,340 L1920,340 L1920,1080 L0,1080 Z" style={{ transformOrigin: "50% 50%", animation: "hero-wave-1 9s ease-in-out infinite 0.5s" }} />
            <path fill="url(#wave-grad-5)" d="M0,420 Q400,360 800,420 T1600,420 L1920,420 L1920,1080 L0,1080 Z" style={{ transformOrigin: "50% 50%", animation: "hero-wave-2 11s ease-in-out infinite 1s" }} />
          </svg>
          {/* 알록달록 진한 블롭 - 군데군데 많이 배치, 유기적 움직임 */}
          <div className="absolute w-[55%] h-[55%]" style={{ left: "8%", top: "12%", background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(15, 40, 71, 0.85) 0%, transparent 70%)", filter: "blur(55px)", animation: "hero-blob-1 14s ease-in-out infinite" }} />
          <div className="absolute w-[50%] h-[50%]" style={{ right: "3%", top: "20%", background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(30, 58, 95, 0.8) 0%, transparent 70%)", filter: "blur(65px)", animation: "hero-blob-2 16s ease-in-out infinite" }} />
          <div className="absolute w-[50%] h-[48%]" style={{ left: "25%", bottom: "8%", background: "radial-gradient(ellipse 75% 65% at 50% 50%, rgba(30, 64, 175, 0.75) 0%, transparent 65%)", filter: "blur(50px)", animation: "hero-blob-3 12s ease-in-out infinite 1s" }} />
          <div className="absolute w-[42%] h-[42%]" style={{ right: "15%", bottom: "18%", background: "radial-gradient(ellipse 65% 70% at 50% 50%, rgba(15, 23, 42, 0.8) 0%, transparent 70%)", filter: "blur(60px)", animation: "hero-blob-4 18s ease-in-out infinite 2s" }} />
          <div className="absolute w-[38%] h-[45%]" style={{ left: "12%", bottom: "28%", background: "radial-gradient(ellipse 70% 75% at 50% 50%, rgba(30, 58, 138, 0.78) 0%, transparent 68%)", filter: "blur(48px)", animation: "hero-blob-5 15s ease-in-out infinite 0.5s" }} />
          <div className="absolute w-[45%] h-[40%]" style={{ left: "45%", top: "5%", background: "radial-gradient(ellipse 75% 70% at 50% 50%, rgba(79, 70, 229, 0.7) 0%, rgba(99, 102, 241, 0.4) 40%, transparent 70%)", filter: "blur(52px)", animation: "hero-blob-1 13s ease-in-out infinite 1.5s" }} />
          <div className="absolute w-[40%] h-[42%]" style={{ right: "35%", top: "35%", background: "radial-gradient(ellipse 70% 75% at 50% 50%, rgba(6, 182, 212, 0.65) 0%, rgba(14, 165, 233, 0.5) 35%, transparent 68%)", filter: "blur(58px)", animation: "hero-blob-2 15s ease-in-out infinite 0.8s" }} />
          <div className="absolute w-[48%] h-[38%]" style={{ left: "5%", top: "45%", background: "radial-gradient(ellipse 80% 65% at 50% 50%, rgba(8, 145, 178, 0.72) 0%, rgba(2, 132, 199, 0.45) 40%, transparent 70%)", filter: "blur(55px)", animation: "hero-blob-3 17s ease-in-out infinite 2.5s" }} />
          <div className="absolute w-[42%] h-[48%]" style={{ right: "8%", bottom: "5%", background: "radial-gradient(ellipse 65% 80% at 50% 50%, rgba(124, 58, 237, 0.6) 0%, rgba(79, 70, 229, 0.5) 45%, transparent 70%)", filter: "blur(62px)", animation: "hero-blob-4 14s ease-in-out infinite 1.2s" }} />
          <div className="absolute w-[35%] h-[38%]" style={{ left: "38%", bottom: "15%", background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(37, 99, 235, 0.7) 0%, rgba(59, 130, 246, 0.5) 40%, transparent 68%)", filter: "blur(50px)", animation: "hero-blob-5 16s ease-in-out infinite 0.3s" }} />
        </div>
      )}
      <div
        className={`fixed inset-0 z-0 ${darkOverlay ? "bg-slate-900/20" : "bg-white/70"}`}
        aria-hidden
      />
      {/* 거칠은 질감 노이즈 - 최상단에 두어 표면감 강조 */}
      {darkOverlay && (
        <div className="fixed inset-0 z-0 hero-noise pointer-events-none" aria-hidden />
      )}

      <SiteHeader transparent={!scrolled} lightText={darkOverlay && !scrolled} />

      {/* 고정된 첫번째 섹션 폰트/콘텐츠 - 스크롤해도 움직이지 않음 */}
      <div className="fixed inset-0 z-[5] pointer-events-none flex flex-col items-center justify-center">
        <div className="pointer-events-auto w-full flex-1 flex flex-col items-center justify-between min-h-screen pt-16">
          <div className="flex-1 flex items-center justify-center w-full px-4">
            {children}
          </div>
          {/* SCROLL 표시 - 첫번째 섹션 맨 아래 */}
          <a
            href="#about"
            className={`pointer-events-auto flex flex-col items-center gap-2 pb-8 transition-colors animate-bounce ${
              darkOverlay ? "text-white/80 hover:text-white" : "text-slate-500 hover:text-slate-700"
            }`}
            aria-label="아래로 스크롤"
          >
            <span className="text-xs font-medium tracking-widest">SCROLL</span>
            <span
              className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                darkOverlay ? "border-white/60" : "border-slate-400"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* 스크롤 영역 확보용 빈 공간 */}
      <div className="min-h-screen" aria-hidden />
    </div>
  );
}
