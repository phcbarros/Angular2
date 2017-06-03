# Pipes

Usado para transformar valores dentro do template.

## Pipes Nativos

O Angular já tem implementado alguns pipes como DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, DecimalPipe e PercentPipe.

Diferentemente do AngularJS (1.*) o Angular não implementa os pipes FilterPipe e OrderByPipe por questões de performance.

## Encadeando Pipes

É possível encadear pipes conforme no exemplo abaixo:

```html
{{ dataDeAniversario : date:'dd-MMM-yyyy' | uppercase }}
```

## Pipes Customizados

Você pode criar os seus próprios pipes.

Exemplo: 
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const values = value.split(' ');
    let result = [];

    for(value of values) {
      result.push(this.capitalize(value))
    }

    return result.join(' ');
  }

  capitalize(value:string) {
    return `${value.substr(0,1).toUpperCase()}${value.substr(1).toLocaleLowerCase()}`
  }

}
```

- Um pipe é uma classe decorado com o metadata pipe
- A classe Pipe implementa o método **_transform_** da interface **_PipeTransform_** que recebe um valor de entrada, seguido por parametros opcionais e retorna o valor transformado.
- Para dizer ao Angular que a classe criada é um Pipe, você precisa aplicar o decorator **_@Pipe_** que é importado do core da biblioteca do Angular.
- O decorator **_@Pipe_** permite definir o nome que será usado dento do template html. O nome deve ser um identificador JavaScript válido.