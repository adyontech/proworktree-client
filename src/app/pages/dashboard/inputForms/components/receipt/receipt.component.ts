import { Component, OnInit } from '@angular/core';
// import { DashboardService } from "./service/dashboard.service";

import { ActivatedRoute } from '@angular/router';
import { ReceiptService } from "./service/receipt.service";
@Component({
    selector: 'app-receipt',
    templateUrl: './receipt.component.html',
    styleUrls: ['./receipt.component.scss']
})

export class ReceiptComponent implements OnInit {

    paramId: string;

    constructor(private route: ActivatedRoute, public _paymentService: ReceiptService) {
        this.route.params.subscribe(params => this.paramId = params.id);
        console.log(this.paramId)
    }

    ngOnInit() {
    }

}