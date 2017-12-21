import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { UserStateService } from "./../../../sharedService/userDetails/user-state.service";

import 'rxjs/add/operator/map';
import 'rxjs/'
@Injectable()

export class LoginService {
  result: any;
  loggedIn: Boolean;
  _URL = 'http://localhost:3000/auth/login';
  // _URL = 'https://pwt-server.herokuapp.com/auth/register';

  constructor(private http: Http, private _userStateService: UserStateService) {
  }


  validateUser(user: any) {
    return this.http.post(this._URL, user)
      .map((res: Response) => {
        this.result = res.json();
        console.log(this.result);
        if (this.result.success) {
          this.setGlobal(this.result);
          console.log(this._userStateService);
        }
        return user;
      });
  }

  setGlobal(data) {
    this._userStateService.dummySetter();
    this._userStateService.setUserData(data.user, data.token);
  }



  logOut() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}

interface LoginUser {
  email: String,
  password: String
}
