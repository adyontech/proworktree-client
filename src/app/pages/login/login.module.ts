import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login.routes';

import { LoginComponent } from './login.component';
import { LoginService } from "./service/login.service"
// import { UserStateService } from './../../sharedService/userDetails/user-state.service';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        LoginRoutingModule
    ],
    bootstrap: [
        LoginComponent
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        LoginService
    ]
})
export class LoginModule {
}
