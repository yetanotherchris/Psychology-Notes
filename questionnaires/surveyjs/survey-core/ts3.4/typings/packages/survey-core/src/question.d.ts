import { HashTable } from "./helpers";
import { EventBase } from "./base";
import { IElement, IQuestion, IPanel, IConditionRunner, ISurveyImpl, IPage, ITitleOwner, IProgressInfo, ISurvey, IPlainDataOptions, IDropdownMenuOptions } from "./base-interfaces";
import { SurveyElement } from "./survey-element";
import { SurveyValidator, IValidatorOwner } from "./validator";
import { TextPreProcessorValue } from "./textPreProcessor";
import { LocalizableString } from "./localizablestring";
import { ExpressionRunner } from "./conditions";
import { QuestionCustomWidget } from "./questionCustomWidgets";
import { SurveyError } from "./survey-error";
import { PopupModel } from "./popup";
import { ITheme } from "./themes";
import { TextAreaModel } from "./utils/text-area";
export interface IConditionObject {
    name: string;
    text: string;
    question: Question;
    context?: Question;
}
export interface IQuestionPlainData {
    name: string | number;
    title: string;
    value: any;
    displayValue: any;
    isNode: boolean;
    isComment?: boolean;
    questionType?: string;
    data?: Array<IQuestionPlainData>;
    getString: (val: any) => string;
    [key: string]: any;
}
/**
 * A base class for all questions.
 */
export declare class Question extends SurveyElement<Question> implements IQuestion, IConditionRunner, IValidatorOwner, ITitleOwner {
    [index: string]: any;
    private static TextPreprocessorValuesMap;
    private static questionCounter;
    private static getQuestionId;
    private isCustomWidgetRequested;
    private customWidgetValue;
    customWidgetData: {
        isNeedRender: boolean;
    };
    focusCallback: () => void;
    surveyLoadCallback: () => void;
    displayValueCallback: (text: string) => string;
    hasCssErrorCallback: () => boolean;
    private defaultValueRunner;
    private isChangingViaDefaultValue;
    private isValueChangedDirectly;
    valueChangedCallback: () => void;
    commentChangedCallback: () => void;
    localeChangedCallback: () => void;
    validateValueCallback: () => SurveyError;
    questionTitleTemplateCallback: () => string;
    afterRenderQuestionCallback: (question: Question, element: any) => any;
    valueFromDataCallback: (val: any) => any;
    valueToDataCallback: (val: any) => any;
    onUpdateCssClassesCallback: (css: any) => void;
    setValueChangedDirectlyCallback: (val: boolean) => void;
    onGetSurvey: () => ISurvey;
    private locProcessedTitle;
    private isReadyValue;
    private commentElements;
    private dependedQuestions;
    private commentTextAreaModelValue;
    /**
     * An event that is raised when the question's ready state has changed (expressions are evaluated, choices are loaded from a web resource specified by the `choicesByUrl` property, etc.).
     *
     * Parameters:
     *
     * - `sender`: `SurveyModel`\
     * A survey instance that contains the question whose ready state has changed.
     * - `options.isReady`: `boolean`\
     * Indicates whether the question is ready.
     * - `options.oldIsReady`: `boolean`\
     * Indicates the previous ready state.
     */
    onReadyChanged: EventBase<Question>;
    isReadOnlyRenderDiv(): boolean;
    protected allowMobileInDesignMode(): boolean;
    updateIsMobileFromSurvey(): void;
    setIsMobile(val: boolean): void;
    protected getIsMobile(): boolean;
    isMobile: boolean;
    themeChanged(theme: ITheme): void;
    private _isMobile;
    forceIsInputReadOnly: boolean;
    ariaExpanded: "true" | "false";
    constructor(name: string);
    protected getDefaultTitle(): string;
    protected createLocTitleProperty(): LocalizableString;
    readonly commentTextAreaModel: TextAreaModel;
    private getCommentTextAreaOptions;
    getSurvey(live?: boolean): ISurvey;
    getValueName(): string;
    /*
    * Specifies an object property that should store the question value.
    *
    * Refer to the [Merge Question Values](https://surveyjs.io/form-library/documentation/design-survey-merge-question-values) help topic for more information.
    */
    valueName: string;
    protected onValueNameChanged(oldValue: string): void;
    protected onNameChanged(oldValue: string): void;
    readonly isReady: boolean;
    protected onAsyncRunningChanged(): void;
    protected updateIsReady(): void;
    protected getIsQuestionReady(): boolean;
    private getAreNestedQuestionsReady;
    protected getIsReadyNestedQuestions(): Array<Question>;
    private setIsReady;
    protected getIsReadyDependsOn(): Array<Question>;
    private getIsReadyDependends;
    private getIsReadyDependendCore;
    choicesLoaded(): void;
    /*
    * Returns a page to which the question belongs and allows you to move this question to a different page.
    */
    page: IPage;
    getPanel(): IPanel;
    delete(doDispose?: boolean): void;
    protected removeFromParent(): void;
    protected addDependedQuestion(question: Question): void;
    protected removeDependedQuestion(question: Question): void;
    protected updateDependedQuestions(): void;
    protected updateDependedQuestion(): void;
    protected resetDependedQuestion(): void;
    readonly isFlowLayout: boolean;
    getLayoutType(): string;
    isLayoutTypeSupported(layoutType: string): boolean;
    /*
    * Gets or sets question visibility.
    *
    * If you want to display or hide a question based on a condition, specify the [`visibleIf`](https://surveyjs.io/form-library/documentation/question#visibleIf) property. Refer to the following help topic for information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
    * @see isVisible
    * @see visibleIf
    */
    visible: boolean;
    protected onVisibleChanged(): void;
    protected notifyStateChanged(prevState: string): void;
    updateElementVisibility(): void;
    private updateIsVisibleProp;
    /*
    * Specifies whether to use display names for question values in placeholders.
    *
    * Default value: `true`
    *
    * This property applies to questions whose values are defined as objects with the `value` and `text` properties (for example, [choice items](https://surveyjs.io/form-library/documentation/questionradiogroupmodel#choices) in Radiogroup, Checkbox, and Dropdown questions).
    *
    * You can use question values as placeholders in the following places:
    *
    * - Survey element titles and descriptions
    * - The [`html`](https://surveyjs.io/form-library/documentation/questionhtmlmodel#html) property of the [HTML](https://surveyjs.io/form-library/documentation/questionhtmlmodel) question
    *
    * To use a question value as a placeholder, specify the question `name` in curly brackets: `{questionName}`. Refer to the following help topic for more information: [Dynamic Texts - Question Values](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#question-values).
    */
    useDisplayValuesInDynamicTexts: boolean;
    protected getUseDisplayValuesInDynamicTexts(): boolean;
    /*
    * A Boolean expression. If it evaluates to `false`, this question becomes hidden.
    *
    * A survey parses and runs all expressions on startup. If any values used in the expression change, the survey re-evaluates it.
    *
    * Refer to the following help topic for more information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
    * @see visible
    * @see isVisible
    */
    visibleIf: string;
    /*
    * Returns `true` if the question is visible or the survey is currently in design mode.
    *
    * If you want to display or hide a question based on a condition, specify the [`visibleIf`](https://surveyjs.io/form-library/documentation/question#visibleIf) property. Refer to the following help topic for information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
    * @see visibleIf
    * @see visible
    * @see isParentVisible
    */
    readonly isVisible: boolean;
    readonly isVisibleInSurvey: boolean;
    protected isVisibleCore(): boolean;
    /*
    * Returns the visible index of the question in the survey. It can be from 0 to all visible questions count - 1
    * The visibleIndex is -1 if the title is 'hidden' or hideNumber is true
    * @see titleLocation
    * @see hideNumber
    */
    readonly visibleIndex: number;
    onHidingContent(): void;
    /*
    * Hides the question number from the title and excludes the question from numbering.
    *
    * If you want to disable question numbering in the entire survey, set `SurveyModel`'s `showQuestionNumbers` property to `false`.
    * @see SurveyModel.showQuestionNumbers
    */
    hideNumber: boolean;
    /*
    * Returns `true` if the question can display its title to the left of the input field.
    * @see titleLocation
    * @see getTitleLocation
    * @see hasTitle
    */
    readonly isAllowTitleLeft: boolean;
    /**
     * Returns the question type.
     * Possible values:
     * - [*"boolean"*](https://surveyjs.io/Documentation/Library?id=questionbooleanmodel)
     * - [*"checkbox"*](https://surveyjs.io/Documentation/Library?id=questioncheckboxmodel)
     * - [*"comment"*](https://surveyjs.io/Documentation/Library?id=questioncommentmodel)
     * - [*"dropdown"*](https://surveyjs.io/Documentation/Library?id=questiondropdownmodel)
     * - [*"tagbox"*](https://surveyjs.io/form-library/documentation/questiontagboxmodel)
     * - [*"expression"*](https://surveyjs.io/Documentation/Library?id=questionexpressionmodel)
     * - [*"file"*](https://surveyjs.io/Documentation/Library?id=questionfilemodel)
     * - [*"html"*](https://surveyjs.io/Documentation/Library?id=questionhtmlmodel)
     * - [*"image"*](https://surveyjs.io/Documentation/Library?id=questionimagemodel)
     * - [*"imagepicker"*](https://surveyjs.io/Documentation/Library?id=questionimagepickermodel)
     * - [*"matrix"*](https://surveyjs.io/Documentation/Library?id=questionmatrixmodel)
     * - [*"matrixdropdown"*](https://surveyjs.io/Documentation/Library?id=questionmatrixdropdownmodel)
     * - [*"matrixdynamic"*](https://surveyjs.io/Documentation/Library?id=questionmatrixdynamicmodel)
     * - [*"multipletext"*](https://surveyjs.io/Documentation/Library?id=questionmultipletextmodel)
     * - [*"panel"*](https://surveyjs.io/Documentation/Library?id=panelmodel)
     * - [*"paneldynamic"*](https://surveyjs.io/Documentation/Library?id=questionpaneldynamicmodel)
     * - [*"radiogroup"*](https://surveyjs.io/Documentation/Library?id=questionradiogroupmodel)
     * - [*"rating"*](https://surveyjs.io/Documentation/Library?id=questionratingmodel)
     * - [*"ranking"*](https://surveyjs.io/Documentation/Library?id=questionrankingmodel)
     * - [*"signaturepad"*](https://surveyjs.io/Documentation/Library?id=questionsignaturepadmodel)
     * - [*"text"*](https://surveyjs.io/Documentation/Library?id=questiontextmodel)
     */
    getType(): string;
    readonly isQuestion: boolean;
    moveTo(container: IPanel, insertBefore?: any): boolean;
    getProgressInfo(): IProgressInfo;
    private setValueExpressionRunner;
    private ensureSetValueExpressionRunner;
    private runSetValueExpression;
    private checkExpressionIf;
    private triggersInfo;
    private addTriggerInfo;
    private runTriggerInfo;
    private canExecuteTriggerByKeys;
    runTriggers(name: string, value: any, keys?: any): void;
    private runConditions;
    setSurveyImpl(value: ISurveyImpl, isLight?: boolean): void;
    /*
    * Returns a survey element (panel or page) that contains the question and allows you to move this question to a different survey element.
    */
    parent: IPanel;
    protected onParentChanged(): void;
    /*
    * Returns `false` if the `titleLocation` property is set to `"hidden"` or if the question cannot have a title (for example, an [HTML](https://surveyjs.io/form-library/documentation/questionhtmlmodel) question).
    *
    * If the `title` property is `undefined` or set to an empty string, the `hasTitle` property returns `true`, because the question uses its `name` as a title in this case.
    * @see title
    * @see titleLocation
    */
    readonly hasTitle: boolean;
    /*
    * Sets question title location relative to the input field. Overrides the `questionTitleLocation` property specified for the question's container (survey, page, or panel).
    *
    * Possible values:
    *
    * - `"default"` (default) - Inherits the setting from the `questionTitleLocation` property specified for the question's container.
    * - `"top"` - Displays the title above the input field.
    * - `"bottom"` - Displays the title below the input field.
    * - `"left"` - Displays the title to the left of the input field.
    * - `"hidden"` - Hides the question title.
    *
    * > Certain question types (Matrix, Multiple Text) do not support the `"left"` value. For them, the `"top"` value is used.
    * @see SurveyModel.questionTitleLocation
    * @see getTitleLocation
    * @see isAllowTitleLeft
    */
    titleLocation: string;
    getTitleOwner(): ITitleOwner;
    protected getIsTitleRenderedAsString(): boolean;
    protected notifySurveyOnChildrenVisibilityChanged(): boolean;
    private notifySurveyVisibilityChanged;
    protected clearValueOnHidding(isClearOnHidden: boolean): void;
    readonly titleWidth: string;
    getPercentQuestionTitleWidth(): number;
    /**
     * Returns title location calculated based on the question's `titleLocation` property and the `questionTitleLocation` property of the question's containers (survey, page, or panel).
     * @see titleLocation
     * @see SurveyModel.questionTitleLocation
     */
    getTitleLocation(): string;
    protected getTitleLocationCore(): string;
    readonly hasTitleOnLeft: boolean;
    readonly hasTitleOnTop: boolean;
    readonly hasTitleOnBottom: boolean;
    readonly hasTitleOnLeftTop: boolean;
    /*
    * Specifies the error message position. Overrides the `questionErrorLocation` property specified for the question's container ([survey](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#questionErrorLocation), [page](https://surveyjs.io/form-library/documentation/api-reference/page-model#questionErrorLocation), or [panel](https://surveyjs.io/form-library/documentation/api-reference/panel-model#questionErrorLocation)).
    *
    * Possible values:
    *
    * - `"default"` (default) - Inherits the setting from the `questionErrorLocation` property specified for the question's container.
    * - `"top"` - Displays error messages above questions.
    * - `"bottom"` - Displays error messages below questions.
    */
    errorLocation: string;
    getErrorLocation(): string;
    getChildErrorLocation(child: Question): string;
    /*
    * Returns `false` if the question has no input fields ([HTML](https://surveyjs.io/form-library/documentation/questionhtmlmodel), [Image](https://surveyjs.io/form-library/documentation/questionimagemodel), and similar question types).
    * @see hasSingleInput
    */
    readonly hasInput: boolean;
    /*
    * Returns `false` if the question has no input fields ([HTML](https://surveyjs.io/form-library/documentation/questionhtmlmodel), [Image](https://surveyjs.io/form-library/documentation/questionimagemodel)) or has multiple input fields ([Matrix](https://surveyjs.io/form-library/documentation/questionmatrixmodel), [Multiple Text](https://surveyjs.io/form-library/documentation/questionmultipletextmodel)).
    * @see hasInput
    */
    readonly hasSingleInput: boolean;
    readonly inputId: string;
    protected getDefaultTitleValue(): string;
    protected getDefaultTitleTagName(): string;
    /*
    * Specifies where to display a question description.
    *
    * Possible values:
    *
    * - `"default"` (default) - Inherits the setting from the Survey's [`questionDescriptionLocation`](https://surveyjs.io/form-library/documentation/surveymodel#questionDescriptionLocation) property.
    * - `"underTitle"` - Displays the description under the question title.
    * - `"underInput"` - Displays the description under the interactive area.
    * @see description
    * @see hasDescription
    */
    descriptionLocation: string;
    readonly hasDescriptionUnderTitle: boolean;
    readonly hasDescriptionUnderInput: boolean;
    private getDescriptionLocation;
    protected needClickTitleFunction(): boolean;
    protected processTitleClick(): boolean;
    /*
    * Specifies a custom error message for a required form field.
    * @see isRequired
    */
    requiredErrorText: string;
    readonly locRequiredErrorText: LocalizableString;
    /*
    * Specifies a caption displayed above the comment area. Applies when the `showCommentArea` property is `true`.
    * @see showCommentArea
    * @see comment
    */
    commentText: string;
    readonly locCommentText: LocalizableString;
    /**
     * A placeholder for the comment area. Applies when the `showCommentArea` property is `true`.
     * @see showCommentArea
     * @see comment
     * @see commentText
     */
    commentPlaceholder: string;
    commentPlaceHolder: string;
    readonly renderedCommentPlaceholder: string;
    private resetRenderedCommentPlaceholder;
    getAllErrors(): Array<SurveyError>;
    getErrorByType(errorType: string): SurveyError;
    readonly customWidget: QuestionCustomWidget;
    updateCustomWidget(): void;
    localeChanged(): void;
    readonly isCompositeQuestion: boolean;
    readonly isContainer: boolean;
    protected updateCommentElements(): void;
    onCommentInput(event: any): void;
    onCommentChange(event: any): void;
    afterRenderQuestionElement(el: HTMLElement): void;
    afterRender(el: HTMLElement): void;
    afterRenderCore(element: HTMLElement): void;
    protected getCommentElementsId(): Array<string>;
    beforeDestroyQuestionElement(el: HTMLElement): void;
    readonly processedTitle: string;
    readonly fullTitle: string;
    protected readonly titlePattern: string;
    readonly isRequireTextOnStart: boolean;
    readonly isRequireTextBeforeTitle: boolean;
    readonly isRequireTextAfterTitle: boolean;
    /*
    * Disable this property if you want to render the current question on the same line or row with the previous question or panel.
    */
    startWithNewLine: boolean;
    protected calcCssClasses(css: any): any;
    protected onCalcCssClasses(classes: any): void;
    readonly cssRoot: string;
    protected setCssRoot(val: string): void;
    protected getCssRoot(cssClasses: {
        [index: string]: string;
    }): string;
    readonly cssHeader: string;
    protected setCssHeader(val: string): void;
    protected getCssHeader(cssClasses: any): string;
    protected supportContainerQueries(): boolean;
    readonly cssContent: string;
    protected setCssContent(val: string): void;
    protected getCssContent(cssClasses: any): string;
    readonly cssTitle: string;
    protected setCssTitle(val: string): void;
    protected getCssTitle(cssClasses: any): string;
    readonly cssDescription: string;
    protected setCssDescription(val: string): void;
    protected getCssDescription(cssClasses: any): string;
    showErrorOnCore(location: string): boolean;
    readonly showErrorOnTop: boolean;
    readonly showErrorOnBottom: boolean;
    private readonly showErrorsOutsideQuestion: any;
    readonly showErrorsAboveQuestion: boolean;
    readonly showErrorsBelowQuestion: boolean;
    readonly cssError: string;
    protected setCssError(val: string): void;
    protected getCssError(cssClasses: any): string;
    protected hasCssError(): boolean;
    getRootCss(): string;
    getQuestionRootCss(): string;
    private isRequireUpdateElements;
    updateElementCss(reNew?: boolean): void;
    protected onFirstRenderingCore(): void;
    protected updateQuestionCss(reNew?: boolean): void;
    private ensureElementCss;
    protected updateElementCssCore(cssClasses: any): void;
    protected updateCssClasses(res: any, css: any): void;
    protected getCssType(): string;
    readonly renderCssRoot: string;
    protected calcPaddingLeft(): string;
    protected calcPaddingRight(): string;
    private getIndentSize;
    /**
     * Moves focus to the input field of this question.
     * @param onError Pass `true` if you want to focus an input field with the first validation error. Default value: `false` (focuses the first input field). Applies to question types with multiple input fields.
     */
    focus(onError?: boolean, scrollIfVisible?: boolean): void;
    focusInputElement(onError: boolean): void;
    private readonly isValidateVisitedEmptyFields: any;
    private isFocusEmpty;
    protected supportEmptyValidation(): boolean;
    onBlur(event: any): void;
    onFocus(event: any): void;
    protected onBlurCore(event: any): void;
    protected onFocusCore(event: any): void;
    expandAllParents(): void;
    private expandAllParentsCore;
    focusIn(): void;
    protected fireCallback(callback: () => void): void;
    getOthersMaxLength(): any;
    protected onCreating(): void;
    getFirstQuestionToFocus(withError: boolean): Question;
    protected getFirstInputElementId(): string;
    protected getFirstErrorInputElementId(): string;
    protected getProcessedTextValue(textValue: TextPreProcessorValue): void;
    supportComment(): boolean;
    supportOther(): boolean;
    /*
    * Makes the question required. If a respondent skips a required question, the survey displays a validation error.
    * @see requiredIf
    * @see [Data Validation](https://surveyjs.io/form-library/documentation/data-validation)
    */
    isRequired: boolean;
    /*
    * A Boolean expression. If it evaluates to `true`, this question becomes required.
    *
    * A survey parses and runs all expressions on startup. If any values used in the expression change, the survey re-evaluates it.
    *
    * Refer to the following help topic for more information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
    * @see isRequired
    */
    requiredIf: string;
    /*
    * Specifies whether to display a comment area. Incompatible with the `showOtherItem` property.
    * @see comment
    * @see commentText
    * @see showOtherItem
    */
    showCommentArea: boolean;
    hasComment: boolean;
    /*
    * A value to assign to the `id` attribute of the rendered HTML element. A default `id` is generated automatically.
    */
    id: string;
    readonly ariaTitleId: string;
    readonly ariaDescriptionId: string;
    readonly commentId: string;
    /*
    * Specifies whether to display the "Other" choice item. Incompatible with the `showCommentArea` property.
    *
    * @see otherText
    * @see otherItem
    * @see otherErrorText
    * @see showCommentArea
    * @see [settings.specialChoicesOrder](https://surveyjs.io/form-library/documentation/api-reference/settings#specialChoicesOrder)
    */
    showOtherItem: boolean;
    hasOther: boolean;
    protected hasOtherChanged(): void;
    readonly requireUpdateCommentValue: boolean;
    readOnlyCallback: () => boolean;
    readonly isReadOnly: boolean;
    readonly isInputReadOnly: boolean;
    readonly renderedInputReadOnly: string;
    readonly renderedInputDisabled: string;
    readonly isReadOnlyAttr: boolean;
    readonly isDisabledAttr: boolean;
    protected onReadOnlyChanged(): void;
    /*
    * A Boolean expression. If it evaluates to `false`, this question becomes read-only.
    *
    * A survey parses and runs all expressions on startup. If any values used in the expression change, the survey re-evaluates it.
    *
    * Refer to the following help topic for more information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
    *
    * [View Demo](https://surveyjs.io/form-library/examples/how-to-conditionally-make-input-field-read-only/ (linkStyle))
    * @see readOnly
    * @see isReadOnly
    */
    enableIf: string;
    surveyChoiceItemVisibilityChange(): void;
    runCondition(values: HashTable<any>, properties: HashTable<any>): void;
    readonly isInDesignMode: boolean;
    readonly isInDesignModeV2: boolean;
    /*
    * A question number or letter (depends on the `questionStartIndex` property of the question container (panel, page, or survey)).
    *
    * When the question number, title, or the entire question is invisible, this property returns an empty string.
    * @see SurveyModel.questionStartIndex
    * @see hideNumber
    * @see titleLocation
    * @see visibleIf
    */
    readonly no: string;
    private calcNo;
    protected getStartIndex(): string;
    onSurveyLoad(): void;
    protected onSetData(): void;
    protected initDataFromSurvey(): void;
    protected initCommentFromSurvey(): void;
    protected runExpression(expression: string): any;
    readonly commentAreaRows: number;
    private readonly autoGrowComment: any;
    private readonly allowResizeComment: any;
    private questionValue: any;
    private questionComment: any;
    readonly isValueArray: boolean;
    /*
    * Gets or sets the question value.
    *
    * The following table illustrates how the value type depends on the question type:
    *
    * | Question type | Value type(s) |
    * | ------------- | ------------- |
    * | Checkboxes | <code>Array&lt;string &#124; number&gt;</code> |
    * | Dropdown | `string` \| `number` |
    * | Dynamic Matrix | `Array<object>` |
    * | Dynamic Panel | `Array<object>` |
    * | Expression | `string` \| `number` \| `boolean` |
    * | File Upload | `File` \| `Array<File>` |
    * | HTML | (no value) |
    * | Image | (no value) |
    * | Image Picker | <code>Array&lt;string &#124; number&gt;</code> |
    * | Long Text | `string` |
    * | Multi-Select Dropdown | `object` |
    * | Multi-Select Matrix | `object` |
    * | Multiple Textboxes | `Array<string>` |
    * | Panel | (no value) |
    * | Radio Button Group | `string` \| `number` |
    * | Ranking | <code>Array&lt;string &#124; number&gt;</code> |
    * | Rating Scale | `number` \| `string` |
    * | Signature | `string` (base64-encoded image) |
    * | Single-Line Input | `string` \| `number` \| `Date` |
    * | Single-Select Matrix | `object` |
    * | Yes/No (Boolean) | `boolean` \| `string` |
    */
    value: any;
    readonly hasFilteredValue: boolean;
    getFilteredValue(): any;
    getFilteredName(): any;
    readonly valueForSurvey: any;
    protected valueForSurveyCore(val: any): any;
    protected valueFromDataCore(val: any): any;
    /**
     * Sets the question's `value` and `comment` properties to `undefined`.
     * @see value
     * @see comment
     */
    clearValue(keepComment?: boolean): void;
    clearValueOnly(): void;
    unbindValue(): void;
    createValueCopy(): any;
    initDataUI(): void;
    protected getUnbindValue(value: any): any;
    protected isValueSurveyElement(val: any): boolean;
    private canClearValueAsInvisible;
    /*
    * Returns `true` if a parent element (page or panel) is visible.
    */
    readonly isParentVisible: boolean;
    clearValueIfInvisible(reason?: string): void;
    protected clearValueIfInvisibleCore(reason: string): void;
    /*
    * Specifies when to clear the question value if the question becomes invisible.
    *
    * Possible values:
    *
    * - `"default"` (default) - Inherits the setting from the Survey's [`clearInvisibleValues`](https://surveyjs.io/form-library/documentation/surveymodel#clearInvisibleValues) property.
    * - `"onHidden"` - Clears the value when the question becomes invisible. If a question is invisible on startup and has an initial value, this value will be cleared when the survey is complete.
    * - `"onHiddenContainer"` - Clears the value when the question or its container (page or panel) becomes invisible. If a question is invisible on startup and has an initial value, this value will be cleared when the survey is complete.
    * - `"onComplete"` - Clears the value when the survey is complete.
    * - `"none"` - Never clears the value of an invisible question.
    * @see SurveyModel.clearInvisibleValues
    * @see visible
    * @see SurveyModel.onComplete
    */
    clearIfInvisible: string;
    protected getClearIfInvisible(): string;
    readonly displayValue: any;
    /**
     * Returns a display text that corresponds to the question value. For example, if you call this method for a Dropdown question, it returns an item text instead of an item value.
     * @param keysAsText Applies when the question value is an object (in Matrix, Multiple Text, and similar questions). Pass `true` if not only values in the object should be display texts, but also keys. Default value: `false`.
     * @param value Specify this parameter to get a display text for a specific value, not for the current question value. If the question value is an object, this parameter should be a similar object.
     */
    getDisplayValue(keysAsText: boolean, value?: any): any;
    private calcDisplayValue;
    protected getDisplayValueCore(keyAsText: boolean, value: any): any;
    protected getDisplayValueEmpty(): string;
    /*
    * A default value for the question. Ignored for question types that cannot have a [value](https://surveyjs.io/form-library/documentation/question#value) (for example, HTML).
    *
    * The default value is used as a question value in the following cases:
    *
    * - While the survey is being loaded from JSON.
    * - The question is just added to the survey and does not yet have an answer.
    * - The respondent left the answer empty.
    * @see defaultValueExpression
    */
    defaultValue: any;
    /*
    * An expression used to calculate the [defaultValue](https://surveyjs.io/form-library/documentation/question#defaultValue).
    *
    * This expression applies until the question [value](https://surveyjs.io/form-library/documentation/question#value) is specified by an end user or programmatically.
    *
    * An expression can reference other questions as follows:
    *
    * - `{other_question_name}`
    * - `{panel.other_question_name}` (to access questions inside the same dynamic panel)
    * - `{row.other_question_name}` (to access questions inside the same dynamic matrix or multi-column dropdown)
    *
    * An expression can also include built-in and custom functions for advanced calculations. For example, if the `defaultValue` should be today's date, set the `defaultValueExpression` to `"today()"`, and the corresponding built-in function will be executed each time the survey is loaded. Refer to the following help topic for more information: [Built-In Functions](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#built-in-functions).
    *
    * [View Demo](https://surveyjs.io/form-library/examples/specify-default-question-value-dynamically (linkStyle))
    * @see defaultValue
    * @see setValueExpression
    */
    defaultValueExpression: any;
    /*
    * A Boolean [expression](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#expressions). If it evaluates to `true`, the question value is reset to [default](#defaultValue).
    *
    * A survey parses and runs all expressions on startup. If any values used in the expression change, the survey re-evaluates it.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/set-question-value-dynamically/ (linkStyle))
    * @see setValueIf
    */
    resetValueIf: string;
    /*
    * A Boolean [expression](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#expressions). If it evaluates to `true`, the question value is set to a value calculated using the [`setValueExpression`](#setValueExpression).
    *
    * A survey parses and runs all expressions on startup. If any values used in the expression change, the survey re-evaluates it.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/set-question-value-dynamically/ (linkStyle))
    * @see resetValueIf
    */
    setValueIf: string;
    /*
    * An [expression](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#expressions) used to calculate the question value.
    *
    * You can use `setValueExpression` as a standalone property or in conjunction with the [`setValueIf`](#setValueIf) expression, in which case the calculated question value applies only when `setValueIf` evaluates to `true`.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/set-question-value-dynamically/ (linkStyle))
    * @see defaultValueExpression
    * @see resetValueIf
    */
    setValueExpression: string;
    readonly resizeStyle: "none" | "both";
    /**
     * Returns the question value as an object in which the question name, title, value, and other parameters are stored as individual properties.
     *
     * If the question can have more than one value (Matrix, Multiple Text), the object enables the `isNode` flag and stores information about these values in the `data` property. Refer to the following help topic for more information: [Access Full Survey Results](https://surveyjs.io/form-library/documentation/handle-survey-results-access#access-full-survey-results).
     *
     * Pass an object with the `includeEmpty` property set to `false` if you want to skip empty answers.
     */
    getPlainData(options?: IPlainDataOptions): IQuestionPlainData;
    protected getPlainDataCalculatedValue(propName: string): any;
    /*
    * A correct answer to this question. Specify this property if you want to [create a quiz](https://surveyjs.io/form-library/documentation/design-survey-create-a-quiz).
    * @see SurveyModel.getCorrectAnswerCount
    * @see SurveyModel.getIncorrectAnswerCount
    */
    correctAnswer: any;
    protected convertDefaultValue(val: any): any;
    /*
    * The number of quiz questions. A question counts if it is visible, has an input field, and specifies `correctAnswer`.
    * @see [Create a Quiz](https://surveyjs.io/form-library/documentation/design-survey-create-a-quiz)
    * @see correctAnswer
    * @see SurveyModel.getQuizQuestions
    */
    readonly quizQuestionCount: number;
    readonly correctAnswerCount: number;
    protected getQuizQuestionCount(): number;
    protected getCorrectAnswerCount(): number;
    protected checkIfAnswerCorrect(): boolean;
    protected getAnswerCorrectIgnoreOrder(): boolean;
    /**
    * Returns `true` if a question answer matches the `correctAnswer` property value.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/create-a-scored-quiz (linkStyle))
    * @see correctAnswer
    * @see SurveyModel.getQuizQuestions
    */
    isAnswerCorrect(): boolean;
    updateValueWithDefaults(): void;
    readonly isValueDefault: boolean;
    protected readonly isClearValueOnHidden: boolean;
    getQuestionFromArray(name: string, index: number): IQuestion;
    getDefaultValue(): any;
    protected isDefaultValueEmpty(): boolean;
    protected getDefaultRunner(runner: ExpressionRunner, expression: string): ExpressionRunner;
    protected setDefaultValue(): void;
    private setDefaultValueCore;
    protected isValueExpression(val: any): boolean;
    protected setValueAndRunExpression(runner: ExpressionRunner, defaultValue: any, setFunc: (val: any) => void, values?: HashTable<any>, properties?: HashTable<any>): void;
    protected convertFuncValuetoQuestionValue(val: any): any;
    private runExpressionSetValueCore;
    private runExpressionSetValue;
    protected startSetValueOnExpression(): void;
    protected finishSetValueOnExpression(): void;
    private runDefaultValueExpression;
    /*
    * A comment to the selected question value. Enable the `showCommentArea` property to allow users to leave comments.
    * @see showCommentArea
    * @see commentText
    */
    comment: string;
    getCommentAreaCss(isOther?: boolean): string;
    protected getQuestionComment(): string;
    protected setQuestionComment(newValue: string): void;
    /**
     * Returns `true` if the question value is an empty string, array, or object or if it equals `undefined` or `null`.
     */
    isEmpty(): boolean;
    isAnswered: boolean;
    protected updateIsAnswered(): void;
    protected getIsAnswered(): boolean;
    /*
    * Question validators.
    *
    * [Data Validation](https://surveyjs.io/form-library/documentation/data-validation (linkStyle))
    */
    validators: Array<SurveyValidator>;
    getValidators(): Array<SurveyValidator>;
    getSupportedValidators(): Array<string>;
    addConditionObjectsByContext(objects: Array<IConditionObject>, context: any): void;
    /**
     * Returns an array of questions nested within the current question. Use this method to obtain questions within [Multiple Text](https://surveyjs.io/form-library/documentation/api-reference/multiple-text-entry-question-model), [Dynamic Panel](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model), and [Matrix](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-question-model)-like questions.
     * @param visibleOnly A Boolean value that specifies whether to include only visible nested questions.
     * @returns An array of nested questions.
     */
    getNestedQuestions(visibleOnly?: boolean): Array<Question>;
    collectNestedQuestions(questions: Array<Question>, visibleOnly?: boolean): void;
    protected collectNestedQuestionsCore(questions: Array<Question>, visibleOnly: boolean): void;
    getConditionJson(operator?: string, path?: string): any;
    hasErrors(fireCallback?: boolean, rec?: any): boolean;
    /**
     * Validates this question and returns `false` if the validation fails.
     * @param fireCallback *(Optional)* Pass `false` if you do not want to show validation errors in the UI.
     * @see [Data Validation](https://surveyjs.io/form-library/documentation/data-validation)
     */
    validate(fireCallback?: boolean, rec?: any): boolean;
    readonly currentErrorCount: number;
    /*
    * Returns a character or text string that indicates a required question.
    * @see SurveyModel.requiredText
    * @see isRequired
    */
    readonly requiredText: string;
    addError(error: SurveyError | string): void;
    private addCustomError;
    removeError(error: SurveyError): boolean;
    private checkForErrors;
    protected canCollectErrors(): boolean;
    private collectErrors;
    protected canRunValidators(isOnValueChanged: boolean): boolean;
    private fireSurveyValidation;
    protected onCheckForErrors(errors: Array<SurveyError>, isOnValueChanged: boolean, fireCallback: boolean): void;
    hasRequiredError(): boolean;
    private validatorRunner;
    private isRunningValidatorsValue;
    onCompletedAsyncValidators: (hasErrors: boolean) => void;
    readonly isRunningValidators: boolean;
    protected getIsRunningValidators(): boolean;
    protected runValidators(): Array<SurveyError>;
    private doOnAsyncCompleted;
    protected raiseOnCompletedAsyncValidators(): void;
    allowSpaceAsAnswer: boolean;
    private isValueChangedInSurvey;
    private isOldAnswered;
    private isSettingQuestionValue;
    protected allowNotifyValueChanged: boolean;
    protected setNewValue(newValue: any): void;
    private checkIsValueCorrect;
    protected isNewValueCorrect(val: any): boolean;
    protected isNewValueEqualsToValue(newValue: any): boolean;
    protected isTextValue(): boolean;
    protected getIsInputTextUpdate(): boolean;
    readonly requireStrictCompare: boolean;
    private getDataLocNotification;
    readonly isInputTextUpdate: boolean;
    protected setNewValueInData(newValue: any): void;
    protected getValueCore(): any;
    protected setValueCore(newValue: any): void;
    protected canSetValueToSurvey(): boolean;
    protected valueFromData(val: any): any;
    protected valueToData(val: any): any;
    protected convertToCorrectValue(val: any): any;
    protected onValueChanged(): void;
    protected isMouseDown: boolean;
    onMouseDown(): void;
    protected setNewComment(newValue: string): void;
    protected setCommentIntoData(newValue: string): void;
    protected getValidName(name: string): string;
    updateValueFromSurvey(newValue: any, clearData?: boolean): void;
    private updateValueFromSurveyCore;
    updateCommentFromSurvey(newValue: any): any;
    protected onChangeQuestionValue(newValue: any): void;
    protected setValueChangedDirectly(val: boolean): void;
    protected setQuestionValue(newValue: any, updateIsAnswered?: boolean): void;
    private readonly isParentChangingViaDefaultValue: any;
    onSurveyValueChanged(newValue: any): void;
    setVisibleIndex(val: number): number;
    removeElement(element: IElement): boolean;
    supportGoNextPageAutomatic(): boolean;
    supportGoNextPageError(): boolean;
    /**
     * Removes values that cannot be assigned to this question, for example, choices unlisted in the `choices` array.
     *
     * Call this method after you assign new question values in code to ensure that they are acceptable.
     *
     * > This method does not remove values that fail validation. Call the `validate()` method to validate newly assigned values.
     *
     * @see validate
     */
    clearIncorrectValues(): void;
    clearOnDeletingContainer(): void;
    /**
     * Empties the `errors` array.
     * @see errors
     */
    clearErrors(): void;
    clearUnusedValues(): void;
    onAnyValueChanged(name: string, questionName: string): void;
    checkBindings(valueName: string, value: any): void;
    protected updateBindingProp(propName: string, value: any): void;
    getComponentName(): string;
    isDefaultRendering(): boolean;
    renderAs: string;
    inMatrixMode: boolean;
    getErrorCustomText(text: string, error: SurveyError): string;
    getValidatorTitle(): string;
    validatedValue: any;
    getAllValues(): any;
    processPopupVisiblilityChanged(popupModel: PopupModel, visible: boolean): void;
    processOpenDropdownMenu(options: IDropdownMenuOptions): void;
    protected onTextKeyDownHandler(event: any): void;
    transformToMobileView(): void;
    transformToDesktopView(): void;
    needResponsiveWidth(): boolean;
    protected supportResponsiveness(): boolean;
    protected needResponsiveness(): boolean;
    protected checkForResponsiveness(el: HTMLElement): void;
    private resizeObserver;
    protected getObservedElementSelector(): string;
    protected onMobileChanged(): void;
    private onMobileChangedCallback;
    triggerResponsiveness(hard?: boolean): void;
    private triggerResponsivenessCallback;
    private initResponsiveness;
    protected getCompactRenderAs(): string;
    protected getDesktopRenderAs(): string;
    protected onBeforeSetCompactRenderer(): void;
    protected onBeforeSetDesktopRenderer(): void;
    protected processResponsiveness(requiredWidth: number, availableWidth: number): any;
    destroyResizeObserver(): void;
    dispose(): void;
    private resetDependedQuestions;
    readonly isNewA11yStructure: boolean;
    readonly ariaLabel: string;
    readonly ariaRole: string;
    readonly ariaRequired: "true" | "false";
    readonly ariaInvalid: "true" | "false";
    readonly ariaLabelledBy: string;
    readonly ariaDescribedBy: string;
    readonly ariaErrormessage: string;
    readonly a11y_input_ariaRole: string;
    readonly a11y_input_ariaRequired: "true" | "false";
    readonly a11y_input_ariaInvalid: "true" | "false";
    readonly a11y_input_ariaLabel: string;
    readonly a11y_input_ariaLabelledBy: string;
    readonly a11y_input_ariaDescribedBy: string;
    readonly a11y_input_ariaErrormessage: string;
}
