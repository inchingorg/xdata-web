import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './app.component';
import { NoContentComponent } from './no-content';
import {InputDemo} from './input/input-demo';


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'input', component: InputDemo},
  { path: '**',    component: NoContentComponent },
];
