import { Component, OnInit } from '@angular/core';
import { Cart, Product } from '../difinitions';
import { CartService } from '../cart.service';
<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {UserService} from '../user.service';
import { Router } from '@angular/router';
import {OrderService} from '../orders/order.service';
=======
import { UserService } from '../user.service';


>>>>>>> 4c18119d64550ff6cb2c9c191012e471472146d3
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Cart;
<<<<<<< HEAD
  shippingAddress :string = null;
  showModal: string = 'none';
  constructor(private cartService: CartService, private orderService:OrderService,private userService:UserService,private router: Router) { }
  ngOnInit() {
    this.cart = this.cartService.getCartFromLocalStorage();
    // this.getCart(id);
  }

  getCart(id: number): void {
    this.cartService.getCart(id).subscribe(cart => this.cart = cart);
=======

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
>>>>>>> 4c18119d64550ff6cb2c9c191012e471472146d3
  }

  checkout():void{
    if(this.userService.getUser()===null){
      this.router.navigate(['auth/login']);
    }
    else{
      this.showModal ='block';
    }
  }
  postOrders(): void {
    this.orderService.postOrders(this.shippingAddress).subscribe(function (res) {
      if (res.msg === 'orders') {
        alert(`Your order is on its way!`);
      }
    });
    this.showModal = 'none';
  }

  closeModal():void{
    this.showModal = 'none';
  }
}
