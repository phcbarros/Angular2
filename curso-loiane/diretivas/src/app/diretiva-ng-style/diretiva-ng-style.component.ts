import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-style',
  templateUrl: './diretiva-ng-style.component.html',
  styleUrls: ['./diretiva-ng-style.component.css']
})
export class DiretivaNgStyleComponent implements OnInit {

  ativo = false;
  tamanhoFonte = 16;
  constructor() { }

  ngOnInit() {
  }

  onAtivarDesativar() {
    this.ativo = !this.ativo;
  }
}
