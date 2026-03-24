export interface Supermarket {
  name: string;
  personality: string;
}

export interface OrganicShop {
  name: string;
  what: string;
}

export interface ShoppingCenter {
  name: string;
  highlights: string;
}

export interface Spa {
  name: string;
  verdict: string;
  location: string;
  caveat?: string;
}

export const supermarkets: Supermarket[] = [
  { name: "Mercadona", personality: "Spain's go-to. Solid quality, good prices." },
  { name: "El Corte Inglés", personality: "Premium selection. Higher prices, but you'll find anything." },
  { name: "Lidl", personality: "Budget-friendly European chain." },
  { name: "Aldi", personality: "Budget-friendly, solid basics." },
];

export const organicShops: OrganicShop[] = [
  { name: "Veritas", what: "The reliable organic chain. Good selection, fair prices." },
  { name: "Green Village Organic Market", what: "Organic supermarket & cafe in Nueva Andalucía. Fresh produce, bulk goods, delivers across the Costa del Sol." },
  { name: "Biomarket Marbella", what: "Big bio shop on Ricardo Soriano — 5,000+ organic products." },
  { name: "Alicia's Organic Shop", what: "Specialist in biological foods and natural supplements. Nueva Andalucía." },
];

export const shoppingCenters: ShoppingCenter[] = [
  { name: "La Cañada", highlights: "Apple Store, most major brands. The default mall." },
  { name: "El Corte Inglés", highlights: "Spain's iconic department store. Has literally everything." },
];

export const spas: Spa[] = [
  {
    name: "Finca Cortesin",
    verdict: "The nicest option in the area",
    location: "~30 min drive toward Estepona",
  },
  {
    name: "Don Carlos",
    verdict: "V nice relatively new",
    location: "East Marbella",
  },
  {
    name: "Villapadierna",
    verdict: "Good spa, nice setting, bit of a drive",
    location: "Near Aloha Gardens",
  },
  {
    name: "Hammam Malaga",
    verdict: "Traditional hammam — worth the 45 min drive",
    location: "Malaga",
  },
];

export const laundry = {
  method: "Housekeeper",
  frequency: "Twice a week",
  cost: "€80 per visit",
  note: "She really is a sweet sweet person. She has been with me for 4 years now and does laundry, ironing, cleaning, etc.",
};
