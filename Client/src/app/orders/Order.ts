import {Product} from '../Product';
export class Order {
  products: Product[];
  address: string;
  time: string;
  userId: Number;
  totalPrice: Number;
}
