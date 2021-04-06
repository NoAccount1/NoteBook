import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* All components used in this project */
import { AppComponent } from './app.component';
import { HomeComponent } from './common/home/home.component';
import { CursiveComponent } from './cursive/cursive.component';
import { PersonalsComponent } from './personals/personals.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cursives', component: CursiveComponent },
  { path: 'cursives/:author', component: CursiveComponent },
  { path: 'cursives/:author/:book', component: CursiveComponent },
  { path: 'personals', component: PersonalsComponent },
  { path: 'personals/:author', component: PersonalsComponent },
  { path: 'personals/:author/:book', component: PersonalsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingRoutes { }
