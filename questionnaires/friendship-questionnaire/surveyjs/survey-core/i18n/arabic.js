/*!
 * surveyjs - Survey JavaScript library v1.12.26
 * Copyright (c) 2015-2025 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("arabic", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["arabic"] = factory(require("survey-core"));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/survey-core/src/localization/arabic.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/survey-core/src/localization/arabic.ts":
/*!*********************************************************!*\
  !*** ./packages/survey-core/src/localization/arabic.ts ***!
  \*********************************************************/
/*! exports provided: arabicSurveyStrings */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arabicSurveyStrings", function() { return arabicSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var arabicSurveyStrings = {
    pagePrevText: "السابق",
    pageNextText: "التالي",
    completeText: "إرسال البيانات",
    previewText: "معاينة",
    editText: "تعديل",
    startSurveyText: "بداية",
    otherItemText: "نص آخر",
    noneItemText: "لا شيء",
    refuseItemText: "رفض الإجابة",
    dontKnowItemText: "لا أعرف",
    selectAllItemText: "اختر الكل",
    deselectAllItemText: "إلغاء تحديد الكل",
    progressText: "{1} صفحة {0} من",
    indexText: "{0} من {1}",
    panelDynamicProgressText: "سجل {0} من {1}",
    panelDynamicTabTextFormat: "لوحة {بانل إندكس}",
    questionsProgressText: "تمت الإجابة على أسئلة {0} / {1}",
    emptySurvey: "لا توجد صفحة مرئية أو سؤال في النموذج",
    completingSurvey: "شكرا لكم لاستكمال النموذج!",
    completingSurveyBefore: "تظهر سجلاتنا أنك قد أكملت هذا الاستطلاع بالفعل.",
    loadingSurvey: "...يتم تحميل النموذج",
    placeholder: "...اختر",
    ratingOptionsCaption: "اختار...",
    value: "القيمة",
    requiredError: ".يرجى الإجابة على السؤال",
    requiredErrorInPanel: "الرجاء الإجابة على سؤال واحد على الأقل.",
    requiredInAllRowsError: "يرجى الإجابة على الأسئلة في جميع الصفوف",
    eachRowUniqueError: "يجب أن يكون لكل صف قيمة فريدة.",
    numericError: "يجب أن تكون القيمة رقمية.",
    minError: "يجب ألا تقل القيمة عن {0}",
    maxError: "يجب ألا تزيد القيمة عن {0}",
    textNoDigitsAllow: "الأرقام غير مسموح بها.",
    textMinLength: "الرجاء إدخال ما لا يقل عن {0} حروف",
    textMaxLength: "الرجاء إدخال أقل من {0} حروف",
    textMinMaxLength: "يرجى إدخال أكثر من {0} وأقل من {1} حروف",
    minRowCountError: "يرجى ملء ما لا يقل عن {0} الصفوف",
    minSelectError: "يرجى تحديد ما لا يقل عن {0} المتغيرات",
    maxSelectError: "يرجى تحديد ما لا يزيد عن {0} المتغيرات",
    numericMinMax: "و'{0}' يجب أن تكون مساوية أو أكثر من {1} وتساوي أو أقل من {2}ا",
    numericMin: "و'{0}' يجب أن تكون مساوية أو أكثر من {1}ا",
    numericMax: "و'{0}' يجب أن تكون مساوية أو أقل من {1}ا",
    invalidEmail: "الرجاء إدخال بريد الكتروني صحيح",
    invalidExpression: "يجب أن يعرض التعبير: {0} 'صواب'.",
    urlRequestError: "طلب إرجاع خطأ '{0}'. {1}ا",
    urlGetChoicesError: "عاد طلب البيانات فارغ أو 'المسار' غير صحيح ",
    exceedMaxSize: "ينبغي ألا يتجاوز حجم الملف {0}ا",
    noUploadFilesHandler: "لا يمكن تحميل الملفات. يرجى إضافة معالج لحدث \"onUploadFiles\".",
    otherRequiredError: "الرجاء إدخال قيمة أخرى",
    uploadingFile: "تحميل الملف الخاص بك. يرجى الانتظار عدة ثوان والمحاولة لاحقًا",
    loadingFile: "جار التحميل...",
    chooseFile: "اختر الملفات...",
    noFileChosen: "لم تقم باختيار ملف",
    filePlaceholder: "اسحب ملفا وأفلته هنا أو انقر فوق الزر أدناه واختر ملفا لتحميله.",
    confirmDelete: "هل تريد حذف السجل؟",
    keyDuplicationError: "يجب أن تكون هذه القيمة فريدة.",
    addColumn: "أضف العمود",
    addRow: "اضافة صف",
    removeRow: "إزالة صف",
    emptyRowsText: "لا توجد صفوف.",
    addPanel: "اضف جديد",
    removePanel: "إزالة",
    showDetails: "اظهر التفاصيل",
    hideDetails: "إخفاء التفاصيل",
    choices_Item: "بند",
    matrix_column: "عمود",
    matrix_row: "صف",
    multipletext_itemname: "نص",
    savingData: "يتم حفظ النتائج على الخادم ...",
    savingDataError: "حدث خطأ ولم نتمكن من حفظ النتائج.",
    savingDataSuccess: "تم حفظ النتائج بنجاح!",
    savingExceedSize: "ردك يتجاوز 64 كيلوبايت. يرجى تقليل حجم الملف (الملفات) والمحاولة مرة أخرى أو الاتصال بمالك الاستطلاع.",
    saveAgainButton: "حاول مجددا",
    timerMin: "دقيقة",
    timerSec: "ثانية",
    timerSpentAll: "لقد أنفقت {0} على هذه الصفحة و {1} إجمالاً.",
    timerSpentPage: "لقد أنفقت {0} على هذه الصفحة.",
    timerSpentSurvey: "لقد أنفقت {0} إجمالاً.",
    timerLimitAll: "لقد أنفقت {0} من {1} في هذه الصفحة و {2} من إجمالي {3}.",
    timerLimitPage: "لقد أنفقت {0} من {1} في هذه الصفحة.",
    timerLimitSurvey: "لقد أنفقت {0} من إجمالي {1}.",
    clearCaption: "واضح",
    signaturePlaceHolder: "وقع هنا",
    signaturePlaceHolderReadOnly: "لا يوجد توقيع",
    chooseFileCaption: "اختر ملف",
    takePhotoCaption: "التقاط صورة",
    photoPlaceholder: "انقر فوق الزر أدناه لالتقاط صورة باستخدام الكاميرا.",
    fileOrPhotoPlaceholder: "قم بسحب ملف وإفلاته أو تحديده لتحميله أو التقاط صورة باستخدام الكاميرا.",
    replaceFileCaption: "استبدال الملف",
    removeFileCaption: "قم بإزالة هذا الملف",
    booleanCheckedLabel: "نعم",
    booleanUncheckedLabel: "لا",
    confirmRemoveFile: "هل أنت متأكد أنك تريد إزالة هذا الملف: {0}؟",
    confirmRemoveAllFiles: "هل أنت متأكد أنك تريد إزالة كافة الملفات؟",
    questionTitlePatternText: "عنوان السؤال",
    modalCancelButtonText: "إلغاء الأمر",
    modalApplyButtonText: "طبق",
    filterStringPlaceholder: "اكتب للبحث...",
    emptyMessage: "لا توجد بيانات للعرض",
    noEntriesText: "لا توجد إدخالات حتى الآن.\nانقر فوق الزر أدناه لإضافة إدخال جديد.",
    noEntriesReadonlyText: "لا توجد إدخالات.",
    tabTitlePlaceholder: "لوحة جديدة",
    more: "أكثر",
    tagboxDoneButtonCaption: "موافق",
    selectToRankEmptyRankedAreaText: "يتم ترتيب جميع الخيارات",
    selectToRankEmptyUnrankedAreaText: "قم بسحب وإسقاط الخيارات هنا لترتيبها",
    ok: "موافق",
    cancel: "إلغاء الأمر"
};
Object(survey_core__WEBPACK_IMPORTED_MODULE_0__["setupLocale"])({ localeCode: "ar", strings: arabicSurveyStrings, nativeName: "العربية", englishName: "Arabic", rtl: true });
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} من {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "لوحة {بانل إندكس}"
// ratingOptionsCaption: "Select..." => "اختار..."
// minError: "The value should not be less than {0}" => "يجب ألا تقل القيمة عن {0}"
// maxError: "The value should not be greater than {0}" => "يجب ألا تزيد القيمة عن {0}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "اسحب ملفا وأفلته هنا أو انقر فوق الزر أدناه واختر ملفا لتحميله."
// emptyRowsText: "There are no rows." => "لا توجد صفوف."
// multipletext_itemname: "text" => "نص"
// signaturePlaceHolder: "Sign here" => "وقع هنا"
// modalCancelButtonText: "Cancel" => "إلغاء الأمر"
// modalApplyButtonText: "Apply" => "طبق"
// filterStringPlaceholder: "Type to search..." => "اكتب للبحث..."
// emptyMessage: "No data to display" => "لا توجد بيانات للعرض"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "لا توجد إدخالات حتى الآن.\nانقر فوق الزر أدناه لإضافة إدخال جديد."
// noEntriesReadonlyText: "There are no entries." => "لا توجد إدخالات."
// more: "More" => "أكثر"
// tagboxDoneButtonCaption: "OK" => "موافق"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "يتم ترتيب جميع الخيارات"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "قم بسحب وإسقاط الخيارات هنا لترتيبها"// takePhotoCaption: "Take Photo" => "التقاط صورة"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "انقر فوق الزر أدناه لالتقاط صورة باستخدام الكاميرا."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "قم بسحب ملف وإفلاته أو تحديده لتحميله أو التقاط صورة باستخدام الكاميرا."
// replaceFileCaption: "Replace file" => "استبدال الملف"// eachRowUniqueError: "Each row must have a unique value." => "يجب أن يكون لكل صف قيمة فريدة."
// noUploadFilesHandler: "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event." => "لا يمكن تحميل الملفات. يرجى إضافة معالج لحدث \"onUploadFiles\"."
// showDetails: "Show Details" => "اظهر التفاصيل"
// hideDetails: "Hide Details" => "إخفاء التفاصيل"
// ok: "OK" => "موافق"
// cancel: "Cancel" => "إلغاء الأمر"
// refuseItemText: "Refuse to answer" => "رفض الإجابة"
// dontKnowItemText: "Don't know" => "لا أعرف"// savingExceedSize: "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact a survey owner." => "ردك يتجاوز 64 كيلوبايت. يرجى تقليل حجم الملف (الملفات) والمحاولة مرة أخرى أو الاتصال بمالك الاستطلاع."
// signaturePlaceHolderReadOnly: "No signature" => "لا يوجد توقيع"// tabTitlePlaceholder: "New Panel" => "لوحة جديدة"// deselectAllItemText: "Deselect all" => "إلغاء تحديد الكل"
// textNoDigitsAllow: "Numbers are not allowed." => "الأرقام غير مسموح بها."


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
//# sourceMappingURL=arabic.js.map