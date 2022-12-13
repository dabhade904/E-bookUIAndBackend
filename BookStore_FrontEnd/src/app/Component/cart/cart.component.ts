import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { AddressServiceService } from 'src/app/services/address-service.service';
import { OrderServiceService } from 'src/app/services/order-service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartlist: any;
  defaultImage: any = "https://www.prachiindia.com/ModuleFiles/Items/Cover_image.png";
  step: number = 0;

  fullName: any;
  mobileNumber: any;
  addressList: any;
  addressId :any;
  addressObj: any;
  isAddEditAddress: boolean = false;
  edit =false;
  address: any;
  city: any;
  state: any;
  addressType: any
  bookId: any;

  constructor(private cart: CartServiceService, private addres: AddressServiceService,private order:OrderServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.bookId = localStorage.getItem('bookId');
    this.fullName = localStorage.getItem('name');
    this.mobileNumber = localStorage.getItem('mobile');
    this.getCartlist();
    this.getAllAddress();
  }

  getCartlist() {
    this.cart.getCartItems().subscribe((response: any) => {
      console.log("Got All cart items", response.data);
      this.cartlist = response.data;
      console.log('BookIds : ', this.cartlist);
    });
  }

  decreaseQty(cartId: any, bookInCart: any) {
    this.cart.updateCart(cartId, (bookInCart - 1)).subscribe((response: any) => {
      console.log("Cart Qty decreased");
      this.getCartlist();
    })
  }

  increaseQty(cartId: any, bookInCart: any) {
    this.cart.updateCart(cartId, (bookInCart + 1)).subscribe((response: any) => {
      console.log("Cart Qty increased");
      this.getCartlist();
    })
  }

  stepUp2() {
    this.step = 2;
  }

  stepUp() {
    this.step = 1;
  }

  getAllAddress() {
    this.addres.getAllAddress().subscribe((response: any) => {
      console.log(response.data);
      this.addressList = response.data;
    })
  }
  removeFromCart(cartId: any) {
    this.cart.removeFromCart(cartId).subscribe((response: any) => {
      console.log("Removed from cart");
      this.getCartlist();
    })
  }

  addNewAddress() {
    this.isAddEditAddress = true;
    this.addressObj = [];
    this.address = '';
    // this.fullName = '';
    // this.mobileNumber = '';
    this.city = '';
    this.state = '';
    this.addressType = '';
  }
  editAddress() {
    this.edit = true;
  }
  updateAddress(addressId: any) {
    if (this.address && this.city && this.state && this.addressType && addressId != '') {
      let reqData = {
        address: this.address,
        city: this.city,
        state: this.state,
        type: Number(this.addressType),
        addressId: addressId
      }
      console.log(reqData)
      this.addres.updateAddress(reqData).subscribe((response: any) => {
        console.log("Address updated successfully", response);
        this.getAllAddress();
      })
    }
  }

  addAddress(){
    if(this.address && this.city && this.state && this.addressType != ''){
      let reqData = {
        address: this.address,
        city: this.city,
        state: this.state,
        type: Number(this.addressType)
      }
      this.addres.addAddress(reqData).subscribe((response: any) => {
        console.log("New Address Added successfully", response);
        this.getAllAddress();
      })
    }
  }
  addOrder(){
    if (this.cartlist?.length > 0){
      console.log("Cart list",this.cartlist.bookId);
      let data={
        BookId : parseInt(this.bookId),
        AddressId : this.addressId,
      }
      this.order.placeOrder(data).subscribe((response:any) =>{
        console.log("Placed order",response);
        this.getCartlist();
        this.step=0;
        this.router.navigateByUrl('/home/orderplaced')
      })
    }
  }
}