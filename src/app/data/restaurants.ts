export interface ExperienceRestaurant {
  name: string;
  draw: string;
  caveat?: string;
  lat: number;
  lng: number;
}

export interface FavoriteRestaurant {
  name: string;
  reason: string;
  mustGo: boolean;
  cuisine: string;
  priceRange: string;
  lat: number;
  lng: number;
}

export interface ScenicRestaurant {
  name: string;
  setting: string;
  lat: number;
  lng: number;
}

export const experienceRestaurants: ExperienceRestaurant[] = [
  { name: "Lobito de Mar", draw: "Probably eat here twice a month...Great tuna", lat: 36.5088, lng: -4.885 },
  { name: "Leña", draw: "Imagine STK meatpacking had its shit together", lat: 36.511, lng: -4.8835 },
  {
    name: "El Lago",
    draw: "Surrounded by a golf course, beautiful setting",
    lat: 36.492,
    lng: -4.944,
  },
  { name: "Nota Blu", draw: "Upscale, great ambiance", lat: 36.5072, lng: -4.89 },
  { name: "Alba", draw: "Refined, worth dressing up for", lat: 36.506, lng: -4.886 },
  {
    name: "Cipriani",
    draw: "People watching capital",
    caveat:
      "an evident insult to the one on 59th st but alright pasta",
    lat: 36.5055,
    lng: -4.8925,
  },
  {
    name: "Nobu",
    draw: "Same Cipriani energy",
    caveat: "Not really worth a visit. The bar is fun though.",
    lat: 36.5048,
    lng: -4.8975,
  },
];

export const favoriteRestaurants: FavoriteRestaurant[] = [
  {
    name: "Dajidalli",
    reason: "Taylor loves sushi more than a street cat. Non-negotiable.",
    mustGo: true,
    cuisine: "Japanese / Sushi",
    priceRange: "€€",
    lat: 36.5105,
    lng: -4.8822,
  },
  {
    name: "Magna Cafe",
    reason: "Easy for lunch, right next to home. Great views easy parking.",
    mustGo: true,
    cuisine: "Mediterranean",
    priceRange: "€€",
    lat: 36.5105,
    lng: -4.8822,
  },
  {
    name: "Tuc Tuc",
    reason: "Hehe i love Tuc Tuc",
    mustGo: true,
    cuisine: "Thai",
    priceRange: "€",
    lat: 36.4892,
    lng: -4.953,
  },
  {
    name: "Deluca",
    reason: "My favorite italian and therefore a non-negotiable must-go.",
    mustGo: true,
    cuisine: "Italian",
    priceRange: "€",
    lat: 36.5105,
    lng: -4.8822,
  },
  {
    name: "Top Thai",
    reason: "My go-to. Cheap, so good, next to home. I prob eat here too often.",
    mustGo: true,
    cuisine: "Thai",
    priceRange: "€",
    lat: 36.4892,
    lng: -4.953,
  },
];

export const scenicRestaurants: ScenicRestaurant[] = [
  { name: "Los Abanicos", setting: "Local charm, great traditional food", lat: 36.5115, lng: -4.8805 },
  {
    name: "Cascada",
    setting: "Really beautiful up in the mountain — worth the drive",
    lat: 36.523,
    lng: -4.878,
  },
  {
    name: "La Niña del Pisto",
    setting: "Local gem, traditional Spanish cooking",
    lat: 36.5098,
    lng: -4.8815,
  },
  {
    name: "Casa Curro",
    setting: "Classic Andalusian, authentic as it gets",
    lat: 36.5102,
    lng: -4.88,
  },
  { name: "El Pimpi", setting: "Iconic atmosphere, great vibe", lat: 36.509, lng: -4.8842 },
  {
    name: "Kala Kalua",
    setting: "Finger-food dining right on the beach",
    lat: 36.505,
    lng: -4.891,
  },
];
