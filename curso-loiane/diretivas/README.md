# Diretivas

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Diretivas Customizadas

### ElementRef 
Representa a referência de qualquer elemento HTML no DOM

### Renderer
Responsável por renderizar e fazer modificações no DOM

Obs: Não é recomentado alterar uma propriedade HTML diretamente usando a class ElementRef por causa de vulnerabilidade conforme o exemplo abaixo:

```sh
ngOnInit(){
    //Errado
    this._elementRef.nativeElement.style.backgroundColor='yellow';
}
```

```sh
ngOnInit(){
    //Correto
    this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
}
```

### @HostListener
Responsável por escutar eventos do elemento host da diretiva

### @HostBinding 
Permite fazer o binding de um atributo ou uma classe do html para uma variável

TypeScript
```sh
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
```sh
<p [highlight]="'red'" [defaultColor]="'grey'">
  Texto com cores customizadas
</p>
```
