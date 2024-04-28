import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/Core/Services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  constructor(
    private _FormBuilder: FormBuilder,
    private _ActivatedRoute: ActivatedRoute,
    private _CartService: CartService
  ) { }

  /* The line `id:any = '';` is declaring a variable `id` with the type `any` and initializing it with an
  empty string `''`. */
  id: any = '';
  /* ------------------------------------------------*/


  /**
   * The ngOnInit function in TypeScript is used to subscribe to the paramMap of the ActivatedRoute and
   * retrieve the value of the 'id' parameter.
   */
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
      }
    })
  }

  checkForm: FormGroup = this._FormBuilder.group({
    details: [''],
    phone: ['', Validators.pattern(/^01[0125][0-9]{8}$/)],
    city: ['']
  })

  handleForm(): void {
    console.log(this.checkForm.value);
    const cartDetails = this.checkForm.value;
    this._CartService.checkOut(this.id, cartDetails).subscribe({
      next: (response) => {
        // console.log(response.session.url);
        window.open(response.session.url);
      }
    })
  }
}
