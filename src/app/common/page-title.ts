import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Injectable({providedIn: 'root'})
export class PageTitle {
  public _title = '';
  private _originalTitle = 'Carnet de lecteur';

  get title(): string { return this._title; }

  set title(title: string) {
    this._title = title;
    if (title !== '') {
      title = `${title} | Carnet de lecteur`;
    } else {
      title = this._originalTitle;
    }
    this.bodyTitle.setTitle(title);
  }

  constructor(private bodyTitle: Title) {}
}
