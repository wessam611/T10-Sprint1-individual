import { Component, OnInit } from '@angular/core';

import { Cart, Product } from '../difinitions';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Cart;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCartFromLocalStorage();
    // this.getCart(id);
  }

  // Get Cart From The Service
  getCart(id: number): void {
    this.cartService.getCart(id).subscribe(cart => this.cart = cart);
  }

}
