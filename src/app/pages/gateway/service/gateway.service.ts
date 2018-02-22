import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { UserStateService } from './../../../sharedService/userDetails/user-state.service';
import { GlobalVariableService } from "./../../../sharedService/globalVariables/globalVariable.service";
import 'rxjs/add/operator/map';
import 'rxjs/'
@Injectable()
export class GatewayService {
  result: {};
  token: string;
  windowStorage: any;
  _url: string;


  constructor(private http: Http,
    public _userStateService: UserStateService,
    public _globalVariableService: GlobalVariableService) {

    this.windowStorage = JSON.parse(window.localStorage.getItem('currentUser'));
    this.token = window.localStorage.getItem('token')
    console.log(this.windowStorage)
  }
  createNewCompany(user: any) {

    this._url = `${this._globalVariableService.baseServerUrl}/api/gateway?token=${this.token}`;
    return this.http.post(this._url, user)
      .map((res: Response) => {
        this.result = res.json();
        console.log(this.result)
      })
  }


  getCompanyList() {
    this._url = `${this._globalVariableService.baseServerUrl}/api/gatewaylist?token=${this.token}`;
    return this.http.get(this._url);
  }



  removeCompany(id) {
    return this.http.delete(this._url + '/' + id)
      .map((res: Response) => res.json());
  }

}
