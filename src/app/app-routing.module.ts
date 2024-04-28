import { UsersComponent } from './Component/users/users.component';
import { CategoryDetailsComponent } from './Component/category-details/category-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout/blank-layout.component';
import { HomeComponent } from './Component/home/home.component';
import { CartComponent } from './Component/cart/cart.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';
import { CategoriesComponent } from './Component/categories/categories.component';
import { BrandsComponent } from './Component/brands/brands.component';
import { PaymentComponent } from './Component/payment/payment.component';
import { AllOrdersComponent } from './Component/all-orders/all-orders.component';
import { BrandsDetailsComponent } from './Component/brands-details/brands-details.component';
import { WishListComponent } from './Component/wish-list/wish-list.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { authGuard } from './Core/Guard/auth.guard';
import { ProductsComponent } from './Component/products/products.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { DashLayoutComponent } from './layouts/dash-layout/dash-layout.component';
import { AdminLoginComponent } from './Component/admin-login/admin-login.component';
import { AdminRegisterComponent } from './Component/admin-register/admin-register.component';
import { DashBlankLayoutComponent } from './layouts/dash-blank-layout/dash-blank-layout.component';
import { adminGuard } from './Core/Guard/admin.guard';
import { TeamComponent } from './Component/team/team.component';

const routes: Routes = [

  {path:'',component:BlankLayoutComponent,children:[
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:'home',   component:HomeComponent,title:'home'},
    {path:'cart',canActivate: [authGuard] ,    component:CartComponent,title:'cart'},
    {path:'product', canActivate: [authGuard] ,   component:ProductsComponent,title:'product'},
    {path:'productsDetails/:id',canActivate: [authGuard] ,    component:ProductDetailsComponent,title:'productsDetails'},
    {path:'categories',canActivate: [authGuard] ,    component:CategoriesComponent,title:'categories'},
    {path:'categoriesDetails/:id',canActivate: [authGuard] ,    component:CategoryDetailsComponent,title:'categoriesDetails'},
    {path:'brands',canActivate: [authGuard] ,    component:BrandsComponent,title:'brands'},
    {path:'payment/:id',canActivate: [authGuard] ,    component:PaymentComponent,title:'payment'},
    {path:'allOrders',canActivate: [authGuard] ,    component:AllOrdersComponent,title:'allOrders'},
    {path:'brandDetails/:id',canActivate: [authGuard] ,    component:BrandsDetailsComponent,title:'brandDetails'},
    {path: 'wishlist' ,canActivate: [authGuard] , component:WishListComponent, title:'wishlist'},
  ]},

  {path:'',component:AuthLayoutComponent,children:[
    {path:'login', component:LoginComponent,title:'login'},
    {path:'register', component:RegisterComponent,title:'register'},
    {path: 'forgotpassword' , component:ForgotPasswordComponent, title:'forgotpassword'},
  ]},


  {path:'',component:DashLayoutComponent,children:[
    {path:'adminLogin', component:AdminLoginComponent,title:'adminLogin'},
    {path:'adminRegister', component:AdminRegisterComponent,title:'adminRegister'},
  ]},

  {
    path:'',component:DashBlankLayoutComponent,children:[
      {path:'dashboard',canActivate:[adminGuard], component:DashboardComponent,title:'dashboard'},
      {path:'user',canActivate:[adminGuard], component:UsersComponent,title:'user'},
      {path: 'Team' , component:TeamComponent, title:'TeamProject'},

    ]
  },

    {path:'**', component:NotFoundComponent,title:''},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export { Routes };

