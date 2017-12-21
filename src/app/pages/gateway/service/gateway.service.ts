import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { UserStateService } from "./../../../shared/userDetails/user-state.service";
import 'rxjs/add/operator/map';
import 'rxjs/'
@Injectable()
// `http://localhost:3000/api/gateway?token=${variable}&anotherParam=shsjajsdf`;

export class GatewayService {
  result: {};
  token: string;
  windowStorage: any;
  _url: string;
  _BaseUrl = 'http://localhost:3000/api/gateway';


  // _url = `${this._BaseUrl}?token=${this.token}&anotherParam=shsjajsdf`;
  // _url = `http://localhost:3000/api/gateway?token=${this.token}&anotherParam=shsjajsdf`;
  constructor(private http: Http, public _userStateService: UserStateService) {
    
    this.windowStorage = JSON.parse(window.localStorage.getItem('user'));
    this.token = this.windowStorage.token;
    console.log(this.windowStorage)
  }
  createNewCompany(user: any) {

    this._url = `http://localhost:3000/api/gateway?token=${this.token}&anotherParam=shsjajsdf`;
    return this.http.post(this._url, user)
      .map((res: Response) => {
        this.result = res.json();
        // console.log(this.result)
      })
  }


  getCompanyList() {
    this._url = `http://localhost:3000/api/gatewaylist?token=${this.token}&anotherParam=shsjajsdf`;
    return this.http.get(this._url);
  }

  

  removeCompany(id) {
    return this.http.delete(this._url + '/' + id)
      .map((res: Response) => res.json());
  }

}
