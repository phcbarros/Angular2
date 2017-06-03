# Diretivas

## Tipos

- Componentes
- Diretivas de Atributo
- Diretivas Estruturais

## Diretivas Customizadas
O seletor fica entre colchetes
```typescript
@Directive() {
    selector: ['minhaDiretiva']
}
```

### Diretivas de Atributos
Mudam a aparência ou o comportamento de um elemento, componente ou outra diretiva.

#### ElementRef 
Representa a referência de qualquer elemento HTML no DOM.

#### Renderer
Responsável por renderizar e fazer modificações no DOM.

Obs: Não é recomentado alterar uma propriedade HTML diretamente usando a class ElementRef por causa de vulnerabilidade conforme o exemplo abaixo:

```typescript
ngOnInit(){
    //Errado
    this._elementRef.nativeElement.style.backgroundColor='yellow';
}
```

```typescript
ngOnInit(){
    //Correto
    this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
}
```

#### @HostListener
Responsável por escutar eventos do elemento host da diretiva.

#### @HostBinding 
Permite fazer o binding de um atributo ou uma classe do html para uma variável.

TypeScript
```typescript
import { Directive, Input, HostListener, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  constructor() { }

  @Input() defaultColor: 'white';
  @Input('highlight') highlightColor: 'yellow';

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor;

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
```

HTML
```html
<p [highlight]="'red'" [defaultColor]="'grey'">
  Texto com cores customizadas
</p>
```
### Diretivas Estruturais
Alteram o layout do DOM adicionando, removendo ou manipulando elementos do DOM.

#### TemplateRef
Faz referência ao template da diretiva

```html
<template [ngElse]="mostrarCurso"> <!--template-->
  <div class="bg-danger">Não existem cursos para serem exibidos</div>
</template> <!--template-->
```

#### ViewContainerRef
Faz referência ao container da view, ou seja, ao conteúdo que será renderizado.

```html
<template [ngElse]="mostrarCurso" 
  <div class="bg-danger">Não existem cursos para serem exibidos</div><!--container-->
</template>
```

Exemplo:
```typescript
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) { }

  @Input() set ngElse(condition) {
    if(!condition) {
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    }
    else {
        this._viewContainerRef.clear();
    }
  }
}
```

HTML
```html
<div *ngElse="mostrarCurso" class="bg-danger">
  Não existem cursos para serem exibidos
</div>
```