import { SurveyError } from "./survey-error";
import { ISurveyErrorOwner } from "./base-interfaces";
export declare class AnswerRequiredError extends SurveyError {
    text: string;
    constructor(text?: string, errorOwner?: ISurveyErrorOwner);
    getErrorType(): string;
    protected getDefaultText(): string;
}
export declare class OneAnswerRequiredError extends SurveyError {
    text: string;
    constructor(text?: string, errorOwner?: ISurveyErrorOwner);
    getErrorType(): string;
    protected getDefaultText(): string;
}
export declare class RequreNumericError extends SurveyError {
    text: string;
    constructor(text?: string, errorOwner?: ISurveyErrorOwner);
    getErrorType(): string;
    protected getDefaultText(): string;
}
export declare class ExceedSizeError extends SurveyError {
    private maxSize;
    constructor(maxSize: number, errorOwner?: ISurveyErrorOwner);
    getErrorType(): string;
    getDefaultText(): string;
    private getTextSize;
}
export declare class WebRequestError extends SurveyError {
    status: string;
    response: string;
    constructor(status: string, response: string, errorOwner?: ISurveyErrorOwner);
    getErrorType(): string;
    protected getDefaultText(): string;
}
export declare class WebRequestEmptyError extends SurveyError {
    text: string;
    constructor(text: string, errorOwner?: ISurveyErrorOwner);
    getErrorType(): string;
    protected getDefaultText(): string;
}
export declare class OtherEmptyError extends SurveyError {
    text: string;
    constructor(text: string, errorOwner?: ISurveyErrorOwner);
    getErrorType(): string;
    protected getDefaultText(): string;
}
export declare class UploadingFileError extends SurveyError {
    text: string;
    constructor(text: string, errorOwner?: ISurveyErrorOwner);
    getErrorType(): string;
    protected getDefaultText(): string;
}
export declare class RequiredInAllRowsError extends SurveyError {
    text: string;
    constructor(text: string, errorOwner?: ISurveyErrorOwner);
    getErrorType(): string;
    protected getDefaultText(): string;
}
export declare class EachRowUniqueError extends SurveyError {
    text: string;
    constructor(text: string, errorOwner?: ISurveyErrorOwner);
    getErrorType(): string;
    protected getDefaultText(): string;
}
export declare class MinRowCountError extends SurveyError {
    minRowCount: number;
    constructor(minRowCount: number, errorOwner?: ISurveyErrorOwner);
    getErrorType(): string;
    protected getDefaultText(): string;
}
export declare class KeyDuplicationError extends SurveyError {
    text: string;
    constructor(text: string, errorOwner?: ISurveyErrorOwner);
    getErrorType(): string;
    protected getDefaultText(): string;
}
export declare class CustomError extends SurveyError {
    text: string;
    constructor(text: string, errorOwner?: ISurveyErrorOwner);
    getErrorType(): string;
}
