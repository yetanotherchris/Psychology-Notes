import { QuestionMatrixBaseModel } from "./martixBase";
import { Question, IConditionObject, IQuestionPlainData } from "./question";
import { HashTable } from "./helpers";
import { Base } from "./base";
import { IElement, IQuestion, ISurveyData, ISurvey, ISurveyImpl, ITextProcessor, IProgressInfo, IPanel, IPlainDataOptions } from "./base-interfaces";
import { ItemValue } from "./itemvalue";
import { ILocalizableOwner, LocalizableString } from "./localizablestring";
import { PanelModel } from "./panel";
import { SurveyError } from "./survey-error";
import { IMatrixColumnOwner, MatrixDropdownColumn } from "./question_matrixdropdowncolumn";
import { QuestionMatrixDropdownRenderedCell, QuestionMatrixDropdownRenderedRow, QuestionMatrixDropdownRenderedTable } from "./question_matrixdropdownrendered";
export interface IMatrixDropdownData {
    value: any;
    onRowChanged(row: MatrixDropdownRowModelBase, columnName: string, newRowValue: any, isDeletingValue: boolean): void;
    onRowChanging(row: MatrixDropdownRowModelBase, columnName: string, rowValue: any): any;
    isValidateOnValueChanging: boolean;
    getRowIndex(row: MatrixDropdownRowModelBase): number;
    getRowValue(rowIndex: number): any;
    checkIfValueInRowDuplicated(checkedRow: MatrixDropdownRowModelBase, cellQuestion: Question): boolean;
    hasDetailPanel(row: MatrixDropdownRowModelBase): boolean;
    getIsDetailPanelShowing(row: MatrixDropdownRowModelBase): boolean;
    setIsDetailPanelShowing(row: MatrixDropdownRowModelBase, val: boolean): void;
    createRowDetailPanel(row: MatrixDropdownRowModelBase): PanelModel;
    validateCell(row: MatrixDropdownRowModelBase, columnName: string, rowValue: any): SurveyError;
    columns: Array<MatrixDropdownColumn>;
    createQuestion(row: MatrixDropdownRowModelBase, column: MatrixDropdownColumn): Question;
    getLocale(): string;
    getMarkdownHtml(text: string, name: string): string;
    getRenderer(name: string): string;
    getRendererContext(locStr: LocalizableString): any;
    getProcessedText(text: string): string;
    getParentTextProcessor(): ITextProcessor;
    getSharedQuestionByName(columnName: string, row: MatrixDropdownRowModelBase): Question;
    onTotalValueChanged(): any;
    getSurvey(): ISurvey;
    getDataFilteredValues(): any;
    isMatrixReadOnly(): boolean;
}
export declare class MatrixDropdownCell {
    column: MatrixDropdownColumn;
    row: MatrixDropdownRowModelBase;
    data: IMatrixDropdownData;
    private questionValue;
    constructor(column: MatrixDropdownColumn, row: MatrixDropdownRowModelBase, data: IMatrixDropdownData);
    private updateCellQuestionTitleDueToAccessebility;
    locStrsChanged(): void;
    protected createQuestion(column: MatrixDropdownColumn, row: MatrixDropdownRowModelBase, data: IMatrixDropdownData): Question;
    readonly question: Question;
    value: any;
    getQuestionWrapperClassName(className: string): string;
    runCondition(values: HashTable<any>, properties: HashTable<any>): void;
}
export declare class MatrixDropdownTotalCell extends MatrixDropdownCell {
    column: MatrixDropdownColumn;
    row: MatrixDropdownRowModelBase;
    data: IMatrixDropdownData;
    constructor(column: MatrixDropdownColumn, row: MatrixDropdownRowModelBase, data: IMatrixDropdownData);
    protected createQuestion(column: MatrixDropdownColumn, row: MatrixDropdownRowModelBase, data: IMatrixDropdownData): Question;
    locStrsChanged(): void;
    updateCellQuestion(): void;
    getQuestionWrapperClassName(className: string): string;
    getTotalExpression(): string;
}
export declare class MatrixDropdownRowModelBase implements ISurveyData, ISurveyImpl, ILocalizableOwner {
    static RowVariableName: string;
    static OwnerVariableName: string;
    static IndexVariableName: string;
    static RowValueVariableName: string;
    private static idCounter;
    private static getId;
    protected data: IMatrixDropdownData;
    protected isSettingValue: boolean;
    private idValue;
    private textPreProcessor;
    private detailPanelValue;
    cells: Array<MatrixDropdownCell>;
    showHideDetailPanelClick: any;
    onDetailPanelShowingChanged: () => void;
    constructor(data: IMatrixDropdownData, value: any);
    readonly id: string;
    readonly rowName: any;
    readonly dataName: string;
    readonly text: any;
    isRowEnabled(): boolean;
    protected isRowHasEnabledCondition(): boolean;
    value: any;
    readonly locText: LocalizableString;
    getAccessbilityText(): string;
    readonly hasPanel: boolean;
    readonly detailPanel: PanelModel;
    readonly detailPanelId: string;
    readonly isDetailPanelShowing: boolean;
    private setIsDetailPanelShowing;
    private showHideDetailPanel;
    private isCreatingDetailPanel;
    showDetailPanel(): void;
    hideDetailPanel(destroyPanel?: boolean): void;
    private ensureDetailPanel;
    getAllValues(): any;
    getFilteredValues(): any;
    getFilteredProperties(): any;
    private applyRowVariablesToValues;
    runCondition(values: HashTable<any>, properties: HashTable<any>): void;
    getNamesWithDefaultValues(): Array<string>;
    clearValue(keepComment?: boolean): void;
    onAnyValueChanged(name: string, questionName: string): void;
    getDataValueCore(valuesHash: any, key: string): any;
    getValue(name: string): any;
    setValue(name: string, newColumnValue: any): void;
    getVariable(name: string): any;
    setVariable(name: string, newValue: any): void;
    getComment(name: string): string;
    setComment(name: string, newValue: string, locNotification: any): void;
    findQuestionByName(name: string): IQuestion;
    getEditingSurveyElement(): Base;
    private setValueCore;
    private updateQuestionsValue;
    runTriggers(name: string, value: any): void;
    private hasQuestonError;
    readonly isEmpty: boolean;
    getQuestionByColumn(column: MatrixDropdownColumn): Question;
    getCellByColumn(column: MatrixDropdownColumn): MatrixDropdownCell;
    private getCellByColumnName;
    getQuestionByColumnName(columnName: string): Question;
    readonly questions: Array<Question>;
    getQuestionByName(name: string): Question;
    getQuestionsByName(name: string): Array<Question>;
    protected getSharedQuestionByName(columnName: string): Question;
    clearIncorrectValues(val: any): void;
    getLocale(): string;
    getMarkdownHtml(text: string, name: string): string;
    getRenderer(name: string): string;
    getRendererContext(locStr: LocalizableString): any;
    getProcessedText(text: string): string;
    locStrsChanged(): void;
    updateCellQuestionOnColumnChanged(column: MatrixDropdownColumn, name: string, newValue: any): void;
    updateCellQuestionOnColumnItemValueChanged(column: MatrixDropdownColumn, propertyName: string, obj: ItemValue, name: string, newValue: any, oldValue: any): void;
    onQuestionReadOnlyChanged(): void;
    private validationValues;
    hasErrors(fireCallback: boolean, rec: any, raiseOnCompletedAsyncValidators: () => void): boolean;
    protected updateCellOnColumnChanged(cell: MatrixDropdownCell, name: string, newValue: any): void;
    updateCellOnColumnItemValueChanged(cell: MatrixDropdownCell, propertyName: string, obj: ItemValue, name: string, newValue: any, oldValue: any): void;
    protected buildCells(value: any): void;
    protected isTwoValueEquals(val1: any, val2: any): boolean;
    private getCellValue;
    protected createCell(column: MatrixDropdownColumn): MatrixDropdownCell;
    getSurveyData(): ISurveyData;
    getSurvey(): ISurvey;
    getTextProcessor(): ITextProcessor;
    readonly rowIndex: number;
    readonly editingObj: Base;
    private onEditingObjPropertyChanged;
    private editingObjValue;
    dispose(): void;
    private subscribeToChanges;
    private updateOnSetValue;
}
export declare class MatrixDropdownTotalRowModel extends MatrixDropdownRowModelBase {
    constructor(data: IMatrixDropdownData);
    protected createCell(column: MatrixDropdownColumn): MatrixDropdownCell;
    setValue(name: string, newValue: any): void;
    runCondition(values: HashTable<any>, properties: HashTable<any>): void;
    protected updateCellOnColumnChanged(cell: MatrixDropdownCell, name: string, newValue: any): void;
}
/**
 * A base class for the [QuestionMatrixDropdownModel](https://surveyjs.io/form-library/documentation/questionmatrixdropdownmodel) and [QuestionMatrixDynamicModel](https://surveyjs.io/form-library/documentation/questionmatrixdynamicmodel) classes.
 */
export declare class QuestionMatrixDropdownModelBase extends QuestionMatrixBaseModel<MatrixDropdownRowModelBase, MatrixDropdownColumn> implements IMatrixDropdownData, IMatrixColumnOwner {
    static defaultCellType: string;
    static addDefaultColumns(matrix: QuestionMatrixDropdownModelBase): void;
    private detailPanelValue;
    private isUniqueCaseSensitiveValue;
    protected isRowChanging: boolean;
    columnsChangedCallback: () => void;
    onRenderedTableResetCallback: () => void;
    onRenderedTableCreatedCallback: (table: QuestionMatrixDropdownRenderedTable) => void;
    onCellCreatedCallback: (options: any) => void;
    onCellValueChangedCallback: (options: any) => void;
    onHasDetailPanelCallback: (row: MatrixDropdownRowModelBase) => boolean;
    onCreateDetailPanelCallback: (row: MatrixDropdownRowModelBase, panel: PanelModel) => void;
    onCreateDetailPanelRenderedRowCallback: (renderedRow: QuestionMatrixDropdownRenderedRow) => void;
    onAddColumn: (column: MatrixDropdownColumn) => void;
    onRemoveColumn: (column: MatrixDropdownColumn) => void;
    cellValueChangingCallback: (row: any, columnName: string, value: any, oldValue: any) => any;
    protected createColumnValues(): any[];
    constructor(name: string);
    getType(): string;
    dispose(): void;
    readonly hasSingleInput: boolean;
    readonly isContainer: boolean;
    readonly isRowsDynamic: boolean;
    private isUpdating;
    protected readonly isUpdateLocked: boolean;
    beginUpdate(): void;
    endUpdate(): void;
    protected updateColumnsAndRows(): void;
    itemValuePropertyChanged(item: ItemValue, name: string, oldValue: any, newValue: any): void;
    /*
    * Specifies whether to display [`columns`](#columns) as rows and [`rows`](#rows) as columns.
    *
    * Default value: `false`
    *
    * [View Demo](https://surveyjs.io/form-library/examples/transpose-dynamic-rows-to-columns-in-matrix/ (linkStyle))
    */
    transposeData: boolean;
    /*
    * This property is obsolete. Use the [`transposeData`](#transposeData) property instead.
    */
    columnLayout: string;
    columnsLocation: string;
    /*
    * Specifies the error message position for questions within detail sections.
    *
    * Possible values:
    *
    * - `"default"` (default) - Inherits the setting from the [`errorLocation`](#errorLocation) property.
    * - `"top"` - Displays error messages above questions.
    * - `"bottom"` - Displays error messages below questions.
    * @see cellErrorLocation
    */
    detailErrorLocation: string;
    /*
    * Specifies the error message position relative to matrix cells.
    *
    * Possible values:
    *
    * - `"default"` (default) - Inherits the setting from the [`errorLocation`](#errorLocation) property.
    * - `"top"` - Displays error messages above matrix cells.
    * - `"bottom"` - Displays error messages below matrix cells.
    * @see detailErrorLocation
    */
    cellErrorLocation: string;
    getChildErrorLocation(child: Question): string;
    /*
    * Returns `true` if [`columns`](#columns) are placed in the horizontal direction and [`rows`](#columns) in the vertical direction.
    *
    * To specify the layout, use the [`transposeData`](#transposeData) property. If you set it to `true`, the survey applies it only when the screen has enough space. Otherwise, the survey falls back to the original layout, but the `transposeData` property remains set to `true`. Unlike `transposeData`, the `isColumnLayoutHorizontal` property always indicates the current layout.
    * @see transposeData
    */
    readonly isColumnLayoutHorizontal: boolean;
    /*
    * Enables case-sensitive comparison in columns with the `isUnique` property set to `true`.
    *
    * When this property is `true`, `"ABC"` and `"abc"` are considered different values.
    *
    * Default value: `false`
    * @see keyDuplicationError
    */
    isUniqueCaseSensitive: boolean;
    /*
    * Specifies the location of detail sections.
    *
    * Possible values:
    *
    * - `"underRow"` - Displays detail sections under their respective rows. Users can expand any number of detail sections.
    * - `"underRowSingle"` - Displays detail sections under their respective rows, but only one detail section can be expanded at a time.
    * - `"none"` (default) - Hides detail sections.
    *
    * Use the `detailElements` property to specify content of detail sections.
    * @see detailElements
    * @see detailPanel
    */
    detailPanelMode: string;
    /*
    * Contains a [`PanelModel`](https://surveyjs.io/form-library/documentation/panelmodel) instance that represents a detail section template.
    * @see detailElements
    * @see detailPanelMode
    */
    readonly detailPanel: PanelModel;
    getPanel(): IPanel;
    /*
    * An array of survey elements (questions and panels) to be displayed in detail sections.
    *
    * Detail sections are expandable panels displayed under each matrix row. You can use them to display questions that do not fit into the row.
    *
    * Set the `detailPanelMode` property to `"underRow"` or `"underRowSingle"` to display detail sections.
    * @see detailPanelMode
    * @see detailPanel
    */
    readonly detailElements: Array<IElement>;
    protected createNewDetailPanel(): PanelModel;
    readonly hasRowText: boolean;
    getFooterText(): LocalizableString;
    readonly canAddRow: boolean;
    readonly canRemoveRows: boolean;
    canRemoveRow(row: MatrixDropdownRowModelBase): boolean;
    onPointerDown(pointerDownEvent: PointerEvent, row: MatrixDropdownRowModelBase): void;
    protected onRowsChanged(): void;
    private lockResetRenderedTable;
    protected onStartRowAddingRemoving(): void;
    protected onEndRowAdding(): void;
    protected onEndRowRemoving(row: MatrixDropdownRowModelBase): void;
    private renderedTableValue: any;
    protected clearRowsAndResetRenderedTable(): void;
    resetRenderedTable(): void;
    protected clearGeneratedRows(): void;
    protected readonly isRendredTableCreated: boolean;
    readonly renderedTable: QuestionMatrixDropdownRenderedTable;
    protected createRenderedTable(): QuestionMatrixDropdownRenderedTable;
    protected onMatrixRowCreated(row: MatrixDropdownRowModelBase): void;
    /*
    * Specifies the type of matrix cells. You can override this property for individual columns.
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
    *
    * Default value: `"dropdown"` (inherited from [`settings.matrix.defaultCellType`](https://surveyjs.io/form-library/documentation/settings#matrixDefaultCellType))
    */
    cellType: string;
    isSelectCellType(): boolean;
    private updateColumnsCellType;
    private updateColumnsIndexes;
    /*
    * Specifies the number of columns in Radiogroup and Checkbox cells.
    *
    * Default value: 0 (the number of columns is selected automatically based on the available column width)
    * @see cellType
    */
    columnColCount: number;
    horizontalScroll: boolean;
    allowAdaptiveActions: boolean;
    getRequiredText(): string;
    hasChoices(): boolean;
    onColumnPropertyChanged(column: MatrixDropdownColumn, name: string, newValue: any): void;
    onColumnItemValuePropertyChanged(column: MatrixDropdownColumn, propertyName: string, obj: ItemValue, name: string, newValue: any, oldValue: any): void;
    onShowInMultipleColumnsChanged(column: MatrixDropdownColumn): void;
    onColumnVisibilityChanged(column: MatrixDropdownColumn): void;
    onColumnCellTypeChanged(column: MatrixDropdownColumn): void;
    private resetTableAndRows;
    getRowTitleWidth(): string;
    readonly hasFooter: boolean;
    getAddRowLocation(): string;
    getShowColumnsIfEmpty(): boolean;
    protected updateShowTableAndAddRow(): void;
    protected updateHasFooter(): void;
    readonly hasTotal: boolean;
    getCellType(): string;
    getCustomCellType(column: MatrixDropdownColumn, row: MatrixDropdownRowModelBase, cellType: string): string;
    getConditionJson(operator?: string, path?: string): any;
    clearIncorrectValues(): void;
    clearErrors(): void;
    localeChanged(): void;
    private runFuncForCellQuestions;
    runCondition(values: HashTable<any>, properties: HashTable<any>): void;
    runTriggers(name: string, value: any): void;
    protected shouldRunColumnExpression(): boolean;
    protected runCellsCondition(values: HashTable<any>, properties: HashTable<any>): void;
    private checkColumnsVisibility;
    private checkColumnsRenderedRequired;
    private isColumnVisibilityChanged;
    private updateNewVisibleChoices;
    protected runTotalsCondition(values: HashTable<any>, properties: HashTable<any>): void;
    private getRowConditionValues;
    IsMultiplyColumn(column: MatrixDropdownColumn): boolean;
    locStrsChanged(): void;
    /**
     * Returns a matrix column with a given `name` or `null` if a column with this is not found.
     * @param columnName A column name.
     */
    getColumnByName(columnName: string): MatrixDropdownColumn;
    getColumnName(columnName: string): MatrixDropdownColumn;
    getColumnWidth(column: MatrixDropdownColumn): string;
    /*
    * Gets or sets choice items for Dropdown, Checkbox, and Radiogroup matrix cells. You can override this property for individual columns.
    *
    * This property accepts an array of objects with the following structure:
    *
    * ```js
    * {
    *   "value": any, // A value to be saved in survey results
    *   "text": String, // A display text. This property supports Markdown. When `text` is undefined, `value` is used.
    *   "customProperty": any // Any property that you find useful.
    * }
    * ```
    *
    * To enable Markdown support for the `text` property, implement Markdown-to-HTML conversion in the [onTextMarkdown](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#onTextMarkdown) event handler. For an example, refer to the following demo: [Convert Markdown to HTML with Showdown](https://surveyjs.io/form-library/examples/edit-survey-questions-markdown/).
    *
    * If you add custom properties, refer to the following help topic to learn how to serialize them into JSON: [Add Custom Properties to Property Grid](https://surveyjs.io/survey-creator/documentation/property-grid#add-custom-properties-to-the-property-grid).
    *
    * If you need to specify only the `value` property, you can set the `choices` property to an array of primitive values, for example, `[ "item1", "item2", "item3" ]`. These values are both saved in survey results and used as display text.
    * @see cellType
    */
    choices: Array<any>;
    /*
    * A placeholder for Dropdown matrix cells.
    * @see cellType
    */
    placeholder: string;
    readonly locPlaceholder: LocalizableString;
    optionsCaption: string;
    /*
    * An error message displayed when users enter a duplicate value into a column that accepts only unique values (`isUnique` is set to `true` or `keyName` is specified).
    *
    * A default value for this property is taken from a [localization dictionary](https://github.com/surveyjs/survey-library/tree/master/src/localization). Refer to the following help topic for more information: [Localization & Globalization](https://surveyjs.io/form-library/documentation/localization).
    * @see isUniqueCaseSensitive
    */
    keyDuplicationError: string;
    readonly locKeyDuplicationError: LocalizableString;
    readonly storeOthersAsComment: boolean;
    addColumn(name: string, title?: string): MatrixDropdownColumn;
    protected getVisibleRows(): Array<MatrixDropdownRowModelBase>;
    private updateValueOnRowsGeneration;
    readonly totalValue: any;
    protected getVisibleTotalRow(): MatrixDropdownRowModelBase;
    readonly visibleTotalRow: MatrixDropdownRowModelBase;
    onSurveyLoad(): void;
    /**
     * Returns an object with row values. If a row has no answers, this method returns an empty object.
     * @param rowIndex A zero-based row index.
     * @see setRowValue
     */
    getRowValue(rowIndex: number): any;
    checkIfValueInRowDuplicated(checkedRow: MatrixDropdownRowModelBase, cellQuestion: Question): boolean;
    /**
     * Assigns values to a row.
     * @param rowIndex A zero-based row index.
     * @param rowValue An object with the following structure: `{ "column_name": columnValue, ... }`
     * @see getRowValue
     */
    setRowValue(rowIndex: number, rowValue: any): any;
    protected generateRows(): Array<MatrixDropdownRowModelBase>;
    protected generateTotalRow(): MatrixDropdownRowModelBase;
    protected createNewValue(nullOnEmpty?: boolean): any;
    protected getRowValueCore(row: MatrixDropdownRowModelBase, questionValue: any, create?: boolean): any;
    protected getRowObj(row: MatrixDropdownRowModelBase): any;
    protected getRowDisplayValue(keysAsText: boolean, row: MatrixDropdownRowModelBase, rowValue: any): any;
    getPlainData(options?: IPlainDataOptions): IQuestionPlainData;
    addConditionObjectsByContext(objects: Array<IConditionObject>, context: any): void;
    onHidingContent(): void;
    protected getIsReadyNestedQuestions(): Array<Question>;
    protected collectNestedQuestionsCore(questions: Question[], visibleOnly: boolean): void;
    protected collectNestedQuestonsInRows(rows: Array<MatrixDropdownRowModelBase>, questions: Question[], visibleOnly: boolean): void;
    protected getConditionObjectRowName(index: number): string;
    protected getConditionObjectRowText(index: number): string;
    protected getConditionObjectsRowIndeces(): Array<number>;
    getProgressInfo(): IProgressInfo;
    protected updateProgressInfoByValues(res: IProgressInfo): void;
    protected updateProgressInfoByRow(res: IProgressInfo, rowValue: any): void;
    private getCellQuestions;
    protected onBeforeValueChanged(val: any): void;
    private onSetQuestionValue;
    protected setQuestionValue(newValue: any): void;
    supportGoNextPageAutomatic(): boolean;
    protected getContainsErrors(): boolean;
    protected getIsAnswered(): boolean;
    private checkForAnswersOrErrors;
    hasErrors(fireCallback?: boolean, rec?: any): boolean;
    protected getIsRunningValidators(): boolean;
    getAllErrors(): Array<SurveyError>;
    private hasErrorInRows;
    private isValueDuplicated;
    protected getUniqueColumnsNames(): Array<string>;
    private isValueInColumnDuplicated;
    private getDuplicatedRows;
    private showDuplicatedErrorsInRows;
    private removeDuplicatedErrorsInRows;
    private getDuplicationError;
    private addDuplicationError;
    private removeDuplicationError;
    getFirstQuestionToFocus(withError: boolean): Question;
    protected getFirstInputElementId(): string;
    protected getFirstErrorInputElementId(): string;
    protected getFirstCellQuestion(onError: boolean): Question;
    protected onReadOnlyChanged(): void;
    createQuestion(row: MatrixDropdownRowModelBase, column: MatrixDropdownColumn): Question;
    protected createQuestionCore(row: MatrixDropdownRowModelBase, column: MatrixDropdownColumn): Question;
    protected deleteRowValue(newValue: any, row: MatrixDropdownRowModelBase): any;
    private isDoingonAnyValueChanged;
    onAnyValueChanged(name: string, questionName: string): void;
    protected isObject(value: any): boolean;
    private getOnCellValueChangedOptions;
    protected onCellValueChanged(row: MatrixDropdownRowModelBase, columnName: string, rowValue: any): void;
    validateCell(row: MatrixDropdownRowModelBase, columnName: string, rowValue: any): SurveyError;
    readonly isValidateOnValueChanging: boolean;
    onRowChanging(row: MatrixDropdownRowModelBase, columnName: string, rowValue: any): any;
    onRowChanged(row: MatrixDropdownRowModelBase, columnName: string, newRowValue: any, isDeletingValue: boolean): void;
    private getNewValueOnRowChanged;
    getRowIndex(row: MatrixDropdownRowModelBase): number;
    getElementsInDesign(includeHidden?: boolean): Array<IElement>;
    hasDetailPanel(row: MatrixDropdownRowModelBase): boolean;
    getIsDetailPanelShowing(row: MatrixDropdownRowModelBase): boolean;
    setIsDetailPanelShowing(row: MatrixDropdownRowModelBase, val: boolean): void;
    getDetailPanelButtonCss(row: MatrixDropdownRowModelBase): string;
    getDetailPanelIconCss(row: MatrixDropdownRowModelBase): string;
    getDetailPanelIconId(row: MatrixDropdownRowModelBase): string;
    private updateDetailPanelButtonCss;
    createRowDetailPanel(row: MatrixDropdownRowModelBase): PanelModel;
    getSharedQuestionByName(columnName: string, row: MatrixDropdownRowModelBase): Question;
    onTotalValueChanged(): any;
    getDataFilteredValues(): any;
    getParentTextProcessor(): ITextProcessor;
    isMatrixReadOnly(): boolean;
    getQuestionFromArray(name: string, index: number): IQuestion;
    private isMatrixValueEmpty;
    private readonly SurveyModel: any;
    getCellTemplateData(cell: QuestionMatrixDropdownRenderedCell): any;
    getCellWrapperComponentName(cell: MatrixDropdownCell): string;
    getCellWrapperComponentData(cell: MatrixDropdownCell): any;
    getColumnHeaderWrapperComponentName(cell: MatrixDropdownCell): string;
    getColumnHeaderWrapperComponentData(cell: MatrixDropdownCell): any;
    getRowHeaderWrapperComponentName(cell: MatrixDropdownCell): string;
    getRowHeaderWrapperComponentData(cell: MatrixDropdownCell): any;
    readonly showHorizontalScroll: boolean;
    getRootCss(): string;
}
