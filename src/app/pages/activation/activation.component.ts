import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivationService } from "./service/activation.service";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router/src/shared';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['activation.component.scss']
})
export class ActivationComponent {
  form: FormGroup;

  constructor(public _activationService: ActivationService, public _activatedRoute: ActivatedRoute, private router: Router) {

  }
  ngOnInit() {
     this._activatedRoute.params.subscribe((params:Params)=>{
      let token = params['token'];
    })

  }


}
