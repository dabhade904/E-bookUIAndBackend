import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from 'src/app/services/order-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orderlist:any;
  defaultImage:any="https://www.prachiindia.com/ModuleFiles/Items/Cover_image.png";

  constructor(private orderser:OrderServiceService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this.orderser.getOrders().subscribe((response: any) => {
      console.log("Got All Orders", response.data);
      this.orderlist = response.data;
    });
  }

  getShortDate(date:any){
    return date.split('T')[0]
  }
}