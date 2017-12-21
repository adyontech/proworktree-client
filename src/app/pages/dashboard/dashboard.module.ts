import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard.routes'

import { DashboardComponent } from './dashboard.component';
import { ContributorsComponent } from "./components/contributors/contributors.component";
import { RemoveCompanyComponent } from "./components/removeCompany/removeCompany.component";
import { DashboardService } from "./service/dashboard.service";

import { SidebarComponent } from "./components/sidebar/sidebar.component";
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
        DashboardService
    ]
})

export class DashboardModule { }
