import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './Component/signup/signup.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import { LoginComponent } from './Component/login/login.component';
import { ForgetComponent } from './Component/forget/forget.component';
import { ResetComponent } from './Component/reset/reset.component';
import { HomeComponent } from './Component/home/home.component';
import { GetBooksComponent } from './Component/get-books/get-books.component';
import { QuickViewComponent } from './Component/quick-view/quick-view.component';
import { WishlistComponent } from './Component/wishlist/wishlist.component';
import { CartComponent } from './Component/cart/cart.component';
import {MatRadioModule} from '@angular/material/radio';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import { OrdersComponent } from './Component/orders/orders.component';
import { OrderPlacedComponent } from './Component/order-placed/order-placed.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ForgetComponent,
    ResetComponent,
    HomeComponent,
    GetBooksComponent,
    QuickViewComponent,
    WishlistComponent,
    CartComponent,
    OrdersComponent,
    OrderPlacedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,BrowserModule,FormsModule, ReactiveFormsModule,MatToolbarModule,HttpClientModule,MatMenuModule,MatCardModule,
    AppRoutingModule,MatFormFieldModule,MatInputModule,MatCheckboxModule,MatIconModule,
    MatSelectModule,MatExpansionModule,MatRadioModule,FlexLayoutModule,MatDividerModule,MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
