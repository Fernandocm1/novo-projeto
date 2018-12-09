import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from './cursos.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];
  pagina: number;
  inscricao: Subscription;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private cursosService: CursosService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.manterMenu();
    this.cursos = this.cursosService.getCursos();
    
     this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    );
    

  }
  ngOnDestroy(){
    //this.inscricao.unsubscribe();
  }
  proximaPagina(){
    //this.pagina++;
    this.router.navigate(['/cursos'],{
      queryParams:{'pagina': ++this.pagina}
    });
  }
  

}