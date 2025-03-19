import * as React from "react";
import { SurveyQuestionElementBase } from "./reactquestion_element";
import { QuestionRatingModel } from "survey-core";
export declare class SurveyQuestionRating extends SurveyQuestionElementBase {
    constructor(props: any);
    protected get question(): QuestionRatingModel;
    handleOnClick(event: any): void;
    protected renderItem(item: any, index: Number): React.JSX.Element;
    protected renderElement(): React.JSX.Element;
}
