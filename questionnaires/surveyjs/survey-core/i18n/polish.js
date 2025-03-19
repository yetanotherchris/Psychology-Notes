/*!
 * surveyjs - Survey JavaScript library v1.12.26
 * Copyright (c) 2015-2025 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("polish", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["polish"] = factory(require("survey-core"));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/survey-core/src/localization/polish.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/survey-core/src/localization/polish.ts":
/*!*********************************************************!*\
  !*** ./packages/survey-core/src/localization/polish.ts ***!
  \*********************************************************/
/*! exports provided: polishSurveyStrings */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polishSurveyStrings", function() { return polishSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var polishSurveyStrings = {
    pagePrevText: "Wstecz",
    pageNextText: "Dalej",
    completeText: "Gotowe",
    previewText: "Premiera",
    editText: "Edycja",
    startSurveyText: "Start",
    otherItemText: "Inna odpowiedź (wpisz)",
    noneItemText: "Brak",
    refuseItemText: "Odmów odpowiedzi",
    dontKnowItemText: "Nie wiem",
    selectAllItemText: "Wybierz wszystkie",
    deselectAllItemText: "Odznacz wszystko",
    progressText: "Strona {0} z {1}",
    indexText: "{0} od {1}",
    panelDynamicProgressText: "Zapis {0} z {1}",
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    questionsProgressText: "Odpowiedzi na {0}/{1} pytania",
    emptySurvey: "Nie ma widocznych pytań.",
    completingSurvey: "Dziękujemy za wypełnienie ankiety!",
    completingSurveyBefore: "Z naszych zapisów wynika, że wypełniłeś już tę ankietę.",
    loadingSurvey: "Trwa wczytywanie ankiety...",
    placeholder: "Wybierz...",
    ratingOptionsCaption: "Kliknij tutaj, aby ocenić...",
    value: "Wartość",
    requiredError: "Proszę odpowiedzieć na to pytanie.",
    requiredErrorInPanel: "Proszę odpowiedzieć na co najmniej jedno pytanie.",
    requiredInAllRowsError: "Proszę odpowiedzieć na wszystkie pytania.",
    eachRowUniqueError: "Każdy wiersz musi mieć unikatową wartość.",
    numericError: "W tym polu można wpisać tylko liczby.",
    minError: "Wartość nie powinna być mniejsza niż {0}",
    maxError: "Wartość nie powinna być większa niż {0}",
    textNoDigitsAllow: "Liczby są niedozwolone.",
    textMinLength: "Proszę wpisać co najmniej {0} znaków.",
    textMaxLength: "Proszę wpisać mniej niż {0} znaków.",
    textMinMaxLength: "Proszę wpisać więcej niż {0} i mniej niż {1} znaków.",
    minRowCountError: "Proszę uzupełnić przynajmniej {0} wierszy.",
    minSelectError: "Proszę wybrać co najmniej {0} pozycji.",
    maxSelectError: "Proszę wybrać nie więcej niż {0} pozycji.",
    numericMinMax: "Odpowiedź '{0}' powinna być większa lub równa {1} oraz mniejsza lub równa {2}",
    numericMin: "Odpowiedź '{0}' powinna być większa lub równa {1}",
    numericMax: "Odpowiedź '{0}' powinna być mniejsza lub równa {1}",
    invalidEmail: "Proszę podać prawidłowy adres email.",
    invalidExpression: "Wyrażenie: {0} powinno wracać 'prawdziwe'.",
    urlRequestError: "Żądanie zwróciło błąd '{0}'. {1}",
    urlGetChoicesError: "Żądanie nie zwróciło danych albo ścieżka jest nieprawidłowa",
    exceedMaxSize: "Rozmiar przesłanego pliku nie może przekraczać {0}.",
    noUploadFilesHandler: "Nie można przesłać plików. Dodaj moduł obsługi zdarzenia \"onUploadFiles\".",
    otherRequiredError: "Proszę podać inną odpowiedź.",
    uploadingFile: "Trwa przenoszenie Twojego pliku, proszę spróbować ponownie za kilka sekund.",
    loadingFile: "Ładowanie...",
    chooseFile: "Wybierz plik(i)...",
    noFileChosen: "Nie wybrano żadnego pliku",
    filePlaceholder: "Upuść plik tutaj lub kliknij przycisk poniżej, aby załadować plik.",
    confirmDelete: "Chcesz skasować nagranie?",
    keyDuplicationError: "Ta wartość powinna być wyjątkowa.",
    addColumn: "Dodaj kolumnę",
    addRow: "Dodaj wiersz",
    removeRow: "Usuń",
    emptyRowsText: "Nie ma rzędów.",
    addPanel: "Dodaj panel",
    removePanel: "Usuń",
    showDetails: "Pokaż szczegóły",
    hideDetails: "Ukryj szczegóły",
    choices_Item: "element",
    matrix_column: "Kolumna",
    matrix_row: "Wiersz",
    multipletext_itemname: "tekst",
    savingData: "Zapisuję wyniki ankiety na serwerze...",
    savingDataError: "Wystąpił błąd i wyniki nie mogły zostać zapisane.",
    savingDataSuccess: "Wyniki zostały poprawnie zapisane!",
    savingExceedSize: "Twoja odpowiedź przekracza 64 KB. Zmniejsz rozmiar plików i spróbuj ponownie lub skontaktuj się z właścicielem ankiety.",
    saveAgainButton: "Spróbuj ponownie",
    timerMin: "min",
    timerSec: "sek",
    timerSpentAll: "Spędziłeś {0} na tej stronie a w sumie {1}.",
    timerSpentPage: "Spędziłeś {0} na tej stronie.",
    timerSpentSurvey: "Spędziłeś w sumie {0}.",
    timerLimitAll: "Spędziłeś {0} z {1} na tej stronie a w sumie {2} z {3}.",
    timerLimitPage: "Spędziłeś {0} z {1} na tej stronie",
    timerLimitSurvey: "Spędziłeś {0} z {1}.",
    clearCaption: "Wyczyść",
    signaturePlaceHolder: "Podpisz tutaj",
    signaturePlaceHolderReadOnly: "Brak podpisu",
    chooseFileCaption: "Wybierz plik",
    takePhotoCaption: "Zrób zdjęcie",
    photoPlaceholder: "Kliknij przycisk poniżej, aby zrobić zdjęcie aparatem.",
    fileOrPhotoPlaceholder: "Przeciągnij i upuść lub wybierz plik, który chcesz przesłać lub zrobić zdjęcie za pomocą aparatu.",
    replaceFileCaption: "Zastąp plik",
    removeFileCaption: "Usuń ten plik",
    booleanCheckedLabel: "Tak",
    booleanUncheckedLabel: "Nie",
    confirmRemoveFile: "Jesteś pewien, że chcesz usunąć ten plik: {0}?",
    confirmRemoveAllFiles: "Jesteś pewien, że chcesz usunąć wszystkie pliki?",
    questionTitlePatternText: "Tytuł pytania",
    modalCancelButtonText: "Anulować",
    modalApplyButtonText: "Zastosować",
    filterStringPlaceholder: "Wpisz aby wyszukać...",
    emptyMessage: "Brak danych do wyświetlenia",
    noEntriesText: "Nie ma jeszcze wpisów.\nKliknij przycisk poniżej, aby dodać nowy wpis.",
    noEntriesReadonlyText: "Brak wpisów.",
    tabTitlePlaceholder: "Nowy panel",
    more: "Więcej",
    tagboxDoneButtonCaption: "OK",
    selectToRankEmptyRankedAreaText: "Wszystkie wybory są uszeregowane",
    selectToRankEmptyUnrankedAreaText: "Przeciągnij i upuść tutaj wybory, aby je uszeregować",
    ok: "OK",
    cancel: "Anuluj"
};
Object(survey_core__WEBPACK_IMPORTED_MODULE_0__["setupLocale"])({ localeCode: "pl", strings: polishSurveyStrings, nativeName: "polski", englishName: "Polish" });
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panel {panelIndex}"
// emptyMessage: "No data to display" => "Brak danych do wyświetlenia"
// noEntriesReadonlyText: "There are no entries." => "Brak wpisów."
// more: "More" => "Więcej"
// tagboxDoneButtonCaption: "OK" => "OK"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Wszystkie wybory są uszeregowane"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Przeciągnij i upuść tutaj wybory, aby je uszeregować"// takePhotoCaption: "Take Photo" => "Zrób zdjęcie"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Kliknij przycisk poniżej, aby zrobić zdjęcie aparatem."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Przeciągnij i upuść lub wybierz plik, który chcesz przesłać lub zrobić zdjęcie za pomocą aparatu."
// replaceFileCaption: "Replace file" => "Zastąp plik"// eachRowUniqueError: "Each row must have a unique value." => "Każdy wiersz musi mieć unikatową wartość."
// noUploadFilesHandler: "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event." => "Nie można przesłać plików. Dodaj moduł obsługi zdarzenia \"onUploadFiles\"."
// showDetails: "Show Details" => "Pokaż szczegóły"
// hideDetails: "Hide Details" => "Ukryj szczegóły"
// ok: "OK" => "OK"
// cancel: "Cancel" => "Anuluj"
// refuseItemText: "Refuse to answer" => "Odmów odpowiedzi"
// dontKnowItemText: "Don't know" => "Nie wiem"// savingExceedSize: "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact a survey owner." => "Twoja odpowiedź przekracza 64 KB. Zmniejsz rozmiar plików i spróbuj ponownie lub skontaktuj się z właścicielem ankiety."
// signaturePlaceHolderReadOnly: "No signature" => "Brak podpisu"// tabTitlePlaceholder: "New Panel" => "Nowy panel"// deselectAllItemText: "Deselect all" => "Odznacz wszystko"
// textNoDigitsAllow: "Numbers are not allowed." => "Liczby są niedozwolone."


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
//# sourceMappingURL=polish.js.map