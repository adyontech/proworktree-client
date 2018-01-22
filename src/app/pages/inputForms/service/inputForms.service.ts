import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { UserStateService } from "./../../../sharedService/userDetails/user-state.service";

import 'rxjs/add/operator/map';
import 'rxjs/'
@Injectable()
export class InputFormService {

    windowStorage: any;
    token: string;
    paramCompanyName: string;

    constructor(private http: Http,
         private router: Router,
         private route: ActivatedRoute,
         public _userStateService: UserStateService,
        
        ) {
        this.windowStorage = JSON.parse(window.localStorage.getItem('user'));
        this.token = this.windowStorage.token;
        // console.log(this.windowStorage.token)
    }

}
