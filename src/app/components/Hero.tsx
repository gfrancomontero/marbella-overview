export default function Hero() {
  return (
    <section className="relative bg-stone-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900/30" />
      <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-36">
        <p className="text-xs tracking-[0.3em] uppercase text-amber-300/80 mb-4">
          March 31 onwards
        </p>
        <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-[1.1]">
          Marbella
        </h1>
        <p className="mt-4 text-lg md:text-xl text-stone-300 font-light max-w-lg">
          Quick guide to coffee, food, fitness, and everything in between.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-xs text-stone-400">
          <span>EST 9–5 → 3pm–11pm local</span>
          <span>Aloha Gardens, Nueva Andalucía</span>
          <span>Lily TBD</span>
        </div>
      </div>
    </section>
  );
}
