import { HashTable } from "./helpers";
import { ItemValue } from "./itemvalue";
import { QuestionMatrixBaseModel } from "./martixBase";
import { Base } from "./base";
import { SurveyError } from "./survey-error";
import { LocalizableString, ILocalizableOwner } from "./localizablestring";
import { IConditionObject, IQuestionPlainData } from "./question";
import { IPlainDataOptions } from "./base-interfaces";
export interface IMatrixData {
    onMatrixRowChanged(row: MatrixRowModel): void;
    getCorrectedRowValue(value: any): any;
    cssClasses: any;
    isDisabledStyle: boolean;
    isInputReadOnly: boolean;
    isDisabledAttr: boolean;
    isReadOnlyAttr: boolean;
    hasErrorInRow(row: MatrixRowModel): boolean;
}
export declare class MatrixRowModel extends Base {
    item: ItemValue;
    fullName: string;
    private data;
    cellClick: any;
    constructor(item: ItemValue, fullName: string, data: IMatrixData, value: any);
    get name(): string;
    get text(): string;
    get locText(): LocalizableString;
    get value(): any;
    set value(val: any);
    setValueDirectly(val: any): void;
    get isReadOnly(): boolean;
    get isReadOnlyAttr(): boolean;
    get isDisabledAttr(): boolean;
    get rowTextClasses(): string;
    get hasError(): boolean;
    set hasError(val: boolean);
    get rowClasses(): string;
}
export interface IMatrixCellsOwner extends ILocalizableOwner {
    getRows(): Array<any>;
    getColumns(): Array<any>;
}
export declare class MatrixCells {
    cellsOwner: IMatrixCellsOwner;
    private values;
    constructor(cellsOwner: IMatrixCellsOwner);
    get isEmpty(): boolean;
    onValuesChanged: () => void;
    private valuesChanged;
    setCellText(row: any, column: any, val: string): void;
    setDefaultCellText(column: any, val: string): void;
    getCellLocText(row: any, column: any): LocalizableString;
    getDefaultCellLocText(column: any, val: string): LocalizableString;
    getCellDisplayLocText(row: any, column: any): LocalizableString;
    getCellText(row: any, column: any): string;
    getDefaultCellText(column: any): string;
    getCellDisplayText(row: any, column: any): string;
    get rows(): Array<any>;
    get columns(): Array<any>;
    private getCellRowColumnValue;
    getJson(): any;
    setJson(value: any): void;
    locStrsChanged(): void;
    protected createString(): LocalizableString;
}
/**
  * A class that describes the Single-Select Matrix question type.
  *
  * [View Demo](https://surveyjs.io/form-library/examples/single-selection-matrix-table-question/ (linkStyle))
  */
export declare class QuestionMatrixModel extends QuestionMatrixBaseModel<MatrixRowModel, ItemValue> implements IMatrixData, IMatrixCellsOwner {
    private isRowChanging;
    private cellsValue;
    constructor(name: string);
    getType(): string;
    /**
     * The name of a component used to render cells.
     */
    get cellComponent(): string;
    set itemComponent(value: string);
    get hasSingleInput(): boolean;
    /**
     * Specifies whether each row requires an answer. If a respondent skips a row, the question displays a validation error.
     * @see isRequired
     * @see eachRowUnique
     * @see validators
     */
    get isAllRowRequired(): boolean;
    set isAllRowRequired(val: boolean);
    /**
     * Specifies whether answers in all rows should be unique. If any answers duplicate, the question displays a validation error.
     * @see isAllRowRequired
     * @see validators
     */
    get eachRowUnique(): boolean;
    set eachRowUnique(val: boolean);
    get hasRows(): boolean;
    /**
     * Specifies a sort order for matrix rows.
     *
     * Possible values:
     *
     * - `"initial"` (default) - Preserves the original order of the `rows` array.
     * - `"random"` - Arranges matrix rows in random order each time the question is displayed.
     * @see rows
     */
    get rowsOrder(): string;
    set rowsOrder(val: string);
    /**
     * Specifies whether to hide the question when the matrix has no visible rows.
     * @see rowsVisibleIf
     */
    get hideIfRowsEmpty(): boolean;
    set hideIfRowsEmpty(val: boolean);
    getRows(): Array<any>;
    getColumns(): Array<any>;
    addColumn(value: any, text?: string): ItemValue;
    getItemClass(row: any, column: any): string;
    get itemSvgIcon(): string;
    locStrsChanged(): void;
    protected getQuizQuestionCount(): number;
    protected getCorrectAnswerCount(): number;
    protected runItemsCondition(values: HashTable<any>, properties: HashTable<any>): boolean;
    protected getVisibleRows(): Array<MatrixRowModel>;
    protected sortVisibleRows(array: Array<MatrixRowModel>): Array<MatrixRowModel>;
    endLoadingFromJson(): void;
    protected isNewValueCorrect(val: any): boolean;
    protected processRowsOnSet(newRows: Array<any>): MatrixRowModel[];
    get visibleRows(): Array<MatrixRowModel>;
    /**
     * An array of matrix cells. Use this array to get or set cell values.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/questiontype-matrix-rubric/ (linkStyle))
     */
    get cells(): MatrixCells;
    set cells(value: MatrixCells);
    get hasCellText(): boolean;
    protected updateHasCellText(): void;
    setCellText(row: any, column: any, val: string): void;
    getCellText(row: any, column: any): string;
    setDefaultCellText(column: any, val: string): void;
    getDefaultCellText(column: any): string;
    getCellDisplayText(row: any, column: any): string;
    private emptyLocalizableString;
    getCellDisplayLocText(row: any, column: any): LocalizableString;
    supportGoNextPageAutomatic(): boolean;
    private errorsInRow;
    protected onCheckForErrors(errors: Array<SurveyError>, isOnValueChanged: boolean): void;
    private hasValuesInAllRows;
    private checkErrorsAllRows;
    private addErrorIntoRow;
    private refreshRowsErrors;
    protected getIsAnswered(): boolean;
    private createMatrixRow;
    protected onMatrixRowCreated(row: MatrixRowModel): void;
    protected setQuestionValue(newValue: any, updateIsAnswered?: boolean): void;
    protected getDisplayValueCore(keysAsText: boolean, value: any): any;
    getPlainData(options?: IPlainDataOptions): IQuestionPlainData;
    addConditionObjectsByContext(objects: Array<IConditionObject>, context: any): void;
    getConditionJson(operator?: string, path?: string): any;
    protected clearValueIfInvisibleCore(reason: string): void;
    protected getFirstInputElementId(): string;
    onMatrixRowChanged(row: MatrixRowModel): void;
    getCorrectedRowValue(value: any): any;
    hasErrorInRow(row: MatrixRowModel): boolean;
    protected getSearchableItemValueKeys(keys: Array<string>): void;
    private get SurveyModel();
    getColumnHeaderWrapperComponentName(cell: ItemValue): string;
    getColumnHeaderWrapperComponentData(cell: ItemValue): any;
    getRowHeaderWrapperComponentName(cell: ItemValue): string;
    getRowHeaderWrapperComponentData(cell: ItemValue): any;
}
