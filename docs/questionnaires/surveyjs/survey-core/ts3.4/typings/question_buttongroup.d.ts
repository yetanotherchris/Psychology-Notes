import { ItemValue } from "./itemvalue";
import { QuestionCheckboxBase } from "./question_baseselect";
import { LocalizableString } from "./localizablestring";
export declare class ButtonGroupItemValue extends ItemValue {
    protected typeName: string;
    constructor(value: any, text?: string, typeName?: string);
    iconName: string;
    iconSize: number;
    /**
     * By default item caption is visible.
     * Set it 'false' to hide item caption.
     */
    showCaption: boolean;
    getType(): string;
}
/**
 * A Model for a button group question.
 */
export declare class QuestionButtonGroupModel extends QuestionCheckboxBase {
    constructor(name: string);
    getType(): string;
    protected getItemValueType(): string;
    supportOther(): boolean;
}
export declare class ButtonGroupItemModel {
    question: QuestionButtonGroupModel;
    item: ItemValue;
    index: number;
    constructor(question: QuestionButtonGroupModel, item: ItemValue, index: number);
    readonly value: any;
    readonly iconName: string;
    readonly iconSize: number;
    readonly caption: LocalizableString;
    readonly showCaption: any;
    readonly isRequired: boolean;
    readonly selected: boolean;
    readonly readOnly: boolean;
    readonly name: string;
    readonly id: string;
    readonly hasErrors: boolean;
    readonly describedBy: string;
    private readonly labelClass: any;
    readonly css: {
        label: string;
        icon: any;
        control: any;
        caption: any;
        decorator: any;
    };
    onChange(): void;
}
