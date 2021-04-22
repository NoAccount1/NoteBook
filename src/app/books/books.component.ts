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

  constructor(
    public title: PageTitle,
    private activatedRoute: ActivatedRoute,
  ) { }

  _title = 'Lectures cursives';

  type: string | null | undefined;
  author: string | null | undefined;
  book: string | null | undefined;

  bookList: Book[] | undefined;

  typeDetect = () => {
    // this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
    //   this.type = params.get('type');
    //   this.author = params.get('author');
    //   this.book = params.get('book');
    // });
    this.activatedRoute.queryParams.subscribe(params => {
      this.type = params.type;
      this.author = params.author;
      this.book = params.book;
      console.log(params);
      console.log(params.type, params.author, params.book);
    });

    if (this.type === 'cursives') {
      return ALL_CURSIVES;
    } else {
      return ALL_PERSONALS;
    }
  }

  ngOnInit(): void {
    this.title.title = this._title;
  }

}

