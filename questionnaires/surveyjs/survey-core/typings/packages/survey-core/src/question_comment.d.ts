import { QuestionTextBase } from "./question_textbase";
import { TextAreaModel } from "./utils/text-area";
/**
 * A class that describes the Long Text question type.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/questiontype-comment/ (linkStyle))
 */
export declare class QuestionCommentModel extends QuestionTextBase {
    private element;
    private textAreaModelValue;
    constructor(name: string);
    get textAreaModel(): TextAreaModel;
    private getTextAreaOptions;
    /**
     * Specifies the visible height of the comment area, measured in lines.
     *
     * The value of this property is passed on to the `rows` attribute of the underlying `<textarea>` element.
     */
    get rows(): number;
    set rows(val: number);
    get cols(): number;
    set cols(val: number);
    /**
     * Specifies whether the question allows line breaks.
     *
     * When this property is enabled, a user can press Enter to insert line breaks. They are saved as `\n` in survey results. The Comment question also recognizes and interprets the `\n` sequence as a line break when you set the question `value` in code.
     */
    get acceptCarriageReturn(): boolean;
    set acceptCarriageReturn(val: boolean);
    /**
     * Specifies whether the comment area automatically increases its height to accomodate multi-line content.
     *
     * Default value: `false` (inherited from `SurveyModel`'s [`autoGrowComment`](https://surveyjs.io/form-library/documentation/surveymodel#autoGrowComment) property)
     * @see allowResize
     */
    get autoGrow(): boolean | undefined;
    set autoGrow(val: boolean | undefined);
    get renderedAutoGrow(): boolean;
    /**
     *
     * Default value: `true` (inherited from `SurveyModel`'s [`allowResizeComment`](https://surveyjs.io/form-library/documentation/surveymodel#allowResizeComment) property)
     * @see autoGrow
     */
    get allowResize(): boolean | undefined;
    set allowResize(val: boolean | undefined);
    get renderedAllowResize(): boolean;
    get resizeStyle(): "none" | "both";
    getType(): string;
    afterRenderQuestionElement(el: HTMLElement): void;
    beforeDestroyQuestionElement(el: HTMLElement): void;
    onInput(event: any): void;
    protected onBlurCore(event: any): void;
    onKeyDown(event: any): void;
    protected setNewValue(newValue: string): any;
    protected getValueSeparator(): string;
    protected notifyStateChanged(prevState: string): void;
    get className(): string;
}
