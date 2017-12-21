import { Component, OnInit } from '@angular/core';
import { DashboardService } from "./service/dashboard.service";

import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

    paramId: string;

    constructor(private _dashboardService: DashboardService,private route: ActivatedRoute) {
        this.route.params.subscribe(params => this.paramId = params.id);
        console.log(this.paramId)
    }

    ngOnInit() {
    }

}