/*!
 * surveyjs - Survey JavaScript library v1.12.26
 * Copyright (c) 2015-2025 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory((function webpackLoadOptionalExternalModule() { try { return require("jquery"); } catch(e) {} }()), require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("survey-js-ui", ["jquery", "survey-core"], factory);
	else if(typeof exports === 'object')
		exports["survey-js-ui"] = factory((function webpackLoadOptionalExternalModule() { try { return require("jquery"); } catch(e) {} }()), require("survey-core"));
	else
		root["SurveyUI"] = factory(root["jQuery"], root["Survey"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_jquery__, __WEBPACK_EXTERNAL_MODULE_survey_core__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entries/js-ui.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/survey-core/icons/iconsV1.js":
/*!********************************************!*\
  !*** ./build/survey-core/icons/iconsV1.js ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * surveyjs - Survey JavaScript library v1.12.26
 * Copyright (c) 2015-2025 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/survey-core/src/iconsV1.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/survey-core/src/iconsV1.ts":
/*!*********************************************!*\
  !*** ./packages/survey-core/src/iconsV1.ts ***!
  \*********************************************/
/*! exports provided: icons */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icons", function() { return icons; });
var path = __webpack_require__("./packages/survey-core/src/images-v1 sync recursive \\.svg$");
var icons = {};
path.keys().forEach(function (key) {
    icons[key.substring(2, key.length - 4).toLowerCase()] = path(key);
});



/***/ }),

/***/ "./packages/survey-core/src/images-v1 sync recursive \\.svg$":
/*!********************************************************!*\
  !*** ./packages/survey-core/src/images-v1 sync \.svg$ ***!
  \********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ModernBooleanCheckChecked.svg": "./packages/survey-core/src/images-v1/ModernBooleanCheckChecked.svg",
	"./ModernBooleanCheckInd.svg": "./packages/survey-core/src/images-v1/ModernBooleanCheckInd.svg",
	"./ModernBooleanCheckUnchecked.svg": "./packages/survey-core/src/images-v1/ModernBooleanCheckUnchecked.svg",
	"./ModernCheck.svg": "./packages/survey-core/src/images-v1/ModernCheck.svg",
	"./ModernRadio.svg": "./packages/survey-core/src/images-v1/ModernRadio.svg",
	"./ProgressButton.svg": "./packages/survey-core/src/images-v1/ProgressButton.svg",
	"./RemoveFile.svg": "./packages/survey-core/src/images-v1/RemoveFile.svg",
	"./TimerCircle.svg": "./packages/survey-core/src/images-v1/TimerCircle.svg",
	"./add-24x24.svg": "./packages/survey-core/src/images-v1/add-24x24.svg",
	"./arrowleft-16x16.svg": "./packages/survey-core/src/images-v1/arrowleft-16x16.svg",
	"./arrowright-16x16.svg": "./packages/survey-core/src/images-v1/arrowright-16x16.svg",
	"./camera-24x24.svg": "./packages/survey-core/src/images-v1/camera-24x24.svg",
	"./camera-32x32.svg": "./packages/survey-core/src/images-v1/camera-32x32.svg",
	"./cancel-24x24.svg": "./packages/survey-core/src/images-v1/cancel-24x24.svg",
	"./check-16x16.svg": "./packages/survey-core/src/images-v1/check-16x16.svg",
	"./check-24x24.svg": "./packages/survey-core/src/images-v1/check-24x24.svg",
	"./chevrondown-24x24.svg": "./packages/survey-core/src/images-v1/chevrondown-24x24.svg",
	"./chevronright-16x16.svg": "./packages/survey-core/src/images-v1/chevronright-16x16.svg",
	"./clear-16x16.svg": "./packages/survey-core/src/images-v1/clear-16x16.svg",
	"./clear-24x24.svg": "./packages/survey-core/src/images-v1/clear-24x24.svg",
	"./close-16x16.svg": "./packages/survey-core/src/images-v1/close-16x16.svg",
	"./close-24x24.svg": "./packages/survey-core/src/images-v1/close-24x24.svg",
	"./collapse-16x16.svg": "./packages/survey-core/src/images-v1/collapse-16x16.svg",
	"./collapsedetails-16x16.svg": "./packages/survey-core/src/images-v1/collapsedetails-16x16.svg",
	"./delete-24x24.svg": "./packages/survey-core/src/images-v1/delete-24x24.svg",
	"./drag-24x24.svg": "./packages/survey-core/src/images-v1/drag-24x24.svg",
	"./draghorizontal-24x16.svg": "./packages/survey-core/src/images-v1/draghorizontal-24x16.svg",
	"./expand-16x16.svg": "./packages/survey-core/src/images-v1/expand-16x16.svg",
	"./expanddetails-16x16.svg": "./packages/survey-core/src/images-v1/expanddetails-16x16.svg",
	"./file-72x72.svg": "./packages/survey-core/src/images-v1/file-72x72.svg",
	"./flip-24x24.svg": "./packages/survey-core/src/images-v1/flip-24x24.svg",
	"./folder-24x24.svg": "./packages/survey-core/src/images-v1/folder-24x24.svg",
	"./fullsize-16x16.svg": "./packages/survey-core/src/images-v1/fullsize-16x16.svg",
	"./image-48x48.svg": "./packages/survey-core/src/images-v1/image-48x48.svg",
	"./loading-48x48.svg": "./packages/survey-core/src/images-v1/loading-48x48.svg",
	"./maximize-16x16.svg": "./packages/survey-core/src/images-v1/maximize-16x16.svg",
	"./minimize-16x16.svg": "./packages/survey-core/src/images-v1/minimize-16x16.svg",
	"./more-24x24.svg": "./packages/survey-core/src/images-v1/more-24x24.svg",
	"./navmenu-24x24.svg": "./packages/survey-core/src/images-v1/navmenu-24x24.svg",
	"./noimage-48x48.svg": "./packages/survey-core/src/images-v1/noimage-48x48.svg",
	"./ranking-arrows.svg": "./packages/survey-core/src/images-v1/ranking-arrows.svg",
	"./rankingundefined-16x16.svg": "./packages/survey-core/src/images-v1/rankingundefined-16x16.svg",
	"./rating-star-2.svg": "./packages/survey-core/src/images-v1/rating-star-2.svg",
	"./rating-star-small-2.svg": "./packages/survey-core/src/images-v1/rating-star-small-2.svg",
	"./rating-star-small.svg": "./packages/survey-core/src/images-v1/rating-star-small.svg",
	"./rating-star.svg": "./packages/survey-core/src/images-v1/rating-star.svg",
	"./reorder-24x24.svg": "./packages/survey-core/src/images-v1/reorder-24x24.svg",
	"./restoredown-16x16.svg": "./packages/survey-core/src/images-v1/restoredown-16x16.svg",
	"./search-24x24.svg": "./packages/survey-core/src/images-v1/search-24x24.svg",
	"./smiley-rate1-24x24.svg": "./packages/survey-core/src/images-v1/smiley-rate1-24x24.svg",
	"./smiley-rate10-24x24.svg": "./packages/survey-core/src/images-v1/smiley-rate10-24x24.svg",
	"./smiley-rate2-24x24.svg": "./packages/survey-core/src/images-v1/smiley-rate2-24x24.svg",
	"./smiley-rate3-24x24.svg": "./packages/survey-core/src/images-v1/smiley-rate3-24x24.svg",
	"./smiley-rate4-24x24.svg": "./packages/survey-core/src/images-v1/smiley-rate4-24x24.svg",
	"./smiley-rate5-24x24.svg": "./packages/survey-core/src/images-v1/smiley-rate5-24x24.svg",
	"./smiley-rate6-24x24.svg": "./packages/survey-core/src/images-v1/smiley-rate6-24x24.svg",
	"./smiley-rate7-24x24.svg": "./packages/survey-core/src/images-v1/smiley-rate7-24x24.svg",
	"./smiley-rate8-24x24.svg": "./packages/survey-core/src/images-v1/smiley-rate8-24x24.svg",
	"./smiley-rate9-24x24.svg": "./packages/survey-core/src/images-v1/smiley-rate9-24x24.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./packages/survey-core/src/images-v1 sync recursive \\.svg$";

/***/ }),

/***/ "./packages/survey-core/src/images-v1/ModernBooleanCheckChecked.svg":
/*!**************************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/ModernBooleanCheckChecked.svg ***!
  \**************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 24 24\"><polygon points=\"19,10 14,10 14,5 10,5 10,10 5,10 5,14 10,14 10,19 14,19 14,14 19,14 \"></polygon></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/ModernBooleanCheckInd.svg":
/*!**********************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/ModernBooleanCheckInd.svg ***!
  \**********************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 24 24\"><path d=\"M22,0H2C0.9,0,0,0.9,0,2v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V2C24,0.9,23.1,0,22,0z M21,18L6,3h15V18z M3,6l15,15H3V6z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/ModernBooleanCheckUnchecked.svg":
/*!****************************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/ModernBooleanCheckUnchecked.svg ***!
  \****************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 24 24\"><rect x=\"5\" y=\"10\" width=\"14\" height=\"4\"></rect></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/ModernCheck.svg":
/*!************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/ModernCheck.svg ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\"><path d=\"M5,13l2-2l3,3l7-7l2,2l-9,9L5,13z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/ModernRadio.svg":
/*!************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/ModernRadio.svg ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"-12 -12 24 24\"><circle r=\"6\" cx=\"0\" cy=\"0\"></circle></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/ProgressButton.svg":
/*!***************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/ProgressButton.svg ***!
  \***************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 10 10\"><polygon points=\"2,2 0,4 5,9 10,4 8,2 5,5 \"></polygon></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/RemoveFile.svg":
/*!***********************************************************!*\
  !*** ./packages/survey-core/src/images-v1/RemoveFile.svg ***!
  \***********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\"><path d=\"M8,2C4.7,2,2,4.7,2,8s2.7,6,6,6s6-2.7,6-6S11.3,2,8,2z M11,10l-1,1L8,9l-2,2l-1-1l2-2L5,6l1-1l2,2l2-2l1,1L9,8 L11,10z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/TimerCircle.svg":
/*!************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/TimerCircle.svg ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 160 160\"><circle cx=\"80\" cy=\"80\" r=\"70\" style=\"stroke: var(--sd-timer-stroke-background-color); stroke-width: var(--sd-timer-stroke-background-width)\" stroke-dasharray=\"none\" stroke-dashoffset=\"none\"></circle><circle cx=\"80\" cy=\"80\" r=\"70\"></circle></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/add-24x24.svg":
/*!**********************************************************!*\
  !*** ./packages/survey-core/src/images-v1/add-24x24.svg ***!
  \**********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13 11H17V13H13V17H11V13H7V11H11V7H13V11ZM23 12C23 18.1 18.1 23 12 23C5.9 23 1 18.1 1 12C1 5.9 5.9 1 12 1C18.1 1 23 5.9 23 12ZM21 12C21 7 17 3 12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/arrowleft-16x16.svg":
/*!****************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/arrowleft-16x16.svg ***!
  \****************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15 8.99999H4.4L8.7 13.3L7.3 14.7L0.599998 7.99999L7.3 1.29999L8.7 2.69999L4.4 6.99999H15V8.99999Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/arrowright-16x16.svg":
/*!*****************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/arrowright-16x16.svg ***!
  \*****************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 6.99999H11.6L7.3 2.69999L8.7 1.29999L15.4 7.99999L8.7 14.7L7.3 13.3L11.6 8.99999H1V6.99999Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/camera-24x24.svg":
/*!*************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/camera-24x24.svg ***!
  \*************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20.01 4H18.4C18.2 4 18.01 3.9 17.9 3.73L16.97 2.34C16.41 1.5 15.48 1 14.47 1H9.54C8.53 1 7.6 1.5 7.04 2.34L6.11 3.73C6 3.9 5.81 4 5.61 4H4C2.35 4 1 5.35 1 7V19C1 20.65 2.35 22 4 22H20C21.65 22 23 20.65 23 19V7C23 5.35 21.65 4 20 4H20.01ZM21.01 19C21.01 19.55 20.56 20 20.01 20H4.01C3.46 20 3.01 19.55 3.01 19V7C3.01 6.45 3.46 6 4.01 6H5.62C6.49 6 7.3 5.56 7.79 4.84L8.72 3.45C8.91 3.17 9.22 3 9.55 3H14.48C14.81 3 15.13 3.17 15.31 3.45L16.24 4.84C16.72 5.56 17.54 6 18.41 6H20.02C20.57 6 21.02 6.45 21.02 7V19H21.01ZM12.01 6C8.7 6 6.01 8.69 6.01 12C6.01 15.31 8.7 18 12.01 18C15.32 18 18.01 15.31 18.01 12C18.01 8.69 15.32 6 12.01 6ZM12.01 16C9.8 16 8.01 14.21 8.01 12C8.01 9.79 9.8 8 12.01 8C14.22 8 16.01 9.79 16.01 12C16.01 14.21 14.22 16 12.01 16ZM13.01 10C13.01 10.55 12.56 11 12.01 11C11.46 11 11.01 11.45 11.01 12C11.01 12.55 10.56 13 10.01 13C9.46 13 9.01 12.55 9.01 12C9.01 10.35 10.36 9 12.01 9C12.56 9 13.01 9.45 13.01 10Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/camera-32x32.svg":
/*!*************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/camera-32x32.svg ***!
  \*************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M27 6H23.8C23.34 6 22.92 5.77 22.66 5.39L22.25 4.78C21.51 3.66 20.26 3 18.92 3H13.06C11.72 3 10.48 3.67 9.73 4.78L9.32 5.39C9.07 5.77 8.64 6 8.18 6H4.98C2.79 6 1 7.79 1 10V24C1 26.21 2.79 28 5 28H27C29.21 28 31 26.21 31 24V10C31 7.79 29.21 6 27 6ZM29 24C29 25.1 28.1 26 27 26H5C3.9 26 3 25.1 3 24V10C3 8.9 3.9 8 5 8H8.2C9.33 8 10.38 7.44 11 6.5L11.41 5.89C11.78 5.33 12.41 5 13.07 5H18.93C19.6 5 20.22 5.33 20.59 5.89L21 6.5C21.62 7.44 22.68 8 23.8 8H27C28.1 8 29 8.9 29 10V24ZM16 9C12.13 9 9 12.13 9 16C9 19.87 12.13 23 16 23C19.87 23 23 19.87 23 16C23 12.13 19.87 9 16 9ZM16 21C13.24 21 11 18.76 11 16C11 13.24 13.24 11 16 11C18.76 11 21 13.24 21 16C21 18.76 18.76 21 16 21ZM17 13C17 13.55 16.55 14 16 14C14.9 14 14 14.9 14 16C14 16.55 13.55 17 13 17C12.45 17 12 16.55 12 16C12 13.79 13.79 12 16 12C16.55 12 17 12.45 17 13Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/cancel-24x24.svg":
/*!*************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/cancel-24x24.svg ***!
  \*************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M22.6 8.6L16.4 2.4C16 2 15.5 1.8 15 1.8C14.5 1.8 14 2 13.6 2.4L1.40005 14.6C0.600049 15.4 0.600049 16.6 1.40005 17.4L6.00005 22H12L22.6 11.4C23.3 10.6 23.3 9.3 22.6 8.6ZM11.1 20H6.80005L2.80005 16L6.20005 12.6L12.4 18.8L11.1 20ZM13.8 17.4L7.60005 11.2L15 3.8L21.2 10L13.8 17.4ZM16 20H23V22H14L16 20Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/check-16x16.svg":
/*!************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/check-16x16.svg ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.003 14.413L0.292999 9.70303L1.703 8.29303L5.003 11.583L14.293 2.29303L15.703 3.70303L5.003 14.413Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/check-24x24.svg":
/*!************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/check-24x24.svg ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9 20.1L1 12L3.1 9.9L9 15.9L20.9 4L23 6.1L9 20.1Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/chevrondown-24x24.svg":
/*!******************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/chevrondown-24x24.svg ***!
  \******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 15L17 10H7L12 15Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/chevronright-16x16.svg":
/*!*******************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/chevronright-16x16.svg ***!
  \*******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.64648 12.6465L6.34648 13.3465L11.7465 8.04648L6.34648 2.64648L5.64648 3.34648L10.2465 8.04648L5.64648 12.6465Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/clear-16x16.svg":
/*!************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/clear-16x16.svg ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.35 3.34999L12.65 2.64999L8.05002 7.24999L3.35002 2.64999L2.65002 3.34999L7.25002 8.04999L2.65002 12.65L3.35002 13.35L8.05002 8.74999L12.65 13.35L13.35 12.65L8.75002 8.04999L13.35 3.34999Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/clear-24x24.svg":
/*!************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/clear-24x24.svg ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M22.6 8.6L16.4 2.4C16 2 15.5 1.8 15 1.8C14.5 1.8 14 2 13.6 2.4L1.40005 14.6C0.600049 15.4 0.600049 16.6 1.40005 17.4L6.00005 22H12L22.6 11.4C23.3 10.6 23.3 9.3 22.6 8.6ZM11.1 20H6.80005L2.80005 16L6.20005 12.6L12.4 18.8L11.1 20ZM13.8 17.4L7.60005 11.2L15 3.8L21.2 10L13.8 17.4ZM16 20H23V22H14L16 20Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/close-16x16.svg":
/*!************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/close-16x16.svg ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.43 8.0025L13.7 3.7225C14.09 3.3325 14.09 2.6925 13.7 2.2925C13.31 1.9025 12.67 1.9025 12.27 2.2925L7.99 6.5725L3.72 2.3025C3.33 1.9025 2.69 1.9025 2.3 2.3025C1.9 2.6925 1.9 3.3325 2.3 3.7225L6.58 8.0025L2.3 12.2825C1.91 12.6725 1.91 13.3125 2.3 13.7125C2.69 14.1025 3.33 14.1025 3.73 13.7125L8.01 9.4325L12.29 13.7125C12.68 14.1025 13.32 14.1025 13.72 13.7125C14.11 13.3225 14.11 12.6825 13.72 12.2825L9.44 8.0025H9.43Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/close-24x24.svg":
/*!************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/close-24x24.svg ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.4101 12L20.7001 4.71C21.0901 4.32 21.0901 3.69 20.7001 3.3C20.3101 2.91 19.6801 2.91 19.2901 3.3L12.0001 10.59L4.71006 3.29C4.32006 2.9 3.68006 2.9 3.29006 3.29C2.90006 3.68 2.90006 4.32 3.29006 4.71L10.5801 12L3.29006 19.29C2.90006 19.68 2.90006 20.31 3.29006 20.7C3.49006 20.9 3.74006 20.99 4.00006 20.99C4.26006 20.99 4.51006 20.89 4.71006 20.7L12.0001 13.41L19.2901 20.7C19.4901 20.9 19.7401 20.99 20.0001 20.99C20.2601 20.99 20.5101 20.89 20.7101 20.7C21.1001 20.31 21.1001 19.68 20.7101 19.29L13.4201 12H13.4101Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/collapse-16x16.svg":
/*!***************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/collapse-16x16.svg ***!
  \***************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2 6L3 5L8 10L13 5L14 6L8 12L2 6Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/collapsedetails-16x16.svg":
/*!**********************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/collapsedetails-16x16.svg ***!
  \**********************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13 7H3V9H13V7Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/delete-24x24.svg":
/*!*************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/delete-24x24.svg ***!
  \*************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M22 4H20H16V2C16 0.9 15.1 0 14 0H10C8.9 0 8 0.9 8 2V4H4H2V6H4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V6H22V4ZM10 2H14V4H10V2ZM18 20H6V6H8H16H18V20ZM14 8H16V18H14V8ZM11 8H13V18H11V8ZM8 8H10V18H8V8Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/drag-24x24.svg":
/*!***********************************************************!*\
  !*** ./packages/survey-core/src/images-v1/drag-24x24.svg ***!
  \***********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13 6C13 4.9 13.9 4 15 4C16.1 4 17 4.9 17 6C17 7.1 16.1 8 15 8C13.9 8 13 7.1 13 6ZM9 4C7.9 4 7 4.9 7 6C7 7.1 7.9 8 9 8C10.1 8 11 7.1 11 6C11 4.9 10.1 4 9 4ZM15 10C13.9 10 13 10.9 13 12C13 13.1 13.9 14 15 14C16.1 14 17 13.1 17 12C17 10.9 16.1 10 15 10ZM9 10C7.9 10 7 10.9 7 12C7 13.1 7.9 14 9 14C10.1 14 11 13.1 11 12C11 10.9 10.1 10 9 10ZM15 16C13.9 16 13 16.9 13 18C13 19.1 13.9 20 15 20C16.1 20 17 19.1 17 18C17 16.9 16.1 16 15 16ZM9 16C7.9 16 7 16.9 7 18C7 19.1 7.9 20 9 20C10.1 20 11 19.1 11 18C11 16.9 10.1 16 9 16Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/draghorizontal-24x16.svg":
/*!*********************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/draghorizontal-24x16.svg ***!
  \*********************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 9C19.1 9 20 9.9 20 11C20 12.1 19.1 13 18 13C16.9 13 16 12.1 16 11C16 9.9 16.9 9 18 9ZM20 5C20 3.9 19.1 3 18 3C16.9 3 16 3.9 16 5C16 6.1 16.9 7 18 7C19.1 7 20 6.1 20 5ZM14 11C14 9.9 13.1 9 12 9C10.9 9 10 9.9 10 11C10 12.1 10.9 13 12 13C13.1 13 14 12.1 14 11ZM14 5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5ZM8 11C8 9.9 7.1 9 6 9C4.9 9 4 9.9 4 11C4 12.1 4.9 13 6 13C7.1 13 8 12.1 8 11ZM8 5C8 3.9 7.1 3 6 3C4.9 3 4 3.9 4 5C4 6.1 4.9 7 6 7C7.1 7 8 6.1 8 5Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/expand-16x16.svg":
/*!*************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/expand-16x16.svg ***!
  \*************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 14L5 13L10 8L5 3L6 2L12 8L6 14Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/expanddetails-16x16.svg":
/*!********************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/expanddetails-16x16.svg ***!
  \********************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13 7H9V3H7V7H3V9H7V13H9V9H13V7Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/file-72x72.svg":
/*!***********************************************************!*\
  !*** ./packages/survey-core/src/images-v1/file-72x72.svg ***!
  \***********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 72 72\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M62.83 12.83L53.17 3.17C52.7982 2.79866 52.357 2.50421 51.8714 2.30346C51.3858 2.1027 50.8654 1.99959 50.34 2H14C12.4087 2 10.8826 2.63214 9.75735 3.75736C8.63214 4.88258 8 6.4087 8 8V64C8 65.5913 8.63214 67.1174 9.75735 68.2426C10.8826 69.3679 12.4087 70 14 70H58C59.5913 70 61.1174 69.3679 62.2426 68.2426C63.3679 67.1174 64 65.5913 64 64V15.66C64.0004 15.1346 63.8973 14.6142 63.6965 14.1286C63.4958 13.643 63.2013 13.2018 62.83 12.83ZM52 4.83L61.17 14H56C54.9391 14 53.9217 13.5786 53.1716 12.8284C52.4214 12.0783 52 11.0609 52 10V4.83ZM62 64C62 65.0609 61.5786 66.0783 60.8284 66.8284C60.0783 67.5786 59.0609 68 58 68H14C12.9391 68 11.9217 67.5786 11.1716 66.8284C10.4214 66.0783 10 65.0609 10 64V8C10 6.93914 10.4214 5.92172 11.1716 5.17157C11.9217 4.42143 12.9391 4 14 4H50V10C50 11.5913 50.6321 13.1174 51.7574 14.2426C52.8826 15.3679 54.4087 16 56 16H62V64ZM22 26H50V28H22V26ZM22 32H50V34H22V32ZM22 38H50V40H22V38ZM22 44H50V46H22V44Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/flip-24x24.svg":
/*!***********************************************************!*\
  !*** ./packages/survey-core/src/images-v1/flip-24x24.svg ***!
  \***********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M23 12.0037C23 14.2445 21.7794 16.3052 19.5684 17.8257C19.3984 17.9458 19.1983 18.0058 19.0082 18.0058C18.688 18.0058 18.3779 17.8557 18.1778 17.5756C17.8677 17.1155 17.9777 16.4953 18.4379 16.1852C20.0887 15.0448 21.0091 13.5643 21.0091 12.0138C21.0091 8.70262 16.9673 6.01171 12.005 6.01171C11.4948 6.01171 10.9945 6.04172 10.5043 6.09173L11.7149 7.30215C12.105 7.69228 12.105 8.32249 11.7149 8.71263C11.5148 8.9127 11.2647 9.00273 11.0045 9.00273C10.7444 9.00273 10.4943 8.90269 10.2942 8.71263L6.58254 5.00136L10.2842 1.2901C10.6744 0.899964 11.3047 0.899964 11.6949 1.2901C12.085 1.68023 12.085 2.31045 11.6949 2.70058L10.3042 4.09105C10.8545 4.03103 11.4147 4.00102 11.985 4.00102C18.0578 4.00102 22.99 7.59225 22.99 12.0037H23ZM12.2851 15.2949C11.895 15.685 11.895 16.3152 12.2851 16.7054L13.4957 17.9158C13.0055 17.9758 12.4952 17.9958 11.995 17.9958C7.03274 17.9958 2.99091 15.3049 2.99091 11.9937C2.99091 10.4332 3.90132 8.95271 5.56207 7.82232C6.02228 7.51222 6.13233 6.89201 5.82219 6.43185C5.51205 5.97169 4.89177 5.86166 4.43156 6.17176C2.22055 7.69228 1 9.76299 1 11.9937C1 16.4052 5.93224 19.9965 12.005 19.9965C12.5753 19.9965 13.1355 19.9665 13.6858 19.9064L12.2951 21.2969C11.905 21.6871 11.905 22.3173 12.2951 22.7074C12.4952 22.9075 12.7453 22.9975 13.0055 22.9975C13.2656 22.9975 13.5157 22.8975 13.7158 22.7074L17.4275 18.9961L13.7158 15.2849C13.3256 14.8947 12.6953 14.8947 12.3051 15.2849L12.2851 15.2949Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/folder-24x24.svg":
/*!*************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/folder-24x24.svg ***!
  \*************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.93 9H21V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H10L8 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5L2 21H21L23.89 11.63C23.9916 11.3244 24.0179 10.9988 23.9667 10.6809C23.9155 10.363 23.7882 10.0621 23.5958 9.80392C23.4034 9.54571 23.1514 9.33779 22.8614 9.19782C22.5714 9.05786 22.2519 8.99 21.93 9ZM4 5H7.17L8.59 6.41L9.17 7H19V9H6L4 15V5ZM22 11L19.54 19H4.77L7.44 11H22Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/fullsize-16x16.svg":
/*!***************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/fullsize-16x16.svg ***!
  \***************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 13H4C2.9 13 2 12.1 2 11V5C2 3.9 2.9 3 4 3H12C13.1 3 14 3.9 14 5V11C14 12.1 13.1 13 12 13ZM4 5V11H12V5H4Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/image-48x48.svg":
/*!************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/image-48x48.svg ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M36 8H12C9.79 8 8 9.79 8 12V36C8 38.21 9.79 40 12 40H36C38.21 40 40 38.21 40 36V12C40 9.79 38.21 8 36 8ZM38 36C38 37.1 37.1 38 36 38H12C10.9 38 10 37.1 10 36V12C10 10.9 10.9 10 12 10H36C37.1 10 38 10.9 38 12V36ZM14 17C14 15.34 15.34 14 17 14C18.66 14 20 15.34 20 17C20 18.66 18.66 20 17 20C15.34 20 14 18.66 14 17ZM27 24L36 36H12L19 27L23 29L27 24Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/loading-48x48.svg":
/*!**************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/loading-48x48.svg ***!
  \**************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0_19679_369428)\"><path opacity=\"0.1\" d=\"M24 40C15.18 40 8 32.82 8 24C8 15.18 15.18 8 24 8C32.82 8 40 15.18 40 24C40 32.82 32.82 40 24 40ZM24 12C17.38 12 12 17.38 12 24C12 30.62 17.38 36 24 36C30.62 36 36 30.62 36 24C36 17.38 30.62 12 24 12Z\" fill=\"black\" fill-opacity=\"0.91\"></path><path d=\"M10 26C8.9 26 8 25.1 8 24C8 15.18 15.18 8 24 8C25.1 8 26 8.9 26 10C26 11.1 25.1 12 24 12C17.38 12 12 17.38 12 24C12 25.1 11.1 26 10 26Z\" fill=\"#19B394\"></path></g><defs><clipPath id=\"clip0_19679_369428\"><rect width=\"32\" height=\"32\" fill=\"white\" transform=\"translate(8 8)\"></rect></clipPath></defs></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/maximize-16x16.svg":
/*!***************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/maximize-16x16.svg ***!
  \***************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.71 10.71L4.42 13H6.01C6.56 13 7.01 13.45 7.01 14C7.01 14.55 6.56 15 6.01 15H2C1.45 15 1 14.55 1 14V10C1 9.45 1.45 9 2 9C2.55 9 3 9.45 3 10V11.59L5.29 9.3C5.68 8.91 6.31 8.91 6.7 9.3C7.09 9.69 7.09 10.32 6.7 10.71H6.71ZM14 1H10C9.45 1 9 1.45 9 2C9 2.55 9.45 3 10 3H11.59L9.3 5.29C8.91 5.68 8.91 6.31 9.3 6.7C9.5 6.9 9.75 6.99 10.01 6.99C10.27 6.99 10.52 6.89 10.72 6.7L13.01 4.41V6C13.01 6.55 13.46 7 14.01 7C14.56 7 15.01 6.55 15.01 6V2C15.01 1.45 14.56 1 14.01 1H14Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/minimize-16x16.svg":
/*!***************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/minimize-16x16.svg ***!
  \***************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13 9H3C2.45 9 2 8.55 2 8C2 7.45 2.45 7 3 7H13C13.55 7 14 7.45 14 8C14 8.55 13.55 9 13 9Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/more-24x24.svg":
/*!***********************************************************!*\
  !*** ./packages/survey-core/src/images-v1/more-24x24.svg ***!
  \***********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 12C6 13.1 5.1 14 4 14C2.9 14 2 13.1 2 12C2 10.9 2.9 10 4 10C5.1 10 6 10.9 6 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM20 10C18.9 10 18 10.9 18 12C18 13.1 18.9 14 20 14C21.1 14 22 13.1 22 12C22 10.9 21.1 10 20 10Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/navmenu-24x24.svg":
/*!**************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/navmenu-24x24.svg ***!
  \**************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 7H2V5H16V7ZM2 11V13H22V11H2ZM2 19H10V17H2V19Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/noimage-48x48.svg":
/*!**************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/noimage-48x48.svg ***!
  \**************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14 17.01C14 16.4167 14.1759 15.8366 14.5056 15.3433C14.8352 14.8499 15.3038 14.4654 15.8519 14.2384C16.4001 14.0113 17.0033 13.9519 17.5853 14.0676C18.1672 14.1834 18.7018 14.4691 19.1213 14.8887C19.5409 15.3082 19.8266 15.8428 19.9424 16.4247C20.0581 17.0067 19.9987 17.6099 19.7716 18.1581C19.5446 18.7062 19.1601 19.1748 18.6667 19.5044C18.1734 19.8341 17.5933 20.01 17 20.01C16.2044 20.01 15.4413 19.6939 14.8787 19.1313C14.3161 18.5687 14 17.8056 14 17.01ZM27.09 24.14L20 36.01H36L27.09 24.14ZM36.72 8.14L35.57 10.01H36C36.5304 10.01 37.0391 10.2207 37.4142 10.5958C37.7893 10.9709 38 11.4796 38 12.01V36.01C38 36.5404 37.7893 37.0491 37.4142 37.4242C37.0391 37.7993 36.5304 38.01 36 38.01H18.77L17.57 40.01H36C37.0609 40.01 38.0783 39.5886 38.8284 38.8384C39.5786 38.0883 40 37.0709 40 36.01V12.01C39.9966 11.0765 39.6668 10.1737 39.0678 9.45778C38.4688 8.74188 37.6382 8.25802 36.72 8.09V8.14ZM36.86 4.5L12.86 44.5L11.14 43.5L13.23 40.01H12C10.9391 40.01 9.92172 39.5886 9.17157 38.8384C8.42143 38.0883 8 37.0709 8 36.01V12.01C8 10.9491 8.42143 9.93172 9.17157 9.18157C9.92172 8.43143 10.9391 8.01 12 8.01H32.43L35.14 3.5L36.86 4.5ZM14.43 38.01L15.63 36.01H12L19 27.01L20.56 27.8L31.23 10.01H12C11.4696 10.01 10.9609 10.2207 10.5858 10.5958C10.2107 10.9709 10 11.4796 10 12.01V36.01C10 36.5404 10.2107 37.0491 10.5858 37.4242C10.9609 37.7993 11.4696 38.01 12 38.01H14.43Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/ranking-arrows.svg":
/*!***************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/ranking-arrows.svg ***!
  \***************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 10 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 5L5 0L0 5H4V9H6V5H10Z\"></path><path d=\"M6 19V15H4V19H0L5 24L10 19H6Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/rankingundefined-16x16.svg":
/*!***********************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/rankingundefined-16x16.svg ***!
  \***********************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13 7H3V9H13V7Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/rating-star-2.svg":
/*!**************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/rating-star-2.svg ***!
  \**************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 39.5057L11.7226 45.9839C10.4095 46.6739 8.87606 45.5622 9.12525 44.096L11.4734 30.373L1.54411 20.6556C0.480254 19.6207 1.06489 17.8095 2.53128 17.5986L16.2559 15.5957L22.3994 3.10891C23.0512 1.77685 24.9488 1.77685 25.6102 3.10891L31.7441 15.5957L45.4687 17.5986C46.9351 17.8095 47.5197 19.6207 46.4559 20.6556L36.5266 30.373L38.8748 44.096C39.1239 45.5622 37.5905 46.6835 36.2774 45.9839L24 39.5057Z\" fill=\"none\" stroke-width=\"2\"></path><path d=\"M24.3981 33.1305L24 32.9206L23.6019 33.1305L15.8715 37.2059L17.3542 28.5663L17.43 28.1246L17.1095 27.8113L10.83 21.6746L19.4965 20.4049L19.9405 20.3399L20.1387 19.9373L24 12.0936L27.8613 19.9373L28.0595 20.3399L28.5035 20.4049L37.17 21.6746L30.8905 27.8113L30.57 28.1246L30.6458 28.5663L32.1285 37.2059L24.3981 33.1305Z\" stroke-width=\"1.70746\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/rating-star-small-2.svg":
/*!********************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/rating-star-small-2.svg ***!
  \********************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 19.3373L6.13001 22.4373C5.50001 22.7673 4.77001 22.2373 4.89001 21.5373L6.01001 14.9773L1.26001 10.3273C0.750007 9.83728 1.03001 8.96728 1.73001 8.86728L8.29001 7.90728L11.23 1.93728C11.54 1.29728 12.45 1.29728 12.77 1.93728L15.7 7.90728L22.26 8.86728C22.96 8.96728 23.24 9.83728 22.73 10.3273L17.98 14.9773L19.1 21.5373C19.22 22.2373 18.49 22.7773 17.86 22.4373L11.99 19.3373H12Z\" fill=\"none\" stroke-width=\"2\"></path><path d=\"M12 15.9472L8.58001 17.7572L9.23001 13.9272L6.45001 11.2072L10.29 10.6472L12 7.17725L13.71 10.6472L17.55 11.2072L14.77 13.9272L15.42 17.7572L12 15.9472Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/rating-star-small.svg":
/*!******************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/rating-star-small.svg ***!
  \******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M12 19.3373L6.13001 22.4373C5.50001 22.7673 4.77001 22.2373 4.89001 21.5373L6.01001 14.9773L1.26001 10.3273C0.750007 9.83728 1.03001 8.96728 1.73001 8.86728L8.29001 7.90728L11.23 1.93728C11.54 1.29728 12.45 1.29728 12.77 1.93728L15.7 7.90728L22.26 8.86728C22.96 8.96728 23.24 9.83728 22.73 10.3273L17.98 14.9773L19.1 21.5373C19.22 22.2373 18.49 22.7773 17.86 22.4373L11.99 19.3373H12Z\"></path></g></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/rating-star.svg":
/*!************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/rating-star.svg ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M24 39.5057L11.7226 45.9839C10.4095 46.6739 8.87606 45.5622 9.12525 44.096L11.4734 30.373L1.54411 20.6556C0.480254 19.6207 1.06489 17.8095 2.53128 17.5986L16.2559 15.5957L22.3994 3.10891C23.0512 1.77685 24.9488 1.77685 25.6102 3.10891L31.7441 15.5957L45.4687 17.5986C46.9351 17.8095 47.5197 19.6207 46.4559 20.6556L36.5266 30.373L38.8748 44.096C39.1239 45.5622 37.5905 46.6835 36.2774 45.9839L24 39.5057Z\"></path></g></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/reorder-24x24.svg":
/*!**************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/reorder-24x24.svg ***!
  \**************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17 5L12 0L7 5H11V9H13V5H17Z\"></path><path d=\"M13 19V15H11V19H7L12 24L17 19H13Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/restoredown-16x16.svg":
/*!******************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/restoredown-16x16.svg ***!
  \******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15 6C15 6.55 14.55 7 14 7H10C9.45 7 9 6.55 9 6V2C9 1.45 9.45 1 10 1C10.55 1 11 1.45 11 2V3.59L13.29 1.29C13.49 1.09 13.74 1 14 1C14.26 1 14.51 1.1 14.71 1.29C15.1 1.68 15.1 2.31 14.71 2.7L12.42 4.99H14.01C14.56 4.99 15.01 5.44 15.01 5.99L15 6ZM6 9H2C1.45 9 0.999998 9.45 0.999998 10C0.999998 10.55 1.45 11 2 11H3.59L1.29 13.29C0.899998 13.68 0.899998 14.31 1.29 14.7C1.68 15.09 2.31 15.09 2.7 14.7L4.99 12.41V14C4.99 14.55 5.44 15 5.99 15C6.54 15 6.99 14.55 6.99 14V10C6.99 9.45 6.54 9 5.99 9H6Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/search-24x24.svg":
/*!*************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/search-24x24.svg ***!
  \*************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14 2C9.6 2 6 5.6 6 10C6 11.8 6.6 13.5 7.7 14.9L2.3 20.3C1.9 20.7 1.9 21.3 2.3 21.7C2.5 21.9 2.7 22 3 22C3.3 22 3.5 21.9 3.7 21.7L9.1 16.3C10.5 17.4 12.2 18 14 18C18.4 18 22 14.4 22 10C22 5.6 18.4 2 14 2ZM14 16C10.7 16 8 13.3 8 10C8 6.7 10.7 4 14 4C17.3 4 20 6.7 20 10C20 13.3 17.3 16 14 16Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/smiley-rate1-24x24.svg":
/*!*******************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/smiley-rate1-24x24.svg ***!
  \*******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4 4.9938C4 4.44362 4.45 3.99348 5 3.99348H6.59L5.3 2.70306C4.91 2.31293 4.91 1.68272 5.3 1.2926C5.69 0.902468 6.32 0.902468 6.71 1.2926L9.71 4.29357C9.8 4.3836 9.88 4.49364 9.93 4.62368C10.03 4.86376 10.03 5.14385 9.93 5.38393C9.88 5.50397 9.81 5.614 9.71 5.71404L6.71 8.71501C6.51 8.91508 6.26 9.00511 6 9.00511C5.74 9.00511 5.49 8.90508 5.29 8.71501C4.9 8.32489 4.9 7.69468 5.29 7.30456L6.58 6.01413H4.99C4.44 6.01413 3.99 5.56399 3.99 5.01381L4 4.9938ZM14.08 5.37393C14.13 5.49397 14.2 5.604 14.3 5.70403L17.3 8.70501C17.5 8.90508 17.75 8.99511 18.01 8.99511C18.27 8.99511 18.52 8.89507 18.72 8.70501C19.11 8.31488 19.11 7.68468 18.72 7.29455L17.43 6.00413H19.02C19.57 6.00413 20.02 5.55399 20.02 5.00381C20.02 4.45363 19.57 4.00348 19.02 4.00348H17.43L18.72 2.71306C19.11 2.32293 19.11 1.69273 18.72 1.3026C18.33 0.912471 17.7 0.912471 17.31 1.3026L14.31 4.30358C14.22 4.39361 14.14 4.50364 14.09 4.63368C13.99 4.87376 13.99 5.15385 14.09 5.39393L14.08 5.37393ZM22 14.9971V20.999C22 22.6496 20.65 24 19 24H5C3.35 24 2 22.6496 2 20.999V14.9971C2 13.3465 3.35 11.9961 5 11.9961H19C20.65 11.9961 22 13.3465 22 14.9971ZM19 13.9967H16V16.9977H20V14.9971C20 14.4469 19.55 13.9967 19 13.9967ZM14 16.9977V13.9967H10V16.9977H14ZM10 18.9984V21.9993H14V18.9984H10ZM4 14.9971V16.9977H8V13.9967H5C4.45 13.9967 4 14.4469 4 14.9971ZM5 21.9993H8V18.9984H4V20.999C4 21.5492 4.45 21.9993 5 21.9993ZM20 20.999V18.9984H16V21.9993H19C19.55 21.9993 20 21.5492 20 20.999Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/smiley-rate10-24x24.svg":
/*!********************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/smiley-rate10-24x24.svg ***!
  \********************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.01 23C6.85721 23 1.15412 19.9621 0.0134987 13.1669C-0.0765501 12.6272 0.293651 12.1076 0.833944 12.0177C1.38424 11.9277 1.89452 12.2975 1.98457 12.8371C2.92508 18.4732 7.69767 20.9914 12 20.9914C16.3023 20.9914 21.0749 18.4732 22.0154 12.8371C22.1055 12.2975 22.6158 11.9277 23.1661 12.0177C23.7063 12.1076 24.0765 12.6272 23.9865 13.1669C22.8559 19.9521 17.1428 23 11.99 23H12.01ZM21.165 6.15177C22.3056 5.01257 22.3056 3.16386 21.165 2.02465L21.0049 1.85477C19.9143 0.765533 18.1633 0.725561 17.0227 1.71487C15.8821 0.715568 14.1312 0.765533 13.0406 1.85477L12.8705 2.01466C11.7299 3.15386 11.7299 5.00257 12.8705 6.14178L17.0227 10.2889L21.175 6.14178L21.165 6.15177ZM15.742 3.27378L17.0127 4.54289L18.2834 3.27378C18.6436 2.91403 19.2239 2.91403 19.5841 3.27378L19.7442 3.43367C20.1044 3.79342 20.1044 4.37301 19.7442 4.73276L17.0127 7.46086L14.2812 4.73276C13.921 4.37301 13.921 3.79342 14.2812 3.43367L14.4413 3.27378C14.6214 3.09391 14.8515 3.00397 15.0917 3.00397C15.3318 3.00397 15.5619 3.09391 15.742 3.27378ZM11.1595 6.15177C12.3002 5.01257 12.3002 3.16386 11.1595 2.02465L10.9995 1.85477C9.90886 0.765533 8.15792 0.725561 7.0173 1.71487C5.87668 0.715568 4.12573 0.765533 3.03514 1.85477L2.86505 2.01466C1.72443 3.15386 1.72443 5.00257 2.86505 6.14178L7.0173 10.2889L11.1695 6.14178L11.1595 6.15177ZM5.7366 3.27378L7.00729 4.54289L8.27798 3.27378C8.63818 2.91403 9.21849 2.91403 9.57869 3.27378L9.73877 3.43367C10.099 3.79342 10.099 4.37301 9.73877 4.73276L7.00729 7.46086L4.27581 4.73276C3.91562 4.37301 3.91562 3.79342 4.27581 3.43367L4.4359 3.27378C4.61599 3.09391 4.84612 3.00397 5.08625 3.00397C5.32638 3.00397 5.5565 3.09391 5.7366 3.27378Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/smiley-rate2-24x24.svg":
/*!*******************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/smiley-rate2-24x24.svg ***!
  \*******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0_15894_140103)\"><path d=\"M4.88291 4.51001C4.47291 4.51001 4.08291 4.25001 3.94291 3.84001C3.76291 3.32001 4.03291 2.75001 4.55291 2.57001L8.32291 1.25001C8.84291 1.06001 9.41291 1.34001 9.59291 1.86001C9.77291 2.38001 9.50291 2.95001 8.98291 3.13001L5.20291 4.45001C5.09291 4.49001 4.98291 4.51001 4.87291 4.51001H4.88291ZM19.8129 3.89001C20.0229 3.38001 19.7729 2.79001 19.2629 2.59001L15.5529 1.07001C15.0429 0.860007 14.4529 1.11001 14.2529 1.62001C14.0429 2.13001 14.2929 2.72001 14.8029 2.92001L18.5029 4.43001C18.6229 4.48001 18.7529 4.50001 18.8829 4.50001C19.2729 4.50001 19.6529 4.27001 19.8129 3.88001V3.89001ZM3.50291 6.00001C2.64291 6.37001 1.79291 6.88001 1.00291 7.48001C0.79291 7.64001 0.64291 7.87001 0.59291 8.14001C0.48291 8.73001 0.87291 9.29001 1.45291 9.40001C2.04291 9.51001 2.60291 9.12001 2.71291 8.54001C2.87291 7.69001 3.12291 6.83001 3.50291 5.99001V6.00001ZM21.0429 8.55001C21.6029 10.48 24.2429 8.84001 22.7529 7.48001C21.9629 6.88001 21.1129 6.37001 20.2529 6.00001C20.6329 6.84001 20.8829 7.70001 21.0429 8.55001ZM21.5729 13.2C21.2529 14.2 22.5429 15.09 23.3629 14.39C23.8529 14 23.9229 13.29 23.5429 12.81C21.7429 10.67 22.1329 10.55 21.5829 13.2H21.5729ZM1.75291 11C1.22291 11.79 -0.14709 12.64 0.0129102 13.75C0.15291 14.36 0.75291 14.74 1.35291 14.6C2.98291 14.1 1.80291 12.22 1.75291 11ZM19.8829 17C19.8829 13.14 16.2929 10 11.8829 10C7.47291 10 3.88291 13.14 3.88291 17C3.88291 20.86 7.47291 24 11.8829 24C16.2929 24 19.8829 20.86 19.8829 17ZM17.8829 17C17.8829 19.76 15.1929 22 11.8829 22C8.57291 22 5.88291 19.76 5.88291 17C5.88291 14.24 8.57291 12 11.8829 12C15.1929 12 17.8829 14.24 17.8829 17Z\"></path></g><defs><clipPath id=\"clip0_15894_140103\"><rect width=\"24\" height=\"24\" fill=\"white\"></rect></clipPath></defs></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/smiley-rate3-24x24.svg":
/*!*******************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/smiley-rate3-24x24.svg ***!
  \*******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.01915 7C6.46961 7 6.01998 6.55 6.01998 6V2C6.01998 1.45 6.46961 1 7.01915 1C7.56869 1 8.01832 1.45 8.01832 2V6C8.01832 6.55 7.56869 7 7.01915 7ZM18.01 6V2C18.01 1.45 17.5604 1 17.0108 1C16.4613 1 16.0117 1.45 16.0117 2V6C16.0117 6.55 16.4613 7 17.0108 7C17.5604 7 18.01 6.55 18.01 6ZM16.4213 21.58L18.01 19.99L19.2989 21.28C19.6886 21.67 20.3181 21.67 20.7077 21.28C21.0974 20.89 21.0974 20.26 20.7077 19.87L19.4188 18.58C18.6395 17.8 17.3705 17.8 16.5912 18.58L15.0025 20.17L13.4138 18.58C12.6345 17.8 11.3655 17.8 10.5862 18.58L8.9975 20.17L7.40883 18.58C6.62948 17.8 5.36053 17.8 4.58118 18.58L3.29226 19.87C2.90258 20.26 2.90258 20.89 3.29226 21.28C3.68193 21.67 4.31141 21.67 4.70108 21.28L5.99001 19.99L7.57868 21.58C8.35803 22.36 9.62698 22.36 10.4063 21.58L11.995 19.99L13.5837 21.58C13.9734 21.97 14.4829 22.16 14.9925 22.16C15.5021 22.16 16.0117 21.97 16.4013 21.58H16.4213Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/smiley-rate4-24x24.svg":
/*!*******************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/smiley-rate4-24x24.svg ***!
  \*******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.06927 7C6.51927 7 6.06927 6.55 6.06927 6V2C6.06927 1.45 6.51927 1 7.06927 1C7.61927 1 8.06927 1.45 8.06927 2V6C8.06927 6.55 7.61927 7 7.06927 7ZM18.0693 6V2C18.0693 1.45 17.6193 1 17.0693 1C16.5193 1 16.0693 1.45 16.0693 2V6C16.0693 6.55 16.5193 7 17.0693 7C17.6193 7 18.0693 6.55 18.0693 6ZM22.5693 21.9C23.0693 21.66 23.2793 21.07 23.0393 20.57C21.1093 16.52 16.9093 14 12.0693 14C7.22927 14 3.02927 16.52 1.09927 20.57C0.859273 21.07 1.06927 21.67 1.56927 21.9C2.06927 22.14 2.65927 21.93 2.89927 21.43C4.49927 18.08 8.00927 16 12.0593 16C16.1093 16 19.6293 18.08 21.2193 21.43C21.3893 21.79 21.7493 22 22.1193 22C22.2593 22 22.4093 21.97 22.5493 21.9H22.5693Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/smiley-rate5-24x24.svg":
/*!*******************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/smiley-rate5-24x24.svg ***!
  \*******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.00572 7C6.45572 7 6.00572 6.55 6.00572 6V2C6.00572 1.45 6.45572 1 7.00572 1C7.55572 1 8.00572 1.45 8.00572 2V6C8.00572 6.55 7.55572 7 7.00572 7ZM18.0057 6V2C18.0057 1.45 17.5557 1 17.0057 1C16.4557 1 16.0057 1.45 16.0057 2V6C16.0057 6.55 16.4557 7 17.0057 7C17.5557 7 18.0057 6.55 18.0057 6ZM19.9457 21.33C20.1257 20.81 19.8557 20.24 19.3357 20.05C14.5457 18.35 9.45572 18.35 4.66572 20.05C4.14572 20.23 3.87572 20.81 4.05572 21.33C4.23572 21.85 4.80572 22.12 5.33572 21.94C9.69572 20.4 14.3057 20.4 18.6657 21.94C18.7757 21.98 18.8857 22 18.9957 22C19.4057 22 19.7957 21.74 19.9357 21.33H19.9457Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/smiley-rate6-24x24.svg":
/*!*******************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/smiley-rate6-24x24.svg ***!
  \*******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 7C6.45 7 6 6.55 6 6V2C6 1.45 6.45 1 7 1C7.55 1 8 1.45 8 2V6C8 6.55 7.55 7 7 7ZM18 6V2C18 1.45 17.55 1 17 1C16.45 1 16 1.45 16 2V6C16 6.55 16.45 7 17 7C17.55 7 18 6.55 18 6ZM21 21C21 20.45 20.55 20 20 20H4C3.45 20 3 20.45 3 21C3 21.55 3.45 22 4 22H20C20.55 22 21 21.55 21 21Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/smiley-rate7-24x24.svg":
/*!*******************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/smiley-rate7-24x24.svg ***!
  \*******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.0022 23.99C11.452 23.99 11.0018 23.5402 11.0018 22.9904C11.0018 22.4407 11.452 21.9909 12.0022 21.9909C16.3137 21.9909 21.0755 19.472 22.0158 13.8344C22.1058 13.2947 22.616 12.9248 23.1662 13.0148C23.7064 13.1047 24.0765 13.6245 23.9865 14.1643C22.8561 20.9513 17.144 24 11.9922 24L12.0022 23.99ZM8.00072 5.99783V1.99957C8.00072 1.4498 7.55056 1 7.00036 1C6.45016 1 6 1.4498 6 1.99957V5.99783C6 6.54759 6.45016 6.99739 7.00036 6.99739C7.55056 6.99739 8.00072 6.54759 8.00072 5.99783ZM18.0043 5.99783V1.99957C18.0043 1.4498 17.5542 1 17.004 1C16.4538 1 16.0036 1.4498 16.0036 1.99957V5.99783C16.0036 6.54759 16.4538 6.99739 17.004 6.99739C17.5542 6.99739 18.0043 6.54759 18.0043 5.99783Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/smiley-rate8-24x24.svg":
/*!*******************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/smiley-rate8-24x24.svg ***!
  \*******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.01 24C6.85721 24 1.15412 20.96 0.0134987 14.16C-0.0765501 13.62 0.293651 13.1 0.833944 13.01C1.38424 12.92 1.89452 13.29 1.98457 13.83C2.92508 19.47 7.69767 21.99 12 21.99C16.3023 21.99 21.0749 19.47 22.0154 13.83C22.1055 13.29 22.6158 12.92 23.1661 13.01C23.7063 13.1 24.0765 13.62 23.9865 14.16C22.8559 20.95 17.1428 24 11.99 24H12.01ZM8.00783 6V2C8.00783 1.45 7.55759 1 7.00729 1C6.45699 1 6.00675 1.45 6.00675 2V6C6.00675 6.55 6.45699 7 7.00729 7C7.55759 7 8.00783 6.55 8.00783 6ZM18.0133 6V2C18.0133 1.45 17.563 1 17.0127 1C16.4624 1 16.0122 1.45 16.0122 2V6C16.0122 6.55 16.4624 7 17.0127 7C17.563 7 18.0133 6.55 18.0133 6Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v1/smiley-rate9-24x24.svg":
/*!*******************************************************************!*\
  !*** ./packages/survey-core/src/images-v1/smiley-rate9-24x24.svg ***!
  \*******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.01 24C6.85767 24 1.15509 20.96 0.0145752 14.16C-0.0354475 13.87 0.0445888 13.57 0.234675 13.35C0.424761 13.13 0.704888 13 0.995019 13H23.005C23.2951 13 23.5752 13.13 23.7653 13.35C23.9554 13.57 24.0354 13.87 23.9854 14.16C22.8549 20.95 17.1423 24 11.99 24H12.01ZM2.25559 15C3.61621 19.82 8.0182 22 12.01 22C16.0018 22 20.4038 19.82 21.7644 15H2.25559ZM8.00819 6V2C8.00819 1.45 7.55799 1 7.00774 1C6.45749 1 6.00729 1.45 6.00729 2V6C6.00729 6.55 6.45749 7 7.00774 7C7.55799 7 8.00819 6.55 8.00819 6ZM18.0127 6V2C18.0127 1.45 17.5625 1 17.0123 1C16.462 1 16.0118 1.45 16.0118 2V6C16.0118 6.55 16.462 7 17.0123 7C17.5625 7 18.0127 6.55 18.0127 6Z\"></path></svg>"

/***/ })

/******/ });
});
//# sourceMappingURL=iconsV1.js.map

/***/ }),

/***/ "./build/survey-core/icons/iconsV2.js":
/*!********************************************!*\
  !*** ./build/survey-core/icons/iconsV2.js ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * surveyjs - Survey JavaScript library v1.12.26
 * Copyright (c) 2015-2025 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/survey-core/src/iconsV2.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/survey-core/src/iconsV2.ts":
/*!*********************************************!*\
  !*** ./packages/survey-core/src/iconsV2.ts ***!
  \*********************************************/
/*! exports provided: icons */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icons", function() { return icons; });
var path = __webpack_require__("./packages/survey-core/src/images-v2 sync recursive \\.svg$");
var icons = {};
path.keys().forEach(function (key) {
    icons[key.substring(2, key.length - 4).toLowerCase()] = path(key);
});



/***/ }),

/***/ "./packages/survey-core/src/images-v2 sync recursive \\.svg$":
/*!********************************************************!*\
  !*** ./packages/survey-core/src/images-v2 sync \.svg$ ***!
  \********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ModernBooleanCheckChecked.svg": "./packages/survey-core/src/images-v2/ModernBooleanCheckChecked.svg",
	"./ModernBooleanCheckInd.svg": "./packages/survey-core/src/images-v2/ModernBooleanCheckInd.svg",
	"./ModernBooleanCheckUnchecked.svg": "./packages/survey-core/src/images-v2/ModernBooleanCheckUnchecked.svg",
	"./ModernCheck.svg": "./packages/survey-core/src/images-v2/ModernCheck.svg",
	"./ModernRadio.svg": "./packages/survey-core/src/images-v2/ModernRadio.svg",
	"./ProgressButton.svg": "./packages/survey-core/src/images-v2/ProgressButton.svg",
	"./RemoveFile.svg": "./packages/survey-core/src/images-v2/RemoveFile.svg",
	"./TimerCircle.svg": "./packages/survey-core/src/images-v2/TimerCircle.svg",
	"./add-24x24.svg": "./packages/survey-core/src/images-v2/add-24x24.svg",
	"./arrowleft-16x16.svg": "./packages/survey-core/src/images-v2/arrowleft-16x16.svg",
	"./arrowright-16x16.svg": "./packages/survey-core/src/images-v2/arrowright-16x16.svg",
	"./camera-24x24.svg": "./packages/survey-core/src/images-v2/camera-24x24.svg",
	"./camera-32x32.svg": "./packages/survey-core/src/images-v2/camera-32x32.svg",
	"./cancel-24x24.svg": "./packages/survey-core/src/images-v2/cancel-24x24.svg",
	"./check-16x16.svg": "./packages/survey-core/src/images-v2/check-16x16.svg",
	"./check-24x24.svg": "./packages/survey-core/src/images-v2/check-24x24.svg",
	"./chevrondown-24x24.svg": "./packages/survey-core/src/images-v2/chevrondown-24x24.svg",
	"./chevronright-16x16.svg": "./packages/survey-core/src/images-v2/chevronright-16x16.svg",
	"./clear-16x16.svg": "./packages/survey-core/src/images-v2/clear-16x16.svg",
	"./clear-24x24.svg": "./packages/survey-core/src/images-v2/clear-24x24.svg",
	"./close-16x16.svg": "./packages/survey-core/src/images-v2/close-16x16.svg",
	"./close-24x24.svg": "./packages/survey-core/src/images-v2/close-24x24.svg",
	"./collapse-16x16.svg": "./packages/survey-core/src/images-v2/collapse-16x16.svg",
	"./collapsedetails-16x16.svg": "./packages/survey-core/src/images-v2/collapsedetails-16x16.svg",
	"./delete-24x24.svg": "./packages/survey-core/src/images-v2/delete-24x24.svg",
	"./drag-24x24.svg": "./packages/survey-core/src/images-v2/drag-24x24.svg",
	"./draghorizontal-24x16.svg": "./packages/survey-core/src/images-v2/draghorizontal-24x16.svg",
	"./expand-16x16.svg": "./packages/survey-core/src/images-v2/expand-16x16.svg",
	"./expanddetails-16x16.svg": "./packages/survey-core/src/images-v2/expanddetails-16x16.svg",
	"./file-72x72.svg": "./packages/survey-core/src/images-v2/file-72x72.svg",
	"./flip-24x24.svg": "./packages/survey-core/src/images-v2/flip-24x24.svg",
	"./folder-24x24.svg": "./packages/survey-core/src/images-v2/folder-24x24.svg",
	"./fullsize-16x16.svg": "./packages/survey-core/src/images-v2/fullsize-16x16.svg",
	"./image-48x48.svg": "./packages/survey-core/src/images-v2/image-48x48.svg",
	"./loading-48x48.svg": "./packages/survey-core/src/images-v2/loading-48x48.svg",
	"./maximize-16x16.svg": "./packages/survey-core/src/images-v2/maximize-16x16.svg",
	"./minimize-16x16.svg": "./packages/survey-core/src/images-v2/minimize-16x16.svg",
	"./more-24x24.svg": "./packages/survey-core/src/images-v2/more-24x24.svg",
	"./navmenu-24x24.svg": "./packages/survey-core/src/images-v2/navmenu-24x24.svg",
	"./noimage-48x48.svg": "./packages/survey-core/src/images-v2/noimage-48x48.svg",
	"./ranking-arrows.svg": "./packages/survey-core/src/images-v2/ranking-arrows.svg",
	"./rankingundefined-16x16.svg": "./packages/survey-core/src/images-v2/rankingundefined-16x16.svg",
	"./rating-star-2.svg": "./packages/survey-core/src/images-v2/rating-star-2.svg",
	"./rating-star-small-2.svg": "./packages/survey-core/src/images-v2/rating-star-small-2.svg",
	"./rating-star-small.svg": "./packages/survey-core/src/images-v2/rating-star-small.svg",
	"./rating-star.svg": "./packages/survey-core/src/images-v2/rating-star.svg",
	"./reorder-24x24.svg": "./packages/survey-core/src/images-v2/reorder-24x24.svg",
	"./restoredown-16x16.svg": "./packages/survey-core/src/images-v2/restoredown-16x16.svg",
	"./search-24x24.svg": "./packages/survey-core/src/images-v2/search-24x24.svg",
	"./smiley-rate1-24x24.svg": "./packages/survey-core/src/images-v2/smiley-rate1-24x24.svg",
	"./smiley-rate10-24x24.svg": "./packages/survey-core/src/images-v2/smiley-rate10-24x24.svg",
	"./smiley-rate2-24x24.svg": "./packages/survey-core/src/images-v2/smiley-rate2-24x24.svg",
	"./smiley-rate3-24x24.svg": "./packages/survey-core/src/images-v2/smiley-rate3-24x24.svg",
	"./smiley-rate4-24x24.svg": "./packages/survey-core/src/images-v2/smiley-rate4-24x24.svg",
	"./smiley-rate5-24x24.svg": "./packages/survey-core/src/images-v2/smiley-rate5-24x24.svg",
	"./smiley-rate6-24x24.svg": "./packages/survey-core/src/images-v2/smiley-rate6-24x24.svg",
	"./smiley-rate7-24x24.svg": "./packages/survey-core/src/images-v2/smiley-rate7-24x24.svg",
	"./smiley-rate8-24x24.svg": "./packages/survey-core/src/images-v2/smiley-rate8-24x24.svg",
	"./smiley-rate9-24x24.svg": "./packages/survey-core/src/images-v2/smiley-rate9-24x24.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./packages/survey-core/src/images-v2 sync recursive \\.svg$";

/***/ }),

/***/ "./packages/survey-core/src/images-v2/ModernBooleanCheckChecked.svg":
/*!**************************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/ModernBooleanCheckChecked.svg ***!
  \**************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 24 24\"><polygon points=\"19,10 14,10 14,5 10,5 10,10 5,10 5,14 10,14 10,19 14,19 14,14 19,14 \"></polygon></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/ModernBooleanCheckInd.svg":
/*!**********************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/ModernBooleanCheckInd.svg ***!
  \**********************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 24 24\"><path d=\"M22,0H2C0.9,0,0,0.9,0,2v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V2C24,0.9,23.1,0,22,0z M21,18L6,3h15V18z M3,6l15,15H3V6z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/ModernBooleanCheckUnchecked.svg":
/*!****************************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/ModernBooleanCheckUnchecked.svg ***!
  \****************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 24 24\"><rect x=\"5\" y=\"10\" width=\"14\" height=\"4\"></rect></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/ModernCheck.svg":
/*!************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/ModernCheck.svg ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\"><path d=\"M5,13l2-2l3,3l7-7l2,2l-9,9L5,13z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/ModernRadio.svg":
/*!************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/ModernRadio.svg ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"-12 -12 24 24\"><circle r=\"6\" cx=\"0\" cy=\"0\"></circle></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/ProgressButton.svg":
/*!***************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/ProgressButton.svg ***!
  \***************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 10 10\"><polygon points=\"2,2 0,4 5,9 10,4 8,2 5,5 \"></polygon></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/RemoveFile.svg":
/*!***********************************************************!*\
  !*** ./packages/survey-core/src/images-v2/RemoveFile.svg ***!
  \***********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\"><path d=\"M8,2C4.7,2,2,4.7,2,8s2.7,6,6,6s6-2.7,6-6S11.3,2,8,2z M11,10l-1,1L8,9l-2,2l-1-1l2-2L5,6l1-1l2,2l2-2l1,1L9,8 L11,10z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/TimerCircle.svg":
/*!************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/TimerCircle.svg ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 160 160\"><circle cx=\"80\" cy=\"80\" r=\"70\" style=\"stroke: var(--sd-timer-stroke-background-color); stroke-width: var(--sd-timer-stroke-background-width)\" stroke-dasharray=\"none\" stroke-dashoffset=\"none\"></circle><circle cx=\"80\" cy=\"80\" r=\"70\"></circle></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/add-24x24.svg":
/*!**********************************************************!*\
  !*** ./packages/survey-core/src/images-v2/add-24x24.svg ***!
  \**********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.75 12C15.75 12.41 15.41 12.75 15 12.75H12.75V15C12.75 15.41 12.41 15.75 12 15.75C11.59 15.75 11.25 15.41 11.25 15V12.75H9C8.59 12.75 8.25 12.41 8.25 12C8.25 11.59 8.59 11.25 9 11.25H11.25V9C11.25 8.59 11.59 8.25 12 8.25C12.41 8.25 12.75 8.59 12.75 9V11.25H15C15.41 11.25 15.75 11.59 15.75 12ZM21.75 12C21.75 17.38 17.38 21.75 12 21.75C6.62 21.75 2.25 17.38 2.25 12C2.25 6.62 6.62 2.25 12 2.25C17.38 2.25 21.75 6.62 21.75 12ZM20.25 12C20.25 7.45 16.55 3.75 12 3.75C7.45 3.75 3.75 7.45 3.75 12C3.75 16.55 7.45 20.25 12 20.25C16.55 20.25 20.25 16.55 20.25 12Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/arrowleft-16x16.svg":
/*!****************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/arrowleft-16x16.svg ***!
  \****************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.7475 7.9975C14.7475 8.4075 14.4075 8.7475 13.9975 8.7475H3.8075L7.5275 12.4675C7.8175 12.7575 7.8175 13.2375 7.5275 13.5275C7.3775 13.6775 7.1875 13.7475 6.9975 13.7475C6.8075 13.7475 6.6175 13.6775 6.4675 13.5275L1.4675 8.5275C1.1775 8.2375 1.1775 7.7575 1.4675 7.4675L6.4675 2.4675C6.7575 2.1775 7.2375 2.1775 7.5275 2.4675C7.8175 2.7575 7.8175 3.2375 7.5275 3.5275L3.8075 7.2475H13.9975C14.4075 7.2475 14.7475 7.5875 14.7475 7.9975Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/arrowright-16x16.svg":
/*!*****************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/arrowright-16x16.svg ***!
  \*****************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.53 8.5275L9.53 13.5275C9.38 13.6775 9.19 13.7475 9 13.7475C8.81 13.7475 8.62 13.6775 8.47 13.5275C8.18 13.2375 8.18 12.7575 8.47 12.4675L12.19 8.7475H2C1.59 8.7475 1.25 8.4075 1.25 7.9975C1.25 7.5875 1.59 7.2475 2 7.2475H12.19L8.47 3.5275C8.18 3.2375 8.18 2.7575 8.47 2.4675C8.76 2.1775 9.24 2.1775 9.53 2.4675L14.53 7.4675C14.82 7.7575 14.82 8.2375 14.53 8.5275Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/camera-24x24.svg":
/*!*************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/camera-24x24.svg ***!
  \*************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.19 4.25H17.12C16.72 4.25 16.35 4.03 16.17 3.67C15.73 2.8 14.86 2.25 13.88 2.25H10.12C9.14 2.25 8.27 2.79 7.83 3.67C7.65 4.03 7.29 4.25 6.88 4.25H4.81C3.4 4.25 2.25 5.4 2.25 6.81V18.19C2.25 19.6 3.4 20.75 4.81 20.75H19.19C20.6 20.75 21.75 19.6 21.75 18.19V6.81C21.75 5.4 20.6 4.25 19.19 4.25ZM20.25 18.19C20.25 18.77 19.78 19.25 19.19 19.25H4.81C4.23 19.25 3.75 18.78 3.75 18.19V6.81C3.75 6.23 4.22 5.75 4.81 5.75H6.88C7.86 5.75 8.73 5.21 9.17 4.33C9.35 3.97 9.71 3.75 10.12 3.75H13.88C14.28 3.75 14.65 3.97 14.83 4.33C15.27 5.2 16.14 5.75 17.12 5.75H19.19C19.77 5.75 20.25 6.22 20.25 6.81V18.19ZM12 6.25C8.83 6.25 6.25 8.83 6.25 12C6.25 15.17 8.83 17.75 12 17.75C15.17 17.75 17.75 15.17 17.75 12C17.75 8.83 15.17 6.25 12 6.25ZM12 16.25C9.66 16.25 7.75 14.34 7.75 12C7.75 9.66 9.66 7.75 12 7.75C14.34 7.75 16.25 9.66 16.25 12C16.25 14.34 14.34 16.25 12 16.25ZM14.75 12C14.75 13.52 13.52 14.75 12 14.75C11.59 14.75 11.25 14.41 11.25 14C11.25 13.59 11.59 13.25 12 13.25C12.69 13.25 13.25 12.69 13.25 12C13.25 11.59 13.59 11.25 14 11.25C14.41 11.25 14.75 11.59 14.75 12Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/camera-32x32.svg":
/*!*************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/camera-32x32.svg ***!
  \*************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M25 7.25H22.19C21.73 7.25 21.31 7 21.09 6.59L20.89 6.22C20.23 5.01 18.97 4.25 17.59 4.25H14.41C13.03 4.25 11.77 5 11.11 6.22L10.91 6.6C10.69 7 10.27 7.26 9.81 7.26H7C4.93 7.26 3.25 8.94 3.25 11.01V24.01C3.25 26.08 4.93 27.76 7 27.76H25C27.07 27.76 28.75 26.08 28.75 24.01V11C28.75 8.93 27.07 7.25 25 7.25ZM27.25 24C27.25 25.24 26.24 26.25 25 26.25H7C5.76 26.25 4.75 25.24 4.75 24V11C4.75 9.76 5.76 8.75 7 8.75H9.81C10.82 8.75 11.75 8.2 12.23 7.31L12.43 6.94C12.82 6.21 13.58 5.76 14.41 5.76H17.59C18.42 5.76 19.18 6.21 19.57 6.94L19.77 7.31C20.25 8.2 21.18 8.76 22.19 8.76H25C26.24 8.76 27.25 9.77 27.25 11.01V24.01V24ZM16 10.25C12.28 10.25 9.25 13.28 9.25 17C9.25 20.72 12.28 23.75 16 23.75C19.72 23.75 22.75 20.72 22.75 17C22.75 13.28 19.72 10.25 16 10.25ZM16 22.25C13.11 22.25 10.75 19.89 10.75 17C10.75 14.11 13.11 11.75 16 11.75C18.89 11.75 21.25 14.11 21.25 17C21.25 19.89 18.89 22.25 16 22.25ZM19.75 17C19.75 19.07 18.07 20.75 16 20.75C15.59 20.75 15.25 20.41 15.25 20C15.25 19.59 15.59 19.25 16 19.25C17.24 19.25 18.25 18.24 18.25 17C18.25 16.59 18.59 16.25 19 16.25C19.41 16.25 19.75 16.59 19.75 17Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/cancel-24x24.svg":
/*!*************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/cancel-24x24.svg ***!
  \*************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.8099 11.75L15.2799 9.28C15.5699 8.99 15.5699 8.51 15.2799 8.22C14.9899 7.93 14.5099 7.93 14.2199 8.22L11.7499 10.69L9.27994 8.22C8.98994 7.93 8.50994 7.93 8.21994 8.22C7.92994 8.51 7.92994 8.99 8.21994 9.28L10.6899 11.75L8.21994 14.22C7.92994 14.51 7.92994 14.99 8.21994 15.28C8.36994 15.43 8.55994 15.5 8.74994 15.5C8.93994 15.5 9.12994 15.43 9.27994 15.28L11.7499 12.81L14.2199 15.28C14.3699 15.43 14.5599 15.5 14.7499 15.5C14.9399 15.5 15.1299 15.43 15.2799 15.28C15.5699 14.99 15.5699 14.51 15.2799 14.22L12.8099 11.75Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/check-16x16.svg":
/*!************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/check-16x16.svg ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.0275 5.0275L6.5275 12.5275C6.3775 12.6775 6.1875 12.7475 5.9975 12.7475C5.8075 12.7475 5.6175 12.6775 5.4675 12.5275L2.4675 9.5275C2.1775 9.2375 2.1775 8.7575 2.4675 8.4675C2.7575 8.1775 3.2375 8.1775 3.5275 8.4675L5.9975 10.9375L12.9675 3.9675C13.2575 3.6775 13.7375 3.6775 14.0275 3.9675C14.3175 4.2575 14.3175 4.7375 14.0275 5.0275Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/check-24x24.svg":
/*!************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/check-24x24.svg ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.5275 7.5275L9.5275 17.5275C9.3775 17.6775 9.1875 17.7475 8.9975 17.7475C8.8075 17.7475 8.6175 17.6775 8.4675 17.5275L4.4675 13.5275C4.1775 13.2375 4.1775 12.7575 4.4675 12.4675C4.7575 12.1775 5.2375 12.1775 5.5275 12.4675L8.9975 15.9375L18.4675 6.4675C18.7575 6.1775 19.2375 6.1775 19.5275 6.4675C19.8175 6.7575 19.8175 7.2375 19.5275 7.5275Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/chevrondown-24x24.svg":
/*!******************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/chevrondown-24x24.svg ***!
  \******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16.5275 10.5275L12.5275 14.5275C12.3775 14.6775 12.1875 14.7475 11.9975 14.7475C11.8075 14.7475 11.6175 14.6775 11.4675 14.5275L7.4675 10.5275C7.1775 10.2375 7.1775 9.7575 7.4675 9.4675C7.7575 9.1775 8.2375 9.1775 8.5275 9.4675L11.9975 12.9375L15.4675 9.4675C15.7575 9.1775 16.2375 9.1775 16.5275 9.4675C16.8175 9.7575 16.8175 10.2375 16.5275 10.5275Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/chevronright-16x16.svg":
/*!*******************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/chevronright-16x16.svg ***!
  \*******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.35 8.34627L7.35 12.3463C7.25 12.4463 7.12 12.4963 7 12.4963C6.88 12.4963 6.74 12.4463 6.65 12.3463C6.45 12.1463 6.45 11.8363 6.65 11.6363L10.3 7.98627L6.65 4.34627C6.45 4.15627 6.45 3.83627 6.65 3.64627C6.85 3.45627 7.16 3.44627 7.35 3.64627L11.35 7.64627C11.55 7.84627 11.55 8.15627 11.35 8.35627V8.34627Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/clear-16x16.svg":
/*!************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/clear-16x16.svg ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.35 11.65C12.55 11.85 12.55 12.16 12.35 12.36C12.25 12.46 12.12 12.51 12 12.51C11.88 12.51 11.74 12.46 11.65 12.36L8 8.71L4.35 12.36C4.25 12.46 4.12 12.51 4 12.51C3.88 12.51 3.74 12.46 3.65 12.36C3.45 12.16 3.45 11.85 3.65 11.65L7.3 8L3.65 4.35C3.45 4.16 3.45 3.84 3.65 3.65C3.85 3.46 4.16 3.45 4.35 3.65L8 7.3L11.65 3.65C11.85 3.45 12.16 3.45 12.36 3.65C12.56 3.85 12.56 4.16 12.36 4.36L8.71 8.01L12.36 11.66L12.35 11.65Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/clear-24x24.svg":
/*!************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/clear-24x24.svg ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20.12 10.9325C20.64 10.4125 20.93 9.7225 20.93 8.9925C20.93 8.2625 20.64 7.5725 20.12 7.0525L16.95 3.8825C15.88 2.8125 14.13 2.8125 13.06 3.8825L3.88 13.0525C3.36 13.5725 3.07 14.2625 3.07 14.9925C3.07 15.7225 3.36 16.4125 3.88 16.9325L5.64 18.6925C6.57 19.6225 7.78 20.0825 9 20.0825C10.22 20.0825 11.43 19.6225 12.36 18.6925L20.12 10.9325ZM14.12 4.9325C14.36 4.6925 14.67 4.5625 15 4.5625C15.33 4.5625 15.65 4.6925 15.88 4.9325L19.05 8.1025C19.54 8.5925 19.54 9.3825 19.05 9.8725L12.99 15.9325L8.05 10.9925L14.12 4.9325ZM6.7 17.6325L4.94 15.8725C4.45 15.3825 4.45 14.5925 4.94 14.1025L7 12.0425L11.94 16.9825L11.3 17.6225C10.07 18.8525 7.93 18.8525 6.7 17.6225V17.6325ZM22.75 20.9925C22.75 21.4025 22.41 21.7425 22 21.7425H14C13.59 21.7425 13.25 21.4025 13.25 20.9925C13.25 20.5825 13.59 20.2425 14 20.2425H22C22.41 20.2425 22.75 20.5825 22.75 20.9925ZM4.75 20.9925C4.75 21.4025 4.41 21.7425 4 21.7425H2C1.59 21.7425 1.25 21.4025 1.25 20.9925C1.25 20.5825 1.59 20.2425 2 20.2425H4C4.41 20.2425 4.75 20.5825 4.75 20.9925Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/close-16x16.svg":
/*!************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/close-16x16.svg ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.5275 12.4675C13.8175 12.7575 13.8175 13.2375 13.5275 13.5275C13.3775 13.6775 13.1875 13.7475 12.9975 13.7475C12.8075 13.7475 12.6175 13.6775 12.4675 13.5275L7.9975 9.0575L3.5275 13.5275C3.3775 13.6775 3.1875 13.7475 2.9975 13.7475C2.8075 13.7475 2.6175 13.6775 2.4675 13.5275C2.1775 13.2375 2.1775 12.7575 2.4675 12.4675L6.9375 7.9975L2.4675 3.5275C2.1775 3.2375 2.1775 2.7575 2.4675 2.4675C2.7575 2.1775 3.2375 2.1775 3.5275 2.4675L7.9975 6.9375L12.4675 2.4675C12.7575 2.1775 13.2375 2.1775 13.5275 2.4675C13.8175 2.7575 13.8175 3.2375 13.5275 3.5275L9.0575 7.9975L13.5275 12.4675Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/close-24x24.svg":
/*!************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/close-24x24.svg ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.5275 18.4675C19.8175 18.7575 19.8175 19.2375 19.5275 19.5275C19.3775 19.6775 19.1875 19.7475 18.9975 19.7475C18.8075 19.7475 18.6175 19.6775 18.4675 19.5275L11.9975 13.0575L5.5275 19.5275C5.3775 19.6775 5.1875 19.7475 4.9975 19.7475C4.8075 19.7475 4.6175 19.6775 4.4675 19.5275C4.1775 19.2375 4.1775 18.7575 4.4675 18.4675L10.9375 11.9975L4.4675 5.5275C4.1775 5.2375 4.1775 4.7575 4.4675 4.4675C4.7575 4.1775 5.2375 4.1775 5.5275 4.4675L11.9975 10.9375L18.4675 4.4675C18.7575 4.1775 19.2375 4.1775 19.5275 4.4675C19.8175 4.7575 19.8175 5.2375 19.5275 5.5275L13.0575 11.9975L19.5275 18.4675Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/collapse-16x16.svg":
/*!***************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/collapse-16x16.svg ***!
  \***************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.75 8C11.75 8.41 11.41 8.75 11 8.75H5C4.59 8.75 4.25 8.41 4.25 8C4.25 7.59 4.59 7.25 5 7.25H11C11.41 7.25 11.75 7.59 11.75 8Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/collapsedetails-16x16.svg":
/*!**********************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/collapsedetails-16x16.svg ***!
  \**********************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.75 8C11.75 8.41 11.41 8.75 11 8.75H5C4.59 8.75 4.25 8.41 4.25 8C4.25 7.59 4.59 7.25 5 7.25H11C11.41 7.25 11.75 7.59 11.75 8Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/delete-24x24.svg":
/*!*************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/delete-24x24.svg ***!
  \*************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.75 9V17C12.75 17.41 12.41 17.75 12 17.75C11.59 17.75 11.25 17.41 11.25 17V9C11.25 8.59 11.59 8.25 12 8.25C12.41 8.25 12.75 8.59 12.75 9ZM14.25 9V17C14.25 17.41 14.59 17.75 15 17.75C15.41 17.75 15.75 17.41 15.75 17V9C15.75 8.59 15.41 8.25 15 8.25C14.59 8.25 14.25 8.59 14.25 9ZM9 8.25C8.59 8.25 8.25 8.59 8.25 9V17C8.25 17.41 8.59 17.75 9 17.75C9.41 17.75 9.75 17.41 9.75 17V9C9.75 8.59 9.41 8.25 9 8.25ZM20.75 6C20.75 6.41 20.41 6.75 20 6.75H18.75V18C18.75 19.52 17.52 20.75 16 20.75H8C6.48 20.75 5.25 19.52 5.25 18V6.75H4C3.59 6.75 3.25 6.41 3.25 6C3.25 5.59 3.59 5.25 4 5.25H8.25V4C8.25 3.04 9.04 2.25 10 2.25H14C14.96 2.25 15.75 3.04 15.75 4V5.25H20C20.41 5.25 20.75 5.59 20.75 6ZM9.75 5.25H14.25V4C14.25 3.86 14.14 3.75 14 3.75H10C9.86 3.75 9.75 3.86 9.75 4V5.25ZM17.25 6.75H6.75V18C6.75 18.69 7.31 19.25 8 19.25H16C16.69 19.25 17.25 18.69 17.25 18V6.75Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/drag-24x24.svg":
/*!***********************************************************!*\
  !*** ./packages/survey-core/src/images-v2/drag-24x24.svg ***!
  \***********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.5 8.75C15.19 8.75 15.75 8.19 15.75 7.5C15.75 6.81 15.19 6.25 14.5 6.25C13.81 6.25 13.25 6.81 13.25 7.5C13.25 8.19 13.81 8.75 14.5 8.75ZM14.5 7.25C14.64 7.25 14.75 7.36 14.75 7.5C14.75 7.78 14.25 7.78 14.25 7.5C14.25 7.36 14.36 7.25 14.5 7.25ZM9.5 6.25C8.81 6.25 8.25 6.81 8.25 7.5C8.25 8.19 8.81 8.75 9.5 8.75C10.19 8.75 10.75 8.19 10.75 7.5C10.75 6.81 10.19 6.25 9.5 6.25ZM9.25 7.5C9.25 7.36 9.36 7.25 9.5 7.25C9.64 7.25 9.75 7.36 9.75 7.5C9.75 7.78 9.25 7.78 9.25 7.5ZM14.5 11.25C13.81 11.25 13.25 11.81 13.25 12.5C13.25 13.19 13.81 13.75 14.5 13.75C15.19 13.75 15.75 13.19 15.75 12.5C15.75 11.81 15.19 11.25 14.5 11.25ZM14.25 12.5C14.25 12.36 14.36 12.25 14.5 12.25C14.64 12.25 14.75 12.36 14.75 12.5C14.75 12.78 14.25 12.78 14.25 12.5ZM9.5 11.25C8.81 11.25 8.25 11.81 8.25 12.5C8.25 13.19 8.81 13.75 9.5 13.75C10.19 13.75 10.75 13.19 10.75 12.5C10.75 11.81 10.19 11.25 9.5 11.25ZM9.25 12.5C9.25 12.36 9.36 12.25 9.5 12.25C9.64 12.25 9.75 12.36 9.75 12.5C9.75 12.78 9.25 12.78 9.25 12.5ZM14.5 16.25C13.81 16.25 13.25 16.81 13.25 17.5C13.25 18.19 13.81 18.75 14.5 18.75C15.19 18.75 15.75 18.19 15.75 17.5C15.75 16.81 15.19 16.25 14.5 16.25ZM14.25 17.5C14.25 17.36 14.36 17.25 14.5 17.25C14.64 17.25 14.75 17.36 14.75 17.5C14.75 17.78 14.25 17.78 14.25 17.5ZM9.5 16.25C8.81 16.25 8.25 16.81 8.25 17.5C8.25 18.19 8.81 18.75 9.5 18.75C10.19 18.75 10.75 18.19 10.75 17.5C10.75 16.81 10.19 16.25 9.5 16.25ZM9.25 17.5C9.25 17.36 9.36 17.25 9.5 17.25C9.64 17.25 9.75 17.36 9.75 17.5C9.75 17.78 9.25 17.78 9.25 17.5Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/draghorizontal-24x16.svg":
/*!*********************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/draghorizontal-24x16.svg ***!
  \*********************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.5 9.25C16.81 9.25 16.25 9.81 16.25 10.5C16.25 11.19 16.81 11.75 17.5 11.75C18.19 11.75 18.75 11.19 18.75 10.5C18.75 9.81 18.19 9.25 17.5 9.25ZM17.25 10.5C17.25 10.36 17.36 10.25 17.5 10.25C17.64 10.25 17.75 10.36 17.75 10.5C17.75 10.78 17.25 10.78 17.25 10.5ZM17.5 6.75C18.19 6.75 18.75 6.19 18.75 5.5C18.75 4.81 18.19 4.25 17.5 4.25C16.81 4.25 16.25 4.81 16.25 5.5C16.25 6.19 16.81 6.75 17.5 6.75ZM17.5 5.25C17.64 5.25 17.75 5.36 17.75 5.5C17.75 5.78 17.25 5.78 17.25 5.5C17.25 5.36 17.36 5.25 17.5 5.25ZM12.5 9.25C11.81 9.25 11.25 9.81 11.25 10.5C11.25 11.19 11.81 11.75 12.5 11.75C13.19 11.75 13.75 11.19 13.75 10.5C13.75 9.81 13.19 9.25 12.5 9.25ZM12.25 10.5C12.25 10.36 12.36 10.25 12.5 10.25C12.64 10.25 12.75 10.36 12.75 10.5C12.75 10.78 12.25 10.78 12.25 10.5ZM12.5 4.25C11.81 4.25 11.25 4.81 11.25 5.5C11.25 6.19 11.81 6.75 12.5 6.75C13.19 6.75 13.75 6.19 13.75 5.5C13.75 4.81 13.19 4.25 12.5 4.25ZM12.25 5.5C12.25 5.36 12.36 5.25 12.5 5.25C12.64 5.25 12.75 5.36 12.75 5.5C12.75 5.78 12.25 5.78 12.25 5.5ZM7.5 9.25C6.81 9.25 6.25 9.81 6.25 10.5C6.25 11.19 6.81 11.75 7.5 11.75C8.19 11.75 8.75 11.19 8.75 10.5C8.75 9.81 8.19 9.25 7.5 9.25ZM7.25 10.5C7.25 10.36 7.36 10.25 7.5 10.25C7.64 10.25 7.75 10.36 7.75 10.5C7.75 10.78 7.25 10.78 7.25 10.5ZM7.5 4.25C6.81 4.25 6.25 4.81 6.25 5.5C6.25 6.19 6.81 6.75 7.5 6.75C8.19 6.75 8.75 6.19 8.75 5.5C8.75 4.81 8.19 4.25 7.5 4.25ZM7.25 5.5C7.25 5.36 7.36 5.25 7.5 5.25C7.64 5.25 7.75 5.36 7.75 5.5C7.75 5.78 7.25 5.78 7.25 5.5Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/expand-16x16.svg":
/*!*************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/expand-16x16.svg ***!
  \*************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.75 8C11.75 8.41 11.41 8.75 11 8.75H8.75V11C8.75 11.41 8.41 11.75 8 11.75C7.59 11.75 7.25 11.41 7.25 11V8.75H5C4.59 8.75 4.25 8.41 4.25 8C4.25 7.59 4.59 7.25 5 7.25H7.25V5C7.25 4.59 7.59 4.25 8 4.25C8.41 4.25 8.75 4.59 8.75 5V7.25H11C11.41 7.25 11.75 7.59 11.75 8Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/expanddetails-16x16.svg":
/*!********************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/expanddetails-16x16.svg ***!
  \********************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.75 8C11.75 8.41 11.41 8.75 11 8.75H8.75V11C8.75 11.41 8.41 11.75 8 11.75C7.59 11.75 7.25 11.41 7.25 11V8.75H5C4.59 8.75 4.25 8.41 4.25 8C4.25 7.59 4.59 7.25 5 7.25H7.25V5C7.25 4.59 7.59 4.25 8 4.25C8.41 4.25 8.75 4.59 8.75 5V7.25H11C11.41 7.25 11.75 7.59 11.75 8Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/file-72x72.svg":
/*!***********************************************************!*\
  !*** ./packages/survey-core/src/images-v2/file-72x72.svg ***!
  \***********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 72 72\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M62.83 12.83L53.17 3.17C52.7982 2.79866 52.357 2.50421 51.8714 2.30346C51.3858 2.1027 50.8654 1.99959 50.34 2H14C12.4087 2 10.8826 2.63214 9.75735 3.75736C8.63214 4.88258 8 6.4087 8 8V64C8 65.5913 8.63214 67.1174 9.75735 68.2426C10.8826 69.3679 12.4087 70 14 70H58C59.5913 70 61.1174 69.3679 62.2426 68.2426C63.3679 67.1174 64 65.5913 64 64V15.66C64.0004 15.1346 63.8973 14.6142 63.6965 14.1286C63.4958 13.643 63.2013 13.2018 62.83 12.83ZM52 4.83L61.17 14H56C54.9391 14 53.9217 13.5786 53.1716 12.8284C52.4214 12.0783 52 11.0609 52 10V4.83ZM62 64C62 65.0609 61.5786 66.0783 60.8284 66.8284C60.0783 67.5786 59.0609 68 58 68H14C12.9391 68 11.9217 67.5786 11.1716 66.8284C10.4214 66.0783 10 65.0609 10 64V8C10 6.93914 10.4214 5.92172 11.1716 5.17157C11.9217 4.42143 12.9391 4 14 4H50V10C50 11.5913 50.6321 13.1174 51.7574 14.2426C52.8826 15.3679 54.4087 16 56 16H62V64ZM22 26H50V28H22V26ZM22 32H50V34H22V32ZM22 38H50V40H22V38ZM22 44H50V46H22V44Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/flip-24x24.svg":
/*!***********************************************************!*\
  !*** ./packages/survey-core/src/images-v2/flip-24x24.svg ***!
  \***********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.53 17.4775C14.82 17.7675 14.82 18.2475 14.53 18.5375L11.53 21.5375C11.38 21.6875 11.19 21.7575 11 21.7575C10.81 21.7575 10.62 21.6875 10.47 21.5375C10.18 21.2475 10.18 20.7675 10.47 20.4775L12.2 18.7475C12.13 18.7475 12.07 18.7475 12 18.7475C6.62 18.7475 2.25 15.7475 2.25 12.0575C2.25 10.2975 3.22 8.6375 4.99 7.3875C5.33 7.1475 5.8 7.2275 6.03 7.5675C6.27 7.9075 6.19 8.3775 5.85 8.6075C4.49 9.5675 3.74 10.7875 3.74 12.0575C3.74 14.9175 7.44 17.2475 11.99 17.2475C12.05 17.2475 12.11 17.2475 12.17 17.2475L10.46 15.5375C10.17 15.2475 10.17 14.7675 10.46 14.4775C10.75 14.1875 11.23 14.1875 11.52 14.4775L14.52 17.4775H14.53ZM12 5.2575C11.93 5.2575 11.87 5.2575 11.8 5.2575L13.53 3.5275C13.82 3.2375 13.82 2.7575 13.53 2.4675C13.24 2.1775 12.76 2.1775 12.47 2.4675L9.47 5.4675C9.18 5.7575 9.18 6.2375 9.47 6.5275L12.47 9.5275C12.62 9.6775 12.81 9.7475 13 9.7475C13.19 9.7475 13.38 9.6775 13.53 9.5275C13.82 9.2375 13.82 8.7575 13.53 8.4675L11.82 6.7575C11.88 6.7575 11.94 6.7575 12 6.7575C16.55 6.7575 20.25 9.0875 20.25 11.9475C20.25 13.2075 19.5 14.4375 18.14 15.3975C17.8 15.6375 17.72 16.1075 17.96 16.4475C18.11 16.6575 18.34 16.7675 18.57 16.7675C18.72 16.7675 18.87 16.7275 19 16.6275C20.77 15.3775 21.75 13.7175 21.75 11.9575C21.75 8.2675 17.38 5.2675 12 5.2675V5.2575Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/folder-24x24.svg":
/*!*************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/folder-24x24.svg ***!
  \*************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.72 9.24C21.45 8.92 21.12 8.67 20.75 8.5V8C20.75 6.48 19.52 5.25 18 5.25H10.65C10.32 4.1 9.26 3.25 8 3.25H6C4.48 3.25 3.25 4.48 3.25 6V18C3.25 19.52 4.48 20.75 6 20.75H18.33C19.66 20.75 20.8 19.8 21.04 18.49L22.31 11.49C22.46 10.69 22.24 9.86 21.72 9.24ZM4.75 18V6C4.75 5.31 5.31 4.75 6 4.75H8C8.69 4.75 9.25 5.31 9.25 6C9.25 6.41 9.59 6.75 10 6.75H18C18.69 6.75 19.25 7.31 19.25 8V8.25H9.27C7.94 8.25 6.8 9.2 6.56 10.51L5.29 17.51C5.19 18.07 5.27 18.64 5.51 19.15C5.06 18.96 4.75 18.52 4.75 18ZM20.83 11.22L19.56 18.22C19.45 18.81 18.94 19.25 18.33 19.25H8C7.63 19.25 7.28 19.09 7.04 18.8C6.8 18.51 6.7 18.14 6.77 17.78L8.04 10.78C8.15 10.19 8.66 9.75 9.27 9.75H19.6C19.97 9.75 20.32 9.91 20.56 10.2C20.8 10.49 20.9 10.86 20.83 11.22Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/fullsize-16x16.svg":
/*!***************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/fullsize-16x16.svg ***!
  \***************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 3.25H4C3.04 3.25 2.25 4.04 2.25 5V11C2.25 11.96 3.04 12.75 4 12.75H12C12.96 12.75 13.75 11.96 13.75 11V5C13.75 4.04 12.96 3.25 12 3.25ZM12.25 11C12.25 11.14 12.14 11.25 12 11.25H4C3.86 11.25 3.75 11.14 3.75 11V5C3.75 4.86 3.86 4.75 4 4.75H12C12.14 4.75 12.25 4.86 12.25 5V11Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/image-48x48.svg":
/*!************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/image-48x48.svg ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M33 10.25H15C12.38 10.25 10.25 12.38 10.25 15V33C10.25 35.62 12.38 37.75 15 37.75H33C35.62 37.75 37.75 35.62 37.75 33V15C37.75 12.38 35.62 10.25 33 10.25ZM36.25 33C36.25 34.79 34.79 36.25 33 36.25H15C13.21 36.25 11.75 34.79 11.75 33V15C11.75 13.21 13.21 11.75 15 11.75H33C34.79 11.75 36.25 13.21 36.25 15V33ZM30.5 14.25C28.71 14.25 27.25 15.71 27.25 17.5C27.25 19.29 28.71 20.75 30.5 20.75C32.29 20.75 33.75 19.29 33.75 17.5C33.75 15.71 32.29 14.25 30.5 14.25ZM30.5 19.25C29.54 19.25 28.75 18.46 28.75 17.5C28.75 16.54 29.54 15.75 30.5 15.75C31.46 15.75 32.25 16.54 32.25 17.5C32.25 18.46 31.46 19.25 30.5 19.25ZM29.26 26.28C28.94 25.92 28.49 25.71 28.01 25.7C27.54 25.68 27.07 25.87 26.73 26.2L24.95 27.94L22.28 25.23C21.94 24.89 21.5 24.71 21 24.71C20.52 24.71 20.06 24.93 19.74 25.28L14.74 30.78C14.25 31.3 14.12 32.06 14.41 32.72C14.69 33.36 15.28 33.75 15.95 33.75H32.07C32.74 33.75 33.33 33.35 33.61 32.72C33.89 32.06 33.77 31.31 33.29 30.79L29.27 26.29L29.26 26.28ZM32.22 32.12C32.18 32.2 32.13 32.25 32.06 32.25H15.94C15.87 32.25 15.81 32.21 15.78 32.12C15.77 32.09 15.71 31.93 15.83 31.8L20.84 26.29C20.9 26.22 20.99 26.21 21.02 26.21C21.06 26.21 21.14 26.22 21.2 26.29L24.4 29.54C24.69 29.83 25.16 29.84 25.46 29.54L27.77 27.27C27.83 27.21 27.9 27.2 27.94 27.2C28.01 27.2 28.06 27.21 28.13 27.28L32.16 31.79C32.16 31.79 32.16 31.79 32.17 31.8C32.29 31.93 32.23 32.09 32.22 32.12Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/loading-48x48.svg":
/*!**************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/loading-48x48.svg ***!
  \**************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0_19679_369428)\"><path opacity=\"0.1\" d=\"M24 40C15.18 40 8 32.82 8 24C8 15.18 15.18 8 24 8C32.82 8 40 15.18 40 24C40 32.82 32.82 40 24 40ZM24 12C17.38 12 12 17.38 12 24C12 30.62 17.38 36 24 36C30.62 36 36 30.62 36 24C36 17.38 30.62 12 24 12Z\" fill=\"black\" fill-opacity=\"0.91\"></path><path d=\"M10 26C8.9 26 8 25.1 8 24C8 15.18 15.18 8 24 8C25.1 8 26 8.9 26 10C26 11.1 25.1 12 24 12C17.38 12 12 17.38 12 24C12 25.1 11.1 26 10 26Z\" fill=\"#19B394\"></path></g><defs><clipPath id=\"clip0_19679_369428\"><rect width=\"32\" height=\"32\" fill=\"white\" transform=\"translate(8 8)\"></rect></clipPath></defs></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/maximize-16x16.svg":
/*!***************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/maximize-16x16.svg ***!
  \***************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.75 3V7C13.75 7.41 13.41 7.75 13 7.75C12.59 7.75 12.25 7.41 12.25 7V4.81L9.53 7.53C9.38 7.68 9.19 7.75 9 7.75C8.81 7.75 8.62 7.68 8.47 7.53C8.18 7.24 8.18 6.76 8.47 6.47L11.19 3.75H9C8.59 3.75 8.25 3.41 8.25 3C8.25 2.59 8.59 2.25 9 2.25H13C13.1 2.25 13.19 2.27 13.29 2.31C13.47 2.39 13.62 2.53 13.7 2.72C13.74 2.81 13.76 2.91 13.76 3.01L13.75 3ZM7.53 8.47C7.24 8.18 6.76 8.18 6.47 8.47L3.75 11.19V9C3.75 8.59 3.41 8.25 3 8.25C2.59 8.25 2.25 8.59 2.25 9V13C2.25 13.1 2.27 13.19 2.31 13.29C2.39 13.47 2.53 13.62 2.72 13.7C2.81 13.74 2.91 13.76 3.01 13.76H7.01C7.42 13.76 7.76 13.42 7.76 13.01C7.76 12.6 7.42 12.26 7.01 12.26H4.82L7.54 9.54C7.83 9.25 7.83 8.77 7.54 8.48L7.53 8.47Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/minimize-16x16.svg":
/*!***************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/minimize-16x16.svg ***!
  \***************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.75 8C13.75 8.41 13.41 8.75 13 8.75H3C2.59 8.75 2.25 8.41 2.25 8C2.25 7.59 2.59 7.25 3 7.25H13C13.41 7.25 13.75 7.59 13.75 8Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/more-24x24.svg":
/*!***********************************************************!*\
  !*** ./packages/survey-core/src/images-v2/more-24x24.svg ***!
  \***********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 10.25C11.04 10.25 10.25 11.04 10.25 12C10.25 12.96 11.04 13.75 12 13.75C12.96 13.75 13.75 12.96 13.75 12C13.75 11.04 12.96 10.25 12 10.25ZM11.75 12C11.75 11.86 11.86 11.75 12 11.75C12.14 11.75 12.25 11.86 12.25 12C12.25 12.28 11.75 12.28 11.75 12ZM19 10.25C18.04 10.25 17.25 11.04 17.25 12C17.25 12.96 18.04 13.75 19 13.75C19.96 13.75 20.75 12.96 20.75 12C20.75 11.04 19.96 10.25 19 10.25ZM18.75 12C18.75 11.86 18.86 11.75 19 11.75C19.14 11.75 19.25 11.86 19.25 12C19.25 12.28 18.75 12.28 18.75 12ZM5 10.25C4.04 10.25 3.25 11.04 3.25 12C3.25 12.96 4.04 13.75 5 13.75C5.96 13.75 6.75 12.96 6.75 12C6.75 11.04 5.96 10.25 5 10.25ZM4.75 12C4.75 11.86 4.86 11.75 5 11.75C5.14 11.75 5.25 11.86 5.25 12C5.25 12.28 4.75 12.28 4.75 12Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/navmenu-24x24.svg":
/*!**************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/navmenu-24x24.svg ***!
  \**************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.25 7C3.25 6.59 3.59 6.25 4 6.25H15C15.41 6.25 15.75 6.59 15.75 7C15.75 7.41 15.41 7.75 15 7.75H4C3.59 7.75 3.25 7.41 3.25 7ZM20 11.25H4C3.59 11.25 3.25 11.59 3.25 12C3.25 12.41 3.59 12.75 4 12.75H20C20.41 12.75 20.75 12.41 20.75 12C20.75 11.59 20.41 11.25 20 11.25ZM9 16.25H4C3.59 16.25 3.25 16.59 3.25 17C3.25 17.41 3.59 17.75 4 17.75H9C9.41 17.75 9.75 17.41 9.75 17C9.75 16.59 9.41 16.25 9 16.25Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/noimage-48x48.svg":
/*!**************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/noimage-48x48.svg ***!
  \**************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30.4975 14.2475C28.7075 14.2475 27.2475 15.7075 27.2475 17.4975C27.2475 19.2875 28.7075 20.7475 30.4975 20.7475C32.2875 20.7475 33.7475 19.2875 33.7475 17.4975C33.7475 15.7075 32.2875 14.2475 30.4975 14.2475ZM30.4975 19.2475C29.5375 19.2475 28.7475 18.4575 28.7475 17.4975C28.7475 16.5375 29.5375 15.7475 30.4975 15.7475C31.4575 15.7475 32.2475 16.5375 32.2475 17.4975C32.2475 18.4575 31.4575 19.2475 30.4975 19.2475ZM13.5175 11.2175C13.4375 10.8075 13.7075 10.4175 14.1175 10.3375C14.4275 10.2775 14.7175 10.2475 14.9975 10.2475H32.9975C35.6175 10.2475 37.7475 12.3775 37.7475 14.9975V32.9975C37.7475 33.2775 37.7175 33.5675 37.6575 33.8775C37.5875 34.2375 37.2775 34.4875 36.9175 34.4875C36.8675 34.4875 36.8275 34.4875 36.7775 34.4775C36.3675 34.3975 36.1075 34.0075 36.1775 33.5975C36.2175 33.3775 36.2375 33.1775 36.2375 32.9975V14.9975C36.2375 13.2075 34.7775 11.7475 32.9875 11.7475H14.9975C14.8075 11.7475 14.6175 11.7675 14.3975 11.8075C13.9875 11.8875 13.5975 11.6175 13.5175 11.2075V11.2175ZM34.4775 36.7775C34.5575 37.1875 34.2875 37.5775 33.8775 37.6575C33.5675 37.7175 33.2775 37.7475 32.9975 37.7475H14.9975C12.3775 37.7475 10.2475 35.6175 10.2475 32.9975V14.9975C10.2475 14.7175 10.2775 14.4275 10.3375 14.1175C10.4175 13.7075 10.8075 13.4375 11.2175 13.5175C11.6275 13.5975 11.8875 13.9875 11.8175 14.3975C11.7775 14.6175 11.7575 14.8175 11.7575 14.9975V32.9975C11.7575 34.7875 13.2175 36.2475 15.0075 36.2475H33.0075C33.1975 36.2475 33.3875 36.2275 33.6075 36.1875C34.0075 36.1075 34.4075 36.3775 34.4875 36.7875L34.4775 36.7775ZM15.8275 31.7975C15.6975 31.9375 15.7575 32.0875 15.7775 32.1175C15.8175 32.1975 15.8675 32.2475 15.9375 32.2475H29.8175C30.2275 32.2475 30.5675 32.5875 30.5675 32.9975C30.5675 33.4075 30.2275 33.7475 29.8175 33.7475H15.9375C15.2675 33.7475 14.6775 33.3475 14.3975 32.7175C14.1075 32.0575 14.2375 31.2975 14.7275 30.7775L19.7275 25.2775C20.0475 24.9275 20.5075 24.7175 20.9875 24.7075C21.4875 24.7275 21.9375 24.8875 22.2675 25.2275L25.4675 28.4775C25.7575 28.7675 25.7575 29.2475 25.4675 29.5375C25.1675 29.8275 24.6975 29.8275 24.4075 29.5375L21.2075 26.2875C21.1475 26.2175 21.0675 26.1875 21.0275 26.2075C20.9875 26.2075 20.9075 26.2175 20.8475 26.2875L15.8375 31.7975H15.8275ZM38.5275 38.5275C38.3775 38.6775 38.1875 38.7475 37.9975 38.7475C37.8075 38.7475 37.6175 38.6775 37.4675 38.5275L9.4675 10.5275C9.1775 10.2375 9.1775 9.7575 9.4675 9.4675C9.7575 9.1775 10.2375 9.1775 10.5275 9.4675L38.5275 37.4675C38.8175 37.7575 38.8175 38.2375 38.5275 38.5275Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/ranking-arrows.svg":
/*!***************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/ranking-arrows.svg ***!
  \***************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 10 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 5L5 0L0 5H4V9H6V5H10Z\"></path><path d=\"M6 19V15H4V19H0L5 24L10 19H6Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/rankingundefined-16x16.svg":
/*!***********************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/rankingundefined-16x16.svg ***!
  \***********************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.75 8C11.75 8.41 11.41 8.75 11 8.75H5C4.59 8.75 4.25 8.41 4.25 8C4.25 7.59 4.59 7.25 5 7.25H11C11.41 7.25 11.75 7.59 11.75 8Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/rating-star-2.svg":
/*!**************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/rating-star-2.svg ***!
  \**************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 39.5057L11.7226 45.9839C10.4095 46.6739 8.87606 45.5622 9.12525 44.096L11.4734 30.373L1.54411 20.6556C0.480254 19.6207 1.06489 17.8095 2.53128 17.5986L16.2559 15.5957L22.3994 3.10891C23.0512 1.77685 24.9488 1.77685 25.6102 3.10891L31.7441 15.5957L45.4687 17.5986C46.9351 17.8095 47.5197 19.6207 46.4559 20.6556L36.5266 30.373L38.8748 44.096C39.1239 45.5622 37.5905 46.6835 36.2774 45.9839L24 39.5057Z\" fill=\"none\" stroke-width=\"2\"></path><path d=\"M24.3981 33.1305L24 32.9206L23.6019 33.1305L15.8715 37.2059L17.3542 28.5663L17.43 28.1246L17.1095 27.8113L10.83 21.6746L19.4965 20.4049L19.9405 20.3399L20.1387 19.9373L24 12.0936L27.8613 19.9373L28.0595 20.3399L28.5035 20.4049L37.17 21.6746L30.8905 27.8113L30.57 28.1246L30.6458 28.5663L32.1285 37.2059L24.3981 33.1305Z\" stroke-width=\"1.70746\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/rating-star-small-2.svg":
/*!********************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/rating-star-small-2.svg ***!
  \********************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 19.3373L6.13001 22.4373C5.50001 22.7673 4.77001 22.2373 4.89001 21.5373L6.01001 14.9773L1.26001 10.3273C0.750007 9.83728 1.03001 8.96728 1.73001 8.86728L8.29001 7.90728L11.23 1.93728C11.54 1.29728 12.45 1.29728 12.77 1.93728L15.7 7.90728L22.26 8.86728C22.96 8.96728 23.24 9.83728 22.73 10.3273L17.98 14.9773L19.1 21.5373C19.22 22.2373 18.49 22.7773 17.86 22.4373L11.99 19.3373H12Z\" fill=\"none\" stroke-width=\"2\"></path><path d=\"M12 15.9472L8.58001 17.7572L9.23001 13.9272L6.45001 11.2072L10.29 10.6472L12 7.17725L13.71 10.6472L17.55 11.2072L14.77 13.9272L15.42 17.7572L12 15.9472Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/rating-star-small.svg":
/*!******************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/rating-star-small.svg ***!
  \******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M12 19.3373L6.13001 22.4373C5.50001 22.7673 4.77001 22.2373 4.89001 21.5373L6.01001 14.9773L1.26001 10.3273C0.750007 9.83728 1.03001 8.96728 1.73001 8.86728L8.29001 7.90728L11.23 1.93728C11.54 1.29728 12.45 1.29728 12.77 1.93728L15.7 7.90728L22.26 8.86728C22.96 8.96728 23.24 9.83728 22.73 10.3273L17.98 14.9773L19.1 21.5373C19.22 22.2373 18.49 22.7773 17.86 22.4373L11.99 19.3373H12Z\"></path></g></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/rating-star.svg":
/*!************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/rating-star.svg ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M24 39.5057L11.7226 45.9839C10.4095 46.6739 8.87606 45.5622 9.12525 44.096L11.4734 30.373L1.54411 20.6556C0.480254 19.6207 1.06489 17.8095 2.53128 17.5986L16.2559 15.5957L22.3994 3.10891C23.0512 1.77685 24.9488 1.77685 25.6102 3.10891L31.7441 15.5957L45.4687 17.5986C46.9351 17.8095 47.5197 19.6207 46.4559 20.6556L36.5266 30.373L38.8748 44.096C39.1239 45.5622 37.5905 46.6835 36.2774 45.9839L24 39.5057Z\"></path></g></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/reorder-24x24.svg":
/*!**************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/reorder-24x24.svg ***!
  \**************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.9444 10.75H15.0544C15.7144 10.75 16.3144 10.39 16.6144 9.80002C16.9144 9.22002 16.8644 8.52002 16.4844 7.98002L13.4244 3.71002C12.7644 2.79002 11.2344 2.79002 10.5744 3.71002L7.5244 7.99002C7.1444 8.53002 7.0944 9.22002 7.3944 9.81002C7.6944 10.4 8.2944 10.76 8.9544 10.76L8.9444 10.75ZM8.7444 8.86002L11.7944 4.58002C11.8644 4.49002 11.9544 4.48002 11.9944 4.48002C12.0344 4.48002 12.1344 4.49002 12.1944 4.58002L15.2544 8.86002C15.3344 8.97002 15.3044 9.07002 15.2744 9.12002C15.2444 9.17002 15.1844 9.26002 15.0544 9.26002H8.9444C8.8144 9.26002 8.7444 9.18002 8.7244 9.12002C8.7044 9.06002 8.6644 8.97002 8.7444 8.86002ZM15.0544 13.25H8.9444C8.2844 13.25 7.6844 13.61 7.3844 14.2C7.0844 14.78 7.1344 15.48 7.5144 16.02L10.5744 20.3C10.9044 20.76 11.4344 21.03 11.9944 21.03C12.5544 21.03 13.0944 20.76 13.4144 20.3L16.4744 16.02C16.8544 15.48 16.9044 14.79 16.6044 14.2C16.3044 13.61 15.7044 13.25 15.0444 13.25H15.0544ZM15.2644 15.15L12.2044 19.43C12.0744 19.61 11.9244 19.61 11.7944 19.43L8.7344 15.15C8.6544 15.04 8.6844 14.94 8.7144 14.89C8.7444 14.84 8.8044 14.75 8.9344 14.75H15.0444C15.1744 14.75 15.2444 14.83 15.2644 14.89C15.2844 14.95 15.3244 15.04 15.2444 15.15H15.2644Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/restoredown-16x16.svg":
/*!******************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/restoredown-16x16.svg ***!
  \******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.69 8.71C7.73 8.8 7.75 8.9 7.75 9V13C7.75 13.41 7.41 13.75 7 13.75C6.59 13.75 6.25 13.41 6.25 13V10.81L3.53 13.53C3.38 13.68 3.19 13.75 3 13.75C2.81 13.75 2.62 13.68 2.47 13.53C2.18 13.24 2.18 12.76 2.47 12.47L5.19 9.75H3C2.59 9.75 2.25 9.41 2.25 9C2.25 8.59 2.59 8.25 3 8.25H7C7.1 8.25 7.19 8.27 7.29 8.31C7.47 8.39 7.62 8.53 7.7 8.72L7.69 8.71ZM13 6.25H10.81L13.53 3.53C13.82 3.24 13.82 2.76 13.53 2.47C13.24 2.18 12.76 2.18 12.47 2.47L9.75 5.19V3C9.75 2.59 9.41 2.25 9 2.25C8.59 2.25 8.25 2.59 8.25 3V7C8.25 7.1 8.27 7.19 8.31 7.29C8.39 7.47 8.53 7.62 8.72 7.7C8.81 7.74 8.91 7.76 9.01 7.76H13.01C13.42 7.76 13.76 7.42 13.76 7.01C13.76 6.6 13.42 6.26 13.01 6.26L13 6.25Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/search-24x24.svg":
/*!*************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/search-24x24.svg ***!
  \*************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.9975 2.25C9.7275 2.25 6.2475 5.73 6.2475 10C6.2475 11.87 6.9075 13.58 8.0175 14.92L2.4675 20.47C2.1775 20.76 2.1775 21.24 2.4675 21.53C2.6175 21.68 2.8075 21.75 2.9975 21.75C3.1875 21.75 3.3775 21.68 3.5275 21.53L9.0775 15.98C10.4175 17.08 12.1275 17.75 13.9975 17.75C18.2675 17.75 21.7475 14.27 21.7475 10C21.7475 5.73 18.2675 2.25 13.9975 2.25ZM13.9975 16.25C10.5475 16.25 7.7475 13.45 7.7475 10C7.7475 6.55 10.5475 3.75 13.9975 3.75C17.4475 3.75 20.2475 6.55 20.2475 10C20.2475 13.45 17.4475 16.25 13.9975 16.25Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/smiley-rate1-24x24.svg":
/*!*******************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/smiley-rate1-24x24.svg ***!
  \*******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4 4.9938C4 4.44362 4.45 3.99348 5 3.99348H6.59L5.3 2.70306C4.91 2.31293 4.91 1.68272 5.3 1.2926C5.69 0.902468 6.32 0.902468 6.71 1.2926L9.71 4.29357C9.8 4.3836 9.88 4.49364 9.93 4.62368C10.03 4.86376 10.03 5.14385 9.93 5.38393C9.88 5.50397 9.81 5.614 9.71 5.71404L6.71 8.71501C6.51 8.91508 6.26 9.00511 6 9.00511C5.74 9.00511 5.49 8.90508 5.29 8.71501C4.9 8.32489 4.9 7.69468 5.29 7.30456L6.58 6.01413H4.99C4.44 6.01413 3.99 5.56399 3.99 5.01381L4 4.9938ZM14.08 5.37393C14.13 5.49397 14.2 5.604 14.3 5.70403L17.3 8.70501C17.5 8.90508 17.75 8.99511 18.01 8.99511C18.27 8.99511 18.52 8.89507 18.72 8.70501C19.11 8.31488 19.11 7.68468 18.72 7.29455L17.43 6.00413H19.02C19.57 6.00413 20.02 5.55399 20.02 5.00381C20.02 4.45363 19.57 4.00348 19.02 4.00348H17.43L18.72 2.71306C19.11 2.32293 19.11 1.69273 18.72 1.3026C18.33 0.912471 17.7 0.912471 17.31 1.3026L14.31 4.30358C14.22 4.39361 14.14 4.50364 14.09 4.63368C13.99 4.87376 13.99 5.15385 14.09 5.39393L14.08 5.37393ZM22 14.9971V20.999C22 22.6496 20.65 24 19 24H5C3.35 24 2 22.6496 2 20.999V14.9971C2 13.3465 3.35 11.9961 5 11.9961H19C20.65 11.9961 22 13.3465 22 14.9971ZM19 13.9967H16V16.9977H20V14.9971C20 14.4469 19.55 13.9967 19 13.9967ZM14 16.9977V13.9967H10V16.9977H14ZM10 18.9984V21.9993H14V18.9984H10ZM4 14.9971V16.9977H8V13.9967H5C4.45 13.9967 4 14.4469 4 14.9971ZM5 21.9993H8V18.9984H4V20.999C4 21.5492 4.45 21.9993 5 21.9993ZM20 20.999V18.9984H16V21.9993H19C19.55 21.9993 20 21.5492 20 20.999Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/smiley-rate10-24x24.svg":
/*!********************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/smiley-rate10-24x24.svg ***!
  \********************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.01 23C6.85721 23 1.15412 19.9621 0.0134987 13.1669C-0.0765501 12.6272 0.293651 12.1076 0.833944 12.0177C1.38424 11.9277 1.89452 12.2975 1.98457 12.8371C2.92508 18.4732 7.69767 20.9914 12 20.9914C16.3023 20.9914 21.0749 18.4732 22.0154 12.8371C22.1055 12.2975 22.6158 11.9277 23.1661 12.0177C23.7063 12.1076 24.0765 12.6272 23.9865 13.1669C22.8559 19.9521 17.1428 23 11.99 23H12.01ZM21.165 6.15177C22.3056 5.01257 22.3056 3.16386 21.165 2.02465L21.0049 1.85477C19.9143 0.765533 18.1633 0.725561 17.0227 1.71487C15.8821 0.715568 14.1312 0.765533 13.0406 1.85477L12.8705 2.01466C11.7299 3.15386 11.7299 5.00257 12.8705 6.14178L17.0227 10.2889L21.175 6.14178L21.165 6.15177ZM15.742 3.27378L17.0127 4.54289L18.2834 3.27378C18.6436 2.91403 19.2239 2.91403 19.5841 3.27378L19.7442 3.43367C20.1044 3.79342 20.1044 4.37301 19.7442 4.73276L17.0127 7.46086L14.2812 4.73276C13.921 4.37301 13.921 3.79342 14.2812 3.43367L14.4413 3.27378C14.6214 3.09391 14.8515 3.00397 15.0917 3.00397C15.3318 3.00397 15.5619 3.09391 15.742 3.27378ZM11.1595 6.15177C12.3002 5.01257 12.3002 3.16386 11.1595 2.02465L10.9995 1.85477C9.90886 0.765533 8.15792 0.725561 7.0173 1.71487C5.87668 0.715568 4.12573 0.765533 3.03514 1.85477L2.86505 2.01466C1.72443 3.15386 1.72443 5.00257 2.86505 6.14178L7.0173 10.2889L11.1695 6.14178L11.1595 6.15177ZM5.7366 3.27378L7.00729 4.54289L8.27798 3.27378C8.63818 2.91403 9.21849 2.91403 9.57869 3.27378L9.73877 3.43367C10.099 3.79342 10.099 4.37301 9.73877 4.73276L7.00729 7.46086L4.27581 4.73276C3.91562 4.37301 3.91562 3.79342 4.27581 3.43367L4.4359 3.27378C4.61599 3.09391 4.84612 3.00397 5.08625 3.00397C5.32638 3.00397 5.5565 3.09391 5.7366 3.27378Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/smiley-rate2-24x24.svg":
/*!*******************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/smiley-rate2-24x24.svg ***!
  \*******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0_15894_140103)\"><path d=\"M4.88291 4.51001C4.47291 4.51001 4.08291 4.25001 3.94291 3.84001C3.76291 3.32001 4.03291 2.75001 4.55291 2.57001L8.32291 1.25001C8.84291 1.06001 9.41291 1.34001 9.59291 1.86001C9.77291 2.38001 9.50291 2.95001 8.98291 3.13001L5.20291 4.45001C5.09291 4.49001 4.98291 4.51001 4.87291 4.51001H4.88291ZM19.8129 3.89001C20.0229 3.38001 19.7729 2.79001 19.2629 2.59001L15.5529 1.07001C15.0429 0.860007 14.4529 1.11001 14.2529 1.62001C14.0429 2.13001 14.2929 2.72001 14.8029 2.92001L18.5029 4.43001C18.6229 4.48001 18.7529 4.50001 18.8829 4.50001C19.2729 4.50001 19.6529 4.27001 19.8129 3.88001V3.89001ZM3.50291 6.00001C2.64291 6.37001 1.79291 6.88001 1.00291 7.48001C0.79291 7.64001 0.64291 7.87001 0.59291 8.14001C0.48291 8.73001 0.87291 9.29001 1.45291 9.40001C2.04291 9.51001 2.60291 9.12001 2.71291 8.54001C2.87291 7.69001 3.12291 6.83001 3.50291 5.99001V6.00001ZM21.0429 8.55001C21.6029 10.48 24.2429 8.84001 22.7529 7.48001C21.9629 6.88001 21.1129 6.37001 20.2529 6.00001C20.6329 6.84001 20.8829 7.70001 21.0429 8.55001ZM21.5729 13.2C21.2529 14.2 22.5429 15.09 23.3629 14.39C23.8529 14 23.9229 13.29 23.5429 12.81C21.7429 10.67 22.1329 10.55 21.5829 13.2H21.5729ZM1.75291 11C1.22291 11.79 -0.14709 12.64 0.0129102 13.75C0.15291 14.36 0.75291 14.74 1.35291 14.6C2.98291 14.1 1.80291 12.22 1.75291 11ZM19.8829 17C19.8829 13.14 16.2929 10 11.8829 10C7.47291 10 3.88291 13.14 3.88291 17C3.88291 20.86 7.47291 24 11.8829 24C16.2929 24 19.8829 20.86 19.8829 17ZM17.8829 17C17.8829 19.76 15.1929 22 11.8829 22C8.57291 22 5.88291 19.76 5.88291 17C5.88291 14.24 8.57291 12 11.8829 12C15.1929 12 17.8829 14.24 17.8829 17Z\"></path></g><defs><clipPath id=\"clip0_15894_140103\"><rect width=\"24\" height=\"24\" fill=\"white\"></rect></clipPath></defs></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/smiley-rate3-24x24.svg":
/*!*******************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/smiley-rate3-24x24.svg ***!
  \*******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.01915 7C6.46961 7 6.01998 6.55 6.01998 6V2C6.01998 1.45 6.46961 1 7.01915 1C7.56869 1 8.01832 1.45 8.01832 2V6C8.01832 6.55 7.56869 7 7.01915 7ZM18.01 6V2C18.01 1.45 17.5604 1 17.0108 1C16.4613 1 16.0117 1.45 16.0117 2V6C16.0117 6.55 16.4613 7 17.0108 7C17.5604 7 18.01 6.55 18.01 6ZM16.4213 21.58L18.01 19.99L19.2989 21.28C19.6886 21.67 20.3181 21.67 20.7077 21.28C21.0974 20.89 21.0974 20.26 20.7077 19.87L19.4188 18.58C18.6395 17.8 17.3705 17.8 16.5912 18.58L15.0025 20.17L13.4138 18.58C12.6345 17.8 11.3655 17.8 10.5862 18.58L8.9975 20.17L7.40883 18.58C6.62948 17.8 5.36053 17.8 4.58118 18.58L3.29226 19.87C2.90258 20.26 2.90258 20.89 3.29226 21.28C3.68193 21.67 4.31141 21.67 4.70108 21.28L5.99001 19.99L7.57868 21.58C8.35803 22.36 9.62698 22.36 10.4063 21.58L11.995 19.99L13.5837 21.58C13.9734 21.97 14.4829 22.16 14.9925 22.16C15.5021 22.16 16.0117 21.97 16.4013 21.58H16.4213Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/smiley-rate4-24x24.svg":
/*!*******************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/smiley-rate4-24x24.svg ***!
  \*******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.06927 7C6.51927 7 6.06927 6.55 6.06927 6V2C6.06927 1.45 6.51927 1 7.06927 1C7.61927 1 8.06927 1.45 8.06927 2V6C8.06927 6.55 7.61927 7 7.06927 7ZM18.0693 6V2C18.0693 1.45 17.6193 1 17.0693 1C16.5193 1 16.0693 1.45 16.0693 2V6C16.0693 6.55 16.5193 7 17.0693 7C17.6193 7 18.0693 6.55 18.0693 6ZM22.5693 21.9C23.0693 21.66 23.2793 21.07 23.0393 20.57C21.1093 16.52 16.9093 14 12.0693 14C7.22927 14 3.02927 16.52 1.09927 20.57C0.859273 21.07 1.06927 21.67 1.56927 21.9C2.06927 22.14 2.65927 21.93 2.89927 21.43C4.49927 18.08 8.00927 16 12.0593 16C16.1093 16 19.6293 18.08 21.2193 21.43C21.3893 21.79 21.7493 22 22.1193 22C22.2593 22 22.4093 21.97 22.5493 21.9H22.5693Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/smiley-rate5-24x24.svg":
/*!*******************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/smiley-rate5-24x24.svg ***!
  \*******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.00572 7C6.45572 7 6.00572 6.55 6.00572 6V2C6.00572 1.45 6.45572 1 7.00572 1C7.55572 1 8.00572 1.45 8.00572 2V6C8.00572 6.55 7.55572 7 7.00572 7ZM18.0057 6V2C18.0057 1.45 17.5557 1 17.0057 1C16.4557 1 16.0057 1.45 16.0057 2V6C16.0057 6.55 16.4557 7 17.0057 7C17.5557 7 18.0057 6.55 18.0057 6ZM19.9457 21.33C20.1257 20.81 19.8557 20.24 19.3357 20.05C14.5457 18.35 9.45572 18.35 4.66572 20.05C4.14572 20.23 3.87572 20.81 4.05572 21.33C4.23572 21.85 4.80572 22.12 5.33572 21.94C9.69572 20.4 14.3057 20.4 18.6657 21.94C18.7757 21.98 18.8857 22 18.9957 22C19.4057 22 19.7957 21.74 19.9357 21.33H19.9457Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/smiley-rate6-24x24.svg":
/*!*******************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/smiley-rate6-24x24.svg ***!
  \*******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 7C6.45 7 6 6.55 6 6V2C6 1.45 6.45 1 7 1C7.55 1 8 1.45 8 2V6C8 6.55 7.55 7 7 7ZM18 6V2C18 1.45 17.55 1 17 1C16.45 1 16 1.45 16 2V6C16 6.55 16.45 7 17 7C17.55 7 18 6.55 18 6ZM21 21C21 20.45 20.55 20 20 20H4C3.45 20 3 20.45 3 21C3 21.55 3.45 22 4 22H20C20.55 22 21 21.55 21 21Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/smiley-rate7-24x24.svg":
/*!*******************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/smiley-rate7-24x24.svg ***!
  \*******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.0022 23.99C11.452 23.99 11.0018 23.5402 11.0018 22.9904C11.0018 22.4407 11.452 21.9909 12.0022 21.9909C16.3137 21.9909 21.0755 19.472 22.0158 13.8344C22.1058 13.2947 22.616 12.9248 23.1662 13.0148C23.7064 13.1047 24.0765 13.6245 23.9865 14.1643C22.8561 20.9513 17.144 24 11.9922 24L12.0022 23.99ZM8.00072 5.99783V1.99957C8.00072 1.4498 7.55056 1 7.00036 1C6.45016 1 6 1.4498 6 1.99957V5.99783C6 6.54759 6.45016 6.99739 7.00036 6.99739C7.55056 6.99739 8.00072 6.54759 8.00072 5.99783ZM18.0043 5.99783V1.99957C18.0043 1.4498 17.5542 1 17.004 1C16.4538 1 16.0036 1.4498 16.0036 1.99957V5.99783C16.0036 6.54759 16.4538 6.99739 17.004 6.99739C17.5542 6.99739 18.0043 6.54759 18.0043 5.99783Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/smiley-rate8-24x24.svg":
/*!*******************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/smiley-rate8-24x24.svg ***!
  \*******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.01 24C6.85721 24 1.15412 20.96 0.0134987 14.16C-0.0765501 13.62 0.293651 13.1 0.833944 13.01C1.38424 12.92 1.89452 13.29 1.98457 13.83C2.92508 19.47 7.69767 21.99 12 21.99C16.3023 21.99 21.0749 19.47 22.0154 13.83C22.1055 13.29 22.6158 12.92 23.1661 13.01C23.7063 13.1 24.0765 13.62 23.9865 14.16C22.8559 20.95 17.1428 24 11.99 24H12.01ZM8.00783 6V2C8.00783 1.45 7.55759 1 7.00729 1C6.45699 1 6.00675 1.45 6.00675 2V6C6.00675 6.55 6.45699 7 7.00729 7C7.55759 7 8.00783 6.55 8.00783 6ZM18.0133 6V2C18.0133 1.45 17.563 1 17.0127 1C16.4624 1 16.0122 1.45 16.0122 2V6C16.0122 6.55 16.4624 7 17.0127 7C17.563 7 18.0133 6.55 18.0133 6Z\"></path></svg>"

/***/ }),

/***/ "./packages/survey-core/src/images-v2/smiley-rate9-24x24.svg":
/*!*******************************************************************!*\
  !*** ./packages/survey-core/src/images-v2/smiley-rate9-24x24.svg ***!
  \*******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.01 24C6.85767 24 1.15509 20.96 0.0145752 14.16C-0.0354475 13.87 0.0445888 13.57 0.234675 13.35C0.424761 13.13 0.704888 13 0.995019 13H23.005C23.2951 13 23.5752 13.13 23.7653 13.35C23.9554 13.57 24.0354 13.87 23.9854 14.16C22.8549 20.95 17.1423 24 11.99 24H12.01ZM2.25559 15C3.61621 19.82 8.0182 22 12.01 22C16.0018 22 20.4038 19.82 21.7644 15H2.25559ZM8.00819 6V2C8.00819 1.45 7.55799 1 7.00774 1C6.45749 1 6.00729 1.45 6.00729 2V6C6.00729 6.55 6.45749 7 7.00774 7C7.55799 7 8.00819 6.55 8.00819 6ZM18.0127 6V2C18.0127 1.45 17.5625 1 17.0123 1C16.462 1 16.0118 1.45 16.0118 2V6C16.0118 6.55 16.462 7 17.0123 7C17.5625 7 18.0127 6.55 18.0127 6Z\"></path></svg>"

/***/ })

/******/ });
});
//# sourceMappingURL=iconsV2.js.map

/***/ }),

/***/ "./src/entries/js-ui.ts":
/*!********************************************!*\
  !*** ./src/entries/js-ui.ts + 103 modules ***!
  \********************************************/
/*! exports provided: useState, useId, useReducer, useEffect, useLayoutEffect, useInsertionEffect, useTransition, useDeferredValue, useSyncExternalStore, startTransition, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue, version, Children, render, hydrate, unmountComponentAtNode, createPortal, createElement, createContext, createFactory, cloneElement, createRef, Fragment, isValidElement, isFragment, isMemo, findDOMNode, Component, PureComponent, memo, forwardRef, flushSync, unstable_batchedUpdates, StrictMode, Suspense, SuspenseList, lazy, renderSurvey, renderPopupSurvey, preact, Survey, attachKey2click, ReactSurveyElementsWrapper, SurveyNavigationBase, SurveyTimerPanel, SurveyPage, SurveyRow, SurveyPanel, SurveyFlowPanel, SurveyQuestion, SurveyElementErrors, SurveyQuestionAndErrorsCell, ReactSurveyElement, SurveyElementBase, SurveyQuestionElementBase, SurveyQuestionCommentItem, SurveyQuestionComment, SurveyQuestionCheckbox, SurveyQuestionCheckboxItem, SurveyQuestionRanking, SurveyQuestionRankingItem, SurveyQuestionRankingItemContent, RatingItem, RatingItemStar, RatingItemSmiley, RatingDropdownItem, TagboxFilterString, SurveyQuestionOptionItem, SurveyQuestionDropdownBase, SurveyQuestionDropdown, SurveyQuestionTagboxItem, SurveyQuestionTagbox, SurveyQuestionDropdownSelect, SurveyQuestionMatrix, SurveyQuestionMatrixRow, SurveyQuestionMatrixCell, SurveyQuestionHtml, SurveyQuestionFile, SurveyFileChooseButton, SurveyFilePreview, SurveyQuestionMultipleText, SurveyQuestionRadiogroup, SurveyQuestionRadioItem, SurveyQuestionText, SurveyQuestionBoolean, SurveyQuestionBooleanCheckbox, SurveyQuestionBooleanRadio, SurveyQuestionEmpty, SurveyQuestionMatrixDropdownCell, SurveyQuestionMatrixDropdownBase, SurveyQuestionMatrixDropdown, SurveyQuestionMatrixDynamic, SurveyQuestionMatrixDynamicAddButton, SurveyQuestionPanelDynamic, SurveyProgress, SurveyProgressButtons, SurveyProgressToc, SurveyQuestionRating, SurveyQuestionRatingDropdown, SurveyQuestionExpression, PopupSurvey, SurveyWindow, ReactQuestionFactory, ReactElementFactory, SurveyQuestionImagePicker, SurveyQuestionImage, SurveyQuestionSignaturePad, SurveyQuestionButtonGroup, SurveyQuestionCustom, SurveyQuestionComposite, Popup, ListItemContent, ListItemGroup, List, TitleActions, TitleElement, SurveyActionBar, LogoImage, SurveyHeader, SvgIcon, SurveyQuestionMatrixDynamicRemoveButton, SurveyQuestionMatrixDetailButton, SurveyQuestionMatrixDynamicDragDropIcon, SurveyQuestionPanelDynamicAddButton, SurveyQuestionPanelDynamicRemoveButton, SurveyQuestionPanelDynamicPrevButton, SurveyQuestionPanelDynamicNextButton, SurveyQuestionPanelDynamicProgressText, SurveyNavigationButton, QuestionErrorComponent, MatrixRow, Skeleton, NotifierComponent, ComponentsContainer, CharacterCounterComponent, HeaderMobile, HeaderCell, Header, SurveyLocStringViewer, SurveyLocStringEditor, LoadingIndicatorComponent, SvgBundleComponent, PopupModal, SurveyModel, SurveyWindowModel, settings, surveyLocalization, surveyStrings, Model */
/*! ModuleConcatenation bailout: Cannot concat with ./build/survey-core/icons/iconsV1.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./build/survey-core/icons/iconsV2.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external {"root":"Survey","commonjs2":"survey-core","commonjs":"survey-core","amd":"survey-core"} (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "useState", function() { return /* reexport */ hooks_module_d; });
__webpack_require__.d(__webpack_exports__, "useId", function() { return /* reexport */ hooks_module_g; });
__webpack_require__.d(__webpack_exports__, "useReducer", function() { return /* reexport */ hooks_module_h; });
__webpack_require__.d(__webpack_exports__, "useEffect", function() { return /* reexport */ hooks_module_y; });
__webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return /* reexport */ hooks_module_; });
__webpack_require__.d(__webpack_exports__, "useInsertionEffect", function() { return /* reexport */ compat_module_I; });
__webpack_require__.d(__webpack_exports__, "useTransition", function() { return /* reexport */ compat_module_k; });
__webpack_require__.d(__webpack_exports__, "useDeferredValue", function() { return /* reexport */ compat_module_w; });
__webpack_require__.d(__webpack_exports__, "useSyncExternalStore", function() { return /* reexport */ compat_module_C; });
__webpack_require__.d(__webpack_exports__, "startTransition", function() { return /* reexport */ R; });
__webpack_require__.d(__webpack_exports__, "useRef", function() { return /* reexport */ hooks_module_A; });
__webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return /* reexport */ hooks_module_F; });
__webpack_require__.d(__webpack_exports__, "useMemo", function() { return /* reexport */ hooks_module_T; });
__webpack_require__.d(__webpack_exports__, "useCallback", function() { return /* reexport */ hooks_module_q; });
__webpack_require__.d(__webpack_exports__, "useContext", function() { return /* reexport */ hooks_module_x; });
__webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return /* reexport */ hooks_module_P; });
__webpack_require__.d(__webpack_exports__, "version", function() { return /* reexport */ vn; });
__webpack_require__.d(__webpack_exports__, "Children", function() { return /* reexport */ compat_module_O; });
__webpack_require__.d(__webpack_exports__, "render", function() { return /* reexport */ nn; });
__webpack_require__.d(__webpack_exports__, "hydrate", function() { return /* reexport */ tn; });
__webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return /* reexport */ bn; });
__webpack_require__.d(__webpack_exports__, "createPortal", function() { return /* reexport */ compat_module_$; });
__webpack_require__.d(__webpack_exports__, "createElement", function() { return /* reexport */ _; });
__webpack_require__.d(__webpack_exports__, "createContext", function() { return /* reexport */ J; });
__webpack_require__.d(__webpack_exports__, "createFactory", function() { return /* reexport */ dn; });
__webpack_require__.d(__webpack_exports__, "cloneElement", function() { return /* reexport */ _n; });
__webpack_require__.d(__webpack_exports__, "createRef", function() { return /* reexport */ b; });
__webpack_require__.d(__webpack_exports__, "Fragment", function() { return /* reexport */ k; });
__webpack_require__.d(__webpack_exports__, "isValidElement", function() { return /* reexport */ pn; });
__webpack_require__.d(__webpack_exports__, "isFragment", function() { return /* reexport */ mn; });
__webpack_require__.d(__webpack_exports__, "isMemo", function() { return /* reexport */ yn; });
__webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return /* reexport */ Sn; });
__webpack_require__.d(__webpack_exports__, "Component", function() { return /* reexport */ x; });
__webpack_require__.d(__webpack_exports__, "PureComponent", function() { return /* reexport */ compat_module_N; });
__webpack_require__.d(__webpack_exports__, "memo", function() { return /* reexport */ compat_module_M; });
__webpack_require__.d(__webpack_exports__, "forwardRef", function() { return /* reexport */ compat_module_D; });
__webpack_require__.d(__webpack_exports__, "flushSync", function() { return /* reexport */ En; });
__webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return /* reexport */ gn; });
__webpack_require__.d(__webpack_exports__, "StrictMode", function() { return /* reexport */ Cn; });
__webpack_require__.d(__webpack_exports__, "Suspense", function() { return /* reexport */ compat_module_P; });
__webpack_require__.d(__webpack_exports__, "SuspenseList", function() { return /* reexport */ compat_module_B; });
__webpack_require__.d(__webpack_exports__, "lazy", function() { return /* reexport */ compat_module_z; });
__webpack_require__.d(__webpack_exports__, "renderSurvey", function() { return /* binding */ renderSurvey; });
__webpack_require__.d(__webpack_exports__, "renderPopupSurvey", function() { return /* binding */ renderPopupSurvey; });
__webpack_require__.d(__webpack_exports__, "preact", function() { return /* binding */ preact; });
__webpack_require__.d(__webpack_exports__, "Survey", function() { return /* reexport */ reactSurvey_Survey; });
__webpack_require__.d(__webpack_exports__, "attachKey2click", function() { return /* reexport */ attachKey2click; });
__webpack_require__.d(__webpack_exports__, "ReactSurveyElementsWrapper", function() { return /* reexport */ reactsurveymodel_ReactSurveyElementsWrapper; });
__webpack_require__.d(__webpack_exports__, "SurveyNavigationBase", function() { return /* reexport */ SurveyNavigationBase; });
__webpack_require__.d(__webpack_exports__, "SurveyTimerPanel", function() { return /* reexport */ reacttimerpanel_SurveyTimerPanel; });
__webpack_require__.d(__webpack_exports__, "SurveyPage", function() { return /* reexport */ page_SurveyPage; });
__webpack_require__.d(__webpack_exports__, "SurveyRow", function() { return /* reexport */ row_SurveyRow; });
__webpack_require__.d(__webpack_exports__, "SurveyPanel", function() { return /* reexport */ panel_SurveyPanel; });
__webpack_require__.d(__webpack_exports__, "SurveyFlowPanel", function() { return /* reexport */ flow_panel_SurveyFlowPanel; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestion", function() { return /* reexport */ reactquestion_SurveyQuestion; });
__webpack_require__.d(__webpack_exports__, "SurveyElementErrors", function() { return /* reexport */ reactquestion_SurveyElementErrors; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionAndErrorsCell", function() { return /* reexport */ reactquestion_SurveyQuestionAndErrorsCell; });
__webpack_require__.d(__webpack_exports__, "ReactSurveyElement", function() { return /* reexport */ ReactSurveyElement; });
__webpack_require__.d(__webpack_exports__, "SurveyElementBase", function() { return /* reexport */ reactquestion_element_SurveyElementBase; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionElementBase", function() { return /* reexport */ reactquestion_element_SurveyQuestionElementBase; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionCommentItem", function() { return /* reexport */ reactquestion_comment_SurveyQuestionCommentItem; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionComment", function() { return /* reexport */ reactquestion_comment_SurveyQuestionComment; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionCheckbox", function() { return /* reexport */ reactquestion_checkbox_SurveyQuestionCheckbox; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionCheckboxItem", function() { return /* reexport */ reactquestion_checkbox_SurveyQuestionCheckboxItem; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionRanking", function() { return /* reexport */ reactquestion_ranking_SurveyQuestionRanking; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionRankingItem", function() { return /* reexport */ reactquestion_ranking_SurveyQuestionRankingItem; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionRankingItemContent", function() { return /* reexport */ reactquestion_ranking_SurveyQuestionRankingItemContent; });
__webpack_require__.d(__webpack_exports__, "RatingItem", function() { return /* reexport */ rating_item_RatingItem; });
__webpack_require__.d(__webpack_exports__, "RatingItemStar", function() { return /* reexport */ rating_item_star_RatingItemStar; });
__webpack_require__.d(__webpack_exports__, "RatingItemSmiley", function() { return /* reexport */ rating_item_smiley_RatingItemSmiley; });
__webpack_require__.d(__webpack_exports__, "RatingDropdownItem", function() { return /* reexport */ rating_dropdown_item_RatingDropdownItem; });
__webpack_require__.d(__webpack_exports__, "TagboxFilterString", function() { return /* reexport */ tagbox_filter_TagboxFilterString; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionOptionItem", function() { return /* reexport */ dropdown_item_SurveyQuestionOptionItem; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionDropdownBase", function() { return /* reexport */ dropdown_base_SurveyQuestionDropdownBase; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionDropdown", function() { return /* reexport */ reactquestion_dropdown_SurveyQuestionDropdown; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionTagboxItem", function() { return /* reexport */ tagbox_item_SurveyQuestionTagboxItem; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionTagbox", function() { return /* reexport */ reactquestion_tagbox_SurveyQuestionTagbox; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionDropdownSelect", function() { return /* reexport */ dropdown_select_SurveyQuestionDropdownSelect; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionMatrix", function() { return /* reexport */ reactquestion_matrix_SurveyQuestionMatrix; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionMatrixRow", function() { return /* reexport */ reactquestion_matrix_SurveyQuestionMatrixRow; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionMatrixCell", function() { return /* reexport */ reactquestion_matrix_SurveyQuestionMatrixCell; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionHtml", function() { return /* reexport */ reactquestion_html_SurveyQuestionHtml; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionFile", function() { return /* reexport */ reactquestion_file_SurveyQuestionFile; });
__webpack_require__.d(__webpack_exports__, "SurveyFileChooseButton", function() { return /* reexport */ file_choose_button_SurveyFileChooseButton; });
__webpack_require__.d(__webpack_exports__, "SurveyFilePreview", function() { return /* reexport */ file_preview_SurveyFilePreview; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionMultipleText", function() { return /* reexport */ reactquestion_multipletext_SurveyQuestionMultipleText; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionRadiogroup", function() { return /* reexport */ reactquestion_radiogroup_SurveyQuestionRadiogroup; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionRadioItem", function() { return /* reexport */ reactquestion_radiogroup_SurveyQuestionRadioItem; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionText", function() { return /* reexport */ reactquestion_text_SurveyQuestionText; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionBoolean", function() { return /* reexport */ boolean_SurveyQuestionBoolean; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionBooleanCheckbox", function() { return /* reexport */ boolean_checkbox_SurveyQuestionBooleanCheckbox; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionBooleanRadio", function() { return /* reexport */ boolean_radio_SurveyQuestionBooleanRadio; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionEmpty", function() { return /* reexport */ reactquestion_empty_SurveyQuestionEmpty; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionMatrixDropdownCell", function() { return /* reexport */ reactquestion_matrixdropdownbase_SurveyQuestionMatrixDropdownCell; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionMatrixDropdownBase", function() { return /* reexport */ reactquestion_matrixdropdownbase_SurveyQuestionMatrixDropdownBase; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionMatrixDropdown", function() { return /* reexport */ SurveyQuestionMatrixDropdown; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionMatrixDynamic", function() { return /* reexport */ reactquestion_matrixdynamic_SurveyQuestionMatrixDynamic; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionMatrixDynamicAddButton", function() { return /* reexport */ reactquestion_matrixdynamic_SurveyQuestionMatrixDynamicAddButton; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionPanelDynamic", function() { return /* reexport */ reactquestion_paneldynamic_SurveyQuestionPanelDynamic; });
__webpack_require__.d(__webpack_exports__, "SurveyProgress", function() { return /* reexport */ progress_SurveyProgress; });
__webpack_require__.d(__webpack_exports__, "SurveyProgressButtons", function() { return /* reexport */ progressButtons_SurveyProgressButtons; });
__webpack_require__.d(__webpack_exports__, "SurveyProgressToc", function() { return /* reexport */ progressToc_SurveyProgressToc; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionRating", function() { return /* reexport */ reactquestion_rating_SurveyQuestionRating; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionRatingDropdown", function() { return /* reexport */ rating_dropdown_SurveyQuestionRatingDropdown; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionExpression", function() { return /* reexport */ reactquestion_expression_SurveyQuestionExpression; });
__webpack_require__.d(__webpack_exports__, "PopupSurvey", function() { return /* reexport */ react_popup_survey_PopupSurvey; });
__webpack_require__.d(__webpack_exports__, "SurveyWindow", function() { return /* reexport */ SurveyWindow; });
__webpack_require__.d(__webpack_exports__, "ReactQuestionFactory", function() { return /* reexport */ ReactQuestionFactory; });
__webpack_require__.d(__webpack_exports__, "ReactElementFactory", function() { return /* reexport */ ReactElementFactory; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionImagePicker", function() { return /* reexport */ imagepicker_SurveyQuestionImagePicker; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionImage", function() { return /* reexport */ image_SurveyQuestionImage; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionSignaturePad", function() { return /* reexport */ signaturepad_SurveyQuestionSignaturePad; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionButtonGroup", function() { return /* reexport */ reactquestion_buttongroup_SurveyQuestionButtonGroup; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionCustom", function() { return /* reexport */ reactquestion_custom_SurveyQuestionCustom; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionComposite", function() { return /* reexport */ reactquestion_custom_SurveyQuestionComposite; });
__webpack_require__.d(__webpack_exports__, "Popup", function() { return /* reexport */ popup_Popup; });
__webpack_require__.d(__webpack_exports__, "ListItemContent", function() { return /* reexport */ list_item_content_ListItemContent; });
__webpack_require__.d(__webpack_exports__, "ListItemGroup", function() { return /* reexport */ list_item_group_ListItemGroup; });
__webpack_require__.d(__webpack_exports__, "List", function() { return /* reexport */ list_List; });
__webpack_require__.d(__webpack_exports__, "TitleActions", function() { return /* reexport */ title_actions_TitleActions; });
__webpack_require__.d(__webpack_exports__, "TitleElement", function() { return /* reexport */ title_element_TitleElement; });
__webpack_require__.d(__webpack_exports__, "SurveyActionBar", function() { return /* reexport */ action_bar_SurveyActionBar; });
__webpack_require__.d(__webpack_exports__, "LogoImage", function() { return /* reexport */ logo_image_LogoImage; });
__webpack_require__.d(__webpack_exports__, "SurveyHeader", function() { return /* reexport */ survey_header_SurveyHeader; });
__webpack_require__.d(__webpack_exports__, "SvgIcon", function() { return /* reexport */ svg_icon_SvgIcon; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionMatrixDynamicRemoveButton", function() { return /* reexport */ remove_button_SurveyQuestionMatrixDynamicRemoveButton; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionMatrixDetailButton", function() { return /* reexport */ detail_button_SurveyQuestionMatrixDetailButton; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionMatrixDynamicDragDropIcon", function() { return /* reexport */ drag_drop_icon_SurveyQuestionMatrixDynamicDragDropIcon; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionPanelDynamicAddButton", function() { return /* reexport */ paneldynamic_add_btn_SurveyQuestionPanelDynamicAddButton; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionPanelDynamicRemoveButton", function() { return /* reexport */ paneldynamic_remove_btn_SurveyQuestionPanelDynamicRemoveButton; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionPanelDynamicPrevButton", function() { return /* reexport */ paneldynamic_prev_btn_SurveyQuestionPanelDynamicPrevButton; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionPanelDynamicNextButton", function() { return /* reexport */ paneldynamic_next_btn_SurveyQuestionPanelDynamicNextButton; });
__webpack_require__.d(__webpack_exports__, "SurveyQuestionPanelDynamicProgressText", function() { return /* reexport */ paneldynamic_progress_text_SurveyQuestionPanelDynamicProgressText; });
__webpack_require__.d(__webpack_exports__, "SurveyNavigationButton", function() { return /* reexport */ survey_nav_button_SurveyNavigationButton; });
__webpack_require__.d(__webpack_exports__, "QuestionErrorComponent", function() { return /* reexport */ question_error_QuestionErrorComponent; });
__webpack_require__.d(__webpack_exports__, "MatrixRow", function() { return /* reexport */ row_MatrixRow; });
__webpack_require__.d(__webpack_exports__, "Skeleton", function() { return /* reexport */ skeleton_Skeleton; });
__webpack_require__.d(__webpack_exports__, "NotifierComponent", function() { return /* reexport */ notifier_NotifierComponent; });
__webpack_require__.d(__webpack_exports__, "ComponentsContainer", function() { return /* reexport */ components_container_ComponentsContainer; });
__webpack_require__.d(__webpack_exports__, "CharacterCounterComponent", function() { return /* reexport */ character_counter_CharacterCounterComponent; });
__webpack_require__.d(__webpack_exports__, "HeaderMobile", function() { return /* reexport */ header_HeaderMobile; });
__webpack_require__.d(__webpack_exports__, "HeaderCell", function() { return /* reexport */ header_HeaderCell; });
__webpack_require__.d(__webpack_exports__, "Header", function() { return /* reexport */ header_Header; });
__webpack_require__.d(__webpack_exports__, "SurveyLocStringViewer", function() { return /* reexport */ string_viewer_SurveyLocStringViewer; });
__webpack_require__.d(__webpack_exports__, "SurveyLocStringEditor", function() { return /* reexport */ string_editor_SurveyLocStringEditor; });
__webpack_require__.d(__webpack_exports__, "LoadingIndicatorComponent", function() { return /* reexport */ loading_indicator_LoadingIndicatorComponent; });
__webpack_require__.d(__webpack_exports__, "SvgBundleComponent", function() { return /* reexport */ svgbundle_SvgBundleComponent; });
__webpack_require__.d(__webpack_exports__, "PopupModal", function() { return /* reexport */ popup_modal_PopupModal; });
__webpack_require__.d(__webpack_exports__, "SurveyModel", function() { return /* reexport */ external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["SurveyModel"]; });
__webpack_require__.d(__webpack_exports__, "SurveyWindowModel", function() { return /* reexport */ external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["SurveyWindowModel"]; });
__webpack_require__.d(__webpack_exports__, "settings", function() { return /* reexport */ external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["settings"]; });
__webpack_require__.d(__webpack_exports__, "surveyLocalization", function() { return /* reexport */ external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["surveyLocalization"]; });
__webpack_require__.d(__webpack_exports__, "surveyStrings", function() { return /* reexport */ external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["surveyStrings"]; });
__webpack_require__.d(__webpack_exports__, "Model", function() { return /* reexport */ external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["SurveyModel"]; });

// NAMESPACE OBJECT: ./node_modules/preact/compat/dist/compat.module.js
var compat_module_namespaceObject = {};
__webpack_require__.r(compat_module_namespaceObject);
__webpack_require__.d(compat_module_namespaceObject, "Component", function() { return x; });
__webpack_require__.d(compat_module_namespaceObject, "Fragment", function() { return k; });
__webpack_require__.d(compat_module_namespaceObject, "createContext", function() { return J; });
__webpack_require__.d(compat_module_namespaceObject, "createElement", function() { return _; });
__webpack_require__.d(compat_module_namespaceObject, "createRef", function() { return b; });
__webpack_require__.d(compat_module_namespaceObject, "useCallback", function() { return hooks_module_q; });
__webpack_require__.d(compat_module_namespaceObject, "useContext", function() { return hooks_module_x; });
__webpack_require__.d(compat_module_namespaceObject, "useDebugValue", function() { return hooks_module_P; });
__webpack_require__.d(compat_module_namespaceObject, "useEffect", function() { return hooks_module_y; });
__webpack_require__.d(compat_module_namespaceObject, "useErrorBoundary", function() { return hooks_module_b; });
__webpack_require__.d(compat_module_namespaceObject, "useId", function() { return hooks_module_g; });
__webpack_require__.d(compat_module_namespaceObject, "useImperativeHandle", function() { return hooks_module_F; });
__webpack_require__.d(compat_module_namespaceObject, "useLayoutEffect", function() { return hooks_module_; });
__webpack_require__.d(compat_module_namespaceObject, "useMemo", function() { return hooks_module_T; });
__webpack_require__.d(compat_module_namespaceObject, "useReducer", function() { return hooks_module_h; });
__webpack_require__.d(compat_module_namespaceObject, "useRef", function() { return hooks_module_A; });
__webpack_require__.d(compat_module_namespaceObject, "useState", function() { return hooks_module_d; });
__webpack_require__.d(compat_module_namespaceObject, "Children", function() { return compat_module_O; });
__webpack_require__.d(compat_module_namespaceObject, "PureComponent", function() { return compat_module_N; });
__webpack_require__.d(compat_module_namespaceObject, "StrictMode", function() { return Cn; });
__webpack_require__.d(compat_module_namespaceObject, "Suspense", function() { return compat_module_P; });
__webpack_require__.d(compat_module_namespaceObject, "SuspenseList", function() { return compat_module_B; });
__webpack_require__.d(compat_module_namespaceObject, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", function() { return hn; });
__webpack_require__.d(compat_module_namespaceObject, "cloneElement", function() { return _n; });
__webpack_require__.d(compat_module_namespaceObject, "createFactory", function() { return dn; });
__webpack_require__.d(compat_module_namespaceObject, "createPortal", function() { return compat_module_$; });
__webpack_require__.d(compat_module_namespaceObject, "default", function() { return Rn; });
__webpack_require__.d(compat_module_namespaceObject, "findDOMNode", function() { return Sn; });
__webpack_require__.d(compat_module_namespaceObject, "flushSync", function() { return En; });
__webpack_require__.d(compat_module_namespaceObject, "forwardRef", function() { return compat_module_D; });
__webpack_require__.d(compat_module_namespaceObject, "hydrate", function() { return tn; });
__webpack_require__.d(compat_module_namespaceObject, "isElement", function() { return xn; });
__webpack_require__.d(compat_module_namespaceObject, "isFragment", function() { return mn; });
__webpack_require__.d(compat_module_namespaceObject, "isMemo", function() { return yn; });
__webpack_require__.d(compat_module_namespaceObject, "isValidElement", function() { return pn; });
__webpack_require__.d(compat_module_namespaceObject, "lazy", function() { return compat_module_z; });
__webpack_require__.d(compat_module_namespaceObject, "memo", function() { return compat_module_M; });
__webpack_require__.d(compat_module_namespaceObject, "render", function() { return nn; });
__webpack_require__.d(compat_module_namespaceObject, "startTransition", function() { return R; });
__webpack_require__.d(compat_module_namespaceObject, "unmountComponentAtNode", function() { return bn; });
__webpack_require__.d(compat_module_namespaceObject, "unstable_batchedUpdates", function() { return gn; });
__webpack_require__.d(compat_module_namespaceObject, "useDeferredValue", function() { return compat_module_w; });
__webpack_require__.d(compat_module_namespaceObject, "useInsertionEffect", function() { return compat_module_I; });
__webpack_require__.d(compat_module_namespaceObject, "useSyncExternalStore", function() { return compat_module_C; });
__webpack_require__.d(compat_module_namespaceObject, "useTransition", function() { return compat_module_k; });
__webpack_require__.d(compat_module_namespaceObject, "version", function() { return vn; });

// CONCATENATED MODULE: ./node_modules/preact/dist/preact.module.js
var preact_module_n,preact_module_l,preact_module_u,preact_module_t,preact_module_i,preact_module_r,preact_module_o,preact_module_e,f,preact_module_c,s,a,h,p={},v=[],y=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,d=Array.isArray;function w(n,l){for(var u in l)n[u]=l[u];return n}function g(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function _(l,u,t){var i,r,o,e={};for(o in u)"key"==o?i=u[o]:"ref"==o?r=u[o]:e[o]=u[o];if(arguments.length>2&&(e.children=arguments.length>3?preact_module_n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps)void 0===e[o]&&(e[o]=l.defaultProps[o]);return m(l,e,i,r,null)}function m(n,t,i,r,o){var e={type:n,props:t,key:i,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==o?++preact_module_u:o,__i:-1,__u:0};return null==o&&null!=preact_module_l.vnode&&preact_module_l.vnode(e),e}function b(){return{current:null}}function k(n){return n.children}function x(n,l){this.props=n,this.context=l}function S(n,l){if(null==l)return n.__?S(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?S(n):null}function C(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return C(n)}}function M(n){(!n.__d&&(n.__d=!0)&&preact_module_i.push(n)&&!$.__r++||preact_module_r!==preact_module_l.debounceRendering)&&((preact_module_r=preact_module_l.debounceRendering)||preact_module_o)($)}function $(){for(var n,u,t,r,o,f,c,s=1;preact_module_i.length;)preact_module_i.length>s&&preact_module_i.sort(preact_module_e),n=preact_module_i.shift(),s=preact_module_i.length,n.__d&&(t=void 0,o=(r=(u=n).__v).__e,f=[],c=[],u.__P&&((t=w({},r)).__v=r.__v+1,preact_module_l.vnode&&preact_module_l.vnode(t),j(u.__P,t,r,u.__n,u.__P.namespaceURI,32&r.__u?[o]:null,f,null==o?S(r):o,!!(32&r.__u),c),t.__v=r.__v,t.__.__k[t.__i]=t,z(f,t,c),t.__e!=o&&C(t)));$.__r=0}function I(n,l,u,t,i,r,o,e,f,c,s){var a,h,y,d,w,g,_=t&&t.__k||v,m=l.length;for(f=P(u,l,_,f,m),a=0;a<m;a++)null!=(y=u.__k[a])&&(h=-1===y.__i?p:_[y.__i]||p,y.__i=a,g=j(n,y,h,i,r,o,e,f,c,s),d=y.__e,y.ref&&h.ref!=y.ref&&(h.ref&&V(h.ref,null,y),s.push(y.ref,y.__c||d,y)),null==w&&null!=d&&(w=d),4&y.__u||h.__k===y.__k?f=A(y,f,n):"function"==typeof y.type&&void 0!==g?f=g:d&&(f=d.nextSibling),y.__u&=-7);return u.__e=w,f}function P(n,l,u,t,i){var r,o,e,f,c,s=u.length,a=s,h=0;for(n.__k=new Array(i),r=0;r<i;r++)null!=(o=l[r])&&"boolean"!=typeof o&&"function"!=typeof o?(f=r+h,(o=n.__k[r]="string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?m(null,o,null,null,null):d(o)?m(k,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?m(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o).__=n,o.__b=n.__b+1,e=null,-1!==(c=o.__i=L(o,u,f,a))&&(a--,(e=u[c])&&(e.__u|=2)),null==e||null===e.__v?(-1==c&&h--,"function"!=typeof o.type&&(o.__u|=4)):c!=f&&(c==f-1?h--:c==f+1?h++:(c>f?h--:h++,o.__u|=4))):n.__k[r]=null;if(a)for(r=0;r<s;r++)null!=(e=u[r])&&0==(2&e.__u)&&(e.__e==t&&(t=S(e)),q(e,e));return t}function A(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=A(t[i],l,u));return l}n.__e!=l&&(l&&n.type&&!u.contains(l)&&(l=S(n)),u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling}while(null!=l&&8==l.nodeType);return l}function H(n,l){return l=l||[],null==n||"boolean"==typeof n||(d(n)?n.some(function(n){H(n,l)}):l.push(n)),l}function L(n,l,u,t){var i,r,o=n.key,e=n.type,f=l[u];if(null===f||f&&o==f.key&&e===f.type&&0==(2&f.__u))return u;if(t>(null!=f&&0==(2&f.__u)?1:0))for(i=u-1,r=u+1;i>=0||r<l.length;){if(i>=0){if((f=l[i])&&0==(2&f.__u)&&o==f.key&&e===f.type)return i;i--}if(r<l.length){if((f=l[r])&&0==(2&f.__u)&&o==f.key&&e===f.type)return r;r++}}return-1}function T(n,l,u){"-"==l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||y.test(l)?u:u+"px"}function F(n,l,u,t,i){var r;n:if("style"==l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||T(n.style,l,u[l])}else if("o"==l[0]&&"n"==l[1])r=l!=(l=l.replace(f,"$1")),l=l.toLowerCase()in n||"onFocusOut"==l||"onFocusIn"==l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?t?u.u=t.u:(u.u=preact_module_c,n.addEventListener(l,r?a:s,r)):n.removeEventListener(l,r?a:s,r);else{if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!=l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u))}}function O(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=preact_module_c++;else if(u.t<t.u)return;return t(preact_module_l.event?preact_module_l.event(u):u)}}}function j(n,u,t,i,r,o,e,f,c,s){var a,h,p,v,y,_,m,b,S,C,M,$,P,A,H,L,T,F,O=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),o=[f=u.__e=t.__e]),(a=preact_module_l.__b)&&a(u);n:if("function"==typeof O)try{if(b=u.props,S="prototype"in O&&O.prototype.render,C=(a=O.contextType)&&i[a.__c],M=a?C?C.props.value:a.__:i,t.__c?m=(h=u.__c=t.__c).__=h.__E:(S?u.__c=h=new O(b,M):(u.__c=h=new x(b,M),h.constructor=O,h.render=B),C&&C.sub(h),h.props=b,h.state||(h.state={}),h.context=M,h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),S&&null==h.__s&&(h.__s=h.state),S&&null!=O.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=w({},h.__s)),w(h.__s,O.getDerivedStateFromProps(b,h.__s))),v=h.props,y=h.state,h.__v=u,p)S&&null==O.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),S&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(S&&null==O.getDerivedStateFromProps&&b!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(b,M),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(b,h.__s,M)||u.__v==t.__v)){for(u.__v!=t.__v&&(h.props=b,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.some(function(n){n&&(n.__=u)}),$=0;$<h._sb.length;$++)h.__h.push(h._sb[$]);h._sb=[],h.__h.length&&e.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(b,h.__s,M),S&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,y,_)})}if(h.context=M,h.props=b,h.__P=n,h.__e=!1,P=preact_module_l.__r,A=0,S){for(h.state=h.__s,h.__d=!1,P&&P(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[]}else do{h.__d=!1,P&&P(u),a=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++A<25);h.state=h.__s,null!=h.getChildContext&&(i=w(w({},i),h.getChildContext())),S&&!p&&null!=h.getSnapshotBeforeUpdate&&(_=h.getSnapshotBeforeUpdate(v,y)),T=(L=null!=a&&a.type===k&&null==a.key)?a.props.children:a,L&&(a.props.children=null),f=I(n,d(T)?T:[T],u,t,i,r,o,e,f,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&e.push(h),m&&(h.__E=h.__=null)}catch(n){if(u.__v=null,c||null!=o)if(n.then){for(u.__u|=c?160:128;f&&8==f.nodeType&&f.nextSibling;)f=f.nextSibling;o[o.indexOf(f)]=null,u.__e=f}else for(F=o.length;F--;)g(o[F]);else u.__e=t.__e,u.__k=t.__k;preact_module_l.__e(n,u,t)}else null==o&&u.__v==t.__v?(u.__k=t.__k,u.__e=t.__e):f=u.__e=N(t.__e,u,t,i,r,o,e,c,s);return(a=preact_module_l.diffed)&&a(u),128&u.__u?void 0:f}function z(n,u,t){for(var i=0;i<t.length;i++)V(t[i],t[++i],t[++i]);preact_module_l.__c&&preact_module_l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){preact_module_l.__e(n,u.__v)}})}function N(u,t,i,r,o,e,f,c,s){var a,h,v,y,w,_,m,b=i.props,k=t.props,x=t.type;if("svg"==x?o="http://www.w3.org/2000/svg":"math"==x?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=e)for(a=0;a<e.length;a++)if((w=e[a])&&"setAttribute"in w==!!x&&(x?w.localName==x:3==w.nodeType)){u=w,e[a]=null;break}if(null==u){if(null==x)return document.createTextNode(k);u=document.createElementNS(o,x,k.is&&k),c&&(preact_module_l.__m&&preact_module_l.__m(t,e),c=!1),e=null}if(null===x)b===k||c&&u.data===k||(u.data=k);else{if(e=e&&preact_module_n.call(u.childNodes),b=i.props||p,!c&&null!=e)for(b={},a=0;a<u.attributes.length;a++)b[(w=u.attributes[a]).name]=w.value;for(a in b)if(w=b[a],"children"==a);else if("dangerouslySetInnerHTML"==a)v=w;else if(!(a in k)){if("value"==a&&"defaultValue"in k||"checked"==a&&"defaultChecked"in k)continue;F(u,a,null,w,o)}for(a in k)w=k[a],"children"==a?y=w:"dangerouslySetInnerHTML"==a?h=w:"value"==a?_=w:"checked"==a?m=w:c&&"function"!=typeof w||b[a]===w||F(u,a,w,b[a],o);if(h)c||v&&(h.__html===v.__html||h.__html===u.innerHTML)||(u.innerHTML=h.__html),t.__k=[];else if(v&&(u.innerHTML=""),I("template"===t.type?u.content:u,d(y)?y:[y],t,i,r,"foreignObject"==x?"http://www.w3.org/1999/xhtml":o,e,f,e?e[0]:i.__k&&S(i,0),c,s),null!=e)for(a=e.length;a--;)g(e[a]);c||(a="value","progress"==x&&null==_?u.removeAttribute("value"):void 0!==_&&(_!==u[a]||"progress"==x&&!_||"option"==x&&_!==b[a])&&F(u,a,_,b[a],o),a="checked",void 0!==m&&m!==u[a]&&F(u,a,m,b[a],o))}return u}function V(n,u,t){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==u||(n.__u=n(u))}else n.current=u}catch(n){preact_module_l.__e(n,t)}}function q(n,u,t){var i,r;if(preact_module_l.unmount&&preact_module_l.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||V(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){preact_module_l.__e(n,u)}i.base=i.__P=null}if(i=n.__k)for(r=0;r<i.length;r++)i[r]&&q(i[r],u,t||"function"!=typeof n.type);t||g(n.__e),n.__c=n.__=n.__e=void 0}function B(n,l,u){return this.constructor(n,u)}function D(u,t,i){var r,o,e,f;t==document&&(t=document.documentElement),preact_module_l.__&&preact_module_l.__(u,t),o=(r="function"==typeof i)?null:i&&i.__k||t.__k,e=[],f=[],j(t,u=(!r&&i||t).__k=_(k,null,[u]),o||p,p,t.namespaceURI,!r&&i?[i]:o?null:t.firstChild?preact_module_n.call(t.childNodes):null,e,!r&&i?i:o?o.__e:t.firstChild,r,f),z(e,u,f)}function E(n,l){D(n,l,E)}function G(l,u,t){var i,r,o,e,f=w({},l.props);for(o in l.type&&l.type.defaultProps&&(e=l.type.defaultProps),u)"key"==o?i=u[o]:"ref"==o?r=u[o]:f[o]=void 0===u[o]&&void 0!==e?e[o]:u[o];return arguments.length>2&&(f.children=arguments.length>3?preact_module_n.call(arguments,2):t),m(l.type,f,i||l.key,r||l.ref,null)}function J(n){function l(n){var u,t;return this.getChildContext||(u=new Set,(t={})[l.__c]=this,this.getChildContext=function(){return t},this.componentWillUnmount=function(){u=null},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.forEach(function(n){n.__e=!0,M(n)})},this.sub=function(n){u.add(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u&&u.delete(n),l&&l.call(n)}}),n.children}return l.__c="__cC"+h++,l.__=n,l.Provider=l.__l=(l.Consumer=function(n,l){return n.children(l)}).contextType=l,l}preact_module_n=v.slice,preact_module_l={__e:function(n,l,u,t){for(var i,r,o;l=l.__;)if((i=l.__c)&&!i.__)try{if((r=i.constructor)&&null!=r.getDerivedStateFromError&&(i.setState(r.getDerivedStateFromError(n)),o=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),o=i.__d),o)return i.__E=i}catch(l){n=l}throw n}},preact_module_u=0,preact_module_t=function(n){return null!=n&&null==n.constructor},x.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=w({},this.state),"function"==typeof n&&(n=n(w({},u),this.props)),n&&w(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),M(this))},x.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),M(this))},x.prototype.render=k,preact_module_i=[],preact_module_o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,preact_module_e=function(n,l){return n.__v.__b-l.__v.__b},$.__r=0,f=/(PointerCapture)$|Capture$/i,preact_module_c=0,s=O(!1),a=O(!0),h=0;
//# sourceMappingURL=preact.module.js.map

// CONCATENATED MODULE: ./node_modules/preact/hooks/dist/hooks.module.js
var hooks_module_t,hooks_module_r,hooks_module_u,hooks_module_i,hooks_module_o=0,hooks_module_f=[],hooks_module_c=preact_module_l,hooks_module_e=hooks_module_c.__b,hooks_module_a=hooks_module_c.__r,hooks_module_v=hooks_module_c.diffed,hooks_module_l=hooks_module_c.__c,hooks_module_m=hooks_module_c.unmount,hooks_module_s=hooks_module_c.__;function hooks_module_p(n,t){hooks_module_c.__h&&hooks_module_c.__h(hooks_module_r,n,hooks_module_o||t),hooks_module_o=0;var u=hooks_module_r.__H||(hooks_module_r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function hooks_module_d(n){return hooks_module_o=1,hooks_module_h(hooks_module_D,n)}function hooks_module_h(n,u,i){var o=hooks_module_p(hooks_module_t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):hooks_module_D(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}))}],o.__c=hooks_module_r,!hooks_module_r.__f)){var f=function(n,t,r){if(!o.__c.__H)return!0;var u=o.__c.__H.__.filter(function(n){return!!n.__c});if(u.every(function(n){return!n.__N}))return!c||c.call(this,n,t,r);var i=o.__c.props!==n;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0)}}),c&&c.call(this,n,t,r)||i};hooks_module_r.__f=!0;var c=hooks_module_r.shouldComponentUpdate,e=hooks_module_r.componentWillUpdate;hooks_module_r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u}e&&e.call(this,n,t,r)},hooks_module_r.shouldComponentUpdate=f}return o.__N||o.__}function hooks_module_y(n,u){var i=hooks_module_p(hooks_module_t++,3);!hooks_module_c.__s&&hooks_module_C(i.__H,u)&&(i.__=n,i.u=u,hooks_module_r.__H.__h.push(i))}function hooks_module_(n,u){var i=hooks_module_p(hooks_module_t++,4);!hooks_module_c.__s&&hooks_module_C(i.__H,u)&&(i.__=n,i.u=u,hooks_module_r.__h.push(i))}function hooks_module_A(n){return hooks_module_o=5,hooks_module_T(function(){return{current:n}},[])}function hooks_module_F(n,t,r){hooks_module_o=6,hooks_module_(function(){if("function"==typeof n){var r=n(t());return function(){n(null),r&&"function"==typeof r&&r()}}if(n)return n.current=t(),function(){return n.current=null}},null==r?r:r.concat(n))}function hooks_module_T(n,r){var u=hooks_module_p(hooks_module_t++,7);return hooks_module_C(u.__H,r)&&(u.__=n(),u.__H=r,u.__h=n),u.__}function hooks_module_q(n,t){return hooks_module_o=8,hooks_module_T(function(){return n},t)}function hooks_module_x(n){var u=hooks_module_r.context[n.__c],i=hooks_module_p(hooks_module_t++,9);return i.c=n,u?(null==i.__&&(i.__=!0,u.sub(hooks_module_r)),u.props.value):n.__}function hooks_module_P(n,t){hooks_module_c.useDebugValue&&hooks_module_c.useDebugValue(t?t(n):n)}function hooks_module_b(n){var u=hooks_module_p(hooks_module_t++,10),i=hooks_module_d();return u.__=n,hooks_module_r.componentDidCatch||(hooks_module_r.componentDidCatch=function(n,t){u.__&&u.__(n,t),i[1](n)}),[i[0],function(){i[1](void 0)}]}function hooks_module_g(){var n=hooks_module_p(hooks_module_t++,11);if(!n.__){for(var u=hooks_module_r.__v;null!==u&&!u.__m&&null!==u.__;)u=u.__;var i=u.__m||(u.__m=[0,0]);n.__="P"+i[0]+"-"+i[1]++}return n.__}function hooks_module_j(){for(var n;n=hooks_module_f.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(hooks_module_z),n.__H.__h.forEach(hooks_module_B),n.__H.__h=[]}catch(t){n.__H.__h=[],hooks_module_c.__e(t,n.__v)}}hooks_module_c.__b=function(n){hooks_module_r=null,hooks_module_e&&hooks_module_e(n)},hooks_module_c.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),hooks_module_s&&hooks_module_s(n,t)},hooks_module_c.__r=function(n){hooks_module_a&&hooks_module_a(n),hooks_module_t=0;var i=(hooks_module_r=n.__c).__H;i&&(hooks_module_u===hooks_module_r?(i.__h=[],hooks_module_r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(i.__h.forEach(hooks_module_z),i.__h.forEach(hooks_module_B),i.__h=[],hooks_module_t=0)),hooks_module_u=hooks_module_r},hooks_module_c.diffed=function(n){hooks_module_v&&hooks_module_v(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==hooks_module_f.push(t)&&hooks_module_i===hooks_module_c.requestAnimationFrame||((hooks_module_i=hooks_module_c.requestAnimationFrame)||hooks_module_w)(hooks_module_j)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0})),hooks_module_u=hooks_module_r=null},hooks_module_c.__c=function(n,t){t.some(function(n){try{n.__h.forEach(hooks_module_z),n.__h=n.__h.filter(function(n){return!n.__||hooks_module_B(n)})}catch(r){t.some(function(n){n.__h&&(n.__h=[])}),t=[],hooks_module_c.__e(r,n.__v)}}),hooks_module_l&&hooks_module_l(n,t)},hooks_module_c.unmount=function(n){hooks_module_m&&hooks_module_m(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{hooks_module_z(n)}catch(n){t=n}}),r.__H=void 0,t&&hooks_module_c.__e(t,r.__v))};var hooks_module_k="function"==typeof requestAnimationFrame;function hooks_module_w(n){var t,r=function(){clearTimeout(u),hooks_module_k&&cancelAnimationFrame(t),setTimeout(n)},u=setTimeout(r,100);hooks_module_k&&(t=requestAnimationFrame(r))}function hooks_module_z(n){var t=hooks_module_r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),hooks_module_r=t}function hooks_module_B(n){var t=hooks_module_r;n.__c=n.__(),hooks_module_r=t}function hooks_module_C(n,t){return!n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function hooks_module_D(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map

// CONCATENATED MODULE: ./node_modules/preact/compat/dist/compat.module.js
function compat_module_g(n,t){for(var e in t)n[e]=t[e];return n}function compat_module_E(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function compat_module_C(n,t){var e=t(),r=hooks_module_d({t:{__:e,u:t}}),u=r[0].t,o=r[1];return hooks_module_(function(){u.__=e,u.u=t,compat_module_x(u)&&o({t:u})},[n,e,t]),hooks_module_y(function(){return compat_module_x(u)&&o({t:u}),n(function(){compat_module_x(u)&&o({t:u})})},[n]),e}function compat_module_x(n){var t,e,r=n.u,u=n.__;try{var o=r();return!((t=u)===(e=o)&&(0!==t||1/t==1/e)||t!=t&&e!=e)}catch(n){return!0}}function R(n){n()}function compat_module_w(n){return n}function compat_module_k(){return[!1,R]}var compat_module_I=hooks_module_;function compat_module_N(n,t){this.props=n,this.context=t}function compat_module_M(n,e){function r(n){var t=this.props.ref,r=t==n.ref;return!r&&t&&(t.call?t(null):t.current=null),e?!e(this.props,n)||!r:compat_module_E(this.props,n)}function u(e){return this.shouldComponentUpdate=r,_(n,e)}return u.displayName="Memo("+(n.displayName||n.name)+")",u.prototype.isReactComponent=!0,u.__f=!0,u}(compat_module_N.prototype=new x).isPureReactComponent=!0,compat_module_N.prototype.shouldComponentUpdate=function(n,t){return compat_module_E(this.props,n)||compat_module_E(this.state,t)};var compat_module_T=preact_module_l.__b;preact_module_l.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),compat_module_T&&compat_module_T(n)};var compat_module_A="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function compat_module_D(n){function t(t){var e=compat_module_g({},t);return delete e.ref,n(e,t.ref||null)}return t.$$typeof=compat_module_A,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var compat_module_L=function(n,t){return null==n?null:H(H(n).map(t))},compat_module_O={map:compat_module_L,forEach:compat_module_L,count:function(n){return n?H(n).length:0},only:function(n){var t=H(n);if(1!==t.length)throw"Children.only";return t[0]},toArray:H},compat_module_F=preact_module_l.__e;preact_module_l.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);compat_module_F(n,t,e,r)};var U=preact_module_l.unmount;function compat_module_V(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),n.__c.__H=null),null!=(n=compat_module_g({},n)).__c&&(n.__c.__P===e&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return compat_module_V(n,t,e)})),n}function W(n,t,e){return n&&e&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return W(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.appendChild(n.__e),n.__c.__e=!0,n.__c.__P=e)),n}function compat_module_P(){this.__u=0,this.o=null,this.__b=null}function compat_module_j(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function compat_module_z(n){var e,r,u;function o(o){if(e||(e=n()).then(function(n){r=n.default||n},function(n){u=n}),u)throw u;if(!r)throw e;return _(r,o)}return o.displayName="Lazy",o.__f=!0,o}function compat_module_B(){this.i=null,this.l=null}preact_module_l.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&32&n.__u&&(n.type=null),U&&U(n)},(compat_module_P.prototype=new x).__c=function(n,t){var e=t.__c,r=this;null==r.o&&(r.o=[]),r.o.push(e);var u=compat_module_j(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(c):c())};e.__R=i;var c=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=W(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__a:r.__b=null});t=r.o.pop();)t.forceUpdate()}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i)},compat_module_P.prototype.componentWillUnmount=function(){this.o=[]},compat_module_P.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=compat_module_V(this.__b,r,o.__O=o.__P)}this.__b=null}var i=e.__a&&_(k,null,n.fallback);return i&&(i.__u&=-33),[_(k,null,e.__a?null:n.children),i]};var compat_module_H=function(n,t,e){if(++e[1]===e[0]&&n.l.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.l.size))for(e=n.i;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.i=e=e[2]}};function Z(n){return this.getChildContext=function(){return n.context},n.children}function Y(n){var e=this,r=n.h;e.componentWillUnmount=function(){D(null,e.v),e.v=null,e.h=null},e.h&&e.h!==r&&e.componentWillUnmount(),e.v||(e.h=r,e.v={nodeType:1,parentNode:r,childNodes:[],contains:function(){return!0},appendChild:function(n){this.childNodes.push(n),e.h.appendChild(n)},insertBefore:function(n,t){this.childNodes.push(n),e.h.insertBefore(n,t)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.h.removeChild(n)}}),D(_(Z,{context:e.context},n.__v),e.v)}function compat_module_$(n,e){var r=_(Y,{__v:n,h:e});return r.containerInfo=e,r}(compat_module_B.prototype=new x).__a=function(n){var t=this,e=compat_module_j(t.__v),r=t.l.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),compat_module_H(t,n,r)):u()};e?e(o):o()}},compat_module_B.prototype.render=function(n){this.i=null,this.l=new Map;var t=H(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.l.set(t[e],this.i=[1,0,this.i]);return n.children},compat_module_B.prototype.componentDidUpdate=compat_module_B.prototype.componentDidMount=function(){var n=this;this.l.forEach(function(t,e){compat_module_H(n,e,t)})};var compat_module_q="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,compat_module_G=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,compat_module_J=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,K=/[A-Z0-9]/g,Q="undefined"!=typeof document,X=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(n)};function nn(n,t,e){return null==t.__k&&(t.textContent=""),D(n,t),"function"==typeof e&&e(),n?n.__c:null}function tn(n,t,e){return E(n,t),"function"==typeof e&&e(),n?n.__c:null}x.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(x.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:n})}})});var en=preact_module_l.event;function rn(){}function un(){return this.cancelBubble}function on(){return this.defaultPrevented}preact_module_l.event=function(n){return en&&(n=en(n)),n.persist=rn,n.isPropagationStopped=un,n.isDefaultPrevented=on,n.nativeEvent=n};var cn,ln={enumerable:!1,configurable:!0,get:function(){return this.class}},fn=preact_module_l.vnode;preact_module_l.vnode=function(n){"string"==typeof n.type&&function(n){var t=n.props,e=n.type,u={},o=-1===e.indexOf("-");for(var i in t){var c=t[i];if(!("value"===i&&"defaultValue"in t&&null==c||Q&&"children"===i&&"noscript"===e||"class"===i||"className"===i)){var l=i.toLowerCase();"defaultValue"===i&&"value"in t&&null==t.value?i="value":"download"===i&&!0===c?c="":"translate"===l&&"no"===c?c=!1:"o"===l[0]&&"n"===l[1]?"ondoubleclick"===l?i="ondblclick":"onchange"!==l||"input"!==e&&"textarea"!==e||X(t.type)?"onfocus"===l?i="onfocusin":"onblur"===l?i="onfocusout":compat_module_J.test(i)&&(i=l):l=i="oninput":o&&compat_module_G.test(i)?i=i.replace(K,"-$&").toLowerCase():null===c&&(c=void 0),"oninput"===l&&u[i=l]&&(i="oninputCapture"),u[i]=c}}"select"==e&&u.multiple&&Array.isArray(u.value)&&(u.value=H(t.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value)})),"select"==e&&null!=u.defaultValue&&(u.value=H(t.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value})),t.class&&!t.className?(u.class=t.class,Object.defineProperty(u,"className",ln)):(t.className&&!t.class||t.class&&t.className)&&(u.class=u.className=t.className),n.props=u}(n),n.$$typeof=compat_module_q,fn&&fn(n)};var an=preact_module_l.__r;preact_module_l.__r=function(n){an&&an(n),cn=n.__c};var sn=preact_module_l.diffed;preact_module_l.diffed=function(n){sn&&sn(n);var t=n.props,e=n.__e;null!=e&&"textarea"===n.type&&"value"in t&&t.value!==e.value&&(e.value=null==t.value?"":t.value),cn=null};var hn={ReactCurrentDispatcher:{current:{readContext:function(n){return cn.__n[n.__c].props.value},useCallback:hooks_module_q,useContext:hooks_module_x,useDebugValue:hooks_module_P,useDeferredValue:compat_module_w,useEffect:hooks_module_y,useId:hooks_module_g,useImperativeHandle:hooks_module_F,useInsertionEffect:compat_module_I,useLayoutEffect:hooks_module_,useMemo:hooks_module_T,useReducer:hooks_module_h,useRef:hooks_module_A,useState:hooks_module_d,useSyncExternalStore:compat_module_C,useTransition:compat_module_k}}},vn="18.3.1";function dn(n){return _.bind(null,n)}function pn(n){return!!n&&n.$$typeof===compat_module_q}function mn(n){return pn(n)&&n.type===k}function yn(n){return!!n&&!!n.displayName&&("string"==typeof n.displayName||n.displayName instanceof String)&&n.displayName.startsWith("Memo(")}function _n(n){return pn(n)?G.apply(null,arguments):n}function bn(n){return!!n.__k&&(D(null,n),!0)}function Sn(n){return n&&(n.base||1===n.nodeType&&n)||null}var gn=function(n,t){return n(t)},En=function(n,t){return n(t)},Cn=k,xn=pn,Rn={useState:hooks_module_d,useId:hooks_module_g,useReducer:hooks_module_h,useEffect:hooks_module_y,useLayoutEffect:hooks_module_,useInsertionEffect:compat_module_I,useTransition:compat_module_k,useDeferredValue:compat_module_w,useSyncExternalStore:compat_module_C,startTransition:R,useRef:hooks_module_A,useImperativeHandle:hooks_module_F,useMemo:hooks_module_T,useCallback:hooks_module_q,useContext:hooks_module_x,useDebugValue:hooks_module_P,version:"18.3.1",Children:compat_module_O,render:nn,hydrate:tn,unmountComponentAtNode:bn,createPortal:compat_module_$,createElement:_,createContext:J,createFactory:dn,cloneElement:_n,createRef:b,Fragment:k,isValidElement:pn,isElement:xn,isFragment:mn,isMemo:yn,findDOMNode:Sn,Component:x,PureComponent:compat_module_N,memo:compat_module_M,forwardRef:compat_module_D,flushSync:En,unstable_batchedUpdates:gn,StrictMode:Cn,Suspense:compat_module_P,SuspenseList:compat_module_B,lazy:compat_module_z,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:hn};
//# sourceMappingURL=compat.module.js.map

// EXTERNAL MODULE: external {"root":"Survey","commonjs2":"survey-core","commonjs":"survey-core","amd":"survey-core"}
var external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_ = __webpack_require__("survey-core");

// CONCATENATED MODULE: ./packages/survey-react-ui/src/element-factory.tsx
var ReactElementFactory = /** @class */ (function () {
    function ReactElementFactory() {
        this.creatorHash = {};
    }
    ReactElementFactory.prototype.registerElement = function (elementType, elementCreator) {
        this.creatorHash[elementType] = elementCreator;
    };
    ReactElementFactory.prototype.getAllTypes = function () {
        var result = new Array();
        for (var key in this.creatorHash) {
            result.push(key);
        }
        return result.sort();
    };
    ReactElementFactory.prototype.isElementRegistered = function (elementType) {
        return !!this.creatorHash[elementType];
    };
    ReactElementFactory.prototype.createElement = function (elementType, params) {
        var creator = this.creatorHash[elementType];
        if (creator == null)
            return null;
        return creator(params);
    };
    ReactElementFactory.Instance = new ReactElementFactory();
    return ReactElementFactory;
}());


// CONCATENATED MODULE: ./packages/survey-react-ui/src/reactsurveymodel.tsx


var reactsurveymodel_ReactSurveyElementsWrapper = /** @class */ (function () {
    function ReactSurveyElementsWrapper() {
    }
    ReactSurveyElementsWrapper.wrapRow = function (survey, element, row) {
        var componentName = survey.getRowWrapperComponentName(row);
        var componentData = survey.getRowWrapperComponentData(row);
        return ReactElementFactory.Instance.createElement(componentName, {
            element: element,
            row: row,
            componentData: componentData,
        });
    };
    ReactSurveyElementsWrapper.wrapElement = function (survey, element, question) {
        var componentName = survey.getElementWrapperComponentName(question);
        var componentData = survey.getElementWrapperComponentData(question);
        return ReactElementFactory.Instance.createElement(componentName, {
            element: element,
            question: question,
            componentData: componentData,
        });
    };
    ReactSurveyElementsWrapper.wrapQuestionContent = function (survey, element, question) {
        var componentName = survey.getQuestionContentWrapperComponentName(question);
        var componentData = survey.getElementWrapperComponentData(question);
        return ReactElementFactory.Instance.createElement(componentName, {
            element: element,
            question: question,
            componentData: componentData,
        });
    };
    ReactSurveyElementsWrapper.wrapItemValue = function (survey, element, question, item) {
        var componentName = survey.getItemValueWrapperComponentName(item, question);
        var componentData = survey.getItemValueWrapperComponentData(item, question);
        return ReactElementFactory.Instance.createElement(componentName, {
            key: element === null || element === void 0 ? void 0 : element.key,
            element: element,
            question: question,
            item: item,
            componentData: componentData,
        });
    };
    ReactSurveyElementsWrapper.wrapMatrixCell = function (survey, element, cell, reason) {
        if (reason === void 0) { reason = "cell"; }
        var componentName = survey.getElementWrapperComponentName(cell, reason);
        var componentData = survey.getElementWrapperComponentData(cell, reason);
        return ReactElementFactory.Instance.createElement(componentName, {
            element: element,
            cell: cell,
            componentData: componentData,
        });
    };
    return ReactSurveyElementsWrapper;
}());

external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["SurveyModel"].platform = "react";

// CONCATENATED MODULE: ./packages/survey-react-ui/src/reactquestion_element.tsx
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var reactquestion_element_SurveyElementBase = /** @class */ (function (_super) {
    __extends(SurveyElementBase, _super);
    function SurveyElementBase(props) {
        var _this = _super.call(this, props) || this;
        _this._allowComponentUpdate = true;
        _this.prevStateElements = [];
        return _this;
    }
    SurveyElementBase.renderLocString = function (locStr, style, key) {
        if (style === void 0) { style = null; }
        return ReactElementFactory.Instance.createElement(locStr.renderAs, {
            locStr: locStr.renderAsData,
            style: style,
            key: key,
        });
    };
    SurveyElementBase.renderQuestionDescription = function (question) {
        var descriptionText = SurveyElementBase.renderLocString(question.locDescription);
        return _("div", { style: question.hasDescription ? undefined : { display: "none" }, id: question.ariaDescriptionId, className: question.cssDescription }, descriptionText);
    };
    SurveyElementBase.prototype.componentDidMount = function () {
        this.makeBaseElementsReact();
    };
    SurveyElementBase.prototype.componentWillUnmount = function () {
        this.unMakeBaseElementsReact();
        this.disableStateElementsRerenderEvent(this.getStateElements());
    };
    SurveyElementBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _a;
        this.makeBaseElementsReact();
        var stateElements = this.getStateElements();
        this.disableStateElementsRerenderEvent(((_a = this.prevStateElements) !== null && _a !== void 0 ? _a : []).filter(function (el) { return !stateElements.includes(el); }));
        this.prevStateElements = [];
        this.getStateElements().forEach(function (el) {
            el.afterRerender();
        });
    };
    SurveyElementBase.prototype.allowComponentUpdate = function () {
        this._allowComponentUpdate = true;
        this.forceUpdate();
    };
    SurveyElementBase.prototype.denyComponentUpdate = function () {
        this._allowComponentUpdate = false;
    };
    SurveyElementBase.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (this._allowComponentUpdate) {
            this.unMakeBaseElementsReact();
            this.prevStateElements = this.getStateElements();
        }
        return this._allowComponentUpdate;
    };
    SurveyElementBase.prototype.render = function () {
        if (!this.canRender()) {
            return null;
        }
        this.startEndRendering(1);
        var res = this.renderElement();
        this.startEndRendering(-1);
        if (!!res) {
            res = this.wrapElement(res);
        }
        this.changedStatePropNameValue = undefined;
        return res;
    };
    SurveyElementBase.prototype.wrapElement = function (element) {
        return element;
    };
    Object.defineProperty(SurveyElementBase.prototype, "isRendering", {
        get: function () {
            var stateEls = this.getRenderedElements();
            for (var _i = 0, stateEls_1 = stateEls; _i < stateEls_1.length; _i++) {
                var stateEl = stateEls_1[_i];
                if (stateEl.reactRendering > 0)
                    return true;
            }
            return false;
        },
        enumerable: false,
        configurable: true
    });
    SurveyElementBase.prototype.getRenderedElements = function () {
        return this.getStateElements();
    };
    SurveyElementBase.prototype.startEndRendering = function (val) {
        var stateEls = this.getRenderedElements();
        for (var _i = 0, stateEls_2 = stateEls; _i < stateEls_2.length; _i++) {
            var stateEl = stateEls_2[_i];
            if (!stateEl.reactRendering)
                stateEl.reactRendering = 0;
            stateEl.reactRendering += val;
        }
    };
    SurveyElementBase.prototype.canRender = function () {
        return true;
    };
    SurveyElementBase.prototype.renderElement = function () {
        return null;
    };
    Object.defineProperty(SurveyElementBase.prototype, "changedStatePropName", {
        get: function () {
            return this.changedStatePropNameValue;
        },
        enumerable: false,
        configurable: true
    });
    SurveyElementBase.prototype.makeBaseElementsReact = function () {
        var els = this.getStateElements();
        for (var i = 0; i < els.length; i++) {
            els[i].enableOnElementRerenderedEvent();
            this.makeBaseElementReact(els[i]);
        }
    };
    SurveyElementBase.prototype.unMakeBaseElementsReact = function () {
        var els = this.getStateElements();
        for (var i = 0; i < els.length; i++) {
            this.unMakeBaseElementReact(els[i]);
        }
    };
    SurveyElementBase.prototype.disableStateElementsRerenderEvent = function (els) {
        els.forEach(function (el) {
            el.disableOnElementRerenderedEvent();
        });
    };
    SurveyElementBase.prototype.getStateElements = function () {
        var el = this.getStateElement();
        return !!el ? [el] : [];
    };
    SurveyElementBase.prototype.getStateElement = function () {
        return null;
    };
    Object.defineProperty(SurveyElementBase.prototype, "isDisplayMode", {
        get: function () {
            var props = this.props;
            return props.isDisplayMode || false;
        },
        enumerable: false,
        configurable: true
    });
    SurveyElementBase.prototype.renderLocString = function (locStr, style, key) {
        if (style === void 0) { style = null; }
        return SurveyElementBase.renderLocString(locStr, style, key);
    };
    SurveyElementBase.prototype.canMakeReact = function (stateElement) {
        return !!stateElement && !!stateElement.iteratePropertiesHash;
    };
    SurveyElementBase.prototype.makeBaseElementReact = function (stateElement) {
        var _this = this;
        if (!this.canMakeReact(stateElement))
            return;
        stateElement.iteratePropertiesHash(function (hash, key) {
            if (!_this.canUsePropInState(key))
                return;
            var val = hash[key];
            if (Array.isArray(val)) {
                var val = val;
                val["onArrayChanged"] = function (arrayChanges) {
                    if (_this.isRendering)
                        return;
                    _this.changedStatePropNameValue = key;
                    _this.setState(function (state) {
                        var newState = {};
                        newState[key] = val;
                        return newState;
                    });
                };
            }
        });
        stateElement.setPropertyValueCoreHandler = function (hash, key, val) {
            if (hash[key] !== val) {
                hash[key] = val;
                if (!_this.canUsePropInState(key))
                    return;
                if (_this.isRendering)
                    return;
                _this.changedStatePropNameValue = key;
                _this.setState(function (state) {
                    var newState = {};
                    newState[key] = val;
                    return newState;
                });
            }
        };
    };
    SurveyElementBase.prototype.canUsePropInState = function (key) {
        return true;
    };
    SurveyElementBase.prototype.unMakeBaseElementReact = function (stateElement) {
        if (!this.canMakeReact(stateElement))
            return;
        stateElement.setPropertyValueCoreHandler = undefined;
        stateElement.iteratePropertiesHash(function (hash, key) {
            var val = hash[key];
            if (Array.isArray(val)) {
                var val = val;
                val["onArrayChanged"] = function () { };
            }
        });
    };
    return SurveyElementBase;
}(x));

var ReactSurveyElement = /** @class */ (function (_super) {
    __extends(ReactSurveyElement, _super);
    function ReactSurveyElement(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(ReactSurveyElement.prototype, "cssClasses", {
        get: function () {
            return this.props.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    return ReactSurveyElement;
}(reactquestion_element_SurveyElementBase));

var reactquestion_element_SurveyQuestionElementBase = /** @class */ (function (_super) {
    __extends(SurveyQuestionElementBase, _super);
    function SurveyQuestionElementBase(props) {
        return _super.call(this, props) || this;
    }
    SurveyQuestionElementBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        this.updateDomElement();
    };
    SurveyQuestionElementBase.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.updateDomElement();
    };
    SurveyQuestionElementBase.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        if (!!this.questionBase) {
            var contentElement = this.content || this.control;
            this.questionBase.beforeDestroyQuestionElement(contentElement);
            if (!!contentElement) {
                contentElement.removeAttribute("data-rendered");
            }
        }
    };
    SurveyQuestionElementBase.prototype.updateDomElement = function () {
        var contentElement = this.content || this.control;
        if (!!contentElement) {
            if (contentElement.getAttribute("data-rendered") !== "r") {
                contentElement.setAttribute("data-rendered", "r");
                this.questionBase.afterRenderQuestionElement(contentElement);
            }
        }
    };
    Object.defineProperty(SurveyQuestionElementBase.prototype, "questionBase", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionElementBase.prototype.getRenderedElements = function () {
        return [this.questionBase];
    };
    Object.defineProperty(SurveyQuestionElementBase.prototype, "creator", {
        get: function () {
            return this.props.creator;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionElementBase.prototype.canRender = function () {
        return !!this.questionBase && !!this.creator;
    };
    SurveyQuestionElementBase.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (!_super.prototype.shouldComponentUpdate.call(this, nextProps, nextState))
            return false;
        return (!this.questionBase.customWidget ||
            !!this.questionBase.customWidgetData.isNeedRender ||
            !!this.questionBase.customWidget.widgetJson.isDefaultRender ||
            !!this.questionBase.customWidget.widgetJson.render);
    };
    Object.defineProperty(SurveyQuestionElementBase.prototype, "isDisplayMode", {
        get: function () {
            var props = this.props;
            return (props.isDisplayMode ||
                (!!this.questionBase && this.questionBase.isInputReadOnly) || false);
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionElementBase.prototype.wrapCell = function (cell, element, reason) {
        if (!reason) {
            return element;
        }
        var survey = this.questionBase
            .survey;
        var wrapper = null;
        if (survey) {
            wrapper = reactsurveymodel_ReactSurveyElementsWrapper.wrapMatrixCell(survey, element, cell, reason);
        }
        return wrapper !== null && wrapper !== void 0 ? wrapper : element;
    };
    SurveyQuestionElementBase.prototype.setControl = function (element) {
        if (!!element) {
            this.control = element;
        }
    };
    SurveyQuestionElementBase.prototype.setContent = function (element) {
        if (!!element) {
            this.content = element;
        }
    };
    return SurveyQuestionElementBase;
}(reactquestion_element_SurveyElementBase));

var reactquestion_element_SurveyQuestionUncontrolledElement = /** @class */ (function (_super) {
    __extends(SurveyQuestionUncontrolledElement, _super);
    function SurveyQuestionUncontrolledElement(props) {
        var _this = _super.call(this, props) || this;
        _this.updateValueOnEvent = function (event) {
            if (!external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["Helpers"].isTwoValueEquals(_this.questionBase.value, event.target.value, false, true, false)) {
                _this.setValueCore(event.target.value);
            }
        };
        _this.updateValueOnEvent = _this.updateValueOnEvent.bind(_this);
        return _this;
    }
    Object.defineProperty(SurveyQuestionUncontrolledElement.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionUncontrolledElement.prototype.setValueCore = function (newValue) {
        this.questionBase.value = newValue;
    };
    SurveyQuestionUncontrolledElement.prototype.getValueCore = function () {
        return this.questionBase.value;
    };
    SurveyQuestionUncontrolledElement.prototype.updateDomElement = function () {
        if (!!this.control) {
            var control = this.control;
            var newValue = this.getValueCore();
            if (!external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["Helpers"].isTwoValueEquals(newValue, control.value, false, true, false)) {
                control.value = this.getValue(newValue);
            }
        }
        _super.prototype.updateDomElement.call(this);
    };
    SurveyQuestionUncontrolledElement.prototype.getValue = function (val) {
        if (external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["Helpers"].isValueEmpty(val))
            return "";
        return val;
    };
    return SurveyQuestionUncontrolledElement;
}(reactquestion_element_SurveyQuestionElementBase));


// CONCATENATED MODULE: ./packages/survey-react-ui/src/element.tsx
var element_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var element_SurveyRowElement = /** @class */ (function (_super) {
    element_extends(SurveyRowElement, _super);
    function SurveyRowElement(props) {
        var _this = _super.call(this, props) || this;
        _this.element.cssClasses;
        _this.rootRef = b();
        return _this;
    }
    SurveyRowElement.prototype.getStateElement = function () {
        return this.element;
    };
    Object.defineProperty(SurveyRowElement.prototype, "element", {
        get: function () {
            return this.props.element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyRowElement.prototype, "index", {
        get: function () {
            return this.props.index;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyRowElement.prototype, "row", {
        get: function () {
            return this.props.row;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyRowElement.prototype, "survey", {
        get: function () {
            return this.props.survey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyRowElement.prototype, "creator", {
        get: function () {
            return this.props.creator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyRowElement.prototype, "css", {
        get: function () {
            return this.props.css;
        },
        enumerable: false,
        configurable: true
    });
    SurveyRowElement.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        if (this.rootRef.current) {
            (this.element).setWrapperElement(this.rootRef.current);
        }
    };
    SurveyRowElement.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.element.setWrapperElement(undefined);
    };
    SurveyRowElement.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (!_super.prototype.shouldComponentUpdate.call(this, nextProps, nextState))
            return false;
        if (nextProps.element !== this.element) {
            if (nextProps.element) {
                nextProps.element.setWrapperElement(this.rootRef.current);
            }
            if (this.element) {
                this.element.setWrapperElement(undefined);
            }
        }
        this.element.cssClasses;
        return true;
    };
    SurveyRowElement.prototype.renderElement = function () {
        var element = this.element;
        var innerElement = this.createElement(element, this.index);
        var css = element.cssClassesValue;
        var focusIn = function () {
            var el = element;
            if (el && el.isQuestion) {
                el.focusIn();
            }
        };
        return (_("div", { className: css.questionWrapper, style: element.rootStyle, "data-key": element.name + this.index, onFocus: focusIn, ref: this.rootRef }, innerElement));
    };
    SurveyRowElement.prototype.createElement = function (element, elementIndex) {
        if (!this.row.isNeedRender) {
            return ReactElementFactory.Instance.createElement(element.skeletonComponentName, { element: element, css: this.css, });
        }
        var elementType = element.getTemplate();
        if (!ReactElementFactory.Instance.isElementRegistered(elementType)) {
            elementType = "question";
        }
        return ReactElementFactory.Instance.createElement(elementType, {
            element: element,
            creator: this.creator,
            survey: this.survey,
            css: this.css,
        });
    };
    return SurveyRowElement;
}(reactquestion_element_SurveyElementBase));


// CONCATENATED MODULE: ./packages/survey-react-ui/src/row.tsx
var row_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var row_SurveyRow = /** @class */ (function (_super) {
    row_extends(SurveyRow, _super);
    function SurveyRow(props) {
        var _this = _super.call(this, props) || this;
        _this.rootRef = b();
        _this.recalculateCss();
        return _this;
    }
    SurveyRow.prototype.recalculateCss = function () {
        this.row.visibleElements.map(function (element) { return element.cssClasses; });
    };
    SurveyRow.prototype.getStateElement = function () {
        return this.row;
    };
    Object.defineProperty(SurveyRow.prototype, "row", {
        get: function () {
            return this.props.row;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyRow.prototype, "survey", {
        get: function () {
            return this.props.survey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyRow.prototype, "creator", {
        get: function () {
            return this.props.creator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyRow.prototype, "css", {
        get: function () {
            return this.props.css;
        },
        enumerable: false,
        configurable: true
    });
    SurveyRow.prototype.canRender = function () {
        return !!this.row && !!this.survey && !!this.creator;
    };
    SurveyRow.prototype.renderElementContent = function () {
        var _this = this;
        var elements = this.row.visibleElements.map(function (element, elementIndex) {
            return (_(element_SurveyRowElement, { element: element, index: elementIndex, row: _this.row, survey: _this.survey, creator: _this.creator, css: _this.css, key: element.id }));
        });
        return (_("div", { ref: this.rootRef, className: this.row.getRowCss() }, elements));
    };
    SurveyRow.prototype.renderElement = function () {
        var survey = this.survey;
        var content = this.renderElementContent();
        var wrapper = reactsurveymodel_ReactSurveyElementsWrapper.wrapRow(survey, content, this.row);
        return wrapper || content;
    };
    SurveyRow.prototype.componentDidMount = function () {
        var _this = this;
        _super.prototype.componentDidMount.call(this);
        var el = this.rootRef.current;
        if (this.rootRef.current) {
            this.row.setRootElement(this.rootRef.current);
        }
        if (!!el && !this.row.isNeedRender) {
            var rowContainerDiv = el;
            setTimeout(function () {
                _this.row.startLazyRendering(rowContainerDiv);
            }, 10);
        }
    };
    SurveyRow.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (!_super.prototype.shouldComponentUpdate.call(this, nextProps, nextState))
            return false;
        if (nextProps.row !== this.row) {
            nextProps.row.isNeedRender = this.row.isNeedRender;
            nextProps.row.setRootElement(this.rootRef.current);
            this.row.setRootElement(undefined);
            this.stopLazyRendering();
        }
        this.recalculateCss();
        return true;
    };
    SurveyRow.prototype.stopLazyRendering = function () {
        this.row.stopLazyRendering();
        this.row.isNeedRender = !this.row.isLazyRendering();
    };
    SurveyRow.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.row.setRootElement(undefined);
        this.stopLazyRendering();
    };
    SurveyRow.prototype.createElement = function (element, elementIndex) {
        var index = elementIndex ? "-" + elementIndex : 0;
        var elementType = element.getType();
        if (!ReactElementFactory.Instance.isElementRegistered(elementType)) {
            elementType = "question";
        }
        return ReactElementFactory.Instance.createElement(elementType, {
            key: element.name + index,
            element: element,
            creator: this.creator,
            survey: this.survey,
            css: this.css,
        });
    };
    return SurveyRow;
}(reactquestion_element_SurveyElementBase));


// CONCATENATED MODULE: ./packages/survey-react-ui/src/panel-base.tsx
var panel_base_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var panel_base_SurveyPanelBase = /** @class */ (function (_super) {
    panel_base_extends(SurveyPanelBase, _super);
    function SurveyPanelBase(props) {
        var _this = _super.call(this, props) || this;
        _this.rootRef = b();
        return _this;
    }
    SurveyPanelBase.prototype.getStateElement = function () {
        return this.panelBase;
    };
    SurveyPanelBase.prototype.canUsePropInState = function (key) {
        return key !== "elements" && _super.prototype.canUsePropInState.call(this, key);
    };
    Object.defineProperty(SurveyPanelBase.prototype, "survey", {
        get: function () {
            return this.getSurvey();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyPanelBase.prototype, "creator", {
        get: function () {
            return this.props.creator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyPanelBase.prototype, "css", {
        get: function () {
            return this.getCss();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyPanelBase.prototype, "panelBase", {
        get: function () {
            return this.getPanelBase();
        },
        enumerable: false,
        configurable: true
    });
    SurveyPanelBase.prototype.getPanelBase = function () {
        return this.props.element || this.props.question;
    };
    SurveyPanelBase.prototype.getSurvey = function () {
        return (this.props.survey || (!!this.panelBase ? this.panelBase.survey : null));
    };
    SurveyPanelBase.prototype.getCss = function () {
        return this.props.css;
    };
    SurveyPanelBase.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.doAfterRender();
    };
    SurveyPanelBase.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        var el = this.rootRef.current;
        if (!!el) {
            el.removeAttribute("data-rendered");
        }
    };
    SurveyPanelBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        if (!!prevProps.page &&
            !!this.survey &&
            !!this.survey.activePage &&
            prevProps.page.id === this.survey.activePage.id)
            return;
        this.doAfterRender();
    };
    SurveyPanelBase.prototype.doAfterRender = function () {
        var el = this.rootRef.current;
        if (el && this.survey) {
            if (this.panelBase.isPanel) {
                this.panelBase.afterRender(el);
            }
            else {
                this.survey.afterRenderPage(el);
            }
        }
    };
    SurveyPanelBase.prototype.getIsVisible = function () {
        return this.panelBase.isVisible;
    };
    SurveyPanelBase.prototype.canRender = function () {
        return (_super.prototype.canRender.call(this) && !!this.survey && !!this.panelBase && !!this.panelBase.survey && this.getIsVisible());
    };
    SurveyPanelBase.prototype.renderRows = function (css) {
        var _this = this;
        return this.panelBase.visibleRows.map(function (row) { return _this.createRow(row, css); });
    };
    SurveyPanelBase.prototype.createRow = function (row, css) {
        return (_(row_SurveyRow, { key: row.id, row: row, survey: this.survey, creator: this.creator, css: css }));
    };
    return SurveyPanelBase;
}(reactquestion_element_SurveyElementBase));


// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/svg-icon/svg-icon.tsx
var svg_icon_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var svg_icon_SvgIcon = /** @class */ (function (_super) {
    svg_icon_extends(SvgIcon, _super);
    function SvgIcon(props) {
        var _this = _super.call(this, props) || this;
        _this.svgIconRef = Rn.createRef();
        return _this;
    }
    SvgIcon.prototype.updateSvg = function () {
        if (this.props.iconName)
            Object(external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["createSvg"])(this.props.size, this.props.width, this.props.height, this.props.iconName, this.svgIconRef.current, this.props.title);
    };
    SvgIcon.prototype.componentDidUpdate = function () {
        this.updateSvg();
    };
    SvgIcon.prototype.render = function () {
        var className = "sv-svg-icon";
        if (this.props.className) {
            className += " " + this.props.className;
        }
        return (this.props.iconName ?
            Rn.createElement("svg", { className: className, style: this.props.style, onClick: this.props.onClick, ref: this.svgIconRef, role: "img" },
                Rn.createElement("use", null))
            : null);
    };
    SvgIcon.prototype.componentDidMount = function () {
        this.updateSvg();
    };
    return SvgIcon;
}(Rn.Component));

ReactElementFactory.Instance.registerElement("sv-svg-icon", function (props) {
    return Rn.createElement(svg_icon_SvgIcon, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/action-bar/action-bar-separator.tsx
var action_bar_separator_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var action_bar_separator_SurveyActionBarSeparator = /** @class */ (function (_super) {
    action_bar_separator_extends(SurveyActionBarSeparator, _super);
    function SurveyActionBarSeparator(props) {
        return _super.call(this, props) || this;
    }
    SurveyActionBarSeparator.prototype.render = function () {
        var className = "sv-action-bar-separator " + this.props.cssClasses;
        return Rn.createElement("div", { className: className });
    };
    return SurveyActionBarSeparator;
}(Rn.Component));

ReactElementFactory.Instance.registerElement("sv-action-bar-separator", function (props) {
    return Rn.createElement(action_bar_separator_SurveyActionBarSeparator, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/action-bar/action-bar-item.tsx
var action_bar_item_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var action_bar_item_SurveyAction = /** @class */ (function (_super) {
    action_bar_item_extends(SurveyAction, _super);
    function SurveyAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyAction.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    SurveyAction.prototype.getStateElement = function () {
        return this.item;
    };
    SurveyAction.prototype.renderElement = function () {
        //refactor
        var itemClass = this.item.getActionRootCss();
        var separator = this.item.needSeparator ? (Rn.createElement(action_bar_separator_SurveyActionBarSeparator, null)) : null;
        var itemComponent = ReactElementFactory.Instance.createElement(this.item.component || "sv-action-bar-item", {
            item: this.item,
        });
        return (Rn.createElement("div", { className: itemClass, id: this.item.id },
            Rn.createElement("div", { className: "sv-action__content" },
                separator,
                itemComponent)));
    };
    return SurveyAction;
}(reactquestion_element_SurveyElementBase));

var action_bar_item_SurveyActionBarItem = /** @class */ (function (_super) {
    action_bar_item_extends(SurveyActionBarItem, _super);
    function SurveyActionBarItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyActionBarItem.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    SurveyActionBarItem.prototype.getStateElement = function () {
        return this.item;
    };
    SurveyActionBarItem.prototype.renderElement = function () {
        return Rn.createElement(Rn.Fragment, null, this.renderInnerButton());
    };
    SurveyActionBarItem.prototype.renderText = function () {
        if (!this.item.hasTitle)
            return null;
        var titleClass = this.item.getActionBarItemTitleCss();
        return Rn.createElement("span", { className: titleClass }, this.item.title);
    };
    SurveyActionBarItem.prototype.renderButtonContent = function () {
        var text = this.renderText();
        var svgIcon = !!this.item.iconName ? (Rn.createElement(svg_icon_SvgIcon, { className: this.item.cssClasses.itemIcon, size: this.item.iconSize, iconName: this.item.iconName, title: this.item.tooltip || this.item.title })) : null;
        return (Rn.createElement(Rn.Fragment, null,
            svgIcon,
            text));
    };
    SurveyActionBarItem.prototype.renderInnerButton = function () {
        var _this = this;
        var className = this.item.getActionBarItemCss();
        var title = this.item.tooltip || this.item.title;
        var buttonContent = this.renderButtonContent();
        var tabIndex = this.item.disableTabStop ? -1 : undefined;
        var button = attachKey2click(Rn.createElement("button", { className: className, type: "button", disabled: this.item.disabled, onMouseDown: function (args) { return _this.item.doMouseDown(args); }, onFocus: function (args) { return _this.item.doFocus(args); }, onClick: function (args) { return _this.item.doAction(args); }, title: title, tabIndex: tabIndex, "aria-checked": this.item.ariaChecked, "aria-expanded": this.item.ariaExpanded, role: this.item.ariaRole }, buttonContent), this.item, { processEsc: false });
        return button;
    };
    return SurveyActionBarItem;
}(reactquestion_element_SurveyElementBase));

ReactElementFactory.Instance.registerElement("sv-action-bar-item", function (props) {
    return Rn.createElement(action_bar_item_SurveyActionBarItem, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/popup/popup.tsx
var popup_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var popup_Popup = /** @class */ (function (_super) {
    popup_extends(Popup, _super);
    function Popup(props) {
        var _this = _super.call(this, props) || this;
        _this.containerRef = Rn.createRef();
        _this.createModel();
        return _this;
    }
    Object.defineProperty(Popup.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    Popup.prototype.getStateElement = function () {
        return this.model;
    };
    Popup.prototype.createModel = function () {
        this.popup = Object(external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["createPopupViewModel"])(this.props.model);
    };
    Popup.prototype.setTargetElement = function () {
        var container = this.containerRef.current;
        this.popup.setComponentElement(container);
    };
    Popup.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.setTargetElement();
    };
    Popup.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        this.setTargetElement();
    };
    Popup.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.popup.resetComponentElement();
    };
    Popup.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        var _a;
        if (!_super.prototype.shouldComponentUpdate.call(this, nextProps, nextState))
            return false;
        var isNeedUpdate = nextProps.model !== this.popup.model;
        if (isNeedUpdate) {
            (_a = this.popup) === null || _a === void 0 ? void 0 : _a.dispose();
            this.createModel();
        }
        return isNeedUpdate;
    };
    Popup.prototype.render = function () {
        this.popup.model = this.model;
        var popupContainer;
        if (this.model.isModal) {
            popupContainer = Rn.createElement(popup_PopupContainer, { model: this.popup });
        }
        else {
            popupContainer = Rn.createElement(popup_PopupDropdownContainer, { model: this.popup });
        }
        return Rn.createElement("div", { ref: this.containerRef }, popupContainer);
    };
    return Popup;
}(reactquestion_element_SurveyElementBase));

ReactElementFactory.Instance.registerElement("sv-popup", function (props) {
    return Rn.createElement(popup_Popup, props);
});
var popup_PopupContainer = /** @class */ (function (_super) {
    popup_extends(PopupContainer, _super);
    function PopupContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.handleKeydown = function (event) {
            _this.model.onKeyDown(event);
        };
        _this.clickInside = function (ev) {
            ev.stopPropagation();
        };
        return _this;
    }
    Object.defineProperty(PopupContainer.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    PopupContainer.prototype.getStateElement = function () {
        return this.model;
    };
    PopupContainer.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        if (!this.model.isPositionSet && this.model.isVisible) {
            this.model.updateOnShowing();
        }
    };
    PopupContainer.prototype.renderContainer = function (popupBaseViewModel) {
        var _this = this;
        var headerPopup = popupBaseViewModel.showHeader ? this.renderHeaderPopup(popupBaseViewModel) : null;
        var headerContent = !!popupBaseViewModel.title ? this.renderHeaderContent() : null;
        var content = this.renderContent();
        var footerContent = popupBaseViewModel.showFooter ? this.renderFooter(this.model) : null;
        return (Rn.createElement("div", { className: "sv-popup__container", style: {
                left: popupBaseViewModel.left,
                top: popupBaseViewModel.top,
                height: popupBaseViewModel.height,
                width: popupBaseViewModel.width,
                minWidth: popupBaseViewModel.minWidth,
            }, onClick: function (ev) {
                _this.clickInside(ev);
            } },
            headerPopup,
            Rn.createElement("div", { className: "sv-popup__body-content" },
                headerContent,
                Rn.createElement("div", { className: "sv-popup__scrolling-content" }, content),
                footerContent)));
    };
    PopupContainer.prototype.renderHeaderContent = function () {
        return Rn.createElement("div", { className: "sv-popup__body-header" }, this.model.title);
    };
    PopupContainer.prototype.renderContent = function () {
        var contentComponent = ReactElementFactory.Instance.createElement(this.model.contentComponentName, this.model.contentComponentData);
        return Rn.createElement("div", { className: "sv-popup__content" }, contentComponent);
    };
    PopupContainer.prototype.renderHeaderPopup = function (popupModel) {
        return null;
    };
    PopupContainer.prototype.renderFooter = function (popuModel) {
        return (Rn.createElement("div", { className: "sv-popup__body-footer" },
            Rn.createElement(action_bar_SurveyActionBar, { model: popuModel.footerToolbar })));
    };
    PopupContainer.prototype.render = function () {
        var _this = this;
        var container = this.renderContainer(this.model);
        var className = new external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["CssClassBuilder"]()
            .append("sv-popup")
            .append(this.model.styleClass)
            .toString();
        var style = { display: this.model.isVisible ? "" : "none", };
        return (Rn.createElement("div", { tabIndex: -1, className: className, style: style, onClick: function (e) {
                _this.model.clickOutside(e);
            }, onKeyDown: this.handleKeydown }, container));
    };
    PopupContainer.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        if (this.model.isVisible) {
            this.model.updateOnShowing();
        }
    };
    return PopupContainer;
}(reactquestion_element_SurveyElementBase));

var popup_PopupDropdownContainer = /** @class */ (function (_super) {
    popup_extends(PopupDropdownContainer, _super);
    function PopupDropdownContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PopupDropdownContainer.prototype.renderHeaderPopup = function (popupModel) {
        var popupDropdownModel = popupModel;
        if (!popupDropdownModel)
            return null;
        return (Rn.createElement("span", { style: {
                left: popupDropdownModel.pointerTarget.left,
                top: popupDropdownModel.pointerTarget.top,
            }, className: "sv-popup__pointer" }));
    };
    return PopupDropdownContainer;
}(popup_PopupContainer));


// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/action-bar/action-bar-item-dropdown.tsx
var action_bar_item_dropdown_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var action_bar_item_dropdown_SurveyActionBarItemDropdown = /** @class */ (function (_super) {
    action_bar_item_dropdown_extends(SurveyActionBarItemDropdown, _super);
    function SurveyActionBarItemDropdown(props) {
        return _super.call(this, props) || this;
    }
    SurveyActionBarItemDropdown.prototype.renderInnerButton = function () {
        var button = _super.prototype.renderInnerButton.call(this);
        return (Rn.createElement(Rn.Fragment, null,
            button,
            Rn.createElement(popup_Popup, { model: this.item.popupModel })));
    };
    SurveyActionBarItemDropdown.prototype.componentDidMount = function () {
        this.viewModel = new external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["ActionDropdownViewModel"](this.item);
    };
    SurveyActionBarItemDropdown.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.viewModel.dispose();
    };
    return SurveyActionBarItemDropdown;
}(action_bar_item_SurveyActionBarItem));

ReactElementFactory.Instance.registerElement("sv-action-bar-item-dropdown", function (props) {
    return Rn.createElement(action_bar_item_dropdown_SurveyActionBarItemDropdown, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/action-bar/action-bar.tsx
var action_bar_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var action_bar_SurveyActionBar = /** @class */ (function (_super) {
    action_bar_extends(SurveyActionBar, _super);
    function SurveyActionBar(props) {
        var _this = _super.call(this, props) || this;
        _this.rootRef = Rn.createRef();
        return _this;
    }
    Object.defineProperty(SurveyActionBar.prototype, "handleClick", {
        get: function () {
            return this.props.handleClick !== undefined ? this.props.handleClick : true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyActionBar.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    SurveyActionBar.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        if (!this.model.hasActions)
            return;
        var container = this.rootRef.current;
        if (!!container) {
            this.model.initResponsivityManager(container, function (callback) { setTimeout(callback, 100); });
        }
    };
    SurveyActionBar.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.model.resetResponsivityManager();
    };
    SurveyActionBar.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        if (prevProps.model != this.props.model) {
            prevProps.model.resetResponsivityManager();
        }
        if (!!this.model.hasActions) {
            var container = this.rootRef.current;
            if (!!container) {
                this.model.initResponsivityManager(container, function (callback) { setTimeout(callback, 100); });
            }
        }
    };
    SurveyActionBar.prototype.getStateElement = function () {
        return this.model;
    };
    SurveyActionBar.prototype.renderElement = function () {
        if (!this.model.hasActions)
            return null;
        var items = this.renderItems();
        return (Rn.createElement("div", { ref: this.rootRef, className: this.model.getRootCss(), onClick: this.handleClick ? function (event) {
                event.stopPropagation();
            } : undefined }, items));
    };
    SurveyActionBar.prototype.renderItems = function () {
        return this.model.renderedActions.map(function (item, itemIndex) {
            return (Rn.createElement(action_bar_item_SurveyAction, { item: item, key: "item" + itemIndex }));
        });
    };
    return SurveyActionBar;
}(reactquestion_element_SurveyElementBase));

ReactElementFactory.Instance.registerElement("sv-action-bar", function (props) {
    return Rn.createElement(action_bar_SurveyActionBar, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/title/title-content.tsx
var title_content_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var title_content_TitleContent = /** @class */ (function (_super) {
    title_content_extends(TitleContent, _super);
    function TitleContent(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(TitleContent.prototype, "cssClasses", {
        get: function () {
            return this.props.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TitleContent.prototype, "element", {
        get: function () {
            return this.props.element;
        },
        enumerable: false,
        configurable: true
    });
    TitleContent.prototype.render = function () {
        if (this.element.isTitleRenderedAsString)
            return reactquestion_element_SurveyElementBase.renderLocString(this.element.locTitle);
        var spans = this.renderTitleSpans(this.element.getTitleOwner(), this.cssClasses);
        return Rn.createElement(Rn.Fragment, null, spans);
    };
    TitleContent.prototype.renderTitleSpans = function (element, cssClasses) {
        var getSpaceSpan = function (key) {
            return (Rn.createElement("span", { "data-key": key, key: key }, "\u00A0"));
        };
        var spans = [];
        if (element.isRequireTextOnStart) {
            spans.push(this.renderRequireText(element));
            spans.push(getSpaceSpan("req-sp"));
        }
        var questionNumber = element.no;
        if (questionNumber) {
            spans.push(Rn.createElement("span", { "data-key": "q_num", key: "q_num", className: element.cssTitleNumber, style: { position: "static" }, "aria-hidden": true }, questionNumber));
            spans.push(getSpaceSpan("num-sp"));
        }
        if (element.isRequireTextBeforeTitle) {
            spans.push(this.renderRequireText(element));
            spans.push(getSpaceSpan("req-sp"));
        }
        spans.push(reactquestion_element_SurveyElementBase.renderLocString(element.locTitle, null, "q_title"));
        if (element.isRequireTextAfterTitle) {
            spans.push(getSpaceSpan("req-sp"));
            spans.push(this.renderRequireText(element));
        }
        return spans;
    };
    TitleContent.prototype.renderRequireText = function (element) {
        return (Rn.createElement("span", { "data-key": "req-text", key: "req-text", className: element.cssRequiredText, "aria-hidden": true }, element.requiredText));
    };
    return TitleContent;
}(Rn.Component));


// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/title/title-actions.tsx
var title_actions_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var title_actions_TitleActions = /** @class */ (function (_super) {
    title_actions_extends(TitleActions, _super);
    function TitleActions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TitleActions.prototype, "cssClasses", {
        get: function () {
            return this.props.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TitleActions.prototype, "element", {
        get: function () {
            return this.props.element;
        },
        enumerable: false,
        configurable: true
    });
    TitleActions.prototype.render = function () {
        var titleContent = Rn.createElement(title_content_TitleContent, { element: this.element, cssClasses: this.cssClasses });
        if (!this.element.hasTitleActions)
            return titleContent;
        return (Rn.createElement("div", { className: "sv-title-actions" },
            Rn.createElement("span", { className: "sv-title-actions__title" }, titleContent),
            Rn.createElement(action_bar_SurveyActionBar, { model: this.element.getTitleToolbar() })));
    };
    return TitleActions;
}(Rn.Component));

external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["RendererFactory"].Instance.registerRenderer("element", "title-actions", "sv-title-actions");
ReactElementFactory.Instance.registerElement("sv-title-actions", function (props) {
    return Rn.createElement(title_actions_TitleActions, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/title/title-element.tsx
var title_element_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var title_element_TitleElement = /** @class */ (function (_super) {
    title_element_extends(TitleElement, _super);
    function TitleElement(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(TitleElement.prototype, "element", {
        get: function () {
            return this.props.element;
        },
        enumerable: false,
        configurable: true
    });
    TitleElement.prototype.renderTitleExpandableSvg = function () {
        if (!this.element.getCssTitleExpandableSvg())
            return null;
        var iconName = this.element.isExpanded ? "icon-collapse-16x16" : "icon-expand-16x16";
        return Rn.createElement(svg_icon_SvgIcon, { className: this.element.getCssTitleExpandableSvg(), iconName: iconName, size: "auto" });
    };
    TitleElement.prototype.render = function () {
        var element = this.element;
        if (!element || !element.hasTitle)
            return null;
        var ariaLabel = element.titleAriaLabel || undefined;
        var titleExpandableSvg = this.renderTitleExpandableSvg();
        var titleContent = (Rn.createElement(title_actions_TitleActions, { element: element, cssClasses: element.cssClasses }));
        var onClick = undefined;
        var onKeyUp = undefined;
        if (element.hasTitleEvents) {
            onKeyUp = function (evt) {
                Object(external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["doKey2ClickUp"])(evt.nativeEvent);
            };
        }
        var CustomTag = element.titleTagName;
        return (Rn.createElement(CustomTag, { className: element.cssTitle, id: element.ariaTitleId, "aria-label": ariaLabel, tabIndex: element.titleTabIndex, "aria-expanded": element.titleAriaExpanded, role: element.titleAriaRole, onClick: onClick, onKeyUp: onKeyUp },
            titleExpandableSvg,
            titleContent));
    };
    return TitleElement;
}(Rn.Component));


// CONCATENATED MODULE: ./packages/survey-react-ui/src/reactquestion_factory.tsx
var ReactQuestionFactory = /** @class */ (function () {
    function ReactQuestionFactory() {
        this.creatorHash = {};
    }
    ReactQuestionFactory.prototype.registerQuestion = function (questionType, questionCreator) {
        this.creatorHash[questionType] = questionCreator;
    };
    ReactQuestionFactory.prototype.getAllTypes = function () {
        var result = new Array();
        for (var key in this.creatorHash) {
            result.push(key);
        }
        return result.sort();
    };
    ReactQuestionFactory.prototype.createQuestion = function (questionType, params) {
        var creator = this.creatorHash[questionType];
        if (creator == null)
            return null;
        return creator(params);
    };
    ReactQuestionFactory.Instance = new ReactQuestionFactory();
    return ReactQuestionFactory;
}());


// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/character-counter.tsx
var character_counter_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var character_counter_CharacterCounterComponent = /** @class */ (function (_super) {
    character_counter_extends(CharacterCounterComponent, _super);
    function CharacterCounterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CharacterCounterComponent.prototype.getStateElement = function () {
        return this.props.counter;
    };
    CharacterCounterComponent.prototype.renderElement = function () {
        return (Rn.createElement("div", { className: this.props.remainingCharacterCounter }, this.props.counter.remainingCharacterCounter));
    };
    return CharacterCounterComponent;
}(reactquestion_element_SurveyElementBase));

ReactElementFactory.Instance.registerElement("sv-character-counter", function (props) {
    return Rn.createElement(character_counter_CharacterCounterComponent, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/text-area.tsx
var text_area_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var text_area_TextAreaComponent = /** @class */ (function (_super) {
    text_area_extends(TextAreaComponent, _super);
    function TextAreaComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initialValue = _this.viewModel.getTextValue() || "";
        _this.textareaRef = Rn.createRef();
        return _this;
    }
    Object.defineProperty(TextAreaComponent.prototype, "viewModel", {
        get: function () {
            return this.props.viewModel;
        },
        enumerable: false,
        configurable: true
    });
    TextAreaComponent.prototype.canRender = function () {
        return !!this.viewModel.question;
    };
    TextAreaComponent.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        var el = this.textareaRef.current;
        if (!!el) {
            this.viewModel.setElement(el);
        }
    };
    TextAreaComponent.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.viewModel.resetElement();
    };
    TextAreaComponent.prototype.renderElement = function () {
        var _this = this;
        return (Rn.createElement("textarea", { id: this.viewModel.id, className: this.viewModel.className, ref: this.textareaRef, disabled: this.viewModel.isDisabledAttr, readOnly: this.viewModel.isReadOnlyAttr, rows: this.viewModel.rows, cols: this.viewModel.cols, placeholder: this.viewModel.placeholder, maxLength: this.viewModel.maxLength, defaultValue: this.initialValue, onChange: function (event) { _this.viewModel.onTextAreaInput(event); }, onFocus: function (event) { _this.viewModel.onTextAreaFocus(event); }, onBlur: function (event) { _this.viewModel.onTextAreaBlur(event); }, onKeyDown: function (event) { _this.viewModel.onTextAreaKeyDown(event); }, "aria-required": this.viewModel.ariaRequired, "aria-label": this.viewModel.ariaLabel, "aria-labelledby": this.viewModel.ariaLabelledBy, "aria-describedby": this.viewModel.ariaDescribedBy, "aria-invalid": this.viewModel.ariaInvalid, "aria-errormessage": this.viewModel.ariaErrormessage, style: { resize: this.viewModel.question.resizeStyle } }));
    };
    return TextAreaComponent;
}(reactquestion_element_SurveyElementBase));

ReactElementFactory.Instance.registerElement("sv-text-area", function (props) {
    return Rn.createElement(text_area_TextAreaComponent, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/reactquestion_comment.tsx
var reactquestion_comment_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var reactquestion_comment_SurveyQuestionComment = /** @class */ (function (_super) {
    reactquestion_comment_extends(SurveyQuestionComment, _super);
    function SurveyQuestionComment(props) {
        return _super.call(this, props) || this;
    }
    SurveyQuestionComment.prototype.renderCharacterCounter = function () {
        var counter = null;
        if (!!this.question.getMaxLength()) {
            counter = _(character_counter_CharacterCounterComponent, { counter: this.question.characterCounter, remainingCharacterCounter: this.question.cssClasses.remainingCharacterCounter });
        }
        return counter;
    };
    SurveyQuestionComment.prototype.renderElement = function () {
        if (this.question.isReadOnlyRenderDiv()) {
            return _("div", null, this.question.value);
        }
        var counter = this.renderCharacterCounter();
        var textAreaModel = this.props.question.textAreaModel;
        return (_(k, null,
            _(text_area_TextAreaComponent, { viewModel: textAreaModel }),
            counter));
    };
    return SurveyQuestionComment;
}(reactquestion_element_SurveyQuestionUncontrolledElement));

var reactquestion_comment_SurveyQuestionCommentItem = /** @class */ (function (_super) {
    reactquestion_comment_extends(SurveyQuestionCommentItem, _super);
    function SurveyQuestionCommentItem(props) {
        var _this = _super.call(this, props) || this;
        _this.textAreaModel = _this.getTextAreaModel();
        return _this;
    }
    SurveyQuestionCommentItem.prototype.canRender = function () {
        return !!this.props.question;
    };
    SurveyQuestionCommentItem.prototype.getTextAreaModel = function () {
        return this.props.question.commentTextAreaModel;
    };
    SurveyQuestionCommentItem.prototype.renderElement = function () {
        var question = this.props.question;
        if (question.isReadOnlyRenderDiv()) {
            var comment = this.textAreaModel.getTextValue() || "";
            return _("div", null, comment);
        }
        return (_(text_area_TextAreaComponent, { viewModel: this.textAreaModel }));
    };
    return SurveyQuestionCommentItem;
}(ReactSurveyElement));

var SurveyQuestionOtherValueItem = /** @class */ (function (_super) {
    reactquestion_comment_extends(SurveyQuestionOtherValueItem, _super);
    function SurveyQuestionOtherValueItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SurveyQuestionOtherValueItem.prototype.getTextAreaModel = function () {
        return this.props.question.otherTextAreaModel;
    };
    return SurveyQuestionOtherValueItem;
}(reactquestion_comment_SurveyQuestionCommentItem));

ReactQuestionFactory.Instance.registerQuestion("comment", function (props) {
    return _(reactquestion_comment_SurveyQuestionComment, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/custom-widget.tsx
var custom_widget_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var custom_widget_SurveyCustomWidget = /** @class */ (function (_super) {
    custom_widget_extends(SurveyCustomWidget, _super);
    function SurveyCustomWidget(props) {
        var _this = _super.call(this, props) || this;
        _this.widgetRef = b();
        return _this;
    }
    SurveyCustomWidget.prototype._afterRender = function () {
        if (this.questionBase.customWidget) {
            var el = this.widgetRef.current;
            if (!!el) {
                this.questionBase.customWidget.afterRender(this.questionBase, el);
                this.questionBase.customWidgetData.isNeedRender = false;
            }
        }
    };
    SurveyCustomWidget.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        if (this.questionBase) {
            this._afterRender();
        }
    };
    SurveyCustomWidget.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        var isDefaultRender = !!this.questionBase.customWidget &&
            this.questionBase.customWidget.isDefaultRender;
        if (this.questionBase && !isDefaultRender) {
            this._afterRender();
        }
    };
    SurveyCustomWidget.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        if (this.questionBase.customWidget) {
            var el = this.widgetRef.current;
            if (!!el) {
                this.questionBase.customWidget.willUnmount(this.questionBase, el);
            }
        }
    };
    SurveyCustomWidget.prototype.canRender = function () {
        return _super.prototype.canRender.call(this) && this.questionBase.visible;
    };
    SurveyCustomWidget.prototype.renderElement = function () {
        var customWidget = this.questionBase.customWidget;
        if (customWidget.isDefaultRender) {
            return (_("div", { ref: this.widgetRef }, this.creator.createQuestionElement(this.questionBase)));
        }
        var widget = null;
        if (customWidget.widgetJson.render) {
            widget = customWidget.widgetJson.render(this.questionBase);
        }
        else {
            if (customWidget.htmlTemplate) {
                var htmlValue = { __html: customWidget.htmlTemplate };
                return _("div", { ref: this.widgetRef, dangerouslySetInnerHTML: htmlValue });
            }
        }
        return _("div", { ref: this.widgetRef }, widget);
    };
    return SurveyCustomWidget;
}(reactquestion_element_SurveyQuestionElementBase));


// CONCATENATED MODULE: ./packages/survey-react-ui/src/element-header.tsx
var element_header_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var element_header_SurveyElementHeader = /** @class */ (function (_super) {
    element_header_extends(SurveyElementHeader, _super);
    function SurveyElementHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyElementHeader.prototype, "element", {
        get: function () {
            return this.props.element;
        },
        enumerable: false,
        configurable: true
    });
    SurveyElementHeader.prototype.render = function () {
        var element = this.element;
        var title = element.hasTitle ? (Rn.createElement(title_element_TitleElement, { element: element })) : null;
        var description = element.hasDescriptionUnderTitle
            ? reactquestion_element_SurveyElementBase.renderQuestionDescription(this.element)
            : null;
        var additionalTitleToolbarElement = element.hasAdditionalTitleToolbar ? Rn.createElement(action_bar_SurveyActionBar, { model: element.additionalTitleToolbar }) : null;
        var headerStyle = { width: undefined };
        if (element instanceof external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["Question"]) {
            headerStyle.width = element.titleWidth;
        }
        return (Rn.createElement("div", { className: element.cssHeader, onClick: function (e) { return element.clickTitleFunction && element.clickTitleFunction(e.nativeEvent); }, style: headerStyle },
            title,
            description,
            additionalTitleToolbarElement));
    };
    return SurveyElementHeader;
}(Rn.Component));


// CONCATENATED MODULE: ./packages/survey-react-ui/src/reactquestion.tsx
var reactquestion_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var reactquestion_SurveyQuestion = /** @class */ (function (_super) {
    reactquestion_extends(SurveyQuestion, _super);
    function SurveyQuestion(props) {
        var _this = _super.call(this, props) || this;
        _this.isNeedFocus = false;
        _this.rootRef = b();
        return _this;
    }
    SurveyQuestion.renderQuestionBody = function (creator, question) {
        // if (!question.isVisible) return null;
        var customWidget = question.customWidget;
        if (!customWidget) {
            return creator.createQuestionElement(question);
        }
        return _(custom_widget_SurveyCustomWidget, { creator: creator, question: question });
    };
    SurveyQuestion.prototype.getStateElement = function () {
        return this.question;
    };
    Object.defineProperty(SurveyQuestion.prototype, "question", {
        get: function () {
            return this.props.element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestion.prototype, "creator", {
        get: function () {
            return this.props.creator;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestion.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        if (!!this.question) {
            this.question["react"] = this;
        }
        this.doAfterRender();
    };
    SurveyQuestion.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        if (!!this.question) {
            this.question["react"] = null;
        }
        var el = this.rootRef.current;
        if (!!el) {
            el.removeAttribute("data-rendered");
        }
    };
    SurveyQuestion.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        this.doAfterRender();
    };
    SurveyQuestion.prototype.doAfterRender = function () {
        if (this.isNeedFocus) {
            if (!this.question.isCollapsed) {
                this.question.clickTitleFunction();
            }
            this.isNeedFocus = false;
        }
        if (this.question) {
            var el = this.rootRef.current;
            if (el && el.getAttribute("data-rendered") !== "r") {
                el.setAttribute("data-rendered", "r");
                if (this.question.afterRender) {
                    this.question.afterRender(el);
                }
            }
        }
    };
    SurveyQuestion.prototype.canRender = function () {
        return (_super.prototype.canRender.call(this) &&
            !!this.question &&
            !!this.creator);
    };
    SurveyQuestion.prototype.renderQuestionContent = function () {
        var question = this.question;
        var contentStyle = {
            display: this.question.renderedIsExpanded ? "" : "none",
        };
        var cssClasses = question.cssClasses;
        var questionRender = this.renderQuestion();
        var errorsTop = this.question.showErrorOnTop
            ? this.renderErrors(cssClasses, "top")
            : null;
        var errorsBottom = this.question.showErrorOnBottom
            ? this.renderErrors(cssClasses, "bottom")
            : null;
        var comment = question && question.hasComment ? this.renderComment(cssClasses) : null;
        var descriptionUnderInput = question.hasDescriptionUnderInput
            ? this.renderDescription()
            : null;
        return (_("div", { className: question.cssContent || undefined, style: contentStyle, role: "presentation" },
            errorsTop,
            questionRender,
            comment,
            errorsBottom,
            descriptionUnderInput));
    };
    SurveyQuestion.prototype.renderElement = function () {
        var question = this.question;
        var cssClasses = question.cssClasses;
        var header = this.renderHeader(question);
        var headerTop = question.hasTitleOnLeftTop ? header : null;
        var headerBottom = question.hasTitleOnBottom ? header : null;
        var errorsAboveQuestion = this.question.showErrorsAboveQuestion
            ? this.renderErrors(cssClasses, "")
            : null;
        var errorsBelowQuestion = this.question.showErrorsBelowQuestion
            ? this.renderErrors(cssClasses, "")
            : null;
        var rootStyle = question.getRootStyle();
        var questionContent = this.wrapQuestionContent(this.renderQuestionContent());
        return (_(k, null,
            _("div", { ref: this.rootRef, id: question.id, className: question.getRootCss(), style: rootStyle, role: question.ariaRole, "aria-required": this.question.ariaRequired, "aria-invalid": this.question.ariaInvalid, "aria-labelledby": question.ariaLabelledBy, "aria-describedby": question.ariaDescribedBy, "aria-expanded": question.ariaExpanded, "data-name": question.name },
                errorsAboveQuestion,
                headerTop,
                questionContent,
                headerBottom,
                errorsBelowQuestion)));
    };
    SurveyQuestion.prototype.wrapElement = function (element) {
        var survey = this.question.survey;
        var wrapper = null;
        if (survey) {
            wrapper = reactsurveymodel_ReactSurveyElementsWrapper.wrapElement(survey, element, this.question);
        }
        return wrapper !== null && wrapper !== void 0 ? wrapper : element;
    };
    SurveyQuestion.prototype.wrapQuestionContent = function (element) {
        var survey = this.question.survey;
        var wrapper = null;
        if (survey) {
            wrapper = reactsurveymodel_ReactSurveyElementsWrapper.wrapQuestionContent(survey, element, this.question);
        }
        return wrapper !== null && wrapper !== void 0 ? wrapper : element;
    };
    SurveyQuestion.prototype.renderQuestion = function () {
        return SurveyQuestion.renderQuestionBody(this.creator, this.question);
    };
    SurveyQuestion.prototype.renderDescription = function () {
        return reactquestion_element_SurveyElementBase.renderQuestionDescription(this.question);
    };
    SurveyQuestion.prototype.renderComment = function (cssClasses) {
        var commentText = reactquestion_element_SurveyElementBase.renderLocString(this.question.locCommentText);
        return (_("div", { className: this.question.getCommentAreaCss() },
            _("div", null, commentText),
            _(reactquestion_comment_SurveyQuestionCommentItem, { question: this.question, cssClasses: cssClasses, otherCss: cssClasses.other, isDisplayMode: this.question.isInputReadOnly })));
    };
    SurveyQuestion.prototype.renderHeader = function (question) {
        return _(element_header_SurveyElementHeader, { element: question });
    };
    SurveyQuestion.prototype.renderErrors = function (cssClasses, location) {
        return (_(reactquestion_SurveyElementErrors, { element: this.question, cssClasses: cssClasses, creator: this.creator, location: location, id: this.question.id + "_errors" }));
    };
    return SurveyQuestion;
}(reactquestion_element_SurveyElementBase));

ReactElementFactory.Instance.registerElement("question", function (props) {
    return _(reactquestion_SurveyQuestion, props);
});
var reactquestion_SurveyElementErrors = /** @class */ (function (_super) {
    reactquestion_extends(SurveyElementErrors, _super);
    function SurveyElementErrors(props) {
        var _this = _super.call(this, props) || this;
        _this.state = _this.getState();
        return _this;
    }
    Object.defineProperty(SurveyElementErrors.prototype, "id", {
        get: function () {
            return this.props.element.id + "_errors";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyElementErrors.prototype, "element", {
        get: function () {
            return this.props.element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyElementErrors.prototype, "creator", {
        get: function () {
            return this.props.creator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyElementErrors.prototype, "location", {
        get: function () {
            return this.props.location;
        },
        enumerable: false,
        configurable: true
    });
    SurveyElementErrors.prototype.getState = function (prevState) {
        if (prevState === void 0) { prevState = null; }
        return !prevState ? { error: 0 } : { error: prevState.error + 1 };
    };
    SurveyElementErrors.prototype.canRender = function () {
        return !!this.element && this.element.hasVisibleErrors;
    };
    SurveyElementErrors.prototype.componentWillUnmount = function () {
    };
    SurveyElementErrors.prototype.renderElement = function () {
        var errors = [];
        for (var i = 0; i < this.element.errors.length; i++) {
            var key = "error" + i;
            errors.push(this.creator.renderError(key, this.element.errors[i], this.cssClasses, this.element));
        }
        return (_("div", { role: "alert", "aria-live": "polite", className: this.element.cssError, id: this.id }, errors));
    };
    return SurveyElementErrors;
}(ReactSurveyElement));

var reactquestion_SurveyQuestionAndErrorsWrapped = /** @class */ (function (_super) {
    reactquestion_extends(SurveyQuestionAndErrorsWrapped, _super);
    function SurveyQuestionAndErrorsWrapped(props) {
        return _super.call(this, props) || this;
    }
    SurveyQuestionAndErrorsWrapped.prototype.getStateElement = function () {
        return this.question;
    };
    Object.defineProperty(SurveyQuestionAndErrorsWrapped.prototype, "question", {
        get: function () {
            return this.getQuestion();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionAndErrorsWrapped.prototype, "creator", {
        get: function () {
            return this.props.creator;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionAndErrorsWrapped.prototype.getQuestion = function () {
        return this.props.question;
    };
    Object.defineProperty(SurveyQuestionAndErrorsWrapped.prototype, "itemCss", {
        get: function () {
            return this.props.itemCss;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionAndErrorsWrapped.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.doAfterRender();
    };
    SurveyQuestionAndErrorsWrapped.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        this.doAfterRender();
    };
    SurveyQuestionAndErrorsWrapped.prototype.doAfterRender = function () { };
    SurveyQuestionAndErrorsWrapped.prototype.canRender = function () {
        return !!this.question;
    };
    SurveyQuestionAndErrorsWrapped.prototype.renderContent = function () {
        var renderedQuestion = this.renderQuestion();
        return (_(k, null, renderedQuestion));
    };
    SurveyQuestionAndErrorsWrapped.prototype.getShowErrors = function () {
        return this.question.isVisible;
    };
    SurveyQuestionAndErrorsWrapped.prototype.renderQuestion = function () {
        return reactquestion_SurveyQuestion.renderQuestionBody(this.creator, this.question);
    };
    return SurveyQuestionAndErrorsWrapped;
}(ReactSurveyElement));

var reactquestion_SurveyQuestionAndErrorsCell = /** @class */ (function (_super) {
    reactquestion_extends(SurveyQuestionAndErrorsCell, _super);
    function SurveyQuestionAndErrorsCell(props) {
        var _this = _super.call(this, props) || this;
        _this.cellRef = b();
        return _this;
    }
    SurveyQuestionAndErrorsCell.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        if (this.question) {
            var el = this.cellRef.current;
            if (!!el) {
                el.removeAttribute("data-rendered");
            }
        }
    };
    SurveyQuestionAndErrorsCell.prototype.renderCellContent = function () {
        return (_("div", { className: this.props.cell.cellQuestionWrapperClassName }, this.renderQuestion()));
    };
    SurveyQuestionAndErrorsCell.prototype.renderElement = function () {
        var style = this.getCellStyle();
        var cell = this.props.cell;
        var focusIn = function () { cell.focusIn(); };
        return (_("td", { ref: this.cellRef, className: this.itemCss, colSpan: cell.colSpans, title: cell.getTitle(), style: style, onFocus: focusIn }, this.wrapCell(this.props.cell, this.renderCellContent())));
    };
    SurveyQuestionAndErrorsCell.prototype.getCellStyle = function () {
        return null;
    };
    SurveyQuestionAndErrorsCell.prototype.getHeaderText = function () {
        return "";
    };
    SurveyQuestionAndErrorsCell.prototype.wrapCell = function (cell, element) {
        if (!cell) {
            return element;
        }
        var survey = this.question.survey;
        var wrapper = null;
        if (survey) {
            wrapper = reactsurveymodel_ReactSurveyElementsWrapper.wrapMatrixCell(survey, element, cell, this.props.reason);
        }
        return wrapper !== null && wrapper !== void 0 ? wrapper : element;
    };
    return SurveyQuestionAndErrorsCell;
}(reactquestion_SurveyQuestionAndErrorsWrapped));

var reactquestion_SurveyQuestionErrorCell = /** @class */ (function (_super) {
    reactquestion_extends(SurveyQuestionErrorCell, _super);
    function SurveyQuestionErrorCell(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            changed: 0
        };
        if (_this.question) {
            _this.registerCallback(_this.question);
        }
        return _this;
    }
    Object.defineProperty(SurveyQuestionErrorCell.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionErrorCell.prototype.update = function () {
        this.setState({ changed: this.state.changed + 1 });
    };
    SurveyQuestionErrorCell.prototype.getQuestionPropertiesToTrack = function () {
        return ["errors"];
    };
    SurveyQuestionErrorCell.prototype.registerCallback = function (question) {
        var _this = this;
        question.registerFunctionOnPropertiesValueChanged(this.getQuestionPropertiesToTrack(), function () {
            _this.update();
        }, "__reactSubscription");
    };
    SurveyQuestionErrorCell.prototype.unRegisterCallback = function (question) {
        question.unRegisterFunctionOnPropertiesValueChanged(this.getQuestionPropertiesToTrack(), "__reactSubscription");
    };
    SurveyQuestionErrorCell.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.question && prevProps.question !== this.question) {
            this.unRegisterCallback(prevProps.cell);
        }
        if (this.question) {
            this.registerCallback(this.question);
        }
    };
    SurveyQuestionErrorCell.prototype.componentWillUnmount = function () {
        if (this.question) {
            this.unRegisterCallback(this.question);
        }
    };
    SurveyQuestionErrorCell.prototype.render = function () {
        return _(reactquestion_SurveyElementErrors, { element: this.question, creator: this.props.creator, cssClasses: this.question.cssClasses });
    };
    return SurveyQuestionErrorCell;
}(x));


// CONCATENATED MODULE: ./packages/survey-react-ui/src/page.tsx
var page_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var page_SurveyPage = /** @class */ (function (_super) {
    page_extends(SurveyPage, _super);
    function SurveyPage(props) {
        return _super.call(this, props) || this;
    }
    SurveyPage.prototype.getPanelBase = function () {
        return this.props.page;
    };
    Object.defineProperty(SurveyPage.prototype, "page", {
        get: function () {
            return this.panelBase;
        },
        enumerable: false,
        configurable: true
    });
    // shouldComponentUpdate(nextProps: any, nextState: any): boolean {
    //   if(!super.shouldComponentUpdate(nextProps, nextState)) return false;
    //   return true;
    // }
    SurveyPage.prototype.renderElement = function () {
        var title = this.renderTitle();
        var description = this.renderDescription();
        var rows = this.renderRows(this.panelBase.cssClasses);
        var errors = (_(reactquestion_SurveyElementErrors, { element: this.panelBase, cssClasses: this.panelBase.cssClasses, creator: this.creator }));
        return (_("div", { ref: this.rootRef, className: this.page.cssRoot },
            title,
            description,
            errors,
            rows));
    };
    SurveyPage.prototype.renderTitle = function () {
        return _(title_element_TitleElement, { element: this.page });
    };
    SurveyPage.prototype.renderDescription = function () {
        if (!this.page._showDescription)
            return null;
        var text = reactquestion_element_SurveyElementBase.renderLocString(this.page.locDescription);
        return (_("div", { className: this.panelBase.cssClasses.page.description }, text));
    };
    return SurveyPage;
}(panel_base_SurveyPanelBase));


// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/survey-header/survey-header.tsx
var survey_header_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var survey_header_SurveyHeader = /** @class */ (function (_super) {
    survey_header_extends(SurveyHeader, _super);
    function SurveyHeader(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { changed: 0 };
        _this.rootRef = Rn.createRef();
        return _this;
    }
    Object.defineProperty(SurveyHeader.prototype, "survey", {
        get: function () {
            return this.props.survey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyHeader.prototype, "css", {
        get: function () {
            return this.survey.css;
        },
        enumerable: false,
        configurable: true
    });
    SurveyHeader.prototype.componentDidMount = function () {
        var self = this;
        this.survey.afterRenderHeader(this.rootRef.current);
        this.survey.locLogo.onChanged = function () {
            self.setState({ changed: self.state.changed + 1 });
        };
    };
    SurveyHeader.prototype.componentWillUnmount = function () {
        this.survey.locLogo.onChanged = function () { };
    };
    SurveyHeader.prototype.renderTitle = function () {
        if (!this.survey.renderedHasTitle)
            return null;
        var description = reactquestion_element_SurveyElementBase.renderLocString(this.survey.locDescription);
        return (Rn.createElement("div", { className: this.css.headerText, style: { maxWidth: this.survey.titleMaxWidth } },
            Rn.createElement(title_element_TitleElement, { element: this.survey }),
            this.survey.renderedHasDescription ? Rn.createElement("div", { className: this.css.description }, description) : null));
    };
    SurveyHeader.prototype.renderLogoImage = function (isRender) {
        if (!isRender)
            return null;
        var componentName = this.survey.getElementWrapperComponentName(this.survey, "logo-image");
        var componentData = this.survey.getElementWrapperComponentData(this.survey, "logo-image");
        return ReactElementFactory.Instance.createElement(componentName, {
            data: componentData,
        });
    };
    SurveyHeader.prototype.render = function () {
        if (!this.survey.renderedHasHeader)
            return null;
        return (Rn.createElement("div", { className: this.css.header, ref: this.rootRef },
            this.renderLogoImage(this.survey.isLogoBefore),
            this.renderTitle(),
            this.renderLogoImage(this.survey.isLogoAfter),
            Rn.createElement("div", { className: this.css.headerClose })));
    };
    return SurveyHeader;
}(Rn.Component));

ReactElementFactory.Instance.registerElement("survey-header", function (props) {
    return Rn.createElement(survey_header_SurveyHeader, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/brand-info.tsx
var brand_info_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var brand_info_BrandInfo = /** @class */ (function (_super) {
    brand_info_extends(BrandInfo, _super);
    function BrandInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrandInfo.prototype.render = function () {
        return (Rn.createElement("div", { className: "sv-brand-info" },
            Rn.createElement("a", { className: "sv-brand-info__logo", href: "https://surveyjs.io/?utm_source=built-in_links&utm_medium=online_survey_tool&utm_campaign=landing_page" },
                Rn.createElement("img", { src: "https://surveyjs.io/Content/Images/poweredby.svg" })),
            Rn.createElement("div", { className: "sv-brand-info__text" },
                "Try and see how easy it is to ",
                Rn.createElement("a", { href: "https://surveyjs.io/create-survey?utm_source=built-in_links&utm_medium=online_survey_tool&utm_campaign=create_survey" }, "create a survey")),
            Rn.createElement("div", { className: "sv-brand-info__terms" },
                Rn.createElement("a", { href: "https://surveyjs.io/TermsOfUse" }, "Terms of Use & Privacy Statement"))));
    };
    return BrandInfo;
}(Rn.Component));


// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/notifier.tsx
var notifier_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var notifier_NotifierComponent = /** @class */ (function (_super) {
    notifier_extends(NotifierComponent, _super);
    function NotifierComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(NotifierComponent.prototype, "notifier", {
        get: function () {
            return this.props.notifier;
        },
        enumerable: false,
        configurable: true
    });
    NotifierComponent.prototype.getStateElement = function () {
        return this.notifier;
    };
    NotifierComponent.prototype.renderElement = function () {
        if (!this.notifier.isDisplayed)
            return null;
        var style = { visibility: this.notifier.active ? "visible" : "hidden" };
        return (Rn.createElement("div", { className: this.notifier.css, style: style, role: "alert", "aria-live": "polite" },
            Rn.createElement("span", null, this.notifier.message),
            Rn.createElement(action_bar_SurveyActionBar, { model: this.notifier.actionBar })));
    };
    return NotifierComponent;
}(reactquestion_element_SurveyElementBase));

ReactElementFactory.Instance.registerElement("sv-notifier", function (props) {
    return Rn.createElement(notifier_NotifierComponent, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/components-container.tsx
var components_container_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var components_container_ComponentsContainer = /** @class */ (function (_super) {
    components_container_extends(ComponentsContainer, _super);
    function ComponentsContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComponentsContainer.prototype.render = function () {
        var _this = this;
        var components = this.props.survey.getContainerContent(this.props.container);
        var needRenderWrapper = this.props.needRenderWrapper === false ? false : true;
        if (components.length == 0) {
            return null;
        }
        if (!needRenderWrapper) {
            return Rn.createElement(Rn.Fragment, null, components.map(function (component) {
                return ReactElementFactory.Instance.createElement(component.component, { survey: _this.props.survey, model: component.data, container: _this.props.container, key: component.id });
            }));
        }
        return Rn.createElement("div", { className: "sv-components-column" + " sv-components-container-" + this.props.container }, components.map(function (component) {
            return ReactElementFactory.Instance.createElement(component.component, { survey: _this.props.survey, model: component.data, container: _this.props.container, key: component.id });
        }));
    };
    return ComponentsContainer;
}(Rn.Component));

ReactElementFactory.Instance.registerElement("sv-components-container", function (props) {
    return Rn.createElement(components_container_ComponentsContainer, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/svgbundle.tsx
var svgbundle_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var svgbundle_SvgBundleComponent = /** @class */ (function (_super) {
    svgbundle_extends(SvgBundleComponent, _super);
    function SvgBundleComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.onIconsChanged = function () {
            if (!!_this.containerRef.current) {
                _this.containerRef.current.innerHTML = external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["SvgRegistry"].iconsRenderedHtml();
            }
        };
        _this.containerRef = Rn.createRef();
        return _this;
    }
    SvgBundleComponent.prototype.componentDidMount = function () {
        this.onIconsChanged();
        external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["SvgRegistry"].onIconsChanged.add(this.onIconsChanged);
    };
    SvgBundleComponent.prototype.componentWillUnmount = function () {
        external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["SvgRegistry"].onIconsChanged.remove(this.onIconsChanged);
    };
    SvgBundleComponent.prototype.render = function () {
        var svgStyle = {
            display: "none"
        };
        return Rn.createElement("svg", { style: svgStyle, id: "sv-icon-holder-global-container", ref: this.containerRef });
    };
    return SvgBundleComponent;
}(Rn.Component));


// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/popup/popup-modal.tsx
var popup_modal_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var popup_modal_PopupModal = /** @class */ (function (_super) {
    popup_modal_extends(PopupModal, _super);
    function PopupModal(props) {
        var _this = _super.call(this, props) || this;
        _this.isInitialized = false;
        _this.init = function () {
            if (!_this.isInitialized) {
                external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["settings"].showModal = function (componentName, data, onApply, onCancel, cssClass, title, displayMode) {
                    if (displayMode === void 0) { displayMode = "popup"; }
                    var options = Object(external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["createDialogOptions"])(componentName, data, onApply, onCancel, undefined, undefined, cssClass, title, displayMode);
                    return _this.showDialog(options);
                };
                external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["settings"].showDialog = function (dialogOptions, rootElement) {
                    return _this.showDialog(dialogOptions, rootElement);
                };
                _this.isInitialized = true;
            }
        };
        _this.clean = function () {
            if (_this.isInitialized) {
                external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["settings"].showModal = undefined;
                external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["settings"].showDialog = undefined;
                _this.isInitialized = false;
            }
        };
        _this.state = { changed: 0 };
        _this.descriptor = {
            init: _this.init,
            clean: _this.clean
        };
        return _this;
    }
    PopupModal.addModalDescriptor = function (descriptor) {
        if (!external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["settings"].showModal) {
            descriptor.init();
        }
        this.modalDescriptors.push(descriptor);
    };
    PopupModal.removeModalDescriptor = function (descriptor) {
        descriptor.clean();
        this.modalDescriptors.splice(this.modalDescriptors.indexOf(descriptor), 1);
        if (!external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["settings"].showModal && this.modalDescriptors[0]) {
            this.modalDescriptors[0].init();
        }
    };
    PopupModal.prototype.renderElement = function () {
        if (!this.model)
            return null;
        return compat_module_$(Rn.createElement(popup_PopupContainer, { model: this.model }), this.model.container);
    };
    PopupModal.prototype.showDialog = function (dialogOptions, rootElement) {
        var _this = this;
        this.model = Object(external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["createPopupModalViewModel"])(dialogOptions, rootElement);
        var onVisibilityChangedCallback = function (_, options) {
            if (!options.isVisible) {
                _this.model.dispose();
                _this.model = undefined;
                _this.setState({ changed: _this.state.changed + 1 });
            }
        };
        this.model.onVisibilityChanged.add(onVisibilityChangedCallback);
        this.model.model.isVisible = true;
        this.setState({ changed: this.state.changed + 1 });
        return this.model;
    };
    PopupModal.prototype.componentDidMount = function () {
        PopupModal.addModalDescriptor(this.descriptor);
    };
    PopupModal.prototype.componentWillUnmount = function () {
        if (this.model) {
            this.model.dispose();
            this.model = undefined;
        }
        PopupModal.removeModalDescriptor(this.descriptor);
    };
    PopupModal.modalDescriptors = [];
    return PopupModal;
}(reactquestion_element_SurveyElementBase));


// EXTERNAL MODULE: ./build/survey-core/icons/iconsV1.js
var iconsV1 = __webpack_require__("./build/survey-core/icons/iconsV1.js");

// EXTERNAL MODULE: ./build/survey-core/icons/iconsV2.js
var iconsV2 = __webpack_require__("./build/survey-core/icons/iconsV2.js");

// CONCATENATED MODULE: ./packages/survey-react-ui/src/reactSurvey.tsx
var reactSurvey_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};














Object(external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["addIconsToThemeSet"])("v1", iconsV1["icons"]);
Object(external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["addIconsToThemeSet"])("v2", iconsV2["icons"]);
external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["SvgRegistry"].registerIcons(iconsV1["icons"]);
var reactSurvey_Survey = /** @class */ (function (_super) {
    reactSurvey_extends(Survey, _super);
    function Survey(props) {
        var _this = _super.call(this, props) || this;
        _this.previousJSON = {};
        _this.isSurveyUpdated = false;
        _this.createSurvey(props);
        _this.updateSurvey(props, {});
        _this.rootRef = b();
        _this.rootNodeId = props.id || null;
        _this.rootNodeClassName = props.className || "";
        return _this;
    }
    Object.defineProperty(Survey, "cssType", {
        get: function () {
            return external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["surveyCss"].currentType;
        },
        set: function (value) {
            external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["StylesManager"].applyTheme(value);
        },
        enumerable: false,
        configurable: true
    });
    Survey.prototype.getStateElement = function () {
        return this.survey;
    };
    Survey.prototype.onSurveyUpdated = function () {
        if (!!this.survey) {
            var el = this.rootRef.current;
            if (!!el)
                this.survey.afterRenderSurvey(el);
            this.survey.startTimerFromUI();
            this.setSurveyEvents();
        }
    };
    Survey.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (!_super.prototype.shouldComponentUpdate.call(this, nextProps, nextState))
            return false;
        if (this.isModelJSONChanged(nextProps)) {
            this.destroySurvey();
            this.createSurvey(nextProps);
            this.updateSurvey(nextProps, {});
            this.isSurveyUpdated = true;
        }
        return true;
    };
    Survey.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        this.updateSurvey(this.props, prevProps);
        if (this.isSurveyUpdated) {
            this.onSurveyUpdated();
            this.isSurveyUpdated = false;
        }
    };
    Survey.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.onSurveyUpdated();
    };
    Survey.prototype.destroySurvey = function () {
        if (this.survey) {
            this.survey.renderCallback = undefined;
            this.survey.onPartialSend.clear();
            this.survey.stopTimer();
            this.survey.destroyResizeObserver();
        }
    };
    Survey.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.destroySurvey();
    };
    Survey.prototype.doRender = function () {
        var renderResult;
        if (this.survey.state == "completed") {
            renderResult = this.renderCompleted();
        }
        else if (this.survey.state == "completedbefore") {
            renderResult = this.renderCompletedBefore();
        }
        else if (this.survey.state == "loading") {
            renderResult = this.renderLoading();
        }
        else if (this.survey.state == "empty") {
            renderResult = this.renderEmptySurvey();
        }
        else {
            renderResult = this.renderSurvey();
        }
        var backgroundImage = !!this.survey.backgroundImage ? _("div", { className: this.css.rootBackgroundImage, style: this.survey.backgroundImageStyle }) : null;
        var header = this.survey.headerView === "basic" ? _(survey_header_SurveyHeader, { survey: this.survey }) : null;
        var onSubmit = function (event) {
            event.preventDefault();
        };
        var customHeader = _("div", { className: "sv_custom_header" });
        if (this.survey.hasLogo) {
            customHeader = null;
        }
        var rootCss = this.survey.getRootCss();
        var cssClasses = this.rootNodeClassName ? this.rootNodeClassName + " " + rootCss : rootCss;
        return (_("div", { id: this.rootNodeId, ref: this.rootRef, className: cssClasses, style: this.survey.themeVariables, lang: this.survey.locale || "en", dir: this.survey.localeDir },
            this.survey.needRenderIcons ? _(svgbundle_SvgBundleComponent, null) : null,
            _(popup_modal_PopupModal, null),
            _("div", { className: this.survey.wrapperFormCss },
                backgroundImage,
                _("form", { onSubmit: onSubmit },
                    customHeader,
                    _("div", { className: this.css.container },
                        header,
                        _(components_container_ComponentsContainer, { survey: this.survey, container: "header", needRenderWrapper: false }),
                        renderResult,
                        _(components_container_ComponentsContainer, { survey: this.survey, container: "footer", needRenderWrapper: false }))),
                _(notifier_NotifierComponent, { notifier: this.survey.notifier }))));
    };
    Survey.prototype.renderElement = function () {
        return this.doRender();
    };
    Object.defineProperty(Survey.prototype, "css", {
        get: function () {
            return this.survey.css;
        },
        set: function (value) {
            this.survey.css = value;
        },
        enumerable: false,
        configurable: true
    });
    Survey.prototype.renderCompleted = function () {
        if (!this.survey.showCompletedPage)
            return null;
        var htmlValue = { __html: this.survey.processedCompletedHtml };
        return (_(k, null,
            _("div", { dangerouslySetInnerHTML: htmlValue, className: this.survey.completedCss }),
            _(components_container_ComponentsContainer, { survey: this.survey, container: "completePage", needRenderWrapper: false })));
    };
    Survey.prototype.renderCompletedBefore = function () {
        var htmlValue = { __html: this.survey.processedCompletedBeforeHtml };
        return (_("div", { dangerouslySetInnerHTML: htmlValue, className: this.survey.completedBeforeCss }));
    };
    Survey.prototype.renderLoading = function () {
        var htmlValue = { __html: this.survey.processedLoadingHtml };
        return (_("div", { dangerouslySetInnerHTML: htmlValue, className: this.survey.loadingBodyCss }));
    };
    Survey.prototype.renderSurvey = function () {
        var activePage = this.survey.activePage
            ? this.renderPage(this.survey.activePage)
            : null;
        var isStaring = this.survey.isShowStartingPage;
        var pageId = this.survey.activePage ? this.survey.activePage.id : "";
        var className = this.survey.bodyCss;
        var style = {};
        if (!!this.survey.renderedWidth) {
            style.maxWidth = this.survey.renderedWidth;
        }
        return (_("div", { className: this.survey.bodyContainerCss },
            _(components_container_ComponentsContainer, { survey: this.survey, container: "left" }),
            _("div", { className: "sv-components-column sv-components-column--expandable" },
                _(components_container_ComponentsContainer, { survey: this.survey, container: "center" }),
                _("div", { id: pageId, className: className, style: style },
                    _(components_container_ComponentsContainer, { survey: this.survey, container: "contentTop" }),
                    activePage,
                    _(components_container_ComponentsContainer, { survey: this.survey, container: "contentBottom" }),
                    this.survey.showBrandInfo ? _(brand_info_BrandInfo, null) : null)),
            _(components_container_ComponentsContainer, { survey: this.survey, container: "right" })));
    };
    Survey.prototype.renderPage = function (page) {
        return (_(page_SurveyPage, { survey: this.survey, page: page, css: this.css, creator: this }));
    };
    Survey.prototype.renderEmptySurvey = function () {
        return _("div", { className: this.css.bodyEmpty }, this.survey.emptySurveyText);
    };
    Survey.prototype.createSurvey = function (newProps) {
        if (!newProps)
            newProps = {};
        this.previousJSON = {};
        if (newProps) {
            if (newProps.model) {
                this.survey = newProps.model;
            }
            else {
                if (newProps.json) {
                    this.previousJSON = newProps.json;
                    this.survey = new external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["SurveyModel"](newProps.json);
                }
            }
        }
        else {
            this.survey = new external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["SurveyModel"]();
        }
        if (!!newProps.css) {
            this.survey.css = this.css;
        }
    };
    Survey.prototype.isModelJSONChanged = function (newProps) {
        if (!!newProps["model"]) {
            return this.survey !== newProps["model"];
        }
        if (!!newProps["json"]) {
            return !external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["Helpers"].isTwoValueEquals(newProps["json"], this.previousJSON);
        }
        return false;
    };
    Survey.prototype.updateSurvey = function (newProps, oldProps) {
        if (!newProps)
            return;
        oldProps = oldProps || {};
        for (var key in newProps) {
            if (key == "model" || key == "children" || key == "json") {
                continue;
            }
            if (key == "css") {
                this.survey.mergeValues(newProps.css, this.survey.getCss());
                this.survey["updateNavigationCss"]();
                this.survey["updateElementCss"]();
                continue;
            }
            if (newProps[key] === oldProps[key])
                continue;
            if (key.indexOf("on") == 0 && this.survey[key] && this.survey[key].add) {
                if (!!oldProps[key]) {
                    this.survey[key].remove(oldProps[key]);
                }
                this.survey[key].add(newProps[key]);
            }
            else {
                this.survey[key] = newProps[key];
            }
        }
    };
    Survey.prototype.setSurveyEvents = function () {
        var self = this;
        this.survey.renderCallback = function () {
            var counter = !!self.state && !!self.state.modelChanged ? self.state.modelChanged : 0;
            self.setState({ modelChanged: counter + 1 });
        };
        this.survey.onPartialSend.add(function (sender) {
            if (!!self.state) {
                self.setState(self.state);
            }
        });
    };
    //ISurveyCreator
    Survey.prototype.createQuestionElement = function (question) {
        return ReactQuestionFactory.Instance.createQuestion(question.isDefaultRendering() ? question.getTemplate() : question.getComponentName(), {
            question: question,
            isDisplayMode: question.isInputReadOnly,
            creator: this,
        });
    };
    Survey.prototype.renderError = function (key, error, cssClasses, element) {
        return ReactElementFactory.Instance.createElement(this.survey.questionErrorComponent, { key: key, error: error, cssClasses: cssClasses, element: element });
    };
    Survey.prototype.questionTitleLocation = function () {
        return this.survey.questionTitleLocation;
    };
    Survey.prototype.questionErrorLocation = function () {
        return this.survey.questionErrorLocation;
    };
    return Survey;
}(reactquestion_element_SurveyElementBase));

ReactElementFactory.Instance.registerElement("survey", function (props) {
    return _(reactSurvey_Survey, props);
});
function attachKey2click(element, viewModel, options) {
    if (options === void 0) { options = { processEsc: true, disableTabStop: false }; }
    if ((!!viewModel && viewModel.disableTabStop) || (!!options && options.disableTabStop)) {
        return _n(element, { tabIndex: -1 });
    }
    options = __assign({}, options);
    return _n(element, {
        tabIndex: 0,
        onKeyUp: function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
            Object(external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["doKey2ClickUp"])(evt, options);
            return false;
        },
        onKeyDown: function (evt) { return Object(external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["doKey2ClickDown"])(evt, options); },
        onBlur: function (evt) { return Object(external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["doKey2ClickBlur"])(evt); },
    });
}

// CONCATENATED MODULE: ./packages/survey-react-ui/src/reactSurveyNavigationBase.tsx
var reactSurveyNavigationBase_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SurveyNavigationBase = /** @class */ (function (_super) {
    reactSurveyNavigationBase_extends(SurveyNavigationBase, _super);
    function SurveyNavigationBase(props) {
        var _this = _super.call(this, props) || this;
        _this.updateStateFunction = null;
        _this.state = { update: 0 };
        return _this;
    }
    Object.defineProperty(SurveyNavigationBase.prototype, "survey", {
        get: function () {
            return this.props.survey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyNavigationBase.prototype, "css", {
        get: function () {
            return this.props.css || this.survey.css;
        },
        enumerable: false,
        configurable: true
    });
    SurveyNavigationBase.prototype.componentDidMount = function () {
        if (this.survey) {
            var self = this;
            this.updateStateFunction = function () {
                self.setState({ update: self.state.update + 1 });
            };
            this.survey.onPageVisibleChanged.add(this.updateStateFunction);
        }
    };
    SurveyNavigationBase.prototype.componentWillUnmount = function () {
        if (this.survey && this.updateStateFunction) {
            this.survey.onPageVisibleChanged.remove(this.updateStateFunction);
            this.updateStateFunction = null;
        }
    };
    return SurveyNavigationBase;
}(x));


// CONCATENATED MODULE: ./packages/survey-react-ui/src/reacttimerpanel.tsx
var reacttimerpanel_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var reacttimerpanel_SurveyTimerPanel = /** @class */ (function (_super) {
    reacttimerpanel_extends(SurveyTimerPanel, _super);
    function SurveyTimerPanel(props) {
        var _this = _super.call(this, props) || this;
        _this.circleLength = 440;
        return _this;
    }
    SurveyTimerPanel.prototype.getStateElement = function () {
        return this.timerModel;
    };
    Object.defineProperty(SurveyTimerPanel.prototype, "timerModel", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyTimerPanel.prototype, "progress", {
        get: function () {
            return -this.timerModel.progress * this.circleLength;
        },
        enumerable: false,
        configurable: true
    });
    SurveyTimerPanel.prototype.render = function () {
        if (!this.timerModel.isRunning) {
            return null;
        }
        var result = _("div", { className: this.timerModel.survey.getCss().timerRoot }, this.timerModel.text);
        if (this.timerModel.showTimerAsClock) {
            var style = { strokeDasharray: this.circleLength, strokeDashoffset: this.progress };
            var progress = (this.timerModel.showProgress ? _(svg_icon_SvgIcon, { className: this.timerModel.getProgressCss(), style: style, iconName: "icon-timercircle", size: "auto" }) : null);
            result =
                (_("div", { className: this.timerModel.rootCss },
                    progress,
                    _("div", { className: this.timerModel.textContainerCss },
                        _("span", { className: this.timerModel.majorTextCss }, this.timerModel.clockMajorText),
                        (this.timerModel.clockMinorText ? _("span", { className: this.timerModel.minorTextCss }, this.timerModel.clockMinorText) : null))));
        }
        return result;
    };
    return SurveyTimerPanel;
}(ReactSurveyElement));

ReactElementFactory.Instance.registerElement("sv-timerpanel", function (props) {
    return _(reacttimerpanel_SurveyTimerPanel, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/panel.tsx
var panel_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









var panel_SurveyPanel = /** @class */ (function (_super) {
    panel_extends(SurveyPanel, _super);
    function SurveyPanel(props) {
        var _this = _super.call(this, props) || this;
        _this.hasBeenExpanded = false;
        return _this;
    }
    Object.defineProperty(SurveyPanel.prototype, "panel", {
        get: function () {
            return this.panelBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyPanel.prototype.renderElement = function () {
        var _this = this;
        var header = this.renderHeader();
        var errors = (_(reactquestion_SurveyElementErrors, { element: this.panelBase, cssClasses: this.panelBase.cssClasses, creator: this.creator }));
        var style = {
            paddingLeft: this.panel.innerPaddingLeft,
            display: this.panel.renderedIsExpanded ? undefined : "none",
        };
        var content = null;
        if (this.panel.renderedIsExpanded) {
            // this.hasBeenExpanded = true;
            var rows = this.renderRows(this.panelBase.cssClasses);
            var className = this.panelBase.cssClasses.panel.content;
            content = this.renderContent(style, rows, className);
        }
        var focusIn = function () {
            if (_this.panelBase)
                _this.panelBase.focusIn();
        };
        return (_("div", { ref: this.rootRef, className: this.panelBase.getContainerCss(), onFocus: focusIn, id: this.panelBase.id },
            this.panel.showErrorsAbovePanel ? errors : null,
            header,
            this.panel.showErrorsAbovePanel ? null : errors,
            content));
    };
    SurveyPanel.prototype.renderHeader = function () {
        if (!this.panel.hasTitle && !this.panel.hasDescription) {
            return null;
        }
        return _(element_header_SurveyElementHeader, { element: this.panel });
    };
    SurveyPanel.prototype.wrapElement = function (element) {
        var survey = this.panel.survey;
        var wrapper = null;
        if (survey) {
            wrapper = reactsurveymodel_ReactSurveyElementsWrapper.wrapElement(survey, element, this.panel);
        }
        return wrapper !== null && wrapper !== void 0 ? wrapper : element;
    };
    SurveyPanel.prototype.renderContent = function (style, rows, className) {
        var bottom = this.renderBottom();
        return (_("div", { style: style, className: className, id: this.panel.contentId },
            rows,
            bottom));
    };
    SurveyPanel.prototype.renderTitle = function () {
        if (!this.panelBase.title)
            return null;
        return _(title_element_TitleElement, { element: this.panelBase });
    };
    SurveyPanel.prototype.renderDescription = function () {
        if (!this.panelBase.description)
            return null;
        var text = reactquestion_element_SurveyElementBase.renderLocString(this.panelBase.locDescription);
        return (_("div", { className: this.panel.cssClasses.panel.description }, text));
    };
    SurveyPanel.prototype.renderBottom = function () {
        var footerToolbar = this.panel.getFooterToolbar();
        if (!footerToolbar.hasActions)
            return null;
        return _(action_bar_SurveyActionBar, { model: footerToolbar });
    };
    SurveyPanel.prototype.getIsVisible = function () {
        return this.panelBase.getIsContentVisible();
    };
    return SurveyPanel;
}(panel_base_SurveyPanelBase));

ReactElementFactory.Instance.registerElement("panel", function (props) {
    return _(panel_SurveyPanel, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/flow-panel.tsx
var flow_panel_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var flow_panel_SurveyFlowPanel = /** @class */ (function (_super) {
    flow_panel_extends(SurveyFlowPanel, _super);
    function SurveyFlowPanel(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyFlowPanel.prototype, "flowPanel", {
        get: function () {
            return this.panel;
        },
        enumerable: false,
        configurable: true
    });
    SurveyFlowPanel.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        if (!!this.flowPanel) {
            this.flowPanel.onCustomHtmlProducing = function () {
                return "";
            };
            this.flowPanel.onGetHtmlForQuestion = this.renderQuestion;
        }
    };
    SurveyFlowPanel.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        if (!!this.flowPanel) {
            this.flowPanel.onCustomHtmlProducing = null;
            this.flowPanel.onGetHtmlForQuestion = null;
        }
    };
    SurveyFlowPanel.prototype.getQuestion = function (name) {
        return this.flowPanel.getQuestionByName(name);
    };
    SurveyFlowPanel.prototype.renderQuestion = function (question) {
        return "<question>" + question.name + "</question>";
    };
    SurveyFlowPanel.prototype.renderRows = function () {
        var result = this.renderHtml();
        if (!!result) {
            return [result];
        }
        else {
            return [];
        }
    };
    SurveyFlowPanel.prototype.getNodeIndex = function () {
        return this.renderedIndex++;
    };
    SurveyFlowPanel.prototype.renderHtml = function () {
        if (!this.flowPanel)
            return null;
        var html = "<span>" + this.flowPanel.produceHtml() + "</span>";
        if (!DOMParser) {
            var htmlValue = { __html: html };
            return _("div", { dangerouslySetInnerHTML: htmlValue });
        }
        var doc = new DOMParser().parseFromString(html, "text/xml");
        this.renderedIndex = 0;
        return this.renderParentNode(doc);
    };
    SurveyFlowPanel.prototype.renderNodes = function (domNodes) {
        var nodes = [];
        for (var i = 0; i < domNodes.length; i++) {
            var node = this.renderNode(domNodes[i]);
            if (!!node) {
                nodes.push(node);
            }
        }
        return nodes;
    };
    SurveyFlowPanel.prototype.getStyle = function (nodeType) {
        var style = {};
        if (nodeType.toLowerCase() === "b") {
            style.fontWeight = "bold";
        }
        if (nodeType.toLowerCase() === "i") {
            style.fontStyle = "italic";
        }
        if (nodeType.toLowerCase() === "u") {
            style.textDecoration = "underline";
        }
        return style;
    };
    SurveyFlowPanel.prototype.renderParentNode = function (node) {
        var nodeType = node.nodeName.toLowerCase();
        var children = this.renderNodes(this.getChildDomNodes(node));
        if (nodeType === "div")
            return _("div", { key: this.getNodeIndex() }, children);
        return (_("span", { key: this.getNodeIndex(), style: this.getStyle(nodeType) }, children));
    };
    SurveyFlowPanel.prototype.renderNode = function (node) {
        if (!this.hasTextChildNodesOnly(node)) {
            return this.renderParentNode(node);
        }
        var nodeType = node.nodeName.toLowerCase();
        if (nodeType === "question") {
            var question = this.flowPanel.getQuestionByName(node.textContent);
            if (!question)
                return null;
            var questionBody = (_(reactquestion_SurveyQuestion, { key: question.name, element: question, creator: this.creator, css: this.css }));
            return _("span", { key: this.getNodeIndex() }, questionBody);
        }
        if (nodeType === "div") {
            return _("div", { key: this.getNodeIndex() }, node.textContent);
        }
        return (_("span", { key: this.getNodeIndex(), style: this.getStyle(nodeType) }, node.textContent));
    };
    SurveyFlowPanel.prototype.getChildDomNodes = function (node) {
        var domNodes = [];
        for (var i = 0; i < node.childNodes.length; i++) {
            domNodes.push(node.childNodes[i]);
        }
        return domNodes;
    };
    SurveyFlowPanel.prototype.hasTextChildNodesOnly = function (node) {
        var nodes = node.childNodes;
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].nodeName.toLowerCase() !== "#text")
                return false;
        }
        return true;
    };
    SurveyFlowPanel.prototype.renderContent = function (style, rows) {
        return _("f-panel", { style: style }, rows);
    };
    return SurveyFlowPanel;
}(panel_SurveyPanel));

ReactElementFactory.Instance.registerElement("flowpanel", function (props) {
    return _(flow_panel_SurveyFlowPanel, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/reactquestion_checkbox.tsx
var reactquestion_checkbox_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var reactquestion_checkbox_SurveyQuestionCheckbox = /** @class */ (function (_super) {
    reactquestion_checkbox_extends(SurveyQuestionCheckbox, _super);
    function SurveyQuestionCheckbox(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionCheckbox.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionCheckbox.prototype.renderElement = function () {
        var _this = this;
        var cssClasses = this.question.cssClasses;
        return (_("fieldset", { className: this.question.getSelectBaseRootCss(), ref: function (fieldset) { return (_this.setControl(fieldset)); }, role: this.question.a11y_input_ariaRole, "aria-required": this.question.a11y_input_ariaRequired, "aria-label": this.question.a11y_input_ariaLabel, "aria-labelledby": this.question.a11y_input_ariaLabelledBy, "aria-describedby": this.question.a11y_input_ariaDescribedBy, "aria-invalid": this.question.a11y_input_ariaInvalid, "aria-errormessage": this.question.a11y_input_ariaErrormessage },
            _("legend", { className: "sv-hidden" }, this.question.locTitle.renderedHtml),
            this.getHeader(),
            this.question.hasColumns
                ? this.getColumnedBody(cssClasses)
                : this.getBody(cssClasses),
            this.getFooter(),
            this.question.isOtherSelected ? this.renderOther() : null));
    };
    SurveyQuestionCheckbox.prototype.getHeader = function () {
        var _this = this;
        if (this.question.hasHeadItems) {
            return this.question.headItems.map(function (item, ii) {
                return _this.renderItem(item, false, _this.question.cssClasses);
            });
        }
    };
    SurveyQuestionCheckbox.prototype.getFooter = function () {
        var _this = this;
        if (this.question.hasFootItems) {
            return this.question.footItems.map(function (item, ii) {
                return _this.renderItem(item, false, _this.question.cssClasses);
            });
        }
    };
    SurveyQuestionCheckbox.prototype.getColumnedBody = function (cssClasses) {
        return (_("div", { className: cssClasses.rootMultiColumn }, this.getColumns(cssClasses)));
    };
    SurveyQuestionCheckbox.prototype.getColumns = function (cssClasses) {
        var _this = this;
        return this.question.columns.map(function (column, ci) {
            var items = column.map(function (item, ii) {
                return _this.renderItem(item, ci === 0 && ii === 0, cssClasses, "" + ci + ii);
            });
            return (_("div", { key: "column" + ci + _this.question.getItemsColumnKey(column), className: _this.question.getColumnClass(), role: "presentation" }, items));
        });
    };
    SurveyQuestionCheckbox.prototype.getBody = function (cssClasses) {
        if (this.question.blockedRow) {
            return _("div", { className: cssClasses.rootRow }, this.getItems(cssClasses, this.question.dataChoices));
        }
        else
            return _(k, null, this.getItems(cssClasses, this.question.bodyItems));
    };
    SurveyQuestionCheckbox.prototype.getItems = function (cssClasses, choices) {
        var renderedItems = [];
        for (var i = 0; i < choices.length; i++) {
            var item = choices[i];
            var key = "item" + item.value;
            var renderedItem = this.renderItem(item, i == 0, cssClasses, "" + i);
            if (!!renderedItem) {
                renderedItems.push(renderedItem);
            }
        }
        return renderedItems;
    };
    Object.defineProperty(SurveyQuestionCheckbox.prototype, "textStyle", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionCheckbox.prototype.renderOther = function () {
        var cssClasses = this.question.cssClasses;
        return (_("div", { className: this.question.getCommentAreaCss(true) },
            _(SurveyQuestionOtherValueItem, { question: this.question, otherCss: cssClasses.other, cssClasses: cssClasses, isDisplayMode: this.isDisplayMode })));
    };
    SurveyQuestionCheckbox.prototype.renderItem = function (item, isFirst, cssClasses, index) {
        var renderedItem = ReactElementFactory.Instance.createElement(this.question.itemComponent, {
            key: item.value,
            question: this.question,
            cssClasses: cssClasses,
            isDisplayMode: this.isDisplayMode,
            item: item,
            textStyle: this.textStyle,
            index: index,
            isFirst: isFirst,
        });
        var survey = this.question.survey;
        var wrappedItem = null;
        if (!!survey && !!renderedItem) {
            wrappedItem = reactsurveymodel_ReactSurveyElementsWrapper.wrapItemValue(survey, renderedItem, this.question, item);
        }
        return wrappedItem !== null && wrappedItem !== void 0 ? wrappedItem : renderedItem;
    };
    return SurveyQuestionCheckbox;
}(reactquestion_element_SurveyQuestionElementBase));

var reactquestion_checkbox_SurveyQuestionCheckboxItem = /** @class */ (function (_super) {
    reactquestion_checkbox_extends(SurveyQuestionCheckboxItem, _super);
    function SurveyQuestionCheckboxItem(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnChange = function (event) {
            _this.question.clickItemHandler(_this.item, event.target.checked);
        };
        _this.rootRef = b();
        return _this;
    }
    SurveyQuestionCheckboxItem.prototype.getStateElement = function () {
        return this.item;
    };
    Object.defineProperty(SurveyQuestionCheckboxItem.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionCheckboxItem.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionCheckboxItem.prototype, "textStyle", {
        get: function () {
            return this.props.textStyle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionCheckboxItem.prototype, "isFirst", {
        get: function () {
            return this.props.isFirst;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionCheckboxItem.prototype, "index", {
        get: function () {
            return this.props.index;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionCheckboxItem.prototype, "hideCaption", {
        get: function () {
            return this.props.hideCaption === true;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionCheckboxItem.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        if (prevProps.item !== this.props.item && !this.question.isDesignMode) {
            if (this.props.item) {
                this.props.item.setRootElement(this.rootRef.current);
            }
            if (prevProps.item) {
                prevProps.item.setRootElement(undefined);
            }
        }
    };
    SurveyQuestionCheckboxItem.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (!_super.prototype.shouldComponentUpdate.call(this, nextProps, nextState))
            return false;
        return (!this.question.customWidget ||
            !!this.question.customWidgetData.isNeedRender ||
            !!this.question.customWidget.widgetJson.isDefaultRender ||
            !!this.question.customWidget.widgetJson.render);
    };
    SurveyQuestionCheckboxItem.prototype.canRender = function () {
        return !!this.item && !!this.question;
    };
    SurveyQuestionCheckboxItem.prototype.renderElement = function () {
        var isChecked = this.question.isItemSelected(this.item);
        return this.renderCheckbox(isChecked, null);
    };
    Object.defineProperty(SurveyQuestionCheckboxItem.prototype, "inputStyle", {
        get: function () {
            return null; //{ marginRight: "3px" };
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionCheckboxItem.prototype.renderCheckbox = function (isChecked, otherItem) {
        var id = this.question.getItemId(this.item);
        var itemClass = this.question.getItemClass(this.item);
        var labelClass = this.question.getLabelClass(this.item);
        var itemLabel = !this.hideCaption ? _("span", { className: this.cssClasses.controlLabel }, this.renderLocString(this.item.locText, this.textStyle)) : null;
        return (_("div", { className: itemClass, role: "presentation", ref: this.rootRef },
            _("label", { className: labelClass },
                _("input", { className: this.cssClasses.itemControl, type: "checkbox", name: this.question.name + this.item.id, value: this.item.value, id: id, style: this.inputStyle, disabled: !this.question.getItemEnabled(this.item), readOnly: this.question.isReadOnlyAttr, checked: isChecked, onChange: this.handleOnChange, required: this.question.hasRequiredError() }),
                this.cssClasses.materialDecorator ?
                    _("span", { className: this.cssClasses.materialDecorator }, this.question.itemSvgIcon ?
                        _("svg", { className: this.cssClasses.itemDecorator },
                            _("use", { xlinkHref: this.question.itemSvgIcon })) :
                        null) :
                    null,
                itemLabel),
            otherItem));
    };
    SurveyQuestionCheckboxItem.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        if (!this.question.isDesignMode) {
            this.item.setRootElement(this.rootRef.current);
        }
    };
    SurveyQuestionCheckboxItem.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        if (!this.question.isDesignMode) {
            this.item.setRootElement(undefined);
        }
    };
    return SurveyQuestionCheckboxItem;
}(ReactSurveyElement));

ReactElementFactory.Instance.registerElement("survey-checkbox-item", function (props) {
    return _(reactquestion_checkbox_SurveyQuestionCheckboxItem, props);
});
ReactQuestionFactory.Instance.registerQuestion("checkbox", function (props) {
    return _(reactquestion_checkbox_SurveyQuestionCheckbox, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/reactquestion_ranking.tsx
var reactquestion_ranking_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var reactquestion_ranking_SurveyQuestionRanking = /** @class */ (function (_super) {
    reactquestion_ranking_extends(SurveyQuestionRanking, _super);
    function SurveyQuestionRanking() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyQuestionRanking.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionRanking.prototype.renderElement = function () {
        var _this = this;
        if (!this.question.selectToRankEnabled) {
            return (_("div", { className: this.question.rootClass, ref: function (root) { return (_this.setControl(root)); } }, this.getItems()));
        }
        else {
            var unrankedItem = true;
            return (_("div", { className: this.question.rootClass, ref: function (root) { return (_this.setControl(root)); } },
                _("div", { className: this.question.getContainerClasses("from"), "data-ranking": "from-container" },
                    this.getItems(this.question.renderedUnRankingChoices, unrankedItem),
                    this.question.renderedUnRankingChoices.length === 0 ? _("div", { className: this.question.cssClasses.containerPlaceholder },
                        " ",
                        this.renderLocString(this.question.locSelectToRankEmptyRankedAreaText),
                        " ") : null),
                _("div", { className: this.question.cssClasses.containersDivider }),
                _("div", { className: this.question.getContainerClasses("to"), "data-ranking": "to-container" },
                    this.getItems(),
                    this.question.renderedRankingChoices.length === 0 ? _("div", { className: this.question.cssClasses.containerPlaceholder },
                        " ",
                        this.renderLocString(this.question.locSelectToRankEmptyUnrankedAreaText),
                        " ") : null)));
        }
    };
    SurveyQuestionRanking.prototype.getItems = function (choices, unrankedItem) {
        var _this = this;
        if (choices === void 0) { choices = this.question.renderedRankingChoices; }
        var items = [];
        var _loop_1 = function (i) {
            var item = choices[i];
            items.push(this_1.renderItem(item, i, function (event) {
                _this.question.handleKeydown.call(_this.question, event, item);
            }, function (event) {
                event.persist();
                //event.preventDefault();
                _this.question.handlePointerDown.call(_this.question, event, item, event.currentTarget);
            }, function (event) {
                event.persist();
                //event.preventDefault();
                _this.question.handlePointerUp.call(_this.question, event, item, event.currentTarget);
            }, this_1.question.cssClasses, this_1.question.getItemClass(item), this_1.question, unrankedItem));
        };
        var this_1 = this;
        for (var i = 0; i < choices.length; i++) {
            _loop_1(i);
        }
        return items;
    };
    SurveyQuestionRanking.prototype.renderItem = function (item, i, handleKeydown, handlePointerDown, handlePointerUp, cssClasses, itemClass, question, unrankedItem) {
        var key = "id-" + item.renderedId;
        var text = this.renderLocString(item.locText);
        var index = i;
        var indexText = this.question.getNumberByIndex(index);
        var tabIndex = this.question.getItemTabIndex(item);
        var renderedItem = (_(reactquestion_ranking_SurveyQuestionRankingItem, { key: item.value, text: text, index: index, indexText: indexText, itemTabIndex: tabIndex, handleKeydown: handleKeydown, handlePointerDown: handlePointerDown, handlePointerUp: handlePointerUp, cssClasses: cssClasses, itemClass: itemClass, question: question, unrankedItem: unrankedItem, item: item }));
        var survey = this.question.survey;
        var wrappedItem = null;
        if (!!survey) {
            wrappedItem = reactsurveymodel_ReactSurveyElementsWrapper.wrapItemValue(survey, renderedItem, this.question, item);
        }
        return wrappedItem !== null && wrappedItem !== void 0 ? wrappedItem : renderedItem;
    };
    return SurveyQuestionRanking;
}(reactquestion_element_SurveyQuestionElementBase));

var reactquestion_ranking_SurveyQuestionRankingItem = /** @class */ (function (_super) {
    reactquestion_ranking_extends(SurveyQuestionRankingItem, _super);
    function SurveyQuestionRankingItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyQuestionRankingItem.prototype, "text", {
        get: function () {
            return this.props.text;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRankingItem.prototype, "index", {
        get: function () {
            return this.props.index;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRankingItem.prototype, "indexText", {
        get: function () {
            return this.props.indexText;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRankingItem.prototype, "handleKeydown", {
        get: function () {
            return this.props.handleKeydown;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRankingItem.prototype, "handlePointerDown", {
        get: function () {
            return this.props.handlePointerDown;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRankingItem.prototype, "handlePointerUp", {
        get: function () {
            return this.props.handlePointerUp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRankingItem.prototype, "cssClasses", {
        get: function () {
            return this.props.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRankingItem.prototype, "itemClass", {
        get: function () {
            return this.props.itemClass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRankingItem.prototype, "itemTabIndex", {
        get: function () {
            return this.props.itemTabIndex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRankingItem.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRankingItem.prototype, "unrankedItem", {
        get: function () {
            return this.props.unrankedItem;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRankingItem.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionRankingItem.prototype.renderEmptyIcon = function () {
        return (_("svg", null,
            _("use", { xlinkHref: this.question.dashSvgIcon })));
    };
    SurveyQuestionRankingItem.prototype.renderElement = function () {
        var itemContent = ReactElementFactory.Instance.createElement(this.question.itemComponent, { item: this.item, cssClasses: this.cssClasses });
        return (_("div", { tabIndex: this.itemTabIndex, className: this.itemClass, onKeyDown: this.handleKeydown, onPointerDown: this.handlePointerDown, onPointerUp: this.handlePointerUp, "data-sv-drop-target-ranking-item": this.index },
            _("div", { tabIndex: -1, style: { outline: "none" } },
                _("div", { className: this.cssClasses.itemGhostNode }),
                _("div", { className: this.cssClasses.itemContent },
                    _("div", { className: this.cssClasses.itemIconContainer },
                        _("svg", { className: this.question.getIconHoverCss() },
                            _("use", { xlinkHref: this.question.dragDropSvgIcon })),
                        _("svg", { className: this.question.getIconFocusCss() },
                            _("use", { xlinkHref: this.question.arrowsSvgIcon }))),
                    _("div", { className: this.question.getItemIndexClasses(this.item) }, (!this.unrankedItem && this.indexText) ? this.indexText : this.renderEmptyIcon()),
                    itemContent))));
    };
    return SurveyQuestionRankingItem;
}(ReactSurveyElement));

var reactquestion_ranking_SurveyQuestionRankingItemContent = /** @class */ (function (_super) {
    reactquestion_ranking_extends(SurveyQuestionRankingItemContent, _super);
    function SurveyQuestionRankingItemContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyQuestionRankingItemContent.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRankingItemContent.prototype, "cssClasses", {
        get: function () {
            return this.props.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionRankingItemContent.prototype.renderElement = function () {
        return _("div", { className: this.cssClasses.controlLabel }, reactquestion_element_SurveyElementBase.renderLocString(this.item.locText));
    };
    return SurveyQuestionRankingItemContent;
}(ReactSurveyElement));

ReactElementFactory.Instance.registerElement("sv-ranking-item", function (props) {
    return _(reactquestion_ranking_SurveyQuestionRankingItemContent, props);
});
ReactQuestionFactory.Instance.registerQuestion("ranking", function (props) {
    return _(reactquestion_ranking_SurveyQuestionRanking, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/rating/rating-item.tsx
var rating_item_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var RatingItemBase = /** @class */ (function (_super) {
    rating_item_extends(RatingItemBase, _super);
    function RatingItemBase(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnMouseDown = _this.handleOnMouseDown.bind(_this);
        return _this;
    }
    Object.defineProperty(RatingItemBase.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RatingItemBase.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RatingItemBase.prototype, "index", {
        get: function () {
            return this.props.index;
        },
        enumerable: false,
        configurable: true
    });
    RatingItemBase.prototype.getStateElement = function () {
        return this.item;
    };
    RatingItemBase.prototype.handleOnMouseDown = function (event) {
        this.question.onMouseDown();
    };
    return RatingItemBase;
}(reactquestion_element_SurveyElementBase));

var rating_item_RatingItem = /** @class */ (function (_super) {
    rating_item_extends(RatingItem, _super);
    function RatingItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RatingItem.prototype.render = function () {
        var itemText = this.renderLocString(this.item.locText);
        return (Rn.createElement("label", { onMouseDown: this.handleOnMouseDown, className: this.question.getItemClassByText(this.item.itemValue, this.item.text) },
            Rn.createElement("input", { type: "radio", className: "sv-visuallyhidden", name: this.question.questionName, id: this.question.getInputId(this.index), value: this.item.value, disabled: this.question.isDisabledAttr, readOnly: this.question.isReadOnlyAttr, checked: this.question.value == this.item.value, onClick: this.props.handleOnClick, onChange: function () { }, "aria-required": this.question.ariaRequired, "aria-label": this.question.ariaLabel, "aria-invalid": this.question.ariaInvalid, "aria-errormessage": this.question.ariaErrormessage }),
            Rn.createElement("span", { className: this.question.cssClasses.itemText, "data-text": this.item.text }, itemText)));
    };
    RatingItem.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
    };
    return RatingItem;
}(RatingItemBase));

ReactElementFactory.Instance.registerElement("sv-rating-item", function (props) {
    return Rn.createElement(rating_item_RatingItem, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/rating/rating-item-star.tsx
var rating_item_star_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var rating_item_star_RatingItemStar = /** @class */ (function (_super) {
    rating_item_star_extends(RatingItemStar, _super);
    function RatingItemStar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RatingItemStar.prototype.render = function () {
        var _this = this;
        return (Rn.createElement("label", { onMouseDown: this.handleOnMouseDown, className: this.question.getItemClass(this.item.itemValue), onMouseOver: function (e) { return _this.question.onItemMouseIn(_this.item); }, onMouseOut: function (e) { return _this.question.onItemMouseOut(_this.item); } },
            Rn.createElement("input", { type: "radio", className: "sv-visuallyhidden", name: this.question.questionName, id: this.question.getInputId(this.index), value: this.item.value, disabled: this.question.isDisabledAttr, readOnly: this.question.isReadOnlyAttr, checked: this.question.value == this.item.value, onClick: this.props.handleOnClick, onChange: function () { }, "aria-required": this.question.ariaRequired, "aria-label": this.question.ariaLabel, "aria-invalid": this.question.ariaInvalid, "aria-errormessage": this.question.ariaErrormessage }),
            Rn.createElement(svg_icon_SvgIcon, { className: "sv-star", size: "auto", iconName: this.question.itemStarIcon, title: this.item.text }),
            Rn.createElement(svg_icon_SvgIcon, { className: "sv-star-2", size: "auto", iconName: this.question.itemStarIconAlt, title: this.item.text })));
    };
    return RatingItemStar;
}(RatingItemBase));

ReactElementFactory.Instance.registerElement("sv-rating-item-star", function (props) {
    return Rn.createElement(rating_item_star_RatingItemStar, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/rating/rating-item-smiley.tsx
var rating_item_smiley_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var rating_item_smiley_RatingItemSmiley = /** @class */ (function (_super) {
    rating_item_smiley_extends(RatingItemSmiley, _super);
    function RatingItemSmiley() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RatingItemSmiley.prototype.render = function () {
        var _this = this;
        return (Rn.createElement("label", { onMouseDown: this.handleOnMouseDown, style: this.question.getItemStyle(this.item.itemValue, this.item.highlight), className: this.question.getItemClass(this.item.itemValue), onMouseOver: function (e) { return _this.question.onItemMouseIn(_this.item); }, onMouseOut: function (e) { return _this.question.onItemMouseOut(_this.item); } },
            Rn.createElement("input", { type: "radio", className: "sv-visuallyhidden", name: this.question.questionName, id: this.question.getInputId(this.index), value: this.item.value, disabled: this.question.isDisabledAttr, readOnly: this.question.isReadOnlyAttr, checked: this.question.value == this.item.value, onClick: this.props.handleOnClick, onChange: function () { }, "aria-required": this.question.ariaRequired, "aria-label": this.question.ariaLabel, "aria-invalid": this.question.ariaInvalid, "aria-errormessage": this.question.ariaErrormessage }),
            Rn.createElement(svg_icon_SvgIcon, { size: "auto", iconName: this.question.getItemSmileyIconName(this.item.itemValue), title: this.item.text })));
    };
    return RatingItemSmiley;
}(RatingItemBase));

ReactElementFactory.Instance.registerElement("sv-rating-item-smiley", function (props) {
    return Rn.createElement(rating_item_smiley_RatingItemSmiley, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/rating/rating-dropdown-item.tsx
var rating_dropdown_item_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var rating_dropdown_item_RatingDropdownItem = /** @class */ (function (_super) {
    rating_dropdown_item_extends(RatingDropdownItem, _super);
    function RatingDropdownItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RatingDropdownItem.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    RatingDropdownItem.prototype.getStateElement = function () {
        return this.item;
    };
    RatingDropdownItem.prototype.render = function () {
        if (!this.item)
            return null;
        var item = this.props.item;
        var description = this.renderDescription(item);
        return (Rn.createElement("div", { className: "sd-rating-dropdown-item" },
            Rn.createElement("span", { className: "sd-rating-dropdown-item_text" }, item.title),
            description));
    };
    RatingDropdownItem.prototype.renderDescription = function (item) {
        if (!item.description)
            return null;
        return (Rn.createElement("div", { className: "sd-rating-dropdown-item_description" }, this.renderLocString(item.description, undefined, "locString")));
    };
    return RatingDropdownItem;
}(reactquestion_element_SurveyElementBase));

ReactElementFactory.Instance.registerElement("sv-rating-dropdown-item", function (props) {
    return Rn.createElement(rating_dropdown_item_RatingDropdownItem, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/tagbox-filter.tsx
var tagbox_filter_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var tagbox_filter_TagboxFilterString = /** @class */ (function (_super) {
    tagbox_filter_extends(TagboxFilterString, _super);
    function TagboxFilterString(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(TagboxFilterString.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TagboxFilterString.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    TagboxFilterString.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        this.updateDomElement();
    };
    TagboxFilterString.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.updateDomElement();
    };
    TagboxFilterString.prototype.updateDomElement = function () {
        if (!!this.inputElement) {
            var control = this.inputElement;
            var newValue = this.model.inputStringRendered;
            if (!external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["Helpers"].isTwoValueEquals(newValue, control.value, false, true, false)) {
                control.value = this.model.inputStringRendered;
            }
        }
    };
    TagboxFilterString.prototype.onChange = function (e) {
        var root = external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["settings"].environment.root;
        if (e.target === root.activeElement) {
            this.model.inputStringRendered = e.target.value;
        }
    };
    TagboxFilterString.prototype.keyhandler = function (e) {
        this.model.inputKeyHandler(e);
    };
    TagboxFilterString.prototype.onBlur = function (e) {
        this.question.onBlur(e);
    };
    TagboxFilterString.prototype.onFocus = function (e) {
        this.question.onFocus(e);
    };
    TagboxFilterString.prototype.getStateElement = function () {
        return this.model;
    };
    TagboxFilterString.prototype.render = function () {
        var _this = this;
        return (_("div", { className: this.question.cssClasses.hint },
            this.model.showHintPrefix ?
                (_("div", { className: this.question.cssClasses.hintPrefix },
                    _("span", null, this.model.hintStringPrefix))) : null,
            _("div", { className: this.question.cssClasses.hintSuffixWrapper },
                this.model.showHintString ?
                    (_("div", { className: this.question.cssClasses.hintSuffix },
                        _("span", { style: { visibility: "hidden" }, "data-bind": "text: model.filterString" }, this.model.inputStringRendered),
                        _("span", null, this.model.hintStringSuffix))) : null,
                _("input", { type: "text", autoComplete: "off", id: this.question.getInputId(), inputMode: this.model.inputMode, ref: function (element) { return (_this.inputElement = element); }, className: this.question.cssClasses.filterStringInput, disabled: this.question.isInputReadOnly, readOnly: this.model.filterReadOnly ? true : undefined, size: !this.model.inputStringRendered ? 1 : undefined, role: this.model.filterStringEnabled ? this.question.ariaRole : undefined, "aria-expanded": this.question.ariaExpanded, "aria-label": this.question.a11y_input_ariaLabel, "aria-labelledby": this.question.a11y_input_ariaLabelledBy, "aria-describedby": this.question.a11y_input_ariaDescribedBy, "aria-controls": this.model.listElementId, "aria-activedescendant": this.model.ariaActivedescendant, placeholder: this.model.filterStringPlaceholder, onKeyDown: function (e) { _this.keyhandler(e); }, onChange: function (e) { _this.onChange(e); }, onBlur: function (e) { _this.onBlur(e); }, onFocus: function (e) { _this.onFocus(e); } }))));
    };
    return TagboxFilterString;
}(reactquestion_element_SurveyElementBase));

ReactQuestionFactory.Instance.registerQuestion("sv-tagbox-filter", function (props) {
    return _(tagbox_filter_TagboxFilterString, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/dropdown-item.tsx
var dropdown_item_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var dropdown_item_SurveyQuestionOptionItem = /** @class */ (function (_super) {
    dropdown_item_extends(SurveyQuestionOptionItem, _super);
    function SurveyQuestionOptionItem(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { changed: 0 };
        _this.setupModel();
        return _this;
    }
    SurveyQuestionOptionItem.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        this.setupModel();
    };
    SurveyQuestionOptionItem.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.setupModel();
    };
    SurveyQuestionOptionItem.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        if (!!this.item) {
            this.item.locText.onChanged = function () { };
        }
    };
    SurveyQuestionOptionItem.prototype.setupModel = function () {
        if (!this.item.locText)
            return;
        var self = this;
        this.item.locText.onChanged = function () {
            self.setState({ changed: self.state.changed + 1 });
        };
    };
    SurveyQuestionOptionItem.prototype.getStateElement = function () {
        return this.item;
    };
    Object.defineProperty(SurveyQuestionOptionItem.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionOptionItem.prototype.canRender = function () {
        return !!this.item;
    };
    SurveyQuestionOptionItem.prototype.renderElement = function () {
        return (_("option", { value: this.item.value, disabled: !this.item.isEnabled }, this.item.text));
    };
    return SurveyQuestionOptionItem;
}(ReactSurveyElement));


// CONCATENATED MODULE: ./packages/survey-react-ui/src/dropdown-base.tsx
var dropdown_base_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var dropdown_base_SurveyQuestionDropdownBase = /** @class */ (function (_super) {
    dropdown_base_extends(SurveyQuestionDropdownBase, _super);
    function SurveyQuestionDropdownBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.click = function (event) {
            var _a;
            (_a = _this.question.dropdownListModel) === null || _a === void 0 ? void 0 : _a.onClick(event);
        };
        _this.chevronPointerDown = function (event) {
            var _a;
            (_a = _this.question.dropdownListModel) === null || _a === void 0 ? void 0 : _a.chevronPointerDown(event);
        };
        _this.clear = function (event) {
            var _a;
            (_a = _this.question.dropdownListModel) === null || _a === void 0 ? void 0 : _a.onClear(event);
        };
        _this.keyhandler = function (event) {
            var _a;
            (_a = _this.question.dropdownListModel) === null || _a === void 0 ? void 0 : _a.keyHandler(event);
        };
        _this.blur = function (event) {
            _this.updateInputDomElement();
            _this.question.onBlur(event);
        };
        _this.focus = function (event) {
            _this.question.onFocus(event);
        };
        return _this;
    }
    SurveyQuestionDropdownBase.prototype.getStateElement = function () {
        return this.question["dropdownListModel"];
    };
    SurveyQuestionDropdownBase.prototype.setValueCore = function (newValue) {
        this.questionBase.renderedValue = newValue;
    };
    SurveyQuestionDropdownBase.prototype.getValueCore = function () {
        return this.questionBase.renderedValue;
    };
    SurveyQuestionDropdownBase.prototype.renderReadOnlyElement = function () {
        return _("div", null, this.question.readOnlyText);
    };
    SurveyQuestionDropdownBase.prototype.renderSelect = function (cssClasses) {
        var _this = this;
        var _a, _b;
        var selectElement = null;
        if (this.question.isReadOnly) {
            var text = (this.question.selectedItemLocText) ? this.renderLocString(this.question.selectedItemLocText) : "";
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            selectElement = _("div", { id: this.question.inputId, "aria-label": this.question.a11y_input_ariaLabel, "aria-labelledby": this.question.a11y_input_ariaLabelledBy, "aria-describedby": this.question.a11y_input_ariaDescribedBy, tabIndex: this.question.isDisabledAttr ? undefined : 0, className: this.question.getControlClass(), ref: function (div) { return (_this.setControl(div)); } },
                text,
                this.renderReadOnlyElement());
        }
        else {
            selectElement = _(k, null,
                this.renderInput(this.question["dropdownListModel"]),
                _(popup_Popup, { model: (_b = (_a = this.question) === null || _a === void 0 ? void 0 : _a.dropdownListModel) === null || _b === void 0 ? void 0 : _b.popupModel }));
        }
        return (_("div", { className: cssClasses.selectWrapper, onClick: this.click },
            selectElement,
            this.createChevronButton()));
    };
    SurveyQuestionDropdownBase.prototype.renderValueElement = function (dropdownListModel) {
        if (this.question.showInputFieldComponent) {
            return ReactElementFactory.Instance.createElement(this.question.inputFieldComponentName, { item: dropdownListModel.getSelectedAction(), question: this.question });
        }
        else if (this.question.showSelectedItemLocText) {
            return this.renderLocString(this.question.selectedItemLocText);
        }
        return null;
    };
    SurveyQuestionDropdownBase.prototype.renderInput = function (dropdownListModel) {
        var _this = this;
        var valueElement = this.renderValueElement(dropdownListModel);
        var root = external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["settings"].environment.root;
        var onInputChange = function (e) {
            if (e.target === root.activeElement) {
                dropdownListModel.inputStringRendered = e.target.value;
            }
        };
        return (_("div", { id: this.question.inputId, className: this.question.getControlClass(), tabIndex: dropdownListModel.noTabIndex ? undefined : 0, 
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            disabled: this.question.isDisabledAttr, required: this.question.isRequired, onKeyDown: this.keyhandler, onBlur: this.blur, onFocus: this.focus, role: this.question.ariaRole, "aria-required": this.question.ariaRequired, "aria-label": this.question.ariaLabel, "aria-invalid": this.question.ariaInvalid, "aria-errormessage": this.question.ariaErrormessage, "aria-expanded": this.question.ariaExpanded, "aria-controls": dropdownListModel.listElementId, "aria-activedescendant": dropdownListModel.ariaActivedescendant, ref: function (div) { return (_this.setControl(div)); } },
            dropdownListModel.showHintPrefix ?
                (_("div", { className: this.question.cssClasses.hintPrefix },
                    _("span", null, dropdownListModel.hintStringPrefix))) : null,
            _("div", { className: this.question.cssClasses.controlValue },
                dropdownListModel.showHintString ?
                    (_("div", { className: this.question.cssClasses.hintSuffix },
                        _("span", { style: { visibility: "hidden" }, "data-bind": "text: model.filterString" }, dropdownListModel.inputStringRendered),
                        _("span", null, dropdownListModel.hintStringSuffix))) : null,
                valueElement,
                _("input", { type: "text", autoComplete: "off", id: this.question.getInputId(), ref: function (element) { return (_this.inputElement = element); }, className: this.question.cssClasses.filterStringInput, role: dropdownListModel.filterStringEnabled ? this.question.ariaRole : undefined, "aria-expanded": this.question.ariaExpanded, "aria-label": this.question.a11y_input_ariaLabel, "aria-labelledby": this.question.a11y_input_ariaLabelledBy, "aria-describedby": this.question.a11y_input_ariaDescribedBy, "aria-controls": dropdownListModel.listElementId, "aria-activedescendant": dropdownListModel.ariaActivedescendant, placeholder: dropdownListModel.placeholderRendered, readOnly: dropdownListModel.filterReadOnly ? true : undefined, tabIndex: dropdownListModel.noTabIndex ? undefined : -1, disabled: this.question.isDisabledAttr, inputMode: dropdownListModel.inputMode, onChange: function (e) { onInputChange(e); }, onBlur: this.blur, onFocus: this.focus })),
            this.createClearButton()));
    };
    SurveyQuestionDropdownBase.prototype.createClearButton = function () {
        if (!this.question.allowClear || !this.question.cssClasses.cleanButtonIconId)
            return null;
        var style = { display: !this.question.showClearButton ? "none" : "" };
        return (_("div", { className: this.question.cssClasses.cleanButton, style: style, onClick: this.clear, "aria-hidden": "true" },
            _(svg_icon_SvgIcon, { className: this.question.cssClasses.cleanButtonSvg, iconName: this.question.cssClasses.cleanButtonIconId, title: this.question.clearCaption, size: "auto" })));
    };
    SurveyQuestionDropdownBase.prototype.createChevronButton = function () {
        if (!this.question.cssClasses.chevronButtonIconId)
            return null;
        return (_("div", { className: this.question.cssClasses.chevronButton, "aria-hidden": "true", onPointerDown: this.chevronPointerDown },
            _(svg_icon_SvgIcon, { className: this.question.cssClasses.chevronButtonSvg, iconName: this.question.cssClasses.chevronButtonIconId, size: "auto" })));
    };
    SurveyQuestionDropdownBase.prototype.renderOther = function (cssClasses) {
        return (_("div", { className: this.question.getCommentAreaCss(true) },
            _(SurveyQuestionOtherValueItem, { question: this.question, otherCss: cssClasses.other, cssClasses: cssClasses, isDisplayMode: this.isDisplayMode, isOther: true })));
    };
    SurveyQuestionDropdownBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        this.updateInputDomElement();
    };
    SurveyQuestionDropdownBase.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.updateInputDomElement();
    };
    SurveyQuestionDropdownBase.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        if (this.question.dropdownListModel)
            this.question.dropdownListModel.focused = false;
    };
    SurveyQuestionDropdownBase.prototype.updateInputDomElement = function () {
        if (!!this.inputElement) {
            var control = this.inputElement;
            var newValue = this.question.dropdownListModel.inputStringRendered;
            if (!external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["Helpers"].isTwoValueEquals(newValue, control.value, false, true, false)) {
                control.value = this.question.dropdownListModel.inputStringRendered;
            }
        }
    };
    return SurveyQuestionDropdownBase;
}(reactquestion_element_SurveyQuestionUncontrolledElement));


// CONCATENATED MODULE: ./packages/survey-react-ui/src/reactquestion_dropdown.tsx
var reactquestion_dropdown_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var reactquestion_dropdown_SurveyQuestionDropdown = /** @class */ (function (_super) {
    reactquestion_dropdown_extends(SurveyQuestionDropdown, _super);
    function SurveyQuestionDropdown(props) {
        return _super.call(this, props) || this;
    }
    SurveyQuestionDropdown.prototype.renderElement = function () {
        var cssClasses = this.question.cssClasses;
        var comment = this.question.isOtherSelected ? this.renderOther(cssClasses) : null;
        var select = this.renderSelect(cssClasses);
        return (_("div", { className: this.question.renderCssRoot },
            select,
            comment));
    };
    return SurveyQuestionDropdown;
}(dropdown_base_SurveyQuestionDropdownBase));

ReactQuestionFactory.Instance.registerQuestion("dropdown", function (props) {
    return _(reactquestion_dropdown_SurveyQuestionDropdown, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/tagbox-item.tsx
var tagbox_item_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var tagbox_item_SurveyQuestionTagboxItem = /** @class */ (function (_super) {
    tagbox_item_extends(SurveyQuestionTagboxItem, _super);
    function SurveyQuestionTagboxItem(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionTagboxItem.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionTagboxItem.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionTagboxItem.prototype.canRender = function () {
        return !!this.item && !!this.question;
    };
    SurveyQuestionTagboxItem.prototype.renderElement = function () {
        var _this = this;
        var text = this.renderLocString(this.item.locText);
        var removeItem = function (event) {
            _this.question.dropdownListModel.deselectItem(_this.item.value);
            event.stopPropagation();
        };
        return (_("div", { className: "sv-tagbox__item" },
            _("div", { className: "sv-tagbox__item-text" }, text),
            _("div", { className: this.question.cssClasses.cleanItemButton, onClick: removeItem },
                _(svg_icon_SvgIcon, { className: this.question.cssClasses.cleanItemButtonSvg, iconName: this.question.cssClasses.cleanItemButtonIconId, size: "auto" }))));
    };
    return SurveyQuestionTagboxItem;
}(ReactSurveyElement));


// CONCATENATED MODULE: ./packages/survey-react-ui/src/reactquestion_tagbox.tsx
var reactquestion_tagbox_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var reactquestion_tagbox_SurveyQuestionTagbox = /** @class */ (function (_super) {
    reactquestion_tagbox_extends(SurveyQuestionTagbox, _super);
    function SurveyQuestionTagbox(props) {
        return _super.call(this, props) || this;
    }
    SurveyQuestionTagbox.prototype.renderItem = function (key, item) {
        var renderedItem = (_(tagbox_item_SurveyQuestionTagboxItem, { key: key, question: this.question, item: item }));
        return renderedItem;
    };
    SurveyQuestionTagbox.prototype.renderInput = function (dropdownListModel) {
        var _this = this;
        var dropdownMultiSelectListModel = dropdownListModel;
        var items = this.question.selectedChoices.map(function (choice, index) { return _this.renderItem("item" + index, choice); });
        return (_("div", { id: this.question.inputId, className: this.question.getControlClass(), tabIndex: dropdownListModel.noTabIndex ? undefined : 0, 
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            disabled: this.question.isInputReadOnly, required: this.question.isRequired, onKeyDown: this.keyhandler, onBlur: this.blur, role: this.question.ariaRole, "aria-required": this.question.ariaRequired, "aria-label": this.question.ariaLabel, "aria-invalid": this.question.ariaInvalid, "aria-errormessage": this.question.ariaErrormessage, "aria-expanded": this.question.ariaExpanded, "aria-controls": dropdownListModel.listElementId, "aria-activedescendant": dropdownListModel.ariaActivedescendant, ref: function (div) { return (_this.setControl(div)); } },
            _("div", { className: this.question.cssClasses.controlValue },
                items,
                _(tagbox_filter_TagboxFilterString, { model: dropdownMultiSelectListModel, question: this.question })),
            this.createClearButton()));
    };
    SurveyQuestionTagbox.prototype.renderElement = function () {
        var cssClasses = this.question.cssClasses;
        var comment = this.question.isOtherSelected ? this.renderOther(cssClasses) : null;
        var select = this.renderSelect(cssClasses);
        return (_("div", { className: this.question.renderCssRoot },
            select,
            comment));
    };
    SurveyQuestionTagbox.prototype.renderReadOnlyElement = function () {
        if (this.question.locReadOnlyText) {
            return this.renderLocString(this.question.locReadOnlyText);
        }
        else {
            return null;
        }
    };
    return SurveyQuestionTagbox;
}(dropdown_base_SurveyQuestionDropdownBase));

ReactQuestionFactory.Instance.registerQuestion("tagbox", function (props) {
    return _(reactquestion_tagbox_SurveyQuestionTagbox, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/dropdown-select.tsx
var dropdown_select_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var dropdown_select_SurveyQuestionDropdownSelect = /** @class */ (function (_super) {
    dropdown_select_extends(SurveyQuestionDropdownSelect, _super);
    function SurveyQuestionDropdownSelect(props) {
        return _super.call(this, props) || this;
    }
    SurveyQuestionDropdownSelect.prototype.renderSelect = function (cssClasses) {
        var _this = this;
        var click = function (event) {
            _this.question.onClick(event);
        };
        var keyup = function (event) {
            _this.question.onKeyUp(event);
        };
        var selectElement = this.isDisplayMode ? (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        _("div", { id: this.question.inputId, className: this.question.getControlClass(), disabled: true }, this.question.readOnlyText)) :
            (_("select", { id: this.question.inputId, className: this.question.getControlClass(), ref: function (select) { return (_this.setControl(select)); }, autoComplete: this.question.autocomplete, onChange: this.updateValueOnEvent, onInput: this.updateValueOnEvent, onClick: click, onKeyUp: keyup, "aria-required": this.question.ariaRequired, "aria-label": this.question.ariaLabel, "aria-invalid": this.question.ariaInvalid, "aria-errormessage": this.question.ariaErrormessage, required: this.question.isRequired },
                this.question.allowClear ? (_("option", { value: "" }, this.question.placeholder)) : null,
                this.question.visibleChoices.map(function (item, i) { return _(dropdown_item_SurveyQuestionOptionItem, { key: "item" + i, item: item }); })));
        return (_("div", { className: cssClasses.selectWrapper },
            selectElement,
            this.createChevronButton()));
    };
    return SurveyQuestionDropdownSelect;
}(reactquestion_dropdown_SurveyQuestionDropdown));

ReactQuestionFactory.Instance.registerQuestion("sv-dropdown-select", function (props) {
    return _(dropdown_select_SurveyQuestionDropdownSelect, props);
});
external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["RendererFactory"].Instance.registerRenderer("dropdown", "select", "sv-dropdown-select");

// CONCATENATED MODULE: ./packages/survey-react-ui/src/reactquestion_matrix.tsx
var reactquestion_matrix_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var reactquestion_matrix_SurveyQuestionMatrix = /** @class */ (function (_super) {
    reactquestion_matrix_extends(SurveyQuestionMatrix, _super);
    function SurveyQuestionMatrix(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { rowsChanged: 0 };
        return _this;
    }
    Object.defineProperty(SurveyQuestionMatrix.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionMatrix.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        if (this.question) {
            var self = this;
            this.question.visibleRowsChangedCallback = function () {
                self.setState({ rowsChanged: self.state.rowsChanged + 1 });
            };
        }
    };
    SurveyQuestionMatrix.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        if (this.question) {
            this.question.visibleRowsChangedCallback = null;
        }
    };
    SurveyQuestionMatrix.prototype.renderElement = function () {
        var _this = this;
        var cssClasses = this.question.cssClasses;
        var rowsTH = this.question.hasRows ? _("td", null) : null;
        var headers = [];
        for (var i = 0; i < this.question.visibleColumns.length; i++) {
            var column = this.question.visibleColumns[i];
            var key = "column" + i;
            var columText = this.renderLocString(column.locText);
            var style = {};
            if (!!this.question.columnMinWidth) {
                style.minWidth = this.question.columnMinWidth;
                style.width = this.question.columnMinWidth;
            }
            headers.push(_("th", { className: this.question.cssClasses.headerCell, style: style, key: key }, this.wrapCell({ column: column }, columText, "column-header")));
        }
        var rows = [];
        var visibleRows = this.question.visibleRows;
        for (var i = 0; i < visibleRows.length; i++) {
            var row = visibleRows[i];
            var key = "row-" + row.name + "-" + i;
            rows.push(_(reactquestion_matrix_SurveyQuestionMatrixRow, { key: key, question: this.question, cssClasses: cssClasses, row: row, isFirst: i == 0 }));
        }
        var header = !this.question.showHeader ? null : (_("thead", null,
            _("tr", null,
                rowsTH,
                headers)));
        return (_("div", { className: cssClasses.tableWrapper, ref: function (root) { return (_this.setControl(root)); } },
            _("fieldset", null,
                _("legend", { className: "sv-hidden" }, this.question.locTitle.renderedHtml),
                _("table", { className: this.question.getTableCss() },
                    header,
                    _("tbody", null, rows)))));
    };
    return SurveyQuestionMatrix;
}(reactquestion_element_SurveyQuestionElementBase));

var reactquestion_matrix_SurveyQuestionMatrixRow = /** @class */ (function (_super) {
    reactquestion_matrix_extends(SurveyQuestionMatrixRow, _super);
    function SurveyQuestionMatrixRow(props) {
        return _super.call(this, props) || this;
    }
    SurveyQuestionMatrixRow.prototype.getStateElement = function () {
        if (!!this.row)
            return this.row.item;
        return _super.prototype.getStateElement.call(this);
    };
    Object.defineProperty(SurveyQuestionMatrixRow.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionMatrixRow.prototype, "row", {
        get: function () {
            return this.props.row;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionMatrixRow.prototype.wrapCell = function (cell, element, reason) {
        if (!reason) {
            return element;
        }
        var survey = this.question.survey;
        var wrapper = null;
        if (survey) {
            wrapper = reactsurveymodel_ReactSurveyElementsWrapper.wrapMatrixCell(survey, element, cell, reason);
        }
        return wrapper !== null && wrapper !== void 0 ? wrapper : element;
    };
    SurveyQuestionMatrixRow.prototype.canRender = function () {
        return !!this.row;
    };
    SurveyQuestionMatrixRow.prototype.renderElement = function () {
        var rowsTD = null;
        if (this.question.hasRows) {
            var rowText = this.renderLocString(this.row.locText);
            var style = {};
            if (!!this.question.rowTitleWidth) {
                style.minWidth = this.question.rowTitleWidth;
                style.width = this.question.rowTitleWidth;
            }
            rowsTD = _("td", { style: style, className: this.row.rowTextClasses }, this.wrapCell({ row: this.row }, rowText, "row-header"));
        }
        var tds = this.generateTds();
        return (_("tr", { className: this.row.rowClasses || undefined },
            rowsTD,
            tds));
    };
    SurveyQuestionMatrixRow.prototype.generateTds = function () {
        var _this = this;
        var tds = [];
        var row = this.row;
        var cellComponent = this.question.cellComponent;
        var _loop_1 = function () {
            var td = null;
            var column = this_1.question.visibleColumns[i];
            var key = "value" + i;
            var itemClass = this_1.question.getItemClass(row, column);
            if (this_1.question.hasCellText) {
                var getHandler = function (column) { return function () { return _this.cellClick(row, column); }; };
                td = (_("td", { key: key, className: itemClass, onClick: getHandler ? getHandler(column) : function () { } }, this_1.renderLocString(this_1.question.getCellDisplayLocText(row.name, column))));
            }
            else {
                var renderedCell = ReactElementFactory.Instance.createElement(cellComponent, {
                    question: this_1.question,
                    row: this_1.row,
                    column: column,
                    columnIndex: i,
                    cssClasses: this_1.cssClasses,
                    cellChanged: function () { _this.cellClick(_this.row, column); }
                });
                td = (_("td", { key: key, "data-responsive-title": column.locText.renderedHtml, className: this_1.question.cssClasses.cell }, renderedCell));
            }
            tds.push(td);
        };
        var this_1 = this;
        for (var i = 0; i < this.question.visibleColumns.length; i++) {
            _loop_1();
        }
        return tds;
    };
    SurveyQuestionMatrixRow.prototype.cellClick = function (row, column) {
        row.value = column.value;
        this.setState({ value: this.row.value });
    };
    return SurveyQuestionMatrixRow;
}(ReactSurveyElement));

var reactquestion_matrix_SurveyQuestionMatrixCell = /** @class */ (function (_super) {
    reactquestion_matrix_extends(SurveyQuestionMatrixCell, _super);
    function SurveyQuestionMatrixCell(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnMouseDown = _this.handleOnMouseDown.bind(_this);
        _this.handleOnChange = _this.handleOnChange.bind(_this);
        return _this;
    }
    SurveyQuestionMatrixCell.prototype.handleOnChange = function (event) {
        if (!!this.props.cellChanged) {
            this.props.cellChanged();
        }
    };
    SurveyQuestionMatrixCell.prototype.handleOnMouseDown = function (event) {
        this.question.onMouseDown();
    };
    Object.defineProperty(SurveyQuestionMatrixCell.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionMatrixCell.prototype, "row", {
        get: function () {
            return this.props.row;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionMatrixCell.prototype, "column", {
        get: function () {
            return this.props.column;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionMatrixCell.prototype, "columnIndex", {
        get: function () {
            return this.props.columnIndex;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionMatrixCell.prototype.canRender = function () {
        return !!this.question && !!this.row;
    };
    SurveyQuestionMatrixCell.prototype.renderElement = function () {
        var isChecked = this.row.value == this.column.value;
        var inputId = this.question.inputId + "_" + this.row.name + "_" + this.columnIndex;
        var itemClass = this.question.getItemClass(this.row, this.column);
        var mobileSpan = this.question.isMobile ?
            (_("span", { className: this.question.cssClasses.cellResponsiveTitle }, this.renderLocString(this.column.locText)))
            : undefined;
        return (_("label", { onMouseDown: this.handleOnMouseDown, className: itemClass },
            this.renderInput(inputId, isChecked),
            _("span", { className: this.question.cssClasses.materialDecorator }, this.question.itemSvgIcon ?
                _("svg", { className: this.cssClasses.itemDecorator },
                    _("use", { xlinkHref: this.question.itemSvgIcon })) :
                null),
            mobileSpan));
    };
    SurveyQuestionMatrixCell.prototype.renderInput = function (inputId, isChecked) {
        return (_("input", { id: inputId, type: "radio", className: this.cssClasses.itemValue, name: this.row.fullName, value: this.column.value, disabled: this.row.isDisabledAttr, readOnly: this.row.isReadOnlyAttr, checked: isChecked, onChange: this.handleOnChange, "aria-required": this.question.a11y_input_ariaRequired, "aria-label": this.question.getCellAriaLabel(this.row.locText.renderedHtml, this.column.locText.renderedHtml), "aria-invalid": this.question.a11y_input_ariaInvalid, "aria-errormessage": this.question.a11y_input_ariaErrormessage }));
    };
    return SurveyQuestionMatrixCell;
}(ReactSurveyElement));

ReactElementFactory.Instance.registerElement("survey-matrix-cell", function (props) {
    return _(reactquestion_matrix_SurveyQuestionMatrixCell, props);
});
ReactQuestionFactory.Instance.registerQuestion("matrix", function (props) {
    return _(reactquestion_matrix_SurveyQuestionMatrix, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/reactquestion_html.tsx
var reactquestion_html_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var reactquestion_html_SurveyQuestionHtml = /** @class */ (function (_super) {
    reactquestion_html_extends(SurveyQuestionHtml, _super);
    function SurveyQuestionHtml(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionHtml.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionHtml.prototype.componentDidMount = function () {
        this.reactOnStrChanged();
    };
    SurveyQuestionHtml.prototype.componentWillUnmount = function () {
        this.question.locHtml.onChanged = function () { };
    };
    SurveyQuestionHtml.prototype.componentDidUpdate = function (prevProps, prevState) {
        this.reactOnStrChanged();
    };
    SurveyQuestionHtml.prototype.reactOnStrChanged = function () {
        var _this = this;
        this.question.locHtml.onChanged = function () {
            _this.setState({ changed: !!_this.state && _this.state.changed ? _this.state.changed + 1 : 1 });
        };
    };
    SurveyQuestionHtml.prototype.canRender = function () {
        return _super.prototype.canRender.call(this) && !!this.question.html;
    };
    SurveyQuestionHtml.prototype.renderElement = function () {
        var htmlValue = { __html: this.question.locHtml.renderedHtml };
        return (_("div", { className: this.question.renderCssRoot, dangerouslySetInnerHTML: htmlValue }));
    };
    return SurveyQuestionHtml;
}(reactquestion_element_SurveyQuestionElementBase));

ReactQuestionFactory.Instance.registerQuestion("html", function (props) {
    return _(reactquestion_html_SurveyQuestionHtml, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/loading-indicator.tsx
var loading_indicator_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var loading_indicator_LoadingIndicatorComponent = /** @class */ (function (_super) {
    loading_indicator_extends(LoadingIndicatorComponent, _super);
    function LoadingIndicatorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadingIndicatorComponent.prototype.render = function () {
        return (_("div", { className: "sd-loading-indicator" },
            _(svg_icon_SvgIcon, { iconName: "icon-loading", size: "auto" })));
    };
    return LoadingIndicatorComponent;
}(x));


// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/file/file-choose-button.tsx
var file_choose_button_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var file_choose_button_SurveyFileChooseButton = /** @class */ (function (_super) {
    file_choose_button_extends(SurveyFileChooseButton, _super);
    function SurveyFileChooseButton(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyFileChooseButton.prototype, "question", {
        get: function () {
            return (this.props.item && this.props.item.data.question) || this.props.data.question;
        },
        enumerable: false,
        configurable: true
    });
    SurveyFileChooseButton.prototype.render = function () {
        var _this = this;
        return attachKey2click(Rn.createElement("label", { tabIndex: 0, className: this.question.getChooseFileCss(), htmlFor: this.question.inputId, "aria-label": this.question.chooseButtonText, onClick: function (e) { return _this.question.chooseFile(e.nativeEvent); } },
            (!!this.question.cssClasses.chooseFileIconId) ? Rn.createElement(svg_icon_SvgIcon, { title: this.question.chooseButtonText, iconName: this.question.cssClasses.chooseFileIconId, size: "auto" }) : null,
            Rn.createElement("span", null, this.question.chooseButtonText)));
    };
    return SurveyFileChooseButton;
}(ReactSurveyElement));

ReactElementFactory.Instance.registerElement("sv-file-choose-btn", function (props) {
    return Rn.createElement(file_choose_button_SurveyFileChooseButton, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/reactquestion_file.tsx
var reactquestion_file_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









// import { ReactElementFactory, SurveyFileChooseButton } from "../entries/react-ui-model";
var reactquestion_file_SurveyQuestionFile = /** @class */ (function (_super) {
    reactquestion_file_extends(SurveyQuestionFile, _super);
    function SurveyQuestionFile(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionFile.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionFile.prototype.renderElement = function () {
        var _this = this;
        var preview = this.question.allowShowPreview ? this.renderPreview() : null;
        var loadingIndicator = this.question.showLoadingIndicator ? this.renderLoadingIndicator() : null;
        var video = this.question.isPlayingVideo ? this.renderVideo() : null;
        var fileDecorator = this.question.showFileDecorator ? this.renderFileDecorator() : null;
        var clearButton = this.question.showRemoveButton ? this.renderClearButton(this.question.cssClasses.removeButton) : null;
        var clearButtonBottom = this.question.showRemoveButtonBottom ? this.renderClearButton(this.question.cssClasses.removeButtonBottom) : null;
        var fileNavigator = this.question.fileNavigatorVisible ? (_(action_bar_SurveyActionBar, { model: this.question.fileNavigator })) : null;
        var fileInput;
        if (this.question.isReadOnlyAttr) {
            fileInput = _("input", { readOnly: true, type: "file", className: !this.isDisplayMode ? this.question.cssClasses.fileInput : this.question.getReadOnlyFileCss(), id: this.question.inputId, ref: function (input) { return (_this.setControl(input)); }, style: !this.isDisplayMode ? {} : { color: "transparent" }, multiple: this.question.allowMultiple, placeholder: this.question.title, accept: this.question.acceptedTypes });
        }
        else if (this.question.isDisabledAttr) {
            fileInput = _("input", { disabled: true, type: "file", className: !this.isDisplayMode ? this.question.cssClasses.fileInput : this.question.getReadOnlyFileCss(), id: this.question.inputId, ref: function (input) { return (_this.setControl(input)); }, style: !this.isDisplayMode ? {} : { color: "transparent" }, multiple: this.question.allowMultiple, placeholder: this.question.title, accept: this.question.acceptedTypes });
        }
        else if (this.question.hasFileUI) {
            fileInput = _("input", { type: "file", disabled: this.isDisplayMode, tabIndex: -1, className: !this.isDisplayMode ? this.question.cssClasses.fileInput : this.question.getReadOnlyFileCss(), id: this.question.inputId, ref: function (input) { return (_this.setControl(input)); }, style: !this.isDisplayMode ? {} : { color: "transparent" }, "aria-required": this.question.ariaRequired, "aria-label": this.question.ariaLabel, "aria-invalid": this.question.ariaInvalid, "aria-errormessage": this.question.ariaErrormessage, multiple: this.question.allowMultiple, title: this.question.inputTitle, accept: this.question.acceptedTypes, capture: this.question.renderCapture });
        }
        else {
            fileInput = null;
        }
        return (_("div", { className: this.question.fileRootCss, ref: function (el) { return (_this.setContent(el)); } },
            fileInput,
            _("div", { className: this.question.cssClasses.dragArea, onDrop: this.question.onDrop, onDragOver: this.question.onDragOver, onDragLeave: this.question.onDragLeave, onDragEnter: this.question.onDragEnter },
                fileDecorator,
                loadingIndicator,
                video,
                clearButton,
                preview,
                clearButtonBottom,
                fileNavigator)));
    };
    SurveyQuestionFile.prototype.renderFileDecorator = function () {
        var chooseButton = this.question.showChooseButton ? this.renderChooseButton() : null;
        var actionsContainer = this.question.actionsContainerVisible ? _(action_bar_SurveyActionBar, { model: this.question.actionsContainer }) : null;
        var noFileChosen = this.question.isEmpty() ? (_("span", { className: this.question.cssClasses.noFileChosen }, this.question.noFileChosenCaption)) : null;
        return (_("div", { className: this.question.getFileDecoratorCss() },
            _("span", { className: this.question.cssClasses.dragAreaPlaceholder }, this.renderLocString(this.question.locRenderedPlaceholder)),
            _("div", { className: this.question.cssClasses.wrapper },
                chooseButton,
                actionsContainer,
                noFileChosen)));
    };
    SurveyQuestionFile.prototype.renderChooseButton = function () {
        return _(file_choose_button_SurveyFileChooseButton, { data: { question: this.question } });
    };
    SurveyQuestionFile.prototype.renderClearButton = function (className) {
        return !this.question.isUploading ? (_("button", { type: "button", onClick: this.question.doClean, className: className },
            _("span", null, this.question.clearButtonCaption),
            (!!this.question.cssClasses.removeButtonIconId) ? _(svg_icon_SvgIcon, { iconName: this.question.cssClasses.removeButtonIconId, size: "auto", title: this.question.clearButtonCaption }) : null)) : null;
    };
    SurveyQuestionFile.prototype.renderPreview = function () {
        return ReactElementFactory.Instance.createElement("sv-file-preview", { question: this.question });
    };
    SurveyQuestionFile.prototype.renderLoadingIndicator = function () {
        return _("div", { className: this.question.cssClasses.loadingIndicator },
            _(loading_indicator_LoadingIndicatorComponent, null));
    };
    SurveyQuestionFile.prototype.renderVideo = function () {
        return (_("div", { className: this.question.cssClasses.videoContainer },
            _(action_bar_item_SurveyAction, { item: this.question.changeCameraAction }),
            _(action_bar_item_SurveyAction, { item: this.question.closeCameraAction }),
            _("video", { autoPlay: true, playsInline: true, id: this.question.videoId, className: this.question.cssClasses.video }),
            _(action_bar_item_SurveyAction, { item: this.question.takePictureAction })));
    };
    return SurveyQuestionFile;
}(reactquestion_element_SurveyQuestionElementBase));

ReactQuestionFactory.Instance.registerQuestion("file", function (props) {
    return _(reactquestion_file_SurveyQuestionFile, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/file/file-item.tsx
var file_item_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var file_item_SurveyFileItem = /** @class */ (function (_super) {
    file_item_extends(SurveyFileItem, _super);
    function SurveyFileItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyFileItem.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyFileItem.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    SurveyFileItem.prototype.renderFileSign = function (className, val) {
        var _this = this;
        if (!className || !val.name)
            return null;
        return (Rn.createElement("div", { className: className },
            Rn.createElement("a", { href: val.content, onClick: function (event) {
                    _this.question.doDownloadFile(event, val);
                }, title: val.name, download: val.name, style: { width: this.question.imageWidth } }, val.name)));
    };
    SurveyFileItem.prototype.renderElement = function () {
        var _this = this;
        var val = this.item;
        return (Rn.createElement("span", { className: this.question.cssClasses.previewItem, onClick: function (event) { return _this.question.doDownloadFileFromContainer(event); } },
            this.renderFileSign(this.question.cssClasses.fileSign, val),
            Rn.createElement("div", { className: this.question.getImageWrapperCss(val) },
                this.question.canPreviewImage(val) ? (Rn.createElement("img", { src: val.content, style: { height: this.question.imageHeight, width: this.question.imageWidth }, alt: "File preview" })) : (this.question.cssClasses.defaultImage ? (Rn.createElement(svg_icon_SvgIcon, { iconName: this.question.cssClasses.defaultImageIconId, size: "auto", className: this.question.cssClasses.defaultImage })) : null),
                val.name && !this.question.isReadOnly ? (Rn.createElement("div", { className: this.question.getRemoveButtonCss(), onClick: function (event) { return _this.question.doRemoveFile(val, event); } },
                    Rn.createElement("span", { className: this.question.cssClasses.removeFile }, this.question.removeFileCaption),
                    (this.question.cssClasses.removeFileSvgIconId) ?
                        (Rn.createElement(svg_icon_SvgIcon, { title: this.question.removeFileCaption, iconName: this.question.cssClasses.removeFileSvgIconId, size: "auto", className: this.question.cssClasses.removeFileSvg })) : null)) : null),
            this.renderFileSign(this.question.cssClasses.fileSignBottom, val)));
    };
    SurveyFileItem.prototype.canRender = function () {
        return this.question.showPreviewContainer;
    };
    return SurveyFileItem;
}(reactquestion_element_SurveyElementBase));


// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/file/file-page.tsx
var file_page_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var file_page_SurveyFilePage = /** @class */ (function (_super) {
    file_page_extends(SurveyFilePage, _super);
    function SurveyFilePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyFilePage.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyFilePage.prototype, "page", {
        get: function () {
            return this.props.page;
        },
        enumerable: false,
        configurable: true
    });
    SurveyFilePage.prototype.renderElement = function () {
        var _this = this;
        var items = this.page.items.map(function (item, index) { return (Rn.createElement(file_item_SurveyFileItem, { item: item, question: _this.question, key: index })); });
        return (Rn.createElement("div", { className: this.page.css, id: this.page.id }, items));
    };
    return SurveyFilePage;
}(reactquestion_element_SurveyElementBase));


// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/file/file-preview.tsx
var file_preview_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var file_preview_SurveyFilePreview = /** @class */ (function (_super) {
    file_preview_extends(SurveyFilePreview, _super);
    function SurveyFilePreview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyFilePreview.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    SurveyFilePreview.prototype.renderFileSign = function (className, val) {
        var _this = this;
        if (!className || !val.name)
            return null;
        return (Rn.createElement("div", { className: className },
            Rn.createElement("a", { href: val.content, onClick: function (event) {
                    _this.question.doDownloadFile(event, val);
                }, title: val.name, download: val.name, style: { width: this.question.imageWidth } }, val.name)));
    };
    SurveyFilePreview.prototype.renderElement = function () {
        var _this = this;
        var content = this.question.supportFileNavigator ? this.question.renderedPages.map(function (page, index) { return (Rn.createElement(file_page_SurveyFilePage, { page: page, question: _this.question, key: page.id })); })
            : this.question.previewValue.map(function (item, index) { return (Rn.createElement(file_item_SurveyFileItem, { item: item, question: _this.question, key: index })); });
        return Rn.createElement("div", { className: this.question.cssClasses.fileList || undefined }, content);
    };
    SurveyFilePreview.prototype.canRender = function () {
        return this.question.showPreviewContainer;
    };
    return SurveyFilePreview;
}(reactquestion_element_SurveyElementBase));

ReactElementFactory.Instance.registerElement("sv-file-preview", function (props) {
    return Rn.createElement(file_preview_SurveyFilePreview, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/reactquestion_multipletext.tsx
var reactquestion_multipletext_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var reactquestion_multipletext_SurveyQuestionMultipleText = /** @class */ (function (_super) {
    reactquestion_multipletext_extends(SurveyQuestionMultipleText, _super);
    function SurveyQuestionMultipleText(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionMultipleText.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionMultipleText.prototype.renderElement = function () {
        var cssClasses = this.question.cssClasses;
        var tableRows = this.question.getRows();
        var rows = [];
        for (var i = 0; i < tableRows.length; i++) {
            if (tableRows[i].isVisible) {
                rows.push(this.renderRow(i, tableRows[i].cells, cssClasses));
            }
        }
        return (_("table", { className: this.question.getQuestionRootCss() },
            _("tbody", null, rows)));
    };
    SurveyQuestionMultipleText.prototype.renderCell = function (cell, cssClasses, index) {
        var cellContent;
        var focusIn = function () { cell.item.focusIn(); };
        if (cell.isErrorsCell) {
            cellContent = _(reactquestion_SurveyQuestionErrorCell, { question: cell.item.editor, creator: this.creator });
        }
        else {
            cellContent = _(reactquestion_multipletext_SurveyMultipleTextItem, { question: this.question, item: cell.item, creator: this.creator, cssClasses: cssClasses });
        }
        return (_("td", { key: "item" + index, className: cell.className, onFocus: focusIn }, cellContent));
    };
    SurveyQuestionMultipleText.prototype.renderRow = function (rowIndex, cells, cssClasses) {
        var key = "item" + rowIndex;
        var tds = [];
        for (var i = 0; i < cells.length; i++) {
            var cell = cells[i];
            tds.push(this.renderCell(cell, cssClasses, i));
        }
        return (_("tr", { key: key, className: cssClasses.row }, tds));
    };
    return SurveyQuestionMultipleText;
}(reactquestion_element_SurveyQuestionElementBase));

var reactquestion_multipletext_SurveyMultipleTextItem = /** @class */ (function (_super) {
    reactquestion_multipletext_extends(SurveyMultipleTextItem, _super);
    function SurveyMultipleTextItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyMultipleTextItem.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyMultipleTextItem.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    SurveyMultipleTextItem.prototype.getStateElements = function () {
        return [this.item, this.item.editor];
    };
    Object.defineProperty(SurveyMultipleTextItem.prototype, "creator", {
        get: function () {
            return this.props.creator;
        },
        enumerable: false,
        configurable: true
    });
    SurveyMultipleTextItem.prototype.renderElement = function () {
        var item = this.item;
        var cssClasses = this.cssClasses;
        var titleStyle = {};
        if (!!this.question.itemTitleWidth) {
            titleStyle.minWidth = this.question.itemTitleWidth;
            titleStyle.width = this.question.itemTitleWidth;
        }
        return (_("label", { className: this.question.getItemLabelCss(item) },
            _("span", { className: cssClasses.itemTitle, style: titleStyle },
                _(title_content_TitleContent, { element: item.editor, cssClasses: item.editor.cssClasses })),
            _(reactquestion_multipletext_SurveyMultipleTextItemEditor, { cssClasses: cssClasses, itemCss: this.question.getItemCss(), question: item.editor, creator: this.creator })));
    };
    return SurveyMultipleTextItem;
}(ReactSurveyElement));

var reactquestion_multipletext_SurveyMultipleTextItemEditor = /** @class */ (function (_super) {
    reactquestion_multipletext_extends(SurveyMultipleTextItemEditor, _super);
    function SurveyMultipleTextItemEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SurveyMultipleTextItemEditor.prototype.renderElement = function () {
        return _("div", { className: this.itemCss }, this.renderContent());
    };
    return SurveyMultipleTextItemEditor;
}(reactquestion_SurveyQuestionAndErrorsWrapped));

ReactQuestionFactory.Instance.registerQuestion("multipletext", function (props) {
    return _(reactquestion_multipletext_SurveyQuestionMultipleText, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/reactquestion_radiogroup.tsx
var reactquestion_radiogroup_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var reactquestion_radiogroup_SurveyQuestionRadiogroup = /** @class */ (function (_super) {
    reactquestion_radiogroup_extends(SurveyQuestionRadiogroup, _super);
    function SurveyQuestionRadiogroup(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionRadiogroup.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionRadiogroup.prototype.renderElement = function () {
        var _this = this;
        var cssClasses = this.question.cssClasses;
        var clearButton = null;
        if (this.question.showClearButtonInContent) {
            clearButton = (_("div", null,
                _("input", { type: "button", className: this.question.cssClasses.clearButton, onClick: function () { return _this.question.clearValue(true); }, value: this.question.clearButtonCaption })));
        }
        return (_("fieldset", { className: this.question.getSelectBaseRootCss(), ref: function (fieldset) { return (_this.setControl(fieldset)); }, role: this.question.a11y_input_ariaRole, "aria-required": this.question.a11y_input_ariaRequired, "aria-label": this.question.a11y_input_ariaLabel, "aria-labelledby": this.question.a11y_input_ariaLabelledBy, "aria-describedby": this.question.a11y_input_ariaDescribedBy, "aria-invalid": this.question.a11y_input_ariaInvalid, "aria-errormessage": this.question.a11y_input_ariaErrormessage },
            this.question.hasColumns
                ? this.getColumnedBody(cssClasses)
                : this.getBody(cssClasses),
            this.getFooter(),
            this.question.isOtherSelected ? this.renderOther(cssClasses) : null,
            clearButton));
    };
    SurveyQuestionRadiogroup.prototype.getFooter = function () {
        var _this = this;
        if (this.question.hasFootItems) {
            return this.question.footItems.map(function (item, ii) {
                return _this.renderItem(item, false, _this.question.cssClasses);
            });
        }
    };
    SurveyQuestionRadiogroup.prototype.getColumnedBody = function (cssClasses) {
        return (_("div", { className: cssClasses.rootMultiColumn }, this.getColumns(cssClasses)));
    };
    SurveyQuestionRadiogroup.prototype.getColumns = function (cssClasses) {
        var _this = this;
        var value = this.getStateValue();
        return this.question.columns.map(function (column, ci) {
            var items = column.map(function (item, ii) {
                return _this.renderItem(item, value, cssClasses, "" + ci + ii);
            });
            return (_("div", { key: "column" + ci + _this.question.getItemsColumnKey(column), className: _this.question.getColumnClass(), role: "presentation" }, items));
        });
    };
    SurveyQuestionRadiogroup.prototype.getBody = function (cssClasses) {
        if (this.question.blockedRow) {
            return _("div", { className: cssClasses.rootRow }, this.getItems(cssClasses, this.question.dataChoices));
        }
        else
            return _(k, null, this.getItems(cssClasses, this.question.bodyItems));
    };
    SurveyQuestionRadiogroup.prototype.getItems = function (cssClasses, choices) {
        var items = [];
        var value = this.getStateValue();
        for (var i = 0; i < choices.length; i++) {
            var item = choices[i];
            var renderedItem = this.renderItem(item, value, cssClasses, "" + i);
            items.push(renderedItem);
        }
        return items;
    };
    Object.defineProperty(SurveyQuestionRadiogroup.prototype, "textStyle", {
        get: function () {
            return null; //{ display: "inline", position: "static" };
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionRadiogroup.prototype.renderOther = function (cssClasses) {
        return (_("div", { className: this.question.getCommentAreaCss(true) },
            _(SurveyQuestionOtherValueItem, { question: this.question, otherCss: cssClasses.other, cssClasses: cssClasses, isDisplayMode: this.isDisplayMode })));
    };
    SurveyQuestionRadiogroup.prototype.renderItem = function (item, value, cssClasses, index) {
        var renderedItem = ReactElementFactory.Instance.createElement(this.question.itemComponent, {
            key: item.value,
            question: this.question,
            cssClasses: cssClasses,
            isDisplayMode: this.isDisplayMode,
            item: item,
            textStyle: this.textStyle,
            index: index,
            isChecked: value === item.value,
        });
        var survey = this.question.survey;
        var wrappedItem = null;
        if (!!survey) {
            wrappedItem = reactsurveymodel_ReactSurveyElementsWrapper.wrapItemValue(survey, renderedItem, this.question, item);
        }
        return wrappedItem !== null && wrappedItem !== void 0 ? wrappedItem : renderedItem;
    };
    SurveyQuestionRadiogroup.prototype.getStateValue = function () {
        return !this.question.isEmpty() ? this.question.renderedValue : "";
    };
    return SurveyQuestionRadiogroup;
}(reactquestion_element_SurveyQuestionElementBase));

var reactquestion_radiogroup_SurveyQuestionRadioItem = /** @class */ (function (_super) {
    reactquestion_radiogroup_extends(SurveyQuestionRadioItem, _super);
    function SurveyQuestionRadioItem(props) {
        var _this = _super.call(this, props) || this;
        _this.rootRef = b();
        _this.handleOnChange = _this.handleOnChange.bind(_this);
        _this.handleOnMouseDown = _this.handleOnMouseDown.bind(_this);
        return _this;
    }
    SurveyQuestionRadioItem.prototype.getStateElement = function () {
        return this.item;
    };
    Object.defineProperty(SurveyQuestionRadioItem.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRadioItem.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRadioItem.prototype, "textStyle", {
        get: function () {
            return this.props.textStyle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRadioItem.prototype, "index", {
        get: function () {
            return this.props.index;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRadioItem.prototype, "isChecked", {
        get: function () {
            return this.props.isChecked;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRadioItem.prototype, "hideCaption", {
        get: function () {
            return this.props.hideCaption === true;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionRadioItem.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (!_super.prototype.shouldComponentUpdate.call(this, nextProps, nextState))
            return false;
        if (!this.question)
            return false;
        return (!this.question.customWidget ||
            !!this.question.customWidgetData.isNeedRender ||
            !!this.question.customWidget.widgetJson.isDefaultRender ||
            !!this.question.customWidget.widgetJson.render);
    };
    SurveyQuestionRadioItem.prototype.handleOnChange = function (event) {
        this.question.clickItemHandler(this.item);
    };
    SurveyQuestionRadioItem.prototype.handleOnMouseDown = function (event) {
        this.question.onMouseDown();
    };
    SurveyQuestionRadioItem.prototype.canRender = function () {
        return !!this.question && !!this.item;
    };
    SurveyQuestionRadioItem.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        if (prevProps.item !== this.props.item && !this.question.isDesignMode) {
            if (this.props.item) {
                this.props.item.setRootElement(this.rootRef.current);
            }
            if (prevProps.item) {
                prevProps.item.setRootElement(undefined);
            }
        }
    };
    SurveyQuestionRadioItem.prototype.renderElement = function () {
        var itemClass = this.question.getItemClass(this.item);
        var labelClass = this.question.getLabelClass(this.item);
        var controlLabelClass = this.question.getControlLabelClass(this.item);
        var itemLabel = !this.hideCaption ? _("span", { className: controlLabelClass }, this.renderLocString(this.item.locText, this.textStyle)) : null;
        return (_("div", { className: itemClass, role: "presentation", ref: this.rootRef },
            _("label", { onMouseDown: this.handleOnMouseDown, className: labelClass },
                _("input", { "aria-errormessage": this.question.ariaErrormessage, className: this.cssClasses.itemControl, id: this.question.getItemId(this.item), type: "radio", name: this.question.questionName, checked: this.isChecked, value: this.item.value, disabled: !this.question.getItemEnabled(this.item), readOnly: this.question.isReadOnlyAttr, onChange: this.handleOnChange }),
                this.cssClasses.materialDecorator ?
                    _("span", { className: this.cssClasses.materialDecorator }, this.question.itemSvgIcon ?
                        _("svg", { className: this.cssClasses.itemDecorator },
                            _("use", { xlinkHref: this.question.itemSvgIcon })) :
                        null) :
                    null,
                itemLabel)));
    };
    SurveyQuestionRadioItem.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        if (!this.question.isDesignMode) {
            this.item.setRootElement(this.rootRef.current);
        }
    };
    SurveyQuestionRadioItem.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        if (!this.question.isDesignMode) {
            this.item.setRootElement(undefined);
        }
    };
    return SurveyQuestionRadioItem;
}(ReactSurveyElement));

ReactElementFactory.Instance.registerElement("survey-radiogroup-item", function (props) {
    return _(reactquestion_radiogroup_SurveyQuestionRadioItem, props);
});
ReactQuestionFactory.Instance.registerQuestion("radiogroup", function (props) {
    return _(reactquestion_radiogroup_SurveyQuestionRadiogroup, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/reactquestion_text.tsx
var reactquestion_text_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var reactquestion_text_SurveyQuestionText = /** @class */ (function (_super) {
    reactquestion_text_extends(SurveyQuestionText, _super);
    //controlRef: React.RefObject<HTMLInputElement>;
    function SurveyQuestionText(props) {
        return _super.call(this, props) || this;
        //this.controlRef = React.createRef();
    }
    SurveyQuestionText.prototype.renderInput = function () {
        var _this = this;
        var inputClass = this.question.getControlClass();
        var placeholder = this.question.renderedPlaceholder;
        if (this.question.isReadOnlyRenderDiv()) {
            return _("div", null, this.question.inputValue);
        }
        var counter = !!this.question.getMaxLength() ? (_(character_counter_CharacterCounterComponent, { counter: this.question.characterCounter, remainingCharacterCounter: this.question.cssClasses.remainingCharacterCounter })) : null;
        return (_(k, null,
            _("input", { id: this.question.inputId, 
                // disabled={this.isDisplayMode}
                disabled: this.question.isDisabledAttr, readOnly: this.question.isReadOnlyAttr, className: inputClass, type: this.question.inputType, 
                //ref={this.controlRef}
                ref: function (input) { return (_this.setControl(input)); }, style: this.question.inputStyle, maxLength: this.question.getMaxLength(), min: this.question.renderedMin, max: this.question.renderedMax, step: this.question.renderedStep, size: this.question.inputSize, placeholder: placeholder, list: this.question.dataListId, autoComplete: this.question.autocomplete, onBlur: function (event) { _this.question.onBlur(event); }, onFocus: function (event) { _this.question.onFocus(event); }, onChange: this.question.onChange, onKeyUp: this.question.onKeyUp, onKeyDown: this.question.onKeyDown, onCompositionUpdate: function (event) { return _this.question.onCompositionUpdate(event.nativeEvent); }, "aria-required": this.question.a11y_input_ariaRequired, "aria-label": this.question.a11y_input_ariaLabel, "aria-labelledby": this.question.a11y_input_ariaLabelledBy, "aria-describedby": this.question.a11y_input_ariaDescribedBy, "aria-invalid": this.question.a11y_input_ariaInvalid, "aria-errormessage": this.question.a11y_input_ariaErrormessage }),
            counter));
    };
    SurveyQuestionText.prototype.renderElement = function () {
        return (this.question.dataListId ?
            _("div", null,
                this.renderInput(),
                this.renderDataList()) :
            this.renderInput());
    };
    SurveyQuestionText.prototype.setValueCore = function (newValue) {
        this.question.inputValue = newValue;
    };
    SurveyQuestionText.prototype.getValueCore = function () {
        return this.question.inputValue;
    };
    SurveyQuestionText.prototype.renderDataList = function () {
        if (!this.question.dataListId)
            return null;
        var items = this.question.dataList;
        if (items.length == 0)
            return null;
        var options = [];
        for (var i = 0; i < items.length; i++) {
            options.push(_("option", { key: "item" + i, value: items[i] }));
        }
        return _("datalist", { id: this.question.dataListId }, options);
    };
    return SurveyQuestionText;
}(reactquestion_element_SurveyQuestionUncontrolledElement));

ReactQuestionFactory.Instance.registerQuestion("text", function (props) {
    return _(reactquestion_text_SurveyQuestionText, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/boolean.tsx
var boolean_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var boolean_SurveyQuestionBoolean = /** @class */ (function (_super) {
    boolean_extends(SurveyQuestionBoolean, _super);
    function SurveyQuestionBoolean(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnChange = _this.handleOnChange.bind(_this);
        _this.handleOnClick = _this.handleOnClick.bind(_this);
        _this.handleOnLabelClick = _this.handleOnLabelClick.bind(_this);
        _this.handleOnSwitchClick = _this.handleOnSwitchClick.bind(_this);
        _this.handleOnKeyDown = _this.handleOnKeyDown.bind(_this);
        _this.checkRef = b();
        return _this;
    }
    SurveyQuestionBoolean.prototype.getStateElement = function () {
        return this.question;
    };
    Object.defineProperty(SurveyQuestionBoolean.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    /*
    private get allowClick(): boolean {
      return this.question.isIndeterminate && !this.isDisplayMode;
    }
    */
    SurveyQuestionBoolean.prototype.doCheck = function (value) {
        this.question.booleanValue = value;
    };
    SurveyQuestionBoolean.prototype.handleOnChange = function (event) {
        this.doCheck(event.target.checked);
    };
    SurveyQuestionBoolean.prototype.handleOnClick = function (event) {
        this.question.onLabelClick(event, true);
    };
    SurveyQuestionBoolean.prototype.handleOnSwitchClick = function (event) {
        this.question.onSwitchClickModel(event.nativeEvent);
    };
    SurveyQuestionBoolean.prototype.handleOnLabelClick = function (event, value) {
        this.question.onLabelClick(event, value);
    };
    SurveyQuestionBoolean.prototype.handleOnKeyDown = function (event) {
        this.question.onKeyDownCore(event);
    };
    SurveyQuestionBoolean.prototype.updateDomElement = function () {
        if (!this.question)
            return;
        var el = this.checkRef.current;
        if (el) {
            el.indeterminate = this.question.isIndeterminate;
        }
        this.setControl(el);
        _super.prototype.updateDomElement.call(this);
    };
    SurveyQuestionBoolean.prototype.renderElement = function () {
        var _this = this;
        var cssClasses = this.question.cssClasses;
        var itemClass = this.question.getItemCss();
        return (_("div", { className: cssClasses.root, onKeyDown: this.handleOnKeyDown },
            _("label", { className: itemClass, onClick: this.handleOnClick },
                _("input", { ref: this.checkRef, type: "checkbox", name: this.question.name, value: this.question.booleanValue === null
                        ? ""
                        : this.question.booleanValue, id: this.question.inputId, className: cssClasses.control, disabled: this.question.isDisabledAttr, readOnly: this.question.isReadOnlyAttr, checked: this.question.booleanValue || false, onChange: this.handleOnChange, role: this.question.a11y_input_ariaRole, "aria-required": this.question.a11y_input_ariaRequired, "aria-label": this.question.a11y_input_ariaLabel, "aria-labelledby": this.question.a11y_input_ariaLabelledBy, "aria-describedby": this.question.a11y_input_ariaDescribedBy, "aria-invalid": this.question.a11y_input_ariaInvalid, "aria-errormessage": this.question.a11y_input_ariaErrormessage }),
                _("div", { className: cssClasses.sliderGhost, onClick: function (event) { return _this.handleOnLabelClick(event, _this.question.swapOrder); } },
                    _("span", { className: this.question.getLabelCss(this.question.swapOrder) }, this.renderLocString(this.question.locLabelLeft))),
                _("div", { className: cssClasses.switch, onClick: this.handleOnSwitchClick },
                    _("span", { className: cssClasses.slider }, this.question.isDeterminated && cssClasses.sliderText ?
                        _("span", { className: cssClasses.sliderText }, this.renderLocString(this.question.getCheckedLabel()))
                        : null)),
                _("div", { className: cssClasses.sliderGhost, onClick: function (event) { return _this.handleOnLabelClick(event, !_this.question.swapOrder); } },
                    _("span", { className: this.question.getLabelCss(!this.question.swapOrder) }, this.renderLocString(this.question.locLabelRight))))));
    };
    return SurveyQuestionBoolean;
}(reactquestion_element_SurveyQuestionElementBase));

ReactQuestionFactory.Instance.registerQuestion("boolean", function (props) {
    return _(boolean_SurveyQuestionBoolean, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/boolean-checkbox.tsx
var boolean_checkbox_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var boolean_checkbox_SurveyQuestionBooleanCheckbox = /** @class */ (function (_super) {
    boolean_checkbox_extends(SurveyQuestionBooleanCheckbox, _super);
    function SurveyQuestionBooleanCheckbox(props) {
        return _super.call(this, props) || this;
    }
    SurveyQuestionBooleanCheckbox.prototype.renderElement = function () {
        var cssClasses = this.question.cssClasses;
        var itemClass = this.question.getCheckboxItemCss();
        var description = this.question.canRenderLabelDescription ?
            reactquestion_element_SurveyElementBase.renderQuestionDescription(this.question) : null;
        return (_("div", { className: cssClasses.rootCheckbox },
            _("div", { className: itemClass },
                _("label", { className: cssClasses.checkboxLabel },
                    _("input", { ref: this.checkRef, type: "checkbox", name: this.question.name, value: this.question.booleanValue === null
                            ? ""
                            : this.question.booleanValue, id: this.question.inputId, className: cssClasses.controlCheckbox, disabled: this.question.isDisabledAttr, readOnly: this.question.isReadOnlyAttr, checked: this.question.booleanValue || false, onChange: this.handleOnChange, "aria-required": this.question.ariaRequired, "aria-label": this.question.ariaLabel, "aria-invalid": this.question.ariaInvalid, "aria-errormessage": this.question.ariaErrormessage }),
                    _("span", { className: cssClasses.checkboxMaterialDecorator },
                        this.question.svgIcon ?
                            _("svg", { className: cssClasses.checkboxItemDecorator },
                                _("use", { xlinkHref: this.question.svgIcon })) : null,
                        _("span", { className: "check" })),
                    this.question.isLabelRendered && (_("span", { className: cssClasses.checkboxControlLabel, id: this.question.labelRenderedAriaID },
                        _(title_actions_TitleActions, { element: this.question, cssClasses: this.question.cssClasses })))),
                description)));
    };
    return SurveyQuestionBooleanCheckbox;
}(boolean_SurveyQuestionBoolean));

ReactQuestionFactory.Instance.registerQuestion("sv-boolean-checkbox", function (props) {
    return _(boolean_checkbox_SurveyQuestionBooleanCheckbox, props);
});
external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["RendererFactory"].Instance.registerRenderer("boolean", "checkbox", "sv-boolean-checkbox");

// CONCATENATED MODULE: ./packages/survey-react-ui/src/boolean-radio.tsx
var boolean_radio_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var boolean_radio_SurveyQuestionBooleanRadio = /** @class */ (function (_super) {
    boolean_radio_extends(SurveyQuestionBooleanRadio, _super);
    function SurveyQuestionBooleanRadio(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnChange = function (event) {
            _this.question.booleanValue = event.nativeEvent.target.value == "true";
        };
        return _this;
    }
    SurveyQuestionBooleanRadio.prototype.renderRadioItem = function (value, locText) {
        var cssClasses = this.question.cssClasses;
        return (_("div", { role: "presentation", className: this.question.getRadioItemClass(cssClasses, value) },
            _("label", { className: cssClasses.radioLabel },
                _("input", { type: "radio", name: this.question.name, value: value, "aria-errormessage": this.question.ariaErrormessage, checked: value === this.question.booleanValueRendered, disabled: this.question.isDisabledAttr, readOnly: this.question.isReadOnlyAttr, className: cssClasses.itemRadioControl, onChange: this.handleOnChange }),
                this.question.cssClasses.materialRadioDecorator ?
                    (_("span", { className: cssClasses.materialRadioDecorator }, this.question.itemSvgIcon ?
                        (_("svg", { className: cssClasses.itemRadioDecorator },
                            _("use", { xlinkHref: this.question.itemSvgIcon }))) : null)) : null,
                _("span", { className: cssClasses.radioControlLabel }, this.renderLocString(locText)))));
    };
    SurveyQuestionBooleanRadio.prototype.renderElement = function () {
        var cssClasses = this.question.cssClasses;
        return (_("div", { className: cssClasses.rootRadio },
            _("fieldset", { role: "presentation", className: cssClasses.radioFieldset }, !this.question.swapOrder ?
                (_(k, null,
                    this.renderRadioItem(false, this.question.locLabelFalse),
                    this.renderRadioItem(true, this.question.locLabelTrue)))
                :
                    (_(k, null,
                        this.renderRadioItem(true, this.question.locLabelTrue),
                        this.renderRadioItem(false, this.question.locLabelFalse))))));
    };
    return SurveyQuestionBooleanRadio;
}(boolean_SurveyQuestionBoolean));

ReactQuestionFactory.Instance.registerQuestion("sv-boolean-radio", function (props) {
    return _(boolean_radio_SurveyQuestionBooleanRadio, props);
});
external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["RendererFactory"].Instance.registerRenderer("boolean", "radio", "sv-boolean-radio");

// CONCATENATED MODULE: ./packages/survey-react-ui/src/reactquestion_empty.tsx
var reactquestion_empty_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var reactquestion_empty_SurveyQuestionEmpty = /** @class */ (function (_super) {
    reactquestion_empty_extends(SurveyQuestionEmpty, _super);
    function SurveyQuestionEmpty(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { value: _this.question.value };
        return _this;
    }
    Object.defineProperty(SurveyQuestionEmpty.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionEmpty.prototype.renderElement = function () {
        return _("div", null);
    };
    return SurveyQuestionEmpty;
}(reactquestion_element_SurveyQuestionElementBase));

ReactQuestionFactory.Instance.registerQuestion("empty", function (props) {
    return _(reactquestion_empty_SurveyQuestionEmpty, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/matrix/row.tsx
var matrix_row_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var row_MatrixRow = /** @class */ (function (_super) {
    matrix_row_extends(MatrixRow, _super);
    function MatrixRow(props) {
        var _this = _super.call(this, props) || this;
        _this.root = Rn.createRef();
        _this.onPointerDownHandler = function (event) {
            _this.parentMatrix.onPointerDown(event.nativeEvent, _this.model.row);
        };
        return _this;
    }
    Object.defineProperty(MatrixRow.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MatrixRow.prototype, "parentMatrix", {
        get: function () {
            return this.props.parentMatrix;
        },
        enumerable: false,
        configurable: true
    });
    MatrixRow.prototype.getStateElement = function () {
        return this.model;
    };
    MatrixRow.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        if (this.root.current) {
            this.model.setRootElement(this.root.current);
        }
    };
    MatrixRow.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.model.setRootElement(undefined);
    };
    MatrixRow.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (!_super.prototype.shouldComponentUpdate.call(this, nextProps, nextState))
            return false;
        if (nextProps.model !== this.model) {
            if (nextProps.element) {
                nextProps.element.setRootElement(this.root.current);
            }
            if (this.model) {
                this.model.setRootElement(undefined);
            }
        }
        return true;
    };
    MatrixRow.prototype.render = function () {
        var _this = this;
        var model = this.model;
        if (!model.visible)
            return null;
        return (Rn.createElement("tr", { ref: this.root, className: model.className, "data-sv-drop-target-matrix-row": model.row && model.row.id, onPointerDown: function (event) { return _this.onPointerDownHandler(event); } }, this.props.children));
    };
    return MatrixRow;
}(reactquestion_element_SurveyElementBase));

ReactElementFactory.Instance.registerElement("sv-matrix-row", function (props) {
    return Rn.createElement(row_MatrixRow, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/matrix-actions/drag-drop-icon/drag-drop-icon.tsx
var drag_drop_icon_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var drag_drop_icon_SurveyQuestionMatrixDynamicDragDropIcon = /** @class */ (function (_super) {
    drag_drop_icon_extends(SurveyQuestionMatrixDynamicDragDropIcon, _super);
    function SurveyQuestionMatrixDynamicDragDropIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyQuestionMatrixDynamicDragDropIcon.prototype, "question", {
        get: function () {
            return this.props.item.data.question;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionMatrixDynamicDragDropIcon.prototype.renderElement = function () {
        return Rn.createElement("div", null, this.renderIcon());
    };
    SurveyQuestionMatrixDynamicDragDropIcon.prototype.renderIcon = function () {
        if (this.question.iconDragElement) {
            return (Rn.createElement("svg", { className: this.question.cssClasses.dragElementDecorator },
                Rn.createElement("use", { xlinkHref: this.question.iconDragElement })));
        }
        else {
            return (Rn.createElement("span", { className: this.question.cssClasses.iconDrag }));
        }
    };
    return SurveyQuestionMatrixDynamicDragDropIcon;
}(ReactSurveyElement));

ReactElementFactory.Instance.registerElement("sv-matrix-drag-drop-icon", function (props) {
    return Rn.createElement(drag_drop_icon_SurveyQuestionMatrixDynamicDragDropIcon, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/reactquestion_matrixdropdownbase.tsx
var reactquestion_matrixdropdownbase_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();











var reactquestion_matrixdropdownbase_SurveyQuestionMatrixTable = /** @class */ (function (_super) {
    reactquestion_matrixdropdownbase_extends(SurveyQuestionMatrixTable, _super);
    function SurveyQuestionMatrixTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyQuestionMatrixTable.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionMatrixTable.prototype, "creator", {
        get: function () {
            return this.props.creator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionMatrixTable.prototype, "table", {
        get: function () {
            return this.question.renderedTable;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionMatrixTable.prototype.getStateElement = function () {
        return this.table;
    };
    SurveyQuestionMatrixTable.prototype.wrapCell = function (cell, element, reason) {
        return this.props.wrapCell(cell, element, reason);
    };
    SurveyQuestionMatrixTable.prototype.renderHeader = function () {
        var table = this.question.renderedTable;
        if (!table.showHeader)
            return null;
        var headers = [];
        var cells = table.headerRow.cells;
        for (var i = 0; i < cells.length; i++) {
            var cell = cells[i];
            var key = "column" + i;
            var columnStyle = {};
            if (!!cell.width) {
                columnStyle.width = cell.width;
            }
            if (!!cell.minWidth) {
                columnStyle.minWidth = cell.minWidth;
            }
            var cellContent = this.renderCellContent(cell, "column-header", {});
            var header = cell.hasTitle ?
                _("th", { className: cell.className, key: key, style: columnStyle },
                    " ",
                    cellContent,
                    " ")
                : _("td", { className: cell.className, key: key, style: columnStyle });
            headers.push(header);
        }
        return (_("thead", null,
            _("tr", null, headers)));
    };
    SurveyQuestionMatrixTable.prototype.renderFooter = function () {
        var table = this.question.renderedTable;
        if (!table.showFooter)
            return null;
        var row = this.renderRow("footer", table.footerRow, this.question.cssClasses, "row-footer");
        return _("tfoot", null, row);
    };
    SurveyQuestionMatrixTable.prototype.renderRows = function () {
        var cssClasses = this.question.cssClasses;
        var rows = [];
        var renderedRows = this.question.renderedTable.renderedRows;
        for (var i = 0; i < renderedRows.length; i++) {
            rows.push(this.renderRow(renderedRows[i].id, renderedRows[i], cssClasses));
        }
        return _("tbody", null, rows);
    };
    SurveyQuestionMatrixTable.prototype.renderRow = function (keyValue, row, cssClasses, reason) {
        var matrixrow = [];
        var cells = row.cells;
        for (var i = 0; i < cells.length; i++) {
            matrixrow.push(this.renderCell(cells[i], cssClasses, reason));
        }
        var key = "row" + keyValue;
        return (_(k, { key: key }, (reason == "row-footer") ? _("tr", null, matrixrow) : _(row_MatrixRow, { model: row, parentMatrix: this.question }, matrixrow)));
    };
    SurveyQuestionMatrixTable.prototype.renderCell = function (cell, cssClasses, reason) {
        var key = "cell" + cell.id;
        if (cell.hasQuestion) {
            return (_(reactquestion_matrixdropdownbase_SurveyQuestionMatrixDropdownCell, { key: key, cssClasses: cssClasses, cell: cell, creator: this.creator, reason: reason }));
        }
        if (cell.isErrorsCell) {
            if (cell.isErrorsCell) {
                return (_(reactquestion_matrixdropdownbase_SurveyQuestionMatrixDropdownErrorsCell, { cell: cell, key: key, keyValue: key, question: cell.question, creator: this.creator }));
            }
        }
        var calcReason = reason;
        if (!calcReason) {
            calcReason = cell.hasTitle ? "row-header" : "";
        }
        var cellContent = this.renderCellContent(cell, calcReason, cssClasses);
        var cellStyle = null;
        if (!!cell.width || !!cell.minWidth) {
            cellStyle = {};
            if (!!cell.width)
                cellStyle.width = cell.width;
            if (!!cell.minWidth)
                cellStyle.minWidth = cell.minWidth;
        }
        return (_("td", { className: cell.className, key: key, style: cellStyle, colSpan: cell.colSpans, title: cell.getTitle() }, cellContent));
    };
    SurveyQuestionMatrixTable.prototype.renderCellContent = function (cell, reason, cssClasses) {
        var cellContent = null;
        var cellStyle = null;
        if (!!cell.width || !!cell.minWidth) {
            cellStyle = {};
            if (!!cell.width)
                cellStyle.width = cell.width;
            if (!!cell.minWidth)
                cellStyle.minWidth = cell.minWidth;
        }
        if (cell.hasTitle) {
            reason = "row-header";
            var str = this.renderLocString(cell.locTitle);
            var require_1 = !!cell.column ? _(reactquestion_matrixdropdownbase_SurveyQuestionMatrixHeaderRequired, { column: cell.column, question: this.question }) : null;
            cellContent = (_(k, null,
                str,
                require_1));
        }
        if (cell.isDragHandlerCell) {
            cellContent = (_(k, null,
                _(drag_drop_icon_SurveyQuestionMatrixDynamicDragDropIcon, { item: { data: { row: cell.row, question: this.question } } })));
        }
        if (cell.isActionsCell) {
            cellContent = (ReactElementFactory.Instance.createElement("sv-matrixdynamic-actions-cell", {
                question: this.question,
                cssClasses: cssClasses, cell: cell,
                model: cell.item.getData()
            }));
        }
        if (cell.hasPanel) {
            cellContent = (_(panel_SurveyPanel, { key: cell.panel.id, element: cell.panel, survey: this.question.survey, cssClasses: cssClasses, isDisplayMode: this.isDisplayMode, creator: this.creator }));
        }
        if (!cellContent)
            return null;
        var readyCell = (_(k, null, cellContent));
        return this.wrapCell(cell, readyCell, reason);
    };
    SurveyQuestionMatrixTable.prototype.renderElement = function () {
        var header = this.renderHeader();
        var footers = this.renderFooter();
        var rows = this.renderRows();
        return (_("table", { className: this.question.getTableCss() },
            header,
            rows,
            footers));
    };
    return SurveyQuestionMatrixTable;
}(reactquestion_element_SurveyElementBase));
var reactquestion_matrixdropdownbase_SurveyQuestionMatrixDropdownBase = /** @class */ (function (_super) {
    reactquestion_matrixdropdownbase_extends(SurveyQuestionMatrixDropdownBase, _super);
    function SurveyQuestionMatrixDropdownBase(props) {
        var _this = _super.call(this, props) || this;
        //Create rendered table in contructor and not on rendering
        var table = _this.question.renderedTable;
        _this.state = _this.getState();
        return _this;
    }
    Object.defineProperty(SurveyQuestionMatrixDropdownBase.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionMatrixDropdownBase.prototype.getState = function (prevState) {
        if (prevState === void 0) { prevState = null; }
        return { rowCounter: !prevState ? 0 : prevState.rowCounter + 1 };
    };
    SurveyQuestionMatrixDropdownBase.prototype.updateStateOnCallback = function () {
        if (this.isRendering)
            return;
        this.setState(this.getState(this.state));
    };
    SurveyQuestionMatrixDropdownBase.prototype.componentDidMount = function () {
        var _this = this;
        _super.prototype.componentDidMount.call(this);
        this.question.onRenderedTableResetCallback = function () {
            _this.updateStateOnCallback();
        };
    };
    SurveyQuestionMatrixDropdownBase.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.question.onRenderedTableResetCallback = function () { };
    };
    SurveyQuestionMatrixDropdownBase.prototype.renderElement = function () {
        return this.renderTableDiv();
    };
    SurveyQuestionMatrixDropdownBase.prototype.renderTableDiv = function () {
        var _this = this;
        var divStyle = this.question.showHorizontalScroll
            ? { overflowX: "scroll" }
            : {};
        return (_("div", { style: divStyle, className: this.question.cssClasses.tableWrapper, ref: function (root) { return (_this.setControl(root)); } },
            _(reactquestion_matrixdropdownbase_SurveyQuestionMatrixTable, { question: this.question, creator: this.creator, wrapCell: function (cell, element, reason) { return _this.wrapCell(cell, element, reason); } })));
    };
    return SurveyQuestionMatrixDropdownBase;
}(reactquestion_element_SurveyQuestionElementBase));

var reactquestion_matrixdropdownbase_SurveyQuestionMatrixActionsCell = /** @class */ (function (_super) {
    reactquestion_matrixdropdownbase_extends(SurveyQuestionMatrixActionsCell, _super);
    function SurveyQuestionMatrixActionsCell(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionMatrixActionsCell.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionMatrixActionsCell.prototype.renderElement = function () {
        return (_(action_bar_SurveyActionBar, { model: this.model, handleClick: false }));
    };
    return SurveyQuestionMatrixActionsCell;
}(ReactSurveyElement));
var reactquestion_matrixdropdownbase_SurveyQuestionMatrixDropdownErrorsCell = /** @class */ (function (_super) {
    reactquestion_matrixdropdownbase_extends(SurveyQuestionMatrixDropdownErrorsCell, _super);
    function SurveyQuestionMatrixDropdownErrorsCell(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionMatrixDropdownErrorsCell.prototype, "key", {
        get: function () {
            return this.props.keyValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionMatrixDropdownErrorsCell.prototype, "cell", {
        get: function () {
            return this.props.cell;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionMatrixDropdownErrorsCell.prototype.render = function () {
        if (!this.cell.isVisible)
            return null;
        return _("td", { className: this.cell.className, key: this.key, colSpan: this.cell.colSpans, title: this.cell.getTitle() }, _super.prototype.render.call(this));
    };
    SurveyQuestionMatrixDropdownErrorsCell.prototype.getQuestionPropertiesToTrack = function () {
        return _super.prototype.getQuestionPropertiesToTrack.call(this).concat(["visible"]);
    };
    return SurveyQuestionMatrixDropdownErrorsCell;
}(reactquestion_SurveyQuestionErrorCell));
ReactElementFactory.Instance.registerElement("sv-matrixdynamic-actions-cell", function (props) {
    return _(reactquestion_matrixdropdownbase_SurveyQuestionMatrixActionsCell, props);
});
var reactquestion_matrixdropdownbase_SurveyQuestionMatrixHeaderRequired = /** @class */ (function (_super) {
    reactquestion_matrixdropdownbase_extends(SurveyQuestionMatrixHeaderRequired, _super);
    function SurveyQuestionMatrixHeaderRequired(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionMatrixHeaderRequired.prototype, "column", {
        get: function () {
            return this.props.column;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionMatrixHeaderRequired.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionMatrixHeaderRequired.prototype.getStateElement = function () {
        return this.column;
    };
    SurveyQuestionMatrixHeaderRequired.prototype.renderElement = function () {
        if (!this.column.isRenderedRequired)
            return null;
        return (_(k, null,
            _("span", null, "\u00A0"),
            _("span", { className: this.question.cssClasses.cellRequiredText }, this.column.requiredText)));
    };
    return SurveyQuestionMatrixHeaderRequired;
}(ReactSurveyElement));
var reactquestion_matrixdropdownbase_SurveyQuestionMatrixDropdownCell = /** @class */ (function (_super) {
    reactquestion_matrixdropdownbase_extends(SurveyQuestionMatrixDropdownCell, _super);
    function SurveyQuestionMatrixDropdownCell(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionMatrixDropdownCell.prototype, "cell", {
        get: function () {
            return this.props.cell;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionMatrixDropdownCell.prototype, "itemCss", {
        get: function () {
            return !!this.cell ? this.cell.className : "";
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionMatrixDropdownCell.prototype.getQuestion = function () {
        var q = _super.prototype.getQuestion.call(this);
        if (!!q)
            return q;
        return !!this.cell ? this.cell.question : null;
    };
    SurveyQuestionMatrixDropdownCell.prototype.doAfterRender = function () {
        var el = this.cellRef.current;
        if (el &&
            this.cell &&
            this.question &&
            this.question.survey &&
            el.getAttribute("data-rendered") !== "r") {
            el.setAttribute("data-rendered", "r");
            var options = {
                cell: this.cell,
                cellQuestion: this.question,
                htmlElement: el,
                row: this.cell.row,
                column: this.cell.cell.column,
            };
            this.question.survey.matrixAfterCellRender(this.question, options);
            this.question.afterRenderCore(el);
        }
    };
    SurveyQuestionMatrixDropdownCell.prototype.getShowErrors = function () {
        return (this.question.isVisible &&
            (!this.cell.isChoice || this.cell.isFirstChoice));
    };
    SurveyQuestionMatrixDropdownCell.prototype.getCellStyle = function () {
        var res = _super.prototype.getCellStyle.call(this);
        if (!!this.cell.width || !!this.cell.minWidth) {
            if (!res)
                res = {};
            if (!!this.cell.width)
                res.width = this.cell.width;
            if (!!this.cell.minWidth)
                res.minWidth = this.cell.minWidth;
        }
        return res;
    };
    SurveyQuestionMatrixDropdownCell.prototype.getHeaderText = function () {
        return this.cell.headers;
    };
    SurveyQuestionMatrixDropdownCell.prototype.renderElement = function () {
        if (!this.cell.isVisible) {
            return null;
        }
        return _super.prototype.renderElement.call(this);
    };
    SurveyQuestionMatrixDropdownCell.prototype.renderCellContent = function () {
        var content = _super.prototype.renderCellContent.call(this);
        var responsiveTitle = this.cell.showResponsiveTitle ? (_("span", { className: this.cell.responsiveTitleCss },
            this.renderLocString(this.cell.responsiveLocTitle),
            _(reactquestion_matrixdropdownbase_SurveyQuestionMatrixHeaderRequired, { column: this.cell.column, question: this.cell.matrix }))) : null;
        return _(k, null,
            responsiveTitle,
            content);
    };
    SurveyQuestionMatrixDropdownCell.prototype.renderQuestion = function () {
        if (!this.question.isVisible)
            return _(k, null);
        if (!this.cell.isChoice)
            return reactquestion_SurveyQuestion.renderQuestionBody(this.creator, this.question);
        if (this.cell.isOtherChoice)
            return this.renderOtherComment();
        if (this.cell.isCheckbox)
            return this.renderCellCheckboxButton();
        return this.renderCellRadiogroupButton();
    };
    SurveyQuestionMatrixDropdownCell.prototype.renderOtherComment = function () {
        var question = this.cell.question;
        var cssClasses = question.cssClasses || {};
        return _(SurveyQuestionOtherValueItem, { question: question, cssClasses: cssClasses, otherCss: cssClasses.other, isDisplayMode: question.isInputReadOnly });
    };
    SurveyQuestionMatrixDropdownCell.prototype.renderCellCheckboxButton = function () {
        var key = this.cell.question.id + "item" + this.cell.choiceIndex;
        return (_(reactquestion_checkbox_SurveyQuestionCheckboxItem, { key: key, question: this.cell.question, cssClasses: this.cell.question.cssClasses, isDisplayMode: this.cell.question.isInputReadOnly, item: this.cell.item, isFirst: this.cell.isFirstChoice, index: this.cell.choiceIndex.toString(), hideCaption: true }));
    };
    SurveyQuestionMatrixDropdownCell.prototype.renderCellRadiogroupButton = function () {
        var key = this.cell.question.id + "item" + this.cell.choiceIndex;
        return (_(reactquestion_radiogroup_SurveyQuestionRadioItem, { key: key, question: this.cell.question, cssClasses: this.cell.question.cssClasses, isDisplayMode: this.cell.question.isInputReadOnly, item: this.cell.item, index: this.cell.choiceIndex.toString(), isChecked: this.cell.question.value === this.cell.item.value, isDisabled: this.cell.question.isReadOnly || !this.cell.item.isEnabled, hideCaption: true }));
    };
    return SurveyQuestionMatrixDropdownCell;
}(reactquestion_SurveyQuestionAndErrorsCell));


// CONCATENATED MODULE: ./packages/survey-react-ui/src/reactquestion_matrixdropdown.tsx
var reactquestion_matrixdropdown_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SurveyQuestionMatrixDropdown = /** @class */ (function (_super) {
    reactquestion_matrixdropdown_extends(SurveyQuestionMatrixDropdown, _super);
    function SurveyQuestionMatrixDropdown(props) {
        return _super.call(this, props) || this;
    }
    return SurveyQuestionMatrixDropdown;
}(reactquestion_matrixdropdownbase_SurveyQuestionMatrixDropdownBase));

ReactQuestionFactory.Instance.registerQuestion("matrixdropdown", function (props) {
    return _(SurveyQuestionMatrixDropdown, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/reactquestion_matrixdynamic.tsx
var reactquestion_matrixdynamic_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var reactquestion_matrixdynamic_SurveyQuestionMatrixDynamic = /** @class */ (function (_super) {
    reactquestion_matrixdynamic_extends(SurveyQuestionMatrixDynamic, _super);
    function SurveyQuestionMatrixDynamic(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnRowAddClick = _this.handleOnRowAddClick.bind(_this);
        return _this;
    }
    Object.defineProperty(SurveyQuestionMatrixDynamic.prototype, "matrix", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionMatrixDynamic.prototype.handleOnRowAddClick = function (event) {
        this.matrix.addRowUI();
    };
    SurveyQuestionMatrixDynamic.prototype.renderElement = function () {
        var cssClasses = this.question.cssClasses;
        var showTable = this.question.renderedTable.showTable;
        var mainDiv = showTable
            ? this.renderTableDiv()
            : this.renderNoRowsContent(cssClasses);
        return (_("div", null,
            this.renderAddRowButtonOnTop(cssClasses),
            mainDiv,
            this.renderAddRowButtonOnBottom(cssClasses)));
    };
    SurveyQuestionMatrixDynamic.prototype.renderAddRowButtonOnTop = function (cssClasses) {
        if (!this.matrix.renderedTable.showAddRowOnTop)
            return null;
        return this.renderAddRowButton(cssClasses);
    };
    SurveyQuestionMatrixDynamic.prototype.renderAddRowButtonOnBottom = function (cssClasses) {
        if (!this.matrix.renderedTable.showAddRowOnBottom)
            return null;
        return this.renderAddRowButton(cssClasses);
    };
    SurveyQuestionMatrixDynamic.prototype.renderNoRowsContent = function (cssClasses) {
        var text = this.renderLocString(this.matrix.locEmptyRowsText);
        var textDiv = _("div", { className: cssClasses.emptyRowsText }, text);
        var btn = this.matrix.renderedTable.showAddRow ? this.renderAddRowButton(cssClasses, true) : undefined;
        return (_("div", { className: cssClasses.emptyRowsSection },
            textDiv,
            btn));
    };
    SurveyQuestionMatrixDynamic.prototype.renderAddRowButton = function (cssClasses, isEmptySection) {
        if (isEmptySection === void 0) { isEmptySection = false; }
        return ReactElementFactory.Instance.createElement("sv-matrixdynamic-add-btn", {
            question: this.question,
            cssClasses: cssClasses, isEmptySection: isEmptySection
        });
    };
    return SurveyQuestionMatrixDynamic;
}(reactquestion_matrixdropdownbase_SurveyQuestionMatrixDropdownBase));

ReactQuestionFactory.Instance.registerQuestion("matrixdynamic", function (props) {
    return _(reactquestion_matrixdynamic_SurveyQuestionMatrixDynamic, props);
});
var reactquestion_matrixdynamic_SurveyQuestionMatrixDynamicAddButton = /** @class */ (function (_super) {
    reactquestion_matrixdynamic_extends(SurveyQuestionMatrixDynamicAddButton, _super);
    function SurveyQuestionMatrixDynamicAddButton(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnRowAddClick = _this.handleOnRowAddClick.bind(_this);
        return _this;
    }
    Object.defineProperty(SurveyQuestionMatrixDynamicAddButton.prototype, "matrix", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionMatrixDynamicAddButton.prototype.handleOnRowAddClick = function (event) {
        this.matrix.addRowUI();
    };
    SurveyQuestionMatrixDynamicAddButton.prototype.renderElement = function () {
        var addRowText = this.renderLocString(this.matrix.locAddRowText);
        var addButton = (_("button", { className: this.matrix.getAddRowButtonCss(this.props.isEmptySection), type: "button", disabled: this.matrix.isInputReadOnly, onClick: this.matrix.isDesignMode ? undefined : this.handleOnRowAddClick },
            addRowText,
            _("span", { className: this.props.cssClasses.iconAdd })));
        return (this.props.isEmptySection ? addButton : _("div", { className: this.props.cssClasses.footer }, addButton));
    };
    return SurveyQuestionMatrixDynamicAddButton;
}(ReactSurveyElement));

ReactElementFactory.Instance.registerElement("sv-matrixdynamic-add-btn", function (props) {
    return _(reactquestion_matrixdynamic_SurveyQuestionMatrixDynamicAddButton, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/paneldynamic-actions/paneldynamic-add-btn.tsx
var paneldynamic_add_btn_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SurveyQuestionPanelDynamicAction = /** @class */ (function (_super) {
    paneldynamic_add_btn_extends(SurveyQuestionPanelDynamicAction, _super);
    function SurveyQuestionPanelDynamicAction(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionPanelDynamicAction.prototype, "data", {
        get: function () {
            return (this.props.item && this.props.item.data) || this.props.data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionPanelDynamicAction.prototype, "question", {
        get: function () {
            return (this.props.item && this.props.item.data.question) || this.props.data.question;
        },
        enumerable: false,
        configurable: true
    });
    return SurveyQuestionPanelDynamicAction;
}(ReactSurveyElement));

var paneldynamic_add_btn_SurveyQuestionPanelDynamicAddButton = /** @class */ (function (_super) {
    paneldynamic_add_btn_extends(SurveyQuestionPanelDynamicAddButton, _super);
    function SurveyQuestionPanelDynamicAddButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (event) {
            _this.question.addPanelUI();
        };
        return _this;
    }
    SurveyQuestionPanelDynamicAddButton.prototype.renderElement = function () {
        if (!this.question.canAddPanel)
            return null;
        var btnText = this.renderLocString(this.question.locPanelAddText);
        return (Rn.createElement("button", { type: "button", id: this.question.addButtonId, className: this.question.getAddButtonCss(), onClick: this.handleClick },
            Rn.createElement("span", { className: this.question.cssClasses.buttonAddText }, btnText)));
    };
    return SurveyQuestionPanelDynamicAddButton;
}(SurveyQuestionPanelDynamicAction));

ReactElementFactory.Instance.registerElement("sv-paneldynamic-add-btn", function (props) {
    return Rn.createElement(paneldynamic_add_btn_SurveyQuestionPanelDynamicAddButton, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/paneldynamic-actions/paneldynamic-next-btn.tsx
var paneldynamic_next_btn_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var paneldynamic_next_btn_SurveyQuestionPanelDynamicNextButton = /** @class */ (function (_super) {
    paneldynamic_next_btn_extends(SurveyQuestionPanelDynamicNextButton, _super);
    function SurveyQuestionPanelDynamicNextButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (event) {
            _this.question.goToNextPanel();
        };
        return _this;
    }
    SurveyQuestionPanelDynamicNextButton.prototype.renderElement = function () {
        return (Rn.createElement("div", { title: this.question.panelNextText, onClick: this.handleClick, className: this.question.getNextButtonCss() },
            Rn.createElement(svg_icon_SvgIcon, { iconName: this.question.cssClasses.progressBtnIcon, size: "auto" })));
    };
    return SurveyQuestionPanelDynamicNextButton;
}(SurveyQuestionPanelDynamicAction));

ReactElementFactory.Instance.registerElement("sv-paneldynamic-next-btn", function (props) {
    return Rn.createElement(paneldynamic_next_btn_SurveyQuestionPanelDynamicNextButton, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/paneldynamic-actions/paneldynamic-prev-btn.tsx
var paneldynamic_prev_btn_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var paneldynamic_prev_btn_SurveyQuestionPanelDynamicPrevButton = /** @class */ (function (_super) {
    paneldynamic_prev_btn_extends(SurveyQuestionPanelDynamicPrevButton, _super);
    function SurveyQuestionPanelDynamicPrevButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (event) {
            _this.question.goToPrevPanel();
        };
        return _this;
    }
    SurveyQuestionPanelDynamicPrevButton.prototype.renderElement = function () {
        return (Rn.createElement("div", { title: this.question.panelPrevText, onClick: this.handleClick, className: this.question.getPrevButtonCss() },
            Rn.createElement(svg_icon_SvgIcon, { iconName: this.question.cssClasses.progressBtnIcon, size: "auto" })));
    };
    return SurveyQuestionPanelDynamicPrevButton;
}(SurveyQuestionPanelDynamicAction));

ReactElementFactory.Instance.registerElement("sv-paneldynamic-prev-btn", function (props) {
    return Rn.createElement(paneldynamic_prev_btn_SurveyQuestionPanelDynamicPrevButton, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/paneldynamic-actions/paneldynamic-progress-text.tsx
var paneldynamic_progress_text_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var paneldynamic_progress_text_SurveyQuestionPanelDynamicProgressText = /** @class */ (function (_super) {
    paneldynamic_progress_text_extends(SurveyQuestionPanelDynamicProgressText, _super);
    function SurveyQuestionPanelDynamicProgressText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SurveyQuestionPanelDynamicProgressText.prototype.renderElement = function () {
        return (Rn.createElement("div", { className: this.question.cssClasses.progressText }, this.question.progressText));
    };
    return SurveyQuestionPanelDynamicProgressText;
}(SurveyQuestionPanelDynamicAction));

ReactElementFactory.Instance.registerElement("sv-paneldynamic-progress-text", function (props) {
    return Rn.createElement(paneldynamic_progress_text_SurveyQuestionPanelDynamicProgressText, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/reactquestion_paneldynamic.tsx
var reactquestion_paneldynamic_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









var reactquestion_paneldynamic_SurveyQuestionPanelDynamic = /** @class */ (function (_super) {
    reactquestion_paneldynamic_extends(SurveyQuestionPanelDynamic, _super);
    function SurveyQuestionPanelDynamic(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionPanelDynamic.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionPanelDynamic.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.setState({ panelCounter: 0 });
        var self = this;
        this.question.panelCountChangedCallback = function () {
            self.updateQuestionRendering();
        };
        this.question.currentIndexChangedCallback = function () {
            self.updateQuestionRendering();
        };
        this.question.renderModeChangedCallback = function () {
            self.updateQuestionRendering();
        };
    };
    SurveyQuestionPanelDynamic.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.question.panelCountChangedCallback = function () { };
        this.question.currentIndexChangedCallback = function () { };
        this.question.renderModeChangedCallback = function () { };
    };
    SurveyQuestionPanelDynamic.prototype.updateQuestionRendering = function () {
        this.setState({
            panelCounter: this.state ? this.state.panelCounter + 1 : 1,
        });
    };
    SurveyQuestionPanelDynamic.prototype.renderElement = function () {
        var _this = this;
        var panels = [];
        this.question.renderedPanels.forEach(function (panel, index) {
            panels.push(_(reactquestion_paneldynamic_SurveyQuestionPanelDynamicItem, { key: panel.id, element: panel, question: _this.question, index: index, cssClasses: _this.question.cssClasses, isDisplayMode: _this.isDisplayMode, creator: _this.creator }));
        });
        var btnAdd = this.question.isRenderModeList && this.question["showLegacyNavigation"]
            ? this.renderAddRowButton()
            : null;
        var navTop = this.question.isProgressTopShowing
            ? this.renderNavigator()
            : null;
        var navBottom = this.question.isProgressBottomShowing
            ? this.renderNavigator()
            : null;
        var navV2 = this.renderNavigatorV2();
        var noEntriesPlaceholder = this.renderPlaceholder();
        return (_("div", { className: this.question.cssClasses.root },
            this.question.hasTabbedMenu ? _("div", { className: this.question.getTabsContainerCss() },
                _(action_bar_SurveyActionBar, { model: this.question.tabbedMenu })) : null,
            noEntriesPlaceholder,
            navTop,
            _("div", { className: this.question.cssClasses.panelsContainer }, panels),
            navBottom,
            btnAdd,
            navV2));
    };
    SurveyQuestionPanelDynamic.prototype.renderNavigator = function () {
        if (!this.question["showLegacyNavigation"]) {
            if (this.question.isRangeShowing && this.question.isProgressTopShowing) {
                return this.renderRange();
            }
            else {
                return null;
            }
        }
        var range = this.question.isRangeShowing ? this.renderRange() : null;
        var btnPrev = this.rendrerPrevButton();
        var btnNext = this.rendrerNextButton();
        var btnAdd = this.renderAddRowButton();
        var progressClass = this.question.isProgressTopShowing
            ? this.question.cssClasses.progressTop
            : this.question.cssClasses.progressBottom;
        return (_("div", { className: progressClass },
            _("div", { style: { clear: "both" } },
                _("div", { className: this.question.cssClasses.progressContainer },
                    btnPrev,
                    range,
                    btnNext),
                btnAdd,
                this.renderProgressText())));
    };
    SurveyQuestionPanelDynamic.prototype.renderProgressText = function () {
        return (_(paneldynamic_progress_text_SurveyQuestionPanelDynamicProgressText, { data: { question: this.question } }));
    };
    SurveyQuestionPanelDynamic.prototype.rendrerPrevButton = function () {
        return (_(paneldynamic_prev_btn_SurveyQuestionPanelDynamicPrevButton, { data: { question: this.question } }));
    };
    SurveyQuestionPanelDynamic.prototype.rendrerNextButton = function () {
        return (_(paneldynamic_next_btn_SurveyQuestionPanelDynamicNextButton, { data: { question: this.question } }));
    };
    SurveyQuestionPanelDynamic.prototype.renderRange = function () {
        return (_("div", { className: this.question.cssClasses.progress },
            _("div", { className: this.question.cssClasses.progressBar, style: { width: this.question.progress }, role: "progressbar" })));
    };
    SurveyQuestionPanelDynamic.prototype.renderAddRowButton = function () {
        return ReactElementFactory.Instance.createElement("sv-paneldynamic-add-btn", {
            data: { question: this.question }
        });
    };
    SurveyQuestionPanelDynamic.prototype.renderNavigatorV2 = function () {
        if (!this.question.showNavigation)
            return null;
        var range = this.question.isRangeShowing && this.question.isProgressBottomShowing ? this.renderRange() : null;
        return (_("div", { className: this.question.cssClasses.footer },
            _("hr", { className: this.question.cssClasses.separator }),
            range,
            this.question.footerToolbar.visibleActions.length ? (_("div", { className: this.question.cssClasses.footerButtonsContainer },
                _(action_bar_SurveyActionBar, { model: this.question.footerToolbar }))) : null));
    };
    SurveyQuestionPanelDynamic.prototype.renderPlaceholder = function () {
        if (this.question.getShowNoEntriesPlaceholder()) {
            return (_("div", { className: this.question.cssClasses.noEntriesPlaceholder },
                _("span", null, this.renderLocString(this.question.locNoEntriesText)),
                this.renderAddRowButton()));
        }
        return null;
    };
    return SurveyQuestionPanelDynamic;
}(reactquestion_element_SurveyQuestionElementBase));

var reactquestion_paneldynamic_SurveyQuestionPanelDynamicItem = /** @class */ (function (_super) {
    reactquestion_paneldynamic_extends(SurveyQuestionPanelDynamicItem, _super);
    function SurveyQuestionPanelDynamicItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyQuestionPanelDynamicItem.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionPanelDynamicItem.prototype, "index", {
        get: function () {
            return this.props.index;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionPanelDynamicItem.prototype.getSurvey = function () {
        return !!this.question ? this.question.survey : null;
    };
    SurveyQuestionPanelDynamicItem.prototype.getCss = function () {
        var survey = this.getSurvey();
        return !!survey ? survey.getCss() : {};
    };
    SurveyQuestionPanelDynamicItem.prototype.render = function () {
        var panel = _super.prototype.render.call(this);
        var removeButton = this.renderButton();
        var separator = this.question.showSeparator(this.index) ?
            (_("hr", { className: this.question.cssClasses.separator })) : null;
        return (_(k, null,
            _("div", { className: this.question.getPanelWrapperCss(this.panel) },
                panel,
                removeButton),
            separator));
    };
    SurveyQuestionPanelDynamicItem.prototype.renderButton = function () {
        if (this.question.panelRemoveButtonLocation !== "right" ||
            !this.question.canRemovePanel ||
            (this.question.isRenderModeList && this.panel.isCollapsed)) {
            return null;
        }
        return ReactElementFactory.Instance.createElement("sv-paneldynamic-remove-btn", {
            data: { question: this.question, panel: this.panel }
        });
    };
    return SurveyQuestionPanelDynamicItem;
}(panel_SurveyPanel));

ReactQuestionFactory.Instance.registerQuestion("paneldynamic", function (props) {
    return _(reactquestion_paneldynamic_SurveyQuestionPanelDynamic, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/progress.tsx
var progress_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var progress_SurveyProgress = /** @class */ (function (_super) {
    progress_extends(SurveyProgress, _super);
    function SurveyProgress(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyProgress.prototype, "isTop", {
        get: function () {
            return this.props.isTop;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyProgress.prototype, "progress", {
        get: function () {
            return this.survey.progressValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyProgress.prototype, "progressText", {
        get: function () {
            return this.survey.progressText;
        },
        enumerable: false,
        configurable: true
    });
    SurveyProgress.prototype.render = function () {
        var progressStyle = {
            width: this.progress + "%",
        };
        return (_("div", { className: this.survey.getProgressCssClasses(this.props.container) },
            _("div", { style: progressStyle, className: this.css.progressBar, role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "progress" },
                _("span", { className: external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["SurveyProgressModel"].getProgressTextInBarCss(this.css) }, this.progressText)),
            _("span", { className: external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["SurveyProgressModel"].getProgressTextUnderBarCss(this.css) }, this.progressText)));
    };
    return SurveyProgress;
}(SurveyNavigationBase));

ReactElementFactory.Instance.registerElement("sv-progress-pages", function (props) {
    return _(progress_SurveyProgress, props);
});
ReactElementFactory.Instance.registerElement("sv-progress-questions", function (props) {
    return _(progress_SurveyProgress, props);
});
ReactElementFactory.Instance.registerElement("sv-progress-correctquestions", function (props) {
    return _(progress_SurveyProgress, props);
});
ReactElementFactory.Instance.registerElement("sv-progress-requiredquestions", function (props) {
    return _(progress_SurveyProgress, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/progressButtons.tsx
var progressButtons_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var progressButtons_SurveyProgressButtons = /** @class */ (function (_super) {
    progressButtons_extends(SurveyProgressButtons, _super);
    function SurveyProgressButtons(props) {
        var _this = _super.call(this, props) || this;
        _this.listContainerRef = b();
        return _this;
    }
    Object.defineProperty(SurveyProgressButtons.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyProgressButtons.prototype, "container", {
        get: function () {
            return this.props.container;
        },
        enumerable: false,
        configurable: true
    });
    SurveyProgressButtons.prototype.onResize = function (canShowItemTitles) {
        this.setState({ canShowItemTitles: canShowItemTitles });
        this.setState({ canShowHeader: !canShowItemTitles });
    };
    SurveyProgressButtons.prototype.onUpdateScroller = function (hasScroller) {
        this.setState({ hasScroller: hasScroller });
    };
    SurveyProgressButtons.prototype.onUpdateSettings = function () {
        this.setState({ canShowItemTitles: this.model.showItemTitles });
        this.setState({ canShowFooter: !this.model.showItemTitles });
    };
    SurveyProgressButtons.prototype.render = function () {
        var _this = this;
        return (_("div", { className: this.model.getRootCss(this.props.container), style: { "maxWidth": this.model.progressWidth }, role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "progress" },
            this.state.canShowHeader ? _("div", { className: this.css.progressButtonsHeader },
                _("div", { className: this.css.progressButtonsPageTitle, title: this.model.headerText }, this.model.headerText)) : null,
            _("div", { className: this.css.progressButtonsContainer },
                _("div", { className: this.model.getScrollButtonCss(this.state.hasScroller, true), role: "button", onClick: function () {
                        return _this.clickScrollButton(_this.listContainerRef.current, true);
                    } }),
                _("div", { className: this.css.progressButtonsListContainer, ref: this.listContainerRef },
                    _("ul", { className: this.css.progressButtonsList }, this.getListElements())),
                _("div", { className: this.model.getScrollButtonCss(this.state.hasScroller, false), role: "button", onClick: function () {
                        return _this.clickScrollButton(_this.listContainerRef.current, false);
                    } })),
            this.state.canShowFooter ? _("div", { className: this.css.progressButtonsFooter },
                _("div", { className: this.css.progressButtonsPageTitle, title: this.model.footerText }, this.model.footerText)) : null));
    };
    SurveyProgressButtons.prototype.getListElements = function () {
        var _this = this;
        var buttons = [];
        this.survey.visiblePages.forEach(function (page, index) {
            buttons.push(_this.renderListElement(page, index));
        });
        return buttons;
    };
    SurveyProgressButtons.prototype.renderListElement = function (page, index) {
        var _this = this;
        var text = reactquestion_element_SurveyElementBase.renderLocString(page.locNavigationTitle);
        return (_("li", { key: "listelement" + index, className: this.model.getListElementCss(index), onClick: this.model.isListElementClickable(index)
                ? function () { return _this.model.clickListElement(page); }
                : undefined, "data-page-number": this.model.getItemNumber(page) },
            _("div", { className: this.css.progressButtonsConnector }),
            this.state.canShowItemTitles ? _(k, null,
                _("div", { className: this.css.progressButtonsPageTitle, title: page.renderedNavigationTitle }, text),
                _("div", { className: this.css.progressButtonsPageDescription, title: page.navigationDescription }, page.navigationDescription)) : null,
            _("div", { className: this.css.progressButtonsButton },
                _("div", { className: this.css.progressButtonsButtonBackground }),
                _("div", { className: this.css.progressButtonsButtonContent }),
                _("span", null, this.model.getItemNumber(page)))));
    };
    SurveyProgressButtons.prototype.clickScrollButton = function (listContainerElement, isLeftScroll) {
        if (!!listContainerElement) {
            listContainerElement.scrollLeft += (isLeftScroll ? -1 : 1) * 70;
        }
    };
    SurveyProgressButtons.prototype.componentDidMount = function () {
        var _this = this;
        _super.prototype.componentDidMount.call(this);
        setTimeout(function () {
            _this.respManager = new external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["ProgressButtonsResponsivityManager"](_this.model, _this.listContainerRef.current, _this);
        }, 10);
    };
    SurveyProgressButtons.prototype.componentWillUnmount = function () {
        if (!!this.respManager) {
            this.respManager.dispose();
        }
        _super.prototype.componentWillUnmount.call(this);
    };
    return SurveyProgressButtons;
}(SurveyNavigationBase));

ReactElementFactory.Instance.registerElement("sv-progress-buttons", function (props) {
    return _(progressButtons_SurveyProgressButtons, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/list/list-item.tsx
var list_item_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var list_item_ListItem = /** @class */ (function (_super) {
    list_item_extends(ListItem, _super);
    function ListItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleKeydown = function (event) {
            _this.model.onKeyDown(event);
        };
        return _this;
    }
    Object.defineProperty(ListItem.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItem.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    ListItem.prototype.getStateElement = function () {
        return this.item;
    };
    ListItem.prototype.render = function () {
        var _this = this;
        if (!this.item)
            return null;
        var className = this.model.getItemClass(this.item);
        var itemContent = this.item.component || this.model.itemComponent;
        var newElement = ReactElementFactory.Instance.createElement(itemContent, { item: this.item, key: this.item.id, model: this.model });
        var contentWrap = Rn.createElement("div", { style: this.model.getItemStyle(this.item), className: this.model.cssClasses.itemBody, title: this.item.getTooltip(), onMouseOver: function (event) { _this.model.onItemHover(_this.item); }, onMouseLeave: function (event) { _this.model.onItemLeave(_this.item); } }, newElement);
        var separator = this.item.needSeparator ? Rn.createElement("div", { className: this.model.cssClasses.itemSeparator }) : null;
        var isVisible = this.model.isItemVisible(this.item);
        var style = {
            display: isVisible ? null : "none"
        };
        return attachKey2click(Rn.createElement("li", { className: className, role: "option", style: style, id: this.item.elementId, "aria-selected": this.model.isItemSelected(this.item), onClick: function (event) {
                _this.model.onItemClick(_this.item);
                event.stopPropagation();
            }, onPointerDown: function (event) { return _this.model.onPointerDown(event, _this.item); } },
            separator,
            contentWrap), this.item);
    };
    ListItem.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.model.onLastItemRended(this.item);
    };
    return ListItem;
}(reactquestion_element_SurveyElementBase));

ReactElementFactory.Instance.registerElement("sv-list-item", function (props) {
    return Rn.createElement(list_item_ListItem, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/list/list.tsx
var list_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var list_List = /** @class */ (function (_super) {
    list_extends(List, _super);
    function List(props) {
        var _this = _super.call(this, props) || this;
        _this.handleKeydown = function (event) {
            _this.model.onKeyDown(event);
        };
        _this.handleMouseMove = function (event) {
            _this.model.onMouseMove(event);
        };
        _this.state = {
            filterString: _this.model.filterString || ""
        };
        _this.listContainerRef = Rn.createRef();
        return _this;
    }
    Object.defineProperty(List.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    List.prototype.getStateElement = function () {
        return this.model;
    };
    List.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        if (!!this.listContainerRef && !!this.listContainerRef.current) {
            this.model.initListContainerHtmlElement(this.listContainerRef.current);
        }
    };
    List.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _a;
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        if (this.model !== prevProps.model) {
            if (this.model && !!((_a = this.listContainerRef) === null || _a === void 0 ? void 0 : _a.current)) {
                this.model.initListContainerHtmlElement(this.listContainerRef.current);
            }
            if (prevProps.model) {
                prevProps.model.initListContainerHtmlElement(undefined);
            }
        }
    };
    List.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        if (!!this.model) {
            this.model.initListContainerHtmlElement(undefined);
        }
    };
    List.prototype.renderElement = function () {
        return (Rn.createElement("div", { className: this.model.cssClasses.root, ref: this.listContainerRef },
            this.searchElementContent(),
            this.emptyContent(),
            this.renderList()));
    };
    List.prototype.renderList = function () {
        if (!this.model.renderElements)
            return null;
        var items = this.renderItems();
        var ulStyle = { display: this.model.isEmpty ? "none" : null };
        return (Rn.createElement("ul", { className: this.model.getListClass(), style: ulStyle, role: "listbox", id: this.model.elementId, onMouseDown: function (e) {
                e.preventDefault();
            }, onKeyDown: this.handleKeydown, onMouseMove: this.handleMouseMove }, items));
    };
    List.prototype.renderItems = function () {
        var _this = this;
        if (!this.model) {
            return null;
        }
        var items = this.model.renderedActions;
        if (!items) {
            return null;
        }
        return items.map(function (item, itemIndex) {
            return (Rn.createElement(list_item_ListItem, { model: _this.model, item: item, key: "item" + itemIndex }));
        });
    };
    List.prototype.searchElementContent = function () {
        var _this = this;
        if (!this.model.showFilter)
            return null;
        else {
            var onChange = function (e) {
                var root = external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["settings"].environment.root;
                if (e.target === root.activeElement) {
                    _this.model.filterString = e.target.value;
                }
            };
            var onKeyUp = function (e) {
                _this.model.goToItems(e);
            };
            var clearButton = this.model.showSearchClearButton && !!this.model.filterString ?
                Rn.createElement("button", { className: this.model.cssClasses.searchClearButtonIcon, onClick: function (event) { _this.model.onClickSearchClearButton(event); } },
                    Rn.createElement(svg_icon_SvgIcon, { iconName: "icon-searchclear", size: "auto" })) : null;
            return (Rn.createElement("div", { className: this.model.cssClasses.filter },
                Rn.createElement("div", { className: this.model.cssClasses.filterIcon },
                    Rn.createElement(svg_icon_SvgIcon, { iconName: "icon-search", size: "auto" })),
                Rn.createElement("input", { type: "text", className: this.model.cssClasses.filterInput, "aria-label": this.model.filterStringPlaceholder, placeholder: this.model.filterStringPlaceholder, value: this.state.filterString, onKeyUp: onKeyUp, onChange: onChange }),
                clearButton));
        }
    };
    List.prototype.emptyContent = function () {
        var style = { display: this.model.isEmpty ? null : "none" };
        return (Rn.createElement("div", { className: this.model.cssClasses.emptyContainer, style: style },
            Rn.createElement("div", { className: this.model.cssClasses.emptyText, "aria-label": this.model.emptyMessage }, this.model.emptyMessage)));
    };
    return List;
}(reactquestion_element_SurveyElementBase));

ReactElementFactory.Instance.registerElement("sv-list", function (props) {
    return Rn.createElement(list_List, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/progressToc.tsx
var progressToc_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var progressToc_SurveyProgressToc = /** @class */ (function (_super) {
    progressToc_extends(SurveyProgressToc, _super);
    function SurveyProgressToc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SurveyProgressToc.prototype.render = function () {
        var tocModel = this.props.model;
        var content;
        if (tocModel.isMobile) {
            content = _("div", { onClick: tocModel.togglePopup },
                _(svg_icon_SvgIcon, { iconName: tocModel.icon, size: 24 }),
                _(popup_Popup, { model: tocModel.popupModel }));
        }
        else {
            content = _(list_List, { model: tocModel.listModel });
        }
        return (_("div", { className: tocModel.containerCss }, content));
    };
    return SurveyProgressToc;
}(SurveyNavigationBase));

ReactElementFactory.Instance.registerElement("sv-navigation-toc", function (props) {
    return _(progressToc_SurveyProgressToc, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/reactquestion_rating.tsx
var reactquestion_rating_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var reactquestion_rating_SurveyQuestionRating = /** @class */ (function (_super) {
    reactquestion_rating_extends(SurveyQuestionRating, _super);
    function SurveyQuestionRating(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnClick = _this.handleOnClick.bind(_this);
        return _this;
    }
    Object.defineProperty(SurveyQuestionRating.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionRating.prototype.handleOnClick = function (event) {
        this.question.setValueFromClick(event.target.value);
        this.setState({ value: this.question.value });
    };
    SurveyQuestionRating.prototype.renderItem = function (item, index) {
        var renderedItem = ReactElementFactory.Instance.createElement(this.question.itemComponent, {
            question: this.question,
            item: item,
            index: index,
            key: "value" + index,
            handleOnClick: this.handleOnClick,
            isDisplayMode: this.isDisplayMode
        });
        return renderedItem;
    };
    SurveyQuestionRating.prototype.renderElement = function () {
        var _this = this;
        var cssClasses = this.question.cssClasses;
        var minText = this.question.minRateDescription
            ? this.renderLocString(this.question.locMinRateDescription)
            : null;
        var maxText = this.question.maxRateDescription
            ? this.renderLocString(this.question.locMaxRateDescription)
            : null;
        return (_("div", { className: this.question.ratingRootCss, ref: function (div) { return (_this.setControl(div)); } },
            _("fieldset", { role: "radiogroup" },
                _("legend", { role: "presentation", className: "sv-hidden" }),
                !!this.question.hasMinLabel ? _("span", { className: cssClasses.minText }, minText) : null,
                this.question.renderedRateItems.map(function (item, index) { return _this.renderItem(item, index); }),
                !!this.question.hasMaxLabel ? _("span", { className: cssClasses.maxText }, maxText) : null)));
    };
    return SurveyQuestionRating;
}(reactquestion_element_SurveyQuestionElementBase));

ReactQuestionFactory.Instance.registerQuestion("rating", function (props) {
    return _(reactquestion_rating_SurveyQuestionRating, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/rating-dropdown.tsx
var rating_dropdown_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var rating_dropdown_SurveyQuestionRatingDropdown = /** @class */ (function (_super) {
    rating_dropdown_extends(SurveyQuestionRatingDropdown, _super);
    function SurveyQuestionRatingDropdown(props) {
        return _super.call(this, props) || this;
    }
    SurveyQuestionRatingDropdown.prototype.renderElement = function () {
        var cssClasses = this.question.cssClasses;
        var select = this.renderSelect(cssClasses);
        return (_("div", { className: this.question.cssClasses.rootDropdown }, select));
    };
    return SurveyQuestionRatingDropdown;
}(dropdown_base_SurveyQuestionDropdownBase));

ReactQuestionFactory.Instance.registerQuestion("sv-rating-dropdown", function (props) {
    return _(rating_dropdown_SurveyQuestionRatingDropdown, props);
});
external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["RendererFactory"].Instance.registerRenderer("rating", "dropdown", "sv-rating-dropdown");

// CONCATENATED MODULE: ./packages/survey-react-ui/src/reactquestion_expression.tsx
var reactquestion_expression_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var reactquestion_expression_SurveyQuestionExpression = /** @class */ (function (_super) {
    reactquestion_expression_extends(SurveyQuestionExpression, _super);
    function SurveyQuestionExpression(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionExpression.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionExpression.prototype.renderElement = function () {
        var _this = this;
        var cssClasses = this.question.cssClasses;
        return (_("div", { id: this.question.inputId, className: cssClasses.root, ref: function (div) { return (_this.setControl(div)); } }, this.question.formatedValue));
    };
    return SurveyQuestionExpression;
}(reactquestion_element_SurveyQuestionElementBase));

ReactQuestionFactory.Instance.registerQuestion("expression", function (props) {
    return _(reactquestion_expression_SurveyQuestionExpression, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/react-popup-survey.tsx
var react_popup_survey_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var react_popup_survey_PopupSurvey = /** @class */ (function (_super) {
    react_popup_survey_extends(PopupSurvey, _super);
    function PopupSurvey(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnExpanded = _this.handleOnExpanded.bind(_this);
        return _this;
    }
    PopupSurvey.prototype.getStateElements = function () {
        return [this.popup, this.popup.survey];
    };
    PopupSurvey.prototype.handleOnExpanded = function (event) {
        this.popup.changeExpandCollapse();
    };
    PopupSurvey.prototype.canRender = function () {
        return _super.prototype.canRender.call(this) && this.popup.isShowing;
    };
    PopupSurvey.prototype.renderElement = function () {
        var _this = this;
        var header = this.renderWindowHeader();
        var body = this.renderBody();
        var style = {};
        if (!!this.popup.renderedWidth) {
            style.width = this.popup.renderedWidth;
            style.maxWidth = this.popup.renderedWidth;
        }
        return (_("div", { className: this.popup.cssRoot, style: style, onScroll: function () { return _this.popup.onScroll(); } },
            _("div", { className: this.popup.cssRootContent },
                header,
                body)));
    };
    PopupSurvey.prototype.renderWindowHeader = function () {
        var popup = this.popup;
        var headerCss = popup.cssHeaderRoot;
        var titleCollapsed = null;
        var expandCollapseIcon;
        var closeButton = null;
        var allowFullScreenButon = null;
        if (popup.isCollapsed) {
            headerCss += " " + popup.cssRootCollapsedMod;
            titleCollapsed = this.renderTitleCollapsed(popup);
            expandCollapseIcon = this.renderExpandIcon();
        }
        else {
            expandCollapseIcon = this.renderCollapseIcon();
        }
        if (popup.allowClose) {
            closeButton = this.renderCloseButton(this.popup);
        }
        if (popup.allowFullScreen) {
            allowFullScreenButon = this.renderAllowFullScreenButon(this.popup);
        }
        return (_("div", { className: popup.cssHeaderRoot },
            titleCollapsed,
            _("div", { className: popup.cssHeaderButtonsContainer },
                allowFullScreenButon,
                _("div", { className: popup.cssHeaderCollapseButton, onClick: this.handleOnExpanded }, expandCollapseIcon),
                closeButton)));
    };
    PopupSurvey.prototype.renderTitleCollapsed = function (popup) {
        if (!popup.locTitle)
            return null;
        return _("div", { className: popup.cssHeaderTitleCollapsed }, popup.locTitle.renderedHtml);
    };
    PopupSurvey.prototype.renderExpandIcon = function () {
        return _(svg_icon_SvgIcon, { iconName: "icon-restore_16x16", size: 16 });
    };
    PopupSurvey.prototype.renderCollapseIcon = function () {
        return _(svg_icon_SvgIcon, { iconName: "icon-minimize_16x16", size: 16 });
    };
    PopupSurvey.prototype.renderCloseButton = function (popup) {
        var _this = this;
        return (_("div", { className: popup.cssHeaderCloseButton, onClick: function () {
                popup.hide();
                if (typeof _this.props.onClose == "function") {
                    _this.props.onClose();
                }
            } },
            _(svg_icon_SvgIcon, { iconName: "icon-close_16x16", size: 16 })));
    };
    PopupSurvey.prototype.renderAllowFullScreenButon = function (popup) {
        var Icon;
        if (popup.isFullScreen) {
            Icon = _(svg_icon_SvgIcon, { iconName: "icon-back-to-panel_16x16", size: 16 });
        }
        else {
            Icon = _(svg_icon_SvgIcon, { iconName: "icon-full-screen_16x16", size: 16 });
        }
        return (_("div", { className: popup.cssHeaderFullScreenButton, onClick: function () { popup.toggleFullScreen(); } }, Icon));
    };
    PopupSurvey.prototype.renderBody = function () {
        return _("div", { className: this.popup.cssBody }, this.doRender());
    };
    PopupSurvey.prototype.createSurvey = function (newProps) {
        if (!newProps)
            newProps = {};
        _super.prototype.createSurvey.call(this, newProps);
        this.popup = new external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["PopupSurveyModel"](null, this.survey);
        if (newProps.closeOnCompleteTimeout) {
            this.popup.closeOnCompleteTimeout = newProps.closeOnCompleteTimeout;
        }
        this.popup.allowClose = newProps.allowClose;
        this.popup.allowFullScreen = newProps.allowFullScreen;
        this.popup.isShowing = true;
        if (!this.popup.isExpanded && (newProps.expanded || newProps.isExpanded))
            this.popup.expand();
    };
    return PopupSurvey;
}(reactSurvey_Survey));

/**
 * Obsolete. Please use PopupSurvey
 */
var SurveyWindow = /** @class */ (function (_super) {
    react_popup_survey_extends(SurveyWindow, _super);
    function SurveyWindow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SurveyWindow;
}(react_popup_survey_PopupSurvey));


// CONCATENATED MODULE: ./packages/survey-react-ui/src/imagepicker.tsx
var imagepicker_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var imagepicker_SurveyQuestionImagePicker = /** @class */ (function (_super) {
    imagepicker_extends(SurveyQuestionImagePicker, _super);
    function SurveyQuestionImagePicker(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionImagePicker.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionImagePicker.prototype.renderElement = function () {
        var cssClasses = this.question.cssClasses;
        return (_("fieldset", { className: this.question.getSelectBaseRootCss(), style: this.question.getContainerStyle() },
            _("legend", { className: "sv-hidden" }, this.question.locTitle.renderedHtml),
            this.question.hasColumns ? this.getColumns(cssClasses) : this.getItems(cssClasses)));
    };
    SurveyQuestionImagePicker.prototype.getColumns = function (cssClasses) {
        var _this = this;
        return this.question.columns.map(function (column, ci) {
            var items = column.map(function (item, ii) {
                return _this.renderItem("item" + ii, item, cssClasses);
            });
            return (_("div", { key: "column" + ci + _this.question.getItemsColumnKey(column), className: _this.question.getColumnClass(), role: "presentation" }, items));
        });
    };
    SurveyQuestionImagePicker.prototype.getItems = function (cssClasses) {
        var items = [];
        for (var i = 0; i < this.question.visibleChoices.length; i++) {
            var item = this.question.visibleChoices[i];
            var key = "item" + i;
            items.push(this.renderItem(key, item, cssClasses));
        }
        return items;
    };
    Object.defineProperty(SurveyQuestionImagePicker.prototype, "textStyle", {
        get: function () {
            return { marginLeft: "3px", display: "inline", position: "static" };
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionImagePicker.prototype.renderItem = function (key, item, cssClasses) {
        var renderedItem = _(imagepicker_SurveyQuestionImagePickerItem, { key: key, question: this.question, item: item, cssClasses: cssClasses });
        var survey = this.question.survey;
        var wrappedItem = null;
        if (!!survey) {
            wrappedItem = reactsurveymodel_ReactSurveyElementsWrapper.wrapItemValue(survey, renderedItem, this.question, item);
        }
        return wrappedItem !== null && wrappedItem !== void 0 ? wrappedItem : renderedItem;
    };
    return SurveyQuestionImagePicker;
}(reactquestion_element_SurveyQuestionElementBase));

var imagepicker_SurveyQuestionImagePickerItem = /** @class */ (function (_super) {
    imagepicker_extends(SurveyQuestionImagePickerItem, _super);
    function SurveyQuestionImagePickerItem(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnChange = _this.handleOnChange.bind(_this);
        return _this;
    }
    SurveyQuestionImagePickerItem.prototype.getStateElement = function () {
        return this.item;
    };
    SurveyQuestionImagePickerItem.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.reactOnStrChanged();
    };
    SurveyQuestionImagePickerItem.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.item.locImageLink.onChanged = function () { };
    };
    SurveyQuestionImagePickerItem.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        this.reactOnStrChanged();
    };
    SurveyQuestionImagePickerItem.prototype.reactOnStrChanged = function () {
        var _this = this;
        this.item.locImageLink.onChanged = function () {
            _this.setState({ locImageLinkchanged: !!_this.state && _this.state.locImageLink ? _this.state.locImageLink + 1 : 1 });
        };
    };
    Object.defineProperty(SurveyQuestionImagePickerItem.prototype, "cssClasses", {
        get: function () {
            return this.props.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionImagePickerItem.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionImagePickerItem.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionImagePickerItem.prototype.handleOnChange = function (event) {
        if (this.question.isReadOnlyAttr)
            return;
        if (this.question.multiSelect) {
            if (event.target.checked) {
                this.question.value = this.question.value.concat(event.target.value);
            }
            else {
                var currValue = this.question.value;
                currValue.splice(this.question.value.indexOf(event.target.value), 1);
                this.question.value = currValue;
            }
        }
        else {
            this.question.value = event.target.value;
        }
        this.setState({ value: this.question.value });
    };
    SurveyQuestionImagePickerItem.prototype.renderElement = function () {
        var _this = this;
        var item = this.item;
        var question = this.question;
        var cssClasses = this.cssClasses;
        var isChecked = question.isItemSelected(item);
        var itemClass = question.getItemClass(item);
        var text = null;
        if (question.showLabel) {
            text = (_("span", { className: question.cssClasses.itemText }, item.text ? reactquestion_element_SurveyElementBase.renderLocString(item.locText) : item.value));
        }
        var style = { objectFit: this.question.imageFit };
        var control = null;
        if (item.locImageLink.renderedHtml && this.question.contentMode === "image") {
            control = (_("img", { className: cssClasses.image, src: item.locImageLink.renderedHtml, width: this.question.renderedImageWidth, height: this.question.renderedImageHeight, alt: item.locText.renderedHtml, style: style, onLoad: function (event) { _this.question["onContentLoaded"](item, event.nativeEvent); }, onError: function (event) { item.onErrorHandler(item, event.nativeEvent); } }));
        }
        if (item.locImageLink.renderedHtml && this.question.contentMode === "video") {
            control = (_("video", { controls: true, className: cssClasses.image, src: item.locImageLink.renderedHtml, width: this.question.renderedImageWidth, height: this.question.renderedImageHeight, style: style, onLoadedMetadata: function (event) { _this.question["onContentLoaded"](item, event.nativeEvent); }, onError: function (event) { item.onErrorHandler(item, event.nativeEvent); } }));
        }
        if (!item.locImageLink.renderedHtml || item.contentNotLoaded) {
            var style_1 = {
                width: this.question.renderedImageWidth,
                height: this.question.renderedImageHeight,
                objectFit: this.question.imageFit
            };
            control = (_("div", { className: cssClasses.itemNoImage, style: style_1 }, cssClasses.itemNoImageSvgIcon ?
                _(svg_icon_SvgIcon, { className: cssClasses.itemNoImageSvgIcon, iconName: this.question.cssClasses.itemNoImageSvgIconId, size: 48 }) :
                null));
        }
        var renderedItem = (_("div", { className: itemClass },
            _("label", { className: cssClasses.label },
                _("input", { className: cssClasses.itemControl, id: this.question.getItemId(item), type: this.question.inputType, name: this.question.questionName, checked: isChecked, value: item.value, disabled: !this.question.getItemEnabled(item), readOnly: this.question.isReadOnlyAttr, onChange: this.handleOnChange, "aria-required": this.question.ariaRequired, "aria-label": item.locText.renderedHtml, "aria-invalid": this.question.ariaInvalid, "aria-errormessage": this.question.ariaErrormessage }),
                _("div", { className: this.question.cssClasses.itemDecorator },
                    _("div", { className: this.question.cssClasses.imageContainer },
                        !!this.question.cssClasses.checkedItemDecorator ?
                            _("span", { className: this.question.cssClasses.checkedItemDecorator, "aria-hidden": "true" }, !!this.question.cssClasses.checkedItemSvgIconId ? _(svg_icon_SvgIcon, { size: "auto", className: this.question.cssClasses.checkedItemSvgIcon, iconName: this.question.cssClasses.checkedItemSvgIconId }) : null) : null,
                        control),
                    text))));
        return renderedItem;
    };
    return SurveyQuestionImagePickerItem;
}(ReactSurveyElement));

ReactQuestionFactory.Instance.registerQuestion("imagepicker", function (props) {
    return _(imagepicker_SurveyQuestionImagePicker, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/image.tsx
var image_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var image_SurveyQuestionImage = /** @class */ (function (_super) {
    image_extends(SurveyQuestionImage, _super);
    function SurveyQuestionImage(props) {
        return _super.call(this, props) || this;
    }
    SurveyQuestionImage.prototype.componentDidMount = function () {
        var _this = this;
        _super.prototype.componentDidMount.call(this);
        this.question.locImageLink.onChanged = function () {
            _this.forceUpdate();
        };
    };
    SurveyQuestionImage.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.question.locImageLink.onChanged = function () { };
    };
    Object.defineProperty(SurveyQuestionImage.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionImage.prototype.renderElement = function () {
        var _this = this;
        var cssClasses = this.question.getImageCss();
        var style = { objectFit: this.question.imageFit, width: this.question.renderedStyleWidth, height: this.question.renderedStyleHeight };
        if (!this.question.imageLink || this.question.contentNotLoaded) {
            style["display"] = "none";
        }
        var control = null;
        if (this.question.renderedMode === "image") {
            control = (_("img", { className: cssClasses, src: this.question.locImageLink.renderedHtml || null, alt: this.question.altText || this.question.title, width: this.question.renderedWidth, height: this.question.renderedHeight, 
                //alt={item.text || item.value}
                style: style, onLoad: function (event) { _this.question.onLoadHandler(); }, onError: function (event) { _this.question.onErrorHandler(); } }));
        }
        if (this.question.renderedMode === "video") {
            control = (_("video", { controls: true, className: cssClasses, src: this.question.locImageLink.renderedHtml, width: this.question.renderedWidth, height: this.question.renderedHeight, style: style, onLoadedMetadata: function (event) { _this.question.onLoadHandler(); }, onError: function (event) { _this.question.onErrorHandler(); } }));
        }
        if (this.question.renderedMode === "youtube") {
            control = (_("iframe", { className: cssClasses, src: this.question.locImageLink.renderedHtml, width: this.question.renderedWidth, height: this.question.renderedHeight, style: style }));
        }
        var noImage = null;
        if (!this.question.imageLink || this.question.contentNotLoaded) {
            noImage = (_("div", { className: this.question.cssClasses.noImage },
                _(svg_icon_SvgIcon, { iconName: this.question.cssClasses.noImageSvgIconId, size: 48 })));
        }
        return _("div", { className: this.question.cssClasses.root },
            control,
            noImage);
    };
    return SurveyQuestionImage;
}(reactquestion_element_SurveyQuestionElementBase));

ReactQuestionFactory.Instance.registerQuestion("image", function (props) {
    return _(image_SurveyQuestionImage, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/signaturepad.tsx
var signaturepad_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var signaturepad_SurveyQuestionSignaturePad = /** @class */ (function (_super) {
    signaturepad_extends(SurveyQuestionSignaturePad, _super);
    function SurveyQuestionSignaturePad(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { value: _this.question.value };
        return _this;
    }
    Object.defineProperty(SurveyQuestionSignaturePad.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionSignaturePad.prototype.renderElement = function () {
        var _this = this;
        var cssClasses = this.question.cssClasses;
        var loadingIndicator = this.question.showLoadingIndicator ? this.renderLoadingIndicator() : null;
        var clearButton = this.renderCleanButton();
        return (_("div", { className: cssClasses.root, ref: function (root) { return (_this.setControl(root)); }, style: { width: this.question.renderedCanvasWidth } },
            _("div", { className: cssClasses.placeholder, style: { display: this.question.needShowPlaceholder() ? "" : "none" } }, this.renderLocString(this.question.locRenderedPlaceholder)),
            _("div", null,
                this.renderBackgroundImage(),
                _("canvas", { tabIndex: -1, className: this.question.cssClasses.canvas, onBlur: function (event) { _this.question.onBlur(event); } })),
            clearButton,
            loadingIndicator));
    };
    SurveyQuestionSignaturePad.prototype.renderBackgroundImage = function () {
        if (!this.question.backgroundImage)
            return null;
        return _("img", { className: this.question.cssClasses.backgroundImage, src: this.question.backgroundImage, style: { width: this.question.renderedCanvasWidth } });
    };
    SurveyQuestionSignaturePad.prototype.renderLoadingIndicator = function () {
        return _("div", { className: this.question.cssClasses.loadingIndicator },
            _(loading_indicator_LoadingIndicatorComponent, null));
    };
    SurveyQuestionSignaturePad.prototype.renderCleanButton = function () {
        var _this = this;
        if (!this.question.canShowClearButton)
            return null;
        var cssClasses = this.question.cssClasses;
        return _("div", { className: cssClasses.controls },
            _("button", { type: "button", className: cssClasses.clearButton, title: this.question.clearButtonCaption, onClick: function () { return _this.question.clearValue(true); } }, this.question.cssClasses.clearButtonIconId ? _(svg_icon_SvgIcon, { iconName: this.question.cssClasses.clearButtonIconId, size: "auto" }) : _("span", null, "\u2716")));
    };
    return SurveyQuestionSignaturePad;
}(reactquestion_element_SurveyQuestionElementBase));

ReactQuestionFactory.Instance.registerQuestion("signaturepad", function (props) {
    return _(signaturepad_SurveyQuestionSignaturePad, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/reactquestion_buttongroup.tsx
var reactquestion_buttongroup_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var reactquestion_buttongroup_SurveyQuestionButtonGroup = /** @class */ (function (_super) {
    reactquestion_buttongroup_extends(SurveyQuestionButtonGroup, _super);
    function SurveyQuestionButtonGroup(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionButtonGroup.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionButtonGroup.prototype.getStateElement = function () {
        return this.question;
    };
    SurveyQuestionButtonGroup.prototype.renderElement = function () {
        var items = this.renderItems();
        return Rn.createElement("div", { className: this.question.cssClasses.root }, items);
    };
    SurveyQuestionButtonGroup.prototype.renderItems = function () {
        var _this = this;
        return this.question.visibleChoices.map(function (item, index) {
            return (Rn.createElement(reactquestion_buttongroup_SurveyButtonGroupItem, { key: _this.question.inputId + "_" + index, item: item, question: _this.question, index: index }));
        });
    };
    return SurveyQuestionButtonGroup;
}(reactquestion_element_SurveyQuestionElementBase));

var reactquestion_buttongroup_SurveyButtonGroupItem = /** @class */ (function (_super) {
    reactquestion_buttongroup_extends(SurveyButtonGroupItem, _super);
    function SurveyButtonGroupItem(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyButtonGroupItem.prototype, "index", {
        get: function () {
            return this.props.index;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyButtonGroupItem.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyButtonGroupItem.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    SurveyButtonGroupItem.prototype.getStateElement = function () {
        return this.item;
    };
    SurveyButtonGroupItem.prototype.renderElement = function () {
        this.model = new external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["ButtonGroupItemModel"](this.question, this.item, this.index);
        var icon = this.renderIcon();
        var input = this.renderInput();
        var caption = this.renderCaption();
        return (Rn.createElement("label", { role: "radio", className: this.model.css.label, title: this.model.caption.renderedHtml },
            input,
            Rn.createElement("div", { className: this.model.css.decorator },
                icon,
                caption)));
    };
    SurveyButtonGroupItem.prototype.renderIcon = function () {
        if (!!this.model.iconName) {
            return (Rn.createElement(svg_icon_SvgIcon, { className: this.model.css.icon, iconName: this.model.iconName, size: this.model.iconSize || 24 }));
        }
        return null;
    };
    SurveyButtonGroupItem.prototype.renderInput = function () {
        var _this = this;
        return (Rn.createElement("input", { className: this.model.css.control, id: this.model.id, type: "radio", name: this.model.name, checked: this.model.selected, value: this.model.value, disabled: this.model.readOnly, onChange: function () {
                _this.model.onChange();
            }, "aria-required": this.model.isRequired, "aria-label": this.model.caption.renderedHtml, "aria-invalid": this.model.hasErrors, "aria-errormessage": this.model.describedBy, role: "radio" }));
    };
    SurveyButtonGroupItem.prototype.renderCaption = function () {
        if (!this.model.showCaption)
            return null;
        var caption = this.renderLocString(this.model.caption);
        return (Rn.createElement("span", { className: this.model.css.caption, title: this.model.caption.renderedHtml }, caption));
    };
    return SurveyButtonGroupItem;
}(reactquestion_element_SurveyElementBase));

// ReactQuestionFactory.Instance.registerQuestion("buttongroup", props => {
//   return React.createElement(SurveyQuestionButtonGroup, props);
// });

// CONCATENATED MODULE: ./packages/survey-react-ui/src/reactquestion_custom.tsx
var reactquestion_custom_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var reactquestion_custom_SurveyQuestionCustom = /** @class */ (function (_super) {
    reactquestion_custom_extends(SurveyQuestionCustom, _super);
    function SurveyQuestionCustom(props) {
        return _super.call(this, props) || this;
    }
    SurveyQuestionCustom.prototype.getStateElements = function () {
        var res = _super.prototype.getStateElements.call(this);
        if (!!this.question.contentQuestion) {
            res.push(this.question.contentQuestion);
        }
        return res;
    };
    SurveyQuestionCustom.prototype.renderElement = function () {
        return reactquestion_SurveyQuestion.renderQuestionBody(this.creator, this.question.contentQuestion);
    };
    return SurveyQuestionCustom;
}(reactquestion_element_SurveyQuestionUncontrolledElement));

var reactquestion_custom_SurveyQuestionComposite = /** @class */ (function (_super) {
    reactquestion_custom_extends(SurveyQuestionComposite, _super);
    function SurveyQuestionComposite(props) {
        return _super.call(this, props) || this;
    }
    SurveyQuestionComposite.prototype.canRender = function () {
        return !!this.question.contentPanel;
    };
    SurveyQuestionComposite.prototype.renderElement = function () {
        return (_(panel_SurveyPanel, { element: this.question.contentPanel, creator: this.creator, survey: this.question.survey }));
    };
    return SurveyQuestionComposite;
}(reactquestion_element_SurveyQuestionUncontrolledElement));

ReactQuestionFactory.Instance.registerQuestion("custom", function (props) {
    return _(reactquestion_custom_SurveyQuestionCustom, props);
});
ReactQuestionFactory.Instance.registerQuestion("composite", function (props) {
    return _(reactquestion_custom_SurveyQuestionComposite, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/list/list-item-content.tsx
var list_item_content_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var list_item_content_ListItemContent = /** @class */ (function (_super) {
    list_item_content_extends(ListItemContent, _super);
    function ListItemContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ListItemContent.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItemContent.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    ListItemContent.prototype.getStateElement = function () {
        return this.item;
    };
    ListItemContent.prototype.render = function () {
        if (!this.item)
            return null;
        var text = this.renderLocString(this.item.locTitle, undefined, "locString");
        var icon = (this.item.iconName) ?
            Rn.createElement(svg_icon_SvgIcon, { className: this.model.cssClasses.itemIcon, iconName: this.item.iconName, size: this.item.iconSize, "aria-label": this.item.title }) : null;
        var markerIcon = (this.item.markerIconName) ?
            Rn.createElement(svg_icon_SvgIcon, { className: this.item.cssClasses.itemMarkerIcon, iconName: this.item.markerIconName, size: "auto" }) : null;
        return Rn.createElement(Rn.Fragment, null,
            icon,
            text,
            markerIcon);
    };
    return ListItemContent;
}(reactquestion_element_SurveyElementBase));

ReactElementFactory.Instance.registerElement("sv-list-item-content", function (props) {
    return Rn.createElement(list_item_content_ListItemContent, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/list/list-item-group.tsx
var list_item_group_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var list_item_group_ListItemGroup = /** @class */ (function (_super) {
    list_item_group_extends(ListItemGroup, _super);
    function ListItemGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ListItemGroup.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItemGroup.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    ListItemGroup.prototype.getStateElement = function () {
        return this.item;
    };
    ListItemGroup.prototype.render = function () {
        var _a;
        if (!this.item)
            return null;
        var newElement = ReactElementFactory.Instance.createElement("sv-list-item-content", { item: this.item, key: "content" + this.item.id, model: this.model });
        return Rn.createElement(Rn.Fragment, null,
            newElement,
            Rn.createElement(popup_Popup, { model: (_a = this.item) === null || _a === void 0 ? void 0 : _a.popupModel }));
    };
    return ListItemGroup;
}(reactquestion_element_SurveyElementBase));

ReactElementFactory.Instance.registerElement("sv-list-item-group", function (props) {
    return Rn.createElement(list_item_group_ListItemGroup, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/survey-header/logo-image.tsx
var logo_image_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var logo_image_LogoImage = /** @class */ (function (_super) {
    logo_image_extends(LogoImage, _super);
    function LogoImage(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(LogoImage.prototype, "survey", {
        get: function () {
            return this.props.data;
        },
        enumerable: false,
        configurable: true
    });
    LogoImage.prototype.render = function () {
        var content = [];
        content.push(Rn.createElement("div", { key: "logo-image", className: this.survey.logoClassNames },
            Rn.createElement("img", { className: this.survey.css.logoImage, src: this.survey.locLogo.renderedHtml || null, alt: this.survey.locTitle.renderedHtml, width: this.survey.renderedLogoWidth, height: this.survey.renderedLogoHeight, style: { objectFit: this.survey.logoFit, width: this.survey.renderedStyleLogoWidth, height: this.survey.renderedStyleLogoHeight } })));
        return Rn.createElement(Rn.Fragment, null, content);
    };
    return LogoImage;
}(Rn.Component));

ReactElementFactory.Instance.registerElement("sv-logo-image", function (props) {
    return Rn.createElement(logo_image_LogoImage, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/matrix-actions/remove-button/remove-button.tsx
var remove_button_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var remove_button_SurveyQuestionMatrixDynamicRemoveButton = /** @class */ (function (_super) {
    remove_button_extends(SurveyQuestionMatrixDynamicRemoveButton, _super);
    function SurveyQuestionMatrixDynamicRemoveButton(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnRowRemoveClick = _this.handleOnRowRemoveClick.bind(_this);
        return _this;
    }
    Object.defineProperty(SurveyQuestionMatrixDynamicRemoveButton.prototype, "question", {
        get: function () {
            return this.props.item.data.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionMatrixDynamicRemoveButton.prototype, "row", {
        get: function () {
            return this.props.item.data.row;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionMatrixDynamicRemoveButton.prototype.handleOnRowRemoveClick = function (event) {
        this.question.removeRowUI(this.row);
    };
    SurveyQuestionMatrixDynamicRemoveButton.prototype.renderElement = function () {
        var removeRowText = this.renderLocString(this.question.locRemoveRowText);
        return (Rn.createElement("button", { className: this.question.getRemoveRowButtonCss(), type: "button", onClick: this.handleOnRowRemoveClick, disabled: this.question.isInputReadOnly },
            removeRowText,
            Rn.createElement("span", { className: this.question.cssClasses.iconRemove })));
    };
    return SurveyQuestionMatrixDynamicRemoveButton;
}(ReactSurveyElement));

ReactElementFactory.Instance.registerElement("sv-matrix-remove-button", function (props) {
    return Rn.createElement(remove_button_SurveyQuestionMatrixDynamicRemoveButton, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/matrix-actions/detail-button/detail-button.tsx
var detail_button_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var detail_button_SurveyQuestionMatrixDetailButton = /** @class */ (function (_super) {
    detail_button_extends(SurveyQuestionMatrixDetailButton, _super);
    function SurveyQuestionMatrixDetailButton(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnShowHideClick = _this.handleOnShowHideClick.bind(_this);
        return _this;
    }
    SurveyQuestionMatrixDetailButton.prototype.getStateElement = function () {
        return this.props.item;
    };
    Object.defineProperty(SurveyQuestionMatrixDetailButton.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionMatrixDetailButton.prototype, "question", {
        get: function () {
            return this.props.item.data.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionMatrixDetailButton.prototype, "row", {
        get: function () {
            return this.props.item.data.row;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionMatrixDetailButton.prototype.handleOnShowHideClick = function (event) {
        this.row.showHideDetailPanelClick();
    };
    SurveyQuestionMatrixDetailButton.prototype.renderElement = function () {
        var isExpanded = this.row.isDetailPanelShowing;
        var ariaExpanded = isExpanded;
        var ariaControls = isExpanded ? this.row.detailPanelId : undefined;
        return (Rn.createElement("button", { type: "button", onClick: this.handleOnShowHideClick, className: this.question.getDetailPanelButtonCss(this.row), "aria-expanded": ariaExpanded, "aria-controls": ariaControls },
            Rn.createElement(svg_icon_SvgIcon, { className: this.question.getDetailPanelIconCss(this.row), iconName: this.question.getDetailPanelIconId(this.row), size: "auto" })));
    };
    return SurveyQuestionMatrixDetailButton;
}(ReactSurveyElement));

ReactElementFactory.Instance.registerElement("sv-matrix-detail-button", function (props) {
    return Rn.createElement(detail_button_SurveyQuestionMatrixDetailButton, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/paneldynamic-actions/paneldynamic-remove-btn.tsx
var paneldynamic_remove_btn_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var paneldynamic_remove_btn_SurveyQuestionPanelDynamicRemoveButton = /** @class */ (function (_super) {
    paneldynamic_remove_btn_extends(SurveyQuestionPanelDynamicRemoveButton, _super);
    function SurveyQuestionPanelDynamicRemoveButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (event) {
            _this.question.removePanelUI(_this.data.panel);
        };
        return _this;
    }
    SurveyQuestionPanelDynamicRemoveButton.prototype.renderElement = function () {
        var btnText = this.renderLocString(this.question.locPanelRemoveText);
        var id = this.question.getPanelRemoveButtonId(this.data.panel);
        return (Rn.createElement("button", { id: id, className: this.question.getPanelRemoveButtonCss(), onClick: this.handleClick, type: "button" },
            Rn.createElement("span", { className: this.question.cssClasses.buttonRemoveText }, btnText),
            Rn.createElement("span", { className: this.question.cssClasses.iconRemove })));
    };
    return SurveyQuestionPanelDynamicRemoveButton;
}(SurveyQuestionPanelDynamicAction));

ReactElementFactory.Instance.registerElement("sv-paneldynamic-remove-btn", function (props) {
    return Rn.createElement(paneldynamic_remove_btn_SurveyQuestionPanelDynamicRemoveButton, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/survey-actions/survey-nav-button.tsx
var survey_nav_button_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var survey_nav_button_SurveyNavigationButton = /** @class */ (function (_super) {
    survey_nav_button_extends(SurveyNavigationButton, _super);
    function SurveyNavigationButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyNavigationButton.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    SurveyNavigationButton.prototype.canRender = function () {
        return this.item.isVisible;
    };
    SurveyNavigationButton.prototype.renderElement = function () {
        return (Rn.createElement("input", { className: this.item.innerCss, type: "button", disabled: this.item.disabled, onMouseDown: this.item.data && this.item.data.mouseDown, onClick: this.item.action, title: this.item.getTooltip(), value: this.item.title }));
    };
    return SurveyNavigationButton;
}(ReactSurveyElement));

ReactElementFactory.Instance.registerElement("sv-nav-btn", function (props) {
    return Rn.createElement(survey_nav_button_SurveyNavigationButton, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/string-viewer.tsx
var string_viewer_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var string_viewer_SurveyLocStringViewer = /** @class */ (function (_super) {
    string_viewer_extends(SurveyLocStringViewer, _super);
    function SurveyLocStringViewer(props) {
        var _this = _super.call(this, props) || this;
        _this.onChangedHandler = function (sender, options) {
            if (_this.isRendering)
                return;
            _this.setState({ changed: !!_this.state && _this.state.changed ? _this.state.changed + 1 : 1 });
        };
        _this.rootRef = Rn.createRef();
        return _this;
    }
    Object.defineProperty(SurveyLocStringViewer.prototype, "locStr", {
        get: function () {
            return this.props.locStr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyLocStringViewer.prototype, "style", {
        get: function () {
            return this.props.style;
        },
        enumerable: false,
        configurable: true
    });
    SurveyLocStringViewer.prototype.componentDidMount = function () {
        this.reactOnStrChanged();
    };
    SurveyLocStringViewer.prototype.componentWillUnmount = function () {
        if (!this.locStr)
            return;
        this.locStr.onStringChanged.remove(this.onChangedHandler);
    };
    SurveyLocStringViewer.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (!!prevProps.locStr) {
            prevProps.locStr.onStringChanged.remove(this.onChangedHandler);
        }
        this.reactOnStrChanged();
    };
    SurveyLocStringViewer.prototype.reactOnStrChanged = function () {
        if (!this.locStr)
            return;
        this.locStr.onStringChanged.add(this.onChangedHandler);
    };
    SurveyLocStringViewer.prototype.render = function () {
        if (!this.locStr)
            return null;
        this.isRendering = true;
        var strEl = this.renderString();
        this.isRendering = false;
        return strEl;
    };
    SurveyLocStringViewer.prototype.renderString = function () {
        var className = this.locStr.allowLineBreaks ? "sv-string-viewer sv-string-viewer--multiline" : "sv-string-viewer";
        if (this.locStr.hasHtml) {
            var htmlValue = { __html: this.locStr.renderedHtml };
            return Rn.createElement("span", { ref: this.rootRef, className: className, style: this.style, dangerouslySetInnerHTML: htmlValue });
        }
        return Rn.createElement("span", { ref: this.rootRef, className: className, style: this.style }, this.locStr.renderedHtml);
    };
    return SurveyLocStringViewer;
}(Rn.Component));

ReactElementFactory.Instance.registerElement(external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["LocalizableString"].defaultRenderer, function (props) {
    return Rn.createElement(string_viewer_SurveyLocStringViewer, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/question-error.tsx
var question_error_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var question_error_QuestionErrorComponent = /** @class */ (function (_super) {
    question_error_extends(QuestionErrorComponent, _super);
    function QuestionErrorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuestionErrorComponent.prototype.render = function () {
        return (Rn.createElement("div", null,
            Rn.createElement("span", { className: this.props.cssClasses.error.icon || undefined, "aria-hidden": "true" }),
            Rn.createElement("span", { className: this.props.cssClasses.error.item || undefined },
                Rn.createElement(string_viewer_SurveyLocStringViewer, { locStr: this.props.error.locText }))));
    };
    return QuestionErrorComponent;
}(Rn.Component));

ReactElementFactory.Instance.registerElement("sv-question-error", function (props) {
    return Rn.createElement(question_error_QuestionErrorComponent, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/skeleton.tsx
var skeleton_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var skeleton_Skeleton = /** @class */ (function (_super) {
    skeleton_extends(Skeleton, _super);
    function Skeleton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Skeleton.prototype.render = function () {
        var _a, _b;
        return (Rn.createElement("div", { className: "sv-skeleton-element", id: (_a = this.props.element) === null || _a === void 0 ? void 0 : _a.id, style: { height: (_b = this.props.element) === null || _b === void 0 ? void 0 : _b.skeletonHeight } }));
    };
    return Skeleton;
}(Rn.Component));

ReactElementFactory.Instance.registerElement("sv-skeleton", function (props) {
    return Rn.createElement(skeleton_Skeleton, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/components/header.tsx
var header_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var header_HeaderMobile = /** @class */ (function (_super) {
    header_extends(HeaderMobile, _super);
    function HeaderMobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HeaderMobile.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    HeaderMobile.prototype.renderLogoImage = function () {
        var componentName = this.model.survey.getElementWrapperComponentName(this.model.survey, "logo-image");
        var componentData = this.model.survey.getElementWrapperComponentData(this.model.survey, "logo-image");
        return ReactElementFactory.Instance.createElement(componentName, {
            data: componentData,
        });
    };
    HeaderMobile.prototype.render = function () {
        return (Rn.createElement("div", { className: "sv-header--mobile" },
            this.model.survey.hasLogo ? (Rn.createElement("div", { className: "sv-header__logo" }, this.renderLogoImage())) : null,
            this.model.survey.hasTitle ? (Rn.createElement("div", { className: "sv-header__title", style: { maxWidth: this.model.textAreaWidth } },
                Rn.createElement(title_element_TitleElement, { element: this.model.survey }))) : null,
            this.model.survey.renderedHasDescription ? (Rn.createElement("div", { className: "sv-header__description", style: { maxWidth: this.model.textAreaWidth } },
                Rn.createElement("div", { className: this.model.survey.css.description }, reactquestion_element_SurveyElementBase.renderLocString(this.model.survey.locDescription)))) : null));
    };
    return HeaderMobile;
}(Rn.Component));

var header_HeaderCell = /** @class */ (function (_super) {
    header_extends(HeaderCell, _super);
    function HeaderCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HeaderCell.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    HeaderCell.prototype.renderLogoImage = function () {
        var componentName = this.model.survey.getElementWrapperComponentName(this.model.survey, "logo-image");
        var componentData = this.model.survey.getElementWrapperComponentData(this.model.survey, "logo-image");
        return ReactElementFactory.Instance.createElement(componentName, {
            data: componentData,
        });
    };
    HeaderCell.prototype.render = function () {
        return (Rn.createElement("div", { className: this.model.css, style: this.model.style },
            Rn.createElement("div", { className: "sv-header__cell-content", style: this.model.contentStyle },
                this.model.showLogo ? (Rn.createElement("div", { className: "sv-header__logo" }, this.renderLogoImage())) : null,
                this.model.showTitle ? (Rn.createElement("div", { className: "sv-header__title", style: { maxWidth: this.model.textAreaWidth } },
                    Rn.createElement(title_element_TitleElement, { element: this.model.survey }))) : null,
                this.model.showDescription ? (Rn.createElement("div", { className: "sv-header__description", style: { maxWidth: this.model.textAreaWidth } },
                    Rn.createElement("div", { className: this.model.survey.css.description }, reactquestion_element_SurveyElementBase.renderLocString(this.model.survey.locDescription)))) : null)));
    };
    return HeaderCell;
}(Rn.Component));

var header_Header = /** @class */ (function (_super) {
    header_extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Header.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    Header.prototype.getStateElement = function () {
        return this.model;
    };
    Header.prototype.renderElement = function () {
        this.model.survey = this.props.survey;
        if (!(this.props.survey.headerView === "advanced")) {
            return null;
        }
        var headerContent = null;
        if (this.props.survey.isMobile) {
            headerContent = Rn.createElement(header_HeaderMobile, { model: this.model });
        }
        else {
            headerContent = (Rn.createElement("div", { className: this.model.contentClasses, style: { maxWidth: this.model.maxWidth } }, this.model.cells.map(function (cell, index) { return Rn.createElement(header_HeaderCell, { key: index, model: cell }); })));
        }
        return (Rn.createElement("div", { className: this.model.headerClasses, style: { height: this.model.renderedHeight } },
            this.model.backgroundImage ? Rn.createElement("div", { style: this.model.backgroundImageStyle, className: this.model.backgroundImageClasses }) : null,
            headerContent));
    };
    return Header;
}(reactquestion_element_SurveyElementBase));

ReactElementFactory.Instance.registerElement("sv-header", function (props) {
    return Rn.createElement(header_Header, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/src/string-editor.tsx
var string_editor_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var string_editor_SurveyLocStringEditor = /** @class */ (function (_super) {
    string_editor_extends(SurveyLocStringEditor, _super);
    function SurveyLocStringEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.onInput = function (event) {
            _this.locStr.text = event.target.innerText;
        };
        _this.onClick = function (event) {
            event.preventDefault();
            event.stopPropagation();
        };
        _this.state = { changed: 0 };
        return _this;
    }
    Object.defineProperty(SurveyLocStringEditor.prototype, "locStr", {
        get: function () {
            return this.props.locStr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyLocStringEditor.prototype, "style", {
        get: function () {
            return this.props.style;
        },
        enumerable: false,
        configurable: true
    });
    SurveyLocStringEditor.prototype.componentDidMount = function () {
        if (!this.locStr)
            return;
        var self = this;
        this.locStr.onChanged = function () {
            self.setState({ changed: self.state.changed + 1 });
        };
    };
    SurveyLocStringEditor.prototype.componentWillUnmount = function () {
        if (!this.locStr)
            return;
        this.locStr.onChanged = function () { };
    };
    SurveyLocStringEditor.prototype.render = function () {
        if (!this.locStr) {
            return null;
        }
        if (this.locStr.hasHtml) {
            var htmlValue = { __html: this.locStr.renderedHtml };
            return (Rn.createElement("span", { className: "sv-string-editor", contentEditable: "true", suppressContentEditableWarning: true, style: this.style, dangerouslySetInnerHTML: htmlValue, onBlur: this.onInput, onClick: this.onClick }));
        }
        return (Rn.createElement("span", { className: "sv-string-editor", contentEditable: "true", suppressContentEditableWarning: true, style: this.style, onBlur: this.onInput, onClick: this.onClick }, this.locStr.renderedHtml));
    };
    return SurveyLocStringEditor;
}(Rn.Component));

ReactElementFactory.Instance.registerElement(external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["LocalizableString"].editableRenderer, function (props) {
    return Rn.createElement(string_editor_SurveyLocStringEditor, props);
});

// CONCATENATED MODULE: ./packages/survey-react-ui/entries/react-ui-model.ts
// react





















































































//Uncomment to include the "date" question type.
//export {default as SurveyQuestionDate} from "../plugins/react/reactquestiondate";

// CONCATENATED MODULE: ./src/entries/core-export.ts




// CONCATENATED MODULE: ./src/entries/js-ui.ts
var js_ui_assign = (undefined && undefined.__assign) || function () {
    js_ui_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return js_ui_assign.apply(this, arguments);
};



// eslint-disable-next-line surveyjs/no-imports-from-entries


function renderSurvey(model, element, props) {
    if (props === void 0) { props = {}; }
    var survey = _(reactSurvey_Survey, js_ui_assign({ model: model }, props));
    nn(survey, element);
}
function renderPopupSurvey(model, element, props) {
    if (props === void 0) { props = {}; }
    var survey = _(react_popup_survey_PopupSurvey, js_ui_assign({ model: model }, props));
    nn(survey, element);
}
function doPopupSurvey(props) {
    return this.each(function () {
        renderPopupSurvey(props.model, this, props);
    });
}
var gcontext = globalThis;
if (typeof globalThis === "undefined")
    gcontext = window;
var jQueryInst = gcontext["jQuery"] || gcontext["$"];
if (typeof jQueryInst !== "undefined") {
    initJquery(jQueryInst);
}
else {
    try {
        jQueryInst = __webpack_require__(/*! jquery */ "jquery");
        initJquery(jQueryInst);
    }
    catch (ex) {
    }
}
function initJquery(instance) {
    instance["fn"].extend({
        Survey: function (props) {
            return this.each(function () {
                renderSurvey(props.model, this, props);
            });
        },
        PopupSurvey: doPopupSurvey,
        SurveyWindow: doPopupSurvey
    });
}
external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["SurveyModel"].platform = "js-ui";
external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["SurveyModel"].prototype["render"] = function (element) {
    if (element === void 0) { element = null; }
    if (this.renderCallback) {
        this.renderCallback();
    }
    else {
        renderSurvey(this, element);
    }
};
var preact = compat_module_namespaceObject;




Object(external_root_Survey_commonjs2_survey_core_commonjs_survey_core_amd_survey_core_["checkLibraryVersion"])("" + "1.12.26", "survey-js-ui");


/***/ }),

/***/ "jquery":
/*!******************************************************************************************!*\
  !*** external {"root":"jQuery","commonjs2":"jquery","commonjs":"jquery","amd":"jquery"} ***!
  \******************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE_jquery__ === 'undefined') {var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ }),

/***/ "survey-core":
/*!*********************************************************************************************************!*\
  !*** external {"root":"Survey","commonjs2":"survey-core","commonjs":"survey-core","amd":"survey-core"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_survey_core__;

/***/ })

/******/ });
});
//# sourceMappingURL=survey-js-ui.js.map