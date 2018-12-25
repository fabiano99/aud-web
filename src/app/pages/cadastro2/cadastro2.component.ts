import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';
import { Router } from '@angular/router';
import { EMAIL } from '../cadastro/cadastro.component';

@Component({
  selector: 'app-cadastro2',
  templateUrl: './cadastro2.component.html'
})
export class Cadastro2Component implements OnInit {

  usuario = {
    instituicao: '',
    profissao: '',
    periodo: ''
  };

  private email;
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.email = localStorage.getItem('temp');
    localStorage.clear();
  }


  cadastro() {
    this.adminService.updateUser(this.usuario, this.email).subscribe(data => {
      this.router.navigate(['/login']);
    });

  }

}
