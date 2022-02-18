import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaceOrderService {

  orderDetails : any;

  baseURL = "http://localhost:8080/Order/placeOrder";

  constructor(private http : HttpClient) { }

  placeOrder(token : any,orderData:any){
    return this.http.post(this.baseURL,orderData,{headers: new HttpHeaders({token})});

  }

  setOrder(data:any){
    this.orderDetails = data;
  }

  getOrder(){
    return this.orderDetails;
  }


}
