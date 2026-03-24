export interface ItineraryDay {
  date: string;
  label: string;
  sleeping: string;
  blocks: string[];
}

export const days: ItineraryDay[] = [
  {
    date: "Mar 31",
    label: "Taylor Arrives",
    sleeping: "Downtown apartment",
    blocks: [
      "Aloha Gardens apartment frees up today.",
      "Taylor lands — we crash at the downtown apartment tonight.",
      "Work 3pm–11pm (EST 9–5).",
      "Dinner somewhere downtown — Top Thai or a local spot.",
    ],
  },
  {
    date: "Apr 1",
    label: "Move into Aloha Gardens",
    sleeping: "Aloha Gardens",
    blocks: [
      "Move to Aloha Gardens. Two bedrooms, two baths, 2x indoor parking.",
      "Work 3pm–11pm.",
      "Evening: Dajidalli sushi — non-negotiable.",
    ],
  },
  {
    date: "Apr 2",
    label: "Settle In",
    sleeping: "Aloha Gardens",
    blocks: [
      "Morning gym (I/O or Real Club Padel) + brunch.",
      "Work 3pm–11pm.",
      "Evening: Los Abanicos or Casa Curro for something local.",
    ],
  },
  {
    date: "Apr 3",
    label: "Coffee Hopping",
    sleeping: "Aloha Gardens",
    blocks: [
      "Try Manuka or Dezentral for a morning work session.",
      "Work 3pm–11pm.",
      "Evening: Lobito de Mar or Kala Kalua by the beach.",
    ],
  },
  {
    date: "Apr 4",
    label: "Weekend — Run Club & Hike",
    sleeping: "Aloha Gardens",
    blocks: [
      "Run Club in the morning (if social voltage permits).",
      "La Concha hike — epic views, 4h easy pace.",
      "Evening: Rudi's at Marbella Club for chess & drinks.",
    ],
  },
  {
    date: "Apr 5",
    label: "Beach & Explore",
    sleeping: "Aloha Gardens",
    blocks: [
      "Run Club option (Sat/Sun both available).",
      "Beach or pool day.",
      "Brunch at Breathe or Spisa Market.",
      "Dinner: Cascada — beautiful mountain setting, reserve ahead.",
    ],
  },
  {
    date: "Ongoing",
    label: "Flex Plans",
    sleeping: "Aloha Gardens (unless Lily joins)",
    blocks: [
      "Yours workout class — schedule a session or two.",
      "La Cañada shopping if needed.",
      "Spa day: Finca Cortesin, Villapadierna, or Hammam Malaga.",
      "Cipriani: anthropological field trip to people-watch.",
      "If Lily joins → Gonzalo moves to downtown apt, Lily takes his room.",
      "Tennis: Mutua Madrid Open — end of the month!",
    ],
  },
];

export const groundRules = [
  "Hammam Malaga is worth the drive — 45 min each way.",
  "Work hours: 3pm–11pm local (9am–5pm Eastern).",
  "Housekeeper comes 2x/week, ~€60/visit.",
  "If Lily joins, Gonzalo moves to his other apartment in downtown and she takes his room in Aloha Gardens.",
  "Two indoor parking spots at Aloha Gardens.",
];
