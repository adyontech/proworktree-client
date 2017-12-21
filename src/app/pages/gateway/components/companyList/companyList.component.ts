import { Component } from '@angular/core';
import { GatewayService } from './../../service/gateway.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Component({
    selector: 'companyList',
    templateUrl: './companyList.component.html',
    styleUrls: ['./companyList.component.scss']
})

export class companyListComponent {
    companyList: Array<string>;
    dataCopy: any;

    constructor(public _gatewayService: GatewayService, private router: Router) {
    }

    ngOnInit() {
        this.getComanyList();
    }

    getComanyList() {
        this.dataCopy = this._gatewayService.getCompanyList().map(
            (response) => response.json()
        ).subscribe(
            (data) => {
                console.log(data.companyData)
                this.companyList = data.companyData;
            })
    }

    removeCompany(id) {
        console.log('deleting id : ' + id);
        this._gatewayService.removeCompany(id)
            .subscribe(data => { console.log(data) });
    }


    viewCompany() {
    }
};