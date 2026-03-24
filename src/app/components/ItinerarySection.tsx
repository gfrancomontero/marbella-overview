import { days, groundRules } from "../data/itinerary";

export default function ItinerarySection() {
  return (
    <section id="itinerary" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-light tracking-tight mb-2">Itinerary</h2>
        <p className="text-sm text-stone-500 mb-12">Tentative. Subject to vibes.</p>

        {/* Ground Rules */}
        <div className="bg-stone-900 text-white rounded-xl p-6 mb-12">
          <h3 className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-4">
            Misc
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            {groundRules.map((rule, i) => (
              <p key={i} className="text-xs text-stone-300 flex gap-2">
                <span className="text-amber-400">—</span>
                {rule}
              </p>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[39px] top-2 bottom-2 w-px bg-stone-200 hidden md:block" />

          <div className="space-y-6">
            {days.map((day) => (
              <div key={day.date} className="flex gap-6 group">
                {/* Date badge */}
                <div className="shrink-0 w-20 pt-1 hidden md:block">
                  <div className="bg-white border border-stone-200 rounded-lg px-2 py-1.5 text-center group-hover:border-amber-300 transition-colors relative z-10">
                    <p className="text-xs font-medium text-stone-900">{day.date}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white border border-stone-200 rounded-lg p-5 group-hover:border-amber-300 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-xs text-stone-400 md:hidden mb-0.5">{day.date}</p>
                      <h4 className="font-medium text-sm">{day.label}</h4>
                    </div>
                    <span className="text-[10px] text-stone-400 bg-stone-50 px-2 py-0.5 rounded-full shrink-0">
                      {day.sleeping}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {day.blocks.map((block, j) => (
                      <li key={j} className="text-xs text-stone-500 flex gap-2">
                        <span className="text-stone-300">·</span>
                        {block}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
