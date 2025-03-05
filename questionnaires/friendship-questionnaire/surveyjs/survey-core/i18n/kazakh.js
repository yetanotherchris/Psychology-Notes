/*!
 * surveyjs - Survey JavaScript library v1.12.26
 * Copyright (c) 2015-2025 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("kazakh", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["kazakh"] = factory(require("survey-core"));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/survey-core/src/localization/kazakh.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/survey-core/src/localization/kazakh.ts":
/*!*********************************************************!*\
  !*** ./packages/survey-core/src/localization/kazakh.ts ***!
  \*********************************************************/
/*! exports provided: kazakhStrings */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kazakhStrings", function() { return kazakhStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var kazakhStrings = {
    pagePrevText: "Артқа",
    pageNextText: "Келесі",
    completeText: "Дайын",
    previewText: "Алдын ала қарау",
    editText: "Редакциялау",
    startSurveyText: "Бастау",
    otherItemText: "Басқа (өтінеміз, жазыңыз)",
    noneItemText: "Жоқ",
    refuseItemText: "Жауап беруден бас тарту",
    dontKnowItemText: "Білмеймін",
    selectAllItemText: "Барлығын таңдау",
    deselectAllItemText: "Барлығын жоққа шығару",
    progressText: "{0} ден {1} бет ",
    indexText: "{1} {0}",
    panelDynamicProgressText: "{0} ден {1} жазба",
    panelDynamicTabTextFormat: "Панель {panelIndex}",
    questionsProgressText: "{0}/{1} сұрақтарға жауап",
    emptySurvey: "Бір де бір сұрақ жоқ.",
    completingSurvey: "Сауалнаманы толтырғаныңыз үшін рахмет!",
    completingSurveyBefore: "Сіз бұл сауалнаманы өтіп қойдыңыз.",
    loadingSurvey: "Серверден жүктеу...",
    placeholder: "Таңдау...",
    ratingOptionsCaption: "Таңдау...",
    value: "мәні",
    requiredError: "Өтінеміз, сұраққа жауап беріңіз.",
    requiredErrorInPanel: "Өтінеміз, кем дегенде бір сұраққа жауап беріңіз.",
    requiredInAllRowsError: "Өтінеміз, әрбір жолдың сұрағаны жауап беріңіз.",
    eachRowUniqueError: "Әр жолдың бірегей мәні болуы тиіс.",
    numericError: "Жауап сан түрінде болуы керек.",
    minError: "Мәні {0} кем болмауы тиіс",
    maxError: "Мән {0} артық болмауы тиіс",
    textNoDigitsAllow: "Нөмірлерді беруге жол берілмейді.",
    textMinLength: "Өтінеміз, {0} ден көп таңба енгізіңіз.",
    textMaxLength: "Өтінеміз, {0} ден аз таңба енгізіңіз.",
    textMinMaxLength: "Өтінеміз, {0} аз және {1} көп таңба енгізіңіз.",
    minRowCountError: "Өтінеміз, {0} ден кем емес жол толтырыңыз.",
    minSelectError: "Өтінеміз, тым болмаса {0} нұсқа таңдаңыз.",
    maxSelectError: "Өтінеміз, {0} нұсқадан көп таңдамаңыз.",
    numericMinMax: "'{0}' {1} ден кем емес және {2} ден көп емес болу керек",
    numericMin: "'{0}' {1} ден кем емес болу керек",
    numericMax: "'{0}' {1} ден көп емес болу керек",
    invalidEmail: "Өтінеміз, жарамды электрондық поштаңызды енгізіңіз.",
    invalidExpression: "{0} өрнегі  'true' қайтару керек.",
    urlRequestError: "Сұратым қателікті қайтарды'{0}'. {1}",
    urlGetChoicesError: "Сұратымға жауап бос келді немесе 'path' қасиеті қате көрсетілген ",
    exceedMaxSize: "Файлдың мөлшері {0} аспау керек.",
    noUploadFilesHandler: "Файлдарды кері жүктеу мүмкін емес. 'OnUploadFiles' оқиғасына өңдеушіні қосуыңызды сұраймыз.",
    otherRequiredError: "Өтінеміз, “Басқа” жолына деректі енгізіңіз",
    uploadingFile: "Сіздің файлыңыз жүктеліп жатыр. Бірнеше секунд тосып, қайтадан байқап көріңіз.",
    loadingFile: "Жүктеу...",
    chooseFile: "Файлдарды таңдаңыз...",
    noFileChosen: "Файл таңдалынбады",
    filePlaceholder: "Файлды осы жерге апарып тастаңыз немесе төмендегі түймені басыңыз және кері жүктеу үшін файлды таңдаңыз.",
    confirmDelete: "Сіз жазбаны жоятыныңызға сенімдісіз бе?",
    keyDuplicationError: "Бұл мән бірегей болу керек.",
    addColumn: "Бағана қосу",
    addRow: "Жолды қосу",
    removeRow: "Өшіру",
    emptyRowsText: "Қатарлар жоқ.",
    addPanel: "Жаңа қосу",
    removePanel: "Өшіру",
    showDetails: "Егжей-тегжейін көрсету",
    hideDetails: "Егжей- тегжейін жасы",
    choices_Item: "Нұсқа",
    matrix_column: "Бағана",
    matrix_row: "Жол",
    multipletext_itemname: "мәтін",
    savingData: "Нәтижелер серверде сақталады...",
    savingDataError: "Қателік туындады, нәтиже сақталынбады.",
    savingDataSuccess: "Нәтиже ойдағыдай сақталды!",
    savingExceedSize: "Сіздің жауабыңыз 64КБ-тан асады. Файлдың өлшемін азайтып, қайталап көріңіз немесе сауалнама иесіне хабарласыңыз.",
    saveAgainButton: "Қайтадан байқап көру",
    timerMin: "мин",
    timerSec: "сек",
    timerSpentAll: "Сіз бұл бетте {0} кетірдіңіз және барлығы {1}.",
    timerSpentPage: "Сіз бұл бетте {0} кетірдіңіз.",
    timerSpentSurvey: "Сіз сауалнама кезінде {0} кетірдіңіз.",
    timerLimitAll: "Сіз бұл бетте {0} ден {1} кетірдіңіз және {2} ден {3} бүкіл сауалнама үшін.",
    timerLimitPage: "Сіз бұл бетте {0} ден {1} кетірдіңіз.",
    timerLimitSurvey: "Сіз бүкіл сауалнама үшін {0} ден {1} кетірдіңіз ",
    clearCaption: "Тазалау",
    signaturePlaceHolder: "Осында кіру",
    signaturePlaceHolderReadOnly: "Қолдың No",
    chooseFileCaption: "Файл таңдаңыз",
    takePhotoCaption: "Фотосуретке түсу",
    photoPlaceholder: "Камераны пайдаланып суретке түсу үшін төмендегі түймені басыңыз.",
    fileOrPhotoPlaceholder: "Фотоаппаратты пайдаланып кері жүктеу немесе суретке түсіру үшін файлды апарып тастаыңыз немесе таңдаңыз.",
    replaceFileCaption: "Файлды ауыстыру",
    removeFileCaption: "Файлды жойыңыз",
    booleanCheckedLabel: "Иә",
    booleanUncheckedLabel: "Жоқ",
    confirmRemoveFile: "Сіз бұл файлды жоятыныңызға сенімдісіз бе: {0}?",
    confirmRemoveAllFiles: "Сіз барлық файлдарды жоятыныңызға сенімдісіз бе?",
    questionTitlePatternText: "Сұрақтың атауы",
    modalCancelButtonText: "Болдырмау",
    modalApplyButtonText: "Қолдану",
    filterStringPlaceholder: "Іздеу үшін теріңіз...",
    emptyMessage: "Көрсетілетін деректер жоқ",
    noEntriesText: "Әзірге жазбалар жоқ.\nЖаңа жазбаны қосу үшін төмендегі түймешігіңді басыңыз.",
    noEntriesReadonlyText: "Жазбалар жоқ.",
    tabTitlePlaceholder: "Жаңа панель",
    more: "Қосымша",
    tagboxDoneButtonCaption: "ЖАҚСЫ",
    selectToRankEmptyRankedAreaText: "Барлық таңдаулар ранжирленген",
    selectToRankEmptyUnrankedAreaText: "Таңдауды рангтеу үшін осында апарып тастау",
    ok: "ЖАҚСЫ",
    cancel: "Болдырмау"
};
Object(survey_core__WEBPACK_IMPORTED_MODULE_0__["setupLocale"])({ localeCode: "kk", strings: kazakhStrings, nativeName: "kazakh", englishName: "Kazakh" });
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{1} {0}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Панель {panelIndex}"
// ratingOptionsCaption: "Select..." => "Таңдау..."
// minError: "The value should not be less than {0}" => "Мәні {0} кем болмауы тиіс"
// maxError: "The value should not be greater than {0}" => "Мән {0} артық болмауы тиіс"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Файлды осы жерге апарып тастаңыз немесе төмендегі түймені басыңыз және кері жүктеу үшін файлды таңдаңыз."
// emptyRowsText: "There are no rows." => "Қатарлар жоқ."
// multipletext_itemname: "text" => "мәтін"
// signaturePlaceHolder: "Sign here" => "Осында кіру"
// modalCancelButtonText: "Cancel" => "Болдырмау"
// modalApplyButtonText: "Apply" => "Қолдану"
// filterStringPlaceholder: "Type to search..." => "Іздеу үшін теріңіз..."
// emptyMessage: "No data to display" => "Көрсетілетін деректер жоқ"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Әзірге жазбалар жоқ.\nЖаңа жазбаны қосу үшін төмендегі түймешігіңді басыңыз."
// noEntriesReadonlyText: "There are no entries." => "Жазбалар жоқ."
// more: "More" => "Қосымша"
// tagboxDoneButtonCaption: "OK" => "ЖАҚСЫ"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Барлық таңдаулар ранжирленген"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Таңдауды рангтеу үшін осында апарып тастау"// takePhotoCaption: "Take Photo" => "Фотосуретке түсу"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Камераны пайдаланып суретке түсу үшін төмендегі түймені басыңыз."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Фотоаппаратты пайдаланып кері жүктеу немесе суретке түсіру үшін файлды апарып тастаыңыз немесе таңдаңыз."
// replaceFileCaption: "Replace file" => "Файлды ауыстыру"// eachRowUniqueError: "Each row must have a unique value." => "Әр жолдың бірегей мәні болуы тиіс."
// noUploadFilesHandler: "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event." => "Файлдарды кері жүктеу мүмкін емес. 'OnUploadFiles' оқиғасына өңдеушіні қосуыңызды сұраймыз."
// showDetails: "Show Details" => "Егжей-тегжейін көрсету"
// hideDetails: "Hide Details" => "Егжей- тегжейін жасы"
// ok: "OK" => "ЖАҚСЫ"
// cancel: "Cancel" => "Болдырмау"
// refuseItemText: "Refuse to answer" => "Жауап беруден бас тарту"
// dontKnowItemText: "Don't know" => "Білмеймін"// savingExceedSize: "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact a survey owner." => "Сіздің жауабыңыз 64КБ-тан асады. Файлдың өлшемін азайтып, қайталап көріңіз немесе сауалнама иесіне хабарласыңыз."
// signaturePlaceHolderReadOnly: "No signature" => "Қолдың No"// tabTitlePlaceholder: "New Panel" => "Жаңа панель"// deselectAllItemText: "Deselect all" => "Барлығын жоққа шығару"
// textNoDigitsAllow: "Numbers are not allowed." => "Нөмірлерді беруге жол берілмейді."


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
//# sourceMappingURL=kazakh.js.map