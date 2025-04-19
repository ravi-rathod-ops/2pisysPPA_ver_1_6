"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_purchaseorderplanning_purchaseorderplanning_module_ts"],{

/***/ 78504:
/*!*******************************************************************************!*\
  !*** ./src/app/purchaseorderplanning/purchaseorderplanning-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseorderplanningPageRoutingModule": () => (/* binding */ PurchaseorderplanningPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _purchaseorderplanning_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchaseorderplanning.page */ 97983);




const routes = [
    {
        path: '',
        component: _purchaseorderplanning_page__WEBPACK_IMPORTED_MODULE_0__.PurchaseorderplanningPage
    }
];
let PurchaseorderplanningPageRoutingModule = class PurchaseorderplanningPageRoutingModule {
};
PurchaseorderplanningPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PurchaseorderplanningPageRoutingModule);



/***/ }),

/***/ 40916:
/*!***********************************************************************!*\
  !*** ./src/app/purchaseorderplanning/purchaseorderplanning.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseorderplanningPageModule": () => (/* binding */ PurchaseorderplanningPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _purchaseorderplanning_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchaseorderplanning-routing.module */ 78504);
/* harmony import */ var _purchaseorderplanning_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchaseorderplanning.page */ 97983);







let PurchaseorderplanningPageModule = class PurchaseorderplanningPageModule {
};
PurchaseorderplanningPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _purchaseorderplanning_routing_module__WEBPACK_IMPORTED_MODULE_0__.PurchaseorderplanningPageRoutingModule
        ],
        declarations: [_purchaseorderplanning_page__WEBPACK_IMPORTED_MODULE_1__.PurchaseorderplanningPage]
    })
], PurchaseorderplanningPageModule);



/***/ }),

/***/ 97983:
/*!*********************************************************************!*\
  !*** ./src/app/purchaseorderplanning/purchaseorderplanning.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseorderplanningPage": () => (/* binding */ PurchaseorderplanningPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _purchaseorderplanning_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchaseorderplanning.page.html?ngResource */ 7925);
/* harmony import */ var _purchaseorderplanning_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchaseorderplanning.page.scss?ngResource */ 2950);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);









let PurchaseorderplanningPage = class PurchaseorderplanningPage {
    constructor(_elementRef, router, toastController, http, loadingController) {
        this._elementRef = _elementRef;
        this.router = router;
        this.toastController = toastController;
        this.http = http;
        this.loadingController = loadingController;
        this.brandImage = "";
        this.dataUrl = localStorage.getItem('url');
        this.tableData = [];
        this.tableData2 = [];
        this.tableDataTemp = [];
        this.flag = true;
        this.flag2 = true;
        this.purchaseDataModal = false;
        this.supplierArray = [];
        this.currencyList = [];
        this.locations = [];
        this.deleteData = [];
        this.modalDeleteData = false;
        this.modalDeleteData2 = false;
        this.modalDeleteData3 = false;
        this.dataArray = [];
        this.InsuranceValue = 0;
        this.FreightValue = 0;
        this.Remarks = "";
        this.Supplier = "";
        this.QuoteRef = "";
        this.Locations = "";
        this.deliverDate = "";
        this.ismaster = 0;
        this.forCurrency = 0;
        this.forCurrencyType = "";
        this.totalminstock = 0;
        this.ramClass = "";
        this.searchData = "";
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe('en-US');
        if (localStorage.getItem('userid') == null && localStorage.getItem('password') == null) {
            this.router.navigate(["home"]);
        }
        this.checkStorage();
    }
    sort(colName, flag) {
        if (this.flag) {
            this.tableData.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0);
            this.flag = false;
            return false;
        }
        if (!this.flag) {
            this.tableData = this.tableData.reverse();
            this.flag = true;
            return false;
        }
    }
    sort2(colName, flag) {
        if (this.flag2) {
            this.deleteData.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0);
            this.flag2 = false;
            return false;
        }
        if (!this.flag2) {
            this.deleteData = this.deleteData.reverse();
            this.flag2 = true;
            return false;
        }
    }
    ngOnInit() {
        this.brandImage = localStorage.getItem('brandImage');
        this.scan();
    }
    scan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
            this.http.get(this.dataUrl + "/api/raisepo/all", { headers }).subscribe({
                next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                    for (var key of Object.keys(data.message)) {
                        if (key != "forcurrs" && key != "locations") {
                            data.message[key].indentno = parseInt(data.message[key].indentno);
                            data.message[key].minstock = parseFloat(data.message[key].minstock);
                            data.message[key].stock = parseFloat(data.message[key].stock);
                            this.tableDataTemp.push(data.message[key]);
                            this.totalminstock += data.message[key].minstock;
                            console.log(data.message[key].stock);
                            if (data.message[key].indentno > 0 || data.message[key].minstock > data.message[key].stock) {
                                this.tableData.push(data.message[key]);
                                this.tableData2.push(data.message[key]);
                            }
                        }
                        if (key == "forcurrs") {
                            this.currencyList = data.message[key];
                        }
                        if (key == "locations") {
                            this.locations = data.message[key];
                        }
                    }
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
    editPO(obj) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.raisePO = {};
            this.InsuranceValue = 0;
            this.FreightValue = 0;
            this.Remarks = "";
            this.Supplier = "";
            this.QuoteRef = "";
            this.Locations = "";
            this.deliverDate = "";
            this.forJobWork = 0;
            this.ismaster = 0;
            this.forCurrency = 0;
            this.forCurrencyType = "";
            this.intentno = 0;
            this.ramClass = "";
            this.intentno = obj.indentno;
            this.ramClass = obj.ramclass;
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
            if (obj.indentno > 0) {
                this.http.get(this.dataUrl + "/api/raisepo/indentno/" + parseInt(obj.indentno), { headers }).subscribe({
                    next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                        console.log(data);
                        this.currentPO = data.message[0];
                        this.currentPO.ramapprovedrate = parseFloat(data.message[0].ramapprovedrate);
                        this.currentPO.ramorderqty = parseFloat(data.message[0].ramorderqty);
                        this.supplierArray = data.message["suppliers"];
                        if (this.supplierArray.length == 1) {
                            this.Supplier = this.supplierArray[0];
                        }
                        if (data.message[0].prevsupname != "") {
                            this.Supplier = data.message[0].prevsupname;
                        }
                        if (this.locations.length == 1) {
                            this.Locations = this.locations[0];
                        }
                        this.purchaseDataModal = true;
                        loading.dismiss();
                        setTimeout(() => {
                            let dd = new Date();
                            let ddc = dd.setDate(dd.getDate() + 7);
                            let d = this.datePipe.transform(ddc, 'yyyy-MM-dd');
                            document.getElementById("datefield").value = d;
                            this.deliverDate = d;
                            console.log(d);
                        }, 1000);
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
            }
            else {
                // if(obj.ramclass != ""){
                if (obj.ramclass == "CPD") {
                    this.http.get(this.dataUrl + "/api/raisepo/cpdid/" + obj.ramid, { headers }).subscribe({
                        next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                            console.log(data);
                            this.currentPO = data.message[0];
                            this.currentPO.ramapprovedrate = parseFloat(data.message[0].ramapprovedrate);
                            this.currentPO.ramorderqty = parseFloat(data.message[0].ramorderqty);
                            this.supplierArray = data.message["suppliers"];
                            this.currentPO["ismaster"] == 1 ? this.ismaster = 1 : this.ismaster = 0;
                            if (this.supplierArray.length == 1) {
                                this.Supplier = this.supplierArray[0];
                            }
                            if (data.message[0].prevsupname != "") {
                                this.Supplier = data.message[0].prevsupname;
                            }
                            if (this.locations.length == 1) {
                                this.Locations = this.locations[0];
                            }
                            this.purchaseDataModal = true;
                            loading.dismiss();
                            setTimeout(() => {
                                let dd = new Date();
                                let ddc = dd.setDate(dd.getDate() + 7);
                                let d = this.datePipe.transform(ddc, 'yyyy-MM-dd');
                                document.getElementById("datefield").value = d;
                                this.deliverDate = d;
                                console.log(d);
                            }, 1000);
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
                }
                else if (obj.ramclass == "CMPD") {
                    this.http.get(this.dataUrl + "/api/raisepo/cmpdid/" + obj.ramid, { headers }).subscribe({
                        next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                            console.log(data);
                            this.currentPO = data.message[0];
                            this.currentPO.ramapprovedrate = parseFloat(data.message[0].ramapprovedrate);
                            this.currentPO.ramorderqty = parseFloat(data.message[0].ramorderqty);
                            this.supplierArray = data.message["suppliers"];
                            this.currentPO["ismaster"] == 1 ? this.ismaster = 1 : this.ismaster = 0;
                            if (this.supplierArray.length == 1) {
                                this.Supplier = this.supplierArray[0];
                            }
                            if (data.message[0].prevsupname != "") {
                                this.Supplier = data.message[0].prevsupname;
                            }
                            if (this.locations.length == 1) {
                                this.Locations = this.locations[0];
                            }
                            this.purchaseDataModal = true;
                            loading.dismiss();
                            setTimeout(() => {
                                let dd = new Date();
                                let ddc = dd.setDate(dd.getDate() + 7);
                                let d = this.datePipe.transform(ddc, 'yyyy-MM-dd');
                                document.getElementById("datefield").value = d;
                                this.deliverDate = d;
                                console.log(d);
                            }, 1000);
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
                }
                else {
                    this.http.get(this.dataUrl + "/api/raisepo/ramid/" + obj.ramid, { headers }).subscribe({
                        next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                            console.log(data);
                            this.currentPO = data.message[0];
                            this.currentPO.ramapprovedrate = parseFloat(data.message[0].ramapprovedrate);
                            this.currentPO.ramorderqty = parseFloat(data.message[0].ramorderqty);
                            this.supplierArray = data.message["suppliers"];
                            this.currentPO["ismaster"] == 1 ? this.ismaster = 1 : this.ismaster = 0;
                            if (this.supplierArray.length == 1) {
                                this.Supplier = this.supplierArray[0];
                            }
                            if (data.message[0].prevsupname != "") {
                                this.Supplier = data.message[0].prevsupname;
                            }
                            if (this.locations.length == 1) {
                                this.Locations = this.locations[0];
                            }
                            this.purchaseDataModal = true;
                            loading.dismiss();
                            setTimeout(() => {
                                let dd = new Date();
                                let ddc = dd.setDate(dd.getDate() + 7);
                                let d = this.datePipe.transform(ddc, 'yyyy-MM-dd');
                                document.getElementById("datefield").value = d;
                                this.deliverDate = d;
                                console.log(d);
                            }, 1000);
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
                }
                // }
            }
        });
    }
    raisePurchaseOrder() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.forJobWork) {
                if (this.ismaster) {
                    this.raisePO = {
                        "ramid": this.currentPO.ramid,
                        "indentno": this.intentno,
                        "supplier": this.Supplier,
                        "expdate": this.deliverDate,
                        "quoteref": this.QuoteRef,
                        "location": this.Locations,
                        "quantity": this.currentPO.ramorderqty,
                        "isjobwork": 1,
                        "remarks": this.Remarks,
                        "ismaster": 1,
                        "ramclass": this.ramClass
                    };
                }
                else {
                    this.raisePO = {
                        "ramid": this.currentPO.ramid,
                        "indentno": this.intentno,
                        "supplier": this.Supplier,
                        "expdate": this.deliverDate,
                        "quoteref": this.QuoteRef,
                        "location": this.Locations,
                        "quantity": this.currentPO.ramorderqty,
                        "isjobwork": 1,
                        "remarks": this.Remarks,
                        "ramclass": this.ramClass
                    };
                }
            }
            else {
                if (this.ismaster) {
                    this.raisePO = {
                        "ramid": this.currentPO.ramid,
                        "indentno": this.intentno,
                        "supplier": this.Supplier,
                        "expdate": this.deliverDate,
                        "quoteref": this.QuoteRef,
                        "location": this.Locations,
                        "quantity": this.currentPO.ramorderqty,
                        "isjobwork": 0,
                        "frcurr": this.forCurrencyType,
                        "frrate": this.forCurrency,
                        "rate": this.currentPO.ramapprovedrate,
                        "insurance": this.InsuranceValue,
                        "freight": this.FreightValue,
                        "remarks": this.Remarks,
                        "ismaster": 1,
                        "ramclass": this.ramClass
                    };
                }
                else {
                    this.raisePO = {
                        "ramid": this.currentPO.ramid,
                        "indentno": this.intentno,
                        "supplier": this.Supplier,
                        "expdate": this.deliverDate,
                        "quoteref": this.QuoteRef,
                        "location": this.Locations,
                        "quantity": this.currentPO.ramorderqty,
                        "isjobwork": 0,
                        "frcurr": this.forCurrencyType,
                        "frrate": this.forCurrency,
                        "rate": this.currentPO.ramapprovedrate,
                        "insurance": this.InsuranceValue,
                        "freight": this.FreightValue,
                        "remarks": this.Remarks,
                        "ramclass": this.ramClass
                    };
                }
            }
            console.log(this.raisePO);
            const headers = {
                'auth-id': localStorage.getItem('authid'),
                'client-id': localStorage.getItem('clientid'),
                'user': localStorage.getItem('userid'),
                'password': localStorage.getItem('password')
            };
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                spinner: 'dots'
            });
            yield loading.present();
            this.http.post(this.dataUrl + '/api/raisepo', this.raisePO, { headers }).subscribe({
                next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                    if (data.status == "success") {
                        loading.dismiss();
                        this.toastfunction(data.message, "success");
                        this.purchaseDataModal = false;
                        this.modalDeleteData3 = false;
                        this.tableData = [];
                        this.tableData2 = [];
                        this.tableDataTemp = [];
                        this.searchData = "";
                        this.scan();
                    }
                    else {
                        loading.dismiss();
                        this.toastfunction(data.message, "danger");
                        this.purchaseDataModal = false;
                        this.modalDeleteData3 = false;
                    }
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
    deleteList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const headers = {
                'auth-id': localStorage.getItem('authid'),
                'client-id': localStorage.getItem('clientid'),
                'user': localStorage.getItem('userid'),
                'password': localStorage.getItem('password')
            };
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                spinner: 'dots'
            });
            yield loading.present();
            this.http.get(this.dataUrl + '/api/cancelpo', { headers }).subscribe({
                next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                    if (data.status == "success") {
                        data.message.forEach(element => {
                            element.quantity = parseFloat(element.quantity);
                            element.recQty = parseFloat(element.recQty);
                        });
                        this.deleteData = data.message;
                        this.modalDeleteData = true;
                        loading.dismiss();
                    }
                    else {
                        loading.dismiss();
                        this.modalDeleteData = false;
                    }
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
    deletePOItem() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const headers = {
                'auth-id': localStorage.getItem('authid'),
                'client-id': localStorage.getItem('clientid'),
                'user': localStorage.getItem('userid'),
                'password': localStorage.getItem('password')
            };
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                spinner: 'dots'
            });
            yield loading.present();
            this.http.post(this.dataUrl + '/api/cancelpo/' + this.currentItem.purId, "", { headers }).subscribe({
                next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                    if (data.status == "success") {
                        loading.dismiss();
                        this.toastfunction(data.message, "success");
                        this.deleteList();
                        this.modalDeleteData2 = false;
                    }
                    else {
                        loading.dismiss();
                        this.toastfunction(data.message, "danger");
                        this.modalDeleteData2 = false;
                    }
                }),
                error: errordata => {
                    if (errordata.error.message) {
                        loading.dismiss();
                        this.toastfunction(errordata.error.message, "danger");
                    }
                    else {
                        loading.dismiss();
                        this.toastfunction("Invalid Company Url, Please Check in Home page", "danger");
                    }
                }
            });
        });
    }
    callDeflashing(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.currentItem = data;
            this.modalDeleteData2 = true;
        });
    }
    callPurchase() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.Supplier == "") {
                this.toastfunction("Please Select Supplier", "danger");
                return false;
            }
            if (this.Locations == "") {
                this.toastfunction("Please Select Location", "danger");
                return false;
            }
            this.modalDeleteData3 = true;
        });
    }
    navBack() {
        this.router.navigate(['home']);
    }
    applyFilter(filterValue) {
        let filterValueLower = filterValue.toLowerCase();
        if (filterValue === '') {
            this.tableData = this.tableData2;
        }
        else {
            if (filterValue.length >= 3) {
                this.tableData = this.tableDataTemp.filter((employee) => employee.ramname.toLowerCase().includes(filterValueLower) ||
                    employee.ramgrade.toLowerCase().includes(filterValueLower) ||
                    employee.uom.toLowerCase().includes(filterValueLower)
                // employee.minstock.includes(filterValueLower) ||
                // employee.stock.includes(filterValueLower)
                );
            }
        }
    }
};
PurchaseorderplanningPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
PurchaseorderplanningPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-purchaseorderplanning',
        template: _purchaseorderplanning_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_purchaseorderplanning_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PurchaseorderplanningPage);



/***/ }),

/***/ 2950:
/*!**********************************************************************************!*\
  !*** ./src/app/purchaseorderplanning/purchaseorderplanning.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = ".reports-table {\n  overflow-x: auto;\n}\n\n.inventory-content {\n  background-color: #f0f1f2;\n}\n\n.headers {\n  color: #454f63;\n  font-family: \"Open Sans\";\n  font-weight: bold;\n  font-size: 14px;\n  margin-top: 0px;\n  word-wrap: break-word;\n}\n\n.border,\n.single-border {\n  border-bottom: 2px solid #989898;\n}\n\n.single-border {\n  padding-top: 12px;\n}\n\n.content {\n  color: #454f63;\n  font-family: \"Open Sans\";\n  font-size: 12px;\n}\n\n#datePicker {\n  background: white;\n  border: 1px solid #0000001f;\n}\n\n/* Modal Header */\n\n.modal-header {\n  padding: 1px 15px;\n  background-color: #00709c;\n  color: white;\n}\n\n/* Modal Footer */\n\n.modal-footer {\n  padding: 2px 16px;\n  color: white;\n}\n\n/* Modal Content */\n\n.modal-content {\n  z-index: 2;\n  position: absolute;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  width: 98%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  top: 1%;\n  margin-left: 1%;\n}\n\n.modal-content2 {\n  z-index: 6;\n  position: absolute;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  width: 48%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  top: 30%;\n  margin-left: 24%;\n}\n\n.modal-content3 {\n  z-index: 10;\n  position: absolute;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  width: 48%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  top: 30%;\n  margin-left: 24%;\n}\n\n/* The Close Button */\n\n.close {\n  color: white;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n/* Add Animation */\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n\n.label {\n  color: grey;\n}\n\n.inputStyle {\n  border-bottom: 1px solid grey;\n  padding: 5px 0px !important;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n}\n\n.selectdd {\n  background: white;\n  border: 0;\n  width: 100%;\n  border-bottom: 1px solid grey;\n}\n\n.selectdddate {\n  background: #d9d9dd;\n  border: 0;\n  width: 60%;\n  border-bottom: 1px solid grey;\n}\n\nion-row.ios.hydrated {\n  padding-bottom: 0%;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 0px;\n  --padding-end: 0;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlb3JkZXJwbGFubmluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVFOztFQUVFLGdDQUFBO0FBQ0o7O0FBR0U7RUFDRSxpQkFBQTtBQUFKOztBQUlFO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQURKOztBQUtFO0VBQ0UsaUJBQUE7RUFDQSwyQkFBQTtBQUZKOztBQUtBLGlCQUFBOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFGRjs7QUFNQSxpQkFBQTs7QUFDQTtFQUNFLGlCQUFBO0VBRUEsWUFBQTtBQUpGOztBQU9BLGtCQUFBOztBQUNBO0VBQ0UsVUFBQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSw0RUFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtBQUpKOztBQU9BO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSw0RUFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFRQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsNEVBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FBTEY7O0FBT0EscUJBQUE7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUpGOztBQU9BLGtCQUFBOztBQUNBO0VBQ0U7SUFBTSxXQUFBO0lBQWEsVUFBQTtFQUZuQjtFQUdBO0lBQUksTUFBQTtJQUFRLFVBQUE7RUFDWjtBQUNGOztBQUNBO0VBQ0UsV0FBQTtBQUNGOztBQUdBO0VBQ0UsNkJBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0Esa0JBQUE7RUFFRyxxQkFBQTtBQURIOztBQU1BO0VBQ0UsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FBSEY7O0FBTUE7RUFDRSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQUpGIiwiZmlsZSI6InB1cmNoYXNlb3JkZXJwbGFubmluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVwb3J0cy10YWJsZSB7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmludmVudG9yeS1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYxZjI7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVycyB7XHJcbiAgICBjb2xvcjogIzQ1NGY2MztcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgfVxyXG5cclxuICAuYm9yZGVyLFxyXG4gIC5zaW5nbGUtYm9yZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjOTg5ODk4O1xyXG5cclxuICB9XHJcblxyXG4gIC5zaW5nbGUtYm9yZGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIGNvbG9yOiAjNDU0ZjYzO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgI2RhdGVQaWNrZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAxZjtcclxufVxyXG5cclxuLyogTW9kYWwgSGVhZGVyICovXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDFweCAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDcwOWM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuLyogTW9kYWwgRm9vdGVyICovXHJcbi5tb2RhbC1mb290ZXIge1xyXG4gIHBhZGRpbmc6IDJweCAxNnB4O1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICM1Y2I4NWM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBNb2RhbCBDb250ZW50ICovXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICB6LWluZGV4OiAyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiKDAgMCAwIC8gMjAlKSwgMCA2cHggMjBweCAwIHJnYigwIDAgMCAvIDE5JSk7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIHRvcDogMSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50MiB7XHJcbiAgei1pbmRleDogNjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogNDglO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYigwIDAgMCAvIDIwJSksIDAgNnB4IDIwcHggMCByZ2IoMCAwIDAgLyAxOSUpO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICB0b3A6IDMwJTtcclxuICBtYXJnaW4tbGVmdDogMjQlO1xyXG59XHJcblxyXG5cclxuLm1vZGFsLWNvbnRlbnQzIHtcclxuICB6LWluZGV4OiAxMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogNDglO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYigwIDAgMCAvIDIwJSksIDAgNnB4IDIwcHggMCByZ2IoMCAwIDAgLyAxOSUpO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICB0b3A6IDMwJTtcclxuICBtYXJnaW4tbGVmdDogMjQlO1xyXG59XHJcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cclxuLmNsb3NlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLyogQWRkIEFuaW1hdGlvbiAqL1xyXG5Aa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xyXG4gIGZyb20ge3RvcDogLTMwMHB4OyBvcGFjaXR5OiAwfVxyXG4gIHRvIHt0b3A6IDA7IG9wYWNpdHk6IDF9XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgLy8gdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmlucHV0U3R5bGV7XHJcbiAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgZ3JleTtcclxuICBwYWRkaW5nOiA1cHggMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zYy1pb24taW5wdXQtaW9zLWgge1xyXG4tLXBhZGRpbmctdG9wOiAwcHg7IFxyXG4gXHJcbiAgIC0tcGFkZGluZy1ib3R0b206IDBweDsgXHJcbiBcclxufVxyXG5cclxuXHJcbi5zZWxlY3RkZHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXI6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcbn1cclxuXHJcbi5zZWxlY3RkZGRhdGUge1xyXG4gIGJhY2tncm91bmQ6ICNkOWQ5ZGQ7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcbn1cclxuXHJcbmlvbi1yb3cuaW9zLmh5ZHJhdGVkIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMCU7XHJcbn1cclxuXHJcblxyXG4uc2MtaW9uLWlucHV0LW1kLWgge1xyXG4gIC0tcGFkZGluZy10b3A6IDBweDtcclxuICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxufSJdfQ== */";

/***/ }),

/***/ 7925:
/*!**********************************************************************************!*\
  !*** ./src/app/purchaseorderplanning/purchaseorderplanning.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-img src=\"{{brandImage}}\" style=\"height: 50px;width:50px\" slot=\"start\"></ion-img>               \n    <div style=\"display: flex;justify-content: center;\">\n      <img src=\"./assets/image/receipt.png\" height=\"25\" width=\"25\">\n      <b style=\"font-size: 20px;\">&nbsp;&nbsp;Purchase Order</b>\n    </div>\n    <ion-back-button defaultHref=\"Planhome\" slot=\"end\"></ion-back-button>   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row nowrap class=\"ion-align-items-center\">\n        <ion-col size=\"9\">        \n          <ion-input (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\" [(ngModel)]=\"searchData\"><ion-icon name=\"search\"></ion-icon></ion-input>\n        </ion-col> \n        <ion-col size=\"1\"><ion-button color=\"danger\" size=\"small\" (click)=\"deleteList()\">Delete</ion-button></ion-col>      \n    </ion-row>\n  </ion-grid>\n\n  <div class=\"reports-table\">\n    <ion-grid>\n      <ion-row nowrap class=\"headers\">\n        <ion-col size=\"4\" class=\"single-border\" tappable (click)=\"sort('ramname',false)\">\n          Name ({{tableData.length}})\n        </ion-col>\n        <ion-col size=\"4\" class=\"single-border\" (click)=\"sort('ramgrade',false)\">\n          Grade\n        </ion-col>\n        <!-- <ion-col size=\"1\" class=\"single-border\" (click)=\"sort('uom',false)\">\n          \n        </ion-col> -->\n        <ion-col size=\"2\" class=\"single-border\" (click)=\"sort('minstock',false)\" style=\"font-size: 85%;\">\n          Rty \n        </ion-col>\n        <ion-col size=\"1\" class=\"single-border\" style=\"font-size: small;\" (click)=\"sort('stock',false)\">\n          Stk \n        </ion-col>\n        <ion-col size=\"1\" class=\"single-border\">\n          <!-- Raise PO -->\n        </ion-col>\n      </ion-row>\n      <div style=\"height: 75vh; overflow: scroll;\">\n        <ion-row nowrap class=\"content\" *ngFor=\"let x of tableData\">\n          <ion-col size=\"4\"> {{ x.ramname }}</ion-col>\n          <ion-col size=\"4\"> {{ x.ramgrade }} <b>({{ x.uom }})</b></ion-col>\n          <!-- <ion-col size=\"1\"> {{ x.uom }} </ion-col> -->\n          <ion-col size=\"2\" style=\"font-size: medium;\"> <span *ngIf=\"x.indentno == 0\">{{ x.minstock }} </span> <span *ngIf=\"x.indentno > 0\">0</span></ion-col>\n          <ion-col size=\"1\" style=\"text-align: right;font-size: medium;\"> {{ x.stock }} </ion-col>\n          <ion-col size=\"1\" (click)=\"editPO(x)\" style=\"font-size: 18px;color:#00709c\"> <ion-icon name=\"receipt-outline\"></ion-icon></ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"tableData.length == 0\">\n          <ion-col size=\"6\" offset=\"4\"> No Records Found</ion-col>\n        </ion-row>\n      </div>\n    </ion-grid>\n  </div>\n\n\n  <div class=\"modal-content\" *ngIf=\"purchaseDataModal\">\n    <div class=\"modal-header\">\n      <span class=\"close\" (click)=\"purchaseDataModal=!purchaseDataModal\">&times;</span>\n      <p style=\"margin: 8px 5px;\">Purchase Order</p>\n    </div>\n    <div class=\"modal-body\" style=\"font-size: smaller;\">\n\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"label\">Raw Material</ion-col>\n          <ion-col><b>{{currentPO.ramname}}</b></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"label\">Grade</ion-col>\n          <ion-col><b>{{currentPO.ramgrade}}</b></ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"currentPO.iscpd == 1\">\n          <ion-col class=\"label\">IsMaster</ion-col>\n          <ion-col><ion-checkbox type=\"checkbox\" [(ngModel)]=\"ismaster\" [checked] = \"ismaster\"></ion-checkbox></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"label\">Supplier</ion-col>\n          <ion-col>\n            <select class=\"selectdd\" [(ngModel)]=\"Supplier\">\n              <option value=\"\">Select Supplier</option>\n              <option *ngFor=\"let x of supplierArray\" value=\"{{x}}\">{{x}}</option>\n            </select>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"intentno == 0\">\n          <ion-col class=\"label\">Previous GRN Ref</ion-col>\n          <ion-col><b>{{currentPO.prevgrn}} <span *ngIf=\"currentPO.prevgrndate != ''\">dated: {{currentPO.prevgrndate}}</span></b></ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"intentno > 0\">\n          <ion-col class=\"label\">Fabric Details</ion-col>\n          <ion-col><b>{{currentPO.prevgrn}}</b></ion-col>\n        </ion-row>\n        <ion-row>          \n          <ion-col class=\"label\">Quote Reference</ion-col>\n          <ion-col><ion-input type=\"text\" class=\"inputStyle\" placeholder=\"Verbal\" [(ngModel)]=\"QuoteRef\"></ion-input></ion-col>  \n        </ion-row>\n        <ion-row>\n          <ion-col class=\"label\">Delivery At</ion-col>\n          <ion-col>\n            <select class=\"selectdd\" [(ngModel)]=\"Locations\">\n              <option value=\"\">Select Location</option>\n              <option *ngFor=\"let x of locations\" value=\"{{x}}\">{{x}}</option>             \n            </select>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"intentno == 0\">\n          <ion-col class=\"label\" >Standard Packing Quantity</ion-col>         \n          <ion-col>{{currentPO.ramstdpacking}} {{currentPO.ramuom}}</ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"intentno > 0\">          \n          <ion-col class=\"label\" >Quanity/Roll</ion-col>\n          <ion-col>{{currentPO.ramstdpacking}} Kg</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"label\">Quantity</ion-col>\n          <ion-col  *ngIf=\"intentno == 0\"><ion-input type=\"number\" class=\"inputStyle\" [(ngModel)]=\"currentPO.ramorderqty\"></ion-input></ion-col>\n          <ion-col size=\"5\" *ngIf=\"intentno > 0\"><ion-input type=\"number\" class=\"inputStyle\" [(ngModel)]=\"currentPO.ramorderqty\" disabled></ion-input></ion-col>\n          <ion-col size=\"1\" *ngIf=\"intentno > 0\">Kg</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"label\">Delivery Date</ion-col>\n          <ion-col><input type=\"date\" class=\"selectdddate\" [(ngModel)]=\"deliverDate\" id=\"datefield\"/></ion-col>\n        </ion-row>\n       \n        <ion-row>\n          <ion-col class=\"label\">For Jobwork</ion-col>\n          <ion-col><ion-checkbox type=\"checkbox\" [(ngModel)]=\"forJobWork\"></ion-checkbox></ion-col>\n        </ion-row>\n\n        <div *ngIf=\"!forJobWork\">\n          <ion-row>\n            <ion-col class=\"label\">Foreign Curr. Rate (If App.)</ion-col>\n            <ion-col>\n              <ion-row>\n                  <ion-col> <ion-input type=\"number\" class=\"inputStyle\" placeholder=\"0.00\" [(ngModel)]=\"forCurrency\"></ion-input></ion-col>\n                  <ion-col>\n                    <select class=\"selectdd\" [(ngModel)]=\"forCurrencyType\" style=\"position: relative;top: 8px;\">\n                      <option value=\"\">Type</option>\n                      <option *ngFor=\"let x of currencyList\" value=\"{{x}}\">{{x}}</option>   \n                    </select>\n                  </ion-col>\n                </ion-row>            \n              </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"label\">Rate</ion-col>\n            <ion-col><ion-input type=\"number\" class=\"inputStyle\" [(ngModel)]=\"currentPO.ramapprovedrate\"></ion-input></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"label\">Value</ion-col>\n            <ion-col><ion-input type=\"text\"  class=\"inputStyle\" value=\"{{currentPO.ramapprovedrate * currentPO.ramorderqty}}\" disabled=\"\"></ion-input></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"label\">Insurance</ion-col>\n            <ion-col><ion-input type=\"number\"  class=\"inputStyle\" [(ngModel)]=\"InsuranceValue\"></ion-input></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"label\">Freight Value</ion-col>\n            <ion-col><ion-input type=\"number\"  class=\"inputStyle\" [(ngModel)]=\"FreightValue\"></ion-input></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"label\">Order Value</ion-col>\n            <ion-col><ion-input type=\"text\"  class=\"inputStyle\" value=\"{{(currentPO.ramapprovedrate * currentPO.ramorderqty)+(InsuranceValue+FreightValue)}}\" disabled=\"\"></ion-input></ion-col>\n          </ion-row>\n        </div>  \n          <ion-row>        \n            <ion-col class=\"label\">Remarks</ion-col>\n            <ion-col><ion-textarea style=\"border: 1px solid grey;\" [(ngModel)]=\"Remarks\"></ion-textarea></ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </div>\n    <div class=\"modal-footer\" style=\"float: right;\">\n      <ion-button color=\"success\" size=\"small\" (click)=\"callPurchase()\">Generate</ion-button>\n      <ion-button color=\"medium\" size=\"small\" (click)=\"purchaseDataModal=!purchaseDataModal\">Close</ion-button>   \n    </div>\n  </div>\n\n    <!-- Modal content -->\n<div class=\"modal-content\" *ngIf=\"modalDeleteData\">\n  <div class=\"modal-header\">\n    <span class=\"close\" (click)=\"modalDeleteData=!modalDeleteData\">&times;</span>\n    <p style=\"margin: 8px 5px;\">Purchase Order</p>\n  </div>\n  <div class=\"modal-body\">\n    <ion-grid>\n      <ion-row nowrap class=\"headers\" style=\"font-size: x-small;\">\n        <ion-col size=\"2\" class=\"single-border\" (click)=\"sort2('purId',false)\">\n          PO ID ({{deleteData.length}})\n        </ion-col>\n        <ion-col size=\"2\" class=\"single-border\" (click)=\"sort2('purDate',false)\">\n          PO Date\n        </ion-col>\n        <ion-col size=\"2\" class=\"single-border\" (click)=\"sort2('description',false)\">\n         RM Name\n        </ion-col>       \n        <ion-col size=\"1\" class=\"single-border\" (click)=\"sort2('grade',false)\">\n          RM Grade Qty\n         </ion-col>\n         <ion-col size=\"2\" class=\"single-border\" (click)=\"sort2('supName',false)\">\n          Supplier\n         </ion-col>\n         <ion-col size=\"1\" class=\"single-border\" (click)=\"sort2('quantity',false)\">\n          PO Qty\n         </ion-col>\n         <ion-col size=\"1\" class=\"single-border\" (click)=\"sort2('quantity',false)\">\n          Pen. Qty\n         </ion-col>\n        <ion-col size=\"1\" class=\"single-border\">\n          <!-- Action -->\n        </ion-col>\n      </ion-row>\n      <div style=\"height: 70vh; overflow: scroll;font-size: x-small;\">\n        <ion-row nowrap class=\"content\" *ngFor=\"let x of deleteData\">\n          <ion-col size=\"2\"> {{ x.purId }}</ion-col>\n          <ion-col size=\"2\"> {{ x.purDate }} </ion-col>\n          <ion-col size=\"2\"> {{ x.description }} </ion-col>\n          <ion-col size=\"1\"> {{ x.grade }} </ion-col>\n          <ion-col size=\"2\"> {{ x.supName }} </ion-col>      \n          <ion-col size=\"1\"> {{ x.quantity }} </ion-col>      \n          <ion-col size=\"1\"> {{ x.quantity-x.recQty }} </ion-col>        \n          <ion-col size=\"1\" style=\"text-align: center;\"> <ion-icon name=\"trash-outline\" (click)=\"callDeflashing(x)\" style=\"color:red\"></ion-icon></ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"deleteData.length == 0\">\n          <ion-col size=\"6\" offset=\"4\"> No Records Found</ion-col>\n        </ion-row>\n      </div>\n    </ion-grid>\n  </div>\n</div>\n\n\n<div class=\"modal-content2\" *ngIf=\"modalDeleteData2\">\n  <div class=\"modal-header\">\n    <span class=\"close\" (click)=\"modalDeleteData2=!modalDeleteData2\">&times;</span>\n    <p style=\"margin: 8px 5px;\">Delete</p>\n  </div>\n  <div class=\"modal-body\" style=\"text-align: center;\">\n    <br>\n    Are You Sure Want to Delete?\n    <br>\n    <br>\n  </div>\n  <div class=\"modal-footer\" style=\"float: right;\">\n    <ion-button color=\"success\" size=\"small\" (click)=\"deletePOItem()\">Yes</ion-button>\n    <ion-button color=\"danger\" size=\"small\" (click)=\"modalDeleteData2=!modalDeleteData2\">No</ion-button>   \n  </div>\n</div>\n\n\n<div class=\"modal-content3\" *ngIf=\"modalDeleteData3\">\n  <div class=\"modal-header\">\n    <span class=\"close\" (click)=\"modalDeleteData3=!modalDeleteData3\">&times;</span>\n    <p style=\"margin: 8px 5px;\">Raise PO</p>\n  </div>\n  <div class=\"modal-body\" style=\"text-align: center;\">\n    <br>\n    Are You Sure to Create the Purchase Order?\n    <br>\n    <br>\n  </div>\n  <div class=\"modal-footer\" style=\"float: right;\">\n    <ion-button color=\"success\" size=\"small\" (click)=\"raisePurchaseOrder()\">Ok</ion-button>\n    <ion-button color=\"medium\" size=\"small\" (click)=\"modalDeleteData3=!modalDeleteData3\">Cancel</ion-button>   \n  </div>\n</div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_purchaseorderplanning_purchaseorderplanning_module_ts.js.map