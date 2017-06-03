import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers: [CursosService]
})
export class CriarCursoComponent implements OnInit {

  cursos = [];

  constructor(private _cursosService: CursosService) { }

  ngOnInit() {
    this.cursos = this._cursosService.getCursos();
    this._cursosService.emitirCursoCriado.subscribe((curso) => this.cursos.push(curso));
  }

  adicionarCurso(curso) {
    this._cursosService.addCursos(curso);
  }

}
