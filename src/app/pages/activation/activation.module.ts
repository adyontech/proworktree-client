import {NgModule}      from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ActivationRoutingModule } from './activation.routes'

import { ActivationComponent } from './activation.component';
import { ActivationService} from "./service/activation.service";


@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        ActivationRoutingModule
    ],
    bootstrap: [
        ActivationComponent
    ],
    declarations: [
        ActivationComponent
    ],
    providers: [
      ActivationService
    ]
})
export class ActivationModule {
}

