import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* All components used in this project */
import { AppComponent } from './app.component';
import { HomeComponent } from './common/home/home.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { ErrorComponent } from './common/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'books/:type', component: BooksComponent },
  { path: 'books/:type/:author', component: BooksComponent },
  { path: 'books/:type/:author/:book', component: BookComponent },
  { path: '**', component: ErrorComponent }
  // { path: 'personals', component: BooksComponent },
  // { path: 'personals/:author', component: BooksComponent },
  // { path: 'personals/:author/:book', component: BookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingRoutes { }
