import { Component, NgModule, VERSION } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform, OnInit } from '@angular/core';
import { DashboardService } from "./../../service/dashboard.service";

@Component({
    selector: 'app-contributors',
    templateUrl: './contributors.component.html',
    styleUrls: ['./contributors.component.scss']
})
export class ContributorsComponent implements OnInit {
    keys: Array<string>;
    dataValue: any;
    dataCopy: any;
    queryString: String;

    list: any;
    searchableList: any;

    constructor(public _dashboardService: DashboardService) {
       
    }

    ngOnInit() {
        this.getCompleteList();
    }

    getCompleteList() {
        this.dataCopy = this._dashboardService.getUserList()
            .map((response) => response.json())
            .subscribe((data) => {
                console.log(data.user)
                this.list = data.user;
            })
    }

}