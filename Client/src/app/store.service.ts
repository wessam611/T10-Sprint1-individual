import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './Product';
import { Observable } from 'rxjs/Observable';
import { MessageService } from './message.service';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class StoreService {

  private productsUrl = 'http://localhost:3000/api/product/'

  //Get all products on remote server
  getProducts(): Observable<any> {
    var self = this
    return this.http.get<any>(`${this.productsUrl}getProducts`).pipe(
      tap(function (res) {
        if (!res) return;
      }),
      catchError(this.handleError("product Read"))
    );
  }
  private handleError<T>(operation, result?: T) {
    if (!operation)
      operation = 'operation';
    var self = this;
    return function (error: any): Observable<T> {
      self.messageService.viewError(operation + ' failed: please check correct input format');
      return of(result as T);
    }
  }
  constructor(private http: HttpClient, private messageService: MessageService) { }
}
