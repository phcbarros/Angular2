import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valor = 10;
  destruido = false;

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
