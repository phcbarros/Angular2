import { Injectable } from "@angular/core";

@Injectable()
export class CursosService {

    cursos = ['Angular 2', 'Java', 'C#'];

    constructor(){
        console.log('CursosService');
    }

    getCursos() {
        return this.cursos;
    }

    addCursos(curso) {
        this.cursos.push(curso);
    }
}