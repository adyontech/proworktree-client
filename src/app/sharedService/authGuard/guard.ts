import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { LoginService } from "./../../pages/login/service/login.service";

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private _loginService: LoginService, private router: Router) { }

    canActivate() {
        const isLoggedIn = this._loginService.loggedIn
        if (!isLoggedIn) {
            this.router.navigate(['login'])
        } else {
            return false;
        }
    }
}
