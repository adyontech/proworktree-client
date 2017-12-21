import { RouterModule, Routes } from "@angular/router";
import { GatewayComponent } from "./gateway.component";
import { GatewayFormComponent } from './components/gatewayForm/gatewayForm.component';
import { companyListComponent } from './components/companyList/companyList.component';
import { gheaderComponent } from './components/header/gheader.component';


const INDEX_ROUTES: Routes = [
    {
        path: 'addcompany',
        component: GatewayFormComponent
    },
    {
        path: 'companylist',
        component: companyListComponent
    },
    {
        path: '', 
        component: GatewayComponent,
        children: [
            {
                path: 'gatewayForm', component: GatewayFormComponent
            },
             {
                path: 'contactList', component: companyListComponent
            },
            {
                path: 'gnavbar', component: gheaderComponent
            }

        ]
    }
];

export const GatewayRoutingModule = RouterModule.forChild(INDEX_ROUTES);
