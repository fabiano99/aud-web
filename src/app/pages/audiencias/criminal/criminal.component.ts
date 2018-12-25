import { Component, OnInit } from '@angular/core';
import { AudienciasService } from '../audiencias/audiencias.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criminal',
  templateUrl: './criminal.component.html',
  styleUrls: ['./criminal.component.css']
})
export class CriminalComponent implements OnInit {
  public tipos = [];
  public videos = [];
  public abaAtiva: string;

  constructor(private audienciaService: AudienciasService, private sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit() {
    this.audienciaService.getCourse('Criminal').subscribe(data => {
      this.tipos = data[0].tipos;
      console.log(data[0]);
      this.abaAtiva = this.tipos[0].tipo;
    });
  }

  listarVideos(categoria, tipo) {
    this.abaAtiva = tipo;
    this.audienciaService.getVideos(categoria, tipo).subscribe(data => {
      data.forEach(video => {
        video.url = this.novaURL(video.url);
      });
      this.videos = data;
      console.log(data);
    });

    document.querySelectorAll('ul.nav-tabs > li > a.nav-link').forEach(elemento => {
      elemento.classList.remove('active');
    });

    document.querySelector('a#' + this.abaAtiva).classList.add('active');
    console.log(this.abaAtiva);

  }

  novaURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url + '?controls=0');
  }

  escolherVideo(video) {
    this.audienciaService.videoEscolhido(video);
    this.router.navigate(["/video"]);
  }


}
