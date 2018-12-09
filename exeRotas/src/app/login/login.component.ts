import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) { }

  ngOnInit() {
    document.body.classList.add('bg-img');
    this.authService.removerMenu();
  }
  ngOnDestroy(){
    document.body.classList.remove('bg-img');
  }
  fazerLogin(){
    //console.log(this.usuario);
    this.authService.fazerLogin(this.usuario);
  }
  aparecer(){
    //console.log(this.usuario);
    this.authService.mostrarMenu();
  }

}
