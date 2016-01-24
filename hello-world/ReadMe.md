#Hello World App

Exemplo retirado do site https://angular.io/

#Estilizando Components no Angular 2

Existem 3 jeitos de estilizar o compomente

1. [Component inline styles] (#component-inline-styles)
1. [Style urls] (#style-urls)
1. [Template inline styles] (#template-inline-styles)

###Component inline styles 

Recebe uma lista contendo o seus estilos.
```javascript
@Component({
    selector: "hello-world",
    templateUrl: "src/hello_world.html",
    styles: [`
        .name {
            color: blue;
        }
    `]
})
```

###Style urls
Recebe um array com o caminho das folhas de estilos que serão carregadas. 
```javascript
@Component({
    selector: "hello-world",
    templateUrl: "src/hello_world.html",
    styleUrls: ["src/style.css"]
})
```

###Template inline styles
Esses estilos são escritos diretamente no html.

```html
<style>
    .name {
        color: yellow;
    }
</style>

<label for="" class="name">Name:</label>
<input type="text" [(ngModel)]="yourName" placeholder="Enter a name here">
<hr>
<h1 [hidden]="!yourName">Hello {{yourName}}!</h1>
<input type="button" (click)="reset()" value="Limpar">
```

Obs.:
Esses estilos serão colocados dentro da tag HEAD. Caso use as 3 formas em um mesmo compomente, o component inline styles é o primeiro a ser carregado, 
seguido pelo template inline styles e por último o style urls.