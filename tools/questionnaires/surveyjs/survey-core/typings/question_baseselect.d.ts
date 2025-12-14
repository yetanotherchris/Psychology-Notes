import { SurveyError } from "./survey-error";
import { ISurveyImpl, ISurvey, ISurveyData, IPlainDataOptions } from "./base-interfaces";
import { IQuestionPlainData, Question } from "./question";
import { ItemValue } from "./itemvalue";
import { ChoicesRestful } from "./choicesRestful";
import { LocalizableString } from "./localizablestring";
import { HashTable } from "./helpers";
/**
 * A base class for multiple-choice question types ([Checkboxes](https://surveyjs.io/form-library/documentation/questioncheckboxmodel), [Dropdown](https://surveyjs.io/form-library/documentation/questiondropdownmodel), [Radio Button Group](https://surveyjs.io/form-library/documentation/questionradiogroupmodel), etc.).
 */
export declare class QuestionSelectBase extends Question {
    visibleChoicesChangedCallback: () => void;
    loadedChoicesFromServerCallback: () => void;
    private filteredChoicesValue;
    private conditionChoicesVisibleIfRunner;
    private conditionChoicesEnableIfRunner;
    private prevOtherValue;
    private otherItemValue;
    private choicesFromUrl;
    private cachedValueForUrlRequests;
    private isChoicesLoaded;
    private enableOnLoadingChoices;
    private noneItemValue;
    private refuseItemValue;
    private dontKnowItemValue;
    private newItemValue;
    private canShowOptionItemCallback;
    private waitingGetChoiceDisplayValueResponse;
    private get waitingChoicesByURL();
    protected selectedItemValues: any;
    constructor(name: string);
    getType(): string;
    dispose(): void;
    protected resetDependedQuestion(): void;
    get otherId(): string;
    protected getCommentElementsId(): Array<string>;
    protected getItemValueType(): string;
    createItemValue(value: any, text?: string): ItemValue;
    get isUsingCarryForward(): boolean;
    get carryForwardQuestionType(): string;
    private setCarryForwardQuestionType;
    get isUsingRestful(): boolean;
    updateIsUsingRestful(): void;
    supportGoNextPageError(): boolean;
    isLayoutTypeSupported(layoutType: string): boolean;
    localeChanged(): void;
    locStrsChanged(): void;
    private prevOtherErrorValue;
    private updatePrevOtherErrorValue;
    get otherValue(): string;
    set otherValue(val: string);
    protected get otherValueCore(): string;
    protected set otherValueCore(val: string);
    /**
     * Returns the "Other" choice item. Use this property to change the item's `value` or `text`.
     * @see showOtherItem
     */
    get otherItem(): ItemValue;
    /**
     * Returns `true` if the "Other" choice item is selected.
     * @see showOtherItem
     */
    get isOtherSelected(): boolean;
    get isNoneSelected(): boolean;
    /**
     * Specifies whether to display the "None" choice item.
     *
     * When users select the "None" item in multi-select questions, all other items become unselected.
     * @see noneItem
     * @see noneText
     * @see [settings.noneItemValue](https://surveyjs.io/form-library/documentation/api-reference/settings#noneItemValue)
     * @see [settings.specialChoicesOrder](https://surveyjs.io/form-library/documentation/api-reference/settings#specialChoicesOrder)
     */
    get showNoneItem(): boolean;
    set showNoneItem(val: boolean);
    get hasNone(): boolean;
    set hasNone(val: boolean);
    /**
     * Returns the "None" choice item. Use this property to change the item's `value` or `text`.
     * @see showNoneItem
     */
    get noneItem(): ItemValue;
    /**
     * Gets or sets a caption for the "None" choice item.
     * @see showNoneItem
     */
    get noneText(): string;
    set noneText(val: string);
    get locNoneText(): LocalizableString;
    /**
     * Specifies whether to display the "Refuse to answer" choice item.
     *
     * When users select the "Refuse to answer" item in multi-select questions, all other items become unselected.
     * @see refuseItem
     * @see refuseItemText
     * @see [settings.refuseItemValue](https://surveyjs.io/form-library/documentation/api-reference/settings#refuseItemValue)
     * @see [settings.specialChoicesOrder](https://surveyjs.io/form-library/documentation/api-reference/settings#specialChoicesOrder)
     */
    get showRefuseItem(): boolean;
    set showRefuseItem(val: boolean);
    /**
     * Returns the "Refuse to answer" choice item. Use this property to change the item's `value` or `text`.
     * @see showRefuseItem
     */
    get refuseItem(): ItemValue;
    /**
     * Gets or sets a caption for the "Refuse to answer" choice item.
     * @see showRefuseItem
     */
    get refuseText(): string;
    set refuseText(val: string);
    get locRefuseText(): LocalizableString;
    /**
     * Specifies whether to display the "Don't know" choice item.
     *
     * When users select the "Don't know" item in multi-select questions, all other items become unselected.
     * @see dontKnowItem
     * @see dontKnowItemText
     * @see [settings.dontKnowItemValue](https://surveyjs.io/form-library/documentation/api-reference/settings#dontKnowItemValue)
     * @see [settings.specialChoicesOrder](https://surveyjs.io/form-library/documentation/api-reference/settings#specialChoicesOrder)
     */
    get showDontKnowItem(): boolean;
    set showDontKnowItem(val: boolean);
    /**
     * Returns the "Don't know" choice item. Use this property to change the item's `value` or `text`.
     * @see showDontKnowItem
     */
    get dontKnowItem(): ItemValue;
    /**
     * Gets or sets a caption for the "Don't know" choice item.
     * @see showDontKnowItem
     */
    get dontKnowText(): string;
    set dontKnowText(val: string);
    get locDontKnowText(): LocalizableString;
    private createDefaultItem;
    /**
     * A Boolean expression that is evaluated against each choice item. If the expression evaluates to `false`, the choice item becomes hidden.
     *
     * A survey parses and runs all expressions on startup. If any values used in the expression change, the survey re-evaluates it.
     *
     * Use the `{item}` placeholder to reference the current choice item in the expression.
     *
     * Refer to the following help topic for more information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
     * @see visibleIf
     * @see choicesEnableIf
     */
    get choicesVisibleIf(): string;
    set choicesVisibleIf(val: string);
    /**
     * A Boolean expression that is evaluated against each choice item. If the expression evaluates to `false`, the choice item becomes read-only.
     *
     * A survey parses and runs all expressions on startup. If any values used in the expression change, the survey re-evaluates it.
     *
     * Use the `{item}` placeholder to reference the current choice item in the expression.
     *
     * Refer to the following help topic for more information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
     * @see enableIf
     * @see choicesVisibleIf
     */
    get choicesEnableIf(): string;
    set choicesEnableIf(val: string);
    surveyChoiceItemVisibilityChange(): void;
    runCondition(values: HashTable<any>, properties: HashTable<any>): void;
    protected isTextValue(): boolean;
    private isSettingDefaultValue;
    protected setDefaultValue(): void;
    protected getIsMultipleValue(): boolean;
    protected convertDefaultValue(val: any): any;
    protected filterItems(): boolean;
    protected runItemsCondition(values: HashTable<any>, properties: HashTable<any>): boolean;
    protected runItemsEnableCondition(values: HashTable<any>, properties: HashTable<any>): any;
    protected onAfterRunItemsEnableCondition(): void;
    protected onEnableItemCallBack(item: ItemValue): boolean;
    protected onSelectedItemValuesChangedHandler(newValue: any): void;
    protected getItemIfChoicesNotContainThisValue(value: any, text?: string): any;
    protected getSingleSelectedItem(): ItemValue;
    protected onGetSingleSelectedItem(selectedItemByValue: ItemValue): void;
    protected getMultipleSelectedItems(): Array<ItemValue>;
    private setConditionalChoicesRunner;
    private setConditionalEnableChoicesRunner;
    private canSurveyChangeItemVisibility;
    private changeItemVisibility;
    private runConditionsForItems;
    protected getHasOther(val: any): boolean;
    protected getIsItemValue(val: any, item: ItemValue): boolean;
    get validatedValue(): any;
    protected createRestful(): ChoicesRestful;
    private setNewRestfulProperty;
    get autoOtherMode(): boolean;
    set autoOtherMode(val: boolean);
    protected getQuestionComment(): string;
    protected selectOtherValueFromComment(val: boolean): void;
    private isSettingComment;
    protected setQuestionComment(newValue: string): void;
    private onUpdateCommentOnAutoOtherMode;
    private setOtherValueInternally;
    clearValue(keepComment?: boolean): void;
    updateCommentFromSurvey(newValue: any): any;
    get renderedValue(): any;
    set renderedValue(val: any);
    private makeCommentEmpty;
    protected setQuestionValue(newValue: any, updateIsAnswered?: boolean, updateComment?: boolean): void;
    protected setValueCore(newValue: any): void;
    protected setNewValue(newValue: any): void;
    protected valueFromData(val: any): any;
    protected rendredValueFromData(val: any): any;
    protected rendredValueToData(val: any): any;
    protected renderedValueFromDataCore(val: any): any;
    protected rendredValueToDataCore(val: any): any;
    protected needConvertRenderedOtherToDataValue(): boolean;
    protected getIsQuestionReady(): boolean;
    protected updateSelectedItemValues(): void;
    private setCustomValuesIntoItems;
    protected hasUnknownValue(val: any, includeOther?: boolean, isFilteredChoices?: boolean, checkEmptyValue?: boolean): boolean;
    protected hasUnknownValueItem(val: any, includeOther?: boolean, isFilteredChoices?: boolean, checkEmptyValue?: boolean): boolean;
    protected isValueDisabled(val: any): boolean;
    /**
     * If the clearIncorrectValuesCallback is set, it is used to clear incorrect values instead of default behaviour.
     */
    clearIncorrectValuesCallback: () => void;
    /**
     * Configures access to a RESTful service that returns choice items. Refer to the [`ChoicesRestful`](https://surveyjs.io/form-library/documentation/choicesrestful) class description for more information. You can also specify additional application-wide settings using the [`settings.web`](https://surveyjs.io/form-library/documentation/api-reference/settings#web) object.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/dropdown-menu-load-data-from-restful-service/ (linkStyle))
     * @see choices
     * @see [settings.specialChoicesOrder](https://surveyjs.io/form-library/documentation/api-reference/settings#specialChoicesOrder)
     */
    get choicesByUrl(): ChoicesRestful;
    set choicesByUrl(val: ChoicesRestful);
    /**
     * Gets or sets choice items. This property accepts an array of objects with the following structure:
     *
     * ```js
     * {
     *   "value": any, // A unique value to be saved in the survey results.
     *   "text": String, // A display text. This property supports Markdown. When `text` is undefined, `value` is used.
     *   "imageLink": String // A link to the image or video that represents this choice value. Applies only to Image Picker questions.
     *   "customProperty": any // Any property that you find useful.
     * }
     * ```
     *
     * To enable Markdown support for the `text` property, implement Markdown-to-HTML conversion in the [onTextMarkdown](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onTextMarkdown) event handler. For an example, refer to the following demo: [Convert Markdown to HTML with Showdown](https://surveyjs.io/form-library/examples/edit-survey-questions-markdown/).
     *
     * If you add custom properties, refer to the following help topic to learn how to serialize them into JSON: [Add Custom Properties to Property Grid](https://surveyjs.io/survey-creator/documentation/property-grid#add-custom-properties-to-the-property-grid).
     *
     * If you need to specify only the `value` property, you can set the `choices` property to an array of primitive values, for example, `[ "item1", "item2", "item3" ]`. These values are both saved in survey results and used as display text.
     * @see choicesByUrl
     * @see choicesFromQuestion
     * @see [settings.specialChoicesOrder](https://surveyjs.io/form-library/documentation/api-reference/settings#specialChoicesOrder)
     */
    get choices(): Array<any>;
    set choices(newValue: Array<any>);
    /**
     * Copies choice items from a specified question. Accepts a question name.
     *
     * If you specify this property, the `choices`, `choicesVisibleIf`, `choicesEnableIf`, and `choicesOrder` properties do not apply because their values are copied.
     *
     * In addition, you can specify the `choicesFromQuestionMode` property if you do not want to copy all choice items.
     * @see choicesFromQuestionMode
     * @see choices
     */
    get choicesFromQuestion(): string;
    set choicesFromQuestion(val: string);
    private isLockVisibleChoices;
    /**
     * Specifies which choice items to copy from another question. Applies only when the `choicesFromQuestion` property is specified.
     *
     * Possible values:
     *
     * - `"all"` (default) - Copies all choice items.
     * - `"selected"` - Copies only selected choice items.
     * - `"unselected"` - Copies only unselected choice items.
     *
     * Use the `visibleChoices` property to access copied choice items.
     * @see choicesFromQuestion
     * @see visibleChoices
     */
    get choicesFromQuestionMode(): string;
    set choicesFromQuestionMode(val: string);
    /**
     * Specifies which matrix column or dynamic panel question supplies choice values. Use this property to construct choice items based on cell values in Dynamic Matrix and question values in Dynamic Panel.
     *
     * Each choice item consists of a value saved in survey results and a text displayed in the UI. To construct a choice item, assign the `name` of a Dynamic Matrix or Dynamic Panel to the [`choicesFromQuestion`](#choicesFromQuestion) property and specify which dynamic panel question or matrix column supplies values and which provides texts. Use the `choiceValuesFromQuestion` and [`choiceTextsFromQuestion`](#choiceTextsFromQuestion) properties for this purpose. If a choice text is empty, a choice value is used as a display text and saved in survey results.
     */
    get choiceValuesFromQuestion(): string;
    set choiceValuesFromQuestion(val: string);
    /**
     * Specifies which matrix column or dynamic panel question supplies choice texts. Use this property to construct choice items based on cell values in Dynamic Matrix and question values in Dynamic Panel.
     *
     * Each choice item consists of a value saved in survey results and a text displayed in the UI. To construct a choice item, assign the `name` of a Dynamic Matrix or Dynamic Panel to the [`choicesFromQuestion`](#choicesFromQuestion) property and specify which dynamic panel question or matrix column supplies values and which provides texts. Use the [`choiceValuesFromQuestion`](#choiceValuesFromQuestion) and `choiceTextsFromQuestion` properties for this purpose. If a choice text is empty, a choice value is used as a display text and saved in survey results.
     */
    get choiceTextsFromQuestion(): string;
    set choiceTextsFromQuestion(val: string);
    /**
     * Specifies whether to hide the question if no choice items are visible.
     *
     * This property is useful if you show or hide choice items at runtime based on a [condition](https://surveyjs.io/form-library/documentation/questionselectbase#choicesVisibleIf).
     */
    get hideIfChoicesEmpty(): boolean;
    set hideIfChoicesEmpty(val: boolean);
    /**
     * Specifies whether to keep values that cannot be assigned to this question, for example, choices unlisted in the `choices` array.
     *
     * > This property cannot be specified in the survey JSON schema. Use dot notation to specify it.
     * @see clearIncorrectValues
     */
    get keepIncorrectValues(): boolean;
    set keepIncorrectValues(val: boolean);
    get storeOthersAsComment(): any;
    set storeOthersAsComment(val: any);
    protected hasOtherChanged(): void;
    /**
     * Specifies the sort order of choice items.
     *
     * Possible values:
     *
     * - `"none"` (default) - Preserves the original order of choice items.
     * - `"asc"`- Sorts choice items in ascending order.
     * - `"desc"`- Sorts choice items in ascending order.
     * - `"random"` - Displays choice items in random order.
     * @see [settings.specialChoicesOrder](https://surveyjs.io/form-library/documentation/api-reference/settings#specialChoicesOrder)
     */
    get choicesOrder(): string;
    set choicesOrder(val: string);
    /**
     * Gets or sets a caption for the "Other" choice item.
     * @see showOtherItem
     */
    get otherText(): string;
    set otherText(val: string);
    get locOtherText(): LocalizableString;
    /**
     * Displays the "Select All", "None", and "Other" choices on individual rows.
     * @see showNoneItem
     * @see showOtherItem
     * @see [settings.specialChoicesOrder](https://surveyjs.io/form-library/documentation/api-reference/settings#specialChoicesOrder)
     */
    separateSpecialChoices: boolean;
    /**
     * A placeholder for the comment area. Applies when the `showOtherItem` or `showCommentArea` property is `true`.
     * @see showOtherItem
     * @see showCommentArea
     */
    otherPlaceholder: string;
    get otherPlaceHolder(): string;
    set otherPlaceHolder(newValue: string);
    /**
     * Gets or sets an error message displayed when users select the "Other" choice item but leave the comment area empty.
     * @see showOtherItem
     */
    get otherErrorText(): string;
    set otherErrorText(val: string);
    get locOtherErrorText(): LocalizableString;
    /**
     * An array of visible choice items. Includes the "Select All", "Other", and "None" choice items if they are visible. Items are sorted according to the `choicesOrder` value.
     * @see showNoneItem
     * @see showOtherItem
     * @see choicesOrder
     * @see choices
     * @see enabledChoices
     */
    get visibleChoices(): Array<ItemValue>;
    /**
     * An array of choice items with which users can interact. Includes the "Select All", "Other", and "None" choice items if they are not disabled. Items are sorted according to the `choicesOrder` value.
     * @see showNoneItem
     * @see showOtherItem
     * @see choicesOrder
     * @see choices
     * @see visibleChoices
     */
    get enabledChoices(): Array<ItemValue>;
    protected updateVisibleChoices(): void;
    private calcVisibleChoices;
    protected canUseFilteredChoices(): boolean;
    setCanShowOptionItemCallback(func: (item: ItemValue) => boolean): void;
    get newItem(): ItemValue;
    protected addToVisibleChoices(items: Array<ItemValue>, isAddAll: boolean): void;
    protected addNewItemToVisibleChoices(items: Array<ItemValue>, isAddAll: boolean): void;
    protected addNonChoicesItems(dict: Array<{
        index: number;
        item: ItemValue;
    }>, isAddAll: boolean): void;
    protected addNonChoiceItem(dict: Array<{
        index: number;
        item: ItemValue;
    }>, item: ItemValue, isAddAll: boolean, showItem: boolean, order: Array<number>): void;
    protected canShowOptionItem(item: ItemValue, isAddAll: boolean, hasItem: boolean): boolean;
    isItemInList(item: ItemValue): boolean;
    protected get isAddDefaultItems(): boolean;
    getPlainData(options?: IPlainDataOptions): IQuestionPlainData;
    protected getDisplayValueCore(keysAsText: boolean, value: any): any;
    protected getDisplayValueEmpty(): string;
    private getChoicesDisplayValue;
    protected getDisplayArrayValue(keysAsText: boolean, value: any, onGetValueCallback?: (index: number) => any): string;
    private getItemDisplayValue;
    private getFilteredChoices;
    protected get activeChoices(): Array<ItemValue>;
    get isMessagePanelVisible(): boolean;
    set isMessagePanelVisible(val: boolean);
    private get isEmptyActiveChoicesInDesign();
    getCarryForwardQuestion(data?: ISurveyData): Question;
    protected getIsReadyDependsOn(): Array<Question>;
    private getQuestionWithChoices;
    private carryForwardQuestion;
    private findCarryForwardQuestion;
    private getQuestionWithChoicesCore;
    private getQuestionWithArrayValue;
    private getChoicesFromArrayQuestion;
    private getValueKeyName;
    private getChoicesFromSelectQuestion;
    private copyChoiceItem;
    protected get hasActiveChoices(): boolean;
    protected isBuiltInChoice(item: ItemValue): boolean;
    isNoneItem(item: ItemValue): boolean;
    protected getNoneItems(): Array<ItemValue>;
    protected getChoices(): Array<ItemValue>;
    supportOther(): boolean;
    supportNone(): boolean;
    supportRefuse(): boolean;
    supportDontKnow(): boolean;
    protected isSupportProperty(propName: string): boolean;
    protected onCheckForErrors(errors: Array<SurveyError>, isOnValueChanged: boolean): void;
    setSurveyImpl(value: ISurveyImpl, isLight?: boolean): void;
    protected setSurveyCore(value: ISurvey): void;
    getStoreOthersAsComment(): boolean;
    onSurveyLoad(): void;
    onAnyValueChanged(name: string, questionName: string): void;
    updateValueFromSurvey(newValue: any, clearData: boolean): void;
    protected getCommentFromValue(newValue: any): string;
    protected setOtherValueIntoValue(newValue: any): any;
    onOtherValueInput(event: any): void;
    onOtherValueChange(event: any): void;
    private isRunningChoices;
    private runChoicesByUrl;
    private isFirstLoadChoicesFromUrl;
    protected onBeforeSendRequest(): void;
    protected onLoadChoicesFromUrl(array: Array<ItemValue>): void;
    private canAvoidSettChoicesFromUrl;
    private setChoicesFromUrl;
    private createCachedValueForUrlRequests;
    private updateCachedValueForUrlRequests;
    private isUpdatingChoicesDependedQuestions;
    protected updateChoicesDependedQuestions(): void;
    protected updateDependedQuestion(): void;
    onSurveyValueChanged(newValue: any): void;
    protected onVisibleChoicesChanged(): void;
    protected isVisibleCore(): boolean;
    private sortVisibleChoices;
    private sortArray;
    private randomizeArray;
    private get hasChoicesUrl();
    clearIncorrectValues(): void;
    private canClearIncorrectValues;
    protected hasValueToClearIncorrectValues(): boolean;
    protected clearValueIfInvisibleCore(reason: string): void;
    /**
     * Returns `true` if a passed choice item is selected.
     *
     * To obtain a choice item to check, use the `noneItem` or `otherItem` property or the `choices` array.
     * @param item A choice item.
     * @see noneItem
     * @see otherItem
     * @see choices
     */
    isItemSelected(item: ItemValue): boolean;
    protected isItemSelectedCore(item: ItemValue): boolean;
    private clearDisabledValues;
    protected clearIncorrectValuesCore(): void;
    protected canClearValueAnUnknown(val: any): boolean;
    protected clearDisabledValuesCore(): void;
    clearUnusedValues(): void;
    getColumnClass(): string;
    getItemIndex(item: any): number;
    getItemClass(item: any): string;
    protected getCurrentColCount(): number;
    protected getItemClassCore(item: any, options: any): string;
    getLabelClass(item: ItemValue): string;
    getControlLabelClass(item: ItemValue): string;
    private headItemsCount;
    private footItemsCount;
    get headItems(): ItemValue[];
    get footItems(): ItemValue[];
    get dataChoices(): ItemValue[];
    get bodyItems(): ItemValue[];
    get hasHeadItems(): boolean;
    get hasFootItems(): boolean;
    get columns(): any[];
    get hasColumns(): boolean;
    get rowLayout(): boolean;
    get blockedRow(): boolean;
    choicesLoaded(): void;
    getItemValueWrapperComponentName(item: ItemValue): string;
    getItemValueWrapperComponentData(item: ItemValue): any;
    ariaItemChecked(item: ItemValue): "true" | "false";
    isOtherItem(item: ItemValue): boolean;
    get itemSvgIcon(): string;
    getSelectBaseRootCss(): string;
    protected allowMobileInDesignMode(): boolean;
    getAriaItemLabel(item: ItemValue): string;
    getItemId(item: ItemValue): string;
    get questionName(): string;
    getItemEnabled(item: ItemValue): boolean;
    protected rootElement: HTMLElement;
    afterRender(el: HTMLElement): void;
    beforeDestroyQuestionElement(el: HTMLElement): void;
    private focusOtherComment;
    private prevIsOtherSelected;
    protected onValueChanged(): void;
    protected getDefaultItemComponent(): string;
    /**
     * The name of a component used to render items.
     *
     * [View Dropdown Demo](https://surveyjs.io/form-library/examples/dropdown-box-with-custom-items/ (linkStyle))
     *
     * [View Ranking Demo](https://surveyjs.io/form-library/examples/dropdown-box-with-custom-items/ (linkStyle))
     */
    get itemComponent(): string;
    set itemComponent(value: string);
    protected updateCssClasses(res: any, css: any): void;
    protected calcCssClasses(css: any): any;
}
/**
 * A base class for multiple-selection question types that can display choice items in multiple columns ([Checkbox](https://surveyjs.io/form-library/documentation/questioncheckboxmodel), [Radiogroup](https://surveyjs.io/form-library/documentation/questionradiogroupmodel), [Image Picker](https://surveyjs.io/form-library/documentation/questionimagepickermodel)).
 */
export declare class QuestionCheckboxBase extends QuestionSelectBase {
    colCountChangedCallback: () => void;
    constructor(name: string);
    /**
     * Gets or sets the number of columns used to arrange choice items.
     *
     * Set this property to 0 if you want to display all items in one line. The default value depends on the available width.
     * @see separateSpecialChoices
     */
    get colCount(): number;
    set colCount(value: number);
    protected onParentChanged(): void;
    protected onParentQuestionChanged(): void;
    protected getSearchableItemValueKeys(keys: Array<string>): void;
}
