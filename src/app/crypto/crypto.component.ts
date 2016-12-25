import {Component} from '@angular/core';
import {MdSnackBarConfig, MdSnackBar} from "@angular/material";
const xdata = require('@inchingorg/xdata');
const encoder = xdata.encoder;
const decoder = xdata.decoder;
const base64 = xdata.base64;

var crypto = require('crypto-js');

@Component({
  selector: 'xd-encode',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent {
  data: string;
  encoding: string = 'utf-8';
  format: string = 'hex';
  result: string = '';
  isBase64: boolean = false;
  bytesCount: number = 0;
  key: string = "";
  padding: string = ""

  constructor(public snackBar: MdSnackBar) {
  }

  isValid() {
    if (!this.data) {
      let config = new MdSnackBarConfig();
      config.duration = 1000;
      this.snackBar.open('Please input source data.', '', config);
      return false;
    }

    return true;
  }

  encrypt() {

  }

  decrypt() {
    if (!this.isValid()) {
      return;
    }

    if (this.isBase64) {
      this.result = base64.decode(this.data, this.encoding);
    } else {
      this.result = decoder.decode(this.data, this.encoding);
    }

  }
}
