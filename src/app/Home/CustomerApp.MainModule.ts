import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './Customer/CustomerApp.CustomerComponent';
import { HomeComponent } from './Home/CustomerApp.HomeComponent';
import { SupplierComponent } from './Supplier/CustomerApp.SupplierComponent';
import { MasterPageComponent } from './Home/CustomerApp.MasterPageComponent';
import { RouterModule } from '@angular/router';
import { MainRoutes } from './Routing/CustomerApp.MainRouting';

@NgModule({
  declarations: [
    // CustomerComponent, SupplierComponent,
    MasterPageComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class AppModule { }
