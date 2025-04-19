"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_moulding_moulding_module_ts"],{

/***/ 40106:
/*!*****************************************************!*\
  !*** ./src/app/moulding/moulding-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MouldingPageRoutingModule": () => (/* binding */ MouldingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _moulding_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moulding.page */ 31947);




const routes = [
    {
        path: '',
        component: _moulding_page__WEBPACK_IMPORTED_MODULE_0__.MouldingPage
    }
];
let MouldingPageRoutingModule = class MouldingPageRoutingModule {
};
MouldingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MouldingPageRoutingModule);



/***/ }),

/***/ 14546:
/*!*********************************************!*\
  !*** ./src/app/moulding/moulding.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MouldingPageModule": () => (/* binding */ MouldingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _moulding_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moulding-routing.module */ 40106);
/* harmony import */ var _moulding_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moulding.page */ 31947);
/* harmony import */ var _youtube_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../youtube.pipe */ 77599);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ionic-selectable */ 25073);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ 44719);










// import { PdfViewerModule } from 'ng2-pdf-viewer';

let MouldingPageModule = class MouldingPageModule {
};
MouldingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _moulding_routing_module__WEBPACK_IMPORTED_MODULE_0__.MouldingPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_9__.IonicSelectableModule,
            // PdfViewerModule
        ],
        declarations: [_moulding_page__WEBPACK_IMPORTED_MODULE_1__.MouldingPage, _youtube_pipe__WEBPACK_IMPORTED_MODULE_2__.YoutubePipe],
        providers: [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__.HTTP]
    })
], MouldingPageModule);



/***/ }),

/***/ 31947:
/*!*******************************************!*\
  !*** ./src/app/moulding/moulding.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MouldingPage": () => (/* binding */ MouldingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _moulding_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moulding.page.html?ngResource */ 22595);
/* harmony import */ var _moulding_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moulding.page.scss?ngResource */ 73093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ 6222);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 49048);
/* harmony import */ var _ionic_native_printer_ngx_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/printer/ngx/index */ 84950);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-socket-io */ 84935);
/* harmony import */ var _ionic_native_barcode_scanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/barcode-scanner */ 25274);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ 12358);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 41059);














// import * as FileSaver from 'file-saver';
// import * as XLSX from 'xlsx';
// const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
// const EXCEL_EXTENSION = '.xlsx';


// import { Browser } from '@capacitor/browser';
let MouldingPage = class MouldingPage {
    constructor(inappbrowser, printer, http, loadingController, screenOrientation, toastController, router, formBuilder, socket, file, transfer) {
        this.inappbrowser = inappbrowser;
        this.printer = printer;
        this.http = http;
        this.loadingController = loadingController;
        this.screenOrientation = screenOrientation;
        this.toastController = toastController;
        this.router = router;
        this.formBuilder = formBuilder;
        this.socket = socket;
        this.file = file;
        this.transfer = transfer;
        this.datapass = {};
        this.datapassTemp = [];
        this.dataUrl = localStorage.getItem('url');
        this.brandImage = "";
        this.showprinter = false;
        this.dropdownObject = "";
        this.selected = [];
        this.socketIp = '';
        this.showMenu = true;
        this.category = [];
        this.purchase = false;
        this.production = false;
        this.despatch = false;
        this.mixing = false;
        this.deflashing = false;
        this.inspection = false;
        this.calendering = false;
        this.final = false;
        this.currentReport = "";
        this.pageUrl = "";
        this.scanData = null;
        if (localStorage.getItem('userid') == null && localStorage.getItem('password') == null) {
            this.router.navigate(["home"]);
        }
        this.checkStorage();
        this.socketIp = localStorage.getItem("IPAddr");
    }
    ngOnInit() {
        this.brandImage = localStorage.getItem('brandImage');
        this.scan();
        this.socket.connect();
        this.registerForm = this.formBuilder.group({
            actlift: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            pin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    scan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                spinner: 'dots'
            });
            const headers = {
                'auth-id': localStorage.getItem('authid'),
                'client-id': localStorage.getItem('clientid'),
                'user': localStorage.getItem('userid'),
                'password': localStorage.getItem('password')
            };
            // this.dataUrl+"/api/reportlinks/"+localStorage.getItem('userid')
            this.http.get(this.dataUrl + "/api/reportlinks", { headers }).subscribe({
                next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                    this.datapass = data;
                    this.datapassTemp = data;
                    loading.dismiss();
                    this.datapass.message.filter((x, index) => {
                        x.group === "purchase" ? this.purchase = true : null;
                        x.group === "production" ? this.production = true : null;
                        x.group === "despatch" ? this.despatch = true : null;
                        x.group === "mixing" ? this.mixing = true : null;
                        x.group === "deflashing" ? this.deflashing = true : null;
                        x.group === "inspection" ? this.inspection = true : null;
                        x.group === "calendering" ? this.calendering = true : null;
                        x.group === "final" ? this.final = true : null;
                    });
                    // this.category=this.category.filter((item,index)=> {
                    //   item == "purchase" ? this.purchase = true : this.purchase =false;
                    //   item === "production" ? this.production = true : this.production =false;
                    //   item === "despatch" ? this.despatch = true : this.despatch =false;
                    //   item === "mixing" ? this.mixing = true : this.mixing =false;
                    //   item === "deflashing" ? this.deflashing = true : this.deflashing =false;
                    //   item === "inspection" ? this.inspection = true : this.inspection =false;
                    //   item === "calendering" ? this.calendering = true : this.calendering =false;
                    //   item === "final" ? this.final = true : this.final =false;
                    // })
                }),
                error: errordata => {
                    if (errordata.error.message) {
                        loading.dismiss();
                        this.toastfunction(errordata.error.message, "danger");
                    }
                    else {
                        this.toastfunction("Invalid Company Url, Please Check in Home page", "danger");
                    }
                }
            });
        });
    }
    print() { this.printer.print(); }
    onClickMe(obj) {
        this.router.navigate([obj]);
    }
    getReport(page) {
        let arr = this.datapass;
        arr = this.datapass.message.filter((x) => {
            return x.group == page;
        });
        this.datapassTemp = arr;
        arr.length > 0 ? this.showMenu = false : this.toastfunction("No Reports Found", "danger");
    }
    checkStorage() {
        const storage = parseInt(localStorage.getItem("your-data-key"));
        let date = new Date();
        const currentDate = date.setDate(date.getDate()); // Current date in milliseconds
        if (currentDate >= storage) {
            localStorage.removeItem("your-data-key");
            localStorage.removeItem("userid");
            localStorage.removeItem("password");
            this.router.navigate(["home"]);
        }
    }
    ReportChanged(event) {
        this.dropdownObject = event.value == "Select" ? "" : event.value;
        let url = event.value.link;
        url = url.replace("&amp;", "&");
        this.datalist = event.value.link;
        event.value.print == "1" ? this.showprinter = true : this.showprinter = false;
        event.value.credentials == "1" ?
            this.datalist = url + "?user=" + localStorage.getItem('userid') + "&pass=" + localStorage.getItem('password') : this.datalist = url;
        this.pageUrl = event.value.link;
        console.log(this.datalist);
        this.currentReport = event.value.name;
    }
    castData(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (type == "open") {
                this.scanData = yield _ionic_native_barcode_scanner__WEBPACK_IMPORTED_MODULE_5__.BarcodeScanner.scan();
                // this.scanData = {text:"In-01"}
                if (this.scanData.text.length > 0) {
                    this.socket.emit('subscribe', JSON.stringify({ "userName": this.socketIp, "roomName": this.scanData.text }));
                    this.socket.emit('newMessage', JSON.stringify({ "userName": this.socketIp, "messageContent": this.datalist, "roomName": this.scanData.text }));
                }
            }
            if (type == "close") {
                this.socket.emit('subscribe', JSON.stringify({ "userName": this.socketIp, "roomName": this.scanData.text }));
                this.socket.emit('newMessage', JSON.stringify({ "userName": this.socketIp, "messageContent": "", "roomName": this.scanData.text }));
                this.scanData = null;
            }
        });
    }
    navBack() {
        this.router.navigate(['home']);
    }
    toastfunction(msg, colour) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
    exportToExcel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                spinner: 'dots'
            });
            loading.present();
            let url = this.pageUrl.split("?");
            let tempurl = url[0] + "csv=true?user=" + localStorage.getItem('userid') + "&pass=" + localStorage.getItem('password');
            // this.pageUrl=tempurl;
            // await Browser.open({ url: tempurl });
            window.open(tempurl);
            loading.dismiss();
            // const fileTransfer: FileTransferObject = this.transfer.create();
            // this.file.createDir(this.file.externalRootDirectory, 'Download', true)
            // .then((resp) => {
            //   let path = resp.toURL();
            //   fileTransfer.download(tempurl, path + (this.currentReport+new Date().getMilliseconds()).split(/\s/).join('')+'.csv').then((entry) => {
            //     console.log('download complete: ' + entry.toURL());
            //     loading.dismiss();  
            //     this.toastfunction("File Saved Successfully!!!","success");
            //   }, (error) => {
            //     console.log(error)
            //     loading.dismiss();  
            //   });
            // }
            // );
        });
    }
};
MouldingPage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__.InAppBrowser },
    { type: _ionic_native_printer_ngx_index__WEBPACK_IMPORTED_MODULE_4__.Printer },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__.ScreenOrientation },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_13__.Socket },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__.File },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__.FileTransfer }
];
MouldingPage.propDecorators = {
    selectComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['selectComponent',] }],
    inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['inputId', { static: false },] }]
};
MouldingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-moulding',
        template: _moulding_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_moulding_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MouldingPage);



/***/ }),

/***/ 44719:
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTTP": () => (/* binding */ HTTP)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ 68751);




var HTTP = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(HTTP, _super);
    function HTTP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTTP.prototype.getBasicAuthHeader = function (username, password) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getBasicAuthHeader", { "sync": true }, arguments); };
    HTTP.prototype.useBasicAuth = function (username, password) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "useBasicAuth", { "sync": true }, arguments); };
    HTTP.prototype.getHeaders = function (host) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getHeaders", { "sync": true }, arguments); };
    HTTP.prototype.setHeader = function (host, header, value) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setHeader", { "sync": true }, arguments); };
    HTTP.prototype.getDataSerializer = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getDataSerializer", { "sync": true }, arguments); };
    HTTP.prototype.setDataSerializer = function (serializer) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setDataSerializer", { "sync": true }, arguments); };
    HTTP.prototype.setCookie = function (url, cookie) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setCookie", { "sync": true }, arguments); };
    HTTP.prototype.clearCookies = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "clearCookies", { "sync": true }, arguments); };
    HTTP.prototype.removeCookies = function (url, cb) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "removeCookies", { "sync": true }, arguments); };
    HTTP.prototype.getCookieString = function (url) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getCookieString", { "sync": true }, arguments); };
    HTTP.prototype.getRequestTimeout = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getRequestTimeout", { "sync": true }, arguments); };
    HTTP.prototype.setRequestTimeout = function (timeout) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setRequestTimeout", { "sync": true }, arguments); };
    HTTP.prototype.getFollowRedirect = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getFollowRedirect", { "sync": true }, arguments); };
    HTTP.prototype.setFollowRedirect = function (follow) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setFollowRedirect", { "sync": true }, arguments); };
    HTTP.prototype.setServerTrustMode = function (mode) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setServerTrustMode", {}, arguments); };
    HTTP.prototype.post = function (url, body, headers) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "post", {}, arguments); };
    HTTP.prototype.postSync = function (url, body, headers, success, failure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "post", { "methodName": "post", "sync": true }, arguments); };
    HTTP.prototype.get = function (url, parameters, headers) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "get", {}, arguments); };
    HTTP.prototype.getSync = function (url, parameters, headers, success, failure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "get", { "methodName": "get", "sync": true }, arguments); };
    HTTP.prototype.put = function (url, body, headers) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "put", {}, arguments); };
    HTTP.prototype.putSync = function (url, body, headers, success, failure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "put", { "methodName": "put", "sync": true }, arguments); };
    HTTP.prototype.patch = function (url, body, headers) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "patch", {}, arguments); };
    HTTP.prototype.patchSync = function (url, body, headers, success, failure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "patch", { "methodName": "patch", "sync": true }, arguments); };
    HTTP.prototype.delete = function (url, parameters, headers) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "delete", {}, arguments); };
    HTTP.prototype.deleteSync = function (url, parameters, headers, success, failure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "delete", { "methodName": "delete", "sync": true }, arguments); };
    HTTP.prototype.head = function (url, parameters, headers) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "head", {}, arguments); };
    HTTP.prototype.headSync = function (url, parameters, headers, success, failure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "head", { "methodName": "head", "sync": true }, arguments); };
    HTTP.prototype.options = function (url, parameters, headers) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "options", {}, arguments); };
    HTTP.prototype.optionsSync = function (url, parameters, headers, success, failure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "options", { "methodName": "options", "sync": true }, arguments); };
    HTTP.prototype.uploadFile = function (url, body, headers, filePath, name) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "uploadFile", {}, arguments); };
    HTTP.prototype.uploadFileSync = function (url, body, headers, filePath, name, success, failure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "uploadFile", { "methodName": "uploadFile", "sync": true }, arguments); };
    HTTP.prototype.downloadFile = function (url, body, headers, filePath) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "downloadFile", {}, arguments); };
    HTTP.prototype.downloadFileSync = function (url, body, headers, filePath, success, failure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "downloadFile", { "methodName": "downloadFile", "sync": true }, arguments); };
    HTTP.prototype.sendRequest = function (url, options) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "sendRequest", {}, arguments); };
    HTTP.prototype.sendRequestSync = function (url, options, success, failure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "sendRequest", { "methodName": "sendRequest", "sync": true }, arguments); };
    HTTP.prototype.abort = function (requestId) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "abort", {}, arguments); };
    Object.defineProperty(HTTP.prototype, "ErrorCode", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "ErrorCode"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "ErrorCode", value); },
        enumerable: false,
        configurable: true
    });
    HTTP.pluginName = "HTTP";
    HTTP.plugin = "cordova-plugin-advanced-http";
    HTTP.pluginRef = "cordova.plugin.http";
    HTTP.repo = "https://github.com/silkimen/cordova-plugin-advanced-http";
    HTTP.platforms = ["Android", "iOS"];
HTTP.ɵfac = /*@__PURE__*/ function () { var ɵHTTP_BaseFactory; return function HTTP_Factory(t) { return (ɵHTTP_BaseFactory || (ɵHTTP_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](HTTP)))(t || HTTP); }; }();
HTTP.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HTTP, factory: function (t) { return HTTP.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](HTTP, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return HTTP;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin));




/***/ }),

/***/ 73093:
/*!********************************************************!*\
  !*** ./src/app/moulding/moulding.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "#grid {\n  margin: 4%;\n}\n\n.avatar {\n  height: 50px;\n  width: 50px;\n}\n\n.appfont {\n  font-size: 17px;\n}\n\n.inputStyle {\n  text-align: right;\n  color: grey;\n}\n\n.labelStyle {\n  float: right;\n  margin-right: 10%;\n}\n\n.label {\n  color: grey;\n}\n\n.password {\n  -webkit-text-security: disc;\n}\n\n.inputStyle {\n  font-size: 21px;\n}\n\n@media print {\n  #header {\n    display: none;\n  }\n}\n\n.image {\n  width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdWxkaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFFRSxXQUFBO0FBREYiLCJmaWxlIjoibW91bGRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2dyaWQge1xyXG4gIG1hcmdpbjogNCU7XHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuLmFwcGZvbnQge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLmlucHV0U3R5bGUge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGNvbG9yOiBncmV5O1xyXG59XHJcblxyXG4ubGFiZWxTdHlsZSB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gIGNvbG9yOiBncmV5O1xyXG59XHJcblxyXG4ucGFzc3dvcmQge1xyXG4gIC13ZWJraXQtdGV4dC1zZWN1cml0eTogZGlzYztcclxufVxyXG5cclxuLmlucHV0U3R5bGUge1xyXG4gIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuICAjaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uaW1hZ2V7XHJcbiAgLy8gaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogODBweDtcclxufSJdfQ== */";

/***/ }),

/***/ 22595:
/*!********************************************************!*\
  !*** ./src/app/moulding/moulding.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header id=\"header\">\n  <ion-toolbar>\n        <ion-img src=\"{{brandImage}}\" style=\"height: 50px;width:50px;\" slot=\"start\"></ion-img>\n        <div style=\"display: flex;justify-content: center;\" *ngIf=\"showMenu\">\n          <img src=\"./assets/image/status.png\" height=\"25\" width=\"25\">\n          <b style=\"font-size: 20px;\">&nbsp;&nbsp;Status</b>\n        </div>\n        <ion-buttons *ngIf=\"datapassTemp.length > 0\">\n          <ionic-selectable\n                #selectComponent\n                [(ngModel)]=\"selected\"\n                [items]=\"datapassTemp\"\n                itemValueField=\"link\"\n                itemTextField=\"name\"\n                [canSearch]=\"true\"\n                (onChange)=\"ReportChanged($event)\"\n                searchFailText= \"Report not found\"\n                placeholder=\"Select Report\">\n            </ionic-selectable>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n\n          <ion-fab style=\"margin-left: -100%;\">\n            <ion-fab-button size=\"small\">\n              <ion-icon name=\"add\"></ion-icon>\n            </ion-fab-button>\n            <ion-fab-list side=\"start\">\n              <ion-fab-button *ngIf=\"showprinter\">\n                <ion-img src=\"./assets/image/printer.png\" style=\"width: 35px;height: 35px;vertical-align: middle;float: right;\" (click)=\"print()\"></ion-img> \n              </ion-fab-button>\n              <ion-fab-button *ngIf=\"selected.length != 0 && scanData == null\">\n                <ion-img src=\"./assets/image/cast.png\" style=\"width: 35px;height: 35px;vertical-align: middle;float: right;\" (click)=\"castData('open')\" ></ion-img> \n              </ion-fab-button>\n              <ion-fab-button *ngIf=\"scanData != null\">\n                <ion-img src=\"./assets/image/delete.png\" style=\"width: 35px;height: 35px;vertical-align: middle;float: right;\" (click)=\"castData('close')\" ></ion-img> \n              </ion-fab-button>\n              <ion-fab-button *ngIf=\"selected.length != 0 && scanData == null\">\n                <ion-img src=\"./assets/image/excel.png\" style=\"width: 30px;height: 30px;vertical-align: middle;float: right;\" (click)=\"exportToExcel()\"></ion-img> \n              </ion-fab-button>\n              <!-- <ion-fab-button>\n                <ion-img src=\"./assets/image/admin.png\" style=\"width: 35px;height: 35px;vertical-align: middle;float: right;\" (click)=\"onClickMe('Setting')\"></ion-img> \n              </ion-fab-button> -->\n             \n            </ion-fab-list>\n          </ion-fab>\n          <ion-back-button defaultHref=\"Widgets\" slot=\"end\"></ion-back-button>  \n        </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <iframe style=\"width:100%;height:100%;\" [src]=\"datalist | renderUrl\" frameborder=\"0\" *ngIf=\"dropdownObject != ''\" id=\"ReportPanel\"></iframe>\n  <ion-img src=\"./assets/image/nodata.png\" style=\"width:100%;height:100%;\" *ngIf=\"!showMenu && dropdownObject == ''\"></ion-img> \n\n\n  <ion-grid *ngIf=\"showMenu\">\n    <br><br>\n    <ion-row>\n      <ion-col size=\"4\" (click)=\"getReport('purchase')\" style=\"display: flex;justify-content: center;\" *ngIf=\"purchase\">\n        <img src=\"./assets/image/receipt.png\" class=\"image\"/>    \n      </ion-col>\n\n      <ion-col size=\"4\" (click)=\"getReport('mixing')\" style=\"display: flex;justify-content: center;\" *ngIf=\"mixing\">\n        <img src=\"./assets/image/rgb.png\" class=\"image\"/>    \n      </ion-col>\n\n      <ion-col size=\"4\" (click)=\"getReport('final')\" style=\"display: flex;justify-content: center;\" *ngIf=\"final\">\n        <img src=\"./assets/image/route.png\" class=\"image\"/>    \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"4\" style=\"text-align: center;\" *ngIf=\"purchase\">\n        <h4>Purchase</h4>   \n      </ion-col>\n\n      <ion-col size=\"4\" style=\"text-align: center;\" *ngIf=\"mixing\">\n        <h4>Mixing</h4>    \n      </ion-col>\n\n      <ion-col size=\"4\" style=\"text-align: center;\" *ngIf=\"final\">\n        <h4>Final</h4>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"4\" (click)=\"getReport('calendering')\" style=\"display: flex;justify-content: center;\" *ngIf=\"calendering\">\n        <img src=\"./assets/image/paper-roll.png\" class=\"image\"/>    \n      </ion-col>\n\n      <ion-col size=\"4\" (click)=\"getReport('production')\" style=\"display: flex;justify-content: center;\" *ngIf=\"production\">\n        <img src=\"./assets/image/machine-press.png\" class=\"image\"/>    \n      </ion-col>\n\n      <ion-col size=\"4\" (click)=\"getReport('deflashing')\" style=\"display: flex;justify-content: center;\" *ngIf=\"deflashing\">\n        <img src=\"./assets/image/layer.png\" class=\"image\"/>    \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"4\" style=\"text-align: center;\" *ngIf=\"calendering\">\n        <h4>Calendering</h4>   \n      </ion-col>\n\n      <ion-col size=\"4\" style=\"text-align: center;\" *ngIf=\"production\">\n        <h4>Production</h4>    \n      </ion-col>\n\n      <ion-col size=\"4\" style=\"text-align: center;\" *ngIf=\"deflashing\">\n        <h4>Deflashing</h4>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"4\" (click)=\"getReport('inspection')\" style=\"display: flex;justify-content: center;\" *ngIf=\"inspection\">\n        <img src=\"./assets/image/statistics.png\" class=\"image\"/>    \n      </ion-col>\n\n      <ion-col size=\"4\" (click)=\"getReport('despatch')\" style=\"display: flex;justify-content: center;\" *ngIf=\"despatch\">\n        <img src=\"./assets/image/delivery.png\" class=\"image\"/>    \n      </ion-col>\n\n      <ion-col size=\"4\">\n           \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"4\" style=\"text-align: center;\" *ngIf=\"inspection\">\n        <h4>Inspection</h4>   \n      </ion-col>\n\n      <ion-col size=\"4\" style=\"text-align: center;\" *ngIf=\"despatch\">\n        <h4>Despatch</h4>    \n      </ion-col>\n\n      <ion-col size=\"4\" style=\"text-align: center;\">\n        \n      </ion-col>\n    </ion-row>\n   \n  </ion-grid>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_moulding_moulding_module_ts.js.map