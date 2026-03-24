import { coffeeSpots, upscaleSpots } from "../data/coffee";

export default function CoffeeSection() {
  return (
    <section id="coffee" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-light tracking-tight mb-2">Coffee & Work Spots</h2>
        <p className="text-sm text-stone-500 mb-12 max-w-xl">
          Laptop-friendly cafes with great brunch. Most of these are in and around Marbella
          old town and San Pedro.
        </p>

        {/* Coffee grid — masonry-ish with varying sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {coffeeSpots.map((spot, i) => (
            <div
              key={spot.name}
              className={`group border border-stone-200 rounded-lg p-5 hover:border-amber-400 transition-colors ${
                i === 0 || i === 6 ? "md:col-span-2" : ""
              }`}
            >
              <h3 className="font-medium text-sm mb-1">
                {spot.name}
                {spot.nearHome && (
                  <span className="ml-2 text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">
                    next to apartment
                  </span>
                )}
              </h3>
              <p className="text-xs text-stone-500">{spot.vibe}</p>
              {spot.personalNote && (
                <p className="text-xs text-amber-700 mt-2 italic">{spot.personalNote}</p>
              )}
            </div>
          ))}
        </div>

        {/* Upscale — horizontal cards */}
        <div className="border-t border-stone-200 pt-12">
          <h3 className="text-lg font-light mb-1">A Step Up</h3>
          <p className="text-xs text-stone-400 mb-8">
            Still chill, can totally bring your laptop — just 25% pricier.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upscaleSpots.map((spot) => (
              <div
                key={spot.name}
                className="flex items-start gap-4 border border-stone-200 rounded-lg p-5 hover:border-amber-400 transition-colors"
              >
                <div className="w-1 h-10 bg-amber-300 rounded-full shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-sm">{spot.name}</h4>
                  <p className="text-xs text-stone-500 mt-1">{spot.why}</p>
                  <p className="text-[10px] text-stone-400 mt-1">{spot.priceBump}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
