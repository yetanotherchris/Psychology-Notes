/*!
 * surveyjs - Survey JavaScript library v1.12.26
 * Copyright (c) 2015-2025 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("welsh", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["welsh"] = factory(require("survey-core"));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/survey-core/src/localization/welsh.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/survey-core/src/localization/welsh.ts":
/*!********************************************************!*\
  !*** ./packages/survey-core/src/localization/welsh.ts ***!
  \********************************************************/
/*! exports provided: welshSurveyStrings */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "welshSurveyStrings", function() { return welshSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var welshSurveyStrings = {
    pagePrevText: "Blaenorol",
    pageNextText: "Nesaf",
    completeText: "Cwblhau",
    previewText: "Rhagolwg",
    editText: "Golygu",
    startSurveyText: "Dechrau",
    otherItemText: "Arall (disgrifiwch)",
    noneItemText: "Dim",
    refuseItemText: "Gwrthod ateb",
    dontKnowItemText: "Ddim yn gwybod",
    selectAllItemText: "Dewis y Cyfan ",
    deselectAllItemText: "Dad-ddethol yr holl",
    progressText: "Tudalen {0} o {1}",
    indexText: "{0} o {1}",
    panelDynamicProgressText: "Cofnod {0} o {1}",
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    questionsProgressText: "Wedi ateb {0}/{1} cwestiwn",
    emptySurvey: "Does dim modd gweld tudalen na chwestiwn yn yr arolwg.",
    completingSurvey: "Diolch am lenwi’r holiadur!",
    completingSurveyBefore: "Rydych chi wedi llenwi’r arolwg hwn yn barod yn ôl ein cofnodion.",
    loadingSurvey: "Wrthi’n Llwytho’r Arolwg...",
    placeholder: "Dewiswch...",
    ratingOptionsCaption: "Dewis...",
    value: "gwerth",
    requiredError: "Atebwch y cwestiwn.",
    requiredErrorInPanel: "Atebwch o leiaf un cwestiwn.",
    requiredInAllRowsError: "Atebwch y cwestiynau ym mhob rhes.",
    eachRowUniqueError: "Rhaid i bob rhes fod â gwerth unigryw.",
    numericError: "Dylai’r gwerth fod yn rhif.",
    minError: "Ni ddylai'r gwerth fod yn llai na {0}",
    maxError: "Ni ddylai'r gwerth fod yn fwy na {0}",
    textNoDigitsAllow: "Ni chaniateir rhifau.",
    textMinLength: "Rhowch o leiaf {0} nod.",
    textMaxLength: "Rhowch lai na {0} nod.",
    textMinMaxLength: "Rhowch o leiaf {0} nod ond dim mwy na {1}.",
    minRowCountError: "Llenwch o leiaf {0} rhes.",
    minSelectError: "Dewiswch o leiaf {0} amrywiolyn.",
    maxSelectError: "Peidiwch â dewis mwy na {0} amrywiolyn.",
    numericMinMax: "Dylai’r '{0}' fod yr un fath â {1} neu’n fwy, a’r fath â {2} neu’n llai",
    numericMin: "Dylai’r '{0}' fod yr un fath â {1} neu’n fwy",
    numericMax: "Dylai’r '{0}' fod yr un fath â {1} neu’n llai",
    invalidEmail: "Rhowch gyfeiriad e-bost dilys.",
    invalidExpression: "Dylai’r mynegiad {0} arwain at 'true'.",
    urlRequestError: "Roedd y cais wedi arwain at y gwall '{0}'. {1}",
    urlGetChoicesError: "Roedd y cais wedi arwain at ddata gwag neu mae priodwedd y ‘path’ yn anghywir ",
    exceedMaxSize: "Ddylai’r ffeil ddim bod yn fwy na {0}.",
    noUploadFilesHandler: "Ni ellir llwytho ffeiliau i fyny. Ychwanegwch handler ar gyfer y digwyddiad 'onUploadFiles'.",
    otherRequiredError: "Rhowch y gwerth arall.",
    uploadingFile: "Mae eich ffeil wrthi’n llwytho i fyny. Arhoswch ychydig o eiliadau a rhoi cynnig arall arni.",
    loadingFile: "Wrthi’n llwytho...",
    chooseFile: "Dewiswch ffeil(iau)...",
    noFileChosen: "Heb ddewis ffeil ",
    filePlaceholder: "Llusgwch a gollwng ffeil yma neu cliciwch y botwm isod a dewiswch ffeil i'w lanlwytho.",
    confirmDelete: "Ydych chi am ddileu’r cofnod?",
    keyDuplicationError: "Dylai’r gwerth hwn fod yn unigryw.",
    addColumn: "Ychwanegu colofn ",
    addRow: "Ychwanegu rhes",
    removeRow: "Tynnu",
    emptyRowsText: "Nid oes unrhyw ffraeau.",
    addPanel: "Ychwanegu o’r newydd",
    removePanel: "Tynnu",
    showDetails: "Dangos manylion",
    hideDetails: "Manylion Cuddio",
    choices_Item: "eitem",
    matrix_column: "Colofn",
    matrix_row: "Rhes",
    multipletext_itemname: "Testun",
    savingData: "Mae’r canlyniadau’n cael eu cadw ar y gweinydd...",
    savingDataError: "Roedd gwall a doedd dim modd cadw’r canlyniadau.",
    savingDataSuccess: "Wedi llwyddo i gadw’r canlyniadau!",
    savingExceedSize: "Mae eich ymateb yn fwy na 64KB. Lleihau maint eich ffeil(au) a cheisiwch eto neu cysylltwch â pherchennog yr arolwg.",
    saveAgainButton: "Rhowch gynnig arall arni",
    timerMin: "mun",
    timerSec: "eil",
    timerSpentAll: "Rydych chi wedi treulio {0} ar y dudalen hon a {1} gyda’i gilydd.",
    timerSpentPage: "Rydych chi wedi treulio {0} ar y dudalen hon.",
    timerSpentSurvey: "Rydych chi wedi treulio {0} gyda’i gilydd.",
    timerLimitAll: "Rydych chi wedi treulio {0} o {1} ar y dudalen hon a {2} o {3} gyda’i gilydd.",
    timerLimitPage: "Rydych chi wedi treulio {0} o {1} ar y dudalen hon.",
    timerLimitSurvey: "Rydych chi wedi treulio {0} o {1} gyda’i gilydd.",
    clearCaption: "Clirio",
    signaturePlaceHolder: "Arwydd yma",
    signaturePlaceHolderReadOnly: "Dim llofnod",
    chooseFileCaption: "Dewiswch ffeil ",
    takePhotoCaption: "Tynnu Llun",
    photoPlaceholder: "Cliciwch y botwm isod i dynnu llun gan ddefnyddio'r camera.",
    fileOrPhotoPlaceholder: "Llusgwch a gollwng neu dewiswch ffeil i lanlwytho neu dynnu llun gan ddefnyddio'r camera.",
    replaceFileCaption: "Amnewid ffeil",
    removeFileCaption: "Tynnu’r ffeil hon ",
    booleanCheckedLabel: "Iawn",
    booleanUncheckedLabel: "Na",
    confirmRemoveFile: "Ydych chi’n siŵr eich bod am dynnu’r ffeil hon: {0}?",
    confirmRemoveAllFiles: "Ydych chi’n siŵr eich bod am dynnu pob ffeil?",
    questionTitlePatternText: "Teitl y Cwestiwn ",
    modalCancelButtonText: "Canslo",
    modalApplyButtonText: "Cynnig",
    filterStringPlaceholder: "Teipiwch i chwilio...",
    emptyMessage: "Dim data i'w arddangos",
    noEntriesText: "Nid oes unrhyw gofnodion hyd yn hyn.\nCliciwch y botwm isod i ychwanegu cofnod newydd.",
    noEntriesReadonlyText: "Nid oes unrhyw gofnodion.",
    tabTitlePlaceholder: "Panel newydd",
    more: "Rhagor",
    tagboxDoneButtonCaption: "OCÊ",
    selectToRankEmptyRankedAreaText: "Mae'r holl ddewisiadau yn cael eu rhestru",
    selectToRankEmptyUnrankedAreaText: "Dewisiadau llusgo a gollwng yma i'w graddio",
    ok: "OCÊ",
    cancel: "Canslo"
};
Object(survey_core__WEBPACK_IMPORTED_MODULE_0__["setupLocale"])({ localeCode: "cy", strings: welshSurveyStrings, nativeName: "cymraeg", englishName: "Welsh" });
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} o {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panel {panelIndex}"
// ratingOptionsCaption: "Select..." => "Dewis..."
// minError: "The value should not be less than {0}" => "Ni ddylai'r gwerth fod yn llai na {0}"
// maxError: "The value should not be greater than {0}" => "Ni ddylai'r gwerth fod yn fwy na {0}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Llusgwch a gollwng ffeil yma neu cliciwch y botwm isod a dewiswch ffeil i'w lanlwytho."
// emptyRowsText: "There are no rows." => "Nid oes unrhyw ffraeau."
// multipletext_itemname: "text" => "Testun"
// signaturePlaceHolder: "Sign here" => "Arwydd yma"
// modalCancelButtonText: "Cancel" => "Canslo"
// modalApplyButtonText: "Apply" => "Cynnig"
// filterStringPlaceholder: "Type to search..." => "Teipiwch i chwilio..."
// emptyMessage: "No data to display" => "Dim data i'w arddangos"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Nid oes unrhyw gofnodion hyd yn hyn.\nCliciwch y botwm isod i ychwanegu cofnod newydd."
// noEntriesReadonlyText: "There are no entries." => "Nid oes unrhyw gofnodion."
// more: "More" => "Rhagor"
// tagboxDoneButtonCaption: "OK" => "OCÊ"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Mae'r holl ddewisiadau yn cael eu rhestru"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Dewisiadau llusgo a gollwng yma i'w graddio"// takePhotoCaption: "Take Photo" => "Tynnu Llun"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Cliciwch y botwm isod i dynnu llun gan ddefnyddio'r camera."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Llusgwch a gollwng neu dewiswch ffeil i lanlwytho neu dynnu llun gan ddefnyddio'r camera."
// replaceFileCaption: "Replace file" => "Amnewid ffeil"// eachRowUniqueError: "Each row must have a unique value." => "Rhaid i bob rhes fod â gwerth unigryw."
// noUploadFilesHandler: "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event." => "Ni ellir llwytho ffeiliau i fyny. Ychwanegwch handler ar gyfer y digwyddiad 'onUploadFiles'."
// showDetails: "Show Details" => "Dangos manylion"
// hideDetails: "Hide Details" => "Manylion Cuddio"
// ok: "OK" => "OCÊ"
// cancel: "Cancel" => "Canslo"// refuseItemText: "Refuse to answer" => "Gwrthod ateb"
// dontKnowItemText: "Don't know" => "Ddim yn gwybod"// savingExceedSize: "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact a survey owner." => "Mae eich ymateb yn fwy na 64KB. Lleihau maint eich ffeil(au) a cheisiwch eto neu cysylltwch â pherchennog yr arolwg."
// signaturePlaceHolderReadOnly: "No signature" => "Dim llofnod"// tabTitlePlaceholder: "New Panel" => "Panel newydd"// deselectAllItemText: "Deselect all" => "Dad-ddethol yr holl"
// textNoDigitsAllow: "Numbers are not allowed." => "Ni chaniateir rhifau."


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
//# sourceMappingURL=welsh.js.map