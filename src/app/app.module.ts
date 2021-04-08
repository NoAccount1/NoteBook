import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingRoutes } from './app-routing.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './common/home/home.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingRoutes,
    FlexLayoutModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
