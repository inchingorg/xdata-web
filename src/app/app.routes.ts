import {Routes} from '@angular/router';
import {NoContentComponent} from './no-content';
import {EncodingComponent} from './encoding/encode.component';
import {BelbinComponent} from './belbin/belbin.component';
import {BelbinResultComponent} from "./belbin/belbin-result.component";
import {CryptoComponent} from "./crypto/crypto.component";


export const ROUTES: Routes = [
  {path: '', component: EncodingComponent},
  {path: 'encoding', component: EncodingComponent},
  {path: 'crypto', component: CryptoComponent},
  {path: 'belbin', component: BelbinComponent},
  {path: 'belbin-result', component: BelbinResultComponent},
  {path: '**', component: NoContentComponent}
];
