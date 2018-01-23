import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { IconsComponent } from './icons/icons.component';

import { LoginComponent } from './pages/login/login.component';
import { LoggedInGuard } from './sharedService/authGuard/guard';
import { ActivationComponent } from './pages/activation/activation.component';

const routes: Routes = [




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
    path: 'forms/:id',
    loadChildren: './pages/inputForms/inputForms.module#InputFormsModule',
    // canActivate: [LoggedInGuard] 
  },
  {
    path: 'report/:id',
    loadChildren: './pages/outputPages/outputPages.module#OutputPagesModule',
    // canActivate: [LoggedInGuard] 
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
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
