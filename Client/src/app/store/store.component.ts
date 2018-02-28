import { Component, OnInit } from '@angular/core';

import { Cart, Product } from '../difinitions';
import { StoreService } from '../store.service';
import { CartService } from '../cart.service';
import { CartComponent } from '../cart/cart.component'

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  products: Product[];

  constructor(private storeService: StoreService, private cartService: CartService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.products = this.storeService.getProducts();
  }

}
