"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_mouldingplanning_mouldingplanning_module_ts"],{

/***/ 53722:
/*!*********************************************************************!*\
  !*** ./src/app/mouldingplanning/mouldingplanning-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MouldingplanningPageRoutingModule": () => (/* binding */ MouldingplanningPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _mouldingplanning_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mouldingplanning.page */ 18970);




const routes = [
    {
        path: '',
        component: _mouldingplanning_page__WEBPACK_IMPORTED_MODULE_0__.MouldingplanningPage
    }
];
let MouldingplanningPageRoutingModule = class MouldingplanningPageRoutingModule {
};
MouldingplanningPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MouldingplanningPageRoutingModule);



/***/ }),

/***/ 39778:
/*!*************************************************************!*\
  !*** ./src/app/mouldingplanning/mouldingplanning.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MouldingplanningPageModule": () => (/* binding */ MouldingplanningPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _mouldingplanning_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mouldingplanning-routing.module */ 53722);
/* harmony import */ var _mouldingplanning_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mouldingplanning.page */ 18970);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ 25073);








let MouldingplanningPageModule = class MouldingplanningPageModule {
};
MouldingplanningPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mouldingplanning_routing_module__WEBPACK_IMPORTED_MODULE_0__.MouldingplanningPageRoutingModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule
        ],
        declarations: [_mouldingplanning_page__WEBPACK_IMPORTED_MODULE_1__.MouldingplanningPage]
    })
], MouldingplanningPageModule);



/***/ }),

/***/ 18970:
/*!***********************************************************!*\
  !*** ./src/app/mouldingplanning/mouldingplanning.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MouldingplanningPage": () => (/* binding */ MouldingplanningPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _mouldingplanning_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mouldingplanning.page.html?ngResource */ 64876);
/* harmony import */ var _mouldingplanning_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mouldingplanning.page.scss?ngResource */ 70602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);









let MouldingplanningPage = class MouldingplanningPage {
    constructor(router, toastController, http, loadingController) {
        this.router = router;
        this.toastController = toastController;
        this.http = http;
        this.loadingController = loadingController;
        this.brandImage = "";
        this.dataUrl = localStorage.getItem('url');
        this.tableData = [];
        this.deleteData = [];
        this.dataArray = [];
        this.postData = {
            "plandate": "",
            "location": "",
            "iteminfo": this.dataArray
        };
        this.flag2 = true;
        this.selected = "";
        this.modalDeleteData = false;
        this.modalDeleteData2 = false;
        this.modalDeleteData3 = false;
        this.modalDeleteData4 = false;
        this.modalDeleteData5 = false;
        this.customerArray = [];
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe('en-US');
        this.mode = false;
        this.componentArray = [];
        this.modalObj = {};
        this.dinum = "";
        this.diqty = null;
        this.type = true;
        this.setDisabled = true;
        // shiftArray=[{name:"1",value:1},{name:"2",value:2},{name:"3",value:3}]
        this.shiftArray = [];
        this.machineArray = [];
        this.totalActivities = 0;
        this.totalPlanlift = 0;
        this.totalExpqty = 0;
        this.totalShift = 0;
        this.totalMachine = 0;
        this.stockName = "";
        this.locationArray = [];
        this.flag1 = true;
        this.type = true;
        if (localStorage.getItem('userid') == null && localStorage.getItem('password') == null) {
            this.router.navigate(["home"]);
        }
        this.checkStorage();
        setTimeout(() => {
            let dd = new Date();
            let ddc = dd.setDate(dd.getDate());
            let d = this.datePipe.transform(ddc, 'yyyy-MM-dd');
            document.getElementById("datefield").value = d;
            // this.planDate=d;
            this.currentDate = d;
            this.postData.plandate = d;
            console.log(d);
        }, 1000);
    }
    changeData(event) {
        this.postData.plandate = event.target.value;
        this.currentDate = event.target.value;
        this.OperatorChanged(event, "date");
        console.log(event.target.value);
    }
    ngOnInit() {
        this.brandImage = localStorage.getItem('brandImage');
        this.scan();
    }
    addRow() {
        if (this.selectedLocation === "" || this.selectedLocation == undefined) {
            this.toastfunction("Please Select Location", "danger");
        }
        else {
            this.selectedComponent = "";
            this.tableData.push({
                "tool_ref": "",
                "no_of_active_cavities": 0,
                "std_lifts_per_plan": 0,
                "numlifts": 0,
                "numshifts": 0,
                "mcid ": "",
                "expOutput": 0,
                "machineArray": []
            });
        }
    }
    deleteItem(index) {
        this.expOutput = "";
        this.tableData.splice(index, 1);
    }
    scan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
            this.http.get(this.dataUrl + "/api/mouldplan", { headers }).subscribe({
                next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                    data.message["locations"].map((x) => {
                        this.locationArray.push({ name: x, value: x });
                    });
                    for (var [key, value] of Object.entries(data.message["components"])) {
                        this.componentArray.push({ name: `${value}`, value: `${key}` });
                    }
                    // console.log(this.componentArray)
                    if (this.locationArray.length == 1) {
                        this.selected = this.locationArray[0];
                        this.selectedLocation = this.locationArray[0].value;
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
    validateError() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.flag = 1;
            this.tableData.map((x) => {
                if (x.numlifts <= 0) {
                    this.toastfunction("Plan Lift Should not Zero or Negative", "danger");
                    this.flag = 0;
                    return false;
                }
                if (x.numshifts == undefined || x.numshifts == null || x.numshifts == "") {
                    this.toastfunction("Please Select Shift", "danger");
                    this.flag = 0;
                    return false;
                }
                if (x.need_machine === "1") {
                    if (x.mcid == undefined || x.mcid == null || x.mcid == "") {
                        this.toastfunction("Please Select Machine", "danger");
                        this.flag = 0;
                        return false;
                    }
                }
            });
            if (this.flag > 0) {
                this.modalDeleteData4 = true;
            }
        });
    }
    submitData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.modalDeleteData4 = false;
            this.postData.location = this.selectedLocation;
            this.postData.iteminfo = this.tableData;
            console.log(this.postData);
            // this.selectedLocation="";      
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
            this.http.post(this.dataUrl + '/api/mouldplan', this.postData, { headers }).subscribe({
                next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                    if (data.status == "success") {
                        loading.dismiss();
                        this.toastfunction(data.message, "success");
                        this.scan();
                        this.tableData = [];
                        this.dataArray = [];
                        this.machineArray = [];
                        this.locationArray = [];
                        this.componentArray = [];
                        this.selected = "";
                        this.selectedLocation = "";
                        this.expOutput = "";
                        this.totalPlanlift = 0;
                        this.totalExpqty = 0;
                        this.totalShift = 0;
                        this.totalMachine = 0;
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
        });
    }
    OperatorChanged(event, type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (type == "location") {
                this.selectedLocation = event.value.value;
            }
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
            this.http.get(this.dataUrl + "/api/mouldplan/planlist/" + this.selectedLocation + "/" + this.currentDate, { headers }).subscribe({
                next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                    this.tableData = [];
                    if (Array.isArray(data.message)) {
                        this.tableData = data.message;
                        this.tableData.map((x, index) => {
                            x["std_lifts_per_plan"] = x.plannedlifts;
                            x["expOutput"] = x.planqty;
                            x["no_of_active_cavities"] = x.planqty / x.plannedlifts;
                            x["numshifts"] = parseInt(x.numshifts);
                            x["numlifts"] = parseInt(x.std_lifts_per_plan);
                            x["maxshift"] = parseInt(x.numshifts);
                            this.machineArray.push({ name: x.mcref, value: x.mcid });
                            x["machineArray"] = this.machineArray;
                            x["mcid"] = x["machineArray"][0].value;
                            this.machineArray = [];
                            let samp = this.componentArray.filter((d) => { return d.name === x.cmpdname; });
                            x["bind"] = samp[0];
                        });
                    }
                    else {
                        loading.dismiss();
                        this.toastfunction(data.message, "danger");
                    }
                    // this.tableData=data.message; 
                    // this.sampleArray=data.message;
                    // data.message.map((x)=>{
                    //   this.componentArray.push({name:x.cmpdname,value:x.cmpdid});
                    // })   
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
    onChangeValue(event, indexs) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.selectedComponent = event.value.value;
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
            this.http.get(this.dataUrl + "/api/mouldplan/toollist/" + this.selectedLocation + "/" + this.selectedComponent, { headers }).subscribe({
                next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                    this.selectedComponent = event.value;
                    this.stockName = event.value.name;
                    this.machineArray = [];
                    this.shiftArray = [];
                    for (let i = 1; i < Object.keys(data.message).length - 1; i++) {
                        this.tableData.push({
                            "tool_ref": "",
                            "no_of_active_cavities": 0,
                            "std_lifts_per_plan": 0,
                            "numlifts": 0,
                            "numshifts": 0,
                            "mcid ": "",
                            "expOutput": 0,
                            "machineArray": []
                        });
                    }
                    for (var index of Object.keys(data.message)) {
                        if (index != "stocklevel") {
                            this.tableData[indexs + parseInt(index)] = data.message[index];
                            this.tableData[indexs + parseInt(index)]["bind"] = event.value;
                            this.tableData[indexs + parseInt(index)].no_of_active_cavities = parseFloat(this.tableData[indexs + parseInt(index)].no_of_active_cavities);
                            this.tableData[indexs + parseInt(index)].std_lifts_per_plan = parseFloat(this.tableData[indexs + parseInt(index)].std_lifts_per_plan);
                            this.tableData[indexs + parseInt(index)].expOutput = this.tableData[indexs + parseInt(index)].no_of_active_cavities * this.tableData[indexs + parseInt(index)].std_lifts_per_plan;
                            this.tableData[indexs + parseInt(index)].numshifts = parseInt(this.tableData[indexs + parseInt(index)].maxshift);
                            this.tableData[indexs + parseInt(index)]["numlifts"] = parseInt(this.tableData[indexs + parseInt(index)].std_lifts_per_plan);
                            // this.tableData[indexs]["numshifts"]=parseInt(this.tableData[indexs]["numshifts"]);
                            for (let i = 1; i <= this.tableData[indexs + parseInt(index)]["numshifts"]; i++) {
                                this.shiftArray.push(i);
                            }
                            this.tableData[indexs + parseInt(index)]["shiftArray"] = this.shiftArray;
                            this.shiftArray = [];
                            let machinetemp = data.message[index].machines;
                            let machinetemp2 = machinetemp.split(",");
                            machinetemp2.map((x) => {
                                let temp = x.split(":");
                                this.machineArray.push({ name: temp[1], value: temp[0] });
                            });
                            const uniqueIds = [];
                            const unique = this.machineArray.filter(element => {
                                const isDuplicate = uniqueIds.includes(element.name);
                                if (!isDuplicate) {
                                    uniqueIds.push(element.name);
                                    return true;
                                }
                                return false;
                            });
                            this.tableData[indexs + parseInt(index)]["machineArray"] = unique;
                            this.tableData[indexs + parseInt(index)]["mcid"] = unique[0].value; ////
                        }
                    }
                    this.modalObj = data.message["stocklevel"];
                    if (this.modalObj != null) {
                        this.modalDeleteData = true;
                    }
                    this.totalActivities = 0;
                    this.totalPlanlift = 0;
                    this.totalExpqty = 0;
                    this.totalShift = 0;
                    this.totalMachine = 0;
                    let dump = [];
                    this.tableData.map((x) => {
                        this.totalActivities += x.no_of_active_cavities;
                        this.totalPlanlift += x.numlifts;
                        this.totalExpqty += x.expOutput;
                        this.totalShift += x.numshifts;
                        dump.push(x.mcid);
                    });
                    dump = dump.filter((value, index, array) => array.indexOf(value) === index);
                    this.totalMachine = dump.length;
                    loading.dismiss();
                }),
                error: errordata => {
                    if (errordata.error.message) {
                        loading.dismiss();
                        this.tableData[indexs] = {
                            "tool_ref": "",
                            "no_of_active_cavities": 0,
                            "std_lifts_per_plan": 0,
                            "numlifts": 0,
                            "numshifts": 0,
                            "mcid ": "",
                            "expOutput": 0,
                            "machineArray": []
                        };
                        this.shiftArray = [];
                        this.machineArray = [];
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
            this.http.get(this.dataUrl + '/api/cancelmouldplan/' + this.selectedLocation, { headers }).subscribe({
                next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                    if (data.status == "success") {
                        this.deleteData = data.message;
                        this.deleteData.map((x) => {
                            return x.liftplanned = parseFloat(x.liftplanned), x.cpdretqty = parseFloat(x.cpdretqty);
                        });
                        this.modalDeleteData3 = true;
                        loading.dismiss();
                    }
                    else {
                        loading.dismiss();
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
            // }
            // else{
            //   this.toastfunction("Please Select Operator","danger");
            // }
        });
    }
    clearAll() {
        this.tableData = [];
        this.expOutput = "";
        this.selectedComponent = "";
        this.modalDeleteData5 = false;
    }
    callDeflashing(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.currentItem = data;
            this.modalDeleteData2 = true;
        });
    }
    deleteDeflashing() {
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
            this.http.post(this.dataUrl + '/api/cancelmouldplan/' + this.currentItem.planid, "", { headers }).subscribe({
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
                        this.toastfunction("Invalid Company Url, Please Check in Home page", "danger");
                    }
                }
            });
        });
    }
    OperatorChanged2(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.selectedLocation = event.value.value;
            this.deleteList();
        });
    }
    changePlanlifts(lift, index) {
        if ((parseInt(lift) + (parseInt(this.tableData[index].lifts_run))) < parseInt(this.tableData[index].next_validation)) {
            this.tableData[index].expOutput = parseInt(lift) * parseInt(this.tableData[index].no_of_active_cavities);
            this.tableData[index].numlifts = parseInt(lift);
        }
        else {
            this.tableData[index].std_lifts_per_plan = parseInt(this.tableData[index].next_validation);
            this.toastfunction("Lifts Planned + Lifts Run on this Tool is greater than the next validation due lifts", "danger");
            return false;
        }
        this.totalActivities = 0;
        this.totalPlanlift = 0;
        this.totalExpqty = 0;
        this.tableData.map((x) => {
            this.totalActivities += x.no_of_active_cavities;
            this.totalPlanlift += x.numlifts;
            this.totalExpqty += x.expOutput;
            // this.totalShift+=x.numshifts;           
        });
    }
    changeshift(event, index) {
        // this.tableData[index].numshifts=parseInt(event.value.value);
        this.tableData[index].numshifts = parseInt(event);
        this.totalShift = 0;
        this.tableData.map((x) => {
            this.totalShift += x.numshifts;
        });
    }
    changeMachine(event, index) {
        // this.tableData[index].mcid=event.value.value;
        this.tableData[index].mcid = event;
        this.totalMachine = 0;
        let dump = [];
        this.tableData.map((x) => {
            dump.push(x.mcid);
        });
        dump = dump.filter((value, index, array) => array.indexOf(value) === index);
        this.totalMachine = dump.length;
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
};
MouldingplanningPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
MouldingplanningPage.propDecorators = {
    selectComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['selectComponent',] }],
    selectComponent1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['selectComponent1',] }]
};
MouldingplanningPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-mouldingplanning',
        template: _mouldingplanning_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_mouldingplanning_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MouldingplanningPage);



/***/ }),

/***/ 70602:
/*!************************************************************************!*\
  !*** ./src/app/mouldingplanning/mouldingplanning.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".reports-table {\n  overflow-x: auto;\n}\n\n.inventory-content {\n  background-color: #f0f1f2;\n}\n\n.headers {\n  color: #454f63;\n  font-family: \"Open Sans\";\n  font-weight: bold;\n  font-size: 15px;\n  margin-top: 0px;\n  word-wrap: break-word;\n}\n\n.border,\n.single-border {\n  border-bottom: 2px solid #989898;\n}\n\n.single-border {\n  padding-top: 12px;\n}\n\n.content {\n  color: #454f63;\n  font-family: \"Open Sans\";\n  font-size: 12px;\n}\n\n#datePicker {\n  background: white;\n  border: 1px solid #0000001f;\n}\n\n/* Modal Header */\n\n.modal-header {\n  padding: 7px 12px;\n  background-color: #00709c;\n  color: white;\n}\n\n/* Modal Footer */\n\n.modal-footer {\n  padding: 2px 16px;\n  color: white;\n}\n\n/* Modal Content */\n\n.modal-content {\n  z-index: 2;\n  position: absolute;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  width: 95%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  top: 3%;\n  margin-left: 1.5%;\n}\n\n.modal-content2 {\n  z-index: 6;\n  position: absolute;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  width: 84%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  top: 30%;\n  margin-left: 7%;\n}\n\n/* The Close Button */\n\n.close {\n  color: white;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n/* Add Animation */\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n\n.selectdddate {\n  background: #c5c1c1;\n  border: 0;\n  color: #4a4646;\n  box-shadow: 0px 0px 1px grey;\n  padding: 4px;\n  border-radius: 3px;\n}\n\n.selectdd {\n  background: white;\n  border: 0;\n  color: black;\n  border-bottom: 1px solid grey;\n  position: absolute;\n  top: 24%;\n  left: -2%;\n}\n\n.modal-content3 {\n  z-index: 10;\n  position: absolute;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  width: 96%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  top: 30%;\n  margin-left: 2%;\n}\n\n.textbox {\n  box-shadow: 0px 0px 2px grey;\n  border-radius: 3px;\n  text-align: end;\n}\n\n@media all and (orientation: portrait) {\n  .orientation {\n    width: 160%;\n  }\n}\n\n@media all and (orientation: landscape) {\n  .orientation {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdWxkaW5ncGxhbm5pbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFRTs7RUFFRSxnQ0FBQTtBQUNKOztBQUdFO0VBQ0UsaUJBQUE7QUFBSjs7QUFJRTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFESjs7QUFLRTtFQUNFLGlCQUFBO0VBQ0EsMkJBQUE7QUFGSjs7QUFLRSxpQkFBQTs7QUFDQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBRkY7O0FBTUUsaUJBQUE7O0FBQ0E7RUFDQSxpQkFBQTtFQUVBLFlBQUE7QUFKRjs7QUFPRSxrQkFBQTs7QUFDQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsNEVBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0FBSko7O0FBT0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDRFQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBSko7O0FBT0UscUJBQUE7O0FBQ0E7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUpGOztBQU9FLGtCQUFBOztBQUNBO0VBQ0E7SUFBTSxXQUFBO0lBQWEsVUFBQTtFQUZuQjtFQUdBO0lBQUksTUFBQTtJQUFRLFVBQUE7RUFDWjtBQUNGOztBQUVFO0VBQ0UsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0U7RUFDRSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBQUo7O0FBR0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDRFQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0U7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUlFO0VBQ0U7SUFDRSxXQUFBO0VBREo7QUFDRjs7QUFJSTtFQUNFO0lBQ0UsV0FBQTtFQUZOO0FBQ0YiLCJmaWxlIjoibW91bGRpbmdwbGFubmluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVwb3J0cy10YWJsZSB7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuaW52ZW50b3J5LWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjFmMjtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlcnMge1xyXG4gICAgY29sb3I6ICM0NTRmNjM7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIH1cclxuICBcclxuICAuYm9yZGVyLFxyXG4gIC5zaW5nbGUtYm9yZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjOTg5ODk4O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuc2luZ2xlLWJvcmRlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgY29sb3I6ICM0NTRmNjM7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgI2RhdGVQaWNrZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAxZjtcclxuICB9XHJcbiAgXHJcbiAgLyogTW9kYWwgSGVhZGVyICovXHJcbiAgLm1vZGFsLWhlYWRlciB7XHJcbiAgcGFkZGluZzogN3B4IDEycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzA5YztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIE1vZGFsIEZvb3RlciAqL1xyXG4gIC5tb2RhbC1mb290ZXIge1xyXG4gIHBhZGRpbmc6IDJweCAxNnB4O1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICM1Y2I4NWM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAvKiBNb2RhbCBDb250ZW50ICovXHJcbiAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYigwIDAgMCAvIDIwJSksIDAgNnB4IDIwcHggMCByZ2IoMCAwIDAgLyAxOSUpO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICB0b3A6IDMlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEuNSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1jb250ZW50MiB7XHJcbiAgICB6LWluZGV4OiA2O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogODQlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiKDAgMCAwIC8gMjAlKSwgMCA2cHggMjBweCAwIHJnYigwIDAgMCAvIDE5JSk7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIHRvcDogMzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDclO1xyXG4gIH1cclxuICBcclxuICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXHJcbiAgLmNsb3NlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgLyogQWRkIEFuaW1hdGlvbiAqL1xyXG4gIEBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XHJcbiAgZnJvbSB7dG9wOiAtMzAwcHg7IG9wYWNpdHk6IDB9XHJcbiAgdG8ge3RvcDogMDsgb3BhY2l0eTogMX1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnNlbGVjdGRkZGF0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYzVjMWMxO1xyXG4gICAgYm9yZGVyOiAwOyAgXHJcbiAgICBjb2xvcjogIzRhNDY0NjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IGdyZXk7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWxlY3RkZHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI0JTtcclxuICAgIGxlZnQ6IC0yJTtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLWNvbnRlbnQzIHtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogOTYlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiKDAgMCAwIC8gMjAlKSwgMCA2cHggMjBweCAwIHJnYigwIDAgMCAvIDE5JSk7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIHRvcDogMzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIH1cclxuICBcclxuICAudGV4dGJveHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOnBvcnRyYWl0KSB7XHJcbiAgICAub3JpZW50YXRpb257XHJcbiAgICAgIHdpZHRoOiAxNjAlO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAbWVkaWEgYWxsIGFuZCAob3JpZW50YXRpb246bGFuZHNjYXBlKSB7XHJcbiAgICAgIC5vcmllbnRhdGlvbntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICJdfQ== */";

/***/ }),

/***/ 64876:
/*!************************************************************************!*\
  !*** ./src/app/mouldingplanning/mouldingplanning.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-img src=\"{{brandImage}}\" style=\"height: 50px;width:50px\" slot=\"start\"></ion-img>               \n    <div style=\"display: flex;justify-content: center;\">\n      <img src=\"./assets/image/machine-press.png\" height=\"25\" width=\"25\">\n      <b style=\"font-size: 20px;\">&nbsp;&nbsp;Production Plan</b>\n    </div>\n    <ion-back-button defaultHref=\"Planhome\" slot=\"end\"></ion-back-button>  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>   \n\n    <ion-row nowrap class=\"ion-align-items-center\">\n      <ion-col size=\"6\">          \n        <ionic-selectable\n              #selectComponent  \n              [(ngModel)]=\"selected\"           \n              [items]=\"locationArray\"\n              itemValueField=\"value\"\n              itemTextField=\"name\"\n              [canSearch]=\"true\"\n              (onChange)=\"OperatorChanged($event,'location')\"\n              searchFailText= \"Operator not found\"\n              placeholder=\"Select Location\">\n          </ionic-selectable>  \n    </ion-col> \n    <ion-col size=\"4\">                    \n      <ion-label style=\"font-size: small;color: grey;\">Date </ion-label> \n      <input type=\"date\" class=\"selectdddate\" [(ngModel)]=\"postData.didate\" id=\"datefield\" (change)=\"changeData($event)\"/>           \n    </ion-col>      \n    \n    </ion-row>\n\n    <ion-row >\n      <ion-col size=\"6\">\n        <!-- <ion-button color=\"warning\" expand=\"block\" (click)=\"modalDeleteData5 = true;\">Clear All</ion-button> -->\n        <ion-button color=\"light\" expand=\"block\" (click)=\"addRow()\">Add Item</ion-button>\n      </ion-col>             \n      <ion-col size=\"3\"><ion-button color=\"success\" expand=\"block\" (click)=\"validateError()\" [disabled]=\"tableData.length == 0\">Create</ion-button></ion-col>             \n      <ion-col size=\"3\"><ion-button color=\"danger\" expand=\"block\" (click)=\"deleteList()\">Delete</ion-button></ion-col>             \n    </ion-row>\n\n    <div class=\"reports-table\" style=\"position: relative;top:-4%;overflow: auto;\">   \n      <ion-grid class=\"orientation\">\n        <ion-row nowrap class=\"headers\">\n          <ion-col size=\"3\" class=\"single-border\" tappable (click)=\"sort('bind',true)\">\n            Comp Ref ({{tableData.length}})\n          </ion-col>       \n          <ion-col size=\"2\" class=\"single-border\" (click)=\"sort('tool_ref',true)\">\n            Tool Ref\n          </ion-col>\n          <ion-col size=\"1\" class=\"single-border\" (click)=\"sort('no_of_active_cavities',true)\">\n            Act. Cavities \n          </ion-col>\n          <ion-col size=\"1\" class=\"single-border\" (click)=\"sort('std_lifts_per_plan',true)\">\n            Plan. Lifts ({{totalPlanlift}})\n          </ion-col>\n          <ion-col size=\"1\" class=\"single-border\" (click)=\"sort('expOutput',true)\">\n            Exp.Qty ({{totalExpqty}})\n          </ion-col>\n          <ion-col size=\"1\" class=\"single-border\" (click)=\"sort('numshifts',true)\">\n            Shifts ({{totalShift}})\n          </ion-col>\n          <ion-col size=\"2\" class=\"single-border\" (click)=\"sort('mcid',true)\">\n            Machine ({{totalMachine}})\n          </ion-col>\n          <ion-col size=\"1\" class=\"single-border\" style=\"text-align: center;\">             \n            <!-- <ion-icon name=\"add-circle\" style=\"color:red;font-size: 180%;\" (click)=\"addRow()\"></ion-icon>        -->\n          </ion-col>                                \n        </ion-row>\n  \n        <ion-row nowrap class=\"headers\" *ngFor=\"let x of tableData;index as i\">\n          <ion-col size=\"3\" class=\"single-border\" tappable>\n            <ionic-selectable\n                #selectComponent1  \n                [(ngModel)]=\"x.bind\"                        \n                [items]=\"componentArray\"\n                itemValueField=\"value\"\n                [hasVirtualScroll]=\"true\"\n                itemTextField=\"name\"\n                [canSearch]=\"true\"\n                (onChange)=\"onChangeValue($event,i)\"\n                searchFailText= \"Component not found\"\n                placeholder=\"Component\">\n          </ionic-selectable>        \n          </ion-col>       \n          <ion-col size=\"2\" class=\"single-border\" style=\"margin-top: 1%;\">\n            <!-- <ion-input class=\"textbox\" type=\"text\" (ionChange)=\"onChangeValue($event,i,x,'di')\" [(ngModel)]=\"x.tool_ref\"></ion-input> -->\n            {{x.tool_ref}}\n          </ion-col>\n          <ion-col size=\"1\" class=\"single-border\" style=\"margin-top: 1%;\">            \n            {{x.no_of_active_cavities}}\n          </ion-col>\n          <ion-col size=\"1\" class=\"single-border\">\n            <ion-input class=\"number\" type=\"number\" [(ngModel)]=\"x.std_lifts_per_plan\" (change)=\"changePlanlifts(x.std_lifts_per_plan,i)\" style=\"border: 1px solid #80808080;border-radius: 8%;\"></ion-input>\n          </ion-col>\n          <ion-col size=\"1\" class=\"single-border\" style=\"margin-top: 1%;\">            \n            {{x.expOutput}}\n          </ion-col>\n          <ion-col size=\"1\" class=\"single-border\">\n            <!-- <ionic-selectable\n                #selectComponent2                \n                [items]=\"shiftArray\"\n                itemValueField=\"value\"\n                itemTextField=\"name\"\n                [canSearch]=\"true\"\n                (onChange)=\"changeshift($event,i)\"\n                searchFailText= \"Shift not found\"\n                placeholder=\"Select Shift\">\n            </ionic-selectable>    -->\n            <select [(ngModel)]=\"x.numshifts\" (change)=\"changeshift(x.numshifts,i)\" style=\"background: white;border-radius: 3px;border-color: #8080807a;\">             \n              <option *ngFor=\"let s of x.shiftArray\" [ngValue]=\"s\">{{s}}</option>\n            </select>\n          </ion-col>\n          <ion-col size=\"2\" class=\"single-border\">\n            <!-- <ionic-selectable\n              #selectComponent3              \n              [items]=\"machineArray\"\n              itemValueField=\"value\"\n              itemTextField=\"name\"\n              [canSearch]=\"true\"\n              (onChange)=\"changeMachine($event,i)\"\n              searchFailText= \"Machine not found\"\n              placeholder=\"Select Machine\">\n           </ionic-selectable>  -->\n           \n           <span *ngIf=\"x.machineArray.length == 1\">{{x.machineArray[0].name}}</span>\n           <select *ngIf=\"x.machineArray.length > 1\" [(ngModel)]=\"x.mcid\" (change)=\"changeMachine(x.mcid,i)\" style=\"background: white;border-radius: 3px;border-color: #8080807a;\">\n            <option *ngFor=\"let y of x.machineArray;\" value=\"{{y.value}}\">{{y.name}}</option>          \n          </select>\n\n          </ion-col>\n          <ion-col size=\"1\" class=\"single-border\" style=\"text-align: center;\">\n            <ion-icon name=\"trash-outline\" style=\"color:red\" (click)=\"deleteItem(i)\"></ion-icon>          \n          </ion-col>                                \n        </ion-row>\n  \n      </ion-grid>\n    </div>\n\n\n    <div class=\"modal-content\" *ngIf=\"modalDeleteData\">\n      <div class=\"modal-header\">        \n        Stock Level List\n      </div>\n      <div class=\"modal-body\">\n        \n        <ion-grid style=\"width:100%;\">\n          <ion-row nowrap class=\"headers\">\n            <ion-col size=\"12\" style=\"text-align: center;font-size: larger;\">\n              {{stockName}} \n            </ion-col>                                   \n          </ion-row>\n\n          <ion-row nowrap class=\"headers\">\n            <ion-col size=\"9\" class=\"single-border\">\n              Item Qty.\n            </ion-col>       \n            <ion-col size=\"3\" class=\"single-border\" style=\"text-align: center;\">\n              Quantity\n            </ion-col>           \n          </ion-row>\n          \n\n          <ion-row nowrap class=\"headers\">\n            <ion-col size=\"9\" class=\"single-border\" tappable>Cus. Schedule </ion-col>       \n            <ion-col size=\"3\" class=\"single-border\" style=\"text-align: end;\">{{modalObj.cussch}}</ion-col>           \n          </ion-row>\n\n          <ion-row nowrap class=\"headers\">\n            <ion-col size=\"9\" class=\"single-border\" tappable>Prod. Schedule</ion-col>       \n            <ion-col size=\"3\" class=\"single-border\" style=\"text-align: end;\">{{modalObj.prodsch}}</ion-col>           \n          </ion-row>\n\n          <ion-row nowrap class=\"headers\">\n            <ion-col size=\"9\" class=\"single-border\" tappable>Despatched</ion-col>       \n            <ion-col size=\"3\" class=\"single-border\" style=\"text-align: end;\">{{modalObj.despatched}}</ion-col>           \n          </ion-row>\n\n          <ion-row nowrap class=\"headers\">\n            <ion-col size=\"9\" class=\"single-border\" tappable>Balance Plan</ion-col>       \n            <ion-col size=\"3\" class=\"single-border\" style=\"text-align: end;\">{{modalObj.awtplan}}</ion-col>           \n          </ion-row>\n\n          <ion-row nowrap class=\"headers\">\n            <ion-col size=\"9\" class=\"single-border\" tappable>Pend. Cpd. Issue </ion-col>       \n            <ion-col size=\"3\" class=\"single-border\" style=\"text-align: end;\">{{modalObj.awtcpdiss}}</ion-col>           \n          </ion-row>\n\n          <ion-row nowrap class=\"headers\">\n            <ion-col size=\"9\" class=\"single-border\" tappable>Pend. Mould. Reciept</ion-col>       \n            <ion-col size=\"3\" class=\"single-border\" style=\"text-align: end;\">{{modalObj.awtmldrec}}</ion-col>           \n          </ion-row>\n\n          <ion-row nowrap class=\"headers\">\n            <ion-col size=\"9\" class=\"single-border\" tappable>Pend. Trim. Issue </ion-col>       \n            <ion-col size=\"3\" class=\"single-border\" style=\"text-align: end;\">{{modalObj.awtdefiss}}</ion-col>           \n          </ion-row>\n\n          <ion-row nowrap class=\"headers\">\n            <ion-col size=\"9\" class=\"single-border\" tappable>Pend. Trim. Receipt </ion-col>       \n            <ion-col size=\"3\" class=\"single-border\" style=\"text-align: end;\">{{modalObj.awtdefrec}}</ion-col>           \n          </ion-row>\n\n          <ion-row nowrap class=\"headers\">\n            <ion-col size=\"9\" class=\"single-border\" tappable>Pend. Quality </ion-col>       \n            <ion-col size=\"3\" class=\"single-border\" style=\"text-align: end;\">{{modalObj.awtqualrec}}</ion-col>           \n          </ion-row>\n\n          <ion-row nowrap class=\"headers\">\n            <ion-col size=\"9\" class=\"single-border\" tappable>Stores Stock</ion-col>       \n            <ion-col size=\"3\" class=\"single-border\" style=\"text-align: end;\">{{modalObj.stock}}</ion-col>           \n          </ion-row>\n         \n          <ion-row nowrap class=\"headers\">\n            <ion-col size=\"9\" class=\"single-border\" tappable>Total WIP</ion-col>       \n            <ion-col size=\"3\" class=\"single-border\" style=\"text-align: end;\">{{modalObj.totavail}}</ion-col>           \n          </ion-row>\n        \n    \n        </ion-grid>\n\n      </div>\n      <div class=\"modal-footer\">        \n        <ion-button color=\"danger\" expand=\"block\" (click)=\"modalDeleteData=!modalDeleteData;\">Close</ion-button>   \n      </div>\n    </div>\n\n\n    <div class=\"modal-content2\" *ngIf=\"modalDeleteData2\">\n      <div class=\"modal-header\">\n        <!-- <span class=\"close\" (click)=\"modalDeleteData2=!modalDeleteData2;this.tableData=[];\">&times;</span> -->\n        Delete\n      </div>\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <br>\n        Are You Sure Want to Delete : <span>{{currentItem.planid}} ?</span>\n        <br>\n        <br>\n      </div>\n      <div class=\"modal-footer\" style=\"float: right;\">\n        <ion-button color=\"danger\" size=\"small\" (click)=\"deleteDeflashing()\">Yes</ion-button>\n        <ion-button color=\"secondary\" size=\"small\" (click)=\"modalDeleteData2=!modalDeleteData2;\">No</ion-button>   \n      </div>\n    </div>\n\n    <div class=\"modal-content2\" *ngIf=\"modalDeleteData4\">\n      <div class=\"modal-header\">\n        <!-- <span class=\"close\" (click)=\"modalDeleteData2=!modalDeleteData2;this.tableData=[];\">&times;</span> -->\n        Production Plan\n      </div>\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <br>\n        Are You Sure Want to Create ?\n        <br>\n        <br>\n      </div>\n      <div class=\"modal-footer\" style=\"float: right;\">\n        <ion-button color=\"danger\" size=\"small\" (click)=\"submitData()\">Yes</ion-button>\n        <ion-button color=\"secondary\" size=\"small\" (click)=\"modalDeleteData4=!modalDeleteData4;\">No</ion-button>   \n      </div>\n    </div>\n\n    <div class=\"modal-content2\" *ngIf=\"modalDeleteData5\">\n      <div class=\"modal-header\">\n        <!-- <span class=\"close\" (click)=\"modalDeleteData2=!modalDeleteData2;this.tableData=[];\">&times;</span> -->\n        Clear All\n      </div>\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <br>\n        Are You Sure Want to clear all Items ?\n        <br>\n        <br>\n      </div>\n      <div class=\"modal-footer\" style=\"float: right;\">\n        <ion-button color=\"danger\" size=\"small\" (click)=\"clearAll()\">Yes</ion-button>\n        <ion-button color=\"secondary\" size=\"small\" (click)=\"modalDeleteData5=!modalDeleteData5;\">No</ion-button>   \n      </div>\n    </div>\n\n      <!-- Modal content -->\n    <div class=\"modal-content\" *ngIf=\"modalDeleteData3\">\n      <div class=\"modal-header\">\n        <span class=\"close\" (click)=\"modalDeleteData3=!modalDeleteData3\">&times;</span>\n        <p style=\"margin: 8px 5px;\">Production Plan List</p>\n        <!-- <ion-grid>\n          <ion-row>        \n            <ion-col size=\"7\"> <p style=\"margin: 8px 5px;\">Production Plan List</p> </ion-col>\n            <ion-col size=\"4\">          \n              <ionic-selectable\n                    #selectComponent  \n                    [(ngModel)]=\"selected\"           \n                    [items]=\"locationArray\"\n                    itemValueField=\"value\"\n                    itemTextField=\"name\"\n                    [canSearch]=\"true\"\n                    (onChange)=\"OperatorChanged2($event)\"\n                    searchFailText= \"Operator not found\"\n                    placeholder=\"Select Location\">\n                </ionic-selectable>  \n          </ion-col>       \n            <ion-col size=\"1\"><span class=\"close\" (click)=\"modalDeleteData3=!modalDeleteData3\">&times;</span> </ion-col>\n          </ion-row>\n        </ion-grid>           -->\n      </div>\n      <div class=\"modal-body\">\n        <ion-grid>\n          <ion-row nowrap class=\"headers\">\n            <ion-col size=\"2\" class=\"single-border\" (click)=\"sort2('dispplanid',false)\">\n              Plan ID ({{deleteData.length}})\n            </ion-col>\n            <ion-col size=\"2\" class=\"single-border\" (click)=\"sort2('plandate',false)\">\n              Plan Date\n            </ion-col>\n            <ion-col size=\"3\" class=\"single-border\" (click)=\"sort2('cmpdname',false)\">\n              Name\n            </ion-col>                               \n            <ion-col size=\"2\" class=\"single-border\" (click)=\"sort2('liftplanned',false)\">\n              Plan. Lifts\n            </ion-col>   \n            <ion-col size=\"2\" class=\"single-border\" (click)=\"sort2('cpdretqty',false)\">\n              Ret. Cpd. Qty(kg)\n            </ion-col>         \n            <ion-col size=\"1\" class=\"single-border\">\n              <!-- Action -->\n            </ion-col>\n          </ion-row>\n          <div style=\"height: 60vh; overflow: scroll;\">\n            <ion-row nowrap class=\"content\" *ngFor=\"let x of deleteData\">\n              <ion-col size=\"2\"> {{ x.dispplanid }}</ion-col>\n              <ion-col size=\"2\"> {{ x.plandate }} </ion-col>\n              <ion-col size=\"3\"> {{ x.cmpdname }} </ion-col>\n              <ion-col size=\"2\"> {{ x.liftplanned }} </ion-col>                           \n              <ion-col size=\"2\"> {{ x.cpdretqty }} </ion-col>        \n              <ion-col size=\"1\"> <ion-icon name=\"trash-outline\" (click)=\"callDeflashing(x)\" style=\"color:red\"></ion-icon></ion-col>\n            </ion-row>\n\n            <ion-row *ngIf=\"deleteData.length == 0\">\n              <ion-col size=\"6\" offset=\"4\"> No Records Found</ion-col>\n            </ion-row>\n          </div>\n        </ion-grid>\n      </div>\n    </div>\n\n  </ion-grid>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_mouldingplanning_mouldingplanning_module_ts.js.map