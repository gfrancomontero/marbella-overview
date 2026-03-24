import { supermarkets, organicShops, shoppingCenters, laundry } from "../data/practical";

export default function PracticalSection() {
  return (
    <section id="practical" className="py-20 px-6 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-light tracking-tight mb-12">Practical Stuff</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* Supermarkets */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-4">Supermarkets</h3>
            <ul className="space-y-3">
              {supermarkets.map((s) => (
                <li key={s.name}>
                  <span className="text-sm font-medium">
                    {s.url ? (
                      <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-amber-700 transition-colors">
                        {s.name} ↗
                      </a>
                    ) : s.name}
                  </span>
                  <p className="text-xs text-stone-500">{s.personality}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Organic Shops */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-4">Organic Shops</h3>
            <div className="space-y-4">
              {organicShops.map((s) => (
                <div key={s.name} className="bg-white border border-stone-200 rounded-lg overflow-hidden hover:border-green-300 transition-colors">
                  {s.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={s.image} alt={s.name} className="w-full h-28 object-cover" />
                  )}
                  <div className="p-3">
                    <span className="text-sm font-medium">
                      {s.url ? (
                        <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-green-700 transition-colors">
                          {s.name} ↗
                        </a>
                      ) : s.name}
                    </span>
                    <p className="text-xs text-stone-500 mt-0.5">{s.what}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Shopping */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-4">Shopping</h3>
            <ul className="space-y-3">
              {shoppingCenters.map((s) => (
                <li key={s.name}>
                  <span className="text-sm font-medium">
                    {s.url ? (
                      <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-amber-700 transition-colors">
                        {s.name} ↗
                      </a>
                    ) : s.name}
                  </span>
                  <p className="text-xs text-stone-500">{s.highlights}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Laundry */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-4">Laundry</h3>
            <div className="bg-white rounded-lg p-4 border border-stone-200">
              <p className="text-sm font-medium">{laundry.method}</p>
              <p className="text-xs text-stone-500 mt-1">{laundry.frequency} · {laundry.cost}</p>
              <p className="text-xs text-stone-400 mt-1">{laundry.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
