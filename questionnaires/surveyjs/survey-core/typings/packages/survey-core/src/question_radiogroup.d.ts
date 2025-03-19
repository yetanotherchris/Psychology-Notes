import { QuestionCheckboxBase } from "./question_baseselect";
import { ItemValue } from "./itemvalue";
import { Action } from "./actions/action";
/**
 * A class that describes the Radio Button Group question type.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/questiontype-radiogroup/ (linkStyle))
 */
export declare class QuestionRadiogroupModel extends QuestionCheckboxBase {
    constructor(name: string);
    protected getDefaultItemComponent(): string;
    getType(): string;
    protected getFirstInputElementId(): string;
    /**
     * Returns the selected choice item. If no item is selected, returns `null`.
     */
    get selectedItem(): ItemValue;
    /**
     * Specifies whether to display a button that clears the question value.
     *
     * Default value: `false`
     */
    get showClearButton(): boolean;
    set showClearButton(val: boolean);
    get canShowClearButton(): boolean;
    get clearButtonCaption(): string;
    supportGoNextPageAutomatic(): boolean;
    getConditionJson(operator?: string, path?: string): any;
    protected setNewComment(newValue: string): void;
    get showClearButtonInContent(): boolean;
    clickItemHandler(item: ItemValue): void;
    protected getDefaultTitleActions(): Array<Action>;
    get isNewA11yStructure(): boolean;
    get a11y_input_ariaRole(): string;
}
