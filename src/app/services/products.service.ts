import { Injectable } from '@angular/core';
import { Product } from '../interfaces/types'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http:HttpClient) { }
  getProducts():Observable<Product[]> {
     return this.http.get<Product[]>('https://testologia.ru/tea');
  }
  getProductById(id:number):Observable<Product> {
    return this.http.get<Product>(`https://testologia.ru/tea?id=${id}`);
  }
}
