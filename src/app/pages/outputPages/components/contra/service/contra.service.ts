import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { OutputPagesService } from "./../../../service/outputPages.service";

import 'rxjs/add/operator/map';
import 'rxjs/'
@Injectable()
export class ContraService {

    private paramCompanyName: string;
    result: {};
    token: string;
    windowStorage: any;
    _url: string;
    
    constructor(private http: Http, private router: Router, private route: ActivatedRoute, public _inputFormService: OutputPagesService) {
        this.windowStorage = JSON.parse(window.localStorage.getItem('user'));
        this.token = this.windowStorage.token;
        this.paramCompanyName = this._inputFormService.paramCompanyName;
        console.log(this.paramCompanyName)
    }

    getData() {
        this._url = `http://localhost:3000/api/uglist?token=${this.token}&&companyName=${this.paramCompanyName}`;
        return this.http.get(this._url);
    }

    createNewEntry(user: any) {

        this._url = `http://localhost:3000/api/contra?token=${this.token}&companyName=${this.paramCompanyName}`;
        return this.http.post(this._url, user)
            .map((res: Response) => {
                this.result = res.json();
                // console.log(this.result)
            })
    }

}

  

