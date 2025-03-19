import { QuestionCheckboxBase } from "./question_baseselect";
import { ItemValue } from "./itemvalue";
import { LocalizableString } from "./localizablestring";
import { IQuestion } from "./base-interfaces";
import { SurveyError } from "./survey-error";
/**
 * A class that describes the Checkboxes question type.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/questiontype-checkbox/ (linkStyle))
 */
export declare class QuestionCheckboxModel extends QuestionCheckboxBase {
    private selectAllItemValue;
    private invisibleOldValues;
    protected defaultSelectedItemValues: Array<ItemValue>;
    constructor(name: string);
    protected getDefaultItemComponent(): string;
    getType(): string;
    protected onCreating(): void;
    protected getFirstInputElementId(): string;
    /*
    * Specifies a property name used to store selected values.
    *
    * Set this property if you want to store selected values in an array of objects instead of an array of primitive values. For example, if you set `valuePropertyName` to `"car"`, the `value` property will contain an array of objects `[{ car: "Ford" }, { car: "Tesla" }]`, not an array of string values `[ "Ford", "Tesla" ]`.
    */
    valuePropertyName: string;
    getQuestionFromArray(name: string, index: number): IQuestion;
    /*
    * Returns the "Select All" choice item. Use this property to change the item's `value` or `text`.
    * @see showSelectAllItem
    */
    readonly selectAllItem: ItemValue;
    /*
    * Gets or sets a caption for the "Select All" choice item.
    * @see showSelectAllItem
    */
    selectAllText: string;
    readonly locSelectAllText: LocalizableString;
    /*
    * Enable this property to display a "Select All" item. When users select it, all other choice items, except "Other" and "None", also become selected.
    * @see selectAll
    * @see isAllSelected
    * @see separateSpecialChoices
    */
    showSelectAllItem: boolean;
    hasSelectAll: boolean;
    /*
    * Returns `true` if all choice items, except "Other" and "None", are selected.
    * @see showSelectAllItem
    */
    isAllSelected: boolean;
    toggleSelectAll(): void;
    /**
     * Selects all choice items, except "Other" and "None".
     *
     * To clear selection, call the `clearValue()` method.
     * @see clearValue
     */
    selectAll(): void;
    clickItemHandler(item: ItemValue, checked?: boolean): void;
    protected isItemSelectedCore(item: ItemValue): boolean;
    private getRealValue;
    readonly isValueArray: boolean;
    /*
    * Specifies the maximum number of selected choices.
    *
    * Default value: 0 (unlimited)
    *
    * > This property only limits the number of choice items that can be selected by users. You can select any number of choice items in code, regardless of the `maxSelectedChoices` value.
    * @see minSelectedChoices
    */
    maxSelectedChoices: number;
    /*
    * Specifies the minimum number of selected choices.
    *
    * Default value: 0 (unlimited)
    *
    * > This property only limits the number of choice items that can be selected by users. You can select any number of choice items in code, regardless of the `minSelectedChoices` value.
    * @see maxSelectedChoices
    */
    minSelectedChoices: number;
    /*
    * An array of selected choice items. Includes the "Other" and "None" choice items if they are selected, but not "Select All". Items are sorted in the order they were selected.
    * @see visibleChoices
    * @see enabledChoices
    */
    readonly selectedChoices: Array<ItemValue>;
    readonly selectedItems: Array<ItemValue>;
    readonly hasFilteredValue: boolean;
    getFilteredName(): any;
    getFilteredValue(): any;
    protected getMultipleSelectedItems(): Array<ItemValue>;
    protected validateItemValues(itemValues: Array<ItemValue>): Array<ItemValue>;
    protected getAnswerCorrectIgnoreOrder(): boolean;
    protected onCheckForErrors(errors: Array<SurveyError>, isOnValueChanged: boolean): void;
    protected onVisibleChoicesChanged(): void;
    protected onEnableItemCallBack(item: ItemValue): boolean;
    protected onAfterRunItemsEnableCondition(): void;
    private updateSelectAllItemProps;
    private getSelectAllEnabled;
    private getVisibleEnableItems;
    private shouldCheckMaxSelectedChoices;
    private checkMinSelectedChoicesUnreached;
    protected getItemClassCore(item: any, options: any): string;
    updateValueFromSurvey(newValue: any, clearData: boolean): void;
    protected setDefaultValue(): void;
    private addIntoInvisibleOldValues;
    protected hasValueToClearIncorrectValues(): boolean;
    protected setNewValue(newValue: any): void;
    protected getIsMultipleValue(): boolean;
    protected getCommentFromValue(newValue: any): string;
    protected setOtherValueIntoValue(newValue: any): any;
    private getFirstUnknownIndex;
    protected removeNoneItemsValues(value: Array<any>, newValue: Array<any>): void;
    private noneIndexInArray;
    protected canUseFilteredChoices(): boolean;
    protected supportSelectAll(): boolean;
    protected addNonChoicesItems(dict: Array<{
        index: number;
        item: ItemValue;
    }>, isAddAll: boolean): void;
    protected isBuiltInChoice(item: ItemValue): boolean;
    isItemInList(item: ItemValue): boolean;
    protected getDisplayValueEmpty(): string;
    protected getDisplayValueCore(keysAsText: boolean, value: any): any;
    protected clearIncorrectValuesCore(): void;
    protected clearDisabledValuesCore(): void;
    private isChangingValueOnClearIncorrect;
    private clearIncorrectAndDisabledValues;
    private restoreValuesFromInvisible;
    getConditionJson(operator?: string, path?: string): any;
    isAnswerCorrect(): boolean;
    protected setDefaultValueWithOthers(): void;
    protected getIsItemValue(val: any, item: ItemValue): boolean;
    protected valueFromData(val: any): any;
    protected rendredValueFromData(val: any): any;
    protected rendredValueToData(val: any): any;
    protected convertValueFromObject(val: any): any;
    protected convertValueToObject(val: any): any;
    protected renderedValueFromDataCore(val: any): any;
    protected rendredValueToDataCore(val: any): any;
    protected selectOtherValueFromComment(val: boolean): void;
    readonly checkBoxSvgPath: string;
    readonly isNewA11yStructure: boolean;
    readonly a11y_input_ariaRole: string;
    readonly a11y_input_ariaRequired: "true" | "false";
}
