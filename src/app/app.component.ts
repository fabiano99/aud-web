import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './pages/admin/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AudWeb';
  autenticado = localStorage.length;

  constructor(private adminService: AdminService , public router: Router) {}
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    if (!localStorage.length) {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.adminService.logout();
    this.router.navigate(['/login']);
  }
}
