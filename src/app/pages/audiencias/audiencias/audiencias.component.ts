import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {AudienciasService} from './audiencias.service';

@Component({
  selector: 'app-audiencias',
  templateUrl: './audiencias.component.html',
  styleUrls: ['./audiencias.component.css']
})
export class AudienciasComponent implements OnInit {

  private  usuarios: any[];
  constructor(private audienciaService: AudienciasService) { }

  ngOnInit() {
  }

  user() {
    this.audienciaService.getUsers().subscribe((data) => {
      this.usuarios = data;
      console.log(data);
    });

  }
}
