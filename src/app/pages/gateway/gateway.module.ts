import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GatewayRoutingModule } from './gateway.routes'

import { GatewayComponent } from './gateway.component';

import { GatewayFormComponent } from './components/gatewayForm/gatewayForm.component';
import { companyListComponent } from './components/companyList/companyList.component';
import { gheaderComponent } from './components/header/gheader.component';

import { GatewayService } from "./service/gateway.service";
import { MyDatePickerModule } from 'mydatepicker';
@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        GatewayRoutingModule,
        MyDatePickerModule
    ],
    declarations: [
        GatewayComponent,
        GatewayFormComponent,
        companyListComponent,
        gheaderComponent
    ],
    providers: [
        GatewayService
    ]
})

export class GatewayModule { }

