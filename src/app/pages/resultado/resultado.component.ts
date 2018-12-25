import { Component, OnInit } from '@angular/core';
import { AudienciasService } from '../audiencias/audiencias/audiencias.service';
import { Router } from '@angular/router';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  private acertos = 0;
  private email;
  private usuario;
  private certificado = {};
  private duplicado = false;
  private mensagem;
  private horas;
  private tituloVideo;
  constructor(private adminService: AdminService, private audienciaService: AudienciasService, private router: Router) { }

  ngOnInit() {
    this.audienciaService.getVideo(this.audienciaService.videoSelecionado).subscribe(data => {
      this.horas = data[0].horas;
      this.tituloVideo = data[0].titulo;
    });

    this.acertos = this.audienciaService.acertos;
    this.email = localStorage.getItem('usuario');
    this.usuario = this.adminService.autenticar(this.email).subscribe(data => {

      this.usuario = data[0];

      // Descobrir se já existe certificado para esse video
      this.usuario.certificados.forEach(element => {
        if (element.video == this.audienciaService.videoSelecionado) {
          this.mensagem = 'Não é possível salvar. Certificado já existe!';
          this.duplicado = true;
        }
      });

    });
  }

  salvarCertificado() {
    if (this.acertos >= 7) {

      if (!this.duplicado) {
        this.certificado = {
          titulo: this.tituloVideo,
          video: this.audienciaService.videoSelecionado,
          horas: this.horas,
          acertos: this.acertos
        };

        this.usuario.certificados.push(this.certificado);

        this.adminService.updateUser(this.usuario, this.email ).subscribe( data => {
          console.log(data[0]);
          this.router.navigate(['home']);
        });
      }
    }
  }

}
