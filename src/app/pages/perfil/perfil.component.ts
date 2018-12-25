import { Component, OnInit } from '@angular/core';
import { AudienciasService } from '../audiencias/audiencias/audiencias.service';
import { AdminService } from '../admin/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  private email;
  private usuario;
  private certificados;
  private tituloVideo;
  private ArrayCertificado = [];
  private aluno = {
    tituloVideo: '',
    acertos: '',
    horas: ''
  };

  constructor(private adminService: AdminService, private audienciaService: AudienciasService, private router: Router) { }

  ngOnInit() {
    if (!localStorage.length) {
      this.router.navigate(['/login']);
    }
    this.email = localStorage.getItem('usuario');

    this.adminService.autenticar(this.email).subscribe(data => {
      this.usuario = data[0];
      this.certificados = this.usuario.certificados;
    });


  }

  getTituloVideo(idVideo) {
     this.audienciaService.getVideo(idVideo).subscribe(data => {
      this.tituloVideo = data[0].titulo;
    });
  }

}
