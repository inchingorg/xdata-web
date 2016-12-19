import {Routes} from '@angular/router';
import {NoContentComponent} from './no-content';
import {EncodingComponent} from './encoding/encode.component';
import {BelbinComponent} from './belbin/belbin.component';


export const ROUTES: Routes = [
  {path: '', component: EncodingComponent},
  {path: 'encoding', component: EncodingComponent},
  {path: 'belbin', component: BelbinComponent},
  {path: '**', component: NoContentComponent}
];
