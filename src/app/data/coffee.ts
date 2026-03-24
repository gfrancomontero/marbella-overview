export interface CoffeeSpot {
  name: string;
  vibe: string;
  lat: number;
  lng: number;
  nearHome?: boolean;
  personalNote?: string;
}

export interface UpscaleSpot {
  name: string;
  why: string;
  lat: number;
  lng: number;
  laptopFriendly: boolean;
  priceBump: string;
}

export const coffeeSpots: CoffeeSpot[] = [
  { name: "Centro House", vibe: "I've been a member here for like 3 years its an actual coworking space. great decor & mad wifi speed", lat: 36.5101, lng: -4.8866 },
  { name: "Dezentral", vibe: "Focused, minimal, great coffee", lat: 36.5101, lng: -4.8866 },
  { name: "Breathe", vibe: "Calm and airy, solid brunch", lat: 36.5088, lng: -4.895 },
  { name: "Forum", vibe: "Reliable all-rounder", lat: 36.5095, lng: -4.8853 },
  { name: "Spisa Market", vibe: "Market-style, brunch-heavy", lat: 36.489, lng: -4.951 },
  { name: "Pan y Mermelada", vibe: "Bakery-cafe, great pastries", lat: 36.51, lng: -4.883 },
  {
    name: "Manuka",
    vibe: "Every location is amazing & owner is one of my closest friends, expect time it's nice here.",
    lat: 36.5092,
    lng: -4.887,
  },
  { name: "I/O cafe (has a name but i forget)", vibe: "Great coffee, easy to work on your laptop after a workout", lat: 36.5085, lng: -4.8825 },
  { name: "Smallworld Cafe", vibe: "Cute, cozy, good for a session", lat: 36.5085, lng: -4.8825 },
  { name: "Maleva Bakery", vibe: "Solid bakery, good pastries", lat: 36.5078, lng: -4.8812 },
];

export const upscaleSpots: UpscaleSpot[] = [
  {
    name: "Capuccino",
    why: "Beautiful space, still chill enough for a laptop",
    lat: 36.5084,
    lng: -4.8848,
    laptopFriendly: true,
    priceBump: "~25% more than the regular spots",
  },
  {
    name: "Marbella Club Terrace",
    why: "Iconic terrace, work with a view",
    lat: 36.5065,
    lng: -4.8938,
    laptopFriendly: true,
    priceBump: "~25–40% more",
  },
  {
    name: "Forum Terraces",
    why: "Nicer terrace side of Forum",
    lat: 36.5095,
    lng: -4.8855,
    laptopFriendly: true,
    priceBump: "~25% more",
  },
  {
    name: "Nobu Bar",
    why: "Surprisingly productive — the people watching fuels the work",
    lat: 36.5048,
    lng: -4.8975,
    laptopFriendly: true,
    priceBump: "Nobu prices, obviously",
  },
];
