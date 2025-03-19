import { InputMaskBase } from "./mask_base";
import { IMaskedInputResult, ITextInputParams } from "./mask_utils";
interface INumericalComposition {
    integralPart: string;
    fractionalPart: string;
    isNegative?: boolean;
    hasDecimalSeparator?: boolean;
}
export declare function splitString(str: string, reverse?: boolean, n?: number): Array<string>;
/**
 * A class that describes an input mask of the `"numeric"` [`maskType`](https://surveyjs.io/form-library/documentation/api-reference/text-entry-question-model#maskType).
 *
 * The following code shows how to specify the properties of this class within a survey JSON schema:
 *
 * ```js
 * const surveyJson = {
 *   "elements": [{
 *     "name": "textquestion1"
 *     "type": "text",
 *     "maskType": "numeric",
 *     "maskSettings": {
 *       // Specify the properties of a numeric input mask here
 *     }
 *   }]
 * }
 * ```
 *
 * [View Demo](https://surveyjs.io/form-library/examples/masked-input-fields/ (linkStyle))
 */
export declare class InputMaskNumeric extends InputMaskBase {
    /**
     * Specifies whether respondents can enter negative values.
     *
     * Default value: `true`
     * @see min
     * @see max
     */
    allowNegativeValues: boolean;
    /**
     * A symbol used to separate the fractional part from the integer part of a displayed number.
     *
     * Default value: `"."`
     * @see precision
     * @see thousandsSeparator
     */
    decimalSeparator: string;
    /**
     * Limits how many digits to retain after the decimal point for a displayed number.
     *
     * Default value: 2
     *
     * [View Demo](https://surveyjs.io/form-library/examples/masked-input-fields/ (linkStyle))
     * @see decimalSeparator
     */
    precision: number;
    /**
     * A symbol used to separate the digits of a large number into groups of three.
     *
     * Default value: `","`
     * @see decimalSeparator
     */
    thousandsSeparator: string;
    /**
     * A minimum value that respondents can enter.
     * @see max
     * @see allowNegativeValues
     */
    min: number;
    /**
     * A maximum value that respondents can enter.
     * @see min
     * @see allowNegativeValues
     */
    max: number;
    private calccaretPosition;
    private numericalCompositionIsEmpty;
    displayNumber(parsedNumber: INumericalComposition, insertThousandsSeparator?: boolean, matchWholeMask?: boolean): string;
    convertNumber(parsedNumber: INumericalComposition): number;
    validateNumber(number: INumericalComposition, matchWholeMask: boolean): boolean;
    parseNumber(src: string): INumericalComposition;
    getNumberMaskedValue(src: string, matchWholeMask?: boolean): string;
    private getNumberUnmaskedValue;
    getTextAlignment(): "left" | "right" | "auto";
    getMaskedValue(src: any): string;
    getUnmaskedValue(src: string): any;
    processInput(args: ITextInputParams): IMaskedInputResult;
    getType(): string;
    protected isPropertyEmpty(value: any): boolean;
}
export {};
