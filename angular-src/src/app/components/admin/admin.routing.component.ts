import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { AdminComponent } from './admin.component';
import { AdmindashboardComponent } from '../admindashboard/admindashboard.component';


const appRoutes: Routes =  [

  {path:'admin', component: AdminComponent, children: [
    {
      path: 'admindashboard', component: AdmindashboardComponent
    }

      ] 
    }
  ];

@NgModule({
  
  imports: [ RouterModule.forRoot(appRoutes)  ],
  exports: [ RouterModule ]
  
})
export class AdminRoutingModule { }
