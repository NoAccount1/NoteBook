import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingRoutes } from './app-routing.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './common/home/home.component';
import { CursiveComponent } from './cursive/cursive.component';
import { PersonalsComponent } from './personals/personals.component';
import { ItemComponent } from './common/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CursiveComponent,
    PersonalsComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingRoutes
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
