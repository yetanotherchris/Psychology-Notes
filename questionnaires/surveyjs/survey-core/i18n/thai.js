/*!
 * surveyjs - Survey JavaScript library v1.12.26
 * Copyright (c) 2015-2025 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("thai", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["thai"] = factory(require("survey-core"));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/survey-core/src/localization/thai.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/survey-core/src/localization/thai.ts":
/*!*******************************************************!*\
  !*** ./packages/survey-core/src/localization/thai.ts ***!
  \*******************************************************/
/*! exports provided: thaiStrings */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thaiStrings", function() { return thaiStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var thaiStrings = {
    pagePrevText: "ก่อนหน้า",
    pageNextText: "ถัดไป",
    completeText: "สำเร็จ",
    previewText: "ดูตัวอย่าง",
    editText: "แก้ไข",
    startSurveyText: "เริ่ม",
    otherItemText: "อื่นๆ (โปรดระบุ)",
    noneItemText: "ไม่มี",
    refuseItemText: "ปฏิเสธที่จะตอบ",
    dontKnowItemText: "ไม่ทราบ",
    selectAllItemText: "เลือกทั้งหมด",
    deselectAllItemText: "ยกเลิกการเลือกทั้งหมด",
    progressText: "หน้าที่ {0} จาก {1}",
    indexText: "{0} of {1}",
    panelDynamicProgressText: "รายการที่ {0} จาก {1}",
    panelDynamicTabTextFormat: "แผง {panelIndex}",
    questionsProgressText: "คำตอบที่ {0}/{1} จำนวนคำถาม",
    emptySurvey: "ไม่มีหน้าเพจที่มองเห็น หรือ คำถามใน survey นี้",
    completingSurvey: "ขอบคุณที่ทำ survey จนเสร็จ",
    completingSurveyBefore: "รายการของเราแสดงว่าคุณได้ทำ survey เสร็จเรียบร้อยแล้ว",
    loadingSurvey: "กำลังโหลด Survey...",
    placeholder: "เลือก...",
    ratingOptionsCaption: "เลือก   ",
    value: "ข้อมูล",
    requiredError: "กรุณาตอบคำถาม",
    requiredErrorInPanel: "กรุณาตอบขั้นต่ำหนึ่งคำถาม",
    requiredInAllRowsError: "กรุณาตอบคำถามในทุกๆแถว",
    eachRowUniqueError: "แต่ละแถวต้องมีค่าที่ไม่ซ้ํากัน",
    numericError: "ข้อมูลที่ใส่ต้องเป็นตัวเลข",
    minError: "ค่าไม่ควรน้อยกว่า {0}",
    maxError: "ค่าไม่ควรเกิน{0}",
    textNoDigitsAllow: "ไม่อนุญาตให้ใช้หมายเลข",
    textMinLength: "กรุณาใส่ขั้นต่ำจำนวน {0} ตัวอักษร",
    textMaxLength: "กรุณาใส่ไม่เกินจำนวน {0} ตัวอักษร",
    textMinMaxLength: "กรุณาใส่ขั้นต่ำจำนวน {0} และไม่เกินจำนวน {1} ตัวอักษร",
    minRowCountError: "กรุณาใส่ขั้นต่ำจำนวน {0} แถว",
    minSelectError: "กรุณาเลือกอย่างน้อย {0} รายการ",
    maxSelectError: "กรุณาเลือกไม่เกิน {0} รายการ",
    numericMinMax: "'{0}' ต้องมากกว่าหรือเท่ากับ {1} และน้อยกว่าหรือเท่ากับ {2}",
    numericMin: "'{0}' ต้องมากกว่าหรือเท่ากับ {1}",
    numericMax: "'{0}' น้อยกว่าหรือเท่ากับ {1}",
    invalidEmail: "กรุณาใส่อีเมล์แอดเดรสที่ถูกต้อง",
    invalidExpression: "The expression: {0} ต้องรีเทิร์น 'true'.",
    urlRequestError: "รีเควสรีเทิร์น error '{0}'. {1}",
    urlGetChoicesError: "รีเควสรีเทิร์นข้อมูลว่างเปล่า หรือ 'path' property ไม่ถูกต้อง",
    exceedMaxSize: "ขนาดไฟล์ต้องไม่เกิน {0}.",
    noUploadFilesHandler: "ไม่สามารถอัปโหลดไฟล์ได้ โปรดเพิ่มตัวจัดการสําหรับเหตุการณ์ 'onUploadFiles'",
    otherRequiredError: "กรุณาใส่ค่าอื่น",
    uploadingFile: "ไฟล์ของคุณกำลังอัพโหลดอยู่. กรุณารอสักครู่แล้วทำการลองอีกครั้ง",
    loadingFile: "กำลังโหลด...",
    chooseFile: "เลือกไฟล์...",
    noFileChosen: "ไม่ไฟล์ที่เลือก",
    filePlaceholder: "ลากและวางไฟล์ที่นี่หรือคลิกปุ่มด้านล่างและเลือกไฟล์ที่จะอัปโหลด",
    confirmDelete: "คุณต้องการลบรายการนี้จริงหรือไม่?",
    keyDuplicationError: "ข้อมูลนี้ต้องเป็น unique.",
    addColumn: "เพิ่มคอลัมน์",
    addRow: "เพิ่มแถว",
    removeRow: "ลบ",
    emptyRowsText: "ไม่มีแถว",
    addPanel: "เพิ่ม",
    removePanel: "ลบ",
    showDetails: "แสดงรายละเอียด",
    hideDetails: "ซ่อนรายละเอียด",
    choices_Item: "ชิ้น",
    matrix_column: "คอลัมน์",
    matrix_row: "แถว",
    multipletext_itemname: "ข้อความ",
    savingData: "ผลลัพท์กำลังบันทึกลงที่เซิร์ฟเวอร์...",
    savingDataError: "มีความผิดพลาดเกิดขึ้นส่งผลให้ไม่สามารถบันทึกผลได้",
    savingDataSuccess: "บันทึกสำเร็จแล้ว",
    savingExceedSize: "คําตอบของคุณเกิน 64KB โปรดลดขนาดไฟล์ของคุณแล้วลองอีกครั้งหรือติดต่อเจ้าของแบบสํารวจ",
    saveAgainButton: "รบกวนลองอีกครั้ง",
    timerMin: "นาที",
    timerSec: "วินาที",
    timerSpentAll: "คุณใช้เวลา {0} บนหน้านี้และ {1} รวมทั้งหมด",
    timerSpentPage: "คุณใช้เวลา {0} บนหน้านี้",
    timerSpentSurvey: "คุณใช้เวลา {0} รวมทั้งหมด",
    timerLimitAll: "คุณใช้เวลา {0} ของ {1} บนหน้านี้และ {2} ของ {3} รวมทั้งหมด",
    timerLimitPage: "คุณใช้เวลา {0} ของ {1} บนหน้านี้",
    timerLimitSurvey: "คุณใช้เวลา {0} ของ {1} รวมทั้งหมด",
    clearCaption: "เคลียร์",
    signaturePlaceHolder: "ลงชื่อที่นี่",
    signaturePlaceHolderReadOnly: "ไม่มีลายเซ็น",
    chooseFileCaption: "เลือกไฟล์",
    takePhotoCaption: "ถ่ายรูป",
    photoPlaceholder: "คลิกปุ่มด้านล่างเพื่อถ่ายภาพโดยใช้กล้อง",
    fileOrPhotoPlaceholder: "ลากและวางหรือเลือกไฟล์ที่จะอัปโหลดหรือถ่ายภาพโดยใช้กล้อง",
    replaceFileCaption: "แทนที่ไฟล์",
    removeFileCaption: "นำไฟล์นี้ออก",
    booleanCheckedLabel: "ใช่",
    booleanUncheckedLabel: "ไม่ใช่",
    confirmRemoveFile: "คุณแน่ใจที่จะนำไฟล์นี้ออกใช่หรือไม่: {0}?",
    confirmRemoveAllFiles: "คุณแน่ใจที่จะนำไฟล์ทั้งหมดออกใช่หรือไม่",
    questionTitlePatternText: "ชื่อคำถาม",
    modalCancelButtonText: "ยกเลิก",
    modalApplyButtonText: "ใช้",
    filterStringPlaceholder: "พิมพ์เพื่อค้นหา...",
    emptyMessage: "ไม่มีข้อมูลที่จะแสดง",
    noEntriesText: "ยังไม่มีรายการ\nคลิกปุ่มด้านล่างเพื่อเพิ่มรายการใหม่",
    noEntriesReadonlyText: "ไม่มีรายการ",
    tabTitlePlaceholder: "แผงใหม่",
    more: "อีก",
    tagboxDoneButtonCaption: "ตกลง, ได้",
    selectToRankEmptyRankedAreaText: "ตัวเลือกทั้งหมดจะถูกจัดอันดับ",
    selectToRankEmptyUnrankedAreaText: "ลากและวางตัวเลือกที่นี่เพื่อจัดอันดับ",
    ok: "ตกลง, ได้",
    cancel: "ยกเลิก"
};
Object(survey_core__WEBPACK_IMPORTED_MODULE_0__["setupLocale"])({ localeCode: "th", strings: thaiStrings, nativeName: "ไทย", englishName: "Thai" });
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} of {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "แผง {panelIndex}"
// ratingOptionsCaption: "Select..." => "เลือก   "
// minError: "The value should not be less than {0}" => "ค่าไม่ควรน้อยกว่า {0}"
// maxError: "The value should not be greater than {0}" => "ค่าไม่ควรเกิน{0}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "ลากและวางไฟล์ที่นี่หรือคลิกปุ่มด้านล่างและเลือกไฟล์ที่จะอัปโหลด"
// emptyRowsText: "There are no rows." => "ไม่มีแถว"
// multipletext_itemname: "text" => "ข้อความ"
// signaturePlaceHolder: "Sign here" => "ลงชื่อที่นี่"
// modalCancelButtonText: "Cancel" => "ยกเลิก"
// modalApplyButtonText: "Apply" => "ใช้"
// filterStringPlaceholder: "Type to search..." => "พิมพ์เพื่อค้นหา..."
// emptyMessage: "No data to display" => "ไม่มีข้อมูลที่จะแสดง"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "ยังไม่มีรายการ\nคลิกปุ่มด้านล่างเพื่อเพิ่มรายการใหม่"
// noEntriesReadonlyText: "There are no entries." => "ไม่มีรายการ"
// more: "More" => "อีก"
// tagboxDoneButtonCaption: "OK" => "ตกลง, ได้"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "ตัวเลือกทั้งหมดจะถูกจัดอันดับ"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "ลากและวางตัวเลือกที่นี่เพื่อจัดอันดับ"// takePhotoCaption: "Take Photo" => "ถ่ายรูป"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "คลิกปุ่มด้านล่างเพื่อถ่ายภาพโดยใช้กล้อง"
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "ลากและวางหรือเลือกไฟล์ที่จะอัปโหลดหรือถ่ายภาพโดยใช้กล้อง"
// replaceFileCaption: "Replace file" => "แทนที่ไฟล์"// eachRowUniqueError: "Each row must have a unique value." => "แต่ละแถวต้องมีค่าที่ไม่ซ้ํากัน"
// noUploadFilesHandler: "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event." => "ไม่สามารถอัปโหลดไฟล์ได้ โปรดเพิ่มตัวจัดการสําหรับเหตุการณ์ 'onUploadFiles'"
// showDetails: "Show Details" => "แสดงรายละเอียด"
// hideDetails: "Hide Details" => "ซ่อนรายละเอียด"
// ok: "OK" => "ตกลง, ได้"
// cancel: "Cancel" => "ยกเลิก"// refuseItemText: "Refuse to answer" => "ปฏิเสธที่จะตอบ"
// dontKnowItemText: "Don't know" => "ไม่ทราบ"// savingExceedSize: "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact a survey owner." => "คําตอบของคุณเกิน 64KB โปรดลดขนาดไฟล์ของคุณแล้วลองอีกครั้งหรือติดต่อเจ้าของแบบสํารวจ"
// signaturePlaceHolderReadOnly: "No signature" => "ไม่มีลายเซ็น"// tabTitlePlaceholder: "New Panel" => "แผงใหม่"// deselectAllItemText: "Deselect all" => "ยกเลิกการเลือกทั้งหมด"
// textNoDigitsAllow: "Numbers are not allowed." => "ไม่อนุญาตให้ใช้หมายเลข"


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
//# sourceMappingURL=thai.js.map