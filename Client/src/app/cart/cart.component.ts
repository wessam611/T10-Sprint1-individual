import { Component, OnInit } from '@angular/core';
import { Cart, Product } from '../definitions';
import { CartService } from '../cart.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { OrderService } from '../orders/order.service';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Cart;
  shippingAddress: string = null;
  showModal: string = 'none';
  hb: any;


  constructor(private cartService: CartService, private userService: UserService, private orderService: OrderService, private router: Router, private themeService: NbThemeService) {
    this.cart = {
      products: [],
      totalPrice: 0
    };
    this.themeService.getJsTheme().subscribe(theme => {
      var colors = theme.variables;
      this.hb = {
        class: 'btn-hero-success',
        default: {
          gradientLeft: `adjust-hue(${colors.success}, 20deg)`,
          gradientRight: colors.success,
        },
        cosmic: {
          gradientLeft: `adjust-hue(${colors.success}, 20deg)`,
          gradientRight: colors.success,
          bevel: `shade(${colors.success}, 14%)`,
          shadow: 'rgba (33, 7, 77, 0.5)',
          glow: `adjust-hue(${colors.success}, 10deg)`,
        }
      }
    });
  }

  ngOnInit() {
    var user = this.userService.getUser()
    if (user)
      this.cartService.getCart().subscribe(res => this.cart = res.data);
    else
      this.cart = this.cartService.getCartFromLocalStorage();
  }

  getCart(): void {
    this.cartService.getCart().subscribe(cart => this.cart = cart);

  }

  checkout(): void {
    if (this.userService.getUser() === null) {
      this.router.navigate(['dashboard/auth/login']);
    }
    else {
      this.showModal = 'block';
    }
  }
  postOrders(): void {
    this.orderService.postOrders(this.shippingAddress).subscribe(function (res) {
      if (res.msg === 'Orders') {
        alert(`Your order is on its way!`);
      }
      console.log(res.msg);
    });
    this.showModal = 'none';
    this.router.navigate(['dashboard/orders']);
  }

  closeModal(): void {
    this.showModal = 'none';
  }
}
