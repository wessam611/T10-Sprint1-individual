import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { orders } from './mock-orders';
import {Order} from './Order';
import {Product} from '../Product';
import {products} from '../mock-products';
@Injectable()
export class OrderService {
  getOrders(): Observable<Order[]> {
  return of(orders);
}
  constructor() { }
}
