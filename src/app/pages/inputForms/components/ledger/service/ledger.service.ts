import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { InputFormService } from "./../../../service/inputForms.service";

import 'rxjs/add/operator/map';
import 'rxjs/'
@Injectable()

export class LedgerService {

    private paramCompanyName: string;
    token: string;
    windowStorage: any;
    _url: string;
    _BaseUrl = 'http://localhost:3000/api/';

    constructor(private http: Http, private router: Router, private route: ActivatedRoute, public _inputFormService: InputFormService) {
        this.windowStorage = JSON.parse(window.localStorage.getItem('user'));
        this.token = this.windowStorage.token;
        this.paramCompanyName = this._inputFormService.paramCompanyName;
        console.log(this.paramCompanyName)
    }

    getUnderGroupList() {
        this._url = `http://localhost:3000/api/uglist?token=${this.token}&&companyName=${this.paramCompanyName}`;
        return this.http.get(this._url);
    }


}
