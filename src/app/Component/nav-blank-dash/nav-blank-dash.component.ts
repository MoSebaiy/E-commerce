import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-blank-dash',
  templateUrl: './nav-blank-dash.component.html',
  styleUrls: ['./nav-blank-dash.component.scss']
})
export class NavBlankDashComponent {
  constructor(private _Router:Router ){}



  signOut():void{
    localStorage.removeItem('Admin')
    this._Router.navigate(['/adminLogin'])
  }
}
