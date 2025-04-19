"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_fetchdrawing_fetchdrawing_module_ts"],{

/***/ 37458:
/*!*************************************************************!*\
  !*** ./src/app/fetchdrawing/fetchdrawing-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchdrawingPageRoutingModule": () => (/* binding */ FetchdrawingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _fetchdrawing_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchdrawing.page */ 13880);




const routes = [
    {
        path: '',
        component: _fetchdrawing_page__WEBPACK_IMPORTED_MODULE_0__.FetchdrawingPage
    }
];
let FetchdrawingPageRoutingModule = class FetchdrawingPageRoutingModule {
};
FetchdrawingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FetchdrawingPageRoutingModule);



/***/ }),

/***/ 52275:
/*!*****************************************************!*\
  !*** ./src/app/fetchdrawing/fetchdrawing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchdrawingPageModule": () => (/* binding */ FetchdrawingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _fetchdrawing_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchdrawing-routing.module */ 37458);
/* harmony import */ var _fetchdrawing_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchdrawing.page */ 13880);







let FetchdrawingPageModule = class FetchdrawingPageModule {
};
FetchdrawingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _fetchdrawing_routing_module__WEBPACK_IMPORTED_MODULE_0__.FetchdrawingPageRoutingModule
        ],
        declarations: [_fetchdrawing_page__WEBPACK_IMPORTED_MODULE_1__.FetchdrawingPage]
    })
], FetchdrawingPageModule);



/***/ }),

/***/ 13880:
/*!***************************************************!*\
  !*** ./src/app/fetchdrawing/fetchdrawing.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchdrawingPage": () => (/* binding */ FetchdrawingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _fetchdrawing_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchdrawing.page.html?ngResource */ 35668);
/* harmony import */ var _fetchdrawing_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchdrawing.page.scss?ngResource */ 51913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner */ 25274);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);










let FetchdrawingPage = class FetchdrawingPage {
    constructor(http, loadingController, toastController, router, formBuilder) {
        this.http = http;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.router = router;
        this.formBuilder = formBuilder;
        this.brandImage = "";
        this.planid = "";
        this.datapass = {};
        this.dataUrl = localStorage.getItem('url');
    }
    ngOnInit() {
        this.brandImage = localStorage.getItem('brandImage');
        this.scan();
    }
    scan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const data = yield _ionic_native_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner.scan();
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                // duration: 2000,
                spinner: 'dots'
            });
            if (data.text.length > 0) {
                yield loading.present();
                const headers = {
                    'auth-id': localStorage.getItem('authid'),
                    'client-id': localStorage.getItem('clientid'),
                    'user': localStorage.getItem('userid'),
                    'password': localStorage.getItem('password')
                };
                this.http.get(this.dataUrl + '/api/compdrawing/' + data.text, { headers }).subscribe({
                    next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                        this.datapass = data.message[0];
                        // console.log(this.dataUrl+this.datapass[0].drawingfile+".pdf")
                        window.open(this.dataUrl + this.datapass.drawingfile);
                        loading.dismiss();
                    }),
                    error: errordata => {
                        if (errordata.error.message) {
                            loading.dismiss();
                            this.toastfunction(errordata.error.message, "danger");
                        }
                        else {
                            this.toastfunction("Invalid Company Url, Please Check in Home page", "danger");
                            loading.dismiss();
                        }
                    }
                });
            }
        });
    }
    sendData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                // duration: 2000,
                spinner: 'dots'
            });
            if (this.planid.length > 0) {
                yield loading.present();
                const headers = {
                    'auth-id': localStorage.getItem('authid'),
                    'client-id': localStorage.getItem('clientid'),
                    'user': localStorage.getItem('userid'),
                    'password': localStorage.getItem('password')
                };
                this.http.get(this.dataUrl + '/api/compdrawing/' + this.planid, { headers }).subscribe({
                    next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                        this.datapass = data.message[0];
                        // console.log(this.dataUrl+this.datapass[0].drawingfile+".pdf")
                        window.open(this.dataUrl + this.datapass.drawingfile + ".pdf");
                        loading.dismiss();
                    }),
                    error: errordata => {
                        if (errordata.error.message) {
                            loading.dismiss();
                            this.toastfunction(errordata.error.message, "danger");
                        }
                        else {
                            this.toastfunction("Invalid Company Url, Please Check in Home page", "danger");
                            loading.dismiss();
                        }
                    }
                });
            }
        });
    }
    toastfunction(msg, colour) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
};
FetchdrawingPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder }
];
FetchdrawingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-fetchdrawing',
        template: _fetchdrawing_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_fetchdrawing_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FetchdrawingPage);



/***/ }),

/***/ 51913:
/*!****************************************************************!*\
  !*** ./src/app/fetchdrawing/fetchdrawing.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZXRjaGRyYXdpbmcucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 35668:
/*!****************************************************************!*\
  !*** ./src/app/fetchdrawing/fetchdrawing.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>       \n        <ion-img src=\"{{brandImage}}\" style=\"height: 50px;width:50px\" slot=\"start\"></ion-img>       \n        <div style=\"display: flex;justify-content: center;\">\n        <img src=\"./assets/image/fetchdrawing.png\" height=\"25\" width=\"25\">\n        <b style=\"font-size: 20px;\">&nbsp;&nbsp;Fetch Drawing</b>\n        </div>\n        <ion-back-button defaultHref=\"Widgets\" slot=\"end\"></ion-back-button>   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-footer>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"2\">           \n            <img src=\"./assets/image/qr-scan.png\" alt=\"Scanner\" (click)=\"scan()\" width=\"50\" height=\"50\" class=\"ion-float-left\">           \n          </ion-col>          \n          <ion-col size=\"7\">\n            <ion-item>\n              <!-- <ion-label position=\"floating\">Paste Code</ion-label> -->\n              <ion-input [(ngModel)]=\"planid\" placeholder=\"Enter Planid\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-button color=\"primary\" (click)=\"sendData()\" [disabled]=\"planid.length == 0 ? true : false\">Send</ion-button>\n          </ion-col>         \n        </ion-row>\n      </ion-grid>\n    </ion-footer>\n  </ion-card>\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_fetchdrawing_fetchdrawing_module_ts.js.map