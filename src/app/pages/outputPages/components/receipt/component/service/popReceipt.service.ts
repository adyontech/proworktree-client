import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { ReceiptService } from "./../../service/receipt.service";
import { GlobalVariableService } from "./../../../../../../sharedService/globalVariables/globalVariable.service";

import 'rxjs/add/operator/map';
import 'rxjs/'
@Injectable()
export class PopReceiptService {

    contentId: string;
    private paramCompanyName: string;
    result: {};
    token: string;
    windowStorage: any;
    _url: string;

    constructor(private http: Http,
        private router: Router,
        private route: ActivatedRoute,
        public _receiptService:ReceiptService,
        public _globalVariableService: GlobalVariableService

    ) {
        this.windowStorage = JSON.parse(window.localStorage.getItem('user'));
        this.token = this.windowStorage.token;
        this.paramCompanyName = this._receiptService.paramCompanyName;
        // console.log(this.paramCompanyName)
    }

    getData(id: string) {
        this._url = `${this._globalVariableService.baseServerUrl}/api/receiptFormData?token=${this.token}&&dataId=${id}`;
        return this.http.get(this._url);
    }

    createNewEntry(user: any) {

        this._url = `${this._globalVariableService.baseServerUrl}/api/receipt?token=${this.token}&companyName=${this.paramCompanyName}`;
        return this.http.post(this._url, user)
            .map((res: Response) => {
                this.result = res.json();
                // console.log(this.result)
            })
    }

    editEntry(user: any) {

        this._url = `${this._globalVariableService.baseServerUrl}/api/receiptEdit?token=${this.token}&companyName=${this.paramCompanyName}`;
        return this.http.patch(this._url, user)
            .map((res: Response) => {
                this.result = res.json();
                // console.log(this.result)
            })
    }


}
