import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/core/home/home.component';
import { NavbarComponent } from './components/core/navbar/navbar.component';
import { JumbotronComponent } from './components/core/jumbotron/jumbotron.component';
import { ContainerComponent } from './components/core/container/container.component';
import { SlidingCardComponent } from './components/core/sliding-card/sliding-card.component';
import { MenuService } from './services/menu.service';
import { FooterComponent } from './components/core/footer/footer.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AboutComponent } from './components/core/about/about.component';
import { ContactComponent } from './components/core/contact/contact.component';
import { ServicesComponent } from './components/core/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    JumbotronComponent,
    ContainerComponent,
    SlidingCardComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
