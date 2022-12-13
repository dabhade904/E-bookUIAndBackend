import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from './httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  token:any;
  constructor(private http:HttpServiceService) {
    this.token=localStorage.getItem('token')
   }

   getAllBooks(){
    console.log("Getting books");

    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
      })
    }
    return this.http.GetService('https://localhost:44349/Getallbooks',true,header)
  }

  getBookById(bookId:any){
    console.log("Getting books");

    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
      })
    }
    return this.http.GetService('https://localhost:44349/GetbookbyId?bookId=' +bookId,true,header)
  }
}