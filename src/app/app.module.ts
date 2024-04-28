import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HomeComponent } from './Component/home/home.component';
import { ProductsComponent } from './Component/products/products.component';
import { BrandsComponent } from './Component/brands/brands.component';
import { CategoriesComponent } from './Component/categories/categories.component';
import { CartComponent } from './Component/cart/cart.component';
import { NavAuthComponent } from './Component/nav-auth/nav-auth.component';
import { NavBlankComponent } from './Component/nav-blank/nav-blank.component';
import { FooterComponent } from './Component/footer/footer.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout/blank-layout.component';
import { WishListComponent } from './Component/wish-list/wish-list.component';
import { PaymentComponent } from './Component/payment/payment.component';
import { AllOrdersComponent } from './Component/all-orders/all-orders.component';
import { BrandsDetailsComponent } from './Component/brands-details/brands-details.component';
import { CategoryDetailsComponent } from './Component/category-details/category-details.component';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';
import { HttpClientModule } from  '@angular/common/http';
import { SearchPipe } from './Core/Pipe/search.pipe';
import { CutTextPipe } from './Core/Pipe/cut-text.pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { DashNavComponent } from './Component/dash-nav/dash-nav.component';
import { DashLayoutComponent } from './layouts/dash-layout/dash-layout.component';
import { AdminLoginComponent } from './Component/admin-login/admin-login.component';
import { AdminRegisterComponent } from './Component/admin-register/admin-register.component';
import { NavBlankDashComponent } from './Component/nav-blank-dash/nav-blank-dash.component';
import { DashBlankLayoutComponent } from './layouts/dash-blank-layout/dash-blank-layout.component';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './Component/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    BrandsComponent,
    CategoriesComponent,
    CartComponent,
    NavAuthComponent,
    NavBlankComponent,
    FooterComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    WishListComponent,
    PaymentComponent,
    AllOrdersComponent,
    BrandsDetailsComponent,
    CategoryDetailsComponent,
    ForgotPasswordComponent,
    ProductDetailsComponent,
    SearchPipe,
    CutTextPipe,
    DashNavComponent,
    DashLayoutComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    NavBlankDashComponent,
    DashBlankLayoutComponent,
    TeamComponent
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule , 
    NgxSpinnerModule,
    BrowserAnimationsModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
