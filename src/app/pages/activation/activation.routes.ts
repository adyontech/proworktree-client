import { RouterModule, Routes } from "@angular/router";
import { ActivationComponent } from "./activation.component";

const INDEX_ROUTES: Routes = [
    {
        path: '', component: ActivationComponent , children: [

        ]
    }
];

export const ActivationRoutingModule = RouterModule.forChild(INDEX_ROUTES);
