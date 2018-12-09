import { NgModule } from '@angular/core';
//import { RouterModule } from '@angular/router';



import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos.routing.module';

@NgModule({
    declarations: [
        CursosComponent
    ],
    imports: [ 
        CommonModule,
        CursosRoutingModule
     ],
    exports: [],
    providers: [CursosService],
})
export class CursosModule {}