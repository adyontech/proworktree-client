import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { GlobalVariableService } from "./../../../sharedService/globalVariables/globalVariable.service";
import 'rxjs/add/operator/map';
import 'rxjs/'
@Injectable()

export class SignupService {

    
    // _URL = 'http://localhos:3000/auth/register';
    _URL = `${this._globalVariableService.baseServerUrl}/auth/register`;

    constructor(private http: Http, public _globalVariableService: GlobalVariableService) {
    }

    createNewUser(user: any): Observable<any> {
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
        return this.http.post(this._URL, user)
            .map((res: Response) => res.json())
    }

}