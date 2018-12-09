import { FormsModule } from '@angular/forms';
import { AlunosService } from './alunos.service';
import { AlunosRoutingModule } from './alunos.routing.module';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosComponent } from './alunos.component';

@NgModule({
    declarations: [AlunosComponent],
    imports: [
        CommonModule,
        FormsModule,
        AlunosRoutingModule
        
    ],
    exports: [],
    providers: [AlunosService],
})
export class AlunosModule {}