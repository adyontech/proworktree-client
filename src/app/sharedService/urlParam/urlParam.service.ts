import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/'
@Injectable()
export class UrlParamService {

    paramId: string;

    constructor( private route: ActivatedRoute) {
        this.route.params.subscribe(params => this.paramId = params.id);
        console.log(this.paramId);
    }
    hello(){

    }

}
