import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/Core/InterFace/category';
import { CartService } from 'src/app/Core/Services/cart.service';
import { ProductsServiceService } from 'src/app/Core/Services/products-service.service';
import { WishListService } from 'src/app/Core/Services/wish-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  {
  constructor(
    private _ProductsServiceService: ProductsServiceService,
    private _CartService: CartService,
    private _ToastrService: ToastrService,
    private _WishListService: WishListService
  ) {}

  productData: any[] = [];
  categoryData: Category[] = [];
  term: string = '';
  wishListData: string[] = [];

  ngOnInit(): void {
    this._ProductsServiceService.getProduct().subscribe({
      next: (response) => {
        // console.log(response.data);
        this.productData = response.data;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this._ProductsServiceService.getCategories().subscribe({
      next: (response) => {
        this.categoryData = response.data;
        console.log('cat', response);
      },
      error: (err) => {
        console.log(err);
      },
    });

    this._WishListService.getWishList().subscribe({
      next: (response) => {
        // console.log( 'wish',response);
        const newData = response.data.map((item: any) => item._id);
        // console.log(newData);
        this.wishListData = newData;
      },
    });
  }

  categoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 2000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      740: {
        items: 4,
      },
      940: {
        items: 6,
      },
    },
    nav: true,
  };

  mainSlideOption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 2000,
    navText: ['', ''],
    items: 1,
    nav: true,
  };

  addProduct(id: String): void {
    this._CartService.addToCartItem(id).subscribe({
      next: (response) => {
        console.log(response);
        this._CartService.cartNumber.next(response.numOfCartItems);
        console.log(this._CartService.cartNumber);

        this._ToastrService.success(response.message);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  addFav(prodId: string | undefined): void {
    this._WishListService.addToWishList(prodId).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.success(response.message);
        this.wishListData = response.data;
      },
    });
  }
  removeFav(prodId: string | undefined): void {
    this._WishListService.removeItemOfFav(prodId).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.success(response.message);
        this.wishListData = response.data;
      },
    });
  }
}
