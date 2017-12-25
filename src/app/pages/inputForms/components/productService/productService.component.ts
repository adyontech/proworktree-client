import { Component, OnInit } from '@angular/core';
// import { DashboardService } from "./service/dashboard.service";

import { ActivatedRoute } from '@angular/router';
import { productServiceService } from "./service/productService.service";
@Component({
    selector: 'app-productService',
    templateUrl: './productService.component.html',
    styleUrls: ['./productService.component.scss']
})

export class productServiceComponent implements OnInit {

    paramId: string;

    constructor(private route: ActivatedRoute, public _productServiceService: productServiceService) {
        this.route.params.subscribe(params => this.paramId = params.id);
        console.log(this.paramId)
    }

    ngOnInit() {
    }

}