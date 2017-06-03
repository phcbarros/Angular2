import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-recuperar-curso',
  templateUrl: './recuperar-curso.component.html',
  styleUrls: ['./recuperar-curso.component.css']
})
export class RecuperarCursoComponent implements OnInit {

  constructor(private _cursoService: CursosService) { }
  private cursoCriado: string;

  ngOnInit() {
    this._cursoService.emitirCursoCriado.subscribe(cursoCriado => this.cursoCriado = cursoCriado);
  }

}
