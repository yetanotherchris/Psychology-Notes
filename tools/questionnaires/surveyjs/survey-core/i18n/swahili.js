/*!
 * surveyjs - Survey JavaScript library v1.12.26
 * Copyright (c) 2015-2025 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("swahili", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["swahili"] = factory(require("survey-core"));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/survey-core/src/localization/swahili.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/survey-core/src/localization/swahili.ts":
/*!**********************************************************!*\
  !*** ./packages/survey-core/src/localization/swahili.ts ***!
  \**********************************************************/
/*! exports provided: swahiliStrings */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swahiliStrings", function() { return swahiliStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var swahiliStrings = {
    pagePrevText: "Iliyotangulia",
    pageNextText: "Ifuatayo",
    completeText: "Kamili",
    previewText: "Hakiki",
    editText: "Hariri",
    startSurveyText: "Anza",
    otherItemText: "Nyingine (eleza)",
    noneItemText: "Hakuna",
    refuseItemText: "Kukataa kujibu",
    dontKnowItemText: "Sijui",
    selectAllItemText: "Chagua Zote",
    deselectAllItemText: "Delete All",
    progressText: "Ukurasa {0} wa {1}",
    indexText: "{0} ya {1}",
    panelDynamicProgressText: "Rekodi {0} ya {1}",
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    questionsProgressText: "Yaliyojibiwa {0}/{1} maswali",
    emptySurvey: "Hakuna ukurasa unaoonekana au swali katika utafiti.",
    completingSurvey: "Asanti kwa kukamilisha utafiti!",
    completingSurveyBefore: "Recodi zetu zinatuonyesha tayari umekamilisha utafiti.",
    loadingSurvey: "Tunaandaa utafiti...",
    placeholder: "Chagua...",
    ratingOptionsCaption: "Teua...",
    value: "thamani",
    requiredError: "Tafadhali jibu hili swali.",
    requiredErrorInPanel: "Tafadhali jibu swali angalau moja.",
    requiredInAllRowsError: "Tafadhali jibu maswali katika safu zote.",
    eachRowUniqueError: "Kila safu lazima iwe na thamani ya kipekee.",
    numericError: "Thamani inapaswa kuwa ya nambari.",
    minError: "Thamani haipaswi kuwa chini ya {0}",
    maxError: "Thamani haipaswi kuwa kubwa kuliko {0}",
    textNoDigitsAllow: "Hesabu haziruhusiwi.",
    textMinLength: "Tafadhali ingiza angalau{0} husika.",
    textMaxLength: "Tafadhali ingiza isiozidi {0} husika.",
    textMinMaxLength: "Tafadhali ingiza kiwango zaidi ya {0} na kisichopungua {1} husika.",
    minRowCountError: "Tafadhali jaza isiopungua {0} safu.",
    minSelectError: "Tafadhali chagua angalau {0} lahaja.",
    maxSelectError: "Tafadhali changua isiozidi {0} lahaja.",
    numericMinMax: " '{0}' inapaswa kuwa sawa au zaidi ya {1} na sawa au chini ya {2}",
    numericMin: " '{0}'inapaswa kuwa sawa au zaidi ya {1}",
    numericMax: " '{0}'inapaswa kuwa sawa au chini ya {1}",
    invalidEmail: "Tafadhali ingiza anwani halali ya barua-pepe.",
    invalidExpression: "Usemi:{0} inapaswa kurudi 'kweli'.",
    urlRequestError: "Ombi lina kosa '{0}'. {1}",
    urlGetChoicesError: "Ombi lilirudisha data tupu au the 'path' mali ya njia sio sahihi",
    exceedMaxSize: "Saizi ya faili haipaswi kuzidi {0}.",
    noUploadFilesHandler: "Faili haziwezi kupakiwa. Tafadhali ongeza kishiko kwa tukio la 'onUploadFiles'.",
    otherRequiredError: "Tafadhali ingiza thamani nyingine.",
    uploadingFile: "Faili yako inapakia.Tafadhali subiri sekunde kadhaa na ujaribu tena.",
    loadingFile: "Inapakia...",
    chooseFile: "Chagua faili...",
    noFileChosen: "Hujachagua faili",
    filePlaceholder: "Buruta na udondoshe faili hapa au bofya kitufe hapa chini na uchague faili ya kupakia.",
    confirmDelete: "Je! Unataka kufuta rekodi?",
    keyDuplicationError: "Thamani hii inapaswa kuwa ya kipekee.",
    addColumn: "Ongeza Kolamu",
    addRow: "Ongeza safu",
    removeRow: "Toa",
    emptyRowsText: "Hakuna safu.",
    addPanel: "Ongeza mpya",
    removePanel: "Toa",
    showDetails: "Onyesha Maelezo",
    hideDetails: "Ficha Maelezo",
    choices_Item: "kitu",
    matrix_column: "Kolamu",
    matrix_row: "Safu",
    multipletext_itemname: "Ujumbe",
    savingData: "Matokeo yamehifadhiwa kwa seva...",
    savingDataError: "Kosa limetokea na hatukuweza kuhifadhi matokeo.",
    savingDataSuccess: "Matokeo yamehifadhiwa!",
    savingExceedSize: "Jibu lako ni zaidi ya 64KB. Tafadhali punguza ukubwa wa faili yako na jaribu tena au wasiliana na mmiliki wa utafiti.",
    saveAgainButton: "Jaribu tena",
    timerMin: "dakika",
    timerSec: "sekunde",
    timerSpentAll: "Umetumia {0} kwenye ukurasa huu na {1} kwa jumla.",
    timerSpentPage: "Umetumia {0} kwenye ukurasa huu.",
    timerSpentSurvey: "Umetumia {0} kwa jumla.",
    timerLimitAll: "Umetumia {0} ya {1} kwenye ukurasa huu {2} wa {3} kwa jumla.",
    timerLimitPage: "Umetumia {0} ya {1} kwenye ukurasa huu.",
    timerLimitSurvey: "Umetumia {0} ya {1} kwa jumla.",
    clearCaption: "Ondoa",
    signaturePlaceHolder: "Ingia hapa",
    signaturePlaceHolderReadOnly: "Hakuna saini",
    chooseFileCaption: "Chagua faili",
    takePhotoCaption: "Chukua Picha",
    photoPlaceholder: "Bonyeza kitufe hapa chini ili kupiga picha kwa kutumia kamera.",
    fileOrPhotoPlaceholder: "Drag na kuacha au kuchagua faili kupakia au kuchukua picha kwa kutumia kamera.",
    replaceFileCaption: "Badilisha faili",
    removeFileCaption: "Ondoa faili",
    booleanCheckedLabel: "Ndio",
    booleanUncheckedLabel: "Hapana",
    confirmRemoveFile: "Je! Una uhakika kuwa unataka kuondoa faili hii: {0}?",
    confirmRemoveAllFiles: "Je! Una uhakika kuwa unataka kuondoa faili zote?",
    questionTitlePatternText: "Kichwa cha Swali",
    modalCancelButtonText: "Katisha",
    modalApplyButtonText: "Tekeleza",
    filterStringPlaceholder: "Andika ili kutafuta...",
    emptyMessage: "Hakuna data ya kuonyesha",
    noEntriesText: "Hakuna maingizo kwa sasa.\nBofya kitufe hapa chini ili kuongeza ingizo jipya.",
    noEntriesReadonlyText: "Hakuna viingilio.",
    tabTitlePlaceholder: "Jopo Jipya",
    more: "Zaidi",
    tagboxDoneButtonCaption: "Sawa kabisa",
    selectToRankEmptyRankedAreaText: "Chaguzi zote zimeorodheshwa",
    selectToRankEmptyUnrankedAreaText: "Buruta na uache uchaguzi hapa ili kuziorodhesha",
    ok: "Sawa kabisa",
    cancel: "Katisha"
};
Object(survey_core__WEBPACK_IMPORTED_MODULE_0__["setupLocale"])({ localeCode: "sw", strings: swahiliStrings, nativeName: "swahili", englishName: "Swahili" });
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} ya {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panel {panelIndex}"
// ratingOptionsCaption: "Select..." => "Teua..."
// minError: "The value should not be less than {0}" => "Thamani haipaswi kuwa chini ya {0}"
// maxError: "The value should not be greater than {0}" => "Thamani haipaswi kuwa kubwa kuliko {0}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Buruta na udondoshe faili hapa au bofya kitufe hapa chini na uchague faili ya kupakia."
// emptyRowsText: "There are no rows." => "Hakuna safu."
// multipletext_itemname: "text" => "Ujumbe"
// signaturePlaceHolder: "Sign here" => "Ingia hapa"
// modalCancelButtonText: "Cancel" => "Katisha"
// modalApplyButtonText: "Apply" => "Tekeleza"
// filterStringPlaceholder: "Type to search..." => "Andika ili kutafuta..."
// emptyMessage: "No data to display" => "Hakuna data ya kuonyesha"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Hakuna maingizo kwa sasa.\nBofya kitufe hapa chini ili kuongeza ingizo jipya."
// noEntriesReadonlyText: "There are no entries." => "Hakuna viingilio."
// more: "More" => "Zaidi"
// tagboxDoneButtonCaption: "OK" => "Sawa kabisa"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Chaguzi zote zimeorodheshwa"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Buruta na uache uchaguzi hapa ili kuziorodhesha"// takePhotoCaption: "Take Photo" => "Chukua Picha"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Bonyeza kitufe hapa chini ili kupiga picha kwa kutumia kamera."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Drag na kuacha au kuchagua faili kupakia au kuchukua picha kwa kutumia kamera."
// replaceFileCaption: "Replace file" => "Badilisha faili"// eachRowUniqueError: "Each row must have a unique value." => "Kila safu lazima iwe na thamani ya kipekee."
// noUploadFilesHandler: "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event." => "Faili haziwezi kupakiwa. Tafadhali ongeza kishiko kwa tukio la 'onUploadFiles'."
// showDetails: "Show Details" => "Onyesha Maelezo"
// hideDetails: "Hide Details" => "Ficha Maelezo"
// ok: "OK" => "Sawa kabisa"
// cancel: "Cancel" => "Katisha"
// refuseItemText: "Refuse to answer" => "Kukataa kujibu"
// dontKnowItemText: "Don't know" => "Sijui"// savingExceedSize: "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact a survey owner." => "Jibu lako ni zaidi ya 64KB. Tafadhali punguza ukubwa wa faili yako na jaribu tena au wasiliana na mmiliki wa utafiti."
// signaturePlaceHolderReadOnly: "No signature" => "Hakuna saini"// tabTitlePlaceholder: "New Panel" => "Jopo Jipya"// deselectAllItemText: "Deselect all" => "Delete All"
// textNoDigitsAllow: "Numbers are not allowed." => "Hesabu haziruhusiwi."


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
//# sourceMappingURL=swahili.js.map