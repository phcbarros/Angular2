import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';
import { CursosService } from "app/cursos/cursos.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CursosComponent,
    CursosDetalheComponent
  ],
  exports: [
    CursosComponent
  ],
  providers: [CursosService]
})
export class CursosModule { }
