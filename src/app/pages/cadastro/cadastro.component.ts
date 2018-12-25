import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router) { }

  usuario = {
    nome: '',
    senha: '',
    email: '',
    estado: '',
    cidade: ''
  };

  ngOnInit() {
  }

  cadastro() {
    localStorage.setItem('temp', this.usuario.email);
    console.log(this.usuario);
    this.adminService.insertUser(this.usuario).subscribe( data => {
      if (data) {
       this.router.navigate(['/cadastro2']);
      }
    });
  }

}

export let EMAIL: string;
