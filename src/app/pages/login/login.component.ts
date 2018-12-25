import { Component, OnInit } from '@angular/core';
import { AdminService, usuario } from '../admin/admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  senha = '';
  mensagem: string;

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit() {
    if (!localStorage.length) {
      this.router.navigate(['/login']);
    }
  }

  autenticar() {
    this.adminService.autenticar(this.email).subscribe(data => {
      if (data[0] === undefined) {
        this.mensagem = 'Usuário inexistente';
      } else if (data[0].senha === this.senha) {
        console.log(data[0]);
        this.mensagem = 'Bem vindo!';
        usuario.Nome = data[0].nome;
        localStorage.setItem('usuario', data[0].email);
        this.router.navigate(['/home']);
      } else {
        this.mensagem = 'Senha incorreta';
      }

    });
  }

}
