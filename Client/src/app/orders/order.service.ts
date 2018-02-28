import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { orders } from './mock-orders';
import {Order} from './Order';
import {Product} from '../Product';
import {products} from '../mock-products';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeaderComponent } from '../@theme/components/header/header.component';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable()
export class OrderService {
  private ordersUrl = '/user/1/orders'; //TODO
getOrders (): Observable<Order[]> {
  return this.http.get<Order[]>(this.ordersUrl)
      .pipe(
        catchError(this.handleError('getOrders', []))
      );
}
constructor(
private http: HttpClient) { }
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
    // TODO: better job of transforming error for user consumption
  //  this.log(`${operation} failed: ${error.message}`);

    return of(result as T);
  };
}
}
