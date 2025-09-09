import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponentComponent } from './home-component/home-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { ClientComponentComponent } from './client-component/client-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponentComponent,
    FooterComponentComponent,
    NavBarComponentComponent,
    ClientComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
