"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Star } from "lucide-react";
import { Container } from "./Container";
import { SectionBackdrop } from "./backgrounds/SectionBackdrop";

// public/kakao-screens/ 에 kakao-1.jpg ~ kakao-10.jpg (또는 .png) 로 넣어주세요.
const KAKAO_IMAGES = Array.from({ length: 10 }, (_, i) => `/kakao-screens/kakao-${i + 1}.jpg`);

const FALLBACK_SLIDE_STEP = 260;
const AUTO_PLAY_INTERVAL = 2500; // 2.5초로 단축

export function KakaoTestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [scrollPageCount, setScrollPageCount] = useState(KAKAO_IMAGES.length);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isProgrammaticScrollRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);

  const getSlideMetrics = useCallback(() => {
    const el = scrollRef.current;
    const firstCard = el?.firstElementChild as HTMLElement | null;

    if (!el || !firstCard) {
      return { gap: 24, step: FALLBACK_SLIDE_STEP };
    }

    const styles = window.getComputedStyle(el);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "24") || 24;
    const cardWidth = firstCard.getBoundingClientRect().width;

    return { gap, step: cardWidth + gap };
  }, []);

  const getMaxIndex = useCallback(() => {
    const el = scrollRef.current;

    if (!el) return KAKAO_IMAGES.length - 1;

    const { gap, step } = getSlideMetrics();
    const visibleCards = Math.max(1, Math.floor((el.clientWidth + gap) / step));

    return Math.max(0, KAKAO_IMAGES.length - visibleCards);
  }, [getSlideMetrics]);

  const scrollToIndex = useCallback((idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    isProgrammaticScrollRef.current = true;

    const targetIndex = Math.max(0, Math.min(idx, getMaxIndex()));
    const target = targetIndex * getSlideMetrics().step;
    const start = el.scrollLeft;
    const change = target - start;
    const startTime = performance.now();
    const duration = 250; // 0.25s (기존 대비 2배 빠름)

    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // easeInOutCubic
      const ease = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      el.scrollLeft = start + change * ease;

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animateScroll);
      } else {
        isProgrammaticScrollRef.current = false;
        animationFrameRef.current = null;
      }
    };

    animationFrameRef.current = requestAnimationFrame(animateScroll);
  }, [getMaxIndex, getSlideMetrics]);

  const goTo = useCallback((index: number) => {
    const idx = Math.max(0, Math.min(index, getMaxIndex()));
    setCurrentIndex(idx);
    scrollToIndex(idx);
  }, [getMaxIndex, scrollToIndex]);

  const updateScrollPageCount = useCallback(() => {
    const maxIndex = getMaxIndex();

    setScrollPageCount(maxIndex + 1);
    setCurrentIndex((index) => Math.min(index, maxIndex));
  }, [getMaxIndex]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    startX.current = e.pageX;
    scrollLeftStart.current = scrollRef.current.scrollLeft;
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const walk = e.pageX - startX.current;
    scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUp = () => {
    if (!isDragging || !scrollRef.current) return;
    setIsDragging(false);
    const scrollLeft = scrollRef.current.scrollLeft;
    const idx = Math.round(scrollLeft / getSlideMetrics().step);
    const clamped = Math.max(0, Math.min(idx, getMaxIndex()));
    setCurrentIndex(clamped);
    scrollToIndex(clamped);
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((i) => (i >= getMaxIndex() ? 0 : i + 1));
    }, AUTO_PLAY_INTERVAL);
  };

  const handleMouseLeave = () => {
    if (isDragging) handleMouseUp();
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((i) => (i >= getMaxIndex() ? 0 : i + 1));
    }, AUTO_PLAY_INTERVAL);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [getMaxIndex]);

  useEffect(() => {
    if (!scrollRef.current || isDragging) return;
    scrollToIndex(currentIndex);
  }, [currentIndex, isDragging, scrollToIndex]);

  useEffect(() => {
    const update = () => window.requestAnimationFrame(updateScrollPageCount);
    const frame = update();

    window.addEventListener("resize", update);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", update);
    };
  }, [updateScrollPageCount]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      if (isProgrammaticScrollRef.current) return;
      const idx = Math.round(el.scrollLeft / getSlideMetrics().step);
      setCurrentIndex(Math.max(0, Math.min(idx, getMaxIndex())));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [getMaxIndex, getSlideMetrics]);

  return (
    <section
      id="kakao-testimonials"
      className="ig-section relative z-10 py-20 sm:py-24 lg:py-28"
    >
      <SectionBackdrop variant="s7" />
      <Container className="ig-content">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/45">
            Client Success Reviews
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tighter text-white sm:text-5xl">
            클라이언트 만족후기
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            애드그릿은 사장님과 꾸준한소통으로
            <br />
            매장의 안정화된 매출성장을 위해 소통과 개발을 합니다.
          </p>
        </div>

        <div className="relative mt-14 sm:mt-16">
          <button
            type="button"
            onClick={() => goTo(currentIndex - 1)}
            className="ig-btn-glass absolute left-0 top-1/2 z-10 flex h-14 w-14 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-300 hover:scale-105 hover:bg-white/15 sm:-translate-x-4"
            aria-label="이전"
          >
            <ChevronLeft className="h-7 w-7" strokeWidth={1.8} />
          </button>

          <button
            type="button"
            onClick={() => goTo(currentIndex + 1)}
            className="ig-btn-glass absolute right-0 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 translate-x-2 items-center justify-center rounded-full transition-all duration-300 hover:scale-105 hover:bg-white/15 sm:translate-x-4"
            aria-label="다음"
          >
            <ChevronRight className="h-7 w-7" strokeWidth={1.8} />
          </button>

          <div
            ref={scrollRef}
            className={`flex cursor-grab select-none gap-6 overflow-x-auto px-2 py-6 active:cursor-grabbing [&::-webkit-scrollbar]:hidden ${
              isDragging ? "cursor-grabbing" : ""
            }`}
            style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {KAKAO_IMAGES.map((src, i) => (
              <div
                key={src}
                className="ig-glass-card group w-[84vw] flex-shrink-0 rounded-3xl p-3 text-white sm:w-[calc((100%_-_1.5rem)/2)] lg:w-[calc((100%_-_6rem)/5)] lg:p-3.5"
                style={{ scrollSnapAlign: "center" }}
              >
                <div className="mb-3 flex items-center justify-between gap-2 lg:mb-3">
                  <div className="flex min-w-0 items-center gap-2">
                    <span className="ig-glass-icon flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-2xl text-white">
                      <MessageCircle className="h-[18px] w-[18px]" strokeWidth={1.9} />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-[13px] font-bold tracking-tight text-white">
                        성공 사례 {String(i + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-0.5 truncate text-[11px] font-medium text-white/55">
                        Client Review
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-shrink-0 gap-0.5 text-[var(--ig-gold)]">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <Star key={star} className="h-3 w-3 fill-current" strokeWidth={1.6} />
                    ))}
                  </div>
                </div>

                <div className="relative aspect-[9/16] max-h-[624px] w-full overflow-hidden rounded-[1.35rem] border border-white/15 bg-white/5 transition-colors duration-500">
                  <Image
                    src={src}
                    alt={`클라이언트 만족후기 ${i + 1}`}
                    fill
                    className="pointer-events-none object-cover object-top transition-all duration-500 group-hover:opacity-90"
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 84vw"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 flex max-w-full flex-wrap justify-center gap-2">
            {Array.from({ length: scrollPageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 flex-shrink-0 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "scale-125 bg-[var(--ig-pink)]" : "bg-white/25 hover:bg-white/45"
                }`}
                aria-label={`${i + 1}번째 후기 화면으로 이동`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
