"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_setting_setting_module_ts"],{

/***/ 91532:
/*!***************************************************!*\
  !*** ./src/app/setting/setting-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingRoutingModule": () => (/* binding */ SettingRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _setting_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.component */ 17209);




const routes = [
    {
        path: '',
        component: _setting_component__WEBPACK_IMPORTED_MODULE_0__.SettingComponent
    }
];
let SettingRoutingModule = class SettingRoutingModule {
};
SettingRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], SettingRoutingModule);



/***/ }),

/***/ 17209:
/*!**********************************************!*\
  !*** ./src/app/setting/setting.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingComponent": () => (/* binding */ SettingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _setting_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.component.html?ngResource */ 74179);
/* harmony import */ var _setting_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.component.scss?ngResource */ 44323);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ 6222);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 6018);











let SettingComponent = class SettingComponent {
    constructor(http, camera, loadingController, screenOrientation, toastController, router, formBuilder) {
        this.http = http;
        this.camera = camera;
        this.loadingController = loadingController;
        this.screenOrientation = screenOrientation;
        this.toastController = toastController;
        this.router = router;
        this.formBuilder = formBuilder;
        this.planid = "";
        this.datapass = {};
        this.showEntryCard = false;
        this.dataUrl = localStorage.getItem('url');
        this.submitted = false;
        this.base64 = null;
        this.url = "https://ppa.2pisys.com";
        this.authid = "PXpv2YWV41L223hGDuXY";
        this.clientid = "ppa";
        this.toggle = "false";
        this.brandImage = "";
        this.socketIp = "192.168.1.100:3000";
        if (localStorage.getItem('url') != null) {
            this.url = localStorage.getItem('url');
        }
        else {
            localStorage.setItem('url', this.url);
        }
        if (localStorage.getItem('authid') != null) {
            this.authid = localStorage.getItem('authid');
        }
        else {
            localStorage.setItem('authid', this.authid);
        }
        if (localStorage.getItem('clientid') != null) {
            this.clientid = localStorage.getItem('clientid');
        }
        else {
            localStorage.setItem('clientid', this.clientid);
        }
        if (localStorage.getItem('IPAddr') != null) {
            this.socketIp = localStorage.getItem('IPAddr');
        }
        else {
            localStorage.setItem('IPAddr', this.socketIp);
        }
        if (localStorage.getItem('userid') == null && localStorage.getItem('password') == null) {
            // this.router.navigate(["home"]);   
        }
    }
    ngOnInit() {
        this.brandImage = localStorage.getItem('brandImage');
        this.registerForm = this.formBuilder.group({
            url: [this.url, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            auth: [this.authid, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            client: [this.clientid, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            ip: [this.socketIp]
        });
        this.screenOrientation.unlock();
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    submitData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const headers = { 'auth-id': localStorage.getItem('authid'), 'client-id': localStorage.getItem('clientid') };
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                spinner: 'dots'
            });
            yield loading.present();
            this.submitted = true;
            if (this.registerForm.invalid) {
                return;
            }
            else {
            }
        });
    }
    navBack() {
        this.router.navigate(['home']);
    }
    modaldismiss() {
        this.showEntryCard = false;
        this.registerForm.reset();
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
    textChanged(obj, type) {
        if (type == "url") {
            localStorage.setItem('url', obj);
        }
        if (type == "authid") {
            localStorage.setItem('authid', obj);
        }
        if (type == "clientid") {
            localStorage.setItem('clientid', obj);
        }
        if (type == "ip") {
            localStorage.setItem('IPAddr', obj);
        }
    }
    logout() {
        localStorage.removeItem("userid");
        localStorage.removeItem("password");
        localStorage.removeItem("your-data-key");
        this.router.navigate(["home"]);
    }
    prefill(data, e) {
        this.store = e.target.value;
        this.registerForm.controls[data].setValue('');
    }
    blured(data, e) {
        if (e.target.value == "") {
            this.registerForm.controls[data].setValue(this.store);
        }
        else {
            if (e.target.type == "number") {
                this.registerForm.controls[data].setValue(parseInt(e.target.value));
            }
            if (e.target.type == "text") {
                this.registerForm.controls[data].setValue(e.target.value);
            }
        }
    }
};
SettingComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__.ScreenOrientation },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder }
];
SettingComponent.propDecorators = {
    inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['inputId', { static: false },] }]
};
SettingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-setting',
        template: _setting_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_setting_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SettingComponent);



/***/ }),

/***/ 80943:
/*!*******************************************!*\
  !*** ./src/app/setting/setting.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingModule": () => (/* binding */ SettingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _setting_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting-routing.module */ 91532);
/* harmony import */ var _setting_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.component */ 17209);








let SettingModule = class SettingModule {
};
SettingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_setting_component__WEBPACK_IMPORTED_MODULE_1__.SettingComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _setting_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _setting_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ]
    })
], SettingModule);



/***/ }),

/***/ 44323:
/*!***********************************************************!*\
  !*** ./src/app/setting/setting.component.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "#grid {\n  margin: 4%;\n}\n\n.avatar {\n  height: 50px;\n  width: 50px;\n}\n\n.appfont {\n  font-size: 17px;\n}\n\n.inputStyle {\n  text-align: right;\n  color: grey;\n}\n\n.labelStyle {\n  float: right;\n  margin-right: 10%;\n}\n\n.label {\n  color: grey;\n}\n\n.password {\n  -webkit-text-security: disc;\n}\n\n.settingImage {\n  width: 60px;\n  margin: auto;\n}\n\n.inputStyle {\n  font-size: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InNldHRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZ3JpZCB7XHJcbiAgbWFyZ2luOiA0JTtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4uYXBwZm9udCB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4uaW5wdXRTdHlsZSB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbi5sYWJlbFN0eWxlIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbi5wYXNzd29yZCB7XHJcbiAgLXdlYmtpdC10ZXh0LXNlY3VyaXR5OiBkaXNjO1xyXG59XHJcblxyXG4uc2V0dGluZ0ltYWdlIHtcclxuICB3aWR0aDogNjBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5pbnB1dFN0eWxlIHtcclxuICBmb250LXNpemU6IDIxcHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 74179:
/*!***********************************************************!*\
  !*** ./src/app/setting/setting.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>       \n        <ion-img src=\"{{brandImage}}\" style=\"height: 50px;width:50px\" slot=\"start\"></ion-img>       \n        <div style=\"display: flex;justify-content: center;\">\n        <img src=\"./assets/image/admin.png\" height=\"25\" width=\"25\">\n        <b style=\"font-size: 20px;\">&nbsp;&nbsp;Setting</b>\n        </div>\n        <ion-back-button defaultHref=\"Moulding\" slot=\"end\"></ion-back-button>   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid id=\"grid\" class=\"appfont\">\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"submitData()\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label position=\"floating\" class=\"label\">Company Url:</ion-label>\n            <ion-input type=\"url\" class=\"inputStyle\" formControlName=\"url\" (ngModelChange)=\"textChanged($event,'url')\"></ion-input>     \n          </ion-item>                      \n        </ion-col>\n      </ion-row>\n      <br>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label position=\"floating\" class=\"label\">Authenticate ID:</ion-label>\n            <ion-input type=\"text\" class=\"inputStyle\" formControlName=\"auth\" (ngModelChange)=\"textChanged($event,'authid')\"></ion-input>              \n          </ion-item>            \n          <ion-text *ngIf=\"submitted && f.auth.errors\">\n            <ion-text color=\"danger\" *ngIf=\"f.auth.errors.required\" style=\"font-size: 12px;float:right;font-weight: bold;\">*Required</ion-text>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <br>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label position=\"floating\" class=\"label\">Client ID:</ion-label>\n            <ion-input type=\"text\" class=\"inputStyle\" formControlName=\"client\" (ngModelChange)=\"textChanged($event,'clientid')\"></ion-input>                      \n          </ion-item>            \n           <ion-text *ngIf=\"submitted && f.client.errors\">\n            <ion-text color=\"danger\" *ngIf=\"f.client.errors.required\" style=\"font-size: 12px;float:right;font-weight: bold;\">*Required</ion-text>\n          </ion-text>\n        </ion-col>\n      </ion-row>     \n      <br>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label position=\"floating\" class=\"label\">Socket Network IP:</ion-label>\n            <ion-input type=\"text\" class=\"inputStyle\" formControlName=\"ip\" (ngModelChange)=\"textChanged($event,'ip')\"></ion-input>                      \n          </ion-item>            \n           <!-- <ion-text *ngIf=\"submitted && f.client.errors\">\n            <ion-text color=\"danger\" *ngIf=\"f.client.errors.required\" style=\"font-size: 12px;float:right;font-weight: bold;\">*Required</ion-text>\n          </ion-text> -->\n        </ion-col>\n      </ion-row>     \n      <br>\n      <ion-row>\n        <ion-col size=\"12\"> \n        <ion-button expand=\"full\" shape=\"round\" (click)=\"logout()\"><ion-icon name=\"exit\"></ion-icon> Logout</ion-button>\n        </ion-col>\n      </ion-row>\n     \n    </form>\n  </ion-grid>\n  \n  <ion-img src=\"./assets/image/web-design-development-concept-isometric-vector-illustration-isolated-white-background-web-design-development-isometric-143506536.jpg\"></ion-img>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_setting_setting_module_ts.js.map