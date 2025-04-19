"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_dimensionentry_dimensionentry_module_ts"],{

/***/ 31124:
/*!*****************************************************************!*\
  !*** ./src/app/dimensionentry/dimensionentry-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DimensionentryPageRoutingModule": () => (/* binding */ DimensionentryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _dimensionentry_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dimensionentry.page */ 59291);




const routes = [
    {
        path: '',
        component: _dimensionentry_page__WEBPACK_IMPORTED_MODULE_0__.DimensionentryPage
    }
];
let DimensionentryPageRoutingModule = class DimensionentryPageRoutingModule {
};
DimensionentryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DimensionentryPageRoutingModule);



/***/ }),

/***/ 66213:
/*!*********************************************************!*\
  !*** ./src/app/dimensionentry/dimensionentry.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DimensionentryPageModule": () => (/* binding */ DimensionentryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _dimensionentry_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dimensionentry-routing.module */ 31124);
/* harmony import */ var _dimensionentry_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dimensionentry.page */ 59291);








let DimensionentryPageModule = class DimensionentryPageModule {
};
DimensionentryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dimensionentry_routing_module__WEBPACK_IMPORTED_MODULE_0__.DimensionentryPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_dimensionentry_page__WEBPACK_IMPORTED_MODULE_1__.DimensionentryPage]
    })
], DimensionentryPageModule);



/***/ }),

/***/ 59291:
/*!*******************************************************!*\
  !*** ./src/app/dimensionentry/dimensionentry.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DimensionentryPage": () => (/* binding */ DimensionentryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _dimensionentry_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dimensionentry.page.html?ngResource */ 529);
/* harmony import */ var _dimensionentry_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dimensionentry.page.scss?ngResource */ 73838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner */ 25274);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ 6222);











let DimensionentryPage = class DimensionentryPage {
    constructor(http, screenOrientation, loadingController, toastController, router, formBuilder) {
        this.http = http;
        this.screenOrientation = screenOrientation;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.router = router;
        this.formBuilder = formBuilder;
        this.planid = "";
        this.datapass = {};
        this.showEntryCard = false;
        this.dataUrl = localStorage.getItem('url');
        this.submitted = false;
        this.brandImage = "";
        this.rmDetails = [];
        this.isApproved = "1";
        this.flag = false;
    }
    ngOnInit() {
        this.brandImage = localStorage.getItem('brandImage');
        this.scan();
        this.registerForm = this.formBuilder.group({
            remarks: [''],
            // pin: ['', Validators.required]
        });
        this.screenOrientation.unlock();
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    scan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const data = yield _ionic_native_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner.scan();
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                // duration: 2000,
                spinner: 'dots'
            });
            if (data.text.length > 0) {
                yield loading.present();
                const headers = { 'auth-id': localStorage.getItem('authid'), 'client-id': localStorage.getItem('clientid'), 'user': localStorage.getItem('userid'),
                    'password': localStorage.getItem('password') };
                this.http.get(this.dataUrl + '/api/dimentry/' + data.text, { headers }).subscribe({
                    next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                        this.datapass = data.message;
                        this.rmDetails = data.message.paramdata;
                        this.showEntryCard = true;
                        this.approval("1");
                        loading.dismiss();
                        this.registerForm.reset();
                        setTimeout(() => {
                            this.myInputField.setFocus();
                        }, 700);
                    }),
                    error: errordata => {
                        if (errordata.error.message) {
                            loading.dismiss();
                            this.showEntryCard = false;
                            this.toastfunction(errordata.error.message, "danger");
                        }
                        else {
                            this.toastfunction("Invalid Company Url, Please Check in Home page", "danger");
                        }
                        this.registerForm.reset();
                    }
                });
            }
        });
    }
    sendData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                // duration: 2000,
                spinner: 'dots'
            });
            if (this.planid.length > 0) {
                yield loading.present();
                const headers = { 'auth-id': localStorage.getItem('authid'), 'client-id': localStorage.getItem('clientid'), 'user': localStorage.getItem('userid'),
                    'password': localStorage.getItem('password') };
                this.http.get(this.dataUrl + '/api/dimentry/' + this.planid, { headers }).subscribe({
                    next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                        this.datapass = data.message;
                        this.rmDetails = data.message.paramdata;
                        this.showEntryCard = true;
                        this.approval("1");
                        loading.dismiss();
                        this.registerForm.reset();
                        setTimeout(() => {
                            this.myInputField.setFocus();
                        }, 700);
                    }),
                    error: errordata => {
                        if (errordata.error.message) {
                            loading.dismiss();
                            this.showEntryCard = false;
                            this.toastfunction(errordata.error.message, "danger");
                        }
                        else {
                            this.toastfunction("Invalid Company Url, Please Check in Home page", "danger");
                        }
                        this.registerForm.reset();
                    }
                });
            }
        });
    }
    submitData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const headers = { 'auth-id': localStorage.getItem('authid'), 'client-id': localStorage.getItem('clientid'), 'user': localStorage.getItem('userid'),
                'password': localStorage.getItem('password') };
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                // duration: 2000,
                spinner: 'dots'
            });
            yield loading.present();
            this.submitted = true;
            if (this.registerForm.invalid) {
                return;
            }
            else if (this.isApproved == "0" && (this.registerForm.value.remarks == "" || this.registerForm.value.remarks == null)) {
                this.toastfunction("Please Fill Remarks", "danger");
                loading.dismiss();
                return;
            }
            else {
                let paramdata = this.rmDetails.map((x) => {
                    return {
                        "dimref": parseInt(x.dimref),
                        "dimval1": parseFloat(x.dimval1),
                        "dimval2": parseFloat(x.dimval2),
                        "dimval3": parseFloat(x.dimval3),
                        "dimval4": parseFloat(x.dimval4),
                        "dimval5": parseFloat(x.dimval5),
                        "dimval6": parseFloat(x.dimval6),
                        "dimval7": parseFloat(x.dimval7),
                        "dimval8": parseFloat(x.dimval8),
                        "dimval9": parseFloat(x.dimval9),
                        "dimval10": parseFloat(x.dimval10)
                    };
                });
                // paramdata.map((x)=>{
                //   if(x.paramval <= 0){
                //     this.toastfunction("Observation should not be 0 or negative","danger");
                //     return;
                //   }
                // })
                const body = {
                    "planid": this.datapass[0].planid,
                    "approval": parseInt(this.isApproved),
                    "remarks": this.registerForm.value.remarks == null ? "" : this.registerForm.value.remarks,
                    // "operatorid": parseInt(this.registerForm.value.pin),
                    "dimdata": paramdata
                };
                this.http.post(this.dataUrl + '/api/dimentry', body, { headers }).subscribe({
                    next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                        if (data.status == "success") {
                            loading.dismiss();
                            this.toastfunction(data.message, "success");
                            this.showEntryCard = false;
                            this.planid = "";
                            this.registerForm.reset();
                        }
                        else {
                            loading.dismiss();
                            this.toastfunction(data.message, "danger");
                            this.showEntryCard = true;
                        }
                    }),
                    error: errordata => {
                        if (errordata.error.message) {
                            loading.dismiss();
                            this.showEntryCard = true;
                            this.toastfunction(errordata.error.message, "danger");
                        }
                        else {
                            this.toastfunction("Invalid Company Url, Please Check in Home page", "danger");
                        }
                    }
                });
            }
        });
    }
    modaldismiss() {
        this.showEntryCard = false;
        this.registerForm.reset();
    }
    navBack() {
        this.router.navigate(['home']);
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
    prefill(inx, val, prop) {
        if (val != "") {
            this.store = val;
            this.rmDetails[inx][prop] = "";
        }
    }
    blured(inx, val, prop, pos) {
        if (val == "") {
            this.rmDetails[inx][prop] = parseFloat(this.store);
        }
        else {
            this.rmDetails[inx][prop] = parseFloat(val);
            // if(parseFloat(this.rmDetails[inx].dimllimit) <= parseFloat(val) && parseFloat(this.rmDetails[inx].dimulimit) >= parseFloat(val)){
            //   this.rmDetails[inx][prop]=parseFloat(val);
            //   // document.getElementById("alert"+pos+inx).style.border="1px solid #80808038";
            //   // this.flag=true;
            // }
            // else{
            //   this.rmDetails[inx][prop]=parseFloat(this.store);
            //   this.toastfunction("Range accept between : "+this.rmDetails[inx].dimllimit+" - "+this.rmDetails[inx].dimulimit+"!!!","danger");
            //   // document.getElementById("alert"+pos+inx).style.border="1px solid red";
            //   // this.flag=false;
            // }
        }
    }
    approval(value) {
        if (value == "1") {
            this.isApproved = "1";
        }
        if (value == "0") {
            this.isApproved = "0";
        }
    }
    onChangeOnservation(i, val, prop) {
        if (parseFloat(val) < 0.001) {
            this.rmDetails[i][prop] = 0.001;
            return false;
        }
        this.rmDetails[i][prop] = val;
    }
};
DimensionentryPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__.ScreenOrientation },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder }
];
DimensionentryPage.propDecorators = {
    myInputField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['inputId',] }]
};
DimensionentryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-dimensionentry',
        template: _dimensionentry_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dimensionentry_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DimensionentryPage);



/***/ }),

/***/ 73838:
/*!********************************************************************!*\
  !*** ./src/app/dimensionentry/dimensionentry.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "#grid {\n  margin: 4%;\n}\n\n.avatar {\n  height: 50px;\n  width: 50px;\n}\n\n.appfont {\n  font-size: 17px;\n}\n\n.labelStyle {\n  float: right;\n}\n\n.label {\n  color: grey;\n}\n\n.password {\n  -webkit-text-security: disc;\n}\n\n.inputStyle {\n  font-size: 21px;\n  border: 1px solid #80808038;\n  text-align: right;\n  color: grey;\n}\n\n.marginleft {\n  margin-left: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpbWVuc2lvbmVudHJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBR0U7RUFDRSxXQUFBO0FBQUo7O0FBR0U7RUFDRSwyQkFBQTtBQUFKOztBQUlFO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUU7RUFDRSxlQUFBO0FBREoiLCJmaWxlIjoiZGltZW5zaW9uZW50cnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2dyaWQge1xyXG4gICAgbWFyZ2luOiA0JTtcclxuICB9XHJcbiAgXHJcbiAgLmF2YXRhciB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmFwcGZvbnQge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxuICBcclxuICAubGFiZWxTdHlsZSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICB9XHJcbiAgXHJcbiAgLmxhYmVsIHtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gIH1cclxuICBcclxuICAucGFzc3dvcmQge1xyXG4gICAgLXdlYmtpdC10ZXh0LXNlY3VyaXR5OiBkaXNjO1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dFN0eWxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODAzODtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXJnaW5sZWZ0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIH1cclxuIl19 */";

/***/ }),

/***/ 529:
/*!********************************************************************!*\
  !*** ./src/app/dimensionentry/dimensionentry.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <!-- <ion-menu-button menu=\"main-menu\"></ion-menu-button> -->\n          <ion-img src=\"{{brandImage}}\" style=\"height: 50px;width:50px\"></ion-img>\n        </ion-buttons>\n        <div style=\"display: flex;justify-content: center;\">\n        <img src=\"./assets/image/cube.png\" height=\"25\" width=\"25\">\n        <b style=\"font-size: 20px;\">&nbsp;&nbsp;Dimension Entry</b>\n        </div>\n        <!-- <ion-text (click)=\"navBack()\" slot=\"end\" style=\"margin-right:4%\">Back</ion-text>  -->\n        <ion-back-button defaultHref=\"approvals\" slot=\"end\"></ion-back-button>   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-footer>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"2\">           \n            <img src=\"./assets/image/qr-scan.png\" alt=\"Scanner\" (click)=\"scan()\" width=\"50\" height=\"50\" class=\"ion-float-left\">           \n          </ion-col>          \n          <ion-col size=\"7\">\n            <ion-item>\n              <ion-input [(ngModel)]=\"planid\" placeholder=\"Enter Planid\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-button color=\"primary\" (click)=\"sendData()\" [disabled]=\"planid.length == 0 ? true : false\">Send</ion-button>\n          </ion-col>         \n        </ion-row>\n      </ion-grid>\n    </ion-footer>\n  </ion-card>\n\n  <ion-card *ngIf=\"showEntryCard\">\n    <ion-card-header style=\"border-bottom: 1px solid grey;\">    \n      <ion-card-title>Dimension Entry</ion-card-title>              \n    </ion-card-header>\n    <ion-grid id=\"grid\" class=\"appfont\">\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-label>Plan Reference : </ion-label>\n          </ion-col>\n          <ion-col size=\"8\">\n            {{datapass[0].planid}}\n          </ion-col>\n        </ion-row>\n        <br/>\n       <div style=\"overflow: auto;\">\n            <div style=\"width: 350%;\">\n              <ion-row style=\"text-align: center;border-bottom: 1px solid grey;\">\n                <ion-col size=\"1\">No.</ion-col>\n                <ion-col size=\"1\">Parameter</ion-col>\n                <ion-col size=\"2\">Range</ion-col>\n                <ion-col size=\"8\">Samples</ion-col>\n              </ion-row>\n              <ion-row *ngFor=\"let y of rmDetails; index as i\" style=\"font-weight: bold;text-align: center;border-bottom: 1px solid grey;\">\n                <ion-col size=\"1\" style=\"color:blue;\">{{i+1}}</ion-col>\n                <ion-col size=\"1\">{{y.dimname}}</ion-col>\n                <ion-col size=\"2\" >{{y.dimllimit}} - {{y.dimulimit}} (mm)</ion-col> \n                <ion-col size=\"8\">\n                  <ion-row>\n                    <ion-col><ion-input type=\"number\" min=\"0.001\" class=\"inputStyle\" id=\"alert0{{i}}\" value=\"{{y.dimval1}}\" (ionChange)='onChangeOnservation(i,$event.target.value,\"dimval1\")' (click)=\"prefill(i,$event.target.value,'dimval1')\" (focusout)=\"blured(i,$event.target.value,'dimval1','0')\" #inputId></ion-input></ion-col>\n                    <ion-col><ion-input type=\"number\" min=\"0.001\" class=\"inputStyle\" id=\"alert1{{i}}\" value=\"{{y.dimval2}}\" (ionChange)='onChangeOnservation(i,$event.target.value,\"dimval2\")' (click)=\"prefill(i,$event.target.value,'dimval2')\" (focusout)=\"blured(i,$event.target.value,'dimval2','1')\"></ion-input></ion-col>\n                    <ion-col><ion-input type=\"number\" min=\"0.001\" class=\"inputStyle\" id=\"alert2{{i}}\" value=\"{{y.dimval3}}\" (ionChange)='onChangeOnservation(i,$event.target.value,\"dimval3\")' (click)=\"prefill(i,$event.target.value,'dimval3')\" (focusout)=\"blured(i,$event.target.value,'dimval3','2')\"></ion-input></ion-col>\n                    <ion-col><ion-input type=\"number\" min=\"0.001\" class=\"inputStyle\" id=\"alert3{{i}}\" value=\"{{y.dimval4}}\" (ionChange)='onChangeOnservation(i,$event.target.value,\"dimval4\")' (click)=\"prefill(i,$event.target.value,'dimval4')\" (focusout)=\"blured(i,$event.target.value,'dimval4','3')\"></ion-input></ion-col>\n                    <ion-col><ion-input type=\"number\" min=\"0.001\" class=\"inputStyle\" id=\"alert4{{i}}\" value=\"{{y.dimval5}}\" (ionChange)='onChangeOnservation(i,$event.target.value,\"dimval5\")' (click)=\"prefill(i,$event.target.value,'dimval5')\" (focusout)=\"blured(i,$event.target.value,'dimval5','4')\"></ion-input></ion-col>\n                    <ion-col><ion-input type=\"number\" min=\"0.001\" class=\"inputStyle\" id=\"alert5{{i}}\" value=\"{{y.dimval6}}\" (ionChange)='onChangeOnservation(i,$event.target.value,\"dimval6\")' (click)=\"prefill(i,$event.target.value,'dimval6')\" (focusout)=\"blured(i,$event.target.value,'dimval6','5')\"></ion-input></ion-col>\n                    <ion-col><ion-input type=\"number\" min=\"0.001\" class=\"inputStyle\" id=\"alert6{{i}}\" value=\"{{y.dimval7}}\" (ionChange)='onChangeOnservation(i,$event.target.value,\"dimval7\")' (click)=\"prefill(i,$event.target.value,'dimval7')\" (focusout)=\"blured(i,$event.target.value,'dimval7','6')\"></ion-input></ion-col>\n                    <ion-col><ion-input type=\"number\" min=\"0.001\" class=\"inputStyle\" id=\"alert7{{i}}\" value=\"{{y.dimval8}}\" (ionChange)='onChangeOnservation(i,$event.target.value,\"dimval8\")' (click)=\"prefill(i,$event.target.value,'dimval8')\" (focusout)=\"blured(i,$event.target.value,'dimval8','7')\"></ion-input></ion-col>\n                    <ion-col><ion-input type=\"number\" min=\"0.001\" class=\"inputStyle\" id=\"alert8{{i}}\" value=\"{{y.dimval9}}\" (ionChange)='onChangeOnservation(i,$event.target.value,\"dimval9\")' (click)=\"prefill(i,$event.target.value,'dimval9')\" (focusout)=\"blured(i,$event.target.value,'dimval9','8')\"></ion-input></ion-col>\n                    <ion-col><ion-input type=\"number\" min=\"0.001\" class=\"inputStyle\" id=\"alert9{{i}}\" value=\"{{y.dimval10}}\" (ionChange)='onChangeOnservation(i,$event.target.value,\"dimval10\")' (click)=\"prefill(i,$event.target.value,'dimval10')\" (focusout)=\"blured(i,$event.target.value,'dimval10','9')\"></ion-input></ion-col>\n                  </ion-row>\n                </ion-col>\n              </ion-row>  \n            </div>\n       </div>\n    </ion-grid>\n    <ion-grid id=\"grid\" class=\"appfont\">\n      <form [formGroup]=\"registerForm\" (ngSubmit)=\"submitData()\">\n       <ion-row>\n          <ion-col size=\"4\">\n            <ion-label>Compound : </ion-label>\n          </ion-col>\n          <ion-col size=\"8\">\n            <ion-radio-group value=\"{{isApproved}}\" (ionChange)=\"approval($event.detail.value)\">\n              <ion-radio value=\"1\"></ion-radio>\n              <ion-label class=\"marginleft\">Approved</ion-label>\n              <ion-radio value=\"0\" class=\"marginleft\"></ion-radio>\n              <ion-label class=\"marginleft\">Rejected</ion-label>\n            </ion-radio-group> \n          </ion-col>\n        </ion-row>\n        <br />\n          <ion-textarea label=\"Outline textarea\" labelPlacement=\"floating\" fill=\"outline\" formControlName=\"remarks\" placeholder=\"Remarks\" style=\"border:1px solid #80808038\"></ion-textarea>\n        <!-- <br>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label position=\"floating\" class=\"label\">PIN</ion-label>\n              <ion-input type=\"number\" inputmode=\"decimal\" formControlName=\"pin\" class=\"password\"></ion-input>\n            </ion-item>\n            <ion-text *ngIf=\"submitted && f.pin.errors\">\n              <ion-text color=\"danger\" *ngIf=\"f.pin.errors.required\" style=\"font-size: 12px;float:right;font-weight: bold;\">*Required</ion-text>\n            </ion-text>        \n          </ion-col>\n        </ion-row> -->\n        <br>\n        <ion-row>\n          <ion-col size=\"6\" push=\"2\">\n            <ion-button color=\"success\"  type=\"submit\" [disabled]=\"!registerForm.valid || flag\">Submit</ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button color=\"danger\" (click)='modaldismiss()'>Cancel</ion-button>\n          </ion-col>\n        </ion-row>\n        \n      </form>\n    </ion-grid>\n  </ion-card>\n  \n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_dimensionentry_dimensionentry_module_ts.js.map