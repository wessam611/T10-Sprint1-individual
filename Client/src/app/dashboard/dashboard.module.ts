import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { CompanyComponent } from './company/company.component';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../cart.service';
import { StoreComponent } from '../store/store.component';
import { StoreService } from '../store.service'

@NgModule({
  imports: [ThemeModule, DashboardRoutingModule],
  declarations: [DashboardComponent,CompanyComponent, CartComponent, StoreComponent],
  entryComponents: [],
  providers: [CartService, StoreService]
})
export class DashboardModule {}
