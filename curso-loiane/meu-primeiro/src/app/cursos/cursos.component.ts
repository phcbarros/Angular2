import { Component, OnInit } from '@angular/core';

import { CursosService } from "app/cursos/cursos.service";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[];

  constructor(private cursosService:CursosService) { }

  ngOnInit() {
    this.nomePortal = 'Cursos Trainning';
    this.cursos = this.cursosService.getCursos();
  }

}
