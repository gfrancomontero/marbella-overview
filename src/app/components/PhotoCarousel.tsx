"use client";

import { useState, useEffect, useCallback } from "react";

const photos = Array.from({ length: 36 }, (_, i) =>
  `/fotos_compressed/${String(i + 1).padStart(3, "0")}.jpg`
);

export default function PhotoCarousel() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + photos.length) % photos.length), []);
  const next = useCallback(() => setCurrent((c) => (c + 1) % photos.length), []);

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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={current}
              src={photos[current]}
              alt={`Apartment photo ${current + 1}`}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 right-4 text-xs text-white/70 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
              {current + 1} / {photos.length}
            </div>
            <div className="absolute top-4 right-4 text-[10px] text-white/40 opacity-0 group-hover:opacity-100 transition-opacity">
              click to expand
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
          >
            ‹
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
          >
            ›
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {photos.map((src, i) => (
            <button
              key={src}
              onClick={() => setCurrent(i)}
              className={`shrink-0 rounded overflow-hidden transition-all ${
                i === current ? "ring-2 ring-amber-400 opacity-100" : "opacity-35 hover:opacity-65"
              }`}
              style={{ width: 68, height: 46 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={`thumb ${i + 1}`} className="w-full h-full object-cover" />
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
            className="w-full max-w-5xl mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[current]}
              alt={`Apartment ${current + 1}`}
              className="w-full h-auto max-h-[85vh] object-contain"
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
