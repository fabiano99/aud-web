import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {AW_API} from '../../../app.api';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import { ErrorHandler } from '../../../app.error-handler';




@Injectable()
export class AudienciasService {

    constructor(private http: Http) {}

    getUsers(): Observable<any[]> {
        return this.http.get(`${AW_API}/userss`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }
}
