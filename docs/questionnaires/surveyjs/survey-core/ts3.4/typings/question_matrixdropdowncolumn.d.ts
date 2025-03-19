import { Question } from "./question";
import { Base } from "./base";
import { ISurvey, IWrapperObject } from "./base-interfaces";
import { ItemValue } from "./itemvalue";
import { ILocalizableOwner, LocalizableString } from "./localizablestring";
import { SurveyValidator } from "./validator";
import { MatrixDropdownRowModelBase } from "./question_matrixdropdownbase";
export interface IMatrixColumnOwner extends ILocalizableOwner {
    getRequiredText(): string;
    hasChoices(): boolean;
    onColumnPropertyChanged(column: MatrixDropdownColumn, name: string, newValue: any): void;
    onColumnItemValuePropertyChanged(column: MatrixDropdownColumn, propertyName: string, obj: ItemValue, name: string, newValue: any, oldValue: any): void;
    onShowInMultipleColumnsChanged(column: MatrixDropdownColumn): void;
    onColumnVisibilityChanged(column: MatrixDropdownColumn): void;
    getCellType(): string;
    getCustomCellType(column: MatrixDropdownColumn, row: MatrixDropdownRowModelBase, cellType: string): string;
    onColumnCellTypeChanged(column: MatrixDropdownColumn): void;
    getCellAriaLabel(rowTitle: string, columnTitle: string): string;
}
export declare var matrixDropdownColumnTypes: any;
/**
 * An auxiliary class that describes a column in a [Multi-Select Matrix](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-with-dropdown-list) or [Dynamic Matrix](https://surveyjs.io/form-library/documentation/api-reference/dynamic-matrix-table-question-model).
 *
 * You can get an object of this class from the [`columns`](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-with-dropdown-list#columns) array or by calling the [`getColumnByName()`](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-with-dropdown-list#getColumnByName) method on a matrix instance.
 */
export declare class MatrixDropdownColumn extends Base implements ILocalizableOwner, IWrapperObject {
    static getColumnTypes(): Array<string>;
    private templateQuestionValue;
    private colOwnerValue;
    private indexValue;
    private _hasVisibleCell;
    private _visiblechoices;
    constructor(name: string, title?: string);
    getOriginalObj(): Base;
    getClassNameProperty(): string;
    getSurvey(live?: boolean): ISurvey;
    endLoadingFromJson(): void;
    getDynamicPropertyName(): string;
    getDynamicType(): string;
    colOwner: IMatrixColumnOwner;
    locStrsChanged(): void;
    addUsedLocales(locales: Array<string>): void;
    readonly index: number;
    setIndex(val: number): void;
    getType(): string;
    /*
    * Specifies the type of column cells.
    *
    * Possible values:
    *
    * - [`"dropdown"`](https://surveyjs.io/form-library/documentation/api-reference/dropdown-menu-model)
    * - [`"checkbox"`](https://surveyjs.io/form-library/documentation/api-reference/checkbox-question-model)
    * - [`"radiogroup"`](https://surveyjs.io/form-library/documentation/api-reference/radio-button-question-model)
    * - [`"tagbox"`](https://surveyjs.io/form-library/documentation/api-reference/dropdown-tag-box-model)
    * - [`"text"`](https://surveyjs.io/form-library/documentation/api-reference/text-entry-question-model)
    * - [`"comment"`](https://surveyjs.io/form-library/documentation/api-reference/comment-field-model)
    * - [`"boolean"`](https://surveyjs.io/form-library/documentation/api-reference/boolean-question-model)
    * - [`"expression"`](https://surveyjs.io/form-library/documentation/api-reference/expression-model)
    * - [`"rating"`](https://surveyjs.io/form-library/documentation/api-reference/rating-scale-question-model)
    * - `"default"` (default) - Inherits the input type from the [`cellType`](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-with-dropdown-list#cellType) property specified for the parent matrix.
    *
    * The input types are based upon standalone question types. Depending on the selected input type, the matrix column can have additional configuration properties inherited from the corresponding question type. For instance, Dropdown, Checkboxes, Radio Button Group, and Tag Box columns can specify the [`choices`](https://surveyjs.io/form-library/documentation/api-reference/radio-button-question-model#choices) array, similar to the question types upon which they are based. Refer to the API Reference of these question types for a full list of available properties.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/aggregate-data-within-form/ (linkStyle))
    */
    cellType: string;
    readonly templateQuestion: Question;
    readonly value: string;
    readonly isVisible: boolean;
    readonly isColumnVisible: boolean;
    /*
    * Gets or sets column visibility.
    *
    * If you want to display or hide a column based on a condition, specify the [`visibleIf`](#visibleIf) property.
    * @see isRequired
    * @see readOnly
    */
    visible: boolean;
    hasVisibleCell: boolean;
    getVisibleMultipleChoices(): Array<ItemValue>;
    readonly getVisibleChoicesInCell: Array<any>;
    setVisibleChoicesInCell(val: Array<any>): void;
    readonly isFilteredMultipleColumns: boolean;
    /*
    * A column ID that is not visible to respondents.
    *
    * > Column IDs must be unique.
    * @see title
    */
    name: string;
    /*
    * A user-friendly column caption to display. If `title` is undefined, [`name`](#name) is displayed instead.
    */
    title: string;
    readonly locTitle: LocalizableString;
    readonly fullTitle: string;
    /*
    * Marks the column as required. If a respondent skips any cell in a required column, the matrix displays a [validation error](#requiredErrorText).
    *
    * If you want to mark the column as required based on a condition, specify the [`requiredIf`](#requiredIf) property.
    * @see visible
    * @see readOnly
    */
    isRequired: boolean;
    isRenderedRequired: boolean;
    updateIsRenderedRequired(val: boolean): void;
    readonly requiredText: string;
    /*
    * Specifies a custom error message for a required column.
    * @see isRequired
    */
    requiredErrorText: string;
    readonly locRequiredErrorText: LocalizableString;
    /*
    * Makes the column read-only.
    *
    * If you want to switch the column to the read-only state based on a condition, specify the [`enableIf`](#enableIf) property.
    * @see visible
    * @see isRequired
    */
    readOnly: boolean;
    hasOther: boolean;
    /*
    * A Boolean expression. If it evaluates to `false`, this column becomes hidden.
    *
    * Refer to the following help topic for more information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
    * @see visible
    */
    visibleIf: string;
    /*
    * A Boolean expression. If it evaluates to `false`, this column becomes read-only.
    *
    * Refer to the following help topic for more information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
    * @see readOnly
    */
    enableIf: string;
    /*
    * A Boolean expression. If it evaluates to `true`, this column becomes required.
    *
    * Refer to the following help topic for more information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
    * @see isRequired
    */
    requiredIf: string;
    /*
    * A Boolean expression. If it evaluates to `true`, all cells in this column are set to a value calculated using the [`defaultValueExpression`](#defaultValueExpression).
    *
    * [Expressions](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#expressions (linkStyle))
    * @see setValueIf
    */
    resetValueIf: string;
    /*
    * An expression used to calculate the column's default value. This expression applies to all cells of this column until the cell value is specified by an end user or programmatically.
    *
    * [Expressions](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#expressions (linkStyle))
    * @see setValueExpression
    */
    defaultValueExpression: string;
    /*
    * A Boolean expression. If it evaluates to `true`, all cells in this column are set to a value calculated using the [`setValueExpression`](#setValueExpression).
    *
    * [Expressions](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#expressions (linkStyle))
    * @see resetValueIf
    */
    setValueIf: string;
    /*
    * An expression used to calculate a value for all column cells.
    *
    * You can use `setValueExpression` as a standalone property or in conjunction with the [`setValueIf`](#setValueIf) expression, in which case the calculated cell value applies only when `setValueIf` evaluates to `true`.
    *
    * [Expressions](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#expressions (linkStyle))
    * @see defaultValueExpression
    * @see resetValueIf
    */
    setValueExpression: string;
    /*
    * Specifies whether a respondent is required to provide a unique response for each question within this column.
    *
    * Default value: `false`
    */
    isUnique: boolean;
    /*
    * Specifies whether to create an individual column for each choice option. Applies only to columns of `"checkbox"` or `"radiogroup"` [`cellType`](#cellType).
    */
    showInMultipleColumns: boolean;
    readonly isSupportMultipleColumns: boolean;
    readonly isShowInMultipleColumns: boolean;
    /*
    * Column validators.
    *
    * [Data Validation](https://surveyjs.io/form-library/documentation/data-validation (linkStyle))
    * @see isRequired
    */
    validators: Array<SurveyValidator>;
    /*
    * An aggregation method used to calculate the column total.
    *
    * Possible values:
    *
    * - `"none"` (default) - Disables total calculations.
    * - `"sum"`
    * - `"count"`
    * - `"min"`
    * - `"max"`
    * - `"avg"`
    *
    * [View Demo](https://surveyjs.io/form-library/examples/aggregate-data-within-form/ (linkStyle))
    * @see totalFormat
    * @see totalDisplayStyle
    */
    totalType: string;
    /*
    * An expression used to calculate total values. Overrides the [`totalType`](#totalType) property.
    *
    * [Expressions](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#expressions (linkStyle))
    */
    totalExpression: string;
    readonly hasTotal: boolean;
    /*
    * A string pattern used to display column totals. To reference a total value within this pattern, use the `{0}` placeholder.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/aggregate-data-within-form/ (linkStyle))
    * @see totalType
    * @see totalDisplayStyle
    */
    totalFormat: string;
    readonly locTotalFormat: LocalizableString;
    cellHint: string;
    readonly locCellHint: LocalizableString;
    renderAs: string;
    totalMaximumFractionDigits: number;
    totalMinimumFractionDigits: number;
    /*
    * A format for calculated total values.
    *
    * Possible values:
    *
    * - `"none"` (default)
    * - `"decimal"`
    * - `"currency"`
    * - `"percent"`
    *
    * [View Demo](https://surveyjs.io/form-library/examples/aggregate-data-within-form/ (linkStyle))
    * @see totalType
    * @see totalFormat
    * @see totalCurrency
    */
    totalDisplayStyle: string;
    /*
    * An alignment for calculated total values.
    *
    * Possible values:
    *
    * - `"left"`
    * - `"center"`
    * - `"right"`
    * - `"auto"` (default) - Applies one of the values above based on the column's [cell type](#cellType).
    *
    * [View Demo](https://surveyjs.io/form-library/examples/aggregate-data-within-form/ (linkStyle))
    * @see totalType
    * @see totalFormat
    * @see totalCurrency
    * @see totalDisplayStyle
    */
    totalAlignment: string;
    /*
    * Specifies a currency used to display calculated total values. Applies only if [`totalDisplayStyle`](#totalDisplayStyle) is set to `"currency"`.
    * @see totalType
    */
    totalCurrency: string;
    /*
    * Gets or sets minimum column width in CSS values. By default, the matrix calculates column widths to optimally fit the content of all columns.
    * @see width
    */
    minWidth: string;
    /*
    * Gets or sets column width in CSS values. By default, the matrix calculates column widths to optimally fit the content of all columns.
    * @see minWidth
    */
    width: string;
    /*
    * Gets or sets the number of columns used to arrange choice options. Applies only to columns of `"checkbox"` or `"radiogroup"` [`cellType`](#cellType).
    *
    * Default value: -1 (inherits the actual value from the parent matrix's [`columnColCount`](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-with-dropdown-list#columnColCount) property)
    */
    colCount: number;
    getLocale(): string;
    getMarkdownHtml(text: string, name: string): string;
    getRenderer(name: string): string;
    getRendererContext(locStr: LocalizableString): any;
    getProcessedText(text: string): string;
    createCellQuestion(row: MatrixDropdownRowModelBase): Question;
    startLoadingFromJson(json?: any): void;
    updateCellQuestion(cellQuestion: Question, data: any, onUpdateJson?: (json: any) => any): void;
    private callOnCellQuestionUpdate;
    defaultCellTypeChanged(): void;
    protected calcCellQuestionType(row: MatrixDropdownRowModelBase): string;
    private getDefaultCellQuestionType;
    protected updateTemplateQuestion(newCellType?: string): void;
    protected createNewQuestion(cellType: string): Question;
    private setParentQuestionToTemplate;
    private previousChoicesId;
    protected setQuestionProperties(question: Question, onUpdateJson?: (json: any) => any): void;
    protected propertyValueChanged(name: string, oldValue: any, newValue: any): void;
    private doItemValuePropertyChanged;
    private doShowInMultipleColumnsChanged;
    private doColumnVisibilityChanged;
    private getProperties;
    private removeProperties;
    private addProperties;
}
