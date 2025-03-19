/// <reference types="react" />
import { SurveyQuestionUncontrolledElement } from "./reactquestion_element";
import { QuestionTextModel } from "survey-core";
export declare class SurveyQuestionText extends SurveyQuestionUncontrolledElement<QuestionTextModel> {
    constructor(props: any);
    protected renderInput(): JSX.Element;
    protected renderElement(): JSX.Element;
    protected setValueCore(newValue: any): void;
    protected getValueCore(): any;
    private renderDataList;
}
