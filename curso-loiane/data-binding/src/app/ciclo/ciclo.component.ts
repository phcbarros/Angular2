import {
  Component,
  OnChanges, // antes e quando o valor de property-binding é atualizado
  OnInit, // quando o componente é inicializado
  DoCheck, // a cada clico de verificação de mudança
  AfterContentInit, // depois de inserir conteúdo externo na view
  AfterContentChecked, // a cada verificação de conteúdo inserido
  AfterViewChecked, // a cada verificação de conteúdo/conteúdo filho
  OnDestroy, // antes da diretiva/componente ser destruido
  Input
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements
  OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy {

  @Input() valor: number;

  constructor() { }

  ngOnChanges() {
    this.log('ngOnChanges => antes e quando o valor de property-binding é atualizado');
  }

  ngOnInit() {
    this.log('ngOnInit => quando o componente é inicializado');
  }

  ngDoCheck(): void {
    this.log('ngDoCheck => a cada clico de verificação de mudança');
  }

  ngAfterContentInit(): void {
    this.log('ngAfterContentInit => depois de inserir conteúdo externo na view');
  }

  ngAfterContentChecked(): void {
    this.log('ngAfterContentInit => a cada verificação de conteúdo inserido');
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked => a cada verificação de conteúdo/conteúdo filho');
  }

  ngOnDestroy(): void {
    this.log('ngOnDestroy: => antes da diretiva/componente ser destruido');
  }

  log(hook: string): void {
    console.log(hook);
  }

}
