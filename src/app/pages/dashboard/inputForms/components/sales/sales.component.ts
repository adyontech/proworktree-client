import { Component, OnInit } from '@angular/core';
// import { DashboardService } from "./service/dashboard.service";

import { ActivatedRoute } from '@angular/router';
import { SalesService } from "./service/sales.service";
@Component({
    selector: 'app-sales',
    templateUrl: './sales.component.html',
    styleUrls: ['./sales.component.scss']
})

export class SalesComponent implements OnInit {

    paramId: string;
    selectedIndex = 1;

    constructor(private route: ActivatedRoute, public _paymentService: SalesService) {
        this.route.params.subscribe(params => this.paramId = params.id);
        console.log(this.paramId)
    }
    
    ngOnInit() {
    }

    setSelected(id: number) {
        this.selectedIndex = id;
    } 

}