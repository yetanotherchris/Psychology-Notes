/*!
 * surveyjs - Survey JavaScript library v1.12.26
 * Copyright (c) 2015-2025 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("italian", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["italian"] = factory(require("survey-core"));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/survey-core/src/localization/italian.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/survey-core/src/localization/italian.ts":
/*!**********************************************************!*\
  !*** ./packages/survey-core/src/localization/italian.ts ***!
  \**********************************************************/
/*! exports provided: italianSurveyStrings */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "italianSurveyStrings", function() { return italianSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var italianSurveyStrings = {
    pagePrevText: "Precedente",
    pageNextText: "Successivo",
    completeText: "Salva",
    previewText: "Anteprima",
    editText: "Modifica",
    startSurveyText: "Inizio",
    otherItemText: "Altro (descrivi)",
    noneItemText: "Nessuno",
    refuseItemText: "Rifiuta di rispondere",
    dontKnowItemText: "Non lo so",
    selectAllItemText: "Seleziona tutti",
    deselectAllItemText: "Deseleziona tutto",
    progressText: "Pagina {0} di {1}",
    indexText: "{0} da {1}",
    panelDynamicProgressText: "Record di {0} di {1}",
    panelDynamicTabTextFormat: "Pannello {panelIndex}",
    questionsProgressText: "Risposte a {0}/{1} domande",
    emptySurvey: "Non ci sono pagine o domande visibili nel questionario.",
    completingSurvey: "Grazie per aver completato il questionario!",
    completingSurveyBefore: "I nostri records mostrano che hai già completato questo questionario.",
    loadingSurvey: "Caricamento del questionario in corso...",
    placeholder: "Scegli...",
    ratingOptionsCaption: "Tocca qui per valutare...",
    value: "valore",
    requiredError: "Campo obbligatorio",
    requiredErrorInPanel: "Per Favore, rispondi ad almeno una domanda.",
    requiredInAllRowsError: "Completare tutte le righe",
    eachRowUniqueError: "Ogni riga deve avere un valore univoco.",
    numericError: "Il valore deve essere numerico",
    minError: "Il valore non deve essere inferiore a {0}",
    maxError: "Il valore non deve essere maggiore di {0}",
    textNoDigitsAllow: "I numeri non sono ammessi.",
    textMinLength: "Inserire almeno {0} caratteri",
    textMaxLength: "Lunghezza massima consentita {0} caratteri",
    textMinMaxLength: "Inserire una stringa con minimo {0} e massimo {1} caratteri",
    minRowCountError: "Completare almeno {0} righe.",
    minSelectError: "Selezionare almeno {0} varianti.",
    maxSelectError: "Selezionare massimo {0} varianti.",
    numericMinMax: "'{0}' deve essere uguale o superiore a {1} e uguale o inferiore a {2}",
    numericMin: "'{0}' deve essere uguale o superiore a {1}",
    numericMax: "'{0}' deve essere uguale o inferiore a {1}",
    invalidEmail: "Inserire indirizzo mail valido",
    invalidExpression: "L'espressione: {0} dovrebbe tornare 'vero'.",
    urlRequestError: "La richiesta ha risposto con un errore '{0}'. {1}",
    urlGetChoicesError: "La richiesta ha risposto null oppure il percorso non è corretto",
    exceedMaxSize: "Il file non può eccedere {0}",
    noUploadFilesHandler: "I file non possono essere caricati. Aggiungere un gestore per l'evento 'onUploadFiles'.",
    otherRequiredError: "Inserire il valore 'altro'",
    uploadingFile: "File in caricamento. Attendi alcuni secondi e riprova",
    loadingFile: "Caricamento...",
    chooseFile: "Selezionare file(s)...",
    noFileChosen: "Nessun file selezionato",
    filePlaceholder: "Trascina un file qui o fai clic sul pulsante in basso per caricare il file.",
    confirmDelete: "Sei sicuro di voler elminare il record?",
    keyDuplicationError: "Questo valore deve essere univoco.",
    addColumn: "Aggiungi colonna",
    addRow: "Aggiungi riga",
    removeRow: "Rimuovi riga",
    emptyRowsText: "Non ci sono righe.",
    addPanel: "Aggiungi riga",
    removePanel: "Elimina",
    showDetails: "Mostra dettagli",
    hideDetails: "Nascondi dettagli",
    choices_Item: "Elemento",
    matrix_column: "Colonna",
    matrix_row: "Riga",
    multipletext_itemname: "testo",
    savingData: "Salvataggio dati sul server...",
    savingDataError: "Si è verificato un errore e non è stato possibile salvare i risultati.",
    savingDataSuccess: "I risultati sono stati salvati con successo!",
    savingExceedSize: "La tua risposta supera i 64 KB. Riduci le dimensioni dei tuoi file e riprova o contatta il proprietario di un'indagine.",
    saveAgainButton: "Riprova",
    timerMin: "min",
    timerSec: "sec",
    timerSpentAll: "Hai impiegato {0} su questa pagina e {1} in totale.",
    timerSpentPage: "Hai impiegato {0} su questa pagina.",
    timerSpentSurvey: "Hai impiegato {0} in totale.",
    timerLimitAll: "Hai impiegato {0} di {1} su questa pagina e {2} di {3} in totale.",
    timerLimitPage: "Hai impiegato {0} di {1} su questa pagina.",
    timerLimitSurvey: "Hai impiegato {0} di {1} in totale.",
    clearCaption: "Cancella",
    signaturePlaceHolder: "Firmare qui",
    signaturePlaceHolderReadOnly: "Nessuna firma",
    chooseFileCaption: "Scegliere il file",
    takePhotoCaption: "Scatta foto",
    photoPlaceholder: "Fai clic sul pulsante qui sotto per scattare una foto utilizzando la fotocamera.",
    fileOrPhotoPlaceholder: "Trascina e rilascia o seleziona un file da caricare o scattare una foto utilizzando la fotocamera.",
    replaceFileCaption: "Sostituisci file",
    removeFileCaption: "Rimuovere questo file",
    booleanCheckedLabel: "Sì",
    booleanUncheckedLabel: "No",
    confirmRemoveFile: "Sei sicuro di voler elminare questo file: {0}?",
    confirmRemoveAllFiles: "Sei sicuro di voler elminare tutti i files?",
    questionTitlePatternText: "Titolo della domanda",
    modalCancelButtonText: "Annulla",
    modalApplyButtonText: "Applicare",
    filterStringPlaceholder: "Digita per cercare...",
    emptyMessage: "Nessun dato da visualizzare",
    noEntriesText: "Non ci sono ancora voci.\nFai clic sul pulsante qui sotto per aggiungere una nuova voce.",
    noEntriesReadonlyText: "Non ci sono voci.",
    tabTitlePlaceholder: "Nuovo pannello",
    more: "Più",
    tagboxDoneButtonCaption: "OK",
    selectToRankEmptyRankedAreaText: "Tutte le scelte sono classificate",
    selectToRankEmptyUnrankedAreaText: "Trascina e rilascia le scelte qui per classificarle",
    ok: "OK",
    cancel: "Annulla"
};
Object(survey_core__WEBPACK_IMPORTED_MODULE_0__["setupLocale"])({ localeCode: "it", strings: italianSurveyStrings, nativeName: "italiano", englishName: "Italian" });
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Pannello {panelIndex}"
// emptyMessage: "No data to display" => "Nessun dato da visualizzare"
// noEntriesReadonlyText: "There are no entries." => "Non ci sono voci."
// more: "More" => "Più"
// tagboxDoneButtonCaption: "OK" => "OK"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Tutte le scelte sono classificate"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Trascina e rilascia le scelte qui per classificarle"// takePhotoCaption: "Take Photo" => "Scatta foto"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Fai clic sul pulsante qui sotto per scattare una foto utilizzando la fotocamera."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Trascina e rilascia o seleziona un file da caricare o scattare una foto utilizzando la fotocamera."
// replaceFileCaption: "Replace file" => "Sostituisci file"// eachRowUniqueError: "Each row must have a unique value." => "Ogni riga deve avere un valore univoco."
// noUploadFilesHandler: "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event." => "I file non possono essere caricati. Aggiungere un gestore per l'evento 'onUploadFiles'."
// showDetails: "Show Details" => "Mostra dettagli"
// hideDetails: "Hide Details" => "Nascondi dettagli"
// ok: "OK" => "OK"
// cancel: "Cancel" => "Annulla"
// refuseItemText: "Refuse to answer" => "Rifiuta di rispondere"
// dontKnowItemText: "Don't know" => "Non lo so"// savingExceedSize: "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact a survey owner." => "La tua risposta supera i 64 KB. Riduci le dimensioni dei tuoi file e riprova o contatta il proprietario di un'indagine."
// signaturePlaceHolderReadOnly: "No signature" => "Nessuna firma"// tabTitlePlaceholder: "New Panel" => "Nuovo pannello"// deselectAllItemText: "Deselect all" => "Deseleziona tutto"
// textNoDigitsAllow: "Numbers are not allowed." => "I numeri non sono ammessi."


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
//# sourceMappingURL=italian.js.map