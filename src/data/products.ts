export type Category = {
  slug: string;
  name: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
};

export const categories: Category[] = [
  { slug: "Matur", name: "Matur" },
  { slug: "Drykkur", name: "Drykkir" },
];

export const products: Product[] = [
  { id: 1, name: "Ostaslaufa", price: 899, category: "Matur" },
  { id: 2, name: "Monster", price: 299, category: "Drykkur" },
  { id: 3, name: "Kleinuhringur", price: 999, category: "Matur" },
  { id: 4, name: "Kaffi úr vél", price: 199, category: "Drykkur" },
  { id: 5, name: "Kleina", price: 399, category: "Matur" },
  { id: 6, name: "Heitt kakó", price: 299, category: "Drykkur" },
];
