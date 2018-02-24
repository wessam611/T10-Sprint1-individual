import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeModule } from './@theme/theme.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import {NbEmailPassAuthProvider, NbAuthModule} from '@nebular/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    AppRoutingModule,
    NbAuthModule.forRoot({
      providers: {
        email: {
          service: NbEmailPassAuthProvider,
          config: {
            baseEndpoint: 'http://localhost:3000/'
          },
        },
      },
      forms: {},
    })
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppModule {}
