import { bars } from "../data/bars";

export default function BarsSection() {
  return (
    <section id="bars" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-light tracking-tight mb-2">Bars</h2>
        <p className="text-sm text-stone-500 mb-10">After work hours only, obviously.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bars.map((bar) => (
            <div key={bar.name} className="group">
              <div className="h-32 bg-stone-100 rounded-lg mb-4 flex items-end p-4 group-hover:bg-stone-200 transition-colors">
                <h3 className="text-lg font-medium">{bar.name}</h3>
              </div>
              <p className="text-xs text-stone-500 mb-2">{bar.character}</p>
              <p className="text-[10px] text-amber-700 uppercase tracking-wider">
                Best for: {bar.bestFor}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
