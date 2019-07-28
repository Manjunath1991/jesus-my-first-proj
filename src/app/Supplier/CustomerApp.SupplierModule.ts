import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';



import { MasterPageComponent } from './Home/CustomerApp.MasterPageComponent';
import { RouterModule } from '@angular/router';
import { MainRoutes } from './Routing/CustomerApp.MainRouting';
import { SupplierComponent } from './CustomerApp.SupplierComponent';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    //  HomeComponent , CustomerComponent
    MasterPageComponent, SupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class AppModule { }
