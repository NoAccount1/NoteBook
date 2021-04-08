import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PageTitle } from '../common/page-title';
import { ALL_CURSIVES, ALL_PERSONALS, Book } from '../common/books';
import { DocumentationItems, SECTIONS } from '../common/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  _title = 'Lectures cursives';

  type: string | null | undefined;
  author: string | null | undefined;
  // book: string | null | undefined;

  bookList: Book[] | undefined;

  typeDetect = () => {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.type = params.get('type');
      this.author = params.get('author');
    });
    if (this.type === 'cursives') {
      return ALL_CURSIVES;
    } else {
      return ALL_PERSONALS;
    }
  }

  constructor(
    public title: PageTitle,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.title.title = this._title;
  }

}

