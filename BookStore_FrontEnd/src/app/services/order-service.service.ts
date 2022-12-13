import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from './httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService  {
  token:any;

  constructor(private http : HttpServiceService) {
    this.token = localStorage.getItem('token');
   }

  getOrders(){
    console.log("Getting wishlist");

    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.GetService('https://localhost:44349/Getorders',true,header)
  }

  placeOrder(data:any){
    console.log("Placing order");
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.PostService('https://localhost:44349/Placeorder',data,true,header)
  }
}