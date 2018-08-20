import {NgModule }                 from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {CommonModule }             from '@angular/common';
import {HttpClient,HttpClientModule} from '@angular/common/http'
import {FormsModule,ReactiveFormsModule,FormGroup,FormControl,Validator,FormBuilder} from '@angular/forms'
import {AgGridModule} from "ag-grid-angular/main";
import {authenticationService} from './services/authentication.service';

import {RedComponentComponent} from "./red-component.component";


import {AppComponent} from './app.component';
import {AppPageTop} from './pagetop.component';
import {AppPageLeft} from './pageleft.component';
import {homeComponent } from './home.component';
import {empDashboard } from './emp.dashboard';

import {newcallComponent} from './newcall.component';
import {mycallsComponent} from './mycalls.component';
import {updatefieldvisitsComponent} from './updatefieldvisits.component';
import {myvisitsComponent} from './myvisits.component';


import {PageNotFoundComponent} from './page-not-found-component';
import {Globals} from './app.config';

@NgModule(
{
  imports: [HttpClientModule,CommonModule,FormsModule,ReactiveFormsModule,AgGridModule.withComponents([]),
    RouterModule.forChild([
      { path: 'employee-dashboard', redirectTo: 'employee-dashboard/dashboard',  pathMatch: 'full' }, 
      { path: 'employee-dashboard', component: homeComponent,
          children: [
              { path: 'home', component: homeComponent },
              { path: 'dashboard', component: empDashboard },
              { path: 'mycalls', component: mycallsComponent },
              { path: 'newcall',  component: newcallComponent },
              { path: 'update_field_visits', component: updatefieldvisitsComponent },
              { path: 'my_visits', component: myvisitsComponent}
          ]
      },
      { path: '**', redirectTo: 'PageNotFoundComponent' }
    ])
  ],
  declarations: [AppComponent,AppPageTop,AppPageLeft,homeComponent,empDashboard,
      newcallComponent,mycallsComponent,updatefieldvisitsComponent,myvisitsComponent,
      PageNotFoundComponent,RedComponentComponent],
  providers: [authenticationService],
  bootstrap: [AppComponent]
})
export class EmpModule { }
