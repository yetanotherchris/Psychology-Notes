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
 * A base class for all classes that implement validators.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
 */
export declare class SurveyValidator extends Base {
    errorOwner: ISurveyErrorOwner;
    onAsyncCompleted: (result: ValidatorResult) => void;
    constructor();
    readonly isValidator: boolean;
    getSurvey(live?: boolean): ISurvey;
    /*
    * An error message to display when a value fails validation.
    */
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
 * A class that implements a validator for numeric values.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
 */
export declare class NumericValidator extends SurveyValidator {
    constructor(minValue?: number, maxValue?: number);
    getType(): string;
    validate(value: any, name?: string, values?: any, properties?: any): ValidatorResult;
    protected getDefaultErrorText(name: string): string;
    /*
    * A minimum allowed numeric value.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
    */
    minValue: number;
    /*
    * A maximum allowed numeric value.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
    */
    maxValue: number;
}
/**
 * A class that implements a validator for text values.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
 */
export declare class TextValidator extends SurveyValidator {
    constructor();
    getType(): string;
    validate(value: any, name?: string, values?: any, properties?: any): ValidatorResult;
    protected getDefaultErrorText(name: string): string;
    /*
    * The minimum length of a text value measured in characters.
    *
    * Default value: 0
    *
    * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
    */
    minLength: number;
    /*
    * The maximum length of a text value measured in characters.
    *
    * Default value: 0 (unlimited)
    *
    * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
    */
    maxLength: number;
    /*
    * Specifies whether a text value can include numerical digits.
    *
    * Default value: `true`
    */
    allowDigits: boolean;
}
/**
 * A class that implements answer count validation in the question types that can have multiple values (for instance, [Checkboxes](https://surveyjs.io/form-library/documentation/api-reference/checkbox-question-model)).
 *
 * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
 */
export declare class AnswerCountValidator extends SurveyValidator {
    constructor(minCount?: number, maxCount?: number);
    getType(): string;
    validate(value: any, name?: string, values?: any, properties?: any): ValidatorResult;
    protected getDefaultErrorText(name: string): string;
    /*
    * A minimum number of selected answers.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
    */
    minCount: number;
    /*
    * A maximum number of selected answers.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
    */
    maxCount: number;
}
/**
 * A class that implements validation using regular expressions.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
 */
export declare class RegexValidator extends SurveyValidator {
    constructor(regex?: string);
    getType(): string;
    validate(value: any, name?: string, values?: any, properties?: any): ValidatorResult;
    private hasError;
    /*
    * A regular expression used to validate values.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
    */
    regex: string;
    /*
    * Specifies whether uppercase and lowercase letters must be treated as distinct or equivalent when validating values.
    *
    * Default value: `false` (uppercase and lowercase letters are treated as distinct)
    */
    caseInsensitive: boolean;
    insensitive: boolean;
    private createRegExp;
}
/**
 * A class that implements a validator for e-mail addresses.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
 */
export declare class EmailValidator extends SurveyValidator {
    private re;
    constructor();
    getType(): string;
    validate(value: any, name?: string, values?: any, properties?: any): ValidatorResult;
    protected getDefaultErrorText(name: string): string;
}
/**
 * A class that implements validation using [expressions](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#expressions).
 *
 * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
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
    private ensureConditionRunner;
    /*
    * A Boolean [expression](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#expressions). If it evaluates to `false`, validation fails.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/javascript-form-validation/ (linkStyle))
    */
    expression: string;
}
