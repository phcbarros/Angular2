import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
  //outputs: ['mudouValor']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;
  @Output() mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  incrementa() :void {
    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa(): void {
    this.valor--;
    this.mudouValor.emit({ novoValor: this.valor });
  }

}
