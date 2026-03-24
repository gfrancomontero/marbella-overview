import { gyms, runClub, hikes } from "../data/fitness";

export default function FitnessSection() {
  return (
    <section id="fitness" className="py-20 px-6 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-light tracking-tight mb-12">Fitness & Outdoors</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Gyms */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-6">Gyms</h3>
            <div className="space-y-4">
              {gyms.map((g) => (
                <div key={g.name} className="bg-white rounded-lg p-5 border border-stone-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm">{g.name}</h4>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 text-stone-500">
                      {g.type}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed">{g.honest_take}</p>
                </div>
              ))}
              <p className="text-[10px] text-stone-400 italic mt-2">
                Realistically it&apos;s just I/O and Real Club Padel. Those are the two options.
              </p>
            </div>
          </div>

          {/* Run Club + Hiking */}
          <div className="space-y-10">
            {/* Run Club */}
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-6">
                Run Club
              </h3>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
                <div className="flex gap-2 mb-3">
                  {runClub.days.map((d) => (
                    <span
                      key={d}
                      className="text-[10px] font-medium uppercase tracking-wider bg-amber-200/50 px-2 py-0.5 rounded"
                    >
                      {d}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-stone-700 leading-relaxed mb-2">
                  {runClub.description}
                </p>
                <p className="text-xs text-stone-500 italic">{runClub.socialNote}</p>
              </div>
            </div>

            {/* Hiking */}
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-6">
                Hiking
              </h3>
              {hikes.map((h) => (
                <div
                  key={h.name}
                  className="bg-green-50 border border-green-200 rounded-lg p-5"
                >
                  <h4 className="text-lg font-medium text-green-900 mb-2">{h.name}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">{h.why}</p>
                  <div className="flex gap-4 text-[10px] text-stone-500">
                    <span>{h.duration}</span>
                    <span>{h.difficulty}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
