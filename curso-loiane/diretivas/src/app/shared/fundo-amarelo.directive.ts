import { Directive, OnInit, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective implements OnInit {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer) { }

  ngOnInit(){
    //não recomendado
    //this._elementRef.nativeElement.style.backgroundColor='yellow';
    this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
  }
}
