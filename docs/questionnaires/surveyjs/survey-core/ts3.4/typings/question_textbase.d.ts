import { Question } from "./question";
import { CssClassBuilder } from "./utils/cssClassBuilder";
import { LocalizableString } from "./localizablestring";
import { Base } from "./base";
import { ISurveyImpl } from "./base-interfaces";
export declare class CharacterCounter extends Base {
    remainingCharacterCounter: string;
    updateRemainingCharacterCounter(newValue: string, maxLength: number): void;
}
/**
 * A base class for the [Single-Line Input](https://surveyjs.io/form-library/documentation/questiontextmodel) and [Long Text](https://surveyjs.io/form-library/documentation/questioncommentmodel) question types.
 */
export declare class QuestionTextBase extends Question {
    constructor(name: string);
    protected isTextValue(): boolean;
    /*
    * The maximum text length measured in characters. Assign 0 if the length should be unlimited.
    *
    * Default value: -1 (inherits the actual value from the `SurveyModel`'s [`maxTextLength`](https://surveyjs.io/form-library/documentation/surveymodel#maxTextLength) property).
    */
    maxLength: number;
    getMaxLength(): any;
    characterCounter: CharacterCounter;
    updateRemainingCharacterCounter(newValue: string): void;
    /**
     * A placeholder for the input field.
     */
    placeholder: string;
    placeHolder: string;
    readonly locPlaceHolder: LocalizableString;
    getType(): string;
    isEmpty(): boolean;
    /*
    * Specifies when to update the question value.
    *
    * Possible values:
    *
    * - `"onBlur"` - Updates the value after the input field loses focus.
    * - `"onTyping"` - Updates the value on every key press.
    * - `"default"` (default) - Inherits the value from the `SurveyModel`'s [`textUpdateMode`](https://surveyjs.io/form-library/documentation/surveymodel#textUpdateMode) property.
    *
    * > Do not use the `"onTyping"` mode if your survey contains many expressions. Expressions are reevaluated each time a question value is changed. In `"onTyping"` mode, the question value changes frequently. This may cause performance degradation.
    */
    textUpdateMode: string;
    protected getIsInputTextUpdate(): boolean;
    readonly renderedPlaceholder: string;
    protected setRenderedPlaceholder(val: string): void;
    protected onReadOnlyChanged(): void;
    onSurveyLoad(): void;
    localeChanged(): void;
    setSurveyImpl(value: ISurveyImpl, isLight?: boolean): void;
    protected calcRenderedPlaceholder(): void;
    protected hasPlaceholder(): boolean;
    protected setNewValue(newValue: any): void;
    protected setQuestionValue(newValue: any, updateIsAnswered?: boolean): void;
    protected convertToCorrectValue(val: any): any;
    protected getValueSeparator(): string;
    protected getControlCssClassBuilder(): CssClassBuilder;
    getControlClass(): string;
    readonly isNewA11yStructure: boolean;
    onKeyDownPreprocess: (event: any) => void;
}
