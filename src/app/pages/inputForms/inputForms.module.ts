import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsRoutingModule } from './inputForms.routes'

import { InputFormsComponent } from './inputForms.component';

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
// import { SidebarComponent } from "./../sharedPageComponent/sidebar/sidebar.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { underGroupComponent } from "./components/underGroup/underGroup.component";

import { InputFormService } from "./service/inputForms.service";
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

import { SidebarModule } from "./../../sidebar/sidebar.module";
import { SelectModule } from 'ng2-select';
import { MyDatePickerModule } from 'mydatepicker';
import { BsModalModule } from 'ng2-bs3-modal';
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		FormsRoutingModule,
		SelectModule,
		MyDatePickerModule,
		BsModalModule,
		SidebarModule,
	],
	declarations: [
		ContraComponent,
		InputFormsComponent,
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
		// SidebarComponent,
		underGroupComponent,
	],
	providers: [
		ContraService,
		InputFormService,
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
	],
})
export class InputFormsModule {}
