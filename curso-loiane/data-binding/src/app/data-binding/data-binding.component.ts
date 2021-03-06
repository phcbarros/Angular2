import { Component, OnInit } from '@angular/core';

import { DataBindingService } from 'app/data-binding/data-binding.service';
import { Aba } from 'app/data-binding/aba';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  nomeCurso = 'Angular 2 - Data Binding';
  urlImagem = 'http://lorempixel.com/400/200/';
  valorAtual = '';
  valorSalvo = '';
  isMouseOver = false;
  nome = '';
  pessoa = { nome: '', idade: 18 };
  abaSelecionada: Aba;
  abas: Aba[];
  valorInicial = 15;

  constructor(private dataBindingService: DataBindingService) { }

  ngOnInit() {
    this.abas = this.dataBindingService.getAbas();
    this.abaSelecionada = this.abas[1];
  }

  getValor(): number {
    return 1;
  }

  getCurtir(): boolean {
    return true;
  }

  onClick(): void {
    alert('Fui clicado');
  }

  onKeyUp(evento: KeyboardEvent): void {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor): void {
    this.valorSalvo = valor;
  }

  onMouseOverOut(): void {
    this.isMouseOver = !this.isMouseOver;
  }

  selecionarAba(aba: Aba) {
    this.abaSelecionada = aba;
  }

  exibirAbaSelecionada(id: number): boolean {
    return this.abaSelecionada.id === id;
  }

  onMudouValor(evento): void {
    console.log(evento.novoValor);
  }
}
