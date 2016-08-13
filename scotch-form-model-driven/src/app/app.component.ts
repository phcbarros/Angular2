import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/common';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { User } from './user.interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: [FormBuilder]
})
export class AppComponent implements OnInit {
  public title: string = 'Model-Driven Form';
  public myForm: FormGroup; // nosso modelo
  public submitted: boolean; // usado para saber se o form foi enviado
  public events: any[] = [];

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {

    //forma mais verbosa
    // this.myForm = new FormGroup({
    //   name: new FormControl('', () => [Validators.required, Validators.minLength(5)]),
    //   address: new FormGroup({
    //     street: new FormControl('',<any>Validators.required),
    //     postcode: new FormControl('0800-123')
    //   })
    // });

    //forma menos verbosa
    this.myForm = this._fb.group({
      name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      address: this._fb.group({
        street: ['', [<any>Validators.required]],
        postcode: ['8000'] //valor estático ao instanciar o form model
      })
    });

    //atualizando depois de inicializar o form model
    (<FormControl>this.myForm.controls['name']).updateValue('John Smith', { onlySelf: true });

    this.subscribeToFormChanges();
    this.subscribeToFormStatusChange();
  }

  save(model: User, isValid: boolean): void {
    console.log(model, isValid);
  }

  subscribeToFormChanges(): void {
    const myFormValueChanges$ = this.myForm.valueChanges;

    myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE CHANGED', object: x }));
  }

  subscribeToFormStatusChange(): void {
    const myFormStatusChange$ = this.myForm.statusChanges;
    myFormStatusChange$.subscribe(x => this.events.push({ event: 'STATUS CHANGED', objetc: x }));
  }

}
