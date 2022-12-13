import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';
import { FeedbackServiceService } from 'src/app/services/feedback-service.service';
import { WishlistServiceService } from 'src/app/services/wishlist-service.service';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {
  bookId:any;
  book:any;
  ratingPoint:any=0;
  comment:any;
  feedbackList:any;
  defaultImage:any="https://www.prachiindia.com/ModuleFiles/Items/Cover_image.png";
  addedToCart:any=false;

  constructor(private bookservice:BookServiceService,private feed:FeedbackServiceService,private cartser:CartServiceService,
    private wishserv:WishlistServiceService) { }

  ngOnInit(): void {
    //this.bookId = this.activate.snapshot.paramMap.get('bookId');
    this.bookId = localStorage.getItem('bookId')
    this.getBookById(this.bookId);
    this.getAllFeedback(this.bookId);
  }

  getBookById(bookId:any){
    this.bookservice.getBookById(bookId).subscribe((response: any) => {
      console.log("Got All Books", response.data);
      this.book = response.data;
    });
  }

  getAllFeedback(bookId: any){
    this.feed.getAllFeedback(bookId).subscribe((response: any) => {
      console.log("GetAll feedback successful", response);
      this.feedbackList = response.data;
    });
  }
  
  addToCart(){
    this.addedToCart=true;
    let reqData = {
      BookId: this.book.bookId,
      BookInCart: 1
    }
    this.cartser.addToCart(reqData).subscribe((response: any) => {
      console.log("Added to cart", response);
    });
  }

  addToWishlist(){
    let reqData = {
      BookId: this.book.bookId,
    }
    this.wishserv.addToWishlist(reqData,this.bookId).subscribe((response: any) => {
      console.log("Added to wishlist", response);
    });
  }

  addFeedback(){
    let reqData = {
      Rating: parseInt(this.ratingPoint),
      Comment: this.comment,
      BookId: this.book.bookId
    }
    this.feed.addFeddback(reqData).subscribe((response: any) => {
      console.log("Feedback submitted successfully", response);
      this.getAllFeedback(this.bookId);
    });
    this.comment='';
    this.ratingPoint=0;
  }
 
  getShortName(name:any){
    return name.split(' ').map((n:any) => n[0]).join('');
  }
}