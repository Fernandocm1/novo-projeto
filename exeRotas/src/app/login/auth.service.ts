import { Usuario } from './usuario';
import { Injectable, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  autent = 0;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

    if(usuario.nome === 'usuario@email.com' &&
      usuario.senha === '123456') {
        
        this.usuarioAutenticado = true;

        this.mostrarMenuEmitter.emit(true);
        
        

        this.router.navigate(['/perfil']);

        } else{
          this.usuarioAutenticado = false;
          this.mostrarMenuEmitter.emit(false);
        }

  }
  mostrarMenu(){
    this.mostrarMenuEmitter.emit(true);
    this.router.navigate(['/sobre']);
    
  }
  manterMenu(){
    this.mostrarMenuEmitter.emit(true);
  }
  removerMenu(){
    this.mostrarMenuEmitter.emit(false);
  }
  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
