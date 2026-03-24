"use client";

const links = [
  { label: "Coffee", href: "#coffee" },
  { label: "Restaurants", href: "#restaurants" },
  { label: "Bars", href: "#bars" },
  { label: "Fitness", href: "#fitness" },
  { label: "Spas", href: "#spas" },
  { label: "Practical", href: "#practical" },
  { label: "Itinerary", href: "#itinerary" },
  { label: "The Apartment", href: "#photos" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 flex items-center gap-6 overflow-x-auto py-3">
        <span className="font-semibold text-sm tracking-tight text-stone-900 shrink-0">
          MRB
        </span>
        <div className="flex gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs text-stone-500 hover:text-stone-900 transition-colors whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
