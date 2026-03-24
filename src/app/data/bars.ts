export interface Bar {
  name: string;
  character: string;
  bestFor: string;
  lat: number;
  lng: number;
  url?: string;
  image?: string;
}

export const bars: Bar[] = [
  {
    name: "Rudi's",
    character: "Inside the Marbella Club. Dimly lit, classy.",
    bestFor: "Chess and good drinks",
    lat: 36.5065,
    lng: -4.894,
    url: "https://www.marbellaclub.com/eat-and-drink/rudi-s",
    image: "https://image-tc.galaxy.tf/wijpeg-at9gv3eo9ao60722h1gb6yiro/mch-marzo-20-9581-a1-opt_standard.jpg",
  },
  {
    name: "Clubhouse",
    character: "Sports bar in Nueva Andalucía. Not a US dive bar — much more chill and inclusive.",
    bestFor: "Watching a game without the frat energy",
    lat: 36.4905,
    lng: -4.9475,
    url: "https://clubhousemarbella.com/",
    image: "https://marbslifestyle.com/wp-content/uploads/2023/05/Header-6-320x320.jpg",
  },
  {
    name: "Livingroom",
    character: "A bit rowdy but not bad.",
    bestFor: "A casual beer when you don't want to think about it",
    lat: 36.508,
    lng: -4.886,
    url: "https://www.facebook.com/livingroomspain/",
  },
];
