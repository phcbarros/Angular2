import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.css']
})
export class OperadorElvisComponent implements OnInit {

  tarefa = {
    descricao: 'Descricação da tarefa',
    responsavel: {
      usuario: { nome: 'paulo'}
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
