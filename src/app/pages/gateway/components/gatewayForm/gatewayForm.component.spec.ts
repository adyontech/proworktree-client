import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GatewayService } from "./../../service/gateway.service";
import { GatewayFormComponent } from './gatewayForm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                GatewayFormComponent
            ],
            providers: [
                { provide: GatewayService }
            ],
            imports: [  
                RouterTestingModule,
                FormsModule,
                ReactiveFormsModule
            ]
        }).compileComponents();
    }))
});