"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const photos = Array.from({ length: 36 }, (_, i) =>
  `/fotos_compressed/${String(i + 1).padStart(3, "0")}.jpg`
);

export default function PhotoCarousel() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [slideDir, setSlideDir] = useState<"left" | "right">("right");

  const go = useCallback(
    (index: number, dir: "left" | "right") => {
      if (animating) return;
      setSlideDir(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent((index + photos.length) % photos.length);
        setAnimating(false);
      }, 250);
    },
    [animating]
  );

  const prev = useCallback(() => go(current - 1, "left"), [current, go]);
  const next = useCallback(() => go(current + 1, "right"), [current, go]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

  useEffect(() => {
    if (lightbox) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [lightbox, next]);

  return (
    <section id="photos" className="py-20 px-6 bg-stone-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-light tracking-tight text-white mb-2">The Apartment</h2>
        <p className="text-sm text-stone-400 mb-10">Aloha Gardens, Nueva Andalucía.</p>

        {/* Main image */}
        <div className="relative group">
          <div
            className="relative w-full rounded-xl overflow-hidden cursor-zoom-in bg-stone-800"
            style={{ aspectRatio: "16/9" }}
            onClick={() => setLightbox(true)}
          >
            <Image
              key={current}
              src={photos[current]}
              alt={`Apartment photo ${current + 1}`}
              fill
              className={`object-cover transition-all duration-250 ease-out ${
                animating
                  ? slideDir === "right"
                    ? "opacity-0 translate-x-3"
                    : "opacity-0 -translate-x-3"
                  : "opacity-100 translate-x-0"
              }`}
              sizes="(max-width: 1024px) 100vw, 960px"
              priority={current < 3}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
            {/* Counter */}
            <div className="absolute bottom-4 right-4 text-xs text-white/70 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
              {current + 1} / {photos.length}
            </div>
            {/* Zoom hint */}
            <div className="absolute top-4 right-4 text-[10px] text-white/40 opacity-0 group-hover:opacity-100 transition-opacity">
              click to expand
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 backdrop-blur-sm"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 backdrop-blur-sm"
            aria-label="Next"
          >
            ›
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {photos.map((src, i) => (
            <button
              key={src}
              onClick={() => go(i, i > current ? "right" : "left")}
              className={`relative shrink-0 rounded overflow-hidden transition-all ${
                i === current
                  ? "ring-2 ring-amber-400 opacity-100"
                  : "opacity-35 hover:opacity-65"
              }`}
              style={{ width: 68, height: 46 }}
            >
              <Image
                src={src}
                alt={`thumb ${i + 1}`}
                fill
                className="object-cover"
                sizes="68px"
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
            className="absolute top-5 right-6 text-white/50 hover:text-white text-3xl leading-none"
            onClick={() => setLightbox(false)}
          >
            ×
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-6xl px-3"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            ‹
          </button>
          <div
            className="relative w-full max-w-5xl mx-16"
            style={{ aspectRatio: "16/9" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[current]}
              alt={`Apartment ${current + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-6xl px-3"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            ›
          </button>
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs text-white/30">
            {current + 1} / {photos.length} · ESC to close
          </p>
        </div>
      )}
    </section>
  );
}
