"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_keytraceability_keytraceability_module_ts"],{

/***/ 74754:
/*!*******************************************************************!*\
  !*** ./src/app/keytraceability/keytraceability-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeytraceabilityPageRoutingModule": () => (/* binding */ KeytraceabilityPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _keytraceability_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keytraceability.page */ 24065);




const routes = [
    {
        path: '',
        component: _keytraceability_page__WEBPACK_IMPORTED_MODULE_0__.KeytraceabilityPage
    }
];
let KeytraceabilityPageRoutingModule = class KeytraceabilityPageRoutingModule {
};
KeytraceabilityPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], KeytraceabilityPageRoutingModule);



/***/ }),

/***/ 61085:
/*!***********************************************************!*\
  !*** ./src/app/keytraceability/keytraceability.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeytraceabilityPageModule": () => (/* binding */ KeytraceabilityPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _keytraceability_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keytraceability-routing.module */ 74754);
/* harmony import */ var _keytraceability_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keytraceability.page */ 24065);
/* harmony import */ var _youtube_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../youtube.pipe */ 77599);







// import { PdfViewerModule } from 'ng2-pdf-viewer';

let KeytraceabilityPageModule = class KeytraceabilityPageModule {
};
KeytraceabilityPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _keytraceability_routing_module__WEBPACK_IMPORTED_MODULE_0__.KeytraceabilityPageRoutingModule,
            // PdfViewerModule
        ],
        declarations: [_keytraceability_page__WEBPACK_IMPORTED_MODULE_1__.KeytraceabilityPage, _youtube_pipe__WEBPACK_IMPORTED_MODULE_2__.YoutubePipe]
    })
], KeytraceabilityPageModule);



/***/ }),

/***/ 24065:
/*!*********************************************************!*\
  !*** ./src/app/keytraceability/keytraceability.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeytraceabilityPage": () => (/* binding */ KeytraceabilityPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _keytraceability_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keytraceability.page.html?ngResource */ 58838);
/* harmony import */ var _keytraceability_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keytraceability.page.scss?ngResource */ 46748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner */ 25274);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 49048);
/* harmony import */ var _ionic_native_printer_ngx_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/printer/ngx/index */ 84950);












let KeytraceabilityPage = class KeytraceabilityPage {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
            this.http.get(this.dataUrl + '/api/reportlinks/keytrace', { headers }).subscribe({
                next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    this.datapass = data.message[0];
                    console.log(data);
                    loading.dismiss();
                    this.scan();
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
    scan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const data = yield _ionic_native_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner.scan();
            // const loading = await this.loadingController.create({
            //   cssClass: 'my-custom-class',
            //   message: 'Please wait...',
            //   // duration: 2000,
            //   spinner:'dots'
            // });
            // if(data.text.length > 0)
            // {
            //   await loading.present();
            //   const headers = { 
            //     'auth-id': localStorage.getItem('authid'), 
            //     'client-id': localStorage.getItem('clientid'),
            //     'user': localStorage.getItem('userid'),
            //     'password':localStorage.getItem('password') }
            //     this.planid=data.text;
            //   this.http.get<any>(this.dataUrl+'/api/reportlinks/keytrace/'+data.text,{headers}).subscribe({
            //     next: async data => {
            //       this.datapass=data.message[0];
            //       let url = this.datapass.link;
            //       url=url.replace("{{1}}",this.planid);
            //       window.open(url);           
            //       loading.dismiss(); 
            //     },
            //     error: errordata => {
            //       if(errordata.error.message){
            //       loading.dismiss();                   
            //       this.toastfunction(errordata.error.message,"danger");  
            //       }
            //       else{
            //         this.toastfunction("Invalid Company Url, Please Check in Home page","danger");
            //         loading.dismiss();  
            //       }          
            //     }
            //   });
            // }
            if (data.text.length > 0) {
                this.datapass.link = this.datapass.link.replace("{{1}}", data.text);
                this.datapass.link = this.datapass.credentials == 1 ? this.datapass.link + "?user=" + localStorage.getItem('userid') + "&pass=" + localStorage.getItem('password') : this.datapass.link = this.datapass.link;
                this.framelink = this.datapass.link;
                // window.open(this.datapass.link);    
            }
        });
    }
    sendData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // const loading = await this.loadingController.create({
            //   cssClass: 'my-custom-class',
            //   message: 'Please wait...',
            //   // duration: 2000,
            //   spinner:'dots'
            // });
            // if(this.planid.length > 0)
            // {
            //   await loading.present();
            //   const headers = { 
            //     'auth-id': localStorage.getItem('authid'), 
            //     'client-id': localStorage.getItem('clientid'),
            //     'user': localStorage.getItem('userid'),
            //     'password':localStorage.getItem('password') }
            //   this.http.get<any>(this.dataUrl+'/api/reportlinks/keytrace',{headers}).subscribe({
            //     next: async data => {
            //       this.datapass=data.message[0];          
            //       let url = this.datapass.link;
            //       url=url.replace("{{1}}",this.planid);
            //       window.open(url);
            //       loading.dismiss(); 
            //     },
            //     error: errordata => {
            //       if(errordata.error.message){
            //       loading.dismiss();                   
            //       this.toastfunction(errordata.error.message,"danger");            
            //       }
            //       else{
            //         this.toastfunction("Invalid Company Url, Please Check in Home page","danger");
            //         loading.dismiss();  
            //       }          
            //     }
            //   });
            // }
            if (this.planid.length > 0) {
                this.datapass.link = this.datapass.link.replace("{{1}}", this.planid);
                this.datapass.link = this.datapass.credentials == 1 ? this.datapass.link + "?user=" + localStorage.getItem('userid') + "&pass=" + localStorage.getItem('password') : this.datapass.link = this.datapass.link;
                this.framelink = this.datapass.link;
                // window.open(this.datapass.link);    
            }
        });
    }
    print() {
        this.printer.print();
    }
    toastfunction(msg, colour) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
KeytraceabilityPage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__.InAppBrowser },
    { type: _ionic_native_printer_ngx_index__WEBPACK_IMPORTED_MODULE_4__.Printer },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder }
];
KeytraceabilityPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-keytraceability',
        template: _keytraceability_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_keytraceability_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], KeytraceabilityPage);



/***/ }),

/***/ 46748:
/*!**********************************************************************!*\
  !*** ./src/app/keytraceability/keytraceability.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "@media print {\n  .printele {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleXRyYWNlYWJpbGl0eS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLGFBQUE7RUFDTjtBQUNGIiwiZmlsZSI6ImtleXRyYWNlYWJpbGl0eS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgcHJpbnQge1xyXG4gICAgLnByaW50ZWxle1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiB9Il19 */";

/***/ }),

/***/ 58838:
/*!**********************************************************************!*\
  !*** ./src/app/keytraceability/keytraceability.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"printele\">\n  <ion-toolbar>       \n        <ion-img src=\"{{brandImage}}\" style=\"height: 50px;width:50px\" slot=\"start\"></ion-img>       \n        <div style=\"display: flex;justify-content: center;\">\n        <img src=\"./assets/image/track.png\" height=\"25\" width=\"25\">\n        <b style=\"font-size: 20px;\">&nbsp;&nbsp;Key Traceability</b>\n        <img src=\"./assets/image/printer.png\" height=\"25\" width=\"25\" style=\"vertical-align: middle;float: right;margin-left: 10%;\" (click)=\"print()\" *ngIf=\"framelink.length > 0\">\n        </div>\n        <ion-back-button defaultHref=\"Reports\" slot=\"end\"></ion-back-button>   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class=\"printele\">\n    <ion-footer>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"2\">           \n            <img src=\"./assets/image/qr-scan.png\" alt=\"Scanner\" (click)=\"scan()\" width=\"50\" height=\"50\" class=\"ion-float-left\">           \n          </ion-col>          \n          <ion-col size=\"7\">\n            <ion-item>\n              <!-- <ion-label position=\"floating\">Paste Code</ion-label> -->\n              <ion-input [(ngModel)]=\"planid\" placeholder=\"Enter Planid\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-button color=\"primary\" (click)=\"sendData()\" [disabled]=\"planid.length == 0 ? true : false\">Send</ion-button>\n          </ion-col>         \n        </ion-row>\n      </ion-grid>\n    </ion-footer>\n  </ion-card>\n  <iframe style=\"width:100%;height:100%;\"  *ngIf=\"framelink.length > 0\" [src]=\"framelink | renderUrl\" frameborder=\"0\" id=\"ReportPanel\"></iframe>\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_keytraceability_keytraceability_module_ts.js.map