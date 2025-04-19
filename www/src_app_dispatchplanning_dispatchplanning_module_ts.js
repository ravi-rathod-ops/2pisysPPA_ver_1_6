"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_dispatchplanning_dispatchplanning_module_ts"],{

/***/ 4190:
/*!******************************************!*\
  !*** ./src/app/dispatchplanning.pipe.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DispatchplanningPipe": () => (/* binding */ DispatchplanningPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let DispatchplanningPipe = class DispatchplanningPipe {
    transform(value, ...args) {
        return null;
    }
};
DispatchplanningPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'dispatchplanning'
    })
], DispatchplanningPipe);



/***/ }),

/***/ 32322:
/*!*********************************************************************!*\
  !*** ./src/app/dispatchplanning/dispatchplanning-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DispatchplanningPageRoutingModule": () => (/* binding */ DispatchplanningPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _dispatchplanning_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatchplanning.page */ 50805);




const routes = [
    {
        path: '',
        component: _dispatchplanning_page__WEBPACK_IMPORTED_MODULE_0__.DispatchplanningPage
    }
];
let DispatchplanningPageRoutingModule = class DispatchplanningPageRoutingModule {
};
DispatchplanningPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DispatchplanningPageRoutingModule);



/***/ }),

/***/ 51672:
/*!*************************************************************!*\
  !*** ./src/app/dispatchplanning/dispatchplanning.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DispatchplanningPageModule": () => (/* binding */ DispatchplanningPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _dispatchplanning_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatchplanning-routing.module */ 32322);
/* harmony import */ var _dispatchplanning_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dispatchplanning.page */ 50805);
/* harmony import */ var _dispatchplanning_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dispatchplanning.pipe */ 4190);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ 25073);









let DispatchplanningPageModule = class DispatchplanningPageModule {
};
DispatchplanningPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__.IonicSelectableModule,
            _dispatchplanning_routing_module__WEBPACK_IMPORTED_MODULE_0__.DispatchplanningPageRoutingModule
        ],
        declarations: [_dispatchplanning_page__WEBPACK_IMPORTED_MODULE_1__.DispatchplanningPage, _dispatchplanning_pipe__WEBPACK_IMPORTED_MODULE_2__.DispatchplanningPipe]
    })
], DispatchplanningPageModule);



/***/ }),

/***/ 50805:
/*!***********************************************************!*\
  !*** ./src/app/dispatchplanning/dispatchplanning.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DispatchplanningPage": () => (/* binding */ DispatchplanningPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _dispatchplanning_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatchplanning.page.html?ngResource */ 74060);
/* harmony import */ var _dispatchplanning_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dispatchplanning.page.scss?ngResource */ 95612);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ 6222);
/* harmony import */ var _ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/chooser/ngx */ 24368);











let DispatchplanningPage = class DispatchplanningPage {
    constructor(router, chooser, zone, screenOrientation, toastController, http, loadingController) {
        this.router = router;
        this.chooser = chooser;
        this.zone = zone;
        this.screenOrientation = screenOrientation;
        this.toastController = toastController;
        this.http = http;
        this.loadingController = loadingController;
        this.brandImage = "";
        this.dataUrl = localStorage.getItem('url');
        this.tableData = [];
        this.deleteData = [];
        // currentDate=formatDate(new Date, 'yyyy-MM-dd', 'en');
        this.dataArray = [];
        this.postData = {
            "cusid": "",
            "didate": "",
            "isso": 0,
            "iteminfo": this.dataArray
        };
        this.modalDeleteData = false;
        this.modalDeleteData2 = false;
        this.modalDeleteData3 = false;
        this.customerArray = [];
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe('en-US');
        this.mode = false;
        this.componentArray = [];
        this.sampleArray = [];
        this.dinum = "";
        this.diqty = null;
        this.type = true;
        this.setDisabled = true;
        this.excelData = [];
        this.flag1 = true;
        this.type = true;
        if (localStorage.getItem('userid') == null && localStorage.getItem('password') == null) {
            this.router.navigate(["home"]);
        }
        this.checkStorage();
    }
    onKeyup(event, qty, index) {
        // console.log(event.target.value + " " + this.diqty)
        if (this.mode) {
            if (event.target.value > this.diqty) {
                event.target.value = this.diqty;
                this.tableData[index].diqty = parseInt(event.target.value);
                this.toastfunction("Qty is not exceed greater then actual Qty", "danger");
                return false;
            }
        }
    }
    onChangeValue(data, index, item, type) {
        if (type == "component") {
            if (this.mode) {
                let datass = this.sampleArray.filter((x) => {
                    return x.cmpdid == data.value.value;
                });
                this.tableData[index].cmpdid = datass[0].cmpdid;
                this.tableData[index].didesc = datass[0].soref;
                this.tableData[index].diqty = parseInt(datass[0].penqty);
                this.diqty = parseInt(datass[0].penqty);
                this.dinum = datass[0].soref;
                console.log(this.tableData);
            }
            else {
                this.tableData[index].cmpdid = data.value.value;
            }
        }
        if (type == "di") {
            this.tableData[index].didesc = data.target.value;
        }
        if (type == "qty") {
            this.tableData[index].diqty = parseInt(data.target.value);
        }
        if (type == "Sales") {
            this.type = false;
            this.mode = true;
            this.setDisabled = true;
            setTimeout(() => {
                let dd = new Date();
                let ddc = dd.setDate(dd.getDate());
                let d = this.datePipe.transform(ddc, 'yyyy-MM-dd');
                document.getElementById("datefield").value = d;
                // this.planDate=d;
                this.currentDate = d;
                this.postData.didate = d;
                console.log(d);
            }, 1000);
        }
        if (type == "Schedule") {
            this.type = false;
            this.mode = false;
            this.setDisabled = false;
            setTimeout(() => {
                let dd = new Date();
                let ddc = dd.setDate(dd.getDate());
                let d = this.datePipe.transform(ddc, 'yyyy-MM-dd');
                document.getElementById("datefield").value = d;
                // this.planDate=d;
                this.currentDate = d;
                this.postData.didate = d;
                console.log(d);
            }, 1000);
        }
        // console.log(this.tableData)   
    }
    ngOnInit() {
        this.brandImage = localStorage.getItem('brandImage');
        this.scan();
        // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    }
    addRow() {
        if (this.selectedCustomer === "" || this.selectedCustomer == undefined) {
            this.toastfunction("Please Select Customer", "danger");
        }
        else {
            this.tableData.push({
                "cmpdid": "",
                "didesc": "",
                "diqty": 0
            });
        }
    }
    deleteItem(index) {
        this.tableData.splice(index, 1);
    }
    filesel(event) {
        this.zone.run(() => {
            var files = event.target.files;
            var file = files[0];
            var reader = new FileReader();
            reader.readAsText(file);
            reader.onloadend = (event) => {
                var csv = event.target.result;
                var array = csv.split("\n");
                var headers = ["cmpdid", "didesc", "diqty"];
                for (var i = 0; i < array.length - 1; i++) {
                    var obj = {};
                    var currentline = array[i].split(",");
                    for (var j = 0; j < headers.length; j++) {
                        if (headers[j] == "didesc") {
                            obj[headers[j]] = "";
                        }
                        else {
                            obj[headers[j]] = currentline[j];
                        }
                    }
                    obj["diqty"] = parseInt(obj["diqty"]);
                    if (this.selectedCustomer === "" || this.selectedCustomer == undefined) {
                        this.toastfunction("Please Select Customer", "danger");
                    }
                    else {
                        this.tableData.push(obj);
                        setTimeout(() => {
                            this.modalDeleteData2 = true;
                        }, 1000);
                    }
                }
            };
        });
    }
    pickfile() {
        this.chooser.getFile().then((value) => {
            let val = value.dataURI.split(",");
            this.fileObj = value;
            let a = atob(val[1]);
            var array = a.split("\n");
            var headers = ["cmpdid", "didesc", "diqty"];
            for (var i = 0; i < array.length; i++) {
                let obj;
                if (array[i] != "") {
                    obj = {};
                    var currentline = array[i].split(",");
                    let chkval = this.componentArray.some(el => el.name === currentline[0]);
                    let comName = this.componentArray.filter(el => el.name === currentline[0]);
                    if (chkval) {
                        if (!this.mode) {
                            for (var j = 0; j < headers.length; j++) {
                                if (currentline.length == 2) {
                                    obj["cmpdid"] = comName[0].value;
                                    obj["didesc"] = "";
                                    let a = currentline[1];
                                    a = a.replace("\r", "");
                                    obj["diqty"] = parseInt(a);
                                }
                                if (currentline.length == 3) {
                                    obj["cmpdid"] = comName[0].value;
                                    obj["didesc"] = currentline[1];
                                    let a = currentline[2];
                                    a = a.replace("\r", "");
                                    obj["diqty"] = parseInt(a);
                                }
                            }
                        }
                        else {
                            for (var j = 0; j < headers.length; j++) {
                                obj["cmpdid"] = comName[0].value;
                                obj["didesc"] = currentline[1];
                                let a = currentline[2];
                                a = a.replace("\r", "");
                                obj["diqty"] = parseInt(a);
                                let arr = this.sampleArray.filter((x) => {
                                    return x.cmpdname === currentline[0];
                                });
                                console.log(arr);
                                if (arr[0].soref != currentline[1]) {
                                    this.toastfunction("DI not match with " + currentline[0], "danger");
                                    this.modalDeleteData2 = false;
                                    return false;
                                }
                                if (parseInt(currentline[2]) > parseInt(arr[0].penqty)) {
                                    this.toastfunction("DI Qty : " + currentline[2] + " is greater then : " + arr[0].penqty + " for " + currentline[0], "danger");
                                    this.modalDeleteData2 = false;
                                    return false;
                                }
                            }
                        }
                    }
                    else {
                        this.toastfunction("No Such Part Number for " + currentline[0], "danger");
                        this.modalDeleteData2 = false;
                        return false;
                    }
                }
                if (this.selectedCustomer === "" || this.selectedCustomer == undefined) {
                    this.toastfunction("Please Select Customer", "danger");
                }
                else {
                    // this.tableData.push(obj); 
                    if (obj != undefined) {
                        this.excelData.push(obj);
                    }
                    console.log(this.tableData);
                    this.modalDeleteData2 = true;
                }
            }
        }, (err) => {
            alert(JSON.stringify(err));
        });
    }
    getComponentValue(data) {
        let a = this.componentArray.filter((x) => { return x.name === data; });
        console.log(a);
    }
    scan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
            this.http.get(this.dataUrl + "/api/despatchplan", { headers }).subscribe({
                next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    data.message.map((x) => {
                        this.customerArray.push({ name: x.cusname, value: x.cusid });
                    });
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
    submitData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.excelData.length > 0) {
                this.tableData = this.excelData;
            }
            this.modalDeleteData2 = false;
            let flag = 0;
            if (this.tableData.length == 0) {
                this.toastfunction("Please add DI details", "danger");
                return false;
            }
            this.postData.isso = !this.mode ? 0 : 1;
            this.tableData.map((x) => {
                if (x.cmpdid == "" || x.diqty <= 0) {
                    this.toastfunction("Please provide datas in DI", "danger");
                    flag++;
                }
            });
            if (flag == 0) {
                this.postData.iteminfo = this.tableData;
                console.log(this.postData);
                this.selectedCustomer = "";
                this.tableData = [];
                this.excelData = [];
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
                this.http.post(this.dataUrl + '/api/despatchplan', this.postData, { headers }).subscribe({
                    next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        if (data.status == "success") {
                            loading.dismiss();
                            this.toastfunction(data.message, "success");
                            this.scan();
                            this.tableData = [];
                            this.excelData = [];
                            this.dataArray = [];
                            this.selected = null;
                            this.modalDeleteData3 = false;
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
            }
        });
    }
    CustomerChanged(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.postData["cusid"] = event.value.value;
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
            let data = !this.mode ? event.value.value : event.value.value + "/so";
            this.componentArray = [];
            this.http.get(this.dataUrl + "/api/despatchplan/" + data, { headers }).subscribe({
                next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    this.tableData = [];
                    this.sampleArray = data.message;
                    data.message.map((x) => {
                        this.componentArray.push({ name: x.cmpdname, value: x.cmpdid });
                    });
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
    sort(colName, flag) {
        if (this.flag1) {
            this.tableData.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0);
            this.flag1 = false;
            return false;
        }
        if (!this.flag1) {
            this.tableData = this.tableData.reverse();
            this.flag1 = true;
            return false;
        }
    }
};
DispatchplanningPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_3__.Chooser },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__.ScreenOrientation },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController }
];
DispatchplanningPage.propDecorators = {
    selectComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['selectComponent',] }]
};
DispatchplanningPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-dispatchplanning',
        template: _dispatchplanning_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dispatchplanning_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DispatchplanningPage);



/***/ }),

/***/ 95612:
/*!************************************************************************!*\
  !*** ./src/app/dispatchplanning/dispatchplanning.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".reports-table {\n  overflow-x: auto;\n}\n\n.inventory-content {\n  background-color: #f0f1f2;\n}\n\n.headers {\n  color: #454f63;\n  font-family: \"Open Sans\";\n  font-weight: bold;\n  font-size: 15px;\n  margin-top: 0px;\n  word-wrap: break-word;\n}\n\n.border,\n.single-border {\n  border-bottom: 2px solid #989898;\n}\n\n.single-border {\n  padding-top: 12px;\n}\n\n.content {\n  color: #454f63;\n  font-family: \"Open Sans\";\n  font-size: 12px;\n}\n\n#datePicker {\n  background: white;\n  border: 1px solid #0000001f;\n}\n\n/* Modal Header */\n\n.modal-header {\n  background-color: #00709c;\n  color: white;\n}\n\n/* Modal Footer */\n\n.modal-footer {\n  padding: 2px 16px;\n  color: white;\n}\n\n/* Modal Content */\n\n.modal-content {\n  z-index: 2;\n  position: absolute;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  width: 98%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  top: 3%;\n  margin-left: 1%;\n}\n\n.modal-content2 {\n  z-index: 6;\n  position: absolute;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  width: 84%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  top: 30%;\n  margin-left: 7%;\n}\n\n/* The Close Button */\n\n.close {\n  color: white;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n/* Add Animation */\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n\n.selectdddate {\n  background: #c5c1c1;\n  border: 0;\n  color: #4a4646;\n  box-shadow: 0px 0px 1px grey;\n  padding: 4px;\n  border-radius: 3px;\n}\n\n.selectdd {\n  background: white;\n  border: 0;\n  color: black;\n  border-bottom: 1px solid grey;\n  position: absolute;\n  top: 24%;\n  left: -2%;\n}\n\n.modal-content3 {\n  z-index: 10;\n  position: absolute;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  width: 96%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  top: 30%;\n  margin-left: 2%;\n}\n\n.textbox {\n  box-shadow: 0px 0px 2px grey;\n  border-radius: 3px;\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BhdGNocGxhbm5pbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFRTs7RUFFRSxnQ0FBQTtBQUNKOztBQUdFO0VBQ0UsaUJBQUE7QUFBSjs7QUFJRTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFESjs7QUFLRTtFQUNFLGlCQUFBO0VBQ0EsMkJBQUE7QUFGSjs7QUFLRSxpQkFBQTs7QUFDQTtFQUVBLHlCQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU9FLGlCQUFBOztBQUNBO0VBQ0EsaUJBQUE7RUFFQSxZQUFBO0FBTEY7O0FBUUUsa0JBQUE7O0FBQ0E7RUFDQSxVQUFBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDRFQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0FBTEo7O0FBUUU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDRFQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBTEo7O0FBUUUscUJBQUE7O0FBQ0E7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUxGOztBQVFFLGtCQUFBOztBQUNBO0VBQ0E7SUFBTSxXQUFBO0lBQWEsVUFBQTtFQUhuQjtFQUlBO0lBQUksTUFBQTtJQUFRLFVBQUE7RUFBWjtBQUNGOztBQUdFO0VBQ0UsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUU7RUFDRSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBREo7O0FBSUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDRFQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUU7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQURKIiwiZmlsZSI6ImRpc3BhdGNocGxhbm5pbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcG9ydHMtdGFibGUge1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmludmVudG9yeS1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYxZjI7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXJzIHtcclxuICAgIGNvbG9yOiAjNDU0ZjYzO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB9XHJcbiAgXHJcbiAgLmJvcmRlcixcclxuICAuc2luZ2xlLWJvcmRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzk4OTg5ODtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLnNpbmdsZS1ib3JkZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5jb250ZW50IHtcclxuICAgIGNvbG9yOiAjNDU0ZjYzO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gICNkYXRlUGlja2Vye1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMWY7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE1vZGFsIEhlYWRlciAqL1xyXG4gIC5tb2RhbC1oZWFkZXIge1xyXG4gIC8vIHBhZGRpbmc6IDFweCAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDcwOWM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKiBNb2RhbCBGb290ZXIgKi9cclxuICAubW9kYWwtZm9vdGVyIHtcclxuICBwYWRkaW5nOiAycHggMTZweDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLyogTW9kYWwgQ29udGVudCAqL1xyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICB6LWluZGV4OiAyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiKDAgMCAwIC8gMjAlKSwgMCA2cHggMjBweCAwIHJnYigwIDAgMCAvIDE5JSk7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIHRvcDogMyU7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1jb250ZW50MiB7XHJcbiAgICB6LWluZGV4OiA2O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogODQlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiKDAgMCAwIC8gMjAlKSwgMCA2cHggMjBweCAwIHJnYigwIDAgMCAvIDE5JSk7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIHRvcDogMzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDclO1xyXG4gIH1cclxuICBcclxuICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXHJcbiAgLmNsb3NlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgLyogQWRkIEFuaW1hdGlvbiAqL1xyXG4gIEBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XHJcbiAgZnJvbSB7dG9wOiAtMzAwcHg7IG9wYWNpdHk6IDB9XHJcbiAgdG8ge3RvcDogMDsgb3BhY2l0eTogMX1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnNlbGVjdGRkZGF0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYzVjMWMxO1xyXG4gICAgYm9yZGVyOiAwOyAgXHJcbiAgICBjb2xvcjogIzRhNDY0NjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IGdyZXk7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWxlY3RkZHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI0JTtcclxuICAgIGxlZnQ6IC0yJTtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLWNvbnRlbnQzIHtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogOTYlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiKDAgMCAwIC8gMjAlKSwgMCA2cHggMjBweCAwIHJnYigwIDAgMCAvIDE5JSk7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIHRvcDogMzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIH1cclxuICBcclxuICAudGV4dGJveHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 74060:
/*!************************************************************************!*\
  !*** ./src/app/dispatchplanning/dispatchplanning.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-img src=\"{{brandImage}}\" style=\"height: 50px;width:50px\" slot=\"start\"></ion-img>               \n    <div style=\"display: flex;justify-content: center;\">\n      <img src=\"./assets/image/delivery.png\" height=\"25\" width=\"25\">\n      <b style=\"font-size: 20px;\">&nbsp;&nbsp;Despatch Plan</b>\n    </div>\n    <ion-back-button defaultHref=\"Planhome\" slot=\"end\"></ion-back-button>  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"inventory-content\">\n\n  \n<div  *ngIf=\"type\">\n  <br>\n  <ion-row>    \n    <ion-col size=\"4\" style=\"text-align: center;\">                     \n      <ion-label style=\"font-size: larger;color: grey;\">Schedule</ion-label>          \n    </ion-col>\n    <ion-col size=\"2\">                            \n      <input type=\"radio\"  (change)=\"onChangeValue($event,'','','Schedule')\" name=\"check\" style=\"transform: scale(1.4);\">       \n    </ion-col>\n    <ion-col size=\"4\" style=\"text-align: center;\">                    \n      <ion-label style=\"font-size: larger;color: grey;\">Sales Order</ion-label>            \n    </ion-col>\n    <ion-col size=\"2\">                           \n      <input type=\"radio\" (change)=\"onChangeValue($event,'','','Sales')\" name=\"check\" style=\"transform: scale(1.4);\">     \n    </ion-col>\n  </ion-row>\n</div>\n\n  <ion-grid *ngIf=\"!type\">   \n\n    <ion-row nowrap class=\"ion-align-items-center\">\n      <ion-col size=\"6\">  \n        <!-- <ion-label style=\"font-size: small;color: grey;\">Customer</ion-label>             -->\n        <ionic-selectable\n              #selectComponent\n              [(ngModel)]=\"selectedCustomer\"\n              [items]=\"customerArray\"\n              itemValueField=\"value\"\n              itemTextField=\"name\"\n              [canSearch]=\"true\"\n              (onChange)=\"CustomerChanged($event)\"\n              searchFailText= \"Customer not found\"\n              placeholder=\"Customer\">\n        </ionic-selectable>        \n    </ion-col> \n    <ion-col size=\"6\">              \n      <ion-col>\n        <ion-label style=\"font-size: small;color: grey;\">Cutoff Date</ion-label> \n        <input type=\"date\" class=\"selectdddate\" [(ngModel)]=\"postData.didate\" id=\"datefield\"/>\n      </ion-col>      \n    </ion-col>              \n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"6\">\n        <!-- <ion-label position=\"stacked\" class=\"label\">File Upload</ion-label> -->\n        <!-- <ion-input type=\"file\" name=\"file\" (change)=\"filesel($event)\" style=\"font-size: 70%;\" #myInput></ion-input>   -->\n        <ion-button color=\"danger\" size=\"small\" (click)=\"pickfile()\">Choose CSV File</ion-button>\n    </ion-col>    \n      <ion-col size=\"3\"><ion-button color=\"primary\" size=\"small\" >Upload</ion-button></ion-col>\n      <ion-col size=\"3\"><ion-button color=\"success\" size=\"small\" (click)=\"submitData()\">Create</ion-button></ion-col>\n    </ion-row>\n\n    <div class=\"reports-table\" style=\"position: relative;top:-4%\">   \n      <ion-grid>\n        <ion-row nowrap class=\"headers\">\n          <ion-col size=\"5\" class=\"single-border\" tappable>\n            Part Number ({{tableData.length}})\n          </ion-col>       \n          <ion-col size=\"3\" class=\"single-border\" (click)=\"sort('didesc',true)\">\n            DI No.\n          </ion-col>\n          <ion-col size=\"2\" class=\"single-border\" (click)=\"sort('diqty',true)\">\n            Qty\n          </ion-col>\n          <ion-col size=\"2\" class=\"single-border\" style=\"text-align: center;\">  \n            <!-- <ion-button color=\"danger\" size=\"small\" (click)=\"addRow()\">Add Row</ion-button>   -->\n            <ion-icon name=\"add-circle\" style=\"color:red;font-size: 180%;\" (click)=\"addRow()\"></ion-icon>       \n          </ion-col>                                \n        </ion-row>\n  \n        <ion-row nowrap class=\"headers\" *ngFor=\"let x of tableData;index as i\">\n          <ion-col size=\"5\" class=\"single-border\" tappable>\n            <ionic-selectable\n                #selectComponent1                \n                [items]=\"componentArray\"\n                itemValueField=\"value\"\n                itemTextField=\"name\"\n                [canSearch]=\"true\"\n                (onChange)=\"onChangeValue($event,i,x,'component')\"\n                searchFailText= \"Component not found\"\n                placeholder=\"Component\"                \n                >\n          </ionic-selectable>        \n          </ion-col>       \n          <ion-col size=\"3\" class=\"single-border\">\n            <ion-input class=\"textbox\" type=\"text\" (ionChange)=\"onChangeValue($event,i,x,'di')\" [(ngModel)]=\"x.didesc\" [disabled]=\"setDisabled\" style=\"height:25px;font-size: medium;\"></ion-input>\n          </ion-col>\n          <ion-col size=\"2\" class=\"single-border\">\n            <ion-input class=\"textbox\" type=\"number\" (ionChange)=\"onChangeValue($event,i,x,'qty')\" [(ngModel)]=\"x.diqty\" (keyup)=\"onKeyup($event,x.diqty,i)\" style=\"height:25px;font-size: medium;\"></ion-input>\n          </ion-col>\n          <ion-col size=\"2\" class=\"single-border\" style=\"text-align: center;\">\n            <ion-icon name=\"trash-outline\" style=\"color:red\" (click)=\"deleteItem(i)\"></ion-icon>          \n          </ion-col>                                \n        </ion-row>\n  \n      </ion-grid>\n    </div>\n\n\n    <div class=\"modal-content2\" *ngIf=\"modalDeleteData2\">\n      <div class=\"modal-header\">\n        <!-- <span class=\"close\" (click)=\"modalDeleteData2=!modalDeleteData2;this.tableData=[];\">&times;</span> -->\n        Upload\n      </div>\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <br>\n        Are You Sure Want to Upload?\n        <br>\n        <br>\n      </div>\n      <div class=\"modal-footer\" style=\"float: right;\">\n        <ion-button color=\"success\" size=\"small\" (click)=\"submitData()\">Upload</ion-button>\n        <ion-button color=\"secondary\" size=\"small\" (click)=\"modalDeleteData2=!modalDeleteData2; this.tableData=[];\">Cancel</ion-button>   \n      </div>\n    </div>\n\n  </ion-grid>\n\n \n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_dispatchplanning_dispatchplanning_module_ts.js.map