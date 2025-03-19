import { HashTable } from "./helpers";
import { IElement, IQuestion, IPanel, ISurveyData, ISurvey, ISurveyImpl, ITextProcessor, IProgressInfo, IPlainDataOptions } from "./base-interfaces";
import { LocalizableString } from "./localizablestring";
import { Base } from "./base";
import { Question, IConditionObject, IQuestionPlainData } from "./question";
import { PanelModel } from "./panel";
import { SurveyError } from "./survey-error";
import { ActionContainer } from "./actions/container";
import { IAction } from "./actions/action";
import { AdaptiveActionContainer } from "./actions/adaptive-container";
import { ITheme } from "./themes";
import { AnimationProperty, IAnimationGroupConsumer } from "./utils/animation";
export interface IQuestionPanelDynamicData {
    getItemIndex(item: ISurveyData): number;
    getVisibleItemIndex(item: ISurveyData): number;
    getPanelItemData(item: ISurveyData): any;
    setPanelItemData(item: ISurveyData, name: string, val: any): any;
    getSharedQuestionFromArray(name: string, panelIndex: number): Question;
    getSurvey(): ISurvey;
    getRootData(): ISurveyData;
}
export declare class QuestionPanelDynamicItem implements ISurveyData, ISurveyImpl {
    static ItemVariableName: string;
    static ParentItemVariableName: string;
    static IndexVariableName: string;
    static VisibleIndexVariableName: string;
    private panelValue;
    private data;
    private textPreProcessor;
    constructor(data: IQuestionPanelDynamicData, panel: PanelModel);
    readonly panel: PanelModel;
    setSurveyImpl(): void;
    getValue(name: string): any;
    setValue(name: string, newValue: any): void;
    getVariable(name: string): any;
    setVariable(name: string, newValue: any): void;
    getComment(name: string): string;
    setComment(name: string, newValue: string, locNotification: any): void;
    findQuestionByName(name: string): IQuestion;
    getEditingSurveyElement(): Base;
    getAllValues(): any;
    getFilteredValues(): any;
    getFilteredProperties(): any;
    getSurveyData(): ISurveyData;
    getSurvey(): ISurvey;
    getTextProcessor(): ITextProcessor;
}
export declare class QuestionPanelDynamicTemplateSurveyImpl implements ISurveyImpl {
    data: IQuestionPanelDynamicData;
    constructor(data: IQuestionPanelDynamicData);
    getSurveyData(): ISurveyData;
    getSurvey(): ISurvey;
    getTextProcessor(): ITextProcessor;
}
/**
  * A class that describes the Dynamic Panel question type.
  *
  * Dynamic Panel allows respondents to add panels based on a panel template and delete them. Specify the [`templateElements`](https://surveyjs.io/form-library/documentation/questionpaneldynamicmodel#templateElements) property to configure panel template elements.
  *
  * [View Demo](https://surveyjs.io/form-library/examples/questiontype-paneldynamic/ (linkStyle))
  */
export declare class QuestionPanelDynamicModel extends Question implements IQuestionPanelDynamicData {
    private templateValue;
    private isValueChangingInternally;
    private changingValueQuestion;
    renderModeChangedCallback: () => void;
    panelCountChangedCallback: () => void;
    currentIndexChangedCallback: () => void;
    constructor(name: string);
    readonly isCompositeQuestion: boolean;
    readonly hasSingleInput: boolean;
    readonly isContainer: boolean;
    getFirstQuestionToFocus(withError: boolean): Question;
    setSurveyImpl(value: ISurveyImpl, isLight?: boolean): void;
    private assignOnPropertyChangedToTemplate;
    private addOnPropertyChangedCallback;
    private onTemplateElementPropertyChanged;
    private readonly useTemplatePanel: any;
    getType(): string;
    clearOnDeletingContainer(): void;
    readonly isAllowTitleLeft: boolean;
    removeElement(element: IElement): boolean;
    /*
    * A `PanelModel` object used as a template to create dynamic panels.
    * @see PanelModel
    * @see templateElements
    * @see templateTitle
    * @see panels
    * @see panelCount
    */
    readonly template: PanelModel;
    getPanel(): IPanel;
    /*
    * An array of questions and panels included in a panel template.
    * @see template
    * @see panels
    * @see panelCount
    */
    readonly templateElements: Array<IElement>;
    /*
    * A template for panel titles.
    *
    * The template can contain the following placeholders:
    *
    * - `{panelIndex}` - A panel index within the collection of all panels. Starts with 1.
    * - `{visiblePanelIndex}` - A panel index within the collection of visible panels. Starts with 1.
    * @see template
    * @see templateDescription
    * @see templateElements
    * @see panels
    * @see panelCount
    */
    templateTitle: string;
    readonly locTemplateTitle: LocalizableString;
    /*
    * A template for tab titles. Applies when [`renderMode`](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#renderMode) is `"tab"`.
    *
    * The template can contain the following placeholders:
    *
    * - `{panelIndex}` - A panel index within the collection of all panels. Starts with 1.
    * - `{visiblePanelIndex}` - A panel index within the collection of visible panels. Starts with 1.
    *
    * If you want to customize individual tab titles, handle `SurveyModel`'s [`onGetDynamicPanelTabTitle`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onGetDynamicPanelTabTitle) event.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/tabbed-interface-for-duplicate-group-option/ (linkStyle))
    * @see templateTitle
    * @see tabTitlePlaceholder
    * @see renderMode
    */
    templateTabTitle: string;
    readonly locTemplateTabTitle: LocalizableString;
    /*
    * A placeholder for tab titles that applies when the [`templateTabTitle`](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#templateTabTitle) expression doesn't produce a meaningful value.
    *
    * Default value: `"New Panel"` (taken from a [localization dictionary](https://github.com/surveyjs/survey-library/tree/master/src/localization))
    */
    tabTitlePlaceholder: string;
    readonly locTabTitlePlaceholder: LocalizableString;
    /*
    * A template for panel descriptions.
    * @see template
    * @see templateTitle
    * @see templateElements
    * @see panels
    * @see panelCount
    */
    templateDescription: string;
    readonly locTemplateDescription: LocalizableString;
    /*
    * A Boolean expression that is evaluated against each panel. If the expression evaluates to `false`, the panel becomes hidden.
    *
    * A survey parses and runs all expressions on startup. If any values used in the expression change, the survey re-evaluates it.
    *
    * Use the `{panel}` placeholder to reference the current panel in the expression.
    *
    * Refer to the following help topic for more information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#conditional-visibility).
    * @see visibleIf
    * @see visiblePanels
    */
    templateVisibleIf: string;
    protected readonly items: Array<ISurveyData>;
    /*
    * An array of `PanelModel` objects created based on a panel template.
    * @see PanelModel
    * @see template
    * @see panelCount
    */
    readonly panels: Array<PanelModel>;
    /*
    * An array of currently visible panels ([`PanelModel`](https://surveyjs.io/form-library/documentation/api-reference/panel-model) objects).
    * @see templateVisibleIf
    */
    readonly visiblePanels: Array<PanelModel>;
    protected readonly panelsCore: Array<PanelModel>;
    protected readonly visiblePanelsCore: Array<PanelModel>;
    private onPanelAdded;
    private onPanelRemoved;
    private onPanelRemovedCore;
    /*
    * A zero-based index of the currently displayed panel.
    *
    * When `renderMode` is `"list"` or Dynamic Panel is empty (`panelCount` is 0), this property contains -1.
    * @see currentPanel
    * @see panels
    * @see panelCount
    * @see renderMode
    */
    currentIndex: number;
    /*
    * A `PanelModel` object that is the currently displayed panel.
    *
    * When `renderMode` is `"list"` or Dynamic Panel is empty (`panelCount` is 0), this property contains `null`.
    * @see currentIndex
    * @see panels
    * @see panelCount
    * @see renderMode
    */
    currentPanel: PanelModel;
    private _renderedPanels;
    private updateRenderedPanels;
    renderedPanels: Array<PanelModel>;
    private isPanelsAnimationRunning;
    private getPanelsAnimationOptions;
    private _panelsAnimations;
    private disablePanelsAnimations;
    private enablePanelsAnimations;
    private updatePanelsAnimation;
    readonly panelsAnimation: AnimationProperty<Array<PanelModel>, IAnimationGroupConsumer<PanelModel>>;
    onHidingContent(): void;
    /*
    * Specifies whether to display a confirmation dialog when a respondent wants to delete a panel.
    * @see confirmDeleteText
    */
    confirmDelete: boolean;
    /*
    * Specifies a key question. Set this property to the name of a question used in the template, and Dynamic Panel will display `keyDuplicationError` if a user tries to enter a duplicate value in this question.
    * @see keyDuplicationError
    */
    keyName: string;
    /*
    * A message displayed in a confirmation dialog that appears when a respondent wants to delete a panel.
    * @see confirmDelete
    */
    confirmDeleteText: string;
    readonly locConfirmDeleteText: LocalizableString;
    /*
    * An error message displayed when users enter a duplicate value into a question that accepts only unique values (`isUnique` is set to `true` or `keyName` is specified).
    *
    * A default value for this property is taken from a [localization dictionary](https://github.com/surveyjs/survey-library/tree/master/src/localization). Refer to the following help topic for more information: [Localization & Globalization](https://surveyjs.io/form-library/documentation/localization).
    * @see keyName
    */
    keyDuplicationError: string;
    readonly locKeyDuplicationError: LocalizableString;
    /*
    * A caption for the Previous button. Applies only if `renderMode` is different from `"list"`.
    * @see renderMode
    * @see isPrevButtonVisible
    */
    panelPrevText: string;
    readonly locPanelPrevText: LocalizableString;
    /*
    * A caption for the Next button. Applies only if `renderMode` is different from `"list"`.
    * @see renderMode
    * @see isNextButtonVisible
    */
    panelNextText: string;
    readonly locPanelNextText: LocalizableString;
    /*
    * A caption for the Add Panel button.
    */
    panelAddText: string;
    readonly locPanelAddText: LocalizableString;
    /*
    * A caption for the Delete Panel button.
    * @see panelRemoveButtonLocation
    */
    panelRemoveText: string;
    readonly locPanelRemoveText: LocalizableString;
    /*
    * Returns true when the renderMode equals to "progressTop" or "progressTopBottom"
    */
    readonly isProgressTopShowing: boolean;
    /*
    * Returns true when the renderMode equals to "progressBottom" or "progressTopBottom"
    */
    readonly isProgressBottomShowing: boolean;
    /*
    * Indicates whether the Previous button is visible.
    * @see currentIndex
    * @see currentPanel
    * @see panelPrevText
    */
    readonly isPrevButtonVisible: boolean;
    readonly isPrevButtonShowing: boolean;
    /*
    * Indicates whether the Next button is visible.
    * @see currentIndex
    * @see currentPanel
    * @see panelNextText
    */
    readonly isNextButtonVisible: boolean;
    readonly isNextButtonShowing: boolean;
    /*
    * Returns true when showRangeInProgress equals to true, renderMode doesn't equal to "list" and visiblePanelCount is >= 2.
    */
    readonly isRangeShowing: boolean;
    getElementsInDesign(includeHidden?: boolean): Array<IElement>;
    private isAddingNewPanels;
    private addingNewPanelsValue;
    private isNewPanelsValueChanged;
    private prepareValueForPanelCreating;
    private setValueAfterPanelsCreating;
    protected getValueCore(): any;
    protected setValueCore(newValue: any): void;
    setIsMobile(val: boolean): void;
    themeChanged(theme: ITheme): void;
    /*
    * The number of panels in Dynamic Panel.
    * @see minPanelCount
    * @see maxPanelCount
    */
    panelCount: number;
    /*
    * Returns the number of visible panels in Dynamic Panel.
    * @see templateVisibleIf
    */
    readonly visiblePanelCount: number;
    /*
    * Specifies whether users can expand and collapse panels. Applies if `renderMode` is `"list"` and the `templateTitle` property is specified.
    *
    * Possible values:
    *
    * - `"default"` (default) - All panels are displayed in full and cannot be collapsed.
    * - `"expanded"` - All panels are displayed in full and can be collapsed in the UI.
    * - `"collapsed"` - All panels display only their titles and descriptions and can be expanded in the UI.
    * - `"firstExpanded"` - Only the first panel is displayed in full; other panels are collapsed and can be expanded in the UI.
    * @see renderMode
    * @see templateTitle
    */
    panelsState: string;
    private setTemplatePanelSurveyImpl;
    private setPanelsSurveyImpl;
    private setPanelsState;
    private setValueBasedOnPanelCount;
    /*
    * A minimum number of panels in Dynamic Panel. Users cannot delete panels if `panelCount` equals `minPanelCount`.
    *
    * Default value: 0
    * @see panelCount
    * @see maxPanelCount
    * @see allowRemovePanel
    */
    minPanelCount: number;
    /*
    * A maximum number of panels in Dynamic Panel. Users cannot add new panels if `panelCount` equals `maxPanelCount`.
    *
    * Default value: 100 (inherited from [`settings.panel.maxPanelCount`](https://surveyjs.io/form-library/documentation/settings#panelMaximumPanelCount))
    * @see panelCount
    * @see minPanelCount
    * @see allowAddPanel
    */
    maxPanelCount: number;
    /*
    * Specifies whether users are allowed to add new panels.
    *
    * Default value: `true`
    *
    * By default, users add new panels to the end. If you want to let users insert a new panel after the current panel, set the [`newPanelPosition`](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#newPanelPosition) property to `"next"`.
    * @see canAddPanel
    * @see allowRemovePanel
    */
    allowAddPanel: boolean;
    /*
    * Specifies the position of newly added panels.
    *
    * Possible values:
    *
    * - `"last"` (default) - New panels are added to the end.
    * - `"next"` - New panels are inserted after the current panel.
    * @see allowAddPanel
    * @see addPanel
    */
    newPanelPosition: string;
    /*
    * Specifies whether users are allowed to delete panels.
    *
    * Default value: `true`
    * @see canRemovePanel
    * @see allowAddPanel
    */
    allowRemovePanel: boolean;
    /*
    * Gets or sets the location of question titles relative to their input fields.
    *
    * - `"default"` (default) - Inherits the setting from the Dynamic Panel's `titleLocation` property, which in turn inherits the [`questionTitleLocation`](https://surveyjs.io/form-library/documentation/surveymodel#questionTitleLocation) property value specified for the Dynamic Panel's container (page or survey).
    * - `"top"` - Displays question titles above input fields.
    * - `"bottom"` - Displays question titles below input fields.
    * - `"left"` - Displays question titles to the left of input fields.
    * - `"hidden"` - Hides question titles.
    * @see titleLocation
    */
    templateTitleLocation: string;
    /*
    * Specifies the error message position.
    *
    * Possible values:
    *
    * - `"default"` (default) - Inherits the setting from the [`errorLocation`](#errorLocation) property.
    * - `"top"` - Displays error messages above questions.
    * - `"bottom"` - Displays error messages below questions.
    */
    templateErrorLocation: string;
    /*
    * Use this property to show/hide the numbers in titles in questions inside a dynamic panel.
    * By default the value is "off". You may set it to "onPanel" and the first question inside a dynamic panel will start with 1 or "onSurvey" to include nested questions in dymamic panels into global survey question numbering.
    */
    showQuestionNumbers: string;
    protected notifySurveyOnChildrenVisibilityChanged(): boolean;
    /*
    * Specifies the location of the Delete Panel button relative to panel content.
    *
    * Possible values:
    *
    * - `"bottom"` (default) - Displays the Delete Panel button below panel content.
    * - `"right"` - Displays the Delete Panel button to the right of panel content.
    * @see panelRemoveText
    */
    panelRemoveButtonLocation: string;
    /*
    * Shows the range from 1 to panelCount when renderMode doesn't equal to "list". Set to false to hide this element.
    * @see panelCount
    * @see renderMode
    */
    showRangeInProgress: boolean;
    /*
    * Specifies how to render panels.
    *
    * Possible values:
    *
    * - `"list"` (default) - Renders panels one under the other. [View Demo](https://surveyjs.io/form-library/examples/how-to-use-expressions-in-dynamic-panel/)
    * - `"progressTop"` - Renders each panel as a card and displays a progress bar at the top. [View Demo](https://surveyjs.io/form-library/examples/questiontype-paneldynamic/)
    * - `"progressBottom"` - Renders each panel panel as a card and displays a progress bar at the bottom.
    * - `"progressTopBottom"` - Renders each panel as a card and displays a progress bar at the top and bottom.
    * - `"tab"` - Renders each panel within a tab. Use the [`templateTabTitle`](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#templateTabTitle) to specify a template for tab titles. [View Demo](https://surveyjs.io/form-library/examples/tabbed-interface-for-duplicate-group-option/)
    */
    renderMode: string;
    tabAlign: "center" | "left" | "right";
    readonly isRenderModeList: boolean;
    readonly isRenderModeTab: boolean;
    readonly hasTitleOnLeftTop: boolean;
    setVisibleIndex(value: number): number;
    private setPanelVisibleIndex;
    /*
    * Indicates whether it is possible to add a new panel.
    *
    * This property returns `true` when all of the following conditions apply:
    *
    * - Users are allowed to add new panels (`allowAddPanel` is `true`).
    * - Dynamic Panel or its parent survey is not in read-only state.
    * - `panelCount` is less than `maxPanelCount`.
    * @see allowAddPanel
    * @see isReadOnly
    * @see panelCount
    * @see maxPanelCount
    * @see canRemovePanel
    */
    readonly canAddPanel: boolean;
    /*
    * Indicates whether it is possible to delete panels.
    *
    * This property returns `true` when all of the following conditions apply:
    *
    * - Users are allowed to delete panels (`allowRemovePanel` is `true`).
    * - Dynamic Panel or its parent survey is not in read-only state.
    * - `panelCount` exceeds `minPanelCount`.
    * @see allowRemovePanel
    * @see isReadOnly
    * @see panelCount
    * @see minPanelCount
    * @see canAddPanel
    */
    readonly canRemovePanel: boolean;
    protected rebuildPanels(): void;
    /*
    * If it is not empty, then this value is set to every new panel, including panels created initially, unless the defaultValue is not empty
    * @see defaultValue
    * @see defaultValueFromLastPanel
    */
    defaultPanelValue: any;
    /*
    * Specifies whether default values for a new panel should be copied from the last panel.
    *
    * If you also specify `defaultValue`, it will be merged with the copied values.
    * @see defaultValue
    */
    defaultValueFromLastPanel: boolean;
    protected isDefaultValueEmpty(): boolean;
    protected setDefaultValue(): void;
    readonly isValueArray: boolean;
    isEmpty(): boolean;
    getProgressInfo(): IProgressInfo;
    private isRowEmpty;
    /**
     * Add a new dynamic panel based on the template Panel. It checks if canAddPanel returns true and then calls addPanel method.
     * If a renderMode is different from "list" and the current panel has erros, then
     * @see template
     * @see panelCount
     * @see panels
     * @see canAddPanel
     */
    addPanelUI(): PanelModel;
    private focusNewPanelCallback;
    private focusNewPanel;
    /**
     * Adds a new panel based on the [template](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#template).
     * @param index *(Optional)* An index at which to insert the new panel. `undefined` adds the panel to the end or inserts it after the current panel if [`renderMode`](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#renderMode) is `"tab"`. A negative index (for instance, -1) adds the panel to the end in all cases, regardless of the `renderMode` value.
     * @see panelCount
     * @see panels
     * @see allowAddPanel
     * @see newPanelPosition
     */
    addPanel(index?: number): PanelModel;
    private updateValueOnAddingPanel;
    private canLeaveCurrentPanel;
    private copyValue;
    /**
     * Call removePanel function. Do nothing is canRemovePanel returns false. If confirmDelete set to true, it shows the confirmation dialog first.
     * @param value a panel or panel index
     * @see removePanel
     * @see confirmDelete
     * @see confirmDeleteText
     * @see canRemovePanel
     *
     */
    removePanelUI(value: any): void;
    isRequireConfirmOnDelete(val: any): boolean;
    /**
     * Switches Dynamic Panel to the next panel. Returns `true` in case of success, or `false` if `renderMode` is `"list"` or the current panel contains validation errors.
     * @see renderMode
     */
    goToNextPanel(): boolean;
    /**
     * Switches Dynamic Panel to the previous panel.
     */
    goToPrevPanel(): void;
    /**
     * Removes a dynamic panel from the panels array.
     * @param value a panel or panel index
     * @see panels
     * @see template
     */
    private removedPanelIndex;
    removePanel(value: any): void;
    private getVisualPanelIndex;
    private getPanelVisibleIndexById;
    locStrsChanged(): void;
    clearIncorrectValues(): void;
    clearErrors(): void;
    getQuestionFromArray(name: string, index: number): IQuestion;
    private clearIncorrectValuesInPanel;
    private iscorrectValueWithPostPrefix;
    getSharedQuestionFromArray(name: string, panelIndex: number): Question;
    addConditionObjectsByContext(objects: Array<IConditionObject>, context: any): void;
    protected collectNestedQuestionsCore(questions: Question[], visibleOnly: boolean): void;
    getConditionJson(operator?: string, path?: string): any;
    protected onReadOnlyChanged(): void;
    private updateNoEntriesTextDefaultLoc;
    onSurveyLoad(): void;
    private hasPanelBuildFirstTime;
    private isBuildingPanelsFirstTime;
    private buildPanelsFirstTime;
    private readonly wasNotRenderedInSurvey: any;
    private readonly canBuildPanels: any;
    onFirstRendering(): void;
    localeChanged(): void;
    runCondition(values: HashTable<any>, properties: HashTable<any>): void;
    runTriggers(name: string, value: any): void;
    private reRunCondition;
    protected runPanelsCondition(panels: PanelModel[], values: HashTable<any>, properties: HashTable<any>): void;
    onAnyValueChanged(name: string, questionName: string): void;
    private hasKeysDuplicated;
    private updatePanelsContainsErrors;
    hasErrors(fireCallback?: boolean, rec?: any): boolean;
    protected getContainsErrors(): boolean;
    protected getIsAnswered(): boolean;
    protected clearValueOnHidding(isClearOnHidden: boolean): void;
    clearValueIfInvisible(reason?: string): void;
    private clearValueInPanelsIfInvisible;
    protected getIsRunningValidators(): boolean;
    getAllErrors(): Array<SurveyError>;
    protected getDisplayValueCore(keysAsText: boolean, value: any): any;
    private getPanelDisplayValue;
    private hasErrorInPanels;
    private setOnCompleteAsyncInPanel;
    private isValueDuplicated;
    getPanelActions(panel: PanelModel): Array<IAction>;
    protected createNewPanel(): PanelModel;
    protected createAndSetupNewPanelObject(): PanelModel;
    private getTemplateQuestionTitleLocation;
    getChildErrorLocation(child: Question): string;
    protected createNewPanelObject(): PanelModel;
    private settingPanelCountBasedOnValue;
    private setPanelCountBasedOnValue;
    setQuestionValue(newValue: any): void;
    onSurveyValueChanged(newValue: any): void;
    private isAllPanelsEmpty;
    private panelUpdateValueFromSurvey;
    private panelSurveyValueChanged;
    protected onSetData(): void;
    protected isNewValueCorrect(val: any): boolean;
    getItemIndex(item: ISurveyData): number;
    getVisibleItemIndex(item: ISurveyData): number;
    getPanelItemData(item: ISurveyData): any;
    private isSetPanelItemData;
    private static maxCheckCount;
    setPanelItemData(item: ISurveyData, name: string, val: any): void;
    getRootData(): ISurveyData;
    getPlainData(options?: IPlainDataOptions): IQuestionPlainData;
    updateElementCss(reNew?: boolean): void;
    readonly progressText: string;
    readonly progress: string;
    getRootCss(): string;
    readonly cssHeader: string;
    getPanelWrapperCss(panel: PanelModel): string;
    getPanelRemoveButtonCss(): string;
    getAddButtonCss(): string;
    getPrevButtonCss(): string;
    getNextButtonCss(): string;
    /*
    * A text displayed when Dynamic Panel contains no entries.
    */
    noEntriesText: string;
    readonly locNoEntriesText: LocalizableString;
    getShowNoEntriesPlaceholder(): boolean;
    needResponsiveWidth(): boolean;
    private additionalTitleToolbarValue;
    readonly hasAdditionalTitleToolbar: boolean;
    protected getAdditionalTitleToolbar(): AdaptiveActionContainer | null;
    private footerToolbarValue;
    readonly footerToolbar: ActionContainer;
    legacyNavigation: boolean;
    private updateFooterActionsCallback;
    private updateFooterActions;
    private initFooterToolbar;
    private createTabByPanel;
    private getAdditionalTitleToolbarCss;
    private updateTabToolbarItemsPressedState;
    private updateTabToolbar;
    private addTabFromToolbar;
    private removeTabFromToolbar;
    readonly showLegacyNavigation: boolean;
    readonly showNavigation: boolean;
    showSeparator(index: number): boolean;
    protected calcCssClasses(css: any): any;
}
