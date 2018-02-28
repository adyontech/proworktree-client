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
import { GlobalVariableService } from "./sharedService/globalVariables/globalVariable.service";
import { UploadImageService } from "./sharedService/upload-image.service";

import { LoginModule } from "./pages/login/login.module";
import { ActivationModule } from "./pages/activation/activation.module";


import { AngularMultiSelectModule } from 'angular2-multiselect-checkbox-dropdown/angular2-multiselect-dropdown';
import { BsModalModule } from 'ng2-bs3-modal';
import { UiSwitchModule } from '../../node_modules/angular2-ui-switch/src';

@NgModule({
  declarations: [
    AppComponent

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
  providers: [UserStateService, GlobalVariableService,UploadImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
