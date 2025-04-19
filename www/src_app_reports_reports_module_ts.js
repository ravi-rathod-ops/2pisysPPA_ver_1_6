"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_reports_reports_module_ts"],{

/***/ 59021:
/*!***************************************************!*\
  !*** ./src/app/reports/reports-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsPageRoutingModule": () => (/* binding */ ReportsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _reports_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports.page */ 18327);




const routes = [
    {
        path: '',
        component: _reports_page__WEBPACK_IMPORTED_MODULE_0__.ReportsPage
    }
];
let ReportsPageRoutingModule = class ReportsPageRoutingModule {
};
ReportsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReportsPageRoutingModule);



/***/ }),

/***/ 33065:
/*!*******************************************!*\
  !*** ./src/app/reports/reports.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsPageModule": () => (/* binding */ ReportsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports-routing.module */ 59021);
/* harmony import */ var _reports_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports.page */ 18327);







let ReportsPageModule = class ReportsPageModule {
};
ReportsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _reports_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReportsPageRoutingModule
        ],
        declarations: [_reports_page__WEBPACK_IMPORTED_MODULE_1__.ReportsPage]
    })
], ReportsPageModule);



/***/ }),

/***/ 18327:
/*!*****************************************!*\
  !*** ./src/app/reports/reports.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsPage": () => (/* binding */ ReportsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _reports_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports.page.html?ngResource */ 8479);
/* harmony import */ var _reports_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports.page.scss?ngResource */ 93623);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let ReportsPage = class ReportsPage {
    constructor(router) {
        this.router = router;
        this.brandImage = "";
    }
    ngOnInit() {
        this.brandImage = localStorage.getItem('brandImage');
    }
    routePage(page) {
        this.router.navigate([page]);
    }
};
ReportsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ReportsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-reports',
        template: _reports_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reports_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReportsPage);



/***/ }),

/***/ 93623:
/*!******************************************************!*\
  !*** ./src/app/reports/reports.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  /* stack vertically */\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 1rem;\n}\n\nion-card:hover {\n  transform: scale(1.02);\n}\n\n.image {\n  width: 100%;\n  height: auto;\n  object-fit: contain;\n  max-height: 120px;\n  /* reduce a bit for smaller screens */\n  margin-bottom: 0.5rem;\n}\n\nh2 {\n  font-size: 1rem;\n  font-weight: bold;\n  margin: 0;\n}\n\n/* Responsive */\n\n@media (min-width: 768px) {\n  .image {\n    max-height: 180px;\n  }\n\n  h2 {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUF3QixxQkFBQTtFQUN4QixtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQ0U7RUFDRSxzQkFBQTtBQUVKOztBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQW1CLHFDQUFBO0VBQ25CLHFCQUFBO0FBR0o7O0FBQUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBR0o7O0FBQUUsZUFBQTs7QUFDQTtFQUNFO0lBQ0UsaUJBQUE7RUFHSjs7RUFBRTtJQUNFLGlCQUFBO0VBR0o7QUFDRiIsImZpbGUiOiJyZXBvcnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBzdGFjayB2ZXJ0aWNhbGx5ICovXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICBpb24tY2FyZDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgbWF4LWhlaWdodDogMTIwcHg7IC8qIHJlZHVjZSBhIGJpdCBmb3Igc21hbGxlciBzY3JlZW5zICovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAvKiBSZXNwb25zaXZlICovXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuaW1hZ2Uge1xyXG4gICAgICBtYXgtaGVpZ2h0OiAxODBweDtcclxuICAgIH1cclxuICBcclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */";

/***/ }),

/***/ 8479:
/*!******************************************************!*\
  !*** ./src/app/reports/reports.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>       \n        <ion-img src=\"{{brandImage}}\" style=\"height: 50px;width:50px\" slot=\"start\"></ion-img>               \n        <div style=\"display: flex;justify-content: center;\">\n          <img src=\"./assets/image/report.png\" height=\"25\" width=\"25\">\n          <b style=\"font-size: 20px;\">&nbsp;&nbsp;Reports</b>\n        </div>\n        <ion-back-button defaultHref=\"Widgets\" slot=\"end\"></ion-back-button>   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n\n    <ion-row>\n      <ion-col size=\"12\"   (click)=\"routePage('Fetchdrawing')\">\n        <ion-card>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"6\"> \n              <img src=\"./assets/image/fetchdrawing.png\" class=\"image\"/>               \n            </ion-col>\n            <ion-col size=\"6\"  class=\"text-center-column\">  \n                <h2>Fetch Drawing</h2>\n            </ion-col>\n          </ion-row>\n        </ion-card>        \n      </ion-col>\n    </ion-row>      \n\n    <ion-row>\n      <ion-col size=\"12\"  (click)=\"routePage('keytraceability')\">\n        <ion-card>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"6\"> \n              <img src=\"./assets/image/track.png\" class=\"image\"/>               \n            </ion-col>\n            <ion-col size=\"6\"  class=\"text-center-column\">  \n                <h2>Traceability</h2>\n            </ion-col>\n          </ion-row>\n        </ion-card>        \n      </ion-col>\n    </ion-row>  \n\n    <ion-row>\n      <ion-col size=\"12\"  (click)=\"routePage('rmstock')\">\n        <ion-card>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"6\"> \n              <img src=\"./assets/image/rawmaterials.png\" class=\"image\"/>               \n            </ion-col>\n            <ion-col size=\"6\"  class=\"text-center-column\">  \n                <h2>RM Stock</h2>\n            </ion-col>\n          </ion-row>\n        </ion-card>        \n      </ion-col>\n    </ion-row>  \n\n    <ion-row>\n      <ion-col size=\"12\"  (click)=\"routePage('componentstock')\">\n        <ion-card>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"6\"> \n              <img src=\"./assets/image/toolbox.png\" class=\"image\"/>               \n            </ion-col>\n            <ion-col size=\"6\"  class=\"text-center-column\">  \n                <h2>Component Stock</h2>\n            </ion-col>\n          </ion-row>\n        </ion-card>        \n      </ion-col>\n    </ion-row> \n    \n    <ion-row>\n      <ion-col size=\"12\"  (click)=\"routePage('compoundstock')\">\n        <ion-card>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"6\"> \n              <img src=\"./assets/image/trolley.png\" class=\"image\"/>               \n            </ion-col>\n            <ion-col size=\"6\"  class=\"text-center-column\">  \n                <h2>Compound Stock</h2>\n            </ion-col>\n          </ion-row>\n        </ion-card>        \n      </ion-col>\n    </ion-row>  \n\n    <ion-row>\n      <ion-col size=\"12\"  (click)=\"routePage('rollstock')\">\n        <ion-card>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"6\"> \n              <img src=\"./assets/image/paper-roll.png\" class=\"image\"/>               \n            </ion-col>\n            <ion-col size=\"6\"  class=\"text-center-column\">  \n                <h2>Roll Stock</h2>\n            </ion-col>\n          </ion-row>\n        </ion-card>        \n      </ion-col>\n    </ion-row>  \n   \n  </ion-grid>\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_reports_reports_module_ts.js.map