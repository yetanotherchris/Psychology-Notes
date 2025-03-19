import { InputMaskNumeric } from "./mask_numeric";
import { IMaskedInputResult, ITextInputParams } from "./mask_utils";
/**
 * A class that describes an input mask of the `"currency"` [`maskType`](https://surveyjs.io/form-library/documentation/api-reference/text-entry-question-model#maskType).
 *
 * The following code shows how to specify the properties of this class within a survey JSON schema:
 *
 * ```js
 * const surveyJson = {
 *   "elements": [{
 *     "name": "textquestion1"
 *     "type": "text",
 *     "maskType": "currency",
 *     "maskSettings": {
 *       // Specify the properties of a currency input mask here
 *     }
 *   }]
 * }
 * ```
 *
 * [View Demo](https://surveyjs.io/form-library/examples/masked-input-fields/ (linkStyle))
 */
export declare class InputMaskCurrency extends InputMaskNumeric {
    /**
     * One or several symbols to be displayed before the currency value.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/masked-input-fields/ (linkStyle))
     * @see suffix
     */
    prefix: string;
    /**
     * One or several symbols to be displayed after the currency value.
     * @see prefix
     */
    suffix: string;
    getType(): string;
    private wrapText;
    unwrapInputArgs(args: ITextInputParams): void;
    processInput(args: ITextInputParams): IMaskedInputResult;
    getMaskedValue(src: any): string;
}
