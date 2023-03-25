import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { ArchwizardModule } from 'angular-archwizard';
import { ProductWizardComponent } from './product-wizard/product-wizard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    BodyComponent,
    ProductCatalogComponent,
    ProductDisplayComponent,
    ProductWizardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ArchwizardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 



}
