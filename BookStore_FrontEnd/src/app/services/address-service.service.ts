import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from './httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class AddressServiceService  {
  token:any;

  constructor(private http:HttpServiceService) {
    this.token = localStorage.getItem('token');
   }

   addAddress(reqData:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.PostService('https://localhost:44349/AddAddress', reqData, true, header);
  }

  updateAddress(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.PutService('https://localhost:44349/UpdateAddress', reqData, true, header);
  }

  getAllAddress() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.GetService('https://localhost:44349/Getalladdress', true, header);
  }
}