import { Base } from "./base";
import { ISurveyData, ISurveyImpl, ISurvey, IPanel, IElement, IQuestion, ITextProcessor, IProgressInfo } from "./base-interfaces";
import { SurveyValidator, IValidatorOwner } from "./validator";
import { Question, IConditionObject } from "./question";
import { QuestionTextModel } from "./question_text";
import { SurveyError } from "./survey-error";
import { ILocalizableOwner, LocalizableString } from "./localizablestring";
import { HashTable } from "./helpers";
import { InputMaskBase } from "./mask/mask_base";
import { PanelLayoutColumnModel } from "./panel-layout-column";
export interface IMultipleTextData extends ILocalizableOwner, IPanel {
    getSurvey(): ISurvey;
    getTextProcessor(): ITextProcessor;
    getAllValues(): any;
    getMultipleTextValue(name: string): any;
    setMultipleTextValue(name: string, value: any): any;
    getItemDefaultValue(name: string): any;
    getIsRequiredText(): string;
}
export declare class MultipleTextEditorModel extends QuestionTextModel {
    get a11y_input_ariaLabel(): string;
    get a11y_input_ariaLabelledBy(): string;
    get a11y_input_ariaDescribedBy(): string;
}
/**
 * A class that describes an [item](https://surveyjs.io/form-library/documentation/api-reference/multiple-text-entry-question-model#items) in a Multiple Textboxes question.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/multiple-text-box-question/ (linkStyle))
 */
export declare class MultipleTextItemModel extends Base implements IValidatorOwner, ISurveyData, ISurveyImpl {
    private editorValue;
    private data;
    valueChangedCallback: (newValue: any) => void;
    constructor(name?: any, title?: string);
    getType(): string;
    get id(): string;
    getOriginalObj(): Base;
    /**
     * An item ID that is not visible to respondents.
     *
     * > Item IDs must be unique.
     * @see title
     */
    get name(): string;
    set name(val: string);
    get question(): Question;
    get editor(): MultipleTextEditorModel;
    protected createEditor(name: string): MultipleTextEditorModel;
    addUsedLocales(locales: Array<string>): void;
    localeChanged(): void;
    locStrsChanged(): void;
    setData(data: IMultipleTextData): void;
    focusIn: () => void;
    /**
     * Marks the item as required. If a respondent leaves this item empty, the question displays a [validation error](#requiredErrorText).
     */
    get isRequired(): boolean;
    set isRequired(val: boolean);
    /**
     * A value passed on to the [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types) attribute of the underlying `<input>` element.
     *
     * Default value: `"text"`
     */
    get inputType(): string;
    set inputType(val: string);
    /**
     * A user-friendly item label to display. If `title` is undefined, [`name`](https://surveyjs.io/form-library/documentation/api-reference/multipletextitemmodel#name) is displayed instead.
     */
    get title(): string;
    set title(val: string);
    get locTitle(): LocalizableString;
    get fullTitle(): string;
    /**
     * The maximum text length measured in characters. Assign 0 if the length should be unlimited.
     *
     * Default value: -1 (inherits the actual value from the `SurveyModel`'s [`maxTextLength`](https://surveyjs.io/form-library/documentation/surveymodel#maxTextLength) property).
     */
    get maxLength(): number;
    set maxLength(val: number);
    getMaxLength(): any;
    /**
     * A placeholder for the input field.
     */
    get placeholder(): string;
    set placeholder(val: string);
    get locPlaceholder(): LocalizableString;
    get placeHolder(): string;
    set placeHolder(val: string);
    get locPlaceHolder(): LocalizableString;
    /**
     * Specifies a custom error message for a [required item](#isRequired).
     */
    get requiredErrorText(): string;
    set requiredErrorText(val: string);
    get locRequiredErrorText(): LocalizableString;
    /**
     * A value passed on to the [`size`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/size) attribute of the underlying `<input>` element.
     *
     * If you want to set a uniform `size` for all text box items, use the [`itemSize`](https://surveyjs.io/form-library/documentation/api-reference/multiple-text-entry-question-model#itemSize) within the Multiple Textboxes configuration.
     */
    get size(): number;
    set size(val: number);
    /**
     * An [expression](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#expressions) used to calculate the default item value.
     * @see minValueExpression
     * @see maxValueExpression
     */
    get defaultValueExpression(): string;
    set defaultValueExpression(val: string);
    /**
     * An [expression](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#expressions) used to calculate the minimum item value.
     * @see maxValueExpression
     * @see defaultValueExpression
     */
    get minValueExpression(): string;
    set minValueExpression(val: string);
    /**
     * An [expression](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#expressions) used to calculate the maximum item value.
     * @see minValueExpression
     * @see defaultValueExpression
     */
    get maxValueExpression(): string;
    set maxValueExpression(val: string);
    /**
     * Item validators.
     *
     * [Data Validation](https://surveyjs.io/form-library/documentation/data-validation (linkStyle))
     */
    get validators(): Array<SurveyValidator>;
    set validators(val: Array<SurveyValidator>);
    getValidators(): Array<SurveyValidator>;
    /**
     * Specifies the type of a mask applied to the input.
     *
     * Possible values:
     *
     * - `"none"` (default)
     * - `"numeric"`
     * - `"currency"`
     * - `"datetime"`
     * - `"pattern"`
     *
     * [View Demo](https://surveyjs.io/form-library/examples/masked-input-fields/ (linkStyle))
     * @see maskSettings
     */
    get maskType(): string;
    set maskType(val: string);
    /**
     * An object with properties that configure the mask applied to the input.
     *
     * Available properties depend on the specified [`maskType`](#maskType) and belong to corresponding classes. Refer to the class APIs for a full list of properties:
     *
     * | `maskType` | Class |
     * | ---------- | ----- |
     * | `"numeric"` | [`InputMaskNumeric`](https://surveyjs.io/form-library/documentation/api-reference/inputmasknumeric) |
     * | `"currency"` | [`InputMaskCurrency`](https://surveyjs.io/form-library/documentation/api-reference/inputmaskcurrency) |
     * | `"datetime"` | [`InputMaskDateTime`](https://surveyjs.io/form-library/documentation/api-reference/inputmaskdatetime) |
     * | `"pattern"` | [`InputMaskPattern`](https://surveyjs.io/form-library/documentation/api-reference/inputmaskpattern) |
     *
     * [View Demo](https://surveyjs.io/form-library/examples/masked-input-fields/ (linkStyle))
     */
    get maskSettings(): InputMaskBase;
    set maskSettings(val: InputMaskBase);
    get inputTextAlignment(): "left" | "right" | "auto";
    set inputTextAlignment(val: "left" | "right" | "auto");
    /**
     * An item value.
     */
    get value(): any;
    set value(value: any);
    isEmpty(): boolean;
    onValueChanged(newValue: any): void;
    getSurveyData(): ISurveyData;
    getSurvey(): ISurvey;
    getTextProcessor(): ITextProcessor;
    getValue(name: string): any;
    setValue(name: string, value: any): void;
    getVariable(name: string): any;
    setVariable(name: string, newValue: any): void;
    getComment(name: string): string;
    setComment(name: string, newValue: string): void;
    getAllValues(): any;
    getFilteredValues(): any;
    getFilteredProperties(): any;
    findQuestionByName(name: string): IQuestion;
    getEditingSurveyElement(): Base;
    getValidatorTitle(): string;
    get validatedValue(): any;
    set validatedValue(val: any);
    getDataFilteredValues(): any;
    getDataFilteredProperties(): any;
}
/**
 * A class that describes the Multiple Text question type.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/questiontype-multipletext/ (linkStyle))
 */
export declare class QuestionMultipleTextModel extends Question implements IMultipleTextData, IPanel {
    static addDefaultItems(question: QuestionMultipleTextModel): void;
    constructor(name: string);
    getType(): string;
    setSurveyImpl(value: ISurveyImpl, isLight?: boolean): void;
    get isAllowTitleLeft(): boolean;
    get hasSingleInput(): boolean;
    get isContainer(): boolean;
    get id(): string;
    set id(val: string);
    onSurveyLoad(): void;
    setQuestionValue(newValue: any, updateIsAnswered?: boolean): void;
    onSurveyValueChanged(newValue: any): void;
    private updateItemsSize;
    private editorsOnSurveyLoad;
    private performForEveryEditor;
    /**
     * Gets or sets an array of [`MultipleTextItemModel`](https://surveyjs.io/form-library/documentation/api-reference/multipletextitemmodel) objects that represent input items.
     *
     * Each object in this array should have at least the following properties:
     *
     * ```js
     * {
     *   "name": any, // A unique value used to identify an input item and save an item value to survey results.
     *   "title": String // An item caption. When `title` is undefined, `name` is used. This property supports Markdown.
     * }
     * ```
     *
     * To enable Markdown support for the `title` property, implement Markdown-to-HTML conversion in the [`onTextMarkdown`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onTextMarkdown) event handler. For an example, refer to the following demo: [Convert Markdown to HTML with Showdown](https://surveyjs.io/form-library/examples/edit-survey-questions-markdown/).
     * @see itemTitleWidth
     * @see addItem
     */
    get items(): Array<MultipleTextItemModel>;
    set items(val: Array<MultipleTextItemModel>);
    /**
     * Adds a new input item.
     * @param name An item name.
     * @param title *(Optional)* An item title.
     * @see items
     */
    addItem(name: string, title?: string): MultipleTextItemModel;
    getItemByName(name: string): MultipleTextItemModel;
    getElementsInDesign(includeHidden?: boolean): Array<IElement>;
    addConditionObjectsByContext(objects: Array<IConditionObject>, context: any): void;
    protected collectNestedQuestionsCore(questions: Question[], visibleOnly: boolean): void;
    getConditionJson(operator?: string, path?: string): any;
    locStrsChanged(): void;
    localeChanged(): void;
    /**
     * Specifies the error message position relative to individual input fields.
     *
     * Possible values:
     *
     * - `"default"` (default) - Inherits the setting from the [`errorLocation`](#errorLocation) property.
     * - `"top"` - Displays error messages above input fields.
     * - `"bottom"` - Displays error messages below input fields.
     */
    get itemErrorLocation(): string;
    set itemErrorLocation(val: string);
    getQuestionErrorLocation(): string;
    get showItemErrorOnTop(): boolean;
    get showItemErrorOnBottom(): boolean;
    getChildErrorLocation(child: Question): string;
    protected isNewValueCorrect(val: any): boolean;
    supportGoNextPageAutomatic(): boolean;
    /**
     * The number of columns used to arrange input items. Accepts the following values: 1, 2, 3, 4, 5.
     *
     * Default value: 1
     */
    get colCount(): number;
    set colCount(val: number);
    /**
     * A value passed on to the [`size`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/size) attribute of the underlying `<input>` elements.
     */
    get itemSize(): number;
    set itemSize(val: number);
    /**
     * Specifies a uniform width for all text box titles. Accepts CSS values.
     *
     * Default value: `""` (the width of each title depends on the title length)
     * @see items
     * @see itemErrorLocation
     */
    get itemTitleWidth(): string;
    set itemTitleWidth(val: string);
    rows: Array<MutlipleTextRow>;
    protected onRowCreated(row: MutlipleTextRow): MutlipleTextRow;
    private calcVisibleRows;
    getRows(): Array<any>;
    private isMultipleItemValueChanging;
    protected onValueChanged(): void;
    protected createTextItem(name: string, title: string): MultipleTextItemModel;
    protected onItemValueChanged(): void;
    runCondition(values: HashTable<any>, properties: HashTable<any>): void;
    protected getIsRunningValidators(): boolean;
    hasErrors(fireCallback?: boolean, rec?: any): boolean;
    getAllErrors(): Array<SurveyError>;
    clearErrors(): void;
    protected getContainsErrors(): boolean;
    protected getIsAnswered(): boolean;
    getProgressInfo(): IProgressInfo;
    protected getDisplayValueCore(keysAsText: boolean, value: any): any;
    protected allowMobileInDesignMode(): boolean;
    getMultipleTextValue(name: string): any;
    setMultipleTextValue(name: string, value: any): void;
    getItemDefaultValue(name: string): any;
    getTextProcessor(): ITextProcessor;
    getAllValues(): any;
    getIsRequiredText(): string;
    addElement(element: IElement, index: number): void;
    removeElement(element: IElement): boolean;
    getQuestionTitleLocation(): string;
    getQuestionTitleWidth(): string;
    getColumsForElement(el: IElement): Array<PanelLayoutColumnModel>;
    updateColumns(): void;
    getQuestionStartIndex(): string;
    getChildrenLayoutType(): string;
    elementWidthChanged(el: IElement): void;
    get elements(): Array<IElement>;
    indexOf(el: IElement): number;
    ensureRowsVisibility(): void;
    validateContainerOnly(): void;
    onQuestionValueChanged(el: IElement): void;
    getItemLabelCss(item: MultipleTextItemModel): string;
    getItemCss(): string;
    getItemTitleCss(): string;
}
export declare class MutlipleTextRow extends Base {
    isVisible: boolean;
    cells: Array<MultipleTextCell>;
}
export declare class MutlipleTextErrorRow extends MutlipleTextRow {
    onAfterCreated(): void;
}
export declare class MultipleTextCell {
    item: MultipleTextItemModel;
    protected question: QuestionMultipleTextModel;
    constructor(item: MultipleTextItemModel, question: QuestionMultipleTextModel);
    isErrorsCell: boolean;
    protected getClassName(): string;
    get className(): string;
}
export declare class MultipleTextErrorCell extends MultipleTextCell {
    isErrorsCell: boolean;
    protected getClassName(): string;
}
