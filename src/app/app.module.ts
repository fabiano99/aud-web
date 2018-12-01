import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AudienciasComponent } from './pages/audiencias/audiencias/audiencias.component';
import { CivilComponent } from './pages/audiencias/civil/civil.component';
import { CriminalComponent } from './pages/audiencias/criminal/criminal.component';
import { ConciliacaoComponent } from './pages/audiencias/conciliacao/conciliacao.component';
import { TrabalhoComponent } from './pages/audiencias/trabalho/trabalho.component';
import { JuriPopularComponent } from './pages/audiencias/juri-popular/juri-popular.component';
import { CursosComponent } from './pages/admin/cursos/cursos.component';
import { VideosComponent } from './pages/admin/videos/videos.component';
import { HttpModule } from '@angular/http';
import { AudienciasService } from './pages/audiencias/audiencias/audiencias.service';
import { Cadastro2Component } from './pages/cadastro2/cadastro2.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { VideoComponent } from './pages/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AudienciasComponent,
    CivilComponent,
    CriminalComponent,
    ConciliacaoComponent,
    TrabalhoComponent,
    JuriPopularComponent,
    CursosComponent,
    VideosComponent,
    Cadastro2Component,
    CadastroComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [AudienciasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
