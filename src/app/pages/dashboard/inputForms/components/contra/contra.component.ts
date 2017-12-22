import { Component, OnInit } from '@angular/core';
// import { DashboardService } from "./service/dashboard.service";

import { ActivatedRoute } from '@angular/router';
import { ContraService } from "./service/contra.service";
@Component({
    selector: 'app-contra',
    templateUrl: './contra.component.html',
    styleUrls: ['./contra.component.scss']
})

export class ContraComponent implements OnInit {

    paramId: string;

    constructor(private route: ActivatedRoute, public _contraService: ContraService) {
        this.route.params.subscribe(params => this.paramId = params.id);
        console.log(this.paramId)
    }

    ngOnInit() {
    }

}