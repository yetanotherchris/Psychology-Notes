/*!
 * surveyjs - Survey JavaScript library v1.12.26
 * Copyright (c) 2015-2025 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"));
	else if(typeof define === 'function' && define.amd)
		define("russian", ["survey-core"], factory);
	else if(typeof exports === 'object')
		exports["russian"] = factory(require("survey-core"));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/survey-core/src/localization/russian.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/survey-core/src/localization/russian.ts":
/*!**********************************************************!*\
  !*** ./packages/survey-core/src/localization/russian.ts ***!
  \**********************************************************/
/*! exports provided: russianSurveyStrings */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "russianSurveyStrings", function() { return russianSurveyStrings; });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);

var russianSurveyStrings = {
    pagePrevText: "Назад",
    pageNextText: "Далее",
    completeText: "Готово",
    previewText: "Предварительный просмотр",
    editText: "Редактирование",
    startSurveyText: "Начать",
    otherItemText: "Другое (пожалуйста, опишите)",
    noneItemText: "Нет",
    refuseItemText: "Отказываюсь отвечать",
    dontKnowItemText: "Не знаю",
    selectAllItemText: "Выбрать всё",
    deselectAllItemText: "Отмена выбора всех",
    progressText: "Страница {0} из {1}",
    indexText: "{0} из {1}",
    panelDynamicProgressText: "Запись {0} из {1}",
    panelDynamicTabTextFormat: "Панель {panelIndex}",
    questionsProgressText: "Oтвечено на {0}/{1} вопросов",
    emptySurvey: "Нет ни одного вопроса.",
    completingSurvey: "Благодарим Вас за заполнение анкеты!",
    completingSurveyBefore: "Вы уже проходили этот опрос.",
    loadingSurvey: "Загрузка с сервера...",
    placeholder: "Выбрать...",
    ratingOptionsCaption: "Нажмите здесь, чтобы оценить...",
    value: "значение",
    requiredError: "Пожалуйста, ответьте на вопрос.",
    requiredErrorInPanel: "Пожалуйста, ответьте по крайней мере на один вопрос.",
    requiredInAllRowsError: "Пожалуйста, ответьте на вопросы в каждой строке.",
    eachRowUniqueError: "Каждая строка должна иметь уникальное значение.",
    numericError: "Ответ должен быть числом.",
    minError: "Значение не должно быть меньше {0}.",
    maxError: "Значение не должно превышать {0}.",
    textNoDigitsAllow: "Номера не допускаются.",
    textMinLength: "Пожалуйста введите больше {0} символов.",
    textMaxLength: "Пожалуйста введите меньше {0} символов.",
    textMinMaxLength: "Пожалуйста введите больше {0} и меньше {1} символов.",
    minRowCountError: "Пожалуйста, заполните не меньше {0} строк.",
    minSelectError: "Пожалуйста, выберите хотя бы {0} вариантов.",
    maxSelectError: "Пожалуйста, выберите не более {0} вариантов.",
    numericMinMax: "'{0}' должно быть не меньше чем {1}, и не больше чем {2}",
    numericMin: "'{0}' должно быть не меньше чем {1}",
    numericMax: "'{0}' должно быть не больше чем {1}",
    invalidEmail: "Пожалуйста, введите действительный адрес электронной почты.",
    invalidExpression: "Выражение {0} должно возвращать 'true'.",
    urlRequestError: "Запрос вернул ошибку '{0}'. {1}",
    urlGetChoicesError: "Ответ на запрос пришел пустой или свойство 'path' указано неверно",
    exceedMaxSize: "Размер файла не должен превышать {0}.",
    noUploadFilesHandler: "Файлы не могут быть загружены. Пожалуйста, добавьте обработчик для события 'onUploadFiles'.",
    otherRequiredError: "Пожалуйста, введите данные в поле 'Другое'",
    uploadingFile: "Ваш файл загружается. Подождите несколько секунд и попробуйте снова.",
    loadingFile: "Загрузка...",
    chooseFile: "Выберите файл(ы)...",
    noFileChosen: "Файл не выбран",
    filePlaceholder: "Перетащите файл сюда или нажмите кнопку ниже, чтобы загрузить файл.",
    confirmDelete: "Вы точно хотите удалить запись?",
    keyDuplicationError: "Это значение должно быть уникальным.",
    addColumn: "Добавить колонку",
    addRow: "Добавить строку",
    removeRow: "Удалить",
    emptyRowsText: "Рядов нет.",
    addPanel: "Добавить новую",
    removePanel: "Удалить",
    showDetails: "Показать подробности",
    hideDetails: "Скрыть подробности",
    choices_Item: "Вариант",
    matrix_column: "Колонка",
    matrix_row: "Строка",
    multipletext_itemname: "текст",
    savingData: "Результаты сохраняются на сервер...",
    savingDataError: "Произошла ошибка, результат не был сохранён.",
    savingDataSuccess: "Результат успешно сохранён!",
    savingExceedSize: "Ваш ответ превышает 64 КБ. Уменьшите размер файла (файлов) и повторите попытку или обратитесь к владельцу опроса.",
    saveAgainButton: "Попробовать снова",
    timerMin: "мин",
    timerSec: "сек",
    timerSpentAll: "Вы потратили {0} на этой странице и {1} всего.",
    timerSpentPage: "Вы потратили {0} на этой странице.",
    timerSpentSurvey: "Вы потратили {0} в течение теста.",
    timerLimitAll: "Вы потратили {0} из {1} на этой странице и {2} из {3} для всего теста.",
    timerLimitPage: "Вы потратили {0} из {1} на этой странице.",
    timerLimitSurvey: "Вы потратили {0} из {1} для всего теста.",
    clearCaption: "Очистить",
    signaturePlaceHolder: "Подпишите здесь",
    signaturePlaceHolderReadOnly: "Без подписи",
    chooseFileCaption: "Выберите файл",
    takePhotoCaption: "Сделать фото",
    photoPlaceholder: "Нажмите кнопку ниже, чтобы сделать снимок с помощью камеры.",
    fileOrPhotoPlaceholder: "Перетащите или выберите файл для загрузки или съемки с помощью камеры.",
    replaceFileCaption: "Заменить файл",
    removeFileCaption: "Удалить файл",
    booleanCheckedLabel: "Да",
    booleanUncheckedLabel: "Нет",
    confirmRemoveFile: "Вы уверены, что хотите удалить этот файл: {0}?",
    confirmRemoveAllFiles: "Вы уверены, что хотите удалить все файлы?",
    questionTitlePatternText: "Название вопроса",
    modalCancelButtonText: "Отменить",
    modalApplyButtonText: "Применять",
    filterStringPlaceholder: "Введите для поиска...",
    emptyMessage: "Нет данных для отображения",
    noEntriesText: "Пока нет записей.\nНажмите кнопку ниже, чтобы добавить новую запись.",
    noEntriesReadonlyText: "Записей нет.",
    tabTitlePlaceholder: "Новая панель",
    more: "Больше",
    tagboxDoneButtonCaption: "Хорошо",
    selectToRankEmptyRankedAreaText: "Все варианты ранжируются",
    selectToRankEmptyUnrankedAreaText: "Перетащите сюда варианты, чтобы ранжировать их",
    ok: "Хорошо",
    cancel: "Отмена"
};
Object(survey_core__WEBPACK_IMPORTED_MODULE_0__["setupLocale"])({ localeCode: "ru", strings: russianSurveyStrings, nativeName: "русский", englishName: "Russian" });
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Панель {panelIndex}"
// emptyMessage: "No data to display" => "Нет данных для отображения"
// noEntriesReadonlyText: "There are no entries." => "Записей нет."
// more: "More" => "Больше"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Все варианты ранжируются"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Перетащите сюда варианты, чтобы ранжировать их"// takePhotoCaption: "Take Photo" => "Сделать фото"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Нажмите кнопку ниже, чтобы сделать снимок с помощью камеры."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Перетащите или выберите файл для загрузки или съемки с помощью камеры."
// replaceFileCaption: "Replace file" => "Заменить файл"// eachRowUniqueError: "Each row must have a unique value." => "Каждая строка должна иметь уникальное значение."
// noUploadFilesHandler: "Files cannot be uploaded. Please add a handler for the 'onUploadFiles' event." => "Файлы не могут быть загружены. Пожалуйста, добавьте обработчик для события 'onUploadFiles'."
// showDetails: "Show Details" => "Показать подробности"
// hideDetails: "Hide Details" => "Скрыть подробности"
// cancel: "Cancel" => "Отмена"// savingExceedSize: "Your response exceeds 64KB. Please reduce the size of your file(s) and try again or contact a survey owner." => "Ваш ответ превышает 64 КБ. Уменьшите размер файла (файлов) и повторите попытку или обратитесь к владельцу опроса."
// signaturePlaceHolderReadOnly: "No signature" => "Без подписи"// tabTitlePlaceholder: "New Panel" => "Новая панель"// deselectAllItemText: "Deselect all" => "Отмена выбора всех"
// textNoDigitsAllow: "Numbers are not allowed." => "Номера не допускаются."


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
//# sourceMappingURL=russian.js.map