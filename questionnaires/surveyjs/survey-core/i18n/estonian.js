/*!
 * surveyjs - Survey JavaScript library v1.12.26
 * Copyright (c) 2015-2025 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("estonian", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["estonian"] = factory(require("survey-core"));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/survey-core/src/localization/estonian.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/survey-core/src/localization/estonian.ts":
/*!***********************************************************!*\
  !*** ./packages/survey-core/src/localization/estonian.ts ***!
  \***********************************************************/
/*! exports provided: estonianSurveyStrings */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estonianSurveyStrings", function() { return estonianSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var estonianSurveyStrings = {
    pagePrevText: "Tagasi",
    pageNextText: "Edasi",
    completeText: "Lõpeta",
    previewText: "Eelvaade",
    editText: "Muuda",
    startSurveyText: "Alusta",
    otherItemText: "Muu (täpsusta)",
    noneItemText: "Mitte midagi",
    refuseItemText: "Keeldu vastamast",
    dontKnowItemText: "Ei tea",
    selectAllItemText: "Vali kõik",
    deselectAllItemText: "Kõigi valiku tühistamine",
    progressText: "Lehekülg {0}/{1}",
    indexText: "{0} {1}",
    panelDynamicProgressText: "Kirje {0}/{1}",
    panelDynamicTabTextFormat: "Paneel {panelIndex}",
    questionsProgressText: "Vastatud {0} küsimust {1}-st",
    emptySurvey: "Selles uuringus ei ole ühtki nähtavat lehekülge või küsimust.",
    completingSurvey: "Aitäh, et vastasid ankeedile!",
    completingSurveyBefore: "Meie andmetel oled sa sellele ankeedile juba vastanud.",
    loadingSurvey: "Laen ankeeti...",
    placeholder: "Vali...",
    ratingOptionsCaption: "Valima...",
    value: "väärtus",
    requiredError: "Palun vasta küsimusele.",
    requiredErrorInPanel: "Palun vasta vähemalt ühele küsimusele.",
    requiredInAllRowsError: "Palun anna vastus igal real.",
    eachRowUniqueError: "Igal real peab olema kordumatu väärtus.",
    numericError: "See peaks olema numbriline väärtus.",
    minError: "Väärtus ei tohiks olla väiksem kui {0}",
    maxError: "Väärtus ei tohiks olla suurem kui {0}",
    textNoDigitsAllow: "Numbrid ei ole lubatud.",
    textMinLength: "Palun sisesta vähemalt {0} tähemärki.",
    textMaxLength: "Palun ära sisesta rohkem kui {0} tähemärki.",
    textMinMaxLength: "Sisesta palun {0} - {1} tähemärki.",
    minRowCountError: "Sisesta plaun vähemalt {0} rida.",
    minSelectError: "Palun vali vähemalt {0} varianti.",
    maxSelectError: "Palun vali kõige rohkem {0} varianti.",
    numericMinMax: "'{0}' peaks olema võrdne või suurem kui {1} ja võrdne või väiksem kui {2}",
    numericMin: "'{0}' peaks olema võrdne või suurem kui {1}",
    numericMax: "'{0}' peaks olema võrnde või väiksem kui {1}",
    invalidEmail: "Sisesta palun korrektne e-posti aadress.",
    invalidExpression: "Avaldis: {0} peaks tagastama tõese.",
    urlRequestError: "Taotlus tagastas vea „{0}”. {1}",
    urlGetChoicesError: "Taotlus tagastas tühjad andmed või atribuut 'path' on vale",
    exceedMaxSize: "Faili suurus ei tohi ületada {0}.",
    noUploadFilesHandler: "Faile ei saa üles laadida. Palun lisage sündmuse \"onUploadFiles\" jaoks käitleja.",
    otherRequiredError: "Sisesta palun muu vastus.",
    uploadingFile: "Sinu fail laeb üles. Palun oota mõned sekundid ning proovi seejärel uuesti.",
    loadingFile: "Laen...",
    chooseFile: "Vali fail(id)...",
    noFileChosen: "Faili pole valitud",
    filePlaceholder: "Pukseerige fail siia või klõpsake allolevat nuppu ja valige üleslaaditav fail.",
    confirmDelete: "Kas tahad kirje kustutada?",
    keyDuplicationError: "See väärtus peab olema unikaalne.",
    addColumn: "Lisa veerg",
    addRow: "Lisa rida",
    removeRow: "Eemalda",
    emptyRowsText: "Ridu pole.",
    addPanel: "Lisa uus",
    removePanel: "Eemalda",
    showDetails: "Näita detaile",
    hideDetails: "Peida üksikasjad",
    choices_Item: "üksus",
    matrix_column: "Veerg",
    matrix_row: "Rida",
    multipletext_itemname: "Tekst",
    savingData: "Salvestan andmed serveris...",
    savingDataError: "Tekkis viga ning me ei saanud vastuseid salvestada.",
    savingDataSuccess: "Vastuste salvestamine õnnestus!",
    savingExceedSize: "Teie vastus ületab 64 KB. Vähendage faili(de) mahtu ja proovige uuesti või võtke ühendust uuringu omanikuga.",
    saveAgainButton: "Proovi uuesti",
    timerMin: "min",
    timerSec: "sek",
    timerSpentAll: "Oled veetnud {0} sellel lehel ning kokku {1}.",
    timerSpentPage: "Oled veetnud {0} sellel lehel.",
    timerSpentSurvey: "Oled veetnud {0} kokku.",
    timerLimitAll: "Oled kulutanud {0} võimalikust {1} sellel lehel ning {2} võimalikust {3} kokku.",
    timerLimitPage: "Oled kulutanud {0} võimalikust {1} sellel lehel.",
    timerLimitSurvey: "Oled kulutanud {0} võimalikust {1} koguajast.",
    clearCaption: "Puhasta",
    signaturePlaceHolder: "Allkirjasta siin",
    signaturePlaceHolderReadOnly: "Allkiri puudub",
    chooseFileCaption: "Vali fail",
    takePhotoCaption: "Pildistamine",
    photoPlaceholder: "Kaamera abil pildistamiseks klõpsake allolevat nuppu.",
    fileOrPhotoPlaceholder: "Pukseerige või valige üleslaaditav fail või pildistage seda kaamera abil.",
    replaceFileCaption: "Asenda fail",
    removeFileCaption: "Eemalda see fail",
    booleanCheckedLabel: "Jah",
    booleanUncheckedLabel: "Ei",
    confirmRemoveFile: "Oled sa kindel, et soovid selle faili eemaldada: {0}?",
    confirmRemoveAllFiles: "Oled sa kindel, et soovid eemaldada kõik failid?",
    questionTitlePatternText: "Küsimuse pealkiri",
    modalCancelButtonText: "Tühistama",
    modalApplyButtonText: "Kohaldata",
    filterStringPlaceholder: "Tippige otsimiseks...",
    emptyMessage: "Kuvatavaid andmeid pole",
    noEntriesText: "Sissekandeid veel ei ole.\nUue kirje lisamiseks klõpsake allolevat nuppu.",
    noEntriesReadonlyText: "Kirjeid ei ole.",
    tabTitlePlaceholder: "Uus paneel",
    more: "Rohkem",
    tagboxDoneButtonCaption: "OK",
    selectToRankEmptyRankedAreaText: "Kõik valikud on järjestatud",
    selectToRankEmptyUnrankedAreaText: "Lohistage valikuid siia, et neid järjestada",
    ok: "OK",
    cancel: "Tühistama"
};
Object(survey_core__WEBPACK_IMPORTED_MODULE_0__["setupLocale"])({ localeCode: "et", strings: estonianSurveyStrings, nativeName: "eesti keel", englishName: "Estonian" });
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Paneel {panelIndex}"
// ratingOptionsCaption: "Select..." => "Valima..."
// minError: "The value should not be less than {0}" => "Väärtus ei tohiks olla väiksem kui {0}"
// maxError: "The value should not be greater than {0}" => "Väärtus ei tohiks olla suurem kui {0}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Pukseerige fail siia või klõpsake allolevat nuppu ja valige üleslaaditav fail."
// emptyRowsText: "There are no rows." => "Ridu pole."
// multipletext_itemname: "text" => "Tekst"
// signaturePlaceHolder: "Sign here" => "Allkirjasta siin"
// modalCancelButtonText: "Cancel" => "Tühistama"
// modalApplyButtonText: "Apply" => "Kohaldata"
// filterStringPlaceholder: "Type to search..." => "Tippige otsimiseks..."
// emptyMessage: "No data to display" => "Kuvatavaid andmeid pole"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Sissekandeid veel ei ole.\nUue kirje lisamiseks klõpsake allolevat nuppu."
// noEntriesReadonlyText: "There are no entries." => "Kirjeid ei ole."
// more: "More" => "Rohkem"
// tagboxDoneButtonCaption: "OK" => "OK"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Kõik valikud on järjestatud"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Lohistage valikuid siia, et neid järjestada"// takePhotoCaption: "Take Photo" => "Pildistamine"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Kaamera abil pildistamiseks klõpsake allolevat nuppu."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Pukseerige või valige üleslaaditav fail või pildistage seda kaamera abil."
// replaceFileCaption: "Replace file" => "Asenda fail"// eachRowUniqueError: "Each row must have a unique value." => "Igal real peab olema kordumatu väärtus."
// noUploadFilesHandler: "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event." => "Faile ei saa üles laadida. Palun lisage sündmuse \"onUploadFiles\" jaoks käitleja."
// showDetails: "Show Details" => "Näita detaile"
// hideDetails: "Hide Details" => "Peida üksikasjad"
// ok: "OK" => "OK"
// cancel: "Cancel" => "Tühistama"
// refuseItemText: "Refuse to answer" => "Keeldu vastamast"
// dontKnowItemText: "Don't know" => "Ei tea"// savingExceedSize: "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact a survey owner." => "Teie vastus ületab 64 KB. Vähendage faili(de) mahtu ja proovige uuesti või võtke ühendust uuringu omanikuga."
// signaturePlaceHolderReadOnly: "No signature" => "Allkiri puudub"// tabTitlePlaceholder: "New Panel" => "Uus paneel"// deselectAllItemText: "Deselect all" => "Kõigi valiku tühistamine"
// textNoDigitsAllow: "Numbers are not allowed." => "Numbrid ei ole lubatud."


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
//# sourceMappingURL=estonian.js.map