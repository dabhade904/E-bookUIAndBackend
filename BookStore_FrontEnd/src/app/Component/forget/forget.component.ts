import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {
  forgotForm! : FormGroup;
  submitted = false;
    constructor(private formBuilder : FormBuilder, private userService :UserServiceService) { }
  
    ngOnInit(): void {
      this.forgotForm = this.formBuilder.group({
        email : ['', Validators.required]
      })
    }
    onSubmit(){
      this.submitted = true;
      if(this.forgotForm.valid){
      console.log('valid', this.forgotForm.value)
      let reqData = {
        emailId : this.forgotForm.value.email
      }
      this.userService.Forgotpassword(reqData).subscribe((response : any) =>{
        console.log(response);
      })
      }
    }
}