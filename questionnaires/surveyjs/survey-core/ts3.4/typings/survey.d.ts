import { JsonError } from "./jsonobject";
import { Base, EventBase } from "./base";
import { ISurvey, ISurveyData, ISurveyImpl, ITextProcessor, IQuestion, IPanel, IElement, IPage, ISurveyErrorOwner, ISurveyElement, IProgressInfo, IFindElement, ISurveyLayoutElement, IPlainDataOptions, LayoutElementContainer, IValueItemCustomPropValues, ILoadFromJSONOptions, IDropdownMenuOptions } from "./base-interfaces";
import { SurveyElementCore } from "./survey-element";
import { ISurveyTriggerOwner, SurveyTrigger, Trigger } from "./trigger";
import { CalculatedValue } from "./calculatedValue";
import { PageModel } from "./page";
import { dxSurveyService } from "./dxSurveyService";
import { LocalizableString } from "./localizablestring";
import { SurveyTimerModel, ISurveyTimerText } from "./surveyTimerModel";
import { IQuestionPlainData, Question } from "./question";
import { QuestionSelectBase } from "./question_baseselect";
import { ItemValue } from "./itemvalue";
import { PanelModel, QuestionRowModel } from "./panel";
import { HtmlConditionItem, UrlConditionItem } from "./expressionItems";
import { SurveyError } from "./survey-error";
import { IAction, Action } from "./actions/action";
import { ActionContainer } from "./actions/container";
import { QuestionPanelDynamicModel } from "./question_paneldynamic";
import { Notifier } from "./notifier";
import { TriggerExecutedEvent, CompletingEvent, CompleteEvent, ShowingPreviewEvent, NavigateToUrlEvent, CurrentPageChangingEvent, CurrentPageChangedEvent, ValueChangingEvent, ValueChangedEvent, VariableChangedEvent, QuestionVisibleChangedEvent, PageVisibleChangedEvent, PanelVisibleChangedEvent, QuestionCreatedEvent, QuestionAddedEvent, QuestionRemovedEvent, PanelAddedEvent, PanelRemovedEvent, PageAddedEvent, ValidateQuestionEvent, SettingQuestionErrorsEvent, ValidatePanelEvent, ErrorCustomTextEvent, ValidatedErrorsOnCurrentPageEvent, ProcessHtmlEvent, GetQuestionTitleEvent, GetTitleTagNameEvent, GetQuestionNoEvent, ProgressTextEvent, TextMarkdownEvent, TextRenderAsEvent, SendResultEvent, GetResultEvent, UploadFilesEvent, DownloadFileEvent, ClearFilesEvent, LoadChoicesFromServerEvent, ProcessTextValueEvent, UpdateQuestionCssClassesEvent, UpdatePanelCssClassesEvent, UpdatePageCssClassesEvent, UpdateChoiceItemCssEvent, AfterRenderSurveyEvent, AfterRenderHeaderEvent, AfterRenderPageEvent, AfterRenderQuestionEvent, AfterRenderQuestionInputEvent, AfterRenderPanelEvent, FocusInQuestionEvent, FocusInPanelEvent, ShowingChoiceItemEvent, ChoicesLazyLoadEvent, GetChoiceDisplayValueEvent, MatrixRowAddedEvent, MatrixBeforeRowAddedEvent, MatrixRowRemovingEvent, MatrixRowRemovedEvent, MatrixAllowRemoveRowEvent, MatrixDetailPanelVisibleChangedEvent, MatrixCellCreatingEvent, MatrixCellCreatedEvent, MatrixAfterCellRenderEvent, MatrixCellValueChangedEvent, MatrixCellValueChangingEvent, MatrixCellValidateEvent, DynamicPanelModifiedEvent, DynamicPanelRemovingEvent, TimerPanelInfoTextEvent, DynamicPanelItemValueChangedEvent, DynamicPanelGetTabTitleEvent, DynamicPanelCurrentIndexChangedEvent, IsAnswerCorrectEvent, DragDropAllowEvent, ScrollingElementToTopEvent, GetQuestionTitleActionsEvent, GetPanelTitleActionsEvent, GetPageTitleActionsEvent, GetPanelFooterActionsEvent, GetMatrixRowActionsEvent, ElementContentVisibilityChangedEvent, GetExpressionDisplayValueEvent, ServerValidateQuestionsEvent, MultipleTextItemAddedEvent, MatrixColumnAddedEvent, GetQuestionDisplayValueEvent, PopupVisibleChangedEvent, ChoicesSearchEvent, OpenFileChooserEvent, ElementWrapperComponentNameEvent, ElementWrapperComponentDataEvent, OpenDropdownMenuEvent } from "./survey-events-api";
import { QuestionMatrixDropdownModelBase } from "./question_matrixdropdownbase";
import { QuestionMatrixDynamicModel } from "./question_matrixdynamic";
import { QuestionFileModel } from "./question_file";
import { QuestionMultipleTextModel } from "./question_multipletext";
import { ITheme, ImageFit, ImageAttachment } from "./themes";
import { PopupModel } from "./popup";
import { Cover } from "./header";
import { QuestionSignaturePadModel } from "./question_signaturepad";
/**
 * The `SurveyModel` object contains properties and methods that allow you to control the survey and access its elements.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/nps-question/ (linkStyle))
 */
export declare class SurveyModel extends SurveyElementCore implements ISurvey, ISurveyData, ISurveyImpl, ISurveyTriggerOwner, ISurveyErrorOwner, ISurveyTimerText {
    static readonly TemplateRendererComponentName: string;
    static cssType: string;
    [index: string]: any;
    private static stylesManager;
    static platform: string;
    readonly platformName: string;
    notifier: Notifier;
    rootElement: HTMLElement;
    /*
    * A suffix added to the name of the property that stores comments.
    *
    * Default value: "-Comment"
    *
    * Many question types allow respondents to leave comments. To enable this functionality, set a question's [`showCommentArea`](https://surveyjs.io/form-library/documentation/api-reference/checkbox-question-model#showCommentArea) property to `true`. Comment values are saved in a separate property. The property name is composed of the question `name` and `commentSuffix`.
    *
    * Respondents can also leave comments when they select "Other" in choice-based questions, such as Dropdown or Checkboxes. The property name for the comment value is composed according to the same rules. However, you can use the question `name` as a key to store the comment value instead. Disable the [`storeOthersAsComment`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#storeOthersAsComment) property in this case.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/create-checkboxes-question-in-javascript/ (linkStyle))
    */
    commentSuffix: string;
    commentPrefix: string;
    private valuesHash;
    private variablesHash;
    private editingObjValue;
    private timerModelValue;
    private navigationBarValue;
    /**
     * An event that is raised after a [trigger](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#triggers) is executed.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * [Conditional Survey Logic (Triggers)](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#conditional-survey-logic-triggers (linkStyle)).
     * @see triggers
     * @see runTriggers
     */
    onTriggerExecuted: EventBase<SurveyModel, TriggerExecutedEvent>;
    /**
     * An event that is raised before the survey is completed. Use this event to prevent survey completion.
     * @see onComplete
     * @see doComplete
     * @see allowCompleteSurveyAutomatic
     */
    onCompleting: EventBase<SurveyModel, CompletingEvent>;
    /**
     * An event that is raised after the survey is completed. Use this event to send survey results to the server.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * For an example of how to use the methods described above, refer to the following help topic: [Store Survey Results in Your Own Database](https://surveyjs.io/form-library/documentation/handle-survey-results-store#store-survey-results-in-your-own-database).
     *
     * > Do not disable the [`showCompletedPage`](https://surveyjs.io/form-library/documentation/surveymodel#showCompletedPage) property if you call one of the `options.showSave...` methods. This is required because the UI that indicates data saving progress is integrated into the complete page. If you hide the complete page, the UI also becomes invisible.
     * @see onPartialSend
     * @see doComplete
     * @see allowCompleteSurveyAutomatic
     */
    onComplete: EventBase<SurveyModel, CompleteEvent>;
    /**
     * An event that is raised before the survey displays a [preview of given answers](https://surveyjs.io/form-library/documentation/design-survey/create-a-multi-page-survey#preview-page). Use this event to cancel the preview.
     * @see showPreviewBeforeComplete
     * @see showPreview
     * @see cancelPreview
     */
    onShowingPreview: EventBase<SurveyModel, ShowingPreviewEvent>;
    /**
     * An event that is raised before the survey navigates to a specified URL. Use this event to change the URL or cancel the navigation.
     * @see navigateToUrl
     * @see navigateToUrlOnCondition
     */
    onNavigateToUrl: EventBase<SurveyModel, NavigateToUrlEvent>;
    /**
     * An event that is raised when the survey [`state`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#state) changes to `"running"`.
     * @see firstPageIsStarted
     */
    onStarted: EventBase<SurveyModel, {}>;
    /**
     * An event that is raised to save incomplete survey results. Enable the [`sendResultOnPageNext`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#sendResultOnPageNext) property for this event to occur.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * Alternatively, you can handle the [`onCurrentPageChanged`](#onCurrentPageChanged) and [`onValueChanged`](#onValueChanged) events, as shown in the following demo: [Continue an Incomplete Survey](https://surveyjs.io/form-library/examples/survey-editprevious/).
     */
    onPartialSend: EventBase<SurveyModel, {}>;
    /**
     * An event that is raised before the current page is switched.
     *
     * @see currentPageNo
     * @see nextPage
     * @see prevPage
     **/
    onCurrentPageChanging: EventBase<SurveyModel, CurrentPageChangingEvent>;
    /**
     * An event that is raised after the current page is switched.
     *
     * @see currentPageNo
     * @see nextPage
     * @see prevPage
     */
    onCurrentPageChanged: EventBase<SurveyModel, CurrentPageChangedEvent>;
    /**
     * An event that is raised before a question value is changed.
     * @see setValue
     */
    onValueChanging: EventBase<SurveyModel, ValueChangingEvent>;
    /**
     * An event that is raised after a question value is changed.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * To handle value changes in matrix cells or panels within a [Dynamic Panel](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model), use the [`onMatrixCellValueChanged`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onMatrixCellValueChanged) or [`onDynamicPanelItemValueChanged`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onDynamicPanelItemValueChanged) event.
     * @see setValue
     */
    onValueChanged: EventBase<SurveyModel, ValueChangedEvent>;
    /**
     * An event that is raised after a [variable](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#variables) or [calculated value](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#calculated-values) is changed.
     *
     * @see setVariable
     * @see calculatedValues
     */
    onVariableChanged: EventBase<SurveyModel, VariableChangedEvent>;
    /**
     * An event that is raised after question visibility is changed.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * Refer to the following help topic for information on how to implement conditional visibility: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#conditional-visibility).
     */
    onQuestionVisibleChanged: EventBase<SurveyModel, QuestionVisibleChangedEvent>;
    onVisibleChanged: EventBase<SurveyModel, any>;
    /**
     * An event that is raised after page visibility is changed.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * Refer to the following help topic for information on how to implement conditional visibility: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#conditional-visibility).
     */
    onPageVisibleChanged: EventBase<SurveyModel, PageVisibleChangedEvent>;
    /**
     * An event that is raised after panel visibility is changed.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * Refer to the following help topic for information on how to implement conditional visibility: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#conditional-visibility).
     */
    onPanelVisibleChanged: EventBase<SurveyModel, PanelVisibleChangedEvent>;
    /**
     * An event that is raised when the survey creates any new object derived from [`Question`](https://surveyjs.io/form-library/documentation/api-reference/question).
     *
     * In a survey, complex elements ([Dynamic Matrix](https://surveyjs.io/form-library/examples/questiontype-matrixdynamic/), [Multiple Text](https://surveyjs.io/form-library/examples/questiontype-multipletext/), and [Dynamic Panel](https://surveyjs.io/form-library/examples/questiontype-paneldynamic/)) are composed of questions. Use this event to customize any question regardless of which survey element it belongs to.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * To use this event for questions loaded from JSON, create an empty survey model, add an event handler, and only then populate the model from the JSON object:
     *
     * ```js
     * import { Model } from "survey-core";
     *
     * const surveyJson = {
     *    // ...
     * };
     * // Create an empty model
     * const survey = new Model();
     * // Add an event handler
     * survey.onQuestionCreated.add((sender, options) => {
     *   //...
     * });
     * // Load the survey JSON schema
     * survey.fromJSON(surveyJson);
     * ```
     * @see onQuestionAdded
     */
    onQuestionCreated: EventBase<SurveyModel, QuestionCreatedEvent>;
    /**
     * An event that is raised when a new question is added to a panel or page.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * To use this event for questions loaded from JSON, create an empty survey model, add an event handler, and only then populate the model from the JSON object:
     *
     * ```js
     * import { Model } from "survey-core";
     *
     * const surveyJson = {
     *    // ...
     * };
     * // Create an empty model
     * const survey = new Model();
     * // Add an event handler
     * survey.onQuestionAdded.add((sender, options) => {
     *   //...
     * });
     * // Load the survey JSON schema
     * survey.fromJSON(surveyJson);
     * ```
     * @see onQuestionCreated
     */
    onQuestionAdded: EventBase<SurveyModel, QuestionAddedEvent>;
    /**
     * An event that is raised after a question is deleted from the survey.
     */
    onQuestionRemoved: EventBase<SurveyModel, QuestionRemovedEvent>;
    /**
     * An event that is raised when a new panel is added to a page.
     */
    onPanelAdded: EventBase<SurveyModel, PanelAddedEvent>;
    /**
     * An event that is raised after a panel is deleted from the survey.
     */
    onPanelRemoved: EventBase<SurveyModel, PanelRemovedEvent>;
    /**
     * An event that is raised when a new page is added to the survey.
     * @see PanelModel
     */
    onPageAdded: EventBase<SurveyModel, PageAddedEvent>;
    /**
     * An event that is raised when a question value is being validated. Use this event to specify a custom error message.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/add-custom-input-validation/ (linkStyle))
     * @see onServerValidateQuestions
     * @see onValidatePanel
     * @see onMatrixCellValidate
     * @see onSettingQuestionErrors
     */
    onValidateQuestion: EventBase<SurveyModel, ValidateQuestionEvent>;
    /**
     * An event that is raised before errors are assigned to a question. Use this event to add/remove/modify errors.
     * @see onValidateQuestion
     */
    onSettingQuestionErrors: EventBase<SurveyModel, SettingQuestionErrorsEvent>;
    /**
     * Use this event to validate data on your server.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/javascript-server-side-form-validation/ (linkStyle))
     * @see onValidateQuestion
     * @see onValidatePanel
     * @see isValidatingOnServer
     */
    onServerValidateQuestions: EventBase<SurveyModel, ServerValidateQuestionsEvent>;
    /**
     * An event that is raised when a panel is being validated. Use this event to specify a custom error message.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/add-custom-input-validation/ (linkStyle))
     * @see onValidateQuestion
     * @see onServerValidateQuestions
     */
    onValidatePanel: EventBase<SurveyModel, ValidatePanelEvent>;
    /**
     * An event that is raised to change default error messages.
     */
    onErrorCustomText: EventBase<SurveyModel, ErrorCustomTextEvent>;
    /**
     * An event that is raised when the [current page](#currentPage) is being validated. Handle this event to be notified of current page validation.
     */
    onValidatedErrorsOnCurrentPage: EventBase<SurveyModel, ValidatedErrorsOnCurrentPageEvent>;
    /**
     * An event that is raised when the survey processes HTML content. Handle this event to modify HTML content before displaying.
     * @see completedHtml
     * @see loadingHtml
     * @see QuestionHtmlModel.html
     */
    onProcessHtml: EventBase<SurveyModel, ProcessHtmlEvent>;
    /**
     * Use this event to change a question's display text.
     */
    onGetQuestionDisplayValue: EventBase<SurveyModel, GetQuestionDisplayValueEvent>;
    /**
     * An event that is raised before the survey displays a question title. Handle this event to modify question titles.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * If you want to modify question numbers, handle the [`onGetQuestionNo`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onGetQuestionNo) event.
     * @see requiredText
     */
    onGetQuestionTitle: EventBase<SurveyModel, GetQuestionTitleEvent>;
    /**
     * An event that is raised when the survey calculates heading levels (`<h1>`, `<h2>`, etc.) for a survey, page, panel, and question title. Handle this event to change the heading level of individual titles.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * If you want to specify heading levels for all titles, use the [`titleTags`](https://surveyjs.io/form-library/documentation/api-reference/settings#titleTags) object in [global settings](https://surveyjs.io/form-library/documentation/api-reference/settings).
     *
     * [View Demo](https://surveyjs.io/form-library/examples/survey-titletagnames/ (linkStyle))
     * @see onGetQuestionTitle
     * @see onGetQuestionNo
     */
    onGetTitleTagName: EventBase<SurveyModel, GetTitleTagNameEvent>;
    /**
     * An event that is raised before the survey calculates a question number. Handle this event to modify question numbers.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * If you want to hide question numbers, disable the [`showQuestionNumbers`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#showQuestionNumbers) property.
     * @see onGetQuestionTitle
     * @see questionStartIndex
     */
    onGetQuestionNo: EventBase<SurveyModel, GetQuestionNoEvent>;
    /**
     * An event that is raised before the survey displays progress text. Handle this event to change the progress text in code.
     * @see showProgressBar
     * @see progressBarType
     */
    onProgressText: EventBase<SurveyModel, ProgressTextEvent>;
    /**
     * An event that is raised to convert Markdown content to HTML.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/edit-survey-questions-markdown/ (linkStyle))
     */
    onTextMarkdown: EventBase<SurveyModel, TextMarkdownEvent>;
    onTextRenderAs: EventBase<SurveyModel, TextRenderAsEvent>;
    /**
     * An event that is raised after a request to save survey results on [SurveyJS Service](https://api.surveyjs.io/) has been completed. Use this event to find out if the results have been saved successfully.
     */
    onSendResult: EventBase<SurveyModel, SendResultEvent>;
    /**
     * An event that is raised when the [`getResult(resultId, questionName)`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#getResult) method is called. Use this event to obtain answers to an individual question from [SurveyJS Service](https://api.surveyjs.io/).
     * @see getResult
     */
    onGetResult: EventBase<SurveyModel, GetResultEvent>;
    /**
     * An event that is raised when Survey Creator opens a dialog window for users to select files.
     * @see onUploadFile
     * @see uploadFiles
     */
    onOpenFileChooser: EventBase<SurveyModel, OpenFileChooserEvent>;
    /**
     * An event that is raised when a File Upload or Signature Pad question starts to upload a file. Applies only if [`storeDataAsText`](https://surveyjs.io/form-library/documentation/api-reference/file-model#storeDataAsText) is `false`. Use this event to upload files to your server.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/file-upload/ (linkStyle))
     * @see uploadFiles
     * @see onDownloadFile
     * @see onClearFiles
     */
    onUploadFiles: EventBase<SurveyModel, UploadFilesEvent>;
    /**
     * An event that is raised when a File Upload question starts to download a file. Use this event to implement file preview when your server stores only file names.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/store-file-names-in-survey-results/ (linkStyle))
     * @see downloadFile
     * @see onClearFiles
     * @see onUploadFiles
     */
    onDownloadFile: EventBase<SurveyModel, DownloadFileEvent>;
    /**
     * An event that is raised when users clear files in a [File Upload](https://surveyjs.io/form-library/documentation/api-reference/file-model) question or clear signature in a [Signature Pad](https://surveyjs.io/form-library/documentation/api-reference/signature-pad-model) question. Use this event to delete files from your server.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/file-delayed-upload/ (linkStyle))
     * @see clearFiles
     * @see onDownloadFile
     * @see onUploadFiles
     */
    onClearFiles: EventBase<SurveyModel, ClearFilesEvent>;
    /**
     * An event that is raised after choices are loaded from a server but before they are assigned to a choice-based question, such as [Dropdown](https://surveyjs.io/form-library/documentation/api-reference/dropdown-menu-model) or [Checkboxes](https://surveyjs.io/form-library/documentation/api-reference/checkbox-question-model). Handle this event if you need to modify the loaded choices.
     */
    onLoadChoicesFromServer: EventBase<SurveyModel, LoadChoicesFromServerEvent>;
    /**
     * An event that is raised after a survey JSON schema is loaded from the [SurveyJS Service](https://api.surveyjs.io). Use this event to modify the loaded schema.
     * @see surveyId
     * @see clientId
     * @see loadSurveyFromService
     */
    onLoadedSurveyFromService: EventBase<SurveyModel, {}>;
    /**
     * An event that is raised when the survey processes [dynamic texts](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#dynamic-texts) and any text in curly brackets. Use this event, for instance, to substitute parameters in a RESTful URL with real values when you [load choices by URL](https://surveyjs.io/form-library/documentation/api-reference/checkbox-question-model#choicesByUrl).
     */
    onProcessTextValue: EventBase<SurveyModel, ProcessTextValueEvent>;
    /**
     * An event that is raised before rendering a question. Use it to override default question CSS classes.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/customize-survey-with-css/ (linkStyle))
     * @see css
     */
    onUpdateQuestionCssClasses: EventBase<SurveyModel, UpdateQuestionCssClassesEvent>;
    /**
     * An event that is raised before rendering a standalone panel and panels within [Dynamic Panel](https://surveyjs.io/form-library/examples/duplicate-group-of-fields-in-form/). Use it to override default panel CSS classes.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/customize-survey-with-css/ (linkStyle))
     * @see css
     */
    onUpdatePanelCssClasses: EventBase<SurveyModel, UpdatePanelCssClassesEvent>;
    /**
     * An event that is raised before rendering a page. Use it to override default page CSS classes.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/customize-survey-with-css/ (linkStyle))
     * @see css
     */
    onUpdatePageCssClasses: EventBase<SurveyModel, UpdatePageCssClassesEvent>;
    /**
     * An event that is raised before rendering a choice item in Radio Button Group and Checkboxes questions. Use it to override default CSS classes applied to choice items.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/customize-survey-with-css/ (linkStyle))
     * @see css
     */
    onUpdateChoiceItemCss: EventBase<SurveyModel, UpdateChoiceItemCssEvent>;
    /**
     * An event that is raised after the survey is rendered to the DOM. Use this event to modify survey markup.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/survey-animation/ (linkStyle))
     */
    onAfterRenderSurvey: EventBase<SurveyModel, AfterRenderSurveyEvent>;
    onAfterRenderHeader: EventBase<SurveyModel, AfterRenderHeaderEvent>;
    /**
     * An event that is raised after a page is rendered to the DOM. Use it to modify page markup.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/survey-afterrender/ (linkStyle))
     */
    onAfterRenderPage: EventBase<SurveyModel, AfterRenderPageEvent>;
    /**
     * An event that is raised after a question is rendered to the DOM. Use it to modify question markup.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/survey-afterrender/ (linkStyle))
     */
    onAfterRenderQuestion: EventBase<SurveyModel, AfterRenderQuestionEvent>;
    /**
     * An event that is raised after a question with a single input field is rendered to the DOM. Use it to modify question markup.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * > This event is not raised for questions without input fields ([HTML](https://surveyjs.io/form-library/documentation/questionhtmlmodel), [Image](https://surveyjs.io/form-library/documentation/questionimagemodel)) or questions with multiple input fields ([Matrix](https://surveyjs.io/form-library/documentation/questionmatrixmodel), [Multiple Text](https://surveyjs.io/form-library/documentation/questionmultipletextmodel)).
     */
    onAfterRenderQuestionInput: EventBase<SurveyModel, AfterRenderQuestionInputEvent>;
    /**
     * An event that is raised after a panel is rendered to the DOM. Use it to modify panel markup.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * > This event is raised for static [Panels](https://surveyjs.io/form-library/examples/set-properties-on-multiple-questions-using-panel/) as well as panels within a [Dynamic Panel](https://surveyjs.io/form-library/examples/duplicate-group-of-fields-in-form/).
     */
    onAfterRenderPanel: EventBase<SurveyModel, AfterRenderPanelEvent>;
    /**
     * An event that is raised when an element (input field, checkbox, radio button) within a question gets focus.
     * @see onFocusInPanel
     * @see focusFirstQuestionAutomatic
     * @see focusQuestion
     */
    onFocusInQuestion: EventBase<SurveyModel, FocusInQuestionEvent>;
    /**
     * An event that is raised when an element within a panel gets focus.
     * @see onFocusInQuestion
     * @see focusFirstQuestionAutomatic
     * @see focusQuestion
     */
    onFocusInPanel: EventBase<SurveyModel, FocusInPanelEvent>;
    /**
     * An event that is raised before a [choice item](https://surveyjs.io/form-library/documentation/api-reference/questionselectbase#choices) is displayed. Use this event to change the visibility of individual choice items in [Checkboxes](https://surveyjs.io/form-library/documentation/api-reference/checkbox-question-model), [Dropdown](https://surveyjs.io/form-library/documentation/api-reference/dropdown-menu-model), [Radio Button Group](https://surveyjs.io/form-library/documentation/api-reference/radio-button-question-model), and other similar question types.
     */
    onShowingChoiceItem: EventBase<SurveyModel, ShowingChoiceItemEvent>;
    /**
     * Use this event to load choice items in [Dropdown](https://surveyjs.io/form-library/documentation/questiondropdownmodel) and [Tag Box](https://surveyjs.io/form-library/documentation/questiontagboxmodel) questions on demand.
     *
     * This event is raised only for those questions that have the [`choicesLazyLoadEnabled`](https://surveyjs.io/form-library/documentation/questiondropdownmodel#choicesLazyLoadEnabled) property set to `true`.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/lazy-loading-dropdown/ (linkStyle))
     */
    onChoicesLazyLoad: EventBase<SurveyModel, ChoicesLazyLoadEvent>;
    /**
     * An event that is raised each time a search string in a [Dropdown](https://surveyjs.io/form-library/documentation/api-reference/dropdown-menu-model) or [Tag Box](https://surveyjs.io/form-library/documentation/api-reference/dropdown-tag-box-model) question changes. Use this event to implement custom filtering of choice options.
     * @see [QuestionDropdownModel.searchEnabled](https://surveyjs.io/form-library/documentation/api-reference/dropdown-menu-model#searchEnabled)
     * @see [QuestionDropdownModel.searchMode](https://surveyjs.io/form-library/documentation/api-reference/dropdown-menu-model#searchMode)
     */
    onChoicesSearch: EventBase<SurveyModel, ChoicesSearchEvent>;
    /**
     * Use this event to load a display text for the [default choice item](https://surveyjs.io/form-library/documentation/questiondropdownmodel#defaultValue) in [Dropdown](https://surveyjs.io/form-library/documentation/questiondropdownmodel) and [Tag Box](https://surveyjs.io/form-library/documentation/questiontagboxmodel) questions.
     *
     * If you load choices from a server (use [`choicesByUrl`](https://surveyjs.io/form-library/documentation/questiondropdownmodel#choicesByUrl) or [`onChoicesLazyLoad`](https://surveyjs.io/form-library/documentation/surveymodel#onChoicesLazyLoad)), display texts become available only when data is loaded, which does not happen until a user opens the drop-down menu. However, a display text for a default choice item is required before that. In this case, you can load data individually for the default item within the `onGetChoiceDisplayValue` event handler.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/lazy-loading-dropdown/ (linkStyle))
     */
    onGetChoiceDisplayValue: EventBase<SurveyModel, GetChoiceDisplayValueEvent>;
    /**
     * An event that is raised after a new row is added to a [Dynamic Matrix](https://surveyjs.io/form-library/examples/questiontype-matrixdynamic/).
     */
    onMatrixRowAdded: EventBase<SurveyModel, MatrixRowAddedEvent>;
    /**
     * An event that is raised before a new row is added to a [Dynamic Matrix](https://surveyjs.io/form-library/examples/questiontype-matrixdynamic/).
     */
    onMatrixRowAdding: EventBase<SurveyModel, MatrixBeforeRowAddedEvent>;
    /**
     * This event is obsolete. Use the [`onMatrixRowAdding`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onMatrixRowAdding) event instead.
     */
    onMatrixBeforeRowAdded: EventBase<SurveyModel, MatrixBeforeRowAddedEvent>;
    /**
     * An event that is raised before a row is deleted from a [Dynamic Matrix](https://surveyjs.io/form-library/examples/questiontype-matrixdynamic/). You can cancel row deletion and clear row data instead.
     * @see onMatrixRenderRemoveButton
     */
    onMatrixRowRemoving: EventBase<SurveyModel, MatrixRowRemovingEvent>;
    /**
     * An event that is raised after a row is deleted from a [Dynamic Matrix](https://surveyjs.io/form-library/examples/questiontype-matrixdynamic/).
     * @see onMatrixRenderRemoveButton
     */
    onMatrixRowRemoved: EventBase<SurveyModel, MatrixRowRemovedEvent>;
    /**
     * An event that is raised before rendering the Remove button in a row of a [Dynamic Matrix](https://surveyjs.io/form-library/examples/questiontype-matrixdynamic/). Use this event to hide the Remove button for individual matrix rows.
     * @see onMatrixRowRemoving
     * @see onMatrixRowRemoved
     */
    onMatrixRenderRemoveButton: EventBase<SurveyModel, MatrixAllowRemoveRowEvent>;
    /**
     * This event is obsolete. Use the [`onMatrixRenderRemoveButton`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onMatrixRenderRemoveButton) event instead.
     */
    onMatrixAllowRemoveRow: EventBase<SurveyModel, MatrixAllowRemoveRowEvent>;
    /**
     * An event that is raised after the visibility of an [expandable detail section](https://surveyjs.io/form-library/examples/add-expandable-details-section-under-matrix-rows/) is changed. This event can be raised for [Multi-Select](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-with-dropdown-list) and [Dynamic Matrix](https://surveyjs.io/form-library/documentation/api-reference/dynamic-matrix-table-question-model) questions.
     */
    onMatrixDetailPanelVisibleChanged: EventBase<SurveyModel, MatrixDetailPanelVisibleChangedEvent>;
    /**
     * An event that is raised before a cell in a [Multi-Select Matrix](https://surveyjs.io/form-library/examples/questiontype-matrixdropdown/) or [Dynamic Matrix](https://surveyjs.io/form-library/examples/questiontype-matrixdynamic/) is created. Use this event to change the type of individual matrix cells.
     * @see onAfterRenderMatrixCell
     */
    onMatrixCellCreating: EventBase<SurveyModel, MatrixCellCreatingEvent>;
    /**
      * An event that is raised after a cell in a [Multi-Select Matrix](https://surveyjs.io/form-library/examples/questiontype-matrixdropdown/) or [Dynamic Matrix](https://surveyjs.io/form-library/examples/questiontype-matrixdynamic/) is created.
      * @see onAfterRenderMatrixCell
      */
    onMatrixCellCreated: EventBase<SurveyModel, MatrixCellCreatedEvent>;
    /**
     * An event that is raised for every matrix cell after it is rendered to the DOM.
     * @see onMatrixCellCreated
     */
    onAfterRenderMatrixCell: EventBase<SurveyModel, MatrixAfterCellRenderEvent>;
    /**
     * This event is obsolete. Use the [`onAfterRenderMatrixCell`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onAfterRenderMatrixCell) event instead.
     */
    onMatrixAfterCellRender: EventBase<SurveyModel, MatrixAfterCellRenderEvent>;
    /**
     * An event that is raised after a cell value is changed in a [Multi-Select Matrix](https://surveyjs.io/form-library/examples/questiontype-matrixdropdown/) or [Dynamic Matrix](https://surveyjs.io/form-library/examples/questiontype-matrixdynamic/).
     * @see onMatrixRowAdding
     */
    onMatrixCellValueChanged: EventBase<SurveyModel, MatrixCellValueChangedEvent>;
    /**
     * An event that is raised before a cell value is changed in a [Multi-Select Matrix](https://surveyjs.io/form-library/examples/questiontype-matrixdropdown/) or [Dynamic Matrix](https://surveyjs.io/form-library/examples/questiontype-matrixdynamic/). Use this event to change the cell value.
     * @see onMatrixRowAdding
     */
    onMatrixCellValueChanging: EventBase<SurveyModel, MatrixCellValueChangingEvent>;
    /**
     * An event that is raised for [Multi-Select Matrix](https://surveyjs.io/form-library/examples/questiontype-matrixdropdown/) and [Dynamic Matrix](https://surveyjs.io/form-library/examples/questiontype-matrixdynamic/) questions when they validate a cell value. Use this event to display a custom error message based on a condition.
     * @see onMatrixRowAdding
     */
    onMatrixCellValidate: EventBase<SurveyModel, MatrixCellValidateEvent>;
    /**
     * An event that is raised after a new column is added to a [Multi-Select Matrix](https://surveyjs.io/form-library/examples/questiontype-matrixdropdown/) or [Dynamic Matrix](https://surveyjs.io/form-library/examples/questiontype-matrixdynamic/).
     */
    onMatrixColumnAdded: EventBase<SurveyModel, MatrixColumnAddedEvent>;
    /**
     * An event that is raised on adding a new item in Multiple Text question.
     */
    onMultipleTextItemAdded: EventBase<SurveyModel, MultipleTextItemAddedEvent>;
    /**
     * An event that is raised after a new panel is added to a [Dynamic Panel](https://surveyjs.io/form-library/examples/questiontype-paneldynamic/) question.
     */
    onDynamicPanelAdded: EventBase<SurveyModel, DynamicPanelModifiedEvent>;
    /**
     * An event that is raised after a panel is deleted from a [Dynamic Panel](https://surveyjs.io/form-library/examples/questiontype-paneldynamic/) question.
     */
    onDynamicPanelRemoved: EventBase<SurveyModel, DynamicPanelModifiedEvent>;
    /**
     * An event that is raised before a panel is deleted from a [Dynamic Panel](https://surveyjs.io/form-library/examples/questiontype-paneldynamic/) question. Use this event to cancel the deletion.
     */
    onDynamicPanelRemoving: EventBase<SurveyModel, DynamicPanelRemovingEvent>;
    /**
    * An event that is raised every second while the timer is running.
    *
    * Use the [`timeSpent`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#timeSpent) property to find out how many seconds have elapsed.
    * @see maxTimeToFinish
    * @see maxTimeToFinishPage
    * @see showTimerPanel
    * @see startTimer
    */
    onTimer: EventBase<SurveyModel, {}>;
    onTimerPanelInfoText: EventBase<SurveyModel, TimerPanelInfoTextEvent>;
    /**
     * An event that is raised after an item value is changed in a panel within a [Dynamic Panel](https://surveyjs.io/form-library/examples/questiontype-paneldynamic/) question.
     */
    onDynamicPanelItemValueChanged: EventBase<SurveyModel, DynamicPanelItemValueChangedEvent>;
    /**
     * An event that is raised before a [Dynamic Panel](https://surveyjs.io/form-library/examples/questiontype-paneldynamic/) renders [tab titles](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#templateTabTitle). Use this event to change individual tab titles.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/tabbed-interface-for-duplicate-group-option/ (linkStyle))
     */
    onGetDynamicPanelTabTitle: EventBase<SurveyModel, DynamicPanelGetTabTitleEvent>;
    /**
     * An event that is raised after the current panel is changed in a [Dynamic Panel](https://surveyjs.io/form-library/examples/questiontype-paneldynamic/) question.
     */
    onDynamicPanelCurrentIndexChanged: EventBase<SurveyModel, DynamicPanelCurrentIndexChangedEvent>;
    /**
     * An event that is raised to define whether a question answer is correct. Applies only to [quiz surveys](https://surveyjs.io/form-library/documentation/design-survey/create-a-quiz).
     */
    onIsAnswerCorrect: EventBase<SurveyModel, IsAnswerCorrectEvent>;
    /**
     * An event that is raised when users drag and drop survey elements while designing the survey in [Survey Creator](https://surveyjs.io/survey-creator/documentation/overview). Use this event to control drag and drop operations.
     * @see isDesignMode
     */
    onDragDropAllow: EventBase<SurveyModel, DragDropAllowEvent>;
    /**
     * An event this is raised before a survey element (usually page) is scrolled to the top. Use this event to cancel the scroll operation.
     */
    onScrollingElementToTop: EventBase<SurveyModel, ScrollingElementToTopEvent>;
    onLocaleChangedEvent: EventBase<SurveyModel, {}>;
    /**
     * An event that allows you to add, delete, or modify actions in a question title.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/survey-titleactions/ (linkStyle))
     * @see [IAction](https://surveyjs.io/form-library/documentation/api-reference/iaction)
    */
    onGetQuestionTitleActions: EventBase<SurveyModel, GetQuestionTitleActionsEvent>;
    /**
     * An event that allows you to add, delete, or modify actions in a panel title.
     * @see [IAction](https://surveyjs.io/form-library/documentation/api-reference/iaction)
     */
    onGetPanelTitleActions: EventBase<SurveyModel, GetPanelTitleActionsEvent>;
    /**
     * An event that allows you to add, delete, or modify actions in a page title.
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/modify-titles-of-survey-elements/ (linkStyle))
     * @see [IAction](https://surveyjs.io/form-library/documentation/api-reference/iaction)
     */
    onGetPageTitleActions: EventBase<SurveyModel, GetPageTitleActionsEvent>;
    /**
     * An event that allows you to add, delete, or modify actions in the footer of a [Panel](https://surveyjs.io/form-library/documentation/panelmodel).
     * @see [IAction](https://surveyjs.io/form-library/documentation/api-reference/iaction)
     */
    onGetPanelFooterActions: EventBase<SurveyModel, GetPanelFooterActionsEvent>;
    /**
     * An event that allows you to add, delete, or modify actions in rows of a [Dynamic Matrix](https://surveyjs.io/form-library/examples/questiontype-matrixdynamic/).
     *
     * For information on event handler parameters, refer to descriptions within the interface.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/employee-information-form/ (linkStyle))
     * @see [IAction](https://surveyjs.io/form-library/documentation/api-reference/iaction)
     */
    onGetMatrixRowActions: EventBase<SurveyModel, GetMatrixRowActionsEvent>;
    /**
     * An event that is raised after a survey element is [expanded or collapsed](https://surveyjs.io/form-library/documentation/api-reference/question#state).
     */
    onElementContentVisibilityChanged: EventBase<SurveyModel, ElementContentVisibilityChangedEvent>;
    /**
     * An event that is raised before an [Expression](https://surveyjs.io/form-library/documentation/api-reference/expression-model) question displays a value. Use this event to override the display value.
     */
    onGetExpressionDisplayValue: EventBase<SurveyModel, GetExpressionDisplayValueEvent>;
    /**
     * An event that is raised after the visibility of a popup is changed.
     *
     * This event can be raised for [Single-](https://surveyjs.io/form-library/documentation/api-reference/dropdown-menu-model) and [Multi-Select Dropdown](https://surveyjs.io/form-library/documentation/api-reference/dropdown-tag-box-model) questions and [Rating Scale](https://surveyjs.io/form-library/documentation/api-reference/rating-scale-question-model) questions [rendered as drop-down menus](https://surveyjs.io/form-library/documentation/api-reference/rating-scale-question-model#displayMode), and [Multi-Select Matrix](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-with-dropdown-list) questions that contain columns of the `"dropdown"` or `"tagbox"` [`cellType`](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-with-dropdown-list#cellType).
     */
    onPopupVisibleChanged: EventBase<SurveyModel, PopupVisibleChangedEvent>;
    /**
     * An event that is raised when users open a drop-down menu.
     *
     * This event can be raised for [Single-](https://surveyjs.io/form-library/documentation/api-reference/dropdown-menu-model) and [Multi-Select Dropdown](https://surveyjs.io/form-library/documentation/api-reference/dropdown-tag-box-model) questions, [Rating Scale](https://surveyjs.io/form-library/documentation/api-reference/rating-scale-question-model) questions [rendered as drop-down menus](https://surveyjs.io/form-library/documentation/api-reference/rating-scale-question-model#displayMode), and [Multi-Select Matrix](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-with-dropdown-list) questions that contain columns of the `"dropdown"` or `"tagbox"` [`cellType`](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-with-dropdown-list#cellType). Handle this event to change the drop-down menu type for specific questions or device types.
     */
    onOpenDropdownMenu: EventBase<SurveyModel, OpenDropdownMenuEvent>;
    onElementWrapperComponentName: EventBase<SurveyModel, ElementWrapperComponentNameEvent>;
    onElementWrapperComponentData: EventBase<SurveyModel, ElementWrapperComponentDataEvent>;
    constructor(jsonObj?: any, renderedElement?: any);
    processClosedPopup(question: IQuestion, popupModel: PopupModel<any>): void;
    protected createTryAgainAction(): IAction;
    private createHtmlLocString;
    /**
     * A list of errors in a survey JSON schema.
     * @see ensureUniqueNames
     */
    jsonErrors: Array<JsonError>;
    getType(): string;
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    /*
    * Returns an array of all pages in the survey.
    *
    * To get an array of only visible pages, use the [`visiblePages`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#visiblePages) array.
    * @see PageModel
    */
    readonly pages: Array<PageModel>;
    renderCallback: () => void;
    render(element?: any): void;
    updateSurvey(newProps: any, oldProps?: any): void;
    getCss(): any;
    private cssValue;
    private updateCompletedPageCss;
    private updateCss;
    /*
    * Gets or sets an object in which keys are UI elements and values are CSS classes applied to them.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/customize-survey-with-css/ (linkStyle))
    */
    css: any;
    setCss(value: any, needMerge?: boolean): void;
    readonly cssTitle: string;
    readonly cssNavigationComplete: string;
    readonly cssNavigationPreview: string;
    readonly cssNavigationEdit: string;
    readonly cssNavigationPrev: string;
    readonly cssNavigationStart: string;
    readonly cssNavigationNext: string;
    private readonly cssSurveyNavigationButton: any;
    readonly bodyCss: string;
    readonly bodyContainerCss: string;
    completedCss: string;
    completedBeforeCss: string;
    loadingBodyCss: string;
    containerCss: string;
    fitToContainer: boolean;
    /**
     * This property is obsolete. Use the [`headerView`](https://surveyjs.io/form-library/documentation/api-reference/itheme#headerView) property within a theme instead.
     */
    headerView: "advanced" | "basic";
    protected insertAdvancedHeader(advHeader: Cover): void;
    private getNavigationCss;
    private lazyRenderingValue;
    showBrandInfo: boolean;
    enterKeyAction: "moveToNextEditor" | "loseFocus" | "default";
    /*
    * Specifies whether to enable lazy rendering.
    *
    * In default mode, a survey renders the entire current page. With lazy rendering, the survey renders the page gradually as a user scrolls it. This helps reduce survey startup time and optimizes large surveys for low-end devices.
    *
    * Default value: `false`
    *
    * [View Demo](https://surveyjs.io/form-library/examples/survey-lazy/ (linkStyle))
    * @see [settings.lazyRender](https://surveyjs.io/form-library/documentation/api-reference/settings#lazyRender)
    */
    lazyRendering: boolean;
    readonly isLazyRendering: boolean;
    lazyRenderingFirstBatchSizeValue: number;
    lazyRenderingFirstBatchSize: number;
    private updateLazyRenderingRowsOnRemovingElements;
    /*
    * A list of triggers in the survey.
    *
    * [Conditional Survey Logic (Triggers)](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#conditional-survey-logic-triggers (linkStyle))
    * @see runTriggers
    * @see onTriggerExecuted
    */
    triggers: Array<SurveyTrigger>;
    /*
    * An array of [calculated values](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#calculated-values).
    */
    calculatedValues: Array<CalculatedValue>;
    /*
    * The identifier of a survey JSON schema to load from [SurveyJS Service](https://api.surveyjs.io).
    *
    * Refer to the following help topic for more information: [Store Survey Results in the SurveyJS Service](https://surveyjs.io/form-library/documentation/handle-survey-results-store#store-survey-results-in-the-surveyjs-service).
    * @see loadSurveyFromService
    * @see onLoadedSurveyFromService
    */
    surveyId: string;
    /*
    * An identifier used to save survey results to [SurveyJS Service](https://api.surveyjs.io).
    *
    * Refer to the following help topic for more information: [Store Survey Results in the SurveyJS Service](https://surveyjs.io/form-library/documentation/handle-survey-results-store#store-survey-results-in-the-surveyjs-service).
    * @see onComplete
    * @see surveyShowDataSaving
    */
    surveyPostId: string;
    /*
    * A user identifier (e-mail or other unique ID).
    *
    * If your application works with [SurveyJS Service](https://api.surveyjs.io), the ID ensures that users do not pass the same survey twice. On the second run, they will see the [Completed Before page](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#completedBeforeHtml).
    * @see cookieName
    */
    clientId: string;
    /*
    * A cookie name used to save information about survey completion.
    *
    * When this property has a value, the survey creates a cookie with the specified name on completion. This cookie helps ensure that users do not pass the same survey twice. On the second run, they will see the [Completed Before page](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#completedBeforeHtml).
    * @see clientId
    */
    cookieName: string;
    /*
    * Specifies whether to save survey results when respondents switch between pages. Handle the [`onPartialSend`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onPartialSend) event to implement the save operation.
    *
    * Alternatively, you can handle the [`onCurrentPageChanged`](#onCurrentPageChanged) and [`onValueChanged`](#onValueChanged) events, as shown in the following demo: [Continue an Incomplete Survey](https://surveyjs.io/form-library/examples/survey-editprevious/).
    */
    sendResultOnPageNext: boolean;
    /*
    * Specifies whether to show progress when the survey sends data to [SurveyJS Service](https://api.surveyjs.io).
    *
    * [View Demo](https://surveyjs.io/form-library/examples/save-survey-results-and-load-surveys-from-surveyjs-service/ (linkStyle))
    * @see surveyPostId
    */
    surveyShowDataSaving: boolean;
    /*
    * Specifies whether to focus the first question on the page on survey startup or when users switch between pages.
    *
    * Default value: `false` in v1.9.114 and later, `true` in earlier versions
    * @see focusOnFirstError
    * @see focusFirstQuestion
    * @see focusQuestion
    */
    focusFirstQuestionAutomatic: boolean;
    /*
    * Specifies whether to focus the first question with a validation error on the current page.
    *
    * Default value: `true`
    * @see validate
    * @see focusFirstQuestionAutomatic
    */
    focusOnFirstError: boolean;
    /*
    * Gets or sets the position of the Start, Next, Previous, and Complete navigation buttons and controls their visibility.
    *
    * Possible values:
    *
    * - `"bottom"` (default) - Displays the navigation buttons below survey content.
    * - `"top"` - Displays the navigation buttons above survey content.
    * - `"both"` - Displays the navigation buttons above and below survey content.
    * - `"none"` - Hides the navigation buttons. This setting may be useful if you [implement custom external navigation](https://surveyjs.io/form-library/examples/external-form-navigation-system/).
    * @see goNextPageAutomatic
    * @see showPrevButton
    * @see showCompleteButton
    */
    showNavigationButtons: string | any;
    /*
    * Specifies whether to display the Previous button. Set this property to `false` if respondents should not move backward along the survey.
    * @see showNavigationButtons
    * @see showCompleteButton
    */
    showPrevButton: boolean;
    /*
    * Specifies whether to display the Complete button. Set this property to `false` if respondents should not complete the survey.
    * @see showNavigationButtons
    * @see showPrevButton
    */
    showCompleteButton: boolean;
    /*
    * Gets or sets the visibility of the table of contents.
    *
    * Default value: `false`
    *
    * [View Demo](https://surveyjs.io/form-library/examples/toc-feature/ (linkStyle))
    * @see tocLocation
    */
    showTOC: boolean;
    /*
    * Gets or sets the position of the table of contents. Applies only when the table of contents is visible.
    *
    * Possible values:
    *
    * - `"left"` (default)
    * - `"right"`
    *
    * [View Demo](https://surveyjs.io/form-library/examples/toc-feature/ (linkStyle))
    * @see showTOC
    */
    tocLocation: "left" | "right";
    /*
    * Specifies whether to display the [survey title](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#title).
    *
    * [View Demo](https://surveyjs.io/form-library/examples/brand-your-survey-header/ (linkStyle))
    * @see title
    */
    showTitle: boolean;
    /*
    * Specifies whether to display [page titles](https://surveyjs.io/form-library/documentation/api-reference/page-model#title).
    */
    showPageTitles: boolean;
    /*
    * Specifies whether to show the [complete page](https://surveyjs.io/form-library/documentation/design-survey/create-a-multi-page-survey#complete-page).
    * @see onComplete
    * @see navigateToUrl
    */
    showCompletedPage: boolean;
    /*
    * A URL to which respondents should be navigated after survey completion.
    * @see onNavigateToUrl
    * @see navigateToUrlOnCondition
    */
    navigateToUrl: string;
    /*
    * An array of objects that allows you to navigate respondents to different URLs after survey completion.
    *
    * Each object should include the [`expression`](https://surveyjs.io/form-library/documentation/api-reference/urlconditionitem#url) and [`url`](https://surveyjs.io/form-library/documentation/api-reference/urlconditionitem#expression) properties. When `expression` evaluates to `true`, the survey navigates to the corresponding `url`. Refer to the following help topic for more information about expressions: [Expressions](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#expressions).
    * @see onNavigateToUrl
    * @see navigateToUrl
    */
    navigateToUrlOnCondition: Array<UrlConditionItem>;
    getNavigateToUrl(): string;
    private navigateTo;
    /*
    * Specifies one or multiple characters that designate required questions.
    *
    * Default value: `*`
    *
    * [View Demo](https://surveyjs.io/form-library/examples/modify-question-title/ (linkStyle))
    */
    requiredText: string;
    /**
     * Specifies whether to hide validation errors thrown by the Required validation in the UI.
     *
     * [Built-In Client-Side Validators](https://surveyjs.io/form-library/documentation/data-validation#built-in-client-side-validators (linkStyle))
     * @see validationEnabled
     * @see validationAllowSwitchPages
     */
    hideRequiredErrors: boolean;
    beforeSettingQuestionErrors(question: Question, errors: Array<SurveyError>): void;
    beforeSettingPanelErrors(question: IPanel, errors: Array<SurveyError>): void;
    private makeRequiredErrorsInvisible;
    /*
    * Specifies the initial number or letter from which to start question numbering.
    *
    * [Question Numbers](https://surveyjs.io/form-library/documentation/design-survey/configure-question-titles#question-numbers (linkStyle))
    */
    questionStartIndex: string;
    /*
    * Specifies whether to store the "Other" option response in a separate property.
    *
    * Default value: `true`
    *
    * Respondents can leave comments when they select "Other" in choice-based questions, such as Dropdown or Checkboxes. Comment values are saved in a separate property. The property name is composed of the question `name` and [`commentSuffix`](#commentSuffix). However, you can use the question `name` as a key to store the comment value instead. Disable the `storeOthersAsComment` property in this case.
    * @see maxOthersLength
    */
    storeOthersAsComment: boolean;
    /*
    * Specifies the maximum text length in textual questions ([Single-Line Input](https://surveyjs.io/form-library/examples/text-entry-question/), [Long Text](https://surveyjs.io/form-library/examples/add-open-ended-question-to-a-form/), [Multiple Textboxes](https://surveyjs.io/form-library/examples/multiple-text-box-question/)), measured in characters.
    *
    * Default value: 0 (unlimited)
    *
    * You can override this setting for individual questions if you specify their [`maxLength`](https://surveyjs.io/form-library/documentation/api-reference/text-entry-question-model#maxLength) property.
    * @see maxOthersLength
    */
    maxTextLength: number;
    /*
    * Specifies the maximum text length for question comments. Applies to questions with the [`showCommentArea`](https://surveyjs.io/form-library/documentation/api-reference/question#showCommentArea) or [`showOtherItem`](https://surveyjs.io/form-library/documentation/api-reference/question#showOtherItem) property set to `true`.
    *
    * Default value: 0 (unlimited)
    * @see maxTextLength
    */
    maxOthersLength: number;
    /*
    * Specifies whether the survey switches to the next page automatically after a user answers all questions on the current page.
    *
    * Default value: `false`
    *
    * If you enable this property, the survey is also completed automatically. Set the [`allowCompleteSurveyAutomatic`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#allowCompleteSurveyAutomatic) property to `false` if you want to disable this behavior.
    *
    * > If any of the following questions is answered last, the survey does not switch to the next page: Checkboxes, Yes/No (Boolean) (rendered as Checkbox), Long Text, Signature, Image Picker (with Multi Select), File Upload, Single-Select Matrix (not all rows are answered), Dynamic Matrix, Dynamic Panel.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/automatically-move-to-next-page-if-answer-selected/ (linkStyle))
    * @see [`settings.autoAdvanceDelay`](https://surveyjs.io/form-library/documentation/api-reference/settings#autoAdvanceDelay)
    */
    goNextPageAutomatic: boolean | "autogonext";
    /*
    * Specifies whether to complete the survey automatically after a user answers all questions on the last page. Applies only if the [`goNextPageAutomatic`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#goNextPageAutomatic) property is `true`.
    *
    * Default value: `true`
    * @see [`settings.autoAdvanceDelay`](https://surveyjs.io/form-library/documentation/api-reference/settings#autoAdvanceDelay)
    */
    allowCompleteSurveyAutomatic: boolean;
    /*
    * Specifies when the survey validates answers.
    *
    * Possible values:
    *
    * - `"onNextPage"` (default) - Triggers validation before the survey is switched to the next page or completed.
    * - `"onValueChanged"` - Triggers validation each time a question value is changed.
    * - `"onComplete"` - Triggers validation when a user clicks the Complete button. If previous pages contain errors, the survey switches to the page with the first error.
    *
    * > The `"onValueChanged"` doesn't work with date input fields because of the way browsers process date values. In most browsers, the value is considered changed as soon as a user starts entering the date in a text input field. This means that a user may only enter the day without having the chance to enter the month and year before validation is triggered. For this reason, date input fields are validated before the survey is switched to the next page or completed.
    *
    * Refer to the following help topic for more information: [Data Validation](https://surveyjs.io/form-library/documentation/data-validation).
    * @see validationEnabled
    * @see validationAllowSwitchPages
    * @see validationAllowComplete
    * @see validate
    */
    checkErrorsMode: string;
    /*
    * Specifies whether to increase the height of [Long Text](https://surveyjs.io/form-library/examples/add-open-ended-question-to-a-form/) questions and other text areas to accommodate multi-line text content.
    *
    * Default value: `false`
    *
    * You can override this property for individual Long Text questions: [`autoGrow`](https://surveyjs.io/form-library/documentation/api-reference/comment-field-model#autoGrow).
    * @see allowResizeComment
    * @see commentAreaRows
    */
    autoGrowComment: boolean;
    /*
    * Specifies whether to display a resize handle for [Long Text](https://surveyjs.io/form-library/examples/add-open-ended-question-to-a-form/) questions and other text areas intended for multi-line text content.
    *
    * Default value: `true`
    *
    * You can override this property for individual Long Text questions: [`allowResize`](https://surveyjs.io/form-library/documentation/api-reference/comment-field-model#allowResize).
    * @see autoGrowComment
    * @see commentAreaRows
    */
    allowResizeComment: boolean;
    /*
    * Specifies the visible height of comment areas, measured in lines. Applies to the questions with the [`showCommentArea`](https://surveyjs.io/form-library/documentation/api-reference/question#showCommentArea) or [`showOtherItem`](https://surveyjs.io/form-library/documentation/api-reference/question#showOtherItem) property enabled.
    *
    * Default value: 2
    *
    * The value of this property is passed on to the `rows` attribute of the underlying `<textarea>` element.
    * @see autoGrowComment
    * @see allowResizeComment
    */
    commentAreaRows: number;
    /*
    * Specifies when to update the question value in questions with a text input field.
    *
    * Possible values:
    *
    * - `"onBlur"` (default) - Updates the value after the input field loses focus.
    * - `"onTyping"` - Updates the value on every key press.
    *
    * > Do not use the `"onTyping"` mode if your survey contains many expressions. Expressions are reevaluated each time a question value is changed. In `"onTyping"` mode, the question value changes frequently. This may cause performance degradation.
    *
    * You can override this setting for individual questions: [`textUpdateMode`](https://surveyjs.io/form-library/documentation/api-reference/text-entry-question-model#textUpdateMode).
    */
    textUpdateMode: string;
    /*
    * Specifies when to remove values of invisible questions from [survey results](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#data).
    *
    * Possible values:
    *
    * - `"onComplete"` (default) - Clears invisible question values when the survey is complete.
    * - `"onHidden"` - Clears a question value when the question becomes invisible. If the question is invisible initially, its value is removed on survey completion.
    * - `"onHiddenContainer"` - Clears a question value when the question or its containter (page or panel) becomes invisible. If the question is invisible initially, its value is removed on survey completion.
    * - `"none"` - Keeps invisible values in survey results.
    * - `true` - Equivalent to `"onComplete"`.
    * - `false` - Equivalent to `"none"`.
    * @see [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#conditional-visibility)
    * @see onComplete
    */
    clearInvisibleValues: any;
    /**
     * Removes values that cannot be assigned to a question, for example, choices unlisted in the `choices` array.
     *
     * Call this method after you assign new question values in code to ensure that they are acceptable.
     *
     * > This method does not remove values that fail validation. Call the [`validate()`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#validate) method to validate newly assigned values.
     * @param removeNonExistingRootKeys Pass `true` to remove values that do not correspond to any question or [calculated value](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#calculated-values).
     */
    clearIncorrectValues(removeNonExistingRootKeys?: boolean): void;
    private iscorrectValueWithPostPrefix;
    /*
    * Specifies whether to keep values that cannot be assigned to questions, for example, choices unlisted in the `choices` array.
    *
    * > This property cannot be specified in the survey JSON schema. Use dot notation to specify it.
    * @see clearIncorrectValues
    */
    keepIncorrectValues: boolean;
    /*
    * Specifies the survey's locale.
    *
    * Default value: `""` (a default locale is used)
    *
    * [Localization & Globalization help topic](https://surveyjs.io/form-library/documentation/survey-localization (linkStyle))
    *
    * [Survey Localization demo](https://surveyjs.io/form-library/examples/survey-localization/ (linkStyle))
    */
    locale: string;
    private onSurveyLocaleChanged;
    readonly localeDir: string;
    /**
     * Returns an array of locales whose translations are used in the survey.
     *
     * [Localization & Globalization help topic](https://surveyjs.io/form-library/documentation/survey-localization (linkStyle))
     *
     * [Survey Localization demo](https://surveyjs.io/form-library/examples/survey-localization/ (linkStyle))
     */
    getUsedLocales(): Array<string>;
    localeChanged(): void;
    getLocale(): string;
    locStrsChanged(): void;
    getMarkdownHtml(text: string, name: string): string;
    getRenderer(name: string): string;
    getRendererContext(locStr: LocalizableString): any;
    getRendererForString(element: Question | PanelModel | PageModel | SurveyModel, name: string): string;
    getRendererContextForString(element: Base, locStr: LocalizableString): any;
    getExpressionDisplayValue(question: Question, value: any, displayValue: string): string;
    private getBuiltInRendererForString;
    getProcessedText(text: string): string;
    getLocString(str: string): string;
    getErrorCustomText(text: string, error: SurveyError): string;
    getSurveyErrorCustomText(obj: PanelModel | Question | SurveyModel, text: string, error: SurveyError): string;
    getQuestionDisplayValue(question: Question, displayValue: any): any;
    /*
    * A message that is displayed when a survey does not contain visible pages or questions.
    * @see [Localization & Globalization](https://surveyjs.io/form-library/documentation/survey-localization)
    */
    emptySurveyText: string;
    /*
    * An image URL or a Base64-encoded image to use as a survey logo.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/survey-logo/ (linkStyle))
    * @see logoPosition
    * @see logoFit
    */
    logo: string;
    readonly locLogo: LocalizableString;
    /*
    * A logo width in CSS-accepted values.
    *
    * Default value: `300px`
    *
    * [View Demo](https://surveyjs.io/form-library/examples/survey-logo/ (linkStyle))
    * @see logoHeight
    * @see logo
    * @see logoPosition
    * @see logoFit
    */
    logoWidth: any;
    readonly renderedLogoWidth: number;
    readonly renderedStyleLogoWidth: string;
    /*
    * A logo height in CSS-accepted values.
    *
    * Default value: `200px`
    *
    * [View Demo](https://surveyjs.io/form-library/examples/survey-logo/ (linkStyle))
    * @see logoHeight
    * @see logo
    * @see logoPosition
    * @see logoFit
    */
    logoHeight: any;
    readonly renderedLogoHeight: number;
    readonly renderedStyleLogoHeight: string;
    /*
    * A logo position relative to the [survey title](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#title).
    *
    * Possible values:
    *
    * - `"left"` (default) - Places the logo to the left of the survey title.
    * - `"right"` - Places the logo to the right of the survey title.
    * - `"none"` - Hides the logo.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/survey-logo/ (linkStyle))
    * @see logo
    * @see logoFit
    */
    logoPosition: string;
    readonly hasLogo: boolean;
    private updateHasLogo;
    readonly isLogoBefore: boolean;
    readonly isLogoAfter: boolean;
    readonly logoClassNames: string;
    private titleIsEmpty;
    readonly renderedHasTitle: boolean;
    readonly renderedHasDescription: boolean;
    readonly hasTitle: boolean;
    readonly renderedHasLogo: boolean;
    readonly renderedHasHeader: boolean;
    /*
    * Specifies how to resize a logo to fit it into its container.
    *
    * Possible values:
    *
    * - `"contain"` (default)
    * - `"cover"`
    * - `"fill"`
    * - `"none"`
    *
    * Refer to the [`object-fit`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) CSS property description for information on the possible values.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/survey-logo/ (linkStyle))
    * @see logo
    * @see logoPosition
    */
    logoFit: string;
    private cssVariables;
    readonly themeVariables: {
        [index: string]: string;
    };
    _isMobile: boolean;
    setIsMobile(newVal?: boolean): void;
    readonly isMobile: boolean;
    private _isCompact;
    isCompact: boolean;
    protected isLogoImageChoosen(): string;
    readonly titleMaxWidth: string;
    /**
     * An image to display in the background of the survey or form. Accepts a base64 or URL string value.
     * @see backgroundOpacity
     */
    backgroundImage: string;
    renderBackgroundImage: string;
    private updateRenderBackgroundImage;
    backgroundImageFit: ImageFit;
    backgroundImageAttachment: ImageAttachment;
    /*
    * A value from 0 to 1 that specifies how transparent the [background image](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#backgroundImage) should be: 0 makes the image completely transparent, and 1 makes it opaque.
    */
    backgroundOpacity: number;
    backgroundImageStyle: any;
    updateBackgroundImageStyle(): void;
    wrapperFormCss: string;
    updateWrapperFormCss(): void;
    /*
    * HTML content displayed on the [complete page](https://surveyjs.io/form-library/documentation/design-survey/create-a-multi-page-survey#complete-page).
    *
    * [View Demo](https://surveyjs.io/form-library/examples/modify-survey-navigation-settings/ (linkStyle))
    * @see showCompletedPage
    * @see completedHtmlOnCondition
    */
    completedHtml: string;
    readonly locCompletedHtml: LocalizableString;
    /*
    * An array of objects that allows you to specify different HTML content for the [complete page](https://surveyjs.io/form-library/documentation/design-survey/create-a-multi-page-survey#complete-page).
    *
    * Each object should include the [`expression`](https://surveyjs.io/form-library/documentation/api-reference/htmlconditionitem#expression) and [`html`](https://surveyjs.io/form-library/documentation/api-reference/htmlconditionitem#html) properties. When `expression` evaluates to `true`, the survey uses the corresponding HTML markup instead of [`completedHtml`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#completedHtml). Refer to the following help topic for more information about expressions: [Expressions](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#expressions).
    *
    * [View Demo](https://surveyjs.io/form-library/examples/nps-question/ (linkStyle))
    */
    completedHtmlOnCondition: Array<HtmlConditionItem>;
    /**
     * Calculates a given [expression](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#expressions) and returns a result value.
     * @param expression An expression to calculate.
     */
    runExpression(expression: string): any;
    /**
     * Calculates a given [expression](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#expressions) and returns `true` or `false`.
     * @param expression An expression to calculate.
     */
    runCondition(expression: string): boolean;
    /**
     * Executes [all triggers](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#triggers), except ["complete"](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#complete).
     *
     * [Conditional Survey Logic (Triggers)](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#conditional-survey-logic-triggers (linkStyle))
     * @see onTriggerExecuted
     */
    runTriggers(): void;
    readonly renderedCompletedHtml: string;
    private getExpressionItemOnRunCondition;
    /*
    * HTML content displayed to a user who has completed the survey before. To identify such users, the survey uses a [cookie name](#cookieName) or [client ID](#clientId).
    * @see processedCompletedBeforeHtml
    */
    completedBeforeHtml: string;
    readonly locCompletedBeforeHtml: LocalizableString;
    /*
    * HTML content displayed while a survey JSON schema is being loaded from [SurveyJS Service](https://api.surveyjs.io).
    * @see surveyId
    * @see processedLoadingHtml
    */
    loadingHtml: string;
    readonly locLoadingHtml: LocalizableString;
    readonly defaultLoadingHtml: string;
    readonly navigationBar: ActionContainer;
    /**
     * Adds a custom navigation item similar to the Previous Page, Next Page, and Complete buttons.
     * Accepts an object described in the [IAction](https://surveyjs.io/Documentation/Library?id=IAction) help section.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/survey-changenavigation/ (linkStyle))
    */
    addNavigationItem(val: IAction): Action;
    /*
    * Gets or sets a caption for the Start button.
    * @see firstPageIsStarted
    * @see [Localization & Globalization](https://surveyjs.io/form-library/documentation/survey-localization)
    */
    startSurveyText: string;
    readonly locStartSurveyText: LocalizableString;
    /*
    * Gets or sets a caption for the Previous button.
    * @see [Localization & Globalization](https://surveyjs.io/form-library/documentation/survey-localization)
    */
    pagePrevText: string;
    readonly locPagePrevText: LocalizableString;
    /*
    * Gets or sets a caption for the Next button.
    * @see [Localization & Globalization](https://surveyjs.io/form-library/documentation/survey-localization)
    */
    pageNextText: string;
    readonly locPageNextText: LocalizableString;
    /*
    * Gets or sets a caption for the Complete button.
    * @see [Localization & Globalization](https://surveyjs.io/form-library/documentation/survey-localization)
    */
    completeText: string;
    readonly locCompleteText: LocalizableString;
    /*
    * Gets or sets a caption for the Preview button.
    * @see showPreviewBeforeComplete
    * @see showPreview
    * @see editText
    */
    previewText: string;
    readonly locPreviewText: LocalizableString;
    /*
    * Gets or sets a caption for the Edit button displayed when the survey shows a [preview of given answers](https://surveyjs.io/form-library/documentation/design-survey/create-a-multi-page-survey#preview-page).
    * @see showPreviewBeforeComplete
    * @see cancelPreview
    * @see previewText
    */
    editText: string;
    readonly locEditText: LocalizableString;
    getElementTitleTagName(element: Base, tagName: string): string;
    /*
    * Specifies a pattern for question titles.
    *
    * Refer to the following help topic for more information: [Title Pattern](https://surveyjs.io/form-library/documentation/design-survey/configure-question-titles#title-pattern).
    */
    questionTitlePattern: string;
    getQuestionTitlePatternOptions(): Array<any>;
    questionTitleTemplate: string;
    private getNewTitlePattern;
    private getNewQuestionTitleElement;
    readonly locQuestionTitleTemplate: LocalizableString;
    getUpdatedQuestionTitle(question: Question, title: string): string;
    getUpdatedQuestionNo(question: Question, no: string): string;
    /*
    * Specifies whether page titles contain page numbers.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/how-to-number-pages-and-questions/ (linkStyle))
    */
    showPageNumbers: boolean;
    /*
    * Specifies whether to display question numbers and how to calculate them.
    *
    * Possible values:
    *
    * - `true` or `"on"` - Displays question numbers.
    * - `"onpage"` - Displays question numbers and starts numbering on each page from scratch.
    * - `false` or `"off"` - Hides question numbers.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/how-to-number-pages-and-questions/ (linkStyle))
    *
    * If you want to hide the number of an individual question, enable its [`hideNumber`](https://surveyjs.io/form-library/documentation/api-reference/question#hideNumber) property.
    */
    showQuestionNumbers: string | boolean;
    private progressBarValue;
    readonly progressBar: any;
    /*
    * Controls the visibility of the progress bar and specifies its position.
    *
    * Possible values:
    *
    * - `"off"` (default) - Hides the progress bar.
    * - `"aboveHeader"` - Displays the progress bar above the survey header.
    * - `"belowHeader"` - Displays the progress bar below the survey header.
    * - `"bottom"` - Displays the progress bar below survey content.
    * - `"topBottom"` - Displays the progress bar above and below survey content.
    * - `"auto"` - Displays the progress bar below the survey header if the header has a [background image](https://surveyjs.io/form-library/documentation/api-reference/iheader#backgroundImage) or color. Otherwise, the progress bar is displayed above the header.
    * - `"top"` - *(Obsolete)* Use the `"aboveHeader"` or `"belowHeader"` property value instead.
    * - `"both"` - *(Obsolete)* Use the `"topBottom"` property value instead.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/navigation-default/ (linkStyle))
    * @see progressBarType
    * @see progressValue
    */
    showProgressBar: string;
    /*
    * Specifies the type of information displayed by the progress bar. Applies only when [`showProgressBar`](#showProgressBar) is not `"off"`.
    *
    * Possible values:
    *
    * - `"pages"` (default) - The number of completed pages.
    * - `"questions"` - The number of answered questions.
    * - `"requiredQuestions"` - The number of answered [required questions](https://surveyjs.io/form-library/documentation/api-reference/question#isRequired).
    * - `"correctQuestions"` - The number of correct questions in a [quiz](https://surveyjs.io/form-library/documentation/design-survey/create-a-quiz).
    * - `"buttons"` - *(Obsolete)* Use the `"pages"` property value with the [`progressBarShowPageTitles`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#progressBarShowPageTitles) property set to `true` instead.
    *
    * > When `progressBarType` is set to `"pages"`, you can also enable the [`progressBarShowPageNumbers`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#progressBarShowPageNumbers) and [`progressBarShowPageTitles`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#progressBarShowPageTitles) properties if you want to display page numbers and titles in the progress bar.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/navigation-buttons/ (linkStyle))
    * @see progressValue
    */
    progressBarType: string;
    private readonly progressBarComponentName: any;
    /**
     * Specifies whether the progress bar displays page titles. Applies only when the [progress bar is visible](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#showProgressBar) and [`progressBarType`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#progressBarType) is `"pages"`.
     *
     * Default value: `false`
     * @see progressBarShowPageNumbers
     * @see progressBarInheritWidthFrom
     */
    progressBarShowPageTitles: boolean;
    /**
     * Specifies whether the progress bar displays page numbers. Applies only when the [progress bar is visible](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#showProgressBar) and [`progressBarType`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#progressBarType) is `"pages"`.
     *
     * Default value: `false`
     * @see progressBarShowPageTitles
     * @see progressBarInheritWidthFrom
     */
    progressBarShowPageNumbers: boolean;
    /**
     * Specifies whether the progress bar spans the width of the survey or that of the survey container. Applies only when the [progress bar is visible](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#showProgressBar) and [`progressBarType`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#progressBarType) is `"pages"`.
     *
     * Possible values:
     *
     * - `"survey"`\
     * The progress bar width is the same as the survey width.
     * - `"container"` (default)\
     * The progress bar width is the same as the survey container width.
     * @see progressBarShowPageTitles
     * @see progressBarShowPageNumbers
     */
    progressBarInheritWidthFrom: "survey" | "container";
    readonly isShowProgressBarOnTop: boolean;
    readonly isShowProgressBarOnBottom: boolean;
    getProgressTypeComponent(): string;
    getProgressCssClasses(container?: string): string;
    private canShowProresBar;
    readonly processedTitle: string;
    /*
    * Gets or sets question title location relative to the input field: `"top"`, `"bottom"`, or `"left"`.
    *
    * > Certain question types (Matrix, Multiple Text) do not support the `"left"` value. For them, the `"top"` value is used.
    *
    * You can override this setting if you specify the `questionTitleLocation` property for an [individual page](https://surveyjs.io/form-library/documentation/pagemodel#questionTitleLocation) or [panel](https://surveyjs.io/form-library/documentation/panelmodel#questionTitleLocation) or set the `titleLocation` property for a [specific question](https://surveyjs.io/form-library/documentation/question#titleLocation).
    */
    questionTitleLocation: string;
    updateElementCss(reNew?: boolean): void;
    /*
    * Specifies the error message position.
    *
    * Possible values:
    *
    * - `"top"` (default) - Displays error messages above questions.
    * - `"bottom"` - Displays error messages below questions.
    *
    * You can override this setting if you specify the `questionErrorLocation` property for an [individual page](https://surveyjs.io/form-library/documentation/pagemodel#questionErrorLocation) or [panel](https://surveyjs.io/form-library/documentation/panelmodel#questionErrorLocation) or set the `errorLocation` property for a [specific question](https://surveyjs.io/form-library/documentation/question#errorLocation).
    */
    questionErrorLocation: string;
    /*
    * Specifies where to display question descriptions.
    *
    * Possible values:
    *
    * - `"underTitle"` (default) - Displays descriptions under question titles.
    * - `"underInput"` - Displays descriptions under the interactive area.
    *
    * You can override this setting for individual questions if you specify their [`descriptionLocation`](https://surveyjs.io/form-library/documentation/api-reference/question#descriptionLocation) property.
    *
    */
    questionDescriptionLocation: string;
    /*
    * Specifies whether users can take the survey or only view it.
    *
    * Possible values:
    *
    * - `"edit"` (default) - Allows users to take the survey.
    * - `"display"` - Makes the survey read-only.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/survey-displaymode/ (linkStyle))
    */
    mode: string;
    private onModeChanged;
    /*
    * Gets or sets an object with survey results. You can set this property with an object of the following structure:
    *
    * ```js
    * {
    *   question1Name: question1Value,
    *   question2Name: question2Value,
    *   // ...
    * }
    * ```
    *
    * When you set this property in code, the new object overrides the old object that may contain default question values and entered data. If you want to *merge* the new and old objects, call the [`mergeData(newDataObj)`](https://surveyjs.io/form-library/documentation/surveymodel#mergeData) method.
    *
    * If you assign a new object while a respondent takes the survey, set the [`currentPageNo`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#currentPageNo) property to 0 to start the survey from the beginning. This will also cause the survey to re-evaluate the [`visibleIf`](https://surveyjs.io/form-library/documentation/api-reference/question#visibleIf), [`enableIf`](https://surveyjs.io/form-library/documentation/api-reference/question#enableIf), and other [expressions](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#expressions).
    * @see setValue
    * @see getValue
    */
    data: any;
    /**
     * Merges a specified data object with the object from the [`data`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#data) property.
     *
     * Refer to the following help topic for more information: [Populate Form Fields | Multiple Question Values](https://surveyjs.io/form-library/documentation/design-survey/pre-populate-form-fields#multiple-question-values).
     *
     * @param data A data object to merge. It should have the following structure: `{ questionName: questionValue, ... }`
     * @see setValue
     */
    mergeData(data: any): void;
    setDataCore(data: any, clearData?: boolean): void;
    readonly isSurvey: boolean;
    /**
     * Returns an object with survey results.
     *
     * If you want to get a survey results object that mirrors the survey structure, call the `getData()` method with an object that has the `includePages` and `includePanels` properties enabled. Without this object, the `getData()` method returns the [`data`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#data) property value.
     *
     * ```js
     * import { Model } from "survey-core";
     *
     * const surveyJson = { ... };
     * const survey = new Model(surveyJson);
     * survey.getData({ includePages: true, includePanels: true });
     * ```
     */
    getData(options?: {
        includePages?: boolean;
        includePanels?: boolean;
    }): any;
    getStructuredData(includePages?: boolean, level?: number): any;
    setStructuredData(data: any, doMerge?: boolean): void;
    private collectDataFromPanel;
    private onEditingObjPropertyChanged;
    editingObj: Base;
    private unConnectEditingObj;
    readonly isEditingSurveyElement: boolean;
    private setCalculatedValuesIntoResult;
    getAllValues(): any;
    /**
     * Returns survey results as an array of objects in which the question name, title, value, and other parameters are stored as individual properties.
     *
     * If a question can have more than one value (Matrix, Multiple Text), its object enables the `isNode` flag and stores information about these values in the `data` property. Refer to the following help topic for more information: [Access Full Survey Results](https://surveyjs.io/form-library/documentation/handle-survey-results-access#access-full-survey-results).
     *
     * If you want to skip empty answers, pass an object with the `includeEmpty` property set to `false`.
     */
    getPlainData(options?: IPlainDataOptions): Array<IQuestionPlainData>;
    getFilteredValues(): any;
    private addCalculatedValuesIntoFilteredValues;
    getFilteredProperties(): any;
    private getValuesKeys;
    getDataValueCore(valuesHash: any, key: string): any;
    setDataValueCore(valuesHash: any, key: string, value: any): void;
    deleteDataValueCore(valuesHash: any, key: string): void;
    valueHashGetDataCallback: (valuesHash: any, key: string) => any;
    valueHashSetDataCallback: (valuesHash: any, key: string, value: any) => void;
    valueHashDeleteDataCallback: (valuesHash: any, key: string) => void;
    private getDataFromValueHash;
    private setDataToValueHash;
    private deleteDataFromValueHash;
    /*
    * An object with all comment values.
    * @see Question.showCommentArea
    * @see storeOthersAsComment
    */
    readonly comments: any;
    /*
    * Returns an array of visible pages without the start page.
    *
    * To get an array of all pages, use the [`pages`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#pages) property. If all pages are visible, the `pages` and `visiblePages` arrays are identical.
    * @see [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#conditional-visibility)
    */
    readonly visiblePages: Array<PageModel>;
    private isPageInVisibleList;
    /*
    * Returns `true` if the survey contains zero pages.
    * @see emptySurveyText
    */
    readonly isEmpty: boolean;
    readonly PageCount: number;
    /*
    * Returns a total number of survey pages.
    *
    * To get the number of visible pages, use the [`visiblePageCount`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#visiblePageCount) property.
    * @see pages
    */
    readonly pageCount: number;
    /*
    * Returns the number of visible survey pages.
    *
    * To get a total number of survey pages, use the [`pageCount`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#pageCount) property.
    * @see visiblePages
    * @see [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#conditional-visibility)
    */
    readonly visiblePageCount: number;
    /*
    * Returns the start page. Applies only if the [`firstPageIsStarted`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#firstPageIsStarted) property is set to `true`.
    *
    * Refer to the following help topic for more information: [Start Page](https://surveyjs.io/form-library/documentation/design-survey/create-a-multi-page-survey#start-page).
    * @see firstPageIsStarted
    * @see activePage
    */
    readonly startedPage: PageModel;
    /*
    * Gets or sets the current page.
    *
    * If you want to change the current page, set this property to a `PageModel` object. You can get this object in different ways. For example, you can call the [`getPageByName()`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#getPageByName) method to obtain a `PageModel` object with a specific name:
    *
    * ```js
    * survey.currentPage = survey.getPageByName("my-page-name");
    * ```
    *
    * Alternatively, you can change the current page if you set the [`currentPageNo`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#currentPageNo) property to the index of the required page.
    *
    * The `currentPage` property does not return the start page even if it is current. Use the [`activePage`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#activePage) property instead if your survey contains a start page.
    */
    currentPage: any;
    tryNavigateToPage(page: PageModel): boolean;
    private updateCurrentPage;
    private readonly isCurrentPageAvailable: any;
    private isPageExistsInSurvey;
    /*
    * Returns [`startedPage`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#startedPage) if the survey currently displays a start page; otherwise, returns [`currentPage`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#currentPage).
    * @see startedPage
    * @see currentPage
    * @see firstPageIsStarted
    */
    readonly activePage: any;
    /*
    * A Boolean value that indicates whether the [start page](https://surveyjs.io/form-library/documentation/design-survey/create-a-multi-page-survey#start-page) is currently displayed.
    */
    readonly isShowStartingPage: boolean;
    /*
    * Specifies which part of a matrix row responds to a drag gesture in [Dynamic Matrix](https://surveyjs.io/form-library/examples/questiontype-matrixdynamic/) questions.
    *
    * Possible values:
    *
    * - `"entireItem"` (default) - Users can use the entire matrix row as a drag handle.
    * - `"icon"` - Users can only use a drag icon as a drag handle.
    */
    matrixDragHandleArea: string;
    readonly isShowingPage: boolean;
    private updateActivePage;
    private onStateAndCurrentPageChanged;
    private getPageByObject;
    /*
    * A zero-based index of the current page in the [`visiblePages`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#visiblePages) array.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/survey-editprevious/ (linkStyle))
    * @see visiblePages
    */
    currentPageNo: number;
    /*
    * Specifies the sort order of questions in the survey.
    *
    * Possible values:
    *
    * - `"initial"` (default) - Preserves the original order of questions.
    * - `"random"` - Displays questions in random order.
    *
    * You can override this property for individual pages and panels.
    * @see PageModel.questionsOrder
    * @see PanelModel.questionsOrder
    */
    questionsOrder: string;
    /**
     * Focuses the first question on the current page.
     * @see focusQuestion
     * @see focusFirstQuestionAutomatic
     */
    focusFirstQuestion(): void;
    scrollToTopOnPageChange(doScroll?: boolean): void;
    /*
    * Returns the current survey state.
    *
    * Possible values:
    *
    * - `"loading"` - The survey is being loaded from a JSON schema.
    * - `"empty"` - The survey has no elements to display.
    * - `"starting"` - The survey displays a [start page](https://surveyjs.io/form-library/documentation/design-survey/create-a-multi-page-survey#start-page).
    * - `"running"` - A respondent is taking the survey.
    * - `"preview"` - A respondent is [previewing](https://surveyjs.io/form-library/examples/survey-showpreview/) answers before submitting them.
    * - `"completed"` - A respondent has completed the survey and submitted the results.
    */
    readonly state: string;
    private updateState;
    private calcState;
    private isCompleted: any;
    private isShowingPreview: any;
    private isStartedState: any;
    private isCompletedBefore: any;
    private isLoading: any;
    readonly completedState: string;
    readonly completedStateText: string;
    protected setCompletedState(value: string, text: string): void;
    /**
     * Displays a toast notification with a specified message.
     *
     * Depending on the `type` argument, a survey can display the following notification types:
     *
     * ![Toast notification types in SurveyJS Form Library](https://surveyjs.io//Content/Images/docs/notification-types.png)
     * @param message A message to display.
     * @param type A notification type: `"info"` (default), `"success"`, or `"error"`.
     * @param showActions For internal use.
     */
    notify(message: string, type: string, showActions?: boolean): void;
    /**
     * Resets the survey [`state`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#state) and, optionally, [`data`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#data). If `state` is `"completed"`, it becomes `"running"`.
     * @param clearData *(Optional)* Specifies whether to clear survey data. Default value: `true`.
     * @param goToFirstPage *(Optional)* Specifies whether to switch the survey to the first page. Default value: `true`.
     */
    clear(clearData?: boolean, goToFirstPage?: boolean): void;
    mergeValues(src: any, dest: any): void;
    private updateValuesWithDefaults;
    protected updateCustomWidgets(page: PageModel): void;
    protected currentPageChanging(newValue: PageModel, oldValue: PageModel): boolean;
    protected currentPageChanged(newValue: PageModel, oldValue: PageModel): void;
    private notifyQuestionsOnHidingContent;
    private createPageChangeEventOptions;
    getProgress(): number;
    /*
    * Returns a percentage value that indicates user progress in the survey.
    * @see showProgressBar
    * @see progressBarType
    * @see progressText
    */
    readonly progressValue: number;
    readonly isNavigationButtonsShowing: string;
    readonly isNavigationButtonsShowingOnTop: boolean;
    readonly isNavigationButtonsShowingOnBottom: boolean;
    private getIsNavigationButtonsShowingOn;
    readonly isEditMode: boolean;
    readonly isDisplayMode: boolean;
    readonly isUpdateValueTextOnTyping: boolean;
    /*
    * Indicates whether the survey is being designed in [Survey Creator](https://surveyjs.io/survey-creator/documentation/overview).
    */
    readonly isDesignMode: boolean;
    private _isDesignMode;
    setDesignMode(value: boolean): void;
    /*
    * Specifies whether to show all survey elements, regardless of their visibility.
    *
    * Default value: `false`
    */
    showInvisibleElements: boolean;
    private updateAllElementsVisibility;
    readonly areInvisibleElementsShowing: boolean;
    readonly areEmptyElementsHidden: boolean;
    private readonly isAnyQuestionAnswered: any;
    /*
    * Indicates whether the browser has a cookie with a specified [`cookieName`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#cookieName). If this property's value is `true`, the respondent has passed the survey previously.
    * @see setCookie
    * @see deleteCookie
    */
    readonly hasCookie: boolean;
    /**
     * Sets a cookie with a specified [`cookieName`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#cookieName) in the browser. If the `cookieName` property value is defined, this method is automatically called on survey completion.
     * @see hasCookie
     * @see deleteCookie
     */
    setCookie(): void;
    /**
     * Deletes a cookie with a specified [`cookieName`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#cookieName) from the browser.
     * @see hasCookie
     * @see setCookie
     */
    deleteCookie(): void;
    /*
    * This property is obsolete. Use the [`validationEnabled`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#validationEnabled) property instead.
    */
    ignoreValidation: boolean;
    /**
     * Specifies whether data validation is enabled.
     *
     * Default value: `true`
     * @see checkErrorsMode
     * @see hideRequiredErrors
     */
    validationEnabled: boolean;
    /**
     * Specifies whether respondents can switch the current page even if it contains validation errors.
     *
     * Default value: `false`
     * @see checkErrorsMode
     */
    validationAllowSwitchPages: boolean;
    /**
     * Specifies whether respondents can end a survey with validation errors.
     *
     * Default value: `false`
     * @see checkErrorsMode
     */
    validationAllowComplete: boolean;
    /**
     * Switches the survey to the next page.
     *
     * This method returns a Boolean value that indicates whether the page was successfully switched. `false` is returned if the current page is the last page or if it contains validation errors.
     * @returns `true` if the page was successfully switched; `false` otherwise.
     * @see isLastPage
     * @see prevPage
     * @see completeLastPage
     */
    nextPage(): boolean;
    private hasErrorsOnNavigate;
    private asyncValidationQuesitons;
    private checkForAsyncQuestionValidation;
    private clearAsyncValidationQuesitons;
    private onCompletedAsyncQuestionValidators;
    readonly isCurrentPageHasErrors: boolean;
    /*
    * Returns `true` if the current page does not contain errors.
    * @see currentPage
    */
    readonly isCurrentPageValid: boolean;
    hasCurrentPageErrors(onAsyncValidation?: (hasErrors: boolean) => void): boolean;
    /**
     * Validates all questions on the current page and returns `false` if the validation fails.
     *
     * If you use validation expressions and at least one of them calls an async function, the `validateCurrentPage` method returns `undefined`. In this case, you should pass a callback function as the `onAsyncValidation` parameter. The function's `hasErrors` Boolean parameter will contain the validation result.
     * @param onAsyncValidation *(Optional)* Pass a callback function. It accepts a Boolean `hasErrors` parameter that equals `true` if the validation fails or `false` otherwise.
     * @see currentPage
     * @see validate
     * @see validateCurrentPage
     */
    validateCurrentPage(onAsyncValidation?: (hasErrors: boolean) => void): boolean;
    hasPageErrors(page?: PageModel, onAsyncValidation?: (hasErrors: boolean) => void): boolean;
    /**
     * Validates all questions on a specified page and returns `false` if the validation fails.
     *
     * If you use validation expressions and at least one of them calls an async function, the `validatePage` method returns `undefined`. In this case, you should pass a callback function as the `onAsyncValidation` parameter. The function's `hasErrors` Boolean parameter will contain the validation result.
     * @param page Pass the `PageModel` that you want to validate. You can pass `undefined` to validate the [`activePage`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#activePage).
     * @param onAsyncValidation *(Optional)* Pass a callback function. It accepts a Boolean `hasErrors` parameter that equals `true` if the validation fails or `false` otherwise.
     * @see validate
     * @see validateCurrentPage
     */
    validatePage(page?: PageModel, onAsyncValidation?: (hasErrors: boolean) => void): boolean;
    hasErrors(fireCallback?: boolean, focusOnFirstError?: boolean, onAsyncValidation?: (hasErrors: boolean) => void): boolean;
    /**
     * Validates all questions and returns `false` if the validation fails.
     *
     * If you use validation expressions and at least one of them calls an async function, the `validate` method returns `undefined`. In this case, you should pass a callback function as the `onAsyncValidation` parameter. The function's `hasErrors` Boolean parameter will contain the validation result.
     * @param fireCallback *(Optional)* Pass `false` if you do not want to show validation errors in the UI.
     * @param focusOnFirstError *(Optional)* Pass `true` if you want to focus the first question with a validation error. The survey will be switched to the page that contains this question if required.
     * @param onAsyncValidation *(Optional)* Pass a callback function. It accepts a Boolean `hasErrors` parameter that equals `true` if the validation fails or `false` otherwise.
     * @see validateCurrentPage
     * @see validatePage
     */
    validate(fireCallback?: boolean, focusOnFirstError?: boolean, onAsyncValidation?: (hasErrors: boolean) => void, changeCurrentPage?: boolean): boolean;
    ensureUniqueNames(element?: ISurveyElement): void;
    private ensureUniqueName;
    private ensureUniquePageName;
    private ensureUniquePanelName;
    private ensureUniqueQuestionName;
    private ensureUniqueElementName;
    private getNewName;
    private checkIsCurrentPageHasErrors;
    private checkIsPageHasErrors;
    private fireValidatedErrorsOnPage;
    /**
     * Switches the survey to the previous page.
     *
     * This method returns a Boolean value that indicates whether the page was successfully switched. `false` is returned if the current page is the first page.
     * @returns `true` if the page was successfully switched; `false` otherwise.
     * @see isFirstPage
     * @see nextPage
     */
    prevPage(): boolean;
    /**
     * Completes the survey if it currently displays the last page and the page contains no validation errors. If both these conditions are met, this method returns `true`; otherwise, `false`.
     *
     * If you want to complete the survey regardless of the current page and validation errors, use the [`doComplete()`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#completeLastPage) event.
     * @see isCurrentPageValid
     * @see nextPage
     */
    completeLastPage(): boolean;
    private isNavigationButtonPressed;
    navigationMouseDown(): boolean;
    private resetNavigationButton;
    private mouseDownPage;
    nextPageUIClick(): boolean;
    nextPageMouseDown(): boolean;
    /**
     * Displays a [preview of given answers](https://surveyjs.io/form-library/documentation/design-survey/create-a-multi-page-survey#preview-page). Returns `false` if the preview cannot be displayed because of validation errors.
     * @see cancelPreview
     * @see showPreviewBeforeComplete
     * @see onShowingPreview
     * @see state
     */
    showPreview(): boolean;
    private showPreviewCore;
    /**
     * Cancels a [preview of given answers](https://surveyjs.io/form-library/documentation/design-survey/create-a-multi-page-survey#preview-page) and switches the survey to the page specified by the `currentPage` parameter.
     * @param currentPage A new current page. If you do not specify this parameter, the survey displays the last page.
     * @see showPreview
     * @see showPreviewBeforeComplete
     * @see state
     */
    cancelPreview(currentPage?: any): void;
    private gotoPageFromPreview;
    cancelPreviewByPage(panel: IPanel): any;
    protected doCurrentPageComplete(doComplete: boolean): boolean;
    private doCurrentPageCompleteCore;
    isSinglePage: boolean;
    /*
    * Specifies how to distribute survey elements between pages.
    *
    * Possible values:
    *
    * - `"singlePage"` - Combines all survey pages into a single page.
    * - `"questionPerPage"` - Creates a separate page for every question.
    * - `"standard"` (default) - Retains the original structure specified in the JSON schema.
    */
    questionsOnPageMode: string;
    /*
    * Gets or sets a Boolean value that specifies whether the first page is a start page.
    *
    * Refer to the following help topic for more information: [Start Page](https://surveyjs.io/form-library/documentation/design-survey/create-a-multi-page-survey#start-page).
    * @see startedPage
    * @see activePage
    */
    firstPageIsStarted: boolean;
    isPageStarted(page: IPage): boolean;
    /*
    * Allows respondents to preview answers before they are submitted.
    *
    * Possible values:
    *
    * - `"showAllQuestions"` - Displays all questions in the preview.
    * - `"showAnsweredQuestions"` - Displays only answered questions in the preview.
    * - `"noPreview"` (default) - Hides the preview.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/survey-showpreview/ (linkStyle))
    * @see showPreview
    * @see cancelPreview
    */
    showPreviewBeforeComplete: string;
    readonly isShowPreviewBeforeComplete: boolean;
    protected onFirstPageIsStartedChanged(): void;
    private runningPages;
    private onShowingPreviewChanged;
    private changeCurrentPageFromPreview;
    private originalPages;
    protected onQuestionsOnPageModeChanged(oldValue: string, isFirstLoad?: boolean): void;
    private restoreOriginalPages;
    private getPageStartIndex;
    private isLockingUpdateOnPageModes;
    private setupPagesForPageModes;
    private createPagesForQuestionOnPageMode;
    private createSinglePage;
    private createPagesForEveryQuestion;
    /*
    * Indicates whether the [current page](#currentPage) is the first page.
    *
    * > If the survey displays the [start page](https://surveyjs.io/form-library/documentation/design-survey/create-a-multi-page-survey#start-page), this property contains `false`. Use the [`isShowStartingPage`](#isShowStartingPage) property to find out whether the start page is currently displayed.
    */
    readonly isFirstPage: boolean;
    /*
    * Indicates whether the [current page](#currentPage) is the last page.
    */
    readonly isLastPage: boolean;
    private updateButtonsVisibility;
    readonly isShowPrevButton: boolean;
    readonly isShowNextButton: boolean;
    readonly isCompleteButtonVisible: boolean;
    readonly isPreviewButtonVisible: boolean;
    readonly isCancelPreviewButtonVisible: boolean;
    private updateIsFirstLastPageState;
    private calcIsShowPrevButton;
    private calcIsShowNextButton;
    calcIsCompleteButtonVisible(): boolean;
    private calcIsPreviewButtonVisible;
    private calcIsCancelPreviewButtonVisible;
    private readonly firstVisiblePage: any;
    private readonly lastVisiblePage: any;
    /**
     * Completes the survey.
     *
     * When you call this method, Form Library performs the following actions:
     *
     * 1. Saves a cookie if the [`cookieName`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#cookieName) property is set.
     * 1. Switches the survey [`state`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#state) to `"completed"`.
     * 1. Raises the [`onComplete`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onComplete) event.
     * 1. Navigates the user to a URL specified by the [`navigateToUrl`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#navigateToUrl) or [`navigateToUrlOnCondition`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#navigateToUrlOnCondition) property.
     * 1. Calls the [`sendResult()`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#sendResult) method if Form Library works with [SurveyJS Service](https://api.surveyjs.io/).
     *
     * The `doComplete()` method completes the survey regardless of validation errors and the current page. If you need to ensure that survey results are valid and full, call the [`completeLastPage()`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#completeLastPage) method instead.
     *
     * @param isCompleteOnTrigger For internal use.
     * @param completeTrigger For internal use.
     * @returns `false` if survey completion is cancelled within the [`onCompleting`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onCompleting) event handler; otherwise, `true`.
     * @see surveyPostId
     */
    doComplete(isCompleteOnTrigger?: boolean, completeTrigger?: Trigger): boolean;
    private saveDataOnComplete;
    private checkOnCompletingEvent;
    /**
     * Starts the survey. Applies only if the survey has a [start page](https://surveyjs.io/form-library/documentation/design-survey/create-a-multi-page-survey#start-page).
     * @see firstPageIsStarted
     * @see completeLastPage
     */
    start(): boolean;
    /*
    * Indicates whether the current page is being [validated on a server](#onServerValidateQuestions).
    */
    readonly isValidatingOnServer: boolean;
    private serverValidationEventCount;
    private setIsValidatingOnServer;
    private createServerValidationOptions;
    protected onIsValidatingOnServerChanged(): void;
    protected doServerValidation(doComplete: boolean, isPreview?: boolean): boolean;
    private completeServerValidation;
    protected doNextPage(): void;
    setCompleted(trigger: Trigger): void;
    canBeCompleted(trigger: Trigger, isCompleted: boolean): void;
    private completedByTriggers;
    private readonly canBeCompletedByTrigger: any;
    private readonly completedTrigger: any;
    /*
    * Returns HTML content displayed on the [complete page](https://surveyjs.io/form-library/documentation/design-survey/create-a-multi-page-survey#complete-page).
    *
    * To specify HTML content, use the [`completedHtml`](#completedHtml) property.
    */
    readonly processedCompletedHtml: string;
    /*
    * Returns HTML content displayed to a user who has completed the survey before. To identify such users, the survey uses a [cookie name](#cookieName) or [client ID](#clientId).
    *
    * To specify HTML content, use the [`completedBeforeHtml`](#completedBeforeHtml) property.
    */
    readonly processedCompletedBeforeHtml: string;
    /*
    * Returns HTML content displayed while a survey JSON schema is being loaded from [SurveyJS Service](https://api.surveyjs.io).
    *
    * To specify HTML content, use the [`loadingHtml`](#loadingHtml) property.
    */
    readonly processedLoadingHtml: string;
    getProgressInfo(): IProgressInfo;
    /*
    * Returns text displayed by the progress bar (for instance, "Page 2 of 3" or "Answered 3/8 questions"). Handle the [`onProgressText`](#onProgressText) event to change this text.
    * @see progressValue
    * @see showProgressBar
    * @see progressBarType
    */
    readonly progressText: string;
    private isCalculatingProgressText;
    updateProgressText(onValueChanged?: boolean): void;
    getProgressText(): string;
    private getProgressTextCore;
    rootCss: string;
    getRootCss(): string;
    private resizeObserver;
    afterRenderSurvey(htmlElement: any): void;
    private processResponsiveness;
    triggerResponsiveness(hard: boolean): void;
    destroyResizeObserver(): void;
    updateQuestionCssClasses(question: Question, cssClasses: any): void;
    updatePanelCssClasses(panel: PanelModel, cssClasses: any): void;
    updatePageCssClasses(page: PageModel, cssClasses: any): void;
    updateChoiceItemCss(question: IQuestion, options: any): void;
    private isCurrentPageRendering;
    private isCurrentPageRendered;
    afterRenderPage(htmlElement: HTMLElement): void;
    afterRenderHeader(htmlElement: HTMLElement): void;
    afterRenderQuestion(question: Question, htmlElement: HTMLElement): void;
    afterRenderQuestionInput(question: Question, htmlElement: HTMLElement): void;
    afterRenderPanel(panel: IElement, htmlElement: HTMLElement): void;
    whenQuestionFocusIn(question: Question): void;
    whenPanelFocusIn(panel: PanelModel): void;
    private rebuildQuestionChoices;
    canChangeChoiceItemsVisibility(): boolean;
    getChoiceItemVisibility(question: Question, item: any, val: boolean): boolean;
    loadQuestionChoices(options: {
        question: Question;
        filter: string;
        skip: number;
        take: number;
        setItems: (items: Array<any>, totalCount: number) => void;
    }): void;
    getChoiceDisplayValue(options: {
        question: Question;
        values: Array<any>;
        setItems: (displayValues: Array<string>, ...customValues: Array<IValueItemCustomPropValues>) => void;
    }): void;
    matrixBeforeRowAdded(options: any): void;
    matrixRowAdded(question: QuestionMatrixDynamicModel, row: any): void;
    matrixColumnAdded(question: Question, column: any): void;
    multipleTextItemAdded(question: QuestionMultipleTextModel, item: any): void;
    getQuestionByValueNameFromArray(valueName: string, name: string, index: number): IQuestion;
    matrixRowRemoved(question: QuestionMatrixDynamicModel, rowIndex: number, row: any): void;
    matrixRowRemoving(question: QuestionMatrixDynamicModel, rowIndex: number, row: any): boolean;
    matrixAllowRemoveRow(question: QuestionMatrixDynamicModel, rowIndex: number, row: any): boolean;
    matrixDetailPanelVisibleChanged(question: QuestionMatrixDropdownModelBase, rowIndex: number, row: any, visible: boolean): void;
    matrixCellCreating(question: QuestionMatrixDropdownModelBase, options: any): void;
    matrixCellCreated(question: QuestionMatrixDropdownModelBase, options: any): void;
    matrixAfterCellRender(question: QuestionMatrixDropdownModelBase, options: any): void;
    matrixCellValueChanged(question: QuestionMatrixDropdownModelBase, options: any): void;
    matrixCellValueChanging(question: QuestionMatrixDropdownModelBase, options: MatrixCellValueChangingEvent): void;
    readonly isValidateOnValueChanging: boolean;
    readonly isValidateOnValueChanged: boolean;
    private readonly isValidateOnComplete: any;
    matrixCellValidate(question: QuestionMatrixDropdownModelBase, options: MatrixCellValidateEvent): SurveyError;
    dynamicPanelAdded(question: QuestionPanelDynamicModel, panelIndex?: number, panel?: PanelModel): void;
    dynamicPanelRemoved(question: QuestionPanelDynamicModel, panelIndex: number, panel: PanelModel): void;
    dynamicPanelRemoving(question: QuestionPanelDynamicModel, panelIndex: number, panel: PanelModel): boolean;
    dynamicPanelItemValueChanged(question: IQuestion, options: any): void;
    dynamicPanelGetTabTitle(question: IQuestion, options: any): void;
    dynamicPanelCurrentIndexChanged(question: IQuestion, options: any): void;
    dragAndDropAllow(options: DragDropAllowEvent): boolean;
    elementContentVisibilityChanged(element: ISurveyElement): void;
    getUpdatedPanelFooterActions(panel: PanelModel, actions: Array<IAction>, question?: QuestionPanelDynamicModel): Array<IAction>;
    getUpdatedElementTitleActions(element: ISurveyElement, titleActions: Array<IAction>): Array<IAction>;
    private getUpdatedQuestionTitleActions;
    private getUpdatedPanelTitleActions;
    private getUpdatedPageTitleActions;
    getUpdatedMatrixRowActions(question: QuestionMatrixDropdownModelBase, row: any, actions: Array<IAction>): IAction[];
    scrollElementToTop(element: ISurveyElement, question: Question, page: PageModel, id: string, scrollIfVisible?: boolean, scrollIntoViewOptions?: ScrollIntoViewOptions): any;
    /**
     * Opens a dialog window for users to select files.
     * @param input A [file input HTML element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement).
     * @param callback A callback function that you can use to process selected files. Accepts an array of JavaScript <a href="https://developer.mozilla.org/en-US/docs/Web/API/File" target="_blank">File</a> objects.
     * @see onOpenFileChooser
     * @see onUploadFile
     */
    chooseFiles(input: HTMLInputElement, callback: (files: File[]) => void, context?: {
        element: Base;
        item?: any;
        elementType?: string;
        propertyName?: string;
    }): void;
    /**
     * Uploads files to a server.
     *
     * The following code shows how to call this method:
     *
     * ```js
     * const question = survey.getQuestionByName("myFileQuestion");
     * survey.uploadFiles(
     *   question,
     *   question.name,
     *   question.value,
     *   (data, errors) => {
     *     // ...
     *   }
     * );
     * ```
     * @param question A [File Upload question instance](https://surveyjs.io/form-library/documentation/api-reference/file-model) or [Signature Pad question instance](https://surveyjs.io/form-library/documentation/api-reference/signature-pad-model).
     * @param name The File Upload question's [`name`](https://surveyjs.io/form-library/documentation/api-reference/file-model#name) or Signature Pad question's [`name`](https://surveyjs.io/form-library/documentation/api-reference/signature-pad-model#name).
     * @param files An array of JavaScript <a href="https://developer.mozilla.org/en-US/docs/Web/API/File" target="_blank">File</a> objects that represent files to upload.
     * @param callback A callback function that allows you to access successfully uploaded files as the first argument. If any files fail to upload, the second argument contains an array of error messages.
     * @see onUploadFiles
     * @see downloadFile
     */
    uploadFiles(question: QuestionFileModel | QuestionSignaturePadModel, name: string, files: File[], callback: (data: any | Array<any>, errors?: any | Array<any>) => any): void;
    /**
     * Downloads a file from a server.
     *
     * The following code shows how to call this method:
     *
     * ```js
     * const question = survey.getQuestionByName("myFileQuestion");
     * survey.downloadFile(
     *   question,
     *   question.name,
     *   // Download the first uploaded file
     *   question.value[0],
     *   (status, data) => {
     *     if (status === "success") {
     *       // Use `data` to retrieve the file
     *     }
     *     if (status === "error") {
     *       // Handle error
     *     }
     *   }
     * );
     * ```
     *
     * @param question A [File Upload question instance](https://surveyjs.io/form-library/documentation/api-reference/file-model).
     * @param questionName The File Upload question's [`name`](https://surveyjs.io/form-library/documentation/api-reference/file-model#name).
     * @param fileValue An object from File Upload's [`value`](https://surveyjs.io/form-library/documentation/api-reference/file-model#value) array. This object contains metadata about the file you want to download.
     * @param callback A callback function that allows you to get the download status (`"success"` or `"error"`) and the file identifier (URL, file name, etc.) that you can use to retrieve the file.
     * @see onDownloadFile
     * @see uploadFiles
     */
    downloadFile(question: QuestionFileModel, questionName: string, fileValue: any, callback: (status: string, data: any) => any): void;
    clearFiles(question: QuestionFileModel | QuestionSignaturePadModel, name: string, value: any, fileName: string, callback: (status: string, data: any) => any): void;
    updateChoicesFromServer(question: QuestionSelectBase, choices: Array<ItemValue>, serverResult: any): Array<ItemValue>;
    loadedChoicesFromServer(question: IQuestion): void;
    protected createSurveyService(): dxSurveyService;
    protected uploadFilesCore(name: string, files: File[], uploadingCallback: (data: any | Array<any>, errors?: any | Array<any>) => any): void;
    getPage(index: number): PageModel;
    /**
     * Adds an existing page to the survey.
     * @param page A page to add.
     * @param index An index at which to insert the page. If you do not specify this parameter, the page will be added to the end.
     * @see addNewPage
     * @see createNewPage
     */
    addPage(page: PageModel, index?: number): void;
    /**
     * Creates a new page and adds it to the survey.
     *
     * If you want to switch a survey to the newly added page, assign its index to the [`currentPageNo`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#currentPageNo) property or assign the entire page to the [`currentPage`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#currentPage) property.
     *
     * @param name A page name. If you do not specify this parameter, it will be generated automatically.
     * @param index An index at which to insert the page. If you do not specify this parameter, the page will be added to the end.
     * @returns The created and added page.
     * @see addPage
     * @see createNewPage
     */
    addNewPage(name?: string, index?: number): PageModel;
    /**
     * Removes a page from the survey.
     *
     * Pass a `PageModel` object to this method. You can get this object in different ways. For example, you can call the [`getPageByName()`](#getPageByName) method to obtain a `PageModel` object with a specific name or use the [`currentPage`](#currentPage) property to access and delete the current page, as shown in the code below.
     *
     * ```js
     * // Delete the current page
     * survey.removePage(survey.currentPage);
     * ```
     * @param page A page to remove.
     * @see addNewPage
     */
    removePage(page: PageModel): void;
    /**
     * Returns a question with a specified [`name`](https://surveyjs.io/form-library/documentation/api-reference/question#name).
     * @param name A question name
     * @param caseInsensitive *(Optional)* A Boolean value that specifies case sensitivity when searching for the question. Default value: `false` (uppercase and lowercase letters are treated as distinct).
     * @returns A question with a specified name.
     * @see getAllQuestions
     * @see getQuestionByValueName
     */
    getQuestionByName(name: string, caseInsensitive?: boolean): Question;
    findQuestionByName(name: string): IQuestion;
    getEditingSurveyElement(): Base;
    /**
     * Returns a question with a specified [`valueName`](https://surveyjs.io/form-library/documentation/api-reference/question#valueName).
     *
     * > Since `valueName` does not have to be unique, multiple questions can have the same `valueName` value. In this case, the `getQuestionByValueName()` method returns the first such question. If you need to get all questions with the same `valueName`, call the `getQuestionsByValueName()` method.
     * @param valueName A question's `valueName` property value.
     * @param caseInsensitive *(Optional)* A Boolean value that specifies case sensitivity when searching for the question. Default value: `false` (uppercase and lowercase letters are treated as distinct).
     * @returns A question with a specified `valueName`.
     * @see getAllQuestions
     * @see getQuestionByName
     */
    getQuestionByValueName(valueName: string, caseInsensitive?: boolean): Question;
    /**
     * Returns all questions with a specified [`valueName`](https://surveyjs.io/form-library/documentation/api-reference/question#valueName). If a question's `valueName` is undefined, its [`name`](https://surveyjs.io/form-library/documentation/api-reference/question#name) property is used.
     * @param valueName A question's `valueName` property value.
     * @param caseInsensitive *(Optional)* A Boolean value that specifies case sensitivity when searching for the questions. Default value: `false` (uppercase and lowercase letters are treated as distinct).
     * @returns An array of questions with a specified `valueName`.
     * @see getAllQuestions
     * @see getQuestionByName
     */
    getQuestionsByValueName(valueName: string, caseInsensitive?: boolean): Array<Question>;
    getCalculatedValueByName(name: string): CalculatedValue;
    /**
     * Returns an array of questions with specified [names](https://surveyjs.io/form-library/documentation/api-reference/question#name).
     * @param names An array of question names.
     * @param caseInsensitive *(Optional)* A Boolean value that specifies case sensitivity when searching for the questions. Default value: `false` (uppercase and lowercase letters are treated as distinct).
     * @returns An array of questions with specified names
     * @see getAllQuestions
     */
    getQuestionsByNames(names: string[], caseInsensitive?: boolean): IQuestion[];
    /**
     * Returns a page to which a specified survey element (question or panel) belongs.
     * @param element A question or panel instance.
     */
    getPageByElement(element: IElement): PageModel;
    /**
     * Returns a page to which a specified question belongs.
     * @param question A question instance.
     */
    getPageByQuestion(question: IQuestion): PageModel;
    /**
     * Returns a page with a specified name.
     * @param name A page [name](https://surveyjs.io/form-library/documentation/api-reference/page-model#name).
     */
    getPageByName(name: string): PageModel;
    /**
     * Returns an array of pages with specified names.
     * @param names An array of page names.
     */
    getPagesByNames(names: string[]): PageModel[];
    /**
     * Returns a list of all [questions](https://surveyjs.io/form-library/documentation/api-reference/question) in the survey.
     * @param visibleOnly A Boolean value that specifies whether to include only visible questions.
     * @param includeDesignTime For internal use.
     * @param includeNested A Boolean value that specifies whether to include nested questions, such as questions within matrix cells.
     * @returns An array of questions.
     * @see getQuestionByName
     */
    getAllQuestions(visibleOnly?: boolean, includeDesignTime?: boolean, includeNested?: boolean): Array<Question>;
    /**
     * Returns an array of quiz questions. A question counts if it is visible, has an input field, and specifies [`correctAnswer`](https://surveyjs.io/form-library/documentation/api-reference/checkbox-question-model#correctAnswer).
     *
     * For more information about quizzes, refer to the following tutorial: [Create a Quiz](https://surveyjs.io/form-library/documentation/design-survey/create-a-quiz).
     * @returns An array of quiz questions.
     * @see getQuizQuestionCount
     */
    getQuizQuestions(): Array<IQuestion>;
    /**
     * Returns a [panel](https://surveyjs.io/form-library/documentation/api-reference/panel-model) with a specified [`name`](https://surveyjs.io/form-library/documentation/api-reference/panel-model#name).
     * @param name A panel name.
     * @param caseInsensitive *(Optional)* A Boolean value that specifies case sensitivity when searching for the panel. Default value: `false` (uppercase and lowercase letters are treated as distinct).
     * @returns A panel with a specified name.
     * @see getAllPanels
     */
    getPanelByName(name: string, caseInsensitive?: boolean): PanelModel;
    /**
     * Returns a list of all [panels](https://surveyjs.io/form-library/documentation/api-reference/panel-model) in the survey.
     * @param visibleOnly A Boolean value that specifies whether to include only visible panels.
     * @param includeDesignTime For internal use.
     * @returns An array of panels.
     * @see getPanelByName
     */
    getAllPanels(visibleOnly?: boolean, includeDesignTime?: boolean): Array<IPanel>;
    /**
     * Creates and returns a new page but does not add it to the survey.
     *
     * Call the [`addPage(page)`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#addPage) method to add the created page to the survey later or the [`addNewPage(name, index)`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#addNewPage) method to create _and_ add a page to the survey.
     * @see addPage
     * @see addNewPage
     */
    createNewPage(name: string): PageModel;
    protected questionOnValueChanging(valueName: string, newValue: any, questionValueName?: string): any;
    protected updateQuestionValue(valueName: string, newValue: any): void;
    private checkQuestionErrorOnValueChanged;
    private checkQuestionErrorOnValueChangedCore;
    private checkErrorsOnValueChanging;
    protected notifyQuestionOnValueChanged(valueName: string, newValue: any, questionName: string): void;
    private isRunningElementsBindings;
    private updateVisibleIndexAfterBindings;
    private checkElementsBindings;
    private notifyElementsOnAnyValueOrVariableChanged;
    private updateAllQuestionsValue;
    private notifyAllQuestionsOnValueChanged;
    private checkOnPageTriggers;
    private getCurrentPageQuestions;
    private isTriggerIsRunning;
    private triggerValues;
    private triggerKeys;
    private checkTriggers;
    private checkTriggersAndRunConditions;
    private readonly hasRequiredValidQuestionTrigger: any;
    private doElementsOnLoad;
    private conditionValues;
    private readonly isRunningConditions: any;
    private isValueChangedOnRunningCondition;
    private conditionRunnerCounter;
    private conditionUpdateVisibleIndexes;
    private conditionNotifyElementsOnAnyValueOrVariableChanged;
    /**
     * Recalculates all [expressions](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#expressions) in the survey.
     */
    runExpressions(): void;
    private runConditions;
    private runConditionOnValueChanged;
    private runConditionsCore;
    private runQuestionsTriggers;
    private checkIfNewPagesBecomeVisible;
    /**
     * Posts a survey result to [SurveyJS Service](https://api.surveyjs.io/).
     * @param postId An identifier used to save survey results. You can find it on the [My Surveys](https://surveyjs.io/service/mysurveys) page. If you do not specify this parameter, the survey uses the [`surveyPostId`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#surveyPostId) property value.
     * @param clientId A respondent identifier (e-mail or other unique ID). This ID ensures that the respondent does not pass the same survey twice.
     * @param isPartial Pass `true` to save partial survey results (see [Continue an Incomplete Survey](https://surveyjs.io/form-library/documentation/handle-survey-results-continue-incomplete)).
     */
    sendResult(postId?: string, clientId?: string, isPartial?: boolean): void;
    /**
     * Requests [SurveyJS Service](https://api.surveyjs.io/) to retrieve all answers to a specified question. Handle the [`onGetResult`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onGetResult) event to access the answers.
     * @param resultId A result ID that identifies the required survey. You can find it on the [My Surveys](https://surveyjs.io/service/mysurveys) page.
     * @param questionName A question name.
     */
    getResult(resultId: string, questionName: string): void;
    /**
     * Loads a survey JSON schema from the [SurveyJS Service](https://api.surveyjs.io). You can handle the [`onLoadedSurveyFromService`](#onLoadedSurveyFromService) event to modify the schema after loading if required.
     * @param surveyId The identifier of a survey JSON schema to load. Refer to the following help topic for more information: [Store Survey Results in the SurveyJS Service](https://surveyjs.io/form-library/documentation/handle-survey-results-store#store-survey-results-in-the-surveyjs-service).
     * @param clientId A user identifier (e-mail or other unique ID) used to determine whether the user has already taken the survey.
     */
    loadSurveyFromService(surveyId?: string, clientId?: string): void;
    private loadSurveyFromServiceJson;
    protected onLoadingSurveyFromService(): void;
    protected onLoadSurveyFromService(): void;
    private resetVisibleIndexes;
    private updateVisibleIndexes;
    private updatePageVisibleIndexes;
    fromJSON(json: any, options?: ILoadFromJSONOptions): void;
    startLoadingFromJson(json?: any): void;
    setJsonObject(jsonObj: any): void;
    private isEndLoadingFromJson;
    endLoadingFromJson(): void;
    private updateNavigationCss;
    private updateNavigationItemCssCallback;
    private updateNavigationBarCss;
    protected createNavigationBar(): ActionContainer;
    protected createNavigationActions(): Array<IAction>;
    protected onBeforeCreating(): void;
    protected onCreating(): void;
    private getProcessedTextValue;
    getBuiltInVariableValue(name: string): number;
    private getProcessedTextValueCore;
    private getProcessedValuesWithoutQuestion;
    private getFirstName;
    private reduceFirstName;
    private isClearingUnsedValues;
    private clearUnusedValues;
    hasVisibleQuestionByValueName(valueName: string): boolean;
    questionsByValueName(valueName: string): Array<IQuestion>;
    private clearInvisibleQuestionValues;
    /**
     * Returns a variable value.
     *
     * [Variables help topic](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#variables (linkStyle))
     * @param name A variable name.
     * @return A variable value.
     * @see setVariable
     * @see getVariableNames
     */
    getVariable(name: string): any;
    /**
     * Sets a variable value.
     *
     * [Variables help topic](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#variables (linkStyle))
     * @param name A variable name.
     * @param newValue A new variable value.
     * @see getVariable
     * @see getVariableNames
     */
    setVariable(name: string, newValue: any): void;
    /**
     * Returns the names of all variables in the survey.
     *
     * [Variables help topic](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#variables (linkStyle))
     * @returns An array of variable names.
     * @see getVariable
     * @see setVariable
     */
    getVariableNames(): Array<string>;
    protected getUnbindValue(value: any): any;
    /**
     * Returns a value (answer) for a question with a specified `name`.
     * @param name A question name.
     * @returns A question value (answer).
     * @see data
     * @see setValue
     */
    getValue(name: string): any;
    /**
     * Sets a question value (answer).
     *
     * > This method executes all triggers and reevaluates conditions (`visibleIf`, `requiredId`, and others). It also switches the survey to the next page if the [`goNextPageAutomatic`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#goNextPageAutomatic) property is enabled and all questions on the current page have correct answers.
     * @param name A question name.
     * @param newValue A new question value.
     * @param locNotification For internal use.
     * @param allowNotifyValueChanged For internal use.
     * @see data
     * @see getValue
     */
    setValue(name: string, newQuestionValue: any, locNotification?: any, allowNotifyValueChanged?: boolean, questionName?: string): void;
    private isValueEmpyOnSetValue;
    private updateOnSetValue;
    private isValueEqual;
    protected doOnPageAdded(page: PageModel): void;
    protected doOnPageRemoved(page: PageModel): void;
    private generateNewName;
    protected tryGoNextPageAutomatic(name: string): void;
    /**
     * Returns a comment value from a question with a specified `name`.
     * @param name A question name.
     * @returns A comment.
     * @see setComment
     */
    getComment(name: string): string;
    /**
     * Sets a comment value to a question with a specified `name`.
     * @param name A question name.
     * @param newValue A new comment value.
     * @param locNotification For internal use.
     * @see getComment
     */
    setComment(name: string, newValue: string, locNotification?: any): void;
    /**
     * Deletes an answer from survey results.
     * @param {string} name An object property that stores the answer to delete. Pass a question's [`valueName`](https://surveyjs.io/form-library/documentation/api-reference/question#valueName) or [`name`](https://surveyjs.io/form-library/documentation/api-reference/question#name).
     */
    clearValue(name: string): void;
    /*
    * Specifies whether to remove disabled choices from the value in [Dropdown](https://surveyjs.io/form-library/documentation/api-reference/dropdown-menu-model), [Checkboxes](https://surveyjs.io/form-library/documentation/api-reference/checkbox-question-model), and [Radio Button Group](https://surveyjs.io/form-library/documentation/api-reference/radio-button-question-model) questions.
    *
    * Default value: `false`
    *
    * > This property cannot be specified in the survey JSON schema. Use dot notation to specify it.
    */
    clearValueOnDisableItems: boolean;
    getQuestionClearIfInvisible(questionClearIf: string): string;
    questionVisibilityChanged(question: Question, newValue: boolean, resetIndexes: boolean): void;
    pageVisibilityChanged(page: PageModel, newValue: boolean): void;
    panelVisibilityChanged(panel: PanelModel, newValue: boolean): void;
    questionCreated(question: Question): any;
    questionAdded(question: Question, index: number, parentPanel: any, rootPanel: any): void;
    private canFireAddElement;
    questionRemoved(question: Question): void;
    questionRenamed(question: IQuestion, oldName: string, oldValueName: string): any;
    private questionHashes;
    private questionHashesClear;
    private questionHashesPanelAdded;
    private questionHashesAdded;
    private questionHashesRemoved;
    private questionHashAddedCore;
    private questionHashRemovedCore;
    panelAdded(panel: PanelModel, index: number, parentPanel: any, rootPanel: any): void;
    panelRemoved(panel: PanelModel): void;
    validateQuestion(question: Question): SurveyError;
    validatePanel(panel: PanelModel): SurveyError;
    processHtml(html: string, reason?: string): string;
    processText(text: string, returnDisplayValue: boolean): string;
    processTextEx(text: string, returnDisplayValue: boolean, doEncoding: boolean): any;
    private textPreProcessorValue;
    private readonly textPreProcessor: any;
    private processTextCore;
    getSurveyMarkdownHtml(element: Question | PanelModel | PageModel | SurveyModel, text: string, name: string): string;
    getCorrectedAnswerCount(): number;
    /**
     * Returns the number of correct answers in a quiz.
     *
     * For more information about quizzes, refer to the following tutorial: [Create a Quiz](https://surveyjs.io/form-library/documentation/design-survey/create-a-quiz).
     * @returns The number of correct answers in a quiz.
     * @see getQuizQuestionCount
     * @see getInCorrectAnswerCount
     */
    getCorrectAnswerCount(): number;
    /**
     * Returns the number of quiz questions. A question counts if it is visible, has an input field, and specifies [`correctAnswer`](https://surveyjs.io/form-library/documentation/api-reference/checkbox-question-model#correctAnswer).
     *
     * This number may be different from `getQuizQuestions().length` because certain question types (for instance, matrix-like types) include more than one question.
     *
     * For more information about quizzes, refer to the following tutorial: [Create a Quiz](https://surveyjs.io/form-library/documentation/design-survey/create-a-quiz).
     * @returns The number of quiz questions.
     * @see getQuizQuestions
     */
    getQuizQuestionCount(): number;
    getInCorrectedAnswerCount(): number;
    /**
     * Returns the number of incorrect answers in a quiz.
     *
     * For more information about quizzes, refer to the following tutorial: [Create a Quiz](https://surveyjs.io/form-library/documentation/design-survey/create-a-quiz).
     * @returns The number of incorrect answers in a quiz.
     * @see getCorrectAnswerCount
     */
    getInCorrectAnswerCount(): number;
    onCorrectQuestionAnswer(question: IQuestion, options: any): void;
    private getCorrectedAnswerCountCore;
    getCorrectedAnswers(): number;
    getInCorrectedAnswers(): number;
    /*
    * Displays the timer panel and specifies its position. Applies only to [quiz surveys](https://surveyjs.io/form-library/documentation/design-survey-create-a-quiz).
    *
    * Possible values:
    *
    * - `"top"` - Displays the timer panel at the top of the survey.
    * - `"bottom"` - Displays the timer panel at the bottom of the survey.
    * - `"none"` (default) - Hides the timer panel.
    *
    * If the timer panel is displayed, the timer starts automatically when the survey begins. To specify time limits, use the [`maxTimeToFinish`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#maxTimeToFinish) and [`maxTimeToFinishPage`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#maxTimeToFinishPage) properties.
    *
    * The timer panel displays information about time spent on an individual page and the entire survey. If you want to display only the page timer or the survey timer, set the [`showTimerPanelMode`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#showTimerPanelMode) property to `"page"` or `"survey"`.
    * @see startTimer
    * @see stopTimer
    * @see timeSpent
    * @see onTimer
    */
    showTimerPanel: string;
    readonly isTimerPanelShowingOnTop: boolean;
    readonly isTimerPanelShowingOnBottom: boolean;
    /*
    * Specifies whether the timer panel displays timers for the current page, the entire survey, or both. Applies only if the timer panel is [visible](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#showTimerPanel).
    *
    * Possible values:
    *
    * - `"survey"` - Displays only the survey timer.
    * - `"page"` - Displays only the page timer.
    * - `"all"` (default) - Displays both the survey and page timers.
    * @see timeSpent
    * @see onTimer
    * @see startTimer
    * @see stopTimer
    */
    showTimerPanelMode: string;
    gridLayoutEnabled: boolean;
    /*
    * Specifies how to calculate the survey width.
    *
    * Possible values:
    *
    * - `"static"` - A survey has a [fixed width](#width).
    * - `"responsive"` - A survey occupies all available horizontal space and stretches or shrinks horizontally to fit in the screen size.
    * - `"auto"` (default) - Survey width depends on a question type and corresponds to the `"static"` or `"responsive"` mode.
    */
    widthMode: string;
    private calculatedWidthModeUpdater;
    setCalculatedWidthModeUpdater(): void;
    calculatedWidthMode: string;
    calculateWidthMode(): string;
    /*
    * A survey width in CSS values.
    *
    * Default value: `undefined` (the survey inherits the width from its container)
    */
    width: string;
    readonly renderedWidth: string;
    readonly timerInfo: {
        spent: number;
        limit?: number;
    };
    readonly timerClock: {
        majorText: string;
        minorText?: string;
    };
    readonly timerInfoText: string;
    private getTimerInfo;
    private getTimerInfoText;
    private getTimerInfoPageText;
    private getTimerInfoSurveyText;
    private getDisplayClockTime;
    private getDisplayTime;
    readonly timerModel: SurveyTimerModel;
    /**
     * Starts a timer that calculates how many seconds a respondent has spent on the survey. Applies only to [quiz surveys](https://surveyjs.io/form-library/documentation/design-survey-create-a-quiz).
     * @see stopTimer
     * @see maxTimeToFinish
     * @see maxTimeToFinishPage
     * @see timeSpent
     * @see onTimer
     */
    startTimer(): void;
    startTimerFromUI(): void;
    /**
     * Stops the timer. Applies only to [quiz surveys](https://surveyjs.io/form-library/documentation/design-survey-create-a-quiz).
     * @see startTimer
     * @see maxTimeToFinish
     * @see maxTimeToFinishPage
     * @see timeSpent
     * @see onTimer
     */
    stopTimer(): void;
    /*
    * A time period that a respondent has spent on the survey so far; measured in seconds. Applies only to [quiz surveys](https://surveyjs.io/form-library/documentation/design-survey-create-a-quiz).
    *
    * Assign a number to this property if you need to start the quiz timer from a specific time (for instance, if you want to continue an interrupted quiz).
    *
    * You can also find out how many seconds a respondent has spent on an individual survey page. To do this, use the [`timeSpent`](https://surveyjs.io/form-library/documentation/api-reference/page-model#timeSpent) property of a [`PageModel`](https://surveyjs.io/form-library/documentation/api-reference/page-model) object.
    * @see maxTimeToFinish
    * @see maxTimeToFinishPage
    * @see startTimer
    */
    timeSpent: number;
    /*
    * A time period that a respondent has to complete the survey; measured in seconds. Applies only to [quiz surveys](https://surveyjs.io/form-library/documentation/design-survey-create-a-quiz).
    *
    * A negative value or 0 sets an unlimited time period.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/make-quiz-javascript/ (linkStyle))
    * @see maxTimeToFinishPage
    * @see startTimer
    * @see timeSpent
    */
    maxTimeToFinish: number;
    /*
    * A time period that a respondent has to complete each survey page; measured in seconds. Applies only to [quiz surveys](https://surveyjs.io/form-library/documentation/design-survey-create-a-quiz).
    *
    * A negative value or 0 sets an unlimited time period.
    *
    * You can also use `PageModel`'s [`maxTimeToFinish`](https://surveyjs.io/form-library/documentation/api-reference/page-model#maxTimeToFinish) property to specify a time period for an individual survey page.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/make-quiz-javascript/ (linkStyle))
    * @see maxTimeToFinish
    * @see startTimer
    * @see timeSpent
    */
    maxTimeToFinishPage: number;
    private doTimer;
    readonly inSurvey: boolean;
    getSurveyData(): ISurveyData;
    getSurvey(): ISurvey;
    getTextProcessor(): ITextProcessor;
    getObjects(pages: string[], questions: string[]): any[];
    setTriggerValue(name: string, value: any, isVariable: boolean): void;
    copyTriggerValue(name: string, fromName: string, copyDisplayValue: boolean): void;
    triggerExecuted(trigger: Trigger): void;
    private focusingQuestionInfo;
    private isMovingQuestion;
    startMovingQuestion(): void;
    stopMovingQuestion(): void;
    readonly isQuestionDragging: boolean;
    needRenderIcons: boolean;
    private skippedPages;
    /**
     * Focuses a question with a specified name. Switches the current page if needed.
     * @param name A question name.
     * @returns `false` if the survey does not contain a question with a specified name or this question is hidden; otherwise, `true`.
     * @see focusFirstQuestion
     * @see focusFirstQuestionAutomatic
     */
    focusQuestion(name: string): boolean;
    focusQuestionByInstance(question: Question, onError?: boolean): boolean;
    private focusQuestionInfo;
    questionEditFinishCallback(question: Question, event: any): void;
    private elementWrapperComponentNameCore;
    private elementWrapperDataCore;
    getElementWrapperComponentName(element: any, reason?: string): string;
    getQuestionContentWrapperComponentName(element: any): string;
    getRowWrapperComponentName(row: QuestionRowModel): string;
    getItemValueWrapperComponentName(item: ItemValue, question: QuestionSelectBase): string;
    getElementWrapperComponentData(element: any, reason?: string): any;
    getRowWrapperComponentData(row: QuestionRowModel): any;
    getItemValueWrapperComponentData(item: ItemValue, question: QuestionSelectBase): any;
    getMatrixCellTemplateData(cell: any): any;
    searchText(text: string): Array<IFindElement>;
    skeletonComponentName: string;
    getSkeletonComponentName(element: ISurveyElement): string;
    private layoutElements;
    /**
     * Adds an element to the survey layout.
     *
     * This method accepts an object with the following layout element properties:
     *
     * - `id`: `string` | `"timerpanel"` | `"progress-buttons"` | `"progress-questions"` | `"progress-pages"` | `"progress-correctquestions"` | `"progress-requiredquestions"` | `"toc-navigation"` | `"buttons-navigation"`\
     * A layout element identifier. You can use possible values to access and relocate or customize predefined layout elements.
     *
     * - `container`: `"header"` | `"footer"` | `"left"` | `"right"` | `"contentTop"` | `"contentBottom"`\
     * A layout container that holds the element. If you want to display the element within multiple containers, set this property to an array of possible values.
     *
     * - `component`: `string`\
     * The name of the component that renders the layout element.
     *
     * - `data`: `any`\
     * Data passed as props to `component`.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/progress-bar-with-percentage/ (linkStyle))
     * @param layoutElement A layout element configuration.
     * @returns The configuration of the previous layout element with the same `id`.
     */
    addLayoutElement(layoutElement: ISurveyLayoutElement): ISurveyLayoutElement;
    findLayoutElement(layoutElementId: string): ISurveyLayoutElement;
    removeLayoutElement(layoutElementId: string): ISurveyLayoutElement;
    getContainerContent(container: LayoutElementContainer): any[];
    processPopupVisiblityChanged(question: Question, popup: PopupModel<any>, visible: boolean): void;
    processOpenDropdownMenu(question: Question, options: IDropdownMenuOptions): void;
    /**
     * Applies a specified theme to the survey.
     *
     * [Themes & Styles](https://surveyjs.io/form-library/documentation/manage-default-themes-and-styles (linkStyle))
     * @param theme An [`ITheme`](https://surveyjs.io/form-library/documentation/api-reference/itheme) object with theme settings.
     */
    applyTheme(theme: ITheme): void;
    themeChanged(theme: ITheme): void;
    private taskManager;
    /**
     * Disposes of the survey model.
     *
     * Call this method to release resources if your application contains multiple survey models or if you re-create a survey model at runtime.
     */
    dispose(): void;
    disposeCallback: () => void;
    private onScrollCallback;
    _isElementShouldBeSticky(selector: string): boolean;
    onScroll(): void;
    addScrollEventListener(): void;
    removeScrollEventListener(): void;
    questionErrorComponent: string;
}
