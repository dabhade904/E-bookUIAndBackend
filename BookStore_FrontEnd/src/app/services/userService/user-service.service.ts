import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  token : any;

  constructor(private httpservice:HttpServiceService) { 
    this.token = localStorage.getItem("token");
  }

  Register(data: any){
    console.log(data);
    let httpOptions = {
      headers: new HttpHeaders({
      'Content-type': 'application/json',
      })
    }
    return this.httpservice.PostService('https://localhost:44349/Register',data,false,httpOptions)
  }
  Login(data: any){
    console.log(data);
    let httpOptions = {
      headers: new HttpHeaders({
      'Content-type': 'application/json',
      })
    }
    return this.httpservice.PostService('https://localhost:44349/Login',data,true,httpOptions)  
  }
  
  Forgotpassword(data: any){
    console.log(data);
    let httpOptions = {
      headers: new HttpHeaders({
      'Content-type': 'application/json',
      })
    }
    return this.httpservice.PostService('https://localhost:44349/Forgotpassword?email=' +data.email,data,true,httpOptions)
  }
  Resetpassword(data: any,token:any){
    console.log(data);
    let httpOptions = {
      headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + token
      })
    }
    return this.httpservice.PostService('https://localhost:44349/Resetpassword',data,true,httpOptions)
  }
}