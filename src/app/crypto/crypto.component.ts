import {Component} from '@angular/core';
import {MdSnackBarConfig, MdSnackBar} from "@angular/material";
import EnumEx from "../util/EnumEx";
import DataUtil from "../util/DataUtil";
const xdata = require('@inchingorg/xdata');
const encoder = xdata.encoder;
const decoder = xdata.decoder;
const base64 = xdata.base64;

var crypto = require('crypto-js');

enum Mode {
  ECB,
  CBC,
  CFB,
  CTR,
  CTRGladman,
  OFB
}

enum Padding {
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
  data: string = "00 00 00 00 00 00 00 00";
  isDataSourceHex = false;
  isDataSourceBase64 = false;

  function: string = 'TripleDES';
  iv: string = '';

  keySize: number;
  ivSize: number;
  isIvNeeded = false;

  key: string = "80 00 00 00 00 00 00 00";
  padding = Padding[Padding.ZeroPadding];
  mode = Mode[Mode.ECB];

  format: string = 'hex';
  encoding: string = 'utf-8';
  result: string = '';
  isBase64: boolean = false;
  bytesCount: number = 0;

  modes = EnumEx.getNames(Mode);
  paddings = EnumEx.getNames(Padding);

  snackConfig: MdSnackBarConfig;

  constructor(public snackBar: MdSnackBar) {
    this.onFunctionChange();
    this.onDataSourceChange();

    this.snackConfig = new MdSnackBarConfig();
    this.snackConfig.duration = 1000;
  }

  onModeChange() {
    // need the IV?
    if (['CBC', 'CFB', 'OFB'].indexOf(this.mode) === -1) {
      this.isIvNeeded = false;
      return;
    }

    let ivSize = decoder.format(this.iv).length / 2;
    if (this.ivSize !== ivSize) {
      this.iv = Array(this.ivSize).fill("00").join(' ');
    }

    this.isIvNeeded = true;
  }

  onDataSourceChange() {
    this.isDataSourceHex = /^[0-9A-F]+$/i.test(decoder.format(this.data));

    if (!this.isDataSourceHex) {
      this.isBase64 = DataUtil.isBase64String(this.data);
    }
  }

  onFunctionChange() {
    this.keySize = crypto.algo[this.function].keySize * 4;
    this.ivSize = crypto.algo[this.function].ivSize * 4;

    this.onModeChange();
  }

  isValid() {
    if (!this.data) {

      this.snackBar.open('Please input source data.', '', this.snackConfig);
      return false;
    }

    return true;
  }

  config() {
    let cfg: any = {
      mode: crypto.mode[this.mode],
      padding: crypto.pad[this.padding]
    };

    if (this.isIvNeeded) {
      let iv = decoder.format(this.iv);
      cfg.iv = crypto.enc.Hex.parse(iv);
    }

    return cfg;
  }

  private encode() {
    let plainText;
    if (this.isBase64) {
      plainText = base64.decode(this.data, this.encoding);
    } else {
      plainText = this.data;
    }

    let encodeResult = encoder.encode(plainText, this.encoding);


    return encoder.format(encodeResult, 'compressed');
  }

  encrypt() {
    if (!this.isValid()) {
      return;
    }

    // hex string
    let dataSource = decoder.format(this.data);

    // Plain text
    if (!this.isDataSourceHex) {
      dataSource = this.encode();
    }

    let cfg = this.config();

    let encryptDataSource = crypto.enc.Hex.parse(dataSource);
    let key = crypto.enc.Hex.parse(decoder.format(this.key));

    try {
      this.result = crypto[this.function].encrypt(encryptDataSource, key, cfg).ciphertext.toString();
    } catch (e) {
      this.snackBar.open(e.message, '', this.snackConfig);
    }

    this.result = encoder.format(this.result, this.format);
  }

  decrypt() {
    let dataSource = decoder.format(this.data);
    let ciphertext = crypto.enc.Hex.parse(dataSource);
    let clipherParams = crypto.lib.CipherParams.create({ciphertext: ciphertext});
    let key = crypto.enc.Hex.parse(decoder.format(this.key));
    let cfg = this.config();

    let result = crypto[this.function].decrypt(clipherParams, key, cfg).toString();
    this.result = encoder.format(result, this.format);
  }
}
