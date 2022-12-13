import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup
  hide=true;
  constructor(private form:FormBuilder,private user:UserServiceService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.form.group({
      email:['',[Validators.required,Validators.email]],
      password:['', Validators.required],
    })
  }

  onSubmit(){
    if(this.loginForm.valid){
      let data={
        EmailId:this.loginForm.value.email,
        Password:this.loginForm.value.password
      }
      this.user.Login(data).subscribe((res:any)=>{
        console.log('Login Successfull',res);
        localStorage.setItem('token',res.data.token);
        localStorage.setItem('name',res.data.fullName);
        localStorage.setItem('mobile',res.data.mobileNumber);
        this.router.navigateByUrl('home/books'); 
      });
    }
  }
}