/*!
 * surveyjs - Survey JavaScript library v1.12.26
 * Copyright (c) 2015-2025 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("hebrew", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["hebrew"] = factory(require("survey-core"));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/survey-core/src/localization/hebrew.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/survey-core/src/localization/hebrew.ts":
/*!*********************************************************!*\
  !*** ./packages/survey-core/src/localization/hebrew.ts ***!
  \*********************************************************/
/*! exports provided: hebrewSurveyStrings */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hebrewSurveyStrings", function() { return hebrewSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var hebrewSurveyStrings = {
    pagePrevText: "אחורה",
    pageNextText: "קדימה",
    completeText: "סיום",
    previewText: "תצוגה מקדימה",
    editText: "לַעֲרוֹך",
    startSurveyText: "הַתחָלָה",
    otherItemText: "אחר (נא לתאר)",
    noneItemText: "אף אחד",
    refuseItemText: "מסרבים לענות",
    dontKnowItemText: "לא יודע",
    selectAllItemText: "בחר הכל",
    deselectAllItemText: "בטל את הבחירה בהכל",
    progressText: "דף {0} מתוך {1}",
    indexText: "{0} מתוך {1}",
    panelDynamicProgressText: "הקלטה {0} מתוך {1}",
    panelDynamicTabTextFormat: "לוח {panelIndex}",
    questionsProgressText: "ענה על שאלות",
    emptySurvey: "אין שאלות",
    completingSurvey: "תודה על מילוי השאלון!",
    completingSurveyBefore: "הרשומות שלנו מראות שכבר סיימת את הסקר הזה.",
    loadingSurvey: "טעינה מהשרת...",
    placeholder: "בחר...",
    ratingOptionsCaption: "בחר...",
    value: "ערך",
    requiredError: "אנא השב על השאלה",
    requiredErrorInPanel: "אנא ענה לפחות על שאלה אחת.",
    requiredInAllRowsError: "אנא ענה על שאלות בכל השורות.",
    eachRowUniqueError: "לכל שורה חייב להיות ערך ייחודי.",
    numericError: "התשובה צריכה להיות מספר.",
    minError: "הערך לא צריך להיות קטן מ {0}",
    maxError: "הערך לא צריך להיות גדול מ- {0}",
    textNoDigitsAllow: "מספרים אינם מותרים.",
    textMinLength: "הזן לפחות {0} תווים.",
    textMaxLength: "הזן פחות מ- {0} תווים.",
    textMinMaxLength: "הזן יותר מ- {0} ופחות מ- {1} תווים.",
    minRowCountError: "אנא מלא לפחות {0} שורות.",
    minSelectError: "בחר לפחות {0} אפשרויות.",
    maxSelectError: "בחר עד {0} אפשרויות.",
    numericMinMax: "'{0}' חייב להיות שווה או גדול מ {1}, ושווה ל- {2} או פחות מ- {}}",
    numericMin: "'{0}' חייב להיות שווה או גדול מ {1}",
    numericMax: "'{0}' חייב להיות שווה או קטן מ {1}",
    invalidEmail: "הזן כתובת דוא\"ל חוקית.",
    invalidExpression: "הביטוי: {0} צריך להחזיר 'אמת'.",
    urlRequestError: "הבקשה החזירה את השגיאה '{0}'. {1}",
    urlGetChoicesError: "הבקשה החזירה נתונים ריקים או שהמאפיין 'נתיב' שגוי",
    exceedMaxSize: "גודל הקובץ לא יעלה על {0}.",
    noUploadFilesHandler: "לא ניתן להעלות קבצים. אנא הוסף מטפל לאירוע 'onUploadFiles'.",
    otherRequiredError: "נא להזין נתונים בשדה \"אחר\"",
    uploadingFile: "הקובץ שלך נטען. המתן מספר שניות ונסה שוב.",
    loadingFile: "טוען...",
    chooseFile: "לבחור קבצים...",
    noFileChosen: "לא נבחר קובץ",
    filePlaceholder: "גרור ושחרר קובץ לכאן או לחץ על הלחצן למטה ובחר קובץ להעלאה.",
    confirmDelete: "האם אתה רוצה למחוק את הרשומה?",
    keyDuplicationError: "ערך זה צריך להיות ייחודי.",
    addColumn: "הוסף עמודה",
    addRow: "להוסיף שורה",
    removeRow: "לְהַסִיר",
    emptyRowsText: "אין שורות.",
    addPanel: "הוסף חדש",
    removePanel: "לְהַסִיר",
    showDetails: "הראה פרטים",
    hideDetails: "הסתר פרטים",
    choices_Item: "פריט",
    matrix_column: "טור",
    matrix_row: "שׁוּרָה",
    multipletext_itemname: "טקסט",
    savingData: "התוצאות נשמרות בשרת ...",
    savingDataError: "אירעה שגיאה ולא הצלחנו לשמור את התוצאות.",
    savingDataSuccess: "התוצאות נשמרו בהצלחה!",
    savingExceedSize: "תגובתך עולה על 64KB. הקטן את גודל הקבצים שלך ונסה שוב או פנה לבעלים של סקר.",
    saveAgainButton: "נסה שוב",
    timerMin: "דקה",
    timerSec: "שניות",
    timerSpentAll: "הוצאת {0} בדף זה ובסך הכל {1}.",
    timerSpentPage: "הוצאת {0} בדף זה.",
    timerSpentSurvey: "הוצאת סכום כולל של {0}.",
    timerLimitAll: "הוצאת {0} מתוך {1} בדף זה ו- {2} מתוך {3} בסך הכל.",
    timerLimitPage: "הוצאת {0} מתוך {1} בדף זה.",
    timerLimitSurvey: "הוצאת סכום כולל של {0} מתוך {1}.",
    clearCaption: "לנקות",
    signaturePlaceHolder: "חתום כאן",
    signaturePlaceHolderReadOnly: "אין חתימה",
    chooseFileCaption: "בחר קובץ",
    takePhotoCaption: "צלם תמונה",
    photoPlaceholder: "לחץ על הלחצן למטה כדי לצלם תמונה באמצעות המצלמה.",
    fileOrPhotoPlaceholder: "גרור ושחרר או בחר קובץ כדי להעלות או לצלם תמונה באמצעות המצלמה.",
    replaceFileCaption: "החלפת קובץ",
    removeFileCaption: "הסר קובץ זה",
    booleanCheckedLabel: "כן",
    booleanUncheckedLabel: "לא",
    confirmRemoveFile: "האם אתה בטוח שברצונך להסיר קובץ זה: {0}?",
    confirmRemoveAllFiles: "האם אתה בטוח שברצונך להסיר את כל הקבצים?",
    questionTitlePatternText: "כותרת שאלה",
    modalCancelButtonText: "ביטל",
    modalApplyButtonText: "החל",
    filterStringPlaceholder: "הקלד כדי לחפש...",
    emptyMessage: "אין נתונים להצגה",
    noEntriesText: "אין עדיין ערכים.\nלחץ על הלחצן למטה כדי להוסיף ערך חדש.",
    noEntriesReadonlyText: "אין ערכים.",
    tabTitlePlaceholder: "פאנל חדש",
    more: "עוד",
    tagboxDoneButtonCaption: "אוקיי",
    selectToRankEmptyRankedAreaText: "כל האפשרויות מדורגות",
    selectToRankEmptyUnrankedAreaText: "גרור ושחרר אפשרויות לכאן כדי לדרג אותן",
    ok: "אוקיי",
    cancel: "ביטל"
};
Object(survey_core__WEBPACK_IMPORTED_MODULE_0__["setupLocale"])({ localeCode: "he", strings: hebrewSurveyStrings, nativeName: "עברית", englishName: "Hebrew", rtl: true });
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} מתוך {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "לוח {panelIndex}"
// ratingOptionsCaption: "Select..." => "בחר..."
// minError: "The value should not be less than {0}" => "הערך לא צריך להיות קטן מ {0}"
// maxError: "The value should not be greater than {0}" => "הערך לא צריך להיות גדול מ- {0}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "גרור ושחרר קובץ לכאן או לחץ על הלחצן למטה ובחר קובץ להעלאה."
// emptyRowsText: "There are no rows." => "אין שורות."
// multipletext_itemname: "text" => "טקסט"
// signaturePlaceHolder: "Sign here" => "חתום כאן"
// modalCancelButtonText: "Cancel" => "ביטל"
// modalApplyButtonText: "Apply" => "החל"
// filterStringPlaceholder: "Type to search..." => "הקלד כדי לחפש..."
// emptyMessage: "No data to display" => "אין נתונים להצגה"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "אין עדיין ערכים.\nלחץ על הלחצן למטה כדי להוסיף ערך חדש."
// noEntriesReadonlyText: "There are no entries." => "אין ערכים."
// more: "More" => "עוד"
// tagboxDoneButtonCaption: "OK" => "אוקיי"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "כל האפשרויות מדורגות"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "גרור ושחרר אפשרויות לכאן כדי לדרג אותן"// takePhotoCaption: "Take Photo" => "צלם תמונה"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "לחץ על הלחצן למטה כדי לצלם תמונה באמצעות המצלמה."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "גרור ושחרר או בחר קובץ כדי להעלות או לצלם תמונה באמצעות המצלמה."
// replaceFileCaption: "Replace file" => "החלפת קובץ"// eachRowUniqueError: "Each row must have a unique value." => "לכל שורה חייב להיות ערך ייחודי."
// noUploadFilesHandler: "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event." => "לא ניתן להעלות קבצים. אנא הוסף מטפל לאירוע 'onUploadFiles'."
// showDetails: "Show Details" => "הראה פרטים"
// hideDetails: "Hide Details" => "הסתר פרטים"
// ok: "OK" => "אוקיי"
// cancel: "Cancel" => "ביטל"
// refuseItemText: "Refuse to answer" => "מסרבים לענות"
// dontKnowItemText: "Don't know" => "לא יודע"
// savingExceedSize: "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact a survey owner." => "תגובתך עולה על 64KB. הקטן את גודל הקבצים שלך ונסה שוב או פנה לבעלים של סקר."
// signaturePlaceHolderReadOnly: "No signature" => "אין חתימה"// tabTitlePlaceholder: "New Panel" => "פאנל חדש"// deselectAllItemText: "Deselect all" => "בטל את הבחירה בהכל"
// textNoDigitsAllow: "Numbers are not allowed." => "מספרים אינם מותרים."


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
//# sourceMappingURL=hebrew.js.map