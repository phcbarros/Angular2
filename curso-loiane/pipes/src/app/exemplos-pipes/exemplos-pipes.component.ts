import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  constructor() { }

  livro: any = {
    titulo: 'the ghost in the shell',
    avaliacao: 4.5689,
    preco: 45.62,
    dataLancamento: new Date(2016, 10, 29),
    descricao: 'Influenciado por obras “cyberpunk” do final dos anos 1980 como Akira e por filmes como Blade Runner - O Caçador de Androides, o cenário escolhido por Masamune Shirow para The Ghost in the Shell foi o futuro distópico de 2029, onde a alta tecnologia se mistura a uma sociedade decadente e desigual.É nesse mundo à beira do colapso que a Major Motoko Kusanagi encabeça a Seção 9 da Segurança Pública japonesa. Motoko é uma ciborgue altamente treinada incumbida de desmantelar uma série de crimes cibernéticos realizados por um hacker conhecido como o Mestre dos Fantoches. Em meio à caça ao criminoso virtual, Masamune Shirow insere na trama questionamentos existencialistas, ponderando até mesmo se alguém provido meramente de Inteligência Artificial é, de fato, um ser vivo. E foi exatamente essa mistura de ficção científica, ação e temas filosóficos que fizeram do mangá The Ghost in the Shell uma leitura obrigatória.'
  };

  ngOnInit() {
  }

}