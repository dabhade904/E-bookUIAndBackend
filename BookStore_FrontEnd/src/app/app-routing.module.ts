import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { ForgetComponent } from './Component/forget/forget.component';
import { ResetComponent } from './Component/reset/reset.component';
import { SignupComponent } from './Component/signup/signup.component';
import { HomeComponent } from './Component/home/home.component';
import { GetBooksComponent } from './Component/get-books/get-books.component';
import { QuickViewComponent } from './Component/quick-view/quick-view.component';
import { WishlistComponent } from './Component/wishlist/wishlist.component';
import { CartComponent } from './Component/cart/cart.component';
import { OrdersComponent } from './Component/orders/orders.component';
import { OrderPlacedComponent } from './Component/order-placed/order-placed.component';


const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'forgetpassword',component:ForgetComponent},
  {path:'resetpassword/:token',component:ResetComponent},
  {path:'home',component:HomeComponent,
  children:[
    {path:'books',component:GetBooksComponent},
    {path:'quickview',component:QuickViewComponent},
    {path:'cart',component:CartComponent},
    {path:'wishlist',component:WishlistComponent},
    {path:'orderplaced',component:OrderPlacedComponent},
    {path:'orders',component:OrdersComponent}
  ]  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
