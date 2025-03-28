/*!
 * surveyjs - Survey JavaScript library v1.12.26
 * Copyright (c) 2015-2025 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("czech", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["czech"] = factory(require("survey-core"));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/survey-core/src/localization/czech.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/survey-core/src/localization/czech.ts":
/*!********************************************************!*\
  !*** ./packages/survey-core/src/localization/czech.ts ***!
  \********************************************************/
/*! exports provided: czechSurveyStrings */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "czechSurveyStrings", function() { return czechSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var czechSurveyStrings = {
    pagePrevText: "Předchozí",
    pageNextText: "Další",
    completeText: "Dokončit",
    previewText: "Náhled",
    editText: "Upravit",
    startSurveyText: "Začít",
    otherItemText: "Jiná odpověď (napište)",
    noneItemText: "Žádný",
    refuseItemText: "Odmítnout odpovědět",
    dontKnowItemText: "Nevím",
    selectAllItemText: "Vybrat vše",
    deselectAllItemText: "Zrušit výběr všech",
    progressText: "Strana {0} z {1}",
    indexText: "{0} z {1}",
    panelDynamicProgressText: "Záznam {0} z {1}",
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    questionsProgressText: "Zodpovězené otázky: {0} / {1}",
    emptySurvey: "Průzkum neobsahuje žádné otázky.",
    completingSurvey: "Děkujeme za vyplnění průzkumu!",
    completingSurveyBefore: "Naše záznamy ukazují, že jste tento průzkum již dokončil/a.",
    loadingSurvey: "Probíhá načítání průzkumu...",
    placeholder: "Vyberte...",
    ratingOptionsCaption: "Vybrat...",
    value: "hodnota",
    requiredError: "Odpovězte prosím na otázku.",
    requiredErrorInPanel: "Odpovězte prosím alespoň jednu otázku.",
    requiredInAllRowsError: "Odpovězte prosím na všechny otázky.",
    eachRowUniqueError: "Každý řádek musí mít jedinečnou hodnotu.",
    numericError: "V tomto poli lze zadat pouze čísla.",
    minError: "Hodnota by neměla být menší než {0}",
    maxError: "Hodnota by neměla být větší než {0}",
    textNoDigitsAllow: "Čísla nejsou povolena.",
    textMinLength: "Zadejte prosím alespoň {0} znaků.",
    textMaxLength: "Zadejte prosím méně než {0} znaků.",
    textMinMaxLength: "Zadejte prosím více než {0} a méně než {1} znaků.",
    minRowCountError: "Vyplňte prosím alespoň {0} řádků.",
    minSelectError: "Vyberte prosím alespoň {0} varianty.",
    maxSelectError: "Nevybírejte prosím více než {0} variant.",
    numericMinMax: "Odpověď '{0}' by mělo být větší nebo rovno {1} a menší nebo rovno {2}",
    numericMin: "Odpověď '{0}' by mělo být větší nebo rovno {1}",
    numericMax: "Odpověď '{0}' by mělo být menší nebo rovno {1}",
    invalidEmail: "Zadejte prosím platnou e-mailovou adresu.",
    invalidExpression: "Výraz: {0} by měl vrátit hodnotu „true“.",
    urlRequestError: "Požadavek vrátil chybu '{0}'. {1}",
    urlGetChoicesError: "Požadavek nevrátil data nebo je neplatná vlastnost 'path'",
    exceedMaxSize: "Velikost souboru by neměla být větší než {0}.",
    noUploadFilesHandler: "Soubory nelze nahrát. Přidejte obslužnou rutinu pro událost 'onUploadFiles'.",
    otherRequiredError: "Zadejte prosím jinou hodnotu.",
    uploadingFile: "Váš soubor se nahrává. Zkuste to prosím za několik sekund.",
    loadingFile: "Načítání...",
    chooseFile: "Vyberte soubory...",
    noFileChosen: "Není zvolený žádný soubor",
    filePlaceholder: "Přetáhněte sem soubor nebo klikněte na tlačítko níže a vyberte soubor, který chcete nahrát.",
    confirmDelete: "Chcete záznam smazat?",
    keyDuplicationError: "Tato hodnota by měla být unikátní.",
    addColumn: "Přidat sloupec",
    addRow: "Přidat řádek",
    removeRow: "Odstranit",
    emptyRowsText: "Neexistují žádné řádky.",
    addPanel: "Přidat nový",
    removePanel: "Odstranit",
    showDetails: "Zobrazit podrobnosti",
    hideDetails: "Skrýt podrobnosti",
    choices_Item: "položka",
    matrix_column: "Sloupec",
    matrix_row: "Řádek",
    multipletext_itemname: "Text",
    savingData: "Výsledky se ukládají na server...",
    savingDataError: "Došlo k chybě a výsledky jsme nemohli uložit.",
    savingDataSuccess: "Výsledky byly úspěšně uloženy!",
    savingExceedSize: "Vaše odpověď překračuje 64 kB. Zmenšete prosím velikost svých souborů a zkuste to znovu nebo kontaktujte vlastníka průzkumu.",
    saveAgainButton: "Zkuste to znovu",
    timerMin: "min",
    timerSec: "sek",
    timerSpentAll: "Na této stránce jste strávil/a celkem {0} z {1}.",
    timerSpentPage: "Na této stránce jste strávil/a {0}.",
    timerSpentSurvey: "Celkem jste strávil/a {0}.",
    timerLimitAll: "Na této stránce jste strávil/a {0} z {1} a celkem {2} z {3}.",
    timerLimitPage: "Na této stránce jste strávil/a {0} z {1}.",
    timerLimitSurvey: "Celkově jste strávil/a {0} z {1}.",
    clearCaption: "Vymazat",
    signaturePlaceHolder: "Podepište se zde",
    signaturePlaceHolderReadOnly: "Bez podpisu",
    chooseFileCaption: "Vyberte soubor",
    takePhotoCaption: "Pořídit fotografii",
    photoPlaceholder: "Kliknutím na tlačítko níže pořídíte fotografii pomocí fotoaparátu.",
    fileOrPhotoPlaceholder: "Přetáhněte nebo vyberte soubor, který chcete nahrát nebo pořiďte fotografii pomocí fotoaparátu.",
    replaceFileCaption: "Nahradit soubor",
    removeFileCaption: "Odeberte tento soubor",
    booleanCheckedLabel: "Ano",
    booleanUncheckedLabel: "Ne",
    confirmRemoveFile: "Opravdu chcete odebrat tento soubor: {0}?",
    confirmRemoveAllFiles: "Opravdu chcete odstranit všechny soubory?",
    questionTitlePatternText: "Název otázky",
    modalCancelButtonText: "Zrušit",
    modalApplyButtonText: "Použít",
    filterStringPlaceholder: "Zadejte hledaný text...",
    emptyMessage: "Žádná data k zobrazení",
    noEntriesText: "Zatím nejsou žádné záznamy.\nKliknutím na tlačítko níže přidáte novou položku.",
    noEntriesReadonlyText: "Nejsou zde žádné položky.",
    tabTitlePlaceholder: "Nový panel",
    more: "Více",
    tagboxDoneButtonCaption: "OK",
    selectToRankEmptyRankedAreaText: "Všechny možnosti jsou seřazeny",
    selectToRankEmptyUnrankedAreaText: "Přetáhněte volby zde a seřaďte je",
    ok: "OK",
    cancel: "Zrušit"
};
Object(survey_core__WEBPACK_IMPORTED_MODULE_0__["setupLocale"])({ localeCode: "cs", strings: czechSurveyStrings, nativeName: "čeština", englishName: "Czech" });
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} z {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panel {panelIndex}"
// ratingOptionsCaption: "Select..." => "Vybrat..."
// minError: "The value should not be less than {0}" => "Hodnota by neměla být menší než {0}"
// maxError: "The value should not be greater than {0}" => "Hodnota by neměla být větší než {0}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Přetáhněte sem soubor nebo klikněte na tlačítko níže a vyberte soubor, který chcete nahrát."
// emptyRowsText: "There are no rows." => "Neexistují žádné řádky."
// multipletext_itemname: "text" => "Text"
// signaturePlaceHolder: "Sign here" => "Podepište se zde"
// modalCancelButtonText: "Cancel" => "Zrušit"
// modalApplyButtonText: "Apply" => "Použít"
// filterStringPlaceholder: "Type to search..." => "Zadejte hledaný text..."
// emptyMessage: "No data to display" => "Žádná data k zobrazení"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Zatím nejsou žádné záznamy.\nKliknutím na tlačítko níže přidáte novou položku."
// noEntriesReadonlyText: "There are no entries." => "Nejsou zde žádné položky."
// more: "More" => "Více"
// tagboxDoneButtonCaption: "OK" => "OK"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Všechny možnosti jsou seřazeny"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Přetáhněte volby zde a seřaďte je"// takePhotoCaption: "Take Photo" => "Pořídit fotografii"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Kliknutím na tlačítko níže pořídíte fotografii pomocí fotoaparátu."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Přetáhněte nebo vyberte soubor, který chcete nahrát nebo pořiďte fotografii pomocí fotoaparátu."
// replaceFileCaption: "Replace file" => "Nahradit soubor"// eachRowUniqueError: "Each row must have a unique value." => "Každý řádek musí mít jedinečnou hodnotu."
// noUploadFilesHandler: "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event." => "Soubory nelze nahrát. Přidejte obslužnou rutinu pro událost 'onUploadFiles'."
// showDetails: "Show Details" => "Zobrazit podrobnosti"
// hideDetails: "Hide Details" => "Skrýt podrobnosti"
// ok: "OK" => "OK"
// cancel: "Cancel" => "Zrušit"
// refuseItemText: "Refuse to answer" => "Odmítnout odpovědět"
// dontKnowItemText: "Don't know" => "Nevím"// savingExceedSize: "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact a survey owner." => "Vaše odpověď překračuje 64 kB. Zmenšete prosím velikost svých souborů a zkuste to znovu nebo kontaktujte vlastníka průzkumu."
// signaturePlaceHolderReadOnly: "No signature" => "Bez podpisu"// tabTitlePlaceholder: "New Panel" => "Nový panel"// deselectAllItemText: "Deselect all" => "Zrušit výběr všech"
// textNoDigitsAllow: "Numbers are not allowed." => "Čísla nejsou povolena."


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
//# sourceMappingURL=czech.js.map