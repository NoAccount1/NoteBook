import { Component, OnInit } from '@angular/core';
import { PageTitle } from './common/page-title';
// import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public title: PageTitle) {}

  ngOnInit(): void {
    // this.title.title = 'coucou';
  }
  /* public title: string |any;
  public constructor(private titleService: Title) { }

  public setTitle(newTitle: string): void {
    this.titleService.setTitle(newTitle);
  } */
}
