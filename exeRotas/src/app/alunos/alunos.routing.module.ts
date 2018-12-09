import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { AlunosComponent } from './alunos.component';

const alunosRoutes = [{
    path: '', component: AlunosComponent}
    
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule{}