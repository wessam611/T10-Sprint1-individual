import {Product} from '../Product';
import {products} from '../mock-products';
import { Order} from './Order';
export const orders: Order[]=[
{products: products, shippingAddress:'elrehab', purchaseDate: new Date(), totalPrice: 5},
{products: products, shippingAddress:'giza', purchaseDate: new Date(), totalPrice: 7}
]
