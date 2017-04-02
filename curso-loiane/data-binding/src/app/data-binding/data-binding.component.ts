import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  nomeCurso: string = 'Angular 2 - Data Binding';
  urlImagem: string = 'http://lorempixel.com/400/200/';

  constructor() { }

  ngOnInit() {
  }

  getValor(): number {
    return 1;
  }
  
  getCurtir(): boolean {
    return true;
  }

}
