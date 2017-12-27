import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard.routes'

import { DashboardComponent } from './dashboard.component';
import { ContributorsComponent } from "./components/contributors/contributors.component";
import { RemoveCompanyComponent } from "./components/removeCompany/removeCompany.component";

import { SidebarComponent } from "./../sharedPageComponent/sidebar/sidebar.component";


import { DashboardService } from "./service/dashboard.service";
import { UserStateService } from "./../../sharedService/userDetails/user-state.service";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        DashboardRoutingModule,
    ],
    declarations: [
        DashboardComponent,
        ContributorsComponent,
        RemoveCompanyComponent,
        SidebarComponent

    ],
    providers: [
        DashboardService,
        UserStateService
    ]
})

export class DashboardModule { }
