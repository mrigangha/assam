"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

import { useLang } from "./Language";

// Photos dropped by the owner into public/slideshow/.
// To add more: save the file there and append the src below
// plus one caption per language in Language.tsx → slides.captions.
const SRCS = [
  "/slideshow/Screenshot_2026-10-02_20-23-31.png",
  "/slideshow/Screenshot_2026-10-02_20-23-39.png",
  "/slideshow/Screenshot_2026-10-02_20-24-06.png",
  "/slideshow/Screenshot_2026-10-02_20-24-46.png",
  "/slideshow/Screenshot_2026-10-02_20-26-14.png",
  "/slideshow/Screenshot_2026-10-02_20-26-30.png",
];

const AUTOPLAY_MS = 4500;

export default function Slideshow() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const { t } = useLang();
  const captions = t.slides.captions;

  const go = useCallback(
    (dir: 1 | -1) =>
      setIndex((i) => (i + dir + SRCS.length) % SRCS.length),
    []
  );

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => go(1), AUTOPLAY_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, go]);

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl bg-black ring-4 ring-[#D4A017] shadow-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* slides — crossfade */}
      <div className="relative w-full aspect-[93/100]">
        {SRCS.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={captions[i] ?? `Photo ${i + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 420px"
            className={`object-contain transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            priority={i === 0}
          />
        ))}
      </div>

      {/* caption */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent px-4 pt-10 pb-3 text-left">
        <p key={index} className="text-white text-sm font-medium">
          {captions[index]}
        </p>
        <p className="text-white/60 text-xs mt-0.5">
          {index + 1} / {SRCS.length} • {t.slides.credit}
        </p>
      </div>

      {/* arrows */}
      <button
        onClick={() => go(-1)}
        aria-label="Previous photo"
        className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/55 hover:bg-[#9E1B1E] text-white text-lg leading-none ring-1 ring-white/40 transition"
      >
        ‹
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next photo"
        className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/55 hover:bg-[#9E1B1E] text-white text-lg leading-none ring-1 ring-white/40 transition"
      >
        ›
      </button>

      {/* dots */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {SRCS.map((src, i) => (
          <button
            key={src}
            onClick={() => setIndex(i)}
            aria-label={`Go to photo ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index
                ? "w-6 bg-[#D4A017]"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
