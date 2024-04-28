import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  constructor(private _AuthService:AuthService , private _Router:Router){}

  errMessage:string = '';
  isLoading:boolean = false;

  loginForm:FormGroup = new FormGroup({

    email:new FormControl('' , [Validators.required,Validators.email]),
    password:new FormControl('' , [Validators.required,Validators.pattern(/^\w{6,}$/)]),

  });

  handleForm(): void{
    this.isLoading = true;

    const userData = this.loginForm.value;
    if (this.loginForm.valid == true){

      this._AuthService.login(userData).subscribe({
        next: (response) =>{

          //localStorage Admin
          localStorage.setItem('admin',response.token)

            //Move to Login
            this._Router.navigate( ['/dashboard'] );
            this.isLoading = false; //hidden
        },
        error:(err)=>{

          this.errMessage = err.error.message;
          this.isLoading = false; //hidden
        },
      });
    }
  }
}
