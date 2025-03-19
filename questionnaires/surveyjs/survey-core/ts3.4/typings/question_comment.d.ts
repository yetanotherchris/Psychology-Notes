import { QuestionTextBase } from "./question_textbase";
/**
 * A class that describes the Long Text question type.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/questiontype-comment/ (linkStyle))
 */
export declare class QuestionCommentModel extends QuestionTextBase {
    private element;
    /*
    * Specifies the visible height of the comment area, measured in lines.
    *
    * The value of this property is passed on to the `rows` attribute of the underlying `<textarea>` element.
    */
    rows: number;
    cols: number;
    /*
    * Specifies whether the question allows line breaks.
    *
    * When this property is enabled, a user can press Enter to insert line breaks. They are saved as `\n` in survey results. The Comment question also recognizes and interprets the `\n` sequence as a line break when you set the question `value` in code.
    */
    acceptCarriageReturn: boolean;
    /*
    * Specifies whether the comment area automatically increases its height to accomodate multi-line content.
    *
    * Default value: `false` (inherited from `SurveyModel`'s [`autoGrowComment`](https://surveyjs.io/form-library/documentation/surveymodel#autoGrowComment) property)
    * @see allowResize
    */
    autoGrow: boolean | undefined;
    readonly renderedAutoGrow: boolean;
    /*
    *
    * Default value: `true` (inherited from `SurveyModel`'s [`allowResizeComment`](https://surveyjs.io/form-library/documentation/surveymodel#allowResizeComment) property)
    * @see autoGrow
    */
    allowResize: boolean | undefined;
    readonly renderedAllowResize: boolean;
    readonly resizeStyle: "none" | "both";
    getType(): string;
    afterRenderQuestionElement(el: HTMLElement): void;
    updateElement(): void;
    beforeDestroyQuestionElement(el: HTMLElement): void;
    onInput(event: any): void;
    onKeyDown(event: any): void;
    protected setQuestionValue(newValue: any, updateIsAnswered?: boolean): void;
    onValueChanged(): void;
    protected setNewValue(newValue: string): any;
    protected getValueSeparator(): string;
    readonly className: string;
}
