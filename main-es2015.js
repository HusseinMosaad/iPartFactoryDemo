(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ipart_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ipart-settings.service */ "./src/app/ipart-settings.service.ts");
/* harmony import */ var _advsol_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @advsol/core */ "./node_modules/@advsol/core/__ivy_ngcc__/fesm2015/advsol-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








class AppComponent {
    constructor(settings, http, httpClient, context) {
        this.settings = settings;
        this.http = http;
        this.context = context;
        this.title = ' Hussein Calling Current User!';
        this.loggedInPartyId = "";
        this.loggedInPartyId = context.loggedInPartyId;
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"](httpClient);
    }
    // Using commonService
    ngOnInit() {
        // this.settings.GetSettings().subscribe((data: ContentItemData) => {
        //   this.data = data.Data as MySettings;
        // });
        this.getLoggedInUserInfo();
        this.getUserDataServer();
        this.listCookies();
    }
    getIqaData() {
        if (!this.query) {
            alert("Please enter Query first");
            return;
        }
        const baseUrl = this.context.baseUrl;
        const domain = window.location.href;
        const url = "https://openwater-os.secure-platform.com/ipartfactory/iqa";
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('instanceUrl', domain)
            .set('loggedInUserId', this.loggedInPartyId)
            .set('query', this.query);
        this.httpClient.get(url, { params: params }).subscribe((data) => {
            this.data = data;
            console.log(data);
        });
    }
    getLoggedInUserInfo() {
        const url = `api/party/${this.loggedInPartyId}`;
        console.log(url);
        this.http.get(url, { params: {} }).subscribe((data) => {
            this.currentUser = data;
            console.log(data);
        });
    }
    getUserDataServer() {
        const sessionIdCookie = this.getCookie('ASP.NET_SessionId');
        const loginCookieValue = this.getCookie('login');
        const domain = window.location.href;
        const url = "https://openwater-os.secure-platform.com/ipartfactory/userdata";
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('instanceUrl', domain)
            .set('loggedInUserId', this.loggedInPartyId)
            .set('token', this.context.authToken)
            .set('sessionIdCookie', sessionIdCookie)
            .set('loginCookieValue', loginCookieValue);
        console.log('Session Cookie=' + sessionIdCookie);
        console.log('Login Cookie=' + loginCookieValue);
        this.httpClient.get(url, { params: params }).subscribe((data) => {
            this.loggedInUserDataServer = data;
            console.log(data);
        });
    }
    getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    listCookies() {
        var theCookies = document.cookie.split(';');
        var aString = '';
        for (var i = 1; i <= theCookies.length; i++) {
            aString += i + ' ' + theCookies[i - 1] + "\n";
        }
        console.log('cookies =' + aString);
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ipart_settings_service__WEBPACK_IMPORTED_MODULE_2__["IpartSettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpBackend"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_advsol_core__WEBPACK_IMPORTED_MODULE_3__["AppConstantService"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 20, vars: 11, consts: [[2, "text-align", "center"], [3, "ngModel", "ngModelChange"], ["type", "button", "value", "Get IQA Result", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "Strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Current User Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "Strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Current User Server");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Search Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_15_listener($event) { return ctx.query = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_input_click_16_listener() { return ctx.getIqaData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](19, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Hello ", ctx.title, "! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](7, 5, ctx.currentUser));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 7, ctx.loggedInUserDataServer));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.query);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](19, 9, ctx.data));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _ipart_settings_service__WEBPACK_IMPORTED_MODULE_2__["IpartSettingsService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpBackend"] }, { type: _advsol_core__WEBPACK_IMPORTED_MODULE_3__["AppConstantService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _advsol_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @advsol/core */ "./node_modules/@advsol/core/__ivy_ngcc__/fesm2015/advsol-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _advsol_core__WEBPACK_IMPORTED_MODULE_3__["AsiCoreModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _advsol_core__WEBPACK_IMPORTED_MODULE_3__["AsiCoreModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _advsol_core__WEBPACK_IMPORTED_MODULE_3__["AsiCoreModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/content-keys.service.ts":
/*!*****************************************!*\
  !*** ./src/app/content-keys.service.ts ***!
  \*****************************************/
/*! exports provided: ContentKeysService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentKeysService", function() { return ContentKeysService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContentKeysService {
    // Grab our setting keys for this iPart from the DOM
    constructor() {
        const ck = document.querySelector("#x-contentKey").value;
        const cik = document.querySelector("#x-contentItemKey").value;
        this.contentKey = ck;
        this.contentItemKey = cik;
    }
}
ContentKeysService.??fac = function ContentKeysService_Factory(t) { return new (t || ContentKeysService)(); };
ContentKeysService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: ContentKeysService, factory: ContentKeysService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContentKeysService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/ipart-settings.service.ts":
/*!*******************************************!*\
  !*** ./src/app/ipart-settings.service.ts ***!
  \*******************************************/
/*! exports provided: IpartSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpartSettingsService", function() { return IpartSettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _advsol_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @advsol/core */ "./node_modules/@advsol/core/__ivy_ngcc__/fesm2015/advsol-core.js");
/* harmony import */ var _models_content_item_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/content-item-data */ "./src/app/models/content-item-data.ts");
/* harmony import */ var _content_keys_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content-keys.service */ "./src/app/content-keys.service.ts");







class IpartSettingsService extends _advsol_core__WEBPACK_IMPORTED_MODULE_2__["CommonService"] {
    constructor(http, contentKeys) {
        super(http);
        this.http = http;
        this.contentKeys = contentKeys;
    }
    GetSettings() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('contentKey', this.contentKeys.contentKey)
            .set('contentItemKey', this.contentKeys.contentItemKey);
        return this.single(_models_content_item_data__WEBPACK_IMPORTED_MODULE_3__["ContentItemData"], params);
    }
}
IpartSettingsService.??fac = function IpartSettingsService_Factory(t) { return new (t || IpartSettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_content_keys_service__WEBPACK_IMPORTED_MODULE_4__["ContentKeysService"])); };
IpartSettingsService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: IpartSettingsService, factory: IpartSettingsService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](IpartSettingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _content_keys_service__WEBPACK_IMPORTED_MODULE_4__["ContentKeysService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/models/content-item-data.ts":
/*!*********************************************!*\
  !*** ./src/app/models/content-item-data.ts ***!
  \*********************************************/
/*! exports provided: ContentItemData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentItemData", function() { return ContentItemData; });
/* harmony import */ var _advsol_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @advsol/core */ "./node_modules/@advsol/core/__ivy_ngcc__/fesm2015/advsol-core.js");

class ContentItemData extends _advsol_core__WEBPACK_IMPORTED_MODULE_0__["DataContract"] {
    constructor() {
        super(...arguments);
        this.$type = 'Asi.Soa.Core.DataContracts.ContentItemData, Asi.Contracts';
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\data\Work\Projects\openwater\imis\src\Angular-settings-demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map