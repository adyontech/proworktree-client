import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OutputPagesRoutingModule } from './outputPages.routes'

import { OutputPagesComponent } from './outputPages.component';

import { ContraComponent } from "./components/contra/contra.component";
import { JournalEntryComponent } from "./components/journalEntry/journalEntry.component";
import { LedgerComponent } from "./components/ledger/ledger.component";
import { ProductServiceComponent } from "./components/productService/productService.component";
import { PurchaseComponent } from "./components/purchase/purchase.component";
import { PurchaseReturnComponent } from "./components/purchaseReturn/purchaseReturn.component";
import { ReceiptComponent } from "./components/receipt/receipt.component";
import { SalesComponent } from "./components/sales/sales.component";
import { SalesReturnComponent } from "./components/salesReturn/salesReturn.component";
import { SidebarComponent } from "./../sharedPageComponent/sidebar/sidebar.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { underGroupComponent } from "./components/underGroup/underGroup.component";

import { OutputPagesService } from "./service/outputPages.service";
import { ContraService } from "./components/contra/service/contra.service";
import { JournalEntryService } from "./components/journalEntry/service/journalEntry.service";
import { LedgerService } from "./components/ledger/service/ledger.service";
import { ProductServiceService } from "./components/productService/service/productService.service";
import { PurchaseService } from "./components/purchase/service/purchase.service";
import { PurchaseReturnService } from "./components/purchaseReturn/service/purchaseReturn.service";
import { ReceiptService } from "./components/receipt/service/receipt.service";
import { SalesService } from "./components/sales/service/sales.service";
import { SalesReturnService } from "./components/salesReturn/service/salesReturn.service";
import { SettingsService } from "./components/settings/service/settings.service";
import { UnderGroupsService } from "./components/underGroup/service/underGroup.service";


import { AngularMultiSelectModule } from 'angular2-multiselect-checkbox-dropdown/angular2-multiselect-dropdown';
import { DatePickerModule } from "angular-io-datepicker/src/datepicker/index";
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { SelectModule } from 'ng2-select';
import { NgDatepickerModule } from 'ng2-datepicker';
import { MyDatePickerModule } from 'mydatepicker';
import { BsModalModule } from 'ng2-bs3-modal';
@NgModule({
    imports: [
        AngularMultiSelectModule,
        CommonModule,
        DatePickerModule,
        FormsModule,
        ReactiveFormsModule,
        OutputPagesRoutingModule,
        NgxMyDatePickerModule,
        SelectModule, 
        NgDatepickerModule,
        MyDatePickerModule,
        BsModalModule
    ],
    declarations: [
        ContraComponent,
        OutputPagesComponent,
        JournalEntryComponent,
        LedgerComponent,
        ProductServiceComponent,
        PurchaseComponent,
        PurchaseReturnComponent,
        ReceiptComponent,
        SalesComponent,
        SalesReturnComponent,
        SettingsComponent,
        SidebarComponent,
        underGroupComponent
    ],
    providers: [
        ContraService,
        OutputPagesService,
        JournalEntryService,
        LedgerService,
        ProductServiceService,
        PurchaseService,
        PurchaseReturnService,
        ReceiptService,
        SalesService,
        SalesReturnService,
        SettingsService,
        UnderGroupsService
    ]
})

export class OutputPagesModule { }
