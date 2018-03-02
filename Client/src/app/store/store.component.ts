import { Component, OnInit } from '@angular/core';

import { Cart, Product } from '../definitions';
import { StoreService } from '../store.service';
import { CartService } from '../cart.service';
import { CartComponent } from '../cart/cart.component'
import { UserService } from '../user.service';
import { MessageService } from '../message.service';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `]
})
export class StoreComponent implements OnInit {

  cart: Cart;
  products: Product[];

  constructor(private storeService: StoreService, private cartService: CartService, private userService: UserService, public messageService: MessageService) { }

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
      custom: [
        {
          name: 'Buy',
          title: '<i class="ion-ios-cart"></i>'
        }
      ]
    },
    columns: {
      sellerName: {
        title: 'seller',
        type: 'number'
      },
      name: {
        title: 'Product',
        type: 'string',
      },
      price: {
        title: 'price',
        type: 'number',
        valuePrepareFunction: function (amount) {
          return new CurrencyPipe('en-EN').transform(amount, "$", "symbol");
        }
      },
      createdAt: {
        title: 'creation Date',
        type: 'date',
        editable: false,
        addable: false,
        valuePrepareFunction: function (date) {
          if (date === "") return 'N/A';
          var input = new Date(date);
          return new DatePipe('en-EN').transform(input, "M/d/yy");
        }
      },
      updatedAt: {
        title: 'Last Modified ',
        type: 'date',
        editable: false,
        addable: false,
        valuePrepareFunction: function (date) {
          if (date === "") return 'N/A';
          var input = new Date(date);
          return new DatePipe('en-EN').transform(input, "M/d/yy");
        }
      },

    },
  };

  source: LocalDataSource = new LocalDataSource();

  ngOnInit() {
    this.readProducts();
    this.getCart();
  }

  getProducts(): void {
    this.storeService.getProducts().subscribe(function(res){
      return res.data;
    });
  }
  //get all the products of the seller
  readProducts() {
    var self = this;
    this.storeService.getProducts()
      .subscribe(function (res) {
        if (!res) return;
        if (!res.data) {  
          self.handleError("noRead");
          return;
        }
        self.messageService.viewSuccess("Successfully retrieved products");
        self.source.load(res.data);
      });
  }


  getCart(): void {
    var user = this.userService.getUser();
    if (user)
      this.cartService.getCart().subscribe(res => this.cart = res.data);
    else
      this.cart = this.cartService.getCartFromLocalStorage();
  }

  //universal error handler for possible front end issues in the smart table componenet
  handleError(err) {
    if (err === "createDateAdded") {
      this.messageService.viewError('You are not allowed to edit the date of creation of the product');
      return;
    }
    if (err === "updateDateAdded") {
      this.messageService.viewError("You are not allwed to edit the date of update of the product");
      return;
    }
  }
  onCustom(event){
    this.cartService.addProduct(this.cart,event.data);
  }
}
