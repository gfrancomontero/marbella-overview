export interface CoffeeSpot {
  name: string;
  vibe: string;
  lat: number;
  lng: number;
  nearHome?: boolean;
  personalNote?: string;
  url?: string;
  image?: string;
}

export interface UpscaleSpot {
  name: string;
  why: string;
  lat: number;
  lng: number;
  laptopFriendly: boolean;
  priceBump: string;
  url?: string;
  image?: string;
}

export const coffeeSpots: CoffeeSpot[] = [
  {
    name: "Centro House",
    vibe: "I've been a member here for like 3 years. Actual coworking space, great decor & mad wifi speed.",
    lat: 36.5101,
    lng: -4.8866,
    url: "https://centro.house/",
  },
  {
    name: "Dezentral",
    vibe: "Focused, minimal, great coffee",
    lat: 36.5101,
    lng: -4.8866,
    url: "https://www.dezentral-marbella.com/",
    image: "https://vacationmarbella.com/wp-content/uploads/2019/09/dezentral-10-scaled.jpg",
  },
  {
    name: "Breathe",
    vibe: "Calm and airy, solid brunch",
    lat: 36.5088,
    lng: -4.895,
    url: "https://www.breathe.life/",
  },
  {
    name: "Forum",
    vibe: "Reliable all-rounder",
    lat: 36.5095,
    lng: -4.8853,
    url: "https://www.forum.es/en",
    image: "https://framerusercontent.com/images/agVEruDnMSXLzfIHk3ItCIgi4s.jpg",
  },
  {
    name: "Spisa Market",
    vibe: "Market-style, brunch-heavy",
    lat: 36.489,
    lng: -4.951,
    url: "https://spisa.shop/",
  },
  {
    name: "VIP Gourmet",
    vibe: "Literally next door to the apartment",
    lat: 36.488,
    lng: -4.956,
    nearHome: true,
    url: "https://www.instagram.com/cafegourmetvip/",
  },
  {
    name: "Pan y Mermelada",
    vibe: "Bakery-cafe, great pastries",
    lat: 36.51,
    lng: -4.883,
    url: "https://www.panymermelada.com/",
    image: "https://www.panymermelada.com/wp-content/uploads/2022/02/panym_1_result.jpg",
  },
  {
    name: "Manuka",
    vibe: "Every location is amazing & owner is one of my closest friends — expect to get along with him.",
    lat: 36.5092,
    lng: -4.887,
    url: "https://manukamarbella.com/en/",
    image: "https://manukamarbella.com/wp-content/uploads/2024/01/sana-local-sostenible-home.jpg",
  },
  {
    name: "I/O Cafe",
    vibe: "Great coffee, easy to work on your laptop after a workout",
    lat: 36.5085,
    lng: -4.8825,
  },
  {
    name: "Smallworld Cafe",
    vibe: "Cute, cozy, good for a session",
    lat: 36.5085,
    lng: -4.8825,
    url: "https://www.smallworldcafe.com/",
  },
  {
    name: "Maleva Bakery",
    vibe: "Solid bakery, good pastries",
    lat: 36.5078,
    lng: -4.8812,
    url: "https://www.facebook.com/malevabakery/",
    image: "https://marbslifestyle.com/wp-content/uploads/2023/04/Header-Maleva-Bakery-320x320.jpeg",
  },
];

export const upscaleSpots: UpscaleSpot[] = [
  {
    name: "Capuccino",
    why: "Beautiful space, still chill enough for a laptop",
    lat: 36.5084,
    lng: -4.8848,
    laptopFriendly: true,
    priceBump: "~25% more than the regular spots",
    url: "https://www.cappuccinograndcafe.es/en/marbella",
    image: "https://vacationmarbella.com/wp-content/uploads/2019/09/cappuccino-marbella-07.jpeg",
  },
  {
    name: "Marbella Club Terrace",
    why: "Iconic terrace, work with a view",
    lat: 36.5065,
    lng: -4.8938,
    laptopFriendly: true,
    priceBump: "~25–40% more",
    url: "https://www.marbellaclub.com/",
    image: "https://image-tc.galaxy.tf/wijpeg-7sfc6w5kw1si2i3bw8zq0doo6/mch-mar-2018347-a1-opt-wide.jpg",
  },
  {
    name: "Forum Terraces",
    why: "Nicer terrace side of Forum",
    lat: 36.5095,
    lng: -4.8855,
    laptopFriendly: true,
    priceBump: "~25% more",
    url: "https://www.forum.es/en",
    image: "https://framerusercontent.com/images/agVEruDnMSXLzfIHk3ItCIgi4s.jpg",
  },
  {
    name: "Nobu Bar",
    why: "Surprisingly productive — the people watching fuels the work",
    lat: 36.5048,
    lng: -4.8975,
    laptopFriendly: true,
    priceBump: "Nobu prices, obviously",
    url: "https://noburestaurants.com/marbella/home",
    image: "https://www.nobuhotels.com/marbella/content/uploads/2024/09/nobu-restaurant.jpg",
  },
];
