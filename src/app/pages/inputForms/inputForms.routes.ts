import { RouterModule, Routes } from "@angular/router";

import { InputFormsComponent } from "./inputForms.component";

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
                path: 'journalentry',
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
                path: 'product',
                component: ProductComponent
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
                path: 'service',
                component: ServiceCreationComponent
            }
        ]
    }

];

export const FormsRoutingModule = RouterModule.forChild(INDEX_ROUTES);
