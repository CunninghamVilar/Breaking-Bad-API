function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deaths-death-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deaths/death.page.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deaths/death.page.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDeathsDeathPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Death</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/deaths/death-routing.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/deaths/death-routing.module.ts ***!
    \******************************************************/

  /*! exports provided: DeathPageRoutingModule */

  /***/
  function srcAppPagesDeathsDeathRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeathPageRoutingModule", function () {
      return DeathPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _death_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./death.page */
    "./src/app/pages/deaths/death.page.ts");

    var routes = [{
      path: '',
      component: _death_page__WEBPACK_IMPORTED_MODULE_3__["DeathPage"]
    }];

    var DeathPageRoutingModule = function DeathPageRoutingModule() {
      _classCallCheck(this, DeathPageRoutingModule);
    };

    DeathPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DeathPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/deaths/death.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/deaths/death.module.ts ***!
    \**********************************************/

  /*! exports provided: DeathPageModule */

  /***/
  function srcAppPagesDeathsDeathModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeathPageModule", function () {
      return DeathPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _death_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./death-routing.module */
    "./src/app/pages/deaths/death-routing.module.ts");
    /* harmony import */


    var _death_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./death.page */
    "./src/app/pages/deaths/death.page.ts");

    var DeathPageModule = function DeathPageModule() {
      _classCallCheck(this, DeathPageModule);
    };

    DeathPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _death_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeathPageRoutingModule"]],
      declarations: [_death_page__WEBPACK_IMPORTED_MODULE_6__["DeathPage"]]
    })], DeathPageModule);
    /***/
  },

  /***/
  "./src/app/pages/deaths/death.page.scss":
  /*!**********************************************!*\
    !*** ./src/app/pages/deaths/death.page.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDeathsDeathPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlYXRocy9kZWF0aC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/deaths/death.page.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/deaths/death.page.ts ***!
    \********************************************/

  /*! exports provided: DeathPage */

  /***/
  function srcAppPagesDeathsDeathPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeathPage", function () {
      return DeathPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DeathPage = /*#__PURE__*/function () {
      function DeathPage() {
        _classCallCheck(this, DeathPage);
      }

      _createClass(DeathPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DeathPage;
    }();

    DeathPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-death',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./death.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deaths/death.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./death.page.scss */
      "./src/app/pages/deaths/death.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DeathPage);
    /***/
  }
}]);
//# sourceMappingURL=deaths-death-module-es5.js.map