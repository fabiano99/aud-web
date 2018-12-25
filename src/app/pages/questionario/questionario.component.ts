import { Component, OnInit } from '@angular/core';
import { AudienciasService } from '../audiencias/audiencias/audiencias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioComponent implements OnInit {

  private anotacoes = 'Não há anotações';
  private questoes;
  private questaoAtual = 0;
  private questionario; // Resposta da questão atual que o usuário escolheu
  private respostasDoUsuario = [];
  private acertos = 0;
  private gabarito;
  constructor(private audienciaService: AudienciasService, private router: Router) { }

  ngOnInit() {
    this.anotacoes = this.audienciaService.anotacoes;
    this.audienciaService.getVideo(this.audienciaService.videoSelecionado)
    .subscribe(data => {
      this.questoes = data[0].questoes;
      this.gabarito = data[0].gabarito;
      console.log(this.questoes);
    });

  }

  proximaQuestao() {
    if (this.questaoAtual == 9) {
      document.querySelector('#botao-avancar').classList.add('disabled');

    } else {
      if (++this.questaoAtual == 9) {
        document.querySelector('#botao-avancar').classList.add('disabled');
        document.querySelector('#botao-finalizar').classList.remove('disabled');
      }

      this.respostasDoUsuario.push(this.questionario);
    }

  }

  voltarQuestao() {
    if (this.questaoAtual == 0) {
      document.querySelector('#botao-voltar').classList.add('disabled');
    } else {
      if (--this.questaoAtual == 0) {
        document.querySelector('#botao-voltar').classList.add('disabled');
      }
      document.querySelector('#botao-avancar').classList.remove('disabled');
    }
  }

  finalizar() {
    console.log(this.questaoAtual);
    if (this.questaoAtual === 9) {
      this.respostasDoUsuario.push(this.questionario);
      console.log(this.respostasDoUsuario);
      for (let index = 0; index < this.gabarito.length; index++) {
        if (this.respostasDoUsuario[index] === this.gabarito[index]) {
          this.acertos++;
        }

      }

      console.log(`${this.acertos} Acertos`);
      this.audienciaService.acertos = this.acertos;
      this.router.navigate(['resultado']);
    }

  }



}
