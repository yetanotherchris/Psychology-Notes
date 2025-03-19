import { Question, IConditionObject } from "./question";
import { SurveyError } from "./survey-error";
/**
 * A base class for question types that cannot have a value ([Html](https://surveyjs.io/form-library/documentation/questionhtmlmodel), [Image](https://surveyjs.io/form-library/documentation/questionimagemodel)).
 *
 * This class does not implement new functionality&mdash;it only redefines default values of certain properties inherited from the [`Question`](https://surveyjs.io/form-library/documentation/question) class.
 */
export declare class QuestionNonValue extends Question {
    constructor(name: string);
    getType(): string;
    readonly hasInput: boolean;
    readonly hasTitle: boolean;
    getTitleLocation(): string;
    readonly hasComment: boolean;
    hasErrors(fireCallback?: boolean, rec?: any): boolean;
    getAllErrors(): Array<SurveyError>;
    supportGoNextPageAutomatic(): boolean;
    addConditionObjectsByContext(objects: Array<IConditionObject>, context: any): void;
    getConditionJson(operator?: string, path?: string): any;
    readonly ariaRole: string;
    readonly ariaRequired: any;
}
