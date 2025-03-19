/*!
 * surveyjs - Survey JavaScript library v1.12.26
 * Copyright (c) 2015-2025 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("persian", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["persian"] = factory(require("survey-core"));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/survey-core/src/localization/persian.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/survey-core/src/localization/persian.ts":
/*!**********************************************************!*\
  !*** ./packages/survey-core/src/localization/persian.ts ***!
  \**********************************************************/
/*! exports provided: persianSurveyStrings */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persianSurveyStrings", function() { return persianSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var persianSurveyStrings = {
    pagePrevText: "قبلی",
    pageNextText: "بعدی",
    completeText: "تکمیل",
    previewText: "پیش نمایش",
    editText: "ویرایش",
    startSurveyText: "شروع",
    otherItemText: "دیگر(توضیح)",
    noneItemText: "هیچ",
    refuseItemText: "امتناع از پاسخ دادن",
    dontKnowItemText: "نمی دانم",
    selectAllItemText: "انتخاب همه",
    deselectAllItemText: "لغو انتخاب همه",
    progressText: "صفحه {0} از {1}",
    indexText: "{0} {1}",
    panelDynamicProgressText: "مورد {0} از {1}",
    panelDynamicTabTextFormat: "پنل {panelIndex}",
    questionsProgressText: "تعداد پاسخ {0}/{1} سوال",
    emptySurvey: "صفحه ای یا گزینه ای برای این پرسشنامه موجود نیست.",
    completingSurvey: "از شما بابت تکمیل این پرسشنامه متشکریم",
    completingSurveyBefore: "به نظر می رسد هم هم اکنون پرسشنامه را تکمیل کرده اید.",
    loadingSurvey: "درحال ایجاد پرسشنامه",
    placeholder: "انتخاب کنید...",
    ratingOptionsCaption: "انتخاب...",
    value: "مقدار",
    requiredError: "لطفا به سوال پاسخ دهید",
    requiredErrorInPanel: "لطفا حداقل به یک سوال پاسخ دهید.",
    requiredInAllRowsError: "لطفا سوالات تمام سطرها را پاسخ دهید.",
    eachRowUniqueError: "هر سطر باید یک مقدار منحصر به فرد داشته باشد.",
    numericError: "مقدار باید عددی باشد",
    minError: "ارزش نباید کمتر از {0}",
    maxError: "ارزش نباید بیشتر از {0}",
    textNoDigitsAllow: "شماره ها مجاز نیستند.",
    textMinLength: "لطفا حداقل  {0} حرف وارد کنید",
    textMaxLength: "لطفا کمتر از  {0} حرف وارد کنید.",
    textMinMaxLength: "لطفا بیشتر از  {0} حرف و کمتر از {1} حرف وارد کنید.",
    minRowCountError: "لطفا حداقل {0} سطر وارد کنید.",
    minSelectError: "حداقل {0} انتخاب کنید.",
    maxSelectError: "لطفا بیشتر از  {0} انتخاب کنید.",
    numericMinMax: "'{0}' باید بین {1} و {2} باشد",
    numericMin: "'{0}' بزرگتر مساوی {1} باشد",
    numericMax: "'{0}' باید کوچکتر یا مساوی {1} باشد",
    invalidEmail: "لطفا ایمیل صحیح درج کنید",
    invalidExpression: "عبارت: {0} پاسخ باید 'true' باشد.",
    urlRequestError: "درخواست با خطا روبرو شد: '{0}'. {1}",
    urlGetChoicesError: "درخواست مسیری خالی بازگشت داده یا مسیر درست تنظیم نشده",
    exceedMaxSize: "بیشترین حجم مجاز فایل: {0}",
    noUploadFilesHandler: "پروندهها را نمیتوان بارگذاری کرد. لطفا یک گرداننده برای رویداد \"onUploadFiles\" اضافه کنید.",
    otherRequiredError: "مقدار 'دیگر' را وارد کنید",
    uploadingFile: "فایل در حال آیلود است. لطفا صبر کنید.",
    loadingFile: "بارگیری...",
    chooseFile: "انتخاب فایل(ها)...",
    noFileChosen: "هیچ فایلی انتخاب نشده",
    filePlaceholder: "کشیدن و رها کردن یک فایل در اینجا و یا کلیک بر روی دکمه زیر و یک فایل برای اپلود را انتخاب کنید.",
    confirmDelete: "آیا مایل به حذف این ردیف هستید؟",
    keyDuplicationError: "این مقدار باید غیر تکراری باشد",
    addColumn: "ستون جدید",
    addRow: "سطر جدید",
    removeRow: "حذف",
    emptyRowsText: "هیچ ردیفی وجود ندارد.",
    addPanel: "جدید",
    removePanel: "حذف",
    showDetails: "نمایش جزئیات",
    hideDetails: "مخفی کردن جزئیات",
    choices_Item: "آیتم",
    matrix_column: "ستون",
    matrix_row: "سطر",
    multipletext_itemname: "پیامک",
    savingData: "نتایج در حال ذخیره سازی در سرور است",
    savingDataError: "خطایی در ذخیره سازی نتایج رخ داده است",
    savingDataSuccess: "نتایج با موفقیت ذخیره شد",
    savingExceedSize: "پاسخ شما بیش از 64KB است. لطفا اندازه فایل(های) خود را کاهش دهید و دوباره تلاش کنید یا با صاحب نظرسنجی تماس بگیرید.",
    saveAgainButton: "مجدد تلاش کنید",
    timerMin: "دقیقه",
    timerSec: "ثانیه",
    timerSpentAll: "شما مدت {0} در این صفحه و مدت {1} را در مجموع سپری کرده اید.",
    timerSpentPage: "شما مدت {0} را در این صفحه سپری کرده اید.",
    timerSpentSurvey: "شما مدت {0} را در مجموع سپری کرده اید.",
    timerLimitAll: "شما مدت {0} از {1} در این صفحه و مدت {2} از {3} را در مجموع سپری کرده اید.",
    timerLimitPage: "شما مدت {0} از {1} را در این صفحه سپری کرده اید.",
    timerLimitSurvey: "شما مدت {0} از {1} را در مجموع سپری کرده اید.",
    clearCaption: "خالی کردن",
    signaturePlaceHolder: "اینجا را امضا کنید",
    signaturePlaceHolderReadOnly: "بدون امضا",
    chooseFileCaption: "انتخاب فایل",
    takePhotoCaption: "گرفتن عکس",
    photoPlaceholder: "روی دکمه زیر کلیک کنید تا با استفاده از دوربین عکس بگیرید.",
    fileOrPhotoPlaceholder: "کشیدن و رها کردن یا انتخاب یک فایل برای اپلود یا گرفتن عکس با استفاده از دوربین.",
    replaceFileCaption: "جایگزینی پرونده",
    removeFileCaption: "حذف این فایل",
    booleanCheckedLabel: "بله",
    booleanUncheckedLabel: "خیر",
    confirmRemoveFile: "آیا میخواهید این فایل را پاک کنید: {0}?",
    confirmRemoveAllFiles: "آیا میخواهید تمام فایل ها را پاک کنید?",
    questionTitlePatternText: "عنوان سوال",
    modalCancelButtonText: "لغو",
    modalApplyButtonText: "درخواست",
    filterStringPlaceholder: "تایپ برای جستجو...",
    emptyMessage: "داده ای برای نمایش وجود ندارد",
    noEntriesText: "هنوز هیچ ورودی وجود ندارد.\nروی دکمه زیر کلیک کنید تا یک ورودی جدید اضافه شود.",
    noEntriesReadonlyText: "هیچ ورودی وجود ندارد.",
    tabTitlePlaceholder: "پنل جدید",
    more: "بیشتر",
    tagboxDoneButtonCaption: "باشه",
    selectToRankEmptyRankedAreaText: "همه انتخاب ها رتبه بندی می شوند",
    selectToRankEmptyUnrankedAreaText: "انتخاب های کشیدن و رها کردن در اینجا برای رتبه بندی انها",
    ok: "باشه",
    cancel: "لغو"
};
Object(survey_core__WEBPACK_IMPORTED_MODULE_0__["setupLocale"])({ localeCode: "fa", strings: persianSurveyStrings, nativeName: "فارْسِى", englishName: "Persian", rtl: true });
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "پنل {panelIndex}"
// ratingOptionsCaption: "Select..." => "انتخاب..."
// minError: "The value should not be less than {0}" => "ارزش نباید کمتر از {0}"
// maxError: "The value should not be greater than {0}" => "ارزش نباید بیشتر از {0}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "کشیدن و رها کردن یک فایل در اینجا و یا کلیک بر روی دکمه زیر و یک فایل برای اپلود را انتخاب کنید."
// emptyRowsText: "There are no rows." => "هیچ ردیفی وجود ندارد."
// multipletext_itemname: "text" => "پیامک"
// signaturePlaceHolder: "Sign here" => "اینجا را امضا کنید"
// modalCancelButtonText: "Cancel" => "لغو"
// modalApplyButtonText: "Apply" => "درخواست"
// filterStringPlaceholder: "Type to search..." => "تایپ برای جستجو..."
// emptyMessage: "No data to display" => "داده ای برای نمایش وجود ندارد"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "هنوز هیچ ورودی وجود ندارد.\nروی دکمه زیر کلیک کنید تا یک ورودی جدید اضافه شود."
// noEntriesReadonlyText: "There are no entries." => "هیچ ورودی وجود ندارد."
// more: "More" => "بیشتر"
// tagboxDoneButtonCaption: "OK" => "باشه"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "همه انتخاب ها رتبه بندی می شوند"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "انتخاب های کشیدن و رها کردن در اینجا برای رتبه بندی انها"// takePhotoCaption: "Take Photo" => "گرفتن عکس"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "روی دکمه زیر کلیک کنید تا با استفاده از دوربین عکس بگیرید."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "کشیدن و رها کردن یا انتخاب یک فایل برای اپلود یا گرفتن عکس با استفاده از دوربین."
// replaceFileCaption: "Replace file" => "جایگزینی پرونده"// eachRowUniqueError: "Each row must have a unique value." => "هر سطر باید یک مقدار منحصر به فرد داشته باشد."
// noUploadFilesHandler: "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event." => "پروندهها را نمیتوان بارگذاری کرد. لطفا یک گرداننده برای رویداد \"onUploadFiles\" اضافه کنید."
// showDetails: "Show Details" => "نمایش جزئیات"
// hideDetails: "Hide Details" => "مخفی کردن جزئیات"
// ok: "OK" => "باشه"
// cancel: "Cancel" => "لغو"
// refuseItemText: "Refuse to answer" => "امتناع از پاسخ دادن"
// dontKnowItemText: "Don't know" => "نمی دانم"// savingExceedSize: "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact a survey owner." => "پاسخ شما بیش از 64KB است. لطفا اندازه فایل(های) خود را کاهش دهید و دوباره تلاش کنید یا با صاحب نظرسنجی تماس بگیرید."
// signaturePlaceHolderReadOnly: "No signature" => "بدون امضا"// tabTitlePlaceholder: "New Panel" => "پنل جدید"// deselectAllItemText: "Deselect all" => "لغو انتخاب همه"
// textNoDigitsAllow: "Numbers are not allowed." => "شماره ها مجاز نیستند."


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
//# sourceMappingURL=persian.js.map