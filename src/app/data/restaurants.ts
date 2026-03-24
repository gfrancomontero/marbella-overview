export interface ExperienceRestaurant {
  name: string;
  draw: string;
  caveat?: string;
  lat: number;
  lng: number;
  url?: string;
  image?: string;
}

export interface FavoriteRestaurant {
  name: string;
  reason: string;
  mustGo: boolean;
  cuisine: string;
  priceRange: string;
  lat: number;
  lng: number;
  url?: string;
  image?: string;
}

export interface ScenicRestaurant {
  name: string;
  setting: string;
  lat: number;
  lng: number;
  url?: string;
  image?: string;
}

export const experienceRestaurants: ExperienceRestaurant[] = [
  {
    name: "Lobito de Mar",
    draw: "Probably eat here twice a month. Great tuna.",
    lat: 36.5088,
    lng: -4.885,
    url: "https://lobitorestaurants.com/en/marbella/",
    image: "https://marbslifestyle.com/wp-content/uploads/2023/03/Foto-2-16-1.jpeg",
  },
  {
    name: "Leña",
    draw: "Imagine STK meatpacking had its shit together",
    lat: 36.511,
    lng: -4.8835,
    url: "https://lenarestaurants.com/en/marbella/",
    image: "https://marbslifestyle.com/wp-content/uploads/2023/03/Header-18.jpeg",
  },
  {
    name: "El Lago",
    draw: "Surrounded by a golf course, beautiful setting",
    lat: 36.492,
    lng: -4.944,
    url: "https://restauranteellago.com/",
  },
  {
    name: "Nota Blu",
    draw: "Upscale, great ambiance",
    lat: 36.5072,
    lng: -4.89,
    url: "https://notablu.com/",
    image: "https://vacationmarbella.com/wp-content/uploads/2023/04/notablu-destacada.jpg",
  },
  {
    name: "Alba",
    draw: "Refined, worth dressing up for",
    lat: 36.506,
    lng: -4.886,
    url: "https://www.albarestaurantmarbella.com/",
    image: "https://static.wixstatic.com/media/e82fdb_a8110b60a44045e987134981cbbbd30a~mv2.jpeg/v1/fill/w_1036,h_630,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PEDROJAEN_L1170702_1920x1166.jpeg",
  },
  {
    name: "Cipriani",
    draw: "People watching capital",
    caveat: "An evident insult to the one on 59th St but alright pasta.",
    lat: 36.5055,
    lng: -4.8925,
    url: "https://www.cipriani.com/cipriani-marbella",
    image: "https://marbslifestyle.com/wp-content/uploads/2023/04/Header-33.jpeg",
  },
  {
    name: "Nobu",
    draw: "Same Cipriani energy",
    caveat: "Not really worth a visit. The bar is fun though.",
    lat: 36.5048,
    lng: -4.8975,
    url: "https://noburestaurants.com/marbella/home",
    image: "https://www.nobuhotels.com/marbella/content/uploads/2024/09/nobu-restaurant.jpg",
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
    reason: "Easy for lunch, right next to home. Great views, easy parking.",
    mustGo: true,
    cuisine: "Mediterranean",
    priceRange: "€€",
    lat: 36.5105,
    lng: -4.8822,
    url: "https://www.magnacafe.es/en/",
  },
  {
    name: "Tuc Tuc",
    reason: "Hehe I love Tuc Tuc",
    mustGo: true,
    cuisine: "Thai",
    priceRange: "€",
    lat: 36.4892,
    lng: -4.953,
    url: "https://tuktukmarbella.com/",
    image: "https://tuktukmarbella.com/wp-content/uploads/2023/05/TAV9718.jpg",
  },
  {
    name: "Deluca",
    reason: "My favorite Italian and therefore a non-negotiable must-go.",
    mustGo: true,
    cuisine: "Italian",
    priceRange: "€€",
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
    url: "https://topthai.es/",
    image: "https://topthai.es/wp-content/uploads/2021/08/IMG_0055-scaled.jpg",
  },
];

export const scenicRestaurants: ScenicRestaurant[] = [
  {
    name: "Los Abanicos",
    setting: "Local charm, great traditional food",
    lat: 36.5115,
    lng: -4.8805,
    url: "https://www.facebook.com/RestauranteLosAbanicos/",
    image: "https://marbslifestyle.com/wp-content/uploads/2023/04/Header-24-320x320.jpeg",
  },
  {
    name: "Cascada",
    setting: "Really beautiful up in the mountain — worth the drive",
    lat: 36.523,
    lng: -4.878,
    url: "https://cascadamarbella.com",
  },
  {
    name: "La Niña del Pisto",
    setting: "Local gem, traditional Spanish cooking",
    lat: 36.5098,
    lng: -4.8815,
    url: "https://restaurante.covermanager.com/la-nina-del-pisto/",
    image: "https://marbslifestyle.com/wp-content/uploads/2023/05/header-31-450x400-1-320x320.jpg",
  },
  {
    name: "Casa Curro",
    setting: "Classic Andalusian, authentic as it gets",
    lat: 36.5102,
    lng: -4.88,
    url: "https://grupocasacurro.com",
  },
  {
    name: "El Pimpi",
    setting: "Iconic atmosphere, great vibe",
    lat: 36.509,
    lng: -4.8842,
    url: "https://www.elpimpi.com/en/",
    image: "https://marbslifestyle.com/wp-content/uploads/2023/04/Header-30-320x320.jpeg",
  },
  {
    name: "Kala Kalua",
    setting: "Finger-food dining right on the beach",
    lat: 36.505,
    lng: -4.891,
    url: "https://kalakalua.com/es",
    image: "https://marbslifestyle.com/wp-content/uploads/2023/07/Header-4.jpeg",
  },
];
