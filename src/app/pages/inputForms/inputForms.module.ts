import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsRoutingModule } from './inputForms.routes'

import { InputFormsComponent } from './inputForms.component';

import { ContraComponent } from "./components/contra/contra.component";
import { JournalEntryComponent } from "./components/journalEntry/journalEntry.component";
import { LedgerComponent } from "./components/ledger/ledger.component";
import { PaymentComponent } from "./components/payment/payment.component";
import { ProductComponent } from "./components/product/product.component";
import { PurchaseComponent } from "./components/purchase/purchase.component";
import { PurchaseReturnComponent } from "./components/purchaseReturn/purchaseReturn.component";
import { ReceiptComponent } from "./components/receipt/receipt.component";
import { SalesComponent } from "./components/sales/sales.component";
import { SalesReturnComponent } from "./components/salesReturn/salesReturn.component";
import { ServiceCreationComponent } from "./components/serviceCreation/serviceCreation.component";
import { SidebarComponent } from "./../shared/sidebar/sidebar.component";



import { InputFormService } from "./service/inputForms.service";
import { ContraService } from "./components/contra/service/contra.service";
import { JournalEntryService } from "./components/journalEntry/service/journalEntry.service";
import { LedgerService } from "./components/ledger/service/ledger.service";
import { PaymentService } from "./components/payment/service/payment.service";
import { ProductService } from "./components/product/service/product.service";
import { PurchaseService } from "./components/purchase/service/purchase.service";
import { PurchaseReturnService } from "./components/purchaseReturn/service/purchaseReturn.service";
import { ReceiptService } from "./components/receipt/service/receipt.service";
import { SalesService } from "./components/sales/service/sales.service";
import { SalesReturnService } from "./components/salesReturn/service/salesReturn.service";
import { ServiceCreationService } from "./components/serviceCreation/service/serviceCreation.service";

import { DatePickerModule } from "angular-io-datepicker/src/datepicker/index";
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        FormsRoutingModule,
        DatePickerModule,
        NgxMyDatePickerModule
    ],
    declarations: [
        InputFormsComponent,
        ContraComponent,
        JournalEntryComponent,
        LedgerComponent,
        PaymentComponent,
        ProductComponent,
        PurchaseComponent,
        PurchaseReturnComponent,
        ReceiptComponent,
        SalesComponent,
        SalesReturnComponent,
        ServiceCreationComponent,
        SidebarComponent
    ],
    providers: [
        InputFormService,
        ContraService,
        JournalEntryService,
        LedgerService,
        PaymentService,
        ProductService,
        PurchaseService,
        PurchaseReturnService,
        ReceiptService,
        SalesService,
        SalesReturnService,
        ServiceCreationService
    ]
})

export class InputFormsModule { }
