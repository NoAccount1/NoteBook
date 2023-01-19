import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PageTitle } from '../common/page-title';
import { BOOKS_RAW } from '../common/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(
    public title: PageTitle,
    private activatedRoute: ActivatedRoute,
  ) { }

  _title = 'Lectures cursives';

  books = BOOKS_RAW;

  style = 'tile';
  switchStyle = () => {
    this.style = this.style == 'card' ? 'tile' : 'card';
  }

  ngOnInit(): void {
    this.title.title = this._title;
  }

}

