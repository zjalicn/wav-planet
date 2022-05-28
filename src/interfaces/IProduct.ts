export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  onSale: boolean;
  salePrice: number;
  categories: string[];
  imageSrc: string;
}
