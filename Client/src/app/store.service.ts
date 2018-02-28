import { Injectable } from '@angular/core';
import { Product } from './difinitions';
import { PRODUCTS } from './mock-products';

@Injectable()
export class StoreService {

  constructor() { }

  getProducts(): Product[] {
    return PRODUCTS;
  }

}
