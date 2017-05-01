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
import { Directive, HostListener, HostBinding, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer
  ) { }
  
  @HostListener('mouseenter') onMouseOver(){
     this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
     this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') backgroundColor;
}
```

HTML
```sh
<p highlightMouse>
  Texto com a diretiva highlightMouse
</p>
```
