import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/Service/bookservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bookList : any;
  totalBooks !:number;
  verify : Boolean = false;

  constructor(private bookService : BookserviceService) { }

  ngOnInit() {

    if(localStorage.getItem('token') != null){
      this.verify = true;
    }


      this.bookService.getAllBooks().subscribe(response=> {
        this.bookList=response.data}
        );


    }

    addToCart(item : any){
      
    }


  }

