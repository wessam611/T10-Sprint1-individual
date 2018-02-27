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
    // this.getCart();
  }

  // Get Cart From The Service
  getCart(): void {
    this.cartService.getCart().subscribe(cart => this.cart = cart);
  }

}
