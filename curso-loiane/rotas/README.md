# Rotas

O *_Angular Router_* permite a navegação de um view para outra por meio das ações do usuário.

## Introdução

O modelo atual para navegação do navegador é:

* Digita a URL na barra de endereço e navega até a página
* Clica em um link e navega até a página
* Clica no botão de voltar ou avançar do navegador e navega para traz ou para frente do seu histórico

 O Angular **_Router_** implementa esse mesmo mecanismo,interpretando a URL como uma instrução. É possível passar parâmetros opcionais, você pode ligar um link a uma rota, até mesmo navegar imperativamente quando um usuário clica em um botão ou seleciona algum item em uma combobox. O Router grava toda essas ações no histórico do navegador fazendo com que os botões de voltar e avançar funcionem corretamente.

### \<base href>
Usada para dizer ao router como deverá compor a url de navegação. Esse elemento *_\<base>_* deve ser adicionado no index.html da aplicação como primeiro filho da tag *_\<head>_*.

```html
<!-- index.html -->
<head>
    <base href="/">
</head>
```

### Configuração

Para configurar uma rota é necessário criar um arquivo de configuração e nele efetuar o import do Angular Router.

```typescript
//app.routing.ts
import { Routes, RouterModule } from '@angular/router';
```

Em seguida é necessário definir e configurar as rotas da sua aplicação.

```typescript
//app.routing.ts
import { HomeComponent } from 'app/home/home.component';
import { LoginComponent } from 'app/login/login.component';
import { CursosComponent } from 'app/cursos/cursos.component';
import { CursoDetalheComponent } from 'app/curso-detalhe/curso-detalhe.component';

const APP_ROUTES: Routes = [
    { path: 'cursos', component: CursosComponent },
    { path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
```
Em seguida efetue o import no app.module

```typescript
//app.module.ts
import { routing } from './app.routing';

@NgModule({
  imports: [
    routing
  ]
})
```

Obs.: 
1. Quando é criado uma aplicação usando 
**_Router Service_** essa aplicação tem somente uma instância desse serviço (singleton)

2. O metódo __*RouterModule.forRoot*__ é responsável por configurar suas rotas.

3. Não é necessário colocar o barra (/) no caminho das rotas.

### Router Outlet

Diretiva responsável por informar ao Angular onde o componente deverá ser renderizado quando o usuário clicar em algum link ou digitar na barra de endereços.

```html
<!-- app.component.html -->
<router-outlet></router-outlet>
<!-- Routed views go here -->
```

### Router Links

A diretiva **_RouterLink_** na tag \<a> é responsável por efetuar a navegação para o componente associado quando o usuário clicar nesse elemento.

```html
<a routerLink="">Rotas NG2</a>
<ul>
    <li><a routerLink="login">Login</a> </li>
    <li><a routerLink="cursos">Cursos</a></li>
</ul>
```

É possível usar a diretiva RouterLink como property binding podendo assim passar informações dinâmicas ao invés de estáticas. O RouterLink recebe um array de parâmetros, o primeiro é o nome da rota em seguida os demais parâmetros.

```html
<li><a [routerLink]="['curso', idCurso.value]">Cursos Detalhe</a></li>
<input #idCurso [(ngModel)]="idCurso.value">
```

A diretiva **_RouterLinkActive_** ajuda a distiguir qual rota está ativa. O router adiciona a classe CSS **_active_** no elemento associado.

```html
<ul>
    <li routerLinkActive="active">...</li>
    <li routerLinkActive="active">...</li>
</ul>
```

### Parâmetros

Para acessar algum parêmetro da rota é preciso importar no seu componente o **_ActivatedRoute_** da biblioteca @angular/router.

```typescript
//curso-detalhe.component.ts
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
```

Em seguida injetar no construtor do componente e increver-se para ser notificado a cada mudança na rota. Por boas práticas é bom desinscrever-se quando o componte é destuído.

```typescript
//curso-detalhe.component.ts

inscricao: Subscription;

constructor(private route: ActivatedRoute) {  }

ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
    });
  }

ngOnDestroy() {
    this.inscricao.unsubscribe();
}
```

Caso não seja necessário ficar observando as mudanças da rota pode-se usar o método **_snapshot_** que tira uma foto da rota inicial.

```typescript
//curso-detalhe.component.ts
constructor(private route: ActivatedRoute) {  }

ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }
```

