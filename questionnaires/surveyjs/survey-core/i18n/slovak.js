/*!
 * surveyjs - Survey JavaScript library v1.12.26
 * Copyright (c) 2015-2025 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("slovak", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["slovak"] = factory(require("survey-core"));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/survey-core/src/localization/slovak.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/survey-core/src/localization/slovak.ts":
/*!*********************************************************!*\
  !*** ./packages/survey-core/src/localization/slovak.ts ***!
  \*********************************************************/
/*! exports provided: slovakSurveyStrings */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slovakSurveyStrings", function() { return slovakSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var slovakSurveyStrings = {
    pagePrevText: "Predchádzajúca",
    pageNextText: "Ďalej",
    completeText: "Dokončené",
    previewText: "Ukážka",
    editText: "Upraviť",
    startSurveyText: "Spustiť",
    otherItemText: "Iné (opíšte)",
    noneItemText: "Žiadne",
    refuseItemText: "Odmietnuť odpovedať",
    dontKnowItemText: "Neviem",
    selectAllItemText: "Vybrať všetky",
    deselectAllItemText: "Zrušte výber všetkých",
    progressText: "Strana {0} z {1}",
    indexText: "{0} {1}",
    panelDynamicProgressText: "Záznam {0} z {1}",
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    questionsProgressText: "Zodpovedané otázky {0}/{1}",
    emptySurvey: "V prieskume nie je žiadna vidieľná stránka ani otázka.",
    completingSurvey: "Ďakujeme vám za dokončenie prieskumu.",
    completingSurveyBefore: "Podľa našich záznamov ste už tento prieskum dokončili.",
    loadingSurvey: "Načítanie prieskumu...",
    placeholder: "Vybrať...",
    ratingOptionsCaption: "Vybrať...",
    value: "hodnota",
    requiredError: "Požaduje sa odozva.",
    requiredErrorInPanel: "Požaduje sa odozva: zodpovedajte aspoň jednu otázku.",
    requiredInAllRowsError: "Požaduje sa odozva: zodpovedajte otázky vo všetkých riadkoch.",
    eachRowUniqueError: "Každý riadok musí mať jedinečnú hodnotu.",
    numericError: "Hodnota má byť číselná.",
    minError: "Hodnota nemá byť nižšia než {0}",
    maxError: "Hodnota nemá byť vyššia než {0}",
    textNoDigitsAllow: "Čísla nie sú povolené.",
    textMinLength: "Zadajte aspoň {0} znak(-y/-ov).",
    textMaxLength: "Nezadávajte viac než {0} znak(-y/-ov).",
    textMinMaxLength: "Zadajte aspoň {0} a nie viac než {1} znaky(-ov).",
    minRowCountError: "Vyplňte aspoň {0} riadok(-y/-ov).",
    minSelectError: "Vyberte aspoň {0} variant(-y/-ov).",
    maxSelectError: "Nevyberajte viac než {0} variant(-y/-ov).",
    numericMinMax: "„{0}“ má byť minimálne {1} a maximálne {2}",
    numericMin: "„{0}“ má byť minimálne {1}",
    numericMax: "„{0}“ má byť maximálne {1}",
    invalidEmail: "Zadajte platnú e-mailovú adresu.",
    invalidExpression: "Výraz: {0} má vrátiť hodnotu „true“.",
    urlRequestError: "Požiadavky vrátila hodnotu „{0}“. {1}",
    urlGetChoicesError: "Požiadavka vrátila prázdne údaje alebo je vlastnosť „cesta“ nesprávna",
    exceedMaxSize: "Veľkosť súboru nemá prekročiť {0}.",
    noUploadFilesHandler: "Súbory nie je možné nahrať. Pridajte obslužný program pre udalosť \"onUploadFiles\".",
    otherRequiredError: "Požaduje sa odozva: zadajte inú hodnotu.",
    uploadingFile: "Súbor sa odovzdáva. Počkajte niekoľko sekúnd a skúste to znova.",
    loadingFile: "Načítanie...",
    chooseFile: "Vyberte súbor(-y)...",
    noFileChosen: "Žiadny vybratý súbor",
    filePlaceholder: "Presuňte súbor sem alebo kliknite na nasledujúce tlačidlo a načítajte súbor.",
    confirmDelete: "Chcete záznam odstrániť?",
    keyDuplicationError: "Táto hodnota má byť jedinečná.",
    addColumn: "Pridať stĺpec",
    addRow: "Pridať riadok",
    removeRow: "Odstrániť",
    emptyRowsText: "K dispozícii nie sú žiadne riadky.",
    addPanel: "Pridať nové",
    removePanel: "Odstrániť",
    showDetails: "Zobraziť podrobnosti",
    hideDetails: "Skryť podrobnosti",
    choices_Item: "položka",
    matrix_column: "Stĺpec",
    matrix_row: "Riadok",
    multipletext_itemname: "text",
    savingData: "Výsledky sa ukladajú na server...",
    savingDataError: "V dôsledku chyby sa nepodarilo výsledky uložiť.",
    savingDataSuccess: "Výsledky sa úspešne uložili.",
    savingExceedSize: "Vaša odpoveď presahuje 64 kB. Zmenšite veľkosť svojich súborov a skúste to znova alebo kontaktujte vlastníka prieskumu.",
    saveAgainButton: "Skúste to znova",
    timerMin: "min",
    timerSec: "s",
    timerSpentAll: "Na tejto stránke ste strávili {0} a celkovo {1}.",
    timerSpentPage: "Na tejto stránke ste strávili {0}.",
    timerSpentSurvey: "Celkovo ste strávili {0}.",
    timerLimitAll: "Na tejto stránke ste strávili {0} z {1} a celkovo {2} z {3}.",
    timerLimitPage: "Na tejto stránke ste strávili {0} z {1}.",
    timerLimitSurvey: "Celkovo ste strávili {0} z {1}.",
    clearCaption: "Vymazať",
    signaturePlaceHolder: "Podpísať tu",
    signaturePlaceHolderReadOnly: "Bez podpisu",
    chooseFileCaption: "Vybrať súbor",
    takePhotoCaption: "Odfotiť",
    photoPlaceholder: "Kliknutím na tlačidlo nižšie nasnímate fotografiu pomocou fotoaparátu.",
    fileOrPhotoPlaceholder: "Presuňte myšou alebo vyberte súbor, ktorý chcete nahrať alebo nasnímať fotografiu pomocou fotoaparátu.",
    replaceFileCaption: "Nahradenie súboru",
    removeFileCaption: "Odstrániť tento súbor",
    booleanCheckedLabel: "Áno",
    booleanUncheckedLabel: "Nie",
    confirmRemoveFile: "Naozaj chcete odstrániť tento súbor: {0}?",
    confirmRemoveAllFiles: "Naozaj chcete odstrániť všetky súbory?",
    questionTitlePatternText: "Titul otázky",
    modalCancelButtonText: "Zrušiť",
    modalApplyButtonText: "Použiť",
    filterStringPlaceholder: "Vyhľadávanie písaním...",
    emptyMessage: "Žiadne údaje na zobrazenie",
    noEntriesText: "K dispozícii ešte nie sú žiadne zadania.\nKliknutím na nasledujúce tlačidlo pridajte nové zadanie.",
    noEntriesReadonlyText: "Nie sú k dispozícii žiadne záznamy.",
    tabTitlePlaceholder: "Nový panel",
    more: "Viacej",
    tagboxDoneButtonCaption: "OK",
    selectToRankEmptyRankedAreaText: "Všetky možnosti sú zoradené",
    selectToRankEmptyUnrankedAreaText: "Presuňte sem voľby, aby ste ich zoradili",
    ok: "OK",
    cancel: "Zrušiť"
};
Object(survey_core__WEBPACK_IMPORTED_MODULE_0__["setupLocale"])({ localeCode: "sk", strings: slovakSurveyStrings, nativeName: "slovak", englishName: "Slovak" });
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panel {panelIndex}"
// ratingOptionsCaption: "Select..." => "Vybrať..."
// emptyMessage: "No data to display" => "Žiadne údaje na zobrazenie"
// noEntriesReadonlyText: "There are no entries." => "Nie sú k dispozícii žiadne záznamy."
// more: "More" => "Viacej"
// tagboxDoneButtonCaption: "OK" => "OK"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Všetky možnosti sú zoradené"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Presuňte sem voľby, aby ste ich zoradili"// takePhotoCaption: "Take Photo" => "Odfotiť"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Kliknutím na tlačidlo nižšie nasnímate fotografiu pomocou fotoaparátu."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Presuňte myšou alebo vyberte súbor, ktorý chcete nahrať alebo nasnímať fotografiu pomocou fotoaparátu."
// replaceFileCaption: "Replace file" => "Nahradenie súboru"// eachRowUniqueError: "Each row must have a unique value." => "Každý riadok musí mať jedinečnú hodnotu."
// noUploadFilesHandler: "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event." => "Súbory nie je možné nahrať. Pridajte obslužný program pre udalosť \"onUploadFiles\"."
// showDetails: "Show Details" => "Zobraziť podrobnosti"
// hideDetails: "Hide Details" => "Skryť podrobnosti"
// ok: "OK" => "OK"
// cancel: "Cancel" => "Zrušiť"
// refuseItemText: "Refuse to answer" => "Odmietnuť odpovedať"
// dontKnowItemText: "Don't know" => "Neviem"// savingExceedSize: "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact a survey owner." => "Vaša odpoveď presahuje 64 kB. Zmenšite veľkosť svojich súborov a skúste to znova alebo kontaktujte vlastníka prieskumu."
// signaturePlaceHolderReadOnly: "No signature" => "Bez podpisu"// tabTitlePlaceholder: "New Panel" => "Nový panel"// deselectAllItemText: "Deselect all" => "Zrušte výber všetkých"
// textNoDigitsAllow: "Numbers are not allowed." => "Čísla nie sú povolené."


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
//# sourceMappingURL=slovak.js.map