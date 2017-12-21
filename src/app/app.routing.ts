import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

import { LoginComponent } from './pages/login/login.component';
import { LoggedInGuard } from './sharedService/authGuard/guard';
import { ActivationComponent } from './pages/activation/activation.component';
// import {  } from "module";
const routes: Routes = [
  { path: 'sdashboard', component: HomeComponent },
  { path: 'suser', component: UserComponent },
  { path: 'stable', component: TablesComponent },
  { path: 'stypography', component: TypographyComponent },
  { path: 'sicons', component: IconsComponent },
  { path: 'smaps', component: MapsComponent },
  { path: 'snotifications', component: NotificationsComponent },
  { path: 'supgrade', component: UpgradeComponent },




  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    loadChildren: 'app/pages/signup/signup.module#SignupModule'
  },
  {
    path: 'activation/:token',
    component: ActivationComponent,

  },
  {
    path: 'gateway',
    loadChildren: 'app/pages/gateway/gateway.module#GatewayModule',
    // canActivate: [LoggedInGuard] 
  },
  {
    path: 'dashboard/:id',
    loadChildren: './pages/dashboard/dashboard.module#DashboardModule',
    // canActivate: [LoggedInGuard] 
  },
  { path: '', redirectTo: 'gateway', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
