"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 52003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 52003);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 62267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 91670);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts-md5 */ 16462);










let HomePage = class HomePage {
    constructor(http, formBuilder, loadingController, toastController, router) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.router = router;
        this.url = "https://ppa.2pisys.com";
        this.data = localStorage.setItem('url', this.url);
        this.dataUrl = "https://ppa.2pisys.com";
        this.datapass = { "base64encodedimage": "./assets/image/no_logo.png" };
        this.authid = "PXpv2YWV41L223hGDuXY";
        this.clientid = "ppa";
        this.submitted = false;
        this.cversion = 1.61;
        this.versionFlag = false;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            userid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
        if (localStorage.getItem('url') != null || localStorage.length != 0) {
            console.log("In if");
            this.dataUrl = localStorage.getItem('url');
        }
        else {
            console.log("In else");
            localStorage.setItem('url', this.url);
        }
        if (localStorage.getItem('authid') != null) {
            this.authid = localStorage.getItem('authid');
        }
        else {
            localStorage.setItem('authid', this.authid);
        }
        if (localStorage.getItem('clientid') != null) {
            this.clientid = localStorage.getItem('clientid');
        }
        else {
            localStorage.setItem('clientid', this.clientid);
        }
        console.log("----------->");
        console.log(this.dataUrl);
        const headers = { 'auth-id': localStorage.getItem('authid'), 'client-id': localStorage.getItem('clientid') };
        this.http.get(this.dataUrl + '/api/custicon', { headers }).subscribe({
            next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                this.datapass = data.message[0];
                this.datapass.base64encodedimage = "data:image/png;base64," + data.message[0].base64encodedimage;
                localStorage.setItem('brandImage', this.datapass.base64encodedimage);
            }),
            error: errordata => {
                if (errordata.error.message) {
                    this.toastfunction(errordata.error.message, "danger");
                }
                else {
                    this.toastfunction("Invalid Company Url, Please Check in Home page 1", "danger");
                }
            }
        });
        console.log(this.dataUrl);
        this.http.get(this.dataUrl + '/api/appversion/plan', { headers }).subscribe({
            next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                if (this.cversion >= data.message) {
                    this.versionFlag = false;
                    if (localStorage.getItem('userid') != null && localStorage.getItem('password') != null) {
                        this.router.navigate(["Widgets"]);
                    }
                    else {
                        this.router.navigate(["home"]);
                    }
                }
                else {
                    this.versionToastFunction();
                    this.versionFlag = true;
                }
            }),
            error: errordata => {
                if (errordata.error.message) {
                    this.toastfunction(errordata.error.message, "danger");
                }
                else {
                    this.toastfunction("Invalid Company Url, Please Check in Home page 2", "danger");
                }
            }
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    textChanged(obj) {
        localStorage.setItem('url', obj);
    }
    onClickMe(obj) {
        this.router.navigate([obj]);
    }
    submitData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.submitted = true;
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                spinner: 'dots'
            });
            yield loading.present();
            if (this.registerForm.invalid) {
                return;
            }
            else {
                const headers = {
                    'auth-id': localStorage.getItem('authid'),
                    'client-id': localStorage.getItem('clientid'),
                    'user': this.registerForm.value.userid,
                    'password': ts_md5__WEBPACK_IMPORTED_MODULE_2__.Md5.hashStr(this.registerForm.value.password)
                };
                console.log(this.dataUrl);
                this.http.get(this.dataUrl + "/api/userlogin/" + this.registerForm.value.userid, { headers }).subscribe({
                    next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                        this.router.navigate(["Widgets"]);
                        localStorage.setItem('userid', this.registerForm.value.userid);
                        localStorage.setItem('password', ts_md5__WEBPACK_IMPORTED_MODULE_2__.Md5.hashStr(this.registerForm.value.password));
                        this.setStorage();
                        loading.dismiss();
                    }),
                    error: errordata => {
                        if (errordata.error.message) {
                            loading.dismiss();
                            this.toastfunction(errordata.error.message, "danger");
                        }
                        else {
                            loading.dismiss();
                            this.toastfunction("Invalid Company Url, Please Check in Home page 3", "danger");
                        }
                    }
                });
            }
        });
    }
    setStorage() {
        let date = new Date();
        this.expiryDate = date.setDate(date.getDate() + 1);
        localStorage.setItem("your-data-key", this.expiryDate.toString());
    }
    toastfunction(msg, colour) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
                position: 'bottom',
                animated: true,
                color: colour
            });
            toast.present();
        });
    }
    refresher() {
        this.ngOnInit();
    }
    versionToastFunction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast2 = yield this.toastController.create({
                header: "Update required",
                message: "A new PPA app is now available. Please update from playstore.",
                position: 'bottom',
                animated: true,
                color: "danger",
                // buttons: [
                //  {
                //     side: 'end',
                //     text: 'Close',
                //     role: 'cancel',
                //     icon:'close',
                //     handler: () => {
                //       console.log('Close clicked');
                //     }
                //   }
                // ]
            });
            toast2.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 16462:
/*!***********************************************!*\
  !*** ./node_modules/ts-md5/dist/esm/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Md5": () => (/* reexport safe */ _md5__WEBPACK_IMPORTED_MODULE_0__.Md5),
/* harmony export */   "Md5FileHasher": () => (/* reexport safe */ _md5_file_hasher__WEBPACK_IMPORTED_MODULE_1__.Md5FileHasher),
/* harmony export */   "ParallelHasher": () => (/* reexport safe */ _parallel_hasher__WEBPACK_IMPORTED_MODULE_2__.ParallelHasher)
/* harmony export */ });
/* harmony import */ var _md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./md5 */ 29667);
/* harmony import */ var _md5_file_hasher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5_file_hasher */ 9412);
/* harmony import */ var _parallel_hasher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parallel_hasher */ 83619);





/***/ }),

/***/ 29667:
/*!*********************************************!*\
  !*** ./node_modules/ts-md5/dist/esm/md5.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Md5": () => (/* binding */ Md5)
/* harmony export */ });
/*

TypeScript Md5
==============

Based on work by
* Joseph Myers: http://www.myersdaily.org/joseph/javascript/md5-text.html
* André Cruz: https://github.com/satazor/SparkMD5
* Raymond Hill: https://github.com/gorhill/yamd5.js

Effectively a TypeScrypt re-write of Raymond Hill JS Library

The MIT License (MIT)

Copyright (C) 2014 Raymond Hill

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



            DO WHAT YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2015 André Cruz <amdfcruz@gmail.com>

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT YOU WANT TO.


*/
;
class Md5 {
    constructor() {
        this._dataLength = 0;
        this._bufferLength = 0;
        this._state = new Int32Array(4);
        this._buffer = new ArrayBuffer(68);
        this._buffer8 = new Uint8Array(this._buffer, 0, 68);
        this._buffer32 = new Uint32Array(this._buffer, 0, 17);
        this.start();
    }
    static hashStr(str, raw = false) {
        return this.onePassHasher
            .start()
            .appendStr(str)
            .end(raw);
    }
    static hashAsciiStr(str, raw = false) {
        return this.onePassHasher
            .start()
            .appendAsciiStr(str)
            .end(raw);
    }
    static _hex(x) {
        const hc = Md5.hexChars;
        const ho = Md5.hexOut;
        let n;
        let offset;
        let j;
        let i;
        for (i = 0; i < 4; i += 1) {
            offset = i * 8;
            n = x[i];
            for (j = 0; j < 8; j += 2) {
                ho[offset + 1 + j] = hc.charAt(n & 0x0F);
                n >>>= 4;
                ho[offset + 0 + j] = hc.charAt(n & 0x0F);
                n >>>= 4;
            }
        }
        return ho.join('');
    }
    static _md5cycle(x, k) {
        let a = x[0];
        let b = x[1];
        let c = x[2];
        let d = x[3];
        // ff()
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        // gg()
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        // hh()
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        // ii()
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
    }
    /**
     * Initialise buffer to be hashed
     */
    start() {
        this._dataLength = 0;
        this._bufferLength = 0;
        this._state.set(Md5.stateIdentity);
        return this;
    }
    // Char to code point to to array conversion:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
    // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
    /**
     * Append a UTF-8 string to the hash buffer
     * @param str String to append
     */
    appendStr(str) {
        const buf8 = this._buffer8;
        const buf32 = this._buffer32;
        let bufLen = this._bufferLength;
        let code;
        let i;
        for (i = 0; i < str.length; i += 1) {
            code = str.charCodeAt(i);
            if (code < 128) {
                buf8[bufLen++] = code;
            }
            else if (code < 0x800) {
                buf8[bufLen++] = (code >>> 6) + 0xC0;
                buf8[bufLen++] = code & 0x3F | 0x80;
            }
            else if (code < 0xD800 || code > 0xDBFF) {
                buf8[bufLen++] = (code >>> 12) + 0xE0;
                buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                buf8[bufLen++] = (code & 0x3F) | 0x80;
            }
            else {
                code = ((code - 0xD800) * 0x400) + (str.charCodeAt(++i) - 0xDC00) + 0x10000;
                if (code > 0x10FFFF) {
                    throw new Error('Unicode standard supports code points up to U+10FFFF');
                }
                buf8[bufLen++] = (code >>> 18) + 0xF0;
                buf8[bufLen++] = (code >>> 12 & 0x3F) | 0x80;
                buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                buf8[bufLen++] = (code & 0x3F) | 0x80;
            }
            if (bufLen >= 64) {
                this._dataLength += 64;
                Md5._md5cycle(this._state, buf32);
                bufLen -= 64;
                buf32[0] = buf32[16];
            }
        }
        this._bufferLength = bufLen;
        return this;
    }
    /**
     * Append an ASCII string to the hash buffer
     * @param str String to append
     */
    appendAsciiStr(str) {
        const buf8 = this._buffer8;
        const buf32 = this._buffer32;
        let bufLen = this._bufferLength;
        let i;
        let j = 0;
        for (;;) {
            i = Math.min(str.length - j, 64 - bufLen);
            while (i--) {
                buf8[bufLen++] = str.charCodeAt(j++);
            }
            if (bufLen < 64) {
                break;
            }
            this._dataLength += 64;
            Md5._md5cycle(this._state, buf32);
            bufLen = 0;
        }
        this._bufferLength = bufLen;
        return this;
    }
    /**
     * Append a byte array to the hash buffer
     * @param input array to append
     */
    appendByteArray(input) {
        const buf8 = this._buffer8;
        const buf32 = this._buffer32;
        let bufLen = this._bufferLength;
        let i;
        let j = 0;
        for (;;) {
            i = Math.min(input.length - j, 64 - bufLen);
            while (i--) {
                buf8[bufLen++] = input[j++];
            }
            if (bufLen < 64) {
                break;
            }
            this._dataLength += 64;
            Md5._md5cycle(this._state, buf32);
            bufLen = 0;
        }
        this._bufferLength = bufLen;
        return this;
    }
    /**
     * Get the state of the hash buffer
     */
    getState() {
        const s = this._state;
        return {
            buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
            buflen: this._bufferLength,
            length: this._dataLength,
            state: [s[0], s[1], s[2], s[3]]
        };
    }
    /**
     * Override the current state of the hash buffer
     * @param state New hash buffer state
     */
    setState(state) {
        const buf = state.buffer;
        const x = state.state;
        const s = this._state;
        let i;
        this._dataLength = state.length;
        this._bufferLength = state.buflen;
        s[0] = x[0];
        s[1] = x[1];
        s[2] = x[2];
        s[3] = x[3];
        for (i = 0; i < buf.length; i += 1) {
            this._buffer8[i] = buf.charCodeAt(i);
        }
    }
    /**
     * Hash the current state of the hash buffer and return the result
     * @param raw Whether to return the value as an `Int32Array`
     */
    end(raw = false) {
        const bufLen = this._bufferLength;
        const buf8 = this._buffer8;
        const buf32 = this._buffer32;
        const i = (bufLen >> 2) + 1;
        this._dataLength += bufLen;
        const dataBitsLen = this._dataLength * 8;
        buf8[bufLen] = 0x80;
        buf8[bufLen + 1] = buf8[bufLen + 2] = buf8[bufLen + 3] = 0;
        buf32.set(Md5.buffer32Identity.subarray(i), i);
        if (bufLen > 55) {
            Md5._md5cycle(this._state, buf32);
            buf32.set(Md5.buffer32Identity);
        }
        // Do the final computation based on the tail and length
        // Beware that the final length may not fit in 32 bits so we take care of that
        if (dataBitsLen <= 0xFFFFFFFF) {
            buf32[14] = dataBitsLen;
        }
        else {
            const matches = dataBitsLen.toString(16).match(/(.*?)(.{0,8})$/);
            if (matches === null) {
                return;
            }
            const lo = parseInt(matches[2], 16);
            const hi = parseInt(matches[1], 16) || 0;
            buf32[14] = lo;
            buf32[15] = hi;
        }
        Md5._md5cycle(this._state, buf32);
        return raw ? this._state : Md5._hex(this._state);
    }
}
// Private Static Variables
Md5.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]);
Md5.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
Md5.hexChars = '0123456789abcdef';
Md5.hexOut = [];
// Permanent instance is to use for one-call hashing
Md5.onePassHasher = new Md5();
if (Md5.hashStr('hello') !== '5d41402abc4b2a76b9719d911017c592') {
    throw new Error('Md5 self test failed.');
}


/***/ }),

/***/ 9412:
/*!*********************************************************!*\
  !*** ./node_modules/ts-md5/dist/esm/md5_file_hasher.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Md5FileHasher": () => (/* binding */ Md5FileHasher)
/* harmony export */ });
/* harmony import */ var _md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./md5 */ 29667);
 // Hashes any blob

class Md5FileHasher {
  constructor(_callback, // Callback to return the result
  _async = true, // Async version is not always available in a web worker
  _partSize = 1048576) {
    this._callback = _callback;
    this._async = _async;
    this._partSize = _partSize;

    this._configureReader();
  }
  /**
   * Hash a blob of data in the worker
   * @param blob Data to hash
   */


  hash(blob) {
    const self = this;
    self._blob = blob; // self._length = Math.ceil(blob.size / self._partSize);

    self._part = 0;
    self._md5 = new _md5__WEBPACK_IMPORTED_MODULE_0__.Md5();

    self._processPart();
  }

  _fail() {
    this._callback({
      success: false,
      result: 'data read failed'
    });
  }

  _hashData(e) {
    let self = this;

    self._md5.appendByteArray(new Uint8Array(e.target.result));

    if (self._part * self._partSize >= self._blob.size) {
      self._callback({
        success: true,
        result: self._md5.end()
      });
    } else {
      self._processPart();
    }
  }

  _processPart() {
    const self = this;
    let endbyte = 0;
    let current_part;
    self._part += 1;

    if (self._blob.size > self._partSize) {
      // If blob bigger then part_size we will slice it up
      endbyte = self._part * self._partSize;

      if (endbyte > self._blob.size) {
        endbyte = self._blob.size;
      }

      current_part = self._blob.slice((self._part - 1) * self._partSize, endbyte);
    } else {
      current_part = self._blob;
    }

    if (self._async) {
      self._reader.readAsArrayBuffer(current_part);
    } else {
      setTimeout(() => {
        try {
          self._hashData({
            target: {
              result: self._reader.readAsArrayBuffer(current_part)
            }
          });
        } catch (e) {
          self._fail();
        }
      }, 0);
    }
  }

  _configureReader() {
    const self = this;

    if (self._async) {
      self._reader = new FileReader();
      self._reader.onload = self._hashData.bind(self);
      self._reader.onerror = self._fail.bind(self);
      self._reader.onabort = self._fail.bind(self);
    } else {
      self._reader = new FileReaderSync();
    }
  }

}

/***/ }),

/***/ 83619:
/*!*********************************************************!*\
  !*** ./node_modules/ts-md5/dist/esm/parallel_hasher.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParallelHasher": () => (/* binding */ ParallelHasher)
/* harmony export */ });
;
class ParallelHasher {
    constructor(workerUri, workerOptions) {
        this._queue = [];
        this._ready = true;
        const self = this;
        if (Worker) {
            self._hashWorker = new Worker(workerUri, workerOptions);
            self._hashWorker.onmessage = self._recievedMessage.bind(self);
            self._hashWorker.onerror = (err) => {
                self._ready = false;
                console.error('Hash worker failure', err);
            };
        }
        else {
            self._ready = false;
            console.error('Web Workers are not supported in this browser');
        }
    }
    /**
     * Hash a blob of data in the worker
     * @param blob Data to hash
     * @returns Promise of the Hashed result
     */
    hash(blob) {
        const self = this;
        let promise;
        promise = new Promise((resolve, reject) => {
            self._queue.push({
                blob,
                resolve,
                reject,
            });
            self._processNext();
        });
        return promise;
    }
    /** Terminate any existing hash requests */
    terminate() {
        this._ready = false;
        this._hashWorker.terminate();
    }
    // Processes the next item in the queue
    _processNext() {
        if (this._ready && !this._processing && this._queue.length > 0) {
            this._processing = this._queue.pop();
            this._hashWorker.postMessage(this._processing.blob);
        }
    }
    // Hash result is returned from the worker
    _recievedMessage(evt) {
        var _a, _b;
        const data = evt.data;
        if (data.success) {
            (_a = this._processing) === null || _a === void 0 ? void 0 : _a.resolve(data.result);
        }
        else {
            (_b = this._processing) === null || _b === void 0 ? void 0 : _b.reject(data.result);
        }
        this._processing = undefined;
        this._processNext();
    }
}


/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".password {\n  -webkit-text-security: disc;\n}\n\n.inputStyle {\n  font-size: 21px;\n}\n\n.grid1 {\n  height: 100%;\n  padding: 0px;\n}\n\n.contaier-login {\n  padding: 10px;\n  background: #ffffff;\n  border-radius: 5px;\n  position: absolute;\n  top: 30%;\n}\n\n.row1 {\n  height: 50%;\n  background: linear-gradient(133deg, #3880ff 0%, #00709c 100%);\n  background: -webkit-linear-gradient(133deg, #3880ff 0%, #00709c 100%);\n}\n\n.row2 {\n  height: 50%;\n}\n\nion-icon {\n  margin-right: 15px;\n}\n\nion-button {\n  margin-top: 5px;\n  margin-bottom: 15px;\n}\n\nion-slide {\n  width: 100%;\n  height: 100%;\n  position: relative !important;\n  background: linear-gradient(0deg, #00709c, white 53%);\n}\n\n.img-container {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-around;\n}\n\n.roundshadow {\n  border-radius: 100%;\n  box-shadow: 0px 4px 6px 0px #808080ad;\n}\n\n.textcolor {\n  color: grey;\n  font-family: fangsong;\n  font-size: larger;\n}\n\n.icon-round {\n  box-shadow: 0px 1px 5px #00709c;\n  padding: 4%;\n  border-radius: 100%;\n  margin-left: 1%;\n}\n\n@keyframes backanime {\n  10% {\n    background: linear-gradient(0deg, #00709c, white 10%);\n  }\n  15% {\n    background: linear-gradient(0deg, #00709c, white 15%);\n  }\n  20% {\n    background: linear-gradient(0deg, #00709c, white 20%);\n  }\n  25% {\n    background: linear-gradient(0deg, #00709c, white 25%);\n  }\n  30% {\n    background: linear-gradient(0deg, #00709c, white 30%);\n  }\n  35% {\n    background: linear-gradient(0deg, #00709c, white 35%);\n  }\n  40% {\n    background: linear-gradient(0deg, #00709c, white 40%);\n  }\n  45% {\n    background: linear-gradient(0deg, #00709c, white 45%);\n  }\n  50% {\n    background: linear-gradient(0deg, #00709c, white 53%);\n  }\n  55% {\n    background: linear-gradient(0deg, #00709c, white 53%);\n  }\n  60% {\n    background: linear-gradient(0deg, #00709c, white 53%);\n  }\n  65% {\n    background: linear-gradient(0deg, #00709c, white 53%);\n  }\n  70% {\n    background: linear-gradient(0deg, #00709c, white 45%);\n  }\n  75% {\n    background: linear-gradient(0deg, #00709c, white 40%);\n  }\n  80% {\n    background: linear-gradient(0deg, #00709c, white 35%);\n  }\n  85% {\n    background: linear-gradient(0deg, #00709c, white 30%);\n  }\n  90% {\n    background: linear-gradient(0deg, #00709c, white 25%);\n  }\n  95% {\n    background: linear-gradient(0deg, #00709c, white 20%);\n  }\n  100% {\n    background: linear-gradient(0deg, #00709c, white 10%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsMkJBQUE7QUFERjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBRkY7O0FBS0E7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsUUFBQTtBQUpGOztBQVVBO0VBQ0UsV0FBQTtFQUNBLDZEQUFBO0VBRUEscUVBQUE7QUFQRjs7QUFVQTtFQUNFLFdBQUE7QUFQRjs7QUFVQTtFQUNFLGtCQUFBO0FBUEY7O0FBVUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFQRjs7QUFVQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFFQSxxREFBQTtBQVJGOztBQWNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUFYRjs7QUFjQTtFQUNFLG1CQUFBO0VBQ0EscUNBQUE7QUFYRjs7QUFjQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBWEY7O0FBY0E7RUFDRSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFYRjs7QUFjQTtFQUNFO0lBQ0UscURBQUE7RUFYRjtFQWFBO0lBQ0UscURBQUE7RUFYRjtFQWFBO0lBQ0UscURBQUE7RUFYRjtFQWFBO0lBQ0UscURBQUE7RUFYRjtFQWFBO0lBQ0UscURBQUE7RUFYRjtFQWFBO0lBQ0UscURBQUE7RUFYRjtFQWFBO0lBQ0UscURBQUE7RUFYRjtFQWFBO0lBQ0UscURBQUE7RUFYRjtFQWFBO0lBQ0UscURBQUE7RUFYRjtFQWFBO0lBQ0UscURBQUE7RUFYRjtFQWFBO0lBQ0UscURBQUE7RUFYRjtFQWFBO0lBQ0UscURBQUE7RUFYRjtFQWFBO0lBQ0UscURBQUE7RUFYRjtFQWFBO0lBQ0UscURBQUE7RUFYRjtFQWFBO0lBQ0UscURBQUE7RUFYRjtFQWFBO0lBQ0UscURBQUE7RUFYRjtFQWFBO0lBQ0UscURBQUE7RUFYRjtFQWFBO0lBQ0UscURBQUE7RUFYRjtFQWFBO0lBQ0UscURBQUE7RUFYRjtBQUNGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4ucGFzc3dvcmQge1xyXG4gIC13ZWJraXQtdGV4dC1zZWN1cml0eTogZGlzYztcclxufVxyXG4uaW5wdXRTdHlsZSB7XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4uZ3JpZDEge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5jb250YWllci1sb2dpbiB7XHJcbiAgLy8gd2lkdGg6IDkwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIC8vIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IDBweCAjMDA3MDljMzA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzAlO1xyXG4gIC8vIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIC8vIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIC8vIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG5cclxuLnJvdzEge1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzNkZWcsICMzODgwZmYgMCUsIHJnYigwIDExMiAxNTYpIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDEzM2RlZywgIzM4ODBmZiAwJSwgcmdiKDAgMTEyIDE1NikgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTMzZGVnLCAjMzg4MGZmIDAlLCByZ2IoMCAxMTIgMTU2KSAxMDAlKTtcclxufVxyXG5cclxuLnJvdzIge1xyXG4gIGhlaWdodDogNTAlO1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuaW9uLXNsaWRlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgLy8gdG9wOiAxMCUgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzAwNzA5Yywgd2hpdGUgNTMlKTtcclxuICAvLyBhbmltYXRpb24tbmFtZTogYmFja2FuaW1lO1xyXG4gIC8vIGFuaW1hdGlvbi1kdXJhdGlvbjogN3M7XHJcbiAgLy8gYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuXHJcbi5pbWctY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4ucm91bmRzaGFkb3cge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCA2cHggMHB4ICM4MDgwODBhZDtcclxufVxyXG5cclxuLnRleHRjb2xvciB7XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgZm9udC1mYW1pbHk6IGZhbmdzb25nO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcblxyXG4uaWNvbi1yb3VuZCB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggIzAwNzA5YztcclxuICBwYWRkaW5nOiA0JTtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxJTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBiYWNrYW5pbWUge1xyXG4gIDEwJSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzAwNzA5Yywgd2hpdGUgMTAlKTtcclxuICB9XHJcbiAgMTUlIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMDA3MDljLCB3aGl0ZSAxNSUpO1xyXG4gIH1cclxuICAyMCUge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMwMDcwOWMsIHdoaXRlIDIwJSk7XHJcbiAgfVxyXG4gIDI1JSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzAwNzA5Yywgd2hpdGUgMjUlKTtcclxuICB9XHJcbiAgMzAlIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMDA3MDljLCB3aGl0ZSAzMCUpO1xyXG4gIH1cclxuICAzNSUge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMwMDcwOWMsIHdoaXRlIDM1JSk7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzAwNzA5Yywgd2hpdGUgNDAlKTtcclxuICB9XHJcbiAgNDUlIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMDA3MDljLCB3aGl0ZSA0NSUpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMwMDcwOWMsIHdoaXRlIDUzJSk7XHJcbiAgfVxyXG4gIDU1JSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzAwNzA5Yywgd2hpdGUgNTMlKTtcclxuICB9XHJcbiAgNjAlIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMDA3MDljLCB3aGl0ZSA1MyUpO1xyXG4gIH1cclxuICA2NSUge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMwMDcwOWMsIHdoaXRlIDUzJSk7XHJcbiAgfVxyXG4gIDcwJSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzAwNzA5Yywgd2hpdGUgNDUlKTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMDA3MDljLCB3aGl0ZSA0MCUpO1xyXG4gIH1cclxuICA4MCUge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMwMDcwOWMsIHdoaXRlIDM1JSk7XHJcbiAgfVxyXG4gIDg1JSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzAwNzA5Yywgd2hpdGUgMzAlKTtcclxuICB9XHJcbiAgOTAlIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMDA3MDljLCB3aGl0ZSAyNSUpO1xyXG4gIH1cclxuICA5NSUge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMwMDcwOWMsIHdoaXRlIDIwJSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMwMDcwOWMsIHdoaXRlIDEwJSk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 91670:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "    <ion-content>    \n        <ion-slide>\n            \n            <div class=\"contaier-login\">\n              <form [formGroup]=\"registerForm\" (ngSubmit)=\"submitData()\">\n                <ion-grid>\n                    \n                    <ion-row>\n                      <ion-col class=\"img-container\">                       \n                        <ion-img src=\"{{datapass.base64encodedimage}}\" style=\"height: 100px;width:100px;z-index:1\"></ion-img>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col>\n                          <h6 class=\"textcolor\" style=\"font-size: 12px;color:red\">Version: {{cversion}} </h6>\n                          <h1 class=\"textcolor\">Welcome back! </h1>\n                          <h6 class=\"textcolor\">Login to Your account</h6>\n                      </ion-col>\n                     </ion-row>\n                    \n                    <ion-row>\n                        <ion-col>\n                            <ion-list lines=\"none\">\n                                <ion-item>\n                                    <ion-icon name=\"person-outline\" class=\"icon-login textcolor icon-round\" style=\"color:#00709c\"></ion-icon>\n                                    <ion-input name=\"user\" type=\"text\" placeholder=\"User Id\" formControlName=\"userid\"></ion-input>\n                                </ion-item>\n                                <ion-text *ngIf=\"submitted && f.userid.errors\">\n                                  <ion-text color=\"danger\" *ngIf=\"f.userid.errors.required\" style=\"font-size: 12px;float:right;font-weight: bold;\">*Required</ion-text>\n                                </ion-text>\n                                <br />\n                                <ion-item>\n                                    <ion-icon name=\"key-outline\" class=\"icon-login textcolor icon-round\" style=\"color:#00709c\"></ion-icon>\n                                    <ion-input type=\"password\" inputmode=\"decimal\" formControlName=\"password\" placeholder=\"Password\"></ion-input>\n                                </ion-item>\n                                <ion-text *ngIf=\"submitted && f.password.errors\">\n                                  <ion-text color=\"danger\" *ngIf=\"f.password.errors.required\" style=\"font-size: 12px;float:right;font-weight: bold;\">*Required</ion-text>\n                                </ion-text>\n                            </ion-list>\n                        </ion-col>\n                    </ion-row>\n                    <br>\n                    <ion-row>\n                        <ion-col>\n                            <ion-button type=\"submit\" shape=\"round\" fill=\"solid\" expand=\"full\" [disabled]=\"!registerForm.valid || versionFlag\"><ion-icon name=\"enter\"></ion-icon>Login</ion-button>\n                        </ion-col>\n                    </ion-row>                   \n                </ion-grid>\n              </form>    \n            </div>\n            \n        </ion-slide>\n        <ion-img src=\"./assets/image/refresh.png\" style=\"width: 50px;height: 50px;position: absolute;top:0;right: 15%;z-index: 3;\" (click)=\"refresher()\"></ion-img> \n        <ion-img src=\"./assets/image/admin.png\" style=\"width: 50px;height: 50px;position: absolute;top:0;right: 0;z-index: 3;\" (click)=\"onClickMe('Setting')\"></ion-img> \n        <ion-img src=\"./assets/icon/logo1.png\" style=\"width: 100%;position:absolute;top:0%;height:30%\"></ion-img>\n    </ion-content>\n  \n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map