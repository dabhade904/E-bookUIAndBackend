import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from './httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackServiceService {

  token:any;

  constructor(private http:HttpServiceService) { 
    this.token = localStorage.getItem('token');
  }

  addFeddback(reqData:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.PostService('https://localhost:44349/Addfeedback', reqData, true, header);
  }

  getAllFeedback(bookId:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.http.GetService(`https://localhost:44349/Getfeedback?bookId=` +bookId,false,header)
  }
}