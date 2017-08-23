import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

import { Routes } from './routes.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private listTitles: any[];
  location: Location;
  constructor(location: Location) {
    this.location = location;
  }

  ngOnInit() {
    let location = this.location.prepareExternalUrl(this.location.path());
    if (location.charAt(0) === '/') {
      location = location.slice( 1 );
    }
    this.listTitles = Routes.filter(listTitle => listTitle.top)
    .map(listTitle => {
      console.log('listTitle', listTitle);
      console.log('location', location);
      listTitle.current = location === listTitle.path;
      return listTitle;
    });
  }
  getTitle() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice( 2 );
    }
    if (titlee.charAt(0) === '/') {
      titlee = titlee.slice( 1 );
    }
    for (let item = 0; item < this.listTitles.length; item++) {
        if (this.listTitles[item].path === titlee) {
          return this.listTitles[item].title;
        }
        titlee = titlee.split('/') && titlee.split('/')[0];
        if (this.listTitles[item].path === titlee) {
          return this.listTitles[item].title;
        }
    }
    return 'Mario';
  }
  getPath() {
      console.log(this.location.prepareExternalUrl(this.location.path()));
      return this.location.prepareExternalUrl(this.location.path());
  }

}
