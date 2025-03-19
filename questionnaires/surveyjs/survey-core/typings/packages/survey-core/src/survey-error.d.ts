import { ISurveyErrorOwner } from "./base-interfaces";
import { LocalizableString } from "./localizablestring";
export declare class SurveyError {
    text: string;
    protected errorOwner: ISurveyErrorOwner;
    private locTextValue;
    visible: boolean;
    constructor(text?: string, errorOwner?: ISurveyErrorOwner);
    equals(error: SurveyError): boolean;
    get locText(): LocalizableString;
    getText(): string;
    getErrorType(): string;
    protected getDefaultText(): string;
    protected getLocale(): string;
    protected getLocalizationString(locStrName: string): string;
    onUpdateErrorTextCallback: (error: SurveyError) => void;
    updateText(): void;
}
