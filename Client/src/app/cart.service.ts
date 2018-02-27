import { Injectable } from '@angular/core';
import { Cart, Product } from './difinitions'
import { PRODUCTS } from './mock-products'; // To Be Removed
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CartService {

  constructor() { }

  // Return Cart
  getCart(): Observable<Cart> {
    return of({products: PRODUCTS, totalPrice: 21});
  }

  // Add Product To The Cart
  addProduct(cart: Cart, tempProduct: Product): void {
    if (!this.exists(cart, tempProduct)) {
      cart.products.push(tempProduct);
      cart.totalPrice += tempProduct.price;
    }
  }

  // Remove Product From The Cart
  removeProduct(cart: Cart, tempProduct: Product): void {
    var tempProducts: Product[] = [];
    for (let tempProduct2 of cart.products) {
      if (tempProduct.id != tempProduct2.id) {
        tempProducts.push(tempProduct2);
      }
    }
    cart.products = tempProducts;
    cart.totalPrice -= tempProduct.price;
  }

  // Clear Cart
  clearCart(cart: Cart): void {
    cart.products = [];
    cart.totalPrice = 0;
  }

  // Check If Product Is In The Cart
  exists(cart: Cart, tempProduct: Product): boolean {
    for (let tempProduct2 of cart.products) {
      if (tempProduct.id == tempProduct2.id) {
        return true;
      }
    }
    return false;
  }

}
