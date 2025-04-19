"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_inspectionplanning_inspectionplanning_module_ts"],{

/***/ 99757:
/*!*************************************************************************!*\
  !*** ./src/app/inspectionplanning/inspectionplanning-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InspectionplanningPageRoutingModule": () => (/* binding */ InspectionplanningPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _inspectionplanning_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspectionplanning.page */ 26027);




const routes = [
    {
        path: '',
        component: _inspectionplanning_page__WEBPACK_IMPORTED_MODULE_0__.InspectionplanningPage
    }
];
let InspectionplanningPageRoutingModule = class InspectionplanningPageRoutingModule {
};
InspectionplanningPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InspectionplanningPageRoutingModule);



/***/ }),

/***/ 86340:
/*!*****************************************************************!*\
  !*** ./src/app/inspectionplanning/inspectionplanning.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InspectionplanningPageModule": () => (/* binding */ InspectionplanningPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _inspectionplanning_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspectionplanning-routing.module */ 99757);
/* harmony import */ var _inspectionplanning_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspectionplanning.page */ 26027);







let InspectionplanningPageModule = class InspectionplanningPageModule {
};
InspectionplanningPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _inspectionplanning_routing_module__WEBPACK_IMPORTED_MODULE_0__.InspectionplanningPageRoutingModule
        ],
        declarations: [_inspectionplanning_page__WEBPACK_IMPORTED_MODULE_1__.InspectionplanningPage]
    })
], InspectionplanningPageModule);



/***/ }),

/***/ 26027:
/*!***************************************************************!*\
  !*** ./src/app/inspectionplanning/inspectionplanning.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InspectionplanningPage": () => (/* binding */ InspectionplanningPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _inspectionplanning_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspectionplanning.page.html?ngResource */ 67165);
/* harmony import */ var _inspectionplanning_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspectionplanning.page.scss?ngResource */ 27560);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);








let InspectionplanningPage = class InspectionplanningPage {
    constructor(router, toastController, http, loadingController) {
        this.router = router;
        this.toastController = toastController;
        this.http = http;
        this.loadingController = loadingController;
        this.brandImage = "";
        this.dataUrl = localStorage.getItem('url');
        this.tableData = [];
        this.tableDataTemp = [];
        this.flag = true;
        // currentDate=formatDate(new Date, 'yyyy-MM-dd', 'en');
        this.dataArray = [];
        this.postData = {
            // "issdate": "",
            "iteminfo": this.dataArray
        };
        this.searchData = "";
        this.totalreceivedqty = 0;
        this.modalDeleteData3 = false;
        if (localStorage.getItem('userid') == null && localStorage.getItem('password') == null) {
            this.router.navigate(["home"]);
        }
        this.checkStorage();
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
            loading.present();
            const headers = {
                'auth-id': localStorage.getItem('authid'),
                'client-id': localStorage.getItem('clientid'),
                'user': localStorage.getItem('userid'),
                'password': localStorage.getItem('password')
            };
            this.http.get(this.dataUrl + "/api/inspectissue", { headers }).subscribe({
                next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                    data.message.map((x) => {
                        x.avlqty = parseFloat(x.avlqty);
                        x.check = false;
                    });
                    this.tableData = data.message;
                    this.tableDataTemp = data.message;
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
            // if(this.postData.issdate !=""){
            if (this.dataArray.length == 0) {
                this.toastfunction("Please Select any Record", "danger");
                this.modalDeleteData3 = false;
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
            this.http.post(this.dataUrl + '/api/inspectissue', this.postData, { headers }).subscribe({
                next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                    if (data.status == "success") {
                        loading.dismiss();
                        this.toastfunction(data.message, "success");
                        this.scan();
                        this.tableData = [];
                        this.tableDataTemp = [];
                        this.dataArray = [];
                        this.postData = {
                            // "issdate": "",
                            "iteminfo": this.dataArray
                        };
                        this.searchData = "";
                        this.modalDeleteData3 = false;
                        this.totalreceivedqty = 0;
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
            // }
            // else{
            //   this.toastfunction("Please Select Date","danger");
            // }
            console.log(this.postData);
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
    // selectDate(e){    
    //   this.postData["issdate"]=this.currentDate;
    // }
    navBack() {
        this.router.navigate(['home']);
    }
    selectRecord(data, event, index) {
        if (event.detail.checked) {
            this.tableData[index].check = true;
            this.totalreceivedqty += parseFloat(data.avlqty);
            this.dataArray.push({
                "sno": parseInt(data.sno),
                "boughtout": parseInt(data.boughtout)
            });
        }
        else {
            this.tableData[index].check = true;
            this.dataArray.map((x, i) => {
                if (x.sno === parseInt(data.sno)) {
                    this.totalreceivedqty -= parseFloat(data.avlqty);
                    this.dataArray.splice(i, 1);
                }
            });
        }
        this.postData['iteminfo'] = this.dataArray;
        // console.log(this.postData)   
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
            // this.totalreceivedqty=0;
            // this.tableData.map((x)=> {
            //   //  if(x.check){
            //   //   this.totalmouldqty+=parseFloat(x.mouldqty)
            //   //  }
            //   return x.check=false;
            //   })
        }
        else {
            if (filterValue.length >= 3) {
                this.tableData = this.tableData.filter((employee) => 
                // employee.avlqty.includes(filterValueLower) || 
                // employee.boughtout.toLowerCase().includes(filterValueLower) || 
                employee.cmpdname.toLowerCase().includes(filterValueLower) ||
                    employee.cmpdrefno.toLowerCase().includes(filterValueLower) ||
                    employee.issref.toLowerCase().includes(filterValueLower)
                // ||employee.sno.toLowerCase().includes(filterValueLower)
                );
                // this.dataArray=[];
                // this.postData['iteminfo']=this.dataArray;
                // this.totalreceivedqty=0;
                // this.tableData.map((x)=> {
                //   //  if(x.check){
                //   //   this.totalmouldqty+=parseFloat(x.mouldqty)
                //   //  }
                //   return x.check=false;
                //   })
            }
        }
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
};
InspectionplanningPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController }
];
InspectionplanningPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-inspectionplanning',
        template: _inspectionplanning_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_inspectionplanning_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InspectionplanningPage);



/***/ }),

/***/ 27560:
/*!****************************************************************************!*\
  !*** ./src/app/inspectionplanning/inspectionplanning.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".reports-table {\n  overflow-x: auto;\n}\n\n.inventory-content {\n  background-color: #f0f1f2;\n}\n\n.headers {\n  color: #454f63;\n  font-family: \"Open Sans\";\n  font-weight: bold;\n  font-size: 14px;\n  margin-top: 10px;\n  word-wrap: break-word;\n}\n\n.border,\n.single-border {\n  border-bottom: 2px solid #989898;\n}\n\n.single-border {\n  padding-top: 12px;\n}\n\n.content {\n  color: #454f63;\n  font-family: \"Open Sans\";\n  font-size: 12px;\n}\n\n#datePicker {\n  background: white;\n  border: 1px solid #0000001f;\n}\n\n/* Modal Header */\n\n.modal-header {\n  padding: 1px 15px;\n  background-color: #00709c;\n  color: white;\n}\n\n/* Modal Footer */\n\n.modal-footer {\n  padding: 2px 16px;\n  color: white;\n}\n\n/* Modal Content */\n\n.modal-content {\n  z-index: 2;\n  position: absolute;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  width: 98%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  top: 3%;\n  margin-left: 1%;\n}\n\n.modal-content2 {\n  z-index: 6;\n  position: absolute;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  width: 48%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  top: 30%;\n  margin-left: 24%;\n}\n\n/* The Close Button */\n\n.close {\n  color: white;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n/* Add Animation */\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3BlY3Rpb25wbGFubmluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDSyxnQkFBQTtBQUNOOztBQUVJO0VBQ0UseUJBQUE7QUFDTjs7QUFFSTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFDTjs7QUFFSTs7RUFFRSxnQ0FBQTtBQUNOOztBQUdJO0VBQ0UsaUJBQUE7QUFBTjs7QUFJSTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFETjs7QUFLSTtFQUNFLGlCQUFBO0VBQ0EsMkJBQUE7QUFGTjs7QUFNQSxpQkFBQTs7QUFDQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBSEY7O0FBT0EsaUJBQUE7O0FBQ0E7RUFDRSxpQkFBQTtFQUVBLFlBQUE7QUFMRjs7QUFRQSxrQkFBQTs7QUFDQTtFQUNFLFVBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsNEVBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7QUFMSjs7QUFRQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsNEVBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FBTEY7O0FBUUEscUJBQUE7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUxGOztBQVFBLGtCQUFBOztBQUNBO0VBQ0U7SUFBTSxXQUFBO0lBQWEsVUFBQTtFQUhuQjtFQUlBO0lBQUksTUFBQTtJQUFRLFVBQUE7RUFBWjtBQUNGIiwiZmlsZSI6Imluc3BlY3Rpb25wbGFubmluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLnJlcG9ydHMtdGFibGUge1xyXG4gICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnZlbnRvcnktY29udGVudCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYxZjI7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlcnMge1xyXG4gICAgICBjb2xvcjogIzQ1NGY2MztcclxuICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIH1cclxuXHJcbiAgICAuYm9yZGVyLFxyXG4gICAgLnNpbmdsZS1ib3JkZXIge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzk4OTg5ODtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLnNpbmdsZS1ib3JkZXIge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICBjb2xvcjogIzQ1NGY2MztcclxuICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgI2RhdGVQaWNrZXJ7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMWY7XHJcbiAgfVxyXG5cclxuICBcclxuLyogTW9kYWwgSGVhZGVyICovXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDFweCAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDcwOWM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuLyogTW9kYWwgRm9vdGVyICovXHJcbi5tb2RhbC1mb290ZXIge1xyXG4gIHBhZGRpbmc6IDJweCAxNnB4O1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICM1Y2I4NWM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBNb2RhbCBDb250ZW50ICovXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICB6LWluZGV4OiAyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiKDAgMCAwIC8gMjAlKSwgMCA2cHggMjBweCAwIHJnYigwIDAgMCAvIDE5JSk7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIHRvcDogMyU7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50MiB7XHJcbiAgei1pbmRleDogNjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogNDglO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYigwIDAgMCAvIDIwJSksIDAgNnB4IDIwcHggMCByZ2IoMCAwIDAgLyAxOSUpO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICB0b3A6IDMwJTtcclxuICBtYXJnaW4tbGVmdDogMjQlO1xyXG59XHJcblxyXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXHJcbi5jbG9zZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi8qIEFkZCBBbmltYXRpb24gKi9cclxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcclxuICBmcm9tIHt0b3A6IC0zMDBweDsgb3BhY2l0eTogMH1cclxuICB0byB7dG9wOiAwOyBvcGFjaXR5OiAxfVxyXG59Il19 */";

/***/ }),

/***/ 67165:
/*!****************************************************************************!*\
  !*** ./src/app/inspectionplanning/inspectionplanning.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>       \n        <ion-img src=\"{{brandImage}}\" style=\"height: 50px;width:50px\" slot=\"start\"></ion-img>       \n        <div style=\"display: flex;justify-content: center;\">\n        <img src=\"./assets/image/statistics.png\" height=\"25\" width=\"25\">\n        <b style=\"font-size: 20px;\">&nbsp;&nbsp;Inspection Plan</b>\n        </div>\n        <ion-back-button defaultHref=\"Planhome\" slot=\"end\"></ion-back-button>   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"inventory-content\">\n  <div class=\"reports-table\">    \n    <ion-grid>\n      <ion-row nowrap class=\"ion-align-items-center\">      \n      <ion-col size=\"10\">\n        <!-- <label>Select Date:</label><input type=\"date\" [(ngModel)]=\"currentDate\" (click)=\"selectDate($event)\" (focusout)=\"selectDate($event)\" id=\"datePicker\"> -->\n        <ion-input (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\" [(ngModel)]=\"searchData\"></ion-input>\n      </ion-col>\n      <ion-col size=\"2\"><ion-button color=\"secondary\" size=\"small\" (click)=\"modalDeleteData3=true\">Issue</ion-button></ion-col>\n    </ion-row>\n    </ion-grid>\n\n    \n\n    <ion-grid>\n      <ion-row nowrap class=\"headers\">\n        <ion-col size=\"3\" class=\"single-border\" (click)=\"sort('issref',true)\">\n          Key Ref. ({{tableData.length}})\n        </ion-col>\n        <ion-col size=\"3\" class=\"single-border\" (click)=\"sort('cmpdrefno',true)\">\n          Part No\n        </ion-col>\n        <ion-col size=\"3\" class=\"single-border\" (click)=\"sort('cmpdname',true)\">\n          Part Desc.\n        </ion-col>\n        <ion-col size=\"2\" class=\"single-border\" (click)=\"sort('avlqty',true)\">\n          Rec. Qty ({{totalreceivedqty.toFixed(1)}})\n        </ion-col>\n        <ion-col size=\"1\" class=\"single-border\">\n          ({{dataArray.length}})\n        </ion-col>\n      </ion-row>\n\n      <ion-row nowrap class=\"content\" *ngFor=\"let x of tableData;;let i=index\">\n        <ion-col size=\"3\"> {{ x.issref }} </ion-col>\n        <ion-col size=\"3\"> {{ x.cmpdname}} </ion-col>\n        <ion-col size=\"3\"> {{ x.cmpdrefno }} </ion-col>\n        <ion-col size=\"2\" style=\"font-size: medium;\"> {{ x.avlqty }} </ion-col>\n        <ion-col size=\"1\"> <ion-checkbox color=\"primary\" (ionChange)=\"selectRecord(x,$event,i)\" [checked]=\"x.check\"> </ion-checkbox> </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"tableData.length == 0\">\n        <ion-col size=\"6\" offset=\"4\"> No Records Found</ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n\n  <div class=\"modal-content2\" *ngIf=\"modalDeleteData3\">\n    <div class=\"modal-header\">\n      <span class=\"close\" (click)=\"modalDeleteData3=!modalDeleteData3\">&times;</span>\n      <p style=\"margin: 8px 5px;\">Inspection Plan</p>\n    </div>\n    <div class=\"modal-body\" style=\"text-align: center;\">\n      <br>\n      Are You Sure Want to Issue?\n      <br>\n      <br>\n    </div>\n    <div class=\"modal-footer\" style=\"float: right;\">\n      <ion-button color=\"success\" size=\"small\" (click)=\"submitData()\">Yes</ion-button>\n      <ion-button color=\"danger\" size=\"small\" (click)=\"modalDeleteData3=!modalDeleteData3\">No</ion-button>   \n    </div>\n  </div>\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_inspectionplanning_inspectionplanning_module_ts.js.map