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
  updateCart(tempCart: Cart): Observable<any> {
    return this.http.put(this.cartUrl, tempCart, /* Http Options */)
  }

  // Add Cart If No Cart Is On The Server
  addCart(tempCart: Cart): Observable<any> {
    return this.http.post(this.cartUrl, tempCart, /* Http Options */)
  }

  // Add Product To The Cart
  addProduct(tempCart: Cart, tempProduct: Product): void {
    if (!this.exists(tempCart, tempProduct)) {
      tempCart.products.push(tempProduct);
      tempCart.totalPrice += tempProduct.price;
      this.setCartToLocalStorage(tempCart);
    }
  }

  // Remove Product From The Cart
  removeProduct(tempCart: Cart, tempProduct: Product): void {
    var tempProducts: Product[] = [];
    for (let tempProduct2 of tempCart.products) {
      if (tempProduct.id != tempProduct2.id) {
        tempProducts.push(tempProduct2);
      }
    }
    tempCart.products = tempProducts;
    tempCart.totalPrice -= tempProduct.price;
    this.setCartToLocalStorage(tempCart);
  }

  // Clear Cart
  clearCart(tempCart: Cart): void {
    tempCart.products = [];
    tempCart.totalPrice = 0;
    this.clearLocalStorage();
  }

  // Check If Product Is In The Cart
  exists(tempCart: Cart, tempProduct: Product): boolean {
    for (let tempProduct2 of tempCart.products) {
      if (tempProduct.id == tempProduct2.id) {
        return true;
      }
    }
    return false;
  }

  // Get Cart From Local Storage
  getCartFromLocalStorage(): Cart {
    return JSON.parse(localStorage.getItem("cart_t10_sprint1"));
  }

  // Save Cart To Local Storage
  setCartToLocalStorage(tempCart: Cart): void {
    localStorage.setItem("cart_t10_sprint1", JSON.stringify(tempCart));
  }

  // Clear Local Storage
  clearLocalStorage(): void {
    localStorage.clear();
  }

}
