import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { PaymentService } from "./../../service/payment.service";

import 'rxjs/add/operator/map';
import 'rxjs/'
@Injectable()
export class PopPaymentService {

    contentId: string;
    private paramCompanyName: string;
    result: {};
    token: string;
    windowStorage: any;
    _url: string;

    constructor(private http: Http,
        private router: Router,
        private route: ActivatedRoute,
        public _paymentService:PaymentService,
        // public _inputFormService: InputFormService
    ) {
        this.contentId = this._paymentService.contentId;
        this.windowStorage = JSON.parse(window.localStorage.getItem('user'));
        this.token = this.windowStorage.token;
        // this.paramCompanyName = this._inputFormService.paramCompanyName;
        // console.log(this.paramCompanyName)
    }

    getData() {
        this._url = `http://localhost:3000/api/paymentFormData?token=${this.token}&&dataId=5a46339d5571642579c6051d`;
        return this.http.get(this._url);
    }

    createNewEntry(user: any) {

        this._url = `http://localhost:3000/api/payment?token=${this.token}&companyName=${this.paramCompanyName}`;
        return this.http.post(this._url, user)
            .map((res: Response) => {
                this.result = res.json();
                // console.log(this.result)
            })
    }


}
