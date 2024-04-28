import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {

  const _Router = inject(Router)
    
  if(localStorage.getItem('admin')  !==null  ){
    return true   //routing
  }
  else{
    _Router.navigate(['/adminRegister'])
    return false;
  }
};
