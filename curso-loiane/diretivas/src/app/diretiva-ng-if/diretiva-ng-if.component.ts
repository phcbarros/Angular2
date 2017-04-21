import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-if',
  templateUrl: './diretiva-ng-if.component.html',
  styleUrls: ['./diretiva-ng-if.component.css']
})
export class DiretivaNgIfComponent implements OnInit {

  cursos = ['Angular', 'AngularJS', 'JavaScript', 'C#', 'Python', 'Go'];
  mostrarCursos = false;

  constructor() { }

  ngOnInit() {
  }

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }
}
