import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { ContributorsComponent } from "./components/contributors/contributors.component";
import { RemoveCompanyComponent } from "./components/removeCompany/removeCompany.component";
const INDEX_ROUTES: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'contributors',
                component: ContributorsComponent
            },
            {
                path: 'remove',
                component: RemoveCompanyComponent
            }
        ]
    }

];

export const DashboardRoutingModule = RouterModule.forChild(INDEX_ROUTES);
