"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_stockadjustment_stockadjustment_module_ts"],{

/***/ 5293:
/*!*******************************************************************!*\
  !*** ./src/app/stockadjustment/stockadjustment-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockadjustmentPageRoutingModule": () => (/* binding */ StockadjustmentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _stockadjustment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stockadjustment.page */ 143);




const routes = [
    {
        path: '',
        component: _stockadjustment_page__WEBPACK_IMPORTED_MODULE_0__.StockadjustmentPage
    }
];
let StockadjustmentPageRoutingModule = class StockadjustmentPageRoutingModule {
};
StockadjustmentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StockadjustmentPageRoutingModule);



/***/ }),

/***/ 17699:
/*!***********************************************************!*\
  !*** ./src/app/stockadjustment/stockadjustment.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockadjustmentPageModule": () => (/* binding */ StockadjustmentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _stockadjustment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stockadjustment-routing.module */ 5293);
/* harmony import */ var _stockadjustment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stockadjustment.page */ 143);








let StockadjustmentPageModule = class StockadjustmentPageModule {
};
StockadjustmentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _stockadjustment_routing_module__WEBPACK_IMPORTED_MODULE_0__.StockadjustmentPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_stockadjustment_page__WEBPACK_IMPORTED_MODULE_1__.StockadjustmentPage]
    })
], StockadjustmentPageModule);



/***/ }),

/***/ 143:
/*!*********************************************************!*\
  !*** ./src/app/stockadjustment/stockadjustment.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockadjustmentPage": () => (/* binding */ StockadjustmentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _stockadjustment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stockadjustment.page.html?ngResource */ 41149);
/* harmony import */ var _stockadjustment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stockadjustment.page.scss?ngResource */ 68459);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner */ 25274);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ 6222);











let StockadjustmentPage = class StockadjustmentPage {
    constructor(http, screenOrientation, loadingController, toastController, router, formBuilder) {
        this.http = http;
        this.screenOrientation = screenOrientation;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.router = router;
        this.formBuilder = formBuilder;
        this.planid = "";
        this.datapass = [];
        this.showEntryCard = false;
        this.dataUrl = localStorage.getItem('url');
        this.submitted = false;
        this.brandImage = "";
        // rmDetails=[];
        this.isApproved = "1";
        this.itemType = "roll";
    }
    ngOnInit() {
        this.brandImage = localStorage.getItem('brandImage');
        // this.scan();
        this.registerForm = this.formBuilder.group({
            remarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            // pin: ['', Validators.required]
        });
        // this.screenOrientation.unlock();
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    scan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
                this.http.get(this.dataUrl + '/api/stockadjust/' + this.itemType + '/' + data.text, { headers }).subscribe({
                    next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        this.datapass = data.message;
                        this.datapass.map((x) => {
                            x["phyqty"] = x.bookqty;
                        });
                        // this.rmDetails=data.message.paramdata;
                        this.showEntryCard = true;
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
                this.http.get(this.dataUrl + '/api/stockadjust/' + this.itemType + '/' + this.planid, { headers }).subscribe({
                    next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        this.datapass = data.message;
                        this.datapass.map((x) => {
                            x["phyqty"] = x.bookqty;
                        });
                        // this.rmDetails=data.message.paramdata;
                        this.showEntryCard = true;
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
            else {
                let paramdata = [];
                this.datapass.map((x) => {
                    if (x.bookqty != x.phyqty) {
                        paramdata.push({
                            "itemref": x.itemref,
                            "phyqty": x.phyqty
                        });
                    }
                });
                const body = {
                    "itemtype": this.itemType,
                    "remarks": this.registerForm.value.remarks,
                    // "operatorid": parseInt(this.registerForm.value.pin),
                    "iteminfo": paramdata
                };
                this.http.post(this.dataUrl + '/api/stockadjust', body, { headers }).subscribe({
                    next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
    prefill(inx, val) {
        if (val != "") {
            this.store = val;
            this.datapass[inx].phyqty = "";
        }
    }
    blured(inx, val) {
        if (val == "") {
            this.datapass[inx].phyqty = parseFloat(this.store);
        }
        else {
            this.datapass[inx].phyqty = parseFloat(val);
        }
    }
    approval(value) {
        if (value.detail.value == "1") {
            this.isApproved = "1";
        }
        if (value.detail.value == "0") {
            this.isApproved = "0";
        }
    }
    onChangeOnservation(i, val) {
        if (parseFloat(val) < 0) {
            this.datapass[i].phyqty = 0;
            return false;
        }
        this.datapass[i].phyqty = parseFloat(val);
    }
};
StockadjustmentPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__.ScreenOrientation },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder }
];
StockadjustmentPage.propDecorators = {
    myInputField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['inputId',] }]
};
StockadjustmentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-stockadjustment',
        template: _stockadjustment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_stockadjustment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StockadjustmentPage);



/***/ }),

/***/ 68459:
/*!**********************************************************************!*\
  !*** ./src/app/stockadjustment/stockadjustment.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "#grid {\n  margin: 4%;\n}\n\n.avatar {\n  height: 50px;\n  width: 50px;\n}\n\n.appfont {\n  font-size: 17px;\n}\n\n.labelStyle {\n  float: right;\n}\n\n.label {\n  color: grey;\n}\n\n.password {\n  -webkit-text-security: disc;\n}\n\n.inputStyle {\n  font-size: 21px;\n  border: 1px solid #80808038;\n  text-align: right;\n  color: grey;\n}\n\n.marginleft {\n  margin-left: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b2NrYWRqdXN0bWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtBQUNKOztBQUdFO0VBQ0UsV0FBQTtBQUFKOztBQUdFO0VBQ0UsMkJBQUE7QUFBSjs7QUFJRTtFQUNFLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlFO0VBQ0UsZUFBQTtBQURKIiwiZmlsZSI6InN0b2NrYWRqdXN0bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZ3JpZCB7XHJcbiAgICBtYXJnaW46IDQlO1xyXG4gIH1cclxuICBcclxuICAuYXZhdGFyIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gIH1cclxuICBcclxuICAuYXBwZm9udCB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sYWJlbFN0eWxlIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIC8vIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gIH1cclxuICBcclxuICAubGFiZWwge1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXNzd29yZCB7XHJcbiAgICAtd2Via2l0LXRleHQtc2VjdXJpdHk6IGRpc2M7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0U3R5bGUge1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDM4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICB9XHJcbiAgXHJcbiAgLm1hcmdpbmxlZnR7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 41149:
/*!**********************************************************************!*\
  !*** ./src/app/stockadjustment/stockadjustment.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-img src=\"{{brandImage}}\" style=\"height: 50px;width:50px\"></ion-img>\n        </ion-buttons>\n        <div style=\"display: flex;justify-content: center;\">\n        <img src=\"./assets/image/replacement.png\" height=\"25\" width=\"25\">\n        <b style=\"font-size: 20px;\">&nbsp;&nbsp;Stock Adjustment</b>\n        </div>\n        <ion-back-button defaultHref=\"approvals\" slot=\"end\"></ion-back-button>   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-footer>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"2\">           \n            <img src=\"./assets/image/qr-scan.png\" alt=\"Scanner\" (click)=\"scan()\" width=\"50\" height=\"50\" class=\"ion-float-left\">           \n          </ion-col> \n          <ion-col size=\"4\">          \n            <ion-select [(ngModel)]=\"itemType\">\n              <ion-select-option value=\"roll\">Calendar Roll</ion-select-option>\n              <ion-select-option value=\"cpd\">Compound</ion-select-option>\n              <ion-select-option value=\"ram\">Raw Material</ion-select-option>\n              <ion-select-option value=\"cmpd\">Component</ion-select-option>\n            </ion-select>           \n          </ion-col>         \n          <ion-col size=\"4\">\n            <ion-item>\n              <ion-input [(ngModel)]=\"planid\" placeholder=\"Enter Planid\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"1\">\n            <ion-button color=\"primary\" (click)=\"sendData()\" [disabled]=\"planid.length == 0 ? true : false\">Send</ion-button>\n          </ion-col>         \n        </ion-row>\n      </ion-grid>\n    </ion-footer>\n  </ion-card>\n\n  <ion-card *ngIf=\"showEntryCard\">\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"submitData()\">\n      <ion-card-header style=\"border-bottom: 1px solid grey;\">    \n        <!-- <ion-card-title>Item Name : {{ itemType == \"cpd\" ? datapass[0].dispitemref : datapass[0].itemname}}</ion-card-title>    -->\n        <ion-card-title>Item Name : {{datapass[0].itemname}}</ion-card-title>              \n      </ion-card-header>\n      <ion-grid id=\"grid\" class=\"appfont\">\n        <div style=\"overflow: auto;\">\n              <div style=\"width: 130%;\">\n                <ion-row style=\"text-align: center;border-bottom: 1px solid grey;\">\n                  <ion-col size=\"3\">GRN/Plan/Batch ref.</ion-col>\n                  <ion-col size=\"3\" style=\"text-align: right;\">Book Qty.</ion-col>\n                  <ion-col size=\"3\">Physical Qty.</ion-col>\n                  <ion-col size=\"3\">UoM</ion-col>\n                </ion-row>\n                <ion-row *ngFor=\"let y of datapass; index as i\" style=\"font-weight: bold;text-align: center;border-bottom: 1px solid grey;\">\n                  <ion-col size=\"3\">{{y.dispitemref}}</ion-col>\n                  <ion-col size=\"3\" style=\"text-align: right;\">{{y.bookqty}}</ion-col> \n                  <ion-col size=\"3\"><ion-input type=\"number\" min=\"0\" class=\"inputStyle\" value=\"{{y.phyqty}}\" (ionChange)='onChangeOnservation(i,$event.target.value)' (click)=\"prefill(i,$event.target.value)\" (focusout)=\"blured(i,$event.target.value)\" #inputId></ion-input></ion-col>\n                  <ion-col size=\"3\">{{y.uom}}</ion-col>\n                </ion-row>  \n              </div>\n            </div>\n      </ion-grid>\n      <ion-grid id=\"grid\" class=\"appfont\">\n          <ion-textarea label=\"Outline textarea\" labelPlacement=\"floating\" fill=\"outline\" formControlName=\"remarks\" placeholder=\"Remarks\" style=\"border:1px solid #80808038\"></ion-textarea>\n          <ion-text *ngIf=\"submitted && f.remarks.errors\">\n            <ion-text color=\"danger\" *ngIf=\"f.remarks.errors.required\" style=\"font-size: 12px;float:right;font-weight: bold;\">*Required</ion-text>\n          </ion-text>   \n          <!-- <br>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label position=\"floating\" class=\"label\">PIN</ion-label>\n                <ion-input type=\"number\" inputmode=\"decimal\" formControlName=\"pin\" class=\"password\"></ion-input>\n              </ion-item>\n              <ion-text *ngIf=\"submitted && f.pin.errors\">\n                <ion-text color=\"danger\" *ngIf=\"f.pin.errors.required\" style=\"font-size: 12px;float:right;font-weight: bold;\">*Required</ion-text>\n              </ion-text>        \n            </ion-col>\n          </ion-row> -->\n          <br>\n          <ion-row>\n            <ion-col size=\"6\" push=\"2\">\n              <ion-button color=\"success\"  type=\"submit\" [disabled]=\"!registerForm.valid\">Submit</ion-button>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-button color=\"danger\" (click)='modaldismiss()'>Cancel</ion-button>\n            </ion-col>\n          </ion-row>\n      </ion-grid>\n    </form>\n  </ion-card>\n  \n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_stockadjustment_stockadjustment_module_ts.js.map