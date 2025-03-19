import * as React from "react";
import { SurveyQuestionUncontrolledElement } from "./reactquestion_element";
import { QuestionTextModel } from "survey-core";
export declare class SurveyQuestionText extends SurveyQuestionUncontrolledElement<QuestionTextModel> {
    constructor(props: any);
    protected renderInput(): React.JSX.Element;
    protected renderElement(): React.JSX.Element;
    protected setValueCore(newValue: any): void;
    protected getValueCore(): any;
    private renderDataList;
}
