/*!
 * surveyjs - Survey JavaScript library v1.12.26
 * Copyright (c) 2015-2025 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("lithuanian", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["lithuanian"] = factory(require("survey-core"));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/survey-core/src/localization/lithuanian.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/survey-core/src/localization/lithuanian.ts":
/*!*************************************************************!*\
  !*** ./packages/survey-core/src/localization/lithuanian.ts ***!
  \*************************************************************/
/*! exports provided: lithuaniaSurveyStrings */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lithuaniaSurveyStrings", function() { return lithuaniaSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var lithuaniaSurveyStrings = {
    pagePrevText: "Atgal",
    pageNextText: "Toliau",
    completeText: "Baigti",
    previewText: "Peržiūra",
    editText: "Redaguoti",
    startSurveyText: "Pradėti",
    otherItemText: "Kita (įvesti)",
    noneItemText: "Nėra",
    refuseItemText: "Atsisakyti atsakyti",
    dontKnowItemText: "Nežinau",
    selectAllItemText: "Pasirinkti visus",
    deselectAllItemText: "Panaikinkite visų žymėjimą",
    progressText: "Puslapis {0} iš {1}",
    indexText: "{1} {0}",
    panelDynamicProgressText: "Įrašyti {0} iš {1}",
    panelDynamicTabTextFormat: "Skydelis {panelIndex}",
    questionsProgressText: "Atsakė į {0} / {1} klausimus",
    emptySurvey: "Apklausoje nėra matomo puslapio ar klausimo.",
    completingSurvey: "Dėkojame už dalyvavimą apklausoje!",
    completingSurveyBefore: "Mūsų įrašai rodo, kad jau atlikote šią apklausą.",
    loadingSurvey: "Prašome palaukti...",
    placeholder: "Pasirinkti...",
    ratingOptionsCaption: "Žymėti...",
    value: "reikšmė",
    requiredError: "Būtina atsakyti į šį klausimą.",
    requiredErrorInPanel: "Būtina atsakyti bent į vieną klausimą.",
    requiredInAllRowsError: "Prašome atsakyti į klausimus visose eilutėse.",
    eachRowUniqueError: "Kiekviena eilutė turi turėti unikalią reikšmę.",
    numericError: "Turi būti skaičiai.",
    minError: "Vertė neturėtų būti mažesnė nei {0}",
    maxError: "Vertė neturėtų būti didesnė nei {0}",
    textNoDigitsAllow: "Numeriai neleidžiami.",
    textMinLength: "Prašome suvesti bent {0} simbolius.",
    textMaxLength: "Prašome suvesti mažiau nei {0} simbolių.",
    textMinMaxLength: "Prašome suvesti daugiau nei {0} ir mažiau nei {1} simbolių.",
    minRowCountError: "Prašome suvesti ne mažiau nei {0} eilučių.",
    minSelectError: "Prašome pasirinkti bent {0} variantų.",
    maxSelectError: "Pasirinkite ne daugiau kaip {0} variantus.",
    numericMinMax: "'{0}' turi būti lygus arba didesnis nei {1} ir lygus arba mažesnis nei {2}",
    numericMin: "'{0}' turėtų būti lygus arba didesnis nei {1}",
    numericMax: "'{0}' turėtų būti lygus ar mažesnis už {1}",
    invalidEmail: "Prašome įvesti galiojantį elektroninio pašto adresą.",
    invalidExpression: "Reikšmė: {0} turi grąžinti 'true'.",
    urlRequestError: "Užklausa grąžino klaidą'{0}'. {1}",
    urlGetChoicesError: "Užklausa grąžino tuščius duomenis arba 'path' savybė yra neteisinga",
    exceedMaxSize: "Failo dydis neturi viršyti {0}.",
    noUploadFilesHandler: "Failų įkelti negalima. Pridėkite įvykio \"onUploadFiles\" tvarkytoją.",
    otherRequiredError: "Įveskite kitą reikšmę.",
    uploadingFile: "Jūsų failas yra keliamas. Palaukite keletą sekundžių ir bandykite dar kartą.",
    loadingFile: "Prašome palaukti...",
    chooseFile: "Pasirinkti failą(us)...",
    noFileChosen: "Nepasirinktas joks failas",
    filePlaceholder: "Nuvilkite failą čia arba spustelėkite žemiau esantį mygtuką ir pasirinkite failą, kurį norite įkelti.",
    confirmDelete: "Ar norite ištrinti įrašą?",
    keyDuplicationError: "Ši reikšmė turėtų būti unikali.",
    addColumn: "Pridėti stulpelį",
    addRow: "Pridėti eilutę",
    removeRow: "Ištrinti",
    emptyRowsText: "Eilių nėra.",
    addPanel: "Pridėti naują",
    removePanel: "Ištrinti",
    showDetails: "Rodyti išsamią informaciją",
    hideDetails: "Slėpti išsamią informaciją",
    choices_Item: "elementas",
    matrix_column: "Stulpelis",
    matrix_row: "Eilutė",
    multipletext_itemname: "SMS žinutė",
    savingData: "Rezultatai saugomi serveryje...",
    savingDataError: "Įvyko klaida ir mes negalėjome išsaugoti rezultatų.",
    savingDataSuccess: "Rezultatai buvo išsaugoti sėkmingai!",
    savingExceedSize: "Jūsų atsakymas viršija 64 KB. Sumažinkite failo (-ų) dydį ir bandykite dar kartą arba susisiekite su apklausos savininku.",
    saveAgainButton: "Bandyti dar kartą",
    timerMin: "min",
    timerSec: "sek",
    timerSpentAll: "Praleidote {0} šiame puslapyje ir {1} iš viso.",
    timerSpentPage: "Praleidote {0} šiame puslapyje.",
    timerSpentSurvey: "Praleidote {0} iš viso.",
    timerLimitAll: "Praleidote {0} iš {1} šiame puslapyje ir {2} iš {3} iš viso.",
    timerLimitPage: "Praleidote {0} iš {1} šiame puslapyje.",
    timerLimitSurvey: "Praleidote {0} iš {1} iš viso.",
    clearCaption: "Valyti",
    signaturePlaceHolder: "Pasirašykite čia",
    signaturePlaceHolderReadOnly: "Nėra parašo",
    chooseFileCaption: "Pasirinkti failą",
    takePhotoCaption: "Fotografuoti",
    photoPlaceholder: "Spustelėkite žemiau esantį mygtuką, kad nufotografuotumėte fotoaparatu.",
    fileOrPhotoPlaceholder: "Nuvilkite arba pasirinkite failą, kurį norite įkelti arba nufotografuoti naudodami fotoaparatą.",
    replaceFileCaption: "Pakeiskite failą",
    removeFileCaption: "Ištrinti šį failą",
    booleanCheckedLabel: "Taip",
    booleanUncheckedLabel: "Ne",
    confirmRemoveFile: "Ar tikrai norite pašalinti šį failą: {0}?",
    confirmRemoveAllFiles: "Ar tikrai norite pašalinti visus failus?",
    questionTitlePatternText: "Klausimo pavadinimas",
    modalCancelButtonText: "Atšaukti",
    modalApplyButtonText: "Vartoti",
    filterStringPlaceholder: "Įveskite, kad ieškotumėte...",
    emptyMessage: "Nėra rodomų duomenų",
    noEntriesText: "Įrašų dar nėra.\nSpustelėkite žemiau esantį mygtuką, kad pridėtumėte naują įrašą.",
    noEntriesReadonlyText: "Įrašų nėra.",
    tabTitlePlaceholder: "Naujas skydelis",
    more: "Daugiau",
    tagboxDoneButtonCaption: "GERAI",
    selectToRankEmptyRankedAreaText: "Visi pasirinkimai yra reitinguojami",
    selectToRankEmptyUnrankedAreaText: "Nuvilkite pasirinkimus čia, kad juos reitinguotumėte",
    ok: "GERAI",
    cancel: "Atšaukti"
};
Object(survey_core__WEBPACK_IMPORTED_MODULE_0__["setupLocale"])({ localeCode: "lt", strings: lithuaniaSurveyStrings, nativeName: "lietuvių", englishName: "Lithuanian" });
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{1} {0}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Skydelis {panelIndex}"
// ratingOptionsCaption: "Select..." => "Žymėti..."
// minError: "The value should not be less than {0}" => "Vertė neturėtų būti mažesnė nei {0}"
// maxError: "The value should not be greater than {0}" => "Vertė neturėtų būti didesnė nei {0}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Nuvilkite failą čia arba spustelėkite žemiau esantį mygtuką ir pasirinkite failą, kurį norite įkelti."
// emptyRowsText: "There are no rows." => "Eilių nėra."
// multipletext_itemname: "text" => "SMS žinutė"
// signaturePlaceHolder: "Sign here" => "Pasirašykite čia"
// modalCancelButtonText: "Cancel" => "Atšaukti"
// modalApplyButtonText: "Apply" => "Vartoti"
// filterStringPlaceholder: "Type to search..." => "Įveskite, kad ieškotumėte..."
// emptyMessage: "No data to display" => "Nėra rodomų duomenų"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Įrašų dar nėra.\nSpustelėkite žemiau esantį mygtuką, kad pridėtumėte naują įrašą."
// noEntriesReadonlyText: "There are no entries." => "Įrašų nėra."
// more: "More" => "Daugiau"
// tagboxDoneButtonCaption: "OK" => "GERAI"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Visi pasirinkimai yra reitinguojami"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Nuvilkite pasirinkimus čia, kad juos reitinguotumėte"// takePhotoCaption: "Take Photo" => "Fotografuoti"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Spustelėkite žemiau esantį mygtuką, kad nufotografuotumėte fotoaparatu."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Nuvilkite arba pasirinkite failą, kurį norite įkelti arba nufotografuoti naudodami fotoaparatą."
// replaceFileCaption: "Replace file" => "Pakeiskite failą"// eachRowUniqueError: "Each row must have a unique value." => "Kiekviena eilutė turi turėti unikalią reikšmę."
// noUploadFilesHandler: "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event." => "Failų įkelti negalima. Pridėkite įvykio \"onUploadFiles\" tvarkytoją."
// showDetails: "Show Details" => "Rodyti išsamią informaciją"
// hideDetails: "Hide Details" => "Slėpti išsamią informaciją"
// ok: "OK" => "GERAI"
// cancel: "Cancel" => "Atšaukti"
// refuseItemText: "Refuse to answer" => "Atsisakyti atsakyti"
// dontKnowItemText: "Don't know" => "Nežinau"// savingExceedSize: "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact a survey owner." => "Jūsų atsakymas viršija 64 KB. Sumažinkite failo (-ų) dydį ir bandykite dar kartą arba susisiekite su apklausos savininku."
// signaturePlaceHolderReadOnly: "No signature" => "Nėra parašo"// tabTitlePlaceholder: "New Panel" => "Naujas skydelis"// deselectAllItemText: "Deselect all" => "Panaikinkite visų žymėjimą"
// textNoDigitsAllow: "Numbers are not allowed." => "Numeriai neleidžiami."


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
//# sourceMappingURL=lithuanian.js.map