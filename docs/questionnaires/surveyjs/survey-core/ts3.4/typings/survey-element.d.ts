import { Base } from "./base";
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
    /*
    * Returns `true` if the survey element is a page.
    * @see Base.getType
    */
    readonly isPage: boolean;
    /*
    * Returns `true` if the survey element is a panel.
    * @see Base.getType
    */
    readonly isPanel: boolean;
    /*
    * Returns `true` if the survey element is a question.
    * @see Base.getType
    */
    readonly isQuestion: boolean;
    /*
    * Returns `true` if the element is a survey.
    * @see Base.getType
    */
    readonly isSurvey: boolean;
    /*
    * A title for the survey element. If `title` is undefined, the `name` property value is displayed instead.
    *
    * Empty pages and panels do not display their titles or names.
    *
    * @see [Configure Question Titles](https://surveyjs.io/form-library/documentation/design-survey-question-titles)
    */
    title: string;
    readonly locTitle: LocalizableString;
    protected getDefaultTitleValue(): string;
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
    readonly locDescription: LocalizableString;
    readonly titleTagName: string;
    protected getDefaultTitleTagName(): string;
    readonly hasTitle: boolean;
    readonly hasTitleActions: boolean;
    readonly hasTitleEvents: boolean;
    getTitleToolbar(): AdaptiveActionContainer;
    getTitleOwner(): ITitleOwner;
    readonly isTitleOwner: boolean;
    readonly isTitleRenderedAsString: boolean;
    toggleState(): boolean;
    readonly cssClasses: any;
    readonly cssTitle: string;
    readonly ariaTitleId: string;
    readonly ariaDescriptionId: string;
    readonly titleTabIndex: number;
    readonly titleAriaExpanded: any;
    readonly titleAriaRole: any;
    readonly ariaLabel: string;
    readonly titleAriaLabel: string | null;
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
    static ScrollElementToTop(elementId: string, scrollIfVisible?: boolean, scrollIntoViewOptions?: ScrollIntoViewOptions): boolean;
    static ScrollElementToViewCore(el: HTMLElement, checkLeft: boolean, scrollIfVisible?: boolean, scrollIntoViewOptions?: ScrollIntoViewOptions): boolean;
    static GetFirstNonTextElement(elements: any, removeSpaces?: boolean): any;
    static FocusElement(elementId: string): boolean;
    private static focusElementCore;
    static CreateDisabledDesignElements: boolean;
    disableDesignActions: boolean;
    effectiveColSpan: number;
    colSpan: number;
    constructor(name: string);
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    protected getSkeletonComponentNameCore(): string;
    private parentQuestionValue;
    /*
    * A Dynamic Panel, Dynamic Matrix, or Dropdown Matrix that includes the current question.
    *
    * This property is `null` for standalone questions.
    */
    readonly parentQuestion: E;
    setParentQuestion(val: E): void;
    protected onParentQuestionChanged(): void;
    readonly skeletonComponentName: string;
    /*
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
    state: string;
    protected notifyStateChanged(prevState: string): void;
    /*
    * Returns `true` if the survey element is collapsed.
    * @see state
    * @see toggleState
    * @see collapse
    * @see expand
    * @see isExpanded
    */
    readonly isCollapsed: boolean;
    /*
    * Returns `true` if the survey element is expanded.
    * @see state
    * @see toggleState
    * @see collapse
    * @see expand
    * @see isCollapsed
    */
    readonly isExpanded: boolean;
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
    readonly hasStateButton: boolean;
    readonly shortcutText: string;
    private titleToolbarValue;
    getTitleToolbar(): AdaptiveActionContainer;
    protected createActionContainer(allowAdaptiveActions?: boolean): ActionContainer;
    readonly titleActions: Array<any>;
    private isTitleActionRequested;
    getTitleActions(): Array<any>;
    protected getDefaultTitleActions(): Array<IAction>;
    private updateTitleActions;
    readonly hasTitleActions: boolean;
    readonly hasTitleEvents: boolean;
    readonly titleTabIndex: number;
    readonly titleAriaExpanded: any;
    readonly titleAriaRole: any;
    setSurveyImpl(value: ISurveyImpl, isLight?: boolean): void;
    protected canRunConditions(): boolean;
    getDataFilteredValues(): any;
    getDataFilteredProperties(): any;
    protected readonly surveyImpl: ISurveyImpl;
    __setData(data: ISurveyData): void;
    readonly data: ISurveyData;
    /*
    * Returns the survey object.
    */
    readonly survey: ISurvey;
    getSurvey(live?: boolean): ISurvey;
    protected setSurveyCore(value: ISurvey): void;
    isContentElement: boolean;
    isEditableTemplateElement: boolean;
    isInteractiveDesignElement: boolean;
    protected readonly isInternal: boolean;
    readonly areInvisibleElementsShowing: boolean;
    readonly isVisible: boolean;
    /*
    * Returns `true` if the survey element or its parent element is read-only.
    *
    * If you want to switch a survey element to the read-only state based on a condition, specify the [`enableIf`](https://surveyjs.io/form-library/documentation/question#enableIf) property. Refer to the following help topic for information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
    * @see readOnly
    */
    readonly isReadOnly: boolean;
    /*
    * Makes the survey element read-only.
    *
    * If you want to switch a survey element to the read-only state based on a condition, specify the [`enableIf`](https://surveyjs.io/form-library/documentation/question#enableIf) property. Refer to the following help topic for information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
    * @see isReadOnly
    */
    readOnly: boolean;
    protected onReadOnlyChanged(): void;
    private readonly css: any;
    cssClassesValue: any;
    private ensureCssClassesValue;
    /*
    * Returns an object in which keys are UI elements and values are CSS classes applied to them.
    *
    * Use the following events of the [`SurveyModel`](https://surveyjs.io/form-library/documentation/surveymodel) object to override CSS classes:
    *
    * - [`onUpdateQuestionCssClasses`](https://surveyjs.io/form-library/documentation/surveymodel#onUpdateQuestionCssClasses)
    * - [`onUpdatePanelCssClasses`](https://surveyjs.io/form-library/documentation/surveymodel#onUpdatePanelCssClasses)
    * - [`onUpdatePageCssClasses`](https://surveyjs.io/form-library/documentation/surveymodel#onUpdatePageCssClasses)
    * - [`onUpdateChoiceItemCss`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onUpdateChoiceItemCss)
    */
    readonly cssClasses: any;
    readonly cssTitleNumber: any;
    protected calcCssClasses(css: any): any;
    protected updateElementCssCore(cssClasses: any): void;
    readonly cssError: string;
    updateElementCss(reNew?: boolean): void;
    protected clearCssClasses(): void;
    protected getIsLoadingFromJson(): boolean;
    /*
    * A survey element identifier.
    *
    * > Question names must be unique.
    */
    name: string;
    protected getValidName(name: string): string;
    protected onNameChanged(oldValue: string): void;
    protected updateBindingValue(valueName: string, value: any): void;
    /*
    * Validation errors. Call the `validate()` method to validate survey element data.
    * @see validate
    */
    errors: Array<SurveyError>;
    hasVisibleErrors: boolean;
    private updateVisibleErrors;
    /*
    * Returns `true` if the survey element or its child elements have validation errors.
    *
    * This property contains the result of the most recent validation. This result may be outdated. Call the `validate` method to get an up-to-date value.
    * @see errors
    */
    readonly containsErrors: boolean;
    updateContainsErrors(): void;
    protected getContainsErrors(): boolean;
    selectedElementInDesign: SurveyElement;
    updateCustomWidgets(): void;
    onSurveyLoad(): void;
    private wasRenderedValue;
    readonly wasRendered: boolean;
    onFirstRendering(): void;
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
    protected readonly textProcessor: ITextProcessor;
    protected getProcessedHtml(html: string): string;
    protected onSetData(): void;
    parent: IPanel;
    protected getPage(parent: IPanel): IPage;
    protected moveToBase(parent: IPanel, container: IPanel, insertBefore?: any): boolean;
    protected setPage(parent: IPanel, newPage: IPage): void;
    protected getSearchableLocKeys(keys: Array<string>): void;
    readonly isDefaultV2Theme: boolean;
    readonly hasParent: boolean;
    isSingleInRow: boolean;
    private shouldAddRunnerStyles;
    protected readonly isCompact: boolean;
    private canHaveFrameStyles;
    protected getHasFrameV2(): boolean;
    protected getIsNested(): boolean;
    protected getCssRoot(cssClasses: {
        [index: string]: string;
    }): string;
    /*
    * Sets survey element width in CSS values.
    *
    * Default value: ""
    * @see minWidth
    * @see maxWidth
    */
    width: string;
    /*
    * Gets or sets minimum survey element width in CSS values.
    *
    * Default value: "300px" (taken from [`settings.minWidth`](https://surveyjs.io/form-library/documentation/settings#minWidth))
    * @see maxWidth
    * @see renderWidth
    * @see width
    */
    minWidth: string;
    /*
    * Gets or sets maximum survey element width in CSS values.
    *
    * Default value: "100%" (taken from [`settings.maxWidth`](https://surveyjs.io/form-library/documentation/settings#maxWidth))
    * @see minWidth
    * @see renderWidth
    * @see width
    */
    maxWidth: string;
    /*
    * Returns a calculated width of the rendered survey element in CSS values.
    * @see width
    * @see minWidth
    * @see maxWidth
    */
    renderWidth: string;
    /*
    * Increases or decreases an indent of survey element content from the left edge. Accepts positive integer values and 0. Does not apply in the Default V2 theme.
    * @see rightIndent
    */
    indent: number;
    /*
    * Increases or decreases an indent of survey element content from the right edge. Accepts positive integer values and 0. Does not apply in the Default V2 theme.
    * @see indent
    */
    rightIndent: number;
    getRootStyle(): object;
    paddingLeft: string;
    paddingRight: string;
    allowRootStyle: boolean;
    rootStyle: any;
    updateRootStyle(): void;
    private isContainsSelection;
    readonly clickTitleFunction: any;
    protected needClickTitleFunction(): boolean;
    protected processTitleClick(): void;
    readonly hasAdditionalTitleToolbar: boolean;
    readonly additionalTitleToolbar: ActionContainer;
    protected getAdditionalTitleToolbar(): ActionContainer | null;
    protected getCssTitle(cssClasses: any): string;
    readonly isDisabledStyle: boolean;
    readonly isReadOnlyStyle: boolean;
    protected getIsDisableAndReadOnlyStyles(itemReadOnly: boolean): Array<boolean>;
    readonly isPreviewStyle: boolean;
    localeChanged(): void;
    private wrapperElement?;
    setWrapperElement(element?: HTMLElement): void;
    getWrapperElement(): HTMLElement;
    private _renderedIsExpanded;
    private _isAnimatingCollapseExpand;
    private isAnimatingCollapseExpand: any;
    protected onElementExpanded(elementIsRendered: boolean): void;
    private getExpandCollapseAnimationOptions;
    private readonly isExpandCollapseAnimationEnabled: any;
    private animationCollapsed;
    renderedIsExpanded: boolean;
    protected getIsAnimationAllowed(): boolean;
    dispose(): void;
}
