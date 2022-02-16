import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaceOrderService {

  baseURL = "http://localhost:8080/Order/placeOrder";

  constructor(private http : HttpClient) { }

  placeOrder(orderData:any,token : any){
    return this.http.post(this.baseURL,orderData,{headers: new HttpHeaders({token})});

  }
}
