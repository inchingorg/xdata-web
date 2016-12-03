import {Component, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'home',
  template: `
    <p>Welcome to the development demos for Angular Material 2!</p>
    <p>Open the sidenav to select a demo. </p>
  `
})
export class Home {}

@Component({
  moduleId: module.id,
  selector: 'demo-app',
  providers: [],
  templateUrl: 'demo-app.html',
  styleUrls: ['demo-app.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DemoApp {
  navItems = [
    {name: 'Button', route: 'button'},
    {name: 'Button Toggle', route: 'button-toggle'},
    {name: 'Card', route: 'card'},
    {name: 'Chips', route: 'chips'},
    {name: 'Checkbox', route: 'checkbox'},
    {name: 'Dialog', route: 'dialog'},
    {name: 'Gestures', route: 'gestures'},
    {name: 'Grid List', route: 'grid-list'},
    {name: 'Icon', route: 'icon'},
    {name: 'Input', route: 'input'},
    {name: 'List', route: 'list'},
    {name: 'Menu', route: 'menu'},
    {name: 'Live Announcer', route: 'live-announcer'},
    {name: 'Overlay', route: 'overlay'},
    {name: 'Portal', route: 'portal'},
    {name: 'Projection', route: 'projection'},
    {name: 'Progress Bar', route: 'progress-bar'},
    {name: 'Progress Circle', route: 'progress-circle'},
    {name: 'Radio', route: 'radio'},
    {name: 'Ripple', route: 'ripple'},
    {name: 'Select', route: 'select'},
    {name: 'Sidenav', route: 'sidenav'},
    {name: 'Slider', route: 'slider'},
    {name: 'Slide Toggle', route: 'slide-toggle'},
    {name: 'Snack Bar', route: 'snack-bar'},
    {name: 'Tabs', route: 'tabs'},
    {name: 'Toolbar', route: 'toolbar'},
    {name: 'Tooltip', route: 'tooltip'},
    {name: 'Platform', route: 'platform'}
  ];
}
