import { InputMaskPattern } from "./mask_pattern";
import { IMaskedInputResult, ITextInputParams } from "./mask_utils";
declare type DateTimeMaskLexemType = "month" | "day" | "year" | "hour" | "minute" | "second" | "timeMarker" | "separator";
export interface IDateTimeMaskLexem {
    type: DateTimeMaskLexemType;
    value: any;
    count: number;
    maxCount: number;
    upperCase: boolean;
}
interface IDateTimeComposition {
    day: number;
    month: number;
    year: number;
    hour?: number;
    minute?: number;
    second?: number;
    timeMarker?: string;
    min?: Date;
    max?: Date;
}
export declare function getDateTimeLexems(pattern: string): Array<IDateTimeMaskLexem>;
/**
 * A class that describes an input mask of the `"datetime"` [`maskType`](https://surveyjs.io/form-library/documentation/api-reference/text-entry-question-model#maskType).
 *
 * The following code shows how to specify the properties of this class within a survey JSON schema:
 *
 * ```js
 * const surveyJson = {
 *   "elements": [{
 *     "name": "textquestion1"
 *     "type": "text",
 *     "maskType": "datetime",
 *     "maskSettings": {
 *       // Specify the properties of a date-time input mask here
 *     }
 *   }]
 * }
 * ```
 *
 * [View Demo](https://surveyjs.io/form-library/examples/masked-input-fields/ (linkStyle))
 */
export declare class InputMaskDateTime extends InputMaskPattern {
    private defaultDate;
    private turnOfTheCentury;
    private twelve;
    private lexems;
    private inputDateTimeData;
    private validBeginningOfNumbers;
    /**
     * A minimum date and time value that respondents can enter.
     * @see max
     */
    min: string;
    /**
     * A maximum date and time value that respondents can enter.
     * @see min
     */
    max: string;
    get hasDatePart(): boolean;
    get hasTimePart(): boolean;
    private get is12Hours();
    getType(): string;
    protected updateLiterals(): void;
    private leaveOnlyNumbers;
    private getMaskedStrFromISO;
    private initInputDateTimeData;
    getISO_8601Format(dateTime: IDateTimeComposition): string;
    private isYearValid;
    private createIDateTimeCompositionWithDefaults;
    private getMaxDateForMonth;
    private isDateValid;
    private getPlaceholder;
    private isDateValid12;
    private updateTimeMarkerInputDateTimeData;
    private updateInputDateTimeData;
    private checkValidationDateTimePart;
    private getCorrectDatePartFormat;
    private createIDateTimeComposition;
    private parseTwoDigitYear;
    private getFormatedString;
    private cleanTimeMarker;
    private setInputDateTimeData;
    _getMaskedValue(src: string, matchWholeMask?: boolean): string;
    private getParts;
    getUnmaskedValue(src: string): any;
    getMaskedValue(src: string): string;
    processInput(args: ITextInputParams): IMaskedInputResult;
}
export {};
