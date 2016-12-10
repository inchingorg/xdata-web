import { Component} from '@angular/core';
import { MdSnackBarConfig, MdSnackBar} from "@angular/material";
const xdata = require('xdata-library');

@Component({
  selector: 'xd-encode',
  templateUrl: './encode.component.html',
  styleUrls: ['./encode.component.scss']
})
export class EncodeComponent {
  data: string;
  encoding: string = 'utf-8';
  format: string = 'hex';
  encodedResult: string = '';

  constructor(public snackBar: MdSnackBar) {
  }

  encode() {
    if (!this.data) {
      let config = new MdSnackBarConfig();
      this.snackBar.open('Please input the encoding data', '', config);
      return;
    }
    this.encodedResult = xdata.encode(this.data, this.encoding, this.format);
  }
}
