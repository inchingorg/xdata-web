import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'xd-encode',
    templateUrl: './encode.component.html',
    styleUrls: ['./encode.component.scss']
})
export class EncodeComponent {
    data: string;
    encoding: string;
    format: string;
}
