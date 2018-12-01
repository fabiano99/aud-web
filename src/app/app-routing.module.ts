import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AudienciasComponent } from './pages/audiencias/audiencias/audiencias.component';
import { CivilComponent } from './pages/audiencias/civil/civil.component';
import { ConciliacaoComponent } from './pages/audiencias/conciliacao/conciliacao.component';
import { CriminalComponent } from './pages/audiencias/criminal/criminal.component';
import { JuriPopularComponent } from './pages/audiencias/juri-popular/juri-popular.component';
import { TrabalhoComponent } from './pages/audiencias/trabalho/trabalho.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'audiencias/audiencias', component: AudienciasComponent},
  {path: 'audiencias/civil', component: CivilComponent},
  {path: 'audiencias/conciliacao', component: ConciliacaoComponent},
  {path: 'audiencias/criminal', component: CriminalComponent},
  {path: 'audiencias/juri-popular', component: JuriPopularComponent},
  {path: 'audiencias/trabalho', component: TrabalhoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
