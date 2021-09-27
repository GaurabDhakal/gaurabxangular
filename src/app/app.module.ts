import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './mycomponents/navbar/navbar.component';
import { AboutComponent } from './mycomponents/about/about.component';
import { ContactComponent } from './mycomponents/contact/contact.component';
import { HomeComponent } from './mycomponents/home/home.component';
import { PagenotfoundComponent } from './mycomponents/pagenotfound/pagenotfound.component';
import { FooterComponent } from './mycomponents/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    PagenotfoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
