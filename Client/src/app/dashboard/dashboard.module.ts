import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { CompanyComponent } from './company/company.component';
import { StoreComponent } from '../store/store.component';
import { CartComponent } from '../cart/cart.component';
import { OrdersComponent } from '../orders/orders.component';
@NgModule({
  imports: [ThemeModule, DashboardRoutingModule],
  declarations: [DashboardComponent,CompanyComponent, StoreComponent,OrdersComponent, CartComponent],
  entryComponents: [],
  providers: []
})
export class DashboardModule {}
