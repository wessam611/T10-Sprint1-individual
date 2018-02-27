import { Component, OnInit } from '@angular/core';
import {Order} from './Order';
import {OrderService} from './order.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Product} from '../Product';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})


export class OrdersComponent implements OnInit {
  orders: Order[];
  constructor(private orderService:OrderService,private route: ActivatedRoute,private location: Location) { }
  getOrders(): void {
    // const id = +this.route.snapshot.paramMap.get('userid');
  this.orderService.getOrders().subscribe(orders => this.orders = orders);

}
  ngOnInit() {
    this.getOrders();
    console.log(this.orders.length);
  }
}
