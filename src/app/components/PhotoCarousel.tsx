"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const photos = Array.from({ length: 36 }, (_, i) =>
  `/fotos/${String(i + 1).padStart(3, "0")}.jpg`
);

export default function PhotoCarousel() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [animating, setAnimating] = useState(false);

  const go = useCallback(
    (next: number, dir: "left" | "right") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent((next + photos.length) % photos.length);
        setAnimating(false);
      }, 300);
    },
    [animating]
  );

  const prev = useCallback(() => go(current - 1, "left"), [current, go]);
  const next = useCallback(() => go(current + 1, "right"), [current, go]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

  // Auto-advance (pauses on lightbox)
  useEffect(() => {
    if (lightbox) return;
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [lightbox, next]);

  const translateClass =
    animating
      ? direction === "right"
        ? "-translate-x-4 opacity-0"
        : "translate-x-4 opacity-0"
      : "translate-x-0 opacity-100";

  return (
    <section id="photos" className="py-20 px-6 bg-stone-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-light tracking-tight text-white mb-2">Marbella</h2>
        <p className="text-sm text-stone-400 mb-10">Some shots from around the area.</p>

        {/* Main carousel */}
        <div className="relative group">
          {/* Main image */}
          <div
            className="relative w-full overflow-hidden rounded-xl cursor-zoom-in"
            style={{ aspectRatio: "16/9" }}
            onClick={() => setLightbox(true)}
          >
            <div
              className={`absolute inset-0 transition-all duration-300 ease-out ${translateClass}`}
            >
              <Image
                src={photos[current]}
                alt={`Marbella ${current + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 960px"
                priority={current === 0}
              />
            </div>
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            {/* Counter */}
            <div className="absolute bottom-4 right-4 text-xs text-white/70 bg-black/40 px-2 py-1 rounded-full">
              {current + 1} / {photos.length}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 backdrop-blur-sm"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 backdrop-blur-sm"
            aria-label="Next"
          >
            ›
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {photos.map((src, i) => (
            <button
              key={src}
              onClick={() => go(i, i > current ? "right" : "left")}
              className={`relative shrink-0 rounded-md overflow-hidden transition-all ${
                i === current
                  ? "ring-2 ring-amber-400 opacity-100"
                  : "opacity-40 hover:opacity-70"
              }`}
              style={{ width: 72, height: 48 }}
            >
              <Image
                src={src}
                alt={`thumb ${i + 1}`}
                fill
                className="object-cover"
                sizes="72px"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(false)}
        >
          <button
            className="absolute top-5 right-6 text-white/60 hover:text-white text-3xl"
            onClick={() => setLightbox(false)}
          >
            ×
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-5xl px-4"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            ‹
          </button>
          <div
            className="relative w-full max-w-5xl mx-6"
            style={{ aspectRatio: "16/9" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[current]}
              alt={`Marbella ${current + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-5xl px-4"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            ›
          </button>
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs text-white/40">
            {current + 1} / {photos.length} · click outside or ESC to close
          </p>
        </div>
      )}
    </section>
  );
}
