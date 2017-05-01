import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  diretivas = [
    'NgIf',
    'NgSwitch',
    'NgFor',
    'NgClass',
    'NgStyle',
    'Operador Elvis',
    'NgContent',
    'Diretivas Customizadas'];

  abaSelecionada = '';

  ngOnInit() {
    this.abaSelecionada = this.diretivas[0];
  }

  selecionarAba(aba) {
    this.abaSelecionada = aba;
  }

}
