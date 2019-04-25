(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employer_employer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employer/employer.component */ "./src/app/employer/employer.component.ts");
/* harmony import */ var _job_listing_job_listings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job-listing/job-listings.component */ "./src/app/job-listing/job-listings.component.ts");
/* harmony import */ var _question_forum_question_forum_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./question-forum/question-forum.component */ "./src/app/question-forum/question-forum.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _users_login_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users/login-form.component */ "./src/app/users/login-form.component.ts");
/* harmony import */ var _users_register_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users/register-form.component */ "./src/app/users/register-form.component.ts");
/* harmony import */ var _question_forum_question_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./question-forum/question-form.component */ "./src/app/question-forum/question-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home/employer', component: _employer_employer_component__WEBPACK_IMPORTED_MODULE_2__["EmployerComponent"] },
    { path: 'home/job_listings', component: _job_listing_job_listings_component__WEBPACK_IMPORTED_MODULE_3__["JobsComponent"] },
    { path: 'home/question_forum', component: _question_forum_question_forum_component__WEBPACK_IMPORTED_MODULE_4__["QuestionForumComponent"] },
    { path: 'home/questions', component: _question_forum_question_form_component__WEBPACK_IMPORTED_MODULE_8__["QuestionFormComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'login', component: _users_login_form_component__WEBPACK_IMPORTED_MODULE_6__["LoginFormComponent"] },
    { path: 'register', component: _users_register_form_component__WEBPACK_IMPORTED_MODULE_7__["RegisterFormComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active{\n    color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmV7XG4gICAgY29sb3I6IHJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<!--   <div class=\"container-fluid\">-->\n    <header>\n   <auth-el></auth-el>\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n        <img src=\"../assets/Weber Logo.png\" alt=\"Weber State\">\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" style=\"margin-left: 500px\" id=\"navbarText\">\n         \n          <span class=\"navbar-text\">\n            <ul class=\"navbar-nav mr-auto my-2 my-lg-0\">\n              <li class=\"topnav home nav-item\" >\n                <a class=\"nav-link\"  routerLink=\"/home\" routerLinkActive=\"activate\"\n                [routerLinkActiveOptions]=\"{ exact: true }\" >Home </a>\n              </li>\n              <li class=\"topnav nav-item\">\n              <a class=\"nav-link\"  routerLink=\"/home/employer\" routerLinkActive=\"activate\">Employer</a>\n              </li>\n              <li class=\"topnav nav-item\">\n                <a class=\"nav-link\" routerLink=\"/home/job_listings\" routerLinkActive=\"activate\">Jobs</a>\n              </li>\n              <li class=\"topnav nav-item\">\n                  <a class=\"nav-link\" routerLink=\"/home/question_forum\" routerLinkActive=\"activate\">Questions</a>\n                </li>\n            </ul>\n          </span>\n        </div>\n      </nav>\n    </header>\n   \n   <div class=\"banner\"></div>\n   \n   <div class=\"colorBar text-center row2\">\n       <div class=\"row acitve\">\n        \n            <div class=\"col-sm-4\">\n                <a  routerLink=\"/home/employer\" routerLinkActive=\"active\">\n                <i class=\"fas fa-handshake fa-3x\"></i>\n                <p>Employer</p>\n                </a>\n            </div>\n    \n            <div class=\"col-sm-4\">\n                <a routerLink=\"/home/job_listings\" routerLinkActive=\"active\">\n                <i class=\"fas fa-clipboard-check fa-3x\"></i>\n                <p>Apply to Jobs</p>\n                </a>\n            </div>\n            <div class=\"col-sm-4\">\n                <a routerLink=\"/home/question_forum\" routerLinkActive=\"active\">\n                <i class=\"fas fa-question fa-3x\"></i>\n                <p>Questions Forum</p>\n                </a>\n            </div>\n        </div>\n   </div>\n   <router-outlet></router-outlet>\n\n   \n   <footer class=\"page-footer fixed-bottom pt-2 pb-2\">\n     <div class=\"footer-copyright\">\n        &copy; 2019 Copyright:\n        <a href=\"\">Capstone</a> \n     </div>\n\n  </footer>\n   \n  \n    \n    \n    \n    \n    \n<!--</div>-->\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'capstone';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: ["\n  .active   {\n    color: #fff !important;\n  \n  }\n  .activate   {\n    color: #492365 !important;\n    border-bottom: #492365 solid 1px;\n  }\n", __webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _question_forum_question_forum_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./question-forum/question-forum.component */ "./src/app/question-forum/question-forum.component.ts");
/* harmony import */ var _employer_employer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employer/employer.component */ "./src/app/employer/employer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _users_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users/user.component */ "./src/app/users/user.component.ts");
/* harmony import */ var _services_authentication_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/authentication.guard */ "./src/app/services/authentication.guard.ts");
/* harmony import */ var _users_login_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users/login-form.component */ "./src/app/users/login-form.component.ts");
/* harmony import */ var _users_register_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users/register-form.component */ "./src/app/users/register-form.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _job_listing_job_listings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./job-listing/job-listings.component */ "./src/app/job-listing/job-listings.component.ts");
/* harmony import */ var _job_listing_job_listing_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./job-listing/job-listing.component */ "./src/app/job-listing/job-listing.component.ts");
/* harmony import */ var _question_forum_question_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./question-forum/question-form.component */ "./src/app/question-forum/question-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _question_forum_question_forum_component__WEBPACK_IMPORTED_MODULE_4__["QuestionForumComponent"],
                _job_listing_job_listing_component__WEBPACK_IMPORTED_MODULE_15__["JobComponent"],
                _employer_employer_component__WEBPACK_IMPORTED_MODULE_5__["EmployerComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _users_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"],
                _users_login_form_component__WEBPACK_IMPORTED_MODULE_9__["LoginFormComponent"],
                _users_register_form_component__WEBPACK_IMPORTED_MODULE_10__["RegisterFormComponent"],
                _job_listing_job_listings_component__WEBPACK_IMPORTED_MODULE_14__["JobsComponent"],
                _question_forum_question_form_component__WEBPACK_IMPORTED_MODULE_16__["QuestionFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot()
            ],
            providers: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_8__["AuthenticationGaurd"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/base.component.ts":
/*!***********************************!*\
  !*** ./src/app/base.component.ts ***!
  \***********************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");

var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
    }
    Object.defineProperty(BaseComponent.prototype, "loggedIn", {
        get: function () {
            return _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"].isAuthenticated();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "notLoggedIn", {
        get: function () {
            return !this.loggedIn;
        },
        enumerable: true,
        configurable: true
    });
    return BaseComponent;
}());



/***/ }),

/***/ "./src/app/employer/employer.component.css":
/*!*************************************************!*\
  !*** ./src/app/employer/employer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVyL2VtcGxveWVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/employer/employer.component.html":
/*!**************************************************!*\
  !*** ./src/app/employer/employer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n  <div class=\"row\">\n     <h2 class=\"text-center col-12\">\n        <span class=\"underline\">Employer Application</span>\n     </h2>\n     <br>\n     <br>\n     <br>\n     <div class=\"text-center col-3\"></div>\n     <div class=\"text-center col-6\">\n        <form>\n           <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"Company\">\n           </div>\n           <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"Location\">\n           </div>\n           <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"Job Title\">\n           </div>\n           <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"Part/Full/Inten\">\n           </div>\n           <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"Pay\">\n           </div>\n           <div class=\"form-group\">\n              <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" placeholder=\"Description\"></textarea>\n           </div>\n           <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"Link to job site\">\n           </div>\n          \n           <br>\n           <div class=\"form-group\">\n               <button type=\"submit\" class=\"btn btn-primary mb-2\">Submit</button>\n           </div>\n        </form>\n     </div>\n  </div> -->\n\n  <h2>Employer Application</h2>\n<form>\n  <div class=\"form-group row\">\n    <label for=\"etitle\" class=\"col-sm-2 col-form-label\">Title</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" required minlength=\"5\" maxlength=\"60\" class=\"form-control\" name=\"title\" id=\"etitle\" [(ngModel)]=\"job.title\" #title=\"ngModel\">\n      <!-- <div class=\"invalid-feedback\" [hidden]=\"title.valid || title.pristine\">\n        Please enter a title.\n      </div> -->\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"ecompany_name\" class=\"col-sm-2 col-form-label\">Company Name</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" required class=\"form-control\" name=\"company_name\" id=\"ecompany_name\" [(ngModel)]=\"job.company_name\" #author=\"ngModel\">\n      <!-- <div class=\"invalid-feedback\" [hidden]=\"company_name.valid || company_name.pristine\">\n        Please ener an author.\n      </div> -->\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"elocation\" class=\"col-sm-2 col-form-label\">Location</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" name=\"Location\" id=\"elocation\" [(ngModel)]=\"job.location\" >\n      <!-- <div class=\"invalid-feedback\" >\n        Please enter a valid URL for the poster.\n      </div> -->\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"etype\" class=\"col-sm-2 col-form-label\">Type</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" required class=\"form-control\" name=\"type\" id=\"etype\"  [(ngModel)]=\"job.type\" #isbn=\"ngModel\">\n      <!-- <div class=\"invalid-feedback\" [hidden]=\"type.valid || type.pristine\">\n        Please enter an isbn\n      </div> -->\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"edescription\" class=\"col-sm-2 col-form-label\">Description</label>\n    <div class=\"col-sm-10\">\n      <textarea name=\"description\" required id=\"edescription\" cols=\"30\" rows=\"10\" class=\"form-control\" [(ngModel)]=\"job.description\" #synopsis=\"ngModel\"></textarea>\n      <!-- <div class=\"invalid-feedback\" [hidden]=\"description.valid || description.pristine\">\n        Please enter a synopsis.\n      </div> -->\n    </div>\n  </div>\n  <div class=\"form-group row\">\n   <label for=\"epay\" class=\"col-sm-2 col-form-label\">Pay</label>\n   <div class=\"col-sm-10\">\n      <input type=\"text\" required minlength=\"5\" maxlength=\"60\" class=\"form-control\" name=\"pay\" id=\"epay\" [(ngModel)]=\"job.pay\" #title=\"ngModel\">\n     <!-- <div class=\"invalid-feedback\" [hidden]=\"pay.valid || pay.pristine\">\n       Please enter a synopsis.\n     </div> -->\n   </div>\n </div>\n <div class=\"form-group row\">\n   <label for=\"eURL\" class=\"col-sm-2 col-form-label\">Link to job</label>\n   <div class=\"col-sm-10\">\n      <input type=\"text\" required minlength=\"5\" maxlength=\"60\" class=\"form-control\" name=\"URL\" id=\"eURL\" [(ngModel)]=\"job.URL\" #title=\"ngModel\">\n     <!-- <div class=\"invalid-feedback\" [hidden]=\"URL.valid || URL.pristine\">\n       Please enter a synopsis.\n     </div> -->\n   </div>\n </div>\n\n\n\n\n\n\n\n  <div class=\"form-group row\">\n      <label for=\"\" class=\"col-sm-2 col-form-label\"></label>\n      <div class=\"col-sm-10\" style=\"margin-bottom: 100px;\">\n        <button type=\"submit\" (click)=\"onCreate(job)\" class=\"btn btn-primary\" routerLink=\"/home\">Submit</button>&nbsp;\n        <button class=\"btn btn-secondary\" routerLink=\"/home\">Cancel</button>\n      </div>\n    </div>\n</form>\n\n "

/***/ }),

/***/ "./src/app/employer/employer.component.ts":
/*!************************************************!*\
  !*** ./src/app/employer/employer.component.ts ***!
  \************************************************/
/*! exports provided: EmployerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerComponent", function() { return EmployerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_job__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/job */ "./src/app/models/job.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_jobs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/jobs.service */ "./src/app/services/jobs.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmployerComponent = /** @class */ (function () {
    //@Output() createJob= new EventEmitter<Job>();
    function EmployerComponent(jobsService, route, router, toastr) {
        this.jobsService = jobsService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.job = new _models_job__WEBPACK_IMPORTED_MODULE_1__["Job"]();
    }
    EmployerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var bid = this.route.snapshot.params['id'];
        if (bid !== undefined) {
            this.jobsService.getJob(bid).subscribe(function (orig) { return Object.assign(_this.job, orig); });
        }
    };
    EmployerComponent.prototype.onCreate = function (job) {
        var _this = this;
        this.jobsService.createJob(job).subscribe(function (res) {
            console.log(job);
            _this.router.navigate(['/home']);
            //this.createJob.emit(job);
        });
    };
    EmployerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./employer.component.html */ "./src/app/employer/employer.component.html"),
            styles: [__webpack_require__(/*! ./employer.component.css */ "./src/app/employer/employer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_jobs_service__WEBPACK_IMPORTED_MODULE_3__["JobsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], EmployerComponent);
    return EmployerComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sections\">\n    <div class=\"row\">\n        <h2 class=\"text-center col-12\">\n            <span class=\"underline\">Most Recent Job Posts</span>\n        </h2>\n        <br>\n        <br>\n\n    </div>\n    <div class=\"row\">\n        <div class=\"col-4\"></div>\n        <div class=\"text-center col-4\">\n            <h5>Title:</h5>\n            <p>{{ jobs[jobs.length - 1].title}} <br></p>\n            <h5>Description:</h5>\n            <p>{{ jobs[jobs.length - 1].description}} <br></p>\n            <h5>Comany Name:</h5>\n            <p>{{ jobs[jobs.length - 1].company_name}} <br></p>\n            <h5>Pay:</h5>\n            <p>{{ jobs[jobs.length - 1].pay}} <br></p>\n            <h5>Type:</h5>\n            <p>{{ jobs[jobs.length - 1].type}} <br></p>\n            <h5>URL:</h5>\n            <p>{{ jobs[jobs.length - 1].URL}} <br></p>\n            <h5>Location:</h5>\n            <p>{{ jobs[jobs.length - 1].location}} <br></p>\n        </div>\n        <div class=\"col-4\"></div>\n    </div>\n</div>\n\n<div class=\"row employer \">\n    <div class=\"col-sm-12 text-center\">\n        <h2>\n            <span class=\"underline2\">\n                Employers\n            </span>\n        </h2>\n\n        <p>\n            If your company is looking for full time, part time, or internship positions,\n        </p>\n\n        <p>submit your application here and we will take care of the rest. </p>\n\n        <button type=\"button\" class=\"btn btn-outline-light\" routerLink=\"/home/employer\">SEND APPLICATION</button>\n\n    </div>\n</div>\n\n<div class=\"sections\">\n    <div class=\"row\">\n        <h2 class=\"text-center col-12\" style=\"margin-bottom: 15px;\">\n            <span class=\"underline\">Most recent Question Posts</span>\n        </h2>\n        <br>\n        <br>\n        <div class=\"col-4\"></div>\n        <div class=\"text-center col-4\">\n            <h5>Title:</h5>\n            <p>How do I create a for loop? <br></p>\n            <h5>Description:</h5>\n            <p>My for loop is not working how do I fix it? <br></p>\n            <h5>Class:</h5>\n            <p>CS 1400<br></p>\n            <h5>Snippit:</h5>\n           <a  class=\"btn btn-primary\"  routerLink=\"/home/questions\">ASK QUESTION</a>\n            \n        </div>\n\n        <div class=\"col-4\"></div>\n    </div>\n</div>\n\n<div class=\"colorBar2\">\n    <div class=\"row\">\n\n        <div class=\"col-12 text-center\">\n            <h3>\n                <span class=\"underline2\">\n                    Already Registered?\n                </span>\n            </h3>\n        </div>\n\n        <div class=\"col-12 text-center\">\n            <p>\n                Login now to add your input to other students questions\n            </p>\n        </div>\n\n        <div class=\"col-12 text-center\">\n            <button type=\"button\" class=\"btn btn-outline-light\">LOGIN</button>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_jobs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/jobs.service */ "./src/app/services/jobs.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(jobList) {
        this.jobList = jobList;
        this.jobs = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jobList.getJobs().subscribe(function (data) { return _this.jobs = data; });
        //console.log( "this is jobs")
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_jobs_service__WEBPACK_IMPORTED_MODULE_1__["JobsService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/job-listing/job-listing.component.html":
/*!********************************************************!*\
  !*** ./src/app/job-listing/job-listing.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sections text-center \">\n  <h2> <span class=\"underline\"> Jobs</span></h2>\n  <div class=\"container-fluid\">\n   <div class=\"col-sm-12 text-center\">\n        <jobs-el *ngFor=\"let job of jobs\" [job]=\"job\"></jobs-el>\n    </div>\n    </div>\n  \n    \n</div>\n\n<div class=\"row\">\n  <h2 class=\"text-center col-12\">\n      <span class=\"underline\">Most Recent Job Posts</span>\n  </h2>\n \n</div>\n<br>\n<br>\n<div class=\"container jobs\">\n  \n<div class=\"row\"> \n    <div class=\"col-3\"></div>\n    <div class=\" pad-left col-4\">\n        <div >\n         <h4>Title: </h4>\n          <p>{{job.title}}</p>\n          <h4>Company:</h4>\n          <p>{{job.company_name}}</p>\n          <h4>Pay:</h4>\n          <p>{{job.pay}}</p>\n          <h4>Location:</h4>\n          <p>{{job.location}}</p>\n         </div>\n    </div>\n    <div class=\"col-3 jobpic\">\n        \n        <h4>Description:</h4>\n        <p>{{job.description}}</p> \n       <h4>Date Posted</h4>\n        <p>{{job.type}}</p>\n           </div>\n</div>    \n<div class=\"row\">\n  <div class=\"col-sm-12 text-center\">\n      <a  href={{job.URL}} target=\"_blank\"class=\"btn cent btn-outline-secondary\">APPLY NOW</a>\n\n  </div>\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/job-listing/job-listing.component.ts":
/*!******************************************************!*\
  !*** ./src/app/job-listing/job-listing.component.ts ***!
  \******************************************************/
/*! exports provided: JobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobComponent", function() { return JobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_job__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/job */ "./src/app/models/job.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JobComponent = /** @class */ (function () {
    function JobComponent() {
        this.expanded = false;
    }
    JobComponent.prototype.expandedOrShrink = function () {
        this.expanded = !this.expanded;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_job__WEBPACK_IMPORTED_MODULE_1__["Job"])
    ], JobComponent.prototype, "job", void 0);
    JobComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'jobs-el',
            template: __webpack_require__(/*! ./job-listing.component.html */ "./src/app/job-listing/job-listing.component.html")
        })
    ], JobComponent);
    return JobComponent;
}());



/***/ }),

/***/ "./src/app/job-listing/job-listings.component.html":
/*!*********************************************************!*\
  !*** ./src/app/job-listing/job-listings.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sections text-center \">\n    <h2> <span class=\"underline\">Jobs</span></h2>\n    <div class=\"container-fluid\">\n        <div class=\"col-sm-12 text-center\">\n            <!-- <jobs-el *ngFor=\"let job of jobs\" [job]=\"job\"></jobs-el> -->\n            <div class=\"row\">\n                <div class=\"col-sm-6\" *ngFor=\"let job of jobs\">\n                    <div class=\"card mb-4 shadow p-3 mb-5 bg-white rounded\">\n                        <div class=\"card-header\">\n                            {{ job.title }}\n                        </div>\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                        <p class=\"card-text\">{{ job.company_name }}</p>\n                                        <p class=\"card-text\">{{ job.pay }}</p>\n                                        <p class=\"card-text\">{{ job.location }}</p>\n                                        <p class=\"card-text\">{{ job.type }}</p>\n                                        <p class=\"card-text\">{{ job.URL }}</p>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                        <p class=\"card-text\">{{ job.description }}</p>\n                                </div>\n                            </div>\n                            \n                            \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/job-listing/job-listings.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/job-listing/job-listings.component.ts ***!
  \*******************************************************/
/*! exports provided: JobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsComponent", function() { return JobsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_jobs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/jobs.service */ "./src/app/services/jobs.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JobsComponent = /** @class */ (function () {
    function JobsComponent(jobList) {
        this.jobList = jobList;
        this.jobs = [];
    }
    JobsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jobList.getJobs().subscribe(function (data) { return _this.jobs = data; });
        console.log("this is jobs");
    };
    JobsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            //selector: 'quotes-el',
            template: __webpack_require__(/*! ./job-listings.component.html */ "./src/app/job-listing/job-listings.component.html")
        }),
        __metadata("design:paramtypes", [_services_jobs_service__WEBPACK_IMPORTED_MODULE_1__["JobsService"]])
    ], JobsComponent);
    return JobsComponent;
}());



/***/ }),

/***/ "./src/app/models/job.ts":
/*!*******************************!*\
  !*** ./src/app/models/job.ts ***!
  \*******************************/
/*! exports provided: Job */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Job", function() { return Job; });
var Job = /** @class */ (function () {
    function Job() {
    }
    return Job;
}());



/***/ }),

/***/ "./src/app/models/question.ts":
/*!************************************!*\
  !*** ./src/app/models/question.ts ***!
  \************************************/
/*! exports provided: PostForum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostForum", function() { return PostForum; });
var PostForum = /** @class */ (function () {
    function PostForum() {
    }
    return PostForum;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/question-forum/question-form.component.html":
/*!*************************************************************!*\
  !*** ./src/app/question-forum/question-form.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Ask Question</h2>\n<form>\n  <div class=\"form-group row\">\n    <label for=\"qtitle\" class=\"col-sm-2 col-form-label\">Question</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" required minlength=\"5\" maxlength=\"60\" class=\"form-control\" name=\"title\" id=\"qtitle\" [(ngModel)]=\"question.title\" #title=\"ngModel\">\n      <!-- <div class=\"invalid-feedback\" [hidden]=\"title.valid || title.pristine\">\n        Please enter a title.\n      </div> -->\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"qquestion\" class=\"col-sm-2 col-form-label\">Description</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" required class=\"form-control\" name=\"question\" id=\"qquestion\" [(ngModel)]=\"question.questions\" #question=\"ngModel\">\n      <!-- <div class=\"invalid-feedback\" [hidden]=\"company_name.valid || company_name.pristine\">\n        Please ener an author.\n      </div> -->\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"qclass\" class=\"col-sm-2 col-form-label\">Class Name</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" name=\"class\" id=\"qclass\" [(ngModel)]=\"question.class\" >\n      <!-- <div class=\"invalid-feedback\" >\n        Please enter a valid URL for the poster.\n      </div> -->\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"qimage\" class=\"col-sm-2 col-form-label\">Code Snippit</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" required class=\"form-control\" name=\"image\" id=\"qimage\"  [(ngModel)]=\"question.image\" #image=\"ngModel\">\n      <!-- <div class=\"invalid-feedback\" [hidden]=\"type.valid || type.pristine\">\n        Please enter an isbn\n      </div> -->\n    </div>\n  </div>\n  \n\n\n  <div class=\"form-group row\" style=\"margin-bottom: 100px;\">\n      <label  for=\"\" class=\"col-sm-2 col-form-label\"></label>\n      <div class=\"col-sm-10\" >\n        <button type=\"submit\" (click)=\"onSubmit(question)\" class=\"btn btn-primary\" >Submit</button>&nbsp;\n        <button class=\"btn btn-secondary\" routerLink=\"/home\">Cancel</button>\n      </div>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/question-forum/question-form.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/question-forum/question-form.component.ts ***!
  \***********************************************************/
/*! exports provided: QuestionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionFormComponent", function() { return QuestionFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/question */ "./src/app/models/question.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/questions.service */ "./src/app/services/questions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionFormComponent = /** @class */ (function () {
    //job: Job = new Job()
    //@Output() createJob= new EventEmitter<Job>();
    function QuestionFormComponent(questionsService, route, router, toastr) {
        this.questionsService = questionsService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.question = new _models_question__WEBPACK_IMPORTED_MODULE_1__["PostForum"]();
    }
    QuestionFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var bid = this.route.snapshot.params['id'];
        if (bid !== undefined) {
            this.questionsService.getQuestion(bid).subscribe(function (orig) { return Object.assign(_this.question, orig); });
        }
    };
    QuestionFormComponent.prototype.onSubmit = function (question) {
        this.questionsService.createQuestion(question).subscribe(function (res) {
            console.log(question);
            //this.createJob.emit(job);
        });
    };
    QuestionFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./question-form.component.html */ "./src/app/question-forum/question-form.component.html")
        }),
        __metadata("design:paramtypes", [_services_questions_service__WEBPACK_IMPORTED_MODULE_4__["QuestionsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], QuestionFormComponent);
    return QuestionFormComponent;
}());



/***/ }),

/***/ "./src/app/question-forum/question-forum.component.css":
/*!*************************************************************!*\
  !*** ./src/app/question-forum/question-forum.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uLWZvcnVtL3F1ZXN0aW9uLWZvcnVtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/question-forum/question-forum.component.html":
/*!**************************************************************!*\
  !*** ./src/app/question-forum/question-forum.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"sections\">\n    <div class=\"row\">\n        <h2 class=\"text-center col-12\" style=\"margin-bottom: 15px;\">\n            <span class=\"underline\">Most recent Question Posts</span>\n        </h2>\n        <br>\n        <br>\n        <div class=\"col-4\"></div>\n        <div class=\"text-center col-4\">\n            <h5>Title:</h5>\n            <p>How do I create a for loop? <br></p>\n            <h5>Description:</h5>\n            <p>My for loop is not working how do I fix it? <br></p>\n            <h5>Class:</h5>\n            <p>CS 1400<br></p>\n            <h5>Snippit:</h5>\n            <p> <br></p>\n        </div>\n\n        <div class=\"col-4\"></div>\n    </div>\n\n\n    <div class=\"row\">\n  \n      <div class=\"col-4\"></div>\n      <div class=\"text-center col-4\">\n          <h5>Title:</h5>\n          <p>How do I create a for loop? <br></p>\n          <h5>Description:</h5>\n          <p>My for loop is not working how do I fix it? <br></p>\n          <h5>Class:</h5>\n          <p>CS 1400<br></p>\n          <h5>Snippit:</h5>\n          <p> <br></p>\n      </div>\n\n      <div class=\"col-4\"></div>\n  </div>\n\n\n\n  <div class=\"row\">\n    <\n    <div class=\"col-4\"></div>\n    <div class=\"text-center col-4\">\n        <h5>Title:</h5>\n        <p>How do I create a for loop? <br></p>\n        <h5>Description:</h5>\n        <p>My for loop is not working how do I fix it? <br></p>\n        <h5>Class:</h5>\n        <p>CS 1400<br></p>\n        <h5>Snippit:</h5>\n        <p> <br></p>\n    </div>\n\n    <div class=\"col-4\"></div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/question-forum/question-forum.component.ts":
/*!************************************************************!*\
  !*** ./src/app/question-forum/question-forum.component.ts ***!
  \************************************************************/
/*! exports provided: QuestionForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionForumComponent", function() { return QuestionForumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuestionForumComponent = /** @class */ (function () {
    function QuestionForumComponent() {
    }
    QuestionForumComponent.prototype.ngOnInit = function () {
    };
    QuestionForumComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question-forum',
            template: __webpack_require__(/*! ./question-forum.component.html */ "./src/app/question-forum/question-forum.component.html"),
            styles: [__webpack_require__(/*! ./question-forum.component.css */ "./src/app/question-forum/question-forum.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuestionForumComponent);
    return QuestionForumComponent;
}());



/***/ }),

/***/ "./src/app/services/authentication.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/services/authentication.guard.ts ***!
  \**************************************************/
/*! exports provided: AuthenticationGaurd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGaurd", function() { return AuthenticationGaurd; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationGaurd = /** @class */ (function () {
    function AuthenticationGaurd(router) {
        this.router = router;
    }
    AuthenticationGaurd.prototype.canActivate = function (route, state) {
        if (_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"].isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthenticationGaurd = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthenticationGaurd);
    return AuthenticationGaurd;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { BEST_SELLERS } from '../models/books';

var httpHeaders = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'content-type': 'application/json' })
};
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.isAuthenticated = function () {
        return localStorage.getItem('auth-token') !== null;
    };
    AuthenticationService.prototype.register = function (user) {
        //todo 
        return this.http.post('http://localhost:8080/api/users/register', user, httpHeaders);
    };
    AuthenticationService.prototype.login = function (user) {
        //todo
        var res = this.http.post("http://localhost:8080/api/users/login", user, httpHeaders);
        return res.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            if (data['token']) {
                localStorage.setItem('auth-token', data['token']);
                return true; //success login
            }
            else {
                return false; //unable to login
            }
        }));
    };
    AuthenticationService.prototype.logout = function () {
        //todo
        localStorage.removeItem('auth-token');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/jobs.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/jobs.service.ts ***!
  \******************************************/
/*! exports provided: JobsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsService", function() { return JobsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpHeaders = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var JobsService = /** @class */ (function () {
    function JobsService(http) {
        this.http = http;
    }
    JobsService.prototype.getJob = function (id) {
        return this.http.get("http://localhost:8080/api/jobs/" + id, httpHeaders);
    };
    JobsService.prototype.getJobs = function () {
        return this.http.get('http://localhost:8080/api/jobs', httpHeaders);
    };
    JobsService.prototype.createJob = function (job) {
        console.log('Service call:', job);
        return this.http.post('http://localhost:8080/api/jobs/create', job, httpHeaders);
    };
    JobsService.prototype.updateJob = function (job) {
        return this.http.put("http://localhost:8080/api/jobs/" + job._id + "/update", job, httpHeaders);
    };
    JobsService.prototype.deleteJob = function (job) {
        return this.http.delete("http://localhost:8080/api/jobs/" + job._id + "/delete", httpHeaders);
    };
    JobsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], JobsService);
    return JobsService;
}());



/***/ }),

/***/ "./src/app/services/questions.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/questions.service.ts ***!
  \***********************************************/
/*! exports provided: QuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsService", function() { return QuestionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpHeaders = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var QuestionsService = /** @class */ (function () {
    function QuestionsService(http) {
        this.http = http;
    }
    QuestionsService.prototype.getQuestion = function (id) {
        return this.http.get("http://localhost:8080/api/post_forums/" + id, httpHeaders);
    };
    QuestionsService.prototype.getQuestions = function () {
        return this.http.get('http://localhost:8080/api/post_forums', httpHeaders);
    };
    QuestionsService.prototype.createQuestion = function (question) {
        console.log('Service call:', question);
        return this.http.post('http://localhost:8080/api/post_forums/create', question, httpHeaders);
    };
    QuestionsService.prototype.updateJob = function (question) {
        return this.http.put("http://localhost:8080/api/post_forums/" + question._id + "/update", question, httpHeaders);
    };
    QuestionsService.prototype.deleteJob = function (question) {
        return this.http.delete("http://localhost:8080/api/post_forums/" + question._id + "/delete", httpHeaders);
    };
    QuestionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], QuestionsService);
    return QuestionsService;
}());



/***/ }),

/***/ "./src/app/users/login-form.component.html":
/*!*************************************************!*\
  !*** ./src/app/users/login-form.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <h2 class=\"text-center col-12\">\n       <span class=\"underline\">Login</span>\n    </h2>\n    <br>\n    <br>\n    <br>\n    <div class=\"text-center col-3\"></div>\n    <div class=\"text-center col-6\">\n    <form #f=\"ngForm\" (ngSubmit)=\" onSubmit(f)\" [ngClass]=\"{'was-validated' : !f.valid && !f.pristine}\">\n        <div class=\"form-group row text-center\">\n          \n          <!-- <label for=\"username\" class=\"col-sm-2 col-form-label\" >Username</label> -->\n        \n            <input placeholder=\"username\" type=\"text\" required minlength=\"1\" maxlength=\"10\"  class=\"form-control\" name=\"username\" id=\"username\" [(ngModel)]=\"user.username\" #username=\"ngModel\">\n          <div class=\"invalid-feedback\" [hidden]=\"username.valid || username.pristine\">\n            please add a username\n          </div>\n         \n        </div>\n        <div class=\"form-group row text-center\">\n         \n            <!-- <label for=\"password\" class=\"col-sm-2 col-form-label\" >Password</label> -->\n           \n         \n              <input placeholder=\"password\" type=\"password\" required minlength=\"1\" class=\"form-control\" name=\"password\" id=\"password\" [(ngModel)]=\"user.password\" #password=\"ngModel\">\n              <div class=\"invalid-feedback\" [hidden]=\"password.valid || password.pristine\">\n                please add a password\n              </div>\n           \n          </div>\n                <div class=\"form-group row\">\n                   \n                    <div class=\"col-sm-12 text-center\">\n                    <button type=\"submit\" class=\"btn btn-primary\">Submit</button> &nbsp;\n                    <button class=\"btn btn-danger\" routerLink=\"/home\">Cancel</button>&nbsp;\n                    <button type=\"submit\" routerLink=\"/register\" class=\"btn btn-primary\">Register</button> &nbsp;\n  \n                    </div>\n                  </div>\n      </form>\n     \n      </div>\n      </div>\n"

/***/ }),

/***/ "./src/app/users/login-form.component.ts":
/*!***********************************************!*\
  !*** ./src/app/users/login-form.component.ts ***!
  \***********************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(toastr, authService, router) {
        this.toastr = toastr;
        this.authService = authService;
        this.router = router;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    LoginFormComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (f.valid) {
            this.authService.login(this.user).subscribe(function (res) {
                _this.toastr.success("Successfully logged in.");
                _this.router.navigate(['/home']);
            }, function (error) {
                _this.toastr.error('Unable to log in! Contact admin.');
            });
        }
        else {
            for (var c in f.controls) {
                f.controls[c].markAsDirty();
            }
        }
    };
    LoginFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login-el',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/users/login-form.component.html")
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/users/register-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/users/register-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n        <h2 class=\"text-center col-12\">\n           <span class=\"underline\">Register</span>\n        </h2>\n        <br>\n        <br>\n        <br>\n        <div class=\"text-center col-3\"></div>\n        <div class=\"text-center col-6\">\n<form #f=\"ngForm\" (ngSubmit)=\" onSubmit(f)\" [ngClass]=\"{'was-validated' : !f.valid && !f.pristine}\">\n\n    <div class=\"form-group row\">\n        <label for=\"firstName\" class=\"col-sm-2 col-form-label\"></label>\n       \n            <input placeholder=\"First Name\" type=\"text\" required minlength=\"1\" class=\"form-control\" name=\"firstName\" id=\"firstName\"\n                [(ngModel)]=\"user.firstName\" #firstName=\"ngModel\">\n            <div class=\"invalid-feedback\" [hidden]=\"firstName.valid || firstName.pristine\">\n                please add first Name\n           </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label for=\"LastName\" class=\"col-sm-2 col-form-label\"></label>\n\n            <input placeholder=\"Last Name\" type=\"text\" required minlength=\"1\" class=\"form-control\" name=\"LastName\" id=\"LastName\"\n                [(ngModel)]=\"user.LastName\" #LastName=\"ngModel\">\n            <div class=\"invalid-feedback\" [hidden]=\"LastName.valid || LastName.pristine\">\n                please add Last Name\n            </div>\n        \n    </div>\n\n\n    <div class=\"form-group row\">\n        <label for=\"username\" class=\"col-sm-2 col-form-label\"></label>\n       \n            <input placeholder=\"User Name\" type=\"text\" required minlength=\"1\" maxlength=\"60\" class=\"form-control\" name=\"username\" id=\"username\"\n                [(ngModel)]=\"user.username\" #username=\"ngModel\">\n            <div class=\"invalid-feedback\" [hidden]=\"username.valid || username.pristine\">\n                please add a username\n         \n        </div>\n    </div>\n    <div class=\"form-group row\">\n        <label for=\"email\" class=\"col-sm-2 col-form-label\"></label>\n       \n            <input placeholder=\"Email\" type=\"email\" class=\"form-control\" name=\"email\" id=\"email\"\n                [(ngModel)]=\"user.email\" #email=\"ngModel\">\n            <div class=\"invalid-feedback\" [hidden]=\"email.valid || email.pristine\">\n                please add an email\n            </div>\n        \n    </div>\n    <div class=\"form-group row\">\n        <label for=\"password\" class=\"col-sm-2 col-form-label\"></label>\n       \n            <input placeholder=\"Password\" type=\"password\" required minlength=\"1\" class=\"form-control\" name=\"password\" id=\"password\"\n                [(ngModel)]=\"user.password\" #password=\"ngModel\">\n            <div class=\"invalid-feedback\" [hidden]=\"password.valid || password.pristine\">\n                please add a password\n            </div>\n      \n    </div>\n    <div class=\"form-group row\">\n                   \n            <div class=\"col-sm-12 text-center\">\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button> &nbsp;\n            <button class=\"btn btn-danger\" routerLink=\"/home\">Cancel</button>&nbsp;\n            <button  routerLink=\"/login\" class=\"btn btn-primary\">Login</button> &nbsp;\n\n            </div>\n          </div>\n</form>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/users/register-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/users/register-form.component.ts ***!
  \**************************************************/
/*! exports provided: RegisterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormComponent", function() { return RegisterFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterFormComponent = /** @class */ (function () {
    function RegisterFormComponent(toastr, authService, router) {
        this.toastr = toastr;
        this.authService = authService;
        this.router = router;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    RegisterFormComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (f.valid) {
            this.authService.register(this.user).subscribe(function (res) {
                _this.toastr.success("Successfully registered.");
                _this.router.navigate(['/home']);
            }, function (error) {
                _this.toastr.error('Unable to register! Contact admin.');
            });
        }
        else {
            for (var c in f.controls) {
                f.controls[c].markAsDirty();
            }
            this.toastr.error("Validation errors. Please fix and try again!");
        }
    };
    RegisterFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./register-form.component.html */ "./src/app/users/register-form.component.html")
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterFormComponent);
    return RegisterFormComponent;
}());



/***/ }),

/***/ "./src/app/users/user.component.html":
/*!*******************************************!*\
  !*** ./src/app/users/user.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar top \">\n    <ul class=\"navbar-nav ml-auto\" style=\"display: inline; margin-right: 20px;\">\n        <ng-template [ngIf]=\"notLoggedIn\">\n            <li class=\"nav-item\">\n                <a href=\"/register\" class=\"nav-link\">Register</a> &nbsp; | &nbsp;\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"/login\" class=\"nav-link\">Login</a>\n            </li>\n        </ng-template>\n        <li class=\"nav-item\" *ngIf=\"loggedIn\">\n            Welcome! &nbsp; | &nbsp;\n        </li>\n        <li class=\"nav-item\" *ngIf=\"loggedIn\">\n            <a  class=\"nav-link\" (click)=\"logout()\">Logout</a>\n        </li>\n    </ul>\n  </nav> \n\n  <!-- <ng-template [ngIf]=\"notLoggedIn\">\n    <li class=\"nav-item\">\n        <a href=\"/register\" class=\"nav-link\">Register</a>\n    </li>\n    <li class=\"nav-item\">\n        <a href=\"/login\" class=\"nav-link\">Login</a>\n    </li>\n</ng-template>\n<li class=\"nav-item\" *ngIf=\"loggedIn\">\n    <a  class=\"nav-link\" (click)=\"logout()\">Logout</a>\n</li> -->"

/***/ }),

/***/ "./src/app/users/user.component.ts":
/*!*****************************************!*\
  !*** ./src/app/users/user.component.ts ***!
  \*****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = /** @class */ (function (_super) {
    __extends(UserComponent, _super);
    function UserComponent(authService, router) {
        var _this = _super.call(this) || this;
        _this.authService = authService;
        _this.router = router;
        return _this;
    }
    UserComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/']);
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'auth-el',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/users/user.component.html")
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserComponent);
    return UserComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/anthony/Desktop/Capstone2.0/ng/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map