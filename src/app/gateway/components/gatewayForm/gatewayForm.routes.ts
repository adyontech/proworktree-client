import { RouterModule, Routes } from "@angular/router";
// import { GatewayComponent } from "./gateway.component";
import { GatewayFormComponent } from './gatewayForm.component';
// import { companyListComponent } from './components/companyList/companyList.component';
import { gheaderComponent } from '../header/gheader.component';


const INDEX_ROUTES: Routes = [
    {
        path: '', 
        component: GatewayFormComponent,
        children: [
            // {
            //     path: 'gatewayForm', component: GatewayFormComponent
            // },
            {
                path: 'gnavbar', component: gheaderComponent
            }

        ]
    }
];

export const GatewayRoutingModule = RouterModule.forChild(INDEX_ROUTES);
