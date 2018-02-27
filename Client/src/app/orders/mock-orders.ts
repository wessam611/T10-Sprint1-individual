import {Product} from '../Product';
import {products} from '../mock-products';
import { Order} from './Order';
export const orders: Order[]=[
{products: products, address:'elrehab', time: '2017-07-08', userId: 1, totalPrice: 5},
{products: products, address:'giza', time: '2018-01-08', userId:1, totalPrice: 7}
]
