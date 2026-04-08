"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

export type SliderPost = {
  slug: string;
  title: string;
  excerpt: string;
  categoryName: string;
  categorySlug: string;
  imageUrl: string | null;
  date: string;
};

export function BlogFeaturedSlider({ posts }: { posts: SliderPost[] }) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + posts.length) % posts.length), [posts.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % posts.length), [posts.length]);

  useEffect(() => {
    if (posts.length <= 1) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [posts.length, next]);

  if (posts.length === 0) return null;

  const post = posts[current];

  return (
    <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] overflow-hidden rounded-2xl bg-slate-800 select-none">
      {/* 배경 이미지 */}
      {post.imageUrl ? (
        <Image
          key={post.slug}
          src={post.imageUrl}
          alt=""
          fill
          className="object-cover transition-opacity duration-700"
          sizes="(max-width: 768px) 100vw, 90vw"
          priority
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A237E] to-slate-700" />
      )}

      {/* 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

      {/* 카테고리 뱃지 */}
      <div className="absolute top-5 left-5 sm:top-7 sm:left-7">
        <Link
          href={`/blog/category/${post.categorySlug}`}
          className="inline-block bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 hover:bg-black/70 transition-colors"
        >
          {post.categoryName}
        </Link>
      </div>

      {/* 텍스트 콘텐츠 */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
        <Link href={`/blog/${post.slug}`} className="group">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight group-hover:text-[#FFBD4F] transition-colors line-clamp-2 max-w-3xl">
            {post.title}
          </h2>
        </Link>
        {post.excerpt && (
          <p className="mt-2 sm:mt-3 text-sm text-white/65 line-clamp-2 max-w-2xl leading-relaxed">
            {post.excerpt}
          </p>
        )}
        <p className="mt-3 text-xs text-white/40">{post.date}</p>
      </div>

      {/* 좌우 화살표 */}
      {posts.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="이전 슬라이드"
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white text-xl hover:bg-white/30 transition-colors"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="다음 슬라이드"
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white text-xl hover:bg-white/30 transition-colors"
          >
            ›
          </button>
        </>
      )}

      {/* 도트 인디케이터 */}
      {posts.length > 1 && (
        <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 flex items-center gap-1.5">
          {posts.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`슬라이드 ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-white w-5 h-2"
                  : "bg-white/40 w-2 h-2 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
