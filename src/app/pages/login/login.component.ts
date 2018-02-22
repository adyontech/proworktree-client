import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from "./service/login.service";
import { Router, CanActivate, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { any } from "codelyzer/util/function";
import { Subscription } from "rxjs";
import { emailValidator, passwordValidator } from '../signup/signup.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  loading = false;
  returnURL: string;


  constructor(
    public _loginService: LoginService,
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
    //this._loginService.logOut();
    this.fillForm();

    this.returnURL = this.route.snapshot.queryParams['returnURL'] || '/gateway/addcompany';
  }

  fillForm() {
    this.form = this.fb.group({
      password: ['', passwordValidator],
      email: ['', emailValidator]
    })
  }

  onSubmit(user) {
    this._loginService.validateUser(user)
      // .subscribe(res => user = res)
      .subscribe(
      (data) => {
        // console.log(data)
        this.router.navigate([this.returnURL]);
      },
      error => {
        this.loading = false;
      });
  }

}
