export interface Bar {
  name: string;
  character: string;
  bestFor: string;
  lat: number;
  lng: number;
}

export const bars: Bar[] = [
  {
    name: "Rudi's",
    character: "Inside the Marbella Club. Dimly lit, classy.",
    bestFor: "Chess and good drinks",
    lat: 36.5065,
    lng: -4.894,
  },
  {
    name: "Clubhouse",
    character: "Sports bar in Nueva Andalucía. Not a US dive bar — much more chill and inclusive.",
    bestFor: "Watching a game without the frat energy",
    lat: 36.4905,
    lng: -4.9475,
  },
  {
    name: "Livingroom",
    character: "A bit rowdy but not bad.",
    bestFor: "A casual beer when you don't want to think about it",
    lat: 36.508,
    lng: -4.886,
  },
];
