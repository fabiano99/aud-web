import { Component, OnInit } from '@angular/core';

 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  senha = '';
  constructor() { }

  ngOnInit() {
  }

  autenticar() {
    console.log(`email: ${this.email} senha: ${this.senha}`);
  }

}
