import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login.component";

const INDEX_ROUTES: Routes = [
    {
        path: '', component: LoginComponent , children: [

        ]
    }
];

export const LoginRoutingModule = RouterModule.forChild(INDEX_ROUTES);
