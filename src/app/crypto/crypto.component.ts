import {Component} from '@angular/core';
import {MdSnackBarConfig, MdSnackBar} from "@angular/material";
import EnumEx from "../util/EnumEx";
const xdata = require('@inchingorg/xdata');
const encoder = xdata.encoder;
const decoder = xdata.decoder;
const base64 = xdata.base64;

var crypto = require('crypto-js');

const enum Mode {
  ECB,
  CBC,
  CFB,
  CTR,
  CTRGladman,
  OFB
}

const enum Padding {
  AnsiX923,
  Iso10126,
  Iso97971,
  NoPadding,
  Pkcs7,
  ZeroPadding
}

@Component({
  selector: 'xd-encode',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent {
  data: string = "0000000000000000";
  function: string = 'TripleDES';
  format: string = 'hex';
  encoding: string = 'utf-8';
  result: string = '';
  isBase64: boolean = false;
  bytesCount: number = 0;
  key: string = "8000000000000000";
  padding = Padding[Padding.ZeroPadding];
  mode = Mode[Mode.ECB];
  modes = EnumEx.getNames(Mode);
  paddings = EnumEx.getNames(Padding);


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
    if (!this.isValid()) {
      return;
    }

    let data = this.data.replace(/[ ,\[\]]|0[xX]/g, '');

    this.result = crypto[this.function].encrypt(crypto.enc.Hex.parse(data),
      crypto.enc.Hex.parse(this.key),
      {
        mode: crypto.mode[this.mode],
        padding: crypto.pad[this.padding]
      }).ciphertext.toString();

    this.result = encoder.format(this.result, this.format);

  }

  decrypt() {

  }
}
