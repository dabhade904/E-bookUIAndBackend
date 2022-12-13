import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/userService/user-service.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm! : FormGroup
  hide=true;
  constructor(private form:FormBuilder,private user:UserServiceService) { }

  ngOnInit(): void {
    this.signupForm = this.form.group({
      fullname:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      mobile:['',[Validators.required,Validators.pattern("[1-9]{1}[0-9]{9}")]]
    })
  }

  onSubmit(){
    if(this.signupForm.valid){
      let data={
        FullName:this.signupForm.value.fullname,
        EmailId:this.signupForm.value.email,
        Password:this.signupForm.value.password,
        MobileNumber:this.signupForm.value.mobile
      }
      this.user.Register(data).subscribe((res:any)=>{
        console.log('Signup Successfull',res);
      });
    }
    else{
      console.log("Invalid data",this.signupForm.value);
    }
  }
}
