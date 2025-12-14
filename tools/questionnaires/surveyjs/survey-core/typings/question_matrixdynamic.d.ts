import { QuestionMatrixDropdownModelBase, MatrixDropdownRowModelBase, IMatrixDropdownData } from "./question_matrixdropdownbase";
import { SurveyError } from "./survey-error";
import { DragDropMatrixRows } from "./dragdrop/matrix-rows";
import { IShortcutText, ISurveyImpl, IProgressInfo } from "./base-interfaces";
import { QuestionMatrixDropdownRenderedTable } from "./question_matrixdropdownrendered";
export declare class MatrixDynamicRowModel extends MatrixDropdownRowModelBase implements IShortcutText {
    index: number;
    private dragOrClickHelper;
    constructor(index: number, data: IMatrixDropdownData, value: any);
    get rowName(): string;
    get dataName(): string;
    get text(): any;
    getAccessbilityText(): string;
    get shortcutText(): string;
}
/**
  * A class that describes the Dynamic Matrix question type.
  *
  * Dynamic Matrix allows respondents to add and delete matrix rows. You can use the [Dropdown](https://surveyjs.io/form-library/documentation/questiondropdownmodel), [Checkbox](https://surveyjs.io/form-library/documentation/questioncheckboxmodel), [Radiogroup](https://surveyjs.io/form-library/documentation/questionradiogroupmodel), [Text](https://surveyjs.io/form-library/documentation/questiontextmodel), and [Comment](https://surveyjs.io/form-library/documentation/questioncommentmodel) question types as cell editors.
  *
  * [View Demo](https://surveyjs.io/form-library/examples/questiontype-matrixdynamic/ (linkStyle))
  */
export declare class QuestionMatrixDynamicModel extends QuestionMatrixDropdownModelBase implements IMatrixDropdownData {
    onGetValueForNewRowCallBack: (sender: QuestionMatrixDynamicModel) => any;
    private rowCounter;
    private initialRowCount;
    private setRowCountValueFromData;
    constructor(name: string);
    dragDropMatrixRows: DragDropMatrixRows;
    setSurveyImpl(value: ISurveyImpl, isLight?: boolean): void;
    private draggedRow;
    private isBanStartDrag;
    isDragHandleAreaValid(node: HTMLElement): boolean;
    onPointerDown(pointerDownEvent: PointerEvent, row: MatrixDropdownRowModelBase): void;
    startDragMatrixRow: (event: PointerEvent, currentTarget: HTMLElement) => void;
    getType(): string;
    get isRowsDynamic(): boolean;
    /**
     * Specifies whether to display a confirmation dialog when a respondent wants to delete a row.
     *
     * Default value: `false`
     * @see confirmDeleteText
     */
    get confirmDelete(): boolean;
    set confirmDelete(val: boolean);
    get isValueArray(): boolean;
    /**
     * Specifies a key column. Set this property to a column name, and the question will display `keyDuplicationError` if a user tries to enter a duplicate value in this column.
     * @see keyDuplicationError
     */
    get keyName(): string;
    set keyName(val: string);
    /**
     * If it is not empty, then this value is set to every new row, including rows created initially, unless the defaultValue is not empty
     * @see defaultValue
     * @see defaultValueFromLastRow
     */
    get defaultRowValue(): any;
    set defaultRowValue(val: any);
    /**
     * Specifies whether default values for a new row/column should be copied from the last row/column.
     *
     * If you also specify `defaultValue`, it will be merged with the copied values.
     * @see defaultValue
     */
    get defaultValueFromLastRow(): boolean;
    set defaultValueFromLastRow(val: boolean);
    protected isDefaultValueEmpty(): boolean;
    protected valueFromData(val: any): any;
    protected isNewValueCorrect(val: any): boolean;
    protected setDefaultValue(): void;
    moveRowByIndex(fromIndex: number, toIndex: number): void;
    clearOnDrop(): void;
    initDataUI(): void;
    /**
     * The number of rows in the matrix.
     * @see minRowCount
     * @see maxRowCount
     */
    get rowCount(): number;
    set rowCount(val: number);
    protected updateProgressInfoByValues(res: IProgressInfo): void;
    private getValueForNewRow;
    /**
     * Specifies whether users can drag and drop matrix rows to reorder them. Applies only if [`transposeData`](#transposeData) is `false`.
     *
     * Default value: `false`
     */
    get allowRowsDragAndDrop(): boolean;
    set allowRowsDragAndDrop(val: boolean);
    get isRowsDragAndDrop(): boolean;
    get lockedRowCount(): number;
    set lockedRowCount(val: number);
    get iconDragElement(): string;
    protected createRenderedTable(): QuestionMatrixDropdownRenderedTable;
    private get rowCountValue();
    private set rowCountValue(value);
    /**
     * A minimum number of rows in the matrix. Users cannot delete rows if `rowCount` equals `minRowCount`.
     *
     * Default value: 0
     * @see rowCount
     * @see maxRowCount
     * @see allowRemoveRows
     */
    get minRowCount(): number;
    set minRowCount(val: number);
    /**
     * A maximum number of rows in the matrix. Users cannot add new rows if `rowCount` equals `maxRowCount`.
     *
     * Default value: 1000 (inherited from [`settings.matrix.maxRowCount`](https://surveyjs.io/form-library/documentation/settings#matrixMaximumRowCount))
     * @see rowCount
     * @see minRowCount
     * @see allowAddRows
     */
    get maxRowCount(): number;
    set maxRowCount(val: number);
    /**
     * Specifies whether users are allowed to add new rows.
     *
     * Default value: `true`
     * @see canAddRow
     * @see allowRemoveRows
     */
    get allowAddRows(): boolean;
    set allowAddRows(val: boolean);
    /**
     * Specifies whether users are allowed to delete rows.
     *
     * Default value: `true`
     * @see canRemoveRows
     * @see allowAddRows
     */
    get allowRemoveRows(): boolean;
    set allowRemoveRows(val: boolean);
    /**
     * Indicates whether it is possible to add a new row.
     *
     * This property returns `true` when all of the following conditions apply:
     *
     * - Users are allowed to add new rows (`allowAddRows` is `true`).
     * - The question, its parent panel, or survey is not in read-only state.
     * - `rowCount` is less than `maxRowCount`.
     * @see allowAddRows
     * @see isReadOnly
     * @see rowCount
     * @see maxRowCount
     * @see canRemoveRows
     */
    get canAddRow(): boolean;
    canRemoveRowsCallback: (allow: boolean) => boolean;
    /**
     * Indicates whether it is possible to delete rows.
     *
     * This property returns `true` when all of the following conditions apply:
     *
     * - Users are allowed to delete rows (`allowRemoveRows` is `true`).
     * - The question, its parent panel, or survey is not in read-only state.
     * - `rowCount` exceeds `minRowCount`.
     * @see allowRemoveRows
     * @see isReadOnly
     * @see rowCount
     * @see minRowCount
     * @see canAddRow
     */
    get canRemoveRows(): boolean;
    canRemoveRow(row: MatrixDropdownRowModelBase): boolean;
    addRowUI(): void;
    private getQuestionToFocusOnAddingRow;
    /**
     * Creates and adds a new row to the matrix.
     * @param setFocus *(Optional)* Pass `true` to focus the cell in the first column.
     */
    addRow(setFocus?: boolean): void;
    /**
     * Specifies whether to expand the detail section immediately when a respondent adds a new row.
     * @see detailPanelMode
     */
    get detailPanelShowOnAdding(): boolean;
    set detailPanelShowOnAdding(val: boolean);
    protected hasRowsAsItems(): boolean;
    unbindValue(): void;
    protected isValueSurveyElement(val: any): boolean;
    private addRowCore;
    private getDefaultRowValue;
    removeRowUI(value: any): void;
    isRequireConfirmOnRowDelete(index: number): boolean;
    /**
     * Removes a matrix row with a specified index.
     * @param index A zero-based row index.
     * @param confirmDelete *(Optional)* A Boolean value that specifies whether to display a confirmation dialog. If you do not specify this parameter, the [`confirmDelete`](https://surveyjs.io/form-library/documentation/api-reference/dynamic-matrix-table-question-model#confirmDelete) property value is used.
     */
    removeRow(index: number, confirmDelete?: boolean): void;
    private removeRowAsync;
    private removeRowCore;
    /**
     * A message displayed in a confirmation dialog that appears when a respondent wants to delete a row.
     * @see confirmDelete
     */
    get confirmDeleteText(): string;
    set confirmDeleteText(val: string);
    get locConfirmDeleteText(): import("./localizablestring").LocalizableString;
    /**
     * A caption for the Add Row button.
     * @see addRowLocation
     */
    get addRowText(): string;
    set addRowText(val: string);
    get locAddRowText(): import("./localizablestring").LocalizableString;
    private get defaultAddRowText();
    /**
     * Specifies the location of the Add Row button.
     *
     * Possible values:
     *
     * - `"top"` - Displays the Add Row button at the top of the matrix.
     * - `"bottom"` - Displays the Add Row button at the bottom of the matrix.
     * - `"topBottom"` - Displays the Add Row button at the top and bottom of the matrix.
     *
     * Default value: `"top"` if [`transposeData`](#transposeData) is `true`; `"bottom"` if `transposeData` is `false` or the matrix is in compact mode.
     * @see addRowText
     */
    get addRowLocation(): string;
    set addRowLocation(val: string);
    getAddRowLocation(): string;
    /**
     * Specifies whether to hide columns when the matrix does not contain any rows. If you enable this property, the matrix displays the `emptyRowsText` message and the Add Row button.
     *
     * Default value: `false`
     * @see emptyRowsText
     */
    get hideColumnsIfEmpty(): boolean;
    set hideColumnsIfEmpty(val: boolean);
    getShowColumnsIfEmpty(): boolean;
    /**
     * Use this property to change the default value of remove row button text.
     */
    get removeRowText(): string;
    set removeRowText(val: string);
    get locRemoveRowText(): import("./localizablestring").LocalizableString;
    /**
     * A message displayed when the matrix does not contain any rows. Applies only if `hideColumnsIfEmpty` is enabled.
     * @see hideColumnsIfEmpty
     */
    get emptyRowsText(): string;
    set emptyRowsText(val: string);
    get locEmptyRowsText(): import("./localizablestring").LocalizableString;
    protected getDisplayValueCore(keysAsText: boolean, value: any): any;
    protected getConditionObjectRowName(index: number): string;
    protected getConditionObjectsRowIndeces(): Array<number>;
    supportGoNextPageAutomatic(): boolean;
    get hasRowText(): boolean;
    protected onCheckForErrors(errors: Array<SurveyError>, isOnValueChanged: boolean): void;
    private hasErrorInMinRows;
    protected getUniqueColumnsNames(): Array<string>;
    protected generateRows(): Array<MatrixDynamicRowModel>;
    protected createMatrixRow(value: any): MatrixDynamicRowModel;
    private lastDeletedRow;
    private getInsertedDeletedIndex;
    private isEditingObjectValueChanged;
    updateValueFromSurvey(newValue: any, clearData?: boolean): void;
    protected onBeforeValueChanged(val: any): void;
    protected createNewValue(): any;
    protected deleteRowValue(newValue: any, row: MatrixDropdownRowModelBase): any;
    private getRowValueByIndex;
    protected getRowValueCore(row: MatrixDropdownRowModelBase, questionValue: any, create?: boolean): any;
    getAddRowButtonCss(isEmptySection?: boolean): string;
    getRemoveRowButtonCss(): string;
    getRootCss(): string;
}
