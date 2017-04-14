import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valor: number = 10;
  destruido: boolean = false;

  mudarValor(): void {
    this.valor++;
  }

  criarComponente(): void {
    this.destruido = false;
  }

  destruirComponente() {
    this.destruido = true;
  }
}