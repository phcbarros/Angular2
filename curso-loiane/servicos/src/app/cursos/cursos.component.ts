import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos = [];
  private _cursosService: CursosService;

  constructor() { 
    this._cursosService = new CursosService();
  }

  ngOnInit() {
    this.cursos = this._cursosService.getCursos();
  }

}
