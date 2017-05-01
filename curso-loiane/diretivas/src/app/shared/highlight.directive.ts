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
