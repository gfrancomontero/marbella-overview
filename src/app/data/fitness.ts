export interface Gym {
  name: string;
  type: "gym" | "classes";
  honest_take: string;
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
    honest_take:
      "Decent clean nice & missing a sauna because you know who likes saunas",
    lat: 36.4895,
    lng: -4.949,
  },
  {
    name: "Real Club Padel",
    type: "gym",
    honest_take:
      "Bigger than I/O, has a small sauna, its a bit rougher/busy but still think its worth considering great outdoors",
    lat: 36.4888,
    lng: -4.952,
  },
  {
    name: "Yours",
    type: "classes",
    honest_take:
      "Not a regular gym more of a Barry's style workout spot. Good to hit up for a class every now and then.",
    lat: 36.49,
    lng: -4.946,
  },
];

export const runClub: RunClub = {
  days: ["Saturday", "Sunday"],
  description:
    "Really good run club. The route is always epic and there are some decent runners.",
  socialNote:
    "Sometimes I join, sometimes I don't — depends on social voltage. It becomes too 'see and be seen' so depends on the day.",
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
