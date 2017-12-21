import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GatewayService } from "./../../service/gateway.service";
import { companyListComponent } from './companyList.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                companyListComponent
            ],
            providers: [
                { provide: GatewayService }
            ],
            imports: [
                RouterTestingModule
            ]
        }).compileComponents();
    }))
});