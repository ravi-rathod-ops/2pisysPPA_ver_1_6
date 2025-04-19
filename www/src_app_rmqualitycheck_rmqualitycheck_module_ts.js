"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_rmqualitycheck_rmqualitycheck_module_ts"],{

/***/ 59782:
/*!*****************************************************************!*\
  !*** ./src/app/rmqualitycheck/rmqualitycheck-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RmqualitycheckPageRoutingModule": () => (/* binding */ RmqualitycheckPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _rmqualitycheck_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rmqualitycheck.page */ 85167);




const routes = [
    {
        path: '',
        component: _rmqualitycheck_page__WEBPACK_IMPORTED_MODULE_0__.RmqualitycheckPage
    }
];
let RmqualitycheckPageRoutingModule = class RmqualitycheckPageRoutingModule {
};
RmqualitycheckPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RmqualitycheckPageRoutingModule);



/***/ }),

/***/ 49351:
/*!*********************************************************!*\
  !*** ./src/app/rmqualitycheck/rmqualitycheck.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RmqualitycheckPageModule": () => (/* binding */ RmqualitycheckPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _rmqualitycheck_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rmqualitycheck-routing.module */ 59782);
/* harmony import */ var _rmqualitycheck_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rmqualitycheck.page */ 85167);








let RmqualitycheckPageModule = class RmqualitycheckPageModule {
};
RmqualitycheckPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _rmqualitycheck_routing_module__WEBPACK_IMPORTED_MODULE_0__.RmqualitycheckPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_rmqualitycheck_page__WEBPACK_IMPORTED_MODULE_1__.RmqualitycheckPage]
    })
], RmqualitycheckPageModule);



/***/ }),

/***/ 85167:
/*!*******************************************************!*\
  !*** ./src/app/rmqualitycheck/rmqualitycheck.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RmqualitycheckPage": () => (/* binding */ RmqualitycheckPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _rmqualitycheck_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rmqualitycheck.page.html?ngResource */ 41171);
/* harmony import */ var _rmqualitycheck_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rmqualitycheck.page.scss?ngResource */ 33225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ 6222);










let RmqualitycheckPage = class RmqualitycheckPage {
    constructor(http, loadingController, screenOrientation, toastController, router, formBuilder) {
        this.http = http;
        this.loadingController = loadingController;
        this.screenOrientation = screenOrientation;
        this.toastController = toastController;
        this.router = router;
        this.formBuilder = formBuilder;
        this.brandImage = "";
        this.dataUrl = localStorage.getItem('url');
        this.datapass = {};
        this.rmArray = [];
        this.rmArray2 = [];
        this.rmArrayTemp = [];
        this.rmDetails = [];
        this.showEntryCard = false;
        this.tcIsAvaiable = 1;
        this.tcfile = null;
        this.invfile = null;
        this.isApproved = "1";
        this.searchData = "";
        this.flag = true;
    }
    ngOnInit() {
        this.brandImage = localStorage.getItem('brandImage');
        this.getData();
        // this.screenOrientation.unlock();
        this.registerForm = this.formBuilder.group({
            tcref: [''],
            remarks: [''],
            recvqty: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            appqty: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            doe: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            // pin: ['', Validators.required]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    getData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                // duration: 2000,
                spinner: 'dots'
            });
            yield loading.present();
            const headers = { 'auth-id': localStorage.getItem('authid'), 'client-id': localStorage.getItem('clientid'), 'user': localStorage.getItem('userid'),
                'password': localStorage.getItem('password') };
            this.http.get(this.dataUrl + '/api/approverm', { headers }).subscribe({
                next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    this.rmArray = data.message;
                    this.rmArray2 = data.message;
                    this.rmArrayTemp = data.message;
                    loading.dismiss();
                    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);      
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
            if (this.registerForm.invalid) {
                return;
            }
            else if (this.tcIsAvaiable === 1 && this.registerForm.controls['tcref'].value == null) {
                this.toastfunction("Please Fill the Test Cert Reference", "danger");
                loading.dismiss();
                return;
            }
            else if (this.registerForm.value.recvqty < this.registerForm.value.appqty) {
                this.toastfunction("Approval Quality is not greater then Received Quality", "danger");
                loading.dismiss();
                return;
            }
            else if (this.isApproved == "0" && (this.registerForm.value.remarks == "" || this.registerForm.value.remarks == null)) {
                this.toastfunction("Please Fill Remarks", "danger");
                loading.dismiss();
                return;
            }
            else {
                var finalDate = this.registerForm.value.doe.split('T')[0];
                // var dat=this.registerForm.value.doe;
                // var arr=dat.split("-");
                // var finalDate=arr[0]+"-"+arr[1]+"-"+arr[2];
                // let paramdata=this.rmDetails.map((x)=>{
                //   return parseInt(x.paramref)+":"+parseFloat(x.paramval)
                // })
                const body = new FormData();
                body.append('tc-file', this.tcfile);
                body.append('inv-file', this.invfile);
                // body.append('operatorid', this.registerForm.value.pin);
                body.append('grnid', this.currentRecord.grnid);
                body.append('approval', this.isApproved);
                body.append('remarks', this.registerForm.value.remarks);
                body.append('tstcert', this.registerForm.value.tcref);
                body.append('doe', finalDate);
                body.append('appqty', this.registerForm.value.appqty);
                body.append('recvqty', this.registerForm.value.recvqty);
                // body.append('paramdata', JSON.stringify(paramdata));
                this.rmDetails.map((x, ind) => {
                    body.append('paramdata[' + ind + ']', parseInt(x.paramref) + ":" + parseFloat(x.paramval));
                });
                console.log(body);
                this.http.post(this.dataUrl + '/api/approverm', body, { headers }).subscribe({
                    next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                        if (data.status == "success") {
                            loading.dismiss();
                            this.toastfunction(data.message, "success");
                            this.showEntryCard = false;
                            this.registerForm.reset();
                            // this.screenOrientation.unlock();
                            this.rmArray = [];
                            this.getData();
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
    itemDetail(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.tcfile = "";
            this.invfile = "";
            this.isApproved = "1";
            this.currentRecord = item;
            this.registerForm.reset();
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                // duration: 2000,
                spinner: 'dots'
            });
            yield loading.present();
            const headers = { 'auth-id': localStorage.getItem('authid'), 'client-id': localStorage.getItem('clientid'), 'user': localStorage.getItem('userid'),
                'password': localStorage.getItem('password') };
            this.http.get(this.dataUrl + '/api/approverm/' + item.ramid, { headers }).subscribe({
                next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    this.rmDetails = data.message;
                    // console.log(data.message)
                    this.tcRef("1");
                    this.approval("1");
                    this.registerForm.get('doe').patchValue(this.formatDate(new Date()));
                    this.registerForm.get('recvqty').patchValue(item.recvqty);
                    this.registerForm.get('appqty').patchValue(item.recvqty);
                    this.showEntryCard = true;
                    setTimeout(() => {
                        this.myInputField.setFocus();
                    }, 700);
                    loading.dismiss();
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
    prefill(inx, val) {
        if (val != "") {
            this.store = val;
            this.rmDetails[inx].paramval = "";
        }
    }
    modaldismiss() {
        this.showEntryCard = false;
        this.registerForm.reset();
    }
    blured(inx, val) {
        if (val == "") {
            this.rmDetails[inx].paramval = parseFloat(this.store);
        }
        else {
            this.rmDetails[inx].paramval = parseFloat(val);
        }
    }
    tcRef(value) {
        if (value == "1") {
            this.tcIsAvaiable = 1;
        }
        if (value == "0") {
            this.tcIsAvaiable = 0;
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
    filesel(event, type) {
        if (type == "inv") {
            this.invfile = event.target.files[0];
        }
        if (type == "tc") {
            this.tcfile = event.target.files[0];
        }
    }
    onChangeOnservation(i, val) {
        if (parseFloat(val) < 0) {
            this.rmDetails[i].paramval = 0;
            return false;
        }
        this.rmDetails[i].paramval = val;
    }
    formatDate(date) {
        const d = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear() + 1;
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    }
    applyFilter(filterValue) {
        let filterValueLower = filterValue.toLowerCase();
        if (filterValue === '') {
            this.rmArray = this.rmArray2;
        }
        else {
            if (filterValue.length >= 3) {
                this.rmArray = this.rmArrayTemp.filter((employee) => employee.grnid.toLowerCase().includes(filterValueLower) ||
                    employee.grndate.toLowerCase().includes(filterValueLower) ||
                    employee.invSupName.toLowerCase().includes(filterValueLower) ||
                    employee.ramname.toLowerCase().includes(filterValueLower) ||
                    employee.recvqty.toLowerCase().includes(filterValueLower));
            }
        }
    }
    sort(colName, flag) {
        if (this.flag) {
            this.rmArray.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0);
            this.flag = false;
            return false;
        }
        if (!this.flag) {
            this.rmArray = this.rmArray.reverse();
            this.flag = true;
            return false;
        }
    }
    clearTest() {
        this.testVariable.value = "";
        this.tcfile = "";
    }
    clearInv() {
        this.invoiceVariable.value = "";
        this.invfile = "";
    }
};
RmqualitycheckPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__.ScreenOrientation },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
RmqualitycheckPage.propDecorators = {
    myInputField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['inputId',] }],
    testVariable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['inputFile1',] }],
    invoiceVariable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['inputFile2',] }]
};
RmqualitycheckPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-rmqualitycheck',
        template: _rmqualitycheck_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_rmqualitycheck_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RmqualitycheckPage);



/***/ }),

/***/ 33225:
/*!********************************************************************!*\
  !*** ./src/app/rmqualitycheck/rmqualitycheck.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "#grid {\n  margin: 4%;\n}\n\n.avatar {\n  height: 50px;\n  width: 50px;\n}\n\n.appfont {\n  font-size: 17px;\n}\n\n.labelStyle {\n  float: right;\n}\n\n.label {\n  color: grey;\n}\n\n.password {\n  -webkit-text-security: disc;\n}\n\n.inputStyle {\n  font-size: 21px;\n  border: 1px solid #80808038;\n  text-align: right;\n  color: grey;\n}\n\n.marginleft {\n  margin-left: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJtcXVhbGl0eWNoZWNrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBR0U7RUFDRSxXQUFBO0FBQUo7O0FBR0U7RUFDRSwyQkFBQTtBQUFKOztBQUlFO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUU7RUFDRSxlQUFBO0FBREoiLCJmaWxlIjoicm1xdWFsaXR5Y2hlY2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2dyaWQge1xyXG4gICAgbWFyZ2luOiA0JTtcclxuICB9XHJcbiAgXHJcbiAgLmF2YXRhciB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmFwcGZvbnQge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxuXHJcbiAgLmxhYmVsU3R5bGUge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sYWJlbCB7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICB9XHJcbiAgXHJcbiAgLnBhc3N3b3JkIHtcclxuICAgIC13ZWJraXQtdGV4dC1zZWN1cml0eTogZGlzYztcclxuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xyXG4gIH1cclxuICBcclxuICAuaW5wdXRTdHlsZSB7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwMzg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gIH1cclxuICBcclxuICAubWFyZ2lubGVmdHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICB9XHJcblxyXG4gIC5ib2xke1xyXG4gICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 41171:
/*!********************************************************************!*\
  !*** ./src/app/rmqualitycheck/rmqualitycheck.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">          \n      <ion-img src=\"{{brandImage}}\" style=\"height: 50px;width:50px\"></ion-img>\n    </ion-buttons>\n    <div style=\"display: flex;justify-content: center;\">\n      <img src=\"./assets/image/quality-control.png\" height=\"25\" width=\"25\">\n      <b style=\"font-size: 20px;\">&nbsp;&nbsp;RM Quality Check</b>\n    </div>       \n    <ion-back-button defaultHref=\"approvals\" slot=\"end\"></ion-back-button>   \n</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row nowrap class=\"ion-align-items-center\">\n        <ion-col size=\"12\">        \n          <ion-input (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\" [(ngModel)]=\"searchData\"><ion-icon name=\"search\"></ion-icon></ion-input>\n        </ion-col>  \n    </ion-row>\n  </ion-grid>\n\n  <ion-grid id=\"grid\" class=\"appfont\" style=\"overflow: auto;\">\n    <div style=\"width: 140%;\">\n      <ion-row style=\"border-bottom: 1px solid grey;\">\n        <ion-col size=\"2\" (click)=\"sort('grnid',false)\">GRN Id ({{rmArray.length}})</ion-col>\n        <ion-col size=\"2\" (click)=\"sort('grndate',false)\">GRN Date</ion-col>\n        <ion-col size=\"2\" (click)=\"sort('invSupName',false)\">Sup Name</ion-col>\n        <ion-col size=\"4\" (click)=\"sort('ramname',false)\">RM Name(Grade)</ion-col>\n        <ion-col size=\"2\" (click)=\"sort('recvqty',false)\">GRN Qty</ion-col>\n      </ion-row>\n\n      <ion-row *ngFor=\"let x of rmArray; index as i\" style=\"font-weight: bold;border-bottom: 1px solid grey;\" (click)=\"itemDetail(x)\">\n        <ion-col size=\"2\">{{x.grnid}}</ion-col>\n        <ion-col size=\"2\" style=\"color:blue;\">{{x.grndate}}</ion-col>\n        <ion-col size=\"2\" >{{x.invSupName | slice:0:24}}</ion-col> \n        <ion-col size=\"4\">{{x.ramname}}</ion-col>\n        <ion-col size=\"2\" style=\"color:blue;\">{{x.recvqty}}</ion-col>\n      </ion-row>  \n    </div>  \n    <br>\n  </ion-grid>\n\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"submitData()\" *ngIf=\"showEntryCard\">\n    <ion-card style=\"position: fixed;top:12%;left:3%;width:90%;overflow: auto;height: 80%;z-index: 12;\">\n      <ion-card-header style=\"border-bottom: 1px solid grey;\">    \n        <ion-card-title>GRN ID : {{currentRecord.grnid}}</ion-card-title>              \n      </ion-card-header>\n\n      <ion-grid id=\"grid\" class=\"appfont\">\n          <div style=\"overflow: auto;\">\n            <div style=\"width: 130%;\">\n              <ion-row style=\"border-bottom: 1px solid grey;text-align: center;\" class=\"bold\">\n                <ion-col size=\"4\">Paramater</ion-col>\n                <ion-col size=\"2\">Spec</ion-col>\n                <ion-col size=\"2\">Lower Limit</ion-col>\n                <ion-col size=\"2\">Upper Limit</ion-col>\n                <ion-col size=\"2\">Observation</ion-col>\n              </ion-row>\n              <ion-row *ngFor=\"let y of rmDetails; index as i\" style=\"font-weight: bold;text-align: center;border-bottom: 1px solid grey;\">\n                <ion-col size=\"4\" style=\"color:blue;\">{{y.paramname}}</ion-col>\n                <ion-col size=\"2\">{{y.paramspec}}</ion-col>\n                <ion-col size=\"2\" >{{y.paramllimit}}</ion-col> \n                <ion-col size=\"2\">{{y.paramulimit}}</ion-col>\n                <ion-col size=\"2\"><ion-input type=\"number\" min=\"0\" class=\"inputStyle\" value=\"{{y.paramval}}\" (ionChange)='onChangeOnservation(i,$event.target.value)' (click)=\"prefill(i,$event.target.value)\" (focusout)=\"blured(i,$event.target.value)\" #inputId></ion-input></ion-col>\n              </ion-row>  \n            </div>\n          </div>\n           <br/>\n          <ion-row>\n            <ion-col size=\"5\">\n              <ion-label class=\"bold\">Test Cert. Available?: </ion-label>\n            </ion-col>\n            <ion-col size=\"7\">             \n              <ion-radio-group value=\"{{tcIsAvaiable}}\" (ionChange)=\"tcRef($event.detail.value)\">\n                <ion-radio value=\"1\"></ion-radio>\n                <ion-label class=\"marginleft\">Yes</ion-label>\n                <ion-radio value=\"0\" class=\"marginleft\"></ion-radio>\n                <ion-label class=\"marginleft\">No</ion-label>\n              </ion-radio-group>              \n            </ion-col>\n          </ion-row>\n          \n          <ion-row *ngIf=\"tcIsAvaiable == '1'\">\n            <br>\n            <ion-col size=\"4\">\n              <ion-label class=\"bold\">Test Cert. Ref: </ion-label>\n            </ion-col>\n            <ion-col size=\"8\">\n              <ion-input type=\"text\" min=\"0\" class=\"inputStyle\" formControlName=\"tcref\"></ion-input>\n            </ion-col>\n          </ion-row>\n          <br/>\n          <ion-row>\n            <ion-col size=\"4\">\n              <ion-label class=\"bold\">Test Cert. Upload: </ion-label>\n            </ion-col>\n            <ion-col size=\"7\">             \n              <ion-input type=\"file\" name=\"file\" (change)=\"filesel($event,'tc')\" accept=\"image/jpeg,application/pdf\" #inputFile1></ion-input>\n              <!-- <ion-button color=\"danger\" (click)='clearTest()'>clear</ion-button>             -->\n            </ion-col>\n            <ion-col size=\"1\"><ion-icon name=\"close-circle-outline\" style=\"color:red;font-size: 1.5em;margin-top: 45%;\" (click)='clearTest()'></ion-icon> </ion-col>\n          </ion-row>\n          <br/>\n          <ion-row>\n            <ion-col size=\"4\">\n              <ion-label class=\"bold\">Invoice Upload: </ion-label>\n            </ion-col>\n            <ion-col size=\"7\">             \n              <ion-input type=\"file\" name=\"file\" (change)=\"filesel($event,'inv')\" accept=\"image/jpeg,application/pdf\" #inputFile2></ion-input> \n              <!-- <ion-button color=\"danger\" (click)='clearInv()'>clear</ion-button>      -->  \n            </ion-col>\n            <ion-col size=\"1\"><ion-icon name=\"close-circle-outline\" style=\"color:red;font-size: 1.5em;margin-top: 45%;\" (click)='clearInv()'></ion-icon> </ion-col>\n          </ion-row>\n          <br>\n          <ion-row>\n            <ion-col size=\"4\">\n              <ion-label class=\"bold\">Date of Exp.: </ion-label>\n            </ion-col>\n            <ion-col size=\"8\">\n              <!-- <ion-input type=\"date\" class=\"inputStyle\" inputmode=\"decimal\" formControlName=\"doe\" (click)=\"prefill('doe',$event)\" (focusout)=\"blured('doe',$event)\"></ion-input>  -->\n              <ion-datetime type=\"date\" display-format=\"DD-MM-YYYY\" class=\"inputStyle\" inputmode=\"decimal\" formControlName=\"doe\" max=\"2050-01-01\"></ion-datetime>\n              <ion-text *ngIf=\"submitted && f.doe.errors\">\n                <ion-text color=\"danger\" *ngIf=\"f.doe.errors.required\" style=\"font-size: 12px;float:right;font-weight: bold;\">*Required</ion-text>\n              </ion-text>       \n            </ion-col>\n          </ion-row>\n          <br>\n          <ion-row>\n            <ion-col size=\"4\">\n              <ion-label class=\"bold\">Raw material: </ion-label>\n            </ion-col>\n            <ion-col size=\"8\">             \n              <ion-radio-group value=\"{{isApproved}}\" (ionChange)=\"approval($event.detail.value)\">\n                <ion-radio value=\"1\"></ion-radio>\n                <ion-label class=\"marginleft\">Approved</ion-label>\n                <ion-radio value=\"0\" class=\"marginleft\"></ion-radio>\n                <ion-label class=\"marginleft\">Rejected</ion-label>\n              </ion-radio-group>              \n            </ion-col>\n          </ion-row>\n          <br>\n          <ion-row>\n            <ion-col size=\"4\">\n              <ion-label class=\"bold\">Received Qty: </ion-label>\n            </ion-col>\n            <ion-col size=\"8\">\n              <ion-input type=\"number\" min=\"0\" class=\"inputStyle\" formControlName=\"recvqty\" (click)=\"prefill('recvqty',$event)\" (focusout)=\"blured('recvqty',$event)\"></ion-input>\n              <ion-text *ngIf=\"submitted && f.recvqty.errors\">\n                <ion-text color=\"danger\" *ngIf=\"f.recvqty.errors.required\" style=\"font-size: 12px;float:right;font-weight: bold;\">*Required</ion-text>\n              </ion-text>  \n            </ion-col>\n          </ion-row>\n          <br>\n          <ion-row>\n            <ion-col size=\"4\">\n              <ion-label class=\"bold\">Approved Qty: </ion-label>\n            </ion-col>\n            <ion-col size=\"8\">\n              <ion-input type=\"number\" min=\"0\" class=\"inputStyle\" formControlName=\"appqty\" (click)=\"prefill('appqty',$event)\" (focusout)=\"blured('appqty',$event)\"></ion-input>\n            </ion-col>\n          </ion-row>\n          <br/>\n            <ion-textarea label=\"Outline textarea\" labelPlacement=\"floating\" fill=\"outline\" placeholder=\"Remarks\" formControlName=\"remarks\" style=\"border:1px solid #80808038\"></ion-textarea>\n          <br />\n          <!-- <ion-row>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label position=\"floating\" class=\"label\">PIN</ion-label>\n                <ion-input type=\"number\" inputmode=\"decimal\" formControlName=\"pin\" class=\"password\"></ion-input>\n              </ion-item> \n              <ion-text *ngIf=\"submitted && f.pin.errors\">\n                <ion-text color=\"danger\" *ngIf=\"f.pin.errors.required\" style=\"font-size: 12px;float:right;font-weight: bold;\">*Required</ion-text>\n              </ion-text>           \n            </ion-col>\n          </ion-row>\n          <br> -->\n          <ion-row>\n            <ion-col size=\"6\" push=\"2\">\n              <ion-button color=\"success\"  type=\"submit\" [disabled]=\"!registerForm.valid\">Submit</ion-button>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-button color=\"danger\" (click)='modaldismiss()'>Cancel</ion-button>\n            </ion-col>\n          </ion-row> \n      </ion-grid>\n    </ion-card>\n  </form>\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_rmqualitycheck_rmqualitycheck_module_ts.js.map