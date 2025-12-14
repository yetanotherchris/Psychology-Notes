/*!
 * surveyjs - Survey JavaScript library v1.12.26
 * Copyright (c) 2015-2025 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("romanian", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["romanian"] = factory(require("survey-core"));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/survey-core/src/localization/romanian.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/survey-core/src/localization/romanian.ts":
/*!***********************************************************!*\
  !*** ./packages/survey-core/src/localization/romanian.ts ***!
  \***********************************************************/
/*! exports provided: romanianSurveyStrings */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "romanianSurveyStrings", function() { return romanianSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var romanianSurveyStrings = {
    pagePrevText: "Precedent",
    pageNextText: "Următor",
    completeText: "Finalizare",
    previewText: "previzualizare",
    editText: "Editați",
    startSurveyText: "start",
    otherItemText: "Altul(precizaţi)",
    noneItemText: "Nici unul",
    refuseItemText: "Refuză să răspundă",
    dontKnowItemText: "Nu ştiu",
    selectAllItemText: "Selectează tot",
    deselectAllItemText: "Deselectează tot",
    progressText: "Pagina {0} din {1}",
    indexText: "{0} de {1}",
    panelDynamicProgressText: "Înregistrare {0} din {1}",
    panelDynamicTabTextFormat: "Panou {panelIndex}",
    questionsProgressText: "Răspunsuri la {0} / {1} întrebări",
    emptySurvey: "Nu sunt întrebări pentru acest chestionar",
    completingSurvey: "Vă mulţumim pentru timpul acordat!",
    completingSurveyBefore: "Din înregistrările noastre reiese că ați completat deja acest chestionar.",
    loadingSurvey: "Chestionarul se încarcă...",
    placeholder: "Alegeţi...",
    ratingOptionsCaption: "Alege...",
    value: "valoare",
    requiredError: "Răspunsul la această întrebare este obligatoriu.",
    requiredErrorInPanel: "Vă rugăm să răspundeți la cel puțin o întrebare.",
    requiredInAllRowsError: "Toate răspunsurile sunt obligatorii",
    eachRowUniqueError: "Fiecare rând trebuie să aibă o valoare unică.",
    numericError: "Răspunsul trebuie să fie numeric.",
    minError: "Valoarea nu trebuie să fie mai mică de {0}",
    maxError: "Valoarea nu trebuie să fie mai mare de {0}",
    textNoDigitsAllow: "Numerele nu sunt permise.",
    textMinLength: "Trebuie să introduceți minim {0} caractere.",
    textMaxLength: "Trebuie să introduceți maxim {0} caractere.",
    textMinMaxLength: "Trebuie să introduceți mai mult de {0} și mai puțin de {1} caractere.",
    minRowCountError: "Trebuie să completați minim {0} rânduri.",
    minSelectError: "Trebuie să selectați minim {0} opţiuni.",
    maxSelectError: "Trebuie să selectați maxim {0} opţiuni.",
    numericMinMax: "Răspunsul '{0}' trebuie să fie mai mare sau egal ca {1} şî mai mic sau egal cu {2}",
    numericMin: "Răspunsul '{0}' trebuie să fie mai mare sau egal ca {1}",
    numericMax: "Răspunsul '{0}' trebuie să fie mai mic sau egal ca {1}",
    invalidEmail: "Trebuie să introduceţi o adresa de email validă.",
    invalidExpression: "Expresia: {0} ar trebui să returneze „adevărat”.",
    urlRequestError: "Request-ul a returnat eroarea '{0}'. {1}",
    urlGetChoicesError: "Request-ul nu a returnat date sau proprietatea 'path' este incorectă",
    exceedMaxSize: "Dimensiunea fişierului nu trebuie să depăşească {0}.",
    noUploadFilesHandler: "Fișierele nu pot fi încărcate. Vă rugăm să adăugați un handler pentru evenimentul \"onUploadFiles\".",
    otherRequiredError: "Trebuie să completați câmpul 'Altul'.",
    uploadingFile: "Fișierul dumneavoastră este în curs de încărcare. Vă rugăm așteptați câteva secunde și reveniți apoi.",
    loadingFile: "Se încarcă...",
    chooseFile: "Alege fisierele...",
    noFileChosen: "Niciun fișier ales",
    filePlaceholder: "Glisați și fixați un fișier aici sau faceți clic pe butonul de mai jos și alegeți un fișier de încărcat.",
    confirmDelete: "Sunteți sigur că doriți să ștergeți înregistrarea?",
    keyDuplicationError: "Valoarea trebuie să fie unică.",
    addColumn: "Adăugați coloană",
    addRow: "Adăugare rând",
    removeRow: "Ștergere",
    emptyRowsText: "Nu există rânduri.",
    addPanel: "Adăugare",
    removePanel: "Ștergere",
    showDetails: "Arată detalii",
    hideDetails: "Ascunde detalii",
    choices_Item: "opțiune",
    matrix_column: "Coloană",
    matrix_row: "Rând",
    multipletext_itemname: "Text",
    savingData: "Rezultatele sunt în curs de salvare...",
    savingDataError: "A intervenit o eroare, rezultatele nu au putut fi salvate.",
    savingDataSuccess: "Rezultatele au fost salvate cu succes!",
    savingExceedSize: "Răspunsul tău depășește 64KB. Reduceți dimensiunea fișierelor și încercați din nou sau contactați un proprietar de sondaj.",
    saveAgainButton: "Încercați din nou",
    timerMin: "min",
    timerSec: "sec",
    timerSpentAll: "Ați petrecut {0} pe această pagină și {1} în total.",
    timerSpentPage: "Ați petrecut {0} pe această pagină.",
    timerSpentSurvey: "Ați petrecut {0} în total.",
    timerLimitAll: "Ați petrecut {0} din {1} pe această pagină și {2} din {3} în total.",
    timerLimitPage: "Ați petrecut {0} din {1} pe această pagină.",
    timerLimitSurvey: "Ați petrecut {0} din {1} în total.",
    clearCaption: "clar",
    signaturePlaceHolder: "Semnează aici",
    signaturePlaceHolderReadOnly: "Fără semnătură",
    chooseFileCaption: "Alege fișierul",
    takePhotoCaption: "Faceți o fotografie",
    photoPlaceholder: "Faceți clic pe butonul de mai jos pentru a face o fotografie folosind camera.",
    fileOrPhotoPlaceholder: "Glisați și fixați sau selectați un fișier pentru a încărca sau a face o fotografie folosind camera.",
    replaceFileCaption: "Înlocuire fișier",
    removeFileCaption: "Eliminați acest fișier",
    booleanCheckedLabel: "da",
    booleanUncheckedLabel: "Nu",
    confirmRemoveFile: "Sigur doriți să eliminați acest fișier: {0}?",
    confirmRemoveAllFiles: "Sigur doriți să eliminați toate fișierele?",
    questionTitlePatternText: "Titlul intrebarii",
    modalCancelButtonText: "Anula",
    modalApplyButtonText: "Aplica",
    filterStringPlaceholder: "Tastați pentru a căuta...",
    emptyMessage: "Nu există date de afișat",
    noEntriesText: "Nu există încă intrări.\nFaceți clic pe butonul de mai jos pentru a adăuga o intrare nouă.",
    noEntriesReadonlyText: "Nu există intrări.",
    tabTitlePlaceholder: "Panou nou",
    more: "Mai mult",
    tagboxDoneButtonCaption: "OK",
    selectToRankEmptyRankedAreaText: "Toate opțiunile sunt clasificate",
    selectToRankEmptyUnrankedAreaText: "Glisați și fixați opțiunile aici pentru a le clasifica",
    ok: "OK",
    cancel: "Anula"
};
Object(survey_core__WEBPACK_IMPORTED_MODULE_0__["setupLocale"])({ localeCode: "ro", strings: romanianSurveyStrings, nativeName: "română", englishName: "Romanian" });
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} de {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panou {panelIndex}"
// ratingOptionsCaption: "Select..." => "Alege..."
// minError: "The value should not be less than {0}" => "Valoarea nu trebuie să fie mai mică de {0}"
// maxError: "The value should not be greater than {0}" => "Valoarea nu trebuie să fie mai mare de {0}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Glisați și fixați un fișier aici sau faceți clic pe butonul de mai jos și alegeți un fișier de încărcat."
// emptyRowsText: "There are no rows." => "Nu există rânduri."
// multipletext_itemname: "text" => "Text"
// signaturePlaceHolder: "Sign here" => "Semnează aici"
// modalCancelButtonText: "Cancel" => "Anula"
// modalApplyButtonText: "Apply" => "Aplica"
// filterStringPlaceholder: "Type to search..." => "Tastați pentru a căuta..."
// emptyMessage: "No data to display" => "Nu există date de afișat"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Nu există încă intrări.\nFaceți clic pe butonul de mai jos pentru a adăuga o intrare nouă."
// noEntriesReadonlyText: "There are no entries." => "Nu există intrări."
// more: "More" => "Mai mult"
// tagboxDoneButtonCaption: "OK" => "OK"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Toate opțiunile sunt clasificate"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Glisați și fixați opțiunile aici pentru a le clasifica"// takePhotoCaption: "Take Photo" => "Faceți o fotografie"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Faceți clic pe butonul de mai jos pentru a face o fotografie folosind camera."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Glisați și fixați sau selectați un fișier pentru a încărca sau a face o fotografie folosind camera."
// replaceFileCaption: "Replace file" => "Înlocuire fișier"// eachRowUniqueError: "Each row must have a unique value." => "Fiecare rând trebuie să aibă o valoare unică."
// noUploadFilesHandler: "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event." => "Fișierele nu pot fi încărcate. Vă rugăm să adăugați un handler pentru evenimentul \"onUploadFiles\"."
// showDetails: "Show Details" => "Arată detalii"
// hideDetails: "Hide Details" => "Ascunde detalii"
// ok: "OK" => "OK"
// cancel: "Cancel" => "Anula"
// refuseItemText: "Refuse to answer" => "Refuză să răspundă"
// dontKnowItemText: "Don't know" => "Nu ştiu"// savingExceedSize: "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact a survey owner." => "Răspunsul tău depășește 64KB. Reduceți dimensiunea fișierelor și încercați din nou sau contactați un proprietar de sondaj."
// signaturePlaceHolderReadOnly: "No signature" => "Fără semnătură"// tabTitlePlaceholder: "New Panel" => "Panou nou"// deselectAllItemText: "Deselect all" => "Deselectează tot"
// textNoDigitsAllow: "Numbers are not allowed." => "Numerele nu sunt permise."


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
//# sourceMappingURL=romanian.js.map