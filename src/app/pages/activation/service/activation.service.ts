import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { GlobalVariableService } from "./../../../sharedService/globalVariables/globalVariable.service";
import 'rxjs/add/operator/map';
import 'rxjs/'
@Injectable()

export class ActivationService {
    
    // _baseURL = 'http://localhos:3000/';
    // _URL = this._baseURL + 'auth/activation';
    _URL = `${this._globalVariableService.baseServerUrl} + auth/activation`;
    constructor(private _http: Http, public _globalVariableService: GlobalVariableService) {

    }

    authentication(token: string){
        return this._http.post(this._URL, token)
            .map((res: Response)=> res.json());
    }

}