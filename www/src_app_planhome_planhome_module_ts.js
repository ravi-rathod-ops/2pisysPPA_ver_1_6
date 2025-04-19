"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_planhome_planhome_module_ts"],{

/***/ 4419:
/*!*****************************************************!*\
  !*** ./src/app/planhome/planhome-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanhomePageRoutingModule": () => (/* binding */ PlanhomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _planhome_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./planhome.page */ 88219);




const routes = [
    {
        path: '',
        component: _planhome_page__WEBPACK_IMPORTED_MODULE_0__.PlanhomePage
    }
];
let PlanhomePageRoutingModule = class PlanhomePageRoutingModule {
};
PlanhomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PlanhomePageRoutingModule);



/***/ }),

/***/ 91309:
/*!*********************************************!*\
  !*** ./src/app/planhome/planhome.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanhomePageModule": () => (/* binding */ PlanhomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _planhome_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./planhome-routing.module */ 4419);
/* harmony import */ var _planhome_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./planhome.page */ 88219);







let PlanhomePageModule = class PlanhomePageModule {
};
PlanhomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _planhome_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlanhomePageRoutingModule
        ],
        declarations: [_planhome_page__WEBPACK_IMPORTED_MODULE_1__.PlanhomePage]
    })
], PlanhomePageModule);



/***/ }),

/***/ 88219:
/*!*******************************************!*\
  !*** ./src/app/planhome/planhome.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanhomePage": () => (/* binding */ PlanhomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _planhome_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./planhome.page.html?ngResource */ 31678);
/* harmony import */ var _planhome_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./planhome.page.scss?ngResource */ 22882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let PlanhomePage = class PlanhomePage {
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
PlanhomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
PlanhomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-planhome',
        template: _planhome_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_planhome_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PlanhomePage);



/***/ }),

/***/ 22882:
/*!********************************************************!*\
  !*** ./src/app/planhome/planhome.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".image {\n  width: 80px;\n}\n\nion-card {\n  height: 25vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYW5ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFdBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7QUFBSiIsImZpbGUiOiJwbGFuaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2V7XHJcbiAgICAvLyBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gICAgaGVpZ2h0OiAyNXZoO1xyXG59Il19 */";

/***/ }),

/***/ 31678:
/*!********************************************************!*\
  !*** ./src/app/planhome/planhome.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>       \n        <ion-img src=\"{{brandImage}}\" style=\"height: 50px;width:50px\" slot=\"start\"></ion-img>               \n        <div style=\"display: flex;justify-content: center;\">\n          <img src=\"./assets/image/planning.png\" height=\"25\" width=\"25\">\n          <b style=\"font-size: 20px;\">&nbsp;&nbsp;Process</b>\n        </div>\n        <ion-back-button defaultHref=\"Widgets\" slot=\"end\"></ion-back-button>   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <br><br>\n    <ion-row>\n      <ion-col size=\"4\" (click)=\"routePage('Purchaseorderplanning')\" style=\"display: flex;justify-content: center;\">\n        <img src=\"./assets/image/receipt.png\" class=\"image\"/>    \n      </ion-col>\n\n      <ion-col size=\"4\" (click)=\"routePage('Mixingplanning')\" style=\"display: flex;justify-content: center;\">\n        <img src=\"./assets/image/rgb.png\" class=\"image\"/>    \n      </ion-col>\n\n      <ion-col size=\"4\" (click)=\"routePage('Finalplanning')\" style=\"display: flex;justify-content: center;\">\n        <img src=\"./assets/image/route.png\" class=\"image\"/>    \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"4\" style=\"text-align: center;\">\n        <h4>Purchase</h4>   \n      </ion-col>\n\n      <ion-col size=\"4\" style=\"text-align: center;\">\n        <h4>Mixing</h4>    \n      </ion-col>\n\n      <ion-col size=\"4\" style=\"text-align: center;\">\n        <h4>Final</h4>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"4\" (click)=\"routePage('Calenderingplanning')\" style=\"display: flex;justify-content: center;\">\n        <img src=\"./assets/image/paper-roll.png\" class=\"image\"/>    \n      </ion-col>\n\n      <ion-col size=\"4\" (click)=\"routePage('Mouldingplanning')\" style=\"display: flex;justify-content: center;\">\n        <img src=\"./assets/image/machine-press.png\" class=\"image\"/>    \n      </ion-col>\n\n      <ion-col size=\"4\" (click)=\"routePage('Deflashplanning')\" style=\"display: flex;justify-content: center;\">\n        <img src=\"./assets/image/layer.png\" class=\"image\"/>    \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"4\" style=\"text-align: center;\">\n        <h4>Calendering</h4>   \n      </ion-col>\n\n      <ion-col size=\"4\" style=\"text-align: center;\">\n        <h4>Production</h4>    \n      </ion-col>\n\n      <ion-col size=\"4\" style=\"text-align: center;\">\n        <h4>Deflashing</h4>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"4\" (click)=\"routePage('Inspectionplanning')\" style=\"display: flex;justify-content: center;\">\n        <img src=\"./assets/image/statistics.png\" class=\"image\"/>    \n      </ion-col>\n\n      <ion-col size=\"4\" (click)=\"routePage('Dispatchplanning')\" style=\"display: flex;justify-content: center;\">\n        <img src=\"./assets/image/delivery.png\" class=\"image\"/>    \n      </ion-col>\n\n      <ion-col size=\"4\">\n           \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"4\" style=\"text-align: center;\">\n        <h4>Inspection</h4>   \n      </ion-col>\n\n      <ion-col size=\"4\" style=\"text-align: center;\">\n        <h4>Despatch</h4>    \n      </ion-col>\n\n      <ion-col size=\"4\" style=\"text-align: center;\">\n        \n      </ion-col>\n    </ion-row>\n\n\n\n\n\n\n\n\n\n\n\n\n    <!-- <ion-row>\n      <ion-col size=\"12\" (click)=\"routePage('Mixingplanning')\">\n        <ion-card>\n          <ion-row>\n            <ion-col size=\"6\"> \n              <img src=\"./assets/image/rgb.png\" class=\"image\"/>               \n            </ion-col>\n            <ion-col size=\"6\">  \n                <h2>Mixing</h2>\n            </ion-col>\n          </ion-row>\n        </ion-card>        \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\" (click)=\"routePage('Finalplanning')\">\n        <ion-card>\n          <ion-row>\n            <ion-col size=\"6\"> \n              <img src=\"./assets/image/route.png\" class=\"image\"/>               \n            </ion-col>\n            <ion-col size=\"6\">  \n                <h2>Final</h2>\n            </ion-col>\n          </ion-row>\n        </ion-card>        \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\" (click)=\"routePage('Calenderingplanning')\">\n        <ion-card>\n          <ion-row>\n            <ion-col size=\"6\"> \n              <img src=\"./assets/image/paper-roll.png\" class=\"image\"/>               \n            </ion-col>\n            <ion-col size=\"6\">  \n                <h2>Calendering</h2>\n            </ion-col>\n          </ion-row>\n        </ion-card>        \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\" (click)=\"routePage('Mouldingplanning')\">\n        <ion-card>\n          <ion-row>\n            <ion-col size=\"6\"> \n              <img src=\"./assets/image/machine-press.png\" class=\"image\"/>               \n            </ion-col>\n            <ion-col size=\"6\">  \n                <h2>Moulding</h2>\n            </ion-col>\n          </ion-row>\n        </ion-card>        \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\" (click)=\"routePage('Deflashplanning')\">\n        <ion-card>\n          <ion-row>\n            <ion-col size=\"6\"> \n              <img src=\"./assets/image/layer.png\" class=\"image\"/>               \n            </ion-col>\n            <ion-col size=\"6\">  \n                <h2>Deflashing</h2>\n            </ion-col>\n          </ion-row>\n        </ion-card>        \n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col size=\"12\" (click)=\"routePage('Inspectionplanning')\">\n        <ion-card>\n          <ion-row>\n            <ion-col size=\"6\"> \n              <img src=\"./assets/image/statistics.png\" class=\"image\"/>               \n            </ion-col>\n            <ion-col size=\"6\">  \n                <h2>Inspection</h2>\n            </ion-col>\n          </ion-row>\n        </ion-card>        \n      </ion-col>\n    </ion-row> \n    \n    <ion-row>\n      <ion-col size=\"12\" (click)=\"routePage('Dispatchplanning')\">\n        <ion-card>\n          <ion-row>\n            <ion-col size=\"6\"> \n              <img src=\"./assets/image/delivery.png\" class=\"image\"/>               \n            </ion-col>\n            <ion-col size=\"6\">  \n                <h2>Dispatch</h2>\n            </ion-col>\n          </ion-row>\n        </ion-card>        \n      </ion-col>\n    </ion-row> -->\n   \n  </ion-grid>\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_planhome_planhome_module_ts.js.map