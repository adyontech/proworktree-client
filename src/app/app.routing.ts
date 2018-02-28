import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';



import { LoginComponent } from './pages/login/login.component';
import { LoggedInGuard } from './sharedService/authGuard/guard';
import { ActivationComponent } from './pages/activation/activation.component';
import { FileUploadComponent } from './pages/file-upload/file-upload.component';

const routes: Routes = [

  {
    path: '', redirectTo: '/fileupload', pathMatch: 'full'
  },

  {
    path: 'fileupload',
    component: FileUploadComponent
  },

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
  // { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    FileUploadComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
