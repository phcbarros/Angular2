# Model-Driven Forms - Conditional Validation

## Aplicando validação condicinal quando o tipo método de pagamento alterar

Criado o método subscribePaymentTypeChanges que irá ficar escutando as alterações executadas no controle **_type_**. Quando alguma mudança ocorre é efetuada a verificação do tipo de pagamento que foi selecionado pelo usuário e as regras de valiação são atualizadas conforme definido no modelo.

```javascript
subscribePaymentTypeChanges() {
    //controles do formulário
    const pmCtrl = (<any>this.myForm).controls.paymentMethod;
    const bankCtrl: FormGroup = pmCtrl.controls.bank;
    const cardCtrl: FormGroup = pmCtrl.controls.card;
    
    //inicializando o evento de detecção de mudanças no controle type
    const changes$ = pmCtrl.controls.type.valueChanges;
    
    //inscrevendo-se no evento
    changes$.subscribe(paymentMethodType => {
      if (paymentMethodType === this.PAYMENT_METHOD_TYPE.BANK) {
        Object.keys(bankCtrl.controls).forEach(key => {
          bankCtrl.controls[key].setValidators(this.initPaymentMethodBankModel()[key][1]);
          bankCtrl.controls[key].updateValueAndValidity();
        });
        Object.keys(cardCtrl.controls).forEach(key => {
          cardCtrl.controls[key].setValidators(null);
          cardCtrl.controls[key].updateValueAndValidity();
        });
      }
      ...
      }
    });
  }
```

### Notas:
1. **_FormControl_** possui o método **setValidators** para atualizar as regras de validação.
2. Executar o método setValidators **não dipara** nenhum evento de atualização então somos obrigados a executar o método **_updateValueAndValidity_** para atualizar as regras de validação.

Por exemplo, o tipo de pagamento **Bank**, é o valor selecionado por padrão e todos os campos são obrigatórios. Se nós entrarmos com os valores para todos os campos, o estado do formulário será atualizado para **VÁLIDO**. Então quando clicamos no botão **CARD** o estado do formuário será atualizado para **INVÁLIDO** porque não entramos com os valores dos campos do cartão ainda.

# Fonte
[Scotch.io - How to Implement Conditional Validation in Angular 2 Model-driven Forms](https://scotch.io/tutorials/how-to-implement-conditional-validation-in-angular-2-model-driven-forms)