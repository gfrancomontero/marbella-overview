export interface Gym {
  name: string;
  type: "gym" | "classes";
  honest_take: string;
  url?: string;
  image?: string;
  lat: number;
  lng: number;
}

export interface TennisClub {
  name: string;
  sport: "tennis" | "padel" | "both";
  note: string;
  courts?: number;
  url?: string;
  image?: string;
  lat: number;
  lng: number;
}

export interface RunClub {
  days: string[];
  description: string;
  socialNote: string;
  lat: number;
  lng: number;
}

export interface Hike {
  name: string;
  duration: string;
  difficulty: string;
  why: string;
  lat: number;
  lng: number;
}

export const gyms: Gym[] = [
  {
    name: "I/O Gym",
    type: "gym",
    honest_take: "Decent, clean, nice — missing a sauna because you know who likes saunas.",
    url: "https://www.theio.com/",
    lat: 36.4895,
    lng: -4.949,
  },
  {
    name: "Real Club Padel",
    type: "gym",
    honest_take: "Bigger than I/O, has a small sauna, a bit rougher/busier but great outdoors.",
    url: "https://realclubpadelmarbella.com/",
    image: "https://realclubpadelmarbella.com/wp-content/uploads/2025/06/REAL-CLUB-PADEL-MARBELLA-GYM-GALLERY-4.jpg",
    lat: 36.4888,
    lng: -4.952,
  },
  {
    name: "Yours",
    type: "classes",
    honest_take: "Not a regular gym — more of a Barry's-style workout spot. Good to hit up for a class every now and then.",
    url: "https://yours.space/",
    lat: 36.49,
    lng: -4.946,
  },
];

export const tennisPadelClubs: TennisClub[] = [
  {
    name: "Puente Romano Tennis Club",
    sport: "tennis",
    note: "The reference for tennis on the Costa del Sol. Proper clay courts, great academy, hosts ATP events. Inside one of the nicest hotels in Marbella.",
    courts: 10,
    url: "https://tenis.puenteromano.com/",
    image: "https://tenis.puenteromano.com/wp-content/uploads/Junior-training-academy-scaled.jpg",
    lat: 36.507,
    lng: -4.893,
  },
  {
    name: "Manolo Santana Rackets Club",
    sport: "tennis",
    note: "Named after Spain's greatest tennis player. High-level club with clay courts in a beautiful setting.",
    courts: 8,
    url: "https://manolosantana.es/en/home/",
    image: "https://manolosantana.es/NEW2/PISCINA.jpg",
    lat: 36.508,
    lng: -4.9,
  },
  {
    name: "El Rosario Tennis Club",
    sport: "tennis",
    note: "Low-key, local, less pretentious than Puente Romano. Good courts, relaxed crowd.",
    url: "https://royaltennisclub.com/",
    image: "https://royaltennisclub.com/wp-content/uploads/2017/07/mainpic05.jpg",
    lat: 36.52,
    lng: -4.86,
  },
  {
    name: "Tennis Brothers",
    sport: "tennis",
    note: "Coaching-focused — great for getting back into match shape or shaking off rust.",
    url: "https://tennisbrothersmarbella.com/",
    lat: 36.491,
    lng: -4.948,
  },
  {
    name: "Los Naranjos Padel Club",
    sport: "padel",
    note: "One of the best padel facilities in the area. Multiple outdoor courts, good competitive level.",
    courts: 12,
    url: "https://losnaranjospadel.com/en/",
    image: "https://losnaranjospadel.com/wp-content/uploads/2023/04/Proyecto-nuevo.webp",
    lat: 36.493,
    lng: -4.945,
  },
  {
    name: "NAC Padel",
    sport: "padel",
    note: "Right at I/O gym. Convenient if you're already training there — just step outside.",
    url: "https://nuevaalcantaraclub.com/en/",
    lat: 36.4895,
    lng: -4.949,
  },
];

export const runClub: RunClub = {
  days: ["Saturday", "Sunday"],
  description: "Really good run club. The route is always epic and there are some decent runners.",
  socialNote: "Sometimes I join, sometimes I don't — depends on social voltage. It becomes too 'see and be seen' so depends on the day.",
  lat: 36.49,
  lng: -4.95,
};

export const hikes: Hike[] = [
  {
    name: "La Concha",
    duration: "~4 hours (going slow)",
    difficulty: "Easy-moderate",
    why: "Pretty epic. Great views of the coast. One of the best things to do here.",
    lat: 36.528,
    lng: -4.915,
  },
];
