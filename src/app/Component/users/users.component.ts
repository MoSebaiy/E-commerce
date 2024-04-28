import { Component } from '@angular/core';
import { UsersService } from 'src/app/Core/Services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
constructor(private _UsersService:UsersService){}

userData:any[] = []

ngOnInit(): void {
  this._UsersService.getAllUsers().subscribe({
    next:(response)=>{
      console.log(response.users);
      this.userData = response.users;
    },
    error:(err)=>{
      console.log(err);
    }
  })
}

}
