import { Base } from "./base";
import { ISurveyErrorOwner, ISurvey } from "./base-interfaces";
import { SurveyError } from "./survey-error";
import { LocalizableString } from "./localizablestring";
export declare class ValidatorResult {
    value: any;
    error: SurveyError;
    constructor(value: any, error?: SurveyError);
}
/**
 * Base SurveyJS validator class.
 */
export declare class SurveyValidator extends Base {
    errorOwner: ISurveyErrorOwner;
    onAsyncCompleted: (result: ValidatorResult) => void;
    constructor();
    getSurvey(live?: boolean): ISurvey;
    get text(): string;
    set text(value: string);
    get isValidateAllValues(): boolean;
    get locText(): LocalizableString;
    protected getErrorText(name: string): string;
    protected getDefaultErrorText(name: string): string;
    validate(value: any, name?: string, values?: any, properties?: any): ValidatorResult;
    get isRunning(): boolean;
    get isAsync(): boolean;
    getLocale(): string;
    getMarkdownHtml(text: string, name: string): string;
    getRenderer(name: string): string;
    getRendererContext(locStr: LocalizableString): any;
    getProcessedText(text: string): string;
    protected createCustomError(name: string): SurveyError;
    toString(): string;
}
export interface IValidatorOwner {
    getValidators(): Array<SurveyValidator>;
    validatedValue: any;
    getValidatorTitle(): string;
    getDataFilteredValues(): any;
    getDataFilteredProperties(): any;
}
export declare class ValidatorRunner {
    private asyncValidators;
    onAsyncCompleted: (errors: Array<SurveyError>) => void;
    run(owner: IValidatorOwner): Array<SurveyError>;
    private prepareAsyncValidators;
}
/**
 * Validate numeric values.
 */
export declare class NumericValidator extends SurveyValidator {
    constructor(minValue?: number, maxValue?: number);
    getType(): string;
    validate(value: any, name?: string, values?: any, properties?: any): ValidatorResult;
    protected getDefaultErrorText(name: string): string;
    /**
     * The minValue property.
     */
    get minValue(): number;
    set minValue(val: number);
    /**
     * The maxValue property.
     */
    get maxValue(): number;
    set maxValue(val: number);
}
/**
 * Validate text values.
 */
export declare class TextValidator extends SurveyValidator {
    constructor();
    getType(): string;
    validate(value: any, name?: string, values?: any, properties?: any): ValidatorResult;
    protected getDefaultErrorText(name: string): string;
    /**
     * The minLength property.
     */
    get minLength(): number;
    set minLength(val: number);
    /**
     * The maxLength property.
     */
    get maxLength(): number;
    set maxLength(val: number);
    /**
     * The allowDigits property.
     */
    get allowDigits(): boolean;
    set allowDigits(val: boolean);
}
/**
 * Validates the number of answers.
 */
export declare class AnswerCountValidator extends SurveyValidator {
    constructor(minCount?: number, maxCount?: number);
    getType(): string;
    validate(value: any, name?: string, values?: any, properties?: any): ValidatorResult;
    protected getDefaultErrorText(name: string): string;
    /**
     * The minCount property.
     */
    get minCount(): number;
    set minCount(val: number);
    /**
     * The maxCount property.
     */
    get maxCount(): number;
    set maxCount(val: number);
}
/**
 * Use it to validate the text by regular expressions.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
 */
export declare class RegexValidator extends SurveyValidator {
    constructor(regex?: string);
    getType(): string;
    validate(value: any, name?: string, values?: any, properties?: any): ValidatorResult;
    private hasError;
    /**
     * The regex property.
     */
    get regex(): string;
    set regex(val: string);
    get insensitive(): boolean;
    set insensitive(val: boolean);
    private createRegExp;
}
/**
 * Validate e-mail address in the text input
 */
export declare class EmailValidator extends SurveyValidator {
    private re;
    constructor();
    getType(): string;
    validate(value: any, name?: string, values?: any, properties?: any): ValidatorResult;
    protected getDefaultErrorText(name: string): string;
}
/**
 * Show error if expression returns false
 */
export declare class ExpressionValidator extends SurveyValidator {
    private conditionRunner;
    private isRunningValue;
    constructor(expression?: string);
    getType(): string;
    get isValidateAllValues(): boolean;
    get isAsync(): boolean;
    get isRunning(): boolean;
    validate(value: any, name?: string, values?: any, properties?: any): ValidatorResult;
    protected generateError(res: boolean, value: any, name: string): ValidatorResult;
    protected getDefaultErrorText(name: string): string;
    protected ensureConditionRunner(): boolean;
    /**
     * The expression property.
     */
    get expression(): string;
    set expression(val: string);
}
