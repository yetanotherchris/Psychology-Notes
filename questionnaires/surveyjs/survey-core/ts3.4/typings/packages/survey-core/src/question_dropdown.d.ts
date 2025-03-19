import { QuestionSelectBase } from "./question_baseselect";
import { LocalizableString } from "./localizablestring";
import { ItemValue } from "./itemvalue";
import { PopupModel } from "./popup";
import { EventBase } from "./base";
import { DropdownListModel } from "./dropdownListModel";
/**
 * A class that describes the Dropdown question type.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/questiontype-dropdown/ (linkStyle))
 */
export declare class QuestionDropdownModel extends QuestionSelectBase {
    dropdownListModelValue: DropdownListModel;
    lastSelectedItemValue: ItemValue;
    updateReadOnlyText(): void;
    constructor(name: string);
    locStrsChanged(): void;
    showOptionsCaption: boolean;
    readonly showClearButton: boolean;
    optionsCaption: string;
    /*
    * A placeholder for the input field.
    */
    placeholder: string;
    readonly locPlaceholder: LocalizableString;
    clearCaption: string;
    readonly locClearCaption: LocalizableString;
    getType(): string;
    readonly ariaRole: string;
    readonly selectedItem: ItemValue;
    protected onGetSingleSelectedItem(selectedItemByValue: ItemValue): void;
    supportGoNextPageAutomatic(): boolean;
    private minMaxChoices;
    protected getChoices(): Array<ItemValue>;
    /*
    * Use the `choicesMin`, `choicesMax`, and `choicesStep` properties to generate choice items automatically. For example, the configuration below generates three choice items: [10, 20, 30].
    *
    * ```js
    * "choicesMin": 10,
    * "choicesMax": 30
    * "choicesStep": 10
    * ```
    * @see choicesMax
    * @see choicesStep
    */
    choicesMin: number;
    /*
    * Use the `choicesMin`, `choicesMax`, and `choicesStep` properties to generate choice items automatically. For example, the configuration below generates three choice items: [10, 20, 30].
    *
    * ```js
    * "choicesMin": 10,
    * "choicesMax": 30
    * "choicesStep": 10
    * ```
    * @see choicesMin
    * @see choicesStep
    */
    choicesMax: number;
    /*
    * Use the `choicesMin`, `choicesMax`, and `choicesStep` properties to generate choice items automatically. For example, the configuration below generates three choice items: [10, 20, 30].
    *
    * ```js
    * "choicesMin": 10,
    * "choicesMax": 30
    * "choicesStep": 10
    * ```
    *
    * The default value of the `choicesStep` property is 1.
    * @see choicesMin
    * @see choicesMax
    */
    choicesStep: number;
    autocomplete: string;
    /**
     * Specifies whether to display a button that clears the selected value.
     */
    allowClear: boolean;
    /**
     * Specifies whether users can enter a value into the input field to filter the drop-down list.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/create-dropdown-menu-in-javascript/ (linkStyle))
     * @see searchMode
     * @see [SurveyModel.onChoicesSearch](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onChoicesSearch)
     */
    searchEnabled: boolean;
    /**
     * Specifies a comparison operation used to filter the drop-down list. Applies only if [`searchEnabled`](#searchEnabled) is `true`.
     *
     * Possible values:
     *
     * - `"contains"` (default)
     * - `"startsWith"`
     * @see [SurveyModel.onChoicesSearch](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onChoicesSearch)
     */
    searchMode: "contains" | "startsWith";
    /**
     * Specifies whether to wrap long texts in choice options onto a new line.
     *
     * Default value: `true`
     *
     * Disable this property if you want the texts to be truncated with ellipsis.
     */
    textWrapEnabled: boolean;
    inputHasValue: boolean;
    readOnlyText: string;
    /**
     * Enables lazy loading. If you set this property to `true`, you should implement the Survey's [`onChoicesLazyLoad`](https://surveyjs.io/form-library/documentation/surveymodel#onChoicesLazyLoad) event handler.
     * @see choicesLazyLoadPageSize
     * @see SurveyModel.onChoicesLazyLoad
     */
    choicesLazyLoadEnabled: boolean;
    /**
     * Specifies the number of choice items to load at a time when choices are loaded on demand.
     * @see choicesLazyLoadEnabled
     * @see SurveyModel.onChoicesLazyLoad
     */
    choicesLazyLoadPageSize: number;
    getControlClass(): string;
    protected updateCssClasses(res: any, css: any): void;
    protected calcCssClasses(css: any): any;
    suggestedItem: ItemValue;
    readonly selectedItemLocText: LocalizableString;
    readonly inputFieldComponentName: string;
    readonly showSelectedItemLocText: boolean;
    readonly showInputFieldComponent: boolean;
    private readonly selectedItemText: any;
    private readonly useDropdownList: any;
    dropdownListModel: DropdownListModel;
    readonly popupModel: PopupModel;
    onOpened: EventBase<QuestionDropdownModel>;
    onOpenedCallBack(): void;
    protected onSelectedItemValuesChangedHandler(newValue: any): void;
    protected hasUnknownValue(val: any, includeOther: boolean, isFilteredChoices: boolean, checkEmptyValue: boolean): boolean;
    protected needConvertRenderedOtherToDataValue(): boolean;
    protected getItemIfChoicesNotContainThisValue(value: any, text?: string): any;
    protected onVisibleChoicesChanged(): void;
    protected getFirstInputElementId(): string;
    getInputId(): string;
    clearValue(keepComment?: boolean): void;
    afterRenderCore(el: any): void;
    onClick(e: any): void;
    onKeyUp(event: any): void;
    protected supportEmptyValidation(): boolean;
    protected onBlurCore(event: any): void;
    protected onFocusCore(event: any): void;
    dispose(): void;
}
