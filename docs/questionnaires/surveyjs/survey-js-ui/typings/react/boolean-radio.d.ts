/// <reference types="react" />
import { SurveyQuestionBoolean } from "./boolean";
export declare class SurveyQuestionBooleanRadio extends SurveyQuestionBoolean {
    constructor(props: any);
    private renderRadioItem;
    handleOnChange: (event: any) => void;
    protected renderElement(): JSX.Element;
}
