import { UserStateService } from './../../sharedService/userDetails/user-state.service';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from "./service/dashboard.service";
import { SidebarComponent } from "./../sharedPageComponent/sidebar/sidebar.component";

import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

    paramId: string;

    constructor( private _userStateService: UserStateService, private route: ActivatedRoute) {
        
        this.route.params.subscribe(params => this.paramId = params.id);
        console.log(this.paramId);
        this._userStateService.paramId = this.paramId;
    }

    ngOnInit() {
    }

}