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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    JumbotronComponent,
    ContainerComponent,
    SlidingCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
