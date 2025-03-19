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
    text: string;
    readonly isValidateAllValues: boolean;
    readonly locText: LocalizableString;
    protected getErrorText(name: string): string;
    protected getDefaultErrorText(name: string): string;
    validate(value: any, name?: string, values?: any, properties?: any): ValidatorResult;
    readonly isRunning: boolean;
    readonly isAsync: boolean;
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
    /*
    * The minValue property.
    */
    minValue: number;
    /*
    * The maxValue property.
    */
    maxValue: number;
}
/**
 * Validate text values.
 */
export declare class TextValidator extends SurveyValidator {
    constructor();
    getType(): string;
    validate(value: any, name?: string, values?: any, properties?: any): ValidatorResult;
    protected getDefaultErrorText(name: string): string;
    /*
    * The minLength property.
    */
    minLength: number;
    /*
    * The maxLength property.
    */
    maxLength: number;
    /*
    * The allowDigits property.
    */
    allowDigits: boolean;
}
/**
 * Validates the number of answers.
 */
export declare class AnswerCountValidator extends SurveyValidator {
    constructor(minCount?: number, maxCount?: number);
    getType(): string;
    validate(value: any, name?: string, values?: any, properties?: any): ValidatorResult;
    protected getDefaultErrorText(name: string): string;
    /*
    * The minCount property.
    */
    minCount: number;
    /*
    * The maxCount property.
    */
    maxCount: number;
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
    /*
    * The regex property.
    */
    regex: string;
    insensitive: boolean;
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
    readonly isValidateAllValues: boolean;
    readonly isAsync: boolean;
    readonly isRunning: boolean;
    validate(value: any, name?: string, values?: any, properties?: any): ValidatorResult;
    protected generateError(res: boolean, value: any, name: string): ValidatorResult;
    protected getDefaultErrorText(name: string): string;
    protected ensureConditionRunner(): boolean;
    /*
    * The expression property.
    */
    expression: string;
}
