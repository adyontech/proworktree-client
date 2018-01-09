import { Component, OnInit } from '@angular/core';
// import { DashboardService } from "./service/dashboard.service";

import { ActivatedRoute } from '@angular/router';
import { SalesReturnService } from "./service/salesReturn.service";
@Component({
    selector: 'app-salesReturn',
    templateUrl: './salesReturn.component.html',
    styleUrls: ['./salesReturn.component.scss']
})

export class SalesReturnComponent implements OnInit {

    paramId: string;

    constructor(private route: ActivatedRoute, public _salesReturnService: SalesReturnService) {
        this.route.params.subscribe(params => this.paramId = params.id);
        console.log(this.paramId)
    }

    ngOnInit() {
    }

}