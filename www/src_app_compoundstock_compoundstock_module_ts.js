"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_compoundstock_compoundstock_module_ts"],{

/***/ 77918:
/*!***************************************************************!*\
  !*** ./src/app/compoundstock/compoundstock-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompoundstockPageRoutingModule": () => (/* binding */ CompoundstockPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _compoundstock_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compoundstock.page */ 60737);




const routes = [
    {
        path: '',
        component: _compoundstock_page__WEBPACK_IMPORTED_MODULE_0__.CompoundstockPage
    }
];
let CompoundstockPageRoutingModule = class CompoundstockPageRoutingModule {
};
CompoundstockPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CompoundstockPageRoutingModule);



/***/ }),

/***/ 39233:
/*!*******************************************************!*\
  !*** ./src/app/compoundstock/compoundstock.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompoundstockPageModule": () => (/* binding */ CompoundstockPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _compoundstock_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compoundstock-routing.module */ 77918);
/* harmony import */ var _compoundstock_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compoundstock.page */ 60737);
/* harmony import */ var _youtube_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../youtube.pipe */ 77599);







// import { PdfViewerModule } from 'ng2-pdf-viewer';

let CompoundstockPageModule = class CompoundstockPageModule {
};
CompoundstockPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _compoundstock_routing_module__WEBPACK_IMPORTED_MODULE_0__.CompoundstockPageRoutingModule,
            // PdfViewerModule
        ],
        declarations: [_compoundstock_page__WEBPACK_IMPORTED_MODULE_1__.CompoundstockPage, _youtube_pipe__WEBPACK_IMPORTED_MODULE_2__.YoutubePipe]
    })
], CompoundstockPageModule);



/***/ }),

/***/ 60737:
/*!*****************************************************!*\
  !*** ./src/app/compoundstock/compoundstock.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompoundstockPage": () => (/* binding */ CompoundstockPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _compoundstock_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compoundstock.page.html?ngResource */ 9819);
/* harmony import */ var _compoundstock_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compoundstock.page.scss?ngResource */ 21921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 49048);
/* harmony import */ var _ionic_native_printer_ngx_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/printer/ngx/index */ 84950);











let CompoundstockPage = class CompoundstockPage {
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
        this.storeArray = [];
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
            this.http.get(this.dataUrl + '/api/reportlinks/cpdstk', { headers }).subscribe({
                next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    this.datapass = data.message[0];
                    this.storeArray = data.message["stores"];
                    this.storeArray.unshift("All");
                    console.log(data);
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
    //   // if(this.planid.length > 0)
    //   // {     
    //     this.datapass.link=this.datapass.link.replace("{{1}}",this.planid);
    //     this.datapass.link= this.datapass.credentials == 1 ? this.datapass.link+"?user="+localStorage.getItem('userid')+"&pass="+localStorage.getItem('password') : this.datapass.link=this.datapass.link; 
    //     // window.open(this.datapass.link); 
    //     this.framelink=this.datapass.link;   
    //   // }
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
    selectDevice(ind) {
        if (ind.detail.value == "All") {
            this.link = this.datapass.link;
            this.link = this.link.replace("{{1}}", "");
            this.link = this.datapass.credentials == 1 ? this.link + "?user=" + localStorage.getItem('userid') + "&pass=" + localStorage.getItem('password') : this.link = this.link;
            this.framelink = this.link;
        }
        else {
            this.link = this.datapass.link;
            this.link = this.link.replace("{{1}}", this.planid);
            this.link = this.datapass.credentials == 1 ? this.link + "?user=" + localStorage.getItem('userid') + "&pass=" + localStorage.getItem('password') : this.link = this.link;
            this.framelink = this.link;
        }
    }
};
CompoundstockPage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser },
    { type: _ionic_native_printer_ngx_index__WEBPACK_IMPORTED_MODULE_3__.Printer },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder }
];
CompoundstockPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-compoundstock',
        template: _compoundstock_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_compoundstock_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CompoundstockPage);



/***/ }),

/***/ 21921:
/*!******************************************************************!*\
  !*** ./src/app/compoundstock/compoundstock.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "@media print {\n  .printele {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvdW5kc3RvY2sucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDSSxhQUFBO0VBQ047QUFDRiIsImZpbGUiOiJjb21wb3VuZHN0b2NrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBwcmludCB7XHJcbiAgICAucHJpbnRlbGV7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuIH0iXX0= */";

/***/ }),

/***/ 9819:
/*!******************************************************************!*\
  !*** ./src/app/compoundstock/compoundstock.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"printele\">\n  <ion-toolbar>       \n        <ion-img src=\"{{brandImage}}\" style=\"height: 50px;width:50px\" slot=\"start\"></ion-img>       \n        <div style=\"display: flex;justify-content: center;\">\n        <img src=\"./assets/image/trolley.png\" height=\"25\" width=\"25\">\n        <b style=\"font-size: 20px;\">&nbsp;&nbsp;Compound Stock</b>\n        <img src=\"./assets/image/printer.png\" height=\"25\" width=\"25\" style=\"vertical-align: middle;float: right;margin-left: 10%;\" (click)=\"print()\" *ngIf=\"framelink.length > 0\">\n        </div>\n        <ion-back-button defaultHref=\"Reports\" slot=\"end\"></ion-back-button>   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class=\"printele\">\n    <ion-footer>\n      <ion-grid>\n        <ion-row>\n          <!-- <ion-col size=\"2\">           \n            <img src=\"./assets/image/qr-scan.png\" alt=\"Scanner\" (click)=\"scan()\" width=\"50\" height=\"50\" class=\"ion-float-left\">           \n          </ion-col>           -->\n          <ion-col size=\"12\">\n            <!-- <ion-item> -->\n              <!-- <ion-label position=\"floating\">Paste Code</ion-label> -->\n              <!-- <ion-input [(ngModel)]=\"planid\" placeholder=\"Enter Planid\"></ion-input> -->\n\n              <ion-list radio-group >          \n                <ion-select placeholder=\"Select Location\" (ionChange)=\"selectDevice($event)\" [(ngModel)]=\"planid\" [ngModelOptions]=\"{standalone: true}\">\n                  <ion-select-option *ngFor=\"let i of storeArray;let j=index\" value=\"{{i}}\">{{i}}</ion-select-option>            \n                </ion-select>         \n              </ion-list>\n\n              \n            <!-- </ion-item> -->\n          </ion-col>\n          <!-- <ion-col size=\"2\">\n            <ion-button color=\"primary\" (click)=\"sendData()\">Send</ion-button>\n          </ion-col>          -->\n        </ion-row>\n      </ion-grid>\n    </ion-footer>\n  </ion-card>\n  <iframe style=\"width:100%;height:100%;\"  *ngIf=\"framelink.length > 0\" [src]=\"framelink | renderUrl\" frameborder=\"0\" id=\"ReportPanel\"></iframe>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_compoundstock_compoundstock_module_ts.js.map