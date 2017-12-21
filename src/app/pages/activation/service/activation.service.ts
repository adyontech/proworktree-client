import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/'
@Injectable()

export class ActivationService {
    
    _baseURL = 'http://localhost:3000/';
    _URL = this._baseURL + 'auth/activation';
    constructor(private _http: Http) {

    }

    authentication(token: string){
        return this._http.post(this._URL, token)
            .map((res: Response)=> res.json());
    }

}