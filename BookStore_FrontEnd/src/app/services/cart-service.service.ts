import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from './httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  token: any;
  constructor(private http: HttpServiceService) {
    this.token = localStorage.getItem('token');
  }

  getCartItems() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.http.GetService('https://localhost:44349/Getcartitem', true, header);
  }

  addToCart(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.http.PostService('https://localhost:44349/Addtocart', reqData, true, header);
  }

  updateCart(cartId: any, bookQty: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.http.PutService('https://localhost:44349/Updatecart?cartId=' + cartId + '&bookQty=' + bookQty, cartId, true, header);
  }

  removeFromCart(cartId: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.http.DeleteService('https://localhost:44349/Removefromcart?cartId='+cartId, true, header);
  }
}