import { NgModule } from "@angular/core";
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';

const cursosRoutes: Routes = [
    { path: '', component: CursosComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(cursosRoutes);

@NgModule({
    imports:[RouterModule.forChild(cursosRoutes)],
    exports: [RouterModule]
})
export class CursosRoutingModule {}