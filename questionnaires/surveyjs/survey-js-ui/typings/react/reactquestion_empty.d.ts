/// <reference types="react" />
import { SurveyQuestionElementBase } from "./reactquestion_element";
import { QuestionEmptyModel } from "survey-core";
export declare class SurveyQuestionEmpty extends SurveyQuestionElementBase {
    constructor(props: any);
    protected get question(): QuestionEmptyModel;
    protected renderElement(): JSX.Element;
}
