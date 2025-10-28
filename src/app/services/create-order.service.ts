import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormData } from '../interfaces/types';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class CreateOrderService {
  constructor(private http: HttpClient) {}

  createOrder(data: FormData):Observable<FormData>{
     return this.http.post<FormData>('https://testologia.ru/order-tea', data);
  }
}
