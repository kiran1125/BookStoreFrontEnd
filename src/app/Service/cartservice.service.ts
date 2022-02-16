import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  baseURL = "http://localhost:8080/cart/add";
  baseUrl = "http://localhost:8080/cart/get";

  constructor(private http : HttpClient) { }

  addToCart(item:any){
    return this.http.post(this.baseURL,item);
  }

  getCart(token:string):Observable<any>{
    return this.http.get<any>(this.baseUrl,{headers: new HttpHeaders({token})});
  }
}
