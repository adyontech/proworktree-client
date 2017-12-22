import { Component, OnInit } from '@angular/core';
// import { DashboardService } from "./service/dashboard.service";

import { ActivatedRoute } from '@angular/router';
import { ServiceCreationService } from "./service/serviceCreation.service";
@Component({
    selector: 'app-serviceCreation',
    templateUrl: './serviceCreation.component.html',
    styleUrls: ['./serviceCreation.component.scss']
})

export class ServiceCreationComponent implements OnInit {

    paramId: string;

    constructor(private route: ActivatedRoute, public _serviceCreationService: ServiceCreationService) {
        this.route.params.subscribe(params => this.paramId = params.id);
        console.log(this.paramId)
    }

    ngOnInit() {
    }

}