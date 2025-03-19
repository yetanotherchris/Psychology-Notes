/*!
 * surveyjs - Survey JavaScript library v1.12.26
 * Copyright (c) 2015-2025 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("latvian", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["latvian"] = factory(require("survey-core"));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/survey-core/src/localization/latvian.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/survey-core/src/localization/latvian.ts":
/*!**********************************************************!*\
  !*** ./packages/survey-core/src/localization/latvian.ts ***!
  \**********************************************************/
/*! exports provided: latvianSurveyStrings */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latvianSurveyStrings", function() { return latvianSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var latvianSurveyStrings = {
    pagePrevText: "Iepriekšēja lapa",
    pageNextText: "Nākamā lapa",
    completeText: "Iesniegt",
    previewText: "Priekšskatījums",
    editText: "Rediģēt",
    startSurveyText: "Sākt",
    otherItemText: "Cits (lūdzu, aprakstiet!)",
    noneItemText: "Nav",
    refuseItemText: "Atteikties atbildēt",
    dontKnowItemText: "Es nezinu",
    selectAllItemText: "Izvēlēties visus",
    deselectAllItemText: "Noņemt atlasi visiem",
    progressText: "{0}. lapa no {1}",
    indexText: "{0} no {1}",
    panelDynamicProgressText: "Ierakstīt {0} no {1}",
    panelDynamicTabTextFormat: "Panelis {panelIndex}",
    questionsProgressText: "Atbildēts uz {0} / {1} jautājumiem",
    emptySurvey: "Nav neviena jautājuma.",
    completingSurvey: "Pateicamies Jums par anketas aizpildīšanu!",
    completingSurveyBefore: "Mūsu ieraksti liecina, ka Jūs jau esat aizpildījis šo aptauju.",
    loadingSurvey: "Ielāde no servera...",
    placeholder: "Izvēlēties...",
    ratingOptionsCaption: "Nospiediet šeit, lai novērtētu...",
    value: "value",
    requiredError: "Lūdzu, atbildiet uz jautājumu!",
    requiredErrorInPanel: "Lūdzu, atbildiet uz vismaz vienu jautājumu.",
    requiredInAllRowsError: "Lūdzu, atbildiet uz jautājumiem visās rindās.",
    eachRowUniqueError: "Katrai rindai jābūt unikālai vērtībai.",
    numericError: "Atbildei ir jābūt skaitlim.",
    minError: "Vērtība nedrīkst būt mazāka par {0}",
    maxError: "Vērtība nedrīkst būt lielāka par {0}",
    textNoDigitsAllow: "Numuri nav atļauti.",
    textMinLength: "Lūdzu, ievadiet vismaz {0} simbolus.",
    textMaxLength: "Lūdzu, ievadiet mazāk nekā {0} rakstzīmes.",
    textMinMaxLength: "Lūdzu, ievadiet vairāk nekā {0} rakstzīmes un mazāk nekā {1} rakstzīmes.",
    minRowCountError: "Lūdzu, aizpildiet vismaz {0} rindas.",
    minSelectError: "Lūdzu, izvēlieties vismaz {0} variantu.",
    maxSelectError: "Lūdzu, izvēlieties ne vairak par {0} variantiem.",
    numericMinMax: "'{0}' jābūt vienādam vai lielākam nekā {1}, un vienādam vai mazākam, nekā {2}",
    numericMin: "'{0}' jābūt vienādam vai lielākam {1}",
    numericMax: "'{0}' jābūt vienādam vai lielākam {1}",
    invalidEmail: "Lūdzu, ievadiet pareizu e-pasta adresi!",
    invalidExpression: "Izteicienam: {0} jāatgriež “true”.",
    urlRequestError: "Pieprasījumā tika atgriezta kļūda “{0}”. {1}",
    urlGetChoicesError: "Pieprasījums atgrieza tukšus datus vai rekvizīts “path” ir nepareizs",
    exceedMaxSize: "Faila lielums nedrīkst pārsniegt {0}.",
    noUploadFilesHandler: "Failus nevar augšupielādēt. Lūdzu, pievienojiet apdarinātāju notikumam \"onUploadFiles\".",
    otherRequiredError: "Lūdzu, ievadiet datus laukā 'Cits'",
    uploadingFile: "Jūsu fails tiek augšupielādēts. Lūdzu, uzgaidiet dažas sekundes un mēģiniet vēlreiz.",
    loadingFile: "Notiek ielāde ...",
    chooseFile: "Izvēlieties failus ...",
    noFileChosen: "Nav izvēlēts neviens fails",
    filePlaceholder: "Lai pievienotu, ievelciet failu šeit vai arī klikšķiniet uz zemāk redzamās pogas",
    confirmDelete: "Vai vēlaties izdzēst ierakstu?",
    keyDuplicationError: "Šai vērtībai jābūt unikālai.",
    addColumn: "Pievienot kolonnu",
    addRow: "Pievienot rindu",
    removeRow: "Noņemt",
    emptyRowsText: "Nav rindu.",
    addPanel: "Pievieno jaunu",
    removePanel: "Noņemt",
    showDetails: "Rādīt detalizētu informāciju",
    hideDetails: "Slēpt detaļas",
    choices_Item: "vienums",
    matrix_column: "Sleja",
    matrix_row: "Rinda",
    multipletext_itemname: "teksts",
    savingData: "Rezultāti tiek saglabāti serverī ...",
    savingDataError: "Radās kļūda, un mēs nevarējām saglabāt rezultātus.",
    savingDataSuccess: "Rezultāti tika veiksmīgi saglabāti!",
    savingExceedSize: "Jūsu atbilde pārsniedz 64 KB. Lūdzu, samaziniet sava(-u) faila(-u) lielumu un mēģiniet vēlreiz vai sazinieties ar aptaujas īpašnieku.",
    saveAgainButton: "Mēģiniet vēlreiz",
    timerMin: "min",
    timerSec: "sek",
    timerSpentAll: "Šajā lapā esat iztērējis {0} un kopā {1}.",
    timerSpentPage: "Šajā lapā esat iztērējis {0}.",
    timerSpentSurvey: "Kopā esat iztērējis {0}.",
    timerLimitAll: "Šajā lapā esat iztērējis {0} no {1} un kopā {2} no {3}.",
    timerLimitPage: "Šajā lapā esat iztērējis {0} no {1}.",
    timerLimitSurvey: "Kopā esat iztērējis {0} no {1}.",
    clearCaption: "Iztīrīt",
    signaturePlaceHolder: "Parakstieties šeit",
    signaturePlaceHolderReadOnly: "Nav paraksta",
    chooseFileCaption: "Izvēlēties failu",
    takePhotoCaption: "Uzņemt fotoattēlu",
    photoPlaceholder: "Noklikšķiniet uz pogas zemāk, lai uzņemtu fotoattēlu, izmantojot kameru.",
    fileOrPhotoPlaceholder: "Velciet un nometiet vai atlasiet failu, ko augšupielādēt vai uzņemt fotoattēlu, izmantojot kameru.",
    replaceFileCaption: "Aizstāt failu",
    removeFileCaption: "Noņemiet šo failu",
    booleanCheckedLabel: "Jā",
    booleanUncheckedLabel: "Nē",
    confirmRemoveFile: "Vai tiešām vēlaties noņemt šo failu: {0}?",
    confirmRemoveAllFiles: "Vai tiešām vēlaties noņemt visus failus?",
    questionTitlePatternText: "Jautājuma nosaukums",
    modalCancelButtonText: "Atcelt",
    modalApplyButtonText: "Pielietot",
    filterStringPlaceholder: "Ierakstiet, lai meklētu...",
    emptyMessage: "Nav datu, ko rādīt",
    noEntriesText: "Vēl nav neviena ieraksta.\nNoklikšķiniet uz zemāk esošās pogas, lai pievienotu jaunu ierakstu.",
    noEntriesReadonlyText: "Ierakstu nav.",
    tabTitlePlaceholder: "Jauns panelis",
    more: "Vairāk",
    tagboxDoneButtonCaption: "LABI",
    selectToRankEmptyRankedAreaText: "Visas izvēles ir sarindotas",
    selectToRankEmptyUnrankedAreaText: "Velciet un nometiet izvēles iespējas šeit, lai tās sarindotu",
    ok: "LABI",
    cancel: "Atcelt"
};
Object(survey_core__WEBPACK_IMPORTED_MODULE_0__["setupLocale"])({ localeCode: "lv", strings: latvianSurveyStrings, nativeName: "latviešu", englishName: "Latvian" });
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panelis {panelIndex}"
// emptyMessage: "No data to display" => "Nav datu, ko rādīt"
// noEntriesReadonlyText: "There are no entries." => "Ierakstu nav."
// more: "More" => "Vairāk"
// tagboxDoneButtonCaption: "OK" => "LABI"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Visas izvēles ir sarindotas"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Velciet un nometiet izvēles iespējas šeit, lai tās sarindotu"// takePhotoCaption: "Take Photo" => "Uzņemt fotoattēlu"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Noklikšķiniet uz pogas zemāk, lai uzņemtu fotoattēlu, izmantojot kameru."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Velciet un nometiet vai atlasiet failu, ko augšupielādēt vai uzņemt fotoattēlu, izmantojot kameru."
// replaceFileCaption: "Replace file" => "Aizstāt failu"// eachRowUniqueError: "Each row must have a unique value." => "Katrai rindai jābūt unikālai vērtībai."
// noUploadFilesHandler: "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event." => "Failus nevar augšupielādēt. Lūdzu, pievienojiet apdarinātāju notikumam \"onUploadFiles\"."
// showDetails: "Show Details" => "Rādīt detalizētu informāciju"
// hideDetails: "Hide Details" => "Slēpt detaļas"
// ok: "OK" => "LABI"
// cancel: "Cancel" => "Atcelt"
// refuseItemText: "Refuse to answer" => "Atteikties atbildēt"
// dontKnowItemText: "Don't know" => "Es nezinu"// savingExceedSize: "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact a survey owner." => "Jūsu atbilde pārsniedz 64 KB. Lūdzu, samaziniet sava(-u) faila(-u) lielumu un mēģiniet vēlreiz vai sazinieties ar aptaujas īpašnieku."
// signaturePlaceHolderReadOnly: "No signature" => "Nav paraksta"// tabTitlePlaceholder: "New Panel" => "Jauns panelis"// deselectAllItemText: "Deselect all" => "Noņemt atlasi visiem"
// textNoDigitsAllow: "Numbers are not allowed." => "Numuri nav atļauti."


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
//# sourceMappingURL=latvian.js.map