/// <reference types="react" />
import { QuestionRatingModel } from "survey-core";
import { SurveyQuestionDropdownBase } from "./dropdown-base";
export * from "./components/rating/rating-dropdown-item";
export declare class SurveyQuestionRatingDropdown extends SurveyQuestionDropdownBase<QuestionRatingModel> {
    constructor(props: any);
    protected renderElement(): JSX.Element;
}
