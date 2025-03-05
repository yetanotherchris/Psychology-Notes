/*!
 * surveyjs - Survey JavaScript library v1.12.26
 * Copyright (c) 2015-2025 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("tajik", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["tajik"] = factory(require("survey-core"));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/survey-core/src/localization/tajik.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/survey-core/src/localization/tajik.ts":
/*!********************************************************!*\
  !*** ./packages/survey-core/src/localization/tajik.ts ***!
  \********************************************************/
/*! exports provided: tajikSurveyStrings */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tajikSurveyStrings", function() { return tajikSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);
// This dictionary contains 25 untranslated or inherited localization strings.
// These strings are commented out. Uncomment and edit them if you want to add your translations.

var tajikSurveyStrings = {
    pagePrevText: "Бозгашт",
    pageNextText: "Оянда",
    completeText: "Иҷро шуд",
    // previewText: "Preview",
    // editText: "Edit",
    startSurveyText: "Оғоз",
    otherItemText: "Дигар (лутфан тавсиф кунед)",
    noneItemText: "Не",
    selectAllItemText: "Ҳамаро интихоб кардан",
    progressText: "Саҳифаи {0} аз {1}",
    // indexText: "{0} of {1}",
    // panelDynamicProgressText: "{0} of {1}",
    // questionsProgressText: "Answered {0}/{1} questions",
    emptySurvey: "Ягон савол вуҷуд надорад.",
    completingSurvey: "Ташаккур барои пур кардани саволнома!",
    completingSurveyBefore: "Шумо аллакай ин пурсишро анҷом додаед.",
    loadingSurvey: "Боргирӣ аз сервер...",
    placeholder: "Интихоб кардан...",
    // ratingOptionsCaption: "Select...",
    value: "қиммат",
    requiredError: "Илтимос, ба савол ҷавоб диҳед.",
    requiredErrorInPanel: "Илтимос, ақалан ба як савол ҷавоб диҳед.",
    requiredInAllRowsError: "Илтимос, ба ҳамаи саволҳо дар ҳамаи сатрҳо ҷавоб диҳед.",
    numericError: "Ҷавоб бояд рақам бошад.",
    // minError: "The value should not be less than {0}",
    // maxError: "The value should not be greater than {0}",
    textMinLength: "Илтимос, аз {0} зиёдтар рамз ворид кунед.",
    textMaxLength: "Илтимос, аз {0} камтар рамз ворид кунед.",
    textMinMaxLength: "Илтимос, аз {0} зиёдтар ва аз {1} камтар рамз ворид кунед.",
    minRowCountError: "Илтимос, на камтар аз {0} сатр пур кунед.",
    minSelectError: "Илтимос, ақалан {0} вариант интихоб кунед.",
    maxSelectError: "Илтимос, на зиёдтар аз {0} вариант интихоб кунед.",
    numericMinMax: "'{0}' бояд на кам аз {1} ва на бисёр аз {2} бошад",
    numericMin: "'{0}' бояд на кам аз {1} бошад",
    numericMax: "'{0}' бояд на зиёд аз {1} бошад",
    invalidEmail: "Илтимос, почтаи электронии воқеиро ворид кунед.",
    invalidExpression: "Ифодаи {0} бояд 'true' баргардонад.",
    urlRequestError: "Дархост хатогӣ бозгардонд '{0}'. {1}",
    urlGetChoicesError: "Ҷавоб ба дархост холӣ омад ё хосияти 'path' нодуруст муайян карда шудааст",
    exceedMaxSize: "Андозаи файл бояд на калон аз {0} бошад.",
    otherRequiredError: "Илтимос, ба майдони 'Дигар' додаҳоро ворид кунед",
    uploadingFile: "Файли шумо бор шуда истодааст. Якчанд сония интизор шавед ва бори дигар кӯшиш кунед.",
    loadingFile: "Боркунӣ...",
    chooseFile: "Файл(ҳо)-ро интихоб кунед...",
    // noFileChosen: "No file chosen",
    // filePlaceholder: "Drop a file here or click the button below to load the file.",
    confirmDelete: "Шумо мутмаин ҳастед, ки мехоҳед воридро тоза кунед?",
    keyDuplicationError: "Ин арзиш бояд беназир бошад.",
    addColumn: "Иловаи сутун",
    addRow: "Иловаи сатр",
    removeRow: "Нест кардан",
    // emptyRowsText: "There are no rows.",
    addPanel: "Илова кардан",
    removePanel: "Нест кардан",
    choices_Item: "Вариант",
    matrix_column: "Сутун",
    matrix_row: "Сатр",
    // multipletext_itemname: "text",
    savingData: "Натиҷа ба сервер сабт шуда истодаанд...",
    savingDataError: "Хатогӣ ба амал омад, натиҷа сабт нашуд.",
    savingDataSuccess: "Натиҷа бомуваффакият сабт шуд!",
    saveAgainButton: "Бори дигар кӯшиш карданд",
    timerMin: "дақ",
    timerSec: "сон",
    timerSpentAll: "Шумо {0} дар ин саҳифа ва {1} дар умум сарф кардед.",
    timerSpentPage: "Шумо {0} дар ин саҳифа сарф кардед.",
    timerSpentSurvey: "Шумо {0} дар ин тест сарф намудед.",
    timerLimitAll: "Шумо {0} аз {1} дар ин саҳифа ва {2} аз {3} дар умум сарф кардед дар дохили ин тест.",
    timerLimitPage: "Шумо {0} аз {1} дар ин саҳифа сарф кардед.",
    timerLimitSurvey: "Шумо {0} аз {1} дар ҳамаи тест сарф кардед.",
    clearCaption: "Тоза кардан",
    // signaturePlaceHolder: "Sign here",
    // chooseFileCaption: "Choose file",
    removeFileCaption: "Файлро нест кардан",
    // booleanCheckedLabel: "Yes",
    // booleanUncheckedLabel: "No",
    // confirmRemoveFile: "Are you sure that you want to remove this file: {0}?",
    // confirmRemoveAllFiles: "Are you sure that you want to remove all files?",
    // questionTitlePatternText: "Question Title",
    // modalCancelButtonText: "Cancel",
    // modalApplyButtonText: "Apply",
    // filterStringPlaceholder: "Type to search...",
    // emptyMessage: "No data to display",
    // noEntriesText: "There are no entries yet.\nClick the button below to add a new entry.",
    // more: "More"
};
Object(survey_core__WEBPACK_IMPORTED_MODULE_0__["setupLocale"])({ localeCode: "tg", strings: tajikSurveyStrings, nativeName: "тоҷикӣ", englishName: "Tajik" });


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
//# sourceMappingURL=tajik.js.map