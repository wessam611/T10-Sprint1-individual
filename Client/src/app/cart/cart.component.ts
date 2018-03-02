import { Component, OnInit } from '@angular/core';

import { Cart, Product } from '../difinitions';
import { CartService } from '../cart.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Cart;

  constructor(private cartService: CartService, private userService: UserService) {
    this.cart = {
      products: [],
      totalPrice: 0
    }
  }

  ngOnInit() {
    var user = this.userService.getUser()
    if (user)
      this.cartService.getCart().subscribe(res => this.cart = res.data);
    else
      this.cart = this.cartService.getCartFromLocalStorage();
  }

}
