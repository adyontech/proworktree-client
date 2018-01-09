import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './sharedComponents/navbar/navbar.module';
import { FooterModule } from './sharedComponents/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';


import { UserStateService } from "./sharedService/userDetails/user-state.service";

import { LoginModule } from "./pages/login/login.module";
import { ActivationModule } from "./pages/activation/activation.module";

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularMultiSelectModule } from 'angular2-multiselect-checkbox-dropdown/angular2-multiselect-dropdown';
import { BsModalModule } from 'ng2-bs3-modal';
import { UiSwitchModule } from 'angular2-ui-switch'
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    AngularMultiSelectModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    RouterModule,
    AppRoutingModule,
    LoginModule,
    ActivationModule,
    BsModalModule,
  ],
  providers: [UserStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
