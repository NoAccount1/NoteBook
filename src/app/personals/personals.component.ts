import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageTitle } from '../common/page-title';
import { ALL_PERSONALS } from '../common/books';

@Component({
  selector: 'app-personals',
  templateUrl: './personals.component.html',
  styleUrls: ['./personals.component.scss']
})
export class PersonalsComponent implements OnInit {
  _title = 'Lectures personnelles';
  bookList = ALL_PERSONALS;

  constructor(
    public title: PageTitle,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.title.title = this._title;
    // tslint:disable-next-line: deprecation
    this.route.params.subscribe(params => {
      console.log(params);
    });
  }

}
