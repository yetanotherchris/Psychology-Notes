/// <reference types="react" />
import { SurveyQuestionElementBase } from "./reactquestion_element";
import { QuestionRatingModel } from "survey-core";
export declare class SurveyQuestionRating extends SurveyQuestionElementBase {
    constructor(props: any);
    protected get question(): QuestionRatingModel;
    handleOnClick(event: any): void;
    protected renderItem(item: any, index: Number): JSX.Element;
    protected renderElement(): JSX.Element;
}
