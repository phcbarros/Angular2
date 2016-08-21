import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from './customer.interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers:[FormBuilder]
})

export class AppComponent implements OnInit{
  title = 'Model Driven Form - Conditional Validation!';

  public PAYMENT_METHOD_TYPE = {
    BANK: 'bank',
    CARD: 'card'
  }

  constructor(private _fb: FormBuilder){}

  ngOnInit() {

  }

  save(model: Customer, isValid: boolean) {
    console.log(model, isValid);
  }


}
