import {Routes} from '@angular/router';
import {Home} from './demo-app';
import {InputDemo} from '../input/input-demo';


export const DEMO_APP_ROUTES: Routes = [
    {path: '', component: Home},
    {path: 'input', component: InputDemo}
];
