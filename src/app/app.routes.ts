import {Routes} from '@angular/router';
import {NoContentComponent} from './no-content';
import {InputDemo} from './input/input-demo';
import {EncodingComponent} from "./encoding/encode.component";
import {DecodeComponent} from "./decode/decode.component";
import {Base64Component} from "./base64/base64.component";


export const ROUTES: Routes = [
  {path: '', component: EncodingComponent},
  {path: 'encoding', component: EncodingComponent},
  {path: '**', component: NoContentComponent},
];
