import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/'
@Injectable()
export class DashboardService {

  constructor(private http: Http, private router: Router, private route: ActivatedRoute) {
  }
  _BaseUrl = 'http://localhost:3000/uapi/userlist';

  getUserList() {
    return this.http.get(this._BaseUrl)
  }

 }
