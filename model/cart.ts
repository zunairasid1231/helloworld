import { Product } from './product';

export interface Cart {
  id: number;
  userId: string;
  products: Product[];
  subTotal: number;
  quantity: number;
  createdAt: number;
  updatedAt: number;
}
