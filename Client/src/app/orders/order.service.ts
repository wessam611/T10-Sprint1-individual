import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {Order} from './Order';
import {Product} from '../Product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeaderComponent } from '../@theme/components/header/header.component';
import { catchError, map, tap } from 'rxjs/operators';
import {UserService} from '../user.service';
@Injectable()
export class OrderService {
  getOrders (): Observable<Order[]> {
  var userid = this.userService.getUser()._id;
  var ordersUrl = 'http://localhost:3000/api/user/'.concat(userid).concat('/orders');


  console.log(ordersUrl);

  return this.http.get<Order[]>(ordersUrl).pipe(catchError(this.handleError('getOrders', []))); }

  constructor(private http: HttpClient,private userService: UserService) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    console.error(error);
      alert(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}
}
