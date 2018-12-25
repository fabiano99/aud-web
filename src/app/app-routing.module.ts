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
import { Cadastro2Component } from './pages/cadastro2/cadastro2.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { VideoComponent } from './pages/video/video.component';
import { QuestionarioComponent } from './pages/questionario/questionario.component';
import { ResultadoComponent } from './pages/resultado/resultado.component';
import { PerfilComponent } from './pages/perfil/perfil.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'audiencias', component: AudienciasComponent},
  {path: 'audiencias/Civel', component: CivilComponent},
  {path: 'audiencias/conciliacao', component: ConciliacaoComponent},
  {path: 'audiencias/Criminal', component: CriminalComponent},
  {path: 'audiencias/Juri-Popular', component: JuriPopularComponent},
  {path: 'audiencias/Trabalho', component: TrabalhoComponent},
  {path: 'cadastro2', component: Cadastro2Component},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'video', component: VideoComponent},
  {path: 'questionario', component: QuestionarioComponent},
  {path: 'resultado', component: ResultadoComponent},
  {path: 'perfil', component: PerfilComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
