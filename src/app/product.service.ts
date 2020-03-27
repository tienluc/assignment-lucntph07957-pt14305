import { Injectable } from '@angular/core';


import{ Product } from './Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api='https://5e79bf4517314d001613367f.mockapi.io/product';
  //products=Data;
  constructor(
    private http: HttpClient
  ) { }
 

 
  getProducts():  Observable<Product[]>{
    return this.http.get<Product[]>(this.api);
    //return this.products;
  }
  

}
