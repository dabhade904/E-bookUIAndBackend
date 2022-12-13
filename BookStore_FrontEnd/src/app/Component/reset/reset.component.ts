import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/userService/user-service.service';


@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  resetForm! : FormGroup;
  hide=true;
  hide1=true;
  token: any;
  constructor(private form:FormBuilder,private activate:ActivatedRoute,private user:UserServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.resetForm = this.form.group({
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmpassword:['',[Validators.required,Validators.minLength(8)]],
    })
    this.token= this.activate.snapshot.paramMap.get('token');
  }

  onSubmit(){
    if (this.resetForm.valid) {
      let reqData = {
        Password: this.resetForm.value.password,
        ConfirmPassword: this.resetForm.value.confirmpassword
      }
      this.user.Resetpassword(reqData, this.token).subscribe((response: any) => {
        console.log("Password changed successfully", response);
        this.router.navigateByUrl('login')
      });
    }
  }
}