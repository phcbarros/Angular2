import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class CursosService {

    emitirCursoCriado = new EventEmitter<string>();
    static emitirCurso = new EventEmitter<string>();

    private cursos = ['Angular 2', 'Java', 'C#'];

    constructor(){
        console.log('CursosService');
    }

    getCursos() {
        return this.cursos;
    }

    addCursos(curso) {
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.emitirCurso.emit(curso);
    }
}