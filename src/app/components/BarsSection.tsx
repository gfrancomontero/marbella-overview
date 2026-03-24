import { bars } from "../data/bars";

export default function BarsSection() {
  return (
    <section id="bars" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-light tracking-tight mb-2">Bars</h2>
        <p className="text-sm text-stone-500 mb-10">After work hours only, obviously.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bars.map((bar) => (
            <div key={bar.name} className="group rounded-lg border border-stone-200 overflow-hidden hover:border-stone-400 transition-colors">
              {bar.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={bar.image} alt={bar.name} className="w-full h-36 object-cover" />
              ) : (
                <div className="h-36 bg-stone-100 group-hover:bg-stone-200 transition-colors" />
              )}
              <div className="p-4">
                <h3 className="text-base font-medium mb-1">
                  {bar.url ? (
                    <a href={bar.url} target="_blank" rel="noopener noreferrer" className="hover:text-amber-700 transition-colors">
                      {bar.name} ↗
                    </a>
                  ) : bar.name}
                </h3>
                <p className="text-xs text-stone-500 mb-2">{bar.character}</p>
                <p className="text-[10px] text-amber-700 uppercase tracking-wider">Best for: {bar.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
