import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {AudienciasService} from './audiencias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-audiencias',
  templateUrl: './audiencias.component.html',
  styleUrls: ['./audiencias.component.css']
})
export class AudienciasComponent implements OnInit {

  private  cursos: any[];

  private abaAtiva: string;
  constructor(private audienciaService: AudienciasService, private router: Router) { }

  rota;
  ngOnInit() {
    if (!localStorage.length) {
      this.router.navigate(['/login']);
    }
    this.getCursos();
  }

  getCursos() {
    this.audienciaService.getCourses().subscribe((data) => {
      this.cursos = data;
      console.log(data);
    });

  }

  setRota(rota) {

    this.rota = "/audiencias/" + rota;
  }
}


