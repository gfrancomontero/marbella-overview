export interface Supermarket {
  name: string;
  personality: string;
  url?: string;
}

export interface OrganicShop {
  name: string;
  what: string;
  url?: string;
  image?: string;
}

export interface ShoppingCenter {
  name: string;
  highlights: string;
  url?: string;
}

export interface Spa {
  name: string;
  verdict: string;
  location: string;
  caveat?: string;
  url?: string;
  image?: string;
}

export const supermarkets: Supermarket[] = [
  { name: "Mercadona", personality: "Spain's go-to. Solid quality, good prices.", url: "https://www.mercadona.es/en" },
  { name: "El Corte Inglés", personality: "Premium selection. Higher prices, but you'll find anything.", url: "https://www.elcorteingles.es/" },
  { name: "Lidl", personality: "Budget-friendly European chain.", url: "https://www.lidl.es/" },
  { name: "Aldi", personality: "Budget-friendly, solid basics.", url: "https://www.aldi.es/" },
];

export const organicShops: OrganicShop[] = [
  {
    name: "Veritas",
    what: "The reliable organic chain. Good selection, fair prices.",
    url: "https://veritas.es/",
  },
  {
    name: "Green Village Organic Market",
    what: "Organic supermarket & cafe in Nueva Andalucía. Fresh produce, bulk goods, delivers across the Costa del Sol.",
    url: "https://greenvillagemarket.com/en/home/",
    image: "https://greenvillagemarket.com/wp-content/uploads/2020/02/the-vision.jpg",
  },
  {
    name: "Biomarket Marbella",
    what: "Big bio shop on Ricardo Soriano — 5,000+ organic products.",
    url: "https://www.biomarket.bio/",
    image: "https://marbslifestyle.com/wp-content/uploads/2023/04/Header-organic-320x320.jpg",
  },
  {
    name: "Alicia's Organic Shop",
    what: "Specialist in biological foods and natural supplements. Nueva Andalucía.",
  },
];

export const shoppingCenters: ShoppingCenter[] = [
  { name: "La Cañada", highlights: "Apple Store, most major brands. The default mall.", url: "https://www.lacanada.es/" },
  { name: "El Corte Inglés", highlights: "Spain's iconic department store. Has literally everything.", url: "https://www.elcorteingles.es/" },
];

export const spas: Spa[] = [
  {
    name: "Finca Cortesin",
    verdict: "The nicest option in the area",
    location: "~30 min drive toward Estepona",
    url: "https://www.fincacortesin.com/spa",
  },
  {
    name: "Don Carlos",
    verdict: "V nice, relatively new",
    location: "East Marbella",
    url: "https://doncarlosresort.com/en/wellness-and-spa/",
    image: "https://doncarlosresort.com/data/webp/dcm-water-circuit-couple-163dee47dd239e2adfaf78cbc7b4ce7f-5925d55fc65e2a8f17560edfee681d4b.webp",
  },
  {
    name: "Villapadierna",
    verdict: "Good spa, nice setting, bit of a drive",
    location: "Near Aloha Gardens",
    url: "https://www.anantara.com/en/villa-padierna-marbella/spa-and-wellness",
  },
  {
    name: "Hammam Malaga",
    verdict: "Traditional hammam — worth the 45 min drive",
    location: "Malaga",
    url: "https://malaga.hammamalandalus.com/en/",
    image: "https://malaga.hammamalandalus.com/wp-content/uploads/sites/2/2025/05/AF_AGP_ImagenWeb_CabeceraWeb_1800x1013px_25_05_27.jpg",
  },
];

export const laundry = {
  method: "Housekeeper",
  frequency: "Twice a week",
  cost: "€80 per visit",
  note: "She really is a sweet sweet person. She has been with me for 4 years now and does laundry, ironing, cleaning, etc.",
};
