import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Component/cart/cart.component';
import { HeaderComponent } from './Component/header/header.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { PlaceOrderComponent } from './Component/place-order/place-order.component';

const routes: Routes = [
  {path:'',component : LoginComponent},
  {path:'header',component : HeaderComponent},
  {path:'home',component: HomeComponent},
  {path:'cart',component:CartComponent},
  {path : 'placeorder',component:PlaceOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
