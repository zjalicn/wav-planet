export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  onSale: boolean;
  salePrice: number;
  categories: string[];
  imageSrc: string;
}
