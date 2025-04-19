"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_deflashplanning_deflashplanning_module_ts"],{

/***/ 56361:
/*!*******************************************************************!*\
  !*** ./src/app/deflashplanning/deflashplanning-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeflashplanningPageRoutingModule": () => (/* binding */ DeflashplanningPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _deflashplanning_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deflashplanning.page */ 97319);




const routes = [
    {
        path: '',
        component: _deflashplanning_page__WEBPACK_IMPORTED_MODULE_0__.DeflashplanningPage
    }
];
let DeflashplanningPageRoutingModule = class DeflashplanningPageRoutingModule {
};
DeflashplanningPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DeflashplanningPageRoutingModule);



/***/ }),

/***/ 14641:
/*!***********************************************************!*\
  !*** ./src/app/deflashplanning/deflashplanning.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeflashplanningPageModule": () => (/* binding */ DeflashplanningPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _deflashplanning_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deflashplanning-routing.module */ 56361);
/* harmony import */ var _deflashplanning_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deflashplanning.page */ 97319);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ 25073);









let DeflashplanningPageModule = class DeflashplanningPageModule {
};
DeflashplanningPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule,
            _deflashplanning_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeflashplanningPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_deflashplanning_page__WEBPACK_IMPORTED_MODULE_1__.DeflashplanningPage]
    })
], DeflashplanningPageModule);



/***/ }),

/***/ 97319:
/*!*********************************************************!*\
  !*** ./src/app/deflashplanning/deflashplanning.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeflashplanningPage": () => (/* binding */ DeflashplanningPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _deflashplanning_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deflashplanning.page.html?ngResource */ 48407);
/* harmony import */ var _deflashplanning_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deflashplanning.page.scss?ngResource */ 20807);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);








let DeflashplanningPage = class DeflashplanningPage {
    constructor(router, toastController, http, loadingController) {
        this.router = router;
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
        this.operatorArray = [];
        this.postData = {
            "operator": "",
            // "issdate": "",
            "iteminfo": this.dataArray
        };
        this.flag = true;
        this.flag2 = true;
        this.modalDeleteData = false;
        this.modalDeleteData2 = false;
        this.modalDeleteData3 = false;
        this.searchData = "";
        this.totalmouldqty = 0;
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
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
            this.http.get(this.dataUrl + "/api/deflashissue", { headers }).subscribe({
                next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                    for (var key of Object.keys(data.message)) {
                        if (key != "operators") {
                            data.message[key]["check"] = false;
                            data.message[key]["mouldqty"] = parseFloat(data.message[key]["mouldqty"]);
                            this.tableData.push(data.message[key]);
                            this.tableDataTemp.push(data.message[key]);
                        }
                        if (key == "operators") {
                            data.message["operators"].map((x) => {
                                this.operatorArray.push({ name: x, value: x });
                            });
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
    submitData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            // if(this.postData.issdate !="" && this.postData.operator !="")
            if (this.dataArray.length == 0) {
                this.toastfunction("Please Select any Record", "danger");
                this.modalDeleteData3 = false;
                return false;
            }
            if (this.postData.operator != "") {
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
                this.http.post(this.dataUrl + '/api/deflashissue', this.postData, { headers }).subscribe({
                    next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                        if (data.status == "success") {
                            loading.dismiss();
                            this.toastfunction(data.message, "success");
                            this.scan();
                            this.tableData = [];
                            this.tableDataTemp = [];
                            this.dataArray = [];
                            this.operatorArray = [];
                            this.postData = {
                                "operator": "",
                                // "issdate": "",
                                "iteminfo": this.dataArray
                            };
                            this.selected = null;
                            this.searchData = "";
                            this.modalDeleteData3 = false;
                            this.totalmouldqty = 0;
                        }
                        else {
                            loading.dismiss();
                            this.toastfunction(data.message, "danger");
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
            else {
                this.toastfunction("Please Select Operator", "danger");
                this.modalDeleteData3 = false;
            }
        });
    }
    deleteList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (this.postData.operator != "") {
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
                this.http.get(this.dataUrl + '/api/canceldeflashissue/' + this.postData.operator, { headers }).subscribe({
                    next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                        if (data.status == "success") {
                            this.deleteData = data.message;
                            this.deleteData.map((x) => {
                                return x.issqty = parseFloat(x.issqty);
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
            }
            else {
                this.toastfunction("Please Select Operator", "danger");
            }
        });
    }
    callDeflashing(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.currentItem = data;
            this.modalDeleteData2 = true;
        });
    }
    deleteDeflashing() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
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
            this.http.post(this.dataUrl + '/api/canceldeflashissue', {
                "defiss": this.currentItem.defiss,
                "sno": parseInt(this.currentItem.sno),
                "mouldref": this.currentItem.mouldref
            }, { headers }).subscribe({
                next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
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
        this.postData["operator"] = event.value.name;
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
    selectRecord(data, event, index) {
        if (event.detail.checked) {
            this.tableData[index].check = true;
            // this.tableDataTemp[index].check=true;
            this.totalmouldqty += parseFloat(data.mouldqty);
            this.dataArray.push({
                "moldref": data.moldref,
                "planid": data.planid
            });
        }
        else {
            this.tableData[index].check = false;
            // this.tableDataTemp[index].check=false;
            this.dataArray.map((x, i) => {
                if (x.moldref === data.moldref) {
                    this.totalmouldqty -= parseFloat(data.mouldqty);
                    this.dataArray.splice(i, 1);
                }
            });
        }
        this.postData['iteminfo'] = this.dataArray;
    }
    toastfunction(msg, colour) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
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
            // this.dataArray=[];
            // this.postData['iteminfo']=this.dataArray;
            // this.totalmouldqty=0;
            // this.tableData.map((x)=> {
            //   //  if(x.check){
            //   //   this.totalmouldqty+=parseFloat(x.mouldqty)
            //   //  }
            //   return x.check=false;
            //   })
        }
        else {
            if (filterValue.length >= 3) {
                this.tableData = this.tableData.filter((employee) => employee.cmpdname.includes(filterValueLower) ||
                    employee.cmpdrefno.toLowerCase().includes(filterValueLower) ||
                    employee.planid.toLowerCase().includes(filterValueLower) ||
                    employee.mouldqty.toString().includes(filterValueLower));
                // this.dataArray=[];
                // this.postData['iteminfo']=this.dataArray;
                // this.totalmouldqty=0;
                // this.tableData.map((x)=> {
                //   // if(x.check){
                //   //  this.totalmouldqty+=parseFloat(x.mouldqty)
                //   // }
                //   return x.check=false;
                //  })
            }
        }
    }
};
DeflashplanningPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController }
];
DeflashplanningPage.propDecorators = {
    selectComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['selectComponent',] }]
};
DeflashplanningPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-deflashplanning',
        template: _deflashplanning_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_deflashplanning_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DeflashplanningPage);



/***/ }),

/***/ 20807:
/*!**********************************************************************!*\
  !*** ./src/app/deflashplanning/deflashplanning.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".reports-table {\n  overflow-x: auto;\n}\n\n.inventory-content {\n  background-color: #f0f1f2;\n}\n\n.headers {\n  color: #454f63;\n  font-family: \"Open Sans\";\n  font-weight: bold;\n  font-size: 14px;\n  margin-top: 0px;\n  word-wrap: break-word;\n}\n\n.border,\n.single-border {\n  border-bottom: 2px solid #989898;\n}\n\n.single-border {\n  padding-top: 12px;\n}\n\n.content {\n  color: #454f63;\n  font-family: \"Open Sans\";\n  font-size: 12px;\n}\n\n#datePicker {\n  background: white;\n  border: 1px solid #0000001f;\n}\n\n/* Modal Header */\n\n.modal-header {\n  padding: 1px 15px;\n  background-color: #00709c;\n  color: white;\n}\n\n/* Modal Footer */\n\n.modal-footer {\n  padding: 2px 16px;\n  color: white;\n}\n\n/* Modal Content */\n\n.modal-content {\n  z-index: 2;\n  position: absolute;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  width: 98%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  top: 3%;\n  margin-left: 1%;\n}\n\n.modal-content2 {\n  z-index: 6;\n  position: absolute;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  width: 48%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  top: 30%;\n  margin-left: 24%;\n}\n\n/* The Close Button */\n\n.close {\n  color: white;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n/* Add Animation */\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmxhc2hwbGFubmluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVFOztFQUVFLGdDQUFBO0FBQ0o7O0FBR0U7RUFDRSxpQkFBQTtBQUFKOztBQUlFO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQURKOztBQUtFO0VBQ0UsaUJBQUE7RUFDQSwyQkFBQTtBQUZKOztBQUtBLGlCQUFBOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFGRjs7QUFNQSxpQkFBQTs7QUFDQTtFQUNFLGlCQUFBO0VBRUEsWUFBQTtBQUpGOztBQU9BLGtCQUFBOztBQUNBO0VBQ0UsVUFBQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSw0RUFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtBQUpKOztBQU9BO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSw0RUFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFPQSxxQkFBQTs7QUFDQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSkY7O0FBT0Esa0JBQUE7O0FBQ0E7RUFDRTtJQUFNLFdBQUE7SUFBYSxVQUFBO0VBRm5CO0VBR0E7SUFBSSxNQUFBO0lBQVEsVUFBQTtFQUNaO0FBQ0YiLCJmaWxlIjoiZGVmbGFzaHBsYW5uaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXBvcnRzLXRhYmxlIHtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuaW52ZW50b3J5LWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjFmMjtcclxuICB9XHJcblxyXG4gIC5oZWFkZXJzIHtcclxuICAgIGNvbG9yOiAjNDU0ZjYzO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB9XHJcblxyXG4gIC5ib3JkZXIsXHJcbiAgLnNpbmdsZS1ib3JkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM5ODk4OTg7XHJcblxyXG4gIH1cclxuXHJcbiAgLnNpbmdsZS1ib3JkZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgY29sb3I6ICM0NTRmNjM7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG5cclxuICAjZGF0ZVBpY2tlcntcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDFmO1xyXG59XHJcblxyXG4vKiBNb2RhbCBIZWFkZXIgKi9cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMXB4IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzA5YztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4vKiBNb2RhbCBGb290ZXIgKi9cclxuLm1vZGFsLWZvb3RlciB7XHJcbiAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzVjYjg1YztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIE1vZGFsIENvbnRlbnQgKi9cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2IoMCAwIDAgLyAyMCUpLCAwIDZweCAyMHB4IDAgcmdiKDAgMCAwIC8gMTklKTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgdG9wOiAzJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQyIHtcclxuICB6LWluZGV4OiA2O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiA0OCU7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiKDAgMCAwIC8gMjAlKSwgMCA2cHggMjBweCAwIHJnYigwIDAgMCAvIDE5JSk7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIHRvcDogMzAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyNCU7XHJcbn1cclxuXHJcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cclxuLmNsb3NlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLyogQWRkIEFuaW1hdGlvbiAqL1xyXG5Aa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xyXG4gIGZyb20ge3RvcDogLTMwMHB4OyBvcGFjaXR5OiAwfVxyXG4gIHRvIHt0b3A6IDA7IG9wYWNpdHk6IDF9XHJcbn0iXX0= */";

/***/ }),

/***/ 48407:
/*!**********************************************************************!*\
  !*** ./src/app/deflashplanning/deflashplanning.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>       \n        <ion-img src=\"{{brandImage}}\" style=\"height: 50px;width:50px\" slot=\"start\"></ion-img>       \n        <div style=\"display: flex;justify-content: center;\">\n        <img src=\"./assets/image/layer.png\" height=\"25\" width=\"25\">\n        <b style=\"font-size: 20px;\">&nbsp;&nbsp;Deflashing Plan</b>\n        </div>\n        <ion-back-button defaultHref=\"Planhome\" slot=\"end\"></ion-back-button>   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"inventory-content\">\n\n  <ion-grid>\n    <ion-row nowrap class=\"ion-align-items-center\">\n      <ion-col size=\"3\">\n        <!-- <label>Select Date:</label><input type=\"date\" [(ngModel)]=\"currentDate\" (click)=\"selectDate($event)\" (focusout)=\"selectDate($event)\" id=\"datePicker\"> -->\n        \n        <ion-input (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\" [(ngModel)]=\"searchData\"><ion-icon name=\"search\"></ion-icon></ion-input>\n      </ion-col>\n      <ion-col size=\"4\">      \n        <ion-buttons>\n          <ionic-selectable\n                #selectComponent\n                [(ngModel)]=\"selected\"\n                [items]=\"operatorArray\"\n                itemValueField=\"value\"\n                itemTextField=\"name\"\n                [canSearch]=\"true\"\n                (onChange)=\"OperatorChanged($event)\"\n                searchFailText= \"Operator not found\"\n                placeholder=\"Operator\">\n            </ionic-selectable>\n        </ion-buttons>\n      </ion-col>\n      <ion-col size=\"3\"><ion-button color=\"secondary\" size=\"small\" (click)=\"modalDeleteData3=true\">Issue</ion-button></ion-col>\n      <ion-col size=\"2\"><ion-button color=\"danger\" size=\"small\" (click)=\"deleteList()\">Delete</ion-button></ion-col>\n  </ion-row>\n  </ion-grid>\n\n  <div class=\"reports-table\">\n   \n    <ion-grid>\n      <ion-row nowrap class=\"headers\">\n        <ion-col size=\"3\" class=\"single-border\" tappable (click)=\"sort('planid',true)\">\n          Key Ref. ({{tableData.length}})\n        </ion-col>\n        <ion-col size=\"3\" class=\"single-border\" (click)=\"sort('cmpdname',true)\">\n          Part No\n        </ion-col>\n        <ion-col size=\"3\" class=\"single-border\" (click)=\"sort('cmpdrefno',true)\">\n          Part Desc.\n        </ion-col>\n        <ion-col size=\"2\" class=\"single-border\" (click)=\"sort('mouldqty',true)\">\n          Mld. Qty ({{totalmouldqty.toFixed(1)}})\n        </ion-col>\n        <!-- <ion-col size=\"2\" class=\"single-border\">\n          Operator\n        </ion-col> -->\n        <ion-col size=\"1\" class=\"single-border\">\n          <!-- Action -->\n          ({{dataArray.length}})   \n        </ion-col>\n      </ion-row>\n      <div style=\"height: 75vh; overflow: scroll;\">\n        <ion-row nowrap class=\"content\" *ngFor=\"let x of tableData;let i=index\">\n          <ion-col size=\"3\"> {{ x.planid }}</ion-col>\n          <ion-col size=\"3\"> {{ x.cmpdname }} </ion-col>\n          <ion-col size=\"3\"> {{ x.cmpdrefno }} </ion-col>\n          <ion-col size=\"2\" style=\"font-size: medium;\"> {{ x.mouldqty }} </ion-col>\n          <!-- <ion-col size=\"2\"> {{ x.onlyinhouse }} </ion-col> -->\n          <ion-col size=\"1\"> <ion-checkbox color=\"primary\" (ionChange)=\"selectRecord(x,$event,i)\" [checked]=\"x.check\"> </ion-checkbox> </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"tableData.length == 0\">\n          <ion-col size=\"6\" offset=\"4\"> No Records Found</ion-col>\n        </ion-row>\n      </div>\n\n    </ion-grid>\n  </div>\n\n  <!-- Modal content -->\n<div class=\"modal-content\" *ngIf=\"modalDeleteData\">\n  <div class=\"modal-header\">\n    <span class=\"close\" (click)=\"modalDeleteData=!modalDeleteData\">&times;</span>\n    <p style=\"margin: 8px 5px;\">Deflashing Plan List</p>\n  </div>\n  <div class=\"modal-body\">\n    <ion-grid>\n      <ion-row nowrap class=\"headers\">\n        <ion-col size=\"3\" class=\"single-border\" (click)=\"sort2('defiss',false)\">\n          Plan ID ({{deleteData.length}})\n        </ion-col>\n        <ion-col size=\"3\" class=\"single-border\" (click)=\"sort2('issdatef',false)\">\n          Issue Date\n        </ion-col>\n        <ion-col size=\"3\" class=\"single-border\" (click)=\"sort2('cmpdName',false)\">\n          Name\n        </ion-col>       \n        <ion-col size=\"2\" class=\"single-border\" (click)=\"sort2('issqty',false)\">\n          Issue Qty\n         </ion-col>\n        <ion-col size=\"1\" class=\"single-border\">\n          <!-- Action -->\n        </ion-col>\n      </ion-row>\n      <div style=\"height: 55vh; overflow: scroll;\">\n        <ion-row nowrap class=\"content\" *ngFor=\"let x of deleteData\">\n          <ion-col size=\"3\"> {{ x.defiss }}</ion-col>\n          <ion-col size=\"3\"> {{ x.issdatef }} </ion-col>\n          <ion-col size=\"3\"> {{ x.cmpdName }} </ion-col>\n          <ion-col size=\"2\"> {{ x.issqty }} </ion-col>        \n          <ion-col size=\"1\"> <ion-icon name=\"trash-outline\" (click)=\"callDeflashing(x)\" style=\"color:red\"></ion-icon></ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"deleteData.length == 0\">\n          <ion-col size=\"6\" offset=\"4\"> No Records Found</ion-col>\n        </ion-row>\n      </div>\n    </ion-grid>\n  </div>\n</div>\n\n\n<div class=\"modal-content2\" *ngIf=\"modalDeleteData2\">\n  <div class=\"modal-header\">\n    <span class=\"close\" (click)=\"modalDeleteData2=!modalDeleteData2\">&times;</span>\n    <p style=\"margin: 8px 5px;\">Deflashing Plan</p>\n  </div>\n  <div class=\"modal-body\" style=\"text-align: center;\">\n    <br>\n    Are You Sure Want to Delete?\n    <br>\n    <br>\n  </div>\n  <div class=\"modal-footer\" style=\"float: right;\">\n    <ion-button color=\"success\" size=\"small\" (click)=\"deleteDeflashing()\">Yes</ion-button>\n    <ion-button color=\"danger\" size=\"small\" (click)=\"modalDeleteData2=!modalDeleteData2\">No</ion-button>   \n  </div>\n</div>\n\n<div class=\"modal-content2\" *ngIf=\"modalDeleteData3\">\n  <div class=\"modal-header\">\n    <span class=\"close\" (click)=\"modalDeleteData3=!modalDeleteData3\">&times;</span>\n    <p style=\"margin: 8px 5px;\">Deflashing Plan</p>\n  </div>\n  <div class=\"modal-body\" style=\"text-align: center;\">\n    <br>\n    Are You Sure Want to Issue?\n    <br>\n    <br>\n  </div>\n  <div class=\"modal-footer\" style=\"float: right;\">\n    <ion-button color=\"success\" size=\"small\" (click)=\"submitData()\">Yes</ion-button>\n    <ion-button color=\"danger\" size=\"small\" (click)=\"modalDeleteData3=!modalDeleteData3\">No</ion-button>   \n  </div>\n</div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_deflashplanning_deflashplanning_module_ts.js.map