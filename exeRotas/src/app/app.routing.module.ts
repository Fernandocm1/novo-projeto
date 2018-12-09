import { AuthGuard } from './guards/auth.guard';
import { NgModule } from "@angular/core";
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
    { path: 'perfil', 
        loadChildren: '../app/cursos/cursos.module#CursosModule',canActivate: [AuthGuard]        
    },
    { path: 'sobre', 
        loadChildren: '../app/alunos/alunos.module#AlunosModule'
    },
    { path: 'login', component: LoginComponent},
    { path: '', component: HomeComponent, canActivate: [AuthGuard]}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {}