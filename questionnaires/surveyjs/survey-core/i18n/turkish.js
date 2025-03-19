/*!
 * surveyjs - Survey JavaScript library v1.12.26
 * Copyright (c) 2015-2025 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("turkish", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["turkish"] = factory(require("survey-core"));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/survey-core/src/localization/turkish.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/survey-core/src/localization/turkish.ts":
/*!**********************************************************!*\
  !*** ./packages/survey-core/src/localization/turkish.ts ***!
  \**********************************************************/
/*! exports provided: turkishSurveyStrings */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turkishSurveyStrings", function() { return turkishSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var turkishSurveyStrings = {
    pagePrevText: "Önceki",
    pageNextText: "Sonraki",
    completeText: "Tamamla",
    previewText: "Önizleme",
    editText: "Düzenle",
    startSurveyText: "Başlat",
    otherItemText: "Diğer (açıklayınız)",
    noneItemText: "Hiçbiri",
    refuseItemText: "Cevap vermeyi reddet",
    dontKnowItemText: "Bilmiyorum",
    selectAllItemText: "Tümünü Seç",
    deselectAllItemText: "Tümünün seçimini kaldır",
    progressText: "Sayfa {0}/{1}",
    indexText: "{0}/{1}",
    panelDynamicProgressText: "{0}/{1}",
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    questionsProgressText: "{0}/{1} soru yanıtlandı",
    emptySurvey: "Ankette görüntülenecek sayfa ya da soru mevcut değil.",
    completingSurvey: "Anketi tamamladığınız için teşekkür ederiz",
    completingSurveyBefore: "Kayıtlarımız bu anketi zaten tamamladığınızı gösteriyor.",
    loadingSurvey: "Anket Yükleniyor...",
    placeholder: "Seçiniz...",
    ratingOptionsCaption: "Seçiniz...",
    value: "değer",
    requiredError: "Lütfen soruya cevap verin.",
    requiredErrorInPanel: "Lütfen en az bir soruyu yanıtlayın.",
    requiredInAllRowsError: "Lütfen tüm satırlardaki soruları cevaplayın.",
    eachRowUniqueError: "Her satırın benzersiz bir değeri olmalıdır.",
    numericError: "Değer sayısal olmalıdır.",
    minError: "Değer {0}'den küçük olmamalıdır",
    maxError: "Değer {0}'dan büyük olmamalıdır",
    textNoDigitsAllow: "Numaralara izin verilmez.",
    textMinLength: "Lütfen en az {0} karakter girin.",
    textMaxLength: "Lütfen en fazla {0} karakter girin.",
    textMinMaxLength: "Lütfen {0}’den fazla ve {1}’den az karakter girin.",
    minRowCountError: "Lütfen en az {0} satırı doldurun.",
    minSelectError: "Lütfen en az {0} seçeneği seçin.",
    maxSelectError: "Lütfen en fazla {0} seçeneği seçin.",
    numericMinMax: "'{0}', {1}'e eşit veya daha büyük ve {2}'ye eşit veya daha küçük olmalıdır",
    numericMin: "'{0}' değeri {1} değerine eşit veya büyük olmalıdır",
    numericMax: "'{0}' değeri {1} değerine eşit ya da küçük olmalıdır.",
    invalidEmail: "Lütfen geçerli bir e-posta adresi girin.",
    invalidExpression: "İfade: {0} 'true' döndürmelidir.",
    urlRequestError: "İstek '{0}' hatasını döndürdü. {1}",
    urlGetChoicesError: "İstek boş veri döndürdü veya 'path' özelliği yanlış",
    exceedMaxSize: "Dosya boyutu {0} değerini geçemez.",
    noUploadFilesHandler: "Dosyalar yüklenemiyor. Lütfen 'onUploadFiles' olayı için bir işleyici ekleyin.",
    otherRequiredError: "Lütfen diğer değerleri girin.",
    uploadingFile: "Dosyanız yükleniyor. Lütfen birkaç saniye bekleyin ve tekrar deneyin.",
    loadingFile: "Yükleniyor...",
    chooseFile: "Dosyaları seçin...",
    noFileChosen: "Dosya seçili değil",
    filePlaceholder: "Buraya bir dosya bırakın veya dosyayı yüklemek için aşağıdaki düğmeyi tıklayın.",
    confirmDelete: "Kaydı silmek istiyor musunuz?",
    keyDuplicationError: "Bu değer benzersiz olmalıdır.",
    addColumn: "Sütun Ekle",
    addRow: "Satır Ekle",
    removeRow: "Kaldır",
    emptyRowsText: "Satır yok.",
    addPanel: "Yeni ekle",
    removePanel: "Kaldır",
    showDetails: "Detayları göster",
    hideDetails: "Detayları Gizle",
    choices_Item: "öğe",
    matrix_column: "Sütun",
    matrix_row: "Satır",
    multipletext_itemname: "metin",
    savingData: "Sonuçlar sunucuya kaydediliyor...",
    savingDataError: "Bir hata oluştu ve sonuçlar kaydedilemedi.",
    savingDataSuccess: "Sonuçlar başarıyla kaydedildi!",
    savingExceedSize: "Yanıtınız 64 KB'ı aşıyor. Lütfen dosyalarınızın boyutunu küçültün ve tekrar deneyin veya bir anket sahibiyle iletişime geçin.",
    saveAgainButton: "Tekrar deneyin",
    timerMin: "dakika",
    timerSec: "saniye",
    timerSpentAll: "Bu sayfada {0} ve toplamda {1} harcadınız.",
    timerSpentPage: "Bu sayfaya {0} harcadınız.",
    timerSpentSurvey: "Toplamda {0} harcadınız.",
    timerLimitAll: "Bu sayfaya {0}/{1} ve toplamda {2}/{3} harcadınız.",
    timerLimitPage: "Bu sayfaya {0}/{1} harcadınız.",
    timerLimitSurvey: "Toplamda {0}/{1} harcadınız.",
    clearCaption: "Temizle",
    signaturePlaceHolder: "Burayı imzalayın",
    signaturePlaceHolderReadOnly: "İmza yok",
    chooseFileCaption: "Dosya seçin",
    takePhotoCaption: "Fotoğraf Çekin",
    photoPlaceholder: "Kamerayı kullanarak fotoğraf çekmek için aşağıdaki düğmeyi tıklayın.",
    fileOrPhotoPlaceholder: "Kamerayı kullanarak fotoğraf yüklemek veya fotoğraf çekmek için bir dosyayı sürükleyip bırakın veya seçin.",
    replaceFileCaption: "Dosyayı değiştir",
    removeFileCaption: "Bu dosyayı kaldır",
    booleanCheckedLabel: "Evet",
    booleanUncheckedLabel: "Hayır",
    confirmRemoveFile: "Bu dosyayı kaldırmak istediğinizden emin misiniz: {0}?",
    confirmRemoveAllFiles: "Tüm dosyaları kaldırmak istediğinizden emin misiniz?",
    questionTitlePatternText: "Soru Başlığı",
    modalCancelButtonText: "İptal",
    modalApplyButtonText: "Uygula",
    filterStringPlaceholder: "Aramak için yazın...",
    emptyMessage: "Görüntülenecek veri yok",
    noEntriesText: "Henüz giriş yok.\nYeni bir giriş eklemek için aşağıdaki düğmeyi tıklayın.",
    noEntriesReadonlyText: "Giriş yok.",
    tabTitlePlaceholder: "Yeni Panel",
    more: "Daha fazla",
    tagboxDoneButtonCaption: "TAMAM",
    selectToRankEmptyRankedAreaText: "Tüm seçenekler sıralanmıştır",
    selectToRankEmptyUnrankedAreaText: "Seçimleri sıralamak için buraya sürükleyip bırakın",
    ok: "TAMAM",
    cancel: "İptal"
};
Object(survey_core__WEBPACK_IMPORTED_MODULE_0__["setupLocale"])({ localeCode: "tr", strings: turkishSurveyStrings, nativeName: "türkçe", englishName: "Turkish" });
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// takePhotoCaption: "Take Photo" => "Fotoğraf Çekin"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Kamerayı kullanarak fotoğraf çekmek için aşağıdaki düğmeyi tıklayın."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Kamerayı kullanarak fotoğraf yüklemek veya fotoğraf çekmek için bir dosyayı sürükleyip bırakın veya seçin."
// replaceFileCaption: "Replace file" => "Dosyayı değiştir"// eachRowUniqueError: "Each row must have a unique value." => "Her satırın benzersiz bir değeri olmalıdır."
// noUploadFilesHandler: "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event." => "Dosyalar yüklenemiyor. Lütfen 'onUploadFiles' olayı için bir işleyici ekleyin."
// showDetails: "Show Details" => "Detayları göster"
// hideDetails: "Hide Details" => "Detayları Gizle"
// ok: "OK" => "TAMAM"
// cancel: "Cancel" => "İptal"// refuseItemText: "Refuse to answer" => "Cevap vermeyi reddet"
// dontKnowItemText: "Don't know" => "Bilmiyorum"// savingExceedSize: "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact a survey owner." => "Yanıtınız 64 KB'ı aşıyor. Lütfen dosyalarınızın boyutunu küçültün ve tekrar deneyin veya bir anket sahibiyle iletişime geçin."
// signaturePlaceHolderReadOnly: "No signature" => "İmza yok"// tabTitlePlaceholder: "New Panel" => "Yeni Panel"// deselectAllItemText: "Deselect all" => "Tümünün seçimini kaldır"
// textNoDigitsAllow: "Numbers are not allowed." => "Numaralara izin verilmez."


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
//# sourceMappingURL=turkish.js.map