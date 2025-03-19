import { QuestionNonValue } from "./questionnonvalue";
import { LocalizableString } from "./localizablestring";
/**
  * A class that describes the HTML question type. Unlike other question types, HTML cannot have a title or value.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/questiontype-html/ (linkStyle))
 */
export declare class QuestionHtmlModel extends QuestionNonValue {
    ignoreHtmlProgressing: boolean;
    constructor(name: string);
    getType(): string;
    get isCompositeQuestion(): boolean;
    getProcessedText(text: string): string;
    /**
     * HTML markup to display.
     *
     * > IMPORTANT: If you get the markup from a third party, ensure that it does not contain malicious code.
     */
    get html(): string;
    set html(val: string);
    get locHtml(): LocalizableString;
    get processedHtml(): string;
    private processHtml;
    get isNewA11yStructure(): boolean;
    get renderCssRoot(): string;
}
