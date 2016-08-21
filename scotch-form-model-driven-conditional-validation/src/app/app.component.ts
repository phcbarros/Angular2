import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Customer } from './customer.interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [FormBuilder],
  directives: [REACTIVE_FORM_DIRECTIVES]
})

export class AppComponent implements OnInit {
  public title = 'Model Driven Form - Conditional Validation!';
  public myForm: FormGroup;
  public submitted: boolean = false;
  public PAYMENT_METHOD_TYPE = {
    BANK: 'bank',
    CARD: 'card'
  }

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {

    this.myForm = this._fb.group({
      name: ['Paulo Barros'],
      paymentMethod: this.initPaymentMethodFormGroup()
    });

    this.subscribePaymentTypeChanges();

    this.setPaymentMethodType(this.PAYMENT_METHOD_TYPE.BANK);
  }

  initPaymentMethodFormGroup(): FormGroup {
    const group = this._fb.group({
      type: [''],
      bank: this._fb.group(this.initPaymentMethodBankModel()),
      card: this._fb.group(this.initPaymentMethodCardModel())
    });

    return group;
  }

  initPaymentMethodBankModel(): Object {
    const bankModel = {
      accountNo: ['', Validators.required],
      accountHolder: ['', Validators.required],
      routingNo: ['', Validators.required]
    };

    return bankModel;
  }

  initPaymentMethodCardModel(): Object {

    //regex para master, visa e amex
    //const cardNoRegex = `^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$`;
    const cardNoRegex = `^([0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4})$`;

    //regex para data de validade no formato MM/YY
    const expiryRegex = `^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$`;

    const cardModel = {
      cardNo: ['', [Validators.required, Validators.pattern(cardNoRegex)]],
      cardHolder: ['', Validators.required],
      expiry: ['', [Validators.required, Validators.pattern(expiryRegex)]]
    };

    return cardModel;
  }

  setPaymentMethodType(type: string) {
    //atualiza o valor do método de pagamento
    const ctrl: FormControl = (<any>this.myForm).controls.paymentMethod.controls.type;
    ctrl.updateValue(type);
  }

  subscribePaymentTypeChanges() {
    //controles
    const pmCtrl = (<any>this.myForm).controls.paymentMethod;
    const bankCtrl: FormGroup = pmCtrl.controls.bank;
    const cardCtrl: FormGroup = pmCtrl.controls.card;

    //inicializa a verificação da alteração do campo type
    const changes$ = pmCtrl.controls.type.valueChanges;

    //inscreve-se no evento
    changes$.subscribe(paymentMethodType => {
      //BANK
      if (paymentMethodType === this.PAYMENT_METHOD_TYPE.BANK) {
        //aplica as regras de validação do formGroup BANK
        Object.keys(bankCtrl.controls).forEach(key => {
          console.log(key, 'bank');
          //atualiza as regras de validação
          bankCtrl.controls[key].setValidators(this.initPaymentMethodBankModel()[key][1]);
          //atualiza os controles
          bankCtrl.controls[key].updateValueAndValidity();
        });

        //remove as regras de validação do formGroup CARD
        Object.keys(cardCtrl.controls).forEach(key => {
          console.log(key, 'card null');
          cardCtrl.controls[key].setValidators(null);
          cardCtrl.controls[key].updateValueAndValidity();
        });
      }

      if (paymentMethodType === this.PAYMENT_METHOD_TYPE.CARD) {
        //remove as regras de validação do formGroup BANK
        Object.keys(bankCtrl.controls).forEach(key => {
                    console.log(key, 'bank null');
          bankCtrl.controls[key].setValidators(null);
          bankCtrl.controls[key].updateValueAndValidity();
        });

        //aplica as regras de validação do formGroup CARD 
        Object.keys(cardCtrl.controls).forEach(key => {
          cardCtrl.controls[key].setValidators(this.initPaymentMethodCardModel()[key][1]);
          cardCtrl.controls[key].updateValueAndValidity();
        });
      }

    });
  }

  save(model: Customer, isValid: boolean) {
    console.log(model, isValid);
  }

}
