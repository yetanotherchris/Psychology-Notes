import { HashTable } from "./helpers";
import { ItemValue } from "./itemvalue";
import { Question } from "./question";
/**
 * A base class for all matrix question types.
 */
export declare class QuestionMatrixBaseModel<TRow, TColumn> extends Question {
    protected filteredColumns: Array<TColumn>;
    protected filteredRows: Array<ItemValue>;
    protected generatedVisibleRows: Array<TRow>;
    protected generatedTotalRow: TRow;
    visibleRowsChangedCallback: () => void;
    protected createColumnValues(): any;
    constructor(name: string);
    getType(): string;
    endLoadingFromJson(): void;
    get isCompositeQuestion(): boolean;
    /**
     * Specifies whether to display the table header that contains column captions.
     *
     * Default value: `true`
     */
    get showHeader(): boolean;
    set showHeader(val: boolean);
    /**
     * An array of matrix columns.
     *
     * For a Single-Select Matrix, the `columns` array can contain configuration objects with the `text` (display value) and `value` (value to be saved in survey results) properties. Alternatively, the array can contain primitive values that will be used as both the display values and values to be saved in survey results.
     *
     * [View "Single-Select Matrix" Demo](https://surveyjs.io/form-library/examples/single-selection-matrix-table-question/ (linkStyle))
     *
     * For a Multi-Select Matrix or Dynamic Matrix, the `columns` array should contain configuration objects with properties described in the [`MatrixDropdownColumn`](https://surveyjs.io/form-library/documentation/api-reference/multi-select-matrix-column-values) API Reference section.
     *
     * [View "Multi-Select Matrix" Demo](https://surveyjs.io/form-library/examples/questiontype-matrixdropdown/ (linkStyle))
     */
    get columns(): Array<any>;
    set columns(newValue: Array<any>);
    get visibleColumns(): Array<any>;
    /**
     * An array of matrix rows.
     *
     * This array can contain primitive values or objects with the `text` (display value) and `value` (value to be saved in survey results) properties.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/single-selection-matrix-table-question/ (linkStyle))
     */
    get rows(): Array<any>;
    set rows(newValue: Array<any>);
    protected processRowsOnSet(newRows: Array<any>): any[];
    protected getVisibleRows(): Array<TRow>;
    /**
     * Returns an array of visible matrix rows.
     * @see rowsVisibleIf
     */
    get visibleRows(): Array<TRow>;
    /**
     * A Boolean expression that is evaluated against each matrix row. If the expression evaluates to `false`, the row becomes hidden.
     *
     * A survey parses and runs all expressions on startup. If any values used in the expression change, the survey re-evaluates it.
     *
     * Use the `{item}` placeholder to reference the current row in the expression.
     *
     * Refer to the following help topic for more information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
     * @see visibleRows
     * @see columnsVisibleIf
     */
    get rowsVisibleIf(): string;
    set rowsVisibleIf(val: string);
    /**
     * A Boolean expression that is evaluated against each matrix column. If the expression evaluates to `false`, the column becomes hidden.
     *
     * A survey parses and runs all expressions on startup. If any values used in the expression change, the survey re-evaluates it.
     *
     * Use the `{item}` placeholder to reference the current column in the expression.
     *
     * Refer to the following help topic for more information: [Conditional Visibility](https://surveyjs.io/form-library/documentation/design-survey-conditional-logic#conditional-visibility).
     * @see rowsVisibleIf
     */
    get columnsVisibleIf(): string;
    set columnsVisibleIf(val: string);
    runCondition(values: HashTable<any>, properties: HashTable<any>): void;
    protected filterItems(): boolean;
    protected onColumnsChanged(): void;
    protected onRowsChanged(): void;
    protected updateVisibilityBasedOnRows(): void;
    protected isVisibleCore(): boolean;
    protected shouldRunColumnExpression(): boolean;
    protected hasRowsAsItems(): boolean;
    protected runItemsCondition(values: HashTable<any>, properties: HashTable<any>): boolean;
    protected clearGeneratedRows(): void;
    private runConditionsForRows;
    private runConditionsForColumns;
    clearIncorrectValues(): void;
    protected clearInvisibleValuesInRows(): void;
    private restoreNewVisibleRowsValues;
    needResponsiveWidth(): boolean;
    protected get columnsAutoWidth(): boolean;
    getTableCss(): string;
    /**
     * Aligns matrix cell content in the vertical direction.
     */
    verticalAlign: "top" | "middle";
    /**
     * Specifies whether to apply shading to alternate matrix rows.
     */
    alternateRows: boolean;
    /**
     * Minimum column width in CSS values.
     *
     * @see width
     */
    get columnMinWidth(): string;
    set columnMinWidth(val: string);
    /**
     * A width for the column that displays row titles (first column). Accepts CSS values.
     */
    get rowTitleWidth(): string;
    set rowTitleWidth(val: string);
    getCellAriaLabel(rowTitle: string, columnTitle: string): string;
    get isNewA11yStructure(): boolean;
}
