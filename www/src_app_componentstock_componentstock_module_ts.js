"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_componentstock_componentstock_module_ts"],{

/***/ 85667:
/*!*****************************************************************!*\
  !*** ./src/app/componentstock/componentstock-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentstockPageRoutingModule": () => (/* binding */ ComponentstockPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _componentstock_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componentstock.page */ 62709);




const routes = [
    {
        path: '',
        component: _componentstock_page__WEBPACK_IMPORTED_MODULE_0__.ComponentstockPage
    }
];
let ComponentstockPageRoutingModule = class ComponentstockPageRoutingModule {
};
ComponentstockPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ComponentstockPageRoutingModule);



/***/ }),

/***/ 44693:
/*!*********************************************************!*\
  !*** ./src/app/componentstock/componentstock.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentstockPageModule": () => (/* binding */ ComponentstockPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _componentstock_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componentstock-routing.module */ 85667);
/* harmony import */ var _componentstock_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componentstock.page */ 62709);
/* harmony import */ var _youtube_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../youtube.pipe */ 77599);







// import { PdfViewerModule } from 'ng2-pdf-viewer';

let ComponentstockPageModule = class ComponentstockPageModule {
};
ComponentstockPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _componentstock_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentstockPageRoutingModule,
            // PdfViewerModule
        ],
        declarations: [_componentstock_page__WEBPACK_IMPORTED_MODULE_1__.ComponentstockPage, _youtube_pipe__WEBPACK_IMPORTED_MODULE_2__.YoutubePipe]
    })
], ComponentstockPageModule);



/***/ }),

/***/ 62709:
/*!*******************************************************!*\
  !*** ./src/app/componentstock/componentstock.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentstockPage": () => (/* binding */ ComponentstockPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _componentstock_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componentstock.page.html?ngResource */ 65979);
/* harmony import */ var _componentstock_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componentstock.page.scss?ngResource */ 5914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 49048);
/* harmony import */ var _ionic_native_printer_ngx_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/printer/ngx/index */ 84950);











let ComponentstockPage = class ComponentstockPage {
    constructor(inappbrowser, printer, http, loadingController, toastController, router, formBuilder) {
        this.inappbrowser = inappbrowser;
        this.printer = printer;
        this.http = http;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.router = router;
        this.formBuilder = formBuilder;
        this.brandImage = "";
        this.planid = "";
        this.datapass = {};
        this.dataUrl = localStorage.getItem('url');
        this.framelink = "";
    }
    ngOnInit() {
        this.brandImage = localStorage.getItem('brandImage');
        this.getlink();
    }
    getlink() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                // duration: 2000,
                spinner: 'dots'
            });
            const headers = {
                'auth-id': localStorage.getItem('authid'),
                'client-id': localStorage.getItem('clientid'),
                'user': localStorage.getItem('userid'),
                'password': localStorage.getItem('password')
            };
            this.http.get(this.dataUrl + '/api/reportlinks/cmpdstk', { headers }).subscribe({
                next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    this.datapass = data.message[0];
                    console.log(data);
                    loading.dismiss();
                    this.datapass.link = this.datapass.link.replace("{{1}}", data.text);
                    this.datapass.link = this.datapass.credentials == 1 ? this.datapass.link + "?user=" + localStorage.getItem('userid') + "&pass=" + localStorage.getItem('password') : this.datapass.link = this.datapass.link;
                    // window.open(this.datapass.link);    
                    this.framelink = this.datapass.link;
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
        });
    }
    // async scan() {
    //   const data = await BarcodeScanner.scan();
    //   if(data.text.length > 0){
    //     this.datapass.link=this.datapass.link.replace("{{1}}",data.text);
    //     this.datapass.link= this.datapass.credentials == 1 ? this.datapass.link+"?user="+localStorage.getItem('userid')+"&pass="+localStorage.getItem('password') : this.datapass.link=this.datapass.link; 
    //     window.open(this.datapass.link);    
    //   }
    // }
    // async sendData()
    // {
    //   if(this.planid.length > 0)
    //   {     
    //     this.datapass.link=this.datapass.link.replace("{{1}}",this.planid);
    //     this.datapass.link= this.datapass.credentials == 1 ? this.datapass.link+"?user="+localStorage.getItem('userid')+"&pass="+localStorage.getItem('password') : this.datapass.link=this.datapass.link; 
    //     window.open(this.datapass.link);    
    //   }
    // }
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
    print() {
        this.printer.print();
    }
};
ComponentstockPage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser },
    { type: _ionic_native_printer_ngx_index__WEBPACK_IMPORTED_MODULE_3__.Printer },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder }
];
ComponentstockPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-componentstock',
        template: _componentstock_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_componentstock_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ComponentstockPage);



/***/ }),

/***/ 5914:
/*!********************************************************************!*\
  !*** ./src/app/componentstock/componentstock.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "@media print {\n  .printele {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHN0b2NrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksYUFBQTtFQUNOO0FBQ0YiLCJmaWxlIjoiY29tcG9uZW50c3RvY2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHByaW50IHtcclxuICAgIC5wcmludGVsZXtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gfSJdfQ== */";

/***/ }),

/***/ 65979:
/*!********************************************************************!*\
  !*** ./src/app/componentstock/componentstock.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"printele\">\n  <ion-toolbar>       \n        <ion-img src=\"{{brandImage}}\" style=\"height: 50px;width:50px\" slot=\"start\"></ion-img>       \n        <div style=\"display: flex;justify-content: center;\">\n        <img src=\"./assets/image/toolbox.png\" height=\"25\" width=\"25\">\n        <b style=\"font-size: 20px;\">&nbsp;&nbsp;Component Stock</b>\n        <img src=\"./assets/image/printer.png\" height=\"25\" width=\"25\" style=\"vertical-align: middle;float: right;margin-left: 10%;\" (click)=\"print()\" *ngIf=\"framelink.length > 0\">\n        </div>\n        <ion-back-button defaultHref=\"Reports\" slot=\"end\"></ion-back-button>   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- <ion-card>\n    <ion-footer>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"2\">           \n            <img src=\"./assets/image/qr-scan.png\" alt=\"Scanner\" (click)=\"scan()\" width=\"50\" height=\"50\" class=\"ion-float-left\">           \n          </ion-col>          \n          <ion-col size=\"7\">\n            <ion-item>             \n              <ion-input [(ngModel)]=\"planid\" placeholder=\"Enter Planid\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-button color=\"primary\" (click)=\"sendData()\" [disabled]=\"planid.length == 0 ? true : false\">Send</ion-button>\n          </ion-col>         \n        </ion-row>\n      </ion-grid>\n    </ion-footer>\n  </ion-card> -->\n  <iframe style=\"width:100%;height:100%;\"  *ngIf=\"framelink.length > 0\" [src]=\"framelink | renderUrl\" frameborder=\"0\" id=\"ReportPanel\"></iframe>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_componentstock_componentstock_module_ts.js.map