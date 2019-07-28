import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { CustomerComponent } from './Customer/CustomerApp.CustomerComponent';

import { MasterPageComponent } from './Home/CustomerApp.MasterPageComponent';
import { RouterModule } from '@angular/router';
import { MainRoutes } from './Routing/CustomerApp.MainRouting';

@NgModule({
  declarations: [
    //  HomeComponent ,, SupplierComponent, 
    MasterPageComponent,CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class AppModule { }
