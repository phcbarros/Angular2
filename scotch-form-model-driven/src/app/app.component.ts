import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/common';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { User } from './user.interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class AppComponent {
  public title: string = 'Model-Driven Form';
  
  public myForm: FormGroup; // nosso modelo
  public submitted: boolean; // usado para saber se o form foi enviado
  public events: any[] = [];

  constructor(private _fb: FormBuilder) { }

  ngOnit() { }

  save(model: User, isValid: boolean): void {
    console.log(model, isValid);
  }

}
