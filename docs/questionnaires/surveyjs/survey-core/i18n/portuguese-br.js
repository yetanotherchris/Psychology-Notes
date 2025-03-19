/*!
 * surveyjs - Survey JavaScript library v1.12.26
 * Copyright (c) 2015-2025 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("portuguese-br", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["portuguese-br"] = factory(require("survey-core"));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/survey-core/src/localization/portuguese-br.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/survey-core/src/localization/portuguese-br.ts":
/*!****************************************************************!*\
  !*** ./packages/survey-core/src/localization/portuguese-br.ts ***!
  \****************************************************************/
/*! exports provided: portugueseBrSurveyStrings */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portugueseBrSurveyStrings", function() { return portugueseBrSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

/**
 * You don't need to translate strings that have the same value as Portuguese translation
 */
var portugueseBrSurveyStrings = {
    pagePrevText: "Anterior",
    pageNextText: "Próximo",
    completeText: "Completar",
    previewText: "Visualizar",
    editText: "Editar",
    startSurveyText: "Começar",
    otherItemText: "Outros (descrever)",
    noneItemText: "Nenhum",
    refuseItemText: "Recusar-se a responder",
    dontKnowItemText: "Não sei",
    selectAllItemText: "Selecionar tudo",
    deselectAllItemText: "Desmarcar tudo",
    progressText: "Página {0} de {1}",
    indexText: "{0} de {1}",
    panelDynamicProgressText: "{0} de {1}",
    panelDynamicTabTextFormat: "Painel {panelIndex}",
    questionsProgressText: "Perguntas respondidas {0}/{1}",
    emptySurvey: "Não há página visível ou pergunta na pesquisa.",
    completingSurvey: "Obrigado por finalizar a pesquisa!",
    completingSurveyBefore: "Nossos registros mostram que você já finalizou a pesquisa.",
    loadingSurvey: "A pesquisa está carregando...",
    placeholder: "Selecionar...",
    ratingOptionsCaption: "Selecionar...",
    value: "valor",
    requiredError: "Por favor, responda a pergunta.",
    requiredErrorInPanel: "Por favor, responda pelo menos uma pergunta.",
    requiredInAllRowsError: "Por favor, responda as perguntas em todas as linhas.",
    eachRowUniqueError: "Cada linha deve ter um valor exclusivo.",
    numericError: "O valor deve ser numérico.",
    minError: "O valor não deve ser inferior a {0}",
    maxError: "O valor não deve ser maior que {0}",
    textNoDigitsAllow: "Números não são permitidos.",
    textMinLength: "Introduza pelo menos {0} caractere(s).",
    textMaxLength: "Introduza no máximo {0} caractere(s).",
    textMinMaxLength: "Insira pelo menos {0} e não mais do que {1} caracteres.",
    minRowCountError: "Por favor, preencha pelo menos {0} linha(s).",
    minSelectError: "Selecione pelo menos {0} variante(s).",
    maxSelectError: "Por favor, selecione não mais do que {0} opções.",
    numericMinMax: "O \"{0}\" deve ser pelo menos {1} e no máximo {2}",
    numericMin: "O \"{0}\" deve ser pelo menos {1}",
    numericMax: "O \"{0}\" deve ser no máximo {1}",
    invalidEmail: "Por favor, informe um e-mail válido.",
    invalidExpression: "A expressão: {0} deve retornar 'verdadeiro'.",
    urlRequestError: "A requisição retornou o erro '{0}'. {1}",
    urlGetChoicesError: "A requisição não retornou dados ou o 'caminho' da requisição não está correto",
    exceedMaxSize: "O tamanho do arquivo não deve exceder {0}.",
    noUploadFilesHandler: "Os arquivos não podem ser carregados. Adicione um manipulador para o evento 'onUploadFiles'.",
    otherRequiredError: "Por favor, informe o outro valor.",
    uploadingFile: "Seu arquivo está sendo carregado. Por favor, aguarde alguns segundos e tente novamente.",
    loadingFile: "Carregando...",
    chooseFile: "Escolha o(s) arquivo(s)...",
    noFileChosen: "Nenhum arquivo escolhido",
    filePlaceholder: "Arraste e solte um arquivo aqui ou clique no botão abaixo e escolha um arquivo para carregar.",
    confirmDelete: "Tem certeza que deseja deletar?",
    keyDuplicationError: "Esse valor deve ser único.",
    addColumn: "Adicionar coluna",
    addRow: "Adicionar linha",
    removeRow: "Retirar",
    emptyRowsText: "Não há filas.",
    addPanel: "Adicionar novo",
    removePanel: "Retirar",
    showDetails: "Mostrar detalhes",
    hideDetails: "Ocultar detalhes",
    choices_Item: "item",
    matrix_column: "Coluna",
    matrix_row: "Remar",
    multipletext_itemname: "Texto",
    savingData: "Os resultados esto sendo salvos no servidor...",
    savingDataError: "Ocorreu um erro e não foi possível salvar os resultados.",
    savingDataSuccess: "Os resultados foram salvos com sucesso!",
    savingExceedSize: "Sua resposta excede 64KB. Reduza o tamanho do(s) seu(s) arquivo(s) e tente novamente ou entre em contato com o proprietário do questionário.",
    saveAgainButton: "Tentar novamente",
    timerMin: "Min",
    timerSec: "segundo",
    timerSpentAll: "Você gastou {0} nesta página e {1} no total.",
    timerSpentPage: "Você passou {0} nesta página.",
    timerSpentSurvey: "Gastou {0} no total.",
    timerLimitAll: "Você gastou {0} de {1} nesta página e {2} de {3} no total.",
    timerLimitPage: "Você gastou {0} de {1} nesta página.",
    timerLimitSurvey: "Gastou {0} de {1} no total.",
    clearCaption: "Claro",
    signaturePlaceHolder: "Assine aqui",
    signaturePlaceHolderReadOnly: "Sem assinatura",
    chooseFileCaption: "Escolher arquivo",
    takePhotoCaption: "Tirar foto",
    photoPlaceholder: "Clique no botão abaixo para tirar uma foto usando a câmera.",
    fileOrPhotoPlaceholder: "Arraste e solte ou selecione um arquivo para carregar ou tirar uma foto usando a câmera.",
    replaceFileCaption: "Substituir arquivo",
    removeFileCaption: "Remover este arquivo",
    booleanCheckedLabel: "Sim",
    booleanUncheckedLabel: "Não",
    confirmRemoveFile: "Tem certeza que deseja remover este arquivo: {0}?",
    confirmRemoveAllFiles: "Tem certeza que deseja remover todos os arquivos?",
    questionTitlePatternText: "Título da pergunta",
    modalCancelButtonText: "Cancelar",
    modalApplyButtonText: "Aplicar",
    filterStringPlaceholder: "Digite para pesquisar...",
    emptyMessage: "Nenhum dado a ser exibido",
    noEntriesText: "Ainda não há inscrições.\nClique no botão abaixo para adicionar uma nova entrada.",
    noEntriesReadonlyText: "Não há entradas.",
    tabTitlePlaceholder: "Novo Painel",
    more: "Mais",
    tagboxDoneButtonCaption: "OKEY",
    selectToRankEmptyRankedAreaText: "Todas as opções são classificadas",
    selectToRankEmptyUnrankedAreaText: "Arraste e solte as opções aqui para classificá-las",
    ok: "OKEY",
    cancel: "Cancelar"
};
Object(survey_core__WEBPACK_IMPORTED_MODULE_0__["setupLocale"])({ localeCode: "pt-br", strings: portugueseBrSurveyStrings, nativeName: "português brasileiro", englishName: "Brazilian Portuguese" });
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// pagePrevText: "Previous" => "Anterior"
// pageNextText: "Next" => "Próximo"
// completeText: "Complete" => "Completar"
// previewText: "Preview" => "Visualizar"
// editText: "Edit" => "Editar"
// startSurveyText: "Start" => "Começar"
// otherItemText: "Other (describe)" => "Outros (descrever)"
// noneItemText: "None" => "Nenhum"
// selectAllItemText: "Select All" => "Selecionar tudo"
// progressText: "Page {0} of {1}" => "Página {0} de {1}"
// indexText: "{0} of {1}" => "{0} de {1}"
// panelDynamicProgressText: "{0} of {1}" => "{0} de {1}"
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Painel {panelIndex}"
// questionsProgressText: "Answered {0}/{1} questions" => "Perguntas respondidas {0}/{1}"
// placeholder: "Select..." => "Selecionar..."
// ratingOptionsCaption: "Select..." => "Selecionar..."
// value: "value" => "valor"
// numericError: "The value should be numeric." => "O valor deve ser numérico."
// minError: "The value should not be less than {0}" => "O valor não deve ser inferior a {0}"
// maxError: "The value should not be greater than {0}" => "O valor não deve ser maior que {0}"
// textMinLength: "Please enter at least {0} character(s)." => "Introduza pelo menos {0} caractere(s)."
// textMaxLength: "Please enter no more than {0} character(s)." => "Introduza no máximo {0} caractere(s)."
// textMinMaxLength: "Please enter at least {0} and no more than {1} characters." => "Insira pelo menos {0} e não mais do que {1} caracteres."
// minRowCountError: "Please fill in at least {0} row(s)." => "Por favor, preencha pelo menos {0} linha(s)."
// minSelectError: "Please select at least {0} variant(s)." => "Selecione pelo menos {0} variante(s)."
// numericMinMax: "The '{0}' should be at least {1} and at most {2}" => "O \"{0}\" deve ser pelo menos {1} e no máximo {2}"
// numericMin: "The '{0}' should be at least {1}" => "O \"{0}\" deve ser pelo menos {1}"
// numericMax: "The '{0}' should be at most {1}" => "O \"{0}\" deve ser no máximo {1}"
// invalidExpression: "The expression: {0} should return 'true'." => "A expressão: {0} deve retornar 'verdadeiro'."
// exceedMaxSize: "The file size should not exceed {0}." => "O tamanho do arquivo não deve exceder {0}."
// chooseFile: "Choose file(s)..." => "Escolha o(s) arquivo(s)..."
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Arraste e solte um arquivo aqui ou clique no botão abaixo e escolha um arquivo para carregar."
// addColumn: "Add Column" => "Adicionar coluna"
// addRow: "Add Row" => "Adicionar linha"
// removeRow: "Remove" => "Retirar"
// emptyRowsText: "There are no rows." => "Não há filas."
// addPanel: "Add new" => "Adicionar novo"
// removePanel: "Remove" => "Retirar"
// choices_Item: "item" => "item"
// matrix_column: "Column" => "Coluna"
// matrix_row: "Row" => "Remar"
// multipletext_itemname: "text" => "Texto"
// saveAgainButton: "Try again" => "Tentar novamente"
// timerMin: "min" => "Min"
// timerSec: "sec" => "segundo"
// timerSpentAll: "You have spent {0} on this page and {1} in total." => "Você gastou {0} nesta página e {1} no total."
// timerSpentPage: "You have spent {0} on this page." => "Você passou {0} nesta página."
// timerSpentSurvey: "You have spent {0} in total." => "Gastou {0} no total."
// timerLimitAll: "You have spent {0} of {1} on this page and {2} of {3} in total." => "Você gastou {0} de {1} nesta página e {2} de {3} no total."
// timerLimitPage: "You have spent {0} of {1} on this page." => "Você gastou {0} de {1} nesta página."
// timerLimitSurvey: "You have spent {0} of {1} in total." => "Gastou {0} de {1} no total."
// clearCaption: "Clear" => "Claro"
// signaturePlaceHolder: "Sign here" => "Assine aqui"
// booleanCheckedLabel: "Yes" => "Sim"
// booleanUncheckedLabel: "No" => "Não"
// questionTitlePatternText: "Question Title" => "Título da pergunta"
// modalCancelButtonText: "Cancel" => "Cancelar"
// modalApplyButtonText: "Apply" => "Aplicar"
// filterStringPlaceholder: "Type to search..." => "Digite para pesquisar..."
// emptyMessage: "No data to display" => "Nenhum dado a ser exibido"
// noEntriesText: "There are no entries yet.\nClick the button below to add a new entry." => "Ainda não há inscrições.\nClique no botão abaixo para adicionar uma nova entrada."
// noEntriesReadonlyText: "There are no entries." => "Não há entradas."
// more: "More" => "Mais"
// tagboxDoneButtonCaption: "OK" => "OKEY"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Todas as opções são classificadas"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Arraste e solte as opções aqui para classificá-las"// takePhotoCaption: "Take Photo" => "Tirar foto"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Clique no botão abaixo para tirar uma foto usando a câmera."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Arraste e solte ou selecione um arquivo para carregar ou tirar uma foto usando a câmera."
// replaceFileCaption: "Replace file" => "Substituir arquivo"// eachRowUniqueError: "Each row must have a unique value." => "Cada linha deve ter um valor exclusivo."
// noUploadFilesHandler: "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event." => "Os arquivos não podem ser carregados. Adicione um manipulador para o evento 'onUploadFiles'."
// showDetails: "Show Details" => "Mostrar detalhes"
// hideDetails: "Hide Details" => "Ocultar detalhes"
// ok: "OK" => "OKEY"
// cancel: "Cancel" => "Cancelar"
// refuseItemText: "Refuse to answer" => "Recusar-se a responder"
// dontKnowItemText: "Don't know" => "Não sei"// savingExceedSize: "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact a survey owner." => "Sua resposta excede 64KB. Reduza o tamanho do(s) seu(s) arquivo(s) e tente novamente ou entre em contato com o proprietário do questionário."
// signaturePlaceHolderReadOnly: "No signature" => "Sem assinatura"// tabTitlePlaceholder: "New Panel" => "Novo Painel"// deselectAllItemText: "Deselect all" => "Desmarcar tudo"
// textNoDigitsAllow: "Numbers are not allowed." => "Números não são permitidos."


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
//# sourceMappingURL=portuguese-br.js.map