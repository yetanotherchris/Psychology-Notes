import * as React from "react";
import { SurveyQuestionElementBase } from "./reactquestion_element";
import { QuestionExpressionModel } from "survey-core";
export declare class SurveyQuestionExpression extends SurveyQuestionElementBase {
    constructor(props: any);
    protected get question(): QuestionExpressionModel;
    protected renderElement(): React.JSX.Element;
}
