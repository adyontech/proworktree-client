import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GatewayRoutingModule } from './gateway.routes'

import { GatewayComponent } from './gateway.component';

import { GatewayFormComponent } from './components/gatewayForm/gatewayForm.component';
import { companyListComponent } from './components/companyList/companyList.component';
import { gheaderComponent } from './components/header/gheader.component';

import { GatewayService } from "./service/gateway.service";
import { CalendarModule } from 'primeng/primeng';
// import { MaterialModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { InputTextModule } from 'primeng/primeng';
import { CheckboxModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { SplitButtonModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        GatewayRoutingModule,
        CalendarModule,
        MatInputModule,
        InputTextModule,
        CheckboxModule,
        RadioButtonModule,
        DropdownModule,
        ButtonModule,
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

