import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { GatewayService } from "./../../service/gateway.service";
import { gheaderComponent } from './gheader.component';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatInputModule } from '@angular/material';
import { CalendarModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';

import { GatewayFormComponent } from "./../gatewayForm/gatewayForm.component";
import { companyListComponent } from "./../companyList/companyList.component";

describe('AppComponent', () => {
    let component: gheaderComponent;
    let fixture: ComponentFixture<gheaderComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                gheaderComponent, GatewayFormComponent, companyListComponent
            ],
            providers: [
                { provide: GatewayService },
                ConfirmationService
            ],
            imports: [
                RouterTestingModule,
                FormsModule,
                ReactiveFormsModule,
                CommonModule,
                // BrowserAnimationsModule,
                ConfirmDialogModule,
                // MatInputModule,
                CalendarModule,
                DropdownModule
            ]
        }).compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(gheaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // it('should be created', () => {
    //     expect(component).toBeTruthy();
    // });
});