import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OutputPagesRoutingModule } from './outputPages.routes'

import { OutputPagesComponent } from './outputPages.component';


import { CashInHandsComponent } from "./components/cashInHands/cashInHands.component";
import { CashAtBankComponent } from "./components/cashAtBank/cashAtBank.component";
import { ContraComponent } from "./components/contra/contra.component";
import { JournalEntryComponent } from "./components/journalEntry/journalEntry.component";
import { LedgerComponent } from "./components/ledger/ledger.component";
import { PaymentComponent } from "./components/payment/payment.component";
import { ProductServiceComponent } from "./components/productService/productService.component";
import { PurchaseComponent } from "./components/purchase/purchase.component";
import { PurchaseReturnComponent } from "./components/purchaseReturn/purchaseReturn.component";
import { ReceiptComponent } from "./components/receipt/receipt.component";
import { SalesComponent } from "./components/sales/sales.component";
import { SalesReturnComponent } from "./components/salesReturn/salesReturn.component";
import { SidebarComponent } from "./../sharedPageComponent/sidebar/sidebar.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { underGroupComponent } from "./components/underGroup/underGroup.component";

//inner-form components
import { PopPaymentComponent } from "./components/payment/component/popPayment.component";
import { PopReceiptComponent } from "./components/receipt/component/popReceipt.component";


import { CashInHandsService } from "./components/cashInHands/service/cashInHands.service";
import { CashAtBankService } from "./components/cashAtBank/service/cashAtBank.service";
import { OutputPagesService } from "./service/outputPages.service";
import { ContraService } from "./components/contra/service/contra.service";
import { JournalEntryService } from "./components/journalEntry/service/journalEntry.service";
import { LedgerService } from "./components/ledger/service/ledger.service";
import { PaymentService } from "./components/payment/service/payment.service";
import { ProductServiceService } from "./components/productService/service/productService.service";
import { PurchaseService } from "./components/purchase/service/purchase.service";
import { PurchaseReturnService } from "./components/purchaseReturn/service/purchaseReturn.service";
import { ReceiptService } from "./components/receipt/service/receipt.service";
import { SalesService } from "./components/sales/service/sales.service";
import { SalesReturnService } from "./components/salesReturn/service/salesReturn.service";
import { SettingsService } from "./components/settings/service/settings.service";
import { UnderGroupsService } from "./components/underGroup/service/underGroup.service";


//inner-form service
import { PopPaymentService } from "./components/payment/component/service/popPayment.service"
import { PopReceiptService } from "./components/receipt/component/service/popReceipt.service"

import { AngularMultiSelectModule } from 'angular2-multiselect-checkbox-dropdown/angular2-multiselect-dropdown';
import { SelectModule } from 'ng2-select';
import { MyDatePickerModule } from 'mydatepicker';
import { BsModalModule } from 'ng2-bs3-modal';
// import { UiSwitchModule } from 'angular2-ui-switch'

import { UiSwitchModule } from "./../../../../node_modules/angular2-ui-switch/src";
@NgModule({
    imports: [
        AngularMultiSelectModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        OutputPagesRoutingModule,
        SelectModule,
        MyDatePickerModule,
        BsModalModule,
        UiSwitchModule
    ],
    declarations: [
        ContraComponent,
        OutputPagesComponent,
        JournalEntryComponent,
        LedgerComponent,
        PaymentComponent,
        ProductServiceComponent,
        PurchaseComponent,
        PurchaseReturnComponent,
        ReceiptComponent,
        SalesComponent,
        SalesReturnComponent,
        SettingsComponent,
        SidebarComponent,
        underGroupComponent,
        CashInHandsComponent,
        CashAtBankComponent,
        PopPaymentComponent,
        PopReceiptComponent
    ],
    providers: [
        CashInHandsService,
        CashAtBankService,
        ContraService,
        OutputPagesService,
        JournalEntryService,
        LedgerService,
        PaymentService,
        ProductServiceService,
        PurchaseService,
        PurchaseReturnService,
        ReceiptService,
        SalesService,
        SalesReturnService,
        SettingsService,
        UnderGroupsService,
        PopPaymentService,
        PopReceiptService
    ]
})

export class OutputPagesModule { }
