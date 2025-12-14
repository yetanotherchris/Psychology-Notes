import { HashTable } from "./helpers";
import { ItemValue } from "./itemvalue";
import { QuestionMatrixBaseModel } from "./martixBase";
import { Base } from "./base";
import { SurveyError } from "./survey-error";
import { LocalizableString, ILocalizableOwner } from "./localizablestring";
import { IConditionObject, IQuestionPlainData } from "./question";
import { IPlainDataOptions } from "./base-interfaces";
import { ConditionRunner } from "./conditions";
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
    readonly name: string;
    readonly text: string;
    readonly locText: LocalizableString;
    value: any;
    setValueDirectly(val: any): void;
    readonly isReadOnly: boolean;
    readonly isReadOnlyAttr: boolean;
    readonly isDisabledAttr: boolean;
    readonly rowTextClasses: string;
    hasError: boolean;
    readonly rowClasses: string;
}
export interface IMatrixCellsOwner extends ILocalizableOwner {
    getRows(): Array<any>;
    getColumns(): Array<any>;
}
export declare class MatrixCells extends Base {
    cellsOwner: IMatrixCellsOwner;
    private values;
    private locs;
    constructor(cellsOwner: IMatrixCellsOwner);
    getType(): string;
    readonly isEmpty: boolean;
    onValuesChanged: () => void;
    private locNotification;
    private valuesChanged;
    getDefaultCellLocText(column: any): LocalizableString;
    getCellDisplayLocText(row: any, column: any): LocalizableString;
    private getCellLocCore;
    private readonly defaultRowValue: any;
    private getCellLocData;
    private getCellLocDataFromValue;
    getCellText(row: any, column: any): string;
    setCellText(row: any, column: any, val: string): void;
    private updateValues;
    getDefaultCellText(column: any): string;
    setDefaultCellText(column: any, val: string): void;
    getCellDisplayText(row: any, column: any): string;
    readonly rows: Array<any>;
    readonly columns: Array<any>;
    private getCellRowColumnValue;
    getJson(): any;
    setJson(value: any, isLoading?: boolean): void;
    locStrsChanged(): void;
    private runFuncOnLocs;
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
    /*
    * The name of a component used to render cells.
    */
    readonly cellComponent: string;
    itemComponent: string;
    readonly hasSingleInput: boolean;
    /*
    * Specifies whether each row requires an answer. If a respondent skips a row, the question displays a validation error.
    * @see isRequired
    * @see eachRowUnique
    * @see validators
    */
    isAllRowRequired: boolean;
    /*
    * Specifies whether answers in all rows should be unique. If any answers duplicate, the question displays a validation error.
    * @see isAllRowRequired
    * @see validators
    */
    eachRowUnique: boolean;
    readonly hasRows: boolean;
    /*
    * Specifies a sort order for matrix rows.
    *
    * Possible values:
    *
    * - `"initial"` (default) - Preserves the original order of the `rows` array.
    * - `"random"` - Arranges matrix rows in random order each time the question is displayed.
    * @see rows
    */
    rowsOrder: string;
    /*
    * Specifies whether to hide the question when the matrix has no visible rows.
    * @see rowsVisibleIf
    */
    hideIfRowsEmpty: boolean;
    getRows(): Array<any>;
    getColumns(): Array<any>;
    addColumn(value: any, text?: string): ItemValue;
    getItemClass(row: any, column: any): string;
    readonly itemSvgIcon: string;
    locStrsChanged(): void;
    protected getQuizQuestionCount(): number;
    protected getCorrectAnswerCount(): number;
    runCondition(values: HashTable<any>, properties: HashTable<any>): void;
    protected createRowsVisibleIfRunner(): ConditionRunner;
    protected onRowsChanged(): void;
    protected getVisibleRows(): Array<MatrixRowModel>;
    protected sortVisibleRows(array: Array<MatrixRowModel>): Array<MatrixRowModel>;
    endLoadingFromJson(): void;
    protected isNewValueCorrect(val: any): boolean;
    protected processRowsOnSet(newRows: Array<any>): MatrixRowModel[];
    readonly visibleRows: Array<MatrixRowModel>;
    /*
    * An array of matrix cells. Use this array to get or set cell values.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/questiontype-matrix-rubric/ (linkStyle))
    */
    cells: MatrixCells;
    readonly hasCellText: boolean;
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
    protected onCheckForErrors(errors: Array<SurveyError>, isOnValueChanged: boolean, fireCallback: boolean): void;
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
    clearIncorrectValues(): void;
    protected clearValueIfInvisibleCore(reason: string): void;
    protected clearInvisibleColumnValues(): void;
    protected clearInvisibleValuesInRows(): void;
    protected clearInvisibleValuesInRowsAndColumns(inRows: boolean, inColumns: boolean, inCorrectRows: boolean): void;
    private getVisibleColumnByValue;
    protected getFirstInputElementId(): string;
    onMatrixRowChanged(row: MatrixRowModel): void;
    getCorrectedRowValue(value: any): any;
    hasErrorInRow(row: MatrixRowModel): boolean;
    protected getSearchableItemValueKeys(keys: Array<string>): void;
    private readonly SurveyModel: any;
    getColumnHeaderWrapperComponentName(cell: ItemValue): string;
    getColumnHeaderWrapperComponentData(cell: ItemValue): any;
    getRowHeaderWrapperComponentName(cell: ItemValue): string;
    getRowHeaderWrapperComponentData(cell: ItemValue): any;
}
