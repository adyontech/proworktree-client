import { RouterModule, Routes } from "@angular/router";

import { InputFormsComponent } from "./inputForms.component";

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
import { SettingsComponent } from "./components/settings/settings.component";
import { underGroupComponent } from "./components/underGroup/underGroup.component";
const INDEX_ROUTES: Routes = [
    {
        path: '',
        component: InputFormsComponent,
        children: [
            {
                path: 'payment',
                component: PaymentComponent
            },
            {
                path: 'contra',
                component: ContraComponent
            },
            {
                path: 'journal',
                component: JournalEntryComponent
            },
            {
                path: 'ledger',
                component: LedgerComponent
            },
            {
                path: 'payment',
                component: PaymentComponent
            },
            {
                path: 'productservice',
                component: ProductServiceComponent
            },
            {
                path: 'purchase',
                component: PurchaseComponent
            },
            {
                path: 'purchsereturn',
                component: PurchaseReturnComponent
            },
            {
                path: 'receipt',
                component: ReceiptComponent
            },
            {
                path: 'sales',
                component: SalesComponent
            },
            {
                path: 'salesreturn',
                component: SalesReturnComponent
            },
            {
                path: 'settings',
                component: SettingsComponent
            },
            {
                path: 'ug',
                component: underGroupComponent
            },
        ]
    }

];

export const FormsRoutingModule = RouterModule.forChild(INDEX_ROUTES);
