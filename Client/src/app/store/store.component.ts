import { Component, OnInit } from '@angular/core';

import { Cart, Product } from '../definitions';
import { StoreService } from '../store.service';
import { CartService } from '../cart.service';
import { CartComponent } from '../cart/cart.component'
import { UserService } from '../user.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  cart: Cart;
  products: Product[];

  constructor(private storeService: StoreService, private cartService: CartService, private userService: UserService) { }

  ngOnInit() {
    this.getProducts();
    this.getCart();
  }

  getProducts(): void {
    this.products = this.storeService.getProducts();
  }

  getCart(): void {
    var user = this.userService.getUser();
    if (user)
      this.cartService.getCart().subscribe(res => this.cart = res.data);
    else
      this.cart = this.cartService.getCartFromLocalStorage();
  }

}
