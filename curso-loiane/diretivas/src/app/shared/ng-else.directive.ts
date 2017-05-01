import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  private _hasView = false;

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) { }

  @Input() set ngElse(condition) {

    if(!condition && !this._hasView) {
      this._hasView = true;
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    }
    else if(condition && this._hasView) {
      this._hasView = false;
      this._viewContainerRef.clear();
    }
  }

}
