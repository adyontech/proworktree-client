import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './sharedComponents/navbar/navbar.module';
import { FooterModule } from './sharedComponents/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { LbdModule } from './lbd/lbd.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

import { UserStateService } from "./sharedService/userDetails/user-state.service";

import { LoginModule } from "./pages/login/login.module";
import { ActivationModule } from "./pages/activation/activation.module";

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularMultiSelectModule } from 'angular2-multiselect-checkbox-dropdown/angular2-multiselect-dropdown';
import { BsModalModule } from 'ng2-bs3-modal';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,

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
    LbdModule,
    LoginModule,
    ActivationModule,
    NgxMyDatePickerModule.forRoot() ,
    BsModalModule
  ],
  providers: [UserStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
