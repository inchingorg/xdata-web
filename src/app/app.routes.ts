import { Routes } from '@angular/router';
import { HomeComponent } from './app.component';
import { NoContentComponent } from './no-content';
import {InputDemo} from './input/input-demo';
import {EncodeComponent} from "./encode/encode.component";
import {DecodeComponent} from "./decode/decode.component";
import {Base64Component} from "./base64/base64.component";


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'input', component: InputDemo},
  {path: 'encode', component: EncodeComponent},
  {path: 'decode', component: DecodeComponent},
  {path: 'base64', component: Base64Component},
  { path: '**',    component: NoContentComponent },
];
