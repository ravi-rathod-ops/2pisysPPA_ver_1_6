"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_finalplanning_finalplanning_module_ts"],{

/***/ 26378:
/*!***************************************!*\
  !*** ./src/app/finalplanning.pipe.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinalplanningPipe": () => (/* binding */ FinalplanningPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let FinalplanningPipe = class FinalplanningPipe {
    transform(value, ...args) {
        return null;
    }
};
FinalplanningPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'finalplanning'
    })
], FinalplanningPipe);



/***/ }),

/***/ 56018:
/*!***************************************************************!*\
  !*** ./src/app/finalplanning/finalplanning-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinalplanningPageRoutingModule": () => (/* binding */ FinalplanningPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _finalplanning_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finalplanning.page */ 32367);




const routes = [
    {
        path: '',
        component: _finalplanning_page__WEBPACK_IMPORTED_MODULE_0__.FinalplanningPage
    }
];
let FinalplanningPageRoutingModule = class FinalplanningPageRoutingModule {
};
FinalplanningPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FinalplanningPageRoutingModule);



/***/ }),

/***/ 94452:
/*!*******************************************************!*\
  !*** ./src/app/finalplanning/finalplanning.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinalplanningPageModule": () => (/* binding */ FinalplanningPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _finalplanning_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finalplanning-routing.module */ 56018);
/* harmony import */ var _finalplanning_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finalplanning.page */ 32367);
/* harmony import */ var _finalplanning_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../finalplanning.pipe */ 26378);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ 25073);










let FinalplanningPageModule = class FinalplanningPageModule {
};
FinalplanningPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _finalplanning_routing_module__WEBPACK_IMPORTED_MODULE_0__.FinalplanningPageRoutingModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__.IonicSelectableModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_finalplanning_page__WEBPACK_IMPORTED_MODULE_1__.FinalplanningPage, _finalplanning_pipe__WEBPACK_IMPORTED_MODULE_2__.FinalplanningPipe]
    })
], FinalplanningPageModule);



/***/ }),

/***/ 32367:
/*!*****************************************************!*\
  !*** ./src/app/finalplanning/finalplanning.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinalplanningPage": () => (/* binding */ FinalplanningPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _finalplanning_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finalplanning.page.html?ngResource */ 71451);
/* harmony import */ var _finalplanning_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finalplanning.page.scss?ngResource */ 39339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ 6222);










let FinalplanningPage = class FinalplanningPage {
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
        this.dataArray = [];
        this.locationArray = [];
        this.postData = {
            "plandate": "",
            "location": "",
            "shift": null,
            "iteminfo": this.dataArray
        };
        this.flag = true;
        this.modalDeleteData = false;
        this.modalDeleteData3 = false;
        this.shiftArray = [];
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe('en-US');
        this.totalmasterbatchwgt = 0;
        this.totalexpectedbatchwgt = 0;
        this.searchData = "";
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
    ngOnInit() {
        this.brandImage = localStorage.getItem('brandImage');
        this.scan();
        // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    }
    scan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                spinner: 'dots'
            });
            loading.present();
            const headers = {
                'auth-id': localStorage.getItem('authid'),
                'client-id': localStorage.getItem('clientid'),
                'user': localStorage.getItem('userid'),
                'password': localStorage.getItem('password')
            };
            this.http.get(this.dataUrl + "/api/finalplan", { headers }).subscribe({
                next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    for (var key of Object.keys(data.message)) {
                        if (key != "locations" && key != "numshifts") {
                            data.message[key]["check"] = false;
                            data.message[key].basepolyratio = parseFloat(data.message[key].basepolyratio);
                            data.message[key].batchtotwgt = parseFloat(data.message[key].batchtotwgt);
                            data.message[key].batchwgt = parseFloat(data.message[key].batchwgt);
                            data.message[key].polywgt = parseFloat(data.message[key].polywgt);
                            data.message[key].stdbasepolywgt = parseFloat(data.message[key].stdbasepolywgt);
                            data.message[key].directfinal = 1;
                            data.message[key].noofbatch = 0;
                            // this.tableData.push(data.message[key])
                            this.tableDataTemp.push(data.message[key]);
                        }
                        if (key == "locations") {
                            // if(data.message["locations"].length == 1){
                            //   this.totalmasterbatchwgt=0;
                            //   this.totalexpectedbatchwgt=0;
                            //   this.dataArray=[];
                            //   this.postData["location"]=data.message["locations"][0];
                            //   this.tableData=this.tableDataTemp.filter((x)=>{
                            //     return x.location === data.message["locations"][0];
                            //   })  
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
                        this.totalmasterbatchwgt = 0;
                        this.totalexpectedbatchwgt = 0;
                        this.dataArray = [];
                        this.selected = this.locationArray[0];
                        this.postData["location"] = this.locationArray[0].name;
                        this.tableData = this.tableDataTemp.filter((x) => {
                            return x.location === data.message["locations"][0];
                        });
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
            if (this.postData.location == "") {
                this.toastfunction("Please Select Location", "danger");
                return false;
            }
            if (this.postData.iteminfo.length == 0) {
                this.toastfunction("Please select any plan", "danger");
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
            this.http.post(this.dataUrl + '/api/finalplan', this.postData, { headers }).subscribe({
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
                            "plandate": this.currentDate,
                            "location": "",
                            "shift": "",
                            "iteminfo": this.dataArray
                        };
                        this.selected = null;
                        this.modalDeleteData3 = false;
                        this.totalmasterbatchwgt = 0;
                        this.totalexpectedbatchwgt = 0;
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
    OperatorChanged(event) {
        this.totalmasterbatchwgt = 0;
        this.totalexpectedbatchwgt = 0;
        this.dataArray = [];
        this.postData["iteminfo"] = [];
        this.postData["location"] = event.value.name;
        this.tableData = this.tableDataTemp.filter((x) => {
            return x.location === event.value.name;
        });
        // this.tableData.map((x)=> {
        //   //  if(x.check){
        //   //   this.totalmouldqty+=parseFloat(x.mouldqty)
        //   //  }
        //   return x.check=false;
        //   })  
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
    selectRecord(data, event, index) {
        if (event.detail.checked) {
            this.tableData[index].check = true;
            // this.tableDataTemp[index].check=true;
            this.totalmasterbatchwgt += parseFloat(data.masterbatchwgt);
            this.totalexpectedbatchwgt += parseFloat(data.expbatchqty);
            this.dataArray.push(data.batid);
            this.postData.iteminfo = this.dataArray;
        }
        else {
            this.tableData[index].check = false;
            //  this.tableDataTemp[index].check=false;
            this.dataArray.map((x, i) => {
                if (x === data.batid) {
                    this.totalmasterbatchwgt -= parseFloat(data.masterbatchwgt);
                    this.totalexpectedbatchwgt -= parseFloat(data.expbatchqty);
                    this.dataArray.splice(i, 1);
                    this.postData.iteminfo = this.dataArray;
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
            // this.tableData=this.tableDataTemp;
            this.tableData = this.tableDataTemp.filter((x) => {
                return x.location === this.postData["location"];
            });
            // this.dataArray=[];
            // this.totalmasterbatchwgt=0;
            // this.totalexpectedbatchwgt=0;
            // this.tableData.map((x)=> {
            //   //  if(x.check){
            //   //   this.totalmouldqty+=parseFloat(x.mouldqty)
            //   //  }
            //   return x.check=false;
            //   })
        }
        else {
            if (filterValue.length >= 3) {
                this.tableData = this.tableData.filter((employee) => employee.cpdname.toLowerCase().includes(filterValueLower) ||
                    employee.batid.toLowerCase().includes(filterValueLower) ||
                    employee.masterbatchwgt.toLowerCase().includes(filterValueLower) ||
                    employee.expbatchqty.toLowerCase().includes(filterValueLower));
                // this.dataArray=[];
                // this.totalmasterbatchwgt=0;
                // this.totalexpectedbatchwgt=0;
                // this.tableData.map((x)=> {
                //   // if(x.check){
                //   //  this.totalmouldqty+=parseFloat(x.mouldqty)
                //   // }
                //   return x.check=false;
                //  })
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
FinalplanningPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__.ScreenOrientation },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
FinalplanningPage.propDecorators = {
    selectComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['selectComponent',] }],
    selectComponent1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['selectComponent1',] }]
};
FinalplanningPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-finalplanning',
        template: _finalplanning_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_finalplanning_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FinalplanningPage);



/***/ }),

/***/ 39339:
/*!******************************************************************!*\
  !*** ./src/app/finalplanning/finalplanning.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".reports-table {\n  overflow-x: auto;\n}\n\n.inventory-content {\n  background-color: #f0f1f2;\n}\n\n.headers {\n  color: #454f63;\n  font-family: \"Open Sans\";\n  font-weight: bold;\n  font-size: 15px;\n  margin-top: 0px;\n  word-wrap: break-word;\n}\n\n.border,\n.single-border {\n  border-bottom: 2px solid #989898;\n}\n\n.single-border {\n  padding-top: 12px;\n}\n\n.content {\n  color: #454f63;\n  font-family: \"Open Sans\";\n  font-size: 12px;\n}\n\n#datePicker {\n  background: white;\n  border: 1px solid #0000001f;\n}\n\n/* Modal Header */\n\n.modal-header {\n  background-color: #00709c;\n  color: white;\n}\n\n/* Modal Footer */\n\n.modal-footer {\n  padding: 2px 16px;\n  color: white;\n}\n\n/* Modal Content */\n\n.modal-content {\n  z-index: 2;\n  position: absolute;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  width: 98%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  top: 3%;\n  margin-left: 1%;\n}\n\n.modal-content2 {\n  z-index: 6;\n  position: absolute;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  width: 84%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  top: 30%;\n  margin-left: 7%;\n}\n\n/* The Close Button */\n\n.close {\n  color: white;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n/* Add Animation */\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n\n.selectdddate {\n  background: #c5c1c1;\n  border: 0;\n  color: #4a4646;\n  box-shadow: 0px 0px 1px grey;\n  padding: 4px;\n  border-radius: 3px;\n}\n\n.selectdd {\n  background: white;\n  border: 0;\n  color: black;\n  border-bottom: 1px solid grey;\n  position: absolute;\n  top: 24%;\n  left: -2%;\n}\n\n.modal-content3 {\n  z-index: 10;\n  position: absolute;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  width: 96%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  top: 30%;\n  margin-left: 2%;\n}\n\n.textbox {\n  box-shadow: 0px 0px 2px grey;\n  border-radius: 3px;\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmFscGxhbm5pbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFRTs7RUFFRSxnQ0FBQTtBQUNKOztBQUdFO0VBQ0UsaUJBQUE7QUFBSjs7QUFJRTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFESjs7QUFLRTtFQUNFLGlCQUFBO0VBQ0EsMkJBQUE7QUFGSjs7QUFLRSxpQkFBQTs7QUFDQTtFQUVBLHlCQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU9FLGlCQUFBOztBQUNBO0VBQ0EsaUJBQUE7RUFFQSxZQUFBO0FBTEY7O0FBUUUsa0JBQUE7O0FBQ0E7RUFDQSxVQUFBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDRFQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0FBTEo7O0FBUUU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDRFQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBTEo7O0FBUUUscUJBQUE7O0FBQ0E7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUxGOztBQVFFLGtCQUFBOztBQUNBO0VBQ0E7SUFBTSxXQUFBO0lBQWEsVUFBQTtFQUhuQjtFQUlBO0lBQUksTUFBQTtJQUFRLFVBQUE7RUFBWjtBQUNGOztBQUdFO0VBQ0UsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUU7RUFDRSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBREo7O0FBSUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDRFQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUU7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQURKIiwiZmlsZSI6ImZpbmFscGxhbm5pbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcG9ydHMtdGFibGUge1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmludmVudG9yeS1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYxZjI7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXJzIHtcclxuICAgIGNvbG9yOiAjNDU0ZjYzO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB9XHJcbiAgXHJcbiAgLmJvcmRlcixcclxuICAuc2luZ2xlLWJvcmRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzk4OTg5ODtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLnNpbmdsZS1ib3JkZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5jb250ZW50IHtcclxuICAgIGNvbG9yOiAjNDU0ZjYzO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gICNkYXRlUGlja2Vye1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMWY7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE1vZGFsIEhlYWRlciAqL1xyXG4gIC5tb2RhbC1oZWFkZXIge1xyXG4gIC8vIHBhZGRpbmc6IDFweCAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDcwOWM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKiBNb2RhbCBGb290ZXIgKi9cclxuICAubW9kYWwtZm9vdGVyIHtcclxuICBwYWRkaW5nOiAycHggMTZweDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLyogTW9kYWwgQ29udGVudCAqL1xyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICB6LWluZGV4OiAyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiKDAgMCAwIC8gMjAlKSwgMCA2cHggMjBweCAwIHJnYigwIDAgMCAvIDE5JSk7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIHRvcDogMyU7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1jb250ZW50MiB7XHJcbiAgICB6LWluZGV4OiA2O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogODQlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiKDAgMCAwIC8gMjAlKSwgMCA2cHggMjBweCAwIHJnYigwIDAgMCAvIDE5JSk7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIHRvcDogMzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDclO1xyXG4gIH1cclxuICBcclxuICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXHJcbiAgLmNsb3NlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgLyogQWRkIEFuaW1hdGlvbiAqL1xyXG4gIEBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XHJcbiAgZnJvbSB7dG9wOiAtMzAwcHg7IG9wYWNpdHk6IDB9XHJcbiAgdG8ge3RvcDogMDsgb3BhY2l0eTogMX1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnNlbGVjdGRkZGF0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYzVjMWMxO1xyXG4gICAgYm9yZGVyOiAwOyAgXHJcbiAgICBjb2xvcjogIzRhNDY0NjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IGdyZXk7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWxlY3RkZHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI0JTtcclxuICAgIGxlZnQ6IC0yJTtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLWNvbnRlbnQzIHtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogOTYlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiKDAgMCAwIC8gMjAlKSwgMCA2cHggMjBweCAwIHJnYigwIDAgMCAvIDE5JSk7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIHRvcDogMzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIH1cclxuICBcclxuICAudGV4dGJveHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 71451:
/*!******************************************************************!*\
  !*** ./src/app/finalplanning/finalplanning.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-img src=\"{{brandImage}}\" style=\"height: 50px;width:50px\" slot=\"start\"></ion-img>               \n    <div style=\"display: flex;justify-content: center;\">\n      <img src=\"./assets/image/route.png\" height=\"25\" width=\"25\">\n      <b style=\"font-size: 20px;\">&nbsp;&nbsp;Final Plan</b>\n    </div>\n    <ion-back-button defaultHref=\"Planhome\" slot=\"end\" (click)=\"displaymode()\"></ion-back-button>   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"inventory-content\">\n\n  <ion-grid>\n    <ion-row nowrap class=\"ion-align-items-center\">\n      <ion-col size=\"4\">       \n        <ion-input (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\" [(ngModel)]=\"searchData\"><ion-icon name=\"search\"></ion-icon></ion-input>\n      </ion-col> \n      <ion-col size=\"5\">\n        <!-- <ion-label style=\"font-size: small;color: grey;\">Location</ion-label>                -->\n        <ionic-selectable\n              #selectComponent\n              [(ngModel)]=\"selected\"\n              [items]=\"locationArray\"\n              itemValueField=\"value\"\n              itemTextField=\"name\"\n              [canSearch]=\"true\"\n              (onChange)=\"OperatorChanged($event)\"\n              searchFailText= \"Operator not found\"\n              placeholder=\"Location\">\n          </ionic-selectable>        \n    </ion-col>     \n      <ion-col size=\"2\"><ion-button color=\"success\" size=\"small\" (click)=\"callPlan()\">Create</ion-button></ion-col>      \n  </ion-row>\n  </ion-grid>\n  <br>\n  <div class=\"reports-table\" style=\"position: relative;top:-4%\">\n   \n    <ion-grid>\n      <ion-row nowrap class=\"headers\">\n        <ion-col size=\"3\" class=\"single-border\" tappable (click)=\"sort('batid',true)\">\n          BatchId ({{tableData.length}})\n        </ion-col>\n        <ion-col size=\"3\" class=\"single-border\" tappable (click)=\"sort('cpdname',true)\">\n          Compound\n        </ion-col>        \n        <ion-col size=\"2\" class=\"single-border\" (click)=\"sort('masterbatchwgt',true)\" style=\"text-align:center\">\n          MBWt ({{totalmasterbatchwgt.toFixed(1)}})\n        </ion-col>\n        <ion-col size=\"2\" class=\"single-border\" (click)=\"sort('expbatchqty',true)\" style=\"text-align:center\">\n          ExpWt ({{totalexpectedbatchwgt.toFixed(1)}})\n        </ion-col>\n        <ion-col size=\"2\" class=\"single-border\" style=\"text-align:center\">  ({{dataArray.length}})       \n        </ion-col>                                \n      </ion-row>\n      <div style=\"height: 75vh; overflow: scroll;\">\n        <ion-row nowrap class=\"content\" *ngFor=\"let x of tableData;let i=index\">\n          <ion-col size=\"3\"> {{ x.dispbatid }}</ion-col>\n          <ion-col size=\"3\"> {{ x.cpdname }}</ion-col>          \n          <ion-col size=\"2\" style=\"text-align: right;font-size: medium;\"> {{x.masterbatchwgt}}</ion-col>\n          <ion-col size=\"2\" style=\"text-align: right;font-size: medium;\"> {{ x.expbatchqty }} </ion-col>  \n          <ion-col size=\"2\" style=\"text-align: center;\"> <ion-checkbox color=\"primary\" (ionChange)=\"selectRecord(x,$event,i)\" [checked]=\"x.check\"> </ion-checkbox></ion-col>                       \n        </ion-row>\n        <ion-row *ngIf=\"tableData.length == 0\">\n          <ion-col size=\"6\" offset=\"4\"> No Records Found</ion-col>\n        </ion-row>\n      </div>\n\n    </ion-grid>\n  </div>\n\n<div class=\"modal-content3\" *ngIf=\"modalDeleteData3\">\n  <div class=\"modal-header\" style=\"padding: 2%;\">\n    <!-- <span class=\"close\" (click)=\"modalDeleteData3=!modalDeleteData3\">&times;</span> -->\n    Final Plan\n  </div>\n  <div class=\"modal-body\" style=\"text-align: center;\">\n    <ion-row nowrap class=\"ion-align-items-center\">\n      <ion-col size=\"3\">  \n          <ion-label style=\"font-size: small;color: grey;\">Shift</ion-label>            \n          <ionic-selectable\n                #selectComponent1\n                [(ngModel)]=\"selectedShift\"\n                [items]=\"shiftArray\"\n                itemValueField=\"value\"\n                itemTextField=\"name\"\n                [canSearch]=\"true\"\n                (onChange)=\"ShiftChanged($event)\"\n                searchFailText= \"Shift not found\"\n                placeholder=\"Select Shift\">\n          </ionic-selectable>        \n      </ion-col>\n      <ion-col size=\"3\">\n          <!-- <ion-label style=\"font-size: small;color: grey;\">Location</ion-label>               \n          <ionic-selectable\n                #selectComponent\n                [(ngModel)]=\"selected\"\n                [items]=\"locationArray\"\n                itemValueField=\"value\"\n                itemTextField=\"name\"\n                [canSearch]=\"true\"\n                (onChange)=\"OperatorChanged($event)\"\n                searchFailText= \"Operator not found\"\n                placeholder=\"Select Location\">\n            </ionic-selectable>         -->\n      </ion-col>\n      <ion-col size=\"4\">              \n        <ion-col>\n          <ion-label style=\"font-size: small;color: grey;\">Date</ion-label> \n          <input type=\"date\" class=\"selectdddate\" [(ngModel)]=\"postData.plandate\" id=\"datefield\"/>\n        </ion-col>      \n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col size=\"12\">Are You Sure to Create the Plan?</ion-col>\n    </ion-row>\n  </div> \n  <div class=\"modal-footer\" style=\"float: right;\">\n    <ion-button color=\"success\" size=\"small\" (click)=\"submitData()\">Create</ion-button>\n    <ion-button color=\"danger\" size=\"small\" (click)=\"modalDeleteData3=!modalDeleteData3\">Cancel</ion-button>   \n  </div>\n</div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_finalplanning_finalplanning_module_ts.js.map