import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ActivatedRoute } from '@angular/router';
import { ContraService } from "./service/contra.service";
@Component({
    selector: 'app-contra',
    templateUrl: './contra.component.html',
    styleUrls: ['./contra.component.scss']
})

export class ContraComponent implements OnInit {
    form: FormGroup;
    selectedIndex = 1;

    paramId: string;

    constructor(private route: ActivatedRoute, public _contraService: ContraService, public fb: FormBuilder, private router: Router) {
        this.route.params.subscribe(params => this.paramId = params.id);
        console.log(this.paramId)
    }

    ngOnInit() {
        this.form = this.fb.group({
            companyName: [''],

            // pan: ['', Validators.compose([Validators.maxLength(10),
            // PanValidator.isValid])],

            address: ['', Validators.compose([Validators.minLength(10)])],

            startDate: ['', Validators.compose([Validators.required])],

            logo: [""],
        });
    }
    onSubmit(user) {
      console.log(user)
    }

    setSelected(id: number) {
        this.selectedIndex = id;
    } 

}