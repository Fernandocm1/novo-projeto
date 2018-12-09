import { AuthService } from './../login/auth.service';
import { AlunosService } from './alunos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  private alunos: any[] = [];

  constructor(private alunosService: AlunosService, 
              private authService: AuthService) { }

  ngOnInit() {
      this.alunos = this.alunosService.getAlunos();
      this.authService.manterMenu();
     
  }
  ngOnDestroy(){
  }
  

}
