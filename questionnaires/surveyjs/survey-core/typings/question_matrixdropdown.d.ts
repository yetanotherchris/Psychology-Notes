import { QuestionMatrixDropdownModelBase, MatrixDropdownRowModelBase, IMatrixDropdownData } from "./question_matrixdropdownbase";
import { ItemValue } from "./itemvalue";
import { LocalizableString } from "./localizablestring";
import { IProgressInfo } from "./base-interfaces";
export declare class MatrixDropdownRowModel extends MatrixDropdownRowModelBase {
    name: string;
    private item;
    constructor(name: string, item: ItemValue, data: IMatrixDropdownData, value: any);
    get rowName(): string;
    get text(): string;
    get locText(): LocalizableString;
    isRowEnabled(): boolean;
    protected isRowHasEnabledCondition(): boolean;
}
/**
  * A class that describes the Multi-Select Matrix question type. Multi-Select Matrix allows you to use the [Dropdown](https://surveyjs.io/form-library/documentation/questiondropdownmodel), [Checkbox](https://surveyjs.io/form-library/documentation/questioncheckboxmodel), [Radiogroup](https://surveyjs.io/form-library/documentation/questionradiogroupmodel), [Text](https://surveyjs.io/form-library/documentation/questiontextmodel), and [Comment](https://surveyjs.io/form-library/documentation/questioncommentmodel) question types as cell editors.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/questiontype-matrixdropdown/ (linkStyle))
 */
export declare class QuestionMatrixDropdownModel extends QuestionMatrixDropdownModelBase implements IMatrixDropdownData {
    constructor(name: string);
    getType(): string;
    /**
     * A title for the total row. Applies if at least one column displays total values.
     * @see rowTitleWidth
     * @see columns
     */
    get totalText(): string;
    set totalText(val: string);
    get locTotalText(): LocalizableString;
    getFooterText(): LocalizableString;
    getRowTitleWidth(): string;
    /**
     * Specifies whether to hide the question when the matrix has no visible rows.
     * @see rowsVisibleIf
     */
    get hideIfRowsEmpty(): boolean;
    set hideIfRowsEmpty(val: boolean);
    protected getDisplayValueCore(keysAsText: boolean, value: any): any;
    protected getConditionObjectRowName(index: number): string;
    protected getConditionObjectRowText(index: number): string;
    protected getConditionObjectsRowIndeces(): Array<number>;
    protected isNewValueCorrect(val: any): boolean;
    clearIncorrectValues(): void;
    protected clearValueIfInvisibleCore(reason: string): void;
    private defaultValuesInRows;
    protected clearGeneratedRows(): void;
    private getRowValueForCreation;
    protected generateRows(): Array<MatrixDropdownRowModel>;
    protected createMatrixRow(item: ItemValue, value: any): MatrixDropdownRowModel;
    protected getSearchableItemValueKeys(keys: Array<string>): void;
    protected updateProgressInfoByValues(res: IProgressInfo): void;
}
