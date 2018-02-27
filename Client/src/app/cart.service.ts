import { Injectable } from '@angular/core';
import { Cart, Product } from './difinitions'
import { PRODUCTS } from './mock-products'; // To Be Removed
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class CartService {

  private cartUrl = ''; //To Be Modified
  private httpOptions = {
    headers: new HttpHeaders({})
  };

  constructor(private http: HttpClient) { }

  // Return Cart
  getCart(): Observable<Cart> {
    this.http.get<Cart>(this.cartUrl); // To Be Returned
    return of({products: [], totalPrice: 0}); // To Be Removed
  }

  // Update Cart
  updateCart(cart: Cart): Observable<any> {
    return this.http.put(this.cartUrl, cart, /* Http Options */)
  }

  // Add Cart If No Cart Is On The Server
  addCart(cart: Cart): Observable<any> {
    return this.http.post(this.cartUrl, cart, /* Http Options */)
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
