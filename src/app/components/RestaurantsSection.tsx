import {
  experienceRestaurants,
  favoriteRestaurants,
  scenicRestaurants,
} from "../data/restaurants";

export default function RestaurantsSection() {
  return (
    <section id="restaurants" className="py-20 px-6 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-light tracking-tight mb-12">Restaurants</h2>

        {/* Favorites — big highlight cards */}
        <div className="mb-16">
          <h3 className="text-xs tracking-[0.2em] uppercase text-amber-700 mb-6">
            The Must-Go&apos;s
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {favoriteRestaurants.map((r) => (
              <div
                key={r.name}
                className="bg-white border border-amber-200 rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-medium">{r.name}</h4>
                  <span className="text-xs text-stone-400">{r.priceRange}</span>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">{r.reason}</p>
                <p className="text-[10px] text-stone-400 mt-3 uppercase tracking-wider">
                  {r.cuisine}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience restaurants — numbered list style */}
        <div className="mb-16">
          <h3 className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-6">
            Experience Dining
          </h3>
          <div className="space-y-0 divide-y divide-stone-200">
            {experienceRestaurants.map((r, i) => (
              <div key={r.name} className="flex items-start gap-5 py-4">
                <span className="text-2xl font-light text-stone-300 w-8 shrink-0 text-right">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{r.name}</h4>
                  <p className="text-xs text-stone-500 mt-0.5">{r.draw}</p>
                  {r.caveat && (
                    <p className="text-xs text-red-600/80 mt-1 italic">{r.caveat}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scenic — horizontal scroll on mobile, grid on desktop */}
        <div>
          <h3 className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-6">
            Scenic & Local
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {scenicRestaurants.map((r) => (
              <div
                key={r.name}
                className="bg-white rounded-lg p-4 border border-stone-200 hover:border-green-300 transition-colors"
              >
                <h4 className="font-medium text-sm mb-1">{r.name}</h4>
                <p className="text-xs text-stone-500 leading-relaxed">{r.setting}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
