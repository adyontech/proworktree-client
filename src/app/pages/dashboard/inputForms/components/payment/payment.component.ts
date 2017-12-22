import { Component, OnInit } from '@angular/core';
// import { DashboardService } from "./service/dashboard.service";

import { ActivatedRoute } from '@angular/router';
import { PaymentService } from "./service/payment.service";
@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss']
})

export class PaymentComponent implements OnInit {

    paramId: string;

    constructor(private route: ActivatedRoute, public _paymentService: PaymentService) {
        this.route.params.subscribe(params => this.paramId = params.id);
        console.log(this.paramId)
    }

    ngOnInit() {
    }

}