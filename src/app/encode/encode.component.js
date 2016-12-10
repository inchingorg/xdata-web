"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var material_1 = require("@angular/material");
var xdata = require('xdata-library');
var EncodeComponent = (function () {
    function EncodeComponent(snackBar) {
        this.snackBar = snackBar;
        this.encoding = 'utf-8';
        this.format = 'hex';
        this.encodedResult = '';
    }
    EncodeComponent.prototype.encode = function () {
        if (!this.data) {
            var config = new material_1.MdSnackBarConfig();
            this.snackBar.open('Please input the encoding data', '', config);
            return;
        }
        this.encodedResult = xdata.encode(this.data, this.encoding, this.format);
    };
    EncodeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'xd-encode',
            templateUrl: './encode.component.html',
            styleUrls: ['./encode.component.scss']
        })
    ], EncodeComponent);
    return EncodeComponent;
}());
exports.EncodeComponent = EncodeComponent;
//# sourceMappingURL=encode.component.js.map