/*!
 * surveyjs - Survey JavaScript library v1.12.26
 * Copyright (c) 2015-2025 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("norwegian", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["norwegian"] = factory(require("survey-core"));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/survey-core/src/localization/norwegian.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/survey-core/src/localization/norwegian.ts":
/*!************************************************************!*\
  !*** ./packages/survey-core/src/localization/norwegian.ts ***!
  \************************************************************/
/*! exports provided: norwegianSurveyStrings */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "norwegianSurveyStrings", function() { return norwegianSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var norwegianSurveyStrings = {
    pagePrevText: "Forrige",
    pageNextText: "Neste",
    completeText: "Fullfør",
    previewText: "Forhåndsvisning",
    editText: "Redigere",
    startSurveyText: "Start",
    otherItemText: "Annet (beskriv)",
    noneItemText: "Ingen",
    refuseItemText: "Nekter å svare",
    dontKnowItemText: "Vet ikke",
    selectAllItemText: "Velg alle",
    deselectAllItemText: "Fjern merket for alle",
    progressText: "Side {0} av {1}",
    indexText: "{0} av {1}",
    panelDynamicProgressText: "Ta opp {0} av {1}",
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    questionsProgressText: "Besvarte {0} / {1} spørsmål",
    emptySurvey: "Det er ingen synlig side eller spørsmål i undersøkelsen.",
    completingSurvey: "Takk for at du fullførte undersøkelsen!",
    completingSurveyBefore: "Våre data viser at du allerede har gjennomført denne undersøkelsen.",
    loadingSurvey: "Undersøkelsen laster...",
    placeholder: "Velg...",
    ratingOptionsCaption: "Velge...",
    value: "verdi",
    requiredError: "Vennligst svar på spørsmålet.",
    requiredErrorInPanel: "Vennligst svar på minst ett spørsmål.",
    requiredInAllRowsError: "Vennligst svar på spørsmål i alle rader.",
    eachRowUniqueError: "Hver rad må ha en unik verdi.",
    numericError: "Verdien skal være numerisk.",
    minError: "Verdien bør ikke være mindre enn {0}",
    maxError: "Verdien bør ikke være større enn {0}",
    textNoDigitsAllow: "Tall er ikke tillatt.",
    textMinLength: "Vennligst skriv inn minst {0} tegn.",
    textMaxLength: "Vennligst skriv inn mindre enn {0} tegn.",
    textMinMaxLength: "Vennligst skriv inn mer enn {0} og mindre enn {1} tegn.",
    minRowCountError: "Vennligst fyll inn minst {0} rader.",
    minSelectError: "Vennligst velg minst {0} varianter.",
    maxSelectError: "Vennligst ikke velg mer enn {0} varianter.",
    numericMinMax: "'{0}' bør være lik eller mer enn {1} og lik eller mindre enn {2}",
    numericMin: "'{0}' bør være lik eller mer enn {1}",
    numericMax: "'{0}' bør være lik eller mindre enn {1}",
    invalidEmail: "Vennligst skriv inn en gyldig e-post adresse.",
    invalidExpression: "Uttrykket: {0} skal returnere 'sant'.",
    urlRequestError: "Forespørselen returnerte feilen '{0}'. {1}",
    urlGetChoicesError: "Forespørselen returnerte tomme data, eller 'sti' -egenskapen er feil",
    exceedMaxSize: "Filstørrelsen bør ikke overstige {0}.",
    noUploadFilesHandler: "Filer kan ikke lastes opp. Legg til et behandlingsprogram for onUploadFiles-hendelsen.",
    otherRequiredError: "Vennligst skriv inn den andre verdien.",
    uploadingFile: "Filen din lastes opp. Vennligst vent noen sekunder og prøv igjen.",
    loadingFile: "Laster inn ...",
    chooseFile: "Velg fil (er) ...",
    noFileChosen: "Ingen fil valgt",
    filePlaceholder: "Dra og slipp en fil her, eller klikk på knappen nedenfor og velg en fil du vil laste opp.",
    confirmDelete: "Ønsker du å slette posten?",
    keyDuplicationError: "Denne verdien skal være unik.",
    addColumn: "Legg til kolonne",
    addRow: "Legg til rad",
    removeRow: "Fjern",
    emptyRowsText: "Det er ingen rader.",
    addPanel: "Legg til ny",
    removePanel: "Fjerne",
    showDetails: "Vis detaljer",
    hideDetails: "Skjul detaljer",
    choices_Item: "element",
    matrix_column: "Kolonne",
    matrix_row: "Rad",
    multipletext_itemname: "Tekst",
    savingData: "Resultatene lagres på serveren ...",
    savingDataError: "Det oppsto en feil, og vi kunne ikke lagre resultatene.",
    savingDataSuccess: "Resultatene ble lagret!",
    savingExceedSize: "Svaret ditt overstiger 64 kB. Reduser størrelsen på filen(e) din(e), og prøv på nytt, eller kontakt eieren av en spørreundersøkelse.",
    saveAgainButton: "Prøv igjen",
    timerMin: "min",
    timerSec: "sek",
    timerSpentAll: "Du har tilbrakt {0} på denne siden og {1} totalt.",
    timerSpentPage: "Du har tilbrakt {0} på denne siden.",
    timerSpentSurvey: "Du har tilbrakt {0} totalt.",
    timerLimitAll: "Du har tilbrakt {0} av {1} på denne siden og totalt {2} av {3}.",
    timerLimitPage: "Du har tilbrakt {0} av {1} på denne siden.",
    timerLimitSurvey: "Du har tilbrakt {0} av {1} totalt.",
    clearCaption: "Klar",
    signaturePlaceHolder: "Logg inn her",
    signaturePlaceHolderReadOnly: "Ingen signatur",
    chooseFileCaption: "Velg Fil",
    takePhotoCaption: "Ta bilde",
    photoPlaceholder: "Klikk på knappen nedenfor for å ta et bilde med kameraet.",
    fileOrPhotoPlaceholder: "Dra og slipp eller velg en fil for å laste opp eller ta et bilde med kameraet.",
    replaceFileCaption: "Erstatt fil",
    removeFileCaption: "Fjern denne filen",
    booleanCheckedLabel: "Ja",
    booleanUncheckedLabel: "Nei",
    confirmRemoveFile: "Er du sikker på at du vil fjerne denne filen: {0}?",
    confirmRemoveAllFiles: "Er du sikker på at du vil fjerne alle filene?",
    questionTitlePatternText: "Spørsmålstittel",
    modalCancelButtonText: "Annullere",
    modalApplyButtonText: "Bruke",
    filterStringPlaceholder: "Skriv for å søke ...",
    emptyMessage: "Ingen data å vise",
    noEntriesText: "Det er ingen oppføringer ennå.\nKlikk på knappen nedenfor for å legge til en ny oppføring.",
    noEntriesReadonlyText: "Det er ingen oppføringer.",
    tabTitlePlaceholder: "Nytt panel",
    more: "Mer",
    tagboxDoneButtonCaption: "OK",
    selectToRankEmptyRankedAreaText: "Alle valg er rangert",
    selectToRankEmptyUnrankedAreaText: "Dra og slipp valg her for å rangere dem",
    ok: "OK",
    cancel: "Annullere"
};
Object(survey_core__WEBPACK_IMPORTED_MODULE_0__["setupLocale"])({ localeCode: "no", strings: norwegianSurveyStrings, nativeName: "norsk", englishName: "Norwegian" });
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} av {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panel {panelIndex}"
// ratingOptionsCaption: "Select..." => "Velge..."
// minError: "The value should not be less than {0}" => "Verdien bør ikke være mindre enn {0}"
// maxError: "The value should not be greater than {0}" => "Verdien bør ikke være større enn {0}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Dra og slipp en fil her, eller klikk på knappen nedenfor og velg en fil du vil laste opp."
// emptyRowsText: "There are no rows." => "Det er ingen rader."
// multipletext_itemname: "text" => "Tekst"
// signaturePlaceHolder: "Sign here" => "Logg inn her"
// modalCancelButtonText: "Cancel" => "Annullere"
// modalApplyButtonText: "Apply" => "Bruke"
// filterStringPlaceholder: "Type to search..." => "Skriv for å søke ..."
// emptyMessage: "No data to display" => "Ingen data å vise"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Det er ingen oppføringer ennå.\nKlikk på knappen nedenfor for å legge til en ny oppføring."
// noEntriesReadonlyText: "There are no entries." => "Det er ingen oppføringer."
// more: "More" => "Mer"
// tagboxDoneButtonCaption: "OK" => "OK"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Alle valg er rangert"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Dra og slipp valg her for å rangere dem"// takePhotoCaption: "Take Photo" => "Ta bilde"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Klikk på knappen nedenfor for å ta et bilde med kameraet."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Dra og slipp eller velg en fil for å laste opp eller ta et bilde med kameraet."
// replaceFileCaption: "Replace file" => "Erstatt fil"// eachRowUniqueError: "Each row must have a unique value." => "Hver rad må ha en unik verdi."
// noUploadFilesHandler: "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event." => "Filer kan ikke lastes opp. Legg til et behandlingsprogram for onUploadFiles-hendelsen."
// showDetails: "Show Details" => "Vis detaljer"
// hideDetails: "Hide Details" => "Skjul detaljer"
// ok: "OK" => "OK"
// cancel: "Cancel" => "Annullere"
// refuseItemText: "Refuse to answer" => "Nekter å svare"
// dontKnowItemText: "Don't know" => "Vet ikke"// savingExceedSize: "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact a survey owner." => "Svaret ditt overstiger 64 kB. Reduser størrelsen på filen(e) din(e), og prøv på nytt, eller kontakt eieren av en spørreundersøkelse."
// signaturePlaceHolderReadOnly: "No signature" => "Ingen signatur"// tabTitlePlaceholder: "New Panel" => "Nytt panel"// deselectAllItemText: "Deselect all" => "Fjern merket for alle"
// textNoDigitsAllow: "Numbers are not allowed." => "Tall er ikke tillatt."


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
//# sourceMappingURL=norwegian.js.map