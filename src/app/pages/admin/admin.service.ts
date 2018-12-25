import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {AW_API} from './../../app.api';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import { ErrorHandler } from './../../app.error-handler';




@Injectable()
export class AdminService {

    public token: string;
    constructor(private http: Http) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    insertUser(usuario): Observable<any[]> {
        return this.http.post(`${AW_API}/users`, usuario)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }

    updateUser(usuario, email): Observable<any[]> {
        return this.http.patch(`${AW_API}/users/${email}`, usuario)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }

    autenticar(email): Observable<any[]> {
        return this.http.get(`${AW_API}/users/${email}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }

    logout(): void {
        // Limpa o token removendo o usuário do local store para efetuar o logout
        this.token = null;
        localStorage.clear();
    }

}

export const usuario = {
    Nome: 'Visitante'
};
