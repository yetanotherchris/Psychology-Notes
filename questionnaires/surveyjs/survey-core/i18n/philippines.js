/*!
 * surveyjs - Survey JavaScript library v1.12.26
 * Copyright (c) 2015-2025 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("philippines", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["philippines"] = factory(require("survey-core"));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/survey-core/src/localization/philippines.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/survey-core/src/localization/philippines.ts":
/*!**************************************************************!*\
  !*** ./packages/survey-core/src/localization/philippines.ts ***!
  \**************************************************************/
/*! exports provided: philippinesStrings */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "philippinesStrings", function() { return philippinesStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var philippinesStrings = {
    pagePrevText: "Nakaraang",
    pageNextText: "Susunod",
    completeText: "Kumpleto",
    previewText: "Silipin",
    editText: "I-edit",
    startSurveyText: "Magsimula",
    otherItemText: "Iba pa (ilarawan)",
    noneItemText: "wala",
    refuseItemText: "Tumangging sumagot",
    dontKnowItemText: "hindi ko alam",
    selectAllItemText: "Piliin lahat",
    deselectAllItemText: "Alisin ang pagpili ng lahat",
    progressText: "Pahina {0} ng {1}",
    indexText: "{0} ng {1}",
    panelDynamicProgressText: "{0} ng {1}",
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    questionsProgressText: "Sinagot ang {0}/{1} mga tanong",
    emptySurvey: "Ang survey ay hindi naglalaman ng anumang nakikitang elemento.",
    completingSurvey: "Salamat sa pagkumpleto ng survey",
    completingSurveyBefore: "Nakumpleto mo na ang survey na ito.",
    loadingSurvey: "Nilo-load ang Survey...",
    placeholder: "Pumili...",
    ratingOptionsCaption: "Pumili...",
    value: "halaga",
    requiredError: "Kinakailangan ang tugon.",
    requiredErrorInPanel: "Kinakailangan ang tugon: sagutin ang kahit isang tanong.",
    requiredInAllRowsError: "Kinakailangan ang tugon: sagutin ang mga tanong sa lahat ng row.",
    eachRowUniqueError: "Ang bawat hilera ay dapat may natatanging halaga.",
    numericError: "Ang halaga ay dapat na numero.",
    minError: "Ang halaga ay hindi dapat mas mababa sa {0}",
    maxError: "Ang halaga ay hindi dapat mas malaki sa {0}",
    textNoDigitsAllow: "Bawal ang mga numero.",
    textMinLength: "Mangyaring magpasok ng hindi bababa sa {0} (mga) character.",
    textMaxLength: "Mangyaring magpasok ng hindi hihigit sa {0} (mga) character.",
    textMinMaxLength: "Mangyaring magpasok ng hindi bababa sa {0} at hindi hihigit sa {1} (na) character.",
    minRowCountError: "Mangyaring punan ang hindi bababa sa {0} (na) hilera.",
    minSelectError: "Mangyaring pumili ng hindi bababa sa {0} (mga) opsyon.",
    maxSelectError: "Mangyaring pumili ng hindi hihigit sa {0} (mga) opsyon.",
    numericMinMax: "Ang '{0}' ay dapat na hindi bababa sa {1} at hindi hihigit sa {2}",
    numericMin: "Ang '{0}' ay dapat na hindi bababa sa {1}",
    numericMax: "Ang '{0}' ay dapat na hindi hihigit sa {1}",
    invalidEmail: "Mangyaring magpasok ng wastong e-mail address.",
    invalidExpression: "Ang expression na: {0} ay dapat magbalik ng 'true'.",
    urlRequestError: "Ang kahilingan ay nagbalik ng error na '{0}'. {1}",
    urlGetChoicesError: "Ang kahilingan ay nagbalik ng walang laman na data o ang 'path' property ay hindi tama",
    exceedMaxSize: "Ang laki ng file ay hindi dapat lumampas sa {0}.",
    noUploadFilesHandler: "Hindi ma-upload ang mga file. Mangyaring magdagdag ng handler para sa kaganapang 'onUploadFiles'.",
    otherRequiredError: "Kinakailangan ang tugon: maglagay ng isa pang halaga.",
    uploadingFile: "Ina-upload ang iyong file. Mangyaring maghintay ng ilang segundo at subukang muli.",
    loadingFile: "Naglo-load...",
    chooseFile: "Pumili ng (mga) file...",
    noFileChosen: "Walang napiling file",
    filePlaceholder: "I-drag at i-drop ang isang file dito o i-click ang button sa ibaba upang pumili ng file na ia-upload.",
    confirmDelete: "Sigurado ka bang gusto mong tanggalin ang talang ito?",
    keyDuplicationError: "Ang halagang ito ay dapat na natatangi.",
    addColumn: "Magdagdag ng Column",
    addRow: "Magdagdag ng hilera",
    removeRow: "Alisin",
    emptyRowsText: "Walang mga hilera.",
    addPanel: "Magdagdag ng bago",
    removePanel: "Alisin",
    showDetails: "Ipakita ang mga detalye",
    hideDetails: "Itago ang Mga Detalye",
    choices_Item: "aytem",
    matrix_column: "Kolum",
    matrix_row: "hilera",
    multipletext_itemname: "text",
    savingData: "Ang mga resulta ay sini-save sa server...",
    savingDataError: "May naganap na error at hindi namin mai-save ang mga resulta.",
    savingDataSuccess: "Matagumpay na na-save ang mga resulta!",
    savingExceedSize: "Ang iyong tugon ay lumampas sa 64KB. Mangyaring bawasan ang laki ng iyong (mga) file at subukang muli o makipag-ugnayan sa may-ari ng survey.",
    saveAgainButton: "Subukan muli",
    timerMin: "min",
    timerSec: "sec",
    timerSpentAll: "Gumastos ka ng {0} sa pahinang ito at {1} sa kabuuan.",
    timerSpentPage: "Gumastos ka ng {0} sa pahinang ito.",
    timerSpentSurvey: "Gumastos ka ng {0} sa kabuuan.",
    timerLimitAll: "Gumastos ka ng {0} ng {1} sa pahinang ito at {2} ng {3} sa kabuuan.",
    timerLimitPage: "Gumastos ka ng {0} sa {1} sa pahinang ito.",
    timerLimitSurvey: "Gumastos ka ng {0} sa {1} sa kabuuan.",
    clearCaption: "Maaliwalas",
    signaturePlaceHolder: "Pumirma dito",
    signaturePlaceHolderReadOnly: "Walang pirma",
    chooseFileCaption: "Piliin ang File",
    takePhotoCaption: "Kunan ng litrato",
    photoPlaceholder: "I-click ang button sa ibaba para kumuha ng larawan gamit ang camera.",
    fileOrPhotoPlaceholder: "I-drag at i-drop o pumili ng file na ia-upload o kumuha ng larawan gamit ang camera.",
    replaceFileCaption: "Palitan ang file",
    removeFileCaption: "Alisin ang file na ito",
    booleanCheckedLabel: "Oo",
    booleanUncheckedLabel: "Hindi",
    confirmRemoveFile: "Sigurado ka bang gusto mong alisin ang file na ito: {0}?",
    confirmRemoveAllFiles: "Sigurado ka bang gusto mong alisin ang lahat ng file?",
    questionTitlePatternText: "Pamagat ng Tanong",
    modalCancelButtonText: "Kanselahin",
    modalApplyButtonText: "Mag-apply",
    filterStringPlaceholder: "I-type para maghanap...",
    emptyMessage: "walang maipakitang datos",
    noEntriesText: "Wala pang entry.\nI-click ang button sa ibaba para magdagdag ng bagong entry.",
    noEntriesReadonlyText: "Walang entry",
    tabTitlePlaceholder: "Bagong Panel",
    more: "Higit pa",
    tagboxDoneButtonCaption: "OK",
    selectToRankEmptyRankedAreaText: "Ang lahat ng mga pagpipilian ay pinili para sa pagraranggo",
    selectToRankEmptyUnrankedAreaText: "I-drag ang mga pagpipilian dito upang i-rank ang mga ito",
    ok: "OK",
    cancel: "Kanselahin"
};
// Uncomment the lines below if you create a custom dictionary.
// Replace "en" with a custom locale code (for example, "fr" or "de"),
// Replace `englishStrings` with the name of the variable that contains the custom dictionary.
Object(survey_core__WEBPACK_IMPORTED_MODULE_0__["setupLocale"])({ localeCode: "fil", strings: philippinesStrings, nativeName: "filipino", englishName: "Filipino" });
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// tabTitlePlaceholder: "New Panel" => "Bagong Panel"// deselectAllItemText: "Deselect all" => "Alisin ang pagpili ng lahat"
// textNoDigitsAllow: "Numbers are not allowed." => "Bawal ang mga numero."


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
//# sourceMappingURL=philippines.js.map