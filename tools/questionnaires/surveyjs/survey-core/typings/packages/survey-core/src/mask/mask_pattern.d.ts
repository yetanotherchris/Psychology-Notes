import { InputMaskBase } from "./mask_base";
import { IMaskedInputResult, ITextInputParams } from "./mask_utils";
import { ILoadFromJSONOptions } from "../base-interfaces";
export interface IMaskLiteral {
    type: "const" | "regex" | "fixed";
    value: any;
}
export declare function getLiterals(pattern: string): Array<IMaskLiteral>;
export declare function getMaskedValueByPattern(src: string, pattern: string | Array<IMaskLiteral>, matchWholeMask: boolean): string;
export declare function getUnmaskedValueByPattern(str: string, pattern: string | Array<IMaskLiteral>, matchWholeMask: boolean, skipFixedChar?: boolean): string;
/**
 * A class that describes an input mask of the `"pattern"` [`maskType`](https://surveyjs.io/form-library/documentation/api-reference/text-entry-question-model#maskType).
 *
 * The following code shows how to specify the properties of this class within a survey JSON schema:
 *
 * ```js
 * const surveyJson = {
 *   "elements": [{
 *     "name": "textquestion1"
 *     "type": "text",
 *     "maskType": "pattern",
 *     "maskSettings": {
 *       // Specify the properties of a pattern input mask here
 *     }
 *   }]
 * }
 * ```
 *
 * [View Demo](https://surveyjs.io/form-library/examples/masked-input-fields/ (linkStyle))
 */
export declare class InputMaskPattern extends InputMaskBase {
    private literals;
    /**
     * A pattern for the input value.
     *
     * If you set the [`maskType`](https://surveyjs.io/form-library/documentation/api-reference/text-entry-question-model#maskType) to `"pattern"`, the mask can contain string literals and the following placeholders:
     *
     * - `9` - A digit.
     * - `a` - An upper- or lower-case letter.
     * - `#` - A digit or an upper- or lower-case letter.
     *
     * Use backslash `\` to escape a character.
     *
     * Example: `+1(999)-999-99-99`
     *
     * If you set the [`maskType`](https://surveyjs.io/form-library/documentation/api-reference/text-entry-question-model#maskType) to `"datetime"`, the mask can contain separator characters and the following placeholders:
     *
     * - `m` - Month number.
     * - `mm` - Month number, with leading zero for single-digit values.
     * - `d` - Day of the month.
     * - `dd` - Day of the month, with leading zero for single-digit values.
     * - `yy` - Last two digits of the year.
     * - `yyyy` - A four-digit year.
     * - `H` - Hours in 24-hour format.
     * - `HH` - Hours in 24-hour format, with leading zero for single-digit values.
     * - `h` - Hours in 12-hour format.
     * - `hh` - Hours in 12-hour format, with leading zero for single-digit values.
     * - `MM` - Minutes.
     * - `ss` - Seconds.
     * - `TT` - 12-hour clock period in upper case (AM/PM).
     * - `tt` - 12-hour clock period in lower case (am/pm).
     *
     * Example: `mm/dd/yyyy HH:MM:ss`
     *
     * [View Demo](https://surveyjs.io/form-library/examples/masked-input-fields/ (linkStyle))
     * @see [settings.maskSettings](https://surveyjs.io/form-library/documentation/api-reference/settings#maskSettings)
     */
    pattern: string;
    protected updateLiterals(): void;
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    getType(): string;
    fromJSON(json: any, options?: ILoadFromJSONOptions): void;
    _getMaskedValue(src: string, matchWholeMask?: boolean): string;
    _getUnmaskedValue(src: string, matchWholeMask?: boolean): string;
    processInput(args: ITextInputParams): IMaskedInputResult;
    getMaskedValue(src: any): string;
    getUnmaskedValue(src: string): any;
}
