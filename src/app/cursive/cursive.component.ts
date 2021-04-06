import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PageTitle } from '../common/page-title';
import { ALL_CURSIVES } from '../common/books';
import { DocumentationItems, SECTIONS } from '../common/books';

@Component({
  selector: 'app-cursive',
  templateUrl: './cursive.component.html',
  styleUrls: ['./cursive.component.scss']
})
export class CursiveComponent implements OnInit {
  _title = 'Lectures cursives';
  bookList = ALL_CURSIVES;

  constructor(
    public title: PageTitle,
    private route: ActivatedRoute,
  ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.title.title = this._title;
    // tslint:disable-next-line: deprecation
    this.route.params.subscribe(params => {
      console.log(params);
    });
  }

}

