import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso.component';
import { RecuperarCursoComponent } from '../recuperar-curso/recuperar-curso.component';

@NgModule({
    declarations: [
        CriarCursoComponent,
        RecuperarCursoComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CriarCursoComponent
    ],
    //providers: [CursosService]
})
export class CriarCursoModule { }
