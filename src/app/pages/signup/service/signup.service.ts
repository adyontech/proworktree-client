import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/'
@Injectable()

export class SignupService {

    _URL = 'http://localhost:3000/auth/register';
    // _URL = 'https://pwt-server.herokuapp.com/auth/register';

    constructor(private http: Http) {
    }

    createNewUser(user: any): Observable<any> {
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
        return this.http.post(this._URL, user)
            .map((res: Response) => res.json())
    }

}