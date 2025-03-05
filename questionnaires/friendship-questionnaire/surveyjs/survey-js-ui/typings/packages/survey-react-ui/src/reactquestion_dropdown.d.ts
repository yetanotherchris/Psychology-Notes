import * as React from "react";
import { Question } from "survey-core";
import { SurveyQuestionDropdownBase } from "./dropdown-base";
export declare class SurveyQuestionDropdown extends SurveyQuestionDropdownBase<Question> {
    constructor(props: any);
    protected renderElement(): React.JSX.Element;
}
