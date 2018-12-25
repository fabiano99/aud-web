import { Component, OnInit } from '@angular/core';
import { AudienciasService } from '../audiencias/audiencias/audiencias.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  public video;
  public anotacoes;

  constructor(private audienciaService: AudienciasService, private sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit() {
    this.audienciaService.getVideo(this.audienciaService.videoSelecionado).subscribe(data => {
      this.video = data[0];
      this.video.url = this.novaURL(this.video.url);

    });
  }

  novaURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url + '?controls=0');
  }

  responderQuestionario(idVideo) {
    this.audienciaService.escreverAnotacao(this.anotacoes);
    console.log(this.anotacoes);
    this.router.navigate(['questionario']);
  }

}
