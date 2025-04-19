"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_approvals_approvals_module_ts"],{

/***/ 64820:
/*!*******************************************************!*\
  !*** ./src/app/approvals/approvals-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApprovalsPageRoutingModule": () => (/* binding */ ApprovalsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _approvals_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approvals.page */ 68796);




const routes = [
    {
        path: '',
        component: _approvals_page__WEBPACK_IMPORTED_MODULE_0__.ApprovalsPage
    }
];
let ApprovalsPageRoutingModule = class ApprovalsPageRoutingModule {
};
ApprovalsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ApprovalsPageRoutingModule);



/***/ }),

/***/ 80083:
/*!***********************************************!*\
  !*** ./src/app/approvals/approvals.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApprovalsPageModule": () => (/* binding */ ApprovalsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _approvals_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approvals-routing.module */ 64820);
/* harmony import */ var _approvals_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approvals.page */ 68796);







let ApprovalsPageModule = class ApprovalsPageModule {
};
ApprovalsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _approvals_routing_module__WEBPACK_IMPORTED_MODULE_0__.ApprovalsPageRoutingModule
        ],
        declarations: [_approvals_page__WEBPACK_IMPORTED_MODULE_1__.ApprovalsPage]
    })
], ApprovalsPageModule);



/***/ }),

/***/ 68796:
/*!*********************************************!*\
  !*** ./src/app/approvals/approvals.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApprovalsPage": () => (/* binding */ ApprovalsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _approvals_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approvals.page.html?ngResource */ 66722);
/* harmony import */ var _approvals_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approvals.page.scss?ngResource */ 80968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let ApprovalsPage = class ApprovalsPage {
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
ApprovalsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ApprovalsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-approvals',
        template: _approvals_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_approvals_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ApprovalsPage);



/***/ }),

/***/ 80968:
/*!**********************************************************!*\
  !*** ./src/app/approvals/approvals.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  /* stack vertically */\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 1rem;\n}\n\nion-card:hover {\n  transform: scale(1.02);\n}\n\n.image {\n  width: 100%;\n  height: auto;\n  object-fit: contain;\n  max-height: 120px;\n  /* reduce a bit for smaller screens */\n  margin-bottom: 0.5rem;\n}\n\nh2 {\n  font-size: 1rem;\n  font-weight: bold;\n  margin: 0;\n}\n\n/* Responsive */\n\n@media (min-width: 768px) {\n  .image {\n    max-height: 180px;\n  }\n\n  h2 {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHJvdmFscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQXdCLHFCQUFBO0VBQ3hCLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFRTtFQUNFLHNCQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFBbUIscUNBQUE7RUFDbkIscUJBQUE7QUFFSjs7QUFDRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUFFSjs7QUFDRSxlQUFBOztBQUNBO0VBQ0U7SUFDRSxpQkFBQTtFQUVKOztFQUNFO0lBQ0UsaUJBQUE7RUFFSjtBQUNGIiwiZmlsZSI6ImFwcHJvdmFscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWNhcmQge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8qIHN0YWNrIHZlcnRpY2FsbHkgKi9cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jYXJkOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICBtYXgtaGVpZ2h0OiAxMjBweDsgLyogcmVkdWNlIGEgYml0IGZvciBzbWFsbGVyIHNjcmVlbnMgKi9cclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFJlc3BvbnNpdmUgKi9cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5pbWFnZSB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDE4MHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuICB9Il19 */";

/***/ }),

/***/ 66722:
/*!**********************************************************!*\
  !*** ./src/app/approvals/approvals.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>       \n        <ion-img src=\"{{brandImage}}\" style=\"height: 50px;width:50px\" slot=\"start\"></ion-img>               \n        <div style=\"display: flex;justify-content: center;\">\n          <img src=\"./assets/image/report.png\" height=\"25\" width=\"25\">\n          <b style=\"font-size: 20px;\">&nbsp;&nbsp;Approvals</b>\n        </div>\n        <ion-back-button defaultHref=\"Widgets\" slot=\"end\"></ion-back-button>   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n\n    <ion-row>\n      <ion-col size=\"12\" (click)=\"routePage('rmqualitycheck')\">\n        <ion-card>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"6\"> \n              <img src=\"./assets/image/quality-control.png\" class=\"image\"/>               \n            </ion-col>\n            <ion-col size=\"6\"  class=\"text-center-column\">  \n                <h2>RM Quality Check</h2>\n            </ion-col>\n          </ion-row>\n        </ion-card>        \n      </ion-col>\n    </ion-row>      \n\n    <ion-row>\n      <ion-col size=\"12\" (click)=\"routePage('compoundapproval')\">\n        <ion-card>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"6\"> \n              <img src=\"./assets/image/chemicals-approval.png\" class=\"image\"/>               \n            </ion-col>\n            <ion-col size=\"6\"  class=\"text-center-column\">  \n                <h2>Compound Approval</h2>\n            </ion-col>\n          </ion-row>\n        </ion-card>        \n      </ion-col>\n    </ion-row>  \n\n    <ion-row>\n      <ion-col size=\"12\" (click)=\"routePage('dimensionentry')\">\n        <ion-card>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"6\"> \n              <img src=\"./assets/image/cube.png\" class=\"image\"/>               \n            </ion-col>\n            <ion-col size=\"6\"  class=\"text-center-column\">  \n                <h2>Dimension Entry</h2>\n            </ion-col>\n          </ion-row>\n        </ion-card>        \n      </ion-col>\n    </ion-row>  \n\n    <ion-row>\n      <ion-col size=\"12\" (click)=\"routePage('stockadjustment')\">\n        <ion-card>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"6\"> \n              <img src=\"./assets/image/replacement.png\" class=\"image\"/>               \n            </ion-col>\n            <ion-col size=\"6\"  class=\"text-center-column\">  \n                <h2>Stock Adjustment</h2>\n            </ion-col>\n          </ion-row>\n        </ion-card>        \n      </ion-col>\n    </ion-row> \n    \n    <!-- <ion-row>\n      <ion-col size=\"12\" (click)=\"routePage('compoundstock')\">\n        <ion-card>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"6\"> \n              <img src=\"./assets/image/trolley.png\" class=\"image\"/>               \n            </ion-col>\n            <ion-col size=\"6\"  class=\"text-center-column\">  \n                <h2>Compound Stock</h2>\n            </ion-col>\n          </ion-row>\n        </ion-card>        \n      </ion-col>\n    </ion-row>  \n\n    <ion-row>\n      <ion-col size=\"12\" (click)=\"routePage('rollstock')\">\n        <ion-card>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"6\"> \n              <img src=\"./assets/image/paper-roll.png\" class=\"image\"/>               \n            </ion-col>\n            <ion-col size=\"6\"  class=\"text-center-column\">  \n                <h2>Roll Stock</h2>\n            </ion-col>\n          </ion-row>\n        </ion-card>        \n      </ion-col>\n    </ion-row>   -->\n   \n  </ion-grid>\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_approvals_approvals_module_ts.js.map