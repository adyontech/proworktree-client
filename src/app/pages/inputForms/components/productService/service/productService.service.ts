import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { InputFormService } from "./../../../service/inputForms.service";

import 'rxjs/add/operator/map';
import 'rxjs/'
@Injectable()
export class ProductServiceService {

    constructor(private http: Http, private router: Router, private route: ActivatedRoute, public _inputFormService: InputFormService) {
        
    }
  

}
