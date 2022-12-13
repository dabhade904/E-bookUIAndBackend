import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {


  constructor(private httpclient:HttpClient) { }

  PostService(url: string, data: any, token: boolean, httpHeadersOptions: any) {
    console.log(data);
    return this.httpclient.post(url, data, token && httpHeadersOptions)
  }
  
  GetService(url: string, token: boolean, httpHeadersOptions: any) {
    return this.httpclient.get(url,token && httpHeadersOptions)
  }

  PutService(url: string, data: any, token: boolean, httpHeadersOptions: any) {
    console.log(data);
    return this.httpclient.put(url, data, token && httpHeadersOptions)
  }

  DeleteService(url: string, token: boolean, httpHeadersOptions: any) {
    return this.httpclient.delete(url,token && httpHeadersOptions)
  }
}