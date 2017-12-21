import { RouterModule, Routes } from "@angular/router";
import { SignupComponent } from "./signup.component";

const INDEX_ROUTES: Routes = [
    {
        path: '', component: SignupComponent , children: [

        ]
    }
];

export const SignupRoutingModule = RouterModule.forChild(INDEX_ROUTES);
