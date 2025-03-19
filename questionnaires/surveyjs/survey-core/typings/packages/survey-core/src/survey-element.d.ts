import { Base, EventBase } from "./base";
import { IAction } from "./actions/action";
import { AdaptiveActionContainer } from "./actions/adaptive-container";
import { ISurveyElement, IPage, IPanel, IProgressInfo, ISurvey, ISurveyData, ISurveyImpl, ITextProcessor, ITitleOwner } from "./base-interfaces";
import { SurveyError } from "./survey-error";
import { ILocalizableOwner, LocalizableString } from "./localizablestring";
import { ActionContainer } from "./actions/container";
/**
 * A base class for the [`SurveyElement`](https://surveyjs.io/form-library/documentation/surveyelement) and [`SurveyModel`](https://surveyjs.io/form-library/documentation/surveymodel) classes.
 */
export declare abstract class SurveyElementCore extends Base implements ILocalizableOwner {
    constructor();
    protected createLocTitleProperty(): LocalizableString;
    /**
     * Returns `true` if the survey element is a page.
     *
     * This property returns `false` for [`PageModel`](https://surveyjs.io/form-library/documentation/api-reference/page-model) objects in the following cases:
     *
     * - `SurveyModel`'s [`questionsOnPageMode`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#questionsOnPageMode) is set to `"singlePage"`.
     * - The page is included in a [preview of given answers](https://surveyjs.io/form-library/documentation/design-survey/create-a-multi-page-survey#preview-page).
     *
     * In those cases, the survey creates an internal `PageModel` object to show all questions on one page, and all regular pages become panels.
     */
    get isPage(): boolean;
    /**
     * Returns `true` if the survey element is a panel or acts as one.
     *
     * This property returns `true` for `PageModel` objects in the following cases:
     *
     * - `SurveyModel`'s [`questionsOnPageMode`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#questionsOnPageMode) is set to `"singlePage"`.
     * - The page is included in a [preview of given answers](https://surveyjs.io/form-library/documentation/design-survey/create-a-multi-page-survey#preview-page).
     *
     * In those cases, the survey creates an internal `PageModel` object to show all questions on one page, and all regular pages become panels.
     */
    get isPanel(): boolean;
    /**
     * Returns `true` if the survey element is a question.
     */
    get isQuestion(): boolean;
    /**
     * Returns `true` if the element is a survey.
     */
    get isSurvey(): boolean;
    /**
     * A title for the survey element. If `title` is undefined, the `name` property value is displayed instead.
     *
     * Empty pages and panels do not display their titles or names.
     *
     * @see [Configure Question Titles](https://surveyjs.io/form-library/documentation/design-survey-question-titles)
    */
    get title(): string;
    set title(val: string);
    get locTitle(): LocalizableString;
    protected getDefaultTitleValue(): string;
    protected setTitleValue(val: string): void;
    /**
     * Returns `true` if the survey element has a description.
     * @see description
    */
    hasDescription: boolean;
    /**
     * Explanatory text displayed under the title.
     * @see hasDescription
     */
    description: string;
    updateDescriptionVisibility(newDescription: any): void;
    get locDescription(): LocalizableString;
    get titleTagName(): string;
    protected getDefaultTitleTagName(): string;
    get hasTitle(): boolean;
    get hasTitleActions(): boolean;
    get hasTitleEvents(): boolean;
    getTitleToolbar(): AdaptiveActionContainer;
    getTitleOwner(): ITitleOwner;
    get isTitleOwner(): boolean;
    get isTitleRenderedAsString(): boolean;
    toggleState(): boolean;
    get cssClasses(): any;
    get cssTitle(): string;
    get ariaTitleId(): string;
    get ariaDescriptionId(): string;
    get titleTabIndex(): number;
    get titleAriaExpanded(): any;
    get titleAriaRole(): any;
    get ariaLabel(): string;
    get titleAriaLabel(): string | null;
    protected getIsTitleRenderedAsString(): boolean;
    abstract getLocale(): string;
    abstract getMarkdownHtml(text: string, name: string): string;
    abstract getRenderer(name: string): string;
    abstract getRendererContext(locStr: LocalizableString): any;
    abstract getProcessedText(text: string): string;
}
export declare enum DragTypeOverMeEnum {
    InsideEmptyPanel = 1,
    MultilineRight = 2,
    MultilineLeft = 3,
    Top = 4,
    Right = 5,
    Bottom = 6,
    Left = 7
}
/**
 * A base class for all survey elements.
 */
export declare class SurveyElement<E = any> extends SurveyElementCore implements ISurveyElement {
    stateChangedCallback: () => void;
    static getProgressInfoByElements(children: Array<SurveyElement>, isRequired: boolean): IProgressInfo;
    private surveyImplValue;
    private surveyDataValue;
    private surveyValue;
    private textProcessorValue;
    private selectedElementInDesignValue;
    dragTypeOverMe: DragTypeOverMeEnum;
    isDragMe: boolean;
    readOnlyChangedCallback: () => void;
    private static IsNeedScrollIntoView;
    static ScrollIntoView(el: HTMLElement, scrollIntoViewOptions?: ScrollIntoViewOptions, doneCallback?: () => void): void;
    static ScrollElementToTop(elementId: string, scrollIfVisible?: boolean, scrollIntoViewOptions?: ScrollIntoViewOptions, doneCallback?: () => void): boolean;
    static ScrollElementToViewCore(el: HTMLElement, checkLeft: boolean, scrollIfVisible?: boolean, scrollIntoViewOptions?: ScrollIntoViewOptions, doneCallback?: () => void): boolean;
    static GetFirstNonTextElement(elements: any, removeSpaces?: boolean): any;
    static FocusElement(elementId: string, isTimeOut?: boolean, containerEl?: HTMLElement): boolean;
    private static focusElementCore;
    static CreateDisabledDesignElements: boolean;
    disableDesignActions: boolean;
    effectiveColSpan: number;
    get colSpan(): number;
    set colSpan(val: number);
    constructor(name: string);
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    protected getSkeletonComponentNameCore(): string;
    private parentQuestionValue;
    /**
     * A Dynamic Panel, Dynamic Matrix, or Dropdown Matrix that includes the current question.
     *
     * This property is `null` for standalone questions.
     */
    get parentQuestion(): E;
    setParentQuestion(val: E): void;
    protected onParentQuestionChanged(): void;
    updateElementVisibility(): void;
    get skeletonComponentName(): string;
    /**
     * Gets and sets the survey element's expand state.
     *
     * Possible values:
     *
     * - `"default"` (default) - The survey element is displayed in full and cannot be collapsed in the UI.
     * - `"expanded"` - The survey element is displayed in full and can be collapsed in the UI.
     * - `"collapsed"` - The survey element displays only `title` and `description` and can be expanded in the UI.
     *
     * @see toggleState
     * @see collapse
     * @see expand
     * @see isCollapsed
     * @see isExpanded
     */
    get state(): string;
    set state(val: string);
    protected notifyStateChanged(prevState: string): void;
    /**
     * Returns `true` if the survey element is collapsed.
     * @see state
     * @see toggleState
     * @see collapse
     * @see expand
     * @see isExpanded
     */
    get isCollapsed(): boolean;
    /**
     * Returns `true` if the survey element is expanded.
     * @see state
     * @see toggleState
     * @see collapse
     * @see expand
     * @see isCollapsed
     */
    get isExpanded(): boolean;
    /**
     * Collapses the survey element.
     *
     * In collapsed state, the element displays only `title` and `description`.
     * @see title
     * @see description
     * @see state
     * @see toggleState
     * @see expand
     * @see isCollapsed
     * @see isExpanded
     */
    collapse(): void;
    /**
     * Expands the survey element.
     * @see state
     * @see toggleState
     * @see collapse
     * @see isCollapsed
     * @see isExpanded
     */
    expand(): void;
    /**
     * Toggles the survey element's `state` between collapsed and expanded.
     * @see state
     * @see collapse
     * @see expand
     * @see isCollapsed
     * @see isExpanded
     */
    toggleState(): boolean;
    get hasStateButton(): boolean;
    get shortcutText(): string;
    private titleToolbarValue;
    getTitleToolbar(): AdaptiveActionContainer;
    protected createActionContainer(allowAdaptiveActions?: boolean): ActionContainer;
    get titleActions(): Array<any>;
    private isTitleActionRequested;
    getTitleActions(): Array<any>;
    protected getDefaultTitleActions(): Array<IAction>;
    private updateTitleActions;
    locStrsChanged(): void;
    get hasTitleActions(): boolean;
    get hasTitleEvents(): boolean;
    get titleTabIndex(): number;
    get titleAriaExpanded(): any;
    get titleAriaRole(): any;
    setSurveyImpl(value: ISurveyImpl, isLight?: boolean): void;
    protected canRunConditions(): boolean;
    getDataFilteredValues(): any;
    getDataFilteredProperties(): any;
    protected get surveyImpl(): ISurveyImpl;
    __setData(data: ISurveyData): void;
    get data(): ISurveyData;
    /**
     * Returns the survey object.
     */
    get survey(): ISurvey;
    getSurvey(live?: boolean): ISurvey;
    protected setSurveyCore(value: ISurvey): void;
    get skeletonHeight(): string;
    isContentElement: boolean;
    isEditableTemplateElement: boolean;
    isInteractiveDesignElement: boolean;
    protected get isInternal(): boolean;
    get areInvisibleElementsShowing(): boolean;
    get isVisible(): boolean;
    /**
     * Returns `true` if the survey element or its parent element is read-only.
     *
     * If you want to switch a survey element to the read-only state based on a condition, specify the [`enableIf`](https://surveyjs.io/form-library/documentation/question#enableIf) property. Refer to the following help topic for information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
     * @see readOnly
     */
    get isReadOnly(): boolean;
    /**
     * Makes the survey element read-only.
     *
     * If you want to switch a survey element to the read-only state based on a condition, specify the [`enableIf`](https://surveyjs.io/form-library/documentation/question#enableIf) property. Refer to the following help topic for information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
     * @see isReadOnly
     */
    get readOnly(): boolean;
    set readOnly(val: boolean);
    protected onReadOnlyChanged(): void;
    private get css();
    private isCssValueCalculating;
    get cssClassesValue(): any;
    private ensureCssClassesValue;
    private createCssClassesValue;
    protected onCalcCssClasses(classes: any): void;
    /**
     * Returns an object in which keys are UI elements and values are CSS classes applied to them.
     *
     * Use the following events of the [`SurveyModel`](https://surveyjs.io/form-library/documentation/surveymodel) object to override CSS classes:
     *
     * - [`onUpdateQuestionCssClasses`](https://surveyjs.io/form-library/documentation/surveymodel#onUpdateQuestionCssClasses)
     * - [`onUpdatePanelCssClasses`](https://surveyjs.io/form-library/documentation/surveymodel#onUpdatePanelCssClasses)
     * - [`onUpdatePageCssClasses`](https://surveyjs.io/form-library/documentation/surveymodel#onUpdatePageCssClasses)
     * - [`onUpdateChoiceItemCss`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onUpdateChoiceItemCss)
     */
    get cssClasses(): any;
    get cssTitleNumber(): any;
    get cssRequiredText(): any;
    getCssTitleExpandableSvg(): string;
    protected calcCssClasses(css: any): any;
    protected updateElementCssCore(cssClasses: any): void;
    get cssError(): string;
    updateElementCss(reNew?: boolean): void;
    protected clearCssClasses(): void;
    protected getIsLoadingFromJson(): boolean;
    /**
     * A survey element identifier.
     *
     * > Question names must be unique.
     */
    get name(): string;
    set name(val: string);
    protected getValidName(name: string): string;
    protected onNameChanged(oldValue: string): void;
    protected updateBindingValue(valueName: string, value: any): void;
    /**
     * Validation errors. Call the `validate()` method to validate survey element data.
     * @see validate
     */
    get errors(): Array<SurveyError>;
    set errors(val: Array<SurveyError>);
    hasVisibleErrors: boolean;
    private updateVisibleErrors;
    /**
     * Returns `true` if the survey element or its child elements have validation errors.
     *
     * This property contains the result of the most recent validation. This result may be outdated. Call the `validate` method to get an up-to-date value.
     * @see errors
     */
    get containsErrors(): boolean;
    updateContainsErrors(): void;
    protected getContainsErrors(): boolean;
    get selectedElementInDesign(): SurveyElement;
    set selectedElementInDesign(val: SurveyElement);
    updateCustomWidgets(): void;
    onSurveyLoad(): void;
    private wasRenderedValue;
    get wasRendered(): boolean;
    onFirstRendering(): void;
    protected onFirstRenderingCore(): void;
    endLoadingFromJson(): void;
    setVisibleIndex(index: number): number;
    delete(doDispose: boolean): void;
    locOwner: ILocalizableOwner;
    /**
     * Returns the survey's [locale](https://surveyjs.io/form-library/documentation/surveymodel#locale).
     *
     * If a default locale is used, this method returns an empty string. To get the applied locale in this case, use the following code:
     *
     * ```js
     * import { surveyLocalization } from 'survey-core';
     * const defaultLocale = surveyLocalization.defaultLocale;
     * ```
     *
     * @see [Localization & Globalization](https://surveyjs.io/form-library/documentation/localization)
     */
    getLocale(): string;
    getMarkdownHtml(text: string, name: string): string;
    getRenderer(name: string): string;
    getRendererContext(locStr: LocalizableString): any;
    getProcessedText(text: string): string;
    protected getUseDisplayValuesInDynamicTexts(): boolean;
    protected removeSelfFromList(list: Array<any>): void;
    protected get textProcessor(): ITextProcessor;
    protected getProcessedHtml(html: string): string;
    protected onSetData(): void;
    get parent(): IPanel;
    set parent(val: IPanel);
    protected getPage(parent: IPanel): IPage;
    protected moveToBase(parent: IPanel, container: IPanel, insertBefore?: any): boolean;
    protected setPage(parent: IPanel, newPage: IPage): void;
    protected getSearchableLocKeys(keys: Array<string>): void;
    get isDefaultV2Theme(): boolean;
    get hasParent(): boolean;
    isSingleInRow: boolean;
    private shouldAddRunnerStyles;
    protected get isCompact(): boolean;
    private canHaveFrameStyles;
    protected getHasFrameV2(): boolean;
    protected getIsNested(): boolean;
    protected getCssRoot(cssClasses: {
        [index: string]: string;
    }): string;
    /**
     * Sets survey element width in CSS values.
     *
     * Default value: ""
     * @see minWidth
     * @see maxWidth
    */
    get width(): string;
    set width(val: string);
    /**
     * Gets or sets minimum survey element width in CSS values.
     *
     * Default value: "300px" (taken from [`settings.minWidth`](https://surveyjs.io/form-library/documentation/settings#minWidth))
     * @see maxWidth
     * @see renderWidth
     * @see width
     */
    get minWidth(): string;
    set minWidth(val: string);
    /**
     * Gets or sets maximum survey element width in CSS values.
     *
     * Default value: "100%" (taken from [`settings.maxWidth`](https://surveyjs.io/form-library/documentation/settings#maxWidth))
     * @see minWidth
     * @see renderWidth
     * @see width
     */
    get maxWidth(): string;
    set maxWidth(val: string);
    /**
     * Returns a calculated width of the rendered survey element in CSS values.
     * @see width
     * @see minWidth
     * @see maxWidth
     */
    get renderWidth(): string;
    set renderWidth(val: string);
    /**
     * Increases or decreases an indent of survey element content from the left edge. Accepts positive integer values and 0. Does not apply in the Default V2 theme.
     * @see rightIndent
     */
    get indent(): number;
    set indent(val: number);
    /**
     * Increases or decreases an indent of survey element content from the right edge. Accepts positive integer values and 0. Does not apply in the Default V2 theme.
     * @see indent
     */
    get rightIndent(): number;
    set rightIndent(val: number);
    getRootStyle(): object;
    get paddingLeft(): string;
    protected calcPaddingLeft(): string;
    get paddingRight(): string;
    set paddingRight(val: string);
    protected calcPaddingRight(): string;
    protected resetIndents(): void;
    allowRootStyle: boolean;
    rootStyle: any;
    updateRootStyle(): void;
    private isContainsSelection;
    get clickTitleFunction(): any;
    protected needClickTitleFunction(): boolean;
    protected processTitleClick(): void;
    get hasAdditionalTitleToolbar(): boolean;
    get additionalTitleToolbar(): ActionContainer;
    protected getAdditionalTitleToolbar(): ActionContainer | null;
    protected getCssTitle(cssClasses: any): string;
    get isDisabledStyle(): boolean;
    get isReadOnlyStyle(): boolean;
    protected getIsDisableAndReadOnlyStyles(itemReadOnly: boolean): Array<boolean>;
    get isPreviewStyle(): boolean;
    localeChanged(): void;
    private wrapperElement?;
    setWrapperElement(element?: HTMLElement): void;
    getWrapperElement(): HTMLElement;
    private _renderedIsExpanded;
    private _isAnimatingCollapseExpand;
    private set isAnimatingCollapseExpand(value);
    private get isAnimatingCollapseExpand();
    protected onElementExpanded(elementIsRendered: boolean): void;
    private getExpandCollapseAnimationOptions;
    private get isExpandCollapseAnimationEnabled();
    private animationCollapsed;
    set renderedIsExpanded(val: boolean);
    get renderedIsExpanded(): boolean;
    protected getIsAnimationAllowed(): boolean;
    onAfterRenderElement: EventBase<SurveyElement<E>, any>;
    afterRenderCore(element: HTMLElement): void;
    dispose(): void;
}
export declare class RenderingCompletedAwaiter {
    private _elements;
    private _renderedHandler;
    constructor(_elements: Array<SurveyElement>, _renderedHandler: () => void, waitingTimeout?: number);
    private _elementsToRenderCount;
    private _elementsToRenderTimer;
    private _elementRenderedHandler;
    private stopWaitingForElementsRendering;
    private visibleElementsRendered;
    dispose(): void;
}
