import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Core/Services/cart.service';

@Component({
  selector: 'app-nav-blank',
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent implements OnInit {
  constructor(private _Router:Router , private _CartService:CartService){}
  cartCount:number = 0;
  
  ngOnInit(): void {
   this._CartService.cartNumber.subscribe({
    next:(num)=>{
      this.cartCount = num;
    }
   })
  }
  
    signOut():void{
      localStorage.removeItem('token')
      this._Router.navigate(['/login'])
    }
  
}
