/*!
 * surveyjs - Survey JavaScript library v1.12.26
 * Copyright (c) 2015-2025 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("slovenian", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["slovenian"] = factory(require("survey-core"));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/survey-core/src/localization/slovenian.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/survey-core/src/localization/slovenian.ts":
/*!************************************************************!*\
  !*** ./packages/survey-core/src/localization/slovenian.ts ***!
  \************************************************************/
/*! exports provided: slovenianStrings */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slovenianStrings", function() { return slovenianStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var slovenianStrings = {
    pagePrevText: "Prejšnja",
    pageNextText: "Naslednja",
    completeText: "Zaključi",
    previewText: "Predogled",
    editText: "Uredi",
    startSurveyText: "Začni",
    otherItemText: "Drugo (opišite)",
    noneItemText: "Noben",
    refuseItemText: "Zavrni odgovor",
    dontKnowItemText: "Ne vem",
    selectAllItemText: "Izberi vse",
    deselectAllItemText: "Odstrani izbiro",
    progressText: "Stran {0} od {1}",
    indexText: "{0} od {1}",
    panelDynamicProgressText: "{0} od {1}",
    panelDynamicTabTextFormat: "Plošča {panelIndex}",
    questionsProgressText: "Odgovorjeno {0}/{1} vprašanj",
    emptySurvey: "Anketa ne vsebuje vidnih elementov.",
    completingSurvey: "Hvala, ker ste izpolnili anketo",
    completingSurveyBefore: "To anketo ste že izpolnili.",
    loadingSurvey: "Nalaganje ankete...",
    placeholder: "Izberite...",
    ratingOptionsCaption: "Izberite...",
    value: "vrednost",
    requiredError: "Odgovor je obvezen.",
    requiredErrorInPanel: "Obvezen odgovor: odgovorite na vsaj eno vprašanje.",
    requiredInAllRowsError: "Obvezen odgovor: odgovorite na vsa vprašanja v vrsticah.",
    eachRowUniqueError: "Vsaka vrstica mora imeti edinstveno vrednost.",
    numericError: "Vrednost mora biti številčna.",
    minError: "Vrednost ne sme biti manjša od {0}",
    maxError: "Vrednost ne sme biti večja od {0}",
    textNoDigitsAllow: "Številke niso dovoljene.",
    textMinLength: "Vnesite vsaj {0} znakov.",
    textMaxLength: "Vnesite največ {0} znakov.",
    textMinMaxLength: "Vnesite vsaj {0} in največ {1} znakov.",
    minRowCountError: "Izpolnite vsaj {0} vrstic.",
    minSelectError: "Izberite vsaj {0} možnosti.",
    maxSelectError: "Izberite največ {0} možnosti.",
    numericMinMax: "'{0}' mora biti vsaj {1} in največ {2}",
    numericMin: "'{0}' mora biti vsaj {1}",
    numericMax: "'{0}' mora biti največ {1}",
    invalidEmail: "Vnesite veljaven e-poštni naslov.",
    invalidExpression: "Izraz: {0} mora vrniti 'true'.",
    urlRequestError: "Zahteva je vrnila napako '{0}'. {1}",
    urlGetChoicesError: "Zahteva je vrnila prazne podatke ali lastnost 'path' ni pravilna.",
    exceedMaxSize: "Velikost datoteke ne sme presegati {0}.",
    noUploadFilesHandler: "Datotek ni mogoče naložiti. Dodajte obravnavo za dogodek 'onUploadFiles'.",
    otherRequiredError: "Obvezen odgovor: vnesite drugo vrednost.",
    uploadingFile: "Vaša datoteka se nalaga. Počakajte nekaj sekund in poskusite znova.",
    loadingFile: "Nalaganje...",
    chooseFile: "Izberite datoteko...",
    noFileChosen: "Ni izbrane datoteke",
    filePlaceholder: "Povlecite in spustite datoteko tukaj ali kliknite spodnji gumb za izbiro datoteke za nalaganje.",
    confirmDelete: "Ste prepričani, da želite izbrisati ta zapis?",
    keyDuplicationError: "Ta vrednost mora biti edinstvena.",
    addColumn: "Dodaj stolpec",
    addRow: "Dodaj vrstico",
    removeRow: "Odstrani",
    noRowsText: "Ni vrstic.",
    addPanel: "Dodaj novo",
    removePanel: "Odstrani",
    showDetails: "Prikaži podrobnosti",
    hideDetails: "Skrij podrobnosti",
    choices_Item: "postavka",
    choices_Choice: "Možnost izbire",
    matrix_column: "Stolpec",
    matrix_row: "Vrstica",
    multipletext_itemname: "besedilo",
    savingData: "Rezultati se shranjujejo na strežnik...",
    savingDataError: "Prišlo je do napake in rezultatov ni bilo mogoče shraniti.",
    savingDataSuccess: "Rezultati so bili uspešno shranjeni!",
    savingExceedSize: "Vaš odgovor presega 64 KB. Zmanjšajte velikost datotek in poskusite znova ali se obrnite na lastnika ankete.",
    saveAgainButton: "Poskusite znova",
    timerMin: "min",
    timerSec: "sek",
    timerSpentAll: "Na tej strani ste porabili {0}, skupno {1}.",
    timerSpentPage: "Na tej strani ste porabili {0}.",
    timerSpentSurvey: "Skupaj ste porabili {0}.",
    timerLimitAll: "Na tej strani ste porabili {0} od {1} in skupno {2} od {3}.",
    timerLimitPage: "Na tej strani ste porabili {0} od {1}.",
    timerLimitSurvey: "Skupaj ste porabili {0} od {1}.",
    clearCaption: "Počisti",
    signaturePlaceHolder: "Podpišite se tukaj",
    signaturePlaceHolderReadOnly: "Ni podpisa",
    chooseFileCaption: "Izberi datoteko",
    takePhotoCaption: "Slikaj",
    photoPlaceholder: "Kliknite spodnji gumb, da posnamete fotografijo s kamero.",
    fileOrPhotoPlaceholder: "Povlecite in spustite datoteko za nalaganje ali posnemite fotografijo s kamero.",
    replaceFileCaption: "Zamenjaj datoteko",
    removeFileCaption: "Odstrani to datoteko",
    booleanCheckedLabel: "Da",
    booleanUncheckedLabel: "Ne",
    confirmRemoveFile: "Ste prepričani, da želite odstraniti to datoteko: {0}?",
    confirmRemoveAllFiles: "Ste prepričani, da želite odstraniti vse datoteke?",
    questionTitlePatternText: "Naslov vprašanja",
    modalCancelButtonText: "Prekliči",
    modalApplyButtonText: "Uporabi",
    filterStringPlaceholder: "Vnesite za iskanje...",
    emptyMessage: "Ni podatkov za prikaz",
    noEntriesText: "Ni še vnosov.\nKliknite spodnji gumb za dodajanje novega vnosa.",
    noEntriesReadonlyText: "Ni vnosov",
    tabTitlePlaceholder: "Nova plošča",
    more: "Več",
    tagboxDoneButtonCaption: "V redu",
    selectToRankEmptyRankedAreaText: "Vse možnosti so izbrane za razvrščanje",
    selectToRankEmptyUnrankedAreaText: "Povlecite izbire sem, da jih razvrstite",
    ok: "V redu",
    cancel: "Prekliči",
};
Object(survey_core__WEBPACK_IMPORTED_MODULE_0__["setupLocale"])({ localeCode: "sl", strings: slovenianStrings, nativeName: "slovenščina", englishName: "Slovenian" });


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
//# sourceMappingURL=slovenian.js.map