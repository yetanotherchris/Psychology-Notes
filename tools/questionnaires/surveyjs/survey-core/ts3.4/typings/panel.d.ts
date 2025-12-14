import { HashTable } from "./helpers";
import { Base } from "./base";
import { ISurveyImpl, IPage, IPanel, IConditionRunner, IElement, ISurveyElement, IQuestion, ISurveyErrorOwner, ITitleOwner, IProgressInfo, ISurvey, IFindElement } from "./base-interfaces";
import { DragTypeOverMeEnum, SurveyElement } from "./survey-element";
import { Question } from "./question";
import { LocalizableString } from "./localizablestring";
import { findScrollableParent } from "./utils/utils";
import { SurveyError } from "./survey-error";
import { IAction } from "./actions/action";
import { ActionContainer } from "./actions/container";
import { DragDropInfo } from "./drag-drop-helper-v1";
import { AnimationGroup } from "./utils/animation";
import { PanelLayoutColumnModel } from "./panel-layout-column";
export declare class QuestionRowModel extends Base {
    panel: PanelModelBase;
    private static rowCounter;
    private static getRowId;
    protected _scrollableParent: any;
    protected _updateVisibility: any;
    startLazyRendering(rowContainerDiv: HTMLElement, findScrollableContainer?: typeof findScrollableParent): void;
    ensureVisibility(): void;
    stopLazyRendering(): void;
    private idValue;
    constructor(panel: PanelModelBase);
    private isLazyRenderingValue;
    setIsLazyRendering(val: boolean): void;
    isLazyRendering(): boolean;
    readonly id: string;
    protected equalsCore(obj: Base): boolean;
    readonly elements: Array<IElement>;
    protected getIsAnimationAllowed(): boolean;
    private getVisibleElementsAnimationOptions;
    visibleElementsAnimation: AnimationGroup<IElement>;
    visibleElements: Array<IElement>;
    onVisibleChangedCallback: () => void;
    visible: boolean;
    isNeedRender: boolean;
    updateVisible(): void;
    addElement(q: IElement): void;
    readonly index: number;
    private setWidth;
    private getRenderedCalcWidth;
    private getElementWidth;
    private getRenderedWidthFromWidth;
    dragTypeOverMe: DragTypeOverMeEnum;
    dispose(): void;
    getRowCss(): string;
    private rootElement?;
    setRootElement(element?: HTMLElement): void;
    getRootElement(): HTMLElement;
}
/**
 * A base class for the [PanelModel](https://surveyjs.io/form-library/documentation/panelmodel) and [PageModel](https://surveyjs.io/form-library/documentation/pagemodel) classes.
 */
export declare class PanelModelBase extends SurveyElement<Question> implements IPanel, IConditionRunner, ISurveyErrorOwner, ITitleOwner {
    private static panelCounter;
    private static getPanelId;
    private elementsValue;
    private isQuestionsReady;
    private questionsValue;
    private _columns;
    private _columnsReady;
    layoutColumns: Array<PanelLayoutColumnModel>;
    addElementCallback: (element: IElement) => void;
    removeElementCallback: (element: IElement) => void;
    onGetQuestionTitleLocation: () => string;
    private dragDropPanelHelper;
    onAddRow(row: QuestionRowModel): void;
    private getRowsAnimationOptions;
    private rowsAnimation;
    visibleRows: Array<QuestionRowModel>;
    onRemoveRow(row: QuestionRowModel): void;
    onRowVisibleChanged(): void;
    constructor(name?: string);
    getType(): string;
    setSurveyImpl(value: ISurveyImpl, isLight?: boolean): void;
    endLoadingFromJson(): void;
    showTitle: boolean;
    readonly hasTitle: boolean;
    delete(doDispose?: boolean): void;
    private deletePanel;
    protected removeFromParent(): void;
    protected canShowTitle(): boolean;
    showDescription: boolean;
    readonly _showDescription: boolean;
    localeChanged(): void;
    locStrsChanged(): void;
    getMarkdownHtml(text: string, name: string): string;
    readonly locNavigationTitle: LocalizableString;
    readonly renderedNavigationTitle: string;
    /*
    * Returns a character or text string that indicates a required panel/page.
    * @see SurveyModel.requiredText
    * @see isRequired
    */
    readonly requiredText: string;
    protected readonly titlePattern: string;
    readonly isRequireTextOnStart: boolean;
    readonly isRequireTextBeforeTitle: boolean;
    readonly isRequireTextAfterTitle: boolean;
    /*
    * Specifies a custom error message for a required panel/page.
    * @see isRequired
    * @see requiredIf
    */
    requiredErrorText: string;
    readonly locRequiredErrorText: LocalizableString;
    /*
    * Specifies the sort order of questions in the panel/page.
    *
    * Possible values:
    *
    * - `"initial"` - Preserves the original order of questions.
    * - `"random"` - Displays questions in random order.
    * - `"default"` (default) - Inherits the setting from the Survey's `questionsOrder` property.
    * @see SurveyModel.questionsOrder
    * @see areQuestionsRandomized
    */
    questionsOrder: string;
    private canRandomize;
    protected isRandomizing: boolean;
    randomizeElements(isRandom: boolean): void;
    /*
    * Returns `true` if elements in this panel/page are arranged in random order.
    * @see questionsOrder
    */
    readonly areQuestionsRandomized: boolean;
    /*
    * Returns a survey element (panel or page) that contains this panel and allows you to move this question to a different survey element.
    *
    * This property is always `null` for the `PageModel` object.
    */
    parent: PanelModelBase;
    readonly depth: number;
    /*
    * A Boolean expression. If it evaluates to `false`, this panel/page becomes hidden.
    *
    * A survey parses and runs all expressions on startup. If any values used in the expression change, the survey re-evaluates it.
    *
    * Refer to the following help topic for more information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
    * @see visible
    * @see isVisible
    */
    visibleIf: string;
    protected calcCssClasses(css: any): any;
    /*
    * An auto-generated unique element identifier.
    */
    id: string;
    /*
    * Returns `true` if the survey element is a panel.
    * @see Base.getType
    */
    readonly isPanel: boolean;
    getPanel(): IPanel;
    getLayoutType(): string;
    isLayoutTypeSupported(layoutType: string): boolean;
    /*
    * An array of all questions within this panel/page. Includes questions within nested panels.
    * @see elements
    */
    readonly questions: Array<Question>;
    getQuestions(includeNested: boolean): Array<Question>;
    protected getValidName(name: string): string;
    /**
     * Returns a question with a specified `name`. This method does not find questions within nested panels.
     * @param name A question name.
     */
    getQuestionByName(name: string): Question;
    /**
     * Returns a survey element with a specified `name`. This method can find survey elements within nested elements.
     * @param name An element name.
     */
    getElementByName(name: string): IElement;
    getQuestionByValueName(valueName: string): Question;
    /**
     * Returns a JSON object with question values nested in the panel/page.
     * @see getDisplayValue
     */
    getValue(): any;
    collectValues(data: any, level: number): boolean;
    /**
     * Returns a JSON object with display texts that correspond to question values nested in the panel/page.
     * @param keysAsText Pass `true` if not only values in the object should be display texts, but also keys. Default value: `false`.
     * @see getValue
     */
    getDisplayValue(keysAsText: boolean): any;
    /**
     * Returns a JSON object with comments left to questions within this panel/page. Question names are used as keys.
     */
    getComments(): any;
    /**
     * Removes values that cannot be assigned to nested questions, for example, choices unlisted in the `choices` array.
     *
     * Call this method after you assign new question values in code to ensure that they are acceptable.
     *
     * > This method does not remove values for invisible questions and values that fail validation. Call the `validate()` method to validate newly assigned values.
     *
     * @see validate
     */
    clearIncorrectValues(): void;
    /**
     * Empties the `errors` array for this panel/page and all its child elements (panels and questions).
     * @see errors
     */
    clearErrors(): void;
    private markQuestionListDirty;
    /*
    * An array of all survey elements (questions or panels) within this panel/page. Does not include questions within nested panels.
    * @see questions
    */
    readonly elements: Array<IElement>;
    getElementsInDesign(includeHidden?: boolean): Array<IElement>;
    /**
     * Checks whether a given element belongs to this panel/page or nested panels.
     * @param element A survey element to check.
     */
    containsElement(element: IElement): boolean;
    /*
    * Makes the panel/page require an answer at least in one nested question. If a respondent leaves the panel/page without any answers, the survey displays a validation error.
    * @see requiredIf
    * @see [Data Validation](https://surveyjs.io/form-library/documentation/data-validation)
    */
    isRequired: boolean;
    /*
    * A Boolean expression. If it evaluates to `true`, this panel/page becomes required (at least one question in the panel/page should have an answer).
    *
    * A survey parses and runs all expressions on startup. If any values used in the expression change, the survey re-evaluates it.
    *
    * Refer to the following help topic for more information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
    * @see isRequired
    */
    requiredIf: string;
    searchText(text: string, founded: Array<IFindElement>): void;
    hasErrors(fireCallback?: boolean, focusOnFirstError?: boolean, rec?: any): boolean;
    /**
     * Validates questions within this panel or page and returns `false` if the validation fails.
     * @param fireCallback *(Optional)* Pass `false` if you do not want to show validation errors in the UI.
     * @param focusOnFirstError *(Optional)* Pass `true` if you want to focus the first question with a validation error.
     * @see [Data Validation](https://surveyjs.io/form-library/documentation/data-validation)
     */
    validate(fireCallback?: boolean, focusOnFirstError?: boolean, rec?: any): boolean;
    validateContainerOnly(): void;
    onQuestionValueChanged(el: IElement): void;
    private hasErrorsInPanels;
    getErrorCustomText(text: string, error: SurveyError): string;
    private hasRequiredError;
    protected hasErrorsCore(rec: any): void;
    protected getContainsErrors(): boolean;
    updateElementVisibility(): void;
    getFirstQuestionToFocus(withError?: boolean, ignoreCollapseState?: boolean): Question;
    /**
     * Focuses the first question in this panel/page.
     * @see focusFirstErrorQuestion
     */
    focusFirstQuestion(): void;
    /**
     * Focuses the first question with a validation error in this panel/page.
     * @see validate
     * @see focusFirstQuestion
     */
    focusFirstErrorQuestion(): void;
    addQuestionsToList(list: Array<IQuestion>, visibleOnly?: boolean, includingDesignTime?: boolean): void;
    addPanelsIntoList(list: Array<IPanel>, visibleOnly?: boolean, includingDesignTime?: boolean): void;
    private addElementsToList;
    private addElementsToListCore;
    private calcMaxRowColSpan;
    private updateColumnWidth;
    private onColumnPropertyValueChangedCallback;
    updateColumns(): void;
    updateRootStyle(): void;
    updateCustomWidgets(): void;
    /*
    * Sets a title location relative to the input field for questions that belong to this panel/page.
    *
    * Use this property to override the `questionTitleLocation` property specified for the survey. You can also set the `titleLocation` property for individual questions.
    *
    * Possible values:
    *
    * - `"default"` (default) - Inherits the setting from the `questionTitleLocation` property specified for the survey.
    * - `"top"` - Displays the title above the input field.
    * - `"bottom"` - Displays the title below the input field.
    * - `"left"` - Displays the title to the left of the input field.
    * - `"hidden"` - Hides the question title.
    *
    * > Certain question types (Matrix, Multiple Text) do not support the `"left"` value. For them, the `"top"` value is used.
    * @see SurveyModel.questionTitleLocation
    */
    questionTitleLocation: string;
    getQuestionTitleLocation(): string;
    availableQuestionTitleWidth(): boolean;
    hasElementWithTitleLocationLeft(): boolean;
    /**
     * Sets consistent width for question titles in CSS values. Applies only when [`questionTitleLocation`](#questionTitleLocation) evaluates to `"left"`.
     *
     * Default value: `undefined`
     */
    questionTitleWidth: string;
    getQuestionTitleWidth(): string;
    readonly columns: Array<PanelLayoutColumnModel>;
    protected generateColumns(): void;
    getColumsForElement(el: IElement): Array<PanelLayoutColumnModel>;
    protected getStartIndex(): string;
    getQuestionStartIndex(): string;
    getChildrenLayoutType(): string;
    getProgressInfo(): IProgressInfo;
    readonly root: PanelModelBase;
    protected childVisibilityChanged(): void;
    createRowAndSetLazy(index: number): QuestionRowModel;
    createRow(): QuestionRowModel;
    onSurveyLoad(): void;
    onFirstRendering(): void;
    updateRows(): void;
    readonly rows: Array<QuestionRowModel>;
    ensureRowsVisibility(): void;
    protected onRowsChanged(): void;
    private locCountRowUpdates;
    private blockRowsUpdates;
    private releaseRowsUpdates;
    private updateRowsBeforeElementRemoved;
    private updateRowsOnElementAdded;
    protected onAddElement(element: IElement, index: number): void;
    protected onRemoveElement(element: IElement): void;
    private onRemoveElementNotifySurvey;
    private onElementVisibilityChanged;
    private onElementStartWithNewLineChanged;
    private updateRowsVisibility;
    canBuildRows(): boolean;
    private buildRows;
    private isLazyRenderInRow;
    protected canRenderFirstRows(): boolean;
    getDragDropInfo(): any;
    private updateRowsOnElementRemoved;
    updateRowsRemoveElementFromRow(element: IElement, row: QuestionRowModel): void;
    findRowByElement(el: IElement): QuestionRowModel;
    elementWidthChanged(el: IElement): void;
    readonly processedTitle: string;
    protected getRenderedTitle(str: string): string;
    /*
    * Gets or sets panel/page visibility.
    *
    * If you want to display or hide a survey element based on a condition, specify the `visibleIf` property. Refer to the following help topic for information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
    * @see visibleIf
    * @see isVisible
    */
    visible: boolean;
    onHidingContent(): void;
    protected onVisibleChanged(): void;
    protected notifyStateChanged(prevState: string): void;
    /*
    * Returns `true` if the panel/page is visible or the survey is currently in design mode.
    *
    * If you want to display or hide a question based on a condition, specify the `visibleIf` property. Refer to the following help topic for information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
    * @see visibleIf
    * @see visible
    */
    readonly isVisible: boolean;
    getIsContentVisible(exceptionQuestion?: IQuestion): boolean;
    getIsPageVisible(exceptionQuestion?: IQuestion): boolean;
    private lastVisibleIndex;
    setVisibleIndex(index: number): number;
    private updateVisibleIndexes;
    private resetVisibleIndexes;
    protected beforeSetVisibleIndex(index: number): number;
    protected getPanelStartIndex(index: number): number;
    protected isContinueNumbering(): boolean;
    readonly isReadOnly: boolean;
    protected onReadOnlyChanged(): void;
    updateElementCss(reNew?: boolean): void;
    /*
    * A Boolean expression. If it evaluates to `false`, this panel/page becomes read-only.
    *
    * A survey parses and runs all expressions on startup. If any values used in the expression change, the survey re-evaluates it.
    *
    * Refer to the following help topic for more information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
    * @see readOnly
    * @see isReadOnly
    */
    enableIf: string;
    /**
     * Adds a survey element (question or panel) to this panel/page. Returns `true` if the element was added successfully; `false` otherwise.
     * @param element A survey element to add.
     * @param index A desired index of this element in the `elements` array.
     * @see addNewQuestion
     * @see addNewPanel
     */
    addElement(element: IElement, index?: number): boolean;
    insertElement(element: IElement, dest?: IElement, location?: "bottom" | "top" | "left" | "right"): void;
    insertElementAfter(element: IElement, after: IElement): void;
    insertElementBefore(element: IElement, before: IElement): void;
    protected canAddElement(element: IElement): boolean;
    addQuestion(question: Question, index?: number): boolean;
    addPanel(panel: PanelModel, index?: number): boolean;
    /**
     * Creates a new question of a given type and adds it to the `elements` array at a specified index.
     *
     * This method returns `null` if the question cannot be created or added to this panel/page; otherwise, the method returns the created question.
     *
     * @param questionType A [question type](https://surveyjs.io/form-library/documentation/question#getType).
     * @param name A question name.
     * @param index A desired index of the new question in the `elements` array.
     * @see elements
     * @see addElement
     */
    addNewQuestion(questionType: string, name?: string, index?: number): Question;
    /**
     * Creates a new panel and adds it to the end of the `elements` array.
     *
     * This method returns `null` if the panel cannot be created or added to this panel/page; otherwise, the method returns the created panel.
     * @param name A panel name.
     * @see elementsup
     * @see addElement
     */
    addNewPanel(name?: string): PanelModel;
    indexOf(element: IElement): number;
    protected createNewPanel(name: string): PanelModel;
    /**
     * Deletes a survey element (question or panel) from this panel/page. Returns `true` if the element was deleted successfully; `false` otherwise.
     * @param element A survey element to delete.
     * @see elements
     */
    removeElement(element: IElement): boolean;
    removeQuestion(question: Question): void;
    runCondition(values: HashTable<any>, properties: HashTable<any>): void;
    onAnyValueChanged(name: string, questionName: string): void;
    checkBindings(valueName: string, value: any): void;
    dragDropAddTarget(dragDropInfo: DragDropInfo): void;
    dragDropFindRow(findElement: ISurveyElement): QuestionRowModel;
    dragDropMoveElement(src: IElement, target: IElement, targetIndex: number): void;
    needResponsiveWidth(): boolean;
    readonly hasDescriptionUnderTitle: boolean;
    readonly cssHeader: string;
    readonly cssDescription: string;
    /*
    * Specifies the error message position for questions that belong to this page/panel.
    *
    * Use this property to override the [`questionErrorLocation`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#questionErrorLocation) property specified for the survey. You can also set the [`errorLocation`](https://surveyjs.io/form-library/documentation/question#errorLocation) property for individual questions.
    *
    * Possible values:
    *
    * - `"default"` (default) - Inherits the setting from the `questionErrorLocation` property specified for the survey.
    * - `"top"` - Displays error messages above questions.
    * - `"bottom"` - Displays error messages below questions.
    */
    questionErrorLocation: string;
    getQuestionErrorLocation(): string;
    readonly no: string;
    readonly cssError: string;
    protected getCssError(cssClasses: any): string;
    getSerializableColumnsValue(): Array<PanelLayoutColumnModel>;
    dispose(): void;
}
/**
 * A class that describes the Panel container element.
 *
 * A panel can contain questions and other panels. Refer to the following help topic for an illustration: [Survey Structure](https://surveyjs.io/form-library/documentation/design-survey-create-a-simple-survey#survey-structure).
 *
 * [View Demo](https://surveyjs.io/form-library/examples/questiontype-panel/ (linkStyle))
 */
export declare class PanelModel extends PanelModelBase implements IElement {
    constructor(name?: string);
    getType(): string;
    readonly contentId: string;
    getSurvey(live?: boolean): ISurvey;
    readonly hasTextInTitle: boolean;
    private calcHasTextInTitle;
    onSurveyLoad(): void;
    protected onSetData(): void;
    readonly isPanel: boolean;
    /*
    * Returns a page to which the panel belongs and allows you to move this panel to a different page.
    * @see PanelModelBase.parent
    */
    page: IPage;
    protected removeFromParent(): void;
    moveTo(container: IPanel, insertBefore?: any): boolean;
    /*
    * Returns the visible index of the panel in the survey. Commonly it is -1 and it doesn't show.
    * You have to set showNumber to true to show index/numbering for the Panel
    * @see showNumber
    */
    readonly visibleIndex: number;
    getTitleOwner(): ITitleOwner;
    /*
    * Specifies whether to show the panel number in the title.
    *
    * Default value: `false`
    * @see SurveyModel.showQuestionNumbers
    * @see SurveyModel.questionTitlePattern
    */
    showNumber: boolean;
    /*
    * Gets or sets a value that specifies how the elements numbers inside panel are displayed.
    *
    * The following options are available:
    *
    * - `default` - display questions numbers as defined in parent panel or survey
    * - `onpanel` - display questions numbers, start numbering from beginning of this page
    * - `off` - turn off the numbering for questions titles
    * @see showNumber
    */
    showQuestionNumbers: string;
    /*
    * Specifies a number or letter used to start numbering of elements inside the panel.
    *
    * You can include desired prefixes and postfixes alongside the number or letter:
    *
    * ```js
    * "questionStartIndex": "a.", // a., b., c., ...
    * "questionStartIndex": "#3", // #3, #4, #5, ...
    * "questionStartIndex": "(B)." // (B)., (C)., (D)., ...
    * ```
    * Default value: `"1."` (inherited from `SurveyModel`'s `questionStartIndex` property)
    * @see SurveyModel.questionStartIndex
    * @see showQuestionNumbers
    */
    questionStartIndex: string;
    getQuestionStartIndex(): string;
    /*
    * A question number or letter (depends on the `questionStartIndex` property).
    *
    * When the question number, title, or the entire question is invisible, this property returns an empty string.
    * @see questionStartIndex
    * @see showNumber
    * @see visibleIf
    */
    readonly no: string;
    protected setNo(visibleIndex: number): void;
    protected notifyStateChanged(prevState: string): void;
    protected createLocTitleProperty(): LocalizableString;
    protected beforeSetVisibleIndex(index: number): number;
    protected getPanelStartIndex(index: number): number;
    protected isContinueNumbering(): boolean;
    private notifySurveyOnVisibilityChanged;
    protected getRenderedTitle(str: string): string;
    /*
    * Increases or decreases an indent of panel content from the left edge. Accepts positive integer values and 0.
    */
    innerIndent: number;
    /*
    * Disable this property if you want to render the current panel on the same line or row with the previous question or panel.
    */
    startWithNewLine: boolean;
    allowAdaptiveActions: boolean;
    innerPaddingLeft: string;
    private onIndentChanged;
    private getIndentSize;
    clearOnDeletingContainer(): void;
    readonly footerActions: Array<IAction>;
    private footerToolbarValue;
    onGetFooterActionsCallback: () => Array<IAction>;
    onGetFooterToolbarCssCallback: () => string;
    getFooterToolbar(): ActionContainer;
    readonly hasEditButton: boolean;
    cancelPreview(): void;
    readonly cssTitle: string;
    readonly showErrorsAbovePanel: boolean;
    protected getCssError(cssClasses: any): string;
    protected onVisibleChanged(): void;
    needResponsiveWidth(): boolean;
    focusIn(): void;
    protected getHasFrameV2(): boolean;
    protected getIsNested(): boolean;
    readonly showPanelAsPage: boolean;
    protected onElementExpanded(elementIsRendered: boolean): void;
    protected getCssRoot(cssClasses: {
        [index: string]: string;
    }): string;
    getContainerCss(): string;
}
