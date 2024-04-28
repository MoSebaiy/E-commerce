import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandsService } from 'src/app/Core/Services/brands.service';

@Component({
  selector: 'app-brands-details',
  templateUrl: './brands-details.component.html',
  styleUrls: ['./brands-details.component.scss']
})
export class BrandsDetailsComponent implements OnInit {
  constructor(private _BrandsService:BrandsService , private _ActivatedRoute:ActivatedRoute){}

  brandId:any = '';
  brandData:any = {};

ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(params)=>{
      this.brandId =  params.get('id');
    }
  });
  this._BrandsService.getBrandDetails( this.brandId  ).subscribe({
    next:(response)=>{
      this.brandData = response.data
      console.log(response.data)
    }
  })
}
}
