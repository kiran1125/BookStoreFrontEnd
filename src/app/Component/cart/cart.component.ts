import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from 'src/app/Model/order';
import { CartserviceService } from 'src/app/Service/cartservice.service';
import { PlaceOrderService } from 'src/app/Service/place-order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  token:any=localStorage.getItem('token');
  cartList : any;
  item_qty = 1;
  totalPrice=0;
  edituseraddressform : any;
  address: any;
  orderDetails : any;
  // orderData :Order = new Order();

  constructor(private router : Router,private placeorder:PlaceOrderService,private formBuilder: FormBuilder,private cartService : CartserviceService) { }

  ngOnInit() {
    this.edituseraddressform = this.formBuilder.group({
      fullName: [''],
      mobileNumber: [''],
      address: [''],
      city: [''],
      state: [''],
    });
    

    this.getProductOfCart();

  }
  

  onhome(){
    this.router.navigate(['home']);
  }

  getProductOfCart(){
    this.cartService.getCart(this.token).subscribe(response=>this.cartList=response.data);
    console.log(this.cartList);
  }

  onClick(){
    this.item_qty++;
  }

  onMinus(){
    this.item_qty--;
  }

  placeorderData(book:any){

    this.totalPrice = this.item_qty * book.book.bookPrice;

    

    this.address = JSON.stringify(this.edituseraddressform.value);
    
    const orderData = new Order(this.totalPrice,this.item_qty,this.address,book.user.userId,book.book.bookId);


    this.placeorder.placeOrder(orderData,this.token).subscribe(response=> {
      this.orderDetails=response;
      console.log(this.orderDetails);
    });

    this.placeorder.setOrder(this.orderDetails);

    // this.router.navigate(['placeorder']);
  }

}
