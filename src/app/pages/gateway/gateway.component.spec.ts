import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { GatewayComponent } from './gateway.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GatewayRoutingModule } from './gateway.routes';
// import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GatewayFormComponent } from './components/gatewayForm/gatewayForm.component';

describe('GatewayComponent', () => {
  let component: GatewayComponent;
  let fixture: ComponentFixture<GatewayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GatewayComponent, GatewayFormComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        GatewayRoutingModule,
        // BrowserAnimationsModule,
        // ConfirmDialogModule
      ],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
