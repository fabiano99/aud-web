import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {AW_API} from '../../../app.api';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import { ErrorHandler } from '../../../app.error-handler';




@Injectable()
export class AudienciasService {

    // Id do video selecionado
    public videoSelecionado;

    public anotacoes = 'Sem anotações';
    public acertos = 0;

    constructor(private http: Http) {}

    getCourses(): Observable<any[]> {
        return this.http.get(`${AW_API}/courses`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }

    getCourse(titulo): Observable<any[]> {
        return this.http.get(`${AW_API}/courses/${titulo}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }

    getVideos(categoria, tipo): Observable<any[]> {
        return this.http.get(`${AW_API}/videos/${categoria}/${tipo}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }

    getVideo(id): Observable<any[]> {
        return this.http.get(`${AW_API}/videos/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }

    videoEscolhido(id) {
        this.videoSelecionado = id;
    }

    escreverAnotacao(texto) {
        this.anotacoes = texto;
        console.log(this.anotacoes);
    }
}



