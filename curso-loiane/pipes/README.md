# Pipes (Filtros)

Usado para transformar valores dentro do template.

## Pipes Nativos

O Angular já tem implementado alguns pipes como DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, DecimalPipe e PercentPipe.

Diferentemente do AngularJS (1.*) o Angular não implementa os pipes FilterPipe e OrderByPipe por questões de performance, otimização e minificação.

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

## Internacionalização i18N

Os pipes de data e moeda vem configurados por padrão no formato americano (en-US). Para alterar a configuração para o português (pt-BR) é preciso importar o **_LOCALE_ID_** do core do Angular e configurá-lo no array de providers no módulo raiz da sua aplicação.

Obs: O uso o **_LOCALE_ID_** ainda é expirimental.

```typescript
//app.module.ts
import { LOCALE_ID } from '@angular/core';
...

@NgModule({
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ]
})
```

A configuração também pode ser feita por meio de um serviço.

```typescript
//SettingsService.ts
import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  constructor() { }

  getLocale() {
    return 'pt-BR';
  }
  
}
```

```typescript
//app.module.ts
import { LOCALE_ID } from '@angular/core';
...

@NgModule({
  providers: [
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: settingsService => settingsService.getLocale()
    }
  ]
})
```

## Pipes puros e impuros

Há duas categorias de pipes: *_puro_* e *_impuro_*. Pipes são puros por padrão. Cada pipe visto até agora são puros. Criamos um filtro impuro alterando o valor da flag pure para false:

```typescript
//filtro-array-impuro.pipe.ts
@Pipe({
  name: 'filtroArrayImpuro',
  pure: false
})
```

## Pipes Puros

O Angular executa um *_pipe puro_* somente quando uma *_mudança_* pura é detectada para uma valor já inserido. Uma mudança pura é uma mudança de um valor primitivo (String, Number, Boolean, Symbol) ou de uma referência de um objeto (Date, Array, Function Objetct). 

O Angular ignora as mudanças dentro de um objeto, ou seja, não será executado a chamada de um pipe puro quando uma propriedade de um objeto é alterado ou quando um novo item é inserido em um array pois a sua referência não foi alterada. Tornando assim a detecção de mudança muito mais rápida.

Exemplo de pipe puro:

```typescript
//filtro-array.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    if(value.length === 0 || args === undefined)
      return value;

    let filter = args.toLowerCase();
    return value.filter(v => v.toLowerCase().indexOf(filter) != -1);
  }

}
```

```html
<!-- exemplos-pipes.html -->
<form>
  <div class="form-group">
    <label for="filtroTxt">Filtro</label>
    <input type="text" name="filtroTxt" class="form-control" [(ngModel)]="filtro">
  </div>
  <div class="form-group">
    <label for="novoLivroTxt">Novo Livro</label>
    <input type="text" name="novoLivroTxt" class="form-control" 
      #novoLivro 
      (keyup.enter)="addLivro(novoLivro.value); novoLivro.value='';">
    <small class="form-text text-muted">Pressione enter para inserir um novo livro</small>
  </div>
</form>
<h4>Pipes Puros (Pure Pipes)</h4>
<ul>
  <li *ngFor="let item of livros | filtroArray:filtro">{{ item }}</li>
</ul>
```

```typescript
//exemplos-pipes.component.ts
export class ExemplosPipesComponent implements OnInit {

  livros: string[] = ['Java', 'Angular'];

}
```
## Pipes impuros

O Angular executa um *_pipe impuro_* durante cada ciclo de detecção de mudança do componente. Um pipe impuro é chamado sempre que uma tecla é digitada ou movimento do mouse, ou seja, é muito caro pro Angular ficar executando esse tipo de filtro.

Exemplo de pipe impuro:

```typescript
//filtro-array-impuro.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

import { FiltroArrayPipe } from "app/filtro-array.pipe";

@Pipe({
  name: 'filtroArrayImpuro',
  pure: false
})
export class FiltroArrayImpuroPipe extends FiltroArrayPipe {

}
```

```html
<!-- exemplos-pipes.html -->
<h4>Pipes Impuros (Impure Pipes)</h4>
<ul>
  <li *ngFor="let item of livros | filtroArrayImpurp:filtro">{{ item }}</li>
</ul>
```

Você pode herdar de FiltroArrayPipe para provar que nada muda internamente. A única diferença é a flag *_pure_* no metada do pipe.

## Forma correta de implementar Pipes

A melhor forma de aplicar pipes é colocando a lógica no seu componente ou em um serviço.

```typescript
export class ExemplosPipesComponent implements OnInit {

  livros: string[] = ['Java', 'Angular'];
  filtro: string = '';

  obterLivros() {
    if (this.livros.length === 0 || this.filtro === null || this.filtro.trim() === '')
      return this.livros;

    return this.livros.filter(value => {
      if(value.toLocaleLowerCase().indexOf(this.filtro.toLowerCase()) !== -1)
        return true;
      return false;
    });
  }

}
```

```html
<!-- exemplos-pipes.html -->
<h4>Maneira correta de usar pipes em projetos reais</h4>
<ul>
  <li *ngFor="let item of obterLivros()">{{ item }}</li>
</ul>
```

## Async Pipe

O *_AsyncPipe_* é um exemplo de pipe impuro que aceita *_Promises_* ou *_Observable_* como entrada e se inscreve automaticamente retornando os valores emitidos.