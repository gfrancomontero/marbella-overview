import {
  experienceRestaurants,
  favoriteRestaurants,
  scenicRestaurants,
} from "../data/restaurants";

function LinkedName({ name, url, className }: { name: string; url?: string; className?: string }) {
  if (!url) return <span className={className}>{name}</span>;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`${className} hover:text-amber-700 transition-colors`}>
      {name} ↗
    </a>
  );
}

export default function RestaurantsSection() {
  return (
    <section id="restaurants" className="py-20 px-6 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-light tracking-tight mb-12">Restaurants</h2>

        {/* Must-Go's */}
        <div className="mb-16">
          <h3 className="text-xs tracking-[0.2em] uppercase text-amber-700 mb-6">The Must-Go&apos;s</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {favoriteRestaurants.map((r) => (
              <div key={r.name} className="bg-white border border-amber-200 rounded-xl overflow-hidden shadow-sm">
                {r.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={r.image} alt={r.name} className="w-full h-44 object-cover" />
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-medium">
                      <LinkedName name={r.name} url={r.url} />
                    </h4>
                    <span className="text-xs text-stone-400">{r.priceRange}</span>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">{r.reason}</p>
                  <p className="text-[10px] text-stone-400 mt-3 uppercase tracking-wider">{r.cuisine}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-6">Experience Dining</h3>
          <div className="space-y-0 divide-y divide-stone-200">
            {experienceRestaurants.map((r, i) => (
              <div key={r.name} className="flex items-start gap-5 py-4 group">
                <span className="text-2xl font-light text-stone-300 w-8 shrink-0 text-right">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {r.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={r.image} alt={r.name} className="w-20 h-14 object-cover rounded-md shrink-0" />
                )}
                <div className="flex-1">
                  <h4 className="font-medium text-sm">
                    <LinkedName name={r.name} url={r.url} />
                  </h4>
                  <p className="text-xs text-stone-500 mt-0.5">{r.draw}</p>
                  {r.caveat && <p className="text-xs text-red-600/80 mt-1 italic">{r.caveat}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scenic */}
        <div>
          <h3 className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-6">Scenic & Local</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {scenicRestaurants.map((r) => (
              <div key={r.name} className="bg-white rounded-lg border border-stone-200 overflow-hidden hover:border-green-300 transition-colors">
                {r.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={r.image} alt={r.name} className="w-full h-28 object-cover" />
                )}
                <div className="p-4">
                  <h4 className="font-medium text-sm mb-1">
                    <LinkedName name={r.name} url={r.url} />
                  </h4>
                  <p className="text-xs text-stone-500 leading-relaxed">{r.setting}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
