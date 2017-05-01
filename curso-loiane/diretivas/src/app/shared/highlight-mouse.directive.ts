import { Directive, HostListener, HostBinding,
  ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer
  ) { }
  
  //forma muito verbosa
  // @HostListener('mouseenter') onMouseOver(){
  //    //this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
  // }

  // @HostListener('mouseleave') onMouseLeave(){
  //    //this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'white');
  // }

  //forma menos verbosa
  @HostListener('mouseenter') onMouseOver(){
     this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
     this.backgroundColor = 'white';
  }

  //@HostBinding('style.backgroundColor') backgroundColor;
  @HostBinding('style.backgroundColor') get setColor() {
    //mais alguma lógica a ser executada
    return this.backgroundColor;
  };

  private backgroundColor;

}
