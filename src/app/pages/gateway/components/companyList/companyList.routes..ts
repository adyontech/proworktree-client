import { RouterModule, Routes } from "@angular/router";
// import { GatewayComponent } from "./gateway.component";
// import { GatewayFormComponent } from './gatewayForm.component';
import { companyListComponent } from './companyList.component';
import { gheaderComponent } from '../header/gheader.component';


const INDEX_ROUTES: Routes = [
    {
        path: '', 
        component: companyListComponent,
        children: [
            {
                path: 'companyList', component: companyListComponent
            },
            {
                path: 'gnavbar', component: gheaderComponent
            }

        ]
    }
];

export const GatewayRoutingModule = RouterModule.forChild(INDEX_ROUTES);
