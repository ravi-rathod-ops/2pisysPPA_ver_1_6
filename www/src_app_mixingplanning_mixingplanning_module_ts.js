"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_mixingplanning_mixingplanning_module_ts"],{

/***/ 51324:
/*!*****************************************************************!*\
  !*** ./src/app/mixingplanning/mixingplanning-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MixingplanningPageRoutingModule": () => (/* binding */ MixingplanningPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _mixingplanning_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixingplanning.page */ 67906);




const routes = [
    {
        path: '',
        component: _mixingplanning_page__WEBPACK_IMPORTED_MODULE_0__.MixingplanningPage
    }
];
let MixingplanningPageRoutingModule = class MixingplanningPageRoutingModule {
};
MixingplanningPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MixingplanningPageRoutingModule);



/***/ }),

/***/ 3494:
/*!*********************************************************!*\
  !*** ./src/app/mixingplanning/mixingplanning.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MixingplanningPageModule": () => (/* binding */ MixingplanningPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _mixingplanning_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixingplanning-routing.module */ 51324);
/* harmony import */ var _mixingplanning_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixingplanning.page */ 67906);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ 25073);









let MixingplanningPageModule = class MixingplanningPageModule {
};
MixingplanningPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mixingplanning_routing_module__WEBPACK_IMPORTED_MODULE_0__.MixingplanningPageRoutingModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_mixingplanning_page__WEBPACK_IMPORTED_MODULE_1__.MixingplanningPage]
    })
], MixingplanningPageModule);



/***/ }),

/***/ 67906:
/*!*******************************************************!*\
  !*** ./src/app/mixingplanning/mixingplanning.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MixingplanningPage": () => (/* binding */ MixingplanningPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _mixingplanning_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixingplanning.page.html?ngResource */ 34533);
/* harmony import */ var _mixingplanning_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixingplanning.page.scss?ngResource */ 33390);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ 6222);










let MixingplanningPage = class MixingplanningPage {
    constructor(router, screenOrientation, toastController, http, loadingController) {
        this.router = router;
        this.screenOrientation = screenOrientation;
        this.toastController = toastController;
        this.http = http;
        this.loadingController = loadingController;
        this.brandImage = "";
        this.dataUrl = localStorage.getItem('url');
        this.tableData = [];
        this.deleteData = [];
        this.tableDataTemp = [];
        // currentDate=formatDate(new Date, 'yyyy-MM-dd', 'en');
        this.dataArray = [];
        this.locationArray = [];
        this.postData = {
            "mixdate": "",
            "location": "",
            "shift": null,
            "iteminfo": this.dataArray
        };
        this.flag = true;
        this.flag2 = true;
        this.modalDeleteData = false;
        this.modalDeleteData2 = false;
        this.modalDeleteData3 = false;
        this.shiftArray = [];
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe('en-US');
        this.totalpolywgt = 0;
        this.totalbatchwgt = 0;
        this.totalbatch = 0;
        this.searchData = "";
        this.mode = "";
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
        // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    }
    onChangeValueAll(event) {
        var items = document.querySelectorAll(".direct");
        if (event.detail.checked) {
            for (let i = 0; i < items.length; i++) {
                let element = items[i];
                element.checked = 'true';
                this.tableData[i].directfinal = 1;
            }
        }
        else {
            for (let i = 0; i < items.length; i++) {
                let element = items[i];
                element.checked = 'false';
                this.tableData[i].directfinal = 0;
            }
        }
    }
    onChangeValue(data, index, item, type) {
        if (type == "weight") {
            let batchwgt = (item.batchtotwgt * parseFloat(data.target.value) * item.basepolyratio) / item.polywgt;
            this.tableData.map((x) => {
                if (x.cpdname === item.cpdname) {
                    x.batchwgt = parseFloat(batchwgt.toFixed(3));
                    x.stdbasepolywgt = parseFloat(data.target.value);
                }
            });
            this.tableDataTemp.map((x) => {
                if (x.cpdname === item.cpdname) {
                    x.batchwgt = parseFloat(batchwgt.toFixed(3));
                    x.stdbasepolywgt = parseFloat(data.target.value);
                }
            });
            // this.tableData[index].batchwgt = parseFloat(batchwgt.toFixed(3));   
            // this.tableData[index].stdbasepolywgt = parseFloat(data.target.value);
            // this.tableDataTemp[index].batchwgt = parseFloat(batchwgt.toFixed(3));   
            // this.tableDataTemp[index].stdbasepolywgt = parseFloat(data.target.value);   
        }
        if (type == "batch") {
            // this.tableData[index].noofbatch = parseInt(data.target.value);
            // this.tableDataTemp[index].noofbatch = parseInt(data.target.value);
            if (data.target.value != "NaN" && data.target.value != "") {
                this.totalbatch = 0;
                this.tableData.map((x) => {
                    if (x.cpdname === item.cpdname) {
                        x.noofbatch = parseInt(data.target.value);
                    }
                    this.totalbatch += x.noofbatch;
                });
            }
            if (data.target.value != "NaN" && data.target.value != "") {
                this.totalbatch = 0;
                this.tableDataTemp.map((x) => {
                    if (x.cpdname === item.cpdname) {
                        x.noofbatch = parseInt(data.target.value);
                    }
                    this.totalbatch += x.noofbatch;
                });
            }
        }
        if (type == "directfinal") {
            this.tableData[index].directfinal = data.detail.checked ? 1 : 0;
            this.tableDataTemp[index].directfinal = data.detail.checked ? 1 : 0;
        }
    }
    scan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                spinner: 'dots'
            });
            yield loading.present();
            const headers = {
                'auth-id': localStorage.getItem('authid'),
                'client-id': localStorage.getItem('clientid'),
                'user': localStorage.getItem('userid'),
                'password': localStorage.getItem('password')
            };
            this.http.get(this.dataUrl + "/api/mixplan", { headers }).subscribe({
                next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    // data.message["locations"]=["2PI"]
                    for (var key of Object.keys(data.message)) {
                        if (key != "locations" && key != "numshifts") {
                            data.message[key].basepolyratio = parseFloat(data.message[key].basepolyratio);
                            data.message[key].batchtotwgt = parseFloat(data.message[key].batchtotwgt);
                            data.message[key].batchwgt = parseFloat(data.message[key].batchwgt);
                            data.message[key].polywgt = parseFloat(data.message[key].polywgt);
                            data.message[key].stdbasepolywgt = parseFloat(data.message[key].stdbasepolywgt);
                            data.message[key].directfinal = 1;
                            data.message[key].noofbatch = 0;
                            this.totalpolywgt += data.message[key].stdbasepolywgt;
                            this.totalbatchwgt += data.message[key].batchwgt;
                            this.tableData.push(data.message[key]);
                            this.tableDataTemp.push(data.message[key]);
                        }
                        if (key == "locations") {
                            // if(data.message["locations"].length == 1){
                            //   this.selected={name:data.message["locations"][0],value:data.message["locations"][0]};
                            //   this.postData["location"]=data.message["locations"][0];
                            // }
                            // else{
                            data.message["locations"].map((x) => {
                                this.locationArray.push({ name: x, value: x });
                            });
                            // }
                        }
                        if (key == "numshifts") {
                            for (let i = 1; i <= parseInt(data.message[key]); i++) {
                                this.shiftArray.push({ name: i, value: i });
                            }
                            this.selectedShift = this.shiftArray[0];
                            this.postData.shift = parseInt(this.selectedShift.value);
                        }
                    }
                    if (this.locationArray.length == 1) {
                        this.selected = this.locationArray[0];
                        this.postData["location"] = this.locationArray[0].name;
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
    callPlan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // if(this.postData.location == ""){
            //   this.toastfunction("Please Select Location","danger");  
            //   return false;
            // }
            this.modalDeleteData3 = true;
            setTimeout(() => {
                let dd = new Date();
                let ddc = dd.setDate(dd.getDate() + 1);
                let d = this.datePipe.transform(ddc, 'yyyy-MM-dd');
                document.getElementById("datefield").value = d;
                // this.planDate=d;
                this.currentDate = d;
                this.postData.mixdate = d;
                console.log(d);
            }, 1000);
        });
    }
    submitData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.postData.location == "") {
                this.toastfunction("Please Select Location", "danger");
                return false;
            }
            this.tableDataTemp.map((x) => {
                if (x.noofbatch > 0) {
                    this.dataArray.push({
                        "cpdid": x.cpdid,
                        "basepolywgt": x.stdbasepolywgt,
                        "numbatches": x.noofbatch,
                        "isdirectfinal": x.directfinal
                    });
                }
            });
            if (this.postData.iteminfo.length <= 0) {
                this.toastfunction("Please put any batches", "danger");
                return false;
            }
            console.log(this.postData);
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
            this.http.post(this.dataUrl + '/api/mixplan', this.postData, { headers }).subscribe({
                next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    if (data.status == "success") {
                        loading.dismiss();
                        this.toastfunction(data.message, "success");
                        this.scan();
                        this.tableData = [];
                        this.tableDataTemp = [];
                        this.dataArray = [];
                        this.locationArray = [];
                        this.postData = {
                            "mixdate": this.currentDate,
                            "location": "",
                            "shift": "",
                            "iteminfo": this.dataArray
                        };
                        this.selected = null;
                        this.modalDeleteData3 = false;
                        this.totalbatch = 0;
                        this.searchData = "";
                    }
                    else {
                        loading.dismiss();
                        this.toastfunction(data.message, "danger");
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // if(this.postData.location !=""){
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
            // this.dataUrl+'/api/cancelmixplan'+this.mode+this.postData.location
            this.http.get(this.dataUrl + '/api/cancelmixplan' + this.mode, { headers }).subscribe({
                next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    if (data.status == "success") {
                        this.deleteData = data.message;
                        this.deleteData.map((x) => {
                            return x.planqty = parseFloat(x.planqty);
                        });
                        this.modalDeleteData = true;
                        loading.dismiss();
                    }
                    else {
                        loading.dismiss();
                        this.modalDeleteData = true;
                    }
                }),
                error: errordata => {
                    if (errordata.error.message) {
                        loading.dismiss();
                        // this.toastfunction(errordata.error.message,"danger");  
                        this.modalDeleteData = true;
                    }
                    else {
                        this.toastfunction("Invalid Company Url, Please Check in Home page", "danger");
                    }
                }
            });
            // }
            // else{
            //   this.toastfunction("Please Select Operator","danger");
            // }
        });
    }
    callDeflashing(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.currentItem = data;
            this.modalDeleteData2 = true;
        });
    }
    deleteDeflashing() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
            this.http.post(this.dataUrl + '/api/cancelmixplan/' + this.currentItem.batid, "", { headers }).subscribe({
                next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
                        this.toastfunction("Invalid Company Url, Please Check in Home page", "danger");
                    }
                }
            });
        });
    }
    OperatorChanged(event) {
        this.postData["location"] = event.value.name;
    }
    ShiftChanged(event) {
        this.postData["shift"] = parseInt(event.value.name);
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
    navBack() {
        this.router.navigate(['home']);
    }
    // selectDate(e){    
    //   this.postData["issdate"]=this.currentDate;
    // }
    selectRecord(data, event) {
        if (data.noofbatch === "") {
            this.toastfunction("Please Enter Batch Count", "danger");
            return false;
        }
        if (event.detail.checked) {
            this.dataArray.push({
                "cpdid": data.cpdid,
                "basepolywgt": data.stdbasepolywgt,
                "numbatches": data.noofbatch,
                "isdirectfinal": data.directfinal
            });
        }
        else {
            this.dataArray.map((x, i) => {
                if (x.moldref === data.moldref) {
                    this.dataArray.splice(i, 1);
                }
            });
        }
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
    applyFilter(filterValue) {
        let filterValueLower = filterValue.toLowerCase();
        if (filterValue === '') {
            this.tableData = this.tableDataTemp;
        }
        else {
            if (filterValue.length >= 3) {
                this.tableData = this.tableData.filter((employee) => employee.cpdname.toLowerCase().includes(filterValueLower));
            }
        }
    }
    displaymode() {
        // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
    prefill(index, item, e, type) {
        this.store = e.target.value;
        this.tableData[index][type] = "";
    }
    blured(index, item, e, type) {
        if (e.target.value == "") {
            this.tableData[index][type] = this.store;
        }
        else {
            if (e.target.type == "number") {
                this.tableData[index][type] = parseInt(e.target.value);
            }
            if (e.target.type == "text") {
                this.tableData[index][type] = e.target.value;
            }
        }
    }
};
MixingplanningPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__.ScreenOrientation },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
MixingplanningPage.propDecorators = {
    selectComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['selectComponent',] }],
    selectComponent1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['selectComponent1',] }]
};
MixingplanningPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-mixingplanning',
        template: _mixingplanning_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_mixingplanning_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MixingplanningPage);



/***/ }),

/***/ 33390:
/*!********************************************************************!*\
  !*** ./src/app/mixingplanning/mixingplanning.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".reports-table {\n  overflow-x: auto;\n}\n\n.inventory-content {\n  background-color: #f0f1f2;\n}\n\n.headers {\n  color: #454f63;\n  font-family: \"Open Sans\";\n  font-weight: bold;\n  font-size: 15px;\n  margin-top: 0px;\n  word-wrap: break-word;\n}\n\n.border,\n.single-border {\n  border-bottom: 2px solid #989898;\n}\n\n.single-border {\n  padding-top: 12px;\n}\n\n.content {\n  color: #454f63;\n  font-family: \"Open Sans\";\n  font-size: 12px;\n}\n\n#datePicker {\n  background: white;\n  border: 1px solid #0000001f;\n}\n\n/* Modal Header */\n\n.modal-header {\n  background-color: #00709c;\n  color: white;\n}\n\n/* Modal Footer */\n\n.modal-footer {\n  padding: 2px 16px;\n  color: white;\n}\n\n/* Modal Content */\n\n.modal-content {\n  z-index: 2;\n  position: absolute;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  width: 98%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  top: 3%;\n  margin-left: 1%;\n}\n\n.modal-content2 {\n  z-index: 6;\n  position: absolute;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  width: 84%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  top: 30%;\n  margin-left: 7%;\n}\n\n/* The Close Button */\n\n.close {\n  color: white;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n/* Add Animation */\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n\n.selectdddate {\n  background: #c5c1c1;\n  border: 0;\n  color: #4a4646;\n  box-shadow: 0px 0px 1px grey;\n  padding: 4px;\n  border-radius: 3px;\n}\n\n.selectdd {\n  background: white;\n  border: 0;\n  color: black;\n  border-bottom: 1px solid grey;\n  position: absolute;\n  top: 24%;\n  left: -2%;\n}\n\n.modal-content3 {\n  z-index: 10;\n  position: absolute;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  width: 96%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  top: 30%;\n  margin-left: 2%;\n}\n\n.textbox {\n  box-shadow: 0px 0px 2px grey;\n  border-radius: 3px;\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1peGluZ3BsYW5uaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsZ0NBQUE7QUFDRjs7QUFHQTtFQUNFLGlCQUFBO0FBQUY7O0FBSUE7RUFDRSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FBREY7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLDJCQUFBO0FBRkY7O0FBS0EsaUJBQUE7O0FBQ0E7RUFFQSx5QkFBQTtFQUNBLFlBQUE7QUFIQTs7QUFPQSxpQkFBQTs7QUFDQTtFQUNBLGlCQUFBO0VBRUEsWUFBQTtBQUxBOztBQVFBLGtCQUFBOztBQUNBO0VBQ0EsVUFBQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSw0RUFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtBQUxGOztBQVFBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSw0RUFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQUxGOztBQVFBLHFCQUFBOztBQUNBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFMQTs7QUFRQSxrQkFBQTs7QUFDQTtFQUNBO0lBQU0sV0FBQTtJQUFhLFVBQUE7RUFIakI7RUFJRjtJQUFJLE1BQUE7SUFBUSxVQUFBO0VBQVY7QUFDRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSw0RUFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFERiIsImZpbGUiOiJtaXhpbmdwbGFubmluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVwb3J0cy10YWJsZSB7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5cclxuLmludmVudG9yeS1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMWYyO1xyXG59XHJcblxyXG4uaGVhZGVycyB7XHJcbiAgY29sb3I6ICM0NTRmNjM7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi5ib3JkZXIsXHJcbi5zaW5nbGUtYm9yZGVyIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzk4OTg5ODtcclxuXHJcbn1cclxuXHJcbi5zaW5nbGUtYm9yZGVyIHtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxuXHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBjb2xvcjogIzQ1NGY2MztcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcblxyXG4jZGF0ZVBpY2tlcntcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMWY7XHJcbn1cclxuXHJcbi8qIE1vZGFsIEhlYWRlciAqL1xyXG4ubW9kYWwtaGVhZGVyIHtcclxuLy8gcGFkZGluZzogMXB4IDE1cHg7XHJcbmJhY2tncm91bmQtY29sb3I6ICMwMDcwOWM7XHJcbmNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi8qIE1vZGFsIEZvb3RlciAqL1xyXG4ubW9kYWwtZm9vdGVyIHtcclxucGFkZGluZzogMnB4IDE2cHg7XHJcbi8vIGJhY2tncm91bmQtY29sb3I6ICM1Y2I4NWM7XHJcbmNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogTW9kYWwgQ29udGVudCAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbnotaW5kZXg6IDI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDk4JTtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2IoMCAwIDAgLyAyMCUpLCAwIDZweCAyMHB4IDAgcmdiKDAgMCAwIC8gMTklKTtcclxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgdG9wOiAzJTtcclxuICBtYXJnaW4tbGVmdDogMSU7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50MiB7XHJcbiAgei1pbmRleDogNjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogODQlO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYigwIDAgMCAvIDIwJSksIDAgNnB4IDIwcHggMCByZ2IoMCAwIDAgLyAxOSUpO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICB0b3A6IDMwJTtcclxuICBtYXJnaW4tbGVmdDogNyU7XHJcbn1cclxuXHJcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cclxuLmNsb3NlIHtcclxuY29sb3I6IHdoaXRlO1xyXG5mbG9hdDogcmlnaHQ7XHJcbmZvbnQtc2l6ZTogMjhweDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi8qIEFkZCBBbmltYXRpb24gKi9cclxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcclxuZnJvbSB7dG9wOiAtMzAwcHg7IG9wYWNpdHk6IDB9XHJcbnRvIHt0b3A6IDA7IG9wYWNpdHk6IDF9XHJcbn1cclxuXHJcblxyXG4uc2VsZWN0ZGRkYXRlIHtcclxuICBiYWNrZ3JvdW5kOiAjYzVjMWMxO1xyXG4gIGJvcmRlcjogMDsgIFxyXG4gIGNvbG9yOiAjNGE0NjQ2O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IGdyZXk7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLnNlbGVjdGRke1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlcjogMDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjQlO1xyXG4gIGxlZnQ6IC0yJTtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQzIHtcclxuICB6LWluZGV4OiAxMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogOTYlO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYigwIDAgMCAvIDIwJSksIDAgNnB4IDIwcHggMCByZ2IoMCAwIDAgLyAxOSUpO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICB0b3A6IDMwJTtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuXHJcbi50ZXh0Ym94e1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IGdyZXk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxufSJdfQ== */";

/***/ }),

/***/ 34533:
/*!********************************************************************!*\
  !*** ./src/app/mixingplanning/mixingplanning.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-img src=\"{{brandImage}}\" style=\"height: 50px;width:50px\" slot=\"start\"></ion-img>               \n    <div style=\"display: flex;justify-content: center;\">\n      <img src=\"./assets/image/rgb.png\" height=\"25\" width=\"25\">\n      <b style=\"font-size: 20px;\">&nbsp;&nbsp;Mixing Plan</b>\n    </div>\n    <ion-back-button defaultHref=\"Planhome\" slot=\"end\" (click)=\"displaymode()\"></ion-back-button>   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"inventory-content\">\n\n  <ion-grid>\n    <ion-row nowrap class=\"ion-align-items-center\">\n      <ion-col size=\"6\">       \n        <ion-input (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\" [(ngModel)]=\"searchData\"><ion-icon name=\"search\"></ion-icon></ion-input>\n      </ion-col>      \n      <ion-col size=\"3\"><ion-button color=\"success\" size=\"small\" (click)=\"callPlan()\">Create</ion-button></ion-col>\n      <ion-col size=\"3\"><ion-button color=\"danger\" size=\"small\" (click)=\"deleteList()\" style=\"margin-left: 20%;\">Delete</ion-button></ion-col>\n  </ion-row>\n  </ion-grid>\n  <br>\n  <div class=\"reports-table\" style=\"position: relative;top:-4%\">\n   \n    <ion-grid>\n      <ion-row nowrap class=\"headers\">\n        <ion-col size=\"4\" class=\"single-border\" tappable (click)=\"sort('cpdname',true)\">\n          Compound ({{tableData.length}})\n        </ion-col>\n        <ion-col size=\"2\" class=\"single-border\">\n          IsFinal <ion-checkbox color=\"primary\" checked (ionChange)=\"onChangeValueAll($event)\" style=\"display: block;\"> </ion-checkbox> \n         </ion-col>    \n        <ion-col size=\"2\" class=\"single-border\" (click)=\"sort('stdbasepolywgt',true)\" style=\"text-align:center\">\n          PolyWt.Kg \n        </ion-col>\n        <ion-col size=\"2\" class=\"single-border\" (click)=\"sort('batchwgt',true)\" style=\"text-align:center\">\n          BchWt.Kg \n        </ion-col>\n        <ion-col size=\"2\" class=\"single-border\" style=\"text-align:center\" (click)=\"sort('noofbatch',true)\">\n          No. Bchs ({{totalbatch}})\n        </ion-col>               \n                 \n      </ion-row>\n      <div style=\"height: 75vh; overflow: scroll;\">\n        <ion-row nowrap class=\"content\" *ngFor=\"let x of tableData;index as i\">\n          <ion-col size=\"4\"> {{ x.cpdname }}</ion-col>\n          <ion-col size=\"2\"> <ion-checkbox checked color=\"primary direct\" (ionChange)=\"onChangeValue($event,i,x,'directfinal')\"> </ion-checkbox> </ion-col>    \n          <ion-col size=\"2\"> <ion-input class=\"textbox\" type=\"number\" value=\"{{x.stdbasepolywgt}}\" (click)=\"prefill(i,x,$event,'stdbasepolywgt')\" (focusout)=\"blured(i,x,$event,'stdbasepolywgt')\" (ionChange)=\"onChangeValue($event,i,x,'weight')\" style=\"height:25px;font-size: medium;text-align: center;\"></ion-input></ion-col>\n          <ion-col size=\"2\" style=\"text-align: center;font-size: medium;\"> {{ x.batchwgt }} </ion-col>  \n          <ion-col size=\"2\"> <ion-input class=\"textbox\" type=\"number\" value=\"{{x.noofbatch}}\" (click)=\"prefill(i,x,$event,'noofbatch')\" (focusout)=\"blured(i,x,$event,'noofbatch')\" (ionChange)=\"onChangeValue($event,i,x,'batch')\" style=\"height:25px;font-size: medium;\"></ion-input></ion-col>                       \n        </ion-row>\n        <ion-row *ngIf=\"tableData.length == 0\">\n          <ion-col size=\"6\" offset=\"4\"> No Records Found</ion-col>\n        </ion-row>\n      </div>\n\n    </ion-grid>\n  </div>\n\n  <!-- Modal content -->\n<div class=\"modal-content\" *ngIf=\"modalDeleteData\">\n  <div class=\"modal-header\">\n    <ion-grid>\n      <ion-row>        \n        <ion-col size=\"4\"> <p style=\"margin: 8px 5px;\">Mixing Plan</p> </ion-col>\n        <ion-col size=\"7\">\n          <select [(ngModel)]=\"mode\" (change)=\"deleteList()\" class=\"selectdd\">\n            <option value=\"\">Master</option>\n            <option value=\"/final\">Final</option>      \n          </select>\n        </ion-col>\n        <ion-col size=\"1\"><span class=\"close\" (click)=\"modalDeleteData=!modalDeleteData\">&times;</span> </ion-col>\n      </ion-row>\n    </ion-grid>          \n  </div>\n  <div class=\"modal-body\">\n    <ion-grid>\n      <ion-row nowrap class=\"headers\">\n        <ion-col size=\"3\" class=\"single-border\" (click)=\"sort2('dispbatid',true)\">\n          Batch ID ({{deleteData.length}})\n        </ion-col>\n        <ion-col size=\"3\" class=\"single-border\" (click)=\"sort2('batdate',true)\">\n          Plan Date\n        </ion-col>\n        <ion-col size=\"3\" class=\"single-border\" (click)=\"sort2('cpdname',true)\">\n          Compound\n        </ion-col>            \n        <ion-col size=\"2\" class=\"single-border\" (click)=\"sort2('planqty',true)\">\n          Plan Qty\n         </ion-col>         \n        <ion-col size=\"1\" class=\"single-border\">\n          <!-- Action -->\n        </ion-col>\n      </ion-row>\n      <div style=\"height: 55vh; overflow: scroll;\">\n        <ion-row nowrap class=\"content\" *ngFor=\"let x of deleteData\">\n          <ion-col size=\"3\"> {{ x.dispbatid }}</ion-col>\n          <ion-col size=\"3\"> {{ x.batdate }} </ion-col>\n          <ion-col size=\"3\"> {{ x.cpdname }} </ion-col>\n          <ion-col size=\"2\"> {{ x.planqty }} </ion-col>        \n          <ion-col size=\"1\"> <ion-icon name=\"trash-outline\" (click)=\"callDeflashing(x)\" style=\"color:red\"></ion-icon></ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"deleteData.length == 0\">\n          <ion-col size=\"6\" offset=\"4\"> No Records Found</ion-col>\n        </ion-row>\n      </div>\n    </ion-grid>\n  </div>\n</div>\n\n\n<div class=\"modal-content2\" *ngIf=\"modalDeleteData2\">\n  <div class=\"modal-header\" style=\"padding: 2%;\">\n    <!-- <span class=\"close\" (click)=\"modalDeleteData2=!modalDeleteData2\">&times;</span> -->\n    Delete List\n  </div>\n  <div class=\"modal-body\" style=\"text-align: center;\">\n    <br>\n    Are You Sure Want to Delete?\n    <br>\n    <br>\n  </div>\n  <div class=\"modal-footer\" style=\"float: right;\">\n    <ion-button color=\"success\" size=\"small\" (click)=\"deleteDeflashing()\">Delete</ion-button>\n    <ion-button color=\"danger\" size=\"small\" (click)=\"modalDeleteData2=!modalDeleteData2\">Cancel</ion-button>   \n  </div>\n</div>\n\n\n<div class=\"modal-content3\" *ngIf=\"modalDeleteData3\">\n  <div class=\"modal-header\" style=\"padding: 2%;\">\n    <!-- <span class=\"close\" (click)=\"modalDeleteData3=!modalDeleteData3\">&times;</span> -->\n    Mixing Plan\n  </div>\n  <div class=\"modal-body\" style=\"text-align: center;\">\n    <ion-row nowrap class=\"ion-align-items-center\">\n      <ion-col size=\"2\">  \n          <ion-label style=\"font-size: small;color: grey;\">Shift</ion-label>            \n          <ionic-selectable\n                #selectComponent1\n                [(ngModel)]=\"selectedShift\"\n                [items]=\"shiftArray\"\n                itemValueField=\"value\"\n                itemTextField=\"name\"\n                [canSearch]=\"true\"\n                (onChange)=\"ShiftChanged($event)\"\n                searchFailText= \"Shift not found\"\n                placeholder=\"Select Shift\">\n          </ionic-selectable>        \n      </ion-col>\n      <ion-col size=\"4\">\n          <ion-label style=\"font-size: small;color: grey;\">Location</ion-label>               \n          <ionic-selectable\n                #selectComponent\n                [(ngModel)]=\"selected\"\n                [items]=\"locationArray\"\n                itemValueField=\"value\"\n                itemTextField=\"name\"\n                [canSearch]=\"true\"\n                (onChange)=\"OperatorChanged($event)\"\n                searchFailText= \"Operator not found\"\n                placeholder=\"Select Location\">\n            </ionic-selectable>        \n      </ion-col>\n      <ion-col size=\"5\">              \n        <ion-col>\n          <ion-label style=\"font-size: small;color: grey;\">Date</ion-label> \n          <input type=\"date\" class=\"selectdddate\" [(ngModel)]=\"postData.mixdate\" id=\"datefield\"/>\n        </ion-col>      \n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col size=\"12\">Are You Sure to Create the Plan?</ion-col>\n    </ion-row>\n  </div> \n  <div class=\"modal-footer\" style=\"float: right;\">\n    <ion-button color=\"success\" size=\"small\" (click)=\"submitData()\">Create</ion-button>\n    <ion-button color=\"danger\" size=\"small\" (click)=\"modalDeleteData3=!modalDeleteData3\">Cancel</ion-button>   \n  </div>\n</div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_mixingplanning_mixingplanning_module_ts.js.map