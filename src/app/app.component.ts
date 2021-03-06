/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    '../../node_modules/@angular/material/core/theming/prebuilt/deeppurple-amber.scss',
    './app.component.scss'
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  navItems = [
    {name: 'Encoding', route: 'encoding'},
    {name: 'Crypto', route: 'crypto'},
    {name: '贝尔宾团队角色', route: 'belbin'}
  ];
  version = require('../../package.json').version;

  constructor() {

  }

  ngOnInit() {

  }
}
