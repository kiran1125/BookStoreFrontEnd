import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaceOrderService } from 'src/app/Service/place-order.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  orderDetails:any;

  constructor(private router:Router,private placeOrder:PlaceOrderService) { }

  

  ngOnInit() {
    this.orderDetails=this.placeOrder.getOrder();
  }

  onhomepage(){
    this.router.navigate(['home']);
  }

}
