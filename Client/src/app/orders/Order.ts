import {Product} from '../Product';
export class Order {
  products: Product[];
  shippingAddress: string;
  purchaseDate: Date;
  totalPrice: Number;
}
