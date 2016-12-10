/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    '../../node_modules/@angular/material/core/theming/prebuilt/indigo-pink.css',
    './app.component.scss'
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  navItems = [
    {name: 'Encoding', route: 'encoding'}
  ];

  constructor() {

  }

  ngOnInit() {

  }
}
