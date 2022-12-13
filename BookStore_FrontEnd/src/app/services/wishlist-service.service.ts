import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from './httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistServiceService  {
  token:any;

  constructor(private http: HttpServiceService) { 
    this.token = localStorage.getItem('token');
  }

  getWishlist(){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.GetService('https://localhost:44349/Getwishlistitem',true,header)
  }

  addToWishlist(reqData:any ,bookId:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.PostService('https://localhost:44349/Addtowishlist?bookId='+bookId, reqData, true, header);
  }

  removeFromWishlist(wishlistId:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.DeleteService('https://localhost:44349/Removefromwishlist?wishlistId='+wishlistId,true,header)
  }
}