/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from '@angular/core';
import {AppState} from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
    moduleId: module.id,
    selector: 'app',
    styleUrls: [
        '../../node_modules/@angular/material/core/theming/prebuilt/indigo-pink.css',
        './app.component.scss'
    ],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    navItems = [
        {name: 'Input', route: 'input'},
        {name: 'Encode', route: 'encode'},
        {name: 'Decode', route: 'decode'},
        {name: 'Base64', route: 'base64'},
        {name: 'List', route: 'list'},
        {name: 'Menu', route: 'menu'}
    ];

    constructor(public appState: AppState) {

    }

    ngOnInit() {
        console.log('Initial App State', this.appState.state);
    }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
