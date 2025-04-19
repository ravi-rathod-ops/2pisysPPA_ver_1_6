"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_widgets_widgets_module_ts"],{

/***/ 18968:
/*!***************************************************!*\
  !*** ./src/app/widgets/widgets-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetsPageRoutingModule": () => (/* binding */ WidgetsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _widgets_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgets.page */ 78291);




const routes = [
    {
        path: '',
        component: _widgets_page__WEBPACK_IMPORTED_MODULE_0__.WidgetsPage
    }
];
let WidgetsPageRoutingModule = class WidgetsPageRoutingModule {
};
WidgetsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WidgetsPageRoutingModule);



/***/ }),

/***/ 50546:
/*!*******************************************!*\
  !*** ./src/app/widgets/widgets.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetsPageModule": () => (/* binding */ WidgetsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _widgets_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgets-routing.module */ 18968);
/* harmony import */ var _widgets_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets.page */ 78291);







let WidgetsPageModule = class WidgetsPageModule {
};
WidgetsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _widgets_routing_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsPageRoutingModule
        ],
        declarations: [_widgets_page__WEBPACK_IMPORTED_MODULE_1__.WidgetsPage]
    })
], WidgetsPageModule);



/***/ }),

/***/ 78291:
/*!*****************************************!*\
  !*** ./src/app/widgets/widgets.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetsPage": () => (/* binding */ WidgetsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _widgets_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgets.page.html?ngResource */ 21267);
/* harmony import */ var _widgets_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets.page.scss?ngResource */ 80605);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let WidgetsPage = class WidgetsPage {
    constructor(router) {
        this.router = router;
        this.brandImage = "";
        this.widgets = [
            { label: 'PROCESS', image: './assets/image/planning.png', page: 'Planhome' },
            { label: 'VIEW', image: './assets/image/status.png', page: 'Moulding' },
            { label: 'REPORTS', image: './assets/image/report.png', page: 'Reports' },
            { label: 'APPROVAL', image: './assets/image/approve.png', page: 'approvals' }
        ];
        if (localStorage.getItem('userid') == null && localStorage.getItem('password') == null) {
            this.router.navigate(["home"]);
        }
        this.checkStorage();
    }
    ngOnInit() {
        this.brandImage = localStorage.getItem('brandImage');
    }
    routePage(page) {
        this.router.navigate([page]);
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
};
WidgetsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
WidgetsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-widgets',
        template: _widgets_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_widgets_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WidgetsPage);



/***/ }),

/***/ 80605:
/*!******************************************************!*\
  !*** ./src/app/widgets/widgets.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  /* stack vertically */\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 1rem;\n}\n\nion-card:hover {\n  transform: scale(1.02);\n}\n\n.image {\n  width: 100%;\n  height: auto;\n  object-fit: contain;\n  max-height: 120px;\n  /* reduce a bit for smaller screens */\n  margin-bottom: 0.5rem;\n}\n\nh2 {\n  font-size: 1rem;\n  font-weight: bold;\n  margin: 0;\n}\n\n/* Responsive */\n\n@media (min-width: 768px) {\n  .image {\n    max-height: 180px;\n  }\n\n  h2 {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpZGdldHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUF3QixxQkFBQTtFQUN4QixtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQ0U7RUFDRSxzQkFBQTtBQUVKOztBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQW1CLHFDQUFBO0VBQ25CLHFCQUFBO0FBR0o7O0FBQUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBR0o7O0FBQUUsZUFBQTs7QUFDQTtFQUNFO0lBQ0UsaUJBQUE7RUFHSjs7RUFBRTtJQUNFLGlCQUFBO0VBR0o7QUFDRiIsImZpbGUiOiJ3aWRnZXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBzdGFjayB2ZXJ0aWNhbGx5ICovXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICBpb24tY2FyZDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgbWF4LWhlaWdodDogMTIwcHg7IC8qIHJlZHVjZSBhIGJpdCBmb3Igc21hbGxlciBzY3JlZW5zICovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAvKiBSZXNwb25zaXZlICovXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuaW1hZ2Uge1xyXG4gICAgICBtYXgtaGVpZ2h0OiAxODBweDtcclxuICAgIH1cclxuICBcclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */";

/***/ }),

/***/ 21267:
/*!******************************************************!*\
  !*** ./src/app/widgets/widgets.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>       \n        <ion-img src=\"{{brandImage}}\" style=\"height: 50px;width:50px\" slot=\"start\"></ion-img>       \n        <ion-back-button defaultHref=\"home\" slot=\"end\"></ion-back-button>   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n    <ion-row >\n      <ion-col size=\"12\" (click)=\"routePage('Planhome')\">\n        <ion-card>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"6\"> \n              <img src=\"./assets/image/planning.png\" class=\"image\"/>               \n            </ion-col>\n            <ion-col size=\"6\" class=\"text-center-column\" >  \n                <h2>PROCESS</h2>\n            </ion-col>\n          </ion-row>\n        </ion-card>        \n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col size=\"12\" (click)=\"routePage('Moulding')\">\n        <ion-card>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"6\"> \n              <img src=\"./assets/image/status.png\" class=\"image\"/>               \n            </ion-col>\n            <ion-col size=\"6\" class=\"text-center-column\">  \n                <h2> VIEW</h2>\n            </ion-col>\n          </ion-row>\n        </ion-card>        \n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col size=\"12\" (click)=\"routePage('Reports')\">\n        <ion-card>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"6\"> \n              <img src=\"./assets/image/report.png\" class=\"image\"/>               \n            </ion-col>\n            <ion-col size=\"6\" class=\"text-center-column\">  \n                <h2>REPORTS</h2>\n            </ion-col>\n          </ion-row>\n        </ion-card>        \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\" (click)=\"routePage('approvals')\">\n        <ion-card>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"6\"> \n              <img src=\"./assets/image/approve.png\" class=\"image\"/>               \n            </ion-col>\n            <ion-col size=\"6\" class=\"text-center-column\">  \n                <h2>APPROVAL</h2>\n            </ion-col>\n          </ion-row>\n        </ion-card>        \n      </ion-col>\n    </ion-row>\n      \n  </ion-grid>\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_widgets_widgets_module_ts.js.map