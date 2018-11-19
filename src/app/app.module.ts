import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { Cadastro2Component } from './pages/cadastro2/cadastro2.component';

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
    Cadastro2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
