import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor( private service: ServiceService , private router:Router ) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    emailId : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
  });


  onclick(){
    this.service.userLogin(this.loginForm.value).subscribe(response=> {
      console.log(response);
      console.log(this.loginForm.value);
      localStorage.setItem("token",response.token);
      this.router.navigate(['home']);
    });




  }

}
