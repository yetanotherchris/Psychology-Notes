/*!
 * surveyjs - Survey JavaScript library v1.12.26
 * Copyright (c) 2015-2025 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("burmese", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["burmese"] = factory(require("survey-core"));
	else
		root["SurveyLocales"] = factory(root["Survey"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_survey_core__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/survey-core/src/localization/burmese.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/survey-core/src/localization/burmese.ts":
/*!**********************************************************!*\
  !*** ./packages/survey-core/src/localization/burmese.ts ***!
  \**********************************************************/
/*! exports provided: burmeseStrings */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "burmeseStrings", function() { return burmeseStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var burmeseStrings = {
    pagePrevText: "နောက်သို့",
    pageNextText: "ရှေ့သို့",
    completeText: "ပြီးဆုံးပါပြီ",
    previewText: "ကြိုတင်ကြည့်ရှုရန်",
    editText: "တည်းဖြတ်ရန်",
    startSurveyText: "စတင်ရန်",
    otherItemText: "အခြား (ဖော်ပြပါ)",
    noneItemText: "ဘာမျှမရှိပါ",
    refuseItemText: "ဖြေဆိုရန်ငြင်းဆန်သည်",
    dontKnowItemText: "မသိပါ",
    selectAllItemText: "အားလုံးရွေးချယ်ပါ",
    deselectAllItemText: "အားလုံးမရွေးချယ်ပါ",
    progressText: "စာမျက်နှာ {0}/{1}",
    indexText: "{0}/{1}",
    panelDynamicProgressText: "{0}/{1}",
    panelDynamicTabTextFormat: "ပန်းနယ် {panelIndex}",
    questionsProgressText: "မေးခွန်းများ {0}/{1} ဖြေဆိုပြီးပြီ",
    emptySurvey: "ဒီစစ်တမ်းတွင် မြင်သာမေးခွန်းများမရှိပါ။",
    completingSurvey: "စစ်တမ်းကိုပြီးမြောက်စွာဖြေဆိုပေးခဲ့သည့်အတွက်ကျေးဇူးတင်ပါသည်။",
    completingSurveyBefore: "ဒီစစ်တမ်းကို မျှဝေပြီးသားဖြေဆိုထားပါသည်။",
    loadingSurvey: "စစ်တမ်းကိုလုပ်ဆောင်နေသည်...",
    placeholder: "ရွေးချယ်ပါ...",
    ratingOptionsCaption: "ရွေးချယ်ပါ...",
    value: "တန်ဖိုး",
    requiredError: "ဖြေဆိုရန်လိုအပ်ပါသည်။",
    requiredErrorInPanel: "ဖြေဆိုရန်လိုအပ်ပါသည် - အနည်းဆုံးတစ်ခုကိုဖြေဆိုပါ။",
    requiredInAllRowsError: "အတန်းအားလုံးတွင်ဖြေဆိုရန်လိုအပ်ပါသည်။",
    eachRowUniqueError: "အတန်းတိုင်းတွင်ထပ်တူဖြေဆိုမှုမရှိရပါ။",
    numericError: "တန်ဖိုးသည်ကိန်းဂဏန်းဖြစ်ရပါမည်။",
    minError: "တန်ဖိုးသည် {0} ထက်မနည်းရပါ။",
    maxError: "တန်ဖိုးသည် {0} ထက်မကျော်ရပါ။",
    textNoDigitsAllow: "ကိန်းဂဏန်းများကိုခွင့်မပြုပါ။",
    textMinLength: "အနည်းဆုံး {0} လုံးဖြည့်စွက်ပါ။",
    textMaxLength: "အများဆုံး {0} လုံးထိသာဖြည့်စွက်ပါ။",
    textMinMaxLength: "အနည်းဆုံး {0} နှင့်အများဆုံး {1} လုံးဖြည့်စွက်ပါ။",
    minRowCountError: "အနည်းဆုံး {0} အတန်းဖြည့်စွက်ပါ။",
    minSelectError: "အနည်းဆုံး {0} ရွေးချယ်ချက်များရွေးပါ။",
    maxSelectError: "အများဆုံး {0} ရွေးချယ်ချက်များသာရွေးပါ။",
    numericMinMax: "‘{0}’ သည် {1} နှင့် {2} အကြားဖြစ်ရမည်။",
    numericMin: "‘{0}’ သည် {1} ထက်မနည်းရပါ။",
    numericMax: "‘{0}’ သည် {1} ထက်မကျော်ရပါ။",
    invalidEmail: "တရားဝင်သော အီးမေးလ်လိပ်စာကိုရိုက်ထည့်ပါ။",
    invalidExpression: "အထောက်အထား {0} သည် 'true' ပြန်သင့်သည်။",
    urlRequestError: "တောင်းဆိုမှုတွင် အမှား '{0}' ဖြစ်ခဲ့သည်။ {1}",
    urlGetChoicesError: "တောင်းဆိုမှုတွင်ဒေတာမရှိပါ။ သို့မဟုတ် 'path' ပိုင်ဆိုင်မှုမှာမှားနေပါသည်။",
    exceedMaxSize: "ဖိုင်အရွယ်အစားသည် {0} ထက်မကျော်ရပါ။",
    noUploadFilesHandler: "ဖိုင်များကိုအပ်လုဒ်လုပ်၍မရနိုင်ပါ။",
    otherRequiredError: "ဖြေဆိုရန်လိုအပ်ပါသည်။ တန်ဖိုးတစ်ခုရိုက်ထည့်ပါ။",
    uploadingFile: "ဖိုင်တင်နေသည်။ မိနစ်ပိုင်းစောင့်ပြီးပြန်ကြိုးစားပါ။",
    loadingFile: "တင်နေသည်...",
    chooseFile: "ဖိုင်(များ) ရွေးချယ်ပါ...",
    noFileChosen: "ဖိုင်မရွေးရသေးပါ",
    filePlaceholder: "ဖိုင်တစ်ခုအားဤနေရာတွင်ဆွဲချပြီးအောက်တွင်ရှိသောခလုတ်ကိုနှိပ်ပါ။",
    confirmDelete: "ဤမှတ်တမ်းကိုဖျက်မည်မှာ သေချာပါသလား?",
    keyDuplicationError: "ဤတန်ဖိုးသည်ထူးခြားဖြစ်ရပါမည်။",
    addColumn: "ကော်လံထည့်ရန်",
    addRow: "တန်းထည့်ရန်",
    removeRow: "ဖယ်ရှားရန်",
    emptyRowsText: "တန်းများမရှိပါ။",
    addPanel: "အသစ်ထည့်ပါ",
    removePanel: "ဖယ်ရှားပါ",
    showDetails: "အသေးစိတ်ပြရန်",
    hideDetails: "အသေးစိတ်ဖျောက်ရန်",
    choices_Item: "အရာ",
    matrix_column: "ကော်လံ",
    matrix_row: "တန်း",
    multipletext_itemname: "စာသား",
    savingData: "ရလဒ်များကိုဆာဗာတွင်သိမ်းဆည်းနေသည်...",
    savingDataError: "အမှားတစ်ခုဖြစ်ပြီး ရလဒ်များကိုသိမ်းဆည်း၍မရနိုင်ပါ။",
    savingDataSuccess: "ရလဒ်များကိုအောင်မြင်စွာသိမ်းဆည်းပြီးပါပြီ။",
    savingExceedSize: "သင့်ဖြေဆိုမှုသည် 64KB ကျော်နေပါသည်။",
    saveAgainButton: "ထပ်ကြိုးစားရန်",
    timerMin: "မိနစ်",
    timerSec: "စက္ကန့်",
    clearCaption: "ရှင်းလင်းရန်",
    signaturePlaceHolder: "ဤနေရာတွင်လက်မှတ်ရေးပါ",
    confirmRemoveFile: "ဤဖိုင်အားဖယ်ရှားမည်မှာ သေချာပါသလား: {0}?",
    ok: "အိုကေ",
    cancel: "ပယ်ဖျက်ပါ"
};
Object(survey_core__WEBPACK_IMPORTED_MODULE_0__["setupLocale"])({ localeCode: "mm", strings: burmeseStrings, nativeName: "မြန်မာ", englishName: "Burmese" });


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
//# sourceMappingURL=burmese.js.map