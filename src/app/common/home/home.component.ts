import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageTitle } from '../page-title';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: [ 'home.component.scss' ]
})

export class HomeComponent implements OnInit {
  _title = 'Accueil ';
  constructor(
    public title: PageTitle,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.title.title = this._title;
  }
}
