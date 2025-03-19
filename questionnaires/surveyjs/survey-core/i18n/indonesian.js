/*!
 * surveyjs - Survey JavaScript library v1.12.26
 * Copyright (c) 2015-2025 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("indonesian", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["indonesian"] = factory(require("survey-core"));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/survey-core/src/localization/indonesian.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/survey-core/src/localization/indonesian.ts":
/*!*************************************************************!*\
  !*** ./packages/survey-core/src/localization/indonesian.ts ***!
  \*************************************************************/
/*! exports provided: indonesianStrings */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indonesianStrings", function() { return indonesianStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var indonesianStrings = {
    pagePrevText: "Sebelumnya",
    pageNextText: "Selanjutnya",
    completeText: "Selesai",
    previewText: "Pratinjau",
    editText: "Sunting",
    startSurveyText: "Mulai",
    otherItemText: "Lainnya (jelaskan)",
    noneItemText: "Tidak Ada",
    refuseItemText: "Menolak untuk menjawab",
    dontKnowItemText: "Tidak tahu",
    selectAllItemText: "Pilih Semua",
    deselectAllItemText: "Batalkan pilihan semua",
    progressText: "Halaman {0} dari {1}",
    indexText: "{0} dari {1}",
    panelDynamicProgressText: "Rekam {0} dari {1}",
    panelDynamicTabTextFormat: "Panel {panelIndex}",
    questionsProgressText: "Menjawab pertanyaan {0} / {1}",
    emptySurvey: "Tidak ada halaman atau pertanyaan dalam survei.",
    completingSurvey: "Terima kasih telah menyelesaikan survei!",
    completingSurveyBefore: "Catatan kami menunjukkan bahwa Anda telah menyelesaikan survei ini.",
    loadingSurvey: "Memuat survei...",
    placeholder: "Pilih...",
    ratingOptionsCaption: "Pilih...",
    value: "nilai",
    requiredError: "Silahkan jawab pertanyaan berikut.",
    requiredErrorInPanel: "Silahkan jawab setidaknya satu petanyaan.",
    requiredInAllRowsError: "Silahkan jawab pertanyaan pada semua baris.",
    eachRowUniqueError: "Setiap baris harus memiliki nilai unik.",
    numericError: "Nilai harus berupa angka.",
    minError: "Nilainya tidak boleh kurang dari {0}",
    maxError: "Nilai tidak boleh lebih besar dari {0}",
    textNoDigitsAllow: "Nomor tidak diperbolehkan.",
    textMinLength: "Silahkan masukkan setidaknya {0} karakter.",
    textMaxLength: "Silahkan masukkan kurang {0} karakter.",
    textMinMaxLength: "PSilahkan masukkan lebih dari {0} dan kurang dari {1} karakter.",
    minRowCountError: "Silahkan isi setidaknya {0} baris.",
    minSelectError: "Silahkan pilih setidaknya {0} varian.",
    maxSelectError: "Silahkan pilih tidak lebih dari {0} varian.",
    numericMinMax: "'{0}' harus sama dengan atau lebih dari {1} dan harus sama dengan atau kurang dari {2}",
    numericMin: "'{0}' harus sama dengan atau lebih dari {1}",
    numericMax: "'{0}' harus sama dengan atau kurang dari {1}",
    invalidEmail: "Silahkan masukkan e-mail yang benar.",
    invalidExpression: "Ekspresi: {0} harus mengembalikan 'benar'.",
    urlRequestError: "Permintaan mengembalikan kesalahan '{0}'. {1}",
    urlGetChoicesError: "Permintaan mengembalikan data kosong atau properti 'path' salah.",
    exceedMaxSize: "Ukuran berkas tidak boleh melebihi {0}.",
    noUploadFilesHandler: "File tidak dapat diunggah. Harap tambahkan handler untuk acara 'onUploadFiles'.",
    otherRequiredError: "Silahkan masukkan nilai lainnnya.",
    uploadingFile: "Berkas Anda sedang diunggah. Silahkan tunggu beberapa saat atau coba lagi.",
    loadingFile: "Memuat...",
    chooseFile: "Pilih berkas...",
    noFileChosen: "Tidak ada file yang dipilih",
    filePlaceholder: "Seret dan jatuhkan file di sini atau klik tombol di bawah ini dan pilih file yang akan diunggah.",
    confirmDelete: "Apakah Anda ingin menghapus catatan?",
    keyDuplicationError: "Nilai harus unik.",
    addColumn: "Tambah kolom",
    addRow: "Tambah baris",
    removeRow: "Hapus",
    emptyRowsText: "Tidak ada baris.",
    addPanel: "Tambah baru",
    removePanel: "Hapus",
    showDetails: "Tampilkan Detail",
    hideDetails: "Sembunyikan Detail",
    choices_Item: "item",
    matrix_column: "Kolom",
    matrix_row: "Baris",
    multipletext_itemname: "Teks",
    savingData: "Hasil sedang disimpan pada server...",
    savingDataError: "Kesalahan terjadi dan kami tidak dapat menyimpan hasil.",
    savingDataSuccess: "Hasil telah sukses disimpan!",
    savingExceedSize: "Respons Anda melebihi 64 KB. Harap kurangi ukuran file Anda dan coba lagi atau hubungi pemilik survei.",
    saveAgainButton: "Coba lagi",
    timerMin: "menit",
    timerSec: "detik",
    timerSpentAll: "Anda telah menghabiskan {0} pada halaman ini dan {1} secara keseluruhan.",
    timerSpentPage: "YAnda telah menghabiskan {0} pada halaman ini.",
    timerSpentSurvey: "Anda telah menghabiskan {0} secara keseluruhan.",
    timerLimitAll: "Anda telah menghabiskan {0} dari {1} pada halaman ini dan {2} dari {3} secara keseluruhan.",
    timerLimitPage: "Anda telah menghabiskan {0} dari {1} pada halaman ini.",
    timerLimitSurvey: "Anda telah menghabiskan {0} dari {1} secara keseluruhan.",
    clearCaption: "Bersihkan",
    signaturePlaceHolder: "Tanda tangan di sini",
    signaturePlaceHolderReadOnly: "Tidak ada tanda tangan",
    chooseFileCaption: "Pilih File",
    takePhotoCaption: "Ambil Foto",
    photoPlaceholder: "Klik tombol di bawah ini untuk mengambil foto menggunakan kamera.",
    fileOrPhotoPlaceholder: "Seret dan lepas atau pilih file untuk diunggah atau mengambil foto menggunakan kamera.",
    replaceFileCaption: "Ganti file",
    removeFileCaption: "Hapus berkas ini",
    booleanCheckedLabel: "Iya",
    booleanUncheckedLabel: "Tidak",
    confirmRemoveFile: "Anda yakin ingin menghapus file ini: {0}?",
    confirmRemoveAllFiles: "Anda yakin ingin menghapus semua file?",
    questionTitlePatternText: "Judul pertanyaan",
    modalCancelButtonText: "Membatalkan",
    modalApplyButtonText: "Berlaku",
    filterStringPlaceholder: "Ketik untuk mencari...",
    emptyMessage: "Tidak ada data untuk ditampilkan",
    noEntriesText: "Belum ada entri.\nKlik tombol di bawah ini untuk menambahkan entri baru.",
    noEntriesReadonlyText: "Tidak ada entri.",
    tabTitlePlaceholder: "Panel Baru",
    more: "Lebih",
    tagboxDoneButtonCaption: "OKE",
    selectToRankEmptyRankedAreaText: "Semua pilihan diberi peringkat",
    selectToRankEmptyUnrankedAreaText: "Seret dan lepas pilihan di sini untuk memberi peringkat",
    ok: "OKE",
    cancel: "Membatalkan"
};
Object(survey_core__WEBPACK_IMPORTED_MODULE_0__["setupLocale"])({ localeCode: "id", strings: indonesianStrings, nativeName: "bahasa indonesia", englishName: "Indonesian" });
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// indexText: "{0} of {1}" => "{0} dari {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panel {panelIndex}"
// ratingOptionsCaption: "Select..." => "Pilih..."
// minError: "The value should not be less than {0}" => "Nilainya tidak boleh kurang dari {0}"
// maxError: "The value should not be greater than {0}" => "Nilai tidak boleh lebih besar dari {0}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Seret dan jatuhkan file di sini atau klik tombol di bawah ini dan pilih file yang akan diunggah."
// emptyRowsText: "There are no rows." => "Tidak ada baris."
// multipletext_itemname: "text" => "Teks"
// signaturePlaceHolder: "Sign here" => "Tanda tangan di sini"
// modalCancelButtonText: "Cancel" => "Membatalkan"
// modalApplyButtonText: "Apply" => "Berlaku"
// filterStringPlaceholder: "Type to search..." => "Ketik untuk mencari..."
// emptyMessage: "No data to display" => "Tidak ada data untuk ditampilkan"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Belum ada entri.\nKlik tombol di bawah ini untuk menambahkan entri baru."
// noEntriesReadonlyText: "There are no entries." => "Tidak ada entri."
// more: "More" => "Lebih"
// tagboxDoneButtonCaption: "OK" => "OKE"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Semua pilihan diberi peringkat"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Seret dan lepas pilihan di sini untuk memberi peringkat"// takePhotoCaption: "Take Photo" => "Ambil Foto"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Klik tombol di bawah ini untuk mengambil foto menggunakan kamera."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Seret dan lepas atau pilih file untuk diunggah atau mengambil foto menggunakan kamera."
// replaceFileCaption: "Replace file" => "Ganti file"// eachRowUniqueError: "Each row must have a unique value." => "Setiap baris harus memiliki nilai unik."
// noUploadFilesHandler: "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event." => "File tidak dapat diunggah. Harap tambahkan handler untuk acara 'onUploadFiles'."
// showDetails: "Show Details" => "Tampilkan Detail"
// hideDetails: "Hide Details" => "Sembunyikan Detail"
// ok: "OK" => "OKE"
// cancel: "Cancel" => "Membatalkan"
// refuseItemText: "Refuse to answer" => "Menolak untuk menjawab"
// dontKnowItemText: "Don't know" => "Tidak tahu"// savingExceedSize: "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact a survey owner." => "Respons Anda melebihi 64 KB. Harap kurangi ukuran file Anda dan coba lagi atau hubungi pemilik survei."
// signaturePlaceHolderReadOnly: "No signature" => "Tidak ada tanda tangan"// tabTitlePlaceholder: "New Panel" => "Panel Baru"// deselectAllItemText: "Deselect all" => "Batalkan pilihan semua"
// textNoDigitsAllow: "Numbers are not allowed." => "Nomor tidak diperbolehkan."


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
//# sourceMappingURL=indonesian.js.map