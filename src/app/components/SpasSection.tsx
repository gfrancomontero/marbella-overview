import { spas } from "../data/practical";

export default function SpasSection() {
  return (
    <section id="spas" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-light tracking-tight mb-2">Spas</h2>
        <p className="text-sm text-stone-500 mb-10">
          Nothing compared to the global epicness we're used to but still
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {spas.map((spa) => (
            <div
              key={spa.name}
              className="flex items-start gap-4 border border-stone-200 rounded-lg p-5 hover:border-teal-300 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center shrink-0 text-teal-600 text-xs font-medium">
                {spa.name[0]}
              </div>
              <div>
                <h4 className="font-medium text-sm">{spa.name}</h4>
                <p className="text-xs text-stone-500 mt-0.5">{spa.verdict}</p>
                <p className="text-[10px] text-stone-400 mt-1">{spa.location}</p>
                {spa.caveat && (
                  <p className="text-[10px] text-amber-600 mt-1 italic">{spa.caveat}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
