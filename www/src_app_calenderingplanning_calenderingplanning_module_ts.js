"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_calenderingplanning_calenderingplanning_module_ts"],{

/***/ 41075:
/*!***************************************************************************!*\
  !*** ./src/app/calenderingplanning/calenderingplanning-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalenderingplanningPageRoutingModule": () => (/* binding */ CalenderingplanningPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _calenderingplanning_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calenderingplanning.page */ 9478);




const routes = [
    {
        path: '',
        component: _calenderingplanning_page__WEBPACK_IMPORTED_MODULE_0__.CalenderingplanningPage
    }
];
let CalenderingplanningPageRoutingModule = class CalenderingplanningPageRoutingModule {
};
CalenderingplanningPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CalenderingplanningPageRoutingModule);



/***/ }),

/***/ 41189:
/*!*******************************************************************!*\
  !*** ./src/app/calenderingplanning/calenderingplanning.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalenderingplanningPageModule": () => (/* binding */ CalenderingplanningPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _calenderingplanning_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calenderingplanning-routing.module */ 41075);
/* harmony import */ var _calenderingplanning_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calenderingplanning.page */ 9478);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ 25073);









let CalenderingplanningPageModule = class CalenderingplanningPageModule {
};
CalenderingplanningPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _calenderingplanning_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalenderingplanningPageRoutingModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_calenderingplanning_page__WEBPACK_IMPORTED_MODULE_1__.CalenderingplanningPage]
    })
], CalenderingplanningPageModule);



/***/ }),

/***/ 9478:
/*!*****************************************************************!*\
  !*** ./src/app/calenderingplanning/calenderingplanning.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalenderingplanningPage": () => (/* binding */ CalenderingplanningPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _calenderingplanning_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calenderingplanning.page.html?ngResource */ 51561);
/* harmony import */ var _calenderingplanning_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calenderingplanning.page.scss?ngResource */ 97029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ 6222);










let CalenderingplanningPage = class CalenderingplanningPage {
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
        // locationArray=[];
        this.postData = {
            "plandate": "",
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
        this.totalPlanQtyM = 0;
        this.totalPlanQtyKG = 0;
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
                this.tableDataTemp[i].directfinal = 1;
            }
        }
        else {
            for (let i = 0; i < items.length; i++) {
                let element = items[i];
                element.checked = 'false';
                this.tableData[i].directfinal = 0;
                this.tableDataTemp[i].directfinal = 0;
            }
        }
    }
    onChangeValue(data, index, item, type) {
        if (type == "rolllength") {
            // let batchwgt = (parseFloat(data.target.value) * this.tableData[index].cmultiplier) + (parseFloat(data.target.value) * this.tableData[index].fmultiplier);
            // this.tableData[index].planqtyKg = parseFloat(batchwgt.toFixed(1));  
            // this.tableData[index].planqty = parseFloat(data.target.value) 
            // let batchwgt2 = (parseFloat(data.target.value) * this.tableDataTemp[index].cmultiplier) + (parseFloat(data.target.value) * this.tableDataTemp[index].fmultiplier);
            // this.tableDataTemp[index].planqtyKg = parseFloat(batchwgt2.toFixed(1));  
            // this.tableDataTemp[index].planqty = parseFloat(data.target.value) 
            if (data.target.value != "NaN" && data.target.value != "") {
                this.totalPlanQtyM = 0;
                this.totalPlanQtyKG = 0;
                this.tableData.map((x) => {
                    if (x.rollname === item.rollname) {
                        let batchwgt = (parseFloat(data.target.value) * x.cmultiplier) + (parseFloat(data.target.value) * x.fmultiplier);
                        x.planqtyKg = parseFloat(batchwgt.toFixed(1));
                        x.planqty = parseFloat(data.target.value);
                    }
                    if (x.planqty) {
                        this.totalPlanQtyM += x.planqty,
                            this.totalPlanQtyKG += x.planqtyKg;
                    }
                });
            }
            if (data.target.value != "NaN" && data.target.value != "") {
                this.totalPlanQtyM = 0;
                this.totalPlanQtyKG = 0;
                this.tableDataTemp.map((x) => {
                    if (x.rollname === item.rollname) {
                        let batchwgt = (parseFloat(data.target.value) * x.cmultiplier) + (parseFloat(data.target.value) * x.fmultiplier);
                        x.planqtyKg = parseFloat(batchwgt.toFixed(1));
                        x.planqty = parseFloat(data.target.value);
                    }
                    if (x.planqty) {
                        this.totalPlanQtyM += x.planqty,
                            this.totalPlanQtyKG += x.planqtyKg;
                    }
                });
            }
        }
    }
    scan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
            this.http.get(this.dataUrl + "/api/rollplan", { headers }).subscribe({
                next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    for (var key of Object.keys(data.message)) {
                        if (key != "locations" && key != "numshifts") {
                            data.message[key].cmultiplier = parseFloat(data.message[key].cmultiplier);
                            data.message[key].fmultiplier = parseFloat(data.message[key].fmultiplier);
                            data.message[key].rollminstock = parseFloat(data.message[key].rollminstock);
                            data.message[key].rolltotstock = parseFloat(data.message[key].rolltotstock);
                            data.message[key]["planqty"] = 0;
                            this.tableData.push(data.message[key]);
                            this.tableDataTemp.push(data.message[key]);
                        }
                        // if(key == "locations"){
                        //   data.message["locations"].map((x)=>{
                        //     this.locationArray.push({name:x,value:x});
                        //   })              
                        // }
                        if (key == "numshifts") {
                            for (let i = 1; i <= parseInt(data.message[key]); i++) {
                                this.shiftArray.push({ name: i, value: i });
                            }
                            this.selectedShift = this.shiftArray[0];
                            this.postData.shift = parseInt(this.selectedShift.value);
                        }
                    }
                    // if(this.locationArray.length == 1){
                    //   this.selected=this.locationArray[0];
                    // }
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
                this.postData.plandate = d;
                console.log(d);
            }, 1000);
        });
    }
    submitData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // if(this.postData.location == ""){
            //   this.toastfunction("Please Select Location","danger");  
            //   return false;
            // }
            this.tableDataTemp.map((x, i) => {
                if (x.rolllength > 0) {
                    this.dataArray.push({
                        "rollid": x.rollid,
                        "planqty": x.planqty
                    });
                }
                if (x.rolllength == 0) {
                    this.dataArray.splice(i, 1);
                }
            });
            console.log(this.postData);
            if (this.postData.iteminfo.length == 0) {
                this.toastfunction("Please add any 'Roll' to plan", "danger");
                return false;
            }
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
            this.http.post(this.dataUrl + '/api/rollplan', this.postData, { headers }).subscribe({
                next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    if (data.status == "success") {
                        loading.dismiss();
                        this.toastfunction(data.message, "success");
                        this.scan();
                        this.tableData = [];
                        this.tableDataTemp = [];
                        this.dataArray = [];
                        // this.locationArray=[];
                        this.postData = {
                            "plandate": this.currentDate,
                            "shift": "",
                            "iteminfo": this.dataArray
                        };
                        this.selected = null;
                        this.modalDeleteData3 = false;
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
            this.http.get(this.dataUrl + '/api/cancelrollplan' + this.mode, { headers }).subscribe({
                next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    if (data.status == "success") {
                        this.deleteData = data.message;
                        this.deleteData.map((x) => {
                            return x.planqty = parseFloat(x.planqty), x.cpdretqty = parseFloat(x.cpdretqty);
                        });
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
            this.http.post(this.dataUrl + '/api/cancelrollplan/' + this.currentItem.planid, "", { headers }).subscribe({
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
    // OperatorChanged(event: {component: IonicSelectableComponent,value: any})
    // {
    //   this.postData["location"]=event.value.name;
    // }
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
        console.log(this.postData);
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
                this.tableData = this.tableData.filter((employee) => employee.rollname.toLowerCase().includes(filterValueLower));
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
CalenderingplanningPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__.ScreenOrientation },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
CalenderingplanningPage.propDecorators = {
    selectComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['selectComponent',] }],
    selectComponent1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['selectComponent1',] }]
};
CalenderingplanningPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-calenderingplanning',
        template: _calenderingplanning_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_calenderingplanning_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CalenderingplanningPage);



/***/ }),

/***/ 97029:
/*!******************************************************************************!*\
  !*** ./src/app/calenderingplanning/calenderingplanning.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".reports-table {\n  overflow-x: auto;\n}\n\n.inventory-content {\n  background-color: #f0f1f2;\n}\n\n.headers {\n  color: #454f63;\n  font-family: \"Open Sans\";\n  font-weight: bold;\n  font-size: 15px;\n  margin-top: 0px;\n  word-wrap: break-word;\n}\n\n.border,\n.single-border {\n  border-bottom: 2px solid #989898;\n}\n\n.single-border {\n  padding-top: 12px;\n}\n\n.content {\n  color: #454f63;\n  font-family: \"Open Sans\";\n  font-size: 12px;\n}\n\n#datePicker {\n  background: white;\n  border: 1px solid #0000001f;\n}\n\n/* Modal Header */\n\n.modal-header {\n  background-color: #00709c;\n  color: white;\n}\n\n/* Modal Footer */\n\n.modal-footer {\n  padding: 2px 16px;\n  color: white;\n}\n\n/* Modal Content */\n\n.modal-content {\n  z-index: 2;\n  position: absolute;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  width: 98%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  top: 3%;\n  margin-left: 1%;\n}\n\n.modal-content2 {\n  z-index: 6;\n  position: absolute;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  width: 84%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  top: 30%;\n  margin-left: 7%;\n}\n\n/* The Close Button */\n\n.close {\n  color: white;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n/* Add Animation */\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n\n.selectdddate {\n  background: #c5c1c1;\n  border: 0;\n  color: #4a4646;\n  box-shadow: 0px 0px 1px grey;\n  padding: 4px;\n  border-radius: 3px;\n}\n\n.selectdd {\n  background: white;\n  border: 0;\n  color: black;\n  border-bottom: 1px solid grey;\n  position: absolute;\n  top: 24%;\n  left: -2%;\n}\n\n.modal-content3 {\n  z-index: 10;\n  position: absolute;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  width: 96%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  top: 30%;\n  margin-left: 2%;\n}\n\n.textbox {\n  box-shadow: 0px 0px 2px grey;\n  border-radius: 3px;\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGVuZGVyaW5ncGxhbm5pbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFRTs7RUFFRSxnQ0FBQTtBQUNKOztBQUdFO0VBQ0UsaUJBQUE7QUFBSjs7QUFJRTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFESjs7QUFLRTtFQUNFLGlCQUFBO0VBQ0EsMkJBQUE7QUFGSjs7QUFLRSxpQkFBQTs7QUFDQTtFQUVBLHlCQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU9FLGlCQUFBOztBQUNBO0VBQ0EsaUJBQUE7RUFFQSxZQUFBO0FBTEY7O0FBUUUsa0JBQUE7O0FBQ0E7RUFDQSxVQUFBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDRFQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0FBTEo7O0FBUUU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDRFQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBTEo7O0FBUUUscUJBQUE7O0FBQ0E7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUxGOztBQVFFLGtCQUFBOztBQUNBO0VBQ0E7SUFBTSxXQUFBO0lBQWEsVUFBQTtFQUhuQjtFQUlBO0lBQUksTUFBQTtJQUFRLFVBQUE7RUFBWjtBQUNGOztBQUdFO0VBQ0UsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUU7RUFDRSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBREo7O0FBSUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDRFQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUU7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQURKIiwiZmlsZSI6ImNhbGVuZGVyaW5ncGxhbm5pbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcG9ydHMtdGFibGUge1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmludmVudG9yeS1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYxZjI7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXJzIHtcclxuICAgIGNvbG9yOiAjNDU0ZjYzO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB9XHJcbiAgXHJcbiAgLmJvcmRlcixcclxuICAuc2luZ2xlLWJvcmRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzk4OTg5ODtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLnNpbmdsZS1ib3JkZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5jb250ZW50IHtcclxuICAgIGNvbG9yOiAjNDU0ZjYzO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gICNkYXRlUGlja2Vye1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMWY7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE1vZGFsIEhlYWRlciAqL1xyXG4gIC5tb2RhbC1oZWFkZXIge1xyXG4gIC8vIHBhZGRpbmc6IDFweCAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDcwOWM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKiBNb2RhbCBGb290ZXIgKi9cclxuICAubW9kYWwtZm9vdGVyIHtcclxuICBwYWRkaW5nOiAycHggMTZweDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLyogTW9kYWwgQ29udGVudCAqL1xyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICB6LWluZGV4OiAyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiKDAgMCAwIC8gMjAlKSwgMCA2cHggMjBweCAwIHJnYigwIDAgMCAvIDE5JSk7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIHRvcDogMyU7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1jb250ZW50MiB7XHJcbiAgICB6LWluZGV4OiA2O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogODQlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiKDAgMCAwIC8gMjAlKSwgMCA2cHggMjBweCAwIHJnYigwIDAgMCAvIDE5JSk7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIHRvcDogMzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDclO1xyXG4gIH1cclxuICBcclxuICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXHJcbiAgLmNsb3NlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgLyogQWRkIEFuaW1hdGlvbiAqL1xyXG4gIEBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XHJcbiAgZnJvbSB7dG9wOiAtMzAwcHg7IG9wYWNpdHk6IDB9XHJcbiAgdG8ge3RvcDogMDsgb3BhY2l0eTogMX1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnNlbGVjdGRkZGF0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYzVjMWMxO1xyXG4gICAgYm9yZGVyOiAwOyAgXHJcbiAgICBjb2xvcjogIzRhNDY0NjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IGdyZXk7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWxlY3RkZHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI0JTtcclxuICAgIGxlZnQ6IC0yJTtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLWNvbnRlbnQzIHtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogOTYlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiKDAgMCAwIC8gMjAlKSwgMCA2cHggMjBweCAwIHJnYigwIDAgMCAvIDE5JSk7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIHRvcDogMzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIH1cclxuICBcclxuICAudGV4dGJveHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 51561:
/*!******************************************************************************!*\
  !*** ./src/app/calenderingplanning/calenderingplanning.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-img src=\"{{brandImage}}\" style=\"height: 50px;width:50px\" slot=\"start\"></ion-img>               \n    <div style=\"display: flex;justify-content: center;\">\n      <img src=\"./assets/image/paper-roll.png\" height=\"25\" width=\"25\">\n      <b style=\"font-size: 20px;\">&nbsp;&nbsp;Calendering Plan</b>\n    </div>\n    <ion-back-button defaultHref=\"Planhome\" slot=\"end\"></ion-back-button>  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"inventory-content\">\n\n  <ion-grid>\n    <ion-row nowrap class=\"ion-align-items-center\">\n      <ion-col size=\"6\">       \n        <ion-input (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\" [(ngModel)]=\"searchData\"><ion-icon name=\"search\"></ion-icon></ion-input>\n      </ion-col>      \n      <ion-col size=\"3\"><ion-button color=\"success\" size=\"small\" (click)=\"callPlan()\">Create</ion-button></ion-col>\n      <ion-col size=\"3\"><ion-button color=\"danger\" size=\"small\" (click)=\"deleteList()\" style=\"margin-left: 20%;\">Delete</ion-button></ion-col>\n  </ion-row>\n  </ion-grid>\n  <br>\n  <div class=\"reports-table\" style=\"position: relative;top:-4%\">\n   \n    <ion-grid>\n      <ion-row nowrap class=\"headers\">\n        <ion-col size=\"3\" class=\"single-border\" tappable (click)=\"sort('rollname',true)\">\n          Name ({{tableData.length}})\n        </ion-col>\n        <ion-col size=\"2\" class=\"single-border\" (click)=\"sort('rollminstock',true)\">\n          MStk.m\n         </ion-col>    \n        <ion-col size=\"3\" class=\"single-border\" (click)=\"sort('rolltotstock',true)\" style=\"text-align:center\">\n          IStk.m\n        </ion-col>\n        <ion-col size=\"2\" class=\"single-border\" (click)=\"sort('planqty',true)\" style=\"text-align:center\">\n          PlanQty.m ({{totalPlanQtyM}})\n        </ion-col>\n        <ion-col size=\"2\" class=\"single-border\" style=\"text-align:center\" (click)=\"sort('planqtyKg',true)\">\n          PlanQty.kg ({{totalPlanQtyKG.toFixed(1)}})\n        </ion-col>               \n                 \n      </ion-row>\n      <div style=\"height: 75vh; overflow: scroll;\">\n        <ion-row nowrap class=\"content\" *ngFor=\"let x of tableData;index as i\">\n          <ion-col size=\"3\"> {{ x.rollname }}</ion-col>\n          <ion-col size=\"2\" style=\"text-align: center;font-size: medium;\"> {{x.rollminstock}} </ion-col>    \n          <ion-col size=\"3\" style=\"text-align: center;font-size: medium;\"> {{x.rolltotstock}}</ion-col>\n          <ion-col size=\"2\"> <ion-input class=\"textbox\" type=\"number\" style=\"height: 25px;font-size: medium;\" (click)=\"prefill(i,x,$event,'rolllength')\" (focusout)=\"blured(i,x,$event,'rolllength')\" (ionChange)=\"onChangeValue($event,i,x,'rolllength')\" value={{x.planqty}}></ion-input></ion-col>  \n          <ion-col size=\"2\" style=\"text-align: end;font-size: medium;\"> {{x.planqtyKg}}</ion-col>                       \n        </ion-row>\n        <ion-row *ngIf=\"tableData.length == 0\">\n          <ion-col size=\"6\" offset=\"4\"> No Records Found</ion-col>\n        </ion-row>\n      </div>\n\n    </ion-grid>\n  </div>\n\n  <!-- Modal content -->\n<div class=\"modal-content\" *ngIf=\"modalDeleteData\">\n  <div class=\"modal-header\">\n    <ion-grid>\n      <ion-row>        \n        <ion-col size=\"6\"> <p style=\"margin: 8px 5px;\">Calendaring Plan</p> </ion-col>\n        <ion-col size=\"5\"> </ion-col>        \n        <ion-col size=\"1\"><span class=\"close\" (click)=\"modalDeleteData=!modalDeleteData\">&times;</span> </ion-col>\n      </ion-row>\n    </ion-grid>          \n  </div>\n  <div class=\"modal-body\">\n    <ion-grid>\n      <ion-row nowrap class=\"headers\">\n        <ion-col size=\"2\" class=\"single-border\" (click)=\"sort2('dispplanid',true)\">\n          Plan ID ({{deleteData.length}})\n        </ion-col>\n        <ion-col size=\"2\" class=\"single-border\" (click)=\"sort2('plandate',true)\">\n          Plan Date\n        </ion-col>\n        <ion-col size=\"2\" class=\"single-border\" (click)=\"sort2('rollname',true)\">\n          Roll Name\n        </ion-col>            \n        <ion-col size=\"1\" class=\"single-border\" (click)=\"sort2('planqty',true)\">\n          Plan Qty(m)\n         </ion-col>     \n         <!-- <ion-col size=\"1\" class=\"single-border\">\n          Exp. Wgt(kg)\n         </ion-col>       -->\n         <ion-col size=\"2\" class=\"single-border\" (click)=\"sort2('rollcpdname',true)\">\n          Compound\n         </ion-col>   \n         <ion-col size=\"2\" class=\"single-border\" (click)=\"sort2('cpdretqty',true)\">\n          Adv. Ret.Qty(kg)\n         </ion-col>         \n        <ion-col size=\"1\" class=\"single-border\">\n          <!-- Action -->\n        </ion-col>\n      </ion-row>\n      <div style=\"height: 55vh; overflow: scroll;\">\n        <ion-row nowrap class=\"content\" *ngFor=\"let x of deleteData\">\n          <ion-col size=\"2\"> {{ x.dispplanid }}</ion-col>\n          <ion-col size=\"2\"> {{ x.plandate }} </ion-col>\n          <ion-col size=\"2\"> {{ x.rollname }} </ion-col>\n          <ion-col size=\"1\"> {{ x.planqty }} </ion-col>        \n          <!-- <ion-col size=\"1\"> {{ x.planqty }} </ion-col>         -->\n          <ion-col size=\"2\"> {{ x.rollcpdname }} </ion-col>  \n          <ion-col size=\"2\"> {{ x.cpdretqty }} </ion-col>        \n          <ion-col size=\"1\"> <ion-icon name=\"trash-outline\" (click)=\"callDeflashing(x)\" style=\"color:red\"></ion-icon></ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"deleteData.length == 0\">\n          <ion-col size=\"6\" offset=\"4\"> No Records Found</ion-col>\n        </ion-row>\n      </div>\n    </ion-grid>\n  </div>\n</div>\n\n\n<div class=\"modal-content2\" *ngIf=\"modalDeleteData2\">\n  <div class=\"modal-header\" style=\"padding: 2%;\">\n    <!-- <span class=\"close\" (click)=\"modalDeleteData2=!modalDeleteData2\">&times;</span> -->\n    Delete List\n  </div>\n  <div class=\"modal-body\" style=\"text-align: center;\">\n    <br>\n    Are You Sure Want to Delete?\n    <br>\n    <br>\n  </div>\n  <div class=\"modal-footer\" style=\"float: right;\">\n    <ion-button color=\"success\" size=\"small\" (click)=\"deleteDeflashing()\">Ok</ion-button>\n    <ion-button color=\"danger\" size=\"small\" (click)=\"modalDeleteData2=!modalDeleteData2\">Cancel</ion-button>   \n  </div>\n</div>\n\n\n<div class=\"modal-content3\" *ngIf=\"modalDeleteData3\">\n  <div class=\"modal-header\" style=\"padding: 2%;\">\n    <!-- <span class=\"close\" (click)=\"modalDeleteData3=!modalDeleteData3\">&times;</span> -->\n    Calendaring Plan\n  </div>\n  <div class=\"modal-body\" style=\"text-align: center;\">\n    <ion-row nowrap class=\"ion-align-items-center\">\n      <ion-col size=\"5\">  \n          <ion-label style=\"font-size: small;color: grey;\">Shift</ion-label>            \n          <ionic-selectable\n                #selectComponent1\n                [(ngModel)]=\"selectedShift\"\n                [items]=\"shiftArray\"\n                itemValueField=\"value\"\n                itemTextField=\"name\"\n                [canSearch]=\"true\"\n                (onChange)=\"ShiftChanged($event)\"\n                searchFailText= \"Shift not found\"\n                placeholder=\"Select Shift\">\n          </ionic-selectable>        \n      </ion-col>\n      <!-- <ion-col size=\"4\">\n          <ion-label style=\"font-size: small;color: grey;\">Location</ion-label>               \n          <ionic-selectable\n                #selectComponent\n                [(ngModel)]=\"selected\"\n                [items]=\"locationArray\"\n                itemValueField=\"value\"\n                itemTextField=\"name\"\n                [canSearch]=\"true\"\n                (onChange)=\"OperatorChanged($event)\"\n                searchFailText= \"Operator not found\"\n                placeholder=\"Select Location\">\n            </ionic-selectable>        \n      </ion-col> -->\n      <ion-col size=\"7\">              \n        <ion-col>\n          <ion-label style=\"font-size: small;color: grey;\">Date : </ion-label> \n          <input type=\"date\" class=\"selectdddate\" [(ngModel)]=\"postData.plandate\" id=\"datefield\"/>\n        </ion-col>      \n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col size=\"12\">Are You Sure to Create the Plan?</ion-col>\n    </ion-row>\n  </div> \n  <div class=\"modal-footer\" style=\"float: right;\">\n    <ion-button color=\"success\" size=\"small\" (click)=\"submitData()\">Ok</ion-button>\n    <ion-button color=\"danger\" size=\"small\" (click)=\"modalDeleteData3=!modalDeleteData3\">Cancel</ion-button>   \n  </div>\n</div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_calenderingplanning_calenderingplanning_module_ts.js.map