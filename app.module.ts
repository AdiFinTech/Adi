import {BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {FormsModule,ReactiveFormsModule,FormGroup,FormControl,Validator,FormBuilder} from '@angular/forms'
import {RouterModule, Routes} from '@angular/router'
import {HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/subscribeOn';

import {beforeloginComponent} from './beforelogin.component';
import {loginComponent} from './login.component'; 
import {logoutComponent} from './logout.component';
import {otpComponent} from './otp.component';
import {registrationComponent} from './registration.component';

import {EmpModule} from './emp.module';
//import {homeComponent} from './home.component';
//import {AppComponent} from './app.component';

import { PageNotFoundComponent } from './page-not-found-component';
import { Globals  } from './app.config';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const APPROUTES: Routes = [
  { path: '', redirectTo: 'login',  pathMatch: 'full' },  
  { path: 'login', component: loginComponent }, 
  { path: 'logout', component: logoutComponent }, 
  { path: 'otp', component: otpComponent }, 
  { path: 'registration', component: registrationComponent }, 
  //{ path: 'employee-dashboard/home',component: AppComponent }, 
  { path: '**', redirectTo: 'PageNotFoundComponent' }
];

@NgModule({
  declarations: [beforeloginComponent,loginComponent,otpComponent,registrationComponent,logoutComponent],
  imports: [BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule,EmpModule,RouterModule.forRoot(APPROUTES, {useHash: false})], 
  providers: [],
  bootstrap: [beforeloginComponent]
})
export class AppModule { }
