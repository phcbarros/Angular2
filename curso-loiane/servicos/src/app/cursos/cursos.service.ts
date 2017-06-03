import { Injectable, EventEmitter } from "@angular/core";

import { LogService } from "app/shared/log.service";

@Injectable()
export class CursosService {
    constructor(private logService:LogService){
        console.log('CursosService');
    }
    
    private cursos = ['Angular 2', 'Java', 'C#'];

    static emitirCurso = new EventEmitter<string>();
    public emitirCursoCriado = new EventEmitter<string>();

    getCursos() {
        this.logService.log('Listando cursos criados');
        return this.cursos;
    }

    addCursos(curso) {
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        this.logService.log(`Criou o curso ${curso}`);
        CursosService.emitirCurso.emit(curso);
    }
}