import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CompanyComponent } from './company/company.component';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../cart.service';
import { StoreComponent } from '../store/store.component';
import { StoreService } from '../store.service'
import { OrdersComponent } from '../orders/orders.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ThemeModule, DashboardRoutingModule, FormsModule],
  declarations: [DashboardComponent, CompanyComponent, StoreComponent, OrdersComponent, CartComponent],
  entryComponents: [],
  providers: [CartService, StoreService]
})
export class DashboardModule { }
